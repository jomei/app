import {
  SHOW_BOX
} from '../../actions/kinds';


const INITIAL_STATE = {
  loading: true,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_BOX:
      return {...state, box: action.payload};
    default:
      return state;
  }
}