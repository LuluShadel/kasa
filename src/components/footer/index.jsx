import styled from "styled-components"
import logoKasaLight from '../../Assets/LogoKasaLight.png'
import colors from "../../styles/colors"

//Ajout du style 


const StyledFooter= styled.footer`
background-color:${colors.secondary};
height:13em;
display:flex;
justify-content:center;

`

const StyledP = styled.p`
color:white;
text-align:center;
font-size:1.5em;
width:8em;
@media (min-width:768px){
    width:100%
}
`

const StyledLogoKasaLight = styled.img`
height:3em;
width:8em;
margin-top:2em;
`

const StyledDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`



//fonction 
function Footer () {
    return(
        <StyledFooter>
            <StyledDiv>
                <StyledLogoKasaLight src={logoKasaLight} alt="Logo de Kasa"/>
                <StyledP> © 2020 Kasa. All rights reserved</StyledP>
            </StyledDiv>
        </StyledFooter>
    )
}

export default Footer 