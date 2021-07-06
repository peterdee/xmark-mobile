import React, {
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
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

import colors from '../constants/Colors';
import { Coordinates, Marker as MarkerInterface } from './types';
import { getItem, setItem, storeKeys } from '../utilities/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    left: 'auto',
    right: 'auto',
    padding: colors.spacer,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.appText,
    color: colors.appText,
  },
  buttonText: {
    color: colors.appText,
  },
});

const Home = (): React.ReactElement => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [markers, setMarkers] = useState<MarkerInterface[]>([]);

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
    [],
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
          longitudeDelta: 0.04,
          latitudeDelta: 0.04,
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

export default memo(Home);
