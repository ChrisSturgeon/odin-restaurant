/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./AverageSans-Regular.ttf */ \"./src/AverageSans-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Abel-Regular.ttf */ \"./src/Abel-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n\\tline-height: 1;\\n}\\nol, ul {\\n\\tlist-style: none;\\n}\\nblockquote, q {\\n\\tquotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\\n\\n/* My CSS */\\n\\n@font-face {\\n\\tfont-family: 'myFonts';\\n\\tsrc: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype'),\\n\\t\\turl(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('truetype');\\n\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody, button {\\n\\tfont-family: 'myFonts';\\n\\tbackground-color: #F3F2EE;\\n\\tcolor: rgb(95, 81, 81);\\n}\\n\\n.content {\\n  height: 100vh;\\n  width: 100vw;\\n  background-color: #F3F2EE;\\n\\tdisplay: grid;\\n\\tgrid-template-rows: 1fr 7fr 0.25fr;\\n}\\n\\n.header {\\n\\tdisplay: grid;\\n\\tpadding: 20px;\\n\\tgap: 20px;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tbackground-color: #D1CAC2;\\n\\tbox-shadow: 0px 3px 3px rgba(0,0,0,0.2)\\n}\\n\\n.title {\\n\\tfont-size: 3rem;\\n\\ttext-align: center;\\n}\\n\\n.headerMenu {\\n\\tdisplay: flex;\\n\\tjustify-items: center;\\n\\tgap: 50px;\\n}\\n\\n.menuBtn {\\n\\tbackground-color: #D1CAC2;\\n\\tborder: 2px solid #D1CAC2;\\n\\toutline: none;\\n\\tfont-size: 1.2rem;\\n}\\n\\n.menuBtnSelected {\\n\\tborder-bottom: 2px solid rgb(95, 81, 81);\\n}\\n\\n.menuBtn:hover {\\n\\tborder-bottom: 2px solid rgb(95, 81, 81);\\n}\\n\\n.homeBody, .aboutBody {\\n\\tdisplay: grid;\\n\\tgrid-template-rows: auto auto;\\n\\tjustify-items: center;\\n\\talign-items: center;\\n}\\n\\n.homeBody p, .aboutBody p {\\n\\tfont-size: 1.25rem;\\n\\ttext-align: center;\\n\\tline-height: 2rem;\\n}\\n\\n.homeBody img, .aboutBody img {\\n\\tmax-height: 60vh;\\n\\tbox-shadow: 0px 3px 15px rgba(0,0,0,0.2)\\n}\\n\\n.homeBody, .aboutBody {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tjustify-content: start;\\n\\tgap: 30px;\\n\\tpadding: 40px 15%;\\n}\\n\\n.menuBody {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tjustify-content: start;\\n\\tgap: 30px;\\n\\tpadding: 10px 25%;\\n}\\n\\n.menuOptions {\\n\\tdisplay: flex;\\n\\tpadding: 20px;\\n\\tgap: 10px;\\n}\\n\\n.menuOptions button {\\n\\tfont-size: 1.2rem;\\n\\tborder: 2px solid #D1CAC2;\\n\\tborder-radius: 5px;\\n\\tbackground-color:#D1CAC2;\\n\\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\\n}\\n\\n.menuOptions button:hover {\\n\\tfont-size: 1.2rem;\\n\\tborder: 2px solid rgb(95, 81, 81);\\n\\tborder-radius: 5px;\\n}\\n\\n.card {\\n\\tdisplay: grid;\\n\\tgrid-template-rows: repeat(4, auto);\\n\\ttext-align: center;\\n\\tgap: 15px;\\n\\tpadding: 10px 0px;\\n\\tcolor: rgb(95, 81, 81);\\n\\tborder: 1px solid #D8CBC3;\\n\\tbackground-color: #D1CAC2;\\n\\tbox-shadow: 0px 3px 15px rgba(0,0,0,0.2);\\n\\tborder-radius: 5px;\\n}\\n\\n.card h1 {\\n\\tfont-size: 2rem;\\n\\ttext-align: center;\\n}\\n\\n.card div:nth-of-type(2) {\\n\\tpadding: 5px;\\n}\\n\\n\\n.food > img {\\n\\theight: 100%;\\n\\twidth: 100%;\\n\\tobject-fit: contain;\\n}\\n\\nh2 {\\n\\tfont-size: 2rem;\\n\\tpadding: 10px 0px;\\n\\tbackground-color:rgb(95, 81, 81);\\n\\tcolor: #F3F2EE;\\n\\twidth: 100%;\\n\\ttext-align: center;\\n\\tborder-radius: 5px;\\n\\tbox-shadow: 0px 3px 15px rgba(0,0,0,0.2);\\n}\\n\\n\\n\\n\\n.contactBody {\\n\\n}\\n\\n\\n.footer {\\n\\tfont-size: 0.75rem;\\n\\ttext-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _images_owners_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/owners.jpeg */ \"./src/images/owners.jpeg\");\n\n\n// Creates about page body content \n\nfunction about() {\n  const body = document.getElementById('body');\n  body.innerHTML = '';\n  body.removeAttribute('class');\n  body.classList.add('aboutBody');\n  const description = document.createElement('p');\n\n  var text = \"Hi! We're Bartholomew and Tabitha. <br><br>\";\n  text += \"We quickly grew tired of the stereotypical zombie diet, \";\n  text += \"so decided to use our settlement money  to open Must Eat Grains - the world's first & only vegan zombie restaurant. \";\n  text += \"We work tirelessly to bring seasonal dishes to the undead community. Made only with the freshest ingredients sourced directly from our hand-selected pool of artisinal farms. \";\n  text += \"Here at Must Eat Grains we don't discriminate, the living are welcome too!\"\n\n  description.innerHTML = text;\n\n  body.appendChild(description);\n\n  const frame = document.createElement('div');\n  frame.classList.add('food');\n  const shot = document.createElement('img');\n  shot.src = _images_owners_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  frame.appendChild(shot);\n\n  body.appendChild(frame);\n}\n\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"base\": () => (/* binding */ base)\n/* harmony export */ });\n// Creates home page\n\nfunction base() {\n  const content = document.getElementById('content');\n  content.classList.add('content');\n\n  // Header\n  const header = document.createElement('div');\n  header.classList.add('header')\n\n  // Restaurant title\n  const title = document.createElement('h1');\n  title.classList.add('title');\n  title.textContent = 'Must Eat Grains';\n  header.appendChild(title);\n\n\n  // Header menu\n  const headerMenu = document.createElement('div');\n  headerMenu.classList.add('headerMenu');\n  const menuItems = ['home', 'menu', 'about', 'contact'];\n\n  for (var item of menuItems) {\n    var option = document.createElement('button');\n    option.textContent = item.slice(0, 1).toUpperCase() + item.slice(1);\n    option.setAttribute('id', `${item}`);\n    option.classList.add('menuBtn');\n    headerMenu.appendChild(option);\n  }\n\n  header.appendChild(headerMenu);\n\n  // Body \n  const body = document.createElement('div');\n  body.setAttribute('id', 'body');\n\n  // Footer\n  const footer = document.createElement('div');\n  footer.classList.add('footer')\n  footer.textContent = \"Footer placeholder text\";\n\n  // Append Content\n  content.appendChild(header);\n  content.appendChild(body);\n  content.appendChild(footer);\n  \n}\n\n\n\n//# sourceURL=webpack:///./src/base.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\n// Creates about contact body content \n\nfunction contact() {\n  const body = document.getElementById('body');\n  body.innerHTML = '';\n  const placeholder = document.createElement('div');\n  placeholder.innerText = \"Contact page content here...\"\n  body.appendChild(placeholder);\n  body.removeAttribute('class');\n  body.classList.add('contactBody');\n}\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _images_tofu_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/tofu.jpeg */ \"./src/images/tofu.jpeg\");\n\n\n\n\n// Creates home page body content \n\nfunction home() {\n  const body = document.getElementById('body');\n  body.innerHTML = '';\n  body.removeAttribute('class');\n  body.classList.add('homeBody');\n  const description = document.createElement('p');\n\n  var text = \"Must Eat Grains is the world's first vegan zombie restaurant. <br><br>\";\n  text += \"We only serve ethically, locally sourced organic produce to ensure your body gets the nutrients it needs to last forever. \";\n  text += \"Human flesh is available year-round but unfortunately not all fruits and vegetables are too. That's why we regularly change our menu to adapt to the seasons \";\n  text += \"and use innovative cooking methods to get the most from our ingredients.\";\n  description.innerHTML = text;\n\n\n\n  body.appendChild(description);\n\n  const frame = document.createElement('div');\n  frame.classList.add('food');\n  const shot = document.createElement('img');\n  shot.src = _images_tofu_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  frame.appendChild(shot);\n\n  body.appendChild(frame);\n\n\n\n\n}\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ \"./src/base.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n\n\n\n(0,_base_js__WEBPACK_IMPORTED_MODULE_1__.base)();\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)();\n\n// Add Event Listeners\n\nconst homeBtn = document.getElementById('home');\nhomeBtn.classList.add('menuBtnSelected');\nhomeBtn.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_2__.home);\nhomeBtn.addEventListener('click', underline);\n\nconst menuBtn = document.getElementById('menu');\nmenuBtn.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_3__.menu);\nmenuBtn.addEventListener('click', underline);\n\nconst aboutBtn = document.getElementById('about');\naboutBtn.addEventListener('click', _about_js__WEBPACK_IMPORTED_MODULE_4__.about);\naboutBtn.addEventListener('click', underline);\n\nconst contactBtn = document.getElementById('contact');\ncontactBtn.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_5__.contact)\ncontactBtn.addEventListener('click', underline)\n\n\n// Page styling functions\n\n// Underlines active tab in menu\nfunction underline (event) {\n  const buttons = document.querySelectorAll('button');\n  buttons.forEach(e => {\n    e.classList.remove('menuBtnSelected')\n  });\n  const btn = event.target;\n  btn.classList.add('menuBtnSelected');\n};\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _home_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.jpeg */ \"./src/home.jpeg\");\n/* harmony import */ var _images_roastedCarrots_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/roastedCarrots.jpeg */ \"./src/images/roastedCarrots.jpeg\");\n/* harmony import */ var _images_bread_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bread.jpeg */ \"./src/images/bread.jpeg\");\n/* harmony import */ var _images_farfalle_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/farfalle.jpeg */ \"./src/images/farfalle.jpeg\");\n/* harmony import */ var _images_tofu_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/tofu.jpeg */ \"./src/images/tofu.jpeg\");\n/* harmony import */ var _images_cabbage_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/cabbage.jpeg */ \"./src/images/cabbage.jpeg\");\n/* harmony import */ var _images_shots_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/shots.jpeg */ \"./src/images/shots.jpeg\");\n/* harmony import */ var _images_moose_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/moose.jpeg */ \"./src/images/moose.jpeg\");\n/* harmony import */ var _images_brownies_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/brownies.jpeg */ \"./src/images/brownies.jpeg\");\n/* harmony import */ var _images_coffee_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/coffee.jpeg */ \"./src/images/coffee.jpeg\");\n/* harmony import */ var _images_mint_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/mint.jpeg */ \"./src/images/mint.jpeg\");\n/* harmony import */ var _images_mary_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/mary.jpeg */ \"./src/images/mary.jpeg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction menu() {\n  const body = document.getElementById('body');\n  body.innerHTML = '';\n  body.removeAttribute('class');\n  body.classList.add('menuBody')\n\n  const courses = document.createElement('div');\n  courses.classList.add('menuOptions');\n  \n  const titles = ['Starters', 'Mains', 'Desserts', 'Drinks'];\n\n  for (var title of titles) {\n    var btn = document.createElement('button');\n    btn.innerText = title;\n    btn.setAttribute('id', `btn${title}`);\n    courses.appendChild(btn);\n  }\n  body.appendChild(courses);\n\n  createTitle('starters');\n\n  createCard('Armpit Roasted Carrots', _images_roastedCarrots_jpeg__WEBPACK_IMPORTED_MODULE_1__,\n   'All our staff sleep with a carrot in each armpit every night to produce this delicious slow-roasted starter. Garnished with a deconstructed non-gmo orange.', 14);\n  createCard('Air-dryed bread', _images_bread_jpeg__WEBPACK_IMPORTED_MODULE_2__, \"We hang this bread in  the alleyway for three weeks before serving to make sure it has our signature 'snap'. Served without butter or water.\", 7);\n  createCard(\"Nonna's Antipasto (Thursday only)\", _images_farfalle_jpeg__WEBPACK_IMPORTED_MODULE_3__, \"As part of our outreach intitative, every Thursday we bus in some Italian grandmothers from the nearby nursing home to hand-craft this absoutely scrumpcious dish. Drizzled with a pinenut and basil pesto.\", 13)\n  \n  createTitle('mains');\n\n  createCard('Vegetable Fiesta', _home_jpeg__WEBPACK_IMPORTED_MODULE_0__, \"The dish that started it all. Grown by mute monks, these vegetables have been regularly blessed to ensure they're bursting with flavour.\", 15);\n\n  createCard('Tasty Tofu', _images_tofu_jpeg__WEBPACK_IMPORTED_MODULE_4__, \"Think tofu is proper rank? You won't after this! All the soy beans are harvested from a single plant on the Altiplano plains in Peru to create the most delicate, uniform texture.\", 14);\n\n  createCard('Raw Brussels Sprouts', _images_cabbage_jpeg__WEBPACK_IMPORTED_MODULE_5__, 'One for the sadists.', 5)\n\n  createTitle('desserts');\n\n  createCard('Shots! Shots! Shots!', _images_shots_jpeg__WEBPACK_IMPORTED_MODULE_6__, \"Shots are always a good idea. Especially when they're a medley of classic desserts.\", 9);\n\n  createCard('Moose mousse blocks', _images_moose_jpeg__WEBPACK_IMPORTED_MODULE_7__, \"Rescued heritage-breed moose/meese/mooses are used to power our vegan-cream-whipping-machine&#8482. We then mix the cream with dessicated strawberries before it's flash-frozen to produce these delectable, fruity blocks.\", 11)\n\n  createCard('Vegan Brownies', _images_brownies_jpeg__WEBPACK_IMPORTED_MODULE_8__, \"Since amendment 12.8 to the 1979 UK Statue on Restaurant Puddings every restaurant establishment has been required by law to offer brownies for dessert - no matter how dry and uninspired they are. Here's our vegan version.\", 10);\n\n  createTitle('drinks');\n\n  createCard('Flat-out white', _images_coffee_jpeg__WEBPACK_IMPORTED_MODULE_9__, \"You know the deal. Drink it and do things quickly. Made with gluten-free, lactose-negative skinny oat milk.\", 2.50);\n\n  createCard('Minty Mule', _images_mint_jpeg__WEBPACK_IMPORTED_MODULE_10__, \"Brimmed with organic toilet-tequila from the local prison this mule packs a minty punch. Served in a glass jar with a bio-degradeable sweetcorn straw to justify the price.\", 9);\n\n  createCard('Oh, Bloody Hell Mary!', _images_mary_jpeg__WEBPACK_IMPORTED_MODULE_11__, \"The perfect drink if you're still feeling rough from last night, or fancy feeling awful tomorrow. Juice made with vine-ripened tomatoes from our own greenhouse.\", 10);\n\n\n\n  document.getElementById('btnStarters').addEventListener('click', () => {scrollTo('starters')});\n  document.getElementById('btnMains').addEventListener('click', () => {scrollTo('mains')});\n  document.getElementById('btnDesserts').addEventListener('click', () => {scrollTo('desserts')});\n  document.getElementById('btnDrinks').addEventListener('click', () => {scrollTo('drinks')});\n  upBtn();\n\n}\n\nfunction createCard(title, imageSrc, explanation, price) {\n  const body = document.getElementById('body');\n  const card = document.createElement('div');\n  card.classList.add('card');\n\n  var header = document.createElement('h1');\n  header.textContent = title;\n\n  var picture = document.createElement('div');\n  picture.classList.add('food')\n  const shot = document.createElement('img');\n  shot.src = imageSrc;\n  picture.appendChild(shot);\n\n  var description = document.createElement('div');\n  description.innerHTML =  explanation;\n\n  var value = document.createElement('div');\n  value.textContent = `£${price}`\n\n  card.appendChild(header);\n  card.appendChild(picture);\n  card.appendChild(description);\n  card.appendChild(value);\n  body.appendChild(card);\n}\n\nfunction createTitle(course) {\n  var title = document.createElement('h2');\n  title.textContent = course.slice(0, 1).toUpperCase() + course.slice(1);\n  title.setAttribute('Id', `${course}`);\n  body.appendChild(title);\n}\n\nfunction scrollTo(section) {\n  document.getElementById(`${section}`).scrollIntoView();\n}\n\nfunction upBtn() {\n  const body = document.getElementById('body');\n  var upBtn = document.createElement('button');\n  upBtn.textContent = \"Return to top\";\n  body.appendChild(upBtn);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/Abel-Regular.ttf":
/*!******************************!*\
  !*** ./src/Abel-Regular.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3843f456cf56d275baf6.ttf\";\n\n//# sourceURL=webpack:///./src/Abel-Regular.ttf?");

/***/ }),

