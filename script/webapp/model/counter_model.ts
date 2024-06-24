export default class CounterModel {
    private count: number = 0

    getCount() {
        return this.count
    }

    resetCount() {
        this.count = 0
    }

    increase() {
        this.count += 1
    }
}

// import { createApp, onMounted, ref } from 'vue'

// export default class HelloApp {
//     public app: any

//     create(selector: string) {
//         this.app = createApp({
//             setup() {
//                 const count = ref(0)
//                 return { count }
//             },
//             template: `
//             <button @click="count++">
//                 당신은 {{ count }} 번 클릭했습니다.
//             </button>
//             `
//         })
//         this.app.mount(selector)
//     }
// }