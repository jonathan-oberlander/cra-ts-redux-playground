import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseValue,
  ping,
  increaseIfUnderTen,
  fetchOnInput,
} from "./store/actions";
import {
  selectValue,
  selectIsPinging,
  selectUserDescription,
  selectErrorJSON,
} from "./store/reducer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const dispatch = useDispatch();
  const value = useSelector(selectValue);
  const isPing = useSelector(selectIsPinging);
  const user = useSelector(selectUserDescription);
  const error = useSelector(selectErrorJSON);

  const incTen = () => dispatch(increaseIfUnderTen());
  const dec = () => dispatch(decreaseValue());
  const pingIt = () => dispatch(ping());
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchOnInput(e.target.value));
  };

  return (
    <div>
      <button onClick={incTen}>Increase if under 10</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={pingIt}>PING</button>
      <hr />
      {value}
      <hr />
      {isPing ? "...is pinging" : "idle"}
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
    </div>
  );
}
