import React from "react";
import classes from "./Backdrop.module.scss";
const Backdrop = (props) => {
  return (
    <div
      className={classes.Backdrop}
      onClick={props.onClick}
      data-testid={props.testId}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
