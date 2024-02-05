import { useState } from "react";
import Styles from "./Calculator.module.css";

const Calculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBMI = () => {
    const isValidHeight = /^\d+$/.test(height); // regular expressions
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      setErrorMessage("");
      const heightInMeters = height / 100;
      const bmiValue = (weight / heightInMeters ** 2).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setBmiStatus("Underweight");
      else if (bmiValue >= 18.5 && bmiValue <= 24.9)
        setBmiStatus("Normal Weight");
      else if (bmiValue >= 25 && bmiValue <= 29.9) setBmiStatus("Overweight");
      else setBmiStatus("Obese");
    } else {
      setErrorMessage("Please enter both Height and Weight to get the BMI.");
      setBmi(null);
      setBmiStatus("");
    }
  };

  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("");
  };

  return (
    <>
      <div className={Styles.bmiCalculator}>
        <div className={Styles.box}></div>

        <div className={Styles.data}>
          <h1>BMI Calculator</h1>

          {errorMessage && <p className={Styles.error}>{errorMessage}</p>}

          <div className={Styles.inputContainer}>
            <label htmlFor="height">Height (cm) : </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className={Styles.inputContainer}>
            <label htmlFor="weight">Weight (kg) : </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={calculateBMI}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi !== null && (
            <div className={Styles.result}>
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calculator;
