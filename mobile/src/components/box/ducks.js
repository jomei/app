export const BOX_LOADING_START  = 'box/loading/start';
export const BOX_LOADING_STARTED  = 'box/loading/started';
export const BOX_LOADING_SUCCESS  = 'box/loading/success';
export const BOX_LOADING_FAILED  = 'box/loading/failed';

export const POSITION_SELECT_START = 'position/select/start';
export const POSITION_SELECT_STARTED = 'position/select/started';
export const POSITION_SELECT_SUCCESS = 'position/select/success';
export const POSITION_SELECT_FAILED = 'position/select/failed';

const initialState = {
  loading: true,
  box: null
};

export const loadBox = (id) => {
  return {
    type: BOX_LOADING_START,
    payload: id
  }
};

export const selectPosition = (participant, position) => {
  return {
    type: POSITION_SELECT_START,
    payload: {
      participantId: participant.id,
      positionId: position.id
    }
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