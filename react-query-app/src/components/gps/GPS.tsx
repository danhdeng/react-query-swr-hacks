import React from 'react'
import { useQuery } from 'react-query';
import getGPSCoordinates from './getGPSCoordinates';

export const GPS = () => {
    const {data:gps}=useQuery("GPS", getGPSCoordinates);

  return (
    <div>{JSON.stringify(gps)}</div>
  )
}
