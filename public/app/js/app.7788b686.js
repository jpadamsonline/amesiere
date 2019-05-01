(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],f=0,h=[];f<i.length;f++)s=i[f],a[s]&&h.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("c225"),a=n.n(r);a.a},"1f50":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("SearchBox")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"container"}},[n("div",{staticClass:"row"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showError,expression:"showError"}],staticClass:"alert"},[n("button",{staticClass:"close",on:{click:function(e){return t.hideMessage()}}},[t._v("X")]),n("strong",[t._v("Error!")])]),n("h1",[t._v("Amesiere Ibibio Translator")]),n("div",{staticClass:"info-form"},[t.autoMode?n("form",[n("div",{staticClass:"form-group"},[n("small",{staticClass:"text-muted",attrs:{id:"searchHelp"}},[t._v("\n            Auto Search a word in English to get the Ibibio translation\n          ")]),n("br"),n("label",{attrs:{for:"term"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search.term,expression:"search.term"}],staticClass:"text",attrs:{type:"text",name:"term",placeholder:"Type a word"},domProps:{value:t.search.term},on:{input:[function(e){e.target.composing||t.$set(t.search,"term",e.target.value)},function(e){return e.preventDefault(),t.autoSearch()}]}}),n("br"),n("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.autoSearch()}}},[t._v("\n            Translate\n          ")]),n("br"),n("ul",[t.matchedTerms.length?t._e():n("li",[n("span",[t._v("No results found")]),n("br")]),t._l(t.matchedTerms,function(e){return n("li",[n("p",[n("strong",[t._v("English:")]),t._v("\n                "+t._s(e.definition)+"\n              ")]),n("p",[n("strong",[t._v("Ibibio:")]),t._v("\n                "+t._s(e.term)+"\n              ")])])})],2)])]):t._e(),t.autoMode?t._e():n("form",[n("div",{staticClass:"form-group"},[n("small",{staticClass:"text-muted",attrs:{id:"searchHelp"}},[t._v("\n            Enter a word in English to get the Ibibio translation (manual)\n          ")]),n("br"),n("label",{attrs:{for:"term"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search.term,expression:"search.term"}],staticClass:"text",attrs:{type:"text",name:"term",placeholder:"Type a word"},domProps:{value:t.search.term},on:{submit:function(e){return e.preventDefault(),t.searchTerm()},input:function(e){e.target.composing||t.$set(t.search,"term",e.target.value)}}}),n("br"),n("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.searchTerm()}}},[t._v("\n            Translate\n          ")]),n("br"),n("ul",[t.translations.length?t._e():n("li",[n("span",[t._v("No results found")]),n("br")]),t._l(t.translations,function(e){return n("li",[n("p",[n("strong",[t._v("English:")]),t._v("\n                "+t._s(e.definition)+"\n              ")]),n("p",[n("strong",[t._v("Ibibio:")]),t._v("\n                "+t._s(e.term)+"\n              ")])])})],2)])])])])])},i=[],c=n("cebc"),u=(n("4917"),n("3b2b"),n("55dd"),n("75fc")),l=(n("386d"),n("d225")),f=n("b0b4"),h=(n("6762"),n("2fdb"),n("bc3a")),d=n.n(h),m=document.location.host,p=m.includes("localhost")?"http://localhost:5000":"//".concat(m),v=function(){function t(){Object(l["a"])(this,t)}return Object(f["a"])(t,[{key:"searchTerm",value:function(t){var e="".concat(p,"/translate?term=").concat(t);return d.a.get(e).then(function(t){return t.data})}},{key:"getTerms",value:function(){var t="".concat(p,"/data/dictionary.json");return d.a.get(t).then(function(t){return t.data})}}]),t}(),b=new v,g={name:"SearchBox",components:{},data:function(){return{showError:!1,autoMode:!0,translations:[],matchedTerms:[],allTerms:[],search:{}}},methods:{autoSearch:function(){var t=this;if(!this.search.term)return this.matchedTerms=[];this.allTerms.length||b.getTerms(this.search.term).then(function(e){t.allTerms=Object(u["a"])(e.terms)},function(e){t.showError=!0});var e=this.allTerms.filter(function(e){return RegExp("("+t.search.term+")","i").test(e.definition)}).map(function(e){var n=e.definition.match(RegExp("("+t.search.term+")","i"));return n?Object(c["a"])({},n,e):null}).filter(function(t){return!!t}).sort(function(t,e){return t.index-e.index});this.matchedTerms=e},searchTerm:function(){var t=this;b.searchTerm(this.search.term).then(function(e){t.translations=Object(u["a"])(e.translations)},function(e){t.showError=!0})},switchMode:function(){this.autoMode=!this.autoMode},hideMessage:function(){this.showError=!1}},mounted:function(){}},_=g,w=(n("c091"),n("0c7c")),x=Object(w["a"])(_,s,i,!1,null,"16c51297",null),T=x.exports,y={name:"app",components:{SearchBox:T}},j=y,E=(n("034f"),Object(w["a"])(j,a,o,!1,null,null,null)),O=E.exports;r["a"].config.productionTip=!1,new r["a"]({el:"#app",render:function(t){return t(O)},components:{App:O}}).$mount("#app")},c091:function(t,e,n){"use strict";var r=n("1f50"),a=n.n(r);a.a},c225:function(t,e,n){}});
//# sourceMappingURL=app.7788b686.js.map