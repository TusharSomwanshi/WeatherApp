import get from 'lodash/get';
import { createSelector } from 'reselect';

const weatherForcast = state => get(state, 'weather.weatherData.weather', []);

export const getWeatherForcast = createSelector(weatherForcast, x => {
	return x;
});

const temperatureInfo = state => get(state, 'weather.weatherData.main', {});

export const getTemperatureInfo = createSelector(temperatureInfo, x => {
	return x;
});