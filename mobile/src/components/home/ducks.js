export const HOME_LOADING_START = 'home/loading_start';
export const HOME_LOADING_STARTED = 'home/loading_started';
export const HOME_LOADING_SUCCESS = 'home/loading_success';
export const HOME_LOADING_FAILED = 'home/loading_failed';

const initialState = {
  loading: true
};

export const startLoading = () => {
  return {
    type: HOME_LOADING_START
  }
};



export default (state = initialState, action = {}) => {
  switch (action.type) {
    case HOME_LOADING_STARTED:
      return {...state, loading: true};
    case HOME_LOADING_SUCCESS:
    case HOME_LOADING_FAILED:
      return {...state, loading: false};
    default:
      return state
  }
}