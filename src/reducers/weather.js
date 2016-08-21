import { GET_WEATHER } from '../actions';

export default function(state = null, action) {
    switch(action.type){
        case GET_WEATHER:
            return action.payload.data;
            break;
        default:
            return state;
    }
}