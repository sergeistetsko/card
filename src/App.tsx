import './App.css'
import styled from 'styled-components'
import {StyledImg} from './components/StyledImg.styled.tsx'
import {StyledHeading} from './components/StyledHeading.styled.tsx'
import {StyledDescription} from './components/StyledDescription.styled.tsx'
import {StyledWrapperBtns} from './components/StyledWrapperBtns.styled.tsx'
import {StyledButton} from './components/StyledButton.styled.tsx'
import {colorsTheme} from './styles/Theme.styled.tsx'

function App() {

    return (
        <StyledSection>
            <StyledImg src={'src/assets/images/picture.png'} alt={'picture'}></StyledImg>
            <StyledHeading>Headline</StyledHeading>
            <StyledDescription>
                Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
            </StyledDescription>
            <StyledWrapperBtns>
                <StyledButton color={colorsTheme.colors.primary} btnType={'primary'}>See more</StyledButton>
                <StyledButton color={colorsTheme.colors.secondary} btnType={'outlined'}>Save</StyledButton>
            </StyledWrapperBtns>
        </StyledSection>
    )
}

export default App

const StyledSection = styled.section`
    width: 300px;
    height: 350px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 10px 10px 22px 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
`