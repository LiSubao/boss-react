import React from 'react';
import logo from '../../assets/img/logo.png';
import './IndexPage.scss';
import {Card, Form, Input, Radio, Button} from 'antd';

const FormItem = Form.Item;


class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.dispatch({
            type: "indexPage/init",
            payload: {
                username: "root",
                password: "root",
            }
        })
        console.log(this.props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch({
                    type: "indexPage/init",
                    payload: {
                        username: values.userNm,
                        password: values.password,
                    }
                })
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="mainContainer">
                <header className="headerContainer">
                    <div>
                        <img src={logo} alt="logo" className="logo"/>
                        <span className="back">返回官网</span>
                    </div>
                </header>
                <div className="dash"></div>
                <div>
                    <Card className="loginContainer">
                        <div className="title">SD-WAN综合管理平台</div>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem className="FormItem">
                                {getFieldDecorator('userNm', {
                                    rules: [{required: true, message: '请输入用户名',}],
                                })
                                (
                                    <Input size="large" placeholder="请输入用户名" className="input"/>
                                )
                                }
                            </FormItem>
                            <FormItem className="FormItem">
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: '请输入密码!',}],
                                })
                                (
                                    <Input size="large" placeholder="请输入密码" className="input"/>
                                )
                                }
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('savePassword', {})
                                (
                                    <Radio>记住密码</Radio>
                                )
                                }
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="confirmBtn">登录</Button>
                        </Form>
                    </Card>

                </div>
            </div>
        )
    }
}

export default IndexPage;