import layout_en_US from '../locale/layout_en_US';
import configure_en_US from '../locale/configure_en_US';

/**
 * 国际化英文
 */
const app = {

    "upload":"Upload",
    "download":"Download",
    "add":"Add",
    "edit":"Edit",
    "copy": "Copy",
    "delete":"Delete",
    "reload":"Reload",
    "more": "More",
    "total":"Total",
    "number": " ",

    "username":"Username",
    "password":"Password",
    "remember_me":"Remember me",
    "forgot_password":"Forgot password",
    "login_in": "Log in",
    "or":"Or",
    "register":"register now!",
    "username_valid": "Please input your username!",
    "password_valid": "Please input your Password!",

}
const en_US = Object.assign({}, { ...app }, { ...layout_en_US }, { ...configure_en_US })

export default en_US;