import { createApp, ref } from 'vue'
import CounterModel from '../model/counter_model'

export default class CounterApp {
    public app: any

    create(selector: string) {
        const model = new CounterModel()

        this.app = createApp({
            setup() {
                const count = ref(0)

                const increase = () => {
                    model.increase()
                    count.value = model.getCount()
                }

                const reset = () => {
                    model.resetCount()
                    count.value = model.getCount()
                }

                return {
                    count,
                    increase,
                    reset,
                }
            },
            template: `
            <span>count: {{ count }}</span><br>
            <button @click="increase">increase</button>
            <button @click="reset">reset</button>
            `
        })
        this.app.mount(selector)
    }
}