/***/ "./src/AverageSans-Regular.ttf":
/*!*************************************!*\
  !*** ./src/AverageSans-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"60200f53e146c8235215.ttf\";\n\n//# sourceURL=webpack:///./src/AverageSans-Regular.ttf?");

/***/ }),

/***/ "./src/home.jpeg":
/*!***********************!*\
  !*** ./src/home.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7867fe0c492cfe355f6b.jpeg\";\n\n//# sourceURL=webpack:///./src/home.jpeg?");

/***/ }),

/***/ "./src/images/bread.jpeg":
/*!*******************************!*\
  !*** ./src/images/bread.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"78039df5974c05d3fd12.jpeg\";\n\n//# sourceURL=webpack:///./src/images/bread.jpeg?");

/***/ }),

/***/ "./src/images/brownies.jpeg":
/*!**********************************!*\
  !*** ./src/images/brownies.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8b114e09bcba647c1af.jpeg\";\n\n//# sourceURL=webpack:///./src/images/brownies.jpeg?");

/***/ }),

/***/ "./src/images/cabbage.jpeg":
/*!*********************************!*\
  !*** ./src/images/cabbage.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ad54853d1a4f1aa4591.jpeg\";\n\n//# sourceURL=webpack:///./src/images/cabbage.jpeg?");

/***/ }),

