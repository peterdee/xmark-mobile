import React, { memo } from 'react';
import MapView, { Marker as MapMarker } from 'react-native-maps';

import { Coordinates, Marker } from '../screens/Map/types';
import { COORDINATES_DELTA } from '../constants';

interface MapsProps {
  mapStyle?: object,
  markers?: Marker[];
  onLocationChange?: () => any;
  region: Coordinates;
  showDescription?: boolean;
  showTitle?: boolean;
  showUserPosition?: boolean;
}

const Maps = (props: MapsProps): React.ReactElement => {
  const {
    mapStyle,
    markers,
    onLocationChange,
    region,
    showDescription,
    showTitle,
    showUserPosition,
  } = props;

  const handleLocationChange = (): void => {
    if (onLocationChange) {
      onLocationChange();
    }
  };

  return (
    <MapView
      region={{
        ...region,
        longitudeDelta: COORDINATES_DELTA,
        latitudeDelta: COORDINATES_DELTA,
      }}
      onUserLocationChange={handleLocationChange}
      showsCompass={false}
      showsMyLocationButton={false}
      showsPointsOfInterest={false}
      showsUserLocation={showUserPosition}
      style={mapStyle}
    >
      { markers && markers.length > 0 && markers?.map((marker: Marker) => (
        <MapMarker
          coordinate={marker.coordinate}
          description={showDescription ? marker.description : undefined}
          key={marker.key}
          title={showTitle ? marker.title : undefined}
        />
      )) }
    </MapView>
  );
};

Maps.defaultProps = {
  onLocationChange: null,
  mapStyle: {},
  markers: [],
  showDescription: true,
  showTitle: true,
  showUserPosition: true,
};

export default memo(Maps);
