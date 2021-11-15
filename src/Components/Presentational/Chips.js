import React from "react";
import classes from "./Chips.module.scss";
const Chips = ({ img, onClick, id, testId }) => {
  return (
    <div
      className={classes.Chips}
      onClick={onClick}
      id={id}
      data-testid={testId}
    >
      <img src={img} alt='' id={id} />
    </div>
  );
};

export default Chips;
