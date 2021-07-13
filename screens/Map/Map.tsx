import React, {
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Pressable,
  Text,
  View,
} from 'react-native';
import {
  getCurrentPositionAsync,
  getLastKnownPositionAsync,
  LocationObject,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { useIsFocused } from '@react-navigation/native';

import { Coordinates, Marker as MarkerInterface } from './types';
import { COORDINATES_DELTA } from '../../constants';
import { getItem, setItem, storeKeys } from '../../utilities/store';
import styles from './styles';

const Map = (): React.ReactElement => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [markers, setMarkers] = useState<MarkerInterface[]>([]);

  const isFocused = useIsFocused();

  useEffect(
    (): void => {
      (async (): Promise<void> => {
        const storedMarkers = await getItem<MarkerInterface[]>(storeKeys.markers);
        if (storedMarkers && storedMarkers.length > 0) {
          setMarkers(storedMarkers);
        }

        const { status = '' } = await requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const locationData: LocationObject = await getCurrentPositionAsync({});
          return setLocation(locationData);
        }
        const lastLocation = await getLastKnownPositionAsync();
        if (lastLocation) {
          return setLocation(lastLocation);
        }

        return setLocation(null);
      })();
    },
    [isFocused],
  );

  const handlePress = useCallback(
    async () => {
      if (location) {
        const { coords } = location;
        const existing: MarkerInterface[] = markers.filter(
          (
            { coordinate }: { coordinate: Coordinates },
          ): boolean => coordinate.latitude === coords.latitude
            && coordinate.longitude === coords.longitude,
        );
        if (existing.length === 0) {
          await setItem(
            storeKeys.markers,
            [
              ...markers,
              {
                key: Date.now(),
                coordinate: location.coords,
                title: 'My custom location',
                description: 'CUSTOM',
              },
            ],
          );
          setMarkers((state) => [...state, {
            key: Date.now(),
            coordinate: location.coords,
            title: 'My custom location',
            description: 'CUSTOMS',
          }]);
        }
      }
    },
    [location],
  );

  return (
    <View style={styles.container}>
      <MapView
        region={{
          ...(location && location.coords ? location.coords : { longitude: 0, latitude: 0 }),
          longitudeDelta: COORDINATES_DELTA,
          latitudeDelta: COORDINATES_DELTA,
        }}
        showsUserLocation
        style={styles.map}
      >
        { markers.map((marker) => (
          <Marker
            key={marker.key}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        )) }
      </MapView>
      <Pressable
        onPress={handlePress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Save current location
        </Text>
      </Pressable>
    </View>
  );
};

export default memo(Map);
