import { FETCH_PETTY_CASH_RECEIVED } from "../action/types";

function petty_cash_received( state = {} , action){
    switch (action.type){
        case FETCH_PETTY_CASH_RECEIVED:
            return action.petty_cash_received;
        default:
            return state;
    }
}

export default petty_cash_received;