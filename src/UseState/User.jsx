// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";

const User = () => {
  const [state, setState] = useState(0);

  const increament = () => {
    setState(state + 1);
  };
  const decreament = () => {
    setState(state - 1);
  };
  const reset = () => {
    setState(0);
  };
  return (
    <div>
      <span>{state}</span>
      <input type="button" value="Increment" onClick={increament} />
      <input type="button" value="Decrement" onClick={decreament} />
      <input type="button" value="Reset" onClick={reset} />
    </div>
  );
};

export default User;
