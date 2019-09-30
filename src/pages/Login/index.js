import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import './login.css';
import Api from '../../api'
class NormalLoginForm extends Component {
    state = {
        frompath: "",

    }
    componentDidMount() {
        console.log(this.props);

    }
    phone = (e) => {
        console.log(e.target.value);

    }
    getcode = () => {
        alert("验证码：123456")

    }
    handleSubmit = async (e) => {
        let data = await Api.get('http://localhost:1906/user/login', { username: 'lijun', password: 123456 })
        console.log("data", data)
        e.persist();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.history.push('/home')
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        console.log(this.props.logindata.isLoading);
        return (
            this.props.logindata.isLogin
                ?
                <Redirect to='/home' />
                :
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <div className="panel-heading">欢迎登录 - MAIZUO管理系统</div>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, whitespace: true, message: '请输入您的用户名!' }, {
                                min: 4, message: '用户名至少4位'
                            }, {
                                max: 8, message: '用户名最多8位'
                            }, {
                                pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成'
                            }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, whitespace: true, message: '请输入您的密码!' }, {
                                min: 6, message: '密码至少6位'
                            }, {
                                max: 12, message: '密码最多12位'
                            }, {
                                pattern: /^[a-zA-Z0-9_]+$/, message: '密码必须是英文、数字或下划线组成'
                            }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"

                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" >
                            登录
          </Button>
                    </Form.Item>
                </Form>
        );
    }
}
let Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

let mapStateToProps = function (state) {
    // 需要映射什么到Cart组件的props就return什么出去
    return {
        logindata: state.user,
    }
}
let mapDispatchToProps = function (dispatch) {
    return {
        start_login(values) {
            dispatch({ type: 'START_LOGIN', values })
        }
    }
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

Login = withRouter(Login);

export default Login;

