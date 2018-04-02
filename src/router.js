import React from 'react';
import {Router, Route} from 'dva-react-router-3/router';
import IndexPage from './routes/IndexPage';
import Main_R from './routes/Main_R';
import CM0101 from './components/CM0101/CM0101_C';

function RouterConfig({history}) {
    return (
        <Router history={history}>
            <Route path="/login" component={IndexPage}/>
            <Route path="/main" component={CM0101}>
                <Route path="/test1" component={CM0101}></Route>
            </Route>
        </Router>
    );
}

export default RouterConfig;