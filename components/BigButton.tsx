import React, { memo } from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';

import styles from './styles';

interface BigButtonProps {
  buttonStyle?: object;
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  textStyle?: object;
}

const BigButton = (props: BigButtonProps): React.ReactElement => {
  const {
    buttonStyle,
    disabled,
    onPress,
    text,
    textStyle,
  } = props;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.bigButtonWrap,
        disabled && styles.bigButtonWrapDisabled,
        buttonStyle,
      ]}
    >
      <Text
        style={[
          styles.bigButtonText,
          textStyle,
        ]}
      >
        { text }
      </Text>
    </Pressable>
  );
};

BigButton.defaultProps = {
  buttonStyle: {},
  disabled: false,
  textStyle: {},
};

export default memo(BigButton);
