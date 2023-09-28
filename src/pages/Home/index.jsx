import styled from 'styled-components';
import imgMontagneHome from '../../Assets/ImgMontagneHome.png'


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
    

    </StyledDivGlobal>
  );
}

export default Home;
