import React, { memo } from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

const SavedLocationsNotFound = (): React.ReactElement => (
  <View style={styles.locationsNotFoundWrap}>
    <Text style={styles.locationsNotFoundText}>
      Saved locations not found!
    </Text>
  </View>
);

export default memo(SavedLocationsNotFound);
