import HelloApp from './hello_app'
import HomeApp from './home_app'

export default class App {
    /**
     * 싱글턴 인스턴스
     */
    private static instance: App

    /**
     * 라우팅 맵
     */
    private hashRoute: any = {
        'home': new HomeApp(),
        'hello': new HelloApp(),
    }

    /**
     * 이전 라우팅키
     */
    private prevHashKey: string | null = null

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
        window.addEventListener('hashchange', () => {
            this.route(this.routeKey(window.location.hash) ?? 'home')
        })
        this.route(this.routeKey(window.location.hash) ?? 'home')
    }

    /**
     * 라우팅키 가져오기
     * @param locHash 주소 해시값
     * @returns 라우팅키
     */
    private routeKey(locHash: string): string | null {
        if (locHash == '') locHash = '#/home'
        if (locHash.length < 3) return null
        if (locHash[0] != '#' || locHash[1] != '/') return null
        return locHash.substring(2).toLowerCase()
    }

    /**
     * 라우팅
     * @param routeKey 라우팅키
     */
    private route(routeKey: string) {
        if (this.prevHashKey != null) {
            const prevCtx = this.hashRoute[this.prevHashKey]
            prevCtx.app.unmount()
        }

        const ctxApp = this.hashRoute[routeKey]
        if (ctxApp == null) return
        ctxApp.create('#app')

        this.prevHashKey = routeKey
    }
}