
import {connect} from 'dva';
import LayoutC from '../../components/Layouts/Index';
import {Form} from 'antd';

function mapDispatchToProps({ layout }) {
    return {layout};
}

const LayoutR = Form.create()(LayoutC);

export default connect(mapDispatchToProps)(LayoutR);