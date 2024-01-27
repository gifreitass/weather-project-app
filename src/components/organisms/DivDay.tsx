import moment from 'moment';
import 'moment/locale/pt-br';
import store from '../../store';
import { setSelectedDayAction } from '../../store/weather/actions';
import { WeatherApi } from '../../weather-api.interface';
import { DateDivDay, DivDayStyle, ImageWeather, ParagraphDivDay } from "../styled-components"

const DivDay: React.FC<{ selectedCity: WeatherApi }> = (props) => {
    moment.locale('pt-br')
    const index = [5, 13, 21, 29, 37]

    return (
        <>
            {props.selectedCity ?
                index.map((index) => props.selectedCity.list[index]).map((day, index) => {
                    return <DivDayStyle key={index}>
                        <DateDivDay onClick={() =>
                            store.dispatch(setSelectedDayAction(day.dt_txt))
                        }>{moment(day.dt_txt.split(' ')[0]).locale('pt').format('DD/MM')}</DateDivDay>
                        <ParagraphDivDay>{day.main.temp_min}°C</ParagraphDivDay>
                        <ParagraphDivDay>{day.main.temp_max}°C</ParagraphDivDay>
                        <ImageWeather src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="imagem do detalhe do clima" />
                    </DivDayStyle>
                })
                :
                <DivDayStyle></DivDayStyle>
            }
        </>
    )
}

export default DivDay