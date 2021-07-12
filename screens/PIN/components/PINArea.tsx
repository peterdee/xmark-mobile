import React, { memo } from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

interface PINAreaProps {
  code: string,
  error: boolean,
}

const PINArea = (props: PINAreaProps): React.ReactElement => {
  const {
    code,
    error,
  } = props;

  return (
    <View style={styles.PINBlock}>
      <View style={styles.PINAreaContainer}>
        <View
          style={[
            styles.PINAreaItem,
            code.length >= 1 && styles.PINAreaItemFilled,
            error && styles.PINAreaItemError,
          ]}
        />
        <View
          style={[
            styles.PINAreaItem,
            code.length >= 2 && styles.PINAreaItemFilled,
            error && styles.PINAreaItemError,
          ]}
        />
        <View
          style={[
            styles.PINAreaItem,
            code.length >= 3 && styles.PINAreaItemFilled,
            error && styles.PINAreaItemError,
          ]}
        />
        <View
          style={[
            styles.PINAreaItem,
            code.length === 4 && styles.PINAreaItemFilled,
            error && styles.PINAreaItemError,
          ]}
        />
      </View>
      <View style={styles.errorMessageWrap}>
        { error && (
          <Text style={styles.errorMessageText}>
            Provided PIN code is invalid!
          </Text>
        ) }
      </View>
    </View>
  );
};

export default memo(PINArea);
