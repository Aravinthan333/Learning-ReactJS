import { useEffect, useState } from "react";
import "./AdviceApp.css";
const AdviceApp = () => {
  const [advice, setAdvice] = useState("Click the button to get advice");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    // fetch("https://api.adviceslip.com/advice")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setAdvice(data.slip.advice);
    //   })
    //   .catch((error) => {
    //     console.log(`Error on fetching API : ${error}`);
    //   });

    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }

  useEffect(() => {
    getAdvice();
    // console.log("as");
  }, []);

  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You clicked <b>{count}</b> times
      </p>
    </div>
  );
};

export default AdviceApp;
