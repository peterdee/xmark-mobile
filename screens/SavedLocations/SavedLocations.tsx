import React, {
  memo,
  useEffect,
  useState,
} from 'react';
import { View } from 'react-native';
import { getItem, storeKeys } from '../../utilities/store';

import { Marker } from '../Map/types';
import MarkerItem from './components/MarkerItem';
import SavedLocationsNotFound from './components/SavedLocationsNotFound';
import styles from './styles';

const SavedLocations = () => {
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(
    () => {
      (async () => {
        const storedMarkers = await getItem<Marker[]>(storeKeys.markers);
        if (storedMarkers && storedMarkers.length > 0) {
          setMarkers(storedMarkers);
        }
      })();
    },
    [],
  );

  return (
    <View style={styles.container}>
      { markers.length === 0 && (<SavedLocationsNotFound />) }
      { markers.length > 0 && markers.map((marker: Marker): React.ReactElement => (
        <MarkerItem
          description={marker.description}
          key={marker.key}
          latitude={marker.coordinate.latitude}
          longitude={marker.coordinate.longitude}
          title={marker.title}
        />
      )) }
    </View>
  );
};

export default memo(SavedLocations);
