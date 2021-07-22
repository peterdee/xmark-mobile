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

import BigButton from '../../components/BigButton';
import { Coordinates, LocationTextData, Marker as MarkerInterface } from './types';
import { getItem, setItem, storeKeys } from '../../utilities/store';
import Maps from '../../components/Maps';
import ModalWrap from '../../components/ModalWrap';
import SaveLocationModal from './components/SaveLocationModal';
import styles from './styles';

const Map = (): React.ReactElement => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [markers, setMarkers] = useState<MarkerInterface[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

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

  const saveLocation = useCallback(
    async (data: LocationTextData) => {
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

  const handleShowModal = (): void => setShowModal((state) => !state);

  return (
    <View style={styles.container}>
      <ModalWrap visible={showModal}>
        <SaveLocationModal
          coordinates={{
            latitude: location?.coords?.latitude || 0,
            longitude: location?.coords?.longitude || 0,
          }}
          handleCloseModal={handleShowModal}
          handleSaveLocation={saveLocation}
        />
      </ModalWrap>
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
        onPress={handleShowModal}
        text="Save current location"
      />
    </View>
  );
};

export default memo(Map);
