import { createApp, onMounted, ref, computed, h } from 'vue'
import CommonUtil from '../../util/common'
import App from '../app'

/**
 * 
 */
export default class MenuApp {
    public app: any

    /**
     * 앱 생성
     * @param selector 기준 셀렉터
     */
    async create(selector: string) {
        this.app = createApp({
            template: await CommonUtil.templateHTML('layouts/menu'),
        })

        this.app.mount(selector)
    }
}