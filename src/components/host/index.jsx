
import './host.scss'

function Host (props) {
    return (
        <div className='host'>
            <div className='host-name'>{props.name}</div>
            <img className='host-img' src={props.img} alt={props.name} />
        </div>
    )
}

export default Host