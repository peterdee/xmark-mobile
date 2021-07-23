import React, { memo, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

import colors from '../../../../constants/styles';
import { Marker } from '../../../Map/types';
import styles from '../../styles';

interface EditLocationDataProps {
  handleCloseModal: () => void;
  handleSaveData: (marker: Marker) => Promise<void>;
  marker: Marker;
}

const EditLocationData = (props: EditLocationDataProps): React.ReactElement => {
  const {
    handleCloseModal,
    handleSaveData,
    marker,
  } = props;

  const [description, setDescription] = useState<string>(marker.description);
  const [title, setTitle] = useState<string>(marker.title);

  const handleSave = (): Promise<void> => handleSaveData({
    ...marker,
    description,
    title,
  });

  return (
    <>
      <View style={styles.locationDataNavigation}>
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
      <TextInput
        onChangeText={setTitle}
        placeholder="Location title"
        style={styles.editLocationDataInput}
        value={title}
      />
      <TextInput
        multiline
        numberOfLines={10}
        onChangeText={setDescription}
        placeholder="Location description"
        style={styles.editLocationDataInput}
        value={description}
      />
    </>
  );
};

export default memo(EditLocationData);
