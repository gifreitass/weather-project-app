import { WeatherApi } from "../../weather-api.interface"

export const setWeatherListAction = (weatherList: WeatherApi) => {
    return {
        type: "SET_WEATHER_LIST",
        payload: weatherList
    }
}