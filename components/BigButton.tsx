import React, { memo } from 'react';
import { Pressable } from 'react-native';

interface BigButtonProps {
  children: React.ReactChildren;
  onPress: (event: any) => void;
}

const BigButton = (props: BigButtonProps): React.ReactElement => {
  const {
    children,
    onPress,
  } = props;

  return (
    <Pressable onPress={onPress}>
      { children }
    </Pressable>
  );
};

export default memo(BigButton);
