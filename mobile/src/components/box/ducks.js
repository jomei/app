export const BOX_LOADING_START  = 'box/loading/start';
export const BOX_LOADING_STARTED  = 'box/loading/started';
export const BOX_LOADING_SUCCESS  = 'box/loading/success';
export const BOX_LOADING_FAILED  = 'box/loading/failed';

const initialState = {
  loading: true
};

export const loadBox = (id) => {
  return {
    type: BOX_LOADING_START,
    payload: id
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case BOX_LOADING_SUCCESS:
      return {...state, box: action.payload};
    default:
      return state
  }

}