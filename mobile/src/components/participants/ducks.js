import {HOME_LOADING_SUCCESS} from "mobile/src/components/home/ducks";

export const PARTICIPANTS_LIST_OPEN_BOX = 'participants/list/open_box';

const initialState = {
  list: []
};

export const showItem = (item) => {

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case HOME_LOADING_SUCCESS:
      return {...state, list: action.payload.participants};
    default:
      return state
  }
}