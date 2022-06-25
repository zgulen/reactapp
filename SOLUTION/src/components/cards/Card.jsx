import React from "react";
import cardStyle from "./Card.module.css"

const Card = ({ data }) => {
  return (
    <>
      <h3 className={cardStyle["title"]}>POPULAR TOUR PLACES</h3>
    <div className={cardStyle["container"]}>
      {data.map((items) => {
        const { id, title, desc, image } = items;
        return (
          <div key={id} className={cardStyle["cards"]}>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <div className="fade">
              <p>{desc}</p>
            </div>
          </div>

        );
      })}
    </div>
    </>
  );
};

export default Card;
