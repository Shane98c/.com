webpackHotUpdate(4,{

/***/ "./components/Duties.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Duties = function Duties(props) {
  return props.duties.map(console.log("test"));
};

/* harmony default export */ __webpack_exports__["a"] = (Duties);

/***/ }),

/***/ "./components/Highlight.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Duties__ = __webpack_require__("./components/Duties.js");
var _jsxFileName = "/Users/shaneloeffler/Documents/dev/website/site/components/Highlight.js";



var Highlight = function Highlight(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: props.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.sub), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Duties__["a" /* default */], {
    duties: props.duties,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Highlight);

/***/ })

})
//# sourceMappingURL=4.6dd0039edec718048308.hot-update.js.map