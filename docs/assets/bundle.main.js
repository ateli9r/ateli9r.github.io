var gitPage;
(self["webpackChunkgitPage"] = self["webpackChunkgitPage"] || []).push([["main"],{

/***/ "./app/app.ts":
/*!********************!*\
  !*** ./app/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const home_app_1 = __importDefault(__webpack_require__(/*! ./home_app */ "./app/home_app.ts"));
const gallery_app_1 = __importDefault(__webpack_require__(/*! ./gallery_app */ "./app/gallery_app.ts"));
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
        home.render('#service');
        home.render('#values');
        const gallery = new gallery_app_1.default();
        gallery.render('#awards');
        gallery.render('#portfolio');
    }
}
exports["default"] = App;


/***/ }),

/***/ "./app/gallery_app.ts":
/*!****************************!*\
  !*** ./app/gallery_app.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const home_app_1 = __importDefault(__webpack_require__(/*! ./home_app */ "./app/home_app.ts"));
// import CommonUtil from '../util/common'
// import { marked } from 'marked'
class GalleryApp extends home_app_1.default {
}
exports["default"] = GalleryApp;


/***/ }),

/***/ "./app/home_app.ts":
/*!*************************!*\
  !*** ./app/home_app.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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

"use strict";

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
/**
 * 홈페이지 모델
 */
class HomeModel {
    constructor() {
        this.debug = false;
    }
    /**
     * 테스트 플래그 설정
     * @param debug 디버그 모드
     */
    setDebugMode(debug) {
        this.debug = debug;
    }
    /**
     * markdown 텍스트 변환
     * @param text markdown 텍스트
     * @returns html 텍스트
     */
    parse(text) {
        const resp = marked_1.marked.parse(text);
        return resp.substring(0, resp.length - 1);
    }
    /**
     * markdown 파일 읽기
     * @param path 요청 경로
     * @returns 파일 내용
     */
    load(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = null;
            try {
                if (!this.debug) { // fetch를 통한 http 요청 (정상 요청)
                    const resp = yield fetch(path);
                    if (!resp.ok)
                        return null;
                    ret = yield resp.text();
                }
                else { // node 파일 읽기 (디버그 모드)
                    const fs = __webpack_require__(/*! fs */ "?b846");
                    const filePath = `../../docs/${path}`.replace(/\/\//, '/');
                    if (fs.existsSync(filePath)) {
                        const resp = fs.readFileSync(filePath);
                        ret = resp.toString('utf-8');
                    }
                }
            }
            catch (e) {
            }
            return ret;
        });
    }
    /**
     * 컨텐츠 가져오기
     * @param contentId 컨텐츠 ID
     * @returns html 변환된 텍스트
     */
    content(contentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.load(`/contents/home/${contentId}.md`);
            if (resp == null)
                return null;
            return this.parse(resp);
        });
    }
}
exports["default"] = HomeModel;


/***/ }),

