import { FETCH_PETTY_CASH } from "../action/types";

function petty_cash( state = {} , action){
    switch (action.type){
        case FETCH_PETTY_CASH:
            return action.petty_cash;
        default:
            return state;
    }
}

export default petty_cash;