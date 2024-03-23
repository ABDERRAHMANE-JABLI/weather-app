import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    clouds:undefined,
    name:undefined, 
    main:undefined, 
    wind : undefined, 
    weather: undefined, 
    sys : undefined,
    isLoaded : false
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
      console.log(action.payload);
    },
    resetData:(state)=>{
        state.weatherData?.isLoaded? state.weatherData.isLoaded = false : console.log("");
      }
    }
  },
);

export const { setWeatherData, resetData } = weatherSlice.actions;

export const selectWeatherData = (state) => state.weather.weatherData;

export default weatherSlice.reducer;
