import React from 'react';
import {connect} from 'dva';
import LayoutC from '../../components/Layouts/LayoutC';
import {Router, Route, Switch} from 'dva/router';
import {Form} from 'antd';
const temp=()=>(
    <Router history={this.props.history}>
        <LayoutC/>
    </Router>
);
function mapDispatchToProps({ layout }) {
    return {layout};
}

const LayoutR = Form.create()(temp);

export default connect(mapDispatchToProps)(LayoutR);