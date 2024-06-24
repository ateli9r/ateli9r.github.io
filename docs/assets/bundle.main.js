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
const hello_app_1 = __importDefault(__webpack_require__(/*! ./hello_app */ "./app/hello_app.ts"));
const home_app_1 = __importDefault(__webpack_require__(/*! ./home_app */ "./app/home_app.ts"));
class App {
    constructor() {
        /**
         * 라우팅 맵
         */
        this.hashRoute = {
            'home': new home_app_1.default(),
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
class HelloApp {
    create(selector) {
        this.app = (0, vue_1.createApp)({
            setup() {
                const count = (0, vue_1.ref)(0);
                return { count };
            },
            template: `
            <button @click="count++">
                당신은 {{ count }} 번 클릭했습니다.
            </button>
            `
        });
        this.app.mount(selector);
    }
}
exports["default"] = HelloApp;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0NBQW9DLG1CQUFPLENBQUMsdUNBQWE7QUFDekQsbUNBQW1DLG1CQUFPLENBQUMscUNBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDeEVGO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLHdDQUFLO0FBQzNCLHNDQUFzQyxtQkFBTyxDQUFDLG9EQUFzQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx5QkFBeUIsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ2hDRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjLG1CQUFPLENBQUMsd0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixhQUFhO0FBQ2I7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDbkJGO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMsK0JBQVc7QUFDakQ7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWSxFQUFFLGNBQWMsRUFBRSxLQUFLO0FBQ3pEO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2FwcC9oZWxsb19hcHAudHMiLCJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2FwcC9ob21lX2FwcC50cyIsIndlYnBhY2s6Ly9naXRQYWdlLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL21vZGVsL2hlbGxvX21vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaGVsbG9fYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaGVsbG9fYXBwXCIpKTtcbmNvbnN0IGhvbWVfYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaG9tZV9hcHBcIikpO1xuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOudvOyasO2MhSDrp7VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFzaFJvdXRlID0ge1xuICAgICAgICAgICAgJ2hvbWUnOiBuZXcgaG9tZV9hcHBfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICAnaGVsbG8nOiBuZXcgaGVsbG9fYXBwXzEuZGVmYXVsdCgpLFxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICog7J207KCEIOudvOyasO2Mhe2CpFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcmV2SGFzaEtleSA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOyduOyKpO2EtOyKpCDqsIDsoLjsmKTquLBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghQXBwLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UgPSBuZXcgQXBwKCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcHAuaW5zdGFuY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOy0iOq4sO2ZlFxuICAgICAqL1xuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0aGlzLnJvdXRlKChfYSA9IHRoaXMucm91dGVLZXkod2luZG93LmxvY2F0aW9uLmhhc2gpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnaG9tZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yb3V0ZSgoX2EgPSB0aGlzLnJvdXRlS2V5KHdpbmRvdy5sb2NhdGlvbi5oYXNoKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ2hvbWUnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog65287Jqw7YyF7YKkIOqwgOyguOyYpOq4sFxuICAgICAqIEBwYXJhbSBsb2NIYXNoIOyjvOyGjCDtlbTsi5zqsJJcbiAgICAgKiBAcmV0dXJucyDrnbzsmrDtjIXtgqRcbiAgICAgKi9cbiAgICByb3V0ZUtleShsb2NIYXNoKSB7XG4gICAgICAgIGlmIChsb2NIYXNoID09ICcnKVxuICAgICAgICAgICAgbG9jSGFzaCA9ICcjL2hvbWUnO1xuICAgICAgICBpZiAobG9jSGFzaC5sZW5ndGggPCAzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChsb2NIYXNoWzBdICE9ICcjJyB8fCBsb2NIYXNoWzFdICE9ICcvJylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gbG9jSGFzaC5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog65287Jqw7YyFXG4gICAgICogQHBhcmFtIHJvdXRlS2V5IOudvOyasO2Mhe2CpFxuICAgICAqL1xuICAgIHJvdXRlKHJvdXRlS2V5KSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZIYXNoS2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZDdHggPSB0aGlzLmhhc2hSb3V0ZVt0aGlzLnByZXZIYXNoS2V5XTtcbiAgICAgICAgICAgIHByZXZDdHguYXBwLnVubW91bnQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdHhBcHAgPSB0aGlzLmhhc2hSb3V0ZVtyb3V0ZUtleV07XG4gICAgICAgIGlmIChjdHhBcHAgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY3R4QXBwLmNyZWF0ZSgnI2FwcCcpO1xuICAgICAgICB0aGlzLnByZXZIYXNoS2V5ID0gcm91dGVLZXk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IHJlcXVpcmUoXCJ2dWVcIik7XG5jb25zdCBoZWxsb19tb2RlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9tb2RlbC9oZWxsb19tb2RlbFwiKSk7XG5jbGFzcyBIZWxsb0FwcCB7XG4gICAgY3JlYXRlKHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gbmV3IGhlbGxvX21vZGVsXzEuZGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuYW1lID0gKDAsIHZ1ZV8xLnJlZikoJycpO1xuICAgICAgICB0aGlzLmFwcCA9ICgwLCB2dWVfMS5jcmVhdGVBcHApKHtcbiAgICAgICAgICAgIHNldHVwKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWUgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbC5oZWxsbyhuYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgbWVzc2FnZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibmFtZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFwcC5tb3VudChzZWxlY3Rvcik7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSGVsbG9BcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gcmVxdWlyZShcInZ1ZVwiKTtcbmNsYXNzIEhlbGxvQXBwIHtcbiAgICBjcmVhdGUoc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5hcHAgPSAoMCwgdnVlXzEuY3JlYXRlQXBwKSh7XG4gICAgICAgICAgICBzZXR1cCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9ICgwLCB2dWVfMS5yZWYpKDApO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGNvdW50IH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiY291bnQrK1wiPlxuICAgICAgICAgICAgICAgIOuLueyLoOydgCB7eyBjb3VudCB9fSDrsogg7YG066at7ZaI7Iq164uI64ukLlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFwcC5tb3VudChzZWxlY3Rvcik7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSGVsbG9BcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGFwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FwcC9hcHBcIikpO1xuYXBwXzEuZGVmYXVsdC5nZXRJbnN0YW5jZSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBIZWxsb01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcmVmaXggPSAnSGVsbG8nO1xuICAgICAgICB0aGlzLnNwbGl0dGVyID0gJywgJztcbiAgICB9XG4gICAgaGVsbG8obmFtZSA9ICcnKSB7XG4gICAgICAgIGlmIChuYW1lLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5wcmVmaXh9JHt0aGlzLnNwbGl0dGVyfSR7bmFtZX1gO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5wcmVmaXh9YDtcbiAgICB9XG4gICAgc2V0UHJlZml4KHByZWZpeCkge1xuICAgICAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB9XG4gICAgc2V0U3BsaXR0ZXIoc3BsaXR0ZXIpIHtcbiAgICAgICAgdGhpcy5zcGxpdHRlciA9IHNwbGl0dGVyO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhlbGxvTW9kZWw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=