/***/ "./src/images/coffee.jpeg":
/*!********************************!*\
  !*** ./src/images/coffee.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c0f111f475acd4665a1.jpeg\";\n\n//# sourceURL=webpack:///./src/images/coffee.jpeg?");

/***/ }),

/***/ "./src/images/farfalle.jpeg":
/*!**********************************!*\
  !*** ./src/images/farfalle.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"df6ecb67871533190b1a.jpeg\";\n\n//# sourceURL=webpack:///./src/images/farfalle.jpeg?");

/***/ }),

/***/ "./src/images/mary.jpeg":
/*!******************************!*\
  !*** ./src/images/mary.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0151df1b612594902a10.jpeg\";\n\n//# sourceURL=webpack:///./src/images/mary.jpeg?");

/***/ }),

/***/ "./src/images/mint.jpeg":
/*!******************************!*\
  !*** ./src/images/mint.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8594a16683c0c7434f2f.jpeg\";\n\n//# sourceURL=webpack:///./src/images/mint.jpeg?");

/***/ }),

/***/ "./src/images/moose.jpeg":
/*!*******************************!*\
  !*** ./src/images/moose.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8cabfa79b6d08b1d63c1.jpeg\";\n\n//# sourceURL=webpack:///./src/images/moose.jpeg?");

/***/ }),

/***/ "./src/images/owners.jpeg":
/*!********************************!*\
  !*** ./src/images/owners.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8381d8a42ebb9af5cb1.jpeg\";\n\n//# sourceURL=webpack:///./src/images/owners.jpeg?");

/***/ }),

/***/ "./src/images/roastedCarrots.jpeg":
/*!****************************************!*\
  !*** ./src/images/roastedCarrots.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9feb730406112bb4f2e6.jpeg\";\n\n//# sourceURL=webpack:///./src/images/roastedCarrots.jpeg?");

/***/ }),

/***/ "./src/images/shots.jpeg":
/*!*******************************!*\
  !*** ./src/images/shots.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"27f5dc1a50d06710e0bb.jpeg\";\n\n//# sourceURL=webpack:///./src/images/shots.jpeg?");

/***/ }),

/***/ "./src/images/tofu.jpeg":
/*!******************************!*\
  !*** ./src/images/tofu.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2acedd4ac4b34a8a52ac.jpeg\";\n\n//# sourceURL=webpack:///./src/images/tofu.jpeg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;