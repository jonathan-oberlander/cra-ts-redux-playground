import React from 'react';
import { ReactComponent as ThumbsUp } from '../svg/thumbsUp.svg';
import { ReactComponent as Timer } from '../svg/timer.svg';

export const Ping: React.FC<{ isPing: boolean }> = ({ isPing }) => (
  <>
    {isPing ? (
      <>
        <span style={{ color: 'red' }}>...loading</span>
        <Timer
          width="20"
          height="20"
          fill="red"
          transform="rotate(180) translate(-5, -5)"
        />
      </>
    ) : (
      <ThumbsUp title="thumb" />
    )}
  </>
);
