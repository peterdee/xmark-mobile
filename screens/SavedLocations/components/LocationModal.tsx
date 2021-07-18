import React, { memo } from 'react';

import LocationData from './components/LocationData';
import { Marker } from '../../Map/types';

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
      <LocationData
        handleCloseModal={handleCloseModal}
        handleDeleteMarker={handleDelete}
        marker={marker}
      />
    </>
  );
};

export default memo(LocationModal);
