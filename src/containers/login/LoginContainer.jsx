import React from 'react';
import {Button, Dropdown, Form, Icon, Input, Menu} from 'antd';
import {FormattedMessage, injectIntl} from 'react-intl';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import './LoginContainer.css';

/**
 * 登录页
 */
@inject('login', 'app')
@observer
class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // 登录表单提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                sessionStorage.setItem('_token', 'abcdefghijhlmnopqrstuvwxyz');
                this.props.login.loginAction({userName: values.userName, userId: '116', ip: '192.168.130.219',});
                this.props.history.push('/app');
            }
        });
    }
    // 切换国际化语言
    handleSwitchLanguage = (val) => {
        this.props.app.setAppLanguage(val.key);
        this.props.form.resetFields();
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const languageItem = (
            <Menu onClick={this.handleSwitchLanguage}>
                <Menu.Item key="zh-CN">
                    <span>中文</span>
                </Menu.Item>
                <Menu.Item key="en-US">
                    <span>English</span>
                </Menu.Item>
            </Menu>
        )
        return (
            <div id="loginDiv">
                {/* 国际化下拉 */}
                <div>
                        <span>
                            <Dropdown overlay={languageItem} trigger={['hover']}>
                                <span className="pointClass">
                                    <Icon theme="filled" type="edit" style={{marginBottom: '30px'}}/>
                                </span>
                            </Dropdown>
                        </span>
                </div>
                {/* 登录form表单 */}
                <div id="loginFormDiv">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{
                                    required: true,
                                    message: this.props.intl.formatMessage({id: 'username_valid'})
                                }],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder={this.props.intl.formatMessage({id: 'username'})}/>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    message: this.props.intl.formatMessage({id: 'password_valid'})
                                }],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       type="password"
                                       placeholder={this.props.intl.formatMessage({id: 'password'})}/>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {/*{getFieldDecorator('remember', {*/}
                            {/*valuePropName: 'checked',*/}
                            {/*initialValue: true,*/}
                            {/*})(*/}
                            {/*<Checkbox><FormattedMessage id="remember_me"/></Checkbox>*/}
                            {/*)}*/}
                            {/*<a className="login-form-forgot" href="http://www.baidu.com"><FormattedMessage id="forgot_password"/></a><br/>*/}
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                <FormattedMessage id="login_in"/>
                            </Button><br/>
                            <FormattedMessage id="or"/> <a href="http://www.baidu.com"><FormattedMessage
                            id="register"/></a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginContainer);
export default withRouter(injectIntl(WrappedLoginForm));
