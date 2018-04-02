import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import CM0101 from './routes/CM/CM0101_R';
import Layout from './routes/Layout/Layout_R';

function RouterConfig({history,app}) {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={IndexPage}/>
                <Route exact path="/main" component={Layout}/>
            </Switch>
        </Router>
    );
}

export default RouterConfig;