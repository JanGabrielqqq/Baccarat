import React from "react";
import classes from "./Balance.module.scss";

const Balance = ({ balance }) => {
  return (
    <div className={classes.Balance}>
      <h3>Balance: {balance.toLocaleString("en")}</h3>
    </div>
  );
};

export default Balance;
