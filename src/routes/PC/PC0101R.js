
import {connect} from 'dva';
import PC0101C from '../../components/PC/PC0101/index';
import {Form} from 'antd';

function mapDispatchToProps({ pc0101Info }) {
    return {pc0101Info};
}

const PC0101R = Form.create()(PC0101C);

export default connect(mapDispatchToProps)(PC0101R);