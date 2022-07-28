import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import {GoogleMap} from '@react-google-maps/api'
import { LMarker } from '../UI/marker/LMarker';
import { ICenter } from '../../types/center';
import styles from './GMap.module.scss';
import classNames  from 'classnames/bind';

const cl = classNames.bind(styles);

const containerStyle = {
  width: '100%',
  height: '100%'
};

interface GMapPropsTypes {
  center: ICenter; 
}

export const GMap: FC<GMapPropsTypes>= ({center}) => {
  const mapRef = useRef(undefined);
  const [zoom, setZoom] = useState<undefined | number>(undefined);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    mapRef.current = map
  }, [center])
  
  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setZoom(17);
    }, 100)
  },[])

  return (
    <div className={cl('google-map-container')}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      <LMarker position={center} />
      </GoogleMap>
    </div>
)
}
