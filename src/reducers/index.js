import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import petty_cash from "./petty_cash";
import employees from "./employees";

const rootReducer = combineReducers({
    petty_cash,
    employees,
	routing: routerReducer
});

export default rootReducer;
