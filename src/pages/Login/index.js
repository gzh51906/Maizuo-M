import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css';

class NormalLoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
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
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        忘记密码
          </a>
                    <Button type="primary" htmlType="submit" className="login-form-button" >
                        登录
          </Button>
                    <a href="" className="login-form-register">注册新账户！</a>
                </Form.Item>
            </Form>
        );
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;
