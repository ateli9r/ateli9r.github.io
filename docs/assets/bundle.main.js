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
const counter_app_1 = __importDefault(__webpack_require__(/*! ./counter_app */ "./app/counter_app.ts"));
const hello_app_1 = __importDefault(__webpack_require__(/*! ./hello_app */ "./app/hello_app.ts"));
const home_app_1 = __importDefault(__webpack_require__(/*! ./home_app */ "./app/home_app.ts"));
class App {
    constructor() {
        /**
         * 라우팅 맵
         */
        this.hashRoute = {
            'home': new home_app_1.default(),
            'counter': new counter_app_1.default(),
            'hello': new hello_app_1.default(),
        };
        /**
         * 이전 라우팅키
         */
        this.prevHashKey = null;
    }
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
        var _a;
        window.addEventListener('hashchange', () => {
            var _a;
            this.route((_a = this.routeKey(window.location.hash)) !== null && _a !== void 0 ? _a : 'home');
        });
        this.route((_a = this.routeKey(window.location.hash)) !== null && _a !== void 0 ? _a : 'home');
    }
    /**
     * 라우팅키 가져오기
     * @param locHash 주소 해시값
     * @returns 라우팅키
     */
    routeKey(locHash) {
        if (locHash == '')
            locHash = '#/home';
        if (locHash.length < 3)
            return null;
        if (locHash[0] != '#' || locHash[1] != '/')
            return null;
        return locHash.substring(2).toLowerCase();
    }
    /**
     * 라우팅
     * @param routeKey 라우팅키
     */
    route(routeKey) {
        if (this.prevHashKey != null) {
            const prevCtx = this.hashRoute[this.prevHashKey];
            prevCtx.app.unmount();
        }
        const ctxApp = this.hashRoute[routeKey];
        if (ctxApp == null)
            return;
        ctxApp.create('#app');
        this.prevHashKey = routeKey;
    }
}
exports["default"] = App;


/***/ }),

/***/ "./app/counter_app.ts":
/*!****************************!*\
  !*** ./app/counter_app.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const vue_1 = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
const counter_model_1 = __importDefault(__webpack_require__(/*! ../model/counter_model */ "./model/counter_model.ts"));
class CounterApp {
    create(selector) {
        const model = new counter_model_1.default();
        this.app = (0, vue_1.createApp)({
            setup() {
                const count = (0, vue_1.ref)(0);
                const increase = () => {
                    model.increase();
                    count.value = model.getCount();
                };
                const reset = () => {
                    model.resetCount();
                    count.value = model.getCount();
                };
                return {
                    count,
                    increase,
                    reset,
                };
            },
            template: `
            <span>count: {{ count }}</span><br>
            <button @click="increase">increase</button>
            <button @click="reset">reset</button>
            `
        });
        this.app.mount(selector);
    }
}
exports["default"] = CounterApp;


/***/ }),

/***/ "./app/hello_app.ts":
/*!**************************!*\
  !*** ./app/hello_app.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const vue_1 = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
const hello_model_1 = __importDefault(__webpack_require__(/*! ../model/hello_model */ "./model/hello_model.ts"));
class HelloApp {
    create(selector) {
        const model = new hello_model_1.default();
        const name = (0, vue_1.ref)('');
        this.app = (0, vue_1.createApp)({
            setup() {
                return { name };
            },
            computed: {
                message() {
                    return model.hello(name.value);
                }
            },
            template: `
            <div>
                <span>{{ message }}</span>
            </div>
            <div>
                <input type="text" v-model="name">
            </div>
            `
        });
        this.app.mount(selector);
    }
}
exports["default"] = HelloApp;


/***/ }),

/***/ "./app/home_app.ts":
/*!*************************!*\
  !*** ./app/home_app.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vue_1 = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
class HomeApp {
    create(selector) {
        this.app = (0, vue_1.createApp)({
            setup() {
                return {};
            },
            template: `
            <div>home</div>
            `
        });
        this.app.mount(selector);
    }
}
exports["default"] = HomeApp;


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

/***/ "./model/counter_model.ts":
/*!********************************!*\
  !*** ./model/counter_model.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class CounterModel {
    constructor() {
        this.count = 0;
    }
    getCount() {
        return this.count;
    }
    resetCount() {
        this.count = 0;
    }
    increase() {
        this.count += 1;
    }
}
exports["default"] = CounterModel;
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


/***/ }),

