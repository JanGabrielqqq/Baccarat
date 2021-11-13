import React from "react";
import Backdrop from "./Backdrop";
import classes from "./HistoryModal.module.scss";
const HistoryModal = ({ onClose, history }) => {
  return (
    <div className={classes.HistoryModalContainer}>
      <Backdrop onClick={onClose} />
      <div className={classes.HistoryModal}>
        <h1>History</h1>
        <div className={classes.HistoryModalTableHeader}>
          <p>Player's Cards</p>
          <p>Player's value</p>
          <p>Banker's Cards</p>
          <p>Banker's value</p>
          <p>Bet Placed</p>
          <p>balance diff</p>
        </div>
        <div className={classes.HistoryModalTableBody}>
          {/* map */}
          {history.map((data, i) => (
            <div className={classes.HistoryModalTableContent} id={i} key={i}>
              <p>{data.playerCard1}</p>
              <p>{data.playerCard2}</p>
              <p className={classes.spanTwo}>{data.playerValue}</p>
              <p>{data.bankerCard1}</p>
              <p>{data.bankerCard2}</p>
              <p className={classes.spanTwo}>{data.bankerValue}</p>
              <p>{data.betLabel}</p>
              <p>{data.betValue}</p>
              <p className={classes.spanTwo}>{data.balanceDiff}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
