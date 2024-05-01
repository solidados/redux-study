import { ActionType, CashDefaultStateType } from './types/reducer.types.ts';

const initialState: CashDefaultStateType = {
  cash: 0,
};

export const cashReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "CREDIT_CASH":
      return { ...state, cash: state.cash + action.payload as number };
    case "DEBIT_CASH":
      return { ...state, cash: state.cash - action.payload as number };
    default:
      return state;
  }
};
