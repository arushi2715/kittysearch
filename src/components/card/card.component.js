import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.kitty.id}?set=set4&size=140x140`}
        alt="kittenimage"
      ></img>
      <h1>{props.kitty.name}</h1>
      <p>{props.kitty.email}</p>
    </div>
  );
};
