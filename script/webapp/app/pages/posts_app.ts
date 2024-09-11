import { createApp, onMounted, ref, computed, h } from 'vue'
import CommonUtil from '../../util/common'

/**
 * 
 */
export default class PostsApp {
    public app: any

    /**
     * 앱 생성
     * @param selector 기준 셀렉터
     */
    async create(selector: string) {
        this.app = createApp({
            template: await CommonUtil.templateHTML('pages/posts'),
        })

        this.app.mount(selector)
    }
}