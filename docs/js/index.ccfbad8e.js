(function(e){function t(t){for(var r,o,i=t[0],u=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={index:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("ed12")},1138:function(e,t){e.exports=vendor_lib},2453:function(e,t,n){},"2dfd":function(e,t,n){},"320c":function(e,t,n){e.exports=n("1138")(3)},"3ca4":function(e,t,n){"use strict";(function(e){var r=n("278c"),c=n.n(r),a=n("ab5b"),o=n.n(a),i=(n("2453"),function(t){var n=t.optNames,r=t.extClass,i=t.placeHolder,u=t.listActive,l=t.callback,s=Object(a["useState"])(u),d=c()(s,2),f=d[0],p=d[1],m=Object(a["useState"])({val:"",index:null}),b=c()(m,2),v=b[0],h=b[1],_=Object(a["useRef"])();Object(a["useEffect"])((function(){f||_.current.focus(),l(f)}),[f]);var y=function(){setTimeout((function(){var t=e(document.activeElement),n=e(_.current);n.is(t)||n.find(t).length||p(!1)}))},x=function(e){e.stopPropagation();var t=e.keyCode||e.charCode;[32,13].includes(t)&&p((function(e){return{active:!e}}))},k=function(t){var n=e(t).parent();setTimeout((function(){n.focus()}))},E=function(e){var t=e.target;n.length&&(p((function(e){return!e})),k(t))},g=function(e,t){e.stopPropagation();var n=e.type;if("keydown"===n){var r=e.keyCode||e.charCode;if(![32,13].includes(r))return}p(!1)},O=function(e,t){var n=e.target;h({val:n.innerHTML,index:t})},N=function(e,t){e&&v.index==t&&setTimeout((function(){e.focus()}))};return o.a.createElement("div",{ref:_,className:"drop-list".concat(null!==r&&void 0!==r?r:"").concat(f?" drop-list_active":""),tabIndex:"0",onBlur:y,onKeyPress:x,role:"button","aria-expanded":f,"aria-haspopup":"true"},o.a.createElement("input",{className:"drop-list__field",type:"text",onClick:E,placeholder:i,tabIndex:"-1",value:v.val,readOnly:!0,"aria-hidden":!0}),o.a.createElement("button",{className:"drop-list__btn",type:"button",onClick:E,tabIndex:"-1","aria-hidden":!0}),f&&o.a.createElement("div",{className:"drop-list__panel"},n.map((function(e,t){return o.a.createElement("div",{ref:function(e){return N(e,t)},className:"drop-list__item".concat(t==v.index?" drop-list__item_focused":""),onClick:function(e){return g(e,t)},onKeyPress:function(e){return g(e,t)},onFocus:function(e){return O(e,t)},key:t,tabIndex:"0",role:"button"},e)}))))});i.defaultProps={callback:function(e){return e},optNames:[],placeHolder:"",listActive:!1},t["a"]=i}).call(this,n("c5ec"))},ab5b:function(e,t,n){e.exports=n("1138")(1)},bd92:function(e,t,n){},e77c:function(e,t,n){},ed12:function(e,t,n){"use strict";n.r(t);var r=n("ab5b"),c=n.n(r),a=n("8bc8"),o=n.n(a),i=n("970b"),u=n.n(i),l=n("5bc3"),s=n.n(l),d=n("ed6d"),f=n.n(d),p=n("6b58"),m=n.n(p),b=n("36c6"),v=n.n(b),h=(n("2dfd"),n("e77c"),n("278c")),_=n.n(h),y=(n("bd92"),function(e){var t=e.action,n=e.labText,a=e.extClass,o=e.idFor,i=e.bubling,u=e.callback,l=Object(r["useState"])(t),s=_()(l,2),d=s[0],f=s[1];Object(r["useEffect"])((function(){i&&u(d)}),[i]);var p=function(e){"keypress"===e.type&&"Space"!==e.code||f((function(e){return!e}))};return c.a.createElement("div",{className:"check-box",tabIndex:"0",role:"checkbox","aria-checked":d,onKeyPress:p},c.a.createElement("input",{id:o,className:"check-box__field check-box__field_hiden",onChange:p,type:"checkbox",tabIndex:"-1",checked:d,"aria-hidden":!0}),c.a.createElement("label",{className:"check-box__lab".concat(a||""),htmlFor:o},n))});y.defaultProps={action:!1,labText:"label_text",bubling:!1,callback:function(e){return e}};var x=y,k=n("3ca4"),E={opts:[{id:1,name:"option-1"},{id:2,name:"option-2"},{id:3,name:"option-3"},{id:4,name:"option-4"},{id:5,name:"option-5"}]};function g(e){var t=O();return function(){var n,r=v()(e);if(t){var c=v()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return m()(this,n)}}function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var N=function(e){f()(n,e);var t=g(n);function n(e){var r;return u()(this,n),r=t.call(this,e),r.state={},r}return s()(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"ui"},c.a.createElement("div",{className:"ui__check"},c.a.createElement("div",{className:"ui__check-item"},c.a.createElement(x,{idFor:"check_1"})),c.a.createElement("div",{className:"ui__check-item"},c.a.createElement(x,{labText:"checkbox",idFor:"check_2",action:!0}))),c.a.createElement("div",{className:"ui__drop"},c.a.createElement("div",{className:"ui__drop-item"},c.a.createElement(k["a"],{optNames:E.opts.map((function(e){return e.name})),placeHolder:"select"})),c.a.createElement("div",{className:"ui__drop-item"},c.a.createElement(k["a"],{optNames:E.opts.map((function(e){return e.name})),placeHolder:"select",listActive:!0}))))}}]),n}(r["Component"]);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");o.a.render(c.a.createElement(N,null),e)}))}});