import { REQUEST_WAVE_HEIGHT } from "../constants/ActionTypes";

export function requestWaveHeight(payload) {
  return {
    type: REQUEST_WAVE_HEIGHT,
    payload }
};
