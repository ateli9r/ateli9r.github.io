import { createApp, onMounted, ref, computed, h } from 'vue'
import CommonUtil from '../util/common'
import HelloModel from '../model/hello_model'

export default class HelloApp {
    public app: any

    async create(selector: string) {
        const model = new HelloModel()

        this.app = createApp({
            data() {
                return {
                    name: '',
                }
            },
            computed: {
                message() {
                    return model.hello(this.name)
                }
            },
            template: await CommonUtil.templateHTML('hello'),
        })

        this.app.mount(selector)
    }
}