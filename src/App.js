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
                            <Route exact path="/petty-cash/:id" component={PettyCash} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
