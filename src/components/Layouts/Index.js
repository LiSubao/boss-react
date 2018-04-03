/**********基础组件***********/
import React from 'react';
import {Route, Switch,} from 'dva/router';
import {Layout } from 'antd';

/**********自有组件***********/
import MenuBar from './Menu/MenuBar';
import PC0101R from '../../routes/PC/PC0101R';

/**********自有方法,assets***********/
import logo from '../../assets/img/logo.png';
import './index.scss';
import menuInfo from './Menu/menuData';

/**********变量***********/
const {Sider, Content } = Layout;





class LayoutC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="mainContainer">
                <header className="headerContainer">
                    <div>
                        <div className="header-left">
                            <img src={logo} alt="logo" className="logo"/>
                        </div>
                        <div className="header-right">
                            <span>用户名:</span>
                            <span>修改密码</span>
                            <span>退出</span>
                        </div>
                    </div>
                </header>
                <div className="dash"/>
                <Layout className="contentContainer">
                    <Sider>
                        <MenuBar menuInfo={menuInfo}/>
                    </Sider>
                    <Content className="route-view" style={{backGround:"#fff"}}>
                        <Switch>
                            <Route exact path="/main/pc0101" component={PC0101R}/>
                        </Switch>
                    </Content>
                </Layout>
            </div>

        )
    }
}

export default LayoutC;