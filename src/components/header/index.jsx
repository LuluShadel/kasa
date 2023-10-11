
import logoKasa from '../../Assets/LogoKasa.png'
import { NavLink } from 'react-router-dom'
import './header.scss'


function Header (){
    return (
        <header>
            <img src={logoKasa} alt="Logo de Kasa" />
            <nav>
            <NavLink  to="/" activeclassname="active" className="link_header">Accueil</NavLink>
            <NavLink to="/Apropos" activeclassname="active" className="link_header">À propos</NavLink>
            </nav>
        </header>
    )
}

export default Header 