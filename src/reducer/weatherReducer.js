export const initialState = {
  loading: false,
  error: null,  
  weather: null,  
  theme: "light",
  unitSystem: "metric",
  temperatureUnit: "celcius",
  windSpeedUnit: "km",
  precipitationUnit: 'mm',
  city: "",
};

export function weatherReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { 
         ...state,
         loading: false, 
         weather: action.payload,
         unitSystem: action.payload.unitSystem,
         temperatureUnit: action.payload.temperatureUnit,
         windSpeedUnit: action.payload.windSpeedUnit,
         precipitationUnit: action.payload.precipitationUnit
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };    
    case "TOGGLE_UNITS":
      return { ...state, unitSystem: state.unitSystem === "metric" ? "imperial" : "metric" };    
      case "TOGGLE_TEMP_UNITS":
      return { ...state, temperatureUnit: state.temperatureUnit === "celcius" ? "fahrenheit" : "celcius" };    
    default:
      return state;
  }
}
