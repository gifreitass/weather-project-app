import styled from "styled-components";

export const Image = styled.img`
    width: 80px;
    margin-top: 50px;
`

export const DivWeather = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

export const ButtonStyle = styled.button`
    padding: 5px 15px 5px 15px;
    background-color: #000000;
    border-radius: 5px;
    border: #000000 2px solid;
    color: white;
    font-weight: 500;
    cursor: pointer;
`

export const InputStyle = styled.input`
    border-radius: 5px;
    padding: 5px;
    border: #000000 2px solid;
    font-weight: 500;
    margin-top: 20px;
    background-color: white;
`

export const TitleCityStyle = styled.p`
    font-size: 25px;
    font-weight: 500;
    margin: 15px;
`

export const DivDayStyle = styled.div`
    display: flex;
    gap: 20px;
    font-size: medium;
    padding: 5px;
    align-items: center;
    background-color: #cacaca;
    border-radius: 5px;
    margin: 10px;
    width: 90vw;
    justify-content: center;
`

export const DateDivDay = styled.p`
    font-weight: 500;
    background-color: #cacaca;
    cursor: pointer;
`

export const ImageWeather = styled.img`
    width: 60px;
    background-color: #cacaca;
`

export const ParagraphDivDay = styled.p`
    background-color: #cacaca;
`

export const ModalStyle = styled.div`
    position: fixed;
    background-color: black;
    height: 40vh;
    width: 100vw;
    bottom: 0;
    left: 0;
    right: 0;
`

export const DivContainsModal = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(169, 169, 169, 0.3);
    backdrop-filter: blur(1px);
`

export const CloseImage = styled.img`
    width: 20px;
    position: absolute;
    right: 0;
    margin: 15px 15px 0 0;
    cursor: pointer;
`

export const DivMainTemperature = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 10px;
    margin-top: 10px;
`
export const MainTemperature = styled.p`
    font-size: 50px;
    font-weight: 500;
`

export const MinAndMaxTemperature = styled.p`
    font-weight: 500;
`

export const SeparateDiv = styled.div`
    width: 80vw;
    height: 1px;
    background-color: white;
    margin: 10px auto;
`

export const ModalHour = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 500;
`

export const ModalImage = styled.img`
    width: 50px;
`

export const ModalMinAndMaxTemperature = styled.p`
    color: white;
    font-size: 20px;
`

export const DivContaisModalDays = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    gap: 30px;
`

export const DivModalDays = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`