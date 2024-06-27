"use strict";
var gitPage;
(self["webpackChunkgitPage"] = self["webpackChunkgitPage"] || []).push([["main"],{

/***/ "./app/app.ts":
/*!********************!*\
  !*** ./app/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const home_app_1 = __importDefault(__webpack_require__(/*! ./home_app */ "./app/home_app.ts"));
const portfolio_app_1 = __importDefault(__webpack_require__(/*! ./portfolio_app */ "./app/portfolio_app.ts"));
class App {
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
            App.instance = new App();
            App.instance.initialize();
        }
        return App.instance;
    }
    /**
     * 초기화
     */
    initialize() {
        // 마우스 우클릭 금지
        document.oncontextmenu = () => { return false; };
        // 주소변경 감지
        // window.addEventListener('hashchange', () => {
        //     this.route(this.routeKey(window.location.hash) ?? 'home')
        // })
        // this.route(this.routeKey(window.location.hash) ?? 'home')
        // 홈 컨텐츠 불러오기
        this.loadHome();
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
    loadHome() {
        const home = new home_app_1.default();
        home.render('#story');
        home.render('#skill');
        home.render('#values');
        const portfolio = new portfolio_app_1.default();
        portfolio.render('#portfolio');
    }
}
exports["default"] = App;


/***/ }),

/***/ "./app/home_app.ts":
/*!*************************!*\
  !*** ./app/home_app.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const vue_1 = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
// import CommonUtil from '../util/common'
const home_model_1 = __importDefault(__webpack_require__(/*! ../model/home_model */ "./model/home_model.ts"));
class HomeApp {
    render(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new home_model_1.default();
            const contentId = selector.replace(/\#/, '');
            const content = yield model.content(contentId);
            const app = (0, vue_1.createApp)({
                setup() {
                    (0, vue_1.onMounted)(() => {
                        const el = document.querySelector(selector);
                        el === null || el === void 0 ? void 0 : el.classList.remove('hidden');
                    });
                    return {
                        content,
                    };
                }
            });
            app.mount(selector);
        });
    }
}
exports["default"] = HomeApp;


/***/ }),

/***/ "./app/portfolio_app.ts":
/*!******************************!*\
  !*** ./app/portfolio_app.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const vue_1 = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
// import CommonUtil from '../util/common'
// import { marked } from 'marked'
class PortfolioApp {
    // async create(selector: string) {
    //     this.app = createApp({
    //         template: await CommonUtil.templateHTML('home'),
    //     })
    //     this.app.mount(selector)
    // }
    render(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const app = (0, vue_1.createApp)({
                setup() {
                    (0, vue_1.onMounted)(() => {
                        console.log('PortfolioApp > onMounted');
                        const el = document.querySelector(selector);
                        el === null || el === void 0 ? void 0 : el.classList.remove('hidden');
                    });
                    return {};
                }
            });
            app.mount(selector);
        });
    }
}
exports["default"] = PortfolioApp;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __importDefault(__webpack_require__(/*! ./app/app */ "./app/app.ts"));
app_1.default.getInstance();


/***/ }),

