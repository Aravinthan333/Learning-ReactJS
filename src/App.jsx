import "./App.css";
import { useState } from "react";
import User from "./UseState/User";
import Text from "./UseState/Text";
import Fetch from "./UseEffect/fetch";

function App() {
  const [val, setVal] = useState("");

  const handleInp = (e) => {
    setVal(e.target.value);
  };

  const submitted = () => {
    setVal("");
  };

  return (
    <>
      <User />

      <input type="text" value={val} onChange={handleInp} />
      {val}
      <button onClick={submitted}>Submit</button>
      <Text />
      <Fetch />
    </>
  );
}

export default App;
