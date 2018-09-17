import {
  BOXES_LOADING,
  BOXES_LOADED
} from '../../actions/kinds';


const INITIAL_STATE = {
  loading: true,
  list: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case BOXES_LOADED:
      return {...state, error: null, loading: false, boxes: action.payload };
    case BOXES_LOADING:
      return {...state, error: null, loading: true};
    default:
      return state;
  }
}