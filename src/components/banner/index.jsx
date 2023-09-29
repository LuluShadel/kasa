
import './banner.scss'


function Banner (props) {
    return (
<div className='banner'>
      <img className="banner_img" src={props.img} alt=''/>
      <div>
      <p className="banner_title">{props.title}</p>
      </div>
    </div>
    )
}

export default Banner 
