import moment from 'moment';
import 'moment/locale/pt-br';
import { WeatherApi } from '../../weather-api.interface';
import { DateDivDay, DivDayStyle } from "../styled-components"
moment.locale('pt-br')

const DivDay: React.FC<{selectedCity: WeatherApi}> = (props) => {
    const index = [0, 8, 16, 24, 32]

    return (
        <>
            {props.selectedCity ?
                index.map((index) => props.selectedCity.list[index]).map((day, index) => {
                    return <DivDayStyle key={index}>
                        <DateDivDay>{moment(day.dt_txt.split(' ')[0]).format('dddd')}</DateDivDay>
                        <p>{day.main.temp_min}°C</p>
                        <p>{day.main.temp_max}°C</p>
                        <p>{day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1)}</p>
                    </DivDayStyle>
                })
                :
                <DivDayStyle></DivDayStyle>
            }
        </>
    )
}

export default DivDay