import {HOME_LOADING_SUCCESS} from "mobile/src/components/home/ducks";

const initialState = {
  list: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case HOME_LOADING_SUCCESS:
      return {...state, list: action.participants};
    default:
      return state
  }
}