/***/ "?b846":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ gitPage = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUNBQW1DLG1CQUFPLENBQUMscUNBQVk7QUFDdkQsc0NBQXNDLG1CQUFPLENBQUMsMkNBQWU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7OztBQ25GRjtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1DQUFtQyxtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZEO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7O0FDVkY7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLHdDQUFLO0FBQzNCO0FBQ0EscUNBQXFDLG1CQUFPLENBQUMsa0RBQXFCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7Ozs7QUN0Q0Y7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQywrQkFBVztBQUNqRDs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQixtQkFBTyxDQUFDLG9EQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QiwrQkFBK0IsbUJBQU8sQ0FBQyxpQkFBSTtBQUMzQyxtREFBbUQsS0FBSztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxVQUFVO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDOUVmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2FwcC9nYWxsZXJ5X2FwcC50cyIsIndlYnBhY2s6Ly9naXRQYWdlLy4vYXBwL2hvbWVfYXBwLnRzIiwid2VicGFjazovL2dpdFBhZ2UvLi9pbmRleC50cyIsIndlYnBhY2s6Ly9naXRQYWdlLy4vbW9kZWwvaG9tZV9tb2RlbC50cyIsIndlYnBhY2s6Ly9naXRQYWdlL2lnbm9yZWR8L1VzZXJzL2F0ZWxpOXIvUHJvamVjdC8yMDI0LW15L2F0ZWxpOXIuZ2l0aHViLmlvL3NjcmlwdC93ZWJhcHAvbW9kZWx8ZnMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBob21lX2FwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2hvbWVfYXBwXCIpKTtcbmNvbnN0IGdhbGxlcnlfYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZ2FsbGVyeV9hcHBcIikpO1xuY2xhc3MgQXBwIHtcbiAgICAvKipcbiAgICAgKiDrnbzsmrDtjIUg66e1XG4gICAgICovXG4gICAgLy8gcHJpdmF0ZSBoYXNoUm91dGU6IGFueSA9IHtcbiAgICAvLyAgICAgJ2hvbWUnOiBuZXcgSG9tZUFwcCgpLFxuICAgIC8vICAgICAnY291bnRlcic6IG5ldyBDb3VudGVyQXBwKCksXG4gICAgLy8gICAgICdoZWxsbyc6IG5ldyBIZWxsb0FwcCgpLFxuICAgIC8vIH1cbiAgICAvKipcbiAgICAgKiDsnbTsoIQg65287Jqw7YyF7YKkXG4gICAgICovXG4gICAgLy8gcHJpdmF0ZSBwcmV2SGFzaEtleTogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgICAvKipcbiAgICAgKiDsnbjsiqTthLTsiqQg6rCA7KC47Jik6riwXG4gICAgICovXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIUFwcC5pbnN0YW5jZSkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlID0gbmV3IEFwcCgpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXBwLmluc3RhbmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDstIjquLDtmZRcbiAgICAgKi9cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICAvLyDrp4jsmrDsiqQg7Jqw7YG066atIOq4iOyngFxuICAgICAgICBkb2N1bWVudC5vbmNvbnRleHRtZW51ID0gKCkgPT4geyByZXR1cm4gZmFsc2U7IH07XG4gICAgICAgIC8vIOyjvOyGjOuzgOqyvSDqsJDsp4BcbiAgICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLnJvdXRlKHRoaXMucm91dGVLZXkod2luZG93LmxvY2F0aW9uLmhhc2gpID8/ICdob21lJylcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gdGhpcy5yb3V0ZSh0aGlzLnJvdXRlS2V5KHdpbmRvdy5sb2NhdGlvbi5oYXNoKSA/PyAnaG9tZScpXG4gICAgICAgIC8vIO2ZiCDsu6jthZDsuKAg67aI65+s7Jik6riwXG4gICAgICAgIHRoaXMubG9hZEhvbWUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog65287Jqw7YyF7YKkIOqwgOyguOyYpOq4sFxuICAgICAqIEBwYXJhbSBsb2NIYXNoIOyjvOyGjCDtlbTsi5zqsJJcbiAgICAgKiBAcmV0dXJucyDrnbzsmrDtjIXtgqRcbiAgICAgKi9cbiAgICAvLyBwcml2YXRlIHJvdXRlS2V5KGxvY0hhc2g6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIC8vICAgICBpZiAobG9jSGFzaCA9PSAnJykgbG9jSGFzaCA9ICcjL2hvbWUnXG4gICAgLy8gICAgIGlmIChsb2NIYXNoLmxlbmd0aCA8IDMpIHJldHVybiBudWxsXG4gICAgLy8gICAgIGlmIChsb2NIYXNoWzBdICE9ICcjJyB8fCBsb2NIYXNoWzFdICE9ICcvJykgcmV0dXJuIG51bGxcbiAgICAvLyAgICAgcmV0dXJuIGxvY0hhc2guc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKClcbiAgICAvLyB9XG4gICAgLyoqXG4gICAgICog65287Jqw7YyFXG4gICAgICogQHBhcmFtIHJvdXRlS2V5IOudvOyasO2Mhe2CpFxuICAgICAqL1xuICAgIC8vIHByaXZhdGUgcm91dGUocm91dGVLZXk6IHN0cmluZykge1xuICAgIC8vICAgICBpZiAodGhpcy5wcmV2SGFzaEtleSAhPSBudWxsKSB7XG4gICAgLy8gICAgICAgICBjb25zdCBwcmV2Q3R4ID0gdGhpcy5oYXNoUm91dGVbdGhpcy5wcmV2SGFzaEtleV1cbiAgICAvLyAgICAgICAgIHByZXZDdHguYXBwLnVubW91bnQoKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNvbnN0IGN0eEFwcCA9IHRoaXMuaGFzaFJvdXRlW3JvdXRlS2V5XVxuICAgIC8vICAgICBpZiAoY3R4QXBwID09IG51bGwpIHJldHVyblxuICAgIC8vICAgICBjdHhBcHAuY3JlYXRlKCcjYXBwJylcbiAgICAvLyAgICAgdGhpcy5wcmV2SGFzaEtleSA9IHJvdXRlS2V5XG4gICAgLy8gfVxuICAgIC8qKlxuICAgICAqIO2ZiCDsu6jthZDsuKAg67aI65+s7Jik6riwXG4gICAgICovXG4gICAgbG9hZEhvbWUoKSB7XG4gICAgICAgIGNvbnN0IGhvbWUgPSBuZXcgaG9tZV9hcHBfMS5kZWZhdWx0KCk7XG4gICAgICAgIGhvbWUucmVuZGVyKCcjc3RvcnknKTtcbiAgICAgICAgaG9tZS5yZW5kZXIoJyNza2lsbCcpO1xuICAgICAgICBob21lLnJlbmRlcignI3NlcnZpY2UnKTtcbiAgICAgICAgaG9tZS5yZW5kZXIoJyN2YWx1ZXMnKTtcbiAgICAgICAgY29uc3QgZ2FsbGVyeSA9IG5ldyBnYWxsZXJ5X2FwcF8xLmRlZmF1bHQoKTtcbiAgICAgICAgZ2FsbGVyeS5yZW5kZXIoJyNhd2FyZHMnKTtcbiAgICAgICAgZ2FsbGVyeS5yZW5kZXIoJyNwb3J0Zm9saW8nKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhvbWVfYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaG9tZV9hcHBcIikpO1xuLy8gaW1wb3J0IENvbW1vblV0aWwgZnJvbSAnLi4vdXRpbC9jb21tb24nXG4vLyBpbXBvcnQgeyBtYXJrZWQgfSBmcm9tICdtYXJrZWQnXG5jbGFzcyBHYWxsZXJ5QXBwIGV4dGVuZHMgaG9tZV9hcHBfMS5kZWZhdWx0IHtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbGxlcnlBcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSByZXF1aXJlKFwidnVlXCIpO1xuLy8gaW1wb3J0IENvbW1vblV0aWwgZnJvbSAnLi4vdXRpbC9jb21tb24nXG5jb25zdCBob21lX21vZGVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21vZGVsL2hvbWVfbW9kZWxcIikpO1xuY2xhc3MgSG9tZUFwcCB7XG4gICAgcmVuZGVyKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IG5ldyBob21lX21vZGVsXzEuZGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudElkID0gc2VsZWN0b3IucmVwbGFjZSgvXFwjLywgJycpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHlpZWxkIG1vZGVsLmNvbnRlbnQoY29udGVudElkKTtcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9ICgwLCB2dWVfMS5jcmVhdGVBcHApKHtcbiAgICAgICAgICAgICAgICBzZXR1cCgpIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIHZ1ZV8xLm9uTW91bnRlZCkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsID09PSBudWxsIHx8IGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXBwLm1vdW50KHNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZUFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYXBwL2FwcFwiKSk7XG5hcHBfMS5kZWZhdWx0LmdldEluc3RhbmNlKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWFya2VkXzEgPSByZXF1aXJlKFwibWFya2VkXCIpO1xuLyoqXG4gKiDtmYjtjpjsnbTsp4Ag66qo6424XG4gKi9cbmNsYXNzIEhvbWVNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog7YWM7Iqk7Yq4IO2UjOuemOq3uCDshKTsoJVcbiAgICAgKiBAcGFyYW0gZGVidWcg65SU67KE6re4IOuqqOuTnFxuICAgICAqL1xuICAgIHNldERlYnVnTW9kZShkZWJ1Zykge1xuICAgICAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIG1hcmtkb3duIO2FjeyKpO2KuCDrs4DtmZhcbiAgICAgKiBAcGFyYW0gdGV4dCBtYXJrZG93biDthY3siqTtirhcbiAgICAgKiBAcmV0dXJucyBodG1sIO2FjeyKpO2KuFxuICAgICAqL1xuICAgIHBhcnNlKHRleHQpIHtcbiAgICAgICAgY29uc3QgcmVzcCA9IG1hcmtlZF8xLm1hcmtlZC5wYXJzZSh0ZXh0KTtcbiAgICAgICAgcmV0dXJuIHJlc3Auc3Vic3RyaW5nKDAsIHJlc3AubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIG1hcmtkb3duIO2MjOydvCDsnb3quLBcbiAgICAgKiBAcGFyYW0gcGF0aCDsmpTssq0g6rK966GcXG4gICAgICogQHJldHVybnMg7YyM7J28IOuCtOyaqVxuICAgICAqL1xuICAgIGxvYWQocGF0aCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHJldCA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZWJ1ZykgeyAvLyBmZXRjaOulvCDthrXtlZwgaHR0cCDsmpTssq0gKOygleyDgSDsmpTssq0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCBmZXRjaChwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwLm9rKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IHlpZWxkIHJlc3AudGV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgLy8gbm9kZSDtjIzsnbwg7J296riwICjrlJTrsoTqt7gg66qo65OcKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gYC4uLy4uL2RvY3MvJHtwYXRofWAucmVwbGFjZSgvXFwvXFwvLywgJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHJlc3AudG9TdHJpbmcoJ3V0Zi04Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOy7qO2FkOy4oCDqsIDsoLjsmKTquLBcbiAgICAgKiBAcGFyYW0gY29udGVudElkIOy7qO2FkOy4oCBJRFxuICAgICAqIEByZXR1cm5zIGh0bWwg67OA7ZmY65CcIO2FjeyKpO2KuFxuICAgICAqL1xuICAgIGNvbnRlbnQoY29udGVudElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwID0geWllbGQgdGhpcy5sb2FkKGAvY29udGVudHMvaG9tZS8ke2NvbnRlbnRJZH0ubWRgKTtcbiAgICAgICAgICAgIGlmIChyZXNwID09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZShyZXNwKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZU1vZGVsO1xuIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9