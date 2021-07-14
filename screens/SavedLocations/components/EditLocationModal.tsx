import React, { memo } from 'react';
import { TextInput } from 'react-native';

import LinkButton from '../../../components/LinkButton';
import { Marker } from '../../Map/types';
import styles from '../styles';

interface EditLocationModalProps {
  handleCloseModal: () => void;
  marker: Marker;
}

const EditLocationModal = (props: EditLocationModalProps): React.ReactElement => {
  const {
    handleCloseModal,
    marker,
  } = props;

  return (
    <>
      <TextInput
        value={marker.title}
      />
      <LinkButton
        buttonStyle={styles.closeModalButton}
        onPress={handleCloseModal}
        text="Close"
        textStyle={styles.closeModalButtonText}
      />
    </>
  );
};

export default memo(EditLocationModal);
