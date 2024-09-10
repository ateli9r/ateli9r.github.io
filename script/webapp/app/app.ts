import CounterApp from './counter_app'
import HelloApp from './hello_app'
import HomeApp from './home_app'

export default class App {
    /**
     * 싱글턴 인스턴스
     */
    private static instance: App

    /**
     * 마지막 앱
     */
    private ctxApp: any

    /**
     * 라우팅 맵
     */
    private appRoute: any = {
        'home': new HomeApp(),
        'counter': new CounterApp(),
        'hello': new HelloApp(),
    }

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

        // 해시 변경 이벤트 등록
        window.addEventListener('hashchange', this.hashRoute)

        // 해시 라우팅
        this.hashRoute()
    }

    /**
     * 해시 라우팅
     */
    private hashRoute() {
        const hash = window.location.hash
        if (hash.indexOf('#/') == -1) {
            window.location.hash = '#/home'
            return
        }

        // 해시ID 추출
        const hashId = hash.substring(2)

        // 앱 불러오기
        App.getInstance().loadApp(hashId)
    }

    /**
     * modal에 앱 불러오기
     * @param appId appRoute에 지정된 key
     */
    public loadApp(appId: string) {
        if (this.ctxApp != null) {
            this.ctxApp.app.unmount()
            this.ctxApp = null
        }

        const ctxApp = this.appRoute[appId]
        if (ctxApp != null) {
            ctxApp.create('.app-content')
            this.ctxApp = ctxApp
        }
    }
}