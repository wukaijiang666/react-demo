import React from 'react';
import logo from '../../logo.svg';
import {Avatar, Dropdown, Form, Icon, Input, Layout, Menu, Modal} from 'antd';
import {FormattedMessage, injectIntl} from 'react-intl';
import {Link, withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

/**
 *  头部组件
 */
const {Header} = Layout;

@inject('app', 'login')
@observer
class HeadComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 修改密码弹出框显示隐藏
            changePwdShow: false
        }
        // 当前用户信息
        this.userInfo = JSON.parse(sessionStorage.getItem('_userInfo'))
    }

    // 利用时间代理处理各个操作
    _handleClickMenu = (val) => {
        switch (val.key) {
            case 'logout':
                this._logout();
                break;
            case 'changePassword':
                this._changePwdOpen();
                break;
            default:
        }
    }
    // 打开修改个人密码模态框
    _changePwdOpen = () => {
        this.handleReset();
        this.setState({
            changePwdShow: true
        })
    }
    // 关闭修改个人密码模态框
    _changePwdClose = () => {
        this.setState({
            changePwdShow: false
        })
    }
    // 更改密码
    _changePwd = (e) => {
        this.handleSubmit(e);
    }
    // 返回登陆页面
    toAuthPage = () => {
        this.props.history.replace('/login');
    }
    // 登出
    _logout = () => {
        let that = this;
        Modal.confirm({
            title: this.props.intl.formatMessage({id: 'layout_logout_modal_confirm_title'}),
            content: this.props.intl.formatMessage({id: 'layout_logout_modal_confirm_content'}),
            onOk() {
                let userName = that.userInfo.userName;
                let userId = that.userInfo.userId;
                let ip = that.userInfo.ip;
                that.props.login.logoutAction({userName: userName, userId: userId, ip: ip}, that.toAuthPage);
            }
        })
    }
    // 表单提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    // 重置表单
    handleReset = () => {
        this.props.form.resetFields();
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    }
    // 确认新密码校验
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback(this.props.intl.formatMessage({id: 'layout_password_inconsistent_valid'}));
        } else {
            callback();
        }
    }
    // 切换国际化语言
    handleSwitchLanguage = (val) => {
        this.props.app.setAppLanguage(val.key);
    }

    render() {
        // 更改密码样式
        const formItemLayout = {
            labelCol: {
                xs: {span: 20},
                sm: {span: 7},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const {getFieldDecorator} = this.props.form;
        // 用户操作按钮下拉
        const menu = (
            <Menu onClick={this._handleClickMenu}>
                <Menu.Item key="changePassword">
                    <span>{this.props.intl.formatMessage({id: 'layout_change_password'})}</span>
                </Menu.Item>
                <Menu.Item key="logout">
                    <span>{this.props.intl.formatMessage({id: 'layout_logout'})}</span>
                </Menu.Item>
            </Menu>
        );
        // 国际化切换按钮下拉
        const languageItem = (
            <Menu onClick={this.handleSwitchLanguage}>
                <Menu.Item key="zh-CN">
                    <span>中文</span>
                </Menu.Item>
                <Menu.Item key="en-US">
                    <span>English</span>
                </Menu.Item>
            </Menu>
        );
        return (
            <Header>
                {/* 头部右侧操作 */}
                <div>
                    <span style={{color: '#a6adb4', float: 'right'}}>
                        <Avatar style={{backgroundColor: '#87d068'}} icon="user"/>&nbsp;&nbsp;
                        {this.userInfo ? this.userInfo.userName : this.toAuthPage()}&nbsp;&nbsp;
                        <Dropdown overlay={menu} trigger={['hover']}>
                            <span className="pointClass">
                              <Icon style={{color: '#a6adb4'}} type="down"/>
                            </span>
                        </Dropdown>&nbsp;&nbsp;
                        <Dropdown overlay={languageItem} trigger={['hover']}>
                            <span className="pointClass">
                              <Icon theme="filled" type="edit" style={{color: '#a6adb4'}}/>
                            </span>
                        </Dropdown>
                    </span>
                </div>
                <img src={logo} className="App-logo1" alt="logo"/>
                {/* 头部Menu */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['4']}
                    style={{lineHeight: '64px'}}>
                    <Menu.Item key="1"><Link to="/app"><FormattedMessage id='layout_home'/></Link></Menu.Item>
                    {/*<Menu.Item key="2">系统</Menu.Item>*/}
                    {/*<Menu.Item key="3">规划</Menu.Item>*/}
                    {/*<Menu.Item key="4">配置</Menu.Item>*/}
                    {/*<Menu.Item key="5">告警</Menu.Item>*/}
                    {/*<Menu.Item key="6">性能管理</Menu.Item>*/}
                    {/*<Menu.Item key="7">维护</Menu.Item>*/}
                    {/*<Menu.Item key="8">拓扑管理</Menu.Item>*/}
                    {/*<Menu.Item key="9">许可管理</Menu.Item>*/}
                    {/*<Menu.Item key="10">MR管理</Menu.Item>*/}
                </Menu>
                {/* 修改密码弹出框 */}
                <Modal
                    title={this.props.intl.formatMessage({id: 'layout_change_password'})}
                    visible={this.state.changePwdShow}
                    onOk={this._changePwd.bind(this)}
                    onCancel={this._changePwdClose.bind(this)}>
                    <Form style={{padding: '20px 0 0 0'}}>
                        <Form.Item
                            {...formItemLayout}
                            label={this.props.intl.formatMessage({id: 'layout_old_password'})}
                        >
                            {getFieldDecorator('oldPassword', {
                                rules: [{
                                    required: true,
                                    message: this.props.intl.formatMessage({id: 'layout_password_require_valid'}),
                                }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label={this.props.intl.formatMessage({id: 'layout_new_password'})}
                        >
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    message: this.props.intl.formatMessage({id: 'layout_password_require_valid'}),
                                }, {
                                    validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="password"/>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label={this.props.intl.formatMessage({id: 'layout_confirm_new_password'})}>
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true,
                                    message: this.props.intl.formatMessage({id: 'layout_confirm_password_valid'}),
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur}/>
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            </Header>
        );
    }
}

const WrappedHeadComponent = Form.create()(HeadComponents);
export default withRouter(injectIntl(WrappedHeadComponent));
