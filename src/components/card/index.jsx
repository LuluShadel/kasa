
import './card.scss'



// fonction 
function Card({cover, title}) {
    return (
        <div className="card">
            <img src={cover} alt={title} />
            <div className="img_overlay"></div>
            <div className="card_title">{title }</div>
        </div>
    )
}
 
export default Card