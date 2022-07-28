/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --red: #ED2938;\n    --red-transparent: #ed2939cb;\n    --yellow: #FFEB01;\n    --white: #FFFFFF;\n    --light-blue: #0088DD;\n    --dark-blue: #165FC6;\n}\n\nhtml, body, #content {\n    min-height: 100vh;\n    /* height: 100vh; */\n}\n\nbody {\n    color: var(--white);\n    background-color: var(--red);\n    font-family: 'Open Sans', sans-serif;\n    margin: 0;\n}\n\nimg {\n    width: 100%;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n}\n\n/* home page */\n.home-page-container {\n    display: flex;\n    height: 90%;\n}\n.div-left {\n    width: 37%;\n    box-sizing: border-box;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n.div-right {\n    width: 60%;\n}\n.side-bar-slider {\n    width: 3%;\n}\n\n.div-right > img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n.div-left > img {\n    width: 60%;\n    align-self: center;\n}\n.div-left > h1 {\n    color: var(--yellow);\n    margin-top: 0rem;\n    font-size: 2.65rem;\n}\n.p-cta {\n    margin: 0;\n    margin-top: 2rem;\n    font-style: italic;\n    font-size: 0.9rem;\n}\n.p-description {\n    margin-top: 0;\n    font-size: 1rem;\n    font-weight: 500;\n}\n.div-left button {\n    padding: 0.65rem;\n    background-color: var(--light-blue);\n    color: var(--white);\n    font-weight: 700;\n    font-size: 1.1rem;\n    border-radius: 10px;\n    min-width: min-content;\n}\n\n/* menu */\n.menu-items-container {\n    border: 7px solid var(--dark-blue);\n    border-radius: 15px;\n    background-color: var(--light-blue);\n    padding: 30px;\n    width: 67%;\n    margin: auto;\n    display: grid;\n    gap: 45px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));\n}\n\n.menu-icon {\n    width: 50px;\n}\n\ndiv.item-image img {\n    width: 160px;\n    height: 160px;\n    object-fit: cover;\n}\n\n.item {\n    height: 450px;\n}\n\n.item-title {\n    font-size: 1.2rem;\n}\n\n.item-cost {\n    color: var(--yellow);\n    font-size: 0.95rem;\n    display: block;\n}\n\n.item-description {\n    font-size: 1rem;\n}\n\n.menu-header h1 {\n    text-align: center;\n    font-size: 2.5rem;\n    margin-top: 0;\n}\n\n/* contact us */\n.contact-us-content-container {\n    /* display: flex;\n    flex-wrap: wrap;\n    gap: 15px;\n    justify-content: space-between; */\n    width: min-content;\n    margin: 0 auto;\n    background-color: var(--light-blue);\n    border: 10px solid var(--dark-blue);\n    border-radius: 30px;\n    padding: 30px;\n}\n\n.contact-us-header {\n    text-align: center;\n}\n\n.contact-us .icon {\n    width: 40px;\n    margin-left: 7px;\n    position: relative;\n    top: 7px;\n}\n\n.contact-us form {\n    display: flex;\n    flex-direction: column;\n}\n\n.contact-us form > input {\n    padding: 0.4rem 1rem;\n    border-radius: 10px;\n    width: 500px;\n    margin-bottom: 15px;\n}\n\n.contact-us form > button {\n    padding: 0.5rem 1rem;\n    border-radius: 15px;\n    width: 200px;\n}\n\n.contact-us-content-container > div {\n    margin-bottom: 25px;\n}\n\n/* footer */ \n.footer {\n    text-align: center;\n    margin-top: auto;\n}\n\n.copyright-text {\n    font-size: 0.8rem;\n    font-style: italic;\n}\n\n.github-icon {\n    height: 1rem;\n    width: 1rem;\n    position: relative;\n    top: 2px;\n    margin-left: 5px;\n}\n\n/* nav bar */\n\n.nav-bar {\n    /* position: fixed; */\n    top: 0;\n    position: sticky;\n    display: flex;\n    width: 100%;\n    box-sizing: border-box;\n    background-color: var(--red-transparent);\n    align-items: center;\n    padding: 10px 25px;\n}\n\n.logo-img {\n    width: 50px;\n}\n\n.links {\n    display: flex;\n}\n\n.nav-bar-right {\n    margin-left: auto;\n}\n\n.nav-bar-left {\n    display: flex;\n    align-items: center;\n}\n\n.nav-bar-left > p {\n    color: var(--yellow);\n    font-weight: 700;\n    margin-right: 10px;\n}\n\nul.links {\n    padding-left: 0;\n    list-style: none;\n}\n\nul.links li {\n    margin-left: 20px;\n    font-weight: 700;\n    color: var(--white);\n    text-decoration: none;\n}\n\nul.links li:hover, button {\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,4BAA4B;IAC5B,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,4BAA4B;IAC5B,oCAAoC;IACpC,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA,cAAc;AACd;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,UAAU;IACV,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,yBAAyB;AAC7B;AACA;IACI,UAAU;AACd;AACA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,mCAAmC;IACnC,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA,SAAS;AACT;IACI,kCAAkC;IAClC,mBAAmB;IACnB,mCAAmC;IACnC,aAAa;IACb,UAAU;IACV,YAAY;IACZ,aAAa;IACb,SAAS;IACT,6DAA6D;AACjE;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;AACjB;;AAEA,eAAe;AACf;IACI;;;qCAGiC;IACjC,kBAAkB;IAClB,cAAc;IACd,mCAAmC;IACnC,mCAAmC;IACnC,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,WAAW;AACX;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,gBAAgB;AACpB;;AAEA,YAAY;;AAEZ;IACI,qBAAqB;IACrB,MAAM;IACN,gBAAgB;IAChB,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,wCAAwC;IACxC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB","sourcesContent":[":root {\n    --red: #ED2938;\n    --red-transparent: #ed2939cb;\n    --yellow: #FFEB01;\n    --white: #FFFFFF;\n    --light-blue: #0088DD;\n    --dark-blue: #165FC6;\n}\n\nhtml, body, #content {\n    min-height: 100vh;\n    /* height: 100vh; */\n}\n\nbody {\n    color: var(--white);\n    background-color: var(--red);\n    font-family: 'Open Sans', sans-serif;\n    margin: 0;\n}\n\nimg {\n    width: 100%;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n}\n\n/* home page */\n.home-page-container {\n    display: flex;\n    height: 90%;\n}\n.div-left {\n    width: 37%;\n    box-sizing: border-box;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n.div-right {\n    width: 60%;\n}\n.side-bar-slider {\n    width: 3%;\n}\n\n.div-right > img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n.div-left > img {\n    width: 60%;\n    align-self: center;\n}\n.div-left > h1 {\n    color: var(--yellow);\n    margin-top: 0rem;\n    font-size: 2.65rem;\n}\n.p-cta {\n    margin: 0;\n    margin-top: 2rem;\n    font-style: italic;\n    font-size: 0.9rem;\n}\n.p-description {\n    margin-top: 0;\n    font-size: 1rem;\n    font-weight: 500;\n}\n.div-left button {\n    padding: 0.65rem;\n    background-color: var(--light-blue);\n    color: var(--white);\n    font-weight: 700;\n    font-size: 1.1rem;\n    border-radius: 10px;\n    min-width: min-content;\n}\n\n/* menu */\n.menu-items-container {\n    border: 7px solid var(--dark-blue);\n    border-radius: 15px;\n    background-color: var(--light-blue);\n    padding: 30px;\n    width: 67%;\n    margin: auto;\n    display: grid;\n    gap: 45px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));\n}\n\n.menu-icon {\n    width: 50px;\n}\n\ndiv.item-image img {\n    width: 160px;\n    height: 160px;\n    object-fit: cover;\n}\n\n.item {\n    height: 450px;\n}\n\n.item-title {\n    font-size: 1.2rem;\n}\n\n.item-cost {\n    color: var(--yellow);\n    font-size: 0.95rem;\n    display: block;\n}\n\n.item-description {\n    font-size: 1rem;\n}\n\n.menu-header h1 {\n    text-align: center;\n    font-size: 2.5rem;\n    margin-top: 0;\n}\n\n/* contact us */\n.contact-us-content-container {\n    /* display: flex;\n    flex-wrap: wrap;\n    gap: 15px;\n    justify-content: space-between; */\n    width: min-content;\n    margin: 0 auto;\n    background-color: var(--light-blue);\n    border: 10px solid var(--dark-blue);\n    border-radius: 30px;\n    padding: 30px;\n}\n\n.contact-us-header {\n    text-align: center;\n}\n\n.contact-us .icon {\n    width: 40px;\n    margin-left: 7px;\n    position: relative;\n    top: 7px;\n}\n\n.contact-us form {\n    display: flex;\n    flex-direction: column;\n}\n\n.contact-us form > input {\n    padding: 0.4rem 1rem;\n    border-radius: 10px;\n    width: 500px;\n    margin-bottom: 15px;\n}\n\n.contact-us form > button {\n    padding: 0.5rem 1rem;\n    border-radius: 15px;\n    width: 200px;\n}\n\n.contact-us-content-container > div {\n    margin-bottom: 25px;\n}\n\n/* footer */ \n.footer {\n    text-align: center;\n    margin-top: auto;\n}\n\n.copyright-text {\n    font-size: 0.8rem;\n    font-style: italic;\n}\n\n.github-icon {\n    height: 1rem;\n    width: 1rem;\n    position: relative;\n    top: 2px;\n    margin-left: 5px;\n}\n\n/* nav bar */\n\n.nav-bar {\n    /* position: fixed; */\n    top: 0;\n    position: sticky;\n    display: flex;\n    width: 100%;\n    box-sizing: border-box;\n    background-color: var(--red-transparent);\n    align-items: center;\n    padding: 10px 25px;\n}\n\n.logo-img {\n    width: 50px;\n}\n\n.links {\n    display: flex;\n}\n\n.nav-bar-right {\n    margin-left: auto;\n}\n\n.nav-bar-left {\n    display: flex;\n    align-items: center;\n}\n\n.nav-bar-left > p {\n    color: var(--yellow);\n    font-weight: 700;\n    margin-right: 10px;\n}\n\nul.links {\n    padding-left: 0;\n    list-style: none;\n}\n\nul.links li {\n    margin-left: 20px;\n    font-weight: 700;\n    color: var(--white);\n    text-decoration: none;\n}\n\nul.links li:hover, button {\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/footer/icons/GitHub-Mark-Light-120px-plus.png":
/*!**********************************************************************!*\
  !*** ./src/components/footer/icons/GitHub-Mark-Light-120px-plus.png ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5de0643bf1bbf77878ff26e8d04f3042.png");

/***/ }),

