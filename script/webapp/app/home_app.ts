import { createApp, ref } from 'vue'
import CommonUtil from '../util/common'

export default class HomeApp {
    public app: any

    async create(selector: string) {
        this.app = createApp({
            template: await CommonUtil.templateHTML('home'),
        })
        this.app.mount(selector)
    }
}