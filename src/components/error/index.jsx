import { Link } from "react-router-dom"
import './error.scss'





function Error () {
    return(
        <div>
            <h1 className="error-title">404</h1>
            <h2 className="error-sub-title">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error