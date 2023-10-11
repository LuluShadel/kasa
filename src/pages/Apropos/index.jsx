import imgMontagneApropos from '../../Assets/ImgMontagneApropos.png'
import Collapse from '../../components/collapse'
import dataCollapse from '../../data-collapse'
import './apropos.scss'
import Banner from '../../components/banner'


function Apropos () {
    return (
        <div className='divglobal_aPropos'>
            <Banner 
            img={imgMontagneApropos}
            title={""} />
            <div>
                {dataCollapse.map((textCollapse)=> (
                    <Collapse
                    title={textCollapse.title}
                    text={textCollapse.text}
                    /> 
                )
                )}
            
            </div>
        </div>
    )
}
    



export default Apropos 

