import { createSlice } from "@reduxjs/toolkit";
import { CardData } from "../../Components/Data/CardData";
import { ChipsData } from "../../Components/Data/Data";
import backside from "../../images/playing-cards-img/backside.png";

const Baccarat = createSlice({
  name: "Baccarat",
  initialState: {
    title: "Baccarat",
    Cards: CardData,
    Card01: null,
    Card02: null,
    Card03: null,
    Card04: null,
    OpenBetModal: false,
    OpenHistoryModal: false,
    betLabel: null,
    BetValue: 0,
    showBet: false,
    betMoney: 1000000,
    history: [],
  },
  reducers: {
    setCards(state, action) {
      state.Cards = state.Cards.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      console.log(state.Cards);
    },
    handleDeal(state, action) {
      state.title = "Baccarat";
      state.showBet = true;
      state.Card01 = backside;
      state.Card02 = backside;
      state.Card03 = backside;
      state.Card04 = backside;
      state.Cards = state.Cards.concat(
        state.Cards[0],
        state.Cards[1],
        state.Cards[2],
        state.Cards[3]
      ).slice(4, state.Cards.length + 4);
      console.log(state.Cards);
      state.BetValue = 0;
    },

    handleBetButton(state, action) {
      console.log(`${typeof action.payload}`);
      switch (action.payload) {
        case "0":
          state.OpenBetModal = true;
          state.betLabel = "Player Pair";
          break;
        case "1":
          state.OpenBetModal = true;
          state.betLabel = "Player";
          break;
        case "2":
          state.OpenBetModal = true;
          state.betLabel = "Tie";
          break;
        case "3":
          state.OpenBetModal = true;
          state.betLabel = "Banker";
          break;
        case "4":
          state.OpenBetModal = true;
          state.betLabel = "Banker Pair";
          break;

        default:
          break;
      }
    },
    closeModal(state, action) {
      state.OpenBetModal = false;
      state.OpenHistoryModal = false;
      state.BetValue = 0;
    },
    showHistory(state, action) {
      state.OpenHistoryModal = true;
    },
    addBet(state, action) {
      state.BetValue =
        state.BetValue + ChipsData[parseInt(action.payload)].value;
      console.log(state.BetValue);
    },
    finalizeBet(state, action) {
      state.OpenBetModal = false;
      state.showBet = false;
      state.Card01 = state.Cards[0].img;
      state.Card02 = state.Cards[1].img;
      state.Card03 = state.Cards[2].img;
      state.Card04 = state.Cards[3].img;

      const playerValueNumber = state.Cards[0].value + state.Cards[1].value;
      const bankerValueNumber = state.Cards[2].value + state.Cards[3].value;
      const playerValue = playerValueNumber.toString().slice(-1);
      const bankerValue = bankerValueNumber.toString().slice(-1);
      console.log(`playerValue:${playerValue}, bankerValue:${bankerValue}`);
      switch (state.betLabel) {
        case "Player":
          if (playerValue > bankerValue) {
            state.title = "YOU WON!";
            state.betMoney = state.betMoney + state.BetValue;
            const historyData = {
              playerCard1: state.Cards[0].name,
              playerCard2: state.Cards[1].name,
              playerValue,
              bankerCard1: state.Cards[2].name,
              bankerCard2: state.Cards[3].name,
              bankerValue,
              betLabel: state.betLabel,
              betValue: state.BetValue,
              balanceDiff: `+${state.BetValue}`,
            };

            state.history = [...state.history, historyData];
          } else {
            state.title = "YOU LOSE!";
            state.betMoney = state.betMoney - state.BetValue;
            const historyData = {
              playerCard1: state.Cards[0].name,
              playerCard2: state.Cards[1].name,
              playerValue,
              bankerCard1: state.Cards[2].name,
              bankerCard2: state.Cards[3].name,
              bankerValue,
              betLabel: state.betLabel,
              betValue: state.BetValue,
              balanceDiff: `-${state.BetValue}`,
            };

            state.history = [...state.history, historyData];
          }
          break;
        case "Player Pair":
          if (
            state.Cards[0].numberOrPicture === state.Cards[1].numberOrPicture
          ) {
            state.title = "YOU WON!";
            state.betMoney = state.betMoney + state.BetValue;
            const historyData = {
              playerCard1: state.Cards[0].name,
              playerCard2: state.Cards[1].name,
              playerValue,
              bankerCard1: state.Cards[2].name,
              bankerCard2: state.Cards[3].name,
              bankerValue,
              betLabel: state.betLabel,
              betValue: state.BetValue,
              balanceDiff: `+${state.BetValue}`,
            };

            state.history = [...state.history, historyData];
          } else {
            state.title = "YOU LOSE!";
            state.betMoney = state.betMoney - state.BetValue;
            const historyData = {
              playerCard1: state.Cards[0].name,
              playerCard2: state.Cards[1].name,
              playerValue,
              bankerCard1: state.Cards[2].name,
              bankerCard2: state.Cards[3].name,
              bankerValue,
              betLabel: state.betLabel,
              betValue: state.BetValue,
              balanceDiff: `-${state.BetValue}`,
            };

            state.history = [...state.history, historyData];
          }
          break;
        case "Tie":
          if (playerValue === bankerValue) {
            state.title = "YOU WON!";
            state.betMoney = state.betMoney + state.BetValue;
            const historyData = {
              playerCard1: state.Cards[0].name,
              playerCard2: state.Cards[1].name,
              playerValue,
              bankerCard1: state.Cards[2].name,
              bankerCard2: state.Cards[3].name,
              bankerValue,
              betLabel: state.betLabel,
              betValue: state.BetValue,
              balanceDiff: `+${state.BetValue}`,
            };

            state.history = [...state.history, historyData];
          } else {
            state.title = "YOU LOSE!";
            state.betMoney = state.betMoney - state.BetValue;
            const historyData = {
              playerCard1: state.Cards[0].name,
              playerCard2: state.Cards[1].name,
              playerValue,
              bankerCard1: state.Cards[2].name,
              bankerCard2: state.Cards[3].name,
              bankerValue,
              betLabel: state.betLabel,
              betValue: state.BetValue,
              balanceDiff: `-${state.BetValue}`,
            };

            state.history = [...state.history, historyData];
          }
          break;
        case "Banker":
          if (playerValue < bankerValue) {
            state.title = "YOU WON!";
            state.betMoney = state.betMoney + state.BetValue;
            const historyData = {
              playerCard1: state.Cards[0].name,
              playerCard2: state.Cards[1].name,
              playerValue,
              bankerCard1: state.Cards[2].name,
              bankerCard2: state.Cards[3].name,
              bankerValue,
              betLabel: state.betLabel,
              betValue: state.BetValue,
              balanceDiff: `+${state.BetValue}`,
            };

            state.history = [...state.history, historyData];
          } else {
            state.title = "YOU LOSE!";
            state.betMoney = state.betMoney - state.BetValue;
            const historyData = {
              playerCard1: state.Cards[0].name,
              playerCard2: state.Cards[1].name,
              playerValue,
              bankerCard1: state.Cards[2].name,
              bankerCard2: state.Cards[3].name,
              bankerValue,
              betLabel: state.betLabel,
              betValue: state.BetValue,
              balanceDiff: `-${state.BetValue}`,
            };

            state.history = [...state.history, historyData];
          }
          break;
        case "Banker Pair":
          if (
            state.Cards[2].numberOrPicture === state.Cards[3].numberOrPicture
          ) {
            state.title = "YOU WON!";
            state.betMoney = state.betMoney + state.BetValue;
            const historyData = {
              playerCard1: state.Cards[0].name,
              playerCard2: state.Cards[1].name,
              playerValue,
              bankerCard1: state.Cards[2].name,
              bankerCard2: state.Cards[3].name,
              bankerValue,
              betLabel: state.betLabel,
              betValue: state.BetValue,
              balanceDiff: `+${state.BetValue}`,
            };

            state.history = [...state.history, historyData];
          } else {
            state.title = "YOU LOSE!";
            state.betMoney = state.betMoney - state.BetValue;
            const historyData = {
              playerCard1: state.Cards[0].name,
              playerCard2: state.Cards[1].name,
              playerValue,
              bankerCard1: state.Cards[2].name,
              bankerCard2: state.Cards[3].name,
              bankerValue,
              betLabel: state.betLabel,
              betValue: state.BetValue,
              balanceDiff: `-${state.BetValue}`,
            };

            state.history = [...state.history, historyData];
          }
          break;

        default:
          break;
      }
    },
  },
});
export const BaccaratActions = Baccarat.actions;
export default Baccarat;
