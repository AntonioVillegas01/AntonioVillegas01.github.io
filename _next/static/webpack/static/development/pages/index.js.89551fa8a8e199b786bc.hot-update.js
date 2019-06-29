webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Noticias.js":
/*!********************************!*\
  !*** ./components/Noticias.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Noticia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Noticia */ "./components/Noticia.js");
var _jsxFileName = "/Users/villegas/Desktop/PracticasReact/bitcoinapp/components/Noticias.js";



var Noticias = function Noticias(props) {
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.noticias.map(function (noticia) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Noticia__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: noticia,
      noticia: noticia,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticias);

/***/ })

})
//# sourceMappingURL=index.js.89551fa8a8e199b786bc.hot-update.js.map