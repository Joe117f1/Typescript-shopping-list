(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],[,,,function(e,t,n){e.exports={header:"MainNavigation_header__lFhZ5",logo:"MainNavigation_logo__20N_7",active:"MainNavigation_active__2eTcX"}},,,function(e,t,n){e.exports={form:"NewItem_form__ZA3vG"}},function(e,t,n){e.exports={item:"ListItem_item__1CBNV"}},function(e,t,n){e.exports={items:"Items_items__2Fov5"}},function(e,t,n){e.exports={main:"Layout_main__3IGbl"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(4),c=n.n(i),r=(n(15),n(10)),o=n(1),s=n.n(o),a=n(5),u=function e(t){Object(a.a)(this,e),this.id=void 0,this.text=void 0,this.id=(new Date).toISOString(),this.text=t},m=n(0),l=s.a.createContext({items:[],addItem:function(){},removeItem:function(e){}}),d=function(e){var t=Object(o.useState)([]),n=Object(r.a)(t,2),i=n[0],c=n[1],s={items:i,addItem:function(e){var t=new u(e);c((function(e){return e.concat(t)}))},removeItem:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}};return Object(m.jsx)(l.Provider,{value:s,children:e.children})},j=n(6),x=n.n(j),f=function(){var e=Object(o.useContext)(l),t=Object(o.useRef)(null);return Object(m.jsxs)("form",{className:x.a.form,onSubmit:function(n){n.preventDefault();var i=t.current.value;0!==i.trim().length&&(e.addItem(i),t.current.value="")},children:[Object(m.jsx)("label",{htmlFor:"text",children:"Enter new item or click on listed item to remove it"}),Object(m.jsx)("input",{type:"text",id:"text",ref:t}),Object(m.jsx)("button",{children:"Add Item"})]})},b=n(7),h=n.n(b),v=function(e){return Object(m.jsx)("li",{className:h.a.item,onClick:e.onRemoveItem,children:e.text})},O=n(8),_=n.n(O),I=function(){var e=Object(o.useContext)(l);return Object(m.jsx)("ul",{className:_.a.items,children:e.items.map((function(t){return Object(m.jsx)(v,{text:t.text,onRemoveItem:e.removeItem.bind(null,t.id)},t.id)}))})},p=n(3),N=n.n(p),g=function(){return Object(m.jsx)("header",{className:N.a.header,children:Object(m.jsx)("div",{className:N.a.logo,children:"Grocery List"})})},w=n(9),C=n.n(w),k=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{}),Object(m.jsx)("main",{className:C.a.main,children:e.children})]})},y=function(){return Object(m.jsx)(d,{children:Object(m.jsxs)(k,{children:[Object(m.jsx)(f,{}),Object(m.jsx)(I,{})]})})};c.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.f0117529.chunk.js.map