import React, { memo } from 'react';
import { Modal, View } from 'react-native';

import styles from './styles';

interface ModalWrapProps {
  children?: any;
  visible: boolean;
}

const ModalWrap = (props: ModalWrapProps): React.ReactElement => {
  const {
    children,
    visible,
  } = props;

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
    >
      <View style={styles.modalWrap}>
        { children }
      </View>
    </Modal>
  );
};

ModalWrap.defaultProps = {
  children: [],
};

export default memo(ModalWrap);
