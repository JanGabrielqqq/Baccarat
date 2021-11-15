import React from "react";
import classes from "./BetContainer.module.scss";
const BetContainer = (props) => {
  return (
    <div className={classes.BetContainer} data-testid='bet-container'>
      {props.children}
    </div>
  );
};

export default BetContainer;
