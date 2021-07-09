import React, { memo } from 'react';
import { View } from 'react-native';

import styles from '../styles';

interface PINAreaProps {
  code: string,
}

const PINArea = (props: PINAreaProps): React.ReactElement => {
  const { code } = props;

  return (
    <View style={styles.PINAreaContainer}>
      <View
        style={[
          styles.PINAreaItem,
          code.length >= 1 && styles.PINAreaItemFilled,
        ]}
      />
      <View
        style={[
          styles.PINAreaItem,
          code.length >= 2 && styles.PINAreaItemFilled,
        ]}
      />
      <View
        style={[
          styles.PINAreaItem,
          code.length >= 3 && styles.PINAreaItemFilled,
        ]}
      />
      <View
        style={[
          styles.PINAreaItem,
          code.length === 4 && styles.PINAreaItemFilled,
        ]}
      />
    </View>
  );
};

export default memo(PINArea);
