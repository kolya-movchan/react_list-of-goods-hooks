(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var s=n(4),c=n.n(s),o=n(3),i=n(1),r=(n(9),n(10),n(0)),a=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(i.useState)(!1),l=Object(o.a)(c,2),u=l[0],b=l[1],h=function(){var t=[].concat(a);return t.sort((function(t,e){switch(n){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),u&&t.reverse(),t}();return Object(r.jsxs)("div",{className:"section content",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{type:"button",className:"alphabet"===n?"button is-info":"button is-info is-light",onClick:function(){return s("alphabet")},children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",className:"length"===n?"button is-success":"button is-success is-light",onClick:function(){return s("length")},children:"Sort by length"}),Object(r.jsx)("button",{type:"button",className:u?"button is-warning":"button is-warning is-light",onClick:function(){return b(!u)},children:"Reverse"}),(u||n)&&Object(r.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),b(!1)},children:"Reset"})]}),Object(r.jsx)("ul",{children:Object(r.jsx)("ul",{children:h.map((function(t){return Object(r.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};c.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e79f0a87.chunk.js.map