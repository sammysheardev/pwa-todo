(this["webpackJsonppwa-todo"]=this["webpackJsonppwa-todo"]||[]).push([[0],{54:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(10),i=n.n(o),r=(n(54),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))},d=n(67),u=n(71),j=n(4),h=n(17),b=n(33),f=n(15),O=n(11),p=n(26),g=n(66),v=n(70),x=n(2);var m=function(e){return Object(x.jsx)("div",{className:"add-list todo-list",children:Object(x.jsxs)(g.a,{className:"form",children:[Object(x.jsx)("h3",{children:"Add List"}),Object(x.jsx)("label",{className:"label",children:"List Title: "}),Object(x.jsx)("input",{type:"text",onChange:e.onTextChange}),Object(x.jsx)(v.a,{type:"submit",onClick:e.onSubmit,children:"Add List"})]})})};var k=function(e){return Object(x.jsxs)("div",{className:"todo-item add-item",children:[Object(x.jsx)("input",{type:"text",placeholder:"Title...",onChange:e.doTitleChange}),Object(x.jsx)("textarea",{placeholder:"Description...",onChange:e.doDescChange}),Object(x.jsx)("footer",{children:Object(x.jsx)(v.a,{type:"submit",onClick:e.doClick,children:"Save"})})]})};var S=function(e){var t=Object(c.useState)(e.checked),n=Object(O.a)(t,2),a=n[0],o=n[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("checkboxData");e&&o(JSON.parse(e).checked)}),[]),Object(c.useEffect)((function(){localStorage.setItem("checkBoxData",JSON.stringify(a))})),Object(x.jsxs)("div",{className:"todo-item",children:[Object(x.jsx)("h3",{children:e.title}),Object(x.jsx)("p",{children:e.desc}),Object(x.jsxs)("footer",{children:[Object(x.jsx)("span",{children:a?"Finished":"Unfinished"}),Object(x.jsx)("input",{type:"checkbox",checked:a,onClick:function(t){e.changeChecked(t,e.id),o(!a)}})]})]})};var C=function(e){return Object(x.jsxs)("div",{className:"todo-list",children:[e.list.map((function(t){return Object(x.jsx)(S,{id:t.id,title:t.title,desc:t.desc,checked:t.checked,changeChecked:e.functions.list.doCheckboxChange})})),Object(x.jsx)(k,{doClick:e.functions.list.doClick,doTitleChange:e.functions.list.doTitleChange,doDescChange:e.functions.list.doDescChange})]})},w=n(21),T=n(73),L=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{to:e,itemId:e,parentId:c,children:t,leftAddon:n}},y={"/":L("/","Home",Object(x.jsx)(T.a,{})),"/list1":L("/list1","List 1",Object(x.jsx)(w.a,{})),"/add":L("/add","Add List",Object(x.jsx)(w.b,{}))};var N=function(){return Object(c.useEffect)((function(){var e=localStorage.getItem("navTreeData");e&&(y=JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("navTreeData",JSON.stringify(y))})),Object(x.jsx)(x.Fragment,{})};function D(){return Object(x.jsx)("div",{className:"content home-container",children:"PWA todo lists, choose a list to get started."})}var J=function(){var e=Object(c.useState)([{path:"/list1",id:Object(p.a)(),title:"List 1",list:[]}]),t=Object(O.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),i=Object(O.a)(o,2),r=i[0],s=i[1],l=Object(c.useState)(""),d=Object(O.a)(l,2),u=d[0],h=d[1],g=Object(c.useState)(""),v=Object(O.a)(g,2),k=v[0],S=v[1],T=Object(c.useState)(1),N=Object(O.a)(T,2),J=N[0],E=N[1],P=Object(j.f)();Object(c.useEffect)((function(){var e=localStorage.getItem("data");e&&(a(JSON.parse(e).todoLists),s(JSON.parse(e).currentTitle),h(JSON.parse(e).currentDesc),S(JSON.parse(e).currentListTitle),E(JSON.parse(e).currentLastPath))}),[]),Object(c.useEffect)((function(){localStorage.setItem("data",JSON.stringify({todoLists:n,currentTitle:r,currentDesc:u,currentListTitle:k,currentLastPath:J}))}));var A=function(e){s(e.currentTarget.value)},I=function(e){h(e.currentTarget.value)},W=function(e){var t={id:Object(p.a)(),title:r,desc:u,checked:!1};a(n.map((function(e){return e.path===P.pathname?Object(f.a)(Object(f.a)({},e),{},{list:[].concat(Object(b.a)(e.list),[t])}):e})))},F=function(e){S(e.currentTarget.value)},B=function(e){var t,c,o=J+1,i={path:"/list".concat(o),id:Object(p.a)(),title:k,list:[]};a([].concat(Object(b.a)(n),[i])),E(o),c=i.title,y[t=i.path]=L(t,c,Object(x.jsx)(w.a,{})),delete y["/add"],y["/add"]=L("/add","Add List",Object(x.jsx)(w.b,{}))},U=function(e,t){var c=n;c.forEach((function(n){n.list.forEach((function(n){n.id===t&&(n.checked=e.currentTarget.checked,console.log(n.checked))}))})),a(c),console.log(c)};return Object(x.jsx)("div",{className:"app-container",children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/",component:D}),n.map((function(e){return Object(x.jsx)(j.a,{path:e.path,render:function(t){return Object(x.jsx)(C,Object(f.a)(Object(f.a)({},t),{},{path:e.path,id:e.id,title:e.title,list:e.list,functions:{list:{doTitleChange:A,doDescChange:I,doClick:W,doCheckboxChange:U}}}))}})})),Object(x.jsx)(j.a,{path:"/add",render:function(e){return Object(x.jsx)(m,Object(f.a)(Object(f.a)({},e),{},{onSubmit:B,onTextChange:F}))}})]})})};var E=function(){var e=Object(j.f)().pathname;return Object(x.jsxs)(d.a,{id:"non-fixed-app-bar-layout",title:"PWA Todo",navHeaderTitle:"Lists",phoneLayout:"temporary",tabletLayout:"toggleable",landscapeTabletLayout:"toggleable",desktopLayout:"toggleable",appBarProps:{fixed:!1},mainProps:{component:"div",style:{padding:"1rem"}},treeProps:Object(u.a)(y,e,h.b),children:[Object(x.jsx)(J,{}),Object(x.jsx)(N,{})]})},P=n(69);i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(h.a,{children:Object(x.jsx)(P.a,{children:Object(x.jsx)(E,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-todo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pwa-todo","/service-worker.js");r?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(t,e)}))}}(),l()}},[[61,1,2]]]);
//# sourceMappingURL=main.44c672db.chunk.js.map