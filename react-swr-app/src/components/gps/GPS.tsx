import React from 'react'
import useSWR from 'swr';
import getGPSCoordinates from './getGPSCoordinates';

export const GPS = () => {
    const {data:gps}=useSWR("GPS", getGPSCoordinates);

  return (
    <div>{JSON.stringify(gps)}</div>
  )
}
