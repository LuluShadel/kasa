import imgMontagneApropos from '../../Assets/ImgMontagneApropos.png'
import Collapse from '../../components/collapse'
import './apropos.scss'


function Apropos () {
    return (
        <div className='divglobal_aPropos'>
            <img src={imgMontagneApropos} alt='montagne'/>
            <Collapse />
        </div>
    )
}

export default Apropos 