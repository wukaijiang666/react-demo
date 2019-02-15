import React from 'react';
import {Icon, Menu} from 'antd';
import {FormattedMessage, injectIntl} from 'react-intl';
import {Link, withRouter} from 'react-router-dom';

const {SubMenu} = Menu;

/**
 * 左侧操作栏组件
 */
class SiderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 选中菜单集合
            isLight: []
        }
    }

    // 判断是否包含某个字符串
    isInUrlArray = (value) => {
        let isLight = window.location.pathname.split('/');
        for (let i = 0; i < isLight.length; i++) {
            if (value === isLight[i]) {
                return true;
            }
        }
        return false;
    }
    // url change事件
    _changeURL = (parent) => {
        let selectAndLight = [];
        let isLightParent = [];
        if (this.isInUrlArray('neMonitor')) {
            selectAndLight.push('neMonitor');
        } else if (this.isInUrlArray('configureView')) {
            selectAndLight.push('configureView');
        } else if (this.isInUrlArray('dynamicManage')) {
            selectAndLight.push('dynamicManage');
        } else if (this.isInUrlArray('taskManagement')) {
            selectAndLight.push('taskManagement');
        } else if (this.isInUrlArray('operationManage')) {
            selectAndLight.push('operationManage');
        } else if (this.isInUrlArray('neDataSearch')) {
            selectAndLight.push('neDataSearch');
        } 
        if (parent) {
            return isLightParent;
        } else {
            this.setState({isLight: selectAndLight});
        }
    }

    componentDidMount() {
        this._changeURL()
    }

    componentWillReceiveProps() {
        this._changeURL()
    }

    render() {
        let isLightParent = this._changeURL('parent');
        return (
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={this.state.isLight}
                defaultOpenKeys={isLightParent}
                style={{borderRight: 0}}>
                <Menu.Item key="neMonitor">
                    <Link to="/app/configure/neMonitor">
                        <Icon type="pie-chart"/><span><FormattedMessage id="configure_ne_monitor"/></span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="configureView">
                    <Link to="/app/configure/configureView">
                        <Icon type="team"/><span><FormattedMessage id="configure_view"/></span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="dynamicManage">
                    <Link to="/app/configure/dynamicManage">
                        <Icon type="desktop"/><span><FormattedMessage id="configure_dynamic_manage"/></span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="taskManagement">
                    <Link to="/app/configure/taskManagement">
                        <Icon type="user"/><span><FormattedMessage id="configure_task_manage"/></span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="operationManage">
                    <Link to="/app/configure/operationManage">
                        <Icon type="laptop"/><span><FormattedMessage id="configure_operation_manage"/></span>
                    </Link>
                </Menu.Item>
                <SubMenu key="batchOperation"
                         title={<div><Icon type="notification"/><span><FormattedMessage id="configure_batch_operation"/></span>
                         </div>}>
                    <Menu.Item key="neDataSearch">
                        <Link to="/app/configure/neDataSearch">
                            <FormattedMessage id="configure_ne_data_search"/>
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default withRouter(injectIntl(SiderComponent));
