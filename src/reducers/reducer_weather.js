import {FETCH_WEATHER} from '../actions/index';

export default function(state = null, action) {
  switch(action.type){
    case FETCH_WEATHER:
      state = action.payload.data;
      return state;
  }
  return state;
}
