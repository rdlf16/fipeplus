(this.webpackJsonpfipeplus=this.webpackJsonpfipeplus||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),o=c.n(a),s=c(8),n=c.n(s),i=c(2),r=o.a.createContext({tema:!1,setTema:function(){}}),l=(c(13),c(0));var u=function(){var e="";return e=Object(a.useContext)(r).tema?"fundoAzul":"",Object(l.jsx)("footer",{className:e,children:Object(l.jsx)("div",{className:"container rodape",children:Object(l.jsxs)("h5",{children:["Site desenvolvidor por Rodolfo",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/rodolfo-carvalho-sant-ana-6064211a2/",className:"link",children:Object(l.jsx)("i",{className:"fab fa-linkedin icone"})}),Object(l.jsx)("a",{href:"https://github.com/rdlf16",className:"link",children:Object(l.jsx)("i",{className:"fab fa-github icone"})}),"realizando consultas a API desenvolvida por:",Object(l.jsx)("a",{href:"https://deividfortuna.github.io/fipe/",className:"link",children:"Deivid Fortuna"})]})})})};c(15);var j=function(){var e=Object(a.useContext)(r),t="";return t=e.tema?"fundoAzul":"",Object(l.jsx)("header",{className:t,children:Object(l.jsxs)("div",{className:"container cabecalho",children:[Object(l.jsx)("h1",{children:"Fipe Plus"}),Object(l.jsxs)("div",{className:"div-liga--desliga",children:[Object(l.jsx)("h6",{children:"Escuro"}),Object(l.jsx)("input",{type:"checkbox",className:"checkbox",id:"tema",onChange:function(t){e.tema=t.target.checked,localStorage.setItem("tema",JSON.stringify(e.tema)),e.setTema(t.target.checked)},checked:e.tema}),Object(l.jsx)("label",{htmlFor:"tema",className:"botao__liga-desliga"}),Object(l.jsx)("h6",{children:"Claro"})]})]})})},d=c(7),f=o.a.createContext({funcao:function(){}});c(16);var m=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],o=t[1],s=Object(a.useState)(["",""]),n=Object(i.a)(s,2),u=n[0],j=n[1],m=Object(a.useContext)(f),O=Object(a.useContext)(r);m.funcao=function(e){!function(e){var t=!1;return c.forEach((function(c){JSON.stringify(c)===JSON.stringify(e)&&(t=!0)})),t}(e)?function(e){var t=c;t.push(e),localStorage.setItem("favoritos",JSON.stringify(t)),o(Object(d.a)(t))}(e):function(e){var t=c;t.forEach((function(c,a){JSON.stringify(c)===JSON.stringify(e)&&t.splice(a,1)})),localStorage.setItem("favoritos",JSON.stringify(t)),o(Object(d.a)(t))}(e)};var b="",v="",h="",g="";function x(e){var t=e.target;!function(e,t){(function(e,t){var c=u[0],a=u[1],o=!1;""===c&&JSON.stringify(a)!==JSON.stringify(e)?(c=e,o=!0,N(t)):""===a&&JSON.stringify(c)!==JSON.stringify(e)&&(a=e,o=!0,N(t));return localStorage.setItem("listaComparacao",JSON.stringify([c,a])),j([c,a]),o})(e,t)||function(e,t){var c=u[0],a=u[1];JSON.stringify(c)===JSON.stringify(e)&&(c="",p(t));JSON.stringify(a)===JSON.stringify(e)&&(a="",p(t));localStorage.setItem("listaComparacao",JSON.stringify([c,a])),j([c,a])}(e,t)}({codigo:t.getAttribute("data-codigo"),ano:t.getAttribute("data-anomodelo")},t)}function N(e){e.classList.add("active")}function p(e){e.classList.remove("active")}return O.tema?(b="favoritos-titulo-lista letraEscura",v="favoritos-btn comparar sombraBtn",h="favoritos-btn limparFavoritos sombraBtn",g="favoritos-item sombraEscura"):(b="favoritos-titulo-lista",v="favoritos-btn comparar",h="favoritos-btn limparFavoritos",g="favoritos-item"),function(){var e=JSON.parse(localStorage.getItem("favoritos"))||[];JSON.stringify(e)!==JSON.stringify(c)&&o(e)}(),function(){var e=JSON.parse(localStorage.getItem("listaComparacao"))||["",""];JSON.stringify(e)!==JSON.stringify(u)&&j(e)}(),Object(a.useEffect)((function(){document.querySelectorAll("[data-codigo]").forEach((function(e){var t={codigo:e.getAttribute("data-codigo"),ano:e.getAttribute("data-anomodelo")};u.forEach((function(c){JSON.stringify(c)===JSON.stringify(t)&&e.classList.add("active")}))}))}),[u]),Object(l.jsx)("div",{className:"container conteudo",children:Object(l.jsxs)("div",{className:"favoritos",children:[Object(l.jsx)("h2",{className:b,children:"Lista de Favoritos"}),Object(l.jsx)("div",{className:"favoritos-div",children:Object(l.jsx)("ul",{className:"favoritos-lista","data-listafavoritos":!0,children:c.map((function(e,t){return Object(l.jsxs)("li",{name:"itemfavorito",className:g,"data-codigo":e.CodigoFipe,"data-anomodelo":e.AnoModelo,onClick:x,children:[e.Modelo," - ",e.AnoModelo]},t)}))})}),Object(l.jsxs)("div",{className:"favoritos-botoes",children:[Object(l.jsx)("button",{className:v,children:"Comparar"}),Object(l.jsx)("button",{className:h,children:"Limpar Favoritos"})]})]})})},O=c(3);c(17);var b=function(e){var t=e.change,c=Object(a.useContext)(r),o="";return o=c.tema?"veiculos-select letraEscura":"veiculos-select",Object(l.jsx)("div",{className:"veiculos-dropdown",children:Object(l.jsxs)("select",{className:o,name:"tipoVeiculo",id:"tipo",onChange:t,children:[Object(l.jsx)("option",{className:"veiculos-item",value:"",children:"Selecione o tipo de veiculo"}),[{caminhao:"caminhoes"},{carro:"carros"},{moto:"motos"}].map((function(e,t){return Object(l.jsx)("option",{className:"veiculos-item",value:Object.values(e),children:Object.keys(e)},t)}))]})})},v="https://parallelum.com.br/fipe/api/v1/";c(18);var h=function(e){var t=e.change,c=e.info,o=Object(a.useState)([]),s=Object(i.a)(o,2),n=s[0],u=s[1],j=Object(a.useContext)(r),d="";return d=j.tema?"veiculos-select letraEscura":"veiculos-select",Object(a.useEffect)((function(){var e,t;e=c.tipo,t=function(e){JSON.stringify(n)!==JSON.stringify(e)&&u(e)},fetch(v+e+"/marcas").then((function(e){return e.json()})).then((function(e){t(e)}))}),[c,n]),Object(l.jsx)("div",{className:"veiculos-dropdown",children:Object(l.jsxs)("select",{className:d,name:"marcaVeiculo",id:"marca",onChange:t,children:[Object(l.jsx)("option",{className:"veiculos-item",value:"",children:"Selecione a marca do veiculo"}),n.map((function(e,t){return Object(l.jsx)("option",{className:"veiculos-item",value:e.codigo,children:e.nome},t)}))]})})};c(19);var g=function(e){var t=e.change,c=e.info,o=Object(a.useState)([]),s=Object(i.a)(o,2),n=s[0],u=s[1],j=Object(a.useContext)(r),d="";return d=j.tema?"veiculos-select letraEscura":"veiculos-select",Object(a.useEffect)((function(){var e,t,a;e=c.tipo,t=c.marca,a=function(e){JSON.stringify(n)!==JSON.stringify(e.modelos)&&u(e.modelos)},fetch(v+e+"/marcas/"+t+"/modelos").then((function(e){return e.json()})).then((function(e){a(e)}))}),[c,n]),Object(l.jsx)("div",{className:"veiculos-dropdown",children:Object(l.jsxs)("select",{className:d,name:"modeloVeiculo",id:"modelo",onChange:t,children:[Object(l.jsx)("option",{className:"veiculos-item",value:"",children:"Selecione o modelo do veiculo"}),n.map((function(e,t){return Object(l.jsx)("option",{className:"veiculos-item",value:e.codigo,children:e.nome},t)}))]})})};c(20);var x=function(e){var t=e.change,c=e.info,o=Object(a.useState)([]),s=Object(i.a)(o,2),n=s[0],u=s[1],j=Object(a.useContext)(r),d="";return d=j.tema?"veiculos-select letraEscura":"veiculos-select",Object(a.useEffect)((function(){var e,t,a,o;e=c.tipo,t=c.marca,a=c.modelo,o=function(e){JSON.stringify(n)!==JSON.stringify(e)&&u(e)},fetch(v+e+"/marcas/"+t+"/modelos/"+a+"/anos").then((function(e){return e.json()})).then((function(e){o(e)}))}),[c,n]),Object(l.jsx)("div",{className:"veiculos-dropdown",children:Object(l.jsxs)("select",{className:d,name:"anoVeiculo",id:"ano",onChange:t,children:[Object(l.jsx)("option",{className:"veiculos-item",value:"",children:"Selecione o ano do veiculo"}),n.map((function(e,t){return Object(l.jsx)("option",{className:"veiculos-item",value:e.codigo,children:e.nome},t)}))]})})};c(21);var N=function(e){var t=e.info,c=e.change,o=Object(a.useState)(""),s=Object(i.a)(o,2),n=s[0],u=s[1],j=Object(a.useContext)(r),d="",m=Object(a.useContext)(f);return d=j.tema?"veiculos-preco letraEscura":"veiculos-preco",Object(a.useEffect)((function(){var e,c,a,o,s;e=t.tipo,c=t.marca,a=t.modelo,o=t.ano,s=function(e){JSON.stringify(n)!==JSON.stringify(e)&&u(e)},fetch(v+e+"/marcas/"+c+"/modelos/"+a+"/anos/"+o).then((function(e){return e.json()})).then((function(t){var n={tipo:e,marca:c,modelo:a,ano:o},i=Object(O.a)(Object(O.a)({},t),n);s(i)}))}),[t,n,c,m]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favoritos"))||[],t=document.querySelector(".fas");t.classList.remove("active"),e.forEach((function(e){JSON.stringify(e)===JSON.stringify(n)&&t.classList.add("active")}))}),[n]),Object(l.jsxs)("div",{className:d,children:[Object(l.jsxs)("h4",{children:["Modelo: ",n.Modelo]}),Object(l.jsxs)("h4",{children:["Marca: ",n.Marca]}),Object(l.jsxs)("h4",{children:["Ano: ",n.AnoModelo]}),Object(l.jsxs)("h4",{children:["Combustivel: ",n.Combustivel]}),Object(l.jsxs)("h4",{children:["C\xf3digo Fipe: ",n.CodigoFipe]}),Object(l.jsxs)("h4",{children:["Pre\xe7o M\xe9dio: ",n.Valor]}),Object(l.jsx)("button",{onClick:function(){m.funcao(n),document.querySelector(".fas").classList.toggle("active")},className:"veiculos-button--addLista",children:Object(l.jsx)("i",{className:"fas fa-star"})})]})};c(22);var p=function(){var e=Object(a.useState)({tipo:"",marca:"",modelo:"",ano:""}),t=Object(i.a)(e,2),c=t[0],o=t[1];function s(e){var t=c;t.tipo=e.target.value,t.modelo="",t.ano="",t.marca="",o(Object(O.a)({},t))}function n(e){var t=c;t.marca=e.target.value,t.modelo="",t.ano="",o(Object(O.a)({},t))}function r(e){var t=c;t.modelo=e.target.value,t.ano="",o(Object(O.a)({},t))}function u(e){var t=c;c.ano=e.target.value,o(Object(O.a)({},t))}return""===c.tipo?Object(l.jsx)("div",{className:"veiculos",children:Object(l.jsx)("section",{className:"veiculos-secao",children:Object(l.jsx)(b,{change:s})})}):""===c.marca?Object(l.jsx)("div",{className:"veiculos",children:Object(l.jsxs)("section",{className:"veiculos-secao",children:[Object(l.jsx)(b,{change:s}),Object(l.jsx)(h,{change:n,info:c})]})}):""===c.modelo?Object(l.jsx)("div",{className:"veiculos",children:Object(l.jsxs)("section",{className:"veiculos-secao",children:[Object(l.jsx)(b,{change:s}),Object(l.jsx)(h,{change:n,info:c}),Object(l.jsx)(g,{change:r,info:c})]})}):""===c.ano?Object(l.jsx)("div",{className:"veiculos",children:Object(l.jsxs)("section",{className:"veiculos-secao",children:[Object(l.jsx)(b,{change:s}),Object(l.jsx)(h,{change:n,info:c}),Object(l.jsx)(g,{change:r,info:c}),Object(l.jsx)(x,{change:u,info:c})]})}):Object(l.jsx)("div",{className:"veiculos",children:Object(l.jsxs)("section",{className:"veiculos-secao",children:[Object(l.jsx)(b,{change:s}),Object(l.jsx)(h,{change:n,info:c}),Object(l.jsx)(g,{change:r,info:c}),Object(l.jsx)(x,{change:u,info:c}),Object(l.jsx)(N,{info:c})]})})};c(23);var S=function(){return Object(l.jsx)("main",{children:Object(l.jsx)("div",{className:"container conteudo",children:Object(l.jsxs)(f.Provider,{value:{funcao:function(e){}},children:[Object(l.jsx)(m,{}),Object(l.jsx)(p,{})]})})})};c(24);var y=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],o=t[1],s=Object(a.useContext)(r),n="";return function(){var e=JSON.parse(localStorage.getItem("tema"))||!1;e!==c&&(s.tema=e,o(e))}(),n=c?"fundoBranco":"",Object(l.jsx)("div",{className:n,children:Object(l.jsxs)(r.Provider,{value:{tema:c,setTema:function(e){o(e)}},children:[Object(l.jsx)(j,{}),Object(l.jsx)(S,{}),Object(l.jsx)(u,{})]})})};n.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.76d314b7.chunk.js.map