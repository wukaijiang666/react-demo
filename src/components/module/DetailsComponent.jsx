import React from 'react';
import {Drawer} from 'antd';
import '../module/DetailsComponent.css';

/**
 * 详情组件
 */
class DetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: this.props.display,

        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({display: nextProps.display})
    }

    _close = () => {
        this.props.close();
        this.setState({display: false})
    }

    render() {
        return (
            <Drawer
                width={640}
                title={this.props.title}
                placement="right"
                closable={false}
                onClose={this._close}
                visible={this.state.display}>
                {this.props.children}
            </Drawer>
        );
    }
}

export default DetailsComponent;
