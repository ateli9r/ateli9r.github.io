import { createApp, ref, h } from 'vue'
import CommonUtil from '../util/common'
import CounterModel from '../model/counter_model'

export default class CounterApp {
    public app: any

    async create(selector: string) {
        const model = new CounterModel()

        this.app = createApp({
            data() {
                return {
                    count: 0,
                }
            },
            methods: {
                increase() {
                    model.increase()
                    this.count = model.getCount()
                },
                reset() {
                    model.resetCount()
                    this.count = model.getCount()
                },
            },
            template: await CommonUtil.templateHTML('counter'),
        })

        this.app.mount(selector)
    }
}