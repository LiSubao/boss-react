import React from 'react';
import { connect } from 'dva-react-router-3';
import IndexPage from '../components/IndexPage/IndexPage_C';
import {Form} from 'antd';

function mapDispatchToProps({ indexPage }) {
    return {indexPage};
}

const IndexPageR = Form.create()(IndexPage);

export default connect(mapDispatchToProps)(IndexPageR);