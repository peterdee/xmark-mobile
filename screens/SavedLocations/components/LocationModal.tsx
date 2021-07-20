import React, { memo } from 'react';

import LocationData from './components/LocationData';
import { Marker } from '../../Map/types';
import EditLocationData from './components/EditLocationData';

interface LocationModalProps {
  editLocation: boolean;
  handleCloseModal: () => void;
  handleDeleteMarker: (id: string) => Promise<void>;
  handleEditLocation: () => void;
  marker: Marker;
}

const LocationModal = (props: LocationModalProps): React.ReactElement => {
  const {
    editLocation,
    handleCloseModal,
    handleDeleteMarker,
    handleEditLocation,
    marker,
  } = props;

  const handleDelete = (): Promise<void> => handleDeleteMarker(String(marker.key));

  return (
    <>
      { editLocation && (
        <EditLocationData />
      ) }
      { !editLocation && (
        <LocationData
          handleCloseModal={handleCloseModal}
          handleDeleteMarker={handleDelete}
          handleEditLocation={handleEditLocation}
          marker={marker}
        />
      ) }
    </>
  );
};

export default memo(LocationModal);
