import axios from "axios";
import { OPEN_WEATHER_MAP_URL } from './constants';

export function getWeatherData(params) {
  const encodedLocation = encodeURIComponent(params);
  const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  return dispatch => {
    axios
      .get(requestUrl)
      .then(function(res) {
          if (res.data.cod === 200) {
            dispatch(setWeatherData(res.data));
            dispatch(setErrorMessage(''));
          } else {
            dispatch(setWeatherData({}));
          }
      })
      .catch(function(error) {
        dispatch(setWeatherData({}));
        dispatch(setErrorMessage('City not found'));
      });
  };
}

export function setWeatherData(weatherData) {
  return {
    type: "SET_WEATHER_DATA",
    payload: weatherData
  };
}

export function setErrorMessage(errorMessage) {
  return {
    type: "SET_ERROR_MESSAGE",
    payload: errorMessage
  };
}