import React from "react";
import classes from "./Title.module.scss";

const Title = (props) => {
  return (
    <div className={classes.Title}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
