import { TitleCityStyle } from "../styled-components"

const TitleCity: React.FC<{ cityName: string }> = (props) => {
    return (
        <TitleCityStyle>{props.cityName}</TitleCityStyle>
    )
}

export default TitleCity