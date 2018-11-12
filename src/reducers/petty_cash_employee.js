import { FETCH_PETTY_CASH_BY_EMPLOYEE } from "../action/types";

function petty_cash_employee( state = {} , action){
    switch (action.type){
        case FETCH_PETTY_CASH_BY_EMPLOYEE:
            return action.petty_cash_employee;
        default:
            return state;
    }
}

export default petty_cash_employee;