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

	var _Col = __webpack_require__(9);

	var _Col2 = _interopRequireDefault(_Col);

	var _ActionSheet = __webpack_require__(14);

	var _ActionSheet2 = _interopRequireDefault(_ActionSheet);

	var _Aside = __webpack_require__(19);

	var _Aside2 = _interopRequireDefault(_Aside);

	var _BackTop = __webpack_require__(24);

	var _BackTop2 = _interopRequireDefault(_BackTop);

	var _Button = __webpack_require__(29);

	var _Button2 = _interopRequireDefault(_Button);

	var _Carrousel = __webpack_require__(34);

	var _Carrousel2 = _interopRequireDefault(_Carrousel);

	var _Dimmer = __webpack_require__(44);

	var _Dimmer2 = _interopRequireDefault(_Dimmer);

	var _Dropmenu = __webpack_require__(49);

	var _Dropmenu2 = _interopRequireDefault(_Dropmenu);

	var _ImageInput = __webpack_require__(38);

	var _ImageInput2 = _interopRequireDefault(_ImageInput);

	var _InputNumber = __webpack_require__(54);

	var _InputNumber2 = _interopRequireDefault(_InputNumber);

	var _Modal = __webpack_require__(59);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Navbar = __webpack_require__(64);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Pagination = __webpack_require__(69);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	var _Progress = __webpack_require__(74);

	var _Progress2 = _interopRequireDefault(_Progress);

	var _Radio = __webpack_require__(79);

	var _Radio2 = _interopRequireDefault(_Radio);

	var _Switch = __webpack_require__(84);

	var _Switch2 = _interopRequireDefault(_Switch);

	var _Table = __webpack_require__(89);

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

	
	/* styles */
	__webpack_require__(2)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(7),
	  /* template */
	  __webpack_require__(8),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Row.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Row.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-429a91c0", Component.options)
	  } else {
	    hotAPI.reload("data-v-429a91c0", Component.options)
	  }
	})()}

	module.exports = Component.exports


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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-429a91c0!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Row.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-429a91c0!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Row.vue");
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

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "z-row",
	    style: (_vm.style)
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-429a91c0", module.exports)
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(10)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(13),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Col.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Col.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-28821666", Component.options)
	  } else {
	    hotAPI.reload("data-v-28821666", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-28821666!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Col.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-28821666!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Col.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-col-24,\n.z-col-23,\n.z-col-22,\n.z-col-21,\n.z-col-20,\n.z-col-19,\n.z-col-18,\n.z-col-17,\n.z-col-16,\n.z-col-15,\n.z-col-14,\n.z-col-13,\n.z-col-12,\n.z-col-11,\n.z-col-10,\n.z-col-9,\n.z-col-8,\n.z-col-7,\n.z-col-6,\n.z-col-5,\n.z-col-4,\n.z-col-3,\n.z-col-2,\n.z-col-1 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  float: left;\n  position: relative;\n}\n.z-col-24 {\n  width: 100%;\n}\n.z-col-23 {\n  width: 95.83333333%;\n}\n.z-col-22 {\n  width: 91.66666667%;\n}\n.z-col-21 {\n  width: 87.5%;\n}\n.z-col-20 {\n  width: 83.33333333%;\n}\n.z-col-19 {\n  width: 79.16666667%;\n}\n.z-col-18 {\n  width: 75%;\n}\n.z-col-17 {\n  width: 70.83333333%;\n}\n.z-col-16 {\n  width: 66.66666667%;\n}\n.z-col-15 {\n  width: 62.5%;\n}\n.z-col-14 {\n  width: 58.33333333%;\n}\n.z-col-13 {\n  width: 54.16666667%;\n}\n.z-col-12 {\n  width: 50%;\n}\n.z-col-11 {\n  width: 45.83333333%;\n}\n.z-col-10 {\n  width: 41.66666667%;\n}\n.z-col-9 {\n  width: 37.5%;\n}\n.z-col-8 {\n  width: 33.33333333%;\n}\n.z-col-7 {\n  width: 29.16666667%;\n}\n.z-col-6 {\n  width: 25%;\n}\n.z-col-5 {\n  width: 20.83333333%;\n}\n.z-col-4 {\n  width: 16.66666667%;\n}\n.z-col-3 {\n  width: 12.5%;\n}\n.z-col-2 {\n  width: 8.33333333%;\n}\n.z-col-1 {\n  width: 4.16666667%;\n}\n.z-col-offset-24 {\n  margin-left: 100%;\n}\n.z-col-offset-23 {\n  margin-left: 95.83333333%;\n}\n.z-col-offset-22 {\n  margin-left: 91.66666667%;\n}\n.z-col-offset-21 {\n  margin-left: 87.5%;\n}\n.z-col-offset-20 {\n  margin-left: 83.33333333%;\n}\n.z-col-offset-19 {\n  margin-left: 79.16666667%;\n}\n.z-col-offset-18 {\n  margin-left: 75%;\n}\n.z-col-offset-17 {\n  margin-left: 70.83333333%;\n}\n.z-col-offset-16 {\n  margin-left: 66.66666667%;\n}\n.z-col-offset-15 {\n  margin-left: 62.5%;\n}\n.z-col-offset-14 {\n  margin-left: 58.33333333%;\n}\n.z-col-offset-13 {\n  margin-left: 54.16666667%;\n}\n.z-col-offset-12 {\n  margin-left: 50%;\n}\n.z-col-offset-11 {\n  margin-left: 45.83333333%;\n}\n.z-col-offset-10 {\n  margin-left: 41.66666667%;\n}\n.z-col-offset-9 {\n  margin-left: 37.5%;\n}\n.z-col-offset-8 {\n  margin-left: 33.33333333%;\n}\n.z-col-offset-7 {\n  margin-left: 29.16666667%;\n}\n.z-col-offset-6 {\n  margin-left: 25%;\n}\n.z-col-offset-5 {\n  margin-left: 20.83333333%;\n}\n.z-col-offset-4 {\n  margin-left: 16.66666667%;\n}\n.z-col-offset-3 {\n  margin-left: 12.5%;\n}\n.z-col-offset-2 {\n  margin-left: 8.33333333%;\n}\n.z-col-offset-1 {\n  margin-left: 4.16666667%;\n}\n.z-col-push-24 {\n  left: 100%;\n}\n.z-col-push-23 {\n  left: 95.83333333%;\n}\n.z-col-push-22 {\n  left: 91.66666667%;\n}\n.z-col-push-21 {\n  left: 87.5%;\n}\n.z-col-push-20 {\n  left: 83.33333333%;\n}\n.z-col-push-19 {\n  left: 79.16666667%;\n}\n.z-col-push-18 {\n  left: 75%;\n}\n.z-col-push-17 {\n  left: 70.83333333%;\n}\n.z-col-push-16 {\n  left: 66.66666667%;\n}\n.z-col-push-15 {\n  left: 62.5%;\n}\n.z-col-push-14 {\n  left: 58.33333333%;\n}\n.z-col-push-13 {\n  left: 54.16666667%;\n}\n.z-col-push-12 {\n  left: 50%;\n}\n.z-col-push-11 {\n  left: 45.83333333%;\n}\n.z-col-push-10 {\n  left: 41.66666667%;\n}\n.z-col-push-9 {\n  left: 37.5%;\n}\n.z-col-push-8 {\n  left: 33.33333333%;\n}\n.z-col-push-7 {\n  left: 29.16666667%;\n}\n.z-col-push-6 {\n  left: 25%;\n}\n.z-col-push-5 {\n  left: 20.83333333%;\n}\n.z-col-push-4 {\n  left: 16.66666667%;\n}\n.z-col-push-3 {\n  left: 12.5%;\n}\n.z-col-push-2 {\n  left: 8.33333333%;\n}\n.z-col-push-1 {\n  left: 4.16666667%;\n}\n.z-col-pull-24 {\n  right: 100%;\n}\n.z-col-pull-23 {\n  right: 95.83333333%;\n}\n.z-col-pull-22 {\n  right: 91.66666667%;\n}\n.z-col-pull-21 {\n  right: 87.5%;\n}\n.z-col-pull-20 {\n  right: 83.33333333%;\n}\n.z-col-pull-19 {\n  right: 79.16666667%;\n}\n.z-col-pull-18 {\n  right: 75%;\n}\n.z-col-pull-17 {\n  right: 70.83333333%;\n}\n.z-col-pull-16 {\n  right: 66.66666667%;\n}\n.z-col-pull-15 {\n  right: 62.5%;\n}\n.z-col-pull-14 {\n  right: 58.33333333%;\n}\n.z-col-pull-13 {\n  right: 54.16666667%;\n}\n.z-col-pull-12 {\n  right: 50%;\n}\n.z-col-pull-11 {\n  right: 45.83333333%;\n}\n.z-col-pull-10 {\n  right: 41.66666667%;\n}\n.z-col-pull-9 {\n  right: 37.5%;\n}\n.z-col-pull-8 {\n  right: 33.33333333%;\n}\n.z-col-pull-7 {\n  right: 29.16666667%;\n}\n.z-col-pull-6 {\n  right: 25%;\n}\n.z-col-pull-5 {\n  right: 20.83333333%;\n}\n.z-col-pull-4 {\n  right: 16.66666667%;\n}\n.z-col-pull-3 {\n  right: 12.5%;\n}\n.z-col-pull-2 {\n  right: 8.33333333%;\n}\n.z-col-pull-1 {\n  right: 4.16666667%;\n}\n", ""]);

	// exports


/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['z-col-' + _vm.span, _vm.offset ? 'z-col-offset-' + _vm.offset : '', _vm.push ? 'z-col-push-' + _vm.push : '', _vm.pull ? 'z-col-pull-' + _vm.pull : ''],
	    style: ({
	      'padding-left': _vm.gutter / 2 + 'px',
	      'padding-right': _vm.gutter / 2 + 'px'
	    })
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-28821666", module.exports)
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(15)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(17),
	  /* template */
	  __webpack_require__(18),
	  /* scopeId */
	  "data-v-034cfb2f",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\ActionSheet.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] ActionSheet.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-034cfb2f", Component.options)
	  } else {
	    hotAPI.reload("data-v-034cfb2f", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-034cfb2f&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./ActionSheet.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-034cfb2f&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./ActionSheet.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-actionsheet-items-enter[data-v-034cfb2f],\n.z-actionsheet-items-leave-active[data-v-034cfb2f] {\n  -webkit-transform: translateY(100%);\n      -ms-transform: translateY(100%);\n          transform: translateY(100%);\n  opacity: 0;\n}\n.z-actionsheet-items-enter-active[data-v-034cfb2f],\n.z-actionsheet-items-leave-active[data-v-034cfb2f] {\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n.z-actionsheet-items[data-v-034cfb2f] {\n  position: fixed;\n  z-index: 3000;\n  left: 0;\n  width: 100%;\n  bottom: 0;\n}\n.z-actionsheet-items li[data-v-034cfb2f] {\n  width: 100%;\n  text-align: center;\n  list-style: none;\n  background-color: #fff;\n}\n.z-actionsheet-items li a[data-v-034cfb2f] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  display: block;\n}\n.z-actionsheet-items li.z-actionsheet-title[data-v-034cfb2f] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.z-actionsheet-items li.z-actionsheet-item[data-v-034cfb2f],\n.z-actionsheet-items li.z-actionsheet-title[data-v-034cfb2f] {\n  border-bottom: 1px solid #eee;\n}\n.z-actionsheet-items li[data-v-034cfb2f]:nth-last-child(2) {\n  border-bottom: none;\n}\n.z-actionsheet-items li.z-actionsheet-item[data-v-034cfb2f] {\n  color: #41b883;\n  cursor: pointer;\n}\n.z-actionsheet-items li.z-actionsheet-button[data-v-034cfb2f] {\n  margin-top: 5px;\n  color: #999;\n  cursor: pointer;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n", ""]);

	// exports


/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "z-actionsheet-wrapper",
	    on: {
	      "touchmove": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, [_c('z-dimmer', {
	    attrs: {
	      "show": _vm.show
	    },
	    on: {
	      "click": _vm.closeActionSheet
	    }
	  }), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "z-actionsheet-items"
	    }
	  }, [_c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "z-actionsheet-items"
	  }, [(_vm.title) ? _c('li', {
	    staticClass: "z-actionsheet-title"
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm._l((_vm.lis), function(li) {
	    return _c('li', {
	      staticClass: "z-actionsheet-item",
	      on: {
	        "click": function($event) {
	          _vm.clickItem(li.id)
	        }
	      }
	    }, [_c('a', {
	      attrs: {
	        "href": li.href,
	        "target": "_blank"
	      }
	    }, [_vm._v(_vm._s(li.text))])])
	  }), _vm._v(" "), _c('li', {
	    staticClass: "z-actionsheet-button",
	    on: {
	      "click": _vm.closeActionSheet
	    }
	  }, [_vm._v(_vm._s(_vm.closeText))])], 2)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-034cfb2f", module.exports)
	  }
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(20)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(22),
	  /* template */
	  __webpack_require__(23),
	  /* scopeId */
	  "data-v-43b5629e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Aside.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Aside.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-43b5629e", Component.options)
	  } else {
	    hotAPI.reload("data-v-43b5629e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-43b5629e&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-43b5629e&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-aside[data-v-43b5629e] {\n  background-color: #fff;\n  position: fixed;\n  z-index: 3000;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n.z-aside-left[data-v-43b5629e] {\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.z-aside-slide-enter.z-aside-left[data-v-43b5629e], .z-aside-slide-leave-active.z-aside-left[data-v-43b5629e] {\n  -webkit-transform: translateX(-100%);\n      -ms-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.z-aside-right[data-v-43b5629e] {\n  height: 100%;\n  right: 0;\n  top: 0;\n}\n.z-aside-slide-enter.z-aside-right[data-v-43b5629e], .z-aside-slide-leave-active.z-aside-right[data-v-43b5629e] {\n  -webkit-transform: translateX(100%);\n      -ms-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.z-aside-top[data-v-43b5629e] {\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.z-aside-slide-enter.z-aside-top[data-v-43b5629e], .z-aside-slide-leave-active.z-aside-top[data-v-43b5629e] {\n  -webkit-transform: translateY(-100%);\n      -ms-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n.z-aside-bottom[data-v-43b5629e] {\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n.z-aside-slide-enter.z-aside-bottom[data-v-43b5629e], .z-aside-slide-leave-active.z-aside-bottom[data-v-43b5629e] {\n  -webkit-transform: translateY(100%);\n      -ms-transform: translateY(100%);\n          transform: translateY(100%);\n}\n.z-aside-title[data-v-43b5629e] {\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background-color: #fff;\n}\n.z-aside-content[data-v-43b5629e] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  font-size: 14px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 54px 10px;\n}\n.z-aside-footer[data-v-43b5629e] {\n  height: 44px;\n  line-height: 44px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  border-top: 1px solid #ccc;\n  text-align: center;\n  cursor: pointer;\n  background-color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "z-aside-wrapper"
	  }, [_c('z-dimmer', {
	    attrs: {
	      "show": _vm.show
	    },
	    on: {
	      "click": _vm.closeAside
	    }
	  }), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "z-aside-slide"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "z-aside",
	    class: 'z-aside-' + _vm.type
	  }, [(_vm.title) ? _c('div', {
	    staticClass: "z-aside-title"
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "z-aside-content"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('a', {
	    staticClass: "z-aside-footer",
	    on: {
	      "click": _vm.closeAside
	    }
	  }, [_vm._v(_vm._s(_vm.closeText))])])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-43b5629e", module.exports)
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(25)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(27),
	  /* template */
	  __webpack_require__(28),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\BackTop.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] BackTop.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4747c458", Component.options)
	  } else {
	    hotAPI.reload("data-v-4747c458", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-4747c458!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./BackTop.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-4747c458!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./BackTop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-backtop-wrapper {\n  position: fixed;\n  z-index: 1000;\n  cursor: pointer;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n  opacity: 0;\n  visibility: hidden;\n}\n.z-backtop-wrapper i {\n  font-size: 42px;\n}\n.show-top {\n  opacity: 1;\n  visibility: visible;\n}\n", ""]);

	// exports


/***/ },
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
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
	  }, [_vm._t("default", [_c('i', {
	    staticClass: "iconfont icon-top"
	  })])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4747c458", module.exports)
	  }
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(30)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(32),
	  /* template */
	  __webpack_require__(33),
	  /* scopeId */
	  "data-v-294f83bc",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Button.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Button.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-294f83bc", Component.options)
	  } else {
	    hotAPI.reload("data-v-294f83bc", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-294f83bc&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Button.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-294f83bc&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-btn[data-v-294f83bc] {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #bfcbd9;\n  color: #1f2d3d;\n  -webkit-appearance: none;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 10px 15px;\n  font-size: 14px;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n}\n.z-btn[data-v-294f83bc]:focus {\n  outline: none;\n}\n.z-btn[data-v-294f83bc]:active {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.z-btn.is-loading[data-v-294f83bc] {\n  position: relative;\n  cursor: not-allowed;\n}\n.z-btn.is-loading[data-v-294f83bc]:before {\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  -webkit-border-radius: inherit;\n          border-radius: inherit;\n  background-color: rgba(255, 255, 255, 0.35);\n}\n.z-btn.is-disabled[data-v-294f83bc] {\n  background-color: #999;\n  border-color: #999;\n  color: #fff;\n  cursor: not-allowed;\n}\n.z-btn.is-disabled[data-v-294f83bc]:hover {\n  background-color: #999;\n  border-color: #999;\n  color: #fff;\n}\n.z-btn-default[data-v-294f83bc] {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.z-btn-default[data-v-294f83bc]:hover {\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.z-btn-primary[data-v-294f83bc] {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd;\n}\n.z-btn-primary[data-v-294f83bc]:hover {\n  background-color: #3071a9;\n  border-color: #285e8e;\n}\n.z-btn-success[data-v-294f83bc] {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.z-btn-success[data-v-294f83bc]:hover {\n  background-color: #449d44;\n  border-color: #398439;\n}\n.z-btn-info[data-v-294f83bc] {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.z-btn-info[data-v-294f83bc]:hover {\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.z-btn-warning[data-v-294f83bc] {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.z-btn-warning[data-v-294f83bc]:hover {\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.z-btn-danger[data-v-294f83bc] {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.z-btn-danger[data-v-294f83bc]:hover {\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.icon-loading[data-v-294f83bc] {\n  -webkit-animation: rotating 1s linear infinite;\n          animation: rotating 1s linear infinite;\n  font-size: inherit;\n  speak: none;\n  font-style: normal;\n  font-weight: 400;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  vertical-align: baseline;\n  display: inline-block;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n@-webkit-keyframes rotating {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(1turn);\n            transform: rotate(1turn);\n}\n}\n@keyframes rotating {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(1turn);\n            transform: rotate(1turn);\n}\n}\n", ""]);

	// exports


/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', {
	    staticClass: "z-btn",
	    class: ['z-btn-' + _vm.type, {
	      'is-loading': _vm.loading
	    }, {
	      'is-disabled': _vm.disabled
	    }],
	    on: {
	      "click": _vm.onClick
	    }
	  }, [(_vm.loading) ? _c('i', {
	    staticClass: "iconfont icon-loading"
	  }) : _vm._e(), _vm._v(" "), _c('span', [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-294f83bc", module.exports)
	  }
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(35)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(37),
	  /* template */
	  __webpack_require__(43),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Carrousel.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Carrousel.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-cbd2a888", Component.options)
	  } else {
	    hotAPI.reload("data-v-cbd2a888", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-cbd2a888!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Carrousel.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-cbd2a888!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Carrousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-carrousel-wrapper {\n  overflow: hidden;\n}\n.z-carrousel-wrapper ul {\n  white-space: nowrap;\n  font-size: 0;\n}\n.z-carrousel-wrapper ul li {\n  list-style: none;\n  display: inline-block;\n}\n.z-carrousel-wrapper ul.is-transition {\n  -webkit-transition: all 300ms ease-out;\n  transition: all 300ms ease-out;\n}\n.z-carrousel-wrapper ul.dots {\n  position: relative;\n  bottom: 25px;\n  text-align: center;\n}\n.z-carrousel-wrapper ul.dots li.dot {\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  -webkit-border-radius: 100%;\n          border-radius: 100%;\n  margin: 0 5px;\n  background-color: #ccc;\n  cursor: pointer;\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n}\n.z-carrousel-wrapper ul.dots li.is-current {\n  background-color: #41b883;\n}\n", ""]);

	// exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ImageInput = __webpack_require__(38);

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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(39)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(41),
	  /* template */
	  __webpack_require__(42),
	  /* scopeId */
	  "data-v-f72ea78e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\ImageInput.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] ImageInput.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f72ea78e", Component.options)
	  } else {
	    hotAPI.reload("data-v-f72ea78e", Component.options)
	  }
	})()}

	module.exports = Component.exports


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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-f72ea78e&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./ImageInput.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-f72ea78e&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./ImageInput.vue");
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
	exports.push([module.id, "\n.z-image-wraper[data-v-f72ea78e] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n}\n.z-image-wraper img[data-v-f72ea78e]{\n  display: inline-block;\n  position: absolute;\n}\n", ""]);

	// exports


/***/ },
/* 41 */
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "z-image-wraper",
	    style: ({
	      width: _vm.width + 'px',
	      height: _vm.height + 'px'
	    })
	  }, [_c('img', {
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
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f72ea78e", module.exports)
	  }
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
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
	  }, [_c('ul', {
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
	  }, _vm._l((_vm.images), function(image) {
	    return _c('li', [_c('a', {
	      attrs: {
	        "href": image.href
	      }
	    }, [(_vm.isImagesReady) ? _c('z-imageinput', {
	      attrs: {
	        "width": _vm.width,
	        "height": _vm.height,
	        "src": image.src
	      }
	    }) : _vm._e()], 1)])
	  })), _vm._v(" "), (_vm.images.length > 1) ? _c('ul', {
	    staticClass: "dots"
	  }, [_vm._l((_vm.images.length - 2), function(li, index) {
	    return (_vm.isPc) ? _c('li', {
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
	    }, [_vm._v(_vm._s(_vm.isShowIndex ? (index + 1) : ''))]) : _vm._e()
	  }), _vm._v(" "), _vm._l((_vm.images.length - 2), function(li, index) {
	    return (!_vm.isPc) ? _c('li', {
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
	    }, [_vm._v(_vm._s(_vm.isShowIndex ? (index + 1) : ''))]) : _vm._e()
	  })], 2) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cbd2a888", module.exports)
	  }
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(45)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(47),
	  /* template */
	  __webpack_require__(48),
	  /* scopeId */
	  "data-v-773d7e48",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Dimmer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Dimmer.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-773d7e48", Component.options)
	  } else {
	    hotAPI.reload("data-v-773d7e48", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-773d7e48&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Dimmer.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-773d7e48&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Dimmer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-dimmer[data-v-773d7e48] {\n  position: fixed;\n  z-index: 2000;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  opacity: 0.5;\n}\n.z-dimmer.z-dimmer-enter[data-v-773d7e48],\n.z-dimmer.z-dimmer-leave-active[data-v-773d7e48] {\n  opacity: 0;\n}\n.z-dimmer.z-dimmer-enter-active[data-v-773d7e48],\n.z-dimmer.z-dimmer-leave-active[data-v-773d7e48] {\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n", ""]);

	// exports


/***/ },
/* 47 */
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "z-dimmer"
	    }
	  }, [(_vm.show) ? _c('div', {
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
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-773d7e48", module.exports)
	  }
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(50)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(52),
	  /* template */
	  __webpack_require__(53),
	  /* scopeId */
	  "data-v-0edf6ed8",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Dropmenu.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Dropmenu.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0edf6ed8", Component.options)
	  } else {
	    hotAPI.reload("data-v-0edf6ed8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-0edf6ed8&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Dropmenu.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-0edf6ed8&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Dropmenu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-dropmenu-title[data-v-0edf6ed8] {\n  cursor: pointer;\n  position: relative;\n}\n.z-dropmenu-title>a[data-v-0edf6ed8] {\n  display: block;\n  color: #34495e;\n}\n.z-dropmenu-arrow[data-v-0edf6ed8] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -1px;\n  margin-left: 6px;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 5px solid #ccc;\n}\n.z-dropmenu[data-v-0edf6ed8] {\n  position: absolute;\n  z-index: 9999;\n  top: 100%;\n  left: 0;\n  background-color: #fff;\n  padding: 10px 0;\n  border: 1px solid #ddd;\n  border-bottom-color: #ccc;\n  text-align: left;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n  overflow: hidden;\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n}\n.z-dropmenu-show-enter-active[data-v-0edf6ed8],.z-dropmenu-show-leave-active[data-v-0edf6ed8] {\n  top: 100%\n}\n.z-dropmenu-show-enter[data-v-0edf6ed8],.z-dropmenu-show-leave-active[data-v-0edf6ed8] {\n  top: 50%;\n  opacity: 0;\n}\n.z-dropmenu li[data-v-0edf6ed8] {\n  list-style: none;\n  line-height: 1.8em;\n  white-space:nowrap;\n}\n.z-dropmenu li a[data-v-0edf6ed8] {\n  color: #7f8c8d;\n  font-size: 0.9em;\n  display: block;\n  padding: 0 30px 0 20px;\n}\n.z-dropmenu li a[data-v-0edf6ed8]:hover {\n  color: rgb(65, 184, 131);\n}\n", ""]);

	// exports


/***/ },
/* 52 */
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "z-dropmenu-wraper"
	  }, [(_vm.type == 'click') ? _c('div', {
	    staticClass: "z-dropmenu-title"
	  }, [_c('a', {
	    on: {
	      "click": _vm.toggleDropMenu
	    }
	  }, [_vm._v(_vm._s(_vm.text)), (_vm.isShowArrow) ? _c('span', {
	    staticClass: "z-dropmenu-arrow"
	  }) : _vm._e()]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "z-dropmenu-show"
	    }
	  }, [_c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "z-dropmenu"
	  }, _vm._l((_vm.lis), function(li) {
	    return _c('li', [_c('a', {
	      attrs: {
	        "href": li.href
	      },
	      on: {
	        "click": _vm.closeDropMenu
	      }
	    }, [_vm._v(_vm._s(li.text))])])
	  }))])], 1) : _c('div', {
	    staticClass: "z-dropmenu-title",
	    on: {
	      "mouseover": _vm.showDropMenu,
	      "mouseleave": _vm.closeDropMenu
	    }
	  }, [_c('a', [_vm._v(_vm._s(_vm.text)), (_vm.isShowArrow) ? _c('span', {
	    staticClass: "z-dropmenu-arrow"
	  }) : _vm._e()]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "z-dropmenu-show"
	    }
	  }, [_c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "z-dropmenu"
	  }, _vm._l((_vm.lis), function(li) {
	    return _c('li', [_c('a', {
	      attrs: {
	        "href": li.href
	      },
	      on: {
	        "click": _vm.closeDropMenu
	      }
	    }, [_vm._v(_vm._s(li.text))])])
	  }))])], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0edf6ed8", module.exports)
	  }
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(55)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(57),
	  /* template */
	  __webpack_require__(58),
	  /* scopeId */
	  "data-v-bc2295ce",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\InputNumber.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] InputNumber.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-bc2295ce", Component.options)
	  } else {
	    hotAPI.reload("data-v-bc2295ce", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-bc2295ce&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./InputNumber.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-bc2295ce&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./InputNumber.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-inputnumber[data-v-bc2295ce] {\n  font-size: 0px;\n  display: inline-block;\n  overflow: hidden;\n}\n.z-inputnumber .z-inputnumber-button[data-v-bc2295ce] {\n  color: #999;\n  font-weight: bold;\n  font-size: 24px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  display: inline-block;\n  border: 1px solid #999;\n  float: left;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.z-inputnumber .z-inputnumber-button.disabled[data-v-bc2295ce] {\n  cursor: not-allowed;\n  color: #ccc;\n}\n.z-inputnumber input[data-v-bc2295ce] {\n  height: 30px;\n  line-height: 30px;\n  width: 48px;\n  font-size: 24px;\n  border-top: 1px solid #999;\n  border-right: none;\n  border-bottom: 1px solid #999;\n  border-left: none;\n  padding: 0 10px;\n  text-align: center;\n  float: left;\n  -webkit-border-radius: 0;\n          border-radius: 0;\n}\n.z-inputnumber .placeholder[data-v-bc2295ce] {\n  height: 30px;\n  line-height: 30px;\n  width: 48px;\n  font-size: 24px;\n  border-top: 1px solid #999;\n  border-right: none;\n  border-bottom: 1px solid #999;\n  border-left: none;\n  padding: 0 10px;\n  text-align: center;\n  float: left;\n  -webkit-border-radius: 0;\n          border-radius: 0;\n  color: #999;\n}\n", ""]);

	// exports


/***/ },
/* 57 */
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "z-inputnumber"
	  }, [_c('span', {
	    staticClass: "z-inputnumber-button",
	    class: {
	      'disabled': (_vm.isDecreaseDisabled || _vm.disabled)
	    },
	    on: {
	      "click": _vm.decrease
	    }
	  }, [_vm._v("-")]), _vm._v(" "), (_vm.disabled) ? _c('span', {
	    staticClass: "placeholder"
	  }, [_vm._v(_vm._s(_vm.value))]) : _c('input', {
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
	      "value": (_vm.value)
	    },
	    on: {
	      "blur": _vm.checkNumber,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.value = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "z-inputnumber-button",
	    class: {
	      'disabled': (_vm.isIncreaseDisabled || _vm.disabled)
	    },
	    on: {
	      "click": _vm.increase
	    }
	  }, [_vm._v("+")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bc2295ce", module.exports)
	  }
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(60)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(62),
	  /* template */
	  __webpack_require__(63),
	  /* scopeId */
	  "data-v-ebaa54da",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Modal.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ebaa54da", Component.options)
	  } else {
	    hotAPI.reload("data-v-ebaa54da", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-ebaa54da&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-ebaa54da&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-modal[data-v-ebaa54da] {\n  width: 300px;\n  margin: 0px auto;\n  background-color: #fff;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n  overflow: hidden;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  position: fixed;\n  z-index: 3000;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.z-modal-expand-enter[data-v-ebaa54da], .z-modal-expand-leave-active[data-v-ebaa54da] {\n  opacity: 0;\n}\n.z-modal-expand-enter.z-modal[data-v-ebaa54da], .z-modal-expand-leave-active.z-modal[data-v-ebaa54da]{\n  -webkit-transform: translate(-50%, -50%) scale(0.5);\n  -ms-transform: translate(-50%, -50%) scale(0.5);\n      transform: translate(-50%, -50%) scale(0.5);\n}\n.z-modal-title[data-v-ebaa54da] {\n  line-height: 44px;\n  text-align: center;\n}\n.z-modal-content[data-v-ebaa54da] {\n  padding: 0 12px 12px;\n  text-align: left;\n}\n.z-modal-footer[data-v-ebaa54da] {\n  border-top: 1px solid #ccc;\n  display: table;\n  width: 100%;\n}\n.z-btn-modal[data-v-ebaa54da] {\n  display: table-cell;\n  text-align: center;\n  cursor: pointer;\n  line-height: 44px;\n}\n.z-btn-modal[data-v-ebaa54da]:nth-child(2) {\n  border-left: 1px solid #ccc;\n}\n.z-btn-modal-sure[data-v-ebaa54da] {\n  background-color: rgb(65, 184, 131);\n  color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 62 */
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "z-modal-wrapper"
	  }, [_c('z-dimmer', {
	    attrs: {
	      "show": _vm.show
	    }
	  }), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "z-modal-expand"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "z-modal"
	  }, [_c('div', {
	    staticClass: "z-modal-title"
	  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")]), _vm._v(" "), _c('div', {
	    staticClass: "z-modal-content"
	  }, [_vm._v("\n        " + _vm._s(_vm.content) + "\n      ")]), _vm._v(" "), _c('div', {
	    staticClass: "z-modal-footer"
	  }, [(_vm.type == 'confirm') ? _c('a', {
	    staticClass: "z-btn-modal",
	    on: {
	      "click": _vm.cancelFunc
	    }
	  }, [_vm._v(_vm._s(_vm.cancel))]) : _vm._e(), _vm._v(" "), _c('a', {
	    staticClass: "z-btn-modal",
	    class: {
	      'z-btn-modal-sure': _vm.type == 'confirm'
	    },
	    on: {
	      "click": _vm.sureFunc
	    }
	  }, [_vm._v(_vm._s(_vm.sure))])])])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ebaa54da", module.exports)
	  }
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(65)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(67),
	  /* template */
	  __webpack_require__(68),
	  /* scopeId */
	  "data-v-074ed99a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Navbar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Navbar.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-074ed99a", Component.options)
	  } else {
	    hotAPI.reload("data-v-074ed99a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-074ed99a&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-074ed99a&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-navbar[data-v-074ed99a] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fff;\n  -webkit-box-shadow: 0 0 4px rgba(0,0,0,0.25);\n          box-shadow: 0 0 4px rgba(0,0,0,0.25);\n  width: 100%;\n}\n.z-navbar-fix[data-v-074ed99a] {\n  position: fixed;\n  top: 0;\n  z-index: 1000;\n}\n", ""]);

	// exports


