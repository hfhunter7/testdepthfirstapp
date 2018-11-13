import {
    UPDATE_USER,
    FETCH_PETTY_CASH,
    FETCH_EMPLOYEES,
    FETCH_MANAGERS,
    FETCH_EMPLOYEE_BY_MANAGER, FETCH_PETTY_CASH_BY_EMPLOYEE, FETCH_GENERAL_EMPLOYEE, FETCH_FINANCE_EMPLOYEE,
    FETCH_PETTY_CASH_APPROVE, FETCH_PETTY_CASH_RECEIVED,
} from './types';
import {
    create_petty_cash, fetch_petty_cash_approve, fetch_petty_cash_by_employee, fetch_petty_cash_received,
    update_status_petty_cash
} from "./pettycash/pettyCashAction";
import { fetch_employees, fetch_finance_employees, fetch_general_employees } from "./employee/employeeAction";
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

export function update_general_employees( general_employee ) {
    return {
        type: FETCH_GENERAL_EMPLOYEE,
        general_employee
    }
}

export function update_finance_employees( finance_employee ) {
    return {
        type: FETCH_FINANCE_EMPLOYEE,
        finance_employee
    }
}

export function getEmployees() {
    return function ( dispatch ) {
        fetch_employees(dispatch, update_employees);
    }
}

export function getGeneralEmployees() {
    return function ( dispatch ) {
        fetch_general_employees(dispatch, update_general_employees);
    }
}

export function getFinanceEmployees() {
    return function ( dispatch ) {
        fetch_finance_employees(dispatch, update_finance_employees);
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

export function update_petty_cash_approve( petty_cash_approve ) {
    return {
        type: FETCH_PETTY_CASH_APPROVE,
        petty_cash_approve
    }
}

export function update_petty_cash_received( petty_cash_received ) {
    return {
        type: FETCH_PETTY_CASH_RECEIVED,
        petty_cash_received
    }
}

export function getPettyCashByEmployee( id ) {
    return function ( dispatch ) {
        fetch_petty_cash_by_employee(id, dispatch, update_petty_cash_by_employee);
    }
}

export function updateStatusPettyCash( id, data , emp_id) {
    return function ( dispatch ) {
        update_status_petty_cash(id, data, emp_id, dispatch, update_petty_cash_by_employee,update_petty_cash_approve,update_petty_cash_received);
    }
}

export function getPettyCashByApprove() {
    return function ( dispatch ) {
        fetch_petty_cash_approve(dispatch, update_petty_cash_approve);
    }
}

export function getPettyCashByReceived() {
    return function ( dispatch ) {
        fetch_petty_cash_received(dispatch, update_petty_cash_received);
    }
}