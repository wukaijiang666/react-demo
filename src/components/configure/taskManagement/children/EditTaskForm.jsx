import React from 'react';
import {withRouter} from 'react-router-dom';
import BreadcrumbComponent from "../../../module/BreadcrumbComponent";

/**
 * 任务管理编辑页面
 */
class EditTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _handleGoBack = () => {
        this.props.history.goBack();
    }

    render() {
        // 面包屑
        const breadcrumbList = [
            {path: null, name: 'configure', icon: null, locale: 'configure'},
            {path: null, name: 'configure_taskManagement', icon: null, locale: 'configure_taskManagement'},
            {path: null, name: 'configure_taskManagement_edit', icon: null, locale: 'configure_taskManagement_edit'}
        ]
        return (
            <div className="div_module_style">
                <BreadcrumbComponent currentPath={breadcrumbList} backable={true}/>
                <div className="div_main_style">
                    <h1>this is edit page</h1>
                </div>
            </div>
        );
    }
}

export default withRouter(EditTaskForm);
