import React from "react";
import classes from "./LowerButton.module.scss";
const LowerButton = ({ label, onClick }) => {
  return (
    <div className={classes.LowerButton} onClick={onClick}>
      {label}
    </div>
  );
};

export default LowerButton;
