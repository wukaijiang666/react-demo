import React from 'react';
import {Layout} from 'antd';
import {Route, Switch, withRouter} from 'react-router-dom';
import HeadsComponent from '../../components/module/HeadsComponent';
import SiderComponent from '../../components/configure/layout/SiderComponent';
import TaskManagement from '../../components/configure/taskManagement/TaskManagement';
import AddTaskForm from '../../components/configure/taskManagement/children/AddTaskForm';
import EditTaskForm from '../../components/configure/taskManagement/children/EditTaskForm';

const {Content, Sider} = Layout;

/**
 * 配置管理模块路由配置
 */
class ConfigureContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // 控制左侧菜单折叠
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    }

    render() {
        return (
            <Layout className="layout_style">
                {/* 头部组件 */}
                <HeadsComponent/>
                <Layout className="layout_style1">
                    {/* 左侧菜单 */}
                    <Sider
                        className="sider_style"
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}>
                        <SiderComponent/>
                    </Sider>
                    {/* Main */}
                    <Layout className="layout_style2">
                        <Content className="content_style">
                            <Switch>
                                <Route path="/app/configure/taskManagement/add"
                                       render={(props) => (<AddTaskForm {...props} {...this.props}/>)}/>
                                <Route path="/app/configure/taskManagement/edit"
                                       render={(props) => (<EditTaskForm {...props} {...this.props}/>)}/>
                                <Route path="/app/configure/taskManagement"
                                       render={(props) => (<TaskManagement {...props} {...this.props}/>)}/>
                            </Switch>
                        </Content>
                        {/*<Footer style={{ textAlign: 'center' }}>*/}
                        {/*Ant Design ©2018 Created by Ant UED*/}
                        {/*</Footer>*/}
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(ConfigureContainer);
