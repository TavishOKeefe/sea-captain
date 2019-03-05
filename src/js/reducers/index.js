import {REQUEST_WAVE_HEIGHT} from "../constants/ActionTypes";


const initialState = {
 waveHeight: []
};

function rootReducer(state = initialState, action) {
  if(action.type === REQUEST_WAVE_HEIGHT) {
    const newWaveHeight = [...state.waveHeight, action.payload]
    return ({...state, waveHeight: newWaveHeight})
  }
  return state;
};

export default rootReducer;
