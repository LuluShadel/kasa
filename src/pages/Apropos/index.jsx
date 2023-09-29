import imgMontagneApropos from '../../Assets/ImgMontagneApropos.png'
import Collapse from '../../components/collapse'
import './apropos.scss'
import Banner from '../../components/banner'


function Apropos () {
    return (
        <div>
            <Banner 
            img={imgMontagneApropos}
            title={""} />
            <div className='divglobal_aPropos'>
            <Collapse />
        </div>
        </div>
    )
}

export default Apropos 