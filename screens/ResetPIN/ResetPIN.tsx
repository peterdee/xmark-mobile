import React, { memo, useState } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import BigButton from '../../components/BigButton';
import LinkButton from '../../components/LinkButton';
import { RootStackParamList } from '../../navigation/types';
import styles from './styles';
import { removeItem, storeKeys } from '../../utilities/store';

const ResetPIN = (
  { navigation }: StackScreenProps<RootStackParamList, 'ResetPIN'>,
): React.ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleBack = (): void => navigation.replace('PIN');

  const handleReset = async (): Promise<void> => {
    const promises: Promise<void>[] = Object.values(storeKeys).map(
      (key: string) => removeItem(key),
    );

    setLoading(true);
    await Promise.all(promises);

    setLoading(false);
    return navigation.replace('PIN');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Reset the PIN code
      </Text>
      <Text style={styles.text}>
        All of the stored locations are going to be erased if you reset the PIN code!
      </Text>
      <BigButton
        buttonStyle={styles.resetButton}
        disabled={loading}
        onPress={handleReset}
        text="Reset"
        textStyle={styles.resetButtonText}
      />
      <LinkButton
        buttonStyle={styles.backButton}
        disabled={loading}
        onPress={handleBack}
        text="Back"
      />
    </View>
  );
};

export default memo(ResetPIN);