/***/ "./src/components/nav-bar/icons/pngkey.com-barbecue-png-7034922.png":
/*!**************************************************************************!*\
  !*** ./src/components/nav-bar/icons/pngkey.com-barbecue-png-7034922.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ce35a7db35c704b99e3874ec4482e15c.png");

/***/ }),

/***/ "./src/pages/contact-us-page/icons/call_FILL0_wght400_GRAD0_opsz48.svg":
/*!*****************************************************************************!*\
  !*** ./src/pages/contact-us-page/icons/call_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "02af061e66783ca2006ed508969a4506.svg");

/***/ }),

/***/ "./src/pages/contact-us-page/icons/location_on_FILL0_wght400_GRAD0_opsz48.svg":
/*!************************************************************************************!*\
  !*** ./src/pages/contact-us-page/icons/location_on_FILL0_wght400_GRAD0_opsz48.svg ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2f059afe05723edb3a730cdeb23c04e4.svg");

/***/ }),

/***/ "./src/pages/contact-us-page/icons/mail_FILL0_wght400_GRAD0_opsz48.svg":
/*!*****************************************************************************!*\
  !*** ./src/pages/contact-us-page/icons/mail_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5a387e74dbef285fe81a3cd40ea170b5.svg");

/***/ }),

/***/ "./src/pages/contact-us-page/icons/schedule_FILL0_wght400_GRAD0_opsz48.svg":
/*!*********************************************************************************!*\
  !*** ./src/pages/contact-us-page/icons/schedule_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f24e6657183c1ddb4442d1880fbdeca2.svg");

/***/ }),

/***/ "./src/pages/home-page/imgs/home-page-image.jpg":
/*!******************************************************!*\
  !*** ./src/pages/home-page/imgs/home-page-image.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "43c8b4bbf04654c9e7e538d04b8c8636.jpg");

/***/ }),

/***/ "./src/pages/home-page/imgs/pngkey.com-barbecue-png-7034922.png":
/*!**********************************************************************!*\
  !*** ./src/pages/home-page/imgs/pngkey.com-barbecue-png-7034922.png ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ce35a7db35c704b99e3874ec4482e15c.png");

/***/ }),

/***/ "./src/pages/menu-page/food-imgs/PngItem_6316973.png":
/*!***********************************************************!*\
  !*** ./src/pages/menu-page/food-imgs/PngItem_6316973.png ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "68e12929b3c49efc64d0543451d324fd.png");

/***/ }),

/***/ "./src/pages/menu-page/food-imgs/barbecue-36318.png":
/*!**********************************************************!*\
  !*** ./src/pages/menu-page/food-imgs/barbecue-36318.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ccd7640982c84422b76747df0f464711.png");

/***/ }),

/***/ "./src/pages/menu-page/food-imgs/barbecue-36348.png":
/*!**********************************************************!*\
  !*** ./src/pages/menu-page/food-imgs/barbecue-36348.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2ab9363f06c3e0234b966a8d2bb5867c.png");

/***/ }),

/***/ "./src/pages/menu-page/food-imgs/barbecue-36388.png":
/*!**********************************************************!*\
  !*** ./src/pages/menu-page/food-imgs/barbecue-36388.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e2a0a77c29828ca18e6cd9aa99f65fce.png");

/***/ }),

/***/ "./src/pages/menu-page/food-imgs/barbecue-36440.png":
/*!**********************************************************!*\
  !*** ./src/pages/menu-page/food-imgs/barbecue-36440.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f18b19d2217ec6e9206a4d0befe6d212.png");

/***/ }),

