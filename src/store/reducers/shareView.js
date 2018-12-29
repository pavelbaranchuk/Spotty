import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = null;

export default function sharedSongReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.GET_SONG_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
