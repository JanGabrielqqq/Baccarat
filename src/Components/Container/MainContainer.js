import React from "react";
import classes from "./MainContainer.module.scss";

const MainContainer = (props) => {
  return <div className={classes.maincontainer}>{props.children}</div>;
};

export default MainContainer;
