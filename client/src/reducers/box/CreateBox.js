import {
  BOX_TITLE_CHANGED,
  BOX_CREATE, BOX_CREATED,
} from '../../actions/kinds';


const INITIAL_STATE = {
  title: '',
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case BOX_CREATE:
      return {...state, error: null, loading: true};
    case BOX_CREATED:
      return {...state, loading: false};
    case BOX_TITLE_CHANGED:
      return {...state, title: action.payload};
    default:
      return state;
  }
}