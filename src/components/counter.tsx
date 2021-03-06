import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withPageStyle } from '../hocs/withPageStyle';
import { increaseIfUnderTen, decreaseValue, ping } from '../store/actions';
import { selectValue, selectPing } from '../store/reducer';
import { Ping } from './ping';

export const Counter: React.FC = withPageStyle(() => {
  console.log('Counter rerender');
  const dispatch = useDispatch();
  const value = useSelector(selectValue);
  const isPing = useSelector(selectPing);

  const incTen = () => dispatch(increaseIfUnderTen());
  const dec = () => dispatch(decreaseValue());
  const pingIt = () => dispatch(ping());

  return (
    <React.Fragment>
      <button onClick={incTen}>Add up to 10</button>
      <button onClick={dec}>Sub</button>
      <button onClick={pingIt}>PING</button>
      <hr />
      <span className="value">{value}</span>
      <hr />
      <p style={{ fontSize: '0.7em', color: 'gray' }}>
        fake ping to showcase svg imports
      </p>
      <Ping isPing={isPing} />
    </React.Fragment>
  );
});
Counter.displayName = 'Counter';
