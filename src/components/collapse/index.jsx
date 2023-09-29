import styled from "styled-components";
import colors from "../../styles/colors";

const StyledGlobal = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    div {
        background-color:${colors.primary};
color:white;
margin-bottom:20px;
padding:5px;
width:80%;
border-radius:5px;
    }
`


function Collapse (){
    return (
        <StyledGlobal>
        <div >Fiabilité </div>
        <div >Respect</div>
        <div >Service</div>
        <div >Sécurité</div>
        </StyledGlobal>
    )
}

export default Collapse 