/***/ "./model/hello_model.ts":
/*!******************************!*\
  !*** ./model/hello_model.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class HelloModel {
    constructor() {
        this.prefix = 'Hello';
        this.splitter = ', ';
    }
    hello(name = '') {
        if (name.length > 0)
            return `${this.prefix}${this.splitter}${name}`;
        else
            return `${this.prefix}`;
    }
    setPrefix(prefix) {
        this.prefix = prefix;
    }
    setSplitter(splitter) {
        this.splitter = splitter;
    }
}
exports["default"] = HelloModel;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ gitPage = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRQYWdlLy4vYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9naXRQYWdlLy4vYXBwL2NvdW50ZXJfYXBwLnRzIiwid2VicGFjazovL2dpdFBhZ2UvLi9hcHAvaGVsbG9fYXBwLnRzIiwid2VicGFjazovL2dpdFBhZ2UvLi9hcHAvaG9tZV9hcHAudHMiLCJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2luZGV4LnRzIiwid2VicGFjazovL2dpdFBhZ2UvLi9tb2RlbC9jb3VudGVyX21vZGVsLnRzIiwid2VicGFjazovL2dpdFBhZ2UvLi9tb2RlbC9oZWxsb19tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvdW50ZXJfYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY291bnRlcl9hcHBcIikpO1xuY29uc3QgaGVsbG9fYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaGVsbG9fYXBwXCIpKTtcbmNvbnN0IGhvbWVfYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaG9tZV9hcHBcIikpO1xuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOudvOyasO2MhSDrp7VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFzaFJvdXRlID0ge1xuICAgICAgICAgICAgJ2hvbWUnOiBuZXcgaG9tZV9hcHBfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICAnY291bnRlcic6IG5ldyBjb3VudGVyX2FwcF8xLmRlZmF1bHQoKSxcbiAgICAgICAgICAgICdoZWxsbyc6IG5ldyBoZWxsb19hcHBfMS5kZWZhdWx0KCksXG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDsnbTsoIQg65287Jqw7YyF7YKkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByZXZIYXNoS2V5ID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog7J247Iqk7YS07IqkIOqwgOyguOyYpOq4sFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFBcHAuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZSA9IG5ldyBBcHAoKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFwcC5pbnN0YW5jZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog7LSI6riw7ZmUXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRoaXMucm91dGUoKF9hID0gdGhpcy5yb3V0ZUtleSh3aW5kb3cubG9jYXRpb24uaGFzaCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdob21lJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJvdXRlKChfYSA9IHRoaXMucm91dGVLZXkod2luZG93LmxvY2F0aW9uLmhhc2gpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnaG9tZScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDrnbzsmrDtjIXtgqQg6rCA7KC47Jik6riwXG4gICAgICogQHBhcmFtIGxvY0hhc2gg7KO87IaMIO2VtOyLnOqwklxuICAgICAqIEByZXR1cm5zIOudvOyasO2Mhe2CpFxuICAgICAqL1xuICAgIHJvdXRlS2V5KGxvY0hhc2gpIHtcbiAgICAgICAgaWYgKGxvY0hhc2ggPT0gJycpXG4gICAgICAgICAgICBsb2NIYXNoID0gJyMvaG9tZSc7XG4gICAgICAgIGlmIChsb2NIYXNoLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKGxvY0hhc2hbMF0gIT0gJyMnIHx8IGxvY0hhc2hbMV0gIT0gJy8nKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBsb2NIYXNoLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDrnbzsmrDtjIVcbiAgICAgKiBAcGFyYW0gcm91dGVLZXkg65287Jqw7YyF7YKkXG4gICAgICovXG4gICAgcm91dGUocm91dGVLZXkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJldkhhc2hLZXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcHJldkN0eCA9IHRoaXMuaGFzaFJvdXRlW3RoaXMucHJldkhhc2hLZXldO1xuICAgICAgICAgICAgcHJldkN0eC5hcHAudW5tb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN0eEFwcCA9IHRoaXMuaGFzaFJvdXRlW3JvdXRlS2V5XTtcbiAgICAgICAgaWYgKGN0eEFwcCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjdHhBcHAuY3JlYXRlKCcjYXBwJyk7XG4gICAgICAgIHRoaXMucHJldkhhc2hLZXkgPSByb3V0ZUtleTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gcmVxdWlyZShcInZ1ZVwiKTtcbmNvbnN0IGNvdW50ZXJfbW9kZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbW9kZWwvY291bnRlcl9tb2RlbFwiKSk7XG5jbGFzcyBDb3VudGVyQXBwIHtcbiAgICBjcmVhdGUoc2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBuZXcgY291bnRlcl9tb2RlbF8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5hcHAgPSAoMCwgdnVlXzEuY3JlYXRlQXBwKSh7XG4gICAgICAgICAgICBzZXR1cCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9ICgwLCB2dWVfMS5yZWYpKDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluY3JlYXNlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbC5pbmNyZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudC52YWx1ZSA9IG1vZGVsLmdldENvdW50KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwucmVzZXRDb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudC52YWx1ZSA9IG1vZGVsLmdldENvdW50KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVhc2UsXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgIDxzcGFuPmNvdW50OiB7eyBjb3VudCB9fTwvc3Bhbj48YnI+XG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImluY3JlYXNlXCI+aW5jcmVhc2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwicmVzZXRcIj5yZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hcHAubW91bnQoc2VsZWN0b3IpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENvdW50ZXJBcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gcmVxdWlyZShcInZ1ZVwiKTtcbmNvbnN0IGhlbGxvX21vZGVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21vZGVsL2hlbGxvX21vZGVsXCIpKTtcbmNsYXNzIEhlbGxvQXBwIHtcbiAgICBjcmVhdGUoc2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBuZXcgaGVsbG9fbW9kZWxfMS5kZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSAoMCwgdnVlXzEucmVmKSgnJyk7XG4gICAgICAgIHRoaXMuYXBwID0gKDAsIHZ1ZV8xLmNyZWF0ZUFwcCkoe1xuICAgICAgICAgICAgc2V0dXAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZSB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsLmhlbGxvKG5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBtZXNzYWdlIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJuYW1lXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXBwLm1vdW50KHNlbGVjdG9yKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBIZWxsb0FwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSByZXF1aXJlKFwidnVlXCIpO1xuY2xhc3MgSG9tZUFwcCB7XG4gICAgY3JlYXRlKHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuYXBwID0gKDAsIHZ1ZV8xLmNyZWF0ZUFwcCkoe1xuICAgICAgICAgICAgc2V0dXAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICA8ZGl2PmhvbWU8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXBwLm1vdW50KHNlbGVjdG9yKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBIb21lQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhcHBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hcHAvYXBwXCIpKTtcbmFwcF8xLmRlZmF1bHQuZ2V0SW5zdGFuY2UoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ291bnRlck1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgfVxuICAgIGdldENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgICB9XG4gICAgcmVzZXRDb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgfVxuICAgIGluY3JlYXNlKCkge1xuICAgICAgICB0aGlzLmNvdW50ICs9IDE7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ291bnRlck1vZGVsO1xuLy8gaW1wb3J0IHsgY3JlYXRlQXBwLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvQXBwIHtcbi8vICAgICBwdWJsaWMgYXBwOiBhbnlcbi8vICAgICBjcmVhdGUoc2VsZWN0b3I6IHN0cmluZykge1xuLy8gICAgICAgICB0aGlzLmFwcCA9IGNyZWF0ZUFwcCh7XG4vLyAgICAgICAgICAgICBzZXR1cCgpIHtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IHJlZigwKVxuLy8gICAgICAgICAgICAgICAgIHJldHVybiB7IGNvdW50IH1cbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICB0ZW1wbGF0ZTogYFxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjb3VudCsrXCI+XG4vLyAgICAgICAgICAgICAgICAg64u57Iug7J2AIHt7IGNvdW50IH19IOuyiCDtgbTrpq3tlojsirXri4jri6QuXG4vLyAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIGBcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgdGhpcy5hcHAubW91bnQoc2VsZWN0b3IpXG4vLyAgICAgfVxuLy8gfVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBIZWxsb01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcmVmaXggPSAnSGVsbG8nO1xuICAgICAgICB0aGlzLnNwbGl0dGVyID0gJywgJztcbiAgICB9XG4gICAgaGVsbG8obmFtZSA9ICcnKSB7XG4gICAgICAgIGlmIChuYW1lLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5wcmVmaXh9JHt0aGlzLnNwbGl0dGVyfSR7bmFtZX1gO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5wcmVmaXh9YDtcbiAgICB9XG4gICAgc2V0UHJlZml4KHByZWZpeCkge1xuICAgICAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB9XG4gICAgc2V0U3BsaXR0ZXIoc3BsaXR0ZXIpIHtcbiAgICAgICAgdGhpcy5zcGxpdHRlciA9IHNwbGl0dGVyO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhlbGxvTW9kZWw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=