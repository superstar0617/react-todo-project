(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports={item:"TodoItem_item__1tmqf",checkbox:"TodoItem_checkbox__YnlLf",textInput:"TodoItem_textInput___UHbo"}},24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(19),c=a.n(l),r=(a(29),function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,44)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),l(e),c(e)})}),i=a(17),u=a(11),s=a(8),m=function(){return o.a.createElement("header",{style:{padding:"20px 0",lineHeight:"1.5em"}},o.a.createElement("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"}},"todos"))},d=a(12),p=a(13),f=a(2),h=function(e){var t=Object(n.useState)({title:""}),a=Object(s.a)(t,2),l=a[0],c=a[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),l.title.trim()?(e.addTodoProps(l.title),c({title:""})):alert("Please write item")},className:"form-container"},o.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:l.title,name:"title",onChange:function(e){c(Object(u.a)({},l,Object(d.a)({},e.target.name,e.target.value)))}}),o.a.createElement(f.b.Provider,{value:{color:"darkcyan",style:{fontSize:"20px",color:"darkcyan"},className:"submit-iconn"}},o.a.createElement("button",{className:"input-submit"},o.a.createElement(p.a,null))))},b=a(14),E=a.n(b),g=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],r=e.todo,i=r.completed,u=r.id,m=r.title,d={},f={};return l?d.display="none":f.display="none",Object(n.useEffect)(function(){return function(){console.log("Cleaning up...")}},[]),o.a.createElement("li",{className:E.a.item},o.a.createElement("div",{onDoubleClick:function(){c(!0)},style:d},o.a.createElement("input",{type:"checkbox",className:E.a.checkbox,checked:i,onChange:function(){return e.handleChangeProps(u)}}),o.a.createElement("button",{onClick:function(){return e.deleteTodoProps(u)}},o.a.createElement(p.b,{style:{color:"orangered",fontSize:"16px"}})),o.a.createElement("span",{style:i?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null},m)),o.a.createElement("input",{type:"text",style:f,className:E.a.textInput,value:m,onChange:function(t){e.setUpdate(t.target.value,u)},onKeyDown:function(e){"Enter"===e.key&&c(!1)}}))},y=function(e){return o.a.createElement("ul",null,e.todos.map(function(t){return o.a.createElement(g,{key:t.id,todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate})}))},v=a(45),x=a(1),O=a(7),w=function(){var e=Object(x.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find(function(t){return t.slug===e}),a=t.title,n=t.description;return o.a.createElement("div",{className:"main__content"},o.a.createElement("h1",null,a),o.a.createElement("p",null,n))},j=function(){var e=Object(x.g)(),t=e.url,a=e.path;return o.a.createElement("div",{className:"about__content"},o.a.createElement("ul",{className:"about__list"},o.a.createElement("li",null,o.a.createElement(O.b,{to:"".concat(t,"/about-app")},"About App")),o.a.createElement("li",null,o.a.createElement(O.b,{to:"".concat(t,"/about-author")},"About Author"))),o.a.createElement(x.a,{path:"".concat(a,"/:slug")},o.a.createElement(w,null)))},k=function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Not match for this page"))},N=a(22),S=a(23),C=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1];return o.a.createElement("nav",{className:"navBar"},o.a.createElement("button",{onClick:function(){l(!a)}},a?o.a.createElement(N.a,{style:{color:"#fff",width:"40px",height:"40px"}}):o.a.createElement(S.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})),o.a.createElement("ul",{className:"menuNav ".concat(a?"showMenu":"")},[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(O.c,{to:e.path,activeClassName:"active-link",onClick:function(){l(!1)},exact:!0},e.text))})))},T=function(){var e=Object(n.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)(function(){var e=JSON.stringify(a);localStorage.setItem("todos",e)},[a]),o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null),o.a.createElement(x.c,null,o.a.createElement(x.a,{exact:!0,path:"/"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"inner"},o.a.createElement(m,null),o.a.createElement(h,{addTodoProps:function(e){var t={id:Object(v.a)(),title:e,completed:!1};l([].concat(Object(i.a)(a),[t]))}}),o.a.createElement(y,{todos:a,handleChangeProps:function(e){l(function(t){return t.map(function(t){return t.id===e?Object(u.a)({},t,{completed:!t.completed}):t})})},deleteTodoProps:function(e){l(Object(i.a)(a.filter(function(t){return t.id!==e})))},setUpdate:function(e,t){l(a.map(function(a){return a.id===t&&(a.title=e),a}))}})))),o.a.createElement(x.a,{path:"/about"},o.a.createElement(j,null)),o.a.createElement(x.a,{path:"*"},o.a.createElement(k,null))))};a(40);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O.a,null,o.a.createElement(T,null))),document.getElementById("root")),r()}},[[24,3,2]]]);
//# sourceMappingURL=main.4f5a77e7.chunk.js.map