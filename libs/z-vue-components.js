(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ZVueComponents"] = factory();
	else
		root["ZVueComponents"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Aside = __webpack_require__(1);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
	var _Button = __webpack_require__(8);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Dropmenu = __webpack_require__(13);
	
	var _Dropmenu2 = _interopRequireDefault(_Dropmenu);
	
	var _ImageInput = __webpack_require__(18);
	
	var _ImageInput2 = _interopRequireDefault(_ImageInput);
	
	var _InputNumber = __webpack_require__(23);
	
	var _InputNumber2 = _interopRequireDefault(_InputNumber);
	
	var _Modal = __webpack_require__(28);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Navbar = __webpack_require__(33);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Pagination = __webpack_require__(38);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _Progress = __webpack_require__(43);
	
	var _Progress2 = _interopRequireDefault(_Progress);
	
	var _Switch = __webpack_require__(48);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _Table = __webpack_require__(53);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var install = function install(Vue) {
	  Vue.component(Alert.name, zAlert);
	  Vue.component(Button.name, _Button2.default);
	  Vue.component(_Dropmenu2.default.name, _Dropmenu2.default);
	  Vue.component(_ImageInput2.default.name, _ImageInput2.default);
	  Vue.component(_InputNumber2.default.name, _InputNumber2.default);
	  Vue.component(_Modal2.default.name, _Modal2.default);
	  Vue.component(_Navbar2.default.name, _Navbar2.default);
	  Vue.component(_Pagination2.default.name, _Pagination2.default);
	  Vue.component(_Progress2.default.name, _Progress2.default);
	  Vue.component(_Switch2.default.name, _Switch2.default);
	  Vue.component(_Table2.default.name, _Table2.default);
	};
	
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	};
	
	var ZVueComponents = {
	  install: install,
	
	  zAside: _Aside2.default,
	  zButton: _Button2.default,
	  zDropmenu: _Dropmenu2.default,
	  zImageinput: _ImageInput2.default,
	  zInputnumber: _InputNumber2.default,
	  zModal: _Modal2.default,
	  zNavbar: _Navbar2.default,
	  zPagination: _Pagination2.default,
	  zProgress: _Progress2.default,
	  zSwitch: _Switch2.default,
	  zTable: _Table2.default
	};
	
	module.exports = ZVueComponents;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(2)
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Aside.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-336463c6"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-336463c6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-336463c6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Aside.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-336463c6&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-336463c6&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.z-supernatant[data-v-336463c6] {\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .5);\n  display: table;\n  transition: all .3s ease;\n}\n.z-aside-slide-enter[data-v-336463c6], .z-aside-slide-leave-active[data-v-336463c6] {\n  background-color: rgba(0, 0, 0, 0);\n}\n.z-aside[data-v-336463c6] {\n  background-color: white;\n  position: fixed;\n  transition: all .3s ease;\n}\n.z-aside-left[data-v-336463c6] {\n  height: 100%;\n  left: 0;\n}\n.z-aside-right[data-v-336463c6] {\n  height: 100%;\n  right: 0;\n}\n.z-aside-top[data-v-336463c6] {\n  width: 100%;\n  top: 0;\n}\n.z-aside-bottom[data-v-336463c6] {\n  width: 100%;\n  bottom: 0;\n}\n@media screen and (max-width: 768px) {\n.z-aside-left[data-v-336463c6] {\n    width: 100%;\n}\n.z-aside-slide-enter .z-aside-left[data-v-336463c6], .z-aside-slide-leave-active .z-aside-left[data-v-336463c6] {\n    left: -100%;\n}\n.z-aside-right[data-v-336463c6] {\n    width: 100%;\n}\n.z-aside-slide-enter .z-aside-right[data-v-336463c6], .z-aside-slide-leave-active .z-aside-right[data-v-336463c6] {\n    right: -100%;\n}\n.z-aside-top[data-v-336463c6] {\n    height: 100%;\n}\n.z-aside-slide-enter .z-aside-top[data-v-336463c6], .z-aside-slide-leave-active .z-aside-top[data-v-336463c6] {\n    top: -100%;\n}\n.z-aside-bottom[data-v-336463c6] {\n    height: 100%;\n}\n.z-aside-slide-enter .z-aside-bottom[data-v-336463c6], .z-aside-slide-leave-active .z-aside-bottom[data-v-336463c6] {\n    bottom: -100%;\n}\n}\n@media screen and (min-width: 768px) {\n.z-aside-left[data-v-336463c6] {\n    width: 300px;\n}\n.z-aside-slide-enter .z-aside-left[data-v-336463c6], .z-aside-slide-leave-active .z-aside-left[data-v-336463c6] {\n    left: -300px;\n}\n.z-aside-right[data-v-336463c6] {\n    width: 300px;\n}\n.z-aside-slide-enter .z-aside-right[data-v-336463c6], .z-aside-slide-leave-active .z-aside-right[data-v-336463c6] {\n    right: -300px;\n}\n.z-aside-top[data-v-336463c6] {\n    height: 300px;\n}\n.z-aside-slide-enter .z-aside-top[data-v-336463c6], .z-aside-slide-leave-active .z-aside-top[data-v-336463c6] {\n    top: -300px;\n}\n.z-aside-bottom[data-v-336463c6] {\n    height: 300px;\n}\n.z-aside-slide-enter .z-aside-bottom[data-v-336463c6], .z-aside-slide-leave-active .z-aside-bottom[data-v-336463c6] {\n    bottom: -300px;\n}\n}\n.z-aside-title[data-v-336463c6] {\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.z-aside-content[data-v-336463c6] {\n  width: 100%;\n  overflow: auto;\n  position: absolute;\n  top: 44px;\n  bottom: 44px;\n  padding: 10px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.z-aside-footer[data-v-336463c6] {\n  height: 44px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  border-top: 1px solid #ccc;\n  background-color: #fff;\n}\n.z-btn-aside[data-v-336463c6] {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  line-height: 44px;\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/Aside.vue?28f08ef0"],"names":[],"mappings":";AAiDA;EACA,gBAAA;EACA,cAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;EACA,oCAAA;EACA,eAAA;EACA,yBAAA;CACA;AAEA;EACA,mCAAA;CACA;AAEA;EACA,wBAAA;EACA,gBAAA;EACA,yBAAA;CACA;AAEA;EACA,aAAA;EACA,QAAA;CACA;AAEA;EACA,aAAA;EACA,SAAA;CACA;AAEA;EACA,YAAA;EACA,OAAA;CACA;AAEA;EACA,YAAA;EACA,UAAA;CACA;AACA;AACA;IACA,YAAA;CACA;AACA;IACA,YAAA;CACA;AAEA;IACA,YAAA;CACA;AACA;IACA,aAAA;CACA;AAEA;IACA,aAAA;CACA;AACA;IACA,WAAA;CACA;AAEA;IACA,aAAA;CACA;AACA;IACA,cAAA;CACA;CACA;AAEA;AACA;IACA,aAAA;CACA;AACA;IACA,aAAA;CACA;AAEA;IACA,aAAA;CACA;AACA;IACA,cAAA;CACA;AAEA;IACA,cAAA;CACA;AACA;IACA,YAAA;CACA;AAEA;IACA,cAAA;CACA;AACA;IACA,eAAA;CACA;CACA;AAEA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,OAAA;EACA,YAAA;CACA;AAEA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,UAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,uBAAA;CACA;AAEA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,UAAA;EACA,2BAAA;EACA,uBAAA;CACA;AAEA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;CACA","file":"Aside.vue","sourcesContent":["<template lang=\"html\">\n  <transition name=\"z-aside-slide\">\n    <div class=\"z-supernatant\" v-show=\"show\">\n      <transition>\n        <div class=\"z-aside\" v-show=\"show\" :class=\"'z-aside-' + type\">\n          <div class=\"z-aside-title\" v-if=\"title\">\n            {{title}}\n          </div>\n          <div class=\"z-aside-content\">\n            <slot></slot>\n          </div>\n          <div class=\"z-aside-footer\">\n            <a class=\"z-btn-aside\" @click=\"closeAside\">{{close}}</a>\n          </div>\n        </div>\n      </transition>\n    </div>\n  </transition>\n</template>\n\n<script>\nexport default {\n  name: 'z-aside',\n  props: {\n    show: {\n      type: Boolean,\n      required: true\n    },\n    close: {\n      type: String,\n      default: \"关闭\"\n    },\n    title: {\n      type: String\n    },\n    type: {\n      type: String,\n      default: \"left\"\n    }\n  },\n  methods: {\n    closeAside: function() {\n      this.$emit('close-aside')\n    }\n  }\n};\n</script>\n\n<style lang=\"css\" scoped>\n.z-supernatant {\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .5);\n  display: table;\n  transition: all .3s ease;\n}\n\n.z-aside-slide-enter, .z-aside-slide-leave-active {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.z-aside {\n  background-color: white;\n  position: fixed;\n  transition: all .3s ease;\n}\n\n.z-aside-left {\n  height: 100%;\n  left: 0;\n}\n\n.z-aside-right {\n  height: 100%;\n  right: 0;\n}\n\n.z-aside-top {\n  width: 100%;\n  top: 0;\n}\n\n.z-aside-bottom {\n  width: 100%;\n  bottom: 0;\n}\n@media screen and (max-width: 768px) {\n  .z-aside-left {\n    width: 100%;\n  }\n  .z-aside-slide-enter .z-aside-left, .z-aside-slide-leave-active .z-aside-left {\n    left: -100%;\n  }\n\n  .z-aside-right {\n    width: 100%;\n  }\n  .z-aside-slide-enter .z-aside-right, .z-aside-slide-leave-active .z-aside-right {\n    right: -100%;\n  }\n\n  .z-aside-top {\n    height: 100%;\n  }\n  .z-aside-slide-enter .z-aside-top, .z-aside-slide-leave-active .z-aside-top {\n    top: -100%;\n  }\n\n  .z-aside-bottom {\n    height: 100%;\n  }\n  .z-aside-slide-enter .z-aside-bottom, .z-aside-slide-leave-active .z-aside-bottom {\n    bottom: -100%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .z-aside-left {\n    width: 300px;\n  }\n  .z-aside-slide-enter .z-aside-left, .z-aside-slide-leave-active .z-aside-left {\n    left: -300px;\n  }\n\n  .z-aside-right {\n    width: 300px;\n  }\n  .z-aside-slide-enter .z-aside-right, .z-aside-slide-leave-active .z-aside-right {\n    right: -300px;\n  }\n\n  .z-aside-top {\n    height: 300px;\n  }\n  .z-aside-slide-enter .z-aside-top, .z-aside-slide-leave-active .z-aside-top {\n    top: -300px;\n  }\n\n  .z-aside-bottom {\n    height: 300px;\n  }\n  .z-aside-slide-enter .z-aside-bottom, .z-aside-slide-leave-active .z-aside-bottom {\n    bottom: -300px;\n  }\n}\n\n.z-aside-title {\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.z-aside-content {\n  width: 100%;\n  overflow: auto;\n  position: absolute;\n  top: 44px;\n  bottom: 44px;\n  padding: 10px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\n.z-aside-footer {\n  height: 44px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  border-top: 1px solid #ccc;\n  background-color: #fff;\n}\n\n.z-btn-aside {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  line-height: 44px;\n  cursor: pointer;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-aside',
	  props: {
	    show: {
	      type: Boolean,
	      required: true
	    },
	    close: {
	      type: String,
	      default: "关闭"
	    },
	    title: {
	      type: String
	    },
	    type: {
	      type: String,
	      default: "left"
	    }
	  },
	  methods: {
	    closeAside: function closeAside() {
	      this.$emit('close-aside');
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('transition', {
	    attrs: {
	      "name": "z-aside-slide"
	    }
	  }, [_vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "z-supernatant"
	  }, [_vm._h('transition', [_vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "z-aside",
	    class: 'z-aside-' + _vm.type
	  }, [(_vm.title) ? _vm._h('div', {
	    staticClass: "z-aside-title"
	  }, ["\n          " + _vm._s(_vm.title) + "\n        "]) : _vm._e(), " ", _vm._h('div', {
	    staticClass: "z-aside-content"
	  }, [_vm._t("default")]), " ", _vm._h('div', {
	    staticClass: "z-aside-footer"
	  }, [_vm._h('a', {
	    staticClass: "z-btn-aside",
	    on: {
	      "click": _vm.closeAside
	    }
	  }, [_vm._s(_vm.close)])])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-336463c6", module.exports)
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(9)
	
	/* script */
	__vue_exports__ = __webpack_require__(11)
	
	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2f80a794"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2f80a794", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2f80a794", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Button.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-2f80a794&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Button.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-2f80a794&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.z-btn[data-v-2f80a794] {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.z-btn[data-v-2f80a794]:focus {\n  outline: none;\n}\n.z-btn[data-v-2f80a794]:active {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n  box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n}\n.z-btn-default[data-v-2f80a794] {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.z-btn-default[data-v-2f80a794]:hover {\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.z-btn-primary[data-v-2f80a794] {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd;\n}\n.z-btn-primary[data-v-2f80a794]:hover {\n  background-color: #3071a9;\n  border-color: #285e8e;\n}\n.z-btn-success[data-v-2f80a794] {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.z-btn-success[data-v-2f80a794]:hover {\n  background-color: #449d44;\n  border-color: #398439;\n}\n.z-btn-info[data-v-2f80a794] {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.z-btn-info[data-v-2f80a794]:hover {\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.z-btn-warning[data-v-2f80a794] {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.z-btn-warning[data-v-2f80a794]:hover {\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.z-btn-danger[data-v-2f80a794] {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.z-btn-danger[data-v-2f80a794]:hover {\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n", "", {"version":3,"sources":["/./src/components/Button.vue?e3c552ac"],"names":[],"mappings":";AAqBA;EACA,sBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,wBAAA;EACA,mBAAA;EACA,oBAAA;EACA,uBAAA;EACA,+BAAA;EACA,2BAAA;EACA,gBAAA;EACA,0BAAA;EACA,uBAAA;EACA,sBAAA;EACA,kBAAA;EACA,uBAAA;EACA,8BAAA;EACA,mBAAA;CACA;AACA;EACA,cAAA;CACA;AACA;EACA,qDAAA;EACA,6CAAA;CACA;AAEA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;CACA;AACA;EACA,0BAAA;EACA,sBAAA;CACA;AAEA;EACA,YAAA;EACA,0BAAA;EACA,sBAAA;CACA;AACA;EACA,0BAAA;EACA,sBAAA;CACA;AAEA;EACA,YAAA;EACA,0BAAA;EACA,sBAAA;CACA;AACA;EACA,0BAAA;EACA,sBAAA;CACA;AAEA;EACA,YAAA;EACA,0BAAA;EACA,sBAAA;CACA;AACA;EACA,0BAAA;EACA,sBAAA;CACA;AAEA;EACA,YAAA;EACA,0BAAA;EACA,sBAAA;CACA;AACA;EACA,0BAAA;EACA,sBAAA;CACA;AAEA;EACA,YAAA;EACA,0BAAA;EACA,sBAAA;CACA;AACA;EACA,0BAAA;EACA,sBAAA;CACA","file":"Button.vue","sourcesContent":["<template lang=\"html\">\n  <a :class=\"'z-btn z-btn-' + type\">{{text}}</a>\n</template>\n\n<script>\nexport default {\n  name: 'z-button',\n  props: {\n    text: {\n      type: String,\n      required: true\n    },\n    type: {\n      type: String,\n      default: \"default\"\n    }\n  }\n};\n</script>\n\n<style lang=\"css\" scoped>\n.z-btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.z-btn:focus {\n  outline: none;\n}\n.z-btn:active {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n  box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n}\n\n.z-btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.z-btn-default:hover {\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.z-btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd;\n}\n.z-btn-primary:hover {\n  background-color: #3071a9;\n  border-color: #285e8e;\n}\n\n.z-btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.z-btn-success:hover {\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.z-btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.z-btn-info:hover {\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.z-btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.z-btn-warning:hover {\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.z-btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.z-btn-danger:hover {\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-button',
	  props: {
	    text: {
	      type: String,
	      required: true
	    },
	    type: {
	      type: String,
	      default: "default"
	    }
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('a', {
	    class: 'z-btn z-btn-' + _vm.type
	  }, [_vm._s(_vm.text)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2f80a794", module.exports)
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(14)
	
	/* script */
	__vue_exports__ = __webpack_require__(16)
	
	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Dropmenu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4d56fcb0"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4d56fcb0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4d56fcb0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Dropmenu.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-4d56fcb0&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Dropmenu.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-4d56fcb0&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Dropmenu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.z-dropmenu-title[data-v-4d56fcb0] {\n  cursor: pointer;\n  position: relative;\n}\n.z-dropmenu-title>a[data-v-4d56fcb0] {\n  display: block;\n  color: #34495e;\n}\n.z-dropmenu-arrow[data-v-4d56fcb0] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -1px;\n  margin-left: 6px;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 5px solid #ccc;\n}\n.z-dropmenu[data-v-4d56fcb0] {\n  position: absolute;\n  z-index: 9999;\n  top: 100%;\n  left: 0;\n  background-color: #fff;\n  padding: 10px 0;\n  border: 1px solid #ddd;\n  border-bottom-color: #ccc;\n  text-align: left;\n  border-radius: 4px;\n  overflow: hidden;\n  transition: all .3s ease;\n}\n.z-dropmenu-show-enter-active[data-v-4d56fcb0],.z-dropmenu-show-leave-active[data-v-4d56fcb0] {\n  top: 100%\n}\n.z-dropmenu-show-enter[data-v-4d56fcb0],.z-dropmenu-show-leave-active[data-v-4d56fcb0] {\n  top: 50%;\n  opacity: 0;\n}\n.z-dropmenu li[data-v-4d56fcb0] {\n  list-style: none;\n  line-height: 1.8em;\n  white-space:nowrap;\n}\n.z-dropmenu li a[data-v-4d56fcb0] {\n  color: #7f8c8d;\n  font-size: 0.9em;\n  display: block;\n  padding: 0 30px 0 20px;\n}\n.z-dropmenu li a[data-v-4d56fcb0]:hover {\n  color: rgb(65, 184, 131);\n}\n", "", {"version":3,"sources":["/./src/components/Dropmenu.vue?01f2311e"],"names":[],"mappings":";AAoFA;EACA,gBAAA;EACA,mBAAA;CACA;AACA;EACA,eAAA;EACA,eAAA;CACA;AACA;EACA,sBAAA;EACA,uBAAA;EACA,iBAAA;EACA,iBAAA;EACA,SAAA;EACA,UAAA;EACA,mCAAA;EACA,oCAAA;EACA,2BAAA;CACA;AACA;EACA,mBAAA;EACA,cAAA;EACA,UAAA;EACA,QAAA;EACA,uBAAA;EACA,gBAAA;EACA,uBAAA;EACA,0BAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;EACA,yBAAA;CACA;AACA;EACA,SAAA;CACA;AACA;EACA,SAAA;EACA,WAAA;CACA;AACA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;CACA;AACA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;EACA,uBAAA;CACA;AACA;EACA,yBAAA;CACA","file":"Dropmenu.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"z-dropmenu-wraper\">\n    <div class=\"z-dropmenu-title\" v-if=\"type=='click'\">\n      <a @click=\"toggleDropMenu\">{{text}}<span class=\"z-dropmenu-arrow\" v-if=\"isShowArrow\"></span></a>\n      <transition name=\"z-dropmenu-show\">\n        <ul class=\"z-dropmenu\" v-show=\"isShow\">\n          <li v-for=\"li in lis\"><a :href=\"li.href\" @click=\"closeDropMenu\">{{li.text}}</a></li>\n        </ul>\n      </transition>\n    </div>\n    <div v-else class=\"z-dropmenu-title\" @mouseover=\"showDropMenu\" @mouseleave=\"closeDropMenu\">\n      <a>{{text}}<span class=\"z-dropmenu-arrow\" v-if=\"isShowArrow\"></span></a>\n      <transition name=\"z-dropmenu-show\">\n        <ul class=\"z-dropmenu\" v-show=\"isShow\">\n          <li v-for=\"li in lis\"><a :href=\"li.href\" @click=\"closeDropMenu\">{{li.text}}</a></li>\n        </ul>\n      </transition>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'z-dropmenu',\n  data() {\n    return {\n      isShow: false\n    }\n  },\n  props: {\n    type: {\n      type: String,\n      default: \"click\"\n    },\n    text: {\n      type: String,\n      required: true\n    },\n    lis: {\n      type: Array,\n      required: true\n    },\n    isShowArrow: {\n      type: Boolean,\n      default: false\n    }\n  },\n  watch: {\n    \"isShow\": function(newVal,oldVal) {\n      newVal ? this.clickCloseBind() : this.clickCloseOff()\n    }\n  },\n  methods: {\n    toggleDropMenu() {\n      event.preventDefault()\n      event.stopPropagation()\n      this.isShow = !this.isShow\n    },\n    showDropMenu() {\n      this.isShow = true\n    },\n    closeDropMenu() {\n      this.isShow = false\n    },\n    clickClose(event) {\n      event.preventDefault()\n      event.stopPropagation()\n      if (event.target.parentNode !== this.$el && event.target.parentNode.parentNode !== this.$el) {\n        this.closeDropMenu()\n      }\n    },\n    clickCloseBind() {\n      let self = this\n      this.$root.$el.addEventListener(\"click\",self.clickClose)\n    },\n    clickCloseOff() {\n      let self = this\n      this.$root.$el.removeEventListener(\"click\",self.clickClose)\n    }\n  }\n}\n</script>\n\n<style lang=\"css\" scoped>\n.z-dropmenu-title {\n  cursor: pointer;\n  position: relative;\n}\n.z-dropmenu-title>a {\n  display: block;\n  color: #34495e;\n}\n.z-dropmenu-arrow {\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -1px;\n  margin-left: 6px;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 5px solid #ccc;\n}\n.z-dropmenu {\n  position: absolute;\n  z-index: 9999;\n  top: 100%;\n  left: 0;\n  background-color: #fff;\n  padding: 10px 0;\n  border: 1px solid #ddd;\n  border-bottom-color: #ccc;\n  text-align: left;\n  border-radius: 4px;\n  overflow: hidden;\n  transition: all .3s ease;\n}\n.z-dropmenu-show-enter-active,.z-dropmenu-show-leave-active {\n  top: 100%\n}\n.z-dropmenu-show-enter,.z-dropmenu-show-leave-active {\n  top: 50%;\n  opacity: 0;\n}\n.z-dropmenu li {\n  list-style: none;\n  line-height: 1.8em;\n  white-space:nowrap;\n}\n.z-dropmenu li a {\n  color: #7f8c8d;\n  font-size: 0.9em;\n  display: block;\n  padding: 0 30px 0 20px;\n}\n.z-dropmenu li a:hover {\n  color: rgb(65, 184, 131);\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-dropmenu',
	  data: function data() {
	    return {
	      isShow: false
	    };
	  },
	
	  props: {
	    type: {
	      type: String,
	      default: "click"
	    },
	    text: {
	      type: String,
	      required: true
	    },
	    lis: {
	      type: Array,
	      required: true
	    },
	    isShowArrow: {
	      type: Boolean,
	      default: false
	    }
	  },
	  watch: {
	    "isShow": function isShow(newVal, oldVal) {
	      newVal ? this.clickCloseBind() : this.clickCloseOff();
	    }
	  },
	  methods: {
	    toggleDropMenu: function toggleDropMenu() {
	      event.preventDefault();
	      event.stopPropagation();
	      this.isShow = !this.isShow;
	    },
	    showDropMenu: function showDropMenu() {
	      this.isShow = true;
	    },
	    closeDropMenu: function closeDropMenu() {
	      this.isShow = false;
	    },
	    clickClose: function clickClose(event) {
	      event.preventDefault();
	      event.stopPropagation();
	      if (event.target.parentNode !== this.$el && event.target.parentNode.parentNode !== this.$el) {
	        this.closeDropMenu();
	      }
	    },
	    clickCloseBind: function clickCloseBind() {
	      var self = this;
	      this.$root.$el.addEventListener("click", self.clickClose);
	    },
	    clickCloseOff: function clickCloseOff() {
	      var self = this;
	      this.$root.$el.removeEventListener("click", self.clickClose);
	    }
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-dropmenu-wraper"
	  }, [(_vm.type == 'click') ? _vm._h('div', {
	    staticClass: "z-dropmenu-title"
	  }, [_vm._h('a', {
	    on: {
	      "click": _vm.toggleDropMenu
	    }
	  }, [_vm._s(_vm.text), (_vm.isShowArrow) ? _vm._h('span', {
	    staticClass: "z-dropmenu-arrow"
	  }) : _vm._e()]), " ", _vm._h('transition', {
	    attrs: {
	      "name": "z-dropmenu-show"
	    }
	  }, [_vm._h('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "z-dropmenu"
	  }, [_vm._l((_vm.lis), function(li) {
	    return _vm._h('li', [_vm._h('a', {
	      attrs: {
	        "href": li.href
	      },
	      on: {
	        "click": _vm.closeDropMenu
	      }
	    }, [_vm._s(li.text)])])
	  })])])]) : _vm._h('div', {
	    staticClass: "z-dropmenu-title",
	    on: {
	      "mouseover": _vm.showDropMenu,
	      "mouseleave": _vm.closeDropMenu
	    }
	  }, [_vm._h('a', [_vm._s(_vm.text), (_vm.isShowArrow) ? _vm._h('span', {
	    staticClass: "z-dropmenu-arrow"
	  }) : _vm._e()]), " ", _vm._h('transition', {
	    attrs: {
	      "name": "z-dropmenu-show"
	    }
	  }, [_vm._h('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "z-dropmenu"
	  }, [_vm._l((_vm.lis), function(li) {
	    return _vm._h('li', [_vm._h('a', {
	      attrs: {
	        "href": li.href
	      },
	      on: {
	        "click": _vm.closeDropMenu
	      }
	    }, [_vm._s(li.text)])])
	  })])])]), " "])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4d56fcb0", module.exports)
	  }
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(19)
	
	/* script */
	__vue_exports__ = __webpack_require__(21)
	
	/* template */
	var __vue_template__ = __webpack_require__(22)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\ImageInput.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-03342411"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-03342411", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-03342411", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] ImageInput.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-03342411&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./ImageInput.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-03342411&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./ImageInput.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.z-image-wraper[data-v-03342411] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n}\n.z-image-wraper img[data-v-03342411]{\n  display: inline-block;\n  overflow: hidden;\n  position: absolute;\n}\n", "", {"version":3,"sources":["/./src/components/ImageInput.vue?7a85503c"],"names":[],"mappings":";AAmEA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;CACA;AACA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;CACA","file":"ImageInput.vue","sourcesContent":["<template lang=\"html\">\n  <div :style=\"{width:width+'px',height:height+'px',borderRadius: radius}\" class=\"z-image-wraper\">\n    <img :src=\"src\" :style=\"{width:imageWidth+'px',height:imageHeight+'px',top:imageTop+'px',left:imageLeft+'px'}\" :alt=\"alt\" />\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'z-imageinput',\n  data() {\n    return {\n      imageWidth: \"\",\n      imageHeight: \"\",\n      imageTop: \"\",\n      imageLeft: \"\",\n      imageRatio: \"\"\n    }\n  },\n  props: {\n    width: {\n      type: Number,\n      required: true\n    },\n    height: {\n      type: Number,\n      required: true\n    },\n    src: {\n      type: String,\n      required: true\n    },\n    alt: {\n      type: String\n    },\n    radius: {\n      type: String\n    }\n  },\n  mounted() {\n    this.getImage()\n  },\n  methods: {\n    getImage: function() {\n      var image = new Image()\n      image.src = this.src\n      var self = this\n      image.onload = function() {\n        self.imageRatio = image.width/image.height\n        self.resetImageSize()\n      }\n    },\n    resetImageSize: function() {\n      if (this.width/this.height>this.imageRatio) {\n        this.imageWidth = this.width\n        this.imageHeight = this.imageWidth / this.imageRatio\n        this.imageTop = -(this.imageHeight - this.height) / 2\n      } else {\n        this.imageHeight = this.height\n        this.imageWidth = this.imageHeight * this.imageRatio\n        this.imageLeft = -(this.imageWidth - this.width) / 2\n      }\n    }\n  }\n};\n</script>\n\n<style lang=\"css\" scoped>\n  .z-image-wraper {\n    display: inline-block;\n    overflow: hidden;\n    position: relative;\n  }\n  .z-image-wraper img{\n    display: inline-block;\n    overflow: hidden;\n    position: absolute;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-imageinput',
	  data: function data() {
	    return {
	      imageWidth: "",
	      imageHeight: "",
	      imageTop: "",
	      imageLeft: "",
	      imageRatio: ""
	    };
	  },
	
	  props: {
	    width: {
	      type: Number,
	      required: true
	    },
	    height: {
	      type: Number,
	      required: true
	    },
	    src: {
	      type: String,
	      required: true
	    },
	    alt: {
	      type: String
	    },
	    radius: {
	      type: String
	    }
	  },
	  mounted: function mounted() {
	    this.getImage();
	  },
	
	  methods: {
	    getImage: function getImage() {
	      var image = new Image();
	      image.src = this.src;
	      var self = this;
	      image.onload = function () {
	        self.imageRatio = image.width / image.height;
	        self.resetImageSize();
	      };
	    },
	    resetImageSize: function resetImageSize() {
	      if (this.width / this.height > this.imageRatio) {
	        this.imageWidth = this.width;
	        this.imageHeight = this.imageWidth / this.imageRatio;
	        this.imageTop = -(this.imageHeight - this.height) / 2;
	      } else {
	        this.imageHeight = this.height;
	        this.imageWidth = this.imageHeight * this.imageRatio;
	        this.imageLeft = -(this.imageWidth - this.width) / 2;
	      }
	    }
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-image-wraper",
	    style: ({
	      width: _vm.width + 'px',
	      height: _vm.height + 'px',
	      borderRadius: _vm.radius
	    })
	  }, [_vm._h('img', {
	    style: ({
	      width: _vm.imageWidth + 'px',
	      height: _vm.imageHeight + 'px',
	      top: _vm.imageTop + 'px',
	      left: _vm.imageLeft + 'px'
	    }),
	    attrs: {
	      "src": _vm.src,
	      "alt": _vm.alt
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-03342411", module.exports)
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(24)
	
	/* script */
	__vue_exports__ = __webpack_require__(26)
	
	/* template */
	var __vue_template__ = __webpack_require__(27)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\InputNumber.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-06db8f7e"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-06db8f7e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-06db8f7e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] InputNumber.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-06db8f7e&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./InputNumber.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-06db8f7e&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./InputNumber.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.z-inputnumber[data-v-06db8f7e] {\n  font-size: 0px;\n  display: inline-block;\n  overflow: hidden;\n}\n.z-inputnumber .z-inputnumber-button[data-v-06db8f7e] {\n  color: #999;\n  font-weight: bold;\n  font-size: 24px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  display: inline-block;\n  border: 1px solid #999;\n  float: left;\n  cursor: pointer;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.z-inputnumber .z-inputnumber-button.disabled[data-v-06db8f7e] {\n  cursor: not-allowed;\n  color: #ccc;\n}\n.z-inputnumber input[data-v-06db8f7e] {\n  height: 30px;\n  line-height: 30px;\n  width: 48px;\n  font-size: 24px;\n  border-top: 1px solid #999;\n  border-right: none;\n  border-bottom: 1px solid #999;\n  border-left: none;\n  padding: 0 10px;\n  text-align: center;\n  float: left;\n  border-radius: 0;\n}\n.z-inputnumber .placeholder[data-v-06db8f7e] {\n  height: 30px;\n  line-height: 30px;\n  width: 48px;\n  font-size: 24px;\n  border-top: 1px solid #999;\n  border-right: none;\n  border-bottom: 1px solid #999;\n  border-left: none;\n  padding: 0 10px;\n  text-align: center;\n  float: left;\n  border-radius: 0;\n  color: #999;\n}\n", "", {"version":3,"sources":["/./src/components/InputNumber.vue"],"names":[],"mappings":";AAAA;EACE,eAAe;EACf,sBAAsB;EACtB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,2BAA2B;EAC3B,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,2BAA2B;EAC3B,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,YAAY;CACb","file":"InputNumber.vue","sourcesContent":[".z-inputnumber {\n  font-size: 0px;\n  display: inline-block;\n  overflow: hidden;\n}\n.z-inputnumber .z-inputnumber-button {\n  color: #999;\n  font-weight: bold;\n  font-size: 24px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  display: inline-block;\n  border: 1px solid #999;\n  float: left;\n  cursor: pointer;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.z-inputnumber .z-inputnumber-button.disabled {\n  cursor: not-allowed;\n  color: #ccc;\n}\n.z-inputnumber input {\n  height: 30px;\n  line-height: 30px;\n  width: 48px;\n  font-size: 24px;\n  border-top: 1px solid #999;\n  border-right: none;\n  border-bottom: 1px solid #999;\n  border-left: none;\n  padding: 0 10px;\n  text-align: center;\n  float: left;\n  border-radius: 0;\n}\n.z-inputnumber .placeholder {\n  height: 30px;\n  line-height: 30px;\n  width: 48px;\n  font-size: 24px;\n  border-top: 1px solid #999;\n  border-right: none;\n  border-bottom: 1px solid #999;\n  border-left: none;\n  padding: 0 10px;\n  text-align: center;\n  float: left;\n  border-radius: 0;\n  color: #999;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-inputnumber',
	
	  data: function data() {
	    return {
	      value: 0
	    };
	  },
	
	  props: {
	    initialValue: {
	      type: Number,
	      default: 0
	    },
	    min: {
	      type: Number,
	      default: 0
	    },
	    max: {
	      type: Number,
	      default: Infinity
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  mounted: function mounted() {
	    if (this.initialValue > this.max) {
	      this.value = this.max;
	    } else if (this.initialValue < this.min) {
	      this.value = this.min;
	    } else {
	      this.value = this.initialValue;
	    }
	  },
	
	  watch: {
	    'value': function value(val) {
	      if (val >= this.min && val <= this.max) {
	        this.$emit('value-change', val);
	      }
	    }
	  },
	
	  computed: {
	    'isDecreaseDisabled': function isDecreaseDisabled() {
	      if (this.value <= this.min) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	
	    'isIncreaseDisabled': function isIncreaseDisabled() {
	      if (this.value >= this.max) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  },
	
	  methods: {
	    increase: function increase() {
	      if (this.isIncreaseDisabled || this.disabled) {
	        return false;
	      } else {
	        this.value++;
	      }
	    },
	
	    decrease: function decrease() {
	      if (this.isDecreaseDisabled || this.disabled) {
	        return false;
	      } else {
	        this.value--;
	      }
	    },
	
	    checkNumber: function checkNumber() {
	      this.value = Number(this.value);
	
	      if (this.value != 0 && !Number(this.value)) {
	        this.value = this.min;
	      }
	
	      if (this.value >= this.max) {
	        this.value = this.max;
	      } else if (this.value <= this.min) {
	        this.value = this.min;
	      }
	    }
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-inputnumber"
	  }, [_vm._h('span', {
	    staticClass: "z-inputnumber-button",
	    class: {
	      'disabled': (_vm.isDecreaseDisabled || _vm.disabled)
	    },
	    on: {
	      "click": _vm.decrease
	    }
	  }, ["-"]), " ", (_vm.disabled) ? _vm._h('span', {
	    staticClass: "placeholder"
	  }, [_vm._s(_vm.value)]) : _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.value),
	      expression: "value"
	    }],
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.value)
	    },
	    on: {
	      "blur": _vm.checkNumber,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.value = $event.target.value
	      }
	    }
	  }), " ", " ", _vm._h('span', {
	    staticClass: "z-inputnumber-button",
	    class: {
	      'disabled': (_vm.isIncreaseDisabled || _vm.disabled)
	    },
	    on: {
	      "click": _vm.increase
	    }
	  }, ["+"])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-06db8f7e", module.exports)
	  }
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(29)
	
	/* script */
	__vue_exports__ = __webpack_require__(31)
	
	/* template */
	var __vue_template__ = __webpack_require__(32)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Modal.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-79d9d6bb"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-79d9d6bb", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-79d9d6bb", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-79d9d6bb&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-79d9d6bb&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.z-supernatant[data-v-79d9d6bb] {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .5);\n  display: table;\n  transition: opacity .3s ease;\n}\n.z-modal-wrapper[data-v-79d9d6bb] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.z-modal[data-v-79d9d6bb] {\n  width: 300px;\n  margin: 0px auto;\n  background-color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n  transition: all .3s ease;\n}\n.z-modal-expand-enter[data-v-79d9d6bb], .z-modal-expand-leave-active[data-v-79d9d6bb] {\n  opacity: 0;\n}\n.z-modal-expand-enter .z-modal[data-v-79d9d6bb], .z-modal-expand-leave-active .z-modal[data-v-79d9d6bb]{\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n}\n.z-modal-title[data-v-79d9d6bb] {\n  line-height: 44px;\n  text-align: center;\n}\n.z-modal-content[data-v-79d9d6bb] {\n  padding: 0 12px 12px;\n  text-align: left;\n}\n.z-modal-footer[data-v-79d9d6bb] {\n  border-top: 1px solid #ccc;\n  display: table;\n  width: 100%;\n}\n.z-btn-modal[data-v-79d9d6bb] {\n  display: table-cell;\n  text-align: center;\n  cursor: pointer;\n  line-height: 44px;\n}\n.z-btn-modal[data-v-79d9d6bb]:nth-child(2) {\n  border-left: 1px solid #ccc;\n}\n.z-btn-modal-sure[data-v-79d9d6bb] {\n  background-color: rgb(65, 184, 131);\n  color: #fff;\n}\n", "", {"version":3,"sources":["/./src/components/Modal.vue?16b879bc"],"names":[],"mappings":";AA4EA;EACA,gBAAA;EACA,cAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;EACA,oCAAA;EACA,eAAA;EACA,6BAAA;CACA;AAEA;EACA,oBAAA;EACA,uBAAA;CACA;AAEA;EACA,aAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,yCAAA;EACA,yBAAA;CACA;AAEA;EACA,WAAA;CACA;AAEA;EACA,8BAAA;EACA,sBAAA;CACA;AAEA;EACA,kBAAA;EACA,mBAAA;CACA;AAEA;EACA,qBAAA;EACA,iBAAA;CACA;AAEA;EACA,2BAAA;EACA,eAAA;EACA,YAAA;CACA;AAEA;EACA,oBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,4BAAA;CACA;AAEA;EACA,oCAAA;EACA,YAAA;CACA","file":"Modal.vue","sourcesContent":["<template lang=\"html\">\n  <transition name=\"z-modal-expand\">\n    <div class=\"z-supernatant\" v-show=\"show\">\n      <div class=\"z-modal-wrapper\">\n        <div class=\"z-modal\">\n          <div class=\"z-modal-title\">\n            {{title}}\n          </div>\n          <div class=\"z-modal-content\">\n            {{content}}\n          </div>\n          <div class=\"z-modal-footer\">\n            <a class=\"z-btn-modal\" @click=\"cancelFunc\" v-if=\"type=='confirm'\">{{cancel}}</a>\n            <a class=\"z-btn-modal\" :class=\"{'z-btn-modal-sure': type=='confirm'}\" @click=\"sureFunc\">{{sure}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </transition>\n</template>\n\n<script>\nexport default {\n  name: 'z-modal',\n  props: {\n    sure: {\n      type: String,\n      default: \"确定\"\n    },\n    cancel: {\n      type: String,\n      default: \"取消\"\n    },\n    show: {\n      type: Boolean,\n      required: true\n    },\n    title: {\n      type: String,\n      default: \"提示\"\n    },\n    content: {\n      type: String,\n      required: true\n    },\n    type: {\n      type: String,\n      default: \"alert\"\n    },\n    sureEvent: {\n      type: Function,\n      default: function() {\n        console.log(\"点击了确定\")\n      }\n    },\n    cancelEvent: {\n      type: Function,\n      default: function() {\n        console.log(\"点击了取消\")\n      }\n    }\n  },\n  methods: {\n    sureFunc: function() {\n      this.$emit(\"close-modal\")\n      this.sureEvent()\n    },\n    cancelFunc: function() {\n      this.$emit(\"close-modal\")\n      this.cancelEvent()\n    }\n  }\n};\n</script>\n\n<style lang=\"css\" scoped>\n  .z-supernatant {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    transition: opacity .3s ease;\n  }\n\n  .z-modal-wrapper {\n    display: table-cell;\n    vertical-align: middle;\n  }\n\n  .z-modal {\n    width: 300px;\n    margin: 0px auto;\n    background-color: #fff;\n    border-radius: 4px;\n    overflow: hidden;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    transition: all .3s ease;\n  }\n\n  .z-modal-expand-enter, .z-modal-expand-leave-active {\n    opacity: 0;\n  }\n\n  .z-modal-expand-enter .z-modal, .z-modal-expand-leave-active .z-modal{\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  .z-modal-title {\n    line-height: 44px;\n    text-align: center;\n  }\n\n  .z-modal-content {\n    padding: 0 12px 12px;\n    text-align: left;\n  }\n\n  .z-modal-footer {\n    border-top: 1px solid #ccc;\n    display: table;\n    width: 100%;\n  }\n\n  .z-btn-modal {\n    display: table-cell;\n    text-align: center;\n    cursor: pointer;\n    line-height: 44px;\n  }\n\n  .z-btn-modal:nth-child(2) {\n    border-left: 1px solid #ccc;\n  }\n\n  .z-btn-modal-sure {\n    background-color: rgb(65, 184, 131);\n    color: #fff;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-modal',
	  props: {
	    sure: {
	      type: String,
	      default: "确定"
	    },
	    cancel: {
	      type: String,
	      default: "取消"
	    },
	    show: {
	      type: Boolean,
	      required: true
	    },
	    title: {
	      type: String,
	      default: "提示"
	    },
	    content: {
	      type: String,
	      required: true
	    },
	    type: {
	      type: String,
	      default: "alert"
	    },
	    sureEvent: {
	      type: Function,
	      default: function _default() {
	        console.log("点击了确定");
	      }
	    },
	    cancelEvent: {
	      type: Function,
	      default: function _default() {
	        console.log("点击了取消");
	      }
	    }
	  },
	  methods: {
	    sureFunc: function sureFunc() {
	      this.$emit("close-modal");
	      this.sureEvent();
	    },
	    cancelFunc: function cancelFunc() {
	      this.$emit("close-modal");
	      this.cancelEvent();
	    }
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('transition', {
	    attrs: {
	      "name": "z-modal-expand"
	    }
	  }, [_vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "z-supernatant"
	  }, [_vm._h('div', {
	    staticClass: "z-modal-wrapper"
	  }, [_vm._h('div', {
	    staticClass: "z-modal"
	  }, [_vm._h('div', {
	    staticClass: "z-modal-title"
	  }, ["\n          " + _vm._s(_vm.title) + "\n        "]), " ", _vm._h('div', {
	    staticClass: "z-modal-content"
	  }, ["\n          " + _vm._s(_vm.content) + "\n        "]), " ", _vm._h('div', {
	    staticClass: "z-modal-footer"
	  }, [(_vm.type == 'confirm') ? _vm._h('a', {
	    staticClass: "z-btn-modal",
	    on: {
	      "click": _vm.cancelFunc
	    }
	  }, [_vm._s(_vm.cancel)]) : _vm._e(), " ", _vm._h('a', {
	    staticClass: "z-btn-modal",
	    class: {
	      'z-btn-modal-sure': _vm.type == 'confirm'
	    },
	    on: {
	      "click": _vm.sureFunc
	    }
	  }, [_vm._s(_vm.sure)])])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-79d9d6bb", module.exports)
	  }
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(34)
	
	/* script */
	__vue_exports__ = __webpack_require__(36)
	
	/* template */
	var __vue_template__ = __webpack_require__(37)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0d7ffd72"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0d7ffd72", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0d7ffd72", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Navbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-0d7ffd72&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-0d7ffd72&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.z-navbar[data-v-0d7ffd72] {\n  box-sizing: border-box;\n  background-color: #fff;\n  box-shadow: 0 0 4px rgba(0,0,0,0.25);\n  width: 100%;\n}\n.z-navbar-fix[data-v-0d7ffd72] {\n  position: fixed;\n  top: 0;\n  z-index: 999;\n}\n", "", {"version":3,"sources":["/./src/components/Navbar.vue?0ea13763"],"names":[],"mappings":";AA+BA;EACA,uBAAA;EACA,uBAAA;EACA,qCAAA;EACA,YAAA;CACA;AACA;EACA,gBAAA;EACA,OAAA;EACA,aAAA;CACA","file":"Navbar.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"z-navbar-wraper\">\n    <div class=\"z-navbar-placeholder\" :style=\"{height: isFixed ? navbarHeight + 'px' : ''}\">\n    </div>\n    <div class=\"z-navbar\" :class=\"{'z-navbar-fix': isFixed}\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'z-navbar',\n  data() {\n    return {\n      navbarHeight: \"\"\n    }\n  },\n  props: {\n    isFixed: {\n      type: Boolean,\n      default: false\n    }\n  },\n  mounted() {\n    this.navbarHeight = this.$el.lastChild.clientHeight\n  }\n};\n</script>\n\n<style lang=\"css\" scoped>\n.z-navbar {\n  box-sizing: border-box;\n  background-color: #fff;\n  box-shadow: 0 0 4px rgba(0,0,0,0.25);\n  width: 100%;\n}\n.z-navbar-fix {\n  position: fixed;\n  top: 0;\n  z-index: 999;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-navbar',
	  data: function data() {
	    return {
	      navbarHeight: ""
	    };
	  },
	
	  props: {
	    isFixed: {
	      type: Boolean,
	      default: false
	    }
	  },
	  mounted: function mounted() {
	    this.navbarHeight = this.$el.lastChild.clientHeight;
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-navbar-wraper"
	  }, [_vm._h('div', {
	    staticClass: "z-navbar-placeholder",
	    style: ({
	      height: _vm.isFixed ? _vm.navbarHeight + 'px' : ''
	    })
	  }), " ", _vm._h('div', {
	    staticClass: "z-navbar",
	    class: {
	      'z-navbar-fix': _vm.isFixed
	    }
	  }, [_vm._t("default")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0d7ffd72", module.exports)
	  }
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(39)
	
	/* script */
	__vue_exports__ = __webpack_require__(41)
	
	/* template */
	var __vue_template__ = __webpack_require__(42)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Pagination.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6d066208"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6d066208", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6d066208", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Pagination.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-6d066208&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-6d066208&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.z-pagination[data-v-6d066208] {\n  overflow: hidden;\n}\n.z-pagination ul[data-v-6d066208] {\n  overflow: hidden;\n  float: left;\n}\n.z-pagination ul li[data-v-6d066208] {\n  float: left;\n  list-style: none;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.z-pagination ul li[data-v-6d066208]:last-child {\n  border-right: 1px solid #ccc;\n}\n.z-pagination ul li.active[data-v-6d066208] {\n  background-color: #5bc0de;\n  color: #fff;\n}\n.z-pagination ul li.arrow[data-v-6d066208] {\n  color: #999;\n  font-weight: bold;\n}\n.z-pagination ul li.arrow.disabled[data-v-6d066208] {\n  color: #e4e4e4;\n  cursor: not-allowed;\n}\n.z-pagination .input-page[data-v-6d066208] {\n  float: left;\n  margin-left: 10px;\n  height: 30px;\n  line-height: 30px;\n}\n.z-pagination .input-page input[data-v-6d066208] {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  vertical-align: bottom;\n  text-align: center;\n  margin: 0 5px;\n  padding: 0;\n  border: 1px solid #ccc;\n}\n", "", {"version":3,"sources":["/./src/components/Pagination.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,YAAY;CACb;AACD;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,2BAA2B;EAC3B,8BAA8B;EAC9B,4BAA4B;EAC5B,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,uBAAuB;CACxB","file":"Pagination.vue","sourcesContent":[".z-pagination {\n  overflow: hidden;\n}\n.z-pagination ul {\n  overflow: hidden;\n  float: left;\n}\n.z-pagination ul li {\n  float: left;\n  list-style: none;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.z-pagination ul li:last-child {\n  border-right: 1px solid #ccc;\n}\n.z-pagination ul li.active {\n  background-color: #5bc0de;\n  color: #fff;\n}\n.z-pagination ul li.arrow {\n  color: #999;\n  font-weight: bold;\n}\n.z-pagination ul li.arrow.disabled {\n  color: #e4e4e4;\n  cursor: not-allowed;\n}\n.z-pagination .input-page {\n  float: left;\n  margin-left: 10px;\n  height: 30px;\n  line-height: 30px;\n}\n.z-pagination .input-page input {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  vertical-align: bottom;\n  text-align: center;\n  margin: 0 5px;\n  padding: 0;\n  border: 1px solid #ccc;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-pagination',
	
	  data: function data() {
	    return {
	      currentPage: this.page,
	      canGoPre: true,
	      canGoNext: true,
	      frontEnd: 8,
	      behindStart: 1,
	      middleStart: 0,
	      isShowPreItemsButton: false,
	      isShowNextItemsButton: true,
	      inputPage: this.page
	    };
	  },
	
	  props: {
	    total: {
	      type: Number,
	      require: true
	    },
	    pageSize: {
	      type: Number,
	      default: 10
	    },
	    page: {
	      type: Number,
	      default: 1
	    },
	    isJumper: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  mounted: function mounted() {
	    if (this.pageCount === 1) {
	      this.canGoPre = false;
	      this.canGoNext = false;
	    } else if (this.currentPage === 1) {
	      this.canGoPre = false;
	    } else if (this.currentPage === this.pageCount) {
	      this.canGoNext = false;
	    }
	
	    if (Number(this.inputPage) < 1) {
	      this.currentPage = 1;
	      this.inputPage = 1;
	    } else if (Number(this.inputPage) > this.pageCount) {
	      this.currentPage = this.pageCount;
	      this.inputPage = this.pageCount;
	    } else {
	      this.currentPage = Number(this.inputPage);
	    }
	
	    this.initPage();
	  },
	
	  computed: {
	    'pageCount': function pageCount() {
	      return Math.ceil(this.total / this.pageSize);
	    },
	
	    'middleEnd': function middleEnd() {
	      return this.middleStart + 5;
	    },
	
	    'isShowMiddle': function isShowMiddle() {
	      if (this.isShowPreItemsButton && this.isShowNextItemsButton) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	
	    'frontCount': function frontCount() {
	      if (this.isShowPreItemsButton) {
	        return 1;
	      } else {
	        return 8;
	      }
	    },
	
	    'behindCount': function behindCount() {
	      if (this.isShowNextItemsButton) {
	        return 1;
	      } else {
	        return 8;
	      }
	    }
	  },
	
	  watch: {
	    'currentPage': function currentPage(val) {
	      this.$emit("current-page", val);
	
	      if (val <= 1) {
	        this.currentPage = 1;
	        this.canGoPre = false;
	        this.canGoNext = true;
	      } else if (val >= this.pageCount) {
	        this.currentPage = this.pageCount;
	        this.canGoNext = false;
	        this.canGoPre = true;
	      } else {
	        this.canGoPre = true;
	        this.canGoNext = true;
	      }
	    },
	
	    'inputPage': function inputPage(val) {
	      if (!Number(val)) {
	        this.inputPage = '';
	      }
	    }
	  },
	
	  methods: {
	    goPage: function goPage(index) {
	      if (index === this.pageCount) {
	        this.isShowPreItemsButton = true;
	        this.isShowNextItemsButton = false;
	      } else if (index === 1) {
	        this.isShowPreItemsButton = false;
	        this.isShowNextItemsButton = true;
	      }
	      this.currentPage = index;
	    },
	
	    goPre: function goPre() {
	      if (!this.canGoPre) {
	        return false;
	      }
	      this.currentPage--;
	
	      if (this.behindCount === 8 && this.currentPage < this.pageCount - 8 + 1 || this.behindCount === 1 && this.currentPage < this.middleStart) {
	        this.showPreItems();
	      }
	    },
	
	    goNext: function goNext() {
	      if (!this.canGoNext) {
	        return false;
	      }
	      this.currentPage++;
	
	      if (this.frontCount === 8 && this.currentPage > 8 || this.frontCount === 1 && this.currentPage > this.middleEnd) {
	        this.showNextItems();
	      }
	    },
	
	    showPreItems: function showPreItems() {
	      if (this.behindCount === 8) {
	        this.isShowNextItemsButton = true;
	        this.middleStart = this.pageCount - 8 - 6 + 1;
	        this.behindCount = 1;
	      } else {
	        this.middleStart = this.middleStart - 6;
	      }
	
	      if (this.middleStart < 1) {
	        this.frontCount = 8;
	        this.isShowPreItemsButton = false;
	      } else {
	        this.isShowPreItemsButton = true;
	      }
	
	      this.currentPage = this.middleEnd;
	    },
	
	    showNextItems: function showNextItems() {
	      if (this.frontCount === 8) {
	        this.isShowPreItemsButton = true;
	        this.middleStart = 9;
	        this.frontCount = 1;
	      } else {
	        this.middleStart = this.middleEnd + 1;
	      }
	
	      if (this.middleEnd >= this.pageCount - 1) {
	        this.behindCount = 8;
	        this.isShowNextItemsButton = false;
	      } else {
	        this.isShowNextItemsButton = true;
	      }
	
	      this.currentPage = this.middleStart;
	    },
	
	    initPage: function initPage() {
	      if (this.currentPage >= 1 && this.currentPage <= 8) {
	        this.frontCount = 8;
	        this.isShowPreItemsButton = false;
	        this.isShowNextItemsButton = true;
	        this.behindCount = 1;
	      } else if (this.currentPage <= this.pageCount && this.currentPage >= this.pageCount - 8 + 1) {
	        this.frontCount = 1;
	        this.isShowPreItemsButton = true;
	        this.isShowNextItemsButton = false;
	        this.behindCount = 8;
	      } else {
	        this.frontCount = 1;
	        this.isShowPreItemsButton = true;
	        this.middleStart = this.currentPage - 3;
	        this.isShowNextItemsButton = true;
	        this.behindCount = 1;
	      }
	    },
	
	    changePage: function changePage() {
	      if (Number(this.inputPage) < 1) {
	        this.currentPage = 1;
	        this.inputPage = 1;
	      } else if (Number(this.inputPage) > this.pageCount) {
	        this.currentPage = this.pageCount;
	        this.inputPage = this.pageCount;
	      } else {
	        this.currentPage = Number(this.inputPage);
	      }
	
	      this.initPage();
	    }
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-pagination"
	  }, [(this.pageCount <= 10) ? _vm._h('ul', [_vm._h('li', {
	    staticClass: "arrow",
	    class: {
	      'disabled': !_vm.canGoPre
	    },
	    on: {
	      "click": _vm.goPre
	    }
	  }, ["<"]), " ", _vm._l((_vm.pageCount), function(index) {
	    return _vm._h('li', {
	      class: {
	        'active': _vm.currentPage === index
	      },
	      on: {
	        "click": function($event) {
	          _vm.goPage(index)
	        }
	      }
	    }, [_vm._s(index)])
	  }), " ", _vm._h('li', {
	    staticClass: "arrow",
	    class: {
	      'disabled': !_vm.canGoNext
	    },
	    on: {
	      "click": _vm.goNext
	    }
	  }, [">"])]) : _vm._h('ul', [_vm._h('li', {
	    staticClass: "arrow",
	    class: {
	      'disabled': !_vm.canGoPre
	    },
	    on: {
	      "click": _vm.goPre
	    }
	  }, ["<"]), " ", _vm._l((_vm.frontCount), function(index) {
	    return _vm._h('li', {
	      class: {
	        'active': _vm.currentPage === index
	      },
	      on: {
	        "click": function($event) {
	          _vm.goPage(index)
	        }
	      }
	    }, [_vm._s(index)])
	  }), " ", (_vm.isShowPreItemsButton) ? _vm._h('li', {
	    on: {
	      "click": _vm.showPreItems
	    }
	  }, ["…"]) : _vm._e(), " ", _vm._l((6), function(index) {
	    return (_vm.isShowMiddle) ? _vm._h('li', {
	      class: {
	        'active': _vm.currentPage === index - 1 + _vm.middleStart
	      },
	      on: {
	        "click": function($event) {
	          _vm.goPage(index - 1 + _vm.middleStart)
	        }
	      }
	    }, [_vm._s(index - 1 + _vm.middleStart)]) : _vm._e()
	  }), " ", (_vm.isShowNextItemsButton) ? _vm._h('li', {
	    on: {
	      "click": _vm.showNextItems
	    }
	  }, ["…"]) : _vm._e(), " ", _vm._l((_vm.behindCount), function(index) {
	    return _vm._h('li', {
	      class: {
	        'active': _vm.currentPage === (index + _vm.pageCount - _vm.behindCount)
	      },
	      on: {
	        "click": function($event) {
	          _vm.goPage(index + _vm.pageCount - _vm.behindCount)
	        }
	      }
	    }, [_vm._s(index + _vm.pageCount - _vm.behindCount)])
	  }), " ", _vm._h('li', {
	    staticClass: "arrow",
	    class: {
	      'disabled': !_vm.canGoNext
	    },
	    on: {
	      "click": _vm.goNext
	    }
	  }, [">"])]), " ", " ", (_vm.isJumper) ? _vm._h('div', {
	    staticClass: "input-page"
	  }, ["前往第", _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputPage),
	      expression: "inputPage"
	    }],
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.inputPage)
	    },
	    on: {
	      "keydown": function($event) {
	        if ($event.keyCode !== 13) { return; }
	        _vm.changePage($event)
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputPage = $event.target.value
	      }
	    }
	  }), "页"]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6d066208", module.exports)
	  }
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(44)
	
	/* script */
	__vue_exports__ = __webpack_require__(46)
	
	/* template */
	var __vue_template__ = __webpack_require__(47)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Progress.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f9d67ae2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f9d67ae2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Progress.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-f9d67ae2!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Progress.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-f9d67ae2!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Progress.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.z-progress-wraper {\n  position: fixed;\n  z-index: 99999;\n  width: 100%;\n  height: 4px;\n  background-color: #fff;\n}\n.z-progress-wraper .z-progress {\n  height: 100%;\n  transition: all 0.5s ease-out;\n}\n.z-progress-top {\n  top: 0;\n}\n.z-progress-bottom {\n  bottom: 0;\n}\n", "", {"version":3,"sources":["/./src/components/Progress.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,aAAa;EACb,8BAA8B;CAC/B;AACD;EACE,OAAO;CACR;AACD;EACE,UAAU;CACX","file":"Progress.vue","sourcesContent":[".z-progress-wraper {\n  position: fixed;\n  z-index: 99999;\n  width: 100%;\n  height: 4px;\n  background-color: #fff;\n}\n.z-progress-wraper .z-progress {\n  height: 100%;\n  transition: all 0.5s ease-out;\n}\n.z-progress-top {\n  top: 0;\n}\n.z-progress-bottom {\n  bottom: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-progress',
	
	  data: function data() {
	    return {
	      width: 0,
	      progress: 0,
	      timer: null,
	      outTimer: null,
	      isShowProgress: false
	    };
	  },
	
	  props: {
	    bgc: {
	      type: String,
	      default: '#0080ff'
	    },
	    type: {
	      type: String,
	      default: 'top'
	    }
	  },
	  methods: {
	    progressing: function progressing() {
	      this.progress = this.progress + Math.random() * (99 - this.width);
	      this.width = this.progress;
	    },
	    runProgress: function runProgress() {
	      var _this = this;
	
	      if (document.readyState != 'complete') {
	        this.progressing();
	      } else {
	        (function () {
	          clearInterval(_this.timer);
	          _this.progress = 100;
	          var self = _this;
	          _this.outTimer = setTimeout(function () {
	            self.isShowProgress = false;
	            self.resetProgress();
	          }, 500);
	        })();
	      }
	    },
	    resetProgress: function resetProgress() {
	      this.progress = 0;
	      this.width = 0;
	    },
	    startProgress: function startProgress() {
	      clearInterval(this.timer);
	      clearTimeout(this.outTimer);
	      this.resetProgress();
	      this.isShowProgress = true;
	      this.progressing();
	      this.timer = setInterval(this.runProgress, 500);
	    }
	  }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShowProgress),
	      expression: "isShowProgress"
	    }],
	    staticClass: "z-progress-wraper",
	    class: {
	      'z-progress-top': _vm.type == 'top', 'z-progress-bottom': _vm.type == 'bottom'
	    }
	  }, [_vm._h('div', {
	    staticClass: "z-progress",
	    style: ({
	      'width': _vm.progress + '%',
	      'background-color': _vm.bgc
	    })
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f9d67ae2", module.exports)
	  }
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(49)
	
	/* script */
	__vue_exports__ = __webpack_require__(51)
	
	/* template */
	var __vue_template__ = __webpack_require__(52)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Switch.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-056e6696"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-056e6696", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-056e6696", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Switch.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-056e6696&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-056e6696&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.z-switch[data-v-056e6696] {\n  display: inline-block;\n  background-color: #ccc;\n  cursor: pointer;\n  position: relative;\n  border: 1px solid #999;\n  transition: background-color .2s;\n  box-sizing: content-box;\n}\n.z-switch-button[data-v-056e6696] {\n  display: inline-block;\n  border-radius: 100%;\n  background-color: #fff;\n  position: absolute;\n  transition: left .2s;\n}\n", "", {"version":3,"sources":["/./src/components/Switch.vue?08aca799"],"names":[],"mappings":";AAqCA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;EACA,iCAAA;EACA,wBAAA;CACA;AAEA;EACA,sBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,qBAAA;CACA","file":"Switch.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"z-switch\" :style=\"{width: width+'px',height: height+'px',borderRadius: height+'px',backgroundColor: isOpen ? bgc : ''}\" @click=\"toggleSwitch\">\n    <div class=\"z-switch-button\" :style=\"{width: height+'px', height: height+'px', left: isOpen ? ((width - height) + 'px') : (0 + 'px')}\"></div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'z-switch',\n  data() {\n    return {\n      isOpen: false\n    }\n  },\n  props: {\n    width: {\n      type: Number,\n      default: 50\n    },\n    height: {\n      type: Number,\n      default: 25\n    },\n    bgc: {\n      type: String,\n      default: \"rgb(65, 184, 131)\"\n    }\n  },\n  methods: {\n    toggleSwitch: function() {\n      this.isOpen = !this.isOpen\n    }\n  }\n};\n</script>\n\n<style lang=\"css\" scoped>\n.z-switch {\n  display: inline-block;\n  background-color: #ccc;\n  cursor: pointer;\n  position: relative;\n  border: 1px solid #999;\n  transition: background-color .2s;\n  box-sizing: content-box;\n}\n\n.z-switch-button {\n  display: inline-block;\n  border-radius: 100%;\n  background-color: #fff;\n  position: absolute;\n  transition: left .2s;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-switch',
	  data: function data() {
	    return {
	      isOpen: false
	    };
	  },
	
	  props: {
	    width: {
	      type: Number,
	      default: 50
	    },
	    height: {
	      type: Number,
	      default: 25
	    },
	    bgc: {
	      type: String,
	      default: "rgb(65, 184, 131)"
	    }
	  },
	  methods: {
	    toggleSwitch: function toggleSwitch() {
	      this.isOpen = !this.isOpen;
	    }
	  }
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-switch",
	    style: ({
	      width: _vm.width + 'px',
	      height: _vm.height + 'px',
	      borderRadius: _vm.height + 'px',
	      backgroundColor: _vm.isOpen ? _vm.bgc : ''
	    }),
	    on: {
	      "click": _vm.toggleSwitch
	    }
	  }, [_vm._h('div', {
	    staticClass: "z-switch-button",
	    style: ({
	      width: _vm.height + 'px',
	      height: _vm.height + 'px',
	      left: _vm.isOpen ? ((_vm.width - _vm.height) + 'px') : (0 + 'px')
	    })
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-056e6696", module.exports)
	  }
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(54)
	
	/* script */
	__vue_exports__ = __webpack_require__(56)
	
	/* template */
	var __vue_template__ = __webpack_require__(57)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Table.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-fc02c148"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-fc02c148", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-fc02c148", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Table.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-fc02c148&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Table.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-fc02c148&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Table.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.z-table-wraper[data-v-fc02c148] {\n  max-width: 100%;\n  overflow-x: auto;\n}\n.z-table[data-v-fc02c148] {\n  max-width: 100%;\n  border: 1px solid #ddd;\n  border-collapse: collapse;\n}\n.z-table>caption[data-v-fc02c148] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\n.z-table>thead>tr>th[data-v-fc02c148],\n.z-table>tbody>tr>td[data-v-fc02c148],\n.z-table>tfoot>tr>td[data-v-fc02c148] {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: left;\n}\n.z-table>thead>tr>th[data-v-fc02c148] {\n  border-bottom-width: 2px;\n}\n", "", {"version":3,"sources":["/./src/components/Table.vue?7818f104"],"names":[],"mappings":";AAsCA;EACA,gBAAA;EACA,iBAAA;CACA;AAEA;EACA,gBAAA;EACA,uBAAA;EACA,0BAAA;CACA;AAEA;EACA,iBAAA;EACA,oBAAA;EACA,YAAA;EACA,iBAAA;CACA;AAEA;;;EAGA,uBAAA;EACA,aAAA;EACA,iBAAA;CACA;AAEA;EACA,yBAAA;CACA","file":"Table.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"z-table-wraper\">\n    <table class=\"z-table\">\n      <caption v-if=\"title\">{{title}}</caption>\n      <thead>\n        <tr>\n          <th v-for=\"th in ths\">{{th}}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr v-for=\"tr in trs\">\n          <td v-for=\"td in tr\">{{td}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'z-table',\n  props: {\n    title: {\n      type: String\n    },\n    ths: {\n      type: Array,\n      required: true\n    },\n    trs: {\n      type: Array,\n      required: true\n    }\n  }\n};\n</script>\n\n<style lang=\"css\" scoped>\n.z-table-wraper {\n  max-width: 100%;\n  overflow-x: auto;\n}\n\n.z-table {\n  max-width: 100%;\n  border: 1px solid #ddd;\n  border-collapse: collapse;\n}\n\n.z-table>caption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\n\n.z-table>thead>tr>th,\n.z-table>tbody>tr>td,\n.z-table>tfoot>tr>td {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: left;\n}\n\n.z-table>thead>tr>th {\n  border-bottom-width: 2px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-table',
	  props: {
	    title: {
	      type: String
	    },
	    ths: {
	      type: Array,
	      required: true
	    },
	    trs: {
	      type: Array,
	      required: true
	    }
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-table-wraper"
	  }, [_vm._h('table', {
	    staticClass: "z-table"
	  }, [(_vm.title) ? _vm._h('caption', [_vm._s(_vm.title)]) : _vm._e(), " ", _vm._h('thead', [_vm._h('tr', [_vm._l((_vm.ths), function(th) {
	    return _vm._h('th', [_vm._s(th)])
	  })])]), " ", _vm._h('tbody', [_vm._l((_vm.trs), function(tr) {
	    return _vm._h('tr', [_vm._l((tr), function(td) {
	      return _vm._h('td', [_vm._s(td)])
	    })])
	  })])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fc02c148", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=z-vue-components.js.map