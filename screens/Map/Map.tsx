import React, {
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  getCurrentPositionAsync,
  getLastKnownPositionAsync,
  LocationObject,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import { useIsFocused } from '@react-navigation/native';
import { View } from 'react-native';

import { Coordinates, Marker as MarkerInterface } from './types';
import { getItem, setItem, storeKeys } from '../../utilities/store';
import Maps from '../../components/Maps';
import styles from './styles';
import BigButton from '../../components/BigButton';

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
      <Maps
        mapStyle={styles.map}
        markers={markers}
        region={location && location.coords ? location.coords : { latitude: 0, longitude: 0 }}
        showDescription
        showTitle
        showUserPosition
      />
      <BigButton
        buttonStyle={styles.button}
        onPress={handlePress}
        text="Save current location"
      />
    </View>
  );
};

export default memo(Map);
