export const BOX_LOADING_START  = 'box/loading/start';
export const BOX_LOADING_STARTED  = 'box/loading/started';
export const BOX_LOADING_SUCCESS  = 'box/loading/success';
export const BOX_LOADING_FAILED  = 'box/loading/failed';

export const POSITION_SELECT_START = 'position/select/start';
export const POSITION_SELECT_STARTED = 'position/select/started';
export const POSITION_SELECT_SUCCESS = 'position/select/success';
export const POSITION_SELECT_FAILED = 'position/select/failed';

export const POSITION_CREATE_START = 'position/create/start';
export const POSITION_CREATE_STARTED = 'position/create/started';
export const POSITION_CREATE_SUCCESS = 'position/create/success';
export const POSITION_CREATE_FAILED = 'position/create/failed';

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

export const createPosition = (position, paidBy, box) => {
  return {
    type: POSITION_CREATE_START,
    payload: {...position, paid_by: paidBy.id, box_id: box.id}
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case BOX_LOADING_SUCCESS:
      return {...state, box: action.payload};
    case POSITION_SELECT_SUCCESS:
      let box = state.box;
      box.positions.push(action.payload);
      return {...state, box: box };
    default:
      return state
  }

}