import React, { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '../../navigation/types';
import styles from './styles';

const NotFound = (
  { navigation }: StackScreenProps<RootStackParamList, 'NotFound'>,
): React.ReactElement => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Page not found!
    </Text>
    <Pressable
      onPress={() => navigation.replace('Root')}
      style={styles.link}
    >
      <Text style={styles.linkText}>
        Back
      </Text>
    </Pressable>
  </View>
);

export default memo(NotFound);
