import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import petty_cash from "./petty_cash";
import employees from "./employees";
import managers from "./managers";
import employee_by_manager from "./employee_by_manager";
import petty_cash_employee from "./petty_cash_employee";

const rootReducer = combineReducers({
    petty_cash,
    employees,
    managers,
    employee_by_manager,
    petty_cash_employee,
	routing: routerReducer
});

export default rootReducer;
