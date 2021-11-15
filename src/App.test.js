import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import App from "./App";
import BetModal from "./Components/Modal/BetModal";
import Store from "./Store/Redux/ReduxIndex";

afterEach(cleanup);
test("render bet modal", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const dealButton = screen.getByTestId("deal-button");
  userEvent.click(dealButton);
  const betButtonContainer = screen.getByTestId("bet-container");
  expect(betButtonContainer).toBeInTheDocument();
});

test("Player Pair button to show modal and change header", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const betButton = screen.getByTestId("bet-button-0");
  userEvent.click(betButton);
  const betModal = screen.getByTestId("bet-modal");
  const betHeader = screen.getByTestId("bet-header");
  expect(betHeader).toHaveTextContent("Bet on Player Pair");
  expect(betModal).toBeInTheDocument();
});
test("Player button to show modal and change header", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const betButton = screen.getByTestId("bet-button-1");
  userEvent.click(betButton);
  const betModal = screen.getByTestId("bet-modal");
  const betHeader = screen.getByTestId("bet-header");
  expect(betHeader).toHaveTextContent("Bet on Player");
  expect(betModal).toBeInTheDocument();
});
test("Tie button to show modal and change header", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const betButton = screen.getByTestId("bet-button-2");
  userEvent.click(betButton);
  const betModal = screen.getByTestId("bet-modal");
  const betHeader = screen.getByTestId("bet-header");
  expect(betHeader).toHaveTextContent("Bet on Tie");
  expect(betModal).toBeInTheDocument();
});
test("Banker button to show modal and change header", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const betButton = screen.getByTestId("bet-button-3");
  userEvent.click(betButton);
  const betModal = screen.getByTestId("bet-modal");
  const betHeader = screen.getByTestId("bet-header");
  expect(betHeader).toHaveTextContent("Bet on Banker");
  expect(betModal).toBeInTheDocument();
});
test("Banker Pair button to show modal and change header", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const betButton = screen.getByTestId("bet-button-4");
  userEvent.click(betButton);
  const betModal = screen.getByTestId("bet-modal");
  const betHeader = screen.getByTestId("bet-header");
  expect(betHeader).toHaveTextContent("Bet on Banker Pair");
  expect(betModal).toBeInTheDocument();
});

test("show history button to show modal", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const historyButton = screen.getByTestId("history-button");
  userEvent.click(historyButton);
  const historyModal = screen.getByTestId("history-modal");
  expect(historyModal).toBeInTheDocument();
});

test("closes bet modal after backdrop press", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const betButton = screen.getByTestId("bet-button-0");
  userEvent.click(betButton);
  const betModal = screen.getByTestId("bet-modal");
  const backdrop = screen.getByTestId("bet-backdrop");
  userEvent.click(backdrop);

  expect(betModal).not.toBeInTheDocument();
});
test("closes history modal after backdrop press", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const historyButton = screen.getByTestId("history-button");
  userEvent.click(historyButton);
  const historyModal = screen.getByTestId("history-modal");
  const backdrop = screen.getByTestId("history-backdrop");
  userEvent.click(backdrop);

  expect(historyModal).not.toBeInTheDocument();
});

test("chips button to show it adds bet money", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const betButton = screen.getByTestId("bet-button-0");
  userEvent.click(betButton);
  const chipsButton = screen.getByTestId("chips-0");

  userEvent.click(chipsButton);
  const totalBet = screen.getByTestId("total-bet");

  expect(totalBet).toHaveTextContent("1");
});
