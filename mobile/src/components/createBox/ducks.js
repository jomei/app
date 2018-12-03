export const BOX_CREATE_START = 'box/create/start';
export const BOX_CREATE_STARTED = 'box/create/started';
export const BOX_CREATE_SUCCESS = 'box/create/finished';
export const BOX_CREATE_FAILED = 'box/create/finished';

const initialState = {
  loading: false
};

export const createBox = (title) => {
  return {
    type: BOX_CREATE_START,
    payload: {title: title}
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case BOX_CREATE_STARTED:
    case BOX_CREATE_SUCCESS:
    case BOX_CREATE_FAILED:
      return {...state, loading: false};
    default:
      return state
  }
}