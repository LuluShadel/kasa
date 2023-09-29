import './footer.scss'
import logoKasaLight from '../../Assets/LogoKasaLight.png'


//fonction 
function Footer () {
    return(
        <footer>
            <div>
                <img src={logoKasaLight} alt="Logo de Kasa"/>
                <p> © 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer 