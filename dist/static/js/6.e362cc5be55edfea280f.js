webpackJsonp([6,20],{15:function(s,t,a){"use strict";function n(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(7),l=n(e),i=a(3),_=n(i);t["default"]={components:{zPagination:l["default"],zTable:_["default"]},methods:{getPage:function(s){console.log("当前第"+s+"页")}}}},252:function(s,t,a){var n=a(1)(a(15),a(288),null,null);s.exports=n.exports},288:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[[s._m(0),s._v(" "),a("div",{staticClass:"introduce-block"},[a("z-pagination",{attrs:{total:11,"page-size":1}})],1)],s._v(" "),s._m(1),s._v(" "),[a("div",{staticClass:"introduce-block"},[a("z-pagination",{attrs:{total:280,page:14,"is-jumper":!0},on:{"current-page":s.getPage}})],1)],s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),[a("div",{staticClass:"introduce-block"},[a("z-pagination",{attrs:{total:29,"page-size":4,page:8}})],1)],s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),a("h3",[s._v("API")]),s._v(" "),[a("div",{staticClass:"introduce-block"},[a("z-table",{attrs:{ths:["参数","类型","必填","默认值","说明"],trs:[["total","Number","是","-","总条目数"],["pageSize","Number","否","10","每页显示的条目数"],["page","Number","否","1","初始化直接前往某一页"],["isJumper","Boolean","否","false","是否开启页数输入跳转(按回车键前往)"]]}})],1)],s._v(" "),a("h3",[s._v("EVENT")]),s._v(" "),[a("z-table",{attrs:{ths:["事件名称","说明","回调参数"],trs:[["current-page","当前页码发生改变时的回调函数","新的页码"]]}})]],2)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",[a("a",{attrs:{href:"#pagination"}},[s._v("Pagination 分页器")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("z-pagination")]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"11"')]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":page-size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v("\n>")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("z-pagination")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("z-pagination")]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"280"')]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":page")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"14"')]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":is-jumper")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v("@current-page")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"getPage"')]),s._v("\n>")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("z-pagination")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("当页数发生改变时，分页器会把新的页码传递出来，父组件可以通过"),a("code",[s._v("@current-page")]),s._v("来接收。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-js"},[s._v("methods: {\n  "),a("span",{staticClass:"hljs-attr"},[s._v("getPage")]),s._v(": "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("val")]),s._v(") ")]),s._v("{\n    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-string"},[s._v('"当前第"')]),s._v(" + val + "),a("span",{staticClass:"hljs-string"},[s._v('"页"')]),s._v(");\n  }\n}\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("注: 在微信浏览器中使用勿忘加上"),a("code",[s._v('<meta name="format-detection" content="telephone=no">')]),s._v("，不然遇到连续的数字会愚蠢的提示你要不要打电话。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("z-pagination")]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"29"')]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":page-size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"4"')]),s._v("\n"),a("span",{staticClass:"hljs-attr"},[s._v(":page")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"8"')]),s._v("\n>")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("z-pagination")]),s._v(">")]),s._v("\n")])])}]}},326:function(s,t,a){s.exports=a(252)}});