import { WeatherApi } from "../../weather-api.interface"

export const setWeatherListAction = (weatherList: WeatherApi) => {
    return {
        type: "SET_WEATHER_LIST",
        payload: weatherList
    }
}

export const setSelectedDayAction = (dataDay: string | null) => {
    return {
        type: "SET_SELECTED_DAY",
        payload: dataDay
    }
}