import { FETCH_EMPLOYEES } from "../action/types";

function employees( state = {} , action){
    switch (action.type){
        case FETCH_EMPLOYEES:
            return action.employees;
        default:
            return state;
    }
}

export default employees;