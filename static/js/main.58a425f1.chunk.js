(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var s,c=n(4),o=n.n(c),i=n(3),r=n(1),u=(n(9),n(10),n(0)),a=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.ALPHABET="ALPHABET",t.LENGTH="LENGTH"}(s||(s={}));var l=function(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)(!1),l=Object(i.a)(o,2),b=l[0],h=l[1],j=function(){var t=[].concat(a);return t.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),b&&t.reverse(),t}();return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:n===s.ALPHABET?"button is-info":"button is-info is-light",onClick:function(){return c(s.ALPHABET)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:n===s.LENGTH?"button is-success":"button is-success is-light",onClick:function(){return c(s.LENGTH)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:b?"button is-warning":"button is-warning is-light",onClick:function(){return h(!b)},children:"Reverse"}),(b||n)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),h(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:Object(u.jsx)("ul",{children:j.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.58a425f1.chunk.js.map