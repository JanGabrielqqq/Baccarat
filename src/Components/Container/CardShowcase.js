import React from "react";
import classes from "./CardShowcase.module.scss";

const CardShowcase = (props) => {
  return <div className={classes.CardShowcase}>{props.children}</div>;
};

export default CardShowcase;
