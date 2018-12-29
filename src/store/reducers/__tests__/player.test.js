import playerReducer, { INITIAL_STATE } from "../player";
import * as actionTypes from "../../actionTypes";

describe("player reducer", () => {
  it("should return initial state at the beginning", () => {
    const result = playerReducer(undefined, {});
    expect(result).toEqual(INITIAL_STATE);
  });

  it("should return Object in case of PLAY_SONG action", () => {
    const obj = {
      isPlaying: true,
      song: {},
      number: undefined,
      savedSongs: {}
    };
    const { song } = obj;
    const action = { type: actionTypes.PLAY_SONG, song };
    const result = playerReducer(INITIAL_STATE, action);
    expect(result).toEqual(obj);
  });

  it("should return Object in case of PAUSE_SONG action", () => {
    const obj = {
      isPlaying: false,
      song: {},
      number: undefined,
      savedSongs: {}
    };
    const { song } = obj;
    const action = { type: actionTypes.PAUSE_SONG, song };
    const result = playerReducer(INITIAL_STATE, action);
    expect(result).toEqual(obj);
  });

  it("should return Object in case of SAVE_SONGS action", () => {
    const obj = {
      isPlaying: false,
      song: {},
      number: undefined,
      savedSongs: undefined
    };
    const { song } = obj;
    const action = { type: actionTypes.SAVE_SONGS, song };
    const result = playerReducer(INITIAL_STATE, action);
    expect(result).toEqual(obj);
  });

  it("should return Object in case of HIDE_PLAYER action", () => {
    const obj = {
      isPlaying: false,
      song: {},
      number: undefined,
      savedSongs: {}
    };
    const { song } = obj;
    const action = { type: actionTypes.HIDE_PLAYER, song };
    const result = playerReducer(INITIAL_STATE, action);
    expect(result).toEqual(obj);
  });
});
