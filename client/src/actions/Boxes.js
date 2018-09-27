import { Actions } from 'react-native-router-flux';
import { Path, Fetch } from '../utils'
import DepositService from '../services/DepositService'

import {
  BOXES_LOADING,
  BOXES_LOADED,
  BOX_TITLE_CHANGED,
  BOX_CREATE,
  BOX_CREATED,
  SHOW_BOX,
  BOX_LOADED
} from './kinds';

const boxesLoaded = (dispatch, response) => {
  if(response.data) {
    dispatch({
      type: BOXES_LOADED,
      payload: response.data
    })
  } else {
    console.log(response.error)
  }
};

const loadingFailed = (dispatch, error) => {
  console.log(error)
};

export const loadBoxes = (token) => {
  return (dispatch) => {
    dispatch({ type: BOXES_LOADING }); // this shows the loader

    Fetch.get(Path.participants())
      .then(response => boxesLoaded(dispatch, response))
      .catch((error) => loadingFailed(dispatch, error));
  };
};

export const boxTitleChanged = (title) => {
  return {
    type: BOX_TITLE_CHANGED,
    payload: title,
  };
};

export const createBox = (title) => {
  return (dispatch) => {
    dispatch({type: BOX_CREATE});

    Fetch.post(Path.boxes(), {box: {title: title}})
      .then(response => boxCreated(dispatch, response))
      .catch((error) => loadingFailed(dispatch, error));
  }
};

const boxCreated = (dispatch, response) => {
  dispatch({type: BOX_CREATED});
  Actions.home();
};

export const showBox = (box_id) => {
  return(dispatch) => {
    dispatch({type: SHOW_BOX, payload: box_id});
    Actions.showBox()
  }
};

export const loadBox = (boxId) => {
  return (dispatch) => {
    Fetch.get(Path.showBox(boxId))
      .then(response => boxLoaded(dispatch, response))
      .catch((error) => loadingFailed(dispatch, error));
  }
};


const boxLoaded = (dispatch, response) => {
  if(response.data) {
    let box = response.data;
    box.deposits = DepositService.parse(box.participants);
    dispatch({type: BOX_LOADED, payload: box});
    Actions.showBox();
  } else {
    console.log(response.error)
  }
};