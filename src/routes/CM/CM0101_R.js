import React from 'react';
import {connect} from 'dva';
import {Router, Route, Switch} from 'dva/router';
import CM0101_C from '../../components/CM0101/CM0101_C';
import {Form} from 'antd';
const CM0101=()=>(
    <Router>
        <CM0101_C/>
    </Router>
)
function mapDispatchToProps({ cm0101Info }) {
    return {cm0101Info};
}

const CM0101R = Form.create()(CM0101);

export default connect(mapDispatchToProps)(CM0101R);

