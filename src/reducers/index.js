import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import petty_cash from "./petty_cash";
import employees from "./employees";
import managers from "./managers";
import employee_by_manager from "./employee_by_manager";
import petty_cash_employee from "./petty_cash_employee";
import finance_employee from "./finance_emeployee";
import general_employee from "./general_employee";
import petty_cash_approve from "./petty_cash_approve";
import petty_cash_received from "./petty_cash_received";

const rootReducer = combineReducers({
    petty_cash,
    employees,
    managers,
    employee_by_manager,
    petty_cash_employee,
    finance_employee,
    general_employee,
    petty_cash_approve,
    petty_cash_received,
	routing: routerReducer
});

export default rootReducer;
