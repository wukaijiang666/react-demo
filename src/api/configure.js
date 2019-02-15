import {del, get, post} from './request'

// 获取用户
export function getUser() {
    return get('/getUser');
}

// 更新用户
export function updateUser() {
    return post(`/logger/test`);
}

// 删除用户
export function deleteUser() {
    return del('/deleteUser');
}