/***/ "./src/pages/menu-page/food-imgs/fast-food-png-41600.png":
/*!***************************************************************!*\
  !*** ./src/pages/menu-page/food-imgs/fast-food-png-41600.png ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "089ed4bed972189ec317e7aeec06471d.png");

/***/ }),

/***/ "./src/pages/menu-page/food-imgs/fast-food-png-41602.png":
/*!***************************************************************!*\
  !*** ./src/pages/menu-page/food-imgs/fast-food-png-41602.png ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "86342ab920437f894c41cf52500aa643.png");

/***/ }),

/***/ "./src/pages/menu-page/food-imgs/food-png-2953.png":
/*!*********************************************************!*\
  !*** ./src/pages/menu-page/food-imgs/food-png-2953.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d74043e3e0987a12265595f28063dc05.png");

/***/ }),

/***/ "./src/pages/menu-page/food-imgs/kindpng_1212086.png":
/*!***********************************************************!*\
  !*** ./src/pages/menu-page/food-imgs/kindpng_1212086.png ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8cec8eef523a41ed839a240d6a01fe00.png");

/***/ }),

/***/ "./src/pages/menu-page/icons/restaurant.png":
/*!**************************************************!*\
  !*** ./src/pages/menu-page/icons/restaurant.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ca482020a991f1ade248a8b3562c8776.png");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _icons_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/GitHub-Mark-Light-120px-plus.png */ "./src/components/footer/icons/GitHub-Mark-Light-120px-plus.png");


function footer() {
    const footer = document.createElement('div')
    footer.classList.add('footer')

    footer.innerHTML = `
        <p class='copyright-text'>Copycat © 2022 Rose <span><a href='#'><image class='icon github-icon' src='${_icons_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_0__["default"]}'></a></span></p>
    `

    return footer;
}

/***/ }),

/***/ "./src/components/nav-bar/nav-bar.js":
/*!*******************************************!*\
  !*** ./src/components/nav-bar/nav-bar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navBar)
/* harmony export */ });
/* harmony import */ var _icons_pngkey_com_barbecue_png_7034922_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/pngkey.com-barbecue-png-7034922.png */ "./src/components/nav-bar/icons/pngkey.com-barbecue-png-7034922.png");


function navBar() {
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    navBar.innerHTML = `
        <div class='nav-bar-left'>
            <p class='logo-title'>Smokey's BBQ</p>
            <img class='logo-img' src='${_icons_pngkey_com_barbecue_png_7034922_png__WEBPACK_IMPORTED_MODULE_0__["default"]}'>
        </div>
        <div class='nav-bar-right'>
            <nav>
                <ul class='links'>
                    <li onclick="handleNavClick('home')">Home</li>
                    <li onclick="handleNavClick('menu')">Menu</li>
                    <li onclick="handleNavClick('contact')">Contact</li>
                </ul>
            </nav>
        </div>
    `

    function handleNavClick(page) {
        console.log(page);
    }

    return navBar;
}

/***/ }),

/***/ "./src/pages/contact-us-page/contact-us.js":
/*!*************************************************!*\
  !*** ./src/pages/contact-us-page/contact-us.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactUs)
/* harmony export */ });
/* harmony import */ var _icons_call_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/call_FILL0_wght400_GRAD0_opsz48.svg */ "./src/pages/contact-us-page/icons/call_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _icons_location_on_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/location_on_FILL0_wght400_GRAD0_opsz48.svg */ "./src/pages/contact-us-page/icons/location_on_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _icons_mail_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/mail_FILL0_wght400_GRAD0_opsz48.svg */ "./src/pages/contact-us-page/icons/mail_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _icons_schedule_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/schedule_FILL0_wght400_GRAD0_opsz48.svg */ "./src/pages/contact-us-page/icons/schedule_FILL0_wght400_GRAD0_opsz48.svg");





function contactUs() {
    
    const contactUsHeader = document.createElement('div');
    contactUsHeader.classList.add('contact-us-header');
    contactUsHeader.innerHTML = `
        <h1>Contact Us</h1>
    `;

    const contactUsContentContainer = document.createElement('div');
    contactUsContentContainer.classList.add('contact-us-content-container');

    contactUsContentContainer.innerHTML = `
        <div>
            <h2>Location <span><image class='icon location-icon'src='${_icons_location_on_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__["default"]}'</span></h2>
            <p class='street-address'>666 AppleWood Smoked St</p>
            <p class='city-address'>Houston, Texas 6666</p>
        </div>
        <div>
            <h2>Schedule <span><img class='icon clock-icon' src='${_icons_schedule_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__["default"]}'></span></h2>
            <ul class='schedule'>
                <div>
                    <li>Monday: 11am-11:30pm</li>
                    <li>Tuesday: 11am-11:30pm</li>
                    <li>Wednesday: 11am-11:30pm</li>
                </div>
                <div>
                    <li>Thursday: 11am-11:30pm</li>
                    <li>Friday: 11am-1:30am</li>
                    <li>Sunday: 7am-11:30pm</li>
                </div>
            </ul>
        </div>
        <div>
            <h2>Phone Number <span><image class='icon phone-number-icon' src='${_icons_call_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__["default"]}'></span></h2>
            <p class='phone-number'>(666) - 123 - 4567</p>
        </div>
        <div>
            <h2>Message Us <span><image class='icon email-icon' src='${_icons_mail_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__["default"]}'></span></h2>
            <form>
                <input type='text' placeholder='Full Name'>
                <input type='text' placeholder='Email'>
                <input type='text' placeholder='Your Message'>
                <button>Submit</button>
            </form>
        </div>
        <div>
            <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=1201%20Richmond%20Ave.,%20Houston,%20TX%2077006&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-a.com"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embedding maps in website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>
        </div>
    `

    const contactUs = document.createElement('div');
    contactUs.classList.add('contact-us');
    contactUs.append(contactUsHeader, contactUsContentContainer);

    return contactUs;
}

/***/ }),

/***/ "./src/pages/home-page/home-page.js":
/*!******************************************!*\
  !*** ./src/pages/home-page/home-page.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _imgs_home_page_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/home-page-image.jpg */ "./src/pages/home-page/imgs/home-page-image.jpg");
/* harmony import */ var _imgs_pngkey_com_barbecue_png_7034922_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/pngkey.com-barbecue-png-7034922.png */ "./src/pages/home-page/imgs/pngkey.com-barbecue-png-7034922.png");



function homePage() {
    const content = document.querySelector('#content');

    const mainImg = document.createElement('img');
    mainImg.src = _imgs_home_page_image_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]

    const logoImg = document.createElement('img');
    logoImg.src = _imgs_pngkey_com_barbecue_png_7034922_png__WEBPACK_IMPORTED_MODULE_1__["default"];

    const h1 = document.createElement('h1');
    h1.textContent = `Smokey's BBQ`
    
    const pCTA = document.createElement('p');
    pCTA.classList.add('p-cta');
    pCTA.textContent = `Eat like a real texan!`;

    const pDescription = document.createElement('p');
    pDescription.classList.add('p-description')
    pDescription.textContent = `Smoked meats that make your mouth water.`;

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Discover Menu';
    menuBtn.onclick = () => {handleNavClick("menu")};

    const sideBarSlider = document.createElement('div');
    sideBarSlider.classList.add('side-bar-slider');

    const divLeft = document.createElement('div');
    divLeft.classList.add('div-left');
    const divRight = document.createElement('div');
    divRight.classList.add('div-right');
    const homePageContainer = document.createElement('div');
    homePageContainer.classList.add('home-page-container');

    divLeft.append(logoImg,pCTA, h1, pDescription, menuBtn);
    divRight.append(mainImg);
    homePageContainer.append(divLeft, divRight, sideBarSlider);

    return homePageContainer;
}




