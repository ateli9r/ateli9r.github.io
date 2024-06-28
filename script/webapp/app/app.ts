import CounterApp from './counter_app'
import HelloApp from './hello_app'
import HomeApp from './home_app'
import GalleryApp from './gallery_app'

export default class App {
    /**
     * 싱글턴 인스턴스
     */
    private static instance: App

    /**
     * 라우팅 맵
     */
    // private hashRoute: any = {
    //     'home': new HomeApp(),
    //     'counter': new CounterApp(),
    //     'hello': new HelloApp(),
    // }

    /**
     * 이전 라우팅키
     */
    // private prevHashKey: string | null = null

    /**
     * 인스턴스 가져오기
     */
    static getInstance() {
        if (!App.instance) {
            App.instance = new App()
            App.instance.initialize()
        }
        return App.instance
    }

    /**
     * 초기화
     */
    private initialize() {
        // 마우스 우클릭 금지
        document.oncontextmenu = () => { return false }

        // 주소변경 감지
        // window.addEventListener('hashchange', () => {
        //     this.route(this.routeKey(window.location.hash) ?? 'home')
        // })
        // this.route(this.routeKey(window.location.hash) ?? 'home')

        // 홈 컨텐츠 불러오기
        this.loadHome()
    }

    /**
     * 라우팅키 가져오기
     * @param locHash 주소 해시값
     * @returns 라우팅키
     */
    // private routeKey(locHash: string): string | null {
    //     if (locHash == '') locHash = '#/home'
    //     if (locHash.length < 3) return null
    //     if (locHash[0] != '#' || locHash[1] != '/') return null
    //     return locHash.substring(2).toLowerCase()
    // }

    /**
     * 라우팅
     * @param routeKey 라우팅키
     */
    // private route(routeKey: string) {
    //     if (this.prevHashKey != null) {
    //         const prevCtx = this.hashRoute[this.prevHashKey]
    //         prevCtx.app.unmount()
    //     }

    //     const ctxApp = this.hashRoute[routeKey]
    //     if (ctxApp == null) return
    //     ctxApp.create('#app')

    //     this.prevHashKey = routeKey
    // }

    /**
     * 홈 컨텐츠 불러오기
     */
    private loadHome() {
        const home = new HomeApp()
        home.render('#story')
        home.render('#skill')
        home.render('#service')
        home.render('#values')

        const gallery = new GalleryApp()
        gallery.render('#awards')
        gallery.render('#portfolio')
    }
}