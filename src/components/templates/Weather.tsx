import { useState } from "react"
import TitleCity from "../atoms/TitleCity"
import Search from "../molecules/Search"
import DivDay from "../organisms/DivDay"
import { DivWeather, Image } from "../styled-components"
import axios from "axios"
import store, { iState } from "../../store"
import { useSelector } from 'react-redux/es/exports';
import { setWeatherListAction } from "../../store/weather/actions"
import { WeatherApi } from "../../weather-api.interface"
import { VITE_API_KEY } from "../../envs"
import ModalDayWeather from "../organisms/ModalDayWeather"
import.meta.env.VITE_API_KEY

const Weather = () => {
    const [cityName, setCityName] = useState<string>('')
    const [apiTitleCity, setApiTitleCity] = useState<string>('')
    const [selectedCity, setSelectedCity] = useState<WeatherApi>()
    const weatherList = useSelector((state: iState) => state.weather.weatherList)

    const getGeocoding = async (joinCityName: string) => {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${joinCityName}&limit=1&appid=${VITE_API_KEY}`)
        if (response.data) {
            setApiTitleCity(response.data[0].local_names.pt)
            return response.data
        }
    }

    const getWeather = async (lat: number, lon: number) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${VITE_API_KEY}`)
        if (response.data) {
            const addaptedWeatherData = { ...response.data, input: cityName }
            store.dispatch(setWeatherListAction(addaptedWeatherData))
            setSelectedCity(addaptedWeatherData)
        }
    }

    const handleClick = async () => {
        if (cityName) {
            const joinCityName = encodeURI(cityName)
            const findCity = weatherList.find(weather => weather.input === cityName)
            const dataGeocoding = await getGeocoding(joinCityName)
            if (findCity) {
                setSelectedCity(findCity)
                return
            }
            const lat = dataGeocoding[0].lat
            const lon = dataGeocoding[0].lon
            getWeather(lat, lon)
            setCityName('')
        }
    }

    return (
        <DivWeather>
            <Image src="https://cdn-icons-png.flaticon.com/512/4052/4052984.png" />
            <Search cityName={cityName} setCityName={setCityName} handleClick={handleClick} />
            <TitleCity cityName={apiTitleCity} />
            {selectedCity &&
                <>
                    <DivDay selectedCity={selectedCity} />
                    <ModalDayWeather selectedCity={selectedCity} />
                </>
            }
        </DivWeather>
    )
}

export default Weather