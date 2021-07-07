import React, { memo } from 'react';
import { Text, View } from 'react-native';

interface MarkerItemProps {
  description: string;
  latitude: number | string;
  longitude: number | string;
  title: string;
}

const MarkerItem = (props: MarkerItemProps): React.ReactElement => {
  const {
    description,
    latitude,
    longitude,
    title,
  } = props;

  return (
    <View>
      <Text>
        { title }
      </Text>
      <Text>
        { description }
      </Text>
      <Text>
        { `${latitude} | ${longitude}` }
      </Text>
    </View>
  );
};

export default memo(MarkerItem);
