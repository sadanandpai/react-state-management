(this["webpackJsonpreact-learning"]=this["webpackJsonpreact-learning"]||[]).push([[0],{35:function(e,n,t){},36:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(2),i=t.n(r),u=t(15),s=t.n(u),o=(t(35),t(36),t(11));function a(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return e.increment(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return e.decrement(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){return e.incrementAsync(1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){return e.decrementAsync(1)},children:"Decrement Async"})]})}function j(e){return Object(c.jsx)("div",{className:"count-value",children:e.state})}function l(e){var n=Object(r.useState)(0),t=Object(o.a)(n,2),i=t[0],u=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(a,{increment:function(e){u((function(n){return n+e}))},decrement:function(e){u((function(n){return n-e}))},incrementAsync:function(e){setTimeout((function(){return u((function(n){return n+e}))}),1500)},decrementAsync:function(e){setTimeout((function(){return u((function(n){return n-e}))}),1500)}}),Object(c.jsx)(j,{state:i})]})]})}var d={},b=1500;function f(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return e.increment(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return e.decrement(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){return e.incrementAsync(1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){return e.decrementAsync(1)},children:"Decrement Async"})]})}function m(e){return Object(c.jsx)("div",{className:"count-value",children:e.state})}function O(e){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=Object(r.useState)(e),t=Object(o.a)(n,2),c=t[0],i=t[1];return d.increment=function(e){i((function(n){return n+e}))},d.decrement=function(e){i((function(n){return n-e}))},d.incrementAsync=function(e){setTimeout(d.increment,b,e)},d.decrementAsync=function(e){setTimeout(d.decrement,b,e)},c}(0);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(f,{increment:d.increment,decrement:d.decrement,incrementAsync:d.incrementAsync,decrementAsync:d.decrementAsync}),Object(c.jsx)(m,{state:n})]})]})}var x=t(6),h=t(7),v=t(14);var y={increment:function(e){return{type:"INCREMENT",payload:e}},decrement:function(e){return{type:"DECREMENT",payload:e}},incrementAsync:function(e){return function(n){setTimeout((function(){n({type:"INCREMENT",payload:e})}),1500)}},decrementAsync:function(e){return function(n){setTimeout((function(){n({type:"DECREMENT",payload:e})}),1500)}}},p=Object(h.b)(void 0,y)((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return e.increment(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return e.decrement(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){return e.incrementAsync(1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){return e.decrementAsync(1)},children:"Decrement Async"})]})}));var N=Object(h.b)((function(e){return{state:e}}))((function(e){return Object(c.jsx)("div",{className:"count-value",children:e.state})})),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,C=Object(x.e)((function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return"INCREMENT"===t.type?n+(null!==(e=null===t||void 0===t?void 0:t.payload)&&void 0!==e?e:1):"DECREMENT"===t.type?n-1:n}),E(Object(x.a)(v.a)));function A(e){return Object(c.jsx)(h.a,{store:C,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(p,{}),Object(c.jsx)(N,{})]})]})})}var k=t(29),T=t(8),M=t.n(T),D=t(13),w=M.a.mark(P),R=M.a.mark(X),I=M.a.mark(J),S=M.a.mark(Y),g=M.a.mark(L),_=function(e){return new Promise((function(n){return setTimeout(n,e)}))};function P(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,t.next=3,_(1500);case 3:return t.next=5,Object(D.b)({type:"INCREMENT",payload:n});case 5:case"end":return t.stop()}}),w)}function X(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,t.next=3,_(1500);case 3:return t.next=5,Object(D.b)({type:"DECREMENT",payload:n});case 5:case"end":return t.stop()}}),R)}function J(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.c)("INCREMENT_ASYNC",P);case 2:case"end":return e.stop()}}),I)}function Y(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.c)("DECREMENT_ASYNC",X);case 2:case"end":return e.stop()}}),S)}function L(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([J(),Y()]);case 2:case"end":return e.stop()}}),g)}var U=Object(h.b)(void 0,{increment:function(e){return{type:"INCREMENT",payload:e}},decrement:function(e){return{type:"DECREMENT",payload:e}},incrementAsync:function(e){return{type:"INCREMENT_ASYNC",payload:e}},decrementAsync:function(e){return{type:"DECREMENT_ASYNC",payload:e}}})((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return e.increment(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return e.decrement(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){return e.incrementAsync(1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){return e.decrementAsync(1)},children:"Decrement Async"})]})}));var V=Object(h.b)((function(e){return{state:e}}))((function(e){return Object(c.jsx)("div",{className:"count-value",children:e.state})})),B=Object(k.a)(),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,q=Object(x.e)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;return"INCREMENT"===n.type?e+n.payload:"DECREMENT"===n.type?e-n.payload:e}),H(Object(x.a)(B)));function z(e){return Object(c.jsx)(h.a,{store:q,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(U,{}),Object(c.jsx)(V,{})]})]})})}B.run(L);var F,G=t(12),K=t(22),Q=t(23),W=Object(G.b)("incrementAsync",function(){var e=Object(Q.a)(M.a.mark((function e(n,t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1500)}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),Z=Object(G.b)("decrementAsync",function(){var e=Object(Q.a)(M.a.mark((function e(n,t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1500)}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),$=Object(G.c)({name:"counter",initialState:0,reducers:{increment:function(e,n){return e+n.payload},decrement:function(e,n){return e-n.payload}},extraReducers:(F={},Object(K.a)(F,W.fulfilled,(function(e,n){return e+n.payload})),Object(K.a)(F,Z.fulfilled,(function(e,n){return e-n.payload})),F)}),ee=$.actions,ne=ee.increment,te=ee.decrement;var ce=function(){var e=Object(h.c)();return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return e(ne(1))},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return e(te(1))},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){return e(W(1))},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){return e(Z(1))},children:"Decrement Async"})]})};var re=Object(h.b)((function(e){return{state:e}}))((function(e){return Object(c.jsx)("div",{className:"count-value",children:e.state})})),ie=Object(G.a)({reducer:$.reducer});function ue(e){return Object(c.jsx)(h.a,{store:ie,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(ce,{}),Object(c.jsx)(re,{})]})]})})}var se=t(28),oe=t(26),ae=t(27),je=t(5),le=new(function(){function e(){var n=this;Object(oe.a)(this,e),this.state=0,this.increment=function(){n.state+=1},this.decrement=function(){n.state-=1},Object(je.k)(this)}return Object(ae.a)(e,[{key:"incrementAsync",value:function(){setTimeout(this.increment,1500)}},{key:"decrementAsync",value:function(){setTimeout(this.decrement,1500)}}]),e}());function de(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return e.increment(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return e.decrement(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){return e.incrementAsync(1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){return e.decrementAsync(1)},children:"Decrement Async"})]})}function be(e){return Object(c.jsx)("div",{className:"count-value",children:e.state})}var fe=Object(se.a)((function(e){var n=e.countManager;return Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(de,{increment:n.increment,decrement:n.decrement,incrementAsync:n.incrementAsync,decrementAsync:n.decrementAsync}),Object(c.jsx)(be,{state:n.state})]})}));function me(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsx)(fe,{countManager:le})]})}var Oe=t(45),xe=0,he=new Oe.a(xe);he.subscribe((function(e){xe=e}));var ve=function(e){he.next(xe+e)},ye=function(e){he.next(xe-e)};function pe(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return ve(1)},children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return ye(1)},children:"Decrement"}),Object(c.jsx)("button",{onClick:function(){setTimeout(ve,1500,1)},children:"Increment Async"}),Object(c.jsx)("button",{onClick:function(){setTimeout(ye,1500,1)},children:"Decrement Async"})]})}function Ne(e){var n=Object(r.useState)(0),t=Object(o.a)(n,2),i=t[0],u=t[1];return Object(r.useEffect)((function(){var e=he.subscribe((function(e){u(e)}));return function(){e.unsubscribe()}})),Object(c.jsx)("div",{className:"count-value",children:i})}function Ee(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"flex",children:e.title}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(pe,{}),Object(c.jsx)(Ne,{})]})]})}var Ce=function(e){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("h2",{children:"Different ways of managing state in React JS"}),Object(c.jsx)(l,{title:"Pure React State Management"}),Object(c.jsx)(O,{title:"React Hooks State Management"}),Object(c.jsx)(A,{title:"Redux Thunk State Management"}),Object(c.jsx)(z,{title:"Redux Saga State Management"}),Object(c.jsx)(ue,{title:"Redux Toolkit State Management"}),Object(c.jsx)(Ee,{title:"RxJS State Management"}),Object(c.jsx)(me,{title:"MobX State Management"})]})};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Ce,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.e0384fc3.chunk.js.map