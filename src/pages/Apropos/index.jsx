import imgMontagneApropos from '../../Assets/ImgMontagneApropos.png'
import styled from 'styled-components'
import Collapse from '../../components/collapse'

const StyledDivGlobal = styled.div`
margin:40px;

    img{
        object-fit:cover;
height:9em;
width:100%;
border-radius:20px;
filter : brightness(0.8);
margin-bottom:20px;
    }
`

function Apropos () {
    return (
        <StyledDivGlobal>
            <img src={imgMontagneApropos} alt='montagne'/>
            <Collapse />
        </StyledDivGlobal>
    )
}

export default Apropos 