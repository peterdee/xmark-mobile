import React, { memo } from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';

import styles from './styles';

interface LinkButtonProps {
  buttonStyle?: object;
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  textStyle?: object;
}

const LinkButton = (props: LinkButtonProps): React.ReactElement => {
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
        styles.linkButtonWrap,
        buttonStyle,
      ]}
    >
      <Text
        style={[
          styles.linkButtonText,
          disabled && styles.linkButtonTextDisabled,
          textStyle,
        ]}
      >
        { text }
      </Text>
    </Pressable>
  );
};

LinkButton.defaultProps = {
  buttonStyle: {},
  disabled: false,
  textStyle: {},
};

export default memo(LinkButton);
