export const initialState = {
  loading: false,
  error: null,  
  weather: null,  
  theme: "light",
  unitSystem: "metric",
  temperatureUnit: "celsius",
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
         temperatureUnit: state.temperatureUnit,
         windSpeedUnit: state.windSpeedUnit,
         precipitationUnit: state.precipitationUnit
      };

      case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

      case "SET_CITY":
      return { ...state, city: action.payload };

      case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };    

      case "TOGGLE_UNITS":    
      if(state.unitSystem === 'imperial')  {
        return {
          ...state,        
          temperatureUnit: "celsius",
          windSpeedUnit: "km",
          precipitationUnit: "mm",
          unitSystem: "metric",
        };
      }
      else if(state.unitSystem === "metric")
        return {
          ...state,
          temperatureUnit: "fahrenheit",
          windSpeedUnit: "mph",
          precipitationUnit: "in",        
          unitSystem: "imperial",
        };      
      case "TOGGLE_TEMP_UNITS":
      return { ...state, temperatureUnit: action.payload };    

      case "TOGGLE_WINDSPEED_UNITS":
      return { ...state, windSpeedUnit: action.payload }; 

      case "TOGGLE_PRECIPITATION_UNITS":        
      return { ...state, precipitationUnit: action.payload};         
    default:
      return state;
  }
}
