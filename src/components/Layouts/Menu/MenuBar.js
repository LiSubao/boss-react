import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const subMenu=this.props.menuInfo.map((subMenuItem,index)=>{
            let item=[];
            for(let i=0;i<subMenuItem.item.length;i++){
               item.push(<Menu.Item key={subMenuItem.item[i].id}>
                   <Link to={"/main/"+subMenuItem.item[i].path}>
                   {subMenuItem.item[i].name}
                   </Link>
                   </Menu.Item>)
            }
            return <SubMenu title={subMenuItem.subMenuTitle} key={index}>
                {item}
            </SubMenu>
        });
        return (
                <Menu mode="inline"  key="menu" style={{height:'100%'}}>
                    {subMenu}
                </Menu>
        )
    }
}

export default MenuBar;