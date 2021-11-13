import "./App.scss";
import Balance from "./Components/Container/Balance";
import CardContainer from "./Components/Container/CardContainer";
import CardShowcase from "./Components/Container/CardShowcase";
import MainContainer from "./Components/Container/MainContainer";
import BetButton from "./Components/Presentational/BetButton";
import Title from "./Components/Presentational/Title";

import img3 from "./images/playing-cards-img/backside.png";

import BetContainer from "./Components/Container/BetContainer";
import LowerButton from "./Components/Presentational/LowerButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaccaratActions } from "./Store/Redux/Baccarat";
import { BetButtonData } from "./Components/Data/Data";

import BetModal from "./Components/Modal/BetModal";
import HistoryModal from "./Components/Modal/HistoryModal";
// import ChipsContainer from "./Components/Container/ChipsContainer";
// import Chips from "./Components/Presentational/Chips";

function App() {
  const Baccarat = useSelector((state) => state.Baccarat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BaccaratActions.setCards());
  }, [dispatch]);

  const handleDeal = () => {
    dispatch(BaccaratActions.handleDeal());
    // console.log(Baccarat.Cards);
  };

  const handleBetButton = (e) => {
    dispatch(BaccaratActions.handleBetButton(e.target.id));
  };
  const closeModal = () => {
    dispatch(BaccaratActions.closeModal());
  };

  const handleFinalizeBet = () => {
    dispatch(BaccaratActions.finalizeBet());
  };

  const showHistory = () => {
    dispatch(BaccaratActions.showHistory());
  };
  const addBet = (e) => {
    dispatch(BaccaratActions.addBet(e.target.id));
  };

  const shuffle = () => {
    dispatch(BaccaratActions.setCards());
  };

  return (
    <>
      {Baccarat.OpenBetModal && (
        <BetModal
          onClose={closeModal}
          onFinalize={handleFinalizeBet}
          label={Baccarat.betLabel}
          addBet={addBet}
          betValue={Baccarat.BetValue}
        />
      )}
      {Baccarat.OpenHistoryModal && (
        <HistoryModal onClose={closeModal} history={Baccarat.history} />
      )}
      <MainContainer>
        <Title title={Baccarat.title} />
        <Balance balance={Baccarat.betMoney} />
        <CardShowcase>
          {/* Hardcoded */}
          <CardContainer
            Card01={Baccarat.Card01}
            Card02={Baccarat.Card02}
            Card03={img3}
            title='Player'
            flexDirection='row-reverse'
          />
          <CardContainer
            Card01={Baccarat.Card03}
            Card02={Baccarat.Card04}
            Card03={img3}
            title='Banker'
            flexDirection='row'
          />
        </CardShowcase>
        {Baccarat.showBet && (
          <BetContainer>
            {BetButtonData.map((data, i) => (
              <BetButton
                label={data.label}
                key={i}
                id={i}
                onClick={handleBetButton}
              />
            ))}
          </BetContainer>
        )}
        {/* map */}
        <LowerButton label='Deal' onClick={handleDeal} />
        <LowerButton label='Shuffle' onClick={shuffle} />
        <LowerButton label='Show History' onClick={showHistory} />
      </MainContainer>
    </>
  );
}

export default App;
