import { createApp, onMounted, ref } from 'vue'
import HomeApp from './home_app'
// import CommonUtil from '../util/common'
// import { marked } from 'marked'

export default class GalleryApp extends HomeApp {
    // public app: any

    // async create(selector: string) {
    //     this.app = createApp({
    //         template: await CommonUtil.templateHTML('home'),
    //     })
    //     this.app.mount(selector)
    // }

    // async render(selector: string) {
    //     const app = createApp({
    //         setup() {
    //             onMounted(() => {
    //                 console.log('PortfolioApp > onMounted')
    //                 const el = document.querySelector(selector)
    //                 el?.classList.remove('hidden')
    //             })

    //             return {

    //             }
    //         }
    //     })
    //     app.mount(selector)
    // }
}