/***/ }),

/***/ "./src/pages/menu-page/menu.js":
/*!*************************************!*\
  !*** ./src/pages/menu-page/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _food_imgs_barbecue_36318_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-imgs/barbecue-36318.png */ "./src/pages/menu-page/food-imgs/barbecue-36318.png");
/* harmony import */ var _food_imgs_barbecue_36348_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-imgs/barbecue-36348.png */ "./src/pages/menu-page/food-imgs/barbecue-36348.png");
/* harmony import */ var _food_imgs_barbecue_36388_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-imgs/barbecue-36388.png */ "./src/pages/menu-page/food-imgs/barbecue-36388.png");
/* harmony import */ var _food_imgs_barbecue_36440_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-imgs/barbecue-36440.png */ "./src/pages/menu-page/food-imgs/barbecue-36440.png");
/* harmony import */ var _food_imgs_kindpng_1212086_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food-imgs/kindpng_1212086.png */ "./src/pages/menu-page/food-imgs/kindpng_1212086.png");
/* harmony import */ var _food_imgs_fast_food_png_41600_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-imgs/fast-food-png-41600.png */ "./src/pages/menu-page/food-imgs/fast-food-png-41600.png");
/* harmony import */ var _food_imgs_fast_food_png_41602_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-imgs/fast-food-png-41602.png */ "./src/pages/menu-page/food-imgs/fast-food-png-41602.png");
/* harmony import */ var _food_imgs_food_png_2953_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./food-imgs/food-png-2953.png */ "./src/pages/menu-page/food-imgs/food-png-2953.png");
/* harmony import */ var _food_imgs_PngItem_6316973_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./food-imgs/PngItem_6316973.png */ "./src/pages/menu-page/food-imgs/PngItem_6316973.png");
/* harmony import */ var _icons_restaurant_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/restaurant.png */ "./src/pages/menu-page/icons/restaurant.png");











function menu() {

    function menuItem(img, name, cost, description) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item');
        itemContainer.innerHTML = `
            <div class='item-image'>
                <img src='${img}'>
            </div>
            <div class='item-info'>
                <h2 class='item-title'>${name} <span class='item-cost'>$${cost}</span></h2>
                <p class='item-description'>${description}</p>
            </div>
        `
        return itemContainer;
    }

    const item1 = menuItem(_food_imgs_barbecue_36318_png__WEBPACK_IMPORTED_MODULE_0__["default"], 'Char Wood Smoked Kebabs', '19.99', 'These juicy meats and fresh vegetables were slow cooked with charred apple wood smoke.');
    const item2 = menuItem(_food_imgs_barbecue_36348_png__WEBPACK_IMPORTED_MODULE_1__["default"], 'Vegetables and Sausages', '35.99', 'Vegetable kebabs, corn, and sausages all grilled with freshly cut apple wood.');
    const item3 = menuItem(_food_imgs_barbecue_36388_png__WEBPACK_IMPORTED_MODULE_2__["default"], 'Texan Style Ribs', '24.99', 'These overnight, slow cooked, dripping with bbq sauce ribs come with a side of beans, seasoned fries, and a large drink.');
    const item4 = menuItem(_food_imgs_barbecue_36440_png__WEBPACK_IMPORTED_MODULE_3__["default"], 'Chared Chipotle Wings', '19.99', 'These wings were char grilled and drenched in chipotle sauce.');
    const item5 = menuItem(_food_imgs_kindpng_1212086_png__WEBPACK_IMPORTED_MODULE_4__["default"], 'Classic Texan BBQ Plate', '19.99', 'Brown sugar baked beans, buttered smashed potatoes, 2 large texas toasts, and an assortment of smoked meats.');
    const item6 = menuItem(_food_imgs_fast_food_png_41600_png__WEBPACK_IMPORTED_MODULE_5__["default"], 'Texas Smash Burgers', '15.99', 'Burgers with smoked and grilled patties, fries cooked and seasoned to perfection, and a texas styled hot dog with an apple wood charred sausage.');
    const item7 = menuItem(_food_imgs_fast_food_png_41602_png__WEBPACK_IMPORTED_MODULE_6__["default"], 'McTexan', '19.99', 'This texas take on the McMac has two patties that were slow cooked in cherry wood smoke, saused with classic BBQ sauce, and topped of with onions, tomatos, and pickles.');
    const item8 = menuItem(_food_imgs_food_png_2953_png__WEBPACK_IMPORTED_MODULE_7__["default"], 'Meat Lovers Burger', '15.99', 'A burger with grilled bacon, charred chicken, smoked beef patties, and a healthy dose of texas scourced sharp cheddar cheese.');
    const item9 = menuItem(_food_imgs_PngItem_6316973_png__WEBPACK_IMPORTED_MODULE_8__["default"], 'Texan Cake', '29.99', 'This Texas cake is stuffed with freshly cut strawberries, organic vanilla, and 100% texas ground mill flour.');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items-container');

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menuHeader.innerHTML = `
        <h1>Menu <span><img class='menu-icon' src=${_icons_restaurant_png__WEBPACK_IMPORTED_MODULE_9__["default"]}></span></h1>
    `

    menuItemsContainer.append(item1, item2, item3, item4, item5, item6, item7, item8, item9);
    menu.append(menuHeader, menuItemsContainer);

    return menu;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home_page_home_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home-page/home-page.js */ "./src/pages/home-page/home-page.js");
/* harmony import */ var _pages_menu_page_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu-page/menu.js */ "./src/pages/menu-page/menu.js");
/* harmony import */ var _pages_contact_us_page_contact_us_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact-us-page/contact-us.js */ "./src/pages/contact-us-page/contact-us.js");
/* harmony import */ var _components_nav_bar_nav_bar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.js */ "./src/components/nav-bar/nav-bar.js");
/* harmony import */ var _components_footer_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.js */ "./src/components/footer/footer.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







const content = document.querySelector('#content');
content.append((0,_components_nav_bar_nav_bar_js__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_pages_home_page_home_page_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), (0,_components_footer_footer_js__WEBPACK_IMPORTED_MODULE_4__["default"])());

window.handleNavClick = function(page) {
    loadPage(page);
}

function clearPage() {
    content.innerHTML = '';
}

