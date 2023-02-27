import moment from 'moment';
import 'moment/locale/pt-br';
import { WeatherApi } from '../../weather-api.interface';
import { DateDivDay, DivDayStyle, ImageWeather } from "../styled-components"
moment.locale('pt-br')

const DivDay: React.FC<{selectedCity: WeatherApi}> = (props) => {
    const index = [0, 8, 16, 24, 32]

    return (
        <>
            {props.selectedCity ?
                index.map((index) => props.selectedCity.list[index]).map((day, index) => {
                    console.log(day)
                    return <DivDayStyle key={index}>
                        <DateDivDay>{moment(day.dt_txt.split(' ')[0]).format('dddd')}</DateDivDay>
                        <p>{day.main.temp_min}°C</p>
                        <p>{day.main.temp_max}°C</p>
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