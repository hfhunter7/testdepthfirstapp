import {
    UPDATE_USER,
    FETCH_PETTY_CASH, FETCH_EMPLOYEES,
} from './types';
import { create_petty_cash } from "./pettycash/pettyCashAction";
import { fetch_employees } from "./employee/employeeAction";

//////////////////////////// User Action ////////////////////////////
export function update_user(user) {
	return {
		type: UPDATE_USER,
		user
	}
}

export function update_language(language) {
	return {
		type: 'update_language',
		language
	}
}


export function update_petty_cash(petty_cash) {
	return {
		type: FETCH_PETTY_CASH,
        petty_cash
	}
}

export function createPettyCash(data) {
    return function (dispatch) {
        create_petty_cash(data ,dispatch, update_petty_cash);
    }
}

//////////////////////////// employee //////////////////////////////

export function update_employees(employees) {
    return {
        type: FETCH_EMPLOYEES,
        employees
    }
}

export function getEmployees() {
    return function (dispatch) {
        fetch_employees(dispatch, update_employees);
    }
}