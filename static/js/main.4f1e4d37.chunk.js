(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{10:function(e,t,a){e.exports={content:"Card_content__2GDzF",container:"Card_container__3ThRd",Card:"Card_Card__2DZ4E",Card__img:"Card_Card__img__1_K0L",Card__types:"Card_Card__types__3z1F_",Card__type:"Card_Card__type__3f42k",Card__name:"Card_Card__name__2Q3sg",btn:"Card_btn__2Fqjg"}},2:function(e,t,a){e.exports={one_crad_container:"OneCardPokemon_one_crad_container__2sIpk",Card_data:"OneCardPokemon_Card_data__2HHyg",Card_img:"OneCardPokemon_Card_img__27SwB",Card_name:"OneCardPokemon_Card_name__2iJq4",Data_type:"OneCardPokemon_Data_type__1I7TO",name_type:"OneCardPokemon_name_type__1iqTI",all_types:"OneCardPokemon_all_types__1qj0m",type:"OneCardPokemon_type__1f5SX",stats_attac:"OneCardPokemon_stats_attac__DGsIg",container_tittle:"OneCardPokemon_container_tittle__37XJr",container_attack:"OneCardPokemon_container_attack__TM65e",stats_defence:"OneCardPokemon_stats_defence__3KTR5",container_defence:"OneCardPokemon_container_defence__Z-DxN"}},23:function(e,t,a){e.exports={form:"App_form__GKYY-"}},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(27),s=a(15),r=a(6),i=a(3),o=a.n(i),l=a(5),d=a(7),j=function(e){var t=e.url;return new Promise((function(e,a){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))}))};function _(e){return u.apply(this,arguments)}function u(){return(u=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"},p=a(10),O=a.n(p),h=a(14),m={pokemons:[]},x=function(e){return e.pokemoPage.pokemons},f=a(2),v=a.n(f),N=a(1),k=function(){var e=Object(h.c)(x),t=Object(n.useRef)(e);Object(n.useEffect)((function(){t.current=e,r(t.current.stats)}),[e]);var a=Object(n.useState)(t.current.stats),c=Object(d.a)(a,2),s=c[0],r=c[1];return Object(N.jsx)("div",{className:v.a.one_crad_container,children:Object(N.jsxs)("div",{className:v.a.Card_data,children:[Object(N.jsx)("div",{className:v.a.Card_img,children:Object(N.jsx)("img",{src:s.sprites.front_default,alt:"",width:"200px",height:"200px"})}),Object(N.jsx)("div",{className:v.a.Card_name,children:Object(N.jsx)("span",{children:s.name})}),Object(N.jsxs)("div",{className:v.a.all_stats,children:[Object(N.jsxs)("div",{className:v.a.Data_type,children:[Object(N.jsx)("span",{className:v.a.name_type,children:"Type"}),Object(N.jsx)("div",{className:v.a.all_types,children:s.types.map((function(e){return Object(N.jsx)("span",{className:v.a.type,children:e.type.name})}))})]}),Object(N.jsxs)("div",{className:v.a.stats_attac,children:[Object(N.jsx)("div",{className:v.a.container_tittle,children:Object(N.jsx)("p",{className:v.a.title,children:"Attack"})}),Object(N.jsx)("div",{className:v.a.container_attack,children:Object(N.jsx)("p",{className:v.a.attack,children:s.stats[1].base_stat})})]}),Object(N.jsxs)("div",{className:v.a.stats_defence,children:[Object(N.jsx)("div",{className:v.a.container_tittle,children:Object(N.jsx)("p",{className:v.a.title,children:"Defence"})}),Object(N.jsx)("div",{className:v.a.container_defence,children:Object(N.jsx)("p",{children:s.stats[2].base_stat})})]}),Object(N.jsxs)("div",{className:v.a.stats_defence,children:[Object(N.jsx)("div",{className:v.a.container_tittle,children:Object(N.jsx)("p",{className:v.a.title,children:"Hp"})}),Object(N.jsx)("div",{className:v.a.container_defence,children:Object(N.jsx)("p",{children:s.stats[0].base_stat})})]}),Object(N.jsxs)("div",{className:v.a.stats_defence,children:[Object(N.jsx)("div",{className:v.a.container_tittle,children:Object(N.jsx)("p",{className:v.a.title,children:"SP Attack"})}),Object(N.jsx)("div",{className:v.a.container_defence,children:Object(N.jsx)("p",{children:s.stats[3].base_stat})})]}),Object(N.jsxs)("div",{className:v.a.stats_defence,children:[Object(N.jsx)("div",{className:v.a.container_tittle,children:Object(N.jsx)("p",{className:v.a.title,children:"SP Defence"})}),Object(N.jsx)("div",{className:v.a.container_defence,children:Object(N.jsx)("p",{children:s.stats[4].base_stat})})]}),Object(N.jsxs)("div",{className:v.a.stats_defence,children:[Object(N.jsx)("div",{className:v.a.container_tittle,children:Object(N.jsx)("p",{className:v.a.title,children:"Speed"})}),Object(N.jsx)("div",{className:v.a.container_defence,children:Object(N.jsx)("p",{children:s.stats[5].base_stat})})]}),Object(N.jsxs)("div",{className:v.a.stats_defence,children:[Object(N.jsx)("div",{className:v.a.container_tittle,children:Object(N.jsx)("p",{className:v.a.title,children:"Weight"})}),Object(N.jsx)("div",{className:v.a.container_defence,children:Object(N.jsx)("p",{children:s.weight})})]}),Object(N.jsxs)("div",{className:v.a.stats_defence,children:[Object(N.jsx)("div",{className:v.a.container_tittle,children:Object(N.jsx)("p",{className:v.a.title,children:"Total moves"})}),Object(N.jsx)("div",{className:v.a.container_defence,children:Object(N.jsx)("p",{children:s.moves.length})})]})]})]})})},g=function(e){var t=e.pokemonData,a=e.LoadMore,c=e.values,s=Object(h.b)(),r=Object(n.useState)(0),i=Object(d.a)(r,2),o=i[0],l=i[1];return Object(N.jsxs)("div",{className:O.a.content,children:[Object(N.jsxs)("div",{className:O.a.container,children:[t.map((function(e,t){return Object(N.jsxs)("div",{className:O.a.Card,onClick:function(){!function(e){s({type:"SEEPOKEMON",stats:e}),l(1)}(e)},children:[Object(N.jsx)("div",{className:O.a.Card__img,children:Object(N.jsx)("img",{src:e.sprites.front_default,alt:"",width:"100px",height:"100px"})}),Object(N.jsx)("div",{className:O.a.Card__name,children:e.name}),Object(N.jsx)("div",{className:O.a.Card__types,children:e.types.map((function(e){return Object(N.jsx)("div",{className:O.a.Card__type,style:{backgroundColor:b[e.type.name]},children:e.type.name})}))})]})})),Object(N.jsx)("div",{className:O.a.btn,children:"noselect"==c?Object(N.jsx)("button",{onClick:a,children:"Load More"}):""})]}),1===o?Object(N.jsx)(k,{}):""]})},C=a(28),y=a(23),P=a.n(y),w=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),u=Object(d.a)(i,2),b=u[0],p=u[1],O=Object(n.useState)(!0),h=Object(d.a)(O,2),m=h[0],x=h[1],f=Object(n.useState)("noselect"),v=Object(d.a)(f,2),k=v[0],y=v[1],w="https://pokeapi.co/api/v2/type/".concat(k),S="https://pokeapi.co/api/v2/pokemon?limit=12";Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("noselect"!=k){e.next=12;break}return x(!0),e.next=4,_(S);case 4:return t=e.sent,p(t.next),c([]),e.next=9,E(t.results);case 9:x(!1),e.next=21;break;case 12:return x(!0),e.next=15,_(w);case 15:return a=e.sent,p(a.next),c([]),e.next=20,E(a.pokemon);case 20:x(!1);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k]);var D=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,_(b);case 3:return t=e.sent,e.next=6,E(t.results);case 6:p(t.next),x(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("noselect"!=k){e.next=7;break}return e.next=3,Promise.all(t.map(function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:a=e.sent,c((function(e){return[].concat(Object(r.a)(e),Object(r.a)(a))})),e.next=11;break;case 7:return e.next=9,Promise.all(t.map(function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t.pokemon);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:n=e.sent,c((function(e){return[].concat(Object(r.a)(e),Object(r.a)(n))}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=Object(C.a)(),T=F.register,I=F.handleSubmit;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("form",{onSubmit:I((function(e){return y(e.selectPokemon)})),className:P.a.form,children:[Object(N.jsxs)("select",Object(s.a)(Object(s.a)({className:P.a.custom_select},T("selectPokemon")),{},{children:[Object(N.jsx)("option",{value:"noselect",children:"No select"}),Object(N.jsx)("option",{value:"normal",children:"Normal"}),Object(N.jsx)("option",{value:"fighting",children:"Fighting"}),Object(N.jsx)("option",{value:"flying",children:"Flying"}),Object(N.jsx)("option",{value:"poison",children:"Poison"}),Object(N.jsx)("option",{value:"ground",children:"Ground"}),Object(N.jsx)("option",{value:"rock",children:"Rock"}),Object(N.jsx)("option",{value:"bug",children:"Bug"}),Object(N.jsx)("option",{value:"ghost",children:"Ghost"}),Object(N.jsx)("option",{value:"steel",children:"Steel"}),Object(N.jsx)("option",{value:"fire",children:"Fire"}),Object(N.jsx)("option",{value:"water",children:"Water"}),Object(N.jsx)("option",{value:"grass",children:"Grass"}),Object(N.jsx)("option",{value:"electric",children:"Electric"}),Object(N.jsx)("option",{value:"psychic",children:"Psychic"}),Object(N.jsx)("option",{value:"ice",children:"Ice"}),Object(N.jsx)("option",{value:"dragon",children:"Dragon"}),Object(N.jsx)("option",{value:"dark",children:"Dark"}),Object(N.jsx)("option",{value:"fairy",children:"Fairy"}),Object(N.jsx)("option",{value:"shadow",children:"Shadow"})]})),Object(N.jsx)("button",{type:"submit",children:"Search"})]}),Object(N.jsx)("div",{children:m?Object(N.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{children:Object(N.jsx)(g,{pokemonData:a,LoadMore:D,values:k})})})})]})},S=(a(38),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))}),D=a(18),E=a(26),F=Object(D.b)({pokemoPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEEPOKEMON":var a={stats:t.stats};return Object(s.a)(Object(s.a)({},e),{},{pokemons:a});default:return e}}}),T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.c,I=Object(D.d)(F,T(Object(D.a)(E.a)));window.__store__=I;var L=I,M=a(20);a.n(M).a.render(Object(N.jsx)(c.a,{children:Object(N.jsx)(h.a,{store:L,children:Object(N.jsx)(w,{})})}),document.getElementById("root")),S()}},[[41,1,2]]]);
//# sourceMappingURL=main.4f1e4d37.chunk.js.map