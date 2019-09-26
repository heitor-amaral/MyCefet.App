import { createStore, combineReducers } from 'redux';

const INITIAL_STATE = {
 logged: false,
 userInfo: {}
}

function userInfo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_INFO':
      return { ...state, userInfo: action.info}
    default:
      return state;
  }
}

function logged(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_LOGGED':
      return { ...state, logged: !state.logged}
    default:
      return state;
  }
}

const Store = createStore(logged);

export default Store;
