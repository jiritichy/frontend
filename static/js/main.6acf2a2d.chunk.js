(this.webpackJsonpfakeshop=this.webpackJsonpfakeshop||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(54),s=n.n(a),o=n(3),i=n(7),u=n(4),l=n.n(u),j=n(5),d=n(6),b=Object(r.createContext)(null),m=n(1),h=function(){var e="http://localhost:3001/api/",t=Object(r.useContext)(b),n=t.username,c=t.setUsername,a=Object(d.f)(),s=Object(d.g)();function o(){return(o=Object(j.a)(l.a.mark((function t(){var n,r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==(n=localStorage.getItem("sessionID"))){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,fetch(e+"getUsername/"+n);case 6:return r=t.sent,t.next=9,r.json();case 9:if((o=t.sent).username||["/login","/register"].includes(s.pathname)){t.next=13;break}return a.push("/login"),t.abrupt("return");case 13:c(o.username),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),a.push("/login");case 19:case"end":return t.stop()}}),t,null,[[3,16]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=!0;return"/"===s.pathname||"/login"===s.pathname?(localStorage.removeItem("sessionID"),a.push("/login"),void(e&&c(""))):(function(){o.apply(this,arguments)}(),function(){e=!1})}),[s.pathname]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{className:"text-white",children:n}),Object(m.jsxs)("div",{className:"d-flex flex-row",children:[Object(m.jsx)(i.b,{className:"mr-3",to:"/login",onClick:function(){localStorage.removeItem("sessionID"),c("")},children:n&&n.length>0?Object(m.jsx)("h5",{className:"text-primary",children:"logout"}):"/register"===s.pathname?Object(m.jsx)("h5",{children:"Login"}):void 0}),Object(m.jsx)(i.b,{to:"/register",children:function(){if("/register"!==s.pathname)return n?void 0:Object(m.jsx)("h5",{className:"font-weight-bold",children:"Register"})}()})]})]})},p=function(){return Object(m.jsxs)("div",{className:"bg-dark navbar w-100 static-top",children:[Object(m.jsx)(i.b,{to:function(){return null===localStorage.getItem("sessionID")?"#":"/home"},children:Object(m.jsx)("h1",{className:"navbar-brand mx-3 text-light",children:"Forum Clone"})}),Object(m.jsx)(h,{})]})},f=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(p,{})})},O=function(){return Object(m.jsx)("div",{className:"bg-dark w-100",style:{position:"fixed",bottom:0},children:Object(m.jsx)("h6",{className:"text-light m-2",children:"Dom Zhu - 2021"})})},x=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(o.a)(a,2),u=s[0],h=s[1],p=Object(r.useState)(""),f=Object(o.a)(p,2),O=f[0],x=f[1],v=Object(d.f)(),y=(Object(r.useContext)(b).username,Object(r.useContext)(b).setUsername),g=Object(d.g)(),N="http://localhost:3001/api/";function w(){return(w=Object(j.a)(l.a.mark((function e(t){var r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={username:n,password:u},N+"login",e.prev=3,e.next=6,fetch("http://localhost:3001/api/login",{body:JSON.stringify(r),headers:{"Content-Type":"application/json"},method:"POST"});case 6:return c=e.sent,e.next=9,c.json();case 9:if(!(a=e.sent).hasOwnProperty("error")){e.next=13;break}return x(a.error),e.abrupt("return");case 13:localStorage.setItem("sessionID",a.sessionID),y(n),v.push("/home"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),x("Failed to login. Please try again.");case 21:case"end":return e.stop()}}),e,null,[[3,18]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){y(""),"/login"!==g.pathname&&v.push("/login")}),[g.pathname,v,y]),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-12 col-sm-8 offset-sm-2 col-xl-6 offset-xl-3",children:[Object(m.jsxs)("form",{className:"mt-5",children:[Object(m.jsx)("h1",{className:"mb-4 text-center",children:"Login"}),Object(m.jsxs)("div",{className:"form-group mb-2",children:[Object(m.jsx)("label",{children:"Username"}),Object(m.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},className:"form-control",placeholder:"Enter username"})]}),Object(m.jsxs)("div",{className:"form-group mb-3",children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{type:"password",value:u,onChange:function(e){return h(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(m.jsx)("button",{type:"submit",onClick:function(e){return w.apply(this,arguments)},className:"btn btn-primary",children:"Submit"})]}),Object(m.jsx)(i.b,{to:"/register",children:Object(m.jsx)("div",{className:"mt-1",children:"New user? Click here to register!"})}),O.length>0&&Object(m.jsx)("h5",{className:"mt-3 alert alert-danger",children:O})]})})})},v=n(12),y=n(36),g=n(0),N=n(57),w=function(e){var t=e.threadID,n=(e.loadThread,e.noRenderButton),c=e.parentPostID,a=e.setRenderReplyForm,s=Object(r.useState)(!1),i=Object(o.a)(s,2),u=i[0],d=i[1],h="http://localhost:3001/api/",p=Object(r.useState)(""),f=Object(o.a)(p,2),O=f[0],x=f[1],v=Object(r.useContext)(b).username,y=Object(r.useState)(""),g=Object(o.a)(y,2),N=g[0],w=g[1];function S(){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(l.a.mark((function e(){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:v,content:O,date:(new Date).getTime().toString(),threadID:t,childrenIDs:[],parentID:c,imageURL:N},e.prev=1,e.next=4,fetch(h+"makePost",{body:JSON.stringify(n),headers:{"Content-Type":"application/json"},method:"POST"});case 4:return r=e.sent,e.next=7,r.json();case 7:e.sent,d((function(e){return!e})),x(""),w(""),e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return");case 16:k();case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function k(){d(!1),a&&a(!1)}return Object(r.useEffect)((function(){d(void 0!==n)}),[]),Object(m.jsxs)(m.Fragment,{children:[u&&Object(m.jsxs)("div",{className:"form-group mt-4 mb-5",children:[Object(m.jsx)("label",{className:"",children:"Content"}),Object(m.jsx)("textarea",{value:O,placeholder:"What are your thoughts?",onChange:function(e){return x(e.target.value)},className:"form-control border border-secondary",rows:6}),Object(m.jsxs)("div",{className:"mt-3",children:[Object(m.jsx)("label",{children:"Image url"}),Object(m.jsx)("input",{value:N,type:"text",onChange:function(e){return w(e.target.value)},className:"form-control border border-secondary"})]}),Object(m.jsxs)("div",{className:"d-flex flex-row justify-content-end",children:[Object(m.jsx)("button",{onClick:function(e){return k()},className:"btn btn-primary mt-2",children:"Cancel"}),Object(m.jsx)("button",{onClick:S,className:"btn btn-primary mt-2 ml-3 bg-secondary text-dark border border-secondary",children:"Submit"})]})]}),!u&&!n&&Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){return d((function(e){return!e}))},children:"Add Reply"})})]})},S=n(56),C=n.n(S),k=function(e){var t=e.post,n=Object(r.useState)(0),c=Object(o.a)(n,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){var e=setInterval((function(){var e=(new Date).getTime()-parseInt(t.date);s(e)}),100);return function(){clearTimeout(e)}}),[t.date]),Object(m.jsxs)("div",{className:"row p-2 d-flex justify-content-between",children:[Object(m.jsx)("h6",{className:"text-white ml-1",children:t.username}),Object(m.jsx)("h6",{children:"1"!==t.date&&Object(m.jsxs)("small",{className:"ml-3 text-muted",children:[C()(a,{compact:!0})," ago"]})})]})},D=function(e){var t=e.post,n=e.renderChildren,c=e.setRenderReplyForm,a=e.setRenderChildren,s=e.deletePost,o=Object(r.useContext)(b).username,i="http://localhost:3001/api/";function u(){return(u=Object(j.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i+"hidePost",{body:JSON.stringify({username:o,postID:t.id,hidden:n}),headers:{"Content-Type":"application/json"},method:"POST"});case 2:return r=e.sent,e.next=5,r.json();case 5:e.sent;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){a((function(e){return!e})),function(){u.apply(this,arguments)}()}return Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col d-flex",children:[Object(m.jsx)("div",{children:Object(m.jsx)("h6",{className:"text-muted",children:Object(m.jsx)("small",{style:{cursor:"pointer"},onClick:function(e){return c((function(e){return!e}))},children:"Reply"})})}),0===t.childrenIDs.length?null:Object(m.jsx)("div",{className:"ml-3",children:Object(m.jsx)("h6",{className:"text-muted",children:Object(m.jsxs)("small",{style:{cursor:"pointer"},onClick:function(e){return d()},children:[!n&&"Show Replies",n&&"Hide Replies"]})})}),function(){if(!t.deleted&&t.username===o)return Object(m.jsx)("div",{className:"ml-3",children:Object(m.jsx)("h6",{className:"text-muted",children:Object(m.jsx)("small",{style:{cursor:"pointer"},onClick:function(e){return s()},children:"Delete Post"})})})}()]})})},I=function(e){var t=e.post;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"row pl-2",children:Object(m.jsx)("div",{className:"text-white ml-1",children:t.deleted?Object(m.jsx)("h6",{className:"text-danger",children:"[Deleted]"}):Object(m.jsx)("p",{style:{wordBreak:"break-word"},children:t.content})})}),function(){if(!t.deleted)return""!==t.imageURL?Object(m.jsx)("img",{className:"mb-2",style:{maxWidth:"400px",width:"100%",height:"auto"},src:t.imageURL,alt:""}):void 0}()]})},P=n(25),T=Object(r.createContext)(null),R=function(e){var t=e.postID,n=e.username,c=Object(r.useState)(0),a=Object(o.a)(c,2),s=a[0],i=a[1],u="http://localhost:3001/api/",d=Object(r.useState)(0),b=Object(o.a)(d,2),h=b[0],p=b[1],f=Object(r.useContext)(T).voteReload,O=Object(o.a)(f,2),x=O[0],v=O[1];function y(){return N.apply(this,arguments)}function N(){return(N=Object(j.a)(l.a.mark((function e(){var r,c,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(u+"getPostVotes",{body:JSON.stringify({postID:t}),headers:{"Content-Type":"application/json"},method:"POST"});case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,i(parseInt(c.votes)),e.next=11,fetch(u+"getUsersVotes",{body:JSON.stringify({postID:t,username:n}),headers:{"Content-Type":"application/json"},method:"POST"});case 11:return a=e.sent,e.next=14,a.json();case 14:s=e.sent,p(s.vote);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(l.a.mark((function e(r){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c={postID:t,vote:r,username:n},fetch(u+"upvotePost",{body:JSON.stringify(c),headers:{"Content-Type":"application/json"},method:"POST"});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=!0;return e&&x===t&&(y(),v(null)),function(){e=!1}}),[x]),Object(r.useEffect)((function(){y()}),[n]),Object(m.jsx)("div",{className:"d-flex flex-column mx-2",children:Object(m.jsxs)(g.b.Provider,{value:{size:"2em"},children:[1===h&&Object(m.jsx)(P.b,{style:{cursor:"pointer",color:"orange"},onClick:function(e){return w("1")}}),1!==h&&Object(m.jsx)(P.b,{style:{cursor:"pointer"},onClick:function(e){return w("1")}}),Object(m.jsx)("h5",{className:"text-white text-center",style:{marginBottom:"0"},children:s}),-1===h&&Object(m.jsx)(P.a,{style:{cursor:"pointer",color:"blue"},onClick:function(e){return w("-1")}}),-1!==h&&Object(m.jsx)(P.a,{style:{cursor:"pointer"},onClick:function(e){return w("-1")}})]})})},E="http://localhost:3001/api/",J=function e(t){var n=t.postID,c=t.threadID,a=t.loadThread,s=t.getPost,i=t.indentLevel,u=t.newPost,d=Object(r.useContext)(b).username,h=Object(r.useState)({childrenIDs:[],content:"loading...",date:"1",id:"",imageURL:"",parentID:"",username:"loading..."}),p=Object(o.a)(h,2),f=p[0],O=p[1],x=Object(r.useState)([]),y=Object(o.a)(x,2),g=y[0],N=y[1],S=Object(r.useState)(!1),C=Object(o.a)(S,2),P=C[0],J=C[1],U=Object(r.useState)(!0),L=Object(o.a)(U,2),F=L[0],W=L[1],_=Object(r.useState)(u),B=Object(o.a)(_,2),A=B[0],z=B[1],H=Object(o.a)(Object(r.useContext)(T).deleteReload,2),V=H[0],M=H[1],Z=20*i;function q(e){return G.apply(this,arguments)}function G(){return(G=Object(j.a)(l.a.mark((function e(t){var n,r,a,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={threadID:c,postID:t},e.next=3,fetch(E+"getPost",{body:JSON.stringify(n),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.next=9,fetch(E+"isPostHidden",{body:JSON.stringify({username:d,postID:t}),headers:{"Content-Type":"application/json"},method:"POST"});case 9:return s=e.sent,e.next=12,s.json();case 12:return o=e.sent,W(!o.status),e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(j.a)(l.a.mark((function e(){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={threadID:c,postID:n},e.prev=1,e.next=4,fetch(E+"deletePost",{body:JSON.stringify(t),headers:{"Content-Type":"application/json"},method:"POST"});case 4:return r=e.sent,e.next=7,r.json();case 7:if(!e.sent.hasOwnProperty("status")){e.next=13;break}return e.next=11,q(n);case 11:a=e.sent,O(a);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=!0;return function(){var t=Object(j.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(n);case 2:r=t.sent,e&&(O(r),N(r.childrenIDs));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[]),Object(r.useEffect)((function(){if(V===n){var e=f;e.deleted=!0,O(e),M(null)}}),[V]),Object(r.useEffect)((function(){if(null!==u){if(u.parentID===n){N((function(e){return[].concat(Object(v.a)(e),[u.id])}));var e=f;return e.childrenIDs=[].concat(Object(v.a)(f.childrenIDs),[u.id]),O(e),void z(null)}z(u)}}),[u]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{style:{marginLeft:Z,width:"auto"},children:[Object(m.jsxs)("div",{className:"my-3 d-flex border border-secondary rounded bg-dark",children:[Object(m.jsx)(R,{postID:n,username:d}),Object(m.jsxs)("div",{className:"container",style:{paddingLeft:"0"},children:[Object(m.jsx)(k,{post:f}),Object(m.jsx)(I,{post:f}),Object(m.jsx)(D,{post:f,renderChildren:F,setRenderReplyForm:J,setRenderChildren:W,deletePost:function(){return K.apply(this,arguments)}})]})]}),function(){if(P)return Object(m.jsx)(w,{threadID:c,loadThread:a,noRenderButton:!0,parentPostID:f.id,setRenderReplyForm:J})}()]}),F&&g.map((function(t){return null!==t?Object(m.jsx)(e,{loadThread:a,postID:t,getPost:s,threadID:c,indentLevel:i+1,newPost:A},t):null}))]})},U=n(28),L=n.n(U),F=L()("http://localhost:3001"),W=function(){var e=Object(r.useContext)(b),t=e.username,n=(e.setUsername,Object(r.useState)({title:"",content:"",username:"",_id:"",posts:[]})),c=Object(o.a)(n,2),a=c[0],s=c[1],i="http://localhost:3001/api/",u=Object(d.h)(),h=u.communityName,p=u.id,f=Object(d.f)(),O=Object(r.useState)([]),x=Object(o.a)(O,2),S=x[0],C=x[1],k=Object(r.useState)(null),D=Object(o.a)(k,2),I=D[0],P=D[1],R=Object(o.a)(Object(r.useContext)(T).voteReload,2),E=(R[0],R[1]),U=Object(o.a)(Object(r.useContext)(T).deleteReload,2),L=(U[0],U[1]);function W(){return _.apply(this,arguments)}function _(){return(_=Object(j.a)(l.a.mark((function e(){var t,n,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"getThread/").concat(p));case 2:return t=e.sent,e.next=5,t.json();case 5:if(!(n=e.sent).hasOwnProperty("error")){e.next=9;break}return f.push("/home"),e.abrupt("return");case 9:if(JSON.stringify(n)!==JSON.stringify(a)){s(n),C([]),r=Object(y.a)(n.posts);try{for(o=function(){var e=c.value;null===e.parentID&&C((function(t){return[].concat(Object(v.a)(t),[e])}))},r.s();!(c=r.n()).done;)o()}catch(u){r.e(u)}finally{r.f()}}case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return A.apply(this,arguments)}function A(){return(A=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"deleteThread/").concat(h,"/").concat(p));case 2:e.sent,f.push("/c/".concat(h));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){var t,n=Object(y.a)(a.posts);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.id===e)return r}}catch(c){n.e(c)}finally{n.f()}return null}return Object(r.useEffect)((function(){return W(),F.connect(),F.emit("onThread",p),F.on("newPost",(function(e){null===e.parentID?(console.log("new top level post"),C((function(t){return[].concat(Object(v.a)(t),[e])}))):P(e)})),F.on("upvotePost",(function(e){E(e)})),F.on("postDeleted",(function(e){L(e)})),function(){F.disconnect()}}),[]),Object(m.jsxs)("div",{className:"container mt-3 mb-5",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col d-inline-flex align-items-center",children:[Object(m.jsx)("h1",{className:"mb-0",children:a.title}),function(){if(a.username===t)return Object(m.jsx)(g.b.Provider,{value:{size:"1em"},children:Object(m.jsx)(N.a,{onClick:B,style:{cursor:"pointer",minWidth:"15px"},className:"ml-2"})})}()]})}),Object(m.jsxs)("h6",{children:["- ",a.username]}),Object(m.jsx)("p",{style:{wordWrap:"break-word"},children:a.content}),Object(m.jsx)(w,{threadID:p,loadThread:W}),Object(m.jsx)("h4",{className:"mt-5",children:"Replies:"}),Object(m.jsx)("div",{className:"container ",children:S.map((function(e,t){return Object(m.jsx)(J,{postID:e.id,threadID:p,loadThread:W,getPost:z,indentLevel:0,newPost:I},t)}))})]})},_=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(o.a)(a,2),u=s[0],b=s[1],h=Object(r.useState)(""),p=Object(o.a)(h,2),f=p[0],O=p[1],x=Object(r.useState)(""),v=Object(o.a)(x,2),y=v[0],g=v[1],N=Object(r.useState)(""),w=Object(o.a)(N,2),S=w[0],C=w[1],k="http://localhost:3001/api/",D=Object(d.f)();function I(){if(u===f)return!0}function P(){return(P=Object(j.a)(l.a.mark((function e(t){var r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),C(""),g(""),I()){e.next=5;break}return e.abrupt("return");case 5:return r={username:n,password:u},k+"register",e.prev=7,e.next=10,fetch("http://localhost:3001/api/register",{body:JSON.stringify(r),headers:{"Content-Type":"application/json"},method:"POST"});case 10:return c=e.sent,e.next=13,c.json();case 13:if(!(a=e.sent).hasOwnProperty("error")){e.next=17;break}return C(a.error),e.abrupt("return");case 17:return g(a.status),e.next=20,new Promise((function(e){return setTimeout(e,1500)}));case 20:D.push("/login"),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(7),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[7,23]])})))).apply(this,arguments)}return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-12 col-sm-8 offset-sm-2 col-xl-6 offset-xl-3",children:[Object(m.jsxs)("form",{className:"mt-5",children:[Object(m.jsx)("h1",{className:"mb-4 text-center",children:"Register"}),Object(m.jsxs)("div",{className:"form-group mb-2",children:[Object(m.jsx)("label",{children:"Username"}),Object(m.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},className:"form-control",placeholder:"Enter username"})]}),Object(m.jsxs)("div",{className:"form-group mb-2",children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{type:"password",value:u,onChange:function(e){return b(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(m.jsxs)("div",{className:"form-group mb-3",children:[Object(m.jsx)("label",{children:"Confirm Password"}),Object(m.jsx)("input",{type:"password",value:f,onChange:function(e){return O(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(m.jsx)("button",{type:"submit",onClick:function(e){return function(e){return P.apply(this,arguments)}(e)},className:"btn btn-primary",children:"Submit"})]}),Object(m.jsx)(i.b,{to:"/login",children:Object(m.jsx)("div",{className:"mt-1",children:"Already registered? Click here to login!"})}),y.length>0&&Object(m.jsx)("h5",{className:"mt-3 alert alert-success",children:y}),S.length>0&&Object(m.jsx)("h5",{className:"mt-3 alert alert-danger",children:S})]})})})},B=function(e){var t=e.communityName,n=Object(r.useState)(!1),c=Object(o.a)(n,2),a=c[0],s=c[1],i="http://localhost:3001/api/",u=Object(r.useState)(""),d=Object(o.a)(u,2),h=d[0],p=d[1],f=Object(r.useState)(""),O=Object(o.a)(f,2),x=O[0],v=O[1],y=Object(r.useContext)(b).username,g=Object(r.useState)(""),N=Object(o.a)(g,2),w=N[0],S=N[1];function C(){return h.length>5e3?(S("Exceeded content length!"),!1):x.length>150?(S("Exceeded title length!"),!1):(S(""),!0)}function k(){return D.apply(this,arguments)}function D(){return(D=Object(j.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C()){e.next=2;break}return e.abrupt("return");case 2:return n={username:y,content:h,title:x,communityName:t},e.prev=3,e.next=6,fetch(i+"newThread",{body:JSON.stringify(n),headers:{"Content-Type":"application/json"},method:"POST"});case 6:e.sent,s((function(e){return!e})),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function I(){if(0!==w.length)return Object(m.jsx)("h5",{className:"alert alert-danger mt-2",children:w})}return Object(m.jsx)("div",{className:"mb-5",children:a?Object(m.jsxs)("div",{className:"form-group mt-4",children:[Object(m.jsx)("label",{className:"",children:"Title"}),Object(m.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return v(e.target.value)}}),Object(m.jsx)("label",{className:"",children:"Content"}),Object(m.jsx)("textarea",{onChange:function(e){return p(e.target.value)},className:"form-control border border-secondary"}),Object(m.jsx)("button",{onClick:k,className:"btn btn-primary mt-2",children:"Submit"}),I()]}):Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){return s((function(e){return!e}))},children:"Add Thread"})})},A=function(e){var t=e.threadID,n=e.communityName,c=(Object(d.f)(),Object(r.useState)("")),a=Object(o.a)(c,2),s=a[0],u=a[1],b=Object(r.useState)(""),h=Object(o.a)(b,2),p=h[0],f=h[1];return Object(r.useEffect)((function(){var e=!0;return Object(j.a)(l.a.mark((function n(){var r,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:3001/api//getThread/"+t);case 2:return r=n.sent,n.next=5,r.json();case 5:c=n.sent,e&&(u(c.content),f(c.title));case 7:case"end":return n.stop()}}),n)})))(),function(){e=!1}}),[]),Object(m.jsx)(i.b,{to:"/c/".concat(n,"/").concat(t),children:Object(m.jsxs)("div",{className:"border border-primary rounded my-2 p-2",children:[Object(m.jsx)("h4",{children:p}),Object(m.jsx)("p",{style:{wordWrap:"break-word"},children:s.length>500?s.substring(1,500)+"...":s})]})})},z=L()("http://localhost:3001"),H=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(d.h)().communityName,s=Object(r.useState)(""),i=Object(o.a)(s,2),u=i[0],b=i[1];return Object(r.useEffect)((function(){var e=!0;return Object(j.a)(l.a.mark((function t(){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/api/getThreads/"+a);case 2:return n=t.sent,t.next=5,n.json();case 5:if("error"in(r=t.sent)&&b("Sorry! this page doesn't exist."),e){t.next=9;break}return t.abrupt("return");case 9:e&&c(r.threads);case 10:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[a]),Object(r.useEffect)((function(){return z.connect(),z.emit("onCommunity",a),z.on("newThread",(function(e){c((function(t){return t.includes(e._id)?t:[].concat(Object(v.a)(t),[e._id])}))})),z.on("deletedThread",(function(e){c((function(t){return t.filter((function(t){return t!==e}))}))})),function(){z.disconnect()}}),[a,n]),Object(m.jsxs)("div",{className:"container",children:[""===u&&n.map((function(e){return Object(m.jsx)(A,{threadID:e,communityName:a},e)})),function(){if(""!==u)return Object(m.jsx)("h1",{className:"alert alert-danger",children:u})}(),""===u&&Object(m.jsx)(B,{communityName:a})]})},V=(n(100),n(58)),M=n.n(V),Z=(n(101),function(e){var t=e.addCommunity,n="http://localhost:3001/api/",c=Object(r.useState)(!1),a=Object(o.a)(c,2),s=a[0],i=a[1],u=Object(r.useState)(""),d=Object(o.a)(u,2),h=d[0],p=d[1],f=Object(r.useState)(""),O=Object(o.a)(f,2),x=O[0],v=O[1],y=Object(r.useContext)(b).username,g=Object(r.useState)(""),N=Object(o.a)(g,2),w=N[0],S=N[1];function C(){return k.apply(this,arguments)}function k(){return(k=Object(j.a)(l.a.mark((function e(){var r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={admins:[],communityName:x,creatorUsername:y,date:(new Date).getTime().toString(),description:h},e.prev=1,e.next=4,fetch(n+"addCommunity",{body:JSON.stringify(r),headers:{"Content-Type":"application/json"},method:"POST"});case 4:return c=e.sent,e.next=7,c.json();case 7:if("_id"in(a=e.sent)){e.next=13;break}return S("Sorry the community name as already been taken. Please try again!"),console.log("failed"),i((function(e){return!e})),e.abrupt("return");case 13:S(""),t(a),i((function(e){return!e})),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(1);case 20:case"end":return e.stop()}}),e,null,[[1,18]])})))).apply(this,arguments)}function D(){if(0!==w.length)return Object(m.jsx)("h5",{className:"alert alert-danger mt-2",children:w})}return Object(m.jsx)("div",{className:"mb-5",children:s?Object(m.jsx)("div",{className:"form-group mt-4 container-fluid d-flex justify-content-center align-items-center",id:"overlay",children:Object(m.jsxs)("div",{className:"d-flex flex-column bg-secondary justify-content-center w-75 px-5 py-5",style:{minWidth:"350px",maxWidth:"750px"},children:[Object(m.jsx)("h3",{children:"Create a community"}),Object(m.jsx)("label",{className:"text-left mt-2",children:"Community Name"}),Object(m.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return v(e.target.value)}}),Object(m.jsx)("label",{className:"mt-4 text-left",children:"Description"}),Object(m.jsx)("textarea",{className:"form-control",onChange:function(e){return p(e.target.value)},rows:8}),Object(m.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[Object(m.jsx)("button",{onClick:function(){return i((function(e){return!e}))},className:"btn btn-primary mt-2 mr-2",children:"Cancel"}),Object(m.jsx)("button",{onClick:C,className:"btn btn-outline-primary mt-2",children:"Submit"})]})]})}):Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){return i((function(e){return!e}))},children:"Add New Community"}),D()]})})}),q=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(o.a)(a,2),u=s[0],d=s[1],b=Object(r.useState)(""),h=Object(o.a)(b,2),p=h[0],f=h[1],O=Object(r.useState)([]),x=Object(o.a)(O,2),y=x[0],g=x[1];function N(e){if(d(e),""===e)return g(n.map((function(e){return e.communityName}))),void f("");var t=M.a.filter(e,n,{extract:function(e){return e.communityName}});g(t.map((function(e){return e.string}))),0===t.length?f("No matching communities could be found!"):f("")}return Object(r.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:3001/api/","/getCommunities"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),g(n.map((function(e){return e.communityName})));case 8:case"end":return e.stop()}}),e)})))(),N("")}),[]),Object(m.jsxs)("div",{className:"container mt-5 text-center",children:[Object(m.jsx)("h1",{children:"this is main page"}),Object(m.jsx)("p",{children:"Search for a community or click on one to visit it"}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"text",className:"w-75",onChange:function(e){return N(e.target.value)},value:u})}),Object(m.jsx)("div",{className:"row d-flex mt-4 flex-row text-left mx-5",children:y.map((function(e){return Object(m.jsx)(i.b,{to:"/c/"+e,children:Object(m.jsx)("div",{className:"mx-2 ",children:Object(m.jsx)("h4",{children:e})})},e)}))}),function(){if(""!==p)return Object(m.jsx)("h3",{className:"alert alert-danger",children:p})}(),Object(m.jsx)(Z,{addCommunity:function(e){var t={_id:e._id,communityName:e.communityName,description:e.description};f(""),d(""),c((function(e){return[].concat(Object(v.a)(e),[t])})),g([].concat(Object(v.a)(n.map((function(e){return e.communityName}))),[t.communityName]))}})]})},G=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({_id:"",admins:[],description:"",date:"",communityName:"",creatorUsername:""}),s=Object(o.a)(a,2),u=s[0],b=s[1],h=Object(d.h)();return Object(r.useEffect)((function(){var e=!0;return Object(j.a)(l.a.mark((function t(){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/api/getCommunity/"+h.communityName);case 2:return n=t.sent,t.next=5,n.json();case 5:if(!("error"in(r=t.sent))){t.next=9;break}return c("Error."),t.abrupt("return");case 9:e&&b(r);case 10:case"end":return t.stop()}}),t)})))(),e&&c(h.communityName),function(){e=!1}}),[h.communityName]),Object(m.jsx)("div",{className:"container-fluid bg-info mb-3",children:Object(m.jsx)("div",{className:"container py-3",children:Object(m.jsxs)(i.b,{to:"/c/".concat(n),children:[Object(m.jsx)("h3",{children:n}),Object(m.jsx)("h6",{children:u.description})]})})})};var K=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(o.a)(a,2),u=s[0],l=s[1],j=Object(r.useState)(null),h=Object(o.a)(j,2),p=h[0],v=h[1];return Object(m.jsx)(i.a,{basename:"/",children:Object(m.jsxs)(b.Provider,{value:{username:n,setUsername:c},children:[Object(m.jsx)(f,{}),Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{path:"/register",children:Object(m.jsx)(_,{})}),Object(m.jsx)(d.a,{path:"/login",children:Object(m.jsx)(x,{})}),Object(m.jsx)(d.a,{path:"/c/:communityName/:id",children:Object(m.jsxs)(T.Provider,{value:{voteReload:[u,l],deleteReload:[p,v]},children:[Object(m.jsx)(G,{}),Object(m.jsx)(W,{})]})}),Object(m.jsxs)(d.a,{path:"/c/:communityName",children:[Object(m.jsx)(G,{}),Object(m.jsx)(H,{})]}),Object(m.jsx)(d.a,{path:"/home",children:Object(m.jsx)(q,{})}),Object(m.jsx)(d.a,{path:"/",children:Object(m.jsx)(x,{})})]}),Object(m.jsx)(O,{})]})})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(K,{})}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.6acf2a2d.chunk.js.map