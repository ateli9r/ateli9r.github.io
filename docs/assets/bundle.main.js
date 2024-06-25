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
        // 마우스 우클릭 금지
        document.oncontextmenu = () => { return false; };
        // 주소변경 감지
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
const counter_model_1 = __importDefault(__webpack_require__(/*! ../model/counter_model */ "./model/counter_model.ts"));
class CounterApp {
    create(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new counter_model_1.default();
            this.app = (0, vue_1.createApp)({
                data() {
                    return {
                        count: 0,
                    };
                },
                methods: {
                    increase() {
                        model.increase();
                        this.count = model.getCount();
                    },
                    reset() {
                        model.resetCount();
                        this.count = model.getCount();
                    },
                },
                template: yield common_1.default.templateHTML('counter'),
            });
            this.app.mount(selector);
        });
    }
}
exports["default"] = CounterApp;


/***/ }),

/***/ "./app/hello_app.ts":
/*!**************************!*\
  !*** ./app/hello_app.ts ***!
  \**************************/
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
const common_1 = __importDefault(__webpack_require__(/*! ../util/common */ "./util/common.ts"));
const hello_model_1 = __importDefault(__webpack_require__(/*! ../model/hello_model */ "./model/hello_model.ts"));
class HelloApp {
    create(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new hello_model_1.default();
            this.app = (0, vue_1.createApp)({
                data() {
                    return {
                        name: '',
                    };
                },
                computed: {
                    message() {
                        return model.hello(this.name);
                    }
                },
                template: yield common_1.default.templateHTML('hello'),
            });
            this.app.mount(selector);
        });
    }
}
exports["default"] = HelloApp;


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
const common_1 = __importDefault(__webpack_require__(/*! ../util/common */ "./util/common.ts"));
class HomeApp {
    create(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            this.app = (0, vue_1.createApp)({
                template: yield common_1.default.templateHTML('home'),
            });
            this.app.mount(selector);
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


/***/ }),

