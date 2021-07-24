import React, { memo, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import colors from '../../../constants/styles';
import { Coordinates, LocationTextData } from '../types';
import styles from '../styles';

interface LocationDataProps {
  coordinates: Coordinates | null;
  handleCloseModal: () => void;
  handleSaveLocation: (data: LocationTextData) => Promise<void>;
}

const LocationData = (props: LocationDataProps): React.ReactElement => {
  const {
    coordinates,
    handleCloseModal,
    handleSaveLocation,
  } = props;

  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const handleSave = (): void | Promise<void> => {
    if (!title) {
      return setError('Please provide the title!');
    }

    return handleSaveLocation({ description, title });
  };

  return (
    <>
      <View>
        <Pressable onPress={handleSave}>
          <Ionicons
            color={colors.appBackground}
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
    </>
  );
};

export default memo(LocationData);
