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
        home.render('#skill', true);
        home.render('#service');
        home.render('#values');
        // home.table('#skill', '/contents/home/skill_table.yml')
        // '/contents/home/skill_table.yml'
        const gallery = new gallery_app_1.default();
        // gallery.render('#awards')
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
const common_1 = __importDefault(__webpack_require__(/*! ../util/common */ "./util/common.ts"));
const home_model_1 = __importDefault(__webpack_require__(/*! ../model/home_model */ "./model/home_model.ts"));
class HomeApp {
    constructor() {
        this.model = new home_model_1.default();
    }
    render(selector_1) {
        return __awaiter(this, arguments, void 0, function* (selector, isData = false) {
            const contentId = selector.replace(/\#/, '');
            const content = yield this.model.content(contentId);
            let attachData = null;
            if (isData) {
                const path = `/contents/home/${contentId}.yml`;
                const data = yield common_1.default.readData(path);
                if (data != null) {
                    const doc = common_1.default.parseYAML(data);
                    attachData = doc.items;
                }
            }
            const app = (0, vue_1.createApp)({
                setup() {
                    (0, vue_1.onMounted)(() => {
                        const el = document.querySelector(selector);
                        el === null || el === void 0 ? void 0 : el.classList.remove('hidden');
                    });
                    return {
                        content,
                        attachData,
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const marked_1 = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.cjs");
const common_1 = __importDefault(__webpack_require__(/*! ../util/common */ "./util/common.ts"));
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
     * 컨텐츠 가져오기
     * @param contentId 컨텐츠 ID
     * @returns html 변환된 텍스트
     */
    content(contentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield common_1.default.readData(`/contents/home/${contentId}.md`, this.debug);
            if (resp == null)
                return null;
            return this.parse(resp);
        });
    }
}
exports["default"] = HomeModel;


/***/ }),

/***/ "./util/common.ts":
/*!************************!*\
  !*** ./util/common.ts ***!
  \************************/
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
class CommonUtil {
    static templateHTML(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield fetch(`/html/${fileName}.html`)).text();
        });
    }
    static readData(path_1) {
        return __awaiter(this, arguments, void 0, function* (path, debug = false) {
            let ret = null;
            try {
                if (!debug) { // fetch를 통한 http 요청 (정상 요청)
                    const resp = yield fetch(path);
                    if (!resp.ok)
                        return null;
                    ret = yield resp.text();
                }
                else { // node 파일 읽기 (디버그 모드)
                    const fs = __webpack_require__(/*! fs */ "?74e4");
                    const filePath = `../../docs/${path}`.replace(/\/\//, '/');
                    if (fs.existsSync(filePath)) {
                        const resp = fs.readFileSync(filePath);
                        ret = resp.toString('utf-8');
                    }
                }
            }
            catch (e) {
                // ignore errors
            }
            return ret;
        });
    }
    static parseYAML(text) {
        const YAML = __webpack_require__(/*! yamljs */ "./node_modules/yamljs/lib/Yaml.js");
        return YAML.parse(text);
    }
}
exports["default"] = CommonUtil;


/***/ }),

