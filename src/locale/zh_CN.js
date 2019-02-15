import layout_zh_CN from '../locale/layout_zh_CN';
import configure_zh_CN from '../locale/configure_zh_CN';

/**
 * 国际化中文
 */
const app = {

    "upload": "上传",
    "download": "下载",
    "add": "新增",
    "edit": "编辑",
    "copy": "复制",
    "delete": "删除",
    "reload": "刷新",
    "more": "更多",
    "total": "共",
    "number": "条",

    "username": "用户名",
    "password": "密码",
    "remember_me": "记住我",
    "forgot_password": "忘记密码",
    "login_in": "登录",
    "or": "或",
    "register": "注册",
    "username_valid": "请输入用户名！",
    "password_valid": "请输入密码！",

}
const zh_CN = Object.assign({}, {...app}, {...layout_zh_CN}, {...configure_zh_CN});

export default zh_CN;