import imgMontagneApropos from '../../Assets/ImgMontagneApropos.png'
import Collapse from '../../components/collapse'
import './apropos.scss'
import Banner from '../../components/banner'


function Apropos () {
    return (
        <div>
            <Banner 
            img={imgMontagneApropos}
            title={""} />
            <div className='divglobal_aPropos'>
            <Collapse
            title="Fiabilité"
            text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes."/>
            <Collapse
            title="Respect"
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platerforme."/>
            <Collapse
            title="Service"
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platerforme."
            />
            <Collapse
            title="Sécurité"
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos equipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers que la sécurité domestique pour nos hôtes."
           />
            </div>
        </div>
    )
}
    



export default Apropos 