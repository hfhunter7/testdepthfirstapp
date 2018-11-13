import { FETCH_GENERAL_EMPLOYEE } from "../action/types";

function general_employee( state = {} , action){
    switch (action.type){
        case FETCH_GENERAL_EMPLOYEE:
            return action.general_employee;
        default:
            return state;
    }
}

export default general_employee;