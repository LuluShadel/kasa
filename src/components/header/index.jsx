import { Link } from 'react-router-dom'
import logoKasa from '../../Assets/LogoKasa.png'
import colors from '../../styles/colors'
import styled from 'styled-components'

//Ajout du style 

const StyledLogoKasa = styled.img`
height:40px;
margin:20px;
`
const StyledHeader = styled.header `
display:flex;
justify-content:space-between;
`

const StyledNav = styled.nav`
margin:40px;
`

const StyledLink = styled(Link)`
text-decoration:none;
color:${colors.primary};
margin-right:20px;
font-size:1.5em;
&:hover{
text-decoration:underline;
}
`

// fonction 
function Header (){
    return (
        <StyledHeader>
            <StyledLogoKasa src={logoKasa} alt="Logo de Kasa" />
            <StyledNav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/Apropos">A propos</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header 