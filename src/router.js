import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import LayoutC from "./components/Layouts/Index";

function RouterConfig({history}) {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={IndexPage}/>
                <LayoutC/>
            </Switch>
        </Router>
    );
}

export default RouterConfig;