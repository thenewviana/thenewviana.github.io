(this["webpackJsonpviana-frontend"]=this["webpackJsonpviana-frontend"]||[]).push([[4],{203:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t(9),c=t(1),r=t.n(c),o=t(5),i=t(4),d=[{routeProps:{path:"/dashboard",name:"Dashboard",component:r.a.lazy((function(){return Promise.all([t.e(3),t.e(5)]).then(t.bind(null,205))})),_tag:"CSidebarNavItem",icon:"cil-speedometer",badge:{color:"info",text:"BARU"}}},{routeProps:{path:"/user",name:"Pengguna",_tag:"CSidebarNavDropdown",icon:"cil-user",_children:[{path:"/user/list",component:r.a.lazy((function(){return t.e(7).then(t.bind(null,202))})),name:"Daftar Pengguna",_tag:"CSidebarNavItem"},{path:"/user/role",component:r.a.lazy((function(){return t.e(8).then(t.bind(null,204))})),name:"Jabatan",_tag:"CSidebarNavItem"}]}},{routeProps:{path:"/station",name:"Stasiun",_tag:"CSidebarNavDropdown",icon:"cil-bank",_children:[{path:"/station/list",component:r.a.lazy((function(){return t.e(6).then(t.bind(null,207))})),name:"Daftar Stasiun",_tag:"CSidebarNavItem"}]}}],l=Object(n.jsx)("div",{className:"pt-3 text-center",children:Object(n.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),j=function(e){var a=[];return d.forEach((function(e){e.routeProps._children&&e.routeProps._children.length>0&&e.routeProps._children.forEach((function(e){a.push({path:e.path,name:e.name,component:e.component})})),a.push({path:e.routeProps.path,name:e.routeProps.name,component:e.routeProps.component})})),Object(n.jsx)("main",{className:"c-main",children:Object(n.jsx)(i.m,{fluid:!0,children:Object(n.jsx)(c.Suspense,{fallback:l,children:Object(n.jsxs)(o.d,{children:[a.map((function(a,t){return a.component&&Object(n.jsx)(o.b,{path:a.path,name:a.name,render:function(t){return Object(n.jsx)(i.s,{children:Object(n.jsx)(a.component,Object(s.a)(Object(s.a)({},t),{},{auth:e.auth,loading:e.loading,modal:e.modal}))})}},t)})),Object(n.jsx)(o.a,{from:"/",to:"/dashboard"})]})})})})},b=r.a.memo(j),m=t(35),h=function(e){var a=e.auth,t=Object(m.b)(),s=Object(m.c)((function(e){return e.sidebarShow}));return Object(n.jsxs)(i.w,{withSubheader:!0,children:[Object(n.jsx)(i.Z,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var e=!![!1,"responsive"].includes(s)||"responsive";t({type:"set",sidebarShow:e})}}),Object(n.jsx)(i.Z,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var e=![!0,"responsive"].includes(s)&&"responsive";t({type:"set",sidebarShow:e})}}),Object(n.jsx)(i.x,{className:"mx-auto d-lg-none",to:"/",children:Object(n.jsx)(i.B,{src:"/logo/smartstation-blue-p.svg",alt:"Logo Viana",height:48})}),Object(n.jsxs)(i.y,{className:"d-md-down-none mr-auto",children:[Object(n.jsx)(i.z,{className:"px-3",children:Object(n.jsx)(i.A,{to:"/",children:"Dokumentasi"})}),Object(n.jsx)(i.z,{className:"px-3",children:Object(n.jsx)(i.A,{to:"/",children:"Smart Station"})}),Object(n.jsx)(i.z,{className:"px-3",children:Object(n.jsx)(i.A,{to:"/",children:"PT. KAI Indonesia"})})]}),Object(n.jsx)(i.y,{className:"px-3",children:Object(n.jsx)(p,{auth:a})})]})},u=t(7),p=function(e){var a=e.auth;return Object(n.jsxs)(i.o,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(n.jsx)(i.r,{className:"c-header-nav-link",caret:!1,children:Object(n.jsx)("div",{className:"c-avatar",children:Object(n.jsx)(i.B,{src:"/avatars/2.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})}),Object(n.jsxs)(i.q,{className:"pt-0",placement:"bottom-end",children:[Object(n.jsx)(i.p,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(n.jsx)("strong",{children:"Akun"})}),Object(n.jsx)(i.p,{divider:!0}),Object(n.jsxs)(i.p,{onClick:function(){return a.logout()},children:[Object(n.jsx)(u.a,{name:"cil-lock-locked",className:"mfe-2"}),"Keluar"]})]})]})},x=function(){var e=Object(m.b)(),a=Object(m.c)((function(e){return e.sidebarShow})),t=[];return d.forEach((function(e){if(e.routeProps){var a={_tag:e.routeProps._tag,name:e.routeProps.name,icon:e.routeProps.icon,badge:e.routeProps.badge};if("CSidebarNavDropdown"===a._tag){var n=[];e.routeProps._children.forEach((function(e){n.push({_tag:e._tag,name:e.name,to:e.path})})),a.route=e.routeProps.path,a._children=n}else a.to=e.routeProps.path;t.push(a)}})),Object(n.jsxs)(i.Q,{show:a,onShowChange:function(a){return e({type:"set",sidebarShow:a})},children:[Object(n.jsxs)(i.R,{className:"d-md-down-none",to:"/",children:[Object(n.jsx)(i.B,{src:"/logo/smartstation.svg",className:"c-sidebar-brand-full",alt:"Logo Viana",height:35}),Object(n.jsx)(i.B,{src:"/logo/smartstation-mini.svg",className:"c-sidebar-brand-minimized",alt:"Logo Viana",height:35})]}),Object(n.jsx)(i.T,{children:Object(n.jsx)(i.n,{items:t,components:{CSidebarNavDivider:i.U,CSidebarNavDropdown:i.V,CSidebarNavItem:i.W,CSidebarNavTitle:i.X}})}),Object(n.jsx)(i.S,{className:"c-d-md-down-none"})]})},O=r.a.memo(x);a.default=function(e){return Object(n.jsxs)("div",{className:"c-app c-default-layout",children:[Object(n.jsx)(O,{}),Object(n.jsxs)("div",{className:"c-wrapper",children:[Object(n.jsx)(h,Object(s.a)({},e)),Object(n.jsx)("div",{className:"c-body",children:Object(n.jsx)(b,Object(s.a)({},e))})]})]})}}}]);
//# sourceMappingURL=4.6dab8f5a.chunk.js.map