import { createApp, ref } from 'vue'

export default class HomeApp {
    public app: any

    create(selector: string) {
        this.app = createApp({
            setup() {
                return { }
            },
            template: `
            <div>home</div>
            `
        })
        this.app.mount(selector)
    }
}