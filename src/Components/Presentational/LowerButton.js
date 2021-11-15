import React from "react";
import classes from "./LowerButton.module.scss";
const LowerButton = ({ label, onClick, testId }) => {
  return (
    <div className={classes.LowerButton} onClick={onClick} data-testid={testId}>
      {label}
    </div>
  );
};

export default LowerButton;
