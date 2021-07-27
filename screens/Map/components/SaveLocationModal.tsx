import React, { memo, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import colors from '../../../constants/styles';
import { Coordinates, LocationData as TextData } from '../types';
import styles from '../styles';

interface LocationDataProps {
  coordinates: Coordinates;
  handleCloseModal: () => void;
  handleSaveLocation: (coordinates: Coordinates, data: TextData) => Promise<void>;
}

const LocationData = (props: LocationDataProps): React.ReactElement => {
  const {
    coordinates,
    handleCloseModal,
    handleSaveLocation,
  } = props;

  const [description, setDescription] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalControls}>
        <Pressable
          disabled={title.length === 0}
          onPress={() => handleSaveLocation(coordinates, { description, title })}
        >
          <Ionicons
            color={title.length > 0 ? colors.appBackground : colors.inactiveTextDarker}
            name="checkmark-sharp"
            size={32}
          />
        </Pressable>
        <Pressable onPress={handleCloseModal}>
          <Ionicons
            color={colors.appBackground}
            name="close-sharp"
            size={32}
          />
        </Pressable>
      </View>
      { coordinates && (
        <>
          <Text style={styles.modalCoordinates}>
            { `Latitude: ${coordinates.latitude}` }
          </Text>
          <Text style={styles.modalCoordinates}>
            { `Longitude: ${coordinates.longitude}` }
          </Text>
        </>
      ) }
      <TextInput
        onChangeText={setTitle}
        placeholder="Location title"
        style={styles.modalDataInput}
        value={title}
      />
      <TextInput
        multiline
        numberOfLines={10}
        onChangeText={setDescription}
        placeholder="Location description"
        style={[
          styles.modalDataInput,
          styles.modalDataInputArea,
        ]}
        value={description}
      />
    </View>
  );
};

export default memo(LocationData);
