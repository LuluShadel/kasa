import styled from "styled-components";
import colors from "../../styles/colors";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const StyledGlobal = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    .collapse {
        background-color:${colors.primary};
        color:white;
        margin-bottom:20px;
        padding:5px;
        width:80%;
        border-radius:5px;
        display: flex;
        justify-content: space-between;
 p{
    margin:0 0 0 10px;
    font-size:1.1em;
 }

 i {
    margin:3px;
 }


    }

.collapseMenu {
    width: 80%;
    background-color: ${colors.background};
    color:${colors.primary};
    position: relative;
    top: -22px;
    padding: 5px;
    z-index: -2;
}

.rotate-90 {
    transform: rotate(-180deg);
    transition: transform 0.5s ease;
}

`



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
        <StyledGlobal>
        <div className="collapse" onClick={() => toggleCollapse("fiabilite")} >
            <p>Fiabilité</p>
            <FontAwesomeIcon
          icon={faChevronUp}
          className={`fa-chevron-up ${rotation.fiabilite ? "rotate-90" : ""}`}
        />
        </div>
        {isOpen.fiabilite && (
        <div className="collapseMenu">
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
                <div className="collapseMenu"><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platerforme. /</p></div>
            )}
        <div className="collapse" onClick={()=> toggleCollapse("service")}>
            <p>Service</p>
            <FontAwesomeIcon
          icon={faChevronUp}
          className={`fa-chevron-up ${rotation.service ? "rotate-90" : ""}`}
        />
        </div>
        {isOpen.service && (
                <div className="collapseMenu"><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platerforme.</p></div>
            )}
        <div className="collapse" onClick={() => toggleCollapse("securite")} >
            <p>Sécurité</p>
            <FontAwesomeIcon
          icon={faChevronUp}
          className={`fa-chevron-up ${rotation.securite ? "rotate-90" : ""}`}
        />
        </div>
        {isOpen.securite && (
                <div className="collapseMenu"> <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos equipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers que la sécurité domestique pour nos hôtes.</p> </div>
            )}
        </StyledGlobal>
    )
}

export default Collapse 