/***/ },
/* 67 */
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "z-navbar-wraper"
	  }, [_c('div', {
	    staticClass: "z-navbar-placeholder",
	    style: ({
	      height: _vm.isFixed ? _vm.navbarHeight + 'px' : ''
	    })
	  }), _vm._v(" "), _c('div', {
	    staticClass: "z-navbar",
	    class: {
	      'z-navbar-fix': _vm.isFixed
	    }
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-074ed99a", module.exports)
	  }
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(70)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(72),
	  /* template */
	  __webpack_require__(73),
	  /* scopeId */
	  "data-v-4ab15724",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Pagination.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Pagination.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4ab15724", Component.options)
	  } else {
	    hotAPI.reload("data-v-4ab15724", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-4ab15724&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-4ab15724&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-pagination[data-v-4ab15724] {\n  overflow: hidden;\n}\n.z-pagination ul[data-v-4ab15724] {\n  overflow: hidden;\n  float: left;\n}\n.z-pagination ul li[data-v-4ab15724] {\n  float: left;\n  list-style: none;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.z-pagination ul li[data-v-4ab15724]:last-child {\n  border-right: 1px solid #ccc;\n}\n.z-pagination ul li.active[data-v-4ab15724] {\n  background-color: #5bc0de;\n  color: #fff;\n}\n.z-pagination ul li.arrow[data-v-4ab15724] {\n  color: #999;\n  font-weight: bold;\n}\n.z-pagination ul li.arrow.disabled[data-v-4ab15724] {\n  color: #e4e4e4;\n  cursor: not-allowed;\n}\n.z-pagination .input-page[data-v-4ab15724] {\n  float: left;\n  margin-left: 10px;\n  height: 30px;\n  line-height: 30px;\n}\n.z-pagination .input-page input[data-v-4ab15724] {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  vertical-align: bottom;\n  text-align: center;\n  margin: 0 5px;\n  padding: 0;\n  border: 1px solid #ccc;\n}\n", ""]);

	// exports


/***/ },
/* 72 */
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "z-pagination"
	  }, [(this.pageCount <= 10) ? _c('ul', [_c('li', {
	    staticClass: "arrow",
	    class: {
	      'disabled': !_vm.canGoPre
	    },
	    on: {
	      "click": _vm.goPre
	    }
	  }, [_vm._v("<")]), _vm._v(" "), _vm._l((_vm.pageCount), function(index) {
	    return _c('li', {
	      class: {
	        'active': _vm.currentPage === index
	      },
	      on: {
	        "click": function($event) {
	          _vm.goPage(index)
	        }
	      }
	    }, [_vm._v(_vm._s(index))])
	  }), _vm._v(" "), _c('li', {
	    staticClass: "arrow",
	    class: {
	      'disabled': !_vm.canGoNext
	    },
	    on: {
	      "click": _vm.goNext
	    }
	  }, [_vm._v(">")])], 2) : _c('ul', [_c('li', {
	    staticClass: "arrow",
	    class: {
	      'disabled': !_vm.canGoPre
	    },
	    on: {
	      "click": _vm.goPre
	    }
	  }, [_vm._v("<")]), _vm._v(" "), _vm._l((_vm.frontCount), function(index) {
	    return _c('li', {
	      class: {
	        'active': _vm.currentPage === index
	      },
	      on: {
	        "click": function($event) {
	          _vm.goPage(index)
	        }
	      }
	    }, [_vm._v(_vm._s(index))])
	  }), _vm._v(" "), (_vm.isShowPreItemsButton) ? _c('li', {
	    on: {
	      "click": _vm.showPreItems
	    }
	  }, [_vm._v("…")]) : _vm._e(), _vm._v(" "), _vm._l((6), function(index) {
	    return (_vm.isShowMiddle) ? _c('li', {
	      class: {
	        'active': _vm.currentPage === index - 1 + _vm.middleStart
	      },
	      on: {
	        "click": function($event) {
	          _vm.goPage(index - 1 + _vm.middleStart)
	        }
	      }
	    }, [_vm._v(_vm._s(index - 1 + _vm.middleStart))]) : _vm._e()
	  }), _vm._v(" "), (_vm.isShowNextItemsButton) ? _c('li', {
	    on: {
	      "click": _vm.showNextItems
	    }
	  }, [_vm._v("…")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.behindCount), function(index) {
	    return _c('li', {
	      class: {
	        'active': _vm.currentPage === (index + _vm.pageCount - _vm.behindCount)
	      },
	      on: {
	        "click": function($event) {
	          _vm.goPage(index + _vm.pageCount - _vm.behindCount)
	        }
	      }
	    }, [_vm._v(_vm._s(index + _vm.pageCount - _vm.behindCount))])
	  }), _vm._v(" "), _c('li', {
	    staticClass: "arrow",
	    class: {
	      'disabled': !_vm.canGoNext
	    },
	    on: {
	      "click": _vm.goNext
	    }
	  }, [_vm._v(">")])], 2), _vm._v(" "), (_vm.isJumper) ? _c('div', {
	    staticClass: "input-page"
	  }, [_vm._v("前往第"), _c('input', {
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
	      "value": (_vm.inputPage)
	    },
	    on: {
	      "keydown": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        _vm.changePage($event)
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputPage = $event.target.value
	      }
	    }
	  }), _vm._v("页")]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4ab15724", module.exports)
	  }
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(75)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(77),
	  /* template */
	  __webpack_require__(78),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Progress.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Progress.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-449d34b7", Component.options)
	  } else {
	    hotAPI.reload("data-v-449d34b7", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-449d34b7!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Progress.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-449d34b7!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Progress.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-progress-wraper {\n  position: fixed;\n  left: 0;\n  z-index: 10000;\n  width: 100%;\n  height: 4px;\n  background-color: transparent;\n}\n.z-progress-wraper .z-progress {\n  height: 100%;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.z-progress-top {\n  top: 0;\n}\n.z-progress-bottom {\n  bottom: 0;\n}\n", ""]);

	// exports


/***/ },
/* 77 */
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
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
	  }, [_c('div', {
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
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-449d34b7", module.exports)
	  }
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(80)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(82),
	  /* template */
	  __webpack_require__(83),
	  /* scopeId */
	  "data-v-61fcd03e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Radio.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Radio.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-61fcd03e", Component.options)
	  } else {
	    hotAPI.reload("data-v-61fcd03e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-61fcd03e&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-61fcd03e&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-radio[data-v-61fcd03e] {\n  display: inline-block;\n  position: relative;\n  width: 10px;\n  height: 10px;\n  -webkit-border-radius: 100%;\n          border-radius: 100%;\n  border: 2px solid #333;\n}\n.z-radio-checked[data-v-61fcd03e] {\n  border: 2px solid red;\n}\n.z-radio-checked[data-v-61fcd03e]:after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 6px;\n  height: 6px;\n  -webkit-border-radius: 100%;\n          border-radius: 100%;\n  background-color: red;\n}\n.z-radio-disabled[data-v-61fcd03e] {\n  border: 2px solid #999;\n}\n.z-radio-disabled[data-v-61fcd03e]:after {\n  background-color: #999;\n}\ninput[data-v-61fcd03e] {\n  display: none;\n}\n", ""]);

	// exports


/***/ },
/* 82 */
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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "z-radio-wrapper"
	  }, [_c('span', {
	    class: ['z-radio', {
	      'z-radio-checked': _vm.isChecked
	    }, {
	      'z-radio-disabled': _vm.disabled
	    }]
	  }), _vm._v(" "), _c('input', {
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
	      "__c": function($event) {
	        _vm.trueValue = _vm.label
	      }
	    }
	  }), _vm._v("\n  " + _vm._s(_vm.label) + "\n")])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-61fcd03e", module.exports)
	  }
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(85)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(87),
	  /* template */
	  __webpack_require__(88),
	  /* scopeId */
	  "data-v-01857a84",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Switch.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Switch.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-01857a84", Component.options)
	  } else {
	    hotAPI.reload("data-v-01857a84", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-01857a84&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-01857a84&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-switch[data-v-01857a84] {\n  display: inline-block;\n  background-color: #ccc;\n  cursor: pointer;\n  position: relative;\n  border: 1px solid #eee;\n  -webkit-transition: background-color 0.2s;\n  transition: background-color 0.2s;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n.z-switch span[data-v-01857a84] {\n  width: 50%;\n  text-align: center;\n  color: #fff;\n  float: left;\n  font-size: 12px;\n}\n.z-switch-button[data-v-01857a84] {\n  display: inline-block;\n  -webkit-border-radius: 100%;\n          border-radius: 100%;\n  background-color: #fff;\n  position: absolute;\n  -webkit-transition: left .2s;\n  transition: left .2s;\n}\n.z-switch.is-disabled[data-v-01857a84] {\n  position: relative;\n  cursor: not-allowed;\n}\n.z-switch.is-disabled .z-switch-button[data-v-01857a84] {\n  background-color: #ccc;\n}\n", ""]);

	// exports


/***/ },
/* 87 */
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "z-switch",
	    class: {
	      'is-disabled': _vm.disabled
	    },
	    style: (_vm.switchStyle),
	    on: {
	      "click": _vm.toggleSwitch
	    }
	  }, [(_vm.onText) ? _c('span', {
	    style: ({
	      'line-height': _vm.height + 'px'
	    })
	  }, [_vm._v(_vm._s(_vm.onText))]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "z-switch-button",
	    style: (_vm.switchBtnStyle)
	  }), _vm._v(" "), (_vm.offText) ? _c('span', {
	    style: ({
	      'line-height': _vm.height + 'px'
	    })
	  }, [_vm._v(_vm._s(_vm.offText))]) : _vm._e(), _vm._v(" "), _c('input', {
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
	      "checked": Array.isArray(_vm.isOpen) ? _vm._i(_vm.isOpen, null) > -1 : (_vm.isOpen)
	    },
	    on: {
	      "__c": function($event) {
	        var $$a = _vm.isOpen,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$el.checked) {
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
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-01857a84", module.exports)
	  }
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(90)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(92),
	  /* template */
	  __webpack_require__(93),
	  /* scopeId */
	  "data-v-db60c398",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\work\\vue-components\\src\\components\\Table.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Table.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-db60c398", Component.options)
	  } else {
	    hotAPI.reload("data-v-db60c398", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(91);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-db60c398&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Table.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-db60c398&scoped=true!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./Table.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.z-table-wraper[data-v-db60c398] {\n  max-width: 100%;\n  overflow-x: auto;\n}\n.z-table[data-v-db60c398] {\n  max-width: 100%;\n  border: 1px solid #ddd;\n  border-collapse: collapse;\n}\n.z-table>caption[data-v-db60c398] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\n.z-table>thead>tr>th[data-v-db60c398],\n.z-table>tbody>tr>td[data-v-db60c398],\n.z-table>tfoot>tr>td[data-v-db60c398] {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: left;\n}\n.z-table>thead>tr>th[data-v-db60c398] {\n  border-bottom-width: 2px;\n}\n", ""]);

	// exports


/***/ },
/* 92 */
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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "z-table-wraper"
	  }, [_c('table', {
	    staticClass: "z-table"
	  }, [(_vm.title) ? _c('caption', [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('thead', [_c('tr', _vm._l((_vm.ths), function(th) {
	    return _c('th', [_vm._v(_vm._s(th))])
	  }))]), _vm._v(" "), _c('tbody', _vm._l((_vm.trs), function(tr) {
	    return _c('tr', _vm._l((tr), function(td) {
	      return _c('td', [_vm._v(_vm._s(td))])
	    }))
	  }))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-db60c398", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;