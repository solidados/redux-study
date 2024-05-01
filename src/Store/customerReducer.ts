import { ActionType, CustomerDefaultStateType } from './types/reducer.types.ts';

const customerDefaultState: CustomerDefaultStateType = {
  customers: []
}

export const customerReducer = (state: CustomerDefaultStateType = customerDefaultState, action: ActionType) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, customer: state.customers };
    case "GET_CUSTOMERS":
      return { ...state, customer: state.customers };
    default:
      return state;
  }
};
