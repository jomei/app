import {DEPOSIT_AMOUNT_CHANGED} from "../../actions/kinds";

const INITIAL_STATE = {
  amount: null,
  debts: []
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case  DEPOSIT_AMOUNT_CHANGED:
      return {...state, amount: action.payload};
    default:
      return state;
  }
}