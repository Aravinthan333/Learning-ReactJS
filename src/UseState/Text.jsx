import { useState } from "react";
const Text = () => {
  const [val, setVal] = useState(true);
  const submitted = () => {
    setVal(!val);
  };
  return (
    <div>
      {val && <h1>Hello</h1>}
      <button onClick={submitted}>toggle</button>
    </div>
  );
};

export default Text;