/***/ "./model/home_model.ts":
/*!*****************************!*\
  !*** ./model/home_model.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const marked_1 = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.cjs");
class HomeModel {
    constructor() {
        this.debug = false;
        this.host = '';
    }
    setDebugMode(debug) {
        this.debug = debug;
        if (this.debug) {
            this.host = 'http://localhost:3000';
        }
    }
    parse(text) {
        const resp = marked_1.marked.parse(text);
        return resp.substring(0, resp.length - 1);
    }
    load(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = null;
            try {
                const url = `${this.host}/${path}`.replace(/\/\//, '/');
                const resp = yield fetch(url);
                if (!resp.ok)
                    return null;
                ret = yield resp.text();
            }
            catch (e) {
            }
            return ret;
        });
    }
    content(contentId) {
        return __awaiter(this, void 0, void 0, function* () {
            // home.render('#story', '/contents/home/story.md')
            // home.render('#skill', '/contents/home/skill.md')
            // home.render('#values', '/contents/home/values.md')
            const resp = yield this.load(`/contents/home/${contentId}.md`);
            if (resp == null)
                return null;
            return this.parse(resp);
        });
    }
}
exports["default"] = HomeModel;
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ gitPage = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsVUFBVTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixZQUFZLEVBQUUsY0FBYyxFQUFFLEtBQUs7QUFDNUQ7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2FwcC9ob21lX2FwcC50cyIsIndlYnBhY2s6Ly9naXRQYWdlLy4vYXBwL3BvcnRmb2xpb19hcHAudHMiLCJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2luZGV4LnRzIiwid2VicGFjazovL2dpdFBhZ2UvLi9tb2RlbC9ob21lX21vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaG9tZV9hcHBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ob21lX2FwcFwiKSk7XG5jb25zdCBwb3J0Zm9saW9fYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcG9ydGZvbGlvX2FwcFwiKSk7XG5jbGFzcyBBcHAge1xuICAgIC8qKlxuICAgICAqIOudvOyasO2MhSDrp7VcbiAgICAgKi9cbiAgICAvLyBwcml2YXRlIGhhc2hSb3V0ZTogYW55ID0ge1xuICAgIC8vICAgICAnaG9tZSc6IG5ldyBIb21lQXBwKCksXG4gICAgLy8gICAgICdjb3VudGVyJzogbmV3IENvdW50ZXJBcHAoKSxcbiAgICAvLyAgICAgJ2hlbGxvJzogbmV3IEhlbGxvQXBwKCksXG4gICAgLy8gfVxuICAgIC8qKlxuICAgICAqIOydtOyghCDrnbzsmrDtjIXtgqRcbiAgICAgKi9cbiAgICAvLyBwcml2YXRlIHByZXZIYXNoS2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICAgIC8qKlxuICAgICAqIOyduOyKpO2EtOyKpCDqsIDsoLjsmKTquLBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghQXBwLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UgPSBuZXcgQXBwKCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcHAuaW5zdGFuY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOy0iOq4sO2ZlFxuICAgICAqL1xuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIC8vIOuniOyasOyKpCDsmrDtgbTrpq0g6riI7KeAXG4gICAgICAgIGRvY3VtZW50Lm9uY29udGV4dG1lbnUgPSAoKSA9PiB7IHJldHVybiBmYWxzZTsgfTtcbiAgICAgICAgLy8g7KO87IaM67OA6rK9IOqwkOyngFxuICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMucm91dGUodGhpcy5yb3V0ZUtleSh3aW5kb3cubG9jYXRpb24uaGFzaCkgPz8gJ2hvbWUnKVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyB0aGlzLnJvdXRlKHRoaXMucm91dGVLZXkod2luZG93LmxvY2F0aW9uLmhhc2gpID8/ICdob21lJylcbiAgICAgICAgLy8g7ZmIIOy7qO2FkOy4oCDrtojrn6zsmKTquLBcbiAgICAgICAgdGhpcy5sb2FkSG9tZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDrnbzsmrDtjIXtgqQg6rCA7KC47Jik6riwXG4gICAgICogQHBhcmFtIGxvY0hhc2gg7KO87IaMIO2VtOyLnOqwklxuICAgICAqIEByZXR1cm5zIOudvOyasO2Mhe2CpFxuICAgICAqL1xuICAgIC8vIHByaXZhdGUgcm91dGVLZXkobG9jSGFzaDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgLy8gICAgIGlmIChsb2NIYXNoID09ICcnKSBsb2NIYXNoID0gJyMvaG9tZSdcbiAgICAvLyAgICAgaWYgKGxvY0hhc2gubGVuZ3RoIDwgMykgcmV0dXJuIG51bGxcbiAgICAvLyAgICAgaWYgKGxvY0hhc2hbMF0gIT0gJyMnIHx8IGxvY0hhc2hbMV0gIT0gJy8nKSByZXR1cm4gbnVsbFxuICAgIC8vICAgICByZXR1cm4gbG9jSGFzaC5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKVxuICAgIC8vIH1cbiAgICAvKipcbiAgICAgKiDrnbzsmrDtjIVcbiAgICAgKiBAcGFyYW0gcm91dGVLZXkg65287Jqw7YyF7YKkXG4gICAgICovXG4gICAgLy8gcHJpdmF0ZSByb3V0ZShyb3V0ZUtleTogc3RyaW5nKSB7XG4gICAgLy8gICAgIGlmICh0aGlzLnByZXZIYXNoS2V5ICE9IG51bGwpIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHByZXZDdHggPSB0aGlzLmhhc2hSb3V0ZVt0aGlzLnByZXZIYXNoS2V5XVxuICAgIC8vICAgICAgICAgcHJldkN0eC5hcHAudW5tb3VudCgpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgY29uc3QgY3R4QXBwID0gdGhpcy5oYXNoUm91dGVbcm91dGVLZXldXG4gICAgLy8gICAgIGlmIChjdHhBcHAgPT0gbnVsbCkgcmV0dXJuXG4gICAgLy8gICAgIGN0eEFwcC5jcmVhdGUoJyNhcHAnKVxuICAgIC8vICAgICB0aGlzLnByZXZIYXNoS2V5ID0gcm91dGVLZXlcbiAgICAvLyB9XG4gICAgLyoqXG4gICAgICog7ZmIIOy7qO2FkOy4oCDrtojrn6zsmKTquLBcbiAgICAgKi9cbiAgICBsb2FkSG9tZSgpIHtcbiAgICAgICAgY29uc3QgaG9tZSA9IG5ldyBob21lX2FwcF8xLmRlZmF1bHQoKTtcbiAgICAgICAgaG9tZS5yZW5kZXIoJyNzdG9yeScpO1xuICAgICAgICBob21lLnJlbmRlcignI3NraWxsJyk7XG4gICAgICAgIGhvbWUucmVuZGVyKCcjdmFsdWVzJyk7XG4gICAgICAgIGNvbnN0IHBvcnRmb2xpbyA9IG5ldyBwb3J0Zm9saW9fYXBwXzEuZGVmYXVsdCgpO1xuICAgICAgICBwb3J0Zm9saW8ucmVuZGVyKCcjcG9ydGZvbGlvJyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gcmVxdWlyZShcInZ1ZVwiKTtcbi8vIGltcG9ydCBDb21tb25VdGlsIGZyb20gJy4uL3V0aWwvY29tbW9uJ1xuY29uc3QgaG9tZV9tb2RlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9tb2RlbC9ob21lX21vZGVsXCIpKTtcbmNsYXNzIEhvbWVBcHAge1xuICAgIHJlbmRlcihzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBuZXcgaG9tZV9tb2RlbF8xLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRJZCA9IHNlbGVjdG9yLnJlcGxhY2UoL1xcIy8sICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB5aWVsZCBtb2RlbC5jb250ZW50KGNvbnRlbnRJZCk7XG4gICAgICAgICAgICBjb25zdCBhcHAgPSAoMCwgdnVlXzEuY3JlYXRlQXBwKSh7XG4gICAgICAgICAgICAgICAgc2V0dXAoKSB7XG4gICAgICAgICAgICAgICAgICAgICgwLCB2dWVfMS5vbk1vdW50ZWQpKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFwcC5tb3VudChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhvbWVBcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSByZXF1aXJlKFwidnVlXCIpO1xuLy8gaW1wb3J0IENvbW1vblV0aWwgZnJvbSAnLi4vdXRpbC9jb21tb24nXG4vLyBpbXBvcnQgeyBtYXJrZWQgfSBmcm9tICdtYXJrZWQnXG5jbGFzcyBQb3J0Zm9saW9BcHAge1xuICAgIC8vIGFzeW5jIGNyZWF0ZShzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgLy8gICAgIHRoaXMuYXBwID0gY3JlYXRlQXBwKHtcbiAgICAvLyAgICAgICAgIHRlbXBsYXRlOiBhd2FpdCBDb21tb25VdGlsLnRlbXBsYXRlSFRNTCgnaG9tZScpLFxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICB0aGlzLmFwcC5tb3VudChzZWxlY3RvcilcbiAgICAvLyB9XG4gICAgcmVuZGVyKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBhcHAgPSAoMCwgdnVlXzEuY3JlYXRlQXBwKSh7XG4gICAgICAgICAgICAgICAgc2V0dXAoKSB7XG4gICAgICAgICAgICAgICAgICAgICgwLCB2dWVfMS5vbk1vdW50ZWQpKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQb3J0Zm9saW9BcHAgPiBvbk1vdW50ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhcHAubW91bnQoc2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBQb3J0Zm9saW9BcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGFwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FwcC9hcHBcIikpO1xuYXBwXzEuZGVmYXVsdC5nZXRJbnN0YW5jZSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1hcmtlZF8xID0gcmVxdWlyZShcIm1hcmtlZFwiKTtcbmNsYXNzIEhvbWVNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ob3N0ID0gJyc7XG4gICAgfVxuICAgIHNldERlYnVnTW9kZShkZWJ1Zykge1xuICAgICAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICAgICAgICB0aGlzLmhvc3QgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJzZSh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBtYXJrZWRfMS5tYXJrZWQucGFyc2UodGV4dCk7XG4gICAgICAgIHJldHVybiByZXNwLnN1YnN0cmluZygwLCByZXNwLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICBsb2FkKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCByZXQgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9LyR7cGF0aH1gLnJlcGxhY2UoL1xcL1xcLy8sICcvJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGZldGNoKHVybCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwLm9rKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICByZXQgPSB5aWVsZCByZXNwLnRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29udGVudChjb250ZW50SWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIC8vIGhvbWUucmVuZGVyKCcjc3RvcnknLCAnL2NvbnRlbnRzL2hvbWUvc3RvcnkubWQnKVxuICAgICAgICAgICAgLy8gaG9tZS5yZW5kZXIoJyNza2lsbCcsICcvY29udGVudHMvaG9tZS9za2lsbC5tZCcpXG4gICAgICAgICAgICAvLyBob21lLnJlbmRlcignI3ZhbHVlcycsICcvY29udGVudHMvaG9tZS92YWx1ZXMubWQnKVxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIHRoaXMubG9hZChgL2NvbnRlbnRzL2hvbWUvJHtjb250ZW50SWR9Lm1kYCk7XG4gICAgICAgICAgICBpZiAocmVzcCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UocmVzcCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhvbWVNb2RlbDtcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVBcHAge1xuLy8gICAgIGFzeW5jIHJlbmRlcihzZWxlY3Rvcjogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcbi8vICAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IChhd2FpdCBmZXRjaChwYXRoKSkudGV4dCgpXG4vLyAgICAgICAgIGNvbnN0IGFwcCA9IGNyZWF0ZUFwcCh7XG4vLyAgICAgICAgICAgICBzZXR1cCgpIHtcbi8vICAgICAgICAgICAgICAgICAvLyBodHRwczovL21hcmtlZC5qcy5vcmdcbi8vICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gbWFya2VkLnBhcnNlKHRleHQpXG4vLyAgICAgICAgICAgICAgICAgb25Nb3VudGVkKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuLy8gICAgICAgICAgICAgICAgICAgICBlbD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQsXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICBhcHAubW91bnQoc2VsZWN0b3IpXG4vLyAgICAgfVxuLy8gfVxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG9Nb2RlbCB7XG4vLyAgICAgcHJpdmF0ZSBwcmVmaXg6IHN0cmluZyA9ICdIZWxsbydcbi8vICAgICBwcml2YXRlIHNwbGl0dGVyOiBzdHJpbmcgPSAnLCAnXG4vLyAgICAgaGVsbG8obmFtZTogc3RyaW5nID0gJycpIHtcbi8vICAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gMClcbi8vICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnByZWZpeH0ke3RoaXMuc3BsaXR0ZXJ9JHtuYW1lfWBcbi8vICAgICAgICAgZWxzZVxuLy8gICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMucHJlZml4fWBcbi8vICAgICB9XG4vLyAgICAgc2V0UHJlZml4KHByZWZpeDogc3RyaW5nKSB7XG4vLyAgICAgICAgIHRoaXMucHJlZml4ID0gcHJlZml4XG4vLyAgICAgfVxuLy8gICAgIHNldFNwbGl0dGVyKHNwbGl0dGVyOiBzdHJpbmcpIHtcbi8vICAgICAgICAgdGhpcy5zcGxpdHRlciA9IHNwbGl0dGVyXG4vLyAgICAgfVxuLy8gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9