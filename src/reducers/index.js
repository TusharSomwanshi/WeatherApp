import { combineReducers } from "redux";
import { weatherReducer } from '../containers/WeatherForm/reducer';

const rootReducer = combineReducers({
    weather: weatherReducer
});

export default rootReducer;
