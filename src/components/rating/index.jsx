import "./rating.scss"


function Rating (props) {
    const array = [1,2,3,4,5];

    const rating_note = props.rating

    return (
        <div className="rating"> 
            <div className="neutral_star">{array.map((rangeRating) =>
            <span key={rangeRating.toString()}><i className="fa-solid fa-star"></i></span>)}
            </div>
            <div className="show_star">
            {array.map((rangeRating) =>
            rating_note >= rangeRating ? <span key={rangeRating.toString()}><i className="fa-solid fa-star"></i></span> : null )}
       </div>
       
        </div>
    
    )
}

export default Rating