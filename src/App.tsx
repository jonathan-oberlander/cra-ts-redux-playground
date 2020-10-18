import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseValue,
  ping,
  increaseIfUnderTen,
  fetchOnInput,
  steps,
  stopSequence,
} from '../store/actions';
import { parentSelector, selectSequence } from '../store/reducer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sequencer />
      <Parent />
    </div>
  );
}

export default App;

function Parent() {
  const dispatch = useDispatch();
  const { value, isPing, user, error } = useSelector(parentSelector);

  const incTen = () => dispatch(increaseIfUnderTen());
  const dec = () => dispatch(decreaseValue());
  const pingIt = () => dispatch(ping());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchOnInput(e.target.value));
  };

  return (
    <div>
      <Counter
        incTen={incTen}
        dec={dec}
        pingIt={pingIt}
        value={value}
        isPing={isPing}
      />
      <Finder user={user} error={error} handleChange={handleChange} />
    </div>
  );
}

type CounterProps = {
  incTen(): void;
  dec(): void;
  pingIt(): void;
  value?: number;
  isPing?: boolean;
};
const Counter: React.FC<CounterProps> = ({
  incTen,
  dec,
  pingIt,
  value,
  isPing,
}) => (
  <>
    <button onClick={incTen}>Increase if under 10</button>
    <button onClick={dec}>Decrease</button>
    <button onClick={pingIt}>PING</button>
    <hr />
    <span className="value">{value}</span>
    <hr />
    {isPing ? <span style={{ color: 'red' }}>...is pinging</span> : 'idle'}
  </>
);

type FinderProps = {
  user: {
    url: any;
    avatar: any;
  };
  error: any;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
};
const Finder: React.FC<FinderProps> = ({ user, error, handleChange }) => (
  <>
    <hr />
    <input
      type="text"
      name="user"
      placeholder="type github user name"
      onChange={handleChange}
    />
    <hr />
    {error ? (
      <p>{error}</p>
    ) : (
      <div className="user">
        <a href={user.url} target="_blank" rel="noopener noreferrer">
          {user.url}
        </a>
        <img src={user.avatar} alt="user's avatar" width="400" height="400" />
      </div>
    )}
  </>
);

const Sequencer = () => {
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
