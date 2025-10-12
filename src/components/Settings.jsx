import React, { useContext } from "react";
import Modal from "./Modal";
import WeatherContext from "../context/WeatherContext";

export default function Settings({ isOpen, onClose }) {
  const { state, dispatch } = useContext(WeatherContext);
  const { unitSystem, temperatureUnit, windSpeedUnit, precipitationUnit } = state;

  if (!isOpen) return null;

  return (
    <div className="day-picker">
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Option
          selected={unitSystem === "metric"}
          onClick={() => dispatch({ type: "TOGGLE_UNITS" })}
        >
          {unitSystem === "metric" ? "Switch to Imperial" : "Switch to Metric"}
        </Modal.Option>

        <Modal.Section>Temperature</Modal.Section>
        <Modal.Option
          selected={temperatureUnit === "celsius"}
          onClick={() =>
            dispatch({ type: "TOGGLE_TEMP_UNITS", payload: "celsius" })
          }
        >
          Celsius (°C)
        </Modal.Option>
        <Modal.Option
          selected={temperatureUnit === "fahrenheit"}
          onClick={() =>
            dispatch({ type: "TOGGLE_TEMP_UNITS", payload: "fahrenheit" })
          }
        >
          Fahrenheit (°F)
        </Modal.Option>

        <Modal.Section>Wind Speed</Modal.Section>
        <Modal.Option
          selected={windSpeedUnit === "km"}
          onClick={() =>
            dispatch({ type: "TOGGLE_WINDSPEED_UNITS", payload: "km" })
          }
        >
          km/h
        </Modal.Option>
        <Modal.Option
          selected={windSpeedUnit === "mph"}
          onClick={() =>
            dispatch({ type: "TOGGLE_WINDSPEED_UNITS", payload: "mph" })
          }
        >
          mph
        </Modal.Option>

        <Modal.Section>Precipitation</Modal.Section>
        <Modal.Option
          selected={precipitationUnit === "mm"}
          onClick={() =>
            dispatch({ type: "TOGGLE_PRECIPITATION_UNITS", payload: "mm" })
          }
        >
          Millimeters (mm)
        </Modal.Option>
        <Modal.Option
          selected={precipitationUnit === "in"}
          onClick={() =>
            dispatch({ type: "TOGGLE_PRECIPITATION_UNITS", payload: "in" })
          }
        >
          Inches (in)
        </Modal.Option>
      </Modal>
    </div>
  );
}
