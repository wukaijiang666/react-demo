import {action, observable} from 'mobx';

/**
 * 国际化
 */
export default class app {
    @observable currentPath = '';
    @observable appLanguage = 'zh-CN';

    @action setCurrentPath(path) {
        this.currentPath = path;
    }

    @action setAppLanguage(language) {
        console.log(language);
        this.appLanguage = language;
        sessionStorage.setItem('language', language);
    }
}