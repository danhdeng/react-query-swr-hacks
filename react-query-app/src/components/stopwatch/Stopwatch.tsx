import React, { useRef } from 'react'
import { useQuery } from 'react-query';
import {createStopWatch}  from './createStopWatch';

function Stopwatch() {
  const timerRef=useRef(createStopWatch());
  const {data:currentTime}=useQuery("timer", timerRef.current, {
    refetchInterval:500
  });
  return (
    <div>Stopwatch Timer: {currentTime}</div>
  )
}

export default Stopwatch