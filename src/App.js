import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import intl from 'intl';
import {addLocaleData, IntlProvider} from 'react-intl';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import enUSLocal from './locale/en_US';
import zhCNLocal from './locale/zh_CN';
import {LocaleProvider} from 'antd';
import LoginContainer from './containers/login/LoginContainer';
import HomeContainer from './containers/home/HomeContainer';

import {inject, observer} from 'mobx-react';

let messages = {};
messages['en-US'] = enUSLocal;
messages['zh-CN'] = zhCNLocal;

addLocaleData([...zh, ...en]);

@inject('app')
@observer
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                {/*<Router>*/}
                {/*<div style={{height:'100%'}}>*/}
                {/*<Route exact path="/" render={(props) => (<LoginContainer {...props} {...this.props}/>)}/>*/}
                {/*<Route exact path="/app" render={(props) => (<HomeContainer {...props} {...this.props}/>)}/>*/}
                {/*</div>*/}
                {/*</Router>*/}
                {/* antd国际化 */}
                <LocaleProvider locale={this.props.app.appLanguage === 'zh-CN' ? zhCN : enUS}>
                    {/* intl国际化 */}
                    <IntlProvider locale={this.props.app.appLanguage} messages={messages[this.props.app.appLanguage]}>
                        <Router>
                            <div style={{height: '100%'}}>
                                <Switch>
                                    <Route path="/login" exact component={LoginContainer}/>
                                    <Route path="/app" component={HomeContainer}/>
                                </Switch>
                            </div>
                        </Router>
                    </IntlProvider>
                </LocaleProvider>
            </div>
        );
    }
}

export default App;
