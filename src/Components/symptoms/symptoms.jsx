import { Flex, Radio } from "antd";

import { useState } from "react";
import { Button, InputNumber } from "antd";

import PropTypes from "prop-types";

// ------------------------------------------------------------------------------------------------------------------------------------------------------

const symtoms = [
  "Dengue",
  "Maleria",
  "Nausea",
  "Nueva",
  "Cold",
  "Caugh",
  "Snoring",
  "Dengue",
  "Maleria",
  "Nausea",
  "Nueva",
  "Cold",
  "Caugh",
  "Snoring",
  "Dengue",
  "Maleria",
  "Nausea",
  "Nueva",
  "Cold",
  "Caugh",
  "Snoring",
  "Dengue",
  "Maleria",
  "Nausea",
  "Nueva",
  "Cold",
  "Caugh",
  "Snoring",
];

// ------------------------------------------------------------------------------------------------------------------------------------------------------

export const App = ({ symptom }) => {
  const [enabled, setEnabled] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false);
  const [val, setVal] = useState("");

  const toggle = (e) => {
    setCloseBtn(true);
    // console.log("1: e.tar.val", e.target.value);
    setVal(e.target.value);
    // console.log("2: val", val);
    if (e.target.value === "yes") {
      return setEnabled(true);
    } else {
      return setEnabled(false);
    }
  };

  const clearAll = () => {
    console.log("clearAll");
    setVal("");
    setEnabled(false);
    setCloseBtn(false);
    // console.log("val", val);
  };

  return (
    <div className="singleSymptom">
      <div className="toggling">
        <span>{symptom} : </span>
        <span>
          <Flex horizontal="true" gap="middle">
            <Radio.Group
              buttonStyle="solid"
              value={val}
              onChange={toggle}
              size="large"
              style={{ paddingRight: "3vw" }}
            >
              <Radio.Button value="yes">Yes</Radio.Button>
              <Radio.Button value="no">No</Radio.Button>
            </Radio.Group>
            {closeBtn ? (
              <Button
                type="primary"
                danger
                shape="circle"
                onClick={clearAll}
                style={{ position: "static" }}
              >
                X
              </Button>
            ) : (
              <Button
                type="primary"
                danger
                shape="circle"
                onClick={clearAll}
                style={{ position: "static", zIndex: "-100" }}
              >
                X
              </Button>
            )}
          </Flex>
        </span>
      </div>
      <div style={{ width: "90%" }}>{enabled && <App1 />}</div>
    </div>
  );
};

App.propTypes = {
  symptom: PropTypes.string.isRequired,
};

export const App1 = () => (
  <div className="duration">
    <p>Duration</p>
    <Flex horizontal="true" gap="middle">
      <InputNumber
        controls={false}
        placeholder="Input duration"
        className="inputNumber"
      />
      <Radio.Group
        buttonStyle="solid"
        size="large"
        onChange={(e) => console.log(e.target.value)}
      >
        <Radio.Button className="padd" value="day">
          Day(s)
        </Radio.Button>
        <Radio.Button className="padd" value="week">
          Week(s)
        </Radio.Button>
        <Radio.Button className="padd" value="month">
          Month(s)
        </Radio.Button>
        <Radio.Button className="padd" value="year">
          Year(s)
        </Radio.Button>
      </Radio.Group>
    </Flex>
  </div>
);

// ------------------------------------------------------------------------------------------------------------------------------------------------------

const Symptoms = () => {
  return (
    <div>
      <h2>Symptoms</h2>
      <div className="allSymptoms">
        {symtoms.map((symtom, i) => (
          <div key={i}>
            <App symptom={symtom} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Symptoms;
