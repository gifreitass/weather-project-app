interface iAction {
    type: string,
    payload: any
}

const WEATHER_INICIAL_STATE = {
    weatherList: []
}

const weatherReducer = (state = WEATHER_INICIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "SET_WEATHER_LIST":
            const newWeatherList = [...state.weatherList]
            newWeatherList.push(action.payload as never)
            return {
                ...state,
                weatherList: newWeatherList
            }
        default:
            return state
    }
}

export default weatherReducer