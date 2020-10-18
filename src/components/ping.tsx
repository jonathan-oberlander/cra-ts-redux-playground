import React from 'react';

export const Ping: React.FC<{ isPing: boolean }> = ({ isPing }) => (
  <>{isPing ? <span style={{ color: 'red' }}>...is pinging</span> : 'idle'}</>
);