/***/ "?3b60":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?74e4":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNyREY7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxTQUFTO0FBQ3hELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsK0JBQStCLG1CQUFPLENBQUMsaUJBQUk7QUFDM0MsbURBQW1ELEtBQUs7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLGlEQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQy9DZjs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2FwcC9nYWxsZXJ5X2FwcC50cyIsIndlYnBhY2s6Ly9naXRQYWdlLy4vYXBwL2hvbWVfYXBwLnRzIiwid2VicGFjazovL2dpdFBhZ2UvLi9pbmRleC50cyIsIndlYnBhY2s6Ly9naXRQYWdlLy4vbW9kZWwvaG9tZV9tb2RlbC50cyIsIndlYnBhY2s6Ly9naXRQYWdlLy4vdXRpbC9jb21tb24udHMiLCJ3ZWJwYWNrOi8vZ2l0UGFnZS9pZ25vcmVkfC9Vc2Vycy9hdGVsaTlyL1Byb2plY3QvMjAyNC1teS9hdGVsaTlyLmdpdGh1Yi5pby9zY3JpcHQvd2ViYXBwL25vZGVfbW9kdWxlcy95YW1sanMvbGlifGZzIiwid2VicGFjazovL2dpdFBhZ2UvaWdub3JlZHwvVXNlcnMvYXRlbGk5ci9Qcm9qZWN0LzIwMjQtbXkvYXRlbGk5ci5naXRodWIuaW8vc2NyaXB0L3dlYmFwcC91dGlsfGZzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaG9tZV9hcHBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ob21lX2FwcFwiKSk7XG5jb25zdCBnYWxsZXJ5X2FwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2dhbGxlcnlfYXBwXCIpKTtcbmNsYXNzIEFwcCB7XG4gICAgLyoqXG4gICAgICog65287Jqw7YyFIOuntVxuICAgICAqL1xuICAgIC8vIHByaXZhdGUgaGFzaFJvdXRlOiBhbnkgPSB7XG4gICAgLy8gICAgICdob21lJzogbmV3IEhvbWVBcHAoKSxcbiAgICAvLyAgICAgJ2NvdW50ZXInOiBuZXcgQ291bnRlckFwcCgpLFxuICAgIC8vICAgICAnaGVsbG8nOiBuZXcgSGVsbG9BcHAoKSxcbiAgICAvLyB9XG4gICAgLyoqXG4gICAgICog7J207KCEIOudvOyasO2Mhe2CpFxuICAgICAqL1xuICAgIC8vIHByaXZhdGUgcHJldkhhc2hLZXk6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICAgLyoqXG4gICAgICog7J247Iqk7YS07IqkIOqwgOyguOyYpOq4sFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFBcHAuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZSA9IG5ldyBBcHAoKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFwcC5pbnN0YW5jZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog7LSI6riw7ZmUXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgLy8g66eI7Jqw7IqkIOyasO2BtOumrSDquIjsp4BcbiAgICAgICAgZG9jdW1lbnQub25jb250ZXh0bWVudSA9ICgpID0+IHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgICAgICAvLyDso7zshozrs4Dqsr0g6rCQ7KeAXG4gICAgICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5yb3V0ZSh0aGlzLnJvdXRlS2V5KHdpbmRvdy5sb2NhdGlvbi5oYXNoKSA/PyAnaG9tZScpXG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIHRoaXMucm91dGUodGhpcy5yb3V0ZUtleSh3aW5kb3cubG9jYXRpb24uaGFzaCkgPz8gJ2hvbWUnKVxuICAgICAgICAvLyDtmYgg7Luo7YWQ7LigIOu2iOufrOyYpOq4sFxuICAgICAgICB0aGlzLmxvYWRIb21lKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOudvOyasO2Mhe2CpCDqsIDsoLjsmKTquLBcbiAgICAgKiBAcGFyYW0gbG9jSGFzaCDso7zshowg7ZW07Iuc6rCSXG4gICAgICogQHJldHVybnMg65287Jqw7YyF7YKkXG4gICAgICovXG4gICAgLy8gcHJpdmF0ZSByb3V0ZUtleShsb2NIYXNoOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAvLyAgICAgaWYgKGxvY0hhc2ggPT0gJycpIGxvY0hhc2ggPSAnIy9ob21lJ1xuICAgIC8vICAgICBpZiAobG9jSGFzaC5sZW5ndGggPCAzKSByZXR1cm4gbnVsbFxuICAgIC8vICAgICBpZiAobG9jSGFzaFswXSAhPSAnIycgfHwgbG9jSGFzaFsxXSAhPSAnLycpIHJldHVybiBudWxsXG4gICAgLy8gICAgIHJldHVybiBsb2NIYXNoLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpXG4gICAgLy8gfVxuICAgIC8qKlxuICAgICAqIOudvOyasO2MhVxuICAgICAqIEBwYXJhbSByb3V0ZUtleSDrnbzsmrDtjIXtgqRcbiAgICAgKi9cbiAgICAvLyBwcml2YXRlIHJvdXRlKHJvdXRlS2V5OiBzdHJpbmcpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMucHJldkhhc2hLZXkgIT0gbnVsbCkge1xuICAgIC8vICAgICAgICAgY29uc3QgcHJldkN0eCA9IHRoaXMuaGFzaFJvdXRlW3RoaXMucHJldkhhc2hLZXldXG4gICAgLy8gICAgICAgICBwcmV2Q3R4LmFwcC51bm1vdW50KClcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjb25zdCBjdHhBcHAgPSB0aGlzLmhhc2hSb3V0ZVtyb3V0ZUtleV1cbiAgICAvLyAgICAgaWYgKGN0eEFwcCA9PSBudWxsKSByZXR1cm5cbiAgICAvLyAgICAgY3R4QXBwLmNyZWF0ZSgnI2FwcCcpXG4gICAgLy8gICAgIHRoaXMucHJldkhhc2hLZXkgPSByb3V0ZUtleVxuICAgIC8vIH1cbiAgICAvKipcbiAgICAgKiDtmYgg7Luo7YWQ7LigIOu2iOufrOyYpOq4sFxuICAgICAqL1xuICAgIGxvYWRIb21lKCkge1xuICAgICAgICBjb25zdCBob21lID0gbmV3IGhvbWVfYXBwXzEuZGVmYXVsdCgpO1xuICAgICAgICBob21lLnJlbmRlcignI3N0b3J5Jyk7XG4gICAgICAgIGhvbWUucmVuZGVyKCcjc2tpbGwnLCB0cnVlKTtcbiAgICAgICAgaG9tZS5yZW5kZXIoJyNzZXJ2aWNlJyk7XG4gICAgICAgIGhvbWUucmVuZGVyKCcjdmFsdWVzJyk7XG4gICAgICAgIC8vIGhvbWUudGFibGUoJyNza2lsbCcsICcvY29udGVudHMvaG9tZS9za2lsbF90YWJsZS55bWwnKVxuICAgICAgICAvLyAnL2NvbnRlbnRzL2hvbWUvc2tpbGxfdGFibGUueW1sJ1xuICAgICAgICBjb25zdCBnYWxsZXJ5ID0gbmV3IGdhbGxlcnlfYXBwXzEuZGVmYXVsdCgpO1xuICAgICAgICAvLyBnYWxsZXJ5LnJlbmRlcignI2F3YXJkcycpXG4gICAgICAgIGdhbGxlcnkucmVuZGVyKCcjcG9ydGZvbGlvJyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBob21lX2FwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2hvbWVfYXBwXCIpKTtcbi8vIGltcG9ydCBDb21tb25VdGlsIGZyb20gJy4uL3V0aWwvY29tbW9uJ1xuLy8gaW1wb3J0IHsgbWFya2VkIH0gZnJvbSAnbWFya2VkJ1xuY2xhc3MgR2FsbGVyeUFwcCBleHRlbmRzIGhvbWVfYXBwXzEuZGVmYXVsdCB7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBHYWxsZXJ5QXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gcmVxdWlyZShcInZ1ZVwiKTtcbmNvbnN0IGNvbW1vbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL2NvbW1vblwiKSk7XG5jb25zdCBob21lX21vZGVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21vZGVsL2hvbWVfbW9kZWxcIikpO1xuY2xhc3MgSG9tZUFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgaG9tZV9tb2RlbF8xLmRlZmF1bHQoKTtcbiAgICB9XG4gICAgcmVuZGVyKHNlbGVjdG9yXzEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChzZWxlY3RvciwgaXNEYXRhID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRJZCA9IHNlbGVjdG9yLnJlcGxhY2UoL1xcIy8sICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB5aWVsZCB0aGlzLm1vZGVsLmNvbnRlbnQoY29udGVudElkKTtcbiAgICAgICAgICAgIGxldCBhdHRhY2hEYXRhID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChpc0RhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gYC9jb250ZW50cy9ob21lLyR7Y29udGVudElkfS55bWxgO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBjb21tb25fMS5kZWZhdWx0LnJlYWREYXRhKHBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gY29tbW9uXzEuZGVmYXVsdC5wYXJzZVlBTUwoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaERhdGEgPSBkb2MuaXRlbXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYXBwID0gKDAsIHZ1ZV8xLmNyZWF0ZUFwcCkoe1xuICAgICAgICAgICAgICAgIHNldHVwKCkge1xuICAgICAgICAgICAgICAgICAgICAoMCwgdnVlXzEub25Nb3VudGVkKSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hEYXRhLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXBwLm1vdW50KHNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZUFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYXBwL2FwcFwiKSk7XG5hcHBfMS5kZWZhdWx0LmdldEluc3RhbmNlKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWFya2VkXzEgPSByZXF1aXJlKFwibWFya2VkXCIpO1xuY29uc3QgY29tbW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3V0aWwvY29tbW9uXCIpKTtcbi8qKlxuICog7ZmI7Y6Y7J207KeAIOuqqOuNuFxuICovXG5jbGFzcyBIb21lTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIO2FjOyKpO2KuCDtlIzrnpjqt7gg7ISk7KCVXG4gICAgICogQHBhcmFtIGRlYnVnIOuUlOuyhOq3uCDrqqjrk5xcbiAgICAgKi9cbiAgICBzZXREZWJ1Z01vZGUoZGVidWcpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBtYXJrZG93biDthY3siqTtirgg67OA7ZmYXG4gICAgICogQHBhcmFtIHRleHQgbWFya2Rvd24g7YWN7Iqk7Yq4XG4gICAgICogQHJldHVybnMgaHRtbCDthY3siqTtirhcbiAgICAgKi9cbiAgICBwYXJzZSh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBtYXJrZWRfMS5tYXJrZWQucGFyc2UodGV4dCk7XG4gICAgICAgIHJldHVybiByZXNwLnN1YnN0cmluZygwLCByZXNwLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDsu6jthZDsuKAg6rCA7KC47Jik6riwXG4gICAgICogQHBhcmFtIGNvbnRlbnRJZCDsu6jthZDsuKAgSURcbiAgICAgKiBAcmV0dXJucyBodG1sIOuzgO2ZmOuQnCDthY3siqTtirhcbiAgICAgKi9cbiAgICBjb250ZW50KGNvbnRlbnRJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGNvbW1vbl8xLmRlZmF1bHQucmVhZERhdGEoYC9jb250ZW50cy9ob21lLyR7Y29udGVudElkfS5tZGAsIHRoaXMuZGVidWcpO1xuICAgICAgICAgICAgaWYgKHJlc3AgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlKHJlc3ApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBIb21lTW9kZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29tbW9uVXRpbCB7XG4gICAgc3RhdGljIHRlbXBsYXRlSFRNTChmaWxlTmFtZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkICh5aWVsZCBmZXRjaChgL2h0bWwvJHtmaWxlTmFtZX0uaHRtbGApKS50ZXh0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVhZERhdGEocGF0aF8xKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAocGF0aCwgZGVidWcgPSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IHJldCA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghZGVidWcpIHsgLy8gZmV0Y2jrpbwg7Ya17ZWcIGh0dHAg7JqU7LKtICjsoJXsg4Eg7JqU7LKtKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwID0geWllbGQgZmV0Y2gocGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcC5vaylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB5aWVsZCByZXNwLnRleHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IC8vIG5vZGUg7YyM7J28IOydveq4sCAo65SU67KE6re4IOuqqOuTnClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGAuLi8uLi9kb2NzLyR7cGF0aH1gLnJlcGxhY2UoL1xcL1xcLy8sICcvJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSByZXNwLnRvU3RyaW5nKCd1dGYtOCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmUgZXJyb3JzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHBhcnNlWUFNTCh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IFlBTUwgPSByZXF1aXJlKCd5YW1sanMnKTtcbiAgICAgICAgcmV0dXJuIFlBTUwucGFyc2UodGV4dCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29tbW9uVXRpbDtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==