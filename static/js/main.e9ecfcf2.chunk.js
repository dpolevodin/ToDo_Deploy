(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports={_:"Button____pcrPA",primary:"Button_primary__2aYHT",small:"Button_small__2ZodH",round:"Button_round__3yrIh"}},,,,function(e,n,t){e.exports={_:"Table____EnvfP",wrapper:"Table_wrapper__3ET9-",buttonWrapper:"Table_buttonWrapper__1wzft"}},,,,function(e,n,t){e.exports={_:"Icon____3T07G",round:"Icon_round__Kk0Gp"}},function(e,n,t){e.exports={_:"Affair____hU-2f",affairText:"Affair_affairText__2edms"}},,,function(e,n,t){e.exports={_:"Input____kneUk"}},function(e,n,t){e.exports={_:"UserForm____gaVj3"}},function(e,n,t){e.exports={_:"Header____3J6XT"}},function(e,n,t){e.exports={_:"AffairsList____1zmWu"}},function(e,n,t){e.exports={_:"DoneList____2dBtN"}},function(e,n,t){e.exports={_:"ThemeButton____fhAUR"}},function(e,n,t){e.exports={_:"SVG____1KGIY"}},,,,,,,,,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"getAffairs",(function(){return ee})),t.d(r,"getDoneAffairs",(function(){return ne})),t.d(r,"selectors",(function(){return r}));var a=t(1),c=t.n(a),o=t(9),i=t.n(o),s=t(4),l=t(6),u="AFFAIRS.SET_AFFAIRS",j="AFFAIRS.DONE_AFFAIR",f="AFFAIRS.CLEAR",d="AFFAIRS.DELETE_AFFAIR",_=function(e){return{type:u,payload:e}},b=function(e){return{type:j,payload:e}},p=function(e){return{type:d,payload:e}},O=function(){return{type:f}},m=t(5),h=t(2),x={todo:[],done:[]},v=Object(l.combineReducers)({affairs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u:return Object(h.a)(Object(h.a)({},e),{},{todo:[].concat(Object(m.a)(e.todo),[n.payload])});case d:return Object(h.a)(Object(h.a)({},e),{},{todo:e.todo.filter((function(e){return e!==n.payload}))});case f:return x;case j:return Object(h.a)(Object(h.a)({},e),{},{todo:Object(m.a)(e.todo.filter((function(e){return e!==n.payload}))),done:[].concat(Object(m.a)(e.done),[n.payload])});default:return e}}}),k=t(19),C=Object(l.createStore)(v,Object(k.devToolsEnhancer)({name:"affairs"})),g=t(13),y=t(3),A=t(8),T=t.n(A),w=t(11),D=t(16),S=t.n(D),N=t(0),F=function(e){var n=e.name,t=Object(w.a)([S.a._,Object(y.a)({},S.a.round,"bin"===n)]);return Object(N.jsx)("svg",{className:t,children:Object(N.jsx)("use",{xlinkHref:"#".concat(n)})})},B=function(e){var n,t=e.children,r=e.onClick,a=e.small,c=e.round,o=e.type,i=e.primary,s=e.name,l=Object(w.a)([T.a._,(n={},Object(y.a)(n,T.a.primary,i),Object(y.a)(n,T.a.small,a),Object(y.a)(n,T.a.round,c),n)]);return Object(N.jsxs)("button",{onClick:r,className:l,type:o,name:s,children:[a&&Object(N.jsx)(F,{name:"incorrect"}),c&&Object(N.jsx)(F,{name:"bin"}),t]})},I=t(20),M=t.n(I),H=function(e){var n=e.onChange,t=e.value,r=e.children;return Object(N.jsx)("input",{className:M.a._,onChange:n,value:t,placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b",children:r})},E=t(21),L=t.n(E),R=function(e){var n=e.onSubmit,t=e.onChange,r=e.onClick,a=e.value;return Object(N.jsxs)("form",{className:L.a._,onSubmit:n,children:[Object(N.jsx)(H,{onChange:t,value:a}),Object(N.jsx)(B,{small:!0,onClick:r,type:"button"})]})},V=t(22),G=t.n(V),U=function(e){var n=e.children;return Object(N.jsx)("h1",{className:G.a._,children:n})},W=t(12),J=t.n(W),z=t(23),K=t.n(z),P=t(17),X=t.n(P),Y=function(e){var n=e.onClick,t=e.onClickButton,r=e.children,a=e.toDo,c=e.name;return Object(N.jsxs)("div",{className:X.a._,children:[Object(N.jsx)("span",{className:X.a.affairText,onClick:n,children:r}),a&&Object(N.jsx)(B,{round:!0,onClick:t,name:c})]})},Z=function(e){var n=e.affairs,t=e.onClick,r=e.onClickButton,a=n.map((function(e,n){return Object(N.jsx)(Y,{onClick:t,onClickButton:r,toDo:!0,name:e,children:e},n)}));return Object(N.jsx)("div",{className:K.a._,children:a})},q=t(24),Q=t.n(q),$=function(e){var n=e.doneAffairs,t=e.onClick;return n.map((function(e,n){return Object(N.jsx)("div",{onClick:t,className:Q.a._,children:Object(N.jsx)(Y,{children:e},n)},n)}))},ee=function(e){return Object(m.a)(new Set(e.affairs.todo)).filter((function(e){return null!==e}))},ne=function(e){return e.affairs.done},te=t(25),re=t.n(te),ae=function(e){var n=e.onClick,t=e.isDarkTheme?"\u0421\u0432\u0435\u0442\u043b\u0430\u044f \u0442\u0435\u043c\u0430":"\u0422\u0435\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430";return Object(N.jsx)("div",{className:re.a._,children:Object(N.jsx)(B,{primary:!0,onClick:n,children:t})})},ce={false:!1,true:!0},oe=function(){var e=Object(a.useState)(null),n=Object(g.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(!1),i=Object(g.a)(o,2),l=i[0],u=i[1],j=Object(a.useState)(function(){var e=window.localStorage;return!!e.DarkTheme&&ce[e.DarkTheme]}()),f=Object(g.a)(j,2),d=f[0],m=f[1];!function(e){var n=document.body.classList;e?n.add("dark"):n.remove("dark")}(d);var h=Object(s.c)(r.getAffairs),x=Object(s.c)(r.getDoneAffairs),v=Object(s.b)();return Object(N.jsx)("div",{className:J.a.wrapper,children:Object(N.jsxs)("div",{className:J.a._,children:[Object(N.jsx)(U,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"}),Object(N.jsx)(ae,{isDarkTheme:d,onClick:function(e){e.preventDefault();var n=window.localStorage,t=void 0===n.DarkTheme||"false"===n.DarkTheme;n.setItem("DarkTheme",t),m(ce[window.localStorage.DarkTheme]),console.log(window.localStorage)}}),Object(N.jsx)(R,{onSubmit:function(e){e.preventDefault(),v(_(t)),c(null)},onChange:function(e){var n=e.target.value;c(n)},value:t||"",onClick:function(e){e.preventDefault(),c(null)}}),Object(N.jsx)(Z,{affairs:h,onClick:function(e){var n=e.target.innerHTML;v(b(n))},onClickButton:function(e){e.preventDefault();var n=e.currentTarget.name;console.log(n),v(p(n))}}),Object(N.jsxs)("div",{className:J.a.buttonWrapper,children:[(h.length>0||x.length>0)&&Object(N.jsx)(B,{primary:!0,onClick:function(e){e.preventDefault(),v(O())},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0434\u0435\u043b\u0430"}),x.length>0&&Object(N.jsxs)(B,{primary:!0,onClick:function(e){e.preventDefault(),u(!l)},children:[!l&&"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435",l&&"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"]})]}),l&&Object(N.jsx)($,{doneAffairs:x})]})})},ie=(t(38),t(26)),se=t.n(ie),le=function(){return Object(N.jsxs)("svg",{className:se.a._,version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16",children:[Object(N.jsxs)("symbol",{id:"bin",viewBox:"0 0 16 16",children:[Object(N.jsx)("path",{d:"M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5",fill:"none",strokeLinecap:"round"}),Object(N.jsx)("path",{d:"M6.5 6V12M9.5 6V12",fill:"none",strokeLinecap:"round"})]}),Object(N.jsx)("symbol",{id:"incorrect",viewBox:"0 0 16 16",children:Object(N.jsx)("path",{d:"M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"})})]})};var ue=function(){return Object(N.jsxs)(s.a,{store:C,children:[Object(N.jsx)(oe,{}),Object(N.jsx)(le,{})]})};i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(ue,{})}),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.e9ecfcf2.chunk.js.map