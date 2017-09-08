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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Row = __webpack_require__(1);

	var _Row2 = _interopRequireDefault(_Row);

	var _Col = __webpack_require__(8);

	var _Col2 = _interopRequireDefault(_Col);

	var _ActionSheet = __webpack_require__(13);

	var _ActionSheet2 = _interopRequireDefault(_ActionSheet);

	var _Aside = __webpack_require__(18);

	var _Aside2 = _interopRequireDefault(_Aside);

	var _BackTop = __webpack_require__(23);

	var _BackTop2 = _interopRequireDefault(_BackTop);

	var _Button = __webpack_require__(28);

	var _Button2 = _interopRequireDefault(_Button);

	var _Carrousel = __webpack_require__(33);

	var _Carrousel2 = _interopRequireDefault(_Carrousel);

	var _Dimmer = __webpack_require__(43);

	var _Dimmer2 = _interopRequireDefault(_Dimmer);

	var _Dropmenu = __webpack_require__(48);

	var _Dropmenu2 = _interopRequireDefault(_Dropmenu);

	var _ImageInput = __webpack_require__(37);

	var _ImageInput2 = _interopRequireDefault(_ImageInput);

	var _InputNumber = __webpack_require__(53);

	var _InputNumber2 = _interopRequireDefault(_InputNumber);

	var _Modal = __webpack_require__(58);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Navbar = __webpack_require__(63);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Pagination = __webpack_require__(68);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	var _Progress = __webpack_require__(73);

	var _Progress2 = _interopRequireDefault(_Progress);

	var _Radio = __webpack_require__(78);

	var _Radio2 = _interopRequireDefault(_Radio);

	var _Switch = __webpack_require__(83);

	var _Switch2 = _interopRequireDefault(_Switch);

	var _Table = __webpack_require__(88);

	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var components = [_Row2.default, _Col2.default, _ActionSheet2.default, _Aside2.default, _BackTop2.default, _Button2.default, _Carrousel2.default, _Dimmer2.default, _Dropmenu2.default, _ImageInput2.default, _InputNumber2.default, _Modal2.default, _Navbar2.default, _Pagination2.default, _Progress2.default, _Radio2.default, _Switch2.default, _Table2.default];

	var install = function install(Vue) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (install.installed) return;

	  components.map(function (component) {
	    Vue.component(component.name, component);
	  });
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	};

	module.exports = {
	  version: '1.1.18',
	  install: install,
	  zRow: _Row2.default,
	  zCol: _Col2.default,
	  zActionsheet: _ActionSheet2.default,
	  zAside: _Aside2.default,
	  zBacktop: _BackTop2.default,
	  zButton: _Button2.default,
	  zCarrousel: _Carrousel2.default,
	  zDimmer: _Dimmer2.default,
	  zDropmenu: _Dropmenu2.default,
	  zImageinput: _ImageInput2.default,
	  zInputnumber: _InputNumber2.default,
	  zModal: _Modal2.default,
	  zNavbar: _Navbar2.default,
	  zPagination: _Pagination2.default,
	  zProgress: _Progress2.default,
	  zRadio: _Radio2.default,
	  zSwitch: _Switch2.default,
	  zTable: _Table2.default
	};

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
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Row.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-de308630", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-de308630", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Row.vue: functional components are not supported and should be defined in plain js files using render functions.")}

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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-de308630!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Row.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-de308630!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Row.vue");
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
	exports.push([module.id, "\n.z-row {\n  position: relative;\n  height: auto;\n  zoom: 1;\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n", ""]);

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-row',

	  props: {
	    gutter: Number
	  },

	  computed: {
	    style: function style() {
	      var ret = {};

	      if (this.gutter) {
	        ret.marginLeft = -this.gutter / 2 + 'px';
	        ret.marginRight = ret.marginLeft;
	      }

	      return ret;
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-row",
	    style: (_vm.style)
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-de308630", module.exports)
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
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Col.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-76cf418e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-76cf418e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Col.vue: functional components are not supported and should be defined in plain js files using render functions.")}

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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-76cf418e!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Col.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-76cf418e!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Col.vue");
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
	exports.push([module.id, "\n.z-col-24,\n.z-col-23,\n.z-col-22,\n.z-col-21,\n.z-col-20,\n.z-col-19,\n.z-col-18,\n.z-col-17,\n.z-col-16,\n.z-col-15,\n.z-col-14,\n.z-col-13,\n.z-col-12,\n.z-col-11,\n.z-col-10,\n.z-col-9,\n.z-col-8,\n.z-col-7,\n.z-col-6,\n.z-col-5,\n.z-col-4,\n.z-col-3,\n.z-col-2,\n.z-col-1 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  float: left;\n  position: relative;\n}\n.z-col-24 {\n  width: 100%;\n}\n.z-col-23 {\n  width: 95.83333333%;\n}\n.z-col-22 {\n  width: 91.66666667%;\n}\n.z-col-21 {\n  width: 87.5%;\n}\n.z-col-20 {\n  width: 83.33333333%;\n}\n.z-col-19 {\n  width: 79.16666667%;\n}\n.z-col-18 {\n  width: 75%;\n}\n.z-col-17 {\n  width: 70.83333333%;\n}\n.z-col-16 {\n  width: 66.66666667%;\n}\n.z-col-15 {\n  width: 62.5%;\n}\n.z-col-14 {\n  width: 58.33333333%;\n}\n.z-col-13 {\n  width: 54.16666667%;\n}\n.z-col-12 {\n  width: 50%;\n}\n.z-col-11 {\n  width: 45.83333333%;\n}\n.z-col-10 {\n  width: 41.66666667%;\n}\n.z-col-9 {\n  width: 37.5%;\n}\n.z-col-8 {\n  width: 33.33333333%;\n}\n.z-col-7 {\n  width: 29.16666667%;\n}\n.z-col-6 {\n  width: 25%;\n}\n.z-col-5 {\n  width: 20.83333333%;\n}\n.z-col-4 {\n  width: 16.66666667%;\n}\n.z-col-3 {\n  width: 12.5%;\n}\n.z-col-2 {\n  width: 8.33333333%;\n}\n.z-col-1 {\n  width: 4.16666667%;\n}\n.z-col-offset-24 {\n  margin-left: 100%;\n}\n.z-col-offset-23 {\n  margin-left: 95.83333333%;\n}\n.z-col-offset-22 {\n  margin-left: 91.66666667%;\n}\n.z-col-offset-21 {\n  margin-left: 87.5%;\n}\n.z-col-offset-20 {\n  margin-left: 83.33333333%;\n}\n.z-col-offset-19 {\n  margin-left: 79.16666667%;\n}\n.z-col-offset-18 {\n  margin-left: 75%;\n}\n.z-col-offset-17 {\n  margin-left: 70.83333333%;\n}\n.z-col-offset-16 {\n  margin-left: 66.66666667%;\n}\n.z-col-offset-15 {\n  margin-left: 62.5%;\n}\n.z-col-offset-14 {\n  margin-left: 58.33333333%;\n}\n.z-col-offset-13 {\n  margin-left: 54.16666667%;\n}\n.z-col-offset-12 {\n  margin-left: 50%;\n}\n.z-col-offset-11 {\n  margin-left: 45.83333333%;\n}\n.z-col-offset-10 {\n  margin-left: 41.66666667%;\n}\n.z-col-offset-9 {\n  margin-left: 37.5%;\n}\n.z-col-offset-8 {\n  margin-left: 33.33333333%;\n}\n.z-col-offset-7 {\n  margin-left: 29.16666667%;\n}\n.z-col-offset-6 {\n  margin-left: 25%;\n}\n.z-col-offset-5 {\n  margin-left: 20.83333333%;\n}\n.z-col-offset-4 {\n  margin-left: 16.66666667%;\n}\n.z-col-offset-3 {\n  margin-left: 12.5%;\n}\n.z-col-offset-2 {\n  margin-left: 8.33333333%;\n}\n.z-col-offset-1 {\n  margin-left: 4.16666667%;\n}\n.z-col-push-24 {\n  left: 100%;\n}\n.z-col-push-23 {\n  left: 95.83333333%;\n}\n.z-col-push-22 {\n  left: 91.66666667%;\n}\n.z-col-push-21 {\n  left: 87.5%;\n}\n.z-col-push-20 {\n  left: 83.33333333%;\n}\n.z-col-push-19 {\n  left: 79.16666667%;\n}\n.z-col-push-18 {\n  left: 75%;\n}\n.z-col-push-17 {\n  left: 70.83333333%;\n}\n.z-col-push-16 {\n  left: 66.66666667%;\n}\n.z-col-push-15 {\n  left: 62.5%;\n}\n.z-col-push-14 {\n  left: 58.33333333%;\n}\n.z-col-push-13 {\n  left: 54.16666667%;\n}\n.z-col-push-12 {\n  left: 50%;\n}\n.z-col-push-11 {\n  left: 45.83333333%;\n}\n.z-col-push-10 {\n  left: 41.66666667%;\n}\n.z-col-push-9 {\n  left: 37.5%;\n}\n.z-col-push-8 {\n  left: 33.33333333%;\n}\n.z-col-push-7 {\n  left: 29.16666667%;\n}\n.z-col-push-6 {\n  left: 25%;\n}\n.z-col-push-5 {\n  left: 20.83333333%;\n}\n.z-col-push-4 {\n  left: 16.66666667%;\n}\n.z-col-push-3 {\n  left: 12.5%;\n}\n.z-col-push-2 {\n  left: 8.33333333%;\n}\n.z-col-push-1 {\n  left: 4.16666667%;\n}\n.z-col-pull-24 {\n  right: 100%;\n}\n.z-col-pull-23 {\n  right: 95.83333333%;\n}\n.z-col-pull-22 {\n  right: 91.66666667%;\n}\n.z-col-pull-21 {\n  right: 87.5%;\n}\n.z-col-pull-20 {\n  right: 83.33333333%;\n}\n.z-col-pull-19 {\n  right: 79.16666667%;\n}\n.z-col-pull-18 {\n  right: 75%;\n}\n.z-col-pull-17 {\n  right: 70.83333333%;\n}\n.z-col-pull-16 {\n  right: 66.66666667%;\n}\n.z-col-pull-15 {\n  right: 62.5%;\n}\n.z-col-pull-14 {\n  right: 58.33333333%;\n}\n.z-col-pull-13 {\n  right: 54.16666667%;\n}\n.z-col-pull-12 {\n  right: 50%;\n}\n.z-col-pull-11 {\n  right: 45.83333333%;\n}\n.z-col-pull-10 {\n  right: 41.66666667%;\n}\n.z-col-pull-9 {\n  right: 37.5%;\n}\n.z-col-pull-8 {\n  right: 33.33333333%;\n}\n.z-col-pull-7 {\n  right: 29.16666667%;\n}\n.z-col-pull-6 {\n  right: 25%;\n}\n.z-col-pull-5 {\n  right: 20.83333333%;\n}\n.z-col-pull-4 {\n  right: 16.66666667%;\n}\n.z-col-pull-3 {\n  right: 12.5%;\n}\n.z-col-pull-2 {\n  right: 8.33333333%;\n}\n.z-col-pull-1 {\n  right: 4.16666667%;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-col',

	  props: {
	    span: {
	      type: Number,
	      require: true
	    },

	    offset: Number,
	    push: Number,
	    pull: Number
	  },

	  computed: {
	    gutter: function gutter() {
	      return this.$parent.gutter;
	    }
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    class: ['z-col-' + _vm.span, _vm.offset ? 'z-col-offset-' + _vm.offset : '', _vm.push ? 'z-col-push-' + _vm.push : '', _vm.pull ? 'z-col-pull-' + _vm.pull : ''],
	    style: ({
	      'padding-left': _vm.gutter / 2 + 'px',
	      'padding-right': _vm.gutter / 2 + 'px'
	    })
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-76cf418e", module.exports)
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
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\ActionSheet.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5df07e57"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5df07e57", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5df07e57", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] ActionSheet.vue: functional components are not supported and should be defined in plain js files using render functions.")}

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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-5df07e57&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./ActionSheet.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-5df07e57&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./ActionSheet.vue");
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
	exports.push([module.id, "\n.z-actionsheet-items-enter[data-v-5df07e57],\n.z-actionsheet-items-leave-active[data-v-5df07e57] {\n  -webkit-transform: translateY(100%);\n      -ms-transform: translateY(100%);\n          transform: translateY(100%);\n  opacity: 0;\n}\n.z-actionsheet-items-enter-active[data-v-5df07e57],\n.z-actionsheet-items-leave-active[data-v-5df07e57] {\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n.z-actionsheet-items[data-v-5df07e57] {\n  position: fixed;\n  z-index: 3000;\n  left: 0;\n  width: 100%;\n  bottom: 0;\n}\n.z-actionsheet-items li[data-v-5df07e57] {\n  width: 100%;\n  text-align: center;\n  list-style: none;\n  background-color: #fff;\n}\n.z-actionsheet-items li a[data-v-5df07e57] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  display: block;\n}\n.z-actionsheet-items li.z-actionsheet-title[data-v-5df07e57] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.z-actionsheet-items li.z-actionsheet-item[data-v-5df07e57],\n.z-actionsheet-items li.z-actionsheet-title[data-v-5df07e57] {\n  border-bottom: 1px solid #eee;\n}\n.z-actionsheet-items li[data-v-5df07e57]:nth-last-child(2) {\n  border-bottom: none;\n}\n.z-actionsheet-items li.z-actionsheet-item[data-v-5df07e57] {\n  color: #41b883;\n  cursor: pointer;\n}\n.z-actionsheet-items li.z-actionsheet-button[data-v-5df07e57] {\n  margin-top: 5px;\n  color: #999;\n  cursor: pointer;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-actionsheet',

	  props: {
	    show: {
	      type: Boolean,
	      required: true
	    },

	    lis: {
	      type: Array,
	      required: true
	    },

	    title: String,

	    closeText: {
	      type: String,
	      default: '取消'
	    }
	  },
	  methods: {
	    closeActionSheet: function closeActionSheet() {
	      this.$emit('close');
	    },
	    clickItem: function clickItem(id) {
	      if (id) {
	        this.$emit('click' + id);
	      }
	    }
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-actionsheet-wrapper",
	    on: {
	      "touchmove": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, [_vm._h('z-dimmer', {
	    attrs: {
	      "show": _vm.show
	    },
	    on: {
	      "click": _vm.closeActionSheet
	    }
	  }), " ", _vm._h('transition', {
	    attrs: {
	      "name": "z-actionsheet-items"
	    }
	  }, [_vm._h('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "z-actionsheet-items"
	  }, [(_vm.title) ? _vm._h('li', {
	    staticClass: "z-actionsheet-title"
	  }, [_vm._s(_vm.title)]) : _vm._e(), " ", _vm._l((_vm.lis), function(li) {
	    return _vm._h('li', {
	      staticClass: "z-actionsheet-item",
	      on: {
	        "click": function($event) {
	          _vm.clickItem(li.id)
	        }
	      }
	    }, [_vm._h('a', {
	      attrs: {
	        "href": li.href,
	        "target": "_blank"
	      }
	    }, [_vm._s(li.text)])])
	  }), " ", _vm._h('li', {
	    staticClass: "z-actionsheet-button",
	    on: {
	      "click": _vm.closeActionSheet
	    }
	  }, [_vm._s(_vm.closeText)])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5df07e57", module.exports)
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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-336463c6&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-336463c6&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue");
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
	exports.push([module.id, "\n.z-aside[data-v-336463c6] {\n  background-color: #fff;\n  position: fixed;\n  z-index: 3000;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n.z-aside-left[data-v-336463c6] {\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.z-aside-slide-enter.z-aside-left[data-v-336463c6], .z-aside-slide-leave-active.z-aside-left[data-v-336463c6] {\n  -webkit-transform: translateX(-100%);\n      -ms-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.z-aside-right[data-v-336463c6] {\n  height: 100%;\n  right: 0;\n  top: 0;\n}\n.z-aside-slide-enter.z-aside-right[data-v-336463c6], .z-aside-slide-leave-active.z-aside-right[data-v-336463c6] {\n  -webkit-transform: translateX(100%);\n      -ms-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.z-aside-top[data-v-336463c6] {\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.z-aside-slide-enter.z-aside-top[data-v-336463c6], .z-aside-slide-leave-active.z-aside-top[data-v-336463c6] {\n  -webkit-transform: translateY(-100%);\n      -ms-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n.z-aside-bottom[data-v-336463c6] {\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n.z-aside-slide-enter.z-aside-bottom[data-v-336463c6], .z-aside-slide-leave-active.z-aside-bottom[data-v-336463c6] {\n  -webkit-transform: translateY(100%);\n      -ms-transform: translateY(100%);\n          transform: translateY(100%);\n}\n.z-aside-title[data-v-336463c6] {\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background-color: #fff;\n}\n.z-aside-content[data-v-336463c6] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  font-size: 14px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 54px 10px;\n}\n.z-aside-footer[data-v-336463c6] {\n  height: 44px;\n  line-height: 44px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  border-top: 1px solid #ccc;\n  text-align: center;\n  cursor: pointer;\n  background-color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 21 */
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
	    closeText: {
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
	      this.$emit('close');
	    }
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-aside-wrapper"
	  }, [_vm._h('z-dimmer', {
	    attrs: {
	      "show": _vm.show
	    },
	    on: {
	      "click": _vm.closeAside
	    }
	  }), " ", _vm._h('transition', {
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
	    staticClass: "z-aside",
	    class: 'z-aside-' + _vm.type
	  }, [(_vm.title) ? _vm._h('div', {
	    staticClass: "z-aside-title"
	  }, [_vm._s(_vm.title)]) : _vm._e(), " ", _vm._h('div', {
	    staticClass: "z-aside-content"
	  }, [_vm._t("default")]), " ", _vm._h('a', {
	    staticClass: "z-aside-footer",
	    on: {
	      "click": _vm.closeAside
	    }
	  }, [_vm._s(_vm.closeText)])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-336463c6", module.exports)
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
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\BackTop.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c7611608", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c7611608", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] BackTop.vue: functional components are not supported and should be defined in plain js files using render functions.")}

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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-c7611608!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./BackTop.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-c7611608!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./BackTop.vue");
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
	exports.push([module.id, "\n.z-backtop-wrapper {\n  position: fixed;\n  z-index: 1000;\n  cursor: pointer;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n  opacity: 0;\n  visibility: hidden;\n}\n.z-backtop-wrapper i {\n  font-size: 42px;\n}\n.show-top {\n  opacity: 1;\n  visibility: visible;\n}\n", ""]);

	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-backtop',

	  data: function data() {
	    return {
	      isShowTop: false
	    };
	  },


	  props: {
	    acceleration: {
	      type: Number,
	      default: 0.5
	    },

	    stime: {
	      type: Number,
	      default: 10
	    },

	    scrollTop: {
	      type: Number,
	      default: 0
	    },

	    right: {
	      type: String,
	      default: '5%'
	    },

	    bottom: {
	      type: String,
	      default: '5%'
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    if (this.scrollTop <= 0) {
	      this.isShowTop = true;
	      return false;
	    } else {
	      (function () {
	        var self = _this;
	        addEventListener('scroll', function () {
	          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
	          if (scrollTop >= self.scrollTop) {
	            self.isShowTop = true;
	          } else {
	            self.isShowTop = false;
	          }
	        });
	      })();
	    }
	  },


	  methods: {
	    goTop: function goTop() {
	      var self = this;
	      var acceleration = self.acceleration;
	      var stime = self.stime;
	      var x1 = 0;
	      var y1 = 0;
	      var x2 = 0;
	      var y2 = 0;
	      var x3 = 0;
	      var y3 = 0;
	      if (document.documentElement) {
	        x1 = document.documentElement.scrollLeft || 0;
	        y1 = document.documentElement.scrollTop || 0;
	      }
	      if (document.body) {
	        x2 = document.body.scrollLeft || 0;
	        y2 = document.body.scrollTop || 0;
	      }
	      x3 = window.scrollX || 0;
	      y3 = window.scrollY || 0;

	      var x = Math.max(x1, Math.max(x2, x3));

	      var y = Math.max(y1, Math.max(y2, y3));

	      var speeding = 1 + acceleration;
	      window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));

	      if (x > 0 || y > 0) {
	        window.setTimeout(self.goTop, stime);
	      }
	    }
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-backtop-wrapper",
	    class: {
	      'show-top': _vm.isShowTop
	    },
	    style: ({
	      'right': _vm.right,
	      'bottom': _vm.bottom
	    }),
	    on: {
	      "click": _vm.goTop
	    }
	  }, [_vm._t("default", [_vm._h('i', {
	    staticClass: "iconfont icon-top"
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c7611608", module.exports)
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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-2f80a794&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Button.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-2f80a794&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Button.vue");
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
	exports.push([module.id, "\n.z-btn[data-v-2f80a794] {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #bfcbd9;\n  color: #1f2d3d;\n  -webkit-appearance: none;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 10px 15px;\n  font-size: 14px;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n}\n.z-btn[data-v-2f80a794]:focus {\n  outline: none;\n}\n.z-btn[data-v-2f80a794]:active {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.z-btn.is-loading[data-v-2f80a794] {\n  position: relative;\n  cursor: not-allowed;\n}\n.z-btn.is-loading[data-v-2f80a794]:before {\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  -webkit-border-radius: inherit;\n          border-radius: inherit;\n  background-color: rgba(255, 255, 255, 0.35);\n}\n.z-btn.is-disabled[data-v-2f80a794] {\n  background-color: #999;\n  border-color: #999;\n  color: #fff;\n  cursor: not-allowed;\n}\n.z-btn.is-disabled[data-v-2f80a794]:hover {\n  background-color: #999;\n  border-color: #999;\n  color: #fff;\n}\n.z-btn-default[data-v-2f80a794] {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.z-btn-default[data-v-2f80a794]:hover {\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.z-btn-primary[data-v-2f80a794] {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd;\n}\n.z-btn-primary[data-v-2f80a794]:hover {\n  background-color: #3071a9;\n  border-color: #285e8e;\n}\n.z-btn-success[data-v-2f80a794] {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.z-btn-success[data-v-2f80a794]:hover {\n  background-color: #449d44;\n  border-color: #398439;\n}\n.z-btn-info[data-v-2f80a794] {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.z-btn-info[data-v-2f80a794]:hover {\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.z-btn-warning[data-v-2f80a794] {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.z-btn-warning[data-v-2f80a794]:hover {\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.z-btn-danger[data-v-2f80a794] {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.z-btn-danger[data-v-2f80a794]:hover {\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.icon-loading[data-v-2f80a794] {\n  -webkit-animation: rotating 1s linear infinite;\n          animation: rotating 1s linear infinite;\n  font-size: inherit;\n  speak: none;\n  font-style: normal;\n  font-weight: 400;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  vertical-align: baseline;\n  display: inline-block;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@-webkit-keyframes rotating {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(1turn);\n            transform: rotate(1turn);\n}\n}\n@keyframes rotating {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(1turn);\n            transform: rotate(1turn);\n}\n}\n", ""]);

	// exports


/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-button',
	  props: {
	    type: {
	      type: String,
	      default: "default"
	    },
	    loading: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	  methods: {
	    onClick: function onClick() {
	      if (this.loading || this.disabled) {
	        return;
	      }

	      this.$emit('click');
	    }
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('button', {
	    staticClass: "z-btn",
	    class: ['z-btn-' + _vm.type, {
	      'is-loading': _vm.loading
	    }, {
	      'is-disabled': _vm.disabled
	    }],
	    on: {
	      "click": _vm.onClick
	    }
	  }, [(_vm.loading) ? _vm._h('i', {
	    staticClass: "iconfont icon-loading"
	  }) : _vm._e(), " ", _vm._h('span', [_vm._t("default")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2f80a794", module.exports)
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
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Carrousel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2a90d8e4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2a90d8e4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Carrousel.vue: functional components are not supported and should be defined in plain js files using render functions.")}

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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-2a90d8e4!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Carrousel.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-2a90d8e4!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Carrousel.vue");
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
	exports.push([module.id, "\n.z-carrousel-wrapper {\n  overflow: hidden;\n}\n.z-carrousel-wrapper ul {\n  white-space: nowrap;\n  font-size: 0;\n}\n.z-carrousel-wrapper ul li {\n  list-style: none;\n  display: inline-block;\n}\n.z-carrousel-wrapper ul.is-transition {\n  -webkit-transition: all 300ms ease-out;\n  transition: all 300ms ease-out;\n}\n.z-carrousel-wrapper ul.dots {\n  position: relative;\n  bottom: 25px;\n  text-align: center;\n}\n.z-carrousel-wrapper ul.dots li.dot {\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  -webkit-border-radius: 100%;\n          border-radius: 100%;\n  margin: 0 5px;\n  background-color: #ccc;\n  cursor: pointer;\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n}\n.z-carrousel-wrapper ul.dots li.is-current {\n  background-color: #41b883;\n}\n", ""]);

	// exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ImageInput = __webpack_require__(37);

	var _ImageInput2 = _interopRequireDefault(_ImageInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'z-carrousel',

	  data: function data() {
	    return {
	      i: 1,
	      isTransition: true,
	      timer: null,
	      isTouch: false,
	      startX: 0,
	      pageX: 0,
	      offsetX: 0,
	      touchTime: 0,
	      offsetTime: 0,
	      isImagesReady: false
	    };
	  },


	  props: {
	    width: {
	      type: Number,
	      require: true
	    },
	    height: {
	      type: Number,
	      require: true
	    },
	    images: {
	      type: Array,
	      require: true
	    },
	    delay: {
	      type: Number,
	      default: 3000
	    },
	    isShowIndex: {
	      type: Boolean,
	      default: true
	    },
	    type: {
	      type: String,
	      default: 'next'
	    },
	    autoplay: {
	      type: Boolean,
	      default: false
	    }
	  },

	  mounted: function mounted() {
	    this.images.unshift(this.images[this.images.length - 1]);
	    this.images.push(this.images[1]);

	    this.isImagesReady = true;

	    if (this.autoplay) {
	      this.startCarrousel(this.type);
	    }

	    var that = this;

	    document.getElementById("z-carrousel").addEventListener("transitionend", function () {
	      if (that.i >= that.images.length - 1) {
	        that.isTransition = false;
	        that.i = 1;
	      } else if (that.i <= 0) {
	        that.isTransition = false;
	        that.i = that.images.length - 2;
	      }
	    });
	  },


	  components: {
	    zImageinput: _ImageInput2.default
	  },

	  watch: {
	    'pageX': function pageX(newVal, oldVal) {
	      if (oldVal !== 0 && this.isTouch === true) {
	        this.offsetX = this.offsetX + (oldVal - newVal);
	      }
	    },

	    'touchTime': function touchTime(newVal, oldVal) {
	      if (oldVal !== 0) {
	        this.offsetTime = newVal - oldVal;
	      }
	    }
	  },

	  computed: {
	    'isPc': function isPc() {
	      var userAgentInfo = navigator.userAgent;
	      var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
	      var flag = true;
	      for (var i = 0; i < Agents.length; i++) {
	        if (userAgentInfo.indexOf(Agents[i]) > 0) {
	          flag = false;
	          break;
	        }
	      }
	      return flag;
	    }
	  },

	  methods: {
	    startTouch: function startTouch(event) {
	      this.stopCarrousel();

	      var touch = event.targetTouches[0];

	      this.touchTime = new Date().getTime();

	      this.pageX = touch.pageX;
	      this.startX = this.pageX;

	      this.offsetX = this.i * this.width;
	      this.isTouch = true;

	      document.body.addEventListener('touchmove touchstart', function (event) {
	        event.preventDefault();
	        event.stopPropagation();
	      });
	    },
	    moveTouch: function moveTouch(event) {
	      var touch = event.targetTouches[0];

	      this.pageX = touch.pageX;

	      document.body.addEventListener('touchmove touchstart', function (event) {
	        event.preventDefault();
	        event.stopPropagation();
	      });
	    },
	    endTouch: function endTouch() {
	      this.isTransition = true;

	      if (this.pageX - this.startX > this.width / 2) {
	        this.i--;
	      } else if (this.startX - this.pageX > this.width / 2) {
	        this.i++;
	      }

	      this.pageX = 0;
	      this.offsetX = 0;
	      this.isTouch = false;

	      if (this.autoplay) {
	        this.startCarrousel();
	      }
	    },
	    startCarrousel: function startCarrousel(type) {
	      var that = this;
	      that.timer = setInterval(function () {
	        that.isTransition = true;
	        if (that.type === 'pre') {
	          that.i--;
	        } else {
	          that.i++;
	        }
	      }, that.delay);
	    },
	    stopCarrousel: function stopCarrousel() {
	      clearInterval(this.timer);
	      this.timer = null;
	    },
	    chooseImage: function chooseImage(index) {
	      this.stopCarrousel();

	      this.isTransition = true;
	      this.i = index + 1;

	      if (this.autoplay) {
	        this.startCarrousel();
	      }
	    }
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(38)

	/* script */
	__vue_exports__ = __webpack_require__(40)

	/* template */
	var __vue_template__ = __webpack_require__(41)
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-03342411&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./ImageInput.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-03342411&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./ImageInput.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-image-wraper[data-v-03342411] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n}\n.z-image-wraper img[data-v-03342411]{\n  display: inline-block;\n  position: absolute;\n}\n", ""]);

	// exports


/***/ },
/* 40 */
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-image-wraper",
	    style: ({
	      width: _vm.width + 'px',
	      height: _vm.height + 'px'
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-carrousel-wrapper",
	    style: ({
	      'width': _vm.width + 'px',
	      'height': _vm.height + 'px'
	    }),
	    attrs: {
	      "id": "z-carrousel-wrapper"
	    },
	    on: {
	      "touchstart": function($event) {
	        $event.stopPropagation();
	        _vm.startTouch($event)
	      },
	      "touchmove": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.moveTouch($event)
	      },
	      "touchend": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.endTouch($event)
	      }
	    }
	  }, [_vm._h('ul', {
	    class: {
	      'is-transition': _vm.isTransition
	    },
	    style: ({
	      'width': _vm.images.length * _vm.width + 'px',
	      'height': _vm.height + 'px',
	      'transform': _vm.isTouch ? 'translateX(-' + _vm.offsetX + 'px)' : 'translateX(-' + (_vm.i * _vm.width) + 'px)'
	    }),
	    attrs: {
	      "id": "z-carrousel"
	    }
	  }, [_vm._l((_vm.images), function(image) {
	    return _vm._h('li', [_vm._h('a', {
	      attrs: {
	        "href": image.href
	      }
	    }, [(_vm.isImagesReady) ? _vm._h('z-imageinput', {
	      attrs: {
	        "width": _vm.width,
	        "height": _vm.height,
	        "src": image.src
	      }
	    }) : _vm._e()])])
	  })]), " ", (_vm.images.length > 1) ? _vm._h('ul', {
	    staticClass: "dots"
	  }, [_vm._l((_vm.images.length - 2), function(li, index) {
	    return (_vm.isPc) ? _vm._h('li', {
	      staticClass: "dot",
	      class: {
	        'is-current': (index === (_vm.i - 1)) || ((index === 0) && (_vm.i === _vm.images.length - 1)) || ((index === _vm.images.length - 3) && (_vm.i === 0))
	      },
	      on: {
	        "click": function($event) {
	          $event.stopPropagation();
	          $event.preventDefault();
	          _vm.chooseImage(index)
	        }
	      }
	    }, [_vm._s(_vm.isShowIndex ? (index + 1) : '')]) : _vm._e()
	  }), " ", _vm._l((_vm.images.length - 2), function(li, index) {
	    return (!_vm.isPc) ? _vm._h('li', {
	      staticClass: "dot",
	      class: {
	        'is-current': (index === (_vm.i - 1)) || ((index === 0) && (_vm.i === _vm.images.length - 1)) || ((index === _vm.images.length - 3) && (_vm.i === 0))
	      },
	      on: {
	        "touchstart": function($event) {
	          $event.stopPropagation();
	          $event.preventDefault();
	          _vm.chooseImage(index)
	        },
	        "touchmove": function($event) {
	          $event.stopPropagation();
	          $event.preventDefault();
	        },
	        "touchend": function($event) {
	          $event.stopPropagation();
	          $event.preventDefault();
	        }
	      }
	    }, [_vm._s(_vm.isShowIndex ? (index + 1) : '')]) : _vm._e()
	  })]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2a90d8e4", module.exports)
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
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Dimmer.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6adb3698"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6adb3698", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6adb3698", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Dimmer.vue: functional components are not supported and should be defined in plain js files using render functions.")}

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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-6adb3698&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Dimmer.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-6adb3698&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Dimmer.vue");
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
	exports.push([module.id, "\n.z-dimmer[data-v-6adb3698] {\n  position: fixed;\n  z-index: 2000;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  opacity: 0.5;\n}\n.z-dimmer.z-dimmer-enter[data-v-6adb3698],\n.z-dimmer.z-dimmer-leave-active[data-v-6adb3698] {\n  opacity: 0;\n}\n.z-dimmer.z-dimmer-enter-active[data-v-6adb3698],\n.z-dimmer.z-dimmer-leave-active[data-v-6adb3698] {\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n", ""]);

	// exports


/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-dimmer',

	  props: {
	    show: {
	      type: Boolean,
	      required: true
	    }
	  },

	  watch: {
	    show: function show(val) {
	      if (val) {
	        this.addStyleForBody();
	      } else {
	        this.removeStyleForBody();
	      }
	    }
	  },

	  methods: {
	    addStyleForBody: function addStyleForBody() {
	      document.querySelector('body').style.overflow = 'hidden';
	    },
	    removeStyleForBody: function removeStyleForBody() {
	      document.querySelector('body').style.overflow = '';
	    },
	    clickEvent: function clickEvent() {
	      this.$emit('click');
	    }
	  }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('transition', {
	    attrs: {
	      "name": "z-dimmer"
	    }
	  }, [(_vm.show) ? _vm._h('div', {
	    staticClass: "z-dimmer",
	    on: {
	      "touchmove": function($event) {
	        $event.preventDefault();
	      },
	      "click": _vm.clickEvent
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6adb3698", module.exports)
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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-4d56fcb0&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Dropmenu.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-4d56fcb0&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Dropmenu.vue");
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
	exports.push([module.id, "\n.z-dropmenu-title[data-v-4d56fcb0] {\n  cursor: pointer;\n  position: relative;\n}\n.z-dropmenu-title>a[data-v-4d56fcb0] {\n  display: block;\n  color: #34495e;\n}\n.z-dropmenu-arrow[data-v-4d56fcb0] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -1px;\n  margin-left: 6px;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 5px solid #ccc;\n}\n.z-dropmenu[data-v-4d56fcb0] {\n  position: absolute;\n  z-index: 9999;\n  top: 100%;\n  left: 0;\n  background-color: #fff;\n  padding: 10px 0;\n  border: 1px solid #ddd;\n  border-bottom-color: #ccc;\n  text-align: left;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n  overflow: hidden;\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n}\n.z-dropmenu-show-enter-active[data-v-4d56fcb0],.z-dropmenu-show-leave-active[data-v-4d56fcb0] {\n  top: 100%\n}\n.z-dropmenu-show-enter[data-v-4d56fcb0],.z-dropmenu-show-leave-active[data-v-4d56fcb0] {\n  top: 50%;\n  opacity: 0;\n}\n.z-dropmenu li[data-v-4d56fcb0] {\n  list-style: none;\n  line-height: 1.8em;\n  white-space:nowrap;\n}\n.z-dropmenu li a[data-v-4d56fcb0] {\n  color: #7f8c8d;\n  font-size: 0.9em;\n  display: block;\n  padding: 0 30px 0 20px;\n}\n.z-dropmenu li a[data-v-4d56fcb0]:hover {\n  color: rgb(65, 184, 131);\n}\n", ""]);

	// exports


/***/ },
/* 51 */
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
/* 52 */
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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-06db8f7e&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./InputNumber.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-06db8f7e&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./InputNumber.vue");
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
	exports.push([module.id, "\n.z-inputnumber[data-v-06db8f7e] {\n  font-size: 0px;\n  display: inline-block;\n  overflow: hidden;\n}\n.z-inputnumber .z-inputnumber-button[data-v-06db8f7e] {\n  color: #999;\n  font-weight: bold;\n  font-size: 24px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  display: inline-block;\n  border: 1px solid #999;\n  float: left;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.z-inputnumber .z-inputnumber-button.disabled[data-v-06db8f7e] {\n  cursor: not-allowed;\n  color: #ccc;\n}\n.z-inputnumber input[data-v-06db8f7e] {\n  height: 30px;\n  line-height: 30px;\n  width: 48px;\n  font-size: 24px;\n  border-top: 1px solid #999;\n  border-right: none;\n  border-bottom: 1px solid #999;\n  border-left: none;\n  padding: 0 10px;\n  text-align: center;\n  float: left;\n  -webkit-border-radius: 0;\n          border-radius: 0;\n}\n.z-inputnumber .placeholder[data-v-06db8f7e] {\n  height: 30px;\n  line-height: 30px;\n  width: 48px;\n  font-size: 24px;\n  border-top: 1px solid #999;\n  border-right: none;\n  border-bottom: 1px solid #999;\n  border-left: none;\n  padding: 0 10px;\n  text-align: center;\n  float: left;\n  -webkit-border-radius: 0;\n          border-radius: 0;\n  color: #999;\n}\n", ""]);

	// exports


/***/ },
/* 56 */
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
	        this.$emit('change', val);
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
/* 57 */
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(59)

	/* script */
	__vue_exports__ = __webpack_require__(61)

	/* template */
	var __vue_template__ = __webpack_require__(62)
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-79d9d6bb&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-79d9d6bb&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-modal[data-v-79d9d6bb] {\n  width: 300px;\n  margin: 0px auto;\n  background-color: #fff;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n  overflow: hidden;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  position: fixed;\n  z-index: 3000;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.z-modal-expand-enter[data-v-79d9d6bb], .z-modal-expand-leave-active[data-v-79d9d6bb] {\n  opacity: 0;\n}\n.z-modal-expand-enter.z-modal[data-v-79d9d6bb], .z-modal-expand-leave-active.z-modal[data-v-79d9d6bb]{\n  -webkit-transform: translate(-50%, -50%) scale(0.5);\n  -ms-transform: translate(-50%, -50%) scale(0.5);\n      transform: translate(-50%, -50%) scale(0.5);\n}\n.z-modal-title[data-v-79d9d6bb] {\n  line-height: 44px;\n  text-align: center;\n}\n.z-modal-content[data-v-79d9d6bb] {\n  padding: 0 12px 12px;\n  text-align: left;\n}\n.z-modal-footer[data-v-79d9d6bb] {\n  border-top: 1px solid #ccc;\n  display: table;\n  width: 100%;\n}\n.z-btn-modal[data-v-79d9d6bb] {\n  display: table-cell;\n  text-align: center;\n  cursor: pointer;\n  line-height: 44px;\n}\n.z-btn-modal[data-v-79d9d6bb]:nth-child(2) {\n  border-left: 1px solid #ccc;\n}\n.z-btn-modal-sure[data-v-79d9d6bb] {\n  background-color: rgb(65, 184, 131);\n  color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 61 */
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
	      default: function _default() {}
	    },
	    cancelEvent: {
	      type: Function,
	      default: function _default() {}
	    }
	  },
	  methods: {
	    sureFunc: function sureFunc() {
	      this.$emit("close");
	      this.sureEvent();
	    },
	    cancelFunc: function cancelFunc() {
	      this.$emit("close");
	      this.cancelEvent();
	    }
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-modal-wrapper"
	  }, [_vm._h('z-dimmer', {
	    attrs: {
	      "show": _vm.show
	    }
	  }), " ", _vm._h('transition', {
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
	    staticClass: "z-modal"
	  }, [_vm._h('div', {
	    staticClass: "z-modal-title"
	  }, ["\n        " + _vm._s(_vm.title) + "\n      "]), " ", _vm._h('div', {
	    staticClass: "z-modal-content"
	  }, ["\n        " + _vm._s(_vm.content) + "\n      "]), " ", _vm._h('div', {
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
	  }, [_vm._s(_vm.sure)])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-79d9d6bb", module.exports)
	  }
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(64)

	/* script */
	__vue_exports__ = __webpack_require__(66)

	/* template */
	var __vue_template__ = __webpack_require__(67)
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-0d7ffd72&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-0d7ffd72&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-navbar[data-v-0d7ffd72] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fff;\n  -webkit-box-shadow: 0 0 4px rgba(0,0,0,0.25);\n          box-shadow: 0 0 4px rgba(0,0,0,0.25);\n  width: 100%;\n}\n.z-navbar-fix[data-v-0d7ffd72] {\n  position: fixed;\n  top: 0;\n  z-index: 1000;\n}\n", ""]);

	// exports


/***/ },
/* 66 */
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
/* 67 */
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(69)

	/* script */
	__vue_exports__ = __webpack_require__(71)

	/* template */
	var __vue_template__ = __webpack_require__(72)
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-6d066208&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-6d066208&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-pagination[data-v-6d066208] {\n  overflow: hidden;\n}\n.z-pagination ul[data-v-6d066208] {\n  overflow: hidden;\n  float: left;\n}\n.z-pagination ul li[data-v-6d066208] {\n  float: left;\n  list-style: none;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.z-pagination ul li[data-v-6d066208]:last-child {\n  border-right: 1px solid #ccc;\n}\n.z-pagination ul li.active[data-v-6d066208] {\n  background-color: #5bc0de;\n  color: #fff;\n}\n.z-pagination ul li.arrow[data-v-6d066208] {\n  color: #999;\n  font-weight: bold;\n}\n.z-pagination ul li.arrow.disabled[data-v-6d066208] {\n  color: #e4e4e4;\n  cursor: not-allowed;\n}\n.z-pagination .input-page[data-v-6d066208] {\n  float: left;\n  margin-left: 10px;\n  height: 30px;\n  line-height: 30px;\n}\n.z-pagination .input-page input[data-v-6d066208] {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  vertical-align: bottom;\n  text-align: center;\n  margin: 0 5px;\n  padding: 0;\n  border: 1px solid #ccc;\n}\n", ""]);

	// exports


/***/ },
/* 71 */
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
/* 72 */
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(74)

	/* script */
	__vue_exports__ = __webpack_require__(76)

	/* template */
	var __vue_template__ = __webpack_require__(77)
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-f9d67ae2!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Progress.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-f9d67ae2!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Progress.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-progress-wraper {\n  position: fixed;\n  left: 0;\n  z-index: 10000;\n  width: 100%;\n  height: 4px;\n  background-color: transparent;\n}\n.z-progress-wraper .z-progress {\n  height: 100%;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.z-progress-top {\n  top: 0;\n}\n.z-progress-bottom {\n  bottom: 0;\n}\n", ""]);

	// exports


/***/ },
/* 76 */
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
/* 77 */
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(79)

	/* script */
	__vue_exports__ = __webpack_require__(81)

	/* template */
	var __vue_template__ = __webpack_require__(82)
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
	__vue_options__.__file = "D:\\work\\vue-components\\src\\components\\Radio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-829ecdee"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-829ecdee", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-829ecdee", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Radio.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-829ecdee&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-829ecdee&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-radio[data-v-829ecdee] {\n  display: inline-block;\n  position: relative;\n  width: 10px;\n  height: 10px;\n  -webkit-border-radius: 100%;\n          border-radius: 100%;\n  border: 2px solid #333;\n}\n.z-radio-checked[data-v-829ecdee] {\n  border: 2px solid red;\n}\n.z-radio-checked[data-v-829ecdee]:after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 6px;\n  height: 6px;\n  -webkit-border-radius: 100%;\n          border-radius: 100%;\n  background-color: red;\n}\n.z-radio-disabled[data-v-829ecdee] {\n  border: 2px solid #999;\n}\n.z-radio-disabled[data-v-829ecdee]:after {\n  background-color: #999;\n}\ninput[data-v-829ecdee] {\n  display: none;\n}\n", ""]);

	// exports


/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-radio',

	  data: function data() {
	    return {
	      trueValue: this.value
	    };
	  },


	  props: {
	    value: [String, Number],
	    label: {
	      type: [String, Number],
	      require: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    name: String
	  },

	  computed: {
	    isChecked: function isChecked() {
	      return this.trueValue === this.label;
	    }
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('label', {
	    staticClass: "z-radio-wrapper"
	  }, [_vm._h('span', {
	    class: ['z-radio', {
	      'z-radio-checked': _vm.isChecked
	    }, {
	      'z-radio-disabled': _vm.disabled
	    }]
	  }), " ", _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.trueValue),
	      expression: "trueValue"
	    }],
	    attrs: {
	      "type": "radio",
	      "disabled": _vm.disabled,
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.label,
	      "checked": _vm._q(_vm.trueValue, _vm.label)
	    },
	    on: {
	      "change": function($event) {
	        _vm.trueValue = _vm.label
	      }
	    }
	  }), "\n  " + _vm._s(_vm.label) + "\n"])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-829ecdee", module.exports)
	  }
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(84)

	/* script */
	__vue_exports__ = __webpack_require__(86)

	/* template */
	var __vue_template__ = __webpack_require__(87)
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-056e6696&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-056e6696&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-switch[data-v-056e6696] {\n  display: inline-block;\n  background-color: #ccc;\n  cursor: pointer;\n  position: relative;\n  border: 1px solid #eee;\n  -webkit-transition: background-color 0.2s;\n  transition: background-color 0.2s;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n.z-switch span[data-v-056e6696] {\n  width: 50%;\n  text-align: center;\n  color: #fff;\n  float: left;\n  font-size: 12px;\n}\n.z-switch-button[data-v-056e6696] {\n  display: inline-block;\n  -webkit-border-radius: 100%;\n          border-radius: 100%;\n  background-color: #fff;\n  position: absolute;\n  -webkit-transition: left .2s;\n  transition: left .2s;\n}\n.z-switch.is-disabled[data-v-056e6696] {\n  position: relative;\n  cursor: not-allowed;\n}\n.z-switch.is-disabled .z-switch-button[data-v-056e6696] {\n  background-color: #ccc;\n}\n", ""]);

	// exports


/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'z-switch',

	  data: function data() {
	    return {
	      isOpen: this.defaultChecked
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
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    defaultChecked: {
	      type: Boolean,
	      default: false
	    },
	    onText: String,
	    offText: String,
	    name: String
	  },

	  computed: {
	    switchStyle: function switchStyle() {
	      var backgroundColor = '';
	      var borderColor = '';

	      if (this.disabled) {
	        backgroundColor = '#999';
	      } else if (this.isOpen) {
	        backgroundColor = this.bgc;
	        borderColor = this.bgc;
	      }

	      return {
	        width: this.width + 'px',
	        height: this.height + 'px',
	        borderRadius: this.height + 'px',
	        backgroundColor: backgroundColor,
	        borderColor: borderColor
	      };
	    },
	    switchBtnStyle: function switchBtnStyle() {
	      return {
	        width: this.height + 'px',
	        height: this.height + 'px',
	        left: this.isOpen ? this.width - this.height + 'px' : 0 + 'px'
	      };
	    }
	  },

	  methods: {
	    toggleSwitch: function toggleSwitch() {
	      if (this.disabled) {
	        return;
	      }

	      this.isOpen = !this.isOpen;
	      this.$emit('change', this.isOpen);
	    }
	  }
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "z-switch",
	    class: {
	      'is-disabled': _vm.disabled
	    },
	    style: (_vm.switchStyle),
	    on: {
	      "click": _vm.toggleSwitch
	    }
	  }, [(_vm.onText) ? _vm._h('span', {
	    style: ({
	      'line-height': _vm.height + 'px'
	    })
	  }, [_vm._s(_vm.onText)]) : _vm._e(), " ", _vm._h('div', {
	    staticClass: "z-switch-button",
	    style: (_vm.switchBtnStyle)
	  }), " ", (_vm.offText) ? _vm._h('span', {
	    style: ({
	      'line-height': _vm.height + 'px'
	    })
	  }, [_vm._s(_vm.offText)]) : _vm._e(), " ", _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.isOpen),
	      expression: "isOpen"
	    }],
	    staticStyle: {
	      "display": "none"
	    },
	    attrs: {
	      "type": "checkbox",
	      "name": _vm.name,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "checked": Array.isArray(_vm.isOpen) ? _vm._i(_vm.isOpen, null) > -1 : _vm._q(_vm.isOpen, true)
	    },
	    on: {
	      "change": function($event) {
	        var $$a = _vm.isOpen,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.isOpen = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.isOpen = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.isOpen = $$c
	        }
	      }
	    }
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(89)

	/* script */
	__vue_exports__ = __webpack_require__(91)

	/* template */
	var __vue_template__ = __webpack_require__(92)
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-fc02c148&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Table.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/style-rewriter.js?id=data-v-fc02c148&scoped=true!./../../node_modules/.npminstall/vue-loader/10.0.1/vue-loader/lib/selector.js?type=styles&index=0!./Table.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-table-wraper[data-v-fc02c148] {\n  max-width: 100%;\n  overflow-x: auto;\n}\n.z-table[data-v-fc02c148] {\n  max-width: 100%;\n  border: 1px solid #ddd;\n  border-collapse: collapse;\n}\n.z-table>caption[data-v-fc02c148] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\n.z-table>thead>tr>th[data-v-fc02c148],\n.z-table>tbody>tr>td[data-v-fc02c148],\n.z-table>tfoot>tr>td[data-v-fc02c148] {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: left;\n}\n.z-table>thead>tr>th[data-v-fc02c148] {\n  border-bottom-width: 2px;\n}\n", ""]);

	// exports


/***/ },
/* 91 */
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
/* 92 */
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