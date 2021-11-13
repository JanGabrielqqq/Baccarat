import React from "react";
import classes from "./BetButton.module.scss";
const BetButton = ({ label, id, onClick }) => {
  return (
    <div className={classes.BetButton} id={id} onClick={onClick}>
      {label}
    </div>
  );
};

export default BetButton;
