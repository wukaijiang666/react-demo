import axios from 'axios';
import {message} from 'antd';
import Stores from '../store/index';

axios.defaults.timeout = 1000 * 60 * 10;

// before http request
axios.interceptors.request.use(config => {
    if (config.url.indexOf('/login') > -1) {
        return config;
    }
    if (config.url.indexOf('?') > -1) {
        config.url += `&_number=${JSON.parse(sessionStorage.getItem('_userInfo')).userId}`;
    } else {
        config.url += `?_number=${JSON.parse(sessionStorage.getItem('_userInfo')).userId}`;
    }

    config.headers = Object.assign({}, config.headers);
    config.headers.Authorization = sessionStorage.getItem('_token').replace(/(^")|("$)/g, '');
    return config;
})

// before http response
axios.interceptors.response.use(res => {
    if (res.headers.tokentimeout) {
        sessionStorage.setItem('_token', res.headers.authorization);
    }
    return res
}, error => {
    if (error.response) {
        let errCode = error.response.data.errorCode;
        if (errCode === undefined && error.response.config.url.indexOf('/login') > -1) {
            message.error("登录名或密码错误!")
        } else if (error.response.status === 500) {
            if (error.response.data.detail && error.response.data.detail.indexOf('access or mw or server is not valid') > -1) {
                message.error('服务器异常,请联系管理员!');
                sessionStorage.clear();
                Stores.login.isAuthenticated(false);
                setTimeout(() => window.location.replace('/login'), 1000);
            } else {
                message.error(error.response.data.errorMsg);
            }
        } else if (error.response.status === 520) {
            message.error('Token超时，请重新登录!');
            sessionStorage.clear();
            Stores.login.isAuthenticated(false);
            setTimeout(() => window.location.replace('/login'), 1000);
        } else if (error.response.status === 404) {
            message.error('404 (Not Found)');
        }
    } else {
        if (error.message.indexOf('Network Error') > -1) {
            message.error('连接服务器超时!');
        } else {
            sessionStorage.clear();
            setTimeout(() => window.location.replace('/login'), 1000);
        }
    }
    return Promise.reject(error)
})

export default axios;