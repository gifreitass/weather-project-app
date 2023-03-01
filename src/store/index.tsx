import { combineReducers, createStore } from "redux";
import { WeatherApi } from "../weather-api.interface";
import weatherReducer, { selectedDayReducer } from "./weather/reducers";

export interface iState {
    weather: {
        weatherList: WeatherApi[]
    },
    selectedDay: {
        dataDay: string
    }
}

const reducers = combineReducers({
    weather: weatherReducer,
    selectedDay: selectedDayReducer
})

const store = createStore(reducers)

export default store