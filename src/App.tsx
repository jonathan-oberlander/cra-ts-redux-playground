import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseValue,
  ping,
  increaseIfUnderZero,
  callOnInput,
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

  const incOdd = () => dispatch(increaseIfUnderZero());
  const dec = () => dispatch(decreaseValue());
  const pingIt = () => dispatch(ping());
  // const fetchIt = () => dispatch(fetchUser("jonathan-oberlander"));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(callOnInput(e.target.value));
  };

  return (
    <div>
      <button onClick={incOdd}>Increase if under 10</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={pingIt}>PING</button>
      {/* <button onClick={fetchIt}>Fetch User</button> */}
      <hr />
      {value}
      <hr />
      {isPing ? "...is pinging" : "idle"}
      <hr />
      {error && <p>{error}</p>}
      <hr />
      <input
        type="text"
        name="github user name"
        placeholder="github user name"
        onChange={handleChange}
      />
      <img src={user.avatar} alt="user's avatar" width="400" height="400" />
    </div>
  );
}
