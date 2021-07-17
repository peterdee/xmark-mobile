import React, { memo } from 'react';
import { Text } from 'react-native';

import styles from '../../styles';

const EditLocationData = (): React.ReactElement => (
  <Text style={styles.locationModalTitle}>
    Edit location
  </Text>
);

export default memo(EditLocationData);
