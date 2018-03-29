import React from 'react';
import { connect } from 'dva';
import Main from '../components/Main/Main';
import {Form} from 'antd';

function mapDispatchToProps({ main }) {
    return {main};
}

const MainRoute = Form.create()(Main);

export default connect(mapDispatchToProps)(MainRoute);