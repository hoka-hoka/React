(function(e){function t(t){for(var n,l,i=t[0],o=t[1],u=t[2],m=0,d=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&d.push(c[l][0]),c[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);s&&s(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==c[o]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},c={index:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("ed12")},1138:function(e,t){e.exports=vendor_lib},2453:function(e,t,a){},"2dfd":function(e,t,a){},"320c":function(e,t,a){e.exports=a("1138")(3)},"32eb":function(e,t,a){},"32fb":function(e,t,a){},"34c6":function(e,t,a){},9378:function(e,t,a){},ab5b:function(e,t,a){e.exports=a("1138")(1)},b145:function(e,t,a){"use strict";(function(e){var n=a("278c"),c=a.n(n),r=a("ab5b"),l=a.n(r),i=(a("2453"),function(t){var a=t.idFor,n=t.optionNames,i=t.placeHolder,o=t.action,u=t.callback,s=Object(r["useState"])(o),m=c()(s,2),d=m[0],f=m[1],b=Object(r["useState"])({val:"",index:null}),p=c()(b,2),v=p[0],_=p[1],h=Object(r["useRef"])();Object(r["useEffect"])((function(){d||h.current.focus(),u(d)}),[d]);var E=function(){setTimeout((function(){var t=e(document.activeElement),a=e(h.current);a.is(t)||a.find(t).length||f(!1)}))},g=function(e){e.stopPropagation();var t=e.keyCode||e.charCode;[32,13].includes(t)&&f((function(e){return{active:!e}}))},N=function(t){var a=e(t).parent();setTimeout((function(){a.focus()}))},y=function(e){var t=e.target;n.length&&(f((function(e){return!e})),N(t))},x=function(e,t){e.stopPropagation();var a=e.type;if("keydown"===a){var n=e.keyCode||e.charCode;if(![32,13].includes(n))return}f(!1)},k=function(e,t){var a=e.target;_({val:a.innerHTML,index:t})},w=function(e,t){e&&v.index==t&&setTimeout((function(){e.focus()}))};return l.a.createElement("div",{ref:h,className:"drop-list".concat(d?" drop-list_active":""),tabIndex:"0",onBlur:E,onKeyPress:g,role:"button","aria-expanded":d,"aria-haspopup":"true"},l.a.createElement("input",{id:a,className:"drop-list__field",type:"text",onClick:y,placeholder:i,tabIndex:"-1",value:v.val,readOnly:!0,"aria-hidden":!0}),l.a.createElement("button",{className:"drop-list__btn",type:"button",onClick:y,tabIndex:"-1","aria-hidden":!0}),d&&l.a.createElement("div",{className:"drop-list__panel"},n.map((function(e,t){return l.a.createElement("div",{ref:function(e){return w(e,t)},className:"drop-list__item".concat(t==v.index?" drop-list__item_focused":""),onClick:function(e){return x(e,t)},onKeyPress:function(e){return x(e,t)},onFocus:function(e){return k(e,t)},key:t,tabIndex:"0",role:"button"},e)}))))});i.defaultProps={callback:function(e){return e},idFor:"",optionNames:[],placeHolder:"",action:!1},t["a"]=i}).call(this,a("c5ec"))},bd92:function(e,t,a){},be63:function(e,t,a){},c05b:function(e,t,a){},ed12:function(e,t,a){"use strict";a.r(t);var n=a("ab5b"),c=a.n(n),r=a("8bc8"),l=a.n(r),i=a("970b"),o=a.n(i),u=a("5bc3"),s=a.n(u),m=a("ed6d"),d=a.n(m),f=a("6b58"),b=a.n(f),p=a("36c6"),v=a.n(p),_={error:"error",load:"loading",main:"main",modal:"modal"};function h(e){var t=E();return function(){var a,n=v()(e);if(t){var c=v()(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return b()(this,a)}}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var g=document,N=g.body,y='\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlnsXlink="http://www.w3.org/1999/xlink"\n    style="display: none"\n  >\n    <symbol id="cross" viewBox="0 0 48 48">\n      <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"></path>\n    </symbol>\n\n    <symbol id="error" viewBox="0 0 32 32" width="15" height="18">\n      <path d="M2.062 32h27.812a2 2 0 0 0 1.766-2.942l-13.876-26A1.997 1.997 0 0 0 16.002 2H16c-.738 0-1.414.406-1.762 1.056L.3 29.056a2.004 2.004 0 0 0 .046 1.972A2.005 2.005 0 0 0 2.062 32zM16 24a2 2 0 1 1-.001 4.001A2 2 0 0 1 16 24zm-2-3.968v-8a2 2 0 0 1 4 0v8a2 2 0 0 1-4 0z"></path>\n    </symbol>\n\n    <symbol id="arrow" viewBox="0 0 17 18" width="16" height="16">\n      <path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z"></path>\n    </symbol>\n</svg>',x=function(e){d()(a,e);var t=h(a);function a(e){var n;return o()(this,a),n=t.call(this,e),n.state={},n}return s()(a,[{key:"componentDidMount",value:function(){N.insertAdjacentHTML("beforeend",y)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null)}}]),a}(n["Component"]),k=a("278c"),w=a.n(k),O=(a("c05b"),function(e){var t=e.about;return c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"table__head"},c.a.createElement("tr",{className:"table__row"},c.a.createElement("th",{className:"table__coll"},"Имя"),c.a.createElement("th",{className:"table__coll"},"Тип"),c.a.createElement("th",{className:"table__coll"},"Описание"))),c.a.createElement("tbody",{className:"table__body"},t.map((function(e){return c.a.createElement("tr",{className:"table__row",key:e.id},c.a.createElement("td",{className:"table__coll"},e.name),c.a.createElement("td",{className:"table__coll"},e.type),c.a.createElement("td",{className:"table__coll"},e.text))}))))});O.defaultProps={about:[]};var j=O,S=(a("34c6"),function(e){var t=e.btnText,a=e.action,r=e.callback,l=Object(n["useState"])(a),i=w()(l,2),o=i[0],u=i[1],s=function(){u(!1),r()};return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"button".concat(o?" button_active":""),type:"button",onClick:s},t))});S.defaultProps={btnText:"click",action:!1,callback:function(e){return e}};var C=S,P=[{id:1,btnText:"button"},{id:2,btnText:"button",action:!0}],T=[{id:1,name:"btnText",type:"string",text:"Текст"},{id:2,name:"action",type:"boolean",text:"Активность"}],F=function(){var e=Object(n["useState"])(),t=w()(e,2);t[0],t[1];return c.a.createElement("div",{className:"ui__cont"},c.a.createElement("h2",{className:"ui__title"},"CheckBox"),c.a.createElement("div",{className:"ui__example"},c.a.createElement(j,{about:T}),c.a.createElement("div",{className:"ui__buttons"},P.map((function(e){var t=e.btnText,a=e.action;return c.a.createElement(C,{btnText:t,action:a})})))))},L=F,R=a("448a"),M=a.n(R),H=(a("bd92"),function(e){var t=e.idFor,a=e.labelText,r=e.labelClassName,l=e.bubbling,i=e.action,o=e.callback,u=Object(n["useState"])(i),s=w()(u,2),m=s[0],d=s[1];Object(n["useEffect"])((function(){l&&o(m)}),[l]);var f=function(e){"keypress"===e.type&&"Space"!==e.code||d((function(e){return!e}))};return c.a.createElement("div",{className:"check-box",tabIndex:"0",role:"checkbox","aria-checked":m,onKeyPress:f},c.a.createElement("input",{id:t,className:"check-box__field check-box__field_hiden",onChange:f,type:"checkbox",tabIndex:"-1",checked:m,"aria-hidden":!0}),c.a.createElement("label",{className:r,htmlFor:t},a&&c.a.createElement("span",null,a)))});H.defaultProps={action:!1,labelText:"label_text",labelClassName:"",bubbling:!1,callback:function(e){return e}};var B=H,I=[{id:1,idFor:"check_1",labelText:"",labelClassName:"check-box__lab",action:!1},{id:2,idFor:"check_2",labelText:"checkbox",labelClassName:"check-box__lab",action:!0}],D=[{id:1,name:"idFor",type:"string",text:"Идентификатр метки"},{id:2,name:"labelText",type:"string",text:"Текст метки"},{id:3,name:"labelClassName",type:"string",text:"Имя класса метки"},{id:4,name:"action",type:"boolean",text:"Активность"},{id:5,name:"bubbling",type:"boolean",text:"Триггер для callback-функции"},{id:6,name:"callback",type:"(active: boolean) => void",text:"callback-функция"}],A=function(){var e=Object(n["useState"])(!1),t=w()(e,2),a=t[0],r=t[1],l=Object(n["useState"])([]),i=w()(l,2),o=i[0],u=i[1],s=function(e,t){u((function(a){return a[t]=e,M()(a)}))},m=function(){r(!0)};return Object(n["useEffect"])((function(){a&&r(!1)}),[a]),c.a.createElement("div",{className:"ui__cont"},c.a.createElement("h2",{className:"ui__title"},"CheckBox"),c.a.createElement("div",{className:"ui__example"},c.a.createElement(j,{about:D}),c.a.createElement("div",{className:"ui__check"},I.map((function(e,t){var r,l=e.id,i=e.idFor,u=e.labelText,m=e.labelClassName,d=e.action;return c.a.createElement(n["Fragment"],{key:l},c.a.createElement(B,{idFor:i,labelText:u,labelClassName:m,action:d,bubbling:a,callback:function(e){return s(e,t)}}),c.a.createElement("div",{className:"ui__status"},"".concat(null!==(r=o[t])&&void 0!==r?r:d)))})),c.a.createElement("div",{className:"ui__check-button"},c.a.createElement(C,{btnText:"Всплытие",callback:m})))))},z=A,J=a("b145"),K=[{id:1,optionNames:["option-1","option-2","option-3","option-4","option-5"],placeHolder:"select"},{id:2,idFor:"drop",optionNames:["option-1","option-2","option-3","option-4","option-5"],placeHolder:"select"},{id:3,optionNames:["option-1","option-2","option-3","option-4","option-5"],placeHolder:"select",action:!0}],U=[{id:1,name:"idFor",type:"string",text:"Идентификатр метки"},{id:2,name:"optionNames",type:"string [ ]",text:"Массив опций"},{id:3,name:"placeHolder",type:"string",text:"Текст заполнитель"},{id:4,name:"action",type:"boolean",text:"Активность"},{id:5,name:"callback",type:"(active: boolean) => void",text:"callback-функция"}],X=function(){var e=Object(n["useState"])(),t=w()(e,2);t[0],t[1];return c.a.createElement("div",{className:"ui__cont"},c.a.createElement("h2",{className:"ui__title"},"DropList"),c.a.createElement("div",{className:"ui__example"},c.a.createElement(j,{about:U}),c.a.createElement("div",{className:"ui__drop"},K.map((function(e){var t=e.id,a=e.idFor,r=e.optionNames,l=e.placeHolder,i=e.action;return c.a.createElement(n["Fragment"],{key:t},a&&c.a.createElement("label",{className:"ui__label",htmlFor:a},"label text"),c.a.createElement(J["a"],{idFor:a,optionNames:r,placeHolder:l,action:i}))})))))},q=X,G=(a("9378"),"LEFT"),V="RIGHT",W=function(e){var t=e.totalRecords,a=void 0===t?1:t,r=e.pageNeighbours,l=void 0===r?0:r,i=e.pageLimit,o=void 0===i?30:i,u=e.currentPage,s=void 0===u?1:u,m=e.onPageChanged,d=void 0===m?function(e){return e}:m,f=Object(n["useState"])(),b=w()(f,2),p=b[0],v=b[1],_=Object(n["useState"])(s),h=w()(_,2),E=h[0],g=h[1],N=function(){var e=Math.ceil(a/o);return e};Object(n["useEffect"])((function(){v(N())}),[a,o]),Object(n["useEffect"])((function(){var e={currentPage:E,totalPages:p,pageLimit:o,totalRecords:a};d(e)}),[E]);var y=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,c=[];while(n<=t)c.push(n),n+=a;return c},x=function(){var e=2*l,t=e+3,a=t+2,n=Math.max(2,E-l),c=Math.min(p-1,E+l),r=n>2,i=p-c>1,o=y(n,c),u=t-(o.length+1);if(p<=a)return y(1,p);switch(!0){case r&&!i:var s=y(n-u,n-1);o=[G].concat(M()(s),M()(o));break;case!r&&i:var m=y(c+1,c+u);o=[].concat(M()(o),M()(m),[V]);break;case r&&i:default:o=[G].concat(M()(o),[V]);break}return[1].concat(M()(o),[p])},k=function(e){g(e)},O=function(e){e.preventDefault(),k(E-2*l-1)},j=function(e){e.preventDefault(),k(E+2*l+1)},S=function(e){return function(t){t.preventDefault(),k(e)}};return c.a.createElement("ul",{className:"pagination","aria-label":"Countries Pagination"},x().map((function(e,t){return e==G?c.a.createElement("li",{className:"pagination__item",key:t},c.a.createElement("button",{className:"pagination__btn pagination__btn_painted pagination__btn_turned",type:"button","aria-label":"Previous",onClick:O},c.a.createElement("svg",{width:"16",height:"16"},c.a.createElement("use",{xlinkHref:"#arrow"})))):e==V?c.a.createElement("li",{className:"pagination__item",key:t},c.a.createElement("button",{className:"pagination__btn pagination__btn_painted",type:"button","aria-label":"Next",onClick:j},c.a.createElement("svg",{width:"16",height:"16"},c.a.createElement("use",{xlinkHref:"#arrow"})))):c.a.createElement("li",{key:t,className:"pagination__item"},c.a.createElement("button",{className:"pagination__btn".concat(E===e?" pagination__btn_active":""),type:"button",onClick:S(e)},e))})))},Z=W,Q=[{id:1,targetPage:1}],Y=[{id:1,name:"totalRecords",type:"number",text:"Общее число блоков"},{id:2,name:"pageLimit",type:"number",text:"Блоков на странице"},{id:3,name:"pageNeighbours",type:"number",text:"Число соседних меток"},{id:4,name:"currentPage",type:"number",text:"Текущая страница"}],$=function(){var e=Object(n["useState"])(),t=w()(e,2),a=t[0],r=t[1],l=Object(n["useState"])(50),i=w()(l,2),o=i[0],u=i[1],s=Object(n["useState"])(10),m=w()(s,2),d=m[0],f=m[1],b=Object(n["useState"])(0),p=w()(b,2),v=p[0],_=p[1];Object(n["useEffect"])((function(){r(Math.ceil(o/d))}),[o,d]);var h=function(e){var t=e.target.value;u(+t)},E=function(e){var t=e.target.value;f(+t)},g=function(e){var t=e.target.value;_(+t)};return c.a.createElement("div",{className:"ui__cont"},c.a.createElement("h2",{className:"ui__title"},"Pagination"),c.a.createElement("div",{className:"ui__example"},c.a.createElement(j,{about:Y}),c.a.createElement("div",{className:"ui__pagination"},Q.map((function(e){var t=e.id,r=e.targetPage;return c.a.createElement(n["Fragment"],{key:t},c.a.createElement("div",{className:"ui__text"},"totalPages = ".concat(a)),c.a.createElement(Z,{totalRecords:o,pageLimit:d,pageNeighbours:v,currentPage:r}),c.a.createElement("div",{className:"ui__menu"},c.a.createElement("div",{className:"ui__item"},c.a.createElement("div",{className:"ui__text"},"totalRecords = ".concat(o)),c.a.createElement("input",{className:"ui__range",type:"range",min:"0",max:"100",step:"1",value:o,onChange:h})),c.a.createElement("div",{className:"ui__item"},c.a.createElement("div",{className:"ui__text"},"pageLimit = ".concat(d)),c.a.createElement("input",{className:"ui__range",type:"range",min:"1",max:"50",step:"1",value:d,onChange:E})),c.a.createElement("div",{className:"ui__item"},c.a.createElement("div",{className:"ui__text"},"pageNeighbours = ".concat(v)),c.a.createElement("input",{className:"ui__range",type:"range",min:"0",max:"5",step:"1",value:v,onChange:g}))))})))))},ee=$,te=["Cancel","Apply"],ae={cancel:0,apply:1},ne=["A","BUTTON","INPUT"],ce={start:"start",end:"end"},re=(a("32eb"),a("be63"),function(e){var t=e.title,a=e.render,r=e.updateState,l=Object(n["useState"])({}),i=w()(l,2),o=i[0],u=i[1],s=Object(n["useState"])(!1),m=w()(s,2),d=m[0],f=m[1],b=Object(n["useRef"])(),p=Object(n["useRef"])([]),v=function(){var e=_.main;r({update:!0})({view:e,modalData:o})},h=function(){return f(!1),d},E=function(){var e=h();e||(r({update:!0})({bubbling:!0}),v(),r({update:!0})({bubbling:!1}))},g=function(){var e=_.main;r({update:!0})({view:e})},N=function(){var e=function e(t){for(var a=function(a){var n=ne.find((function(e){return t[a].nodeName==e}));n&&p.current.push(t[a]),t[a].hasChildNodes()&&e(t[a].children)},n=0;n<t.length;n++)a(n)},t=b.current.children;t&&(e(t),p.current.length&&p.current[0].focus())},y=function(e){var t=e.target,a=p.current;t.dataset.focused===ce.end&&a[0].focus(),t.dataset.focused===ce.start&&a[a.length-1].focus()};return Object(n["useEffect"])((function(){N(),document.addEventListener("click",(function(e){var t=(null===b||void 0===b?void 0:b.current)&&!b.current.contains(e.target);t&&g()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&g()}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"modal",role:"dialog","aria-labelledby":"dialog_label","aria-modal":"true",ref:b,onFocus:y},c.a.createElement("div",{"data-focused":"start",tabIndex:"0"}),c.a.createElement("div",{className:"modal__cont"},c.a.createElement("h2",{className:"modal__title",id:"dialog_label"},t),c.a.createElement("div",{className:"modal__menu"},a(u,d),c.a.createElement("div",{className:"modal__btns"},c.a.createElement(C,{btnText:te[ae.cancel],callback:g}),c.a.createElement(C,{btnText:te[ae.apply],callback:E})))),c.a.createElement("div",{"data-focused":"end",tabIndex:"0"})),c.a.createElement("div",{className:"modal__overley"}))});re.defaultProps={title:"new modal",render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"modal__item"},c.a.createElement("label",{className:"modal__lab",htmlFor:"firstName"},"first name"),c.a.createElement("input",{id:"firstName",className:"modal__field",type:"text",placeholder:"first name"})),c.a.createElement("div",{className:"modal__item"},c.a.createElement("label",{className:"modal__lab",htmlFor:"lastName"},"last name"),c.a.createElement("input",{id:"lastName",className:"modal__field",type:"text",placeholder:"last mame"})))},updateState:function(e){return e}};var le=re,ie=[{id:1}],oe=[{id:1,name:"title",type:"string",text:"Заголовок"},{id:2,name:"render",type:"JSX.Element",text:"Содержимое"}],ue=function(e){var t=e.view,a=e.updateState,r=Object(n["useState"])(),l=w()(r,2),i=(l[0],l[1],function(){a({update:!0})({view:_.modal})});return c.a.createElement("div",{className:"ui__cont"},c.a.createElement("h2",{className:"ui__title"},"ModalWindow"),c.a.createElement("div",{className:"ui__example"},c.a.createElement(j,{about:oe}),c.a.createElement("div",{className:"ui__modal"},ie.map((function(e){return c.a.createElement(n["Fragment"],{key:e.id},c.a.createElement(C,{btnText:"open modal",callback:i}),t===_.modal&&c.a.createElement(le,{updateState:a}))})))))},se=ue;a("2dfd"),a("32fb");function me(e){var t=de();return function(){var a,n=v()(e);if(t){var c=v()(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return b()(this,a)}}function de(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var fe=function(e){d()(a,e);var t=me(a);function a(e){var n;return o()(this,a),n=t.call(this,e),n.updateState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.update;return t?function(e){return n.setState(e)}:n.state},n.state={view:_.main},n}return s()(a,[{key:"render",value:function(){var e=this.state.view;return e!==_.error&&c.a.createElement("div",{className:"ui"},c.a.createElement(L,null),c.a.createElement(z,null),c.a.createElement(q,null),c.a.createElement(ee,null),c.a.createElement(se,{view:e,updateState:this.updateState}),c.a.createElement(x,null))}}]),a}(n["Component"]);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");l.a.render(c.a.createElement(fe,null),e)}))}});