import styled from "styled-components"

// style 

const StyledCard = styled.div`
  position: relative;
  width: 100%;
  margin-bottom:20px;
  @media (min-width:768px){
    width:450px;
  }
  img{
    object-fit: cover;
    width: 100%;
    height: 400px;
    border-radius: 20px;
    margin
  }
  
`

const ImageOverlay = styled.div`
  position: absolute;
  bottom:5px;
  left: 0;
  width: 100%;
  height: 80px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)); /* Dégradé linéaire pour l'assombrissement */
  pointer-events: none;
`;

const StyledSpan = styled.div `
position: relative;
    top: -80px;
    left: 30px;
    color: white;
    font-size: 1.5em;
    width: 300px;
    height:0px;
`




// fonction 
function Card({cover, title}) {
    return (
        <StyledCard>
            <img src={cover} alt={title} />
            <ImageOverlay />
            <StyledSpan>{title }</StyledSpan>
        </StyledCard>
    )
}
 
export default Card