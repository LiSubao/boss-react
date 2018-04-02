import React from 'react';
import logo from '../../assets/img/logo.png';
import './IndexPage.scss';
import {Card,Form,Input,Radio,Button} from 'antd';
const FormItem=Form.Item;



class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "hello wumengchao"
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: "indexPage/init"
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="mainContainer">
                <header className="headerContainer">
                    <div>
                        <img src={logo} alt="logo" className="logo"/>
                        <a href="http://www.baidu.com"><span className="back">返回官网</span></a>
                    </div>
                </header>
                <div className="dash"/>
                <div>
                    <Card className="loginContainer">
                        <div className="title">SD-WAN综合管理平台</div>
                        <Form>
                            <FormItem className="FormItem">
                                {getFieldDecorator('userNm', {
                                    rules: [{message: '请输入用户名',}],})
                                (
                                    <Input size="large" placeholder="请输入用户名" className="input"/>
                                )
                                }
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{message: '请输入密码!',}],})
                                (
                                    <Input size="large" placeholder="请输入密码" className="input"/>
                                )
                                }
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('savePassword', {
                                    })
                                (
                                    <Radio>记住密码</Radio>
                                )
                                }
                            </FormItem>
                            <Button type="primary" className="button">登录</Button>
                        </Form>
                    </Card>

                </div>
            </div>
        )
    }
}

export default IndexPage;