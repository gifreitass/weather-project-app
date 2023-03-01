import { useSelector } from 'react-redux/es/exports';
import store, { iState } from "../../store";
import { setSelectedDayAction } from '../../store/weather/actions';
import { WeatherApi } from '../../weather-api.interface';
import { CloseImage, DivContainsModal, DivContaisModalDays, DivMainTemperature, DivModalDays, MainTemperature, MinAndMaxTemperature, ModalHour, ModalImage, ModalMinAndMaxTemperature, ModalStyle, SeparateDiv } from "../styled-components"

const ModalDayWeather: React.FC<{ selectedCity: WeatherApi }> = (props) => {
    const dataDay = useSelector((state: iState) => state.selectedDay.dataDay)
    const opened = dataDay !== null

    if (!opened) {
        return null
    }

    const handleClickCloseModal = () => {
        store.dispatch(setSelectedDayAction(null))
    }

    const cityWeather = props.selectedCity.list.filter((day) => day.dt_txt.split(' ')[0] === dataDay.split(' ')[0])
    const index = [1, 3, 5, 7]

    return (
        <DivContainsModal>
            <ModalStyle>
                <CloseImage onClick={handleClickCloseModal} src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close" alt="ícone para fechar o modal" />
                {dataDay &&
                    <DivMainTemperature>
                        <MainTemperature>{cityWeather[0].main.temp}°</MainTemperature>
                        <div>
                            <MinAndMaxTemperature>{cityWeather[0].main.temp_max}°</MinAndMaxTemperature>
                            <MinAndMaxTemperature>{cityWeather[0].main.temp_min}°</MinAndMaxTemperature>
                        </div>
                    </DivMainTemperature>
                }
                <SeparateDiv />
                <DivContaisModalDays>
                    {dataDay &&
                    //utilizando o index.map para renderizar somente os índices que eu desejar do array
                        index.map((index) => cityWeather[index]).map((day, index) => {
                            return <DivModalDays key={index}>
                                <ModalHour>{day.dt_txt.split(' ')[1].split(':')[0]}h</ModalHour>
                                <ModalImage src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="imagem de descrição do clima" />
                                <ModalMinAndMaxTemperature>{day.main.temp_max}°</ModalMinAndMaxTemperature>
                                <ModalMinAndMaxTemperature>{day.main.temp_min}°</ModalMinAndMaxTemperature>
                            </DivModalDays>
                        })
                    }
                </DivContaisModalDays>
            </ModalStyle>
        </DivContainsModal>
    )
}

export default ModalDayWeather