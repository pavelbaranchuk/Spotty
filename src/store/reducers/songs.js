import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = [];

export default function songsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_ALBUM_SONGS_SUCCESS:
    case actionTypes.FETCH_ARTISTS_SONGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
