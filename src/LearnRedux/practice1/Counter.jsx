import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./slice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.cOunter.count);

  const dispatch = useDispatch();

  const [inpAmount, setinpAmount] = useState(0);

  const addVal = Number(inpAmount) || 0;

  const resetAll = () => {
    setinpAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <p>{count}</p>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <input
          type="number"
          value={inpAmount}
          onChange={(e) => setinpAmount(e.target.value)}
        />

        <button onClick={() => dispatch(incrementByAmount(addVal))}>Add</button>
        <button onClick={resetAll}>R</button>
      </div>
    </div>
  );
};

export default Counter;
