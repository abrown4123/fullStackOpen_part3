(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(15),u=t.n(r),o=(t(20),t(6)),i=t(3),s=t(0),d=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{style:{display:"inline-block",padding:".5em",margin:0},children:[e.name,": ",e.number]}),Object(s.jsx)("button",{onClick:e.remove,children:"delete"})]})},l=function(e){var n=e.searchName,t=e.handleSearch;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Search"}),Object(s.jsxs)("div",{children:["search: ",Object(s.jsx)("input",{value:n,onChange:t})]})]})},b=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:e.newName,onChange:e.handleNameChange}),"number: ",Object(s.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})]})},j=t(4),h=t.n(j),m="/api/persons",f=function(){return h.a.get(m).then((function(e){return e.data}))},O=function(e){return h.a.post(m,e).then((function(e){return e.data}))},x=function(e,n){return h.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},g=function(e){var n=e.message,t=e.context?"positiveMessage":"negativeMessage";return null===n?null:Object(s.jsx)("div",{className:t,children:n})},p=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),u=Object(i.a)(r,2),j=u[0],h=u[1],m=Object(c.useState)(""),p=Object(i.a)(m,2),w=p[0],N=p[1],S=Object(c.useState)(""),C=Object(i.a)(S,2),k=C[0],y=C[1],M=Object(c.useState)(null),A=Object(i.a)(M,2),E=A[0],F=A[1],I=Object(c.useState)(null),J=Object(i.a)(I,2),L=J[0],T=J[1],B=t.find((function(e){return e.name===j})),D=k?t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())})):t;Object(c.useEffect)((function(){f().then((function(e){a(e)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(g,{message:E,context:L}),Object(s.jsx)(l,{searchName:k,handleSearch:function(e){y(e.target.value)}}),Object(s.jsx)(b,{handleSubmit:function(e){if(e.preventDefault(),B)return function(){if(window.confirm("".concat(B.name," already exists. Would you like to update their number?"))){var e=B.id,n=Object(o.a)(Object(o.a)({},B),{},{number:w});x(e,n).then((function(n){a(t.map((function(t){return t.id!==e?t:n}))),h(""),N("")}))}}();O({name:j,number:w}).then((function(e){a(t.concat(e)),h(""),N(""),T(!0),F("Added ".concat(j)),setTimeout((function(){T(null),F(null)}),5e3)})).catch((function(e){console.log("Number creation failed")}))},newName:j,handleNameChange:function(e){h(e.target.value)},newNumber:w,handleNumberChange:function(e){N(e.target.value)}}),Object(s.jsx)("h2",{children:"Numbers"}),D.map((function(e){return Object(s.jsx)(d,{name:e.name,number:e.number,remove:function(){return function(e){var n=e.name,c=e.id;window.confirm("Are you sure you would like to delete this number?")&&v(c).then((function(e){console.log(e,"has been removed from db"),a(t.filter((function(e){return e.id!==c})))})).catch((function(e){F("Information of ".concat(n," has already been removed from server")),setTimeout((function(){F(null)}),5e3)}))}(e)}},e.id)}))]})};u.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.17bc62fe.chunk.js.map