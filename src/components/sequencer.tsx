import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { steps, stopSequence } from '../store/actions';
import { selectSequence } from '../store/reducer';

export const Sequencer = () => {
  const seq = useSelector(selectSequence);
  const dispatch = useDispatch();
  const startIt = () => dispatch(steps([0, 2, 1]));
  const rngIt = () => {
    dispatch(
      steps([
        Math.round(Math.random() * 2),
        Math.round(Math.random() * 2),
        Math.round(Math.random() * 2),
      ]),
    );
  };
  const stopIt = () => dispatch(stopSequence());

  return (
    <>
      <button onClick={startIt}>Start</button>
      <button onClick={stopIt}>Stop</button>
      <button onClick={rngIt}>Random</button>
      <svg viewBox="60 -20 120 120" width="120" height="30">
        <circle
          cx="0"
          cy="50"
          r="50"
          fill={`${seq.a ? 'gold' : 'transparent'}`}
        />
        <circle
          cx="120"
          cy="50"
          r="50"
          fill={`${seq.b ? 'blue' : 'transparent'}`}
        />
        <circle
          cx="240"
          cy="50"
          r="50"
          fill={`${seq.c ? 'brown' : 'transparent'}`}
        />
      </svg>
    </>
  );
};
Sequencer.displayName = 'Sequencer';