function loadPage(page) {
    clearPage();
    if (page === 'home') {
        content.append((0,_components_nav_bar_nav_bar_js__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_pages_home_page_home_page_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), (0,_components_footer_footer_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
    } else if (page === 'menu') {
        content.append((0,_components_nav_bar_nav_bar_js__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_pages_menu_page_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_components_footer_footer_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
    } else if (page === 'contact') {
        content.append((0,_components_nav_bar_nav_bar_js__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_pages_contact_us_page_contact_us_js__WEBPACK_IMPORTED_MODULE_2__["default"])(), (0,_components_footer_footer_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
    }
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDTix1QkFBdUIsMEVBQU0sSUFBSSxvRUFBSSxJQUFJLHdFQUFNO0FBQy9DLE1BQU07QUFDTix1QkFBdUIsMEVBQU0sSUFBSSxnRkFBUyxJQUFJLHdFQUFNO0FBQ3BEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9pY29ucy9HaXRIdWItTWFyay1MaWdodC0xMjBweC1wbHVzLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXYtYmFyL2ljb25zL3BuZ2tleS5jb20tYmFyYmVjdWUtcG5nLTcwMzQ5MjIucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LXVzLXBhZ2UvaWNvbnMvY2FsbF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QtdXMtcGFnZS9pY29ucy9sb2NhdGlvbl9vbl9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QtdXMtcGFnZS9pY29ucy9tYWlsX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC11cy1wYWdlL2ljb25zL3NjaGVkdWxlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS1wYWdlL2ltZ3MvaG9tZS1wYWdlLWltYWdlLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS1wYWdlL2ltZ3MvcG5na2V5LmNvbS1iYXJiZWN1ZS1wbmctNzAzNDkyMi5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUtcGFnZS9mb29kLWltZ3MvUG5nSXRlbV82MzE2OTczLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS1wYWdlL2Zvb2QtaW1ncy9iYXJiZWN1ZS0zNjMxOC5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUtcGFnZS9mb29kLWltZ3MvYmFyYmVjdWUtMzYzNDgucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LXBhZ2UvZm9vZC1pbWdzL2JhcmJlY3VlLTM2Mzg4LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS1wYWdlL2Zvb2QtaW1ncy9iYXJiZWN1ZS0zNjQ0MC5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUtcGFnZS9mb29kLWltZ3MvZmFzdC1mb29kLXBuZy00MTYwMC5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUtcGFnZS9mb29kLWltZ3MvZmFzdC1mb29kLXBuZy00MTYwMi5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUtcGFnZS9mb29kLWltZ3MvZm9vZC1wbmctMjk1My5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUtcGFnZS9mb29kLWltZ3Mva2luZHBuZ18xMjEyMDg2LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS1wYWdlL2ljb25zL3Jlc3RhdXJhbnQucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC11cy1wYWdlL2NvbnRhY3QtdXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUtcGFnZS9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcmVkOiAjRUQyOTM4O1xcbiAgICAtLXJlZC10cmFuc3BhcmVudDogI2VkMjkzOWNiO1xcbiAgICAtLXllbGxvdzogI0ZGRUIwMTtcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG4gICAgLS1saWdodC1ibHVlOiAjMDA4OEREO1xcbiAgICAtLWRhcmstYmx1ZTogIzE2NUZDNjtcXG59XFxuXFxuaHRtbCwgYm9keSwgI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBob21lIHBhZ2UgKi9cXG4uaG9tZS1wYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogOTAlO1xcbn1cXG4uZGl2LWxlZnQge1xcbiAgICB3aWR0aDogMzclO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uZGl2LXJpZ2h0IHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuLnNpZGUtYmFyLXNsaWRlciB7XFxuICAgIHdpZHRoOiAzJTtcXG59XFxuXFxuLmRpdi1yaWdodCA+IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uZGl2LWxlZnQgPiBpbWcge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5kaXYtbGVmdCA+IGgxIHtcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIG1hcmdpbi10b3A6IDByZW07XFxuICAgIGZvbnQtc2l6ZTogMi42NXJlbTtcXG59XFxuLnAtY3RhIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4ucC1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmRpdi1sZWZ0IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLyogbWVudSAqL1xcbi5tZW51LWl0ZW1zLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogN3B4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICB3aWR0aDogNjclO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgNDAwcHgpKTtcXG59XFxuXFxuLm1lbnUtaWNvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG5kaXYuaXRlbS1pbWFnZSBpbWcge1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGhlaWdodDogNDUwcHg7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5pdGVtLWNvc3Qge1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5tZW51LWhlYWRlciBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi8qIGNvbnRhY3QgdXMgKi9cXG4uY29udGFjdC11cy1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmNvbnRhY3QtdXMtaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC11cyAuaWNvbiB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogN3B4O1xcbn1cXG5cXG4uY29udGFjdC11cyBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhY3QtdXMgZm9ybSA+IGlucHV0IHtcXG4gICAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmNvbnRhY3QtdXMgZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5jb250YWN0LXVzLWNvbnRlbnQtY29udGFpbmVyID4gZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLyogZm9vdGVyICovIFxcbi5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5jb3B5cmlnaHQtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5naXRodWItaWNvbiB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi8qIG5hdiBiYXIgKi9cXG5cXG4ubmF2LWJhciB7XFxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cXG4gICAgdG9wOiAwO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLXRyYW5zcGFyZW50KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xcbn1cXG5cXG4ubG9nby1pbWcge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hdi1iYXItcmlnaHQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm5hdi1iYXItbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYmFyLWxlZnQgPiBwIHtcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxudWwubGlua3Mge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbnVsLmxpbmtzIGxpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudWwubGlua3MgbGk6aG92ZXIsIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2Vz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O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXJlZDogI0VEMjkzODtcXG4gICAgLS1yZWQtdHJhbnNwYXJlbnQ6ICNlZDI5MzljYjtcXG4gICAgLS15ZWxsb3c6ICNGRkVCMDE7XFxuICAgIC0td2hpdGU6ICNGRkZGRkY7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzAwODhERDtcXG4gICAgLS1kYXJrLWJsdWU6ICMxNjVGQzY7XFxufVxcblxcbmh0bWwsIGJvZHksICNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxufVxcblxcbmJvZHkge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogaG9tZSBwYWdlICovXFxuLmhvbWUtcGFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDkwJTtcXG59XFxuLmRpdi1sZWZ0IHtcXG4gICAgd2lkdGg6IDM3JTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmRpdi1yaWdodCB7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcbi5zaWRlLWJhci1zbGlkZXIge1xcbiAgICB3aWR0aDogMyU7XFxufVxcblxcbi5kaXYtcmlnaHQgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLmRpdi1sZWZ0ID4gaW1nIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uZGl2LWxlZnQgPiBoMSB7XFxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcbiAgICBmb250LXNpemU6IDIuNjVyZW07XFxufVxcbi5wLWN0YSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLnAtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5kaXYtbGVmdCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjY1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi8qIG1lbnUgKi9cXG4ubWVudS1pdGVtcy1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDdweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgd2lkdGg6IDY3JTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDQ1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDQwMHB4KSk7XFxufVxcblxcbi5tZW51LWljb24ge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuZGl2Lml0ZW0taW1hZ2UgaW1nIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLml0ZW0ge1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG4uaXRlbS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaXRlbS1jb3N0IHtcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWVudS1oZWFkZXIgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4vKiBjb250YWN0IHVzICovXFxuLmNvbnRhY3QtdXMtY29udGVudC1jb250YWluZXIge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5jb250YWN0LXVzLWhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtdXMgLmljb24ge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDdweDtcXG59XFxuXFxuLmNvbnRhY3QtdXMgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWN0LXVzIGZvcm0gPiBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5jb250YWN0LXVzIGZvcm0gPiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY29udGFjdC11cy1jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbi8qIGZvb3RlciAqLyBcXG4uZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uY29weXJpZ2h0LXRleHQge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uZ2l0aHViLWljb24ge1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4vKiBuYXYgYmFyICovXFxuXFxuLm5hdi1iYXIge1xcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxuICAgIHRvcDogMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC10cmFuc3BhcmVudCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG59XFxuXFxuLmxvZ28taW1nIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5uYXYtYmFyLXJpZ2h0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5uYXYtYmFyLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWJhci1sZWZ0ID4gcCB7XFxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbnVsLmxpbmtzIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG51bC5saW5rcyBsaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsLmxpbmtzIGxpOmhvdmVyLCBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWRlMDY0M2JmMWJiZjc3ODc4ZmYyNmU4ZDA0ZjMwNDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNlMzVhN2RiMzVjNzA0Yjk5ZTM4NzRlYzQ0ODJlMTVjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMmFmMDYxZTY2NzgzY2EyMDA2ZWQ1MDg5NjlhNDUwNi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmYwNTlhZmUwNTcyM2VkYjNhNzMwY2RlYjIzYzA0ZTQuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVhMzg3ZTc0ZGJlZjI4NWZlODFhM2NkNDBlYTE3MGI1LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMjRlNjY1NzE4M2MxZGRiNDQ0MmQxODgwZmJkZWNhMi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDNjOGI0YmJmMDQ2NTRjOWU3ZTUzOGQwNGI4Yzg2MzYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNlMzVhN2RiMzVjNzA0Yjk5ZTM4NzRlYzQ0ODJlMTVjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2OGUxMjkyOWIzYzQ5ZWZjNjRkMDU0MzQ1MWQzMjRmZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2NkNzY0MDk4MmM4NDQyMmI3Njc0N2RmMGY0NjQ3MTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJhYjkzNjNmMDZjM2UwMjM0Yjk2NmE4ZDJiYjU4NjdjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlMmEwYTc3YzI5ODI4Y2ExOGU2Y2Q5YWE5OWY2NWZjZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjE4YjE5ZDIyMTdlYzZlOTIwNmE0ZDBiZWZlNmQyMTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA4OWVkNGJlZDk3MjE4OWVjMzE3ZTdhZWVjMDY0NzFkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NjM0MmFiOTIwNDM3Zjg5NGM0MWNmNTI1MDBhYTY0My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDc0MDQzZTNlMDk4N2ExMjI2NTU5NWYyODA2M2RjMDUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhjZWM4ZWVmNTIzYTQxZWQ4MzlhMjQwZDZhMDFmZTAwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYTQ4MjAyMGE5OTFmMWFkZTI0OGE4YjM1NjJjODc3Ni5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2l0aHViSWNvbiBmcm9tICcuL2ljb25zL0dpdEh1Yi1NYXJrLUxpZ2h0LTEyMHB4LXBsdXMucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG5cbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8cCBjbGFzcz0nY29weXJpZ2h0LXRleHQnPkNvcHljYXQgwqkgMjAyMiBSb3NlIDxzcGFuPjxhIGhyZWY9JyMnPjxpbWFnZSBjbGFzcz0naWNvbiBnaXRodWItaWNvbicgc3JjPScke0dpdGh1Ykljb259Jz48L2E+PC9zcGFuPjwvcD5cbiAgICBgXG5cbiAgICByZXR1cm4gZm9vdGVyO1xufSIsImltcG9ydCBsb2dvSW1nIGZyb20gJy4vaWNvbnMvcG5na2V5LmNvbS1iYXJiZWN1ZS1wbmctNzAzNDkyMi5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZCYXIoKSB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKTtcblxuICAgIG5hdkJhci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdi1iYXItbGVmdCc+XG4gICAgICAgICAgICA8cCBjbGFzcz0nbG9nby10aXRsZSc+U21va2V5J3MgQkJRPC9wPlxuICAgICAgICAgICAgPGltZyBjbGFzcz0nbG9nby1pbWcnIHNyYz0nJHtsb2dvSW1nfSc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSduYXYtYmFyLXJpZ2h0Jz5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPSdsaW5rcyc+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbmNsaWNrPVwiaGFuZGxlTmF2Q2xpY2soJ2hvbWUnKVwiPkhvbWU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgb25jbGljaz1cImhhbmRsZU5hdkNsaWNrKCdtZW51JylcIj5NZW51PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIG9uY2xpY2s9XCJoYW5kbGVOYXZDbGljaygnY29udGFjdCcpXCI+Q29udGFjdDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOYXZDbGljayhwYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZCYXI7XG59IiwiaW1wb3J0IGNhbGxJY29uIGZyb20gJy4vaWNvbnMvY2FsbF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuaW1wb3J0IGxvY2F0aW9uSWNvbiBmcm9tICcuL2ljb25zL2xvY2F0aW9uX29uX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgbWFpbEljb24gZnJvbSAnLi9pY29ucy9tYWlsX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgY2xvY2tJY29uIGZyb20gJy4vaWNvbnMvc2NoZWR1bGVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFVzKCkge1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RVc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RVc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXVzLWhlYWRlcicpO1xuICAgIGNvbnRhY3RVc0hlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMT5Db250YWN0IFVzPC9oMT5cbiAgICBgO1xuXG4gICAgY29uc3QgY29udGFjdFVzQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RVc0NvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC11cy1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4gICAgY29udGFjdFVzQ29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+TG9jYXRpb24gPHNwYW4+PGltYWdlIGNsYXNzPSdpY29uIGxvY2F0aW9uLWljb24nc3JjPScke2xvY2F0aW9uSWNvbn0nPC9zcGFuPjwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzcz0nc3RyZWV0LWFkZHJlc3MnPjY2NiBBcHBsZVdvb2QgU21va2VkIFN0PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9J2NpdHktYWRkcmVzcyc+SG91c3RvbiwgVGV4YXMgNjY2NjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+U2NoZWR1bGUgPHNwYW4+PGltZyBjbGFzcz0naWNvbiBjbG9jay1pY29uJyBzcmM9JyR7Y2xvY2tJY29ufSc+PC9zcGFuPjwvaDI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9J3NjaGVkdWxlJz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGk+TW9uZGF5OiAxMWFtLTExOjMwcG08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VHVlc2RheTogMTFhbS0xMTozMHBtPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPldlZG5lc2RheTogMTFhbS0xMTozMHBtPC9saT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGk+VGh1cnNkYXk6IDExYW0tMTE6MzBwbTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5GcmlkYXk6IDExYW0tMTozMGFtPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlN1bmRheTogN2FtLTExOjMwcG08L2xpPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+UGhvbmUgTnVtYmVyIDxzcGFuPjxpbWFnZSBjbGFzcz0naWNvbiBwaG9uZS1udW1iZXItaWNvbicgc3JjPScke2NhbGxJY29ufSc+PC9zcGFuPjwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzcz0ncGhvbmUtbnVtYmVyJz4oNjY2KSAtIDEyMyAtIDQ1Njc8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPk1lc3NhZ2UgVXMgPHNwYW4+PGltYWdlIGNsYXNzPSdpY29uIGVtYWlsLWljb24nIHNyYz0nJHttYWlsSWNvbn0nPjwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdGdWxsIE5hbWUnPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nRW1haWwnPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nWW91ciBNZXNzYWdlJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBvdXRlclwiPjxkaXYgY2xhc3M9XCJnbWFwX2NhbnZhc1wiPjxpZnJhbWUgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI1MDBcIiBpZD1cImdtYXBfY2FudmFzXCIgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz9xPTEyMDElMjBSaWNobW9uZCUyMEF2ZS4sJTIwSG91c3RvbiwlMjBUWCUyMDc3MDA2JnQ9Jno9MTUmaWU9VVRGOCZpd2xvYz0mb3V0cHV0PWVtYmVkXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBtYXJnaW5oZWlnaHQ9XCIwXCIgbWFyZ2lud2lkdGg9XCIwXCI+PC9pZnJhbWU+PGEgaHJlZj1cImh0dHBzOi8vMTIzbW92aWVzLWEuY29tXCI+PC9hPjxicj48c3R5bGU+Lm1hcG91dGVye3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246cmlnaHQ7aGVpZ2h0OjUwMHB4O3dpZHRoOjYwMHB4O308L3N0eWxlPjxhIGhyZWY9XCJodHRwczovL3d3dy5lbWJlZGdvb2dsZW1hcC5uZXRcIj5lbWJlZGRpbmcgbWFwcyBpbiB3ZWJzaXRlPC9hPjxzdHlsZT4uZ21hcF9jYW52YXMge292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOm5vbmUhaW1wb3J0YW50O2hlaWdodDo1MDBweDt3aWR0aDo2MDBweDt9PC9zdHlsZT48L2Rpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuXG4gICAgY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFVzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdXMnKTtcbiAgICBjb250YWN0VXMuYXBwZW5kKGNvbnRhY3RVc0hlYWRlciwgY29udGFjdFVzQ29udGVudENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gY29udGFjdFVzO1xufSIsImltcG9ydCBCYnFJbWcgZnJvbSAnLi9pbWdzL2hvbWUtcGFnZS1pbWFnZS5qcGcnO1xuaW1wb3J0IGJicVBpZyBmcm9tICcuL2ltZ3MvcG5na2V5LmNvbS1iYXJiZWN1ZS1wbmctNzAzNDkyMi5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG1haW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYWluSW1nLnNyYyA9IEJicUltZ1xuXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ29JbWcuc3JjID0gYmJxUGlnO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gYFNtb2tleSdzIEJCUWBcbiAgICBcbiAgICBjb25zdCBwQ1RBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBDVEEuY2xhc3NMaXN0LmFkZCgncC1jdGEnKTtcbiAgICBwQ1RBLnRleHRDb250ZW50ID0gYEVhdCBsaWtlIGEgcmVhbCB0ZXhhbiFgO1xuXG4gICAgY29uc3QgcERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdwLWRlc2NyaXB0aW9uJylcbiAgICBwRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgU21va2VkIG1lYXRzIHRoYXQgbWFrZSB5b3VyIG1vdXRoIHdhdGVyLmA7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdEaXNjb3ZlciBNZW51JztcbiAgICBtZW51QnRuLm9uY2xpY2sgPSAoKSA9PiB7aGFuZGxlTmF2Q2xpY2soXCJtZW51XCIpfTtcblxuICAgIGNvbnN0IHNpZGVCYXJTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlQmFyU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyLXNsaWRlcicpO1xuXG4gICAgY29uc3QgZGl2TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkxlZnQuY2xhc3NMaXN0LmFkZCgnZGl2LWxlZnQnKTtcbiAgICBjb25zdCBkaXZSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Rpdi1yaWdodCcpO1xuICAgIGNvbnN0IGhvbWVQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlLWNvbnRhaW5lcicpO1xuXG4gICAgZGl2TGVmdC5hcHBlbmQobG9nb0ltZyxwQ1RBLCBoMSwgcERlc2NyaXB0aW9uLCBtZW51QnRuKTtcbiAgICBkaXZSaWdodC5hcHBlbmQobWFpbkltZyk7XG4gICAgaG9tZVBhZ2VDb250YWluZXIuYXBwZW5kKGRpdkxlZnQsIGRpdlJpZ2h0LCBzaWRlQmFyU2xpZGVyKTtcblxuICAgIHJldHVybiBob21lUGFnZUNvbnRhaW5lcjtcbn1cblxuXG4iLCJpbXBvcnQgYmJxSW1nMSBmcm9tICcuL2Zvb2QtaW1ncy9iYXJiZWN1ZS0zNjMxOC5wbmcnO1xuaW1wb3J0IGJicUltZzIgZnJvbSAnLi9mb29kLWltZ3MvYmFyYmVjdWUtMzYzNDgucG5nJztcbmltcG9ydCBiYnFJbWczIGZyb20gJy4vZm9vZC1pbWdzL2JhcmJlY3VlLTM2Mzg4LnBuZyc7XG5pbXBvcnQgYmJxSW1nNCBmcm9tICcuL2Zvb2QtaW1ncy9iYXJiZWN1ZS0zNjQ0MC5wbmcnO1xuaW1wb3J0IGJicUltZzUgZnJvbSAnLi9mb29kLWltZ3Mva2luZHBuZ18xMjEyMDg2LnBuZyc7XG5pbXBvcnQgYnVyZ2VySW1nMSBmcm9tICcuL2Zvb2QtaW1ncy9mYXN0LWZvb2QtcG5nLTQxNjAwLnBuZyc7XG5pbXBvcnQgYnVyZ2VySW1nMiBmcm9tICcuL2Zvb2QtaW1ncy9mYXN0LWZvb2QtcG5nLTQxNjAyLnBuZyc7XG5pbXBvcnQgYnVyZ2VySW1nMyBmcm9tICcuL2Zvb2QtaW1ncy9mb29kLXBuZy0yOTUzLnBuZyc7XG5pbXBvcnQgY2FrZUltZyBmcm9tICcuL2Zvb2QtaW1ncy9QbmdJdGVtXzYzMTY5NzMucG5nJztcbmltcG9ydCBpY29uIGZyb20gJy4vaWNvbnMvcmVzdGF1cmFudC5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuXG4gICAgZnVuY3Rpb24gbWVudUl0ZW0oaW1nLCBuYW1lLCBjb3N0LCBkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2l0ZW0taW1hZ2UnPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2ltZ30nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdpdGVtLWluZm8nPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz0naXRlbS10aXRsZSc+JHtuYW1lfSA8c3BhbiBjbGFzcz0naXRlbS1jb3N0Jz4kJHtjb3N0fTwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdpdGVtLWRlc2NyaXB0aW9uJz4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgICAgIHJldHVybiBpdGVtQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0xID0gbWVudUl0ZW0oYmJxSW1nMSwgJ0NoYXIgV29vZCBTbW9rZWQgS2ViYWJzJywgJzE5Ljk5JywgJ1RoZXNlIGp1aWN5IG1lYXRzIGFuZCBmcmVzaCB2ZWdldGFibGVzIHdlcmUgc2xvdyBjb29rZWQgd2l0aCBjaGFycmVkIGFwcGxlIHdvb2Qgc21va2UuJyk7XG4gICAgY29uc3QgaXRlbTIgPSBtZW51SXRlbShiYnFJbWcyLCAnVmVnZXRhYmxlcyBhbmQgU2F1c2FnZXMnLCAnMzUuOTknLCAnVmVnZXRhYmxlIGtlYmFicywgY29ybiwgYW5kIHNhdXNhZ2VzIGFsbCBncmlsbGVkIHdpdGggZnJlc2hseSBjdXQgYXBwbGUgd29vZC4nKTtcbiAgICBjb25zdCBpdGVtMyA9IG1lbnVJdGVtKGJicUltZzMsICdUZXhhbiBTdHlsZSBSaWJzJywgJzI0Ljk5JywgJ1RoZXNlIG92ZXJuaWdodCwgc2xvdyBjb29rZWQsIGRyaXBwaW5nIHdpdGggYmJxIHNhdWNlIHJpYnMgY29tZSB3aXRoIGEgc2lkZSBvZiBiZWFucywgc2Vhc29uZWQgZnJpZXMsIGFuZCBhIGxhcmdlIGRyaW5rLicpO1xuICAgIGNvbnN0IGl0ZW00ID0gbWVudUl0ZW0oYmJxSW1nNCwgJ0NoYXJlZCBDaGlwb3RsZSBXaW5ncycsICcxOS45OScsICdUaGVzZSB3aW5ncyB3ZXJlIGNoYXIgZ3JpbGxlZCBhbmQgZHJlbmNoZWQgaW4gY2hpcG90bGUgc2F1Y2UuJyk7XG4gICAgY29uc3QgaXRlbTUgPSBtZW51SXRlbShiYnFJbWc1LCAnQ2xhc3NpYyBUZXhhbiBCQlEgUGxhdGUnLCAnMTkuOTknLCAnQnJvd24gc3VnYXIgYmFrZWQgYmVhbnMsIGJ1dHRlcmVkIHNtYXNoZWQgcG90YXRvZXMsIDIgbGFyZ2UgdGV4YXMgdG9hc3RzLCBhbmQgYW4gYXNzb3J0bWVudCBvZiBzbW9rZWQgbWVhdHMuJyk7XG4gICAgY29uc3QgaXRlbTYgPSBtZW51SXRlbShidXJnZXJJbWcxLCAnVGV4YXMgU21hc2ggQnVyZ2VycycsICcxNS45OScsICdCdXJnZXJzIHdpdGggc21va2VkIGFuZCBncmlsbGVkIHBhdHRpZXMsIGZyaWVzIGNvb2tlZCBhbmQgc2Vhc29uZWQgdG8gcGVyZmVjdGlvbiwgYW5kIGEgdGV4YXMgc3R5bGVkIGhvdCBkb2cgd2l0aCBhbiBhcHBsZSB3b29kIGNoYXJyZWQgc2F1c2FnZS4nKTtcbiAgICBjb25zdCBpdGVtNyA9IG1lbnVJdGVtKGJ1cmdlckltZzIsICdNY1RleGFuJywgJzE5Ljk5JywgJ1RoaXMgdGV4YXMgdGFrZSBvbiB0aGUgTWNNYWMgaGFzIHR3byBwYXR0aWVzIHRoYXQgd2VyZSBzbG93IGNvb2tlZCBpbiBjaGVycnkgd29vZCBzbW9rZSwgc2F1c2VkIHdpdGggY2xhc3NpYyBCQlEgc2F1Y2UsIGFuZCB0b3BwZWQgb2Ygd2l0aCBvbmlvbnMsIHRvbWF0b3MsIGFuZCBwaWNrbGVzLicpO1xuICAgIGNvbnN0IGl0ZW04ID0gbWVudUl0ZW0oYnVyZ2VySW1nMywgJ01lYXQgTG92ZXJzIEJ1cmdlcicsICcxNS45OScsICdBIGJ1cmdlciB3aXRoIGdyaWxsZWQgYmFjb24sIGNoYXJyZWQgY2hpY2tlbiwgc21va2VkIGJlZWYgcGF0dGllcywgYW5kIGEgaGVhbHRoeSBkb3NlIG9mIHRleGFzIHNjb3VyY2VkIHNoYXJwIGNoZWRkYXIgY2hlZXNlLicpO1xuICAgIGNvbnN0IGl0ZW05ID0gbWVudUl0ZW0oY2FrZUltZywgJ1RleGFuIENha2UnLCAnMjkuOTknLCAnVGhpcyBUZXhhcyBjYWtlIGlzIHN0dWZmZWQgd2l0aCBmcmVzaGx5IGN1dCBzdHJhd2JlcnJpZXMsIG9yZ2FuaWMgdmFuaWxsYSwgYW5kIDEwMCUgdGV4YXMgZ3JvdW5kIG1pbGwgZmxvdXIuJyk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBtZW51SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgbWVudUhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMT5NZW51IDxzcGFuPjxpbWcgY2xhc3M9J21lbnUtaWNvbicgc3JjPSR7aWNvbn0+PC9zcGFuPjwvaDE+XG4gICAgYFxuXG4gICAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZChpdGVtMSwgaXRlbTIsIGl0ZW0zLCBpdGVtNCwgaXRlbTUsIGl0ZW02LCBpdGVtNywgaXRlbTgsIGl0ZW05KTtcbiAgICBtZW51LmFwcGVuZChtZW51SGVhZGVyLCBtZW51SXRlbXNDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBob21lUGFnZSBmcm9tIFwiLi9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmpzXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9wYWdlcy9tZW51LXBhZ2UvbWVudS5qc1wiO1xuaW1wb3J0IGNvbnRhY3RVcyBmcm9tIFwiLi9wYWdlcy9jb250YWN0LXVzLXBhZ2UvY29udGFjdC11cy5qc1wiO1xuaW1wb3J0IG5hdkJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5qc1wiO1xuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanNcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb250ZW50LmFwcGVuZChuYXZCYXIoKSwgaG9tZVBhZ2UoKSwgZm9vdGVyKCkpO1xuXG53aW5kb3cuaGFuZGxlTmF2Q2xpY2sgPSBmdW5jdGlvbihwYWdlKSB7XG4gICAgbG9hZFBhZ2UocGFnZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBsb2FkUGFnZShwYWdlKSB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgaWYgKHBhZ2UgPT09ICdob21lJykge1xuICAgICAgICBjb250ZW50LmFwcGVuZChuYXZCYXIoKSwgaG9tZVBhZ2UoKSwgZm9vdGVyKCkpO1xuICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ21lbnUnKSB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKG5hdkJhcigpLCBtZW51KCksIGZvb3RlcigpKTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICdjb250YWN0Jykge1xuICAgICAgICBjb250ZW50LmFwcGVuZChuYXZCYXIoKSwgY29udGFjdFVzKCksIGZvb3RlcigpKTtcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==