function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33], {
  /***/"./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js ***!
    \****************************************************************/
  /*! exports provided: ion_slide, ion_slides */
  /***/
  function node_modulesIonicCoreDistEsmIonSlide_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ion_slide", function () {
      return Slide;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ion_slides", function () {
      return Slides;
    });
    /* harmony import */
    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./index-7a8b7a1c.js */"./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */
    var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./ionic-global-63a97a32.js */"./node_modules/@ionic/core/dist/esm/ionic-global-63a97a32.js");
    /* harmony import */
    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./helpers-1457892a.js */"./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");
    var slideCss = "ion-slide{display:block;width:100%;height:100%}.slide-zoom{display:block;width:100%;text-align:center}.swiper-slide{display:-ms-flexbox;display:flex;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";
    var Slide = /*#__PURE__*/function () {
      function Slide(hostRef) {
        _classCallCheck(this, Slide);
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      _createClass(Slide, [{
        key: "render",
        value: function render() {
          var _class;
          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, 'swiper-slide', true), _defineProperty(_class, 'swiper-zoom-container', true), _class)
          });
        }
      }]);
      return Slide;
    }();
    Slide.style = slideCss;
    var slidesIosCss = ".swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical{height:100%}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0px, 0, 0);transform:translate3d(0px, 0, 0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform}.swiper-invisible-blank-slide{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height, -webkit-transform;transition-property:height, -webkit-transform;-o-transition-property:transform, height;transition-property:transform, height;transition-property:transform, height, -webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-wrapper,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-cube-shadow{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-prev,.swiper-button-next{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:0.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:300ms opacity;-o-transition:300ms opacity;transition:300ms opacity;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-container-horizontal>.swiper-pagination-bullets{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:0.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0px, -50%, 0);transform:translate3d(0px, -50%, 0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:200ms top, 200ms -webkit-transform;transition:200ms top, 200ms -webkit-transform;-o-transition:200ms transform, 200ms top;transition:200ms transform, 200ms top;transition:200ms transform, 200ms top, 200ms -webkit-transform}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms left, 200ms -webkit-transform;transition:200ms left, 200ms -webkit-transform;-o-transition:200ms transform, 200ms left;transition:200ms transform, 200ms left;transition:200ms transform, 200ms left, 200ms -webkit-transform}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms right, 200ms -webkit-transform;transition:200ms right, 200ms -webkit-transform;-o-transition:200ms transform, 200ms right;transition:200ms transform, 200ms right;transition:200ms transform, 200ms right, 200ms -webkit-transform}.swiper-pagination-progressbar{background:rgba(0, 0, 0, 0.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progressbar,.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#ffffff}.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255, 255, 255, 0.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#ffffff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0, 0, 0, 0.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0, 0, 0, 0.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0, 0, 0, 0.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12, end) infinite;animation:swiper-preloader-spin 1s steps(12, end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-prev,.swiper-container-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;background:#000;opacity:0.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}ion-slides{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swiper-pagination-bullet{background:var(--bullet-background)}.swiper-pagination-bullet-active{background:var(--bullet-background-active)}.swiper-pagination-progressbar{background:var(--progress-bar-background)}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--progress-bar-background-active)}.swiper-scrollbar{background:var(--scroll-bar-background)}.swiper-scrollbar-drag{background:var(--scroll-bar-background-active)}.slides-ios{--bullet-background:var(--ion-color-step-200, #cccccc);--bullet-background-active:var(--ion-color-primary, #3880ff);--progress-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);--progress-bar-background-active:var(--ion-color-primary-shade, #3171e0);--scroll-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--scroll-bar-background-active:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5)}";
    var slidesMdCss = ".swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical{height:100%}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0px, 0, 0);transform:translate3d(0px, 0, 0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform}.swiper-invisible-blank-slide{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height, -webkit-transform;transition-property:height, -webkit-transform;-o-transition-property:transform, height;transition-property:transform, height;transition-property:transform, height, -webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-wrapper,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-cube-shadow{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-prev,.swiper-button-next{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:0.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:300ms opacity;-o-transition:300ms opacity;transition:300ms opacity;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-container-horizontal>.swiper-pagination-bullets{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:0.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0px, -50%, 0);transform:translate3d(0px, -50%, 0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:200ms top, 200ms -webkit-transform;transition:200ms top, 200ms -webkit-transform;-o-transition:200ms transform, 200ms top;transition:200ms transform, 200ms top;transition:200ms transform, 200ms top, 200ms -webkit-transform}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms left, 200ms -webkit-transform;transition:200ms left, 200ms -webkit-transform;-o-transition:200ms transform, 200ms left;transition:200ms transform, 200ms left;transition:200ms transform, 200ms left, 200ms -webkit-transform}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms right, 200ms -webkit-transform;transition:200ms right, 200ms -webkit-transform;-o-transition:200ms transform, 200ms right;transition:200ms transform, 200ms right;transition:200ms transform, 200ms right, 200ms -webkit-transform}.swiper-pagination-progressbar{background:rgba(0, 0, 0, 0.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progressbar,.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#ffffff}.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255, 255, 255, 0.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#ffffff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0, 0, 0, 0.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0, 0, 0, 0.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0, 0, 0, 0.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12, end) infinite;animation:swiper-preloader-spin 1s steps(12, end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-prev,.swiper-container-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;background:#000;opacity:0.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}ion-slides{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swiper-pagination-bullet{background:var(--bullet-background)}.swiper-pagination-bullet-active{background:var(--bullet-background-active)}.swiper-pagination-progressbar{background:var(--progress-bar-background)}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--progress-bar-background-active)}.swiper-scrollbar{background:var(--scroll-bar-background)}.swiper-scrollbar-drag{background:var(--scroll-bar-background-active)}.slides-md{--bullet-background:var(--ion-color-step-200, #cccccc);--bullet-background-active:var(--ion-color-primary, #3880ff);--progress-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);--progress-bar-background-active:var(--ion-color-primary-shade, #3171e0);--scroll-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--scroll-bar-background-active:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5)}";
    var Slides = /*#__PURE__*/function () {
      function Slides(hostRef) {
        var _this = this;
        _classCallCheck(this, Slides);
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionSlidesDidLoad = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlidesDidLoad", 7);
        this.ionSlideTap = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideTap", 7);
        this.ionSlideDoubleTap = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideDoubleTap", 7);
        this.ionSlideWillChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideWillChange", 7);
        this.ionSlideDidChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideDidChange", 7);
        this.ionSlideNextStart = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideNextStart", 7);
        this.ionSlidePrevStart = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlidePrevStart", 7);
        this.ionSlideNextEnd = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideNextEnd", 7);
        this.ionSlidePrevEnd = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlidePrevEnd", 7);
        this.ionSlideTransitionStart = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideTransitionStart", 7);
        this.ionSlideTransitionEnd = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideTransitionEnd", 7);
        this.ionSlideDrag = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideDrag", 7);
        this.ionSlideReachStart = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideReachStart", 7);
        this.ionSlideReachEnd = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideReachEnd", 7);
        this.ionSlideTouchStart = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideTouchStart", 7);
        this.ionSlideTouchEnd = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSlideTouchEnd", 7);
        this.swiperReady = false;
        this.swiper = new Promise(function (resolve) {
          _this.readySwiper = resolve;
        });
        /**
         * Options to pass to the swiper instance.
         * See http://idangero.us/swiper/api/ for valid options
         */
        this.options = {}; // SwiperOptions;  // TODO
        /**
         * If `true`, show the pagination.
         */
        this.pager = false;
        /**
         * If `true`, show the scrollbar.
         */
        this.scrollbar = false;
      }
      _createClass(Slides, [{
        key: "optionsChanged",
        value: function () {
          var _optionsChanged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.swiperReady) {
                    _context.next = 8;
                    break;
                  }
                  _context.next = 3;
                  return this.getSwiper();
                case 3:
                  swiper = _context.sent;
                  if (!(swiper === null || swiper === void 0 ? void 0 : swiper.params)) {
                    _context.next = 8;
                    break;
                  }
                  Object.assign(swiper.params, this.options);
                  _context.next = 8;
                  return this.update();
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function optionsChanged() {
            return _optionsChanged.apply(this, arguments);
          }
          return optionsChanged;
        }()
      }, {
        key: "componentWillLoad",
        value: function componentWillLoad() {
          console.warn("[Deprecation Warning]: ion-slides has been deprecated and will be removed in Ionic Framework v7.0. We recommend using the framework-specific integrations that Swiper.js provides, allowing for faster bug fixes and an improved developer experience. See https://ionicframework.com/docs/api/slides#migration for more information including migration steps.");
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;
          {
            var mut = this.mutationO = new MutationObserver(function () {
              if (_this2.swiperReady) {
                _this2.update();
              }
            });
            mut.observe(this.el, {
              childList: true,
              subtree: true
            });
            Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.el, function () {
              _this2.initSwiper();
            });
          }
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
          }
        }
        /**
         * Update the underlying slider implementation. Call this if you've added or removed
         * child slides.
         */
      }, {
        key: "update",
        value: function () {
          var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _yield$Promise$all, _yield$Promise$all2, swiper;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Promise.all([this.getSwiper(), waitForSlides(this.el)]);
                case 2:
                  _yield$Promise$all = _context2.sent;
                  _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 1);
                  swiper = _yield$Promise$all2[0];
                  swiper.update();
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function update() {
            return _update.apply(this, arguments);
          }
          return update;
        }()
        /**
         * Force swiper to update its height (when autoHeight is enabled) for the duration
         * equal to 'speed' parameter.
         *
         * @param speed The transition duration (in ms).
         */
      }, {
        key: "updateAutoHeight",
        value: function () {
          var _updateAutoHeight = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(speed) {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context3.sent;
                  swiper.updateAutoHeight(speed);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function updateAutoHeight(_x2) {
            return _updateAutoHeight.apply(this, arguments);
          }
          return updateAutoHeight;
        }()
        /**
         * Transition to the specified slide.
         *
         * @param index The index of the slide to transition to.
         * @param speed The transition duration (in ms).
         * @param runCallbacks If true, the transition will produce [Transition/SlideChange][Start/End] transition events.
         */
      }, {
        key: "slideTo",
        value: function () {
          var _slideTo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(index, speed, runCallbacks) {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context4.sent;
                  swiper.slideTo(index, speed, runCallbacks);
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function slideTo(_x3, _x4, _x5) {
            return _slideTo.apply(this, arguments);
          }
          return slideTo;
        }()
        /**
         * Transition to the next slide.
         *
         * @param speed The transition duration (in ms).
         * @param runCallbacks If true, the transition will produce [Transition/SlideChange][Start/End] transition events.
         */
      }, {
        key: "slideNext",
        value: function () {
          var _slideNext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(speed, runCallbacks) {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context5.sent;
                  swiper.slideNext(speed, runCallbacks);
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function slideNext(_x6, _x7) {
            return _slideNext.apply(this, arguments);
          }
          return slideNext;
        }()
        /**
         * Transition to the previous slide.
         *
         * @param speed The transition duration (in ms).
         * @param runCallbacks If true, the transition will produce the [Transition/SlideChange][Start/End] transition events.
         */
      }, {
        key: "slidePrev",
        value: function () {
          var _slidePrev = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(speed, runCallbacks) {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context6.sent;
                  swiper.slidePrev(speed, runCallbacks);
                case 4:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function slidePrev(_x8, _x9) {
            return _slidePrev.apply(this, arguments);
          }
          return slidePrev;
        }()
        /**
         * Get the index of the active slide.
         */
      }, {
        key: "getActiveIndex",
        value: function () {
          var _getActiveIndex = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context7.sent;
                  return _context7.abrupt("return", swiper.activeIndex);
                case 4:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function getActiveIndex() {
            return _getActiveIndex.apply(this, arguments);
          }
          return getActiveIndex;
        }()
        /**
         * Get the index of the previous slide.
         */
      }, {
        key: "getPreviousIndex",
        value: function () {
          var _getPreviousIndex = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context8.sent;
                  return _context8.abrupt("return", swiper.previousIndex);
                case 4:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function getPreviousIndex() {
            return _getPreviousIndex.apply(this, arguments);
          }
          return getPreviousIndex;
        }()
        /**
         * Get the total number of slides.
         */
      }, {
        key: "length",
        value: function () {
          var _length = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context9.sent;
                  return _context9.abrupt("return", swiper.slides.length);
                case 4:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
          function length() {
            return _length.apply(this, arguments);
          }
          return length;
        }()
        /**
         * Get whether or not the current slide is the last slide.
         */
      }, {
        key: "isEnd",
        value: function () {
          var _isEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context10.sent;
                  return _context10.abrupt("return", swiper.isEnd);
                case 4:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
          function isEnd() {
            return _isEnd.apply(this, arguments);
          }
          return isEnd;
        }()
        /**
         * Get whether or not the current slide is the first slide.
         */
      }, {
        key: "isBeginning",
        value: function () {
          var _isBeginning = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context11.sent;
                  return _context11.abrupt("return", swiper.isBeginning);
                case 4:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, this);
          }));
          function isBeginning() {
            return _isBeginning.apply(this, arguments);
          }
          return isBeginning;
        }()
        /**
         * Start auto play.
         */
      }, {
        key: "startAutoplay",
        value: function () {
          var _startAutoplay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context12.sent;
                  if (swiper.autoplay) {
                    swiper.autoplay.start();
                  }
                case 4:
                case "end":
                  return _context12.stop();
              }
            }, _callee12, this);
          }));
          function startAutoplay() {
            return _startAutoplay.apply(this, arguments);
          }
          return startAutoplay;
        }()
        /**
         * Stop auto play.
         */
      }, {
        key: "stopAutoplay",
        value: function () {
          var _stopAutoplay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context13.sent;
                  if (swiper.autoplay) {
                    swiper.autoplay.stop();
                  }
                case 4:
                case "end":
                  return _context13.stop();
              }
            }, _callee13, this);
          }));
          function stopAutoplay() {
            return _stopAutoplay.apply(this, arguments);
          }
          return stopAutoplay;
        }()
        /**
         * Lock or unlock the ability to slide to the next slide.
         *
         * @param lock If `true`, disable swiping to the next slide.
         */
      }, {
        key: "lockSwipeToNext",
        value: function () {
          var _lockSwipeToNext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(lock) {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context14.sent;
                  swiper.allowSlideNext = !lock;
                case 4:
                case "end":
                  return _context14.stop();
              }
            }, _callee14, this);
          }));
          function lockSwipeToNext(_x10) {
            return _lockSwipeToNext.apply(this, arguments);
          }
          return lockSwipeToNext;
        }()
        /**
         * Lock or unlock the ability to slide to the previous slide.
         *
         * @param lock If `true`, disable swiping to the previous slide.
         */
      }, {
        key: "lockSwipeToPrev",
        value: function () {
          var _lockSwipeToPrev = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(lock) {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context15.sent;
                  swiper.allowSlidePrev = !lock;
                case 4:
                case "end":
                  return _context15.stop();
              }
            }, _callee15, this);
          }));
          function lockSwipeToPrev(_x11) {
            return _lockSwipeToPrev.apply(this, arguments);
          }
          return lockSwipeToPrev;
        }()
        /**
         * Lock or unlock the ability to slide to the next or previous slide.
         *
         * @param lock If `true`, disable swiping to the next and previous slide.
         */
      }, {
        key: "lockSwipes",
        value: function () {
          var _lockSwipes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(lock) {
            var swiper;
            return _regeneratorRuntime().wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return this.getSwiper();
                case 2:
                  swiper = _context16.sent;
                  swiper.allowSlideNext = !lock;
                  swiper.allowSlidePrev = !lock;
                  swiper.allowTouchMove = !lock;
                case 6:
                case "end":
                  return _context16.stop();
              }
            }, _callee16, this);
          }));
          function lockSwipes(_x12) {
            return _lockSwipes.apply(this, arguments);
          }
          return lockSwipes;
        }()
        /**
         * Get the Swiper instance.
         * Use this to access the full Swiper API.
         * See https://idangero.us/swiper/api/ for all API options.
         */
      }, {
        key: "getSwiper",
        value: function () {
          var _getSwiper = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  return _context17.abrupt("return", this.swiper);
                case 1:
                case "end":
                  return _context17.stop();
              }
            }, _callee17, this);
          }));
          function getSwiper() {
            return _getSwiper.apply(this, arguments);
          }
          return getSwiper;
        }()
      }, {
        key: "initSwiper",
        value: function () {
          var _initSwiper = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
            var finalOptions, _yield$__webpack_requ, Swiper, swiper;
            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
                case 0:
                  finalOptions = this.normalizeOptions(); // init swiper core
                  // @ts-ignore
                  _context18.next = 3;
                  return __webpack_require__.e( /*! import() | swiper-bundle-6c5e7804-js */"swiper-bundle-6c5e7804-js").then(__webpack_require__.bind(null, /*! ./swiper.bundle-6c5e7804.js */"./node_modules/@ionic/core/dist/esm/swiper.bundle-6c5e7804.js"));
                case 3:
                  _yield$__webpack_requ = _context18.sent;
                  Swiper = _yield$__webpack_requ.Swiper;
                  _context18.next = 7;
                  return waitForSlides(this.el);
                case 7:
                  swiper = new Swiper(this.el, finalOptions);
                  this.swiperReady = true;
                  this.readySwiper(swiper);
                case 10:
                case "end":
                  return _context18.stop();
              }
            }, _callee18, this);
          }));
          function initSwiper() {
            return _initSwiper.apply(this, arguments);
          }
          return initSwiper;
        }()
      }, {
        key: "normalizeOptions",
        value: function normalizeOptions() {
          var _this3 = this;
          // Base options, can be changed
          // TODO Add interface SwiperOptions
          var swiperOptions = {
            effect: undefined,
            direction: 'horizontal',
            initialSlide: 0,
            loop: false,
            parallax: false,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 300,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            touchEventsTarget: 'container',
            autoplay: false,
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            autoHeight: false,
            setWrapperSize: false,
            zoom: {
              maxRatio: 3,
              minRatio: 1,
              toggle: false
            },
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            touchStartPreventDefault: false,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            resistance: true,
            resistanceRatio: 0.85,
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loopAdditionalSlides: 0,
            noSwiping: true,
            runCallbacksOnInit: true,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            },
            flipEffect: {
              slideShadows: true,
              limitRotation: true
            },
            cubeEffect: {
              slideShadows: true,
              shadow: true,
              shadowOffset: 20,
              shadowScale: 0.94
            },
            fadeEffect: {
              crossFade: false
            },
            a11y: {
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
              firstSlideMessage: 'This is the first slide',
              lastSlideMessage: 'This is the last slide'
            }
          };
          if (this.pager) {
            swiperOptions.pagination = {
              el: this.paginationEl,
              type: 'bullets',
              clickable: false,
              hideOnClick: false
            };
          }
          if (this.scrollbar) {
            swiperOptions.scrollbar = {
              el: this.scrollbarEl,
              hide: true
            };
          }
          // Keep the event options separate, we dont want users
          // overwriting these
          var eventOptions = {
            on: {
              init: function init() {
                setTimeout(function () {
                  _this3.ionSlidesDidLoad.emit();
                  // Forces the swiper instance to update after initializing.
                  _this3.update();
                }, 20);
              },
              slideChangeTransitionStart: this.ionSlideWillChange.emit,
              slideChangeTransitionEnd: this.ionSlideDidChange.emit,
              slideNextTransitionStart: this.ionSlideNextStart.emit,
              slidePrevTransitionStart: this.ionSlidePrevStart.emit,
              slideNextTransitionEnd: this.ionSlideNextEnd.emit,
              slidePrevTransitionEnd: this.ionSlidePrevEnd.emit,
              transitionStart: this.ionSlideTransitionStart.emit,
              transitionEnd: this.ionSlideTransitionEnd.emit,
              sliderMove: this.ionSlideDrag.emit,
              reachBeginning: this.ionSlideReachStart.emit,
              reachEnd: this.ionSlideReachEnd.emit,
              touchStart: this.ionSlideTouchStart.emit,
              touchEnd: this.ionSlideTouchEnd.emit,
              tap: this.ionSlideTap.emit,
              doubleTap: this.ionSlideDoubleTap.emit
            }
          };
          var customEvents = !!this.options && !!this.options.on ? this.options.on : {};
          // merge "on" event listeners, while giving our event listeners priority
          var mergedEventOptions = {
            on: Object.assign(Object.assign({}, customEvents), eventOptions.on)
          };
          // Merge the base, user options, and events together then pas to swiper
          return Object.assign(Object.assign(Object.assign({}, swiperOptions), this.options), mergedEventOptions);
        }
      }, {
        key: "render",
        value: function render() {
          var _class2,
            _this4 = this;
          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": (_class2 = {}, _defineProperty(_class2, "".concat(mode), true), _defineProperty(_class2, "slides-".concat(mode), true), _defineProperty(_class2, 'swiper-container', true), _class2)
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "swiper-wrapper"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), this.pager && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "swiper-pagination",
            ref: function ref(el) {
              return _this4.paginationEl = el;
            }
          }), this.scrollbar && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "swiper-scrollbar",
            ref: function ref(el) {
              return _this4.scrollbarEl = el;
            }
          }));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }], [{
        key: "assetsDirs",
        get: function get() {
          return ["swiper"];
        }
      }, {
        key: "watchers",
        get: function get() {
          return {
            "options": ["optionsChanged"]
          };
        }
      }]);
      return Slides;
    }();
    var waitForSlides = function waitForSlides(el) {
      return Promise.all(Array.from(el.querySelectorAll('ion-slide')).map(function (s) {
        return new Promise(function (resolve) {
          return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["c"])(s, resolve);
        });
      }));
    };
    Slides.style = {
      ios: slidesIosCss,
      md: slidesMdCss
    };

    /***/
  }
}]);
//# sourceMappingURL=33-es5.js.map