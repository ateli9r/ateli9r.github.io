import { marked } from 'marked'

export default class HomeModel {
    private debug: boolean = false
    private host: string = ''

    setDebugMode(debug: boolean) {
        this.debug = debug

        if (this.debug) {
            this.host = 'http://localhost:3000'
        }
    }

    parse(text: string): string {
        const resp = marked.parse(text) as string
        return resp.substring(0, resp.length-1)
    }

    async load(path: string): Promise<string | null> {
        let ret = null
        try {
            const url = `${this.host}/${path}`.replace(/\/\//, '/')
            const resp = await fetch(url)
            if (!resp.ok) return null
            ret = await resp.text()
        } catch (e) {

        }
        return ret
    }

    async content(contentId: string): Promise<string | null> {
        // home.render('#story', '/contents/home/story.md')
        // home.render('#skill', '/contents/home/skill.md')
        // home.render('#values', '/contents/home/values.md')

        const resp = await this.load(`/contents/home/${contentId}.md`)
        if (resp == null) return null
        return this.parse(resp)
    }
}


// export default class HomeApp {
//     async render(selector: string, path: string) {
//         const text = await (await fetch(path)).text()

//         const app = createApp({
//             setup() {
//                 // https://marked.js.org
//                 const content = marked.parse(text)

//                 onMounted(() => {
//                     const el = document.querySelector(selector)
//                     el?.classList.remove('hidden')
//                 })

//                 return {
//                     content,
//                 }
//             }
//         })
//         app.mount(selector)
//     }
// }

// export default class HelloModel {
//     private prefix: string = 'Hello'
//     private splitter: string = ', '

//     hello(name: string = '') {
//         if (name.length > 0)
//             return `${this.prefix}${this.splitter}${name}`
//         else
//             return `${this.prefix}`
//     }

//     setPrefix(prefix: string) {
//         this.prefix = prefix
//     }

//     setSplitter(splitter: string) {
//         this.splitter = splitter
//     }
// }
