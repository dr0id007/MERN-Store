(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),a=n.n(r),o=n(24),s=n.n(o),u=n(13),i=n(5),l=n(26),j=n(21),b=n(19),h=n(27),d=n(15),O=n(47);function p(){var e=Object(l.a)(["\n    background: transparent;\n    border: none;\n    // margin: 0px;\n    // padding: 0px;  \n    color: inherit;\n    outline: none;\n    outline: 0;\n    font-size: 16px;\n\n    &:hover , &::selection , &:focus   {\n        background: transparent;\n        border: none;\n        // margin: 0px;\n        // padding: 0px; \n        color: inherit;\n        // text-decoration: underline; \n        outline: none;\n        outline: 0;\n    }\n"]);return p=function(){return e},e}function f(){var e=Object(l.a)(["\n    margin: 10px;\n"]);return f=function(){return e},e}var x=h.a.li(f()),g=h.a.button(p()),m=function(e){var t,n=Object(r.useState)(!1),a=Object(b.a)(n,2),o=(a[0],a[1],Object(r.useState)(!1)),s=Object(b.a)(o,2),i=(s[0],s[1],Object(d.c)((function(e){return e.auth.auth})));return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"navbar navbar-inverse",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)("div",{className:"navbar-header",children:Object(c.jsx)(u.c,{className:"navbar-brand",to:"/",children:"Brand Logo"})}),Object(c.jsxs)("ul",{className:"nav navbar-nav navbar-right",style:{display:"flex",flexDirection:"row",marginRight:"20px",marginTop:"2px"},children:[Object(c.jsx)(x,{children:Object(c.jsx)(g,{children:Object(c.jsxs)(u.c,{to:"/",children:[Object(c.jsx)("span",{className:"glyphicon glyphicon-user"}),"Brands"]})})}),i?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x,{children:Object(c.jsx)(g,{children:Object(c.jsxs)(u.c,(t={to:"/account",style:{margin:"auto"}},Object(j.a)(t,"to","/account"),Object(j.a)(t,"children",[Object(c.jsx)("span",{className:"glyphicon glyphicon-log-in"})," Account"]),t))})}),Object(c.jsx)(x,{children:Object(c.jsxs)(g,{onClick:function(){localStorage.removeItem("auth-token"),window.location.reload()},children:[Object(c.jsx)("span",{className:"glyphicon glyphicon-log-in"})," Logout"]})})]}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(x,{children:Object(c.jsx)(g,{children:Object(c.jsxs)(u.c,{to:"/login",children:[Object(c.jsx)("span",{className:"glyphicon glyphicon-log-in"})," Login"]})})})}),Object(c.jsx)(x,{children:Object(c.jsx)(g,{children:Object(c.jsxs)(u.c,{to:"/order",children:[Object(c.jsx)(O.a,{style:{verticalAlign:"sub"}})," Cart"]})})})]})]})})})},v=n(8),y=n(12),w=n.n(y),k=n(18),S=n(53),_=n(36),N=n(23),E=function(e){var t=e.component,n=Object(S.a)(e,["component"]),a=Object(r.useState)(!1),o=Object(b.a)(a,2),s=o[0],u=(o[1],Object(r.useState)(!1)),l=Object(b.a)(u,2),j=l[0],h=l[1],O=(Object(d.c)((function(e){return e})),Object(d.b)()),p=function(){var e=Object(k.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)();case 2:t=e.sent,h(t.auth),O({type:"SET_AUTH",payload:{user:t.user,auth:t.auth}});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){p()}),[]),s?Object(c.jsx)(N.a,{}):Object(c.jsx)(i.a,Object(v.a)(Object(v.a)({},n),{},{render:function(e){return Object(c.jsx)(t,Object(v.a)(Object(v.a)({},e),{},{auth:j}))}}))},T=(n(100),n(101),Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,134))}))),D=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(11)]).then(n.bind(null,128))})),P=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(10)]).then(n.bind(null,129))})),z=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(6),n.e(8)]).then(n.bind(null,136))})),I=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(9)]).then(n.bind(null,135))})),R=function(e){return Object(c.jsx)(u.a,{children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m,{}),Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)(N.a,{}),children:Object(c.jsxs)(i.c,{children:[Object(c.jsx)(i.a,{exact:!0,path:"/register",component:D}),Object(c.jsx)(i.a,{exact:!0,path:"/login",component:P}),Object(c.jsx)(E,{path:"/product/:id",component:z}),Object(c.jsx)(E,{exact:!0,path:"/order",component:I}),Object(c.jsx)(E,{path:"/",component:T})]})})]})})},U=n(17),A={user:{},auth:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH":console.log("auth reducer called",t.payload);var n=t.payload,c=n.auth,r=n.user;return Object(v.a)(Object(v.a)({},e),{},{auth:c,user:r});default:return e}},C=n(52),F={products:[]},X=function(e,t){var n=e.filter((function(e){return e._id!==t}));return console.log("res",n),n},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":return console.log("add called"),Object(v.a)(Object(v.a)({},e),{},{products:[].concat(Object(C.a)(e.products),[t.payload])});case"REMOVE_PRODUCT":console.log("remove called");var n=X(e.products,t.payload.id);return Object(v.a)(Object(v.a)({},e),{},{products:n});default:return e}},J=Object(U.b)({auth:L,order:B}),V=Object(U.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),H=Object(U.d)(J,V);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(d.a,{store:H,children:Object(c.jsx)(R,{})})}),document.getElementById("root"))},23:function(e,t,n){"use strict";var c=n(2),r=(n(1),n(51)),a=n.n(r);t.a=function(){return Object(c.jsx)("section",{className:"bg-white",style:{height:"100vh",width:"100%"},children:Object(c.jsx)(a.a,{style:{position:"absolute",top:"50%",left:"50%"},type:"TailSpin",color:"#1a1a1a",height:50,width:50})})}},34:function(e){e.exports=JSON.parse('{"url":"https://mern-store-template.herokuapp.com"}')},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return b}));var c=n(12),r=n.n(c),a=n(18),o=n(20),s=n.n(o),u=n(34),i=u.url,l=function(){var e=Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.a.defaults.headers.common["auth-token"]=localStorage.getItem("auth-token"),console.log(localStorage.getItem("auth-token")),e.next=4,s.a.get(i+"/api/auth").then((function(e){return{user:e.data,auth:!0}})).catch((function(e){return console.log("err",e),{auth:!1,user:null}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post(i+"/api/auth/login",t).then((function(e){return e.data.token})).catch((function(e){console.log("err",e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post(i+"/api/users",t).then((function(e){return e.data.token})).catch((function(e){console.log("err",e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},[[102,4,5]]]);
//# sourceMappingURL=main.a496ab5a.chunk.js.map