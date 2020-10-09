(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{152:function(e,t,o){},172:function(e,t,o){},173:function(e,t,o){"use strict";o.r(t);var a,A,i=o(0),n=o.n(i),r=o(34),c=o.n(r),l=o(13),K=o(28),s=o(19),g=o(56),U=o(29),F=Object(U.createActions)({setMovies:["movie"],clearMovies:[]}),m=F.Types,R=(F.Creators,[]),u=Object(U.createReducer)(R,(a={},Object(s.a)(a,m.SET_MOVIES,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return[].concat(Object(g.a)(e),Object(g.a)(t.payload))})),Object(s.a)(a,m.CLEAR_MOVIES,(function(){return R})),a)),p=o(18),d=Object(U.createActions)({language:["language"],loading:["status"],search:["search"],setPage:["page"]}),f=d.Types,b=(d.Creators,{language:"en-US",loading:!1,search:!1,page:1}),x=Object(U.createReducer)(b,(A={},Object(s.a)(A,f.LOADING,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return Object(p.a)(Object(p.a)({},e),{},{loading:t.payload})})),Object(s.a)(A,f.LANGUAGE,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return Object(p.a)(Object(p.a)({},e),{},{language:t.payload})})),Object(s.a)(A,f.SEARCH,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return Object(p.a)(Object(p.a)({},e),{},{search:t.payload})})),Object(s.a)(A,f.SET_PAGE,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return Object(p.a)(Object(p.a)({},e),{},{page:t.payload})})),A)),v=Object(K.b)({basicState:x,movies:u}),E=Object(K.c)(v),C=(o(152),o(35)),h=o(6),y=o(17),B=o.n(y),j=o(24),w=o(21),Q=o(22),O=Object(Q.a)("div",{target:"ewaum0n0"})("width:100%;padding:0 0px;margin-right:auto;margin-left:auto;text-align:",(function(e){return e.textAlign||"center"}),";max-width:",(function(e){return e.fluid?"100% !important":""}),";@media (min-width:576px){max-width:540px;}@media (min-width:768px){max-width:720px;padding:0 15px;}@media (min-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}"),N=o(78),I=o.n(N),S=o(79),k=o.n(S);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var o,a,A=function(e,t){if(null==e)return{};var o,a,A={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(A[o]=e[o]);return A}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(A[o]=e[o])}return A}var J=n.a.createElement("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}),M=function(e){var t=e.svgRef,o=e.title,a=P(e,["svgRef","title"]);return n.a.createElement("svg",D({viewBox:"0 0 20 20",ref:t},a),o?n.a.createElement("title",null,o):null,J)},L=n.a.forwardRef((function(e,t){return n.a.createElement(M,D({svgRef:t},e))})),H=(o.p,function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e})).basicState,o=Object(h.g)(),a=Object(i.useState)(""),A=Object(w.a)(a,2),r=A[0],c=A[1],K=function(o){o!==t.language&&(e({type:"LANGUAGE",payload:o}),e({type:"LOADING",payload:!0}),e({type:"CLEAR_MOVIES"}),e({type:"SET_PAGE",payload:1}))},s=function(){var t=Object(j.a)(B.a.mark((function t(a){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),r&&(e({type:"SEARCH",payload:r}),a.target.reset(),o.push("/"),c(""),e({type:"LOADING",payload:!0}),e({type:"CLEAR_MOVIES"}),e({type:"SET_PAGE",payload:1}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return n.a.createElement("header",{className:"flex fixed items-center h-16 w-full top-0 bg-secondary z-10"},n.a.createElement(O,{className:"flex items-center"},n.a.createElement("div",{className:"ml-3 sm:ml-0 bg-tertiary rounded-sm py-1 px-2 cursor-pointer",onClick:function(){return o.push("/"),c(""),void(t.search&&(e({type:"CLEAR_MOVIES"}),e({type:"SET_PAGE",payload:1}),e({type:"SEARCH",payload:!1})))}},n.a.createElement("span",{className:"text-xl lg:text-2xl font-extrabold"},"TMDB")),n.a.createElement("form",{className:"relative flex-grow mx-2 sm:mx-5",onSubmit:function(e){return s(e)}},n.a.createElement("input",{className:"py-1 pl-3 block w-full appearance-none leading-normal border-2 border-transparent rounded-lg focus:outline-none focus:border-tertiary text-left select-none truncate bg-white shadow-md",placeholder:"Search",onChange:function(e){var t=e.target;return c(t.value)}}),n.a.createElement("button",{className:"cursor-pointer absolute inset-y-0 right-0 pr-4 flex items-center",type:"submit"},n.a.createElement(L,{className:"text-gray-600 fill-current w-4 h-4"}))),n.a.createElement("div",{className:"flex"},n.a.createElement("img",{className:"mx-1 cursor-pointer rounded-sm",src:I.a,width:"35rem",alt:"brazil-flag",onClick:function(){return K("pt-BR")}}),n.a.createElement("img",{className:"mx-1 cursor-pointer rounded-sm mr-10 sm:mr-0",src:k.a,width:"35rem",alt:"eua-flag",onClick:function(){return K("en-US")}}))))}),X=o(80),V=o.n(X),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(p.a)({"Content-Type":"application/json"},e);return V.a.create({baseURL:"https://api.themoviedb.org/3",maxRedirects:0,headers:t})},G=function(e,t){return W().get("/movie/upcoming?api_key=".concat("75d7c6227d63c07e0387a99ba23fb4a6","&language=").concat(t,"&page=").concat(e))},Z=function(e,t){return W().get("/movie/".concat(e,"?api_key=").concat("75d7c6227d63c07e0387a99ba23fb4a6","&language=").concat(t))},z=function(e,t){return W().get("/movie/".concat(e,"/credits?api_key=").concat("75d7c6227d63c07e0387a99ba23fb4a6","&language=").concat(t))},T=function(e,t,o){return W().get("/search/movie?api_key=".concat("75d7c6227d63c07e0387a99ba23fb4a6","&language=").concat(o,"&query=").concat(e,"&page=").concat(t))},q=o(176),Y=o(81);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var o,a,A=function(e,t){if(null==e)return{};var o,a,A={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(A[o]=e[o]);return A}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(A[o]=e[o])}return A}var ee=function(e){var t=e.svgRef,o=e.title,a=$(e,["svgRef","title"]);return n.a.createElement("svg",_({x:"0px",y:"0px",viewBox:"0 0 426.667 426.667",style:{enableBackground:"new 0 0 426.667 426.667"},xmlSpace:"preserve",ref:t},a),o?n.a.createElement("title",null,o):null,n.a.createElement("polygon",{style:{fill:"#FAC917"},points:"213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91  81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "}))},te=n.a.forwardRef((function(e,t){return n.a.createElement(ee,_({svgRef:t},e))}));o.p;function oe(e){return Number(e)||0===e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."):""}function ae(e,t){return new Date(e).toLocaleDateString(t,{dateStyle:"long"})}var Ae=o(83),ie=o(84),ne=o.n(ie),re=function(e){var t=e.src,o=e.alt,a=e.size,A=e.className;return n.a.createElement(Ae.LazyLoadImage,{className:A,src:null==t?ne.a:"".concat("http://image.tmdb.org/t/p","/").concat(a,"/").concat(t),alt:o})};var ce=Object(Q.a)("div",{target:"e51szn80"})({name:"d8its8",styles:'max-width:300px;figure{position:relative;&:hover{border-color:"color-secondary";figcaption{cursor:pointer;opacity:1;}}}figcaption{top:0;width:100%;height:100%;background:rgba(0,0,0,0.7);position:absolute;opacity:0;transition:all 250ms ease-in-out;}'}),le=function(e){var t=e.id,o=e.title,a=e.release_date,A=e.vote_average,i=e.vote_count,r=e.poster_path,c=e.language,l=Object(h.g)(),K=function(){l.push("/movie/".concat(t))};return n.a.createElement(ce,{className:"m-4"},n.a.createElement("figure",{className:"border-solid border-2 border-white rounded-sm hover:border-tertiary",onClick:function(){return K()}},n.a.createElement(re,{src:r,alt:o,size:"w342"}),n.a.createElement("figcaption",{className:"flex flex-col items-center justify-center"},n.a.createElement("div",{className:"flex flex-col items-center"},n.a.createElement(te,{width:"2.5rem"}),n.a.createElement("p",{className:"flex flex-col text-gray-400 pt-2"},n.a.createElement("span",{className:"text-3xl"},A),n.a.createElement("span",{className:"text-xl text-gray-600 "},oe(i)))))),n.a.createElement("div",{className:"flex flex-col text-left py-1 px-2"},n.a.createElement("span",{className:"text-white text-2xl cursor-pointer",onClick:function(){return K()}},o),n.a.createElement("span",{className:"text-gray-400 text-sm opacity-25"},ae(a,c))))},Ke=function(e){var t=e.movies,o=e.isLoadingMore,a=e.language,A=e.loadingMore;return n.a.createElement(Y.a,{onBottom:function(){return A()},offset:"30",debounce:"5000"},n.a.createElement(O,{className:"flex flex-wrap justify-center bg-primary mt-16"},!t.length&&n.a.createElement("div",{className:"w-full mt-5"},n.a.createElement("span",{className:"text-gray-400 text-2xl"},n.a.createElement(q.a,{id:"noResults"}))),t.map((function(e,t){return n.a.createElement(le,{id:e.id,title:e.title,release_date:e.release_date,vote_average:e.vote_average,vote_count:e.vote_count,poster_path:e.poster_path,key:t,language:a})})),o&&n.a.createElement("div",{className:"w-full mt-5 mb-8"},n.a.createElement("span",{className:"text-gray-400 text-xl"},n.a.createElement(q.a,{id:"loading"}),"..."))))},se=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e})),o=t.movies,a=t.basicState,A=Object(i.useState)(1),r=Object(w.a)(A,2),c=r[0],K=r[1],s=Object(i.useState)(!1),g=Object(w.a)(s,2),U=g[0],F=g[1],m=function(){var e=Object(j.a)(B.a.mark((function e(t,o,a){var A,i;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"LOADING",payload:!0}),e.prev=1,F(!0),e.next=5,G(t,o);case 5:A=e.sent,i=A.data,K(i.total_pages),a({type:"SET_MOVIES",payload:i.results}),F(!1),a({type:"LOADING",payload:!1}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,o,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(B.a.mark((function e(t,o,a,A){var i,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A({type:"LOADING",payload:!0}),e.prev=1,F(!0),e.next=5,T(t,o,a);case 5:i=e.sent,n=i.data,K(n.total_pages),A({type:"SET_MOVIES",payload:n.results}),F(!1),A({type:"LOADING",payload:!1}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,o,a,A){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){a.search?R(a.search,a.page,a.language,e):m(a.page,a.language,e)}),[e,a.page,a.language,a.search]),n.a.createElement(O,{fluid:!0,className:"min-h-screen bg-black"},n.a.createElement(Ke,{movies:o,isLoadingMore:U,language:a.language,loadingMore:function(){console.log("basicState: ",a.page),a.page<c&&e({type:"SET_PAGE",payload:a.page+1})}}))};var ge=Object(Q.a)("p",{target:"efw7reb0"})({name:"1n1l6pk",styles:"span:last-child .slash{display:none;}"}),Ue=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.basicState})).language,o=Object(h.h)(),a=Object(h.g)(),A=Object(i.useState)({}),r=Object(w.a)(A,2),c=r[0],K=r[1],s=Object(i.useState)([]),g=Object(w.a)(s,2),U=g[0],F=g[1],m=Object(i.useState)([]),R=Object(w.a)(m,2),u=R[0],p=R[1];return Object(i.useEffect)((function(){(function(){var A=Object(j.a)(B.a.mark((function A(){var i,n,r,c,l;return B.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e({type:"LOADING",payload:!0}),A.prev=1,A.next=4,Z(o.movieId,t);case 4:return i=A.sent,n=i.data,K(n),A.next=9,z(o.movieId,t);case 9:return A.next=11,A.sent.data;case 11:r=A.sent,c=r.cast,l=r.crew,F(c),p(l),e({type:"LOADING",payload:!1}),A.next=23;break;case 19:A.prev=19,A.t0=A.catch(1),404===A.t0.response.status&&a.push("/"),console.log("error: ",A.t0);case 23:case"end":return A.stop()}}),A,null,[[1,19]])})));return function(){return A.apply(this,arguments)}})()()}),[e,a,o.movieId,t]),n.a.createElement(O,{fluid:!0,className:"flex items-baseline min-h-screen bg-black"},n.a.createElement(O,{className:"bg-primary mt-16"},n.a.createElement("div",{className:"flex flex-wrap py-10 px-5 justify-center"},n.a.createElement("div",{className:"sm:w-1/2 lg:w-1/3"},n.a.createElement(re,{className:"border-solid border-2 border-white rounded-sm",src:c.poster_path,alt:c.title,size:"w342"})),n.a.createElement("div",{className:"text-center sm:text-left sm:w-1/2 lg:w-2/3 px-3 sm:px-5 lg:px-20"},n.a.createElement("p",{className:"flex flex-col leading-8 mt-5 sm:mt-0"},n.a.createElement("span",{className:"text-4xl font-semibold text-white"},c.title),n.a.createElement("span",{className:"italic text-gray-400"},c.tagline&&c.tagline)),n.a.createElement("p",{className:"text-gray-400 text-xl mt-5"},ae(c.release_date,t)),c.genres?n.a.createElement(ge,{className:"block lg:flex text-gray-400 text-xl justify-center sm:justify-start"},c.genres.map((function(e,t){return n.a.createElement("span",{key:t},e.name,n.a.createElement("span",{className:"slash px-1"}," / "))}))):null,n.a.createElement("p",{className:"text-gray-400 text-base mt-4"},c.original_title&&n.a.createElement(n.a.Fragment,null,c.original_title,n.a.createElement("span",{className:"italic"}," ",n.a.createElement(q.a,{id:"originalTitle"})))),n.a.createElement("p",{className:"text-gray-400 text-base mt-4"},c.overview&&n.a.createElement(n.a.Fragment,null,c.overview)),n.a.createElement("p",{className:"text-gray-400 text-base mt-5"},u.length&&function(e){var t=e.filter((function(e){return"Director"===e.job}));if(t.length)return 1===t.length?n.a.createElement("span",null,n.a.createElement(q.a,{id:"director"}),": ",t[0].name):n.a.createElement("span",null,n.a.createElement(q.a,{id:"directors"}),": ",t[0].name,", ",t[1].name,t.length>2&&n.a.createElement("span",{className:"text-sm italic"}," ",n.a.createElement(q.a,{id:"andMore"})," "))}(u)),n.a.createElement("p",{className:"text-gray-400 text-base mt-2"},u.length&&function(e){if(e.length){var t=e.slice(0,6).map((function(e){return e.name}));return n.a.createElement("span",null,n.a.createElement(q.a,{id:"actors"}),": ",t.join(", ")," ",e.length>5&&n.a.createElement("span",{className:"text-sm italic"}," ",n.a.createElement(q.a,{id:"andMore"})," "))}}(U)),c.vote_average&&n.a.createElement("div",{className:"flex flex-col mt-5 justify-center items-center sm:flex-row sm:justify-start"},n.a.createElement(te,{width:"2rem"}),n.a.createElement("p",{className:"flex flex-col mt-3 sm:mt-0 sm:ml-3 "},n.a.createElement("span",{className:"text-xl text-gray-400 "},c.vote_average," ",n.a.createElement("span",{className:"text-base"},"/10")),c.vote_count&&n.a.createElement("span",{className:"text-gray-400"},oe(c.vote_count))))))))},Fe=function(){return n.a.createElement(C.a,null,n.a.createElement(H,null),n.a.createElement(h.d,null,n.a.createElement(h.a,{exact:!0,from:"/movie",to:"/"}),n.a.createElement(h.b,{exact:!0,path:"/",component:se}),n.a.createElement(h.b,{path:"/movie/:movieId",component:Ue}),n.a.createElement(h.b,{path:"*",component:se})))};var me=Object(Q.a)("div",{target:"ewjfh8j0"})({name:"mydz23",styles:"position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.6);z-index:99;svg{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;}"}),Re=function(){return n.a.createElement(me,null,n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",width:"65px",height:"65px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},n.a.createElement("circle",{cx:"50",cy:"50",fill:"none",stroke:"#121212",strokeWidth:"8",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(96.1088 50 50)"},n.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}))))},ue=o(177),pe=(o(172),{"en-US":o(86),"pt-BR":o(87)});var de=function(){var e=Object(l.c)((function(e){return e.basicState})),t=e.loading,o=e.language;return n.a.createElement("div",{className:"App"},n.a.createElement(ue.a,{locale:o,messages:pe[o]},n.a.createElement(Fe,null),t&&n.a.createElement(Re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,{store:E},n.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,o){e.exports=o.p+"static/media/brazil-flag.a5e63aba.png"},79:function(e,t,o){e.exports=o.p+"static/media/usa-flag.4d460eba.png"},84:function(e,t){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAIBAVYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCtfXJtbfeACxOADWcutSg/PEh+mRUmtthIVz1JNY6hnYKoJJ6Ad6ANpdajP34mH0OanXVbVursv1WsJ4Jo/vxOv1Uios0AdQt5bOMieP8WxUwYMMqQR7VyOaUOQcgkUAddRXLJeXCfdmf8AOp01a7Xq4b/eWgDoqKxE1uUffiQ/TIrUtLlbuASKu3nBHoaAJ6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDB1x/9LjXPATP6mq+lAPqMQPbJ/Sm6vJu1KUf3cAflU2gruvHb+6lAHRdaY0MTjDRqfqKfRQBVbTbRusI/AmoG0a1J4Mg+h/+tWjRQBkPoS5+Scge65qrcaRNBG0gdWVRk9q6GqOryGPTnx/EQtAHN5rpdKULp0Z/vZJ/OuWzXY2qeXaxJ6KKAJaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKr3V0LYL8uS3SqD6hO3QhR7CgDWLBRliAPekSRJCdjBsdcVhNI7n5mJ+pq9ZN5VpNKegBP5CgDm7yXzbyZ/VzW14dT91NL6ttrm2bLE+prqdE2W+kiWRgqsxbLHHt/SgDWpA6sSAwJHUA9K53UPEDNmO0+Vf+ehHJ+lZ1jqElndCXcWB++CeooA7SiqkmpWkVuJmmXaRkAHk/hWDe6/NPlIB5SHv/ABGgDcvNTtrMEM+6Tsi8mqOuXG/T4CBgSkNj8P8A69c6pMkgGSSx71seIG2C1t/7kef6f0oAzIFMs8cY6swX867jpXGaUnm6pbqOzbvy5rs6ACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKOpJmJX/unFZlbtxH5kDp3IrCoAKuzP5GgTN6oR+fH9ap1Nrknk6CE/v7V/r/SgDld1bWploNEsIckBgWI/X+tYKnLAE966q6trLVILdFvo1eJNoAYEdB/hQBzO6jdW0/he4H3J429iCKqv4f1Fc4iDD2cUAZ+73o3VM+mX6Eg2k3HohNVnR0OHRlPuMUAXNOjM+oQRju4P5c1d8RTCTVNo/gQL/X+tReHFL6xGw/gVifyx/WquqzCXVLhweC/FAGh4cTfqe7+4hP8ASutrmvCiZa5k9lX+ddLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAViXKeXcOuMDORW3WbqUeJFcDqMGgCkoywHqai8WSBLe2iB6sTj6CrNsu65jHvWX4uc/boF/hEef1NAGBupd3vUeaM0ATLM6HKuw+hqymr38eNt3Lgdi2aoZozQBtR+JdQQYMiN/vLVmPxSx/wCPizjk9wcf0Nc5mjNAHV2/iWwSQubIxMRgmPB/wrmpJN8jP6kmoc0ZoA7Xwsm3S3bHLSnn2wP/AK9blZugx+XotsCMEqW/MmtKgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqtfJvtW/2TmrNIy7lKnuMUAYlvIIZlcjIFXZn0+8UC4jR8dN6ZxVB1KOynqDim0ASvoejT/dUJ/utj+dQSeE7J/wDU3Ei/XDU9VZjhVJ+lWo7K4PP3PqaAMiXwfIP9Tdo3++pH+NU5fCupR/d8qT/db/HFdhDbNGQWmdvbPFWKAPOpNF1KLO6zlwO4Gf5VUeKWM4eN1PoRXqFBAIwRkUAeV5ozmvS30+ykJL2kDE9zGKrjQdMWZZRaqGU5HJx+XSgC3aR+TZwxf3EVf0qaiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooApzWCyylw+3PUYp8djCnVdx9TVmigBFVVGFUAewpaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAM/XNT/sbR57/AMnzvK2/Ju25ywHXB9azvDXiuHxE00fkfZ54sMIzJu3L6g4Hf+YpfG//ACJ9/wD9s/8A0YtcDAs2hW+jeILVTslDJKueCyswIP1UfpQB6N4k13/hHtOju/s32jfKItu/ZjIJznB9K0LC6+26dbXezZ58SSbc527gDjP41yPj26ivfCVlcwNuiluEdT7FHrXjvTp3gSC8XG+LT4ymf72wY/XFADNb8Zado05tsPc3Q6xx9F+p/wD11lw/ESFZlS+0u4tVbowbdx64IFVPh7pkd091q9yvmyrJsjZ+cN1Y/Xkc/Wuy1nSoNY0ya0mRSWU+WxHKN2IoAs2t1Be20dxbSLJDIMq69DU1ee/De+kWe901ydoUSqpP3SDhv5j8q9CoA5vxN4r/AOEduIIvsX2jzULZ83ZjB+hrpK83+Jf/ACELD/rk3869IoA4qL4hRtq62Umn+Whm8oy+fnHOM42/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OwHpWlRQBzOo+BtL1O+lvJprtJZW3NsdQM/ippLXwFods4Z45rgjtNJx+QArp6KAGRxRwxrHEioijCqowAPan0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9k="},86:function(e){e.exports=JSON.parse('{"director":"Director","directors":"Directors","andMore":"and more","actors":"Actors","originalTitle":"original title","noResults":"No results","loading":"Loading"}')},87:function(e){e.exports=JSON.parse('{"director":"Diretor","directors":"Diretores","andMore":"e mais","actors":"Atores","originalTitle":"t\xedtulo original","noResults":"Sem resultados","loading":"Carregando"}')},90:function(e,t,o){e.exports=o(173)}},[[90,1,2]]]);
//# sourceMappingURL=main.890c40bc.chunk.js.map