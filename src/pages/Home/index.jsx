import './home.scss'
import imgMontagneHome from '../../Assets/ImgMontagneHome.png'
import Card from '../../components/card'
import data from '../../data';
import Banner from '../../components/banner';




//fonction 
function Home() {
  return (
    <div>
      <Banner 
        img={imgMontagneHome}
        title="Chez vous, partout et ailleurs" />
      <div className='card_home'>
      {data.map((logement, index) => (
        <Card
          key={`${logement.id}-${index}`}
          cover={logement.cover }
          title={logement.title }
        />
      ))}
    </div>

    </div>
  );
}

export default Home;
