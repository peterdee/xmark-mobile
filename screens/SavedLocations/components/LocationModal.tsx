import React, { memo } from 'react';
import { Text } from 'react-native';

import BigButton from '../../../components/BigButton';
import LinkButton from '../../../components/LinkButton';
import Maps from '../../../components/Maps';
import { Marker } from '../../Map/types';
import styles from '../styles';

interface LocationModalProps {
  handleCloseModal: () => void;
  handleDeleteMarker: (id: string) => Promise<void>;
  marker: Marker;
}

const LocationModal = (props: LocationModalProps): React.ReactElement => {
  const {
    handleCloseModal,
    handleDeleteMarker,
    marker,
  } = props;

  const handleDelete = (): Promise<void> => handleDeleteMarker(String(marker.key));

  return (
    <>
      <Text style={styles.locationModalTitle}>
        { marker.title }
      </Text>
      { marker.description && (
        <Text
          style={{
            ...styles.locationModalTitle,
            ...styles.locationModalText,
          }}
        >
          { marker.description }
        </Text>
      ) }
      <Maps
        mapStyle={styles.locationModalMap}
        markers={[marker]}
        region={marker.coordinate}
        showDescription={false}
        showTitle={false}
      />
      <BigButton
        buttonStyle={{
          ...styles.clearLocationsButton,
          ...styles.locationModalDeleteButton,
        }}
        onPress={handleDelete}
        text="Remove location"
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

export default memo(LocationModal);
