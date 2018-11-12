import {
    UPDATE_USER,
    FETCH_PETTY_CASH,
    FETCH_EMPLOYEES,
    FETCH_MANAGERS,
    FETCH_EMPLOYEE_BY_MANAGER, FETCH_PETTY_CASH_BY_EMPLOYEE,
} from './types';
import { create_petty_cash, fetch_petty_cash_by_employee, update_status_petty_cash } from "./pettycash/pettyCashAction";
import { fetch_employees } from "./employee/employeeAction";
import {
    fetch_employee_by_manager,
    fetch_managers
} from "./manager/managerAction";

//////////////////////////// User Action ////////////////////////////
export function update_user( user ) {
    return {
        type: UPDATE_USER,
        user
    }
}

export function update_language( language ) {
    return {
        type: 'update_language',
        language
    }
}


export function update_petty_cash( petty_cash ) {
    return {
        type: FETCH_PETTY_CASH,
        petty_cash
    }
}

export function createPettyCash( data ) {
    return function ( dispatch ) {
        create_petty_cash(data, dispatch, update_petty_cash);
    }
}

//////////////////////////// employee //////////////////////////////

export function update_employees( employees ) {
    return {
        type: FETCH_EMPLOYEES,
        employees
    }
}

export function getEmployees() {
    return function ( dispatch ) {
        fetch_employees(dispatch, update_employees);
    }
}

//////////////////////////// manager //////////////////////////////

export function update_managers( managers ) {
    return {
        type: FETCH_MANAGERS,
        managers
    }
}

export function getManagers() {
    return function ( dispatch ) {
        fetch_managers(dispatch, update_managers);
    }
}

export function update_employee_by_manager( employee_by_manager ) {
    return {
        type: FETCH_EMPLOYEE_BY_MANAGER,
        employee_by_manager
    }
}

export function getEmployeeByManager( id ) {
    return function ( dispatch ) {
        fetch_employee_by_manager(id, dispatch, update_employee_by_manager);
    }
}

//////////////////////////// petty cash //////////////////////////////

export function update_petty_cash_by_employee( petty_cash_employee ) {
    return {
        type: FETCH_PETTY_CASH_BY_EMPLOYEE,
        petty_cash_employee
    }
}

export function getPettyCashByEmployee( id ) {
    return function ( dispatch ) {
        fetch_petty_cash_by_employee(id, dispatch, update_petty_cash_by_employee);
    }
}

export function updateStatusPettyCash( id, data , emp_id) {
    return function ( dispatch ) {
        update_status_petty_cash(id, data, emp_id, dispatch, update_petty_cash_by_employee);
    }
}