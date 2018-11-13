import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

// component
//import PrivateRoute from './components/PrivateRoute';

import Dashboard from './pages/Dashboard';
import Manager from "./pages/Manager";
import PettyCash from "./pages/PettyCash";
import ManagerListEmployee from "./pages/ManagerListEmployee";
import PageNotFound from "./pages/PageNotFound";
import EmployeeListPettyCash from "./pages/EmployeeListPettyCash";
import Finance from "./pages/Finance";
import FinanceListPettyCash from "./pages/FinanceListPettyCash";
import EmployeeCheckStatus from "./pages/EmployeeCheckStatus";
import FinanceListDetail from "./pages/FinanceListDetail";

function handleUpdate() {
    let {
        action
    } = this.state.location;

    if (action === 'PUSH') {
        window.scrollTo(0, 0);
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Router onUpdate={handleUpdate}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/manager" component={Manager} />
                            <Route exact path="/finance" component={Finance} />
                            <Route exact path="/finance-list-patty-cash/:id" component={FinanceListPettyCash} />
                            <Route exact path="/finance-list-detail/:id" component={FinanceListDetail} />
                            <Route exact path="/petty-cash/:id" component={PettyCash} />
                            <Route exact path="/manager-list-employee/:id" component={ManagerListEmployee} />
                            <Route exact path="/petty-cash-employee/:id" component={EmployeeListPettyCash} />
                            <Route exact path="/employee-status-petty-cash/:id" component={EmployeeCheckStatus} />
                            <Route component={PageNotFound}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
