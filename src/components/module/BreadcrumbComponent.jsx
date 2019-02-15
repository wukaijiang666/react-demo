import React from 'react';
import {Breadcrumb, Icon} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

/**
 * 面包屑组件
 */
class BreadcrumbComponent extends React.Component {
    _handleGoBack = () => {
        this.props.history.goBack();
    }

    renderBreadcrumbItem(item) {
        if (item.path !== null) {
            return (
                <Breadcrumb.Item key={item.name}>
                    <Link to={item.path}>
                        {item.icon ? (<Icon type={item.icon}/>) : null}<FormattedMessage id={item.locale}/>
                    </Link>
                </Breadcrumb.Item>
            )
        } else {
            return (
                <Breadcrumb.Item key={item.name}>
                    {item.icon ? (<Icon type={item.icon}/>) : null}<FormattedMessage id={item.locale}/>
                </Breadcrumb.Item>
            )
        }
    }

    render() {
        return (
            <div>
                <Breadcrumb className="breadcrumb_style">
                    <Breadcrumb.Item><FormattedMessage id="layout_home"/></Breadcrumb.Item>
                    {this.props.currentPath.map(item => {
                        return this.renderBreadcrumbItem(item)
                    })}
                </Breadcrumb>
                {(this.props.backable === true)
                    ? <Icon className="icon_go_back_style" onClick={this._handleGoBack} type="left-square-o"/> : null}
            </div>
        );
    }
}

export default withRouter(BreadcrumbComponent);
