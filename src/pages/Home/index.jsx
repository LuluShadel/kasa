import './home.scss'
import imgMontagneHome from '../../Assets/ImgMontagneHome.png'
import Card from '../../components/card'
import data from '../../data';




//fonction 
function Home() {
  return (
    <div>
      <div className='globalDiv_home'>
      <img src={imgMontagneHome} alt='montagne'/>
      <div>
      <p>Chez vous, partout et ailleurs</p>
      </div>
      </div>
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
