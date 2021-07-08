import React, {
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Pressable, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import constants from '../../constants';
import { getItem, storeKeys } from '../../utilities/store';
import Keyboard from './components/Keyboard';
import { RootStackParamList } from '../../navigation/types';
import styles from './styles';

const PIN = (
  { navigation }: StackScreenProps<RootStackParamList, 'PIN'>,
): React.ReactElement => {
  const pinRef = useRef(null);

  const [code, setCode] = useState<string>('');
  const [disableBackspace, setDisableBackspace] = useState<boolean>(false);
  const [disableNumerics, setDisableNumerics] = useState<boolean>(false);
  const [firstOpen, setFirstOpen] = useState<boolean>(true);

  useEffect(
    (): void => {
      (async () => {
        const pinExists = await getItem(storeKeys.pinExists);
        if (!pinExists) {
          setFirstOpen(true);
        }
      })();
    },
    [],
  );

  const handleCode = async (): Promise<void> => {
    setDisableNumerics(true);
  };

  const handleKeyboardClick = (value: string): null | void | Promise<void> => {
    if (value === constants.backspace) {
      const newCode = code.length > 0 ? code.substr(0, code.length - 1) : '';
      if (newCode.length === 0) {
        setDisableBackspace(true);
      }
      setDisableNumerics(false);
      return setCode(code.length > 0 ? code.substr(0, code.length - 1) : '');
    }

    if (value === constants.empty) {
      return null;
    }

    const newCode = `${code}${value}`;

    if (newCode.length >= 4) {
      setCode(newCode);
      return handleCode();
    }

    return setCode((state): string => {
      if (value === 'backspace') {
        return state.length > 0 ? state.substr(0, state.length - 1) : '';
      }
      return `${state}${value}`;
    });
  };

  const handleNavigation = (): void => navigation.replace('Root');

  return (
    <View style={styles.container}>
      { firstOpen && (
        <Text>
          This is a first open
          { code }
        </Text>
      ) }
      { !firstOpen && (
        <Text ref={pinRef}>
          PIN input code
        </Text>
      ) }
      <Keyboard
        disableBackspace={disableBackspace}
        disableNumerics={disableNumerics}
        handleClick={handleKeyboardClick}
      />
      <Pressable onPress={handleNavigation}>
        <Text>
          Proceed
        </Text>
      </Pressable>
    </View>
  );
};

export default memo(PIN);
