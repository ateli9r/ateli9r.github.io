import { createApp, onMounted, ref } from 'vue'
import HelloModel from '../model/hello_model'

export default class HelloApp {
    public app: any

    create(selector: string) {
        const model = new HelloModel()
        const name = ref('')

        this.app = createApp({
            setup() {
                return { name }
            },
            computed: {
                message() {
                    return model.hello(name.value)
                }
            },
            template: `
            <div>
                <span>{{ message }}</span>
            </div>
            <div>
                <input type="text" v-model="name">
            </div>
            `
        })
        this.app.mount(selector)
    }
}