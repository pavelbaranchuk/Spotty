import * as actionTypes from "../actionTypes";

import { MusicService } from "../../services/MusicService";

export function loadAlbums() {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.ADD_ALBUMS_START });
      const albums = await MusicService.getAllAlbums();
      dispatch(addAlbums(Object.values(albums)));
    } catch (e) {
      dispatch(addAlbumsFail());
    }
  };
}

export function addAlbums(payload) {
  return {
    type: actionTypes.ADD_ALBUMS_SUCCESS,
    payload
  };
}

export function addAlbumsFail() {
  return {
    type: actionTypes.ADD_ALBUMS_FAIL
  };
}

export function loadCachedAlbums() {
  return (dispatch, getState) => {
    if (getState().albums.length) {
      return;
    }
    dispatch(loadAlbums());
  };
}
