import { FETCH_FINANCE_EMPLOYEE } from "../action/types";

function finance_employee( state = {} , action){
    switch (action.type){
        case FETCH_FINANCE_EMPLOYEE:
            return action.finance_employee;
        default:
            return state;
    }
}

export default finance_employee;