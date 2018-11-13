import { FETCH_PETTY_CASH_APPROVE } from "../action/types";

function petty_cash_approve( state = {} , action){
    switch (action.type){
        case FETCH_PETTY_CASH_APPROVE:
            return action.petty_cash_approve;
        default:
            return state;
    }
}

export default petty_cash_approve;