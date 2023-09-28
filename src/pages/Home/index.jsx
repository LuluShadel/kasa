import styled from 'styled-components';
import imgMontagneHome from '../../Assets/ImgMontagneHome.png'
import Card from '../../components/card'
import data from '../../data';
import colors from '../../styles/colors';


//Ajout de style 

const StyledDivGlobal = styled.div`
margin:40px;
`
const StyledImg = styled.img `
object-fit:cover;
height:9em;
width:100%;
border-radius:20px;
filter : brightness(0.8);
`
const StyledP = styled.div `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color:white;
font-size:2em;
`

const StyledDiv = styled.div`
position:relative;
margin-bottom:20px;
`

const StyledCard = styled.div`
@media (min-width:768px){
  display:flex;
  flex-direction: raw;
  flex-wrap:wrap;
  justify-content:center;
  gap:20px;
  background-color:${colors.background};
  padding:15px;
  border-radius:20px;
}
`
//fonction 
function Home() {
  return (
    <StyledDivGlobal>
      <StyledDiv>
      <StyledImg src={imgMontagneHome} alt='montagne'/>
      <StyledP>
      <p>Chez vous, partout et ailleurs</p>
      </StyledP>
      </StyledDiv>
      <StyledCard>
      {data.map((logement, index) => (
        <Card
          key={`${logement.id}-${index}`}
          cover={logement.cover }
          title={logement.title }
        />
      ))}
    </StyledCard>

    </StyledDivGlobal>
  );
}

export default Home;
