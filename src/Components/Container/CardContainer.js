import React from "react";
import classes from "./CardContainer.module.scss";

const CardContainer = (props) => {
  return (
    <div
      className={classes.CardContainer}
      style={{ flexDirection: `${props.flexDirection}` }}
    >
      <div className={classes.titleCardContainer}>
        <h2>{props.title}</h2>
        <div className={classes.DealCards}>
          <div className={classes.CardImg}>
            <img src={props.Card01} alt='' />
          </div>
          <div className={classes.CardImg}>
            <img src={props.Card02} alt='' />
          </div>
        </div>
      </div>
      <div className={classes.CardImgTilted}>
        <img src={props.Card03} alt='' />
      </div>
    </div>
  );
};

export default CardContainer;
