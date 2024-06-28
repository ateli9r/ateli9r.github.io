import { createApp, onMounted, ref } from 'vue'
import CommonUtil from '../util/common'
import HomeModel from '../model/home_model'

export default class HomeApp {
    private model: HomeModel

    constructor() {
        this.model = new HomeModel()
    }

    async render(selector: string, isData: boolean = false) {
        const contentId = selector.replace(/\#/, '')
        const content = await this.model.content(contentId)

        let attachData: any = null
        if (isData) {
            const path = `/contents/home/${contentId}.yml`
            const data = await CommonUtil.readData(path)
            if (data != null) {
                const doc = CommonUtil.parseYAML(data)
                attachData = doc
            }
        }

        const app = createApp({
            setup() {
                onMounted(() => {
                    const el = document.querySelector(selector)
                    el?.classList.remove('hidden')
                })

                return {
                    content,
                    attachData,
                }
            }
        })
        app.mount(selector)
    }
}