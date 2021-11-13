import React from "react";
import ChipsContainer from "../Container/ChipsContainer";
import Chips from "../Presentational/Chips";
import classes from "./BetModal.module.scss";

import LowerButton from "../Presentational/LowerButton";
import Backdrop from "./Backdrop";
import { ChipsData } from "../Data/Data";
const BetModal = ({ onClose, onFinalize, label, addBet, betValue }) => {
  return (
    <div className={classes.BetModalContainer}>
      <Backdrop onClick={onClose}></Backdrop>
      <div className={classes.BetModal}>
        <h1>{`Bet on ${label}`}</h1>
        <ChipsContainer>
          {ChipsData.map((data, i) => (
            <Chips img={data.img} key={i} id={i} onClick={addBet} />
          ))}
        </ChipsContainer>
        <div>Total Bet: {betValue}</div>
        <LowerButton label='Finalize Bet' onClick={onFinalize} />
        <LowerButton label='Cancel' onClick={onClose} />
      </div>
    </div>
  );
};

export default BetModal;
