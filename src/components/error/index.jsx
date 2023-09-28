import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../styles/colors"


//style 

const StyledH1 = styled.h1`
    font-size:15em;
    color:${colors.primary};
    text-align:center;
`

const StyledH2 = styled.h2 `
color: ${colors.primary};
font-size:3em;
text-align:center;
`

const StyledLink = styled(Link) `
color:${colors.primary};
display: flex;
justify-content: center;
margin-bottom:100px;
margin-top:100px
`


function Error () {
    return(
        <div>
            <StyledH1>404</StyledH1>
            <StyledH2>Oups! La page que vous demandez n'existe pas.</StyledH2>
            <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
        </div>
    )
}

export default Error