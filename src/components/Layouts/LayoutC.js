import React from 'react';
import {Route, Switch, Router} from 'dva/router';
import {BrowserRouter} from 'react-router-dom';
import CM0101C from '../../components/CM0101/CM0101_C';

class LayoutC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <header>*********************222222222</header>
                <Route exact path="/main/cm0101" component={CM0101C}></Route>
            </div>

        )
    }
}

export default LayoutC;