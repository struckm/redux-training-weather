import { GET_WEATHER } from '../actions';

export default function(state = [], action) {
    switch(action.type){
        case GET_WEATHER:
            return [ action.payload.data, ...state ];
            break;
        default:
            return state;
    }
}