import CounterApp from './counter_app'
import HelloApp from './hello_app'
import HomeApp from './home_app'
import PostsApp from './posts_app'

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
        'posts': new PostsApp(),
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

        // a 태그 라우팅 설정 - 메뉴
        this.setAnchorRoute('#menu')

        // 파라미터 라우팅
        this.paramsRoute()
    }

    /**
     * a 태그 라우팅 설정
     */
    private setAnchorRoute(selector: string) {
        jQuery(selector).find('a').on('click', (e: Event) => {
            e.preventDefault()

            const a = jQuery(e.target as HTMLElement)
            const state = {url: a.attr('href')}
            history.pushState(state, '', state.url)

            this.paramsRoute()
        })
    }

    /**
     * 파라미터 해석
     * @returns 
     */
    private parseParams() : any {
        const url = window.location.href
        let sptUrl = url.split('?')
        if (sptUrl.length != 2) return {}
        sptUrl = sptUrl[1].split('&')

        let params : any = {}
        for (var i = 0; i < sptUrl.length; i++) {
            const spt = sptUrl[i].split('=')
            const k = spt[0]
            const v = decodeURIComponent(spt[1])
            params[k] = v
        }
        return params
    }

    /**
     * 파라미터 라우팅
     */
    private paramsRoute() {
        const params = this.parseParams()
        if (!params.app) {
            location.href = '/?app=home'
            return
        }

        // 같은 앱은 다시 요청 하지 않음
        if (this.ctxApp != null && this.ctxApp == this.appRoute[params.app]) return

        // 앱 불러오기
        App.getInstance().loadApp(params.app)
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