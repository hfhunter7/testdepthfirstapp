import { FETCH_MANAGERS } from "../action/types";

function managers( state = {} , action){
    switch (action.type){
        case FETCH_MANAGERS:
            return action.managers;
        default:
            return state;
    }
}

export default managers;