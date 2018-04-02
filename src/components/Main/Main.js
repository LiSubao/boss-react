import React from 'react';
import {Menu} from 'antd';
import {Router, Route} from 'dva/router';
import CM0101 from '../CM0101/CM0101_C';
const SubMenu=Menu.SubMenu;
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "hello wumengchao"
        }
    }
    render(){
        return(
            <div>
                <Menu>
                    <Menu.Item key="1">opeio1</Menu.Item>
                    <Menu.Item key="2">opeio2</Menu.Item>
                    <Menu.Item key="3">opeio3</Menu.Item>
                    <Menu.Item key="4">opeio4</Menu.Item>
                </Menu>
                <Route path="/test" component={CM0101}>
                    
                </Route>
            </div>
        )
    }
}

export default Main;