import React, { memo, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';

import colors from '../../../constants/styles';
import constants from '../../../constants';
import styles from '../styles';

interface KeyboardItemProps {
  disableBackspace: boolean;
  disableNumerics: boolean;
  handleClick: (value: string) => void;
  item: string;
}

const KeyboardItem = (props: KeyboardItemProps): React.ReactElement => {
  const {
    disableBackspace,
    disableNumerics,
    handleClick,
    item,
  } = props;

  const [pressed, setPressed] = useState<boolean>(false);

  const getBackspaceColor = (): string => {
    if (disableBackspace) {
      return colors.inactiveText;
    }

    if (pressed) {
      return colors.appBackground;
    }

    return colors.appText;
  };

  const handlePressIn = (): void => setPressed(true);

  const handlePressOut = (): void => {
    setPressed(false);
    return handleClick(item);
  };

  return (
    <Pressable
      disabled={
        item === constants.empty
          || (item !== constants.backspace && disableNumerics)
          || (item === constants.backspace && disableBackspace)
      }
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.keyboardItem,
        pressed && styles.keyboardItemPressed,
        item === constants.empty && styles.keyboardItemEmpty,
      ]}
    >
      { item !== 'empty' && item !== 'backspace' && (
        <Text
          style={[
            styles.keyboardText,
            pressed && styles.keyboardTextPressed,
            disableNumerics && styles.keyboardTextDisabled,
          ]}
        >
          { item }
        </Text>
      ) }
      { item === 'backspace' && (
        <Ionicons
          color={getBackspaceColor()}
          name="ios-backspace"
          size={32}
        />
      ) }
    </Pressable>
  );
};

export default memo(KeyboardItem);
