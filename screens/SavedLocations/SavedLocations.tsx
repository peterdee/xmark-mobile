import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';

import colors from '../../constants/styles';
import {
  getItem,
  removeItem,
  setItem,
  storeKeys,
} from '../../utilities/store';
import LocationModal from './components/LocationModal';
import { Marker } from '../Map/types';
import MarkerItem from './components/MarkerItem';
import MenuModal from './components/MenuModal';
import ModalWrap from '../../components/ModalWrap';
import { RootStackParamList } from '../../navigation/types';
import SavedLocationsNotFound from './components/SavedLocationsNotFound';
import styles from './styles';

const SavedLocations = (
  { navigation }: StackScreenProps<RootStackParamList, 'Root'>,
): React.ReactElement => {
  const [editLocation, setEditLocation] = useState<boolean>(false);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [showLocation, setShowLocation] = useState<Marker | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const isFocused = useIsFocused();

  const handleMenuClick = (): void => setShowMenu((state) => !state);

  useLayoutEffect(
    (): void => {
      navigation.setOptions({
        headerRight: () => (
          <Pressable
            onPress={handleMenuClick}
            style={styles.menuIcon}
          >
            <MaterialCommunityIcons
              color={colors.accent}
              name="dots-vertical"
              size={24}
            />
          </Pressable>
        ),
      });
    },
    [navigation],
  );

  useEffect(
    () => {
      (async () => {
        const storedMarkers = await getItem<Marker[]>(storeKeys.markers);
        if (storedMarkers && storedMarkers.length > 0) {
          setMarkers(storedMarkers);
        }
      })();
    },
    [isFocused],
  );

  const handleClearLocations = useCallback(
    async (): Promise<void> => {
      await removeItem(storeKeys.markers);
      setMarkers([]);
      return setShowMenu(false);
    },
    [markers],
  );

  const handleCloseLocationModal = (): void => setShowLocation(null);

  const handleDeleteMarker = async (id: string): Promise<void> => {
    const newMarkers = markers.filter((marker: Marker): boolean => String(marker.key) !== id);
    setMarkers(newMarkers);
    await setItem(storeKeys.markers, newMarkers);
    return handleCloseLocationModal();
  };

  const handleEditLocation = () => setEditLocation((state) => !state);

  const handleMarkerClick = (id: string): void => {
    const [marker] = markers.filter((item: Marker): boolean => String(item.key) === id);
    return setShowLocation(marker);
  };

  const handleSaveData = async (marker: Marker): Promise<void> => {
    const updatedMarkers: Marker[] = markers.reduce(
      (array: Marker[], item: Marker) => {
        if (item.key === marker.key) {
          array.push(marker);
          return array;
        }
        array.push(item);
        return array;
      },
      [],
    );

    setMarkers(updatedMarkers);
    await setItem<Marker[]>(storeKeys.markers, updatedMarkers);
    return setEditLocation(false);
  };

  return (
    <View style={styles.container}>
      { showMenu && (
        <ModalWrap visible={showMenu}>
          <MenuModal
            handleCloseMenu={handleMenuClick}
            handleRemoveLocations={handleClearLocations}
          />
        </ModalWrap>
      ) }
      { showLocation && (
        <ModalWrap visible={!!showLocation}>
          <LocationModal
            editLocation={editLocation}
            handleCloseModal={handleCloseLocationModal}
            handleDeleteMarker={handleDeleteMarker}
            handleEditLocation={handleEditLocation}
            handleSaveData={handleSaveData}
            marker={showLocation}
          />
        </ModalWrap>
      ) }
      { markers.length === 0 && (
        <SavedLocationsNotFound />
      ) }
      { markers.length > 0 && (
        <FlatList
          contentContainerStyle={styles.list}
          data={markers}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }): React.ReactElement => (
            <MarkerItem
              handleMarkerClick={handleMarkerClick}
              id={item.key}
              key={item.key}
              latitude={item.coordinate.latitude}
              longitude={item.coordinate.longitude}
              title={item.title}
            />
          )}
        />
      ) }
    </View>
  );
};

export default memo(SavedLocations);
