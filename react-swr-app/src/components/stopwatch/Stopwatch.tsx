import React, { useRef } from 'react'
import useSWR from 'swr';
import {createStopWatch}  from './createStopWatch';

function Stopwatch() {
  const timerRef=useRef(createStopWatch());
  const {data:currentTime}=useSWR("timer", timerRef.current, {
    refreshInterval:500,
    dedupingInterval:500
  });
  return (
    <div>Stopwatch Timer: {currentTime}</div>
  )
}

export default Stopwatch