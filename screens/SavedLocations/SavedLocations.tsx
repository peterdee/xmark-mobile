import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  FlatList,
  Pressable,
  Text,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';

import colors from '../../constants/styles';
import { getItem, removeItem, storeKeys } from '../../utilities/store';
import { Marker } from '../Map/types';
import MarkerItem from './components/MarkerItem';
import { RootStackParamList } from '../../navigation/types';
import SavedLocationsNotFound from './components/SavedLocationsNotFound';
import styles from './styles';

const SavedLocations = (
  { navigation }: StackScreenProps<RootStackParamList, 'Root'>,
) => {
  const [markers, setMarkers] = useState<Marker[]>([]);
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

  const handleMarkerClick = (id: string): void => console.log('clicked', id);

  return (
    <View style={styles.container}>
      { showMenu && (
        <Pressable
          onPress={handleClearLocations}
        >
          <Text>
            Clear locations
          </Text>
        </Pressable>
      ) }
      { markers.length === 0 && !showMenu && (
        <SavedLocationsNotFound />
      ) }
      { markers.length > 0 && !showMenu && (
        <FlatList
          data={markers}
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
