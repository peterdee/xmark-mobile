import React, { memo } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import BigButton from '../../../../components/BigButton';
import colors from '../../../../constants/styles';
import Maps from '../../../../components/Maps';
import { Marker } from '../../../Map/types';
import styles from '../../styles';

interface LocationDataProps {
  handleCloseModal: () => void;
  handleDeleteMarker: (id: string) => Promise<void>;
  handleEditLocation: () => void;
  marker: Marker;
}

const LocationData = (props: LocationDataProps): React.ReactElement => {
  const {
    handleCloseModal,
    handleDeleteMarker,
    handleEditLocation,
    marker,
  } = props;

  const handleDelete = (): Promise<void> => handleDeleteMarker(String(marker.key));

  return (
    <>
      <View style={styles.locationDataNavigation}>
        <Pressable onPress={handleCloseModal}>
          <Ionicons
            color={colors.appBackground}
            name="arrow-back"
            size={32}
          />
        </Pressable>
        <Pressable onPress={handleEditLocation}>
          <Ionicons
            color={colors.appBackground}
            name="md-create-outline"
            size={32}
          />
        </Pressable>
      </View>
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
        showUserPosition={false}
      />
      <BigButton
        buttonStyle={{
          ...styles.clearLocationsButton,
          ...styles.locationModalDeleteButton,
        }}
        onPress={handleDelete}
        text="Remove location"
      />
    </>
  );
};

export default memo(LocationData);
