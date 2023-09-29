
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import './collapse.scss'



function Collapse (){
    

    const [isOpen,setIsOpen] = useState({
        fiabilite:false,
        respect:false,
        service:false,
        securite:false

    });

    const [rotation, setRotation] = useState({
        fiabilite: false,
        respect: false,
        service: false,
        securite: false,
      });
    
      const toggleCollapse = (key) => {
        setIsOpen({
          ...isOpen,
          [key]: !isOpen[key],
        });
    
        // Inversez la rotation seulement pour la div cliquée
        setRotation({
          ...rotation,
          [key]: !rotation[key],
        });
      };
    
    return (
        <div className="menu">
        <div className="collapse" onClick={() => toggleCollapse("fiabilite")} >
            <p>Fiabilité</p>
            <FontAwesomeIcon
          icon={faChevronUp}
          className={`fa-chevron-up ${rotation.fiabilite ? "rotate-90" : ""}`}
        />
        </div>
        {isOpen.fiabilite && (
        <div className="menu_Hide">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes.</p>
        </div>
      )}
        <div className="collapse" onClick={() => toggleCollapse("respect")} >
            <p>Respect</p>
            <FontAwesomeIcon
          icon={faChevronUp}
          className={`fa-chevron-up ${rotation.respect ? "rotate-90" : ""}`}
        />
            </div>
            {isOpen.respect && (
                <div className="menu_Hide"><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platerforme. /</p></div>
            )}
        <div className="collapse" onClick={()=> toggleCollapse("service")}>
            <p>Service</p>
            <FontAwesomeIcon
          icon={faChevronUp}
          className={`fa-chevron-up ${rotation.service ? "rotate-90" : ""}`}
        />
        </div>
        {isOpen.service && (
                <div className="menu_Hide"><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platerforme.</p></div>
            )}
        <div className="collapse" onClick={() => toggleCollapse("securite")} >
            <p>Sécurité</p>
            <FontAwesomeIcon
          icon={faChevronUp}
          className={`fa-chevron-up ${rotation.securite ? "rotate-90" : ""}`}
        />
        </div>
        {isOpen.securite && (
                <div className="menu_Hide"> <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos equipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers que la sécurité domestique pour nos hôtes.</p> </div>
            )}
        </div>
    )
}

export default Collapse 