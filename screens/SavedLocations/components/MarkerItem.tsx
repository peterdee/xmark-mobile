import React, { memo } from 'react';
import { Pressable, Text } from 'react-native';

import styles from '../styles';

interface MarkerItemProps {
  handleMarkerClick: (id: string) => void;
  id: number | string;
  latitude: number | string;
  longitude: number | string;
  title: string;
}

const MarkerItem = (props: MarkerItemProps): React.ReactElement => {
  const {
    handleMarkerClick,
    id,
    latitude,
    longitude,
    title,
  } = props;

  const handleClick = (): void => handleMarkerClick(String(id));

  return (
    <Pressable
      onPress={handleClick}
      style={styles.markerItemWrap}
    >
      <Text style={styles.markerItemTitle}>
        { title }
      </Text>
      <Text style={styles.markerItemSubtitle}>
        { `${latitude} lat, ${longitude} long` }
      </Text>
    </Pressable>
  );
};

export default memo(MarkerItem);
