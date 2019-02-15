import axios from '../utils/interceptors';
import {ajaxUrl} from "../utils/config";

const basicHost = ajaxUrl;

// 删除底部 '/'
function deleteSlash(host) {
    return host.replace(/\/$/, '');
}

// 添加头部
function addSlash(path) {
    return /^\//.test(path) ? path : `/${path}`;
}

// 解析参数
function separateParams(url) {
    const [path = '', paramsLine = ''] = url.split('?');

    let params = {};

    paramsLine.split('&').forEach(item => {
        const [key, value] = item.split('=');

        params[key] = value;
    });

    return {path, params};
}

// 主要请求方法
export default function request(config) {
    let {method, url, data = {}, host} = config;
    let headers;

    method = (method && method.toUpperCase()) || 'GET';

    const {path, params} = separateParams(url);

    url = host ? `${deleteSlash(host)}${addSlash(path)}` : `${deleteSlash(basicHost)}${addSlash(path)}`;

    return axios({
        url,
        method,
        headers,
        data: method === 'GET' ? undefined : data,
        params: Object.assign(method === 'GET' ? data : {}, params)
    })
}

// 常用的请求方法
export const host = basicHost;
export const get = (url, data) => request({url, data});
export const post = (url, data) => request({method: 'POST', url, data});
export const put = (url, data) => request({method: 'PUT', url, data});
export const del = (url, data) => request({method: 'DELETE', url, data});