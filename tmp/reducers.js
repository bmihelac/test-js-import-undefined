import * as types from './actionTypes';

export default function pouchdbReducer(state = {}, action) {
  switch (action.type) {
    case types.UPDDATE_REQUEST:
      // there is a typo above and it evaluates to `undefined`
      // this code would never be reached - how to make it an error
      return Object.assign({}, state, {updated: true});
    default:
      return state;
  }
}

const state = pouchdbReducer({}, {type: types.UPDATE_REQUEST});
console.log((state.updated == true) + ' should be true');

