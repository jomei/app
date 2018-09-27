import {
  SHOW_BOX, BOX_LOADED
} from '../../actions/kinds';


const INITIAL_STATE = {
  loading: true,
  error: null,
  box: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_BOX:
      return {...state, box: {id: action.payload}};
    case BOX_LOADED:
      return {...state, loading: false, box: action.payload};
    default:
      return state;
  }
}