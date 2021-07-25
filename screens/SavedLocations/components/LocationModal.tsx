import React, { memo, useState } from 'react';

import LocationData from './components/LocationData';
import { Marker } from '../../Map/types';
import EditLocationData from './components/EditLocationData';

interface LocationModalProps {
  editLocation: boolean;
  handleCloseEdit: () => void;
  handleCloseModal: () => void;
  handleDeleteMarker: (id: string) => Promise<void>;
  handleEditLocation: () => void;
  handleSaveData: (marker: Marker) => Promise<void>;
  marker: Marker;
}

const LocationModal = (props: LocationModalProps): React.ReactElement => {
  const {
    editLocation,
    handleCloseEdit,
    handleCloseModal,
    handleDeleteMarker,
    handleEditLocation,
    handleSaveData,
    marker,
  } = props;

  const [updatedMarker, setUpdatedMarker] = useState<Marker>(marker);

  const handleDelete = (): Promise<void> => handleDeleteMarker(String(marker.key));

  const handleSave = (item: Marker): Promise<void> => {
    setUpdatedMarker(item);
    return handleSaveData(item);
  };

  return (
    <>
      { editLocation && (
        <EditLocationData
          handleCloseModal={handleCloseEdit}
          handleSaveData={handleSave}
          marker={updatedMarker}
        />
      ) }
      { !editLocation && (
        <LocationData
          handleCloseModal={handleCloseModal}
          handleDeleteMarker={handleDelete}
          handleEditLocation={handleEditLocation}
          marker={updatedMarker}
        />
      ) }
    </>
  );
};

export default memo(LocationModal);
