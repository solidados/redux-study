import { createStore } from "redux";

export type InitStateType = {
  cash: number;
};

export type ActionType = {
  type: string;
  payload: number;
};

// const action: ActionType = {
//   type: "",
//   payload: 0,
// };

const initialState: InitStateType = {
  cash: 0,
};


const reducer = (state: InitStateType = initialState, action: ActionType) => {
  switch (action.type) {
    case "CREDIT_CASH":
      return { ...state, cash: state.cash + action.payload as number };
    case "DEBIT_CASH":
      return { ...state, cash: state.cash - action.payload as number };
    default:
      return state;
  }
};

export const store = createStore(reducer);
