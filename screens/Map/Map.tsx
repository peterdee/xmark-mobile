import React, {
  memo,
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
import {
  Coordinates,
  LocationData,
  Marker as MarkerInterface,
} from './types';
import { getItem, setItem, storeKeys } from '../../utilities/store';
import Maps from '../../components/Maps';
import ModalWrap from '../../components/ModalWrap';
import SaveLocationModal from './components/SaveLocationModal';
import styles from './styles';

const Map = (): React.ReactElement => {
  const [disableSave, setDisableSave] = useState<boolean>(false);
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

  const handleLocationChange = (): void => setDisableSave(false);

  const handleShowModal = (): void => setShowModal((state) => !state);

  const saveLocation = async (coordinates: Coordinates, data: LocationData) => {
    await setItem(
      storeKeys.markers,
      [
        ...markers,
        {
          coordinate: coordinates,
          description: data.description,
          key: Date.now(),
          title: data.title,
        },
      ],
    );
    setMarkers((state) => [...state, {
      coordinate: coordinates,
      description: data.description,
      key: Date.now(),
      title: data.title,
    }]);

    setDisableSave(true);
    return setShowModal(false);
  };

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
        onLocationChange={handleLocationChange}
        region={location && location.coords ? location.coords : { latitude: 0, longitude: 0 }}
        showDescription
        showTitle
        showUserPosition
      />
      <BigButton
        buttonStyle={styles.button}
        disabled={disableSave}
        onPress={handleShowModal}
        text="Save current location"
      />
    </View>
  );
};

export default memo(Map);
