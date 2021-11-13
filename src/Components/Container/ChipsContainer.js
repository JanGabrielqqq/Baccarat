import React from "react";
import classes from "./ChipsContainer.module.scss";
const ChipsContainer = (props) => {
  return <div className={classes.ChipsContainer}>{props.children}</div>;
};

export default ChipsContainer;
