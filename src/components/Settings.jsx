import React, { useContext, useState } from "react";
import Modal from "./Modal";
import WeatherContext from "../context/WeatherContext";

export default function Settings() {
  const { state, dispatch } = useContext(WeatherContext);
  const { unitSystem, temperatureUnit} = state; 

    
  const [wind, setWind] = useState("kmh");
  const [precip, setPrecip] = useState("mm");


  return (
    <Modal>      
      <Modal.Option
        selected={unitSystem === "metric"}
        onClick={() => dispatch({type:"TOGGLE_UNITS"})}
      >
        {`${unitSystem === 'metric' ? "Switch to Imperial" : "Switch to Metric"}`}
      </Modal.Option>

      <Modal.Section>Temperature</Modal.Section>
      <Modal.Option
        selected={temperatureUnit === "celcius"}
        onClick={() => dispatch({type: "TOGGLE_TEMP_UNITS"})}
      >
        Celsius (°C)
      </Modal.Option>
      <Modal.Option
        selected={temperatureUnit === "fahrenheit"}
        onClick={() => dispatch({type: "TOGGLE_TEMP_UNITS"})}
      >
        Fahrenheit (°F)
      </Modal.Option>

      <Modal.Section>Wind Speed</Modal.Section>
      <Modal.Option
        selected={wind === "kmh"}
        onClick={() => setWind("kmh")}
      >
        km/h
      </Modal.Option>
      <Modal.Option
        selected={wind === "mph"}
        onClick={() => setWind("mph")}
      >
        mph
      </Modal.Option>

      <Modal.Section>Precipitation</Modal.Section>
      <Modal.Option
        selected={precip === "mm"}
        onClick={() => setPrecip("mm")}
      >
        Millimeters (mm)
      </Modal.Option>
      <Modal.Option
        selected={precip === "in"}
        onClick={() => setPrecip("in")}
      >
        Inches (in)
      </Modal.Option>
    </Modal>
  );
}