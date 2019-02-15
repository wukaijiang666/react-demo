import React from 'react';
import ConfigureContainer from '../configure/ConfigureContainer';
import HomeComponent from '../../components/home/HomeComponent';
import {Route, Switch, withRouter} from 'react-router-dom';

/**
 * 各个模块路由配置
 */
class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                <Switch>
                    <Route path="/app" exact render={(props) => (<HomeComponent {...props} {...this.props}/>)}/>
                    <Route path="/app/configure"
                           render={(props) => (<ConfigureContainer {...props} {...this.props}/>)}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(HomeContainer);
