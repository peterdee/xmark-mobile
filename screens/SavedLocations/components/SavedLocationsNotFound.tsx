import React, { memo } from 'react';
import { Text, View } from 'react-native';

const SavedLocationsNotFound = (): React.ReactElement => (
  <View>
    <Text>
      Saved locations not found!
    </Text>
  </View>
);

export default memo(SavedLocationsNotFound);
