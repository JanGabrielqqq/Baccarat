import React from "react";
import classes from "./BetButton.module.scss";
const BetButton = ({ label, id, onClick, testId }) => {
  return (
    <div
      className={classes.BetButton}
      id={id}
      onClick={onClick}
      data-testid={testId}
    >
      {label}
    </div>
  );
};

export default BetButton;
