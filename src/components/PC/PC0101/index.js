import React from 'react';

import {Table, Button, Input, Select,Modal,Form} from 'antd';

import './index.scss';

const Option = Select.Option
const FormItem=Form.Item;

class PC0101C extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company_id:"",
            name:"",
            editModal:false,
            editPersonId:"",
            editRecord:{}
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: "pc0101Info/init",
            payload: {}
        });
    }

    selectCompany=(value)=>{
        this.setState({
           company_id:value||"",
        },function(){
            this.props.dispatch({
                type:"pc0101Info/companyFilter",
                payload:{
                    company_id:this.state.company_id,
                    name:this.state.name
                }
            })
        })

    };

    changeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    };

    searchRelatedPerson=()=>{
        this.props.dispatch({
            type:"pc0101Info/nameFilter",
            payload:{
                company_id:this.state.company_id,
                name:this.state.name
            }
        })
    }

    edit=(record)=>{
        this.setState({
            editModal:true,
            editPersonId:record.id,
            editRecord:record
        })
    }

    closeModal=()=>{
        this.setState({
            editModal:false
        })
    };
    editRelatedPerson=(e)=>{
        e.preventDefault()
        this.props.form.validateFields((err,values)=>{
            if(!err){
                this.props.dispatch({
                    type:"pc0101Info/updateRelatedPerson",
                    payload:{
                        id:this.state.editPersonId,
                        name:values.name,
                        tel:values.tel,
                        address:values.address,
                        role:values.role,
                        remark:values.remark
                    }
                })
            }
        })
        this.setState({
            editPersonId:"",
            editModal:false,
            editRecord:{}
        },function(){
            this.props.dispatch({
                type: "pc0101Info/init",
                payload: {}
            });
        })
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const modalFormLayout={
            labelCol: {
                xs: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 16 },
            },
        }
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '电话',
            dataIndex: 'tel',
            key: 'tel',
        }, {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
        }, {
            title: '邮件',
            dataIndex: 'mail',
            key: 'mail',
        }, {
            title: '企业',
            dataIndex: 'company_name',
            key: 'company_name',
        }, {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '备注',
            dataIndex: 'remark',
            key: 'remark',
        }, {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (text,record) => {
                return (<div>
                    <Button type="primary" className="editBtn" onClick={()=>this.edit(record)}>修改</Button>
                    <Button type="danger" className="delBtn" >删除</Button>
                </div>)
            }
        }];
        return (
            <div>
                <header className="header">
                    <div className="left-header">
                        <Button type="primary">+ 添加</Button>
                    </div>
                    <div className="right-header">
                        <Select style={{width: 200}} className="input" placeholder="请选择企业" onChange={(value)=>this.selectCompany(value)} allowClear>
                            {this.props.pc0101Info.companyList.map((item)=>{
                                return(<Option value={item.id} key={item.id}>{item.company}</Option>)
                            })}
                        </Select>
                        <Input style={{width: 200}} className="input" placeholder="请输入联系人搜索" onChange={this.changeName}/>
                        <Button className="input" onClick={this.searchRelatedPerson}>搜索</Button>
                        <Button className="input">刷新</Button>
                    </div>
                </header>
                <Table columns={columns} bordered={true} dataSource={this.props.pc0101Info.relatedPersonList} rowKey="id"/>
                <Modal visible={this.state.editModal} title="修改联系人" onCancel={this.closeModal} footer={null}>
                    <Form onSubmit={this.editRelatedPerson}>
                        <FormItem label="姓名" {...modalFormLayout}>
                            {getFieldDecorator('name', {
                                rules: [],initialValue:this.state.editRecord.name
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem label="角色" {...modalFormLayout}>
                            {getFieldDecorator('role', {
                                rules: [],initialValue:this.state.editRecord.role
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="电话" {...modalFormLayout}>
                            {getFieldDecorator('tel', {
                                rules: [],initialValue:this.state.editRecord.tel
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="地址" {...modalFormLayout}>
                            {getFieldDecorator('address', {
                                rules: [],initialValue:this.state.editRecord.address
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="备注" {...modalFormLayout}>
                            {getFieldDecorator('remark', {
                                rules: [],initialValue:this.state.editRecord.remark
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <Button htmlType="submit">确认修改</Button>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default PC0101C;