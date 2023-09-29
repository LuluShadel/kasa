import { Link } from 'react-router-dom'
import logoKasa from '../../Assets/LogoKasa.png'
import './header.scss'


function Header (){
    return (
        <header>
            <img src={logoKasa} alt="Logo de Kasa" />
            <nav>
            <Link className='link_header' to="/">Accueil</Link>
            <Link className='link_header' to="/Apropos">A propos</Link>
            </nav>
        </header>
    )
}

export default Header 