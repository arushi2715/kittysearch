import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component.js";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.kitties.map((kitty) => (
        <Card key={kitty.id} kitty={kitty} />
      ))}
    </div>
  );
};
