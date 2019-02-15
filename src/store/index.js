import app from '../modules/app/app';
import login from '../modules/login/login';

/**
 * 状态管理
 */
class Stores {
    constructor() {
        this.app = new app();
        this.login = new login();
    }
}

export default new Stores()