import React, { memo } from 'react';
import { Text } from 'react-native';

const NotFound = () => {
  const text = 'Page not found!';
  return (
    <Text>
      { text }
    </Text>
  );
};

export default memo(NotFound);
