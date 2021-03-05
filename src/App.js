import React from 'react';
import { HomeDefault, Login, Signup } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomeDefault />
                </Route>
            </Switch>

            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>

            <Switch>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;