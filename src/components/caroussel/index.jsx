import "./caroussel.scss"

function Caroussel (props) {

    return (
        <div className="caroussel">
            <img src={props.img} alt={props.title} />
        </div>
    )
}

export default Caroussel