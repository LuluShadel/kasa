import data from "../../data"
import { useParams } from "react-router-dom";
import Error from "../../components/error";
import Caroussel from "../../components/caroussel";
import Tags from "../../components/tags"
import Collapse from "../../components/collapse";
import Rating from "../../components/rating";
import Host from "../../components/host"
import './logement.scss'


function Logement() {
    const { id } = useParams();
    const logement = data.find((item) => item.id ===(id));
    
    //const [logements, setLogements] = useState([0])
    
    /* useEffect (()=> {
      fetch ("../../data")
      .then ((response) => response.json())
      .then ((data) => {
        setLogement(data)
      }) 
      .catch ((error) => {
        console.log ("Erreur lors de la récupération des données" error )
      })
    }
    [])*/
  
    if (!logement) {
        return <Error />
    }
    const equiments_list = logement.equipments
  
    return (
      <div className="globalDiv-logement">
        <Caroussel 
        img={logement.pictures}
        title={logement.title}
        />
<div className="title-to-host">
        <div className="title-tag">
              <h2 className="logement-title">{logement.title}</h2>
              <p className="logement-location">{logement.location}</p>
        
              <Tags 
              tags={logement.tags}
              />
        </div>
    
        <div className="rating-host">
        <     Rating 
              rating={logement.rating}
              />
              <Host 
              name={logement.host.name}
              img={logement.host.picture}
              />
        </div>
        </div>
        <div className="logement-collapse">
        <Collapse
        title="Description"
        text={[logement.description]}
        />

        <Collapse 
        title="Equipements"
        text={equiments_list}
        />
        </div>
      </div>
    );
  }
  
  export default Logement;