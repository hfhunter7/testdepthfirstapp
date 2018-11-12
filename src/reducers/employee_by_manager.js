import { FETCH_EMPLOYEE_BY_MANAGER } from "../action/types";

function employee_by_manager( state = {} , action){
    switch (action.type){
        case FETCH_EMPLOYEE_BY_MANAGER:
            return action.employee_by_manager;
        default:
            return state;
    }
}

export default employee_by_manager;