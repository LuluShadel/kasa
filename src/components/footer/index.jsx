import styled from "styled-components"
import logoKasaLight from '../../Assets/LogoKasaLight.png'
import colors from "../../styles/colors"

//Ajout du style 
const StyledFooter= styled.footer`
background-color:${colors.secondary};
height:13em;
display:flex;
justify-content:center;
margin:0;
  div{
    display:flex;
    flex-direction:column;
    align-items:center;

    img {
        height:3em;
        width:8em;
        margin-top:2em;
    }

    p{
        color:white;
        text-align:center;
        font-size:1.5em;
        width:8em;
        @media (min-width:768px){
            width:100% 
    }
  }
`

//fonction 
function Footer () {
    return(
        <StyledFooter>
            <div>
                <img src={logoKasaLight} alt="Logo de Kasa"/>
                <p> © 2020 Kasa. All rights reserved</p>
            </div>
        </StyledFooter>
    )
}

export default Footer 