/***/ "./util/common.ts":
/*!************************!*\
  !*** ./util/common.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {


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
}
exports["default"] = CommonUtil;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ gitPage = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDMUJGO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMsK0JBQVc7QUFDakQ7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlO0FBQ2YsWUFBWSw0QkFBNEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbENhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVksRUFBRSxjQUFjLEVBQUUsS0FBSztBQUN6RDtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNwQkY7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxTQUFTO0FBQ3hELFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRQYWdlLy4vYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9naXRQYWdlLy4vYXBwL2NvdW50ZXJfYXBwLnRzIiwid2VicGFjazovL2dpdFBhZ2UvLi9hcHAvaGVsbG9fYXBwLnRzIiwid2VicGFjazovL2dpdFBhZ2UvLi9hcHAvaG9tZV9hcHAudHMiLCJ3ZWJwYWNrOi8vZ2l0UGFnZS8uL2luZGV4LnRzIiwid2VicGFjazovL2dpdFBhZ2UvLi9tb2RlbC9jb3VudGVyX21vZGVsLnRzIiwid2VicGFjazovL2dpdFBhZ2UvLi9tb2RlbC9oZWxsb19tb2RlbC50cyIsIndlYnBhY2s6Ly9naXRQYWdlLy4vdXRpbC9jb21tb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb3VudGVyX2FwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvdW50ZXJfYXBwXCIpKTtcbmNvbnN0IGhlbGxvX2FwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2hlbGxvX2FwcFwiKSk7XG5jb25zdCBob21lX2FwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2hvbWVfYXBwXCIpKTtcbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDrnbzsmrDtjIUg66e1XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhc2hSb3V0ZSA9IHtcbiAgICAgICAgICAgICdob21lJzogbmV3IGhvbWVfYXBwXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgJ2NvdW50ZXInOiBuZXcgY291bnRlcl9hcHBfMS5kZWZhdWx0KCksXG4gICAgICAgICAgICAnaGVsbG8nOiBuZXcgaGVsbG9fYXBwXzEuZGVmYXVsdCgpLFxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICog7J207KCEIOudvOyasO2Mhe2CpFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcmV2SGFzaEtleSA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOyduOyKpO2EtOyKpCDqsIDsoLjsmKTquLBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghQXBwLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UgPSBuZXcgQXBwKCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcHAuaW5zdGFuY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOy0iOq4sO2ZlFxuICAgICAqL1xuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8g66eI7Jqw7IqkIOyasO2BtOumrSDquIjsp4BcbiAgICAgICAgZG9jdW1lbnQub25jb250ZXh0bWVudSA9ICgpID0+IHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgICAgICAvLyDso7zshozrs4Dqsr0g6rCQ7KeAXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZSgoX2EgPSB0aGlzLnJvdXRlS2V5KHdpbmRvdy5sb2NhdGlvbi5oYXNoKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ2hvbWUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm91dGUoKF9hID0gdGhpcy5yb3V0ZUtleSh3aW5kb3cubG9jYXRpb24uaGFzaCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdob21lJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOudvOyasO2Mhe2CpCDqsIDsoLjsmKTquLBcbiAgICAgKiBAcGFyYW0gbG9jSGFzaCDso7zshowg7ZW07Iuc6rCSXG4gICAgICogQHJldHVybnMg65287Jqw7YyF7YKkXG4gICAgICovXG4gICAgcm91dGVLZXkobG9jSGFzaCkge1xuICAgICAgICBpZiAobG9jSGFzaCA9PSAnJylcbiAgICAgICAgICAgIGxvY0hhc2ggPSAnIy9ob21lJztcbiAgICAgICAgaWYgKGxvY0hhc2gubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAobG9jSGFzaFswXSAhPSAnIycgfHwgbG9jSGFzaFsxXSAhPSAnLycpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGxvY0hhc2guc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOudvOyasO2MhVxuICAgICAqIEBwYXJhbSByb3V0ZUtleSDrnbzsmrDtjIXtgqRcbiAgICAgKi9cbiAgICByb3V0ZShyb3V0ZUtleSkge1xuICAgICAgICBpZiAodGhpcy5wcmV2SGFzaEtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2Q3R4ID0gdGhpcy5oYXNoUm91dGVbdGhpcy5wcmV2SGFzaEtleV07XG4gICAgICAgICAgICBwcmV2Q3R4LmFwcC51bm1vdW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3R4QXBwID0gdGhpcy5oYXNoUm91dGVbcm91dGVLZXldO1xuICAgICAgICBpZiAoY3R4QXBwID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGN0eEFwcC5jcmVhdGUoJyNhcHAnKTtcbiAgICAgICAgdGhpcy5wcmV2SGFzaEtleSA9IHJvdXRlS2V5O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IHJlcXVpcmUoXCJ2dWVcIik7XG5jb25zdCBjb21tb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbC9jb21tb25cIikpO1xuY29uc3QgY291bnRlcl9tb2RlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9tb2RlbC9jb3VudGVyX21vZGVsXCIpKTtcbmNsYXNzIENvdW50ZXJBcHAge1xuICAgIGNyZWF0ZShzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBuZXcgY291bnRlcl9tb2RlbF8xLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwID0gKDAsIHZ1ZV8xLmNyZWF0ZUFwcCkoe1xuICAgICAgICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVhc2UoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5pbmNyZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IG1vZGVsLmdldENvdW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwucmVzZXRDb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IG1vZGVsLmdldENvdW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogeWllbGQgY29tbW9uXzEuZGVmYXVsdC50ZW1wbGF0ZUhUTUwoJ2NvdW50ZXInKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hcHAubW91bnQoc2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDb3VudGVyQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gcmVxdWlyZShcInZ1ZVwiKTtcbmNvbnN0IGNvbW1vbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL2NvbW1vblwiKSk7XG5jb25zdCBoZWxsb19tb2RlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9tb2RlbC9oZWxsb19tb2RlbFwiKSk7XG5jbGFzcyBIZWxsb0FwcCB7XG4gICAgY3JlYXRlKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IG5ldyBoZWxsb19tb2RlbF8xLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuYXBwID0gKDAsIHZ1ZV8xLmNyZWF0ZUFwcCkoe1xuICAgICAgICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWwuaGVsbG8odGhpcy5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHlpZWxkIGNvbW1vbl8xLmRlZmF1bHQudGVtcGxhdGVIVE1MKCdoZWxsbycpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFwcC5tb3VudChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhlbGxvQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gcmVxdWlyZShcInZ1ZVwiKTtcbmNvbnN0IGNvbW1vbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL2NvbW1vblwiKSk7XG5jbGFzcyBIb21lQXBwIHtcbiAgICBjcmVhdGUoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwID0gKDAsIHZ1ZV8xLmNyZWF0ZUFwcCkoe1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB5aWVsZCBjb21tb25fMS5kZWZhdWx0LnRlbXBsYXRlSFRNTCgnaG9tZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFwcC5tb3VudChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhvbWVBcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGFwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FwcC9hcHBcIikpO1xuYXBwXzEuZGVmYXVsdC5nZXRJbnN0YW5jZSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBDb3VudGVyTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB9XG4gICAgZ2V0Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50O1xuICAgIH1cbiAgICByZXNldENvdW50KCkge1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB9XG4gICAgaW5jcmVhc2UoKSB7XG4gICAgICAgIHRoaXMuY291bnQgKz0gMTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDb3VudGVyTW9kZWw7XG4vLyBpbXBvcnQgeyBjcmVhdGVBcHAsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG9BcHAge1xuLy8gICAgIHB1YmxpYyBhcHA6IGFueVxuLy8gICAgIGNyZWF0ZShzZWxlY3Rvcjogc3RyaW5nKSB7XG4vLyAgICAgICAgIHRoaXMuYXBwID0gY3JlYXRlQXBwKHtcbi8vICAgICAgICAgICAgIHNldHVwKCkge1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcmVmKDApXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY291bnQgfVxuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIHRlbXBsYXRlOiBgXG4vLyAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImNvdW50KytcIj5cbi8vICAgICAgICAgICAgICAgICDri7nsi6DsnYAge3sgY291bnQgfX0g67KIIO2BtOumre2WiOyKteuLiOuLpC5cbi8vICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgYFxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICB0aGlzLmFwcC5tb3VudChzZWxlY3Rvcilcbi8vICAgICB9XG4vLyB9XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEhlbGxvTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByZWZpeCA9ICdIZWxsbyc7XG4gICAgICAgIHRoaXMuc3BsaXR0ZXIgPSAnLCAnO1xuICAgIH1cbiAgICBoZWxsbyhuYW1lID0gJycpIHtcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnByZWZpeH0ke3RoaXMuc3BsaXR0ZXJ9JHtuYW1lfWA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnByZWZpeH1gO1xuICAgIH1cbiAgICBzZXRQcmVmaXgocHJlZml4KSB7XG4gICAgICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICAgIH1cbiAgICBzZXRTcGxpdHRlcihzcGxpdHRlcikge1xuICAgICAgICB0aGlzLnNwbGl0dGVyID0gc3BsaXR0ZXI7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSGVsbG9Nb2RlbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBDb21tb25VdGlsIHtcbiAgICBzdGF0aWMgdGVtcGxhdGVIVE1MKGZpbGVOYW1lKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgKHlpZWxkIGZldGNoKGAvaHRtbC8ke2ZpbGVOYW1lfS5odG1sYCkpLnRleHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29tbW9uVXRpbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==