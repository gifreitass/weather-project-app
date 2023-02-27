import { combineReducers, createStore } from "redux";
import { WeatherApi } from "../weather-api.interface";
import weatherReducer from "./weather/reducer";

export interface iState {
    weather: {
        weatherList: WeatherApi[]
    }
}

const reducers = combineReducers({
    weather: weatherReducer
})

const store = createStore(reducers)

export default store