import {action, observable} from 'mobx';

/**
 * 登录
 */
export default class login {
    @observable isAuthenticated = false
    @observable userName = ''
    @observable userId = ''
    @observable ip = ''
    @observable token = ''
    @observable access = []

    // 登录
    @action loginAction(user) {
        sessionStorage.setItem('_userInfo', JSON.stringify({
            userName: user.userName,
            userId: user.userId,
            ip: user.ip
        }))
        this.userName = user.userName
        this.userId = user.userId
        this.ip = user.ip
    }

    // 登出
    @action logoutAction(user, toAuthPage) {
        sessionStorage.clear();
        this.isAuthenticated = false;
        this.userName = '';
        this.userId = '';
        this.ip = '';
        this.token = '';
        this.role = '';
        this.access = '';
        toAuthPage();
    }

    @action setAuthCodeAction(userId) {
        this.access = "authCode";
    }

    @action setIsAuthenticated(param) {
        this.isAuthenticated = param
    }
}