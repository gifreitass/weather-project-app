import { ButtonStyle, InputStyle, SearchDiv } from "../styled-components"

const Search: React.FC<{setCityName: React.Dispatch<React.SetStateAction<string>>, handleClick: () => void, cityName: string }> = (props) => {
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        props.setCityName(evt.currentTarget.value)
    }

    return (
        <SearchDiv>
            <InputStyle value={props.cityName} type="text" placeholder="Pesquise a cidade" onChange={handleChange}/>
            <ButtonStyle onClick={props.handleClick}>Buscar</ButtonStyle>
        </SearchDiv>
    )
}

export default Search