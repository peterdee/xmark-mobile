import React, {
  memo,
  useEffect,
  useState,
} from 'react';
import * as haptics from 'expo-haptics';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import constants from '../../constants';
import { getItem, setItem, storeKeys } from '../../utilities/store';
import { hash, compare } from '../../utilities/hashing';
import Keyboard from './components/Keyboard';
import LinkButton from '../../components/LinkButton';
import PINArea from './components/PINArea';
import { RootStackParamList } from '../../navigation/types';
import styles from './styles';

const PIN = (
  { navigation }: StackScreenProps<RootStackParamList, 'PIN'>,
): React.ReactElement => {
  const [authenticationError, setAuthenticationError] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [disableBackspace, setDisableBackspace] = useState<boolean>(true);
  const [disableNumerics, setDisableNumerics] = useState<boolean>(false);
  const [firstOpen, setFirstOpen] = useState<boolean>(false);

  useEffect(
    (): void => {
      (async () => {
        const PINExists = await getItem(storeKeys.PINExists);
        if (!PINExists) {
          setFirstOpen(true);
        }
      })();
    },
    [],
  );

  const handleCode = async (fullCode: string): Promise<void> => {
    if (firstOpen) {
      const hashed = await hash(String(fullCode));
      await Promise.all([
        setItem<string>(storeKeys.PINCodeHash, hashed),
        setItem<boolean>(storeKeys.PINExists, true),
      ]);
      return navigation.replace('Root');
    }

    const PINHash = await getItem<string>(storeKeys.PINCodeHash);
    const codeIsValid = await compare(String(PINHash), String(fullCode));
    if (codeIsValid) {
      return navigation.replace('Root');
    }

    setCode('');
    setDisableBackspace(true);
    setDisableNumerics(false);
    return setAuthenticationError(true);
  };

  const handleKeyboardClick = async (value: string): Promise<null | void> => {
    setAuthenticationError(false);

    await haptics.impactAsync(haptics.ImpactFeedbackStyle.Light);

    if (value === constants.backspace) {
      const newCode = code.length > 0 ? code.substr(0, code.length - 1) : '';
      if (newCode.length === 0) {
        setDisableBackspace(true);
      }

      setDisableNumerics(false);
      return setCode(newCode);
    }

    if (value === constants.empty) {
      return null;
    }

    const newCode = `${code}${value}`;
    setDisableBackspace(false);

    if (newCode.length >= 4) {
      setDisableNumerics(true);
      setCode(newCode);
      return handleCode(newCode);
    }

    return setCode(newCode);
  };

  const handleResetPIN = (): void => navigation.replace('ResetPIN');

  return (
    <View style={styles.container}>
      { firstOpen && (
        <View style={styles.firstTimeWrap}>
          <Text style={styles.firstTimeTitle}>
            You are launching the application for the first time
          </Text>
          <Text style={styles.firstTimeText}>
            Please choose a PIN code that will be used to access the application
          </Text>
        </View>
      ) }
      { !firstOpen && (
        <Text style={styles.providePIN}>
          Please enter your PIN code
        </Text>
      ) }
      <View style={styles.keyboardBlock}>
        <PINArea
          code={code}
          error={authenticationError}
        />
        <Keyboard
          disableBackspace={disableBackspace}
          disableNumerics={disableNumerics}
          handleClick={handleKeyboardClick}
        />
        <LinkButton
          onPress={handleResetPIN}
          text="Reset PIN code"
        />
      </View>
    </View>
  );
};

export default memo(PIN);
