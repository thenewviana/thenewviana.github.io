(this["webpackJsonpviana-frontend"]=this["webpackJsonpviana-frontend"]||[]).push([[5],{191:function(e,s,a){"use strict";a.r(s);var c=a(5),t=a(0),n=a.n(t),r=a(9),o=a(1),i=a(162),l=[{routeProps:{path:"/dashboard",name:"Dashboard",component:n.a.lazy((function(){return Promise.all([a.e(4),a.e(6)]).then(a.bind(null,193))})),_tag:"CSidebarNavItem",icon:"cil-speedometer",badge:{color:"info",text:"BARU"}}},{routeProps:{path:"/users",name:"Pengguna",_tag:"CSidebarNavDropdown",icon:"cil-user",_children:[{path:"/users/list",component:n.a.lazy((function(){return a.e(7).then(a.bind(null,190))})),name:"Daftar Pengguna",_tag:"CSidebarNavItem"}]}}],j=Object(c.jsx)("div",{className:"pt-3 text-center",children:Object(c.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),d=function(){var e=[];return l.forEach((function(s){s.routeProps._children&&s.routeProps._children.length>0&&s.routeProps._children.forEach((function(s){e.push({path:s.path,name:s.name,component:s.component})})),e.push({path:s.routeProps.path,name:s.routeProps.name,component:s.routeProps.component})})),Object(c.jsx)("main",{className:"c-main",children:Object(c.jsx)(i.l,{fluid:!0,children:Object(c.jsx)(t.Suspense,{fallback:j,children:Object(c.jsxs)(o.d,{children:[e.map((function(e,s){return e.component&&Object(c.jsx)(o.b,{path:e.path,name:e.name,render:function(s){return Object(c.jsx)(i.r,{children:Object(c.jsx)(e.component,Object(r.a)({},s))})}},s)})),Object(c.jsx)(o.a,{from:"/",to:"/dashboard"})]})})})})},m=n.a.memo(d),b=a(20),h=function(){var e=Object(b.b)(),s=Object(b.c)((function(e){return e.sidebarShow}));return Object(c.jsxs)(i.t,{withSubheader:!0,children:[Object(c.jsx)(i.K,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var a=!![!1,"responsive"].includes(s)||"responsive";e({type:"set",sidebarShow:a})}}),Object(c.jsx)(i.K,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var a=![!0,"responsive"].includes(s)&&"responsive";e({type:"set",sidebarShow:a})}}),Object(c.jsx)(i.u,{className:"mx-auto d-lg-none",to:"/",children:Object(c.jsx)(i.y,{src:"/logo/smartstation-blue-p.svg",alt:"Logo Viana",height:48})}),Object(c.jsxs)(i.v,{className:"d-md-down-none mr-auto",children:[Object(c.jsx)(i.w,{className:"px-3",children:Object(c.jsx)(i.x,{to:"/",children:"Dokumentasi"})}),Object(c.jsx)(i.w,{className:"px-3",children:Object(c.jsx)(i.x,{to:"/",children:"Smart Station"})}),Object(c.jsx)(i.w,{className:"px-3",children:Object(c.jsx)(i.x,{to:"/",children:"PT. KAI Indonesia"})})]}),Object(c.jsx)(i.v,{className:"px-3",children:Object(c.jsx)(x,{})})]})},u=a(163),x=function(){return Object(c.jsxs)(i.n,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(c.jsx)(i.q,{className:"c-header-nav-link",caret:!1,children:Object(c.jsx)("div",{className:"c-avatar",children:Object(c.jsx)(i.y,{src:"/avatars/1.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})}),Object(c.jsxs)(i.p,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(i.o,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(c.jsx)("strong",{children:"Account"})}),Object(c.jsxs)(i.o,{children:[Object(c.jsx)(u.a,{name:"cil-bell",className:"mfe-2"}),"Updates",Object(c.jsx)(i.a,{color:"info",className:"mfs-auto",children:"42"})]}),Object(c.jsxs)(i.o,{children:[Object(c.jsx)(u.a,{name:"cil-envelope-open",className:"mfe-2"}),"Messages",Object(c.jsx)(i.a,{color:"success",className:"mfs-auto",children:"42"})]}),Object(c.jsxs)(i.o,{children:[Object(c.jsx)(u.a,{name:"cil-task",className:"mfe-2"}),"Tasks",Object(c.jsx)(i.a,{color:"danger",className:"mfs-auto",children:"42"})]}),Object(c.jsxs)(i.o,{children:[Object(c.jsx)(u.a,{name:"cil-comment-square",className:"mfe-2"}),"Comments",Object(c.jsx)(i.a,{color:"warning",className:"mfs-auto",children:"42"})]}),Object(c.jsx)(i.o,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(c.jsx)("strong",{children:"Settings"})}),Object(c.jsxs)(i.o,{children:[Object(c.jsx)(u.a,{name:"cil-user",className:"mfe-2"}),"Profile"]}),Object(c.jsxs)(i.o,{children:[Object(c.jsx)(u.a,{name:"cil-settings",className:"mfe-2"}),"Settings"]}),Object(c.jsxs)(i.o,{children:[Object(c.jsx)(u.a,{name:"cil-credit-card",className:"mfe-2"}),"Payments",Object(c.jsx)(i.a,{color:"secondary",className:"mfs-auto",children:"42"})]}),Object(c.jsxs)(i.o,{children:[Object(c.jsx)(u.a,{name:"cil-file",className:"mfe-2"}),"Projects",Object(c.jsx)(i.a,{color:"primary",className:"mfs-auto",children:"42"})]}),Object(c.jsx)(i.o,{divider:!0}),Object(c.jsxs)(i.o,{children:[Object(c.jsx)(u.a,{name:"cil-lock-locked",className:"mfe-2"}),"Lock Account"]})]})]})},p=function(){var e=Object(b.b)(),s=Object(b.c)((function(e){return e.sidebarShow})),a=[];return l.forEach((function(e){if(e.routeProps){var s={_tag:e.routeProps._tag,name:e.routeProps.name,icon:e.routeProps.icon,badge:e.routeProps.badge};if("CSidebarNavDropdown"===s._tag){var c=[];e.routeProps._children.forEach((function(e){c.push({_tag:e._tag,name:e.name,to:e.path})})),s.route=e.routeProps.path,s._children=c}else s.to=e.routeProps.path;a.push(s)}})),Object(c.jsxs)(i.C,{show:s,onShowChange:function(s){return e({type:"set",sidebarShow:s})},children:[Object(c.jsxs)(i.D,{className:"d-md-down-none",to:"/",children:[Object(c.jsx)(i.y,{src:"/logo/smartstation.svg",className:"c-sidebar-brand-full",alt:"Logo Viana",height:35}),Object(c.jsx)(i.y,{src:"/logo/smartstation-mini.svg",className:"c-sidebar-brand-minimized",alt:"Logo Viana",height:35})]}),Object(c.jsx)(i.F,{children:Object(c.jsx)(i.m,{items:a,components:{CSidebarNavDivider:i.G,CSidebarNavDropdown:i.H,CSidebarNavItem:i.I,CSidebarNavTitle:i.J}})}),Object(c.jsx)(i.E,{className:"c-d-md-down-none"})]})},O=n.a.memo(p);s.default=function(){return Object(c.jsxs)("div",{className:"c-app c-default-layout",children:[Object(c.jsx)(O,{}),Object(c.jsxs)("div",{className:"c-wrapper",children:[Object(c.jsx)(h,{}),Object(c.jsx)("div",{className:"c-body",children:Object(c.jsx)(m,{})})]})]})}}}]);
//# sourceMappingURL=5.1877aebb.chunk.js.map