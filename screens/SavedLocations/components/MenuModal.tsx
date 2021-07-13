import React, { memo } from 'react';
import { Text } from 'react-native';

import BigButton from '../../../components/BigButton';
import LinkButton from '../../../components/LinkButton';
import styles from '../styles';

interface MenuModalProps {
  handleCloseMenu: () => void;
  handleRemoveLocations: () => Promise<void>;
}

const MenuModal = (props: MenuModalProps): React.ReactElement => {
  const {
    handleCloseMenu,
    handleRemoveLocations,
  } = props;

  return (
    <>
      <Text style={styles.clearLocationsText}>
        Remove all of the saved locations from the device
      </Text>
      <BigButton
        buttonStyle={styles.clearLocationsButton}
        onPress={handleRemoveLocations}
        text="Remove all locations"
      />
      <LinkButton
        buttonStyle={styles.closeModalButton}
        onPress={handleCloseMenu}
        text="Cancel"
        textStyle={styles.closeModalButtonText}
      />
    </>
  );
};

export default memo(MenuModal);
