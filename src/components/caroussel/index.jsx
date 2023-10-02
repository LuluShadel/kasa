import React, { useState } from "react";
import "./caroussel.scss";
import ArrowLeft from "../../Assets/arrow_left.png";
import ArrowRight from "../../Assets/arrow_right.png";

function Caroussel(props) {
  const { img, title } = props;

  const [count, setCount] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCount((prevCount) => (prevCount === 0 ? img.length - 1 : prevCount - 1));
    } else {
      setCount((prevCount) => (prevCount === img.length - 1 ? 0 : prevCount + 1));
    }
  };

  // Condition pour afficher les flèches seulement si img contient plus d'une image
  const showArrows = img.length > 1;

  return (
    <div className="caroussel">
      {showArrows && (
        <img
          className="arrow_left arrow"
          src={ArrowLeft}
          alt="fleche de droite"
          onClick={() => handleArrowClick("left")}
        />
      )}
      <img className="caroussel_img" src={img[count]} alt={title} />
      {showArrows && (
        <img
          className="arrow_right arrow"
          src={ArrowRight}
          alt="fleche de gauche"
          onClick={() => handleArrowClick("right")}
        />
        )}
        {showArrows && (
        <div className="count">{count+1}/{img.length}</div>
        )}
      
    </div>
  );
}

export default Caroussel;


