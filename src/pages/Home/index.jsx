import './home.scss'
import imgMontagneHome from '../../Assets/ImgMontagneHome.png'
import Card from '../../components/card'
import data from '../../data'
import Banner from '../../components/banner';
import { Link } from 'react-router-dom';




//fonction 
function Home() {
  return (
    <div>
      <Banner 
        img={imgMontagneHome}
        title="Chez vous, partout et ailleurs" />
      <div className='card_home'>
      {data.map((logement, index) => (
        <Link 
        key={`${logement.id}-${index}`}
        to={`/logement/${logement.id}`}
        >
        <Card
          cover={logement.cover }
          title={logement.title }
        />
        </Link>
      ))}
    </div>

    </div>
  )}


export default Home;
