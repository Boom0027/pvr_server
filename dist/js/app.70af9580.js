(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],m=0,l=[];m<s.length;m++)a=s[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"ea539874","chunk-314bfa43":"4f687c9f","chunk-02728c5f":"81171002","chunk-1fef05fe":"622c6fc0","chunk-a1173a02":"b09c640a","chunk-c3bc1cfc":"e7ec036b"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-314bfa43":1,"chunk-02728c5f":1,"chunk-1fef05fe":1,"chunk-a1173a02":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-314bfa43":"a2172a1b","chunk-02728c5f":"13ac9976","chunk-1fef05fe":"6d30762b","chunk-a1173a02":"eb7ecf45","chunk-c3bc1cfc":"31d6cfe0"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],m=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(m===r||m===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],m=u.getAttribute("data-href");if(m===r||m===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,m=document.createElement("script");m.charset="utf-8",m.timeout=120,c.nc&&m.setAttribute("nonce",c.nc),m.src=s(e);var l=new Error;u=function(t){m.onerror=m.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:m})}),12e4);m.onerror=m.onload=u,document.head.appendChild(m)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],m=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=m;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2c94":function(e,t,n){"use strict";var r=n("d175"),a=n.n(r);a.a},"30a6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("background-progress"),null!==e.currentRoute&&"Login"!==e.currentRoute&&"Register"!==e.currentRoute?n("navbar"):e._e(),n("v-content",{staticClass:"mx-4 mb-4"},[n("router-view")],1),n("error-message")],1)},o=[],i=(n("b0c0"),n("5530")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("v-app-bar",{attrs:{flat:"",app:""}},[n("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:e.toggleShowDrawer}}),n("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[n("span",{staticClass:"font-weight-light"},[e._v("PVR")]),n("span",[e._v("Cinema")])]),n("v-spacer"),n("v-btn",{attrs:{text:"",color:"grey"},on:{click:e.logout}},[n("span",[e._v("Sign out")]),n("v-icon",{attrs:{right:""}},[e._v("exit_to_app")])],1)],1),n("v-navigation-drawer",{staticClass:"primary",attrs:{app:""},model:{value:e.showDrawer,callback:function(t){e.showDrawer=t},expression:"showDrawer"}},[n("avatar"),n("drawer")],1)],1)},c=[],u=n("2f62"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","align-center":""}},[null!==e.auth&&"firstName"in e.auth?n("v-flex",{staticClass:"mt-5"},[n("v-avatar",{attrs:{size:"150",color:"orange"}},[n("span",{staticClass:"headline font-weight-light text-uppercase white--text"},[e._v(" "+e._s(e.auth.firstName[0]+e.auth.lastName[0])+" ")])]),n("p",{staticClass:"white--text subtitle-1 nt-1 text-center"},[e._v(" "+e._s(e.auth.firstName)+" "+e._s(e.auth.lastName)+" ")])],1):e._e()],1)},l=[],d={name:"Avatar",computed:Object(i["a"])({},Object(u["c"])({auth:"getAuth"}))},g=d,f=n("2877"),h=n("6544"),p=n.n(h),v=n("8212"),b=n("0e8f"),x=n("a722"),w=Object(f["a"])(g,m,l,!1,null,null,null),L=w.exports;p()(w,{VAvatar:v["a"],VFlex:b["a"],VLayout:x["a"]});var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{staticClass:"mt-5"},e._l(e.links,(function(t){return n("v-list-item",{key:t.text,attrs:{router:"",exact:"",to:{name:t.route}}},[n("v-list-item-action",[n("v-icon",{staticClass:"white--text"},[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"white--text"},[e._v(" "+e._s(t.text)+" ")])],1)],1)})),1)},M=[],y={name:"Drawer",data:function(){return{links:[{icon:"dashboard",text:"Dashboard",route:"Home"},{icon:"person",text:"User",route:"User"},{icon:"movie",text:"AddMovie",route:"AddMovie"}]}}},O=y,P=n("132d"),j=n("8860"),C=n("da13"),E=n("1800"),T=n("5d23"),A=Object(f["a"])(O,k,M,!1,null,null,null),R=A.exports;p()(A,{VIcon:P["a"],VList:j["a"],VListItem:C["a"],VListItemAction:E["a"],VListItemContent:T["a"],VListItemTitle:T["b"]});var S={name:"Navbar",data:function(){return{showDrawer:!1}},methods:Object(i["a"])({},Object(u["b"])({logout:"logout"}),{toggleShowDrawer:function(){this.showDrawer=!this.showDrawer}}),components:{Drawer:R,Avatar:L}},_=S,N=n("40dc"),V=n("5bc1"),U=n("8336"),I=n("f774"),D=n("2fa4"),B=n("2a7f"),F=Object(f["a"])(_,s,c,!1,null,null,null),$=F.exports;p()(F,{VAppBar:N["a"],VAppBarNavIcon:V["a"],VBtn:U["a"],VIcon:P["a"],VNavigationDrawer:I["a"],VSpacer:D["a"],VToolbarTitle:B["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{color:e.errorOrSuccess,bottom:!0,right:!0,timeout:6e3,vertical:!0},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("span",{staticClass:"text-uppercase"},[e._v(e._s(e.message))]),n("v-btn",{attrs:{text:""},on:{click:e.hideMessage}},[e._v("Close")])],1)},G=[],J=(n("498a"),{name:"ErrorOrSuccessMessage",data:function(){return{show:!1,errorOrSuccess:"",message:""}},computed:Object(i["a"])({},Object(u["c"])({errorMessage:"getCommonErrorMessage",commonSuccessMessage:"getCommonSuccessMessage"})),methods:Object(i["a"])({},Object(u["d"])({setCommonErrorMessage:"setCommonErrorMessage",setCommonSuccessMessage:"setCommonSuccessMessage"}),{hideMessage:function(){this.show=!1}}),watch:{errorMessage:function(e){e.trim().length>0&&(this.errorOrSuccess="error",this.message=e,this.show=!0)},commonSuccessMessage:function(e){e.trim().length>0&&(this.errorOrSuccess="success",this.message=e,this.show=!0)},show:function(e){e||(this.setCommonErrorMessage(""),this.setCommonSuccessMessage(""),this.message="")}}}),q=J,z=n("2db4"),W=Object(f["a"])(q,H,G,!1,null,null,null),K=W.exports;p()(W,{VBtn:U["a"],VSnackbar:z["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.sendingMail,expression:"sendingMail"}],attrs:{color:"red lighten-2","buffer-value":"0",stream:""}})},Q=[],X={name:"BackgroundLoader",computed:Object(i["a"])({},Object(u["c"])({sendingMail:"getSendingMail"}))},Z=X,ee=(n("aca5"),n("8e36")),te=Object(f["a"])(Z,Y,Q,!1,null,"26b2761a",null),ne=te.exports;p()(te,{VProgressLinear:ee["a"]});var re={name:"App",data:function(){return{currentRoute:""}},components:{Navbar:$,ErrorMessage:K,BackgroundProgress:ne},computed:Object(i["a"])({},Object(u["c"])({isVerified:"getIsVerified"})),watch:{isVerified:function(e,t){"VERIFIED"===e&&"NOT_VERIFIED"===t?this.$router.push({name:"Home"}):"NOT_VERIFIED"===e&&"VERIFIED"===t&&this.$router.push({name:"Login"})}},updated:function(){this.currentRoute=this.$router.history.current.name}},ae=re,oe=(n("2c94"),n("7496")),ie=n("a75b"),se=Object(f["a"])(ae,a,o,!1,null,"38ebc1f0",null),ce=se.exports;p()(se,{VApp:oe["a"],VContent:ie["a"]});var ue=n("9483");Object(ue["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("96cf");var me=n("1da1"),le=n("8c4f"),de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",{staticClass:"subtitle-1 grey--text"},[e._v("Movies")]),n("content-vue"),n("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.moviePagination.loading,expression:"moviePagination.loading"}],attrs:{color:"red lighten-2","buffer-value":"0",stream:"",height:"6"}})],1)},ge=[],fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"my-5"},[n("search-bar"),n("v-layout",{staticClass:"mb-2",attrs:{row:"","justify-center":""}},[n("v-btn",{attrs:{outlined:"",text:"",fab:"",to:{name:"AddMovie"}}},[n("v-icon",[e._v("add")])],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.movies,(function(t){return n("v-flex",{key:t.id,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[n("v-card",{staticClass:"text-center ma-3",attrs:{flat:""}},[n("v-responsive",{staticClass:"pt-4"},[n("v-avatar",{attrs:{color:"primary",size:"100"}},[n("span",{staticClass:"headline font-weight-light text-uppercase white--text"},[e._v(" "+e._s(t.name[0])+" ")])])],1),n("v-card-text",[n("div",{staticClass:"caption text-uppercase grey-text"},[e._v(" "+e._s(t.name)+" ")])]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(n){return e.sendNotification({movieId:t.id})}}},[n("v-icon",{attrs:{small:"",left:""}},[e._v("message")]),n("span",[e._v("Notify")])],1)],1)],1)],1)})),1)],1)},he=[],pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.moviesLoading,expression:"moviesLoading"}],attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}}),n("v-layout",{staticClass:"mt-2 mb-3 px-5",attrs:{row:""}},[n("v-text-field",{attrs:{outlined:"",label:"Search","append-icon":"search"},on:{input:e.searchLocal},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}})],1)],1)},ve=[],be={name:"HomeSearchBar",data:function(){return{searchValue:"",searchTimeout:null}},computed:Object(i["a"])({},Object(u["c"])({moviesLoading:"getmoviesLoading",movies:"getMovies"})),methods:Object(i["a"])({},Object(u["b"])({searchMovie:"searchMovie"}),{searchLocal:function(){var e=this;null!==this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((function(){e.searchMovie(e.searchValue),e.searchTimeout=null}),500)}}),created:function(){this.movies.length<=0&&this.searchMovie("")}},xe=be,we=n("8654"),Le=Object(f["a"])(xe,pe,ve,!1,null,null,null),ke=Le.exports;p()(Le,{VLayout:x["a"],VProgressLinear:ee["a"],VTextField:we["a"]});var Me={name:"HomeContent",computed:Object(i["a"])({},Object(u["c"])({movies:"getMovies"})),components:{SearchBar:ke},methods:Object(i["a"])({},Object(u["b"])({sendNotification:"sendNotification"}))},ye=Me,Oe=n("b0af"),Pe=n("99d9"),je=n("a523"),Ce=n("6b53"),Ee=Object(f["a"])(ye,fe,he,!1,null,null,null),Te=Ee.exports;p()(Ee,{VAvatar:v["a"],VBtn:U["a"],VCard:Oe["a"],VCardActions:Pe["a"],VCardText:Pe["b"],VContainer:je["a"],VFlex:b["a"],VIcon:P["a"],VLayout:x["a"],VResponsive:Ce["a"]});var Ae={name:"Home",data:function(){return{timeout:null}},components:{ContentVue:Te},computed:Object(i["a"])({},Object(u["c"])({moviePagination:"getMoviePagination"})),methods:Object(i["a"])({},Object(u["b"])({searchMovieNext:"searchMovieNext"}),{scrollBehaviour:function(){var e=this,t=document.documentElement,n=t.scrollTop+window.innerHeight,r=t.offsetHeight;n>=r-20&&(null!==this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){e.searchMovieNext()}),500))}}),mounted:function(){window.addEventListener("scroll",this.scrollBehaviour)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollBehaviour)}},Re=Ae,Se=(n("8e8e"),Object(f["a"])(Re,de,ge,!1,null,"20bc603a",null)),_e=Se.exports;p()(Se,{VProgressLinear:ee["a"]});n("99af"),n("4de4"),n("4160"),n("159b");var Ne=n("2909"),Ve=n("bc3a"),Ue=n.n(Ve),Ie=0,De=[],Be=[];function Fe(){return new Promise((function(e){De.length>0?e(De.pop()):Ie<"10"?(e(new Worker("/worker.js")),Ie++):Be.push(e)}))}function $e(e,t,n){if(n(e.data),t.onmessage=null,Be.length>0){var r=Be.shift();r(t)}else De.push(t)}var He=function(e){return new Promise((function(t){if("undefined"===typeof Worker)try{t(JSON.parse(e))}catch(n){t({})}Fe().then((function(n){n.postMessage({task:"PARSE",value:e}),n.onmessage=function(e){$e(e,n,t)}})).catch((function(){try{t(JSON.parse(e))}catch(n){t({})}}))}))},Ge=function(e){return new Promise((function(t){if("undefined"===typeof Worker)try{t(JSON.stringify(e))}catch(n){t({})}Fe().then((function(n){n.postMessage({task:"STRINGIFY",value:e}),n.onmessage=function(e){$e(e,n,t)}})).catch((function(){try{t(JSON.stringify(e))}catch(n){t({})}}))}))};function Je(e){return qe.apply(this,arguments)}function qe(){return qe=Object(me["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n={method:t.method,mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json; charset=utf-8"},redirect:"follow",referrer:"no-referrer",validateStatus:function(e){return e>=200&&e<300},transformResponse:function(e){return e}},"POST"!==t.method){e.next=8;break}return e.next=4,Ge(t.payload);case 4:if(r=e.sent,!r.error){e.next=7;break}return e.abrupt("return",{error:"NOT_ABLE_TO_STRINGIFY"});case 7:n.data=r.value;case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)}))),qe.apply(this,arguments)}var ze=function(){var e=Object(me["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Je(t);case 3:return n=e.sent,e.next=6,Ue()(t.url,n);case 6:return r=e.sent,e.next=9,He(r.data);case 9:return a=e.sent,e.abrupt("return",a.value);case 13:return e.prev=13,e.t0=e["catch"](0),e.next=17,He(e.t0.response.data);case 17:return o=e.sent,e.abrupt("return",o.value);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),We=function(){var e=Object(me["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,i,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]&&s[1],e.prev=1,e.next=4,Je(t);case 4:return r=e.sent,n||(n=Ke.getters.getAuth.token),r.headers.Authorization="Bearer ".concat(n),e.next=9,Ue()(t.url,r);case 9:return a=e.sent,e.next=12,He(a.data);case 12:return o=e.sent,e.abrupt("return",o.value);case 16:return e.prev=16,e.t0=e["catch"](1),e.next=20,He(e.t0.response.data);case 20:if(i=e.sent,403!==i.value.code){e.next=24;break}return Ke.dispatch("logout"),e.abrupt("return",!1);case 24:return"message"in i.value&&Ke.commit("setCommonErrorMessage",i.value.message),e.abrupt("return",i.value);case 26:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();r["a"].use(u["a"]);var Ke=new u["a"].Store({state:{auth:null,authMessage:"",loadingAuth:!1,verified:"NOT_CHECKED",commonErrorMessage:"",commonSuccessMessage:"",users:[],usersLoading:!1,addUserLoading:!1,userPagination:{value:"",currentPage:0,lastPage:!1,loading:!1},theatres:[],theatreLoading:!1,addTheatreLoading:!1,movies:[],moviesLoading:!1,addMovieLoading:!1,moviePagination:{value:"",currentPage:0,lastPage:!1,loading:!1},cities:[],cityLoading:!1,sendingMail:!1},getters:{getCommonErrorMessage:function(e){return e.commonErrorMessage},getCommonSuccessMessage:function(e){return e.commonSuccessMessage},getAuth:function(e){return e.auth},getLoadingAuth:function(e){return e.loadingAuth},getAuthMessage:function(e){return e.authMessage},getIsVerified:function(e){return e.verified},getUsers:function(e){return e.users},getUserPagination:function(e){return e.userPagination},getUsersLoading:function(e){return e.usersLoading},getAddUserLoading:function(e){return e.addUserLoading},getMovies:function(e){return e.movies},getmoviesLoading:function(e){return e.moviesLoading},getAddMovieLoading:function(e){return e.addMovieLoading},getMoviePagination:function(e){return e.moviePagination},getTheatres:function(e){return e.theatres},getTheatreLoading:function(e){return e.theatreLoading},getAddTheatreLoading:function(e){return e.addTheatreLoading},getCities:function(e){return e.cities},getCityLoading:function(e){return e.cityLoading},getSendingMail:function(e){return e.sendingMail}},mutations:{setCommonErrorMessage:function(e,t){e.commonErrorMessage=t},setCommonSuccessMessage:function(e,t){e.commonSuccessMessage=t},setAuthMessage:function(e,t){e.authMessage="string"===typeof t?t:"Incorrect username or password"},setToken:function(e,t){localStorage.setItem("token",t),e.auth={token:t}},setAuthDetails:function(e,t){e.auth=Object(i["a"])({},e.auth,{},t),e.verified="VERIFIED"},startAuthLoading:function(e){e.loadingAuth=!0},stopAuthLoading:function(e){e.loadingAuth=!1},authClear:function(e){localStorage.clear(),e.auth=null,e.verified="NOT_VERIFIED"},setUsers:function(e,t){e.users=t,e.userPagination=Object(i["a"])({},e.userPagination,{currentPage:1,lastPage:t.length<10,value:t.value})},setUsersNext:function(e,t){var n,r={};e.users.forEach((function(e){r[e.id]=!0})),t=t.filter((function(e){return!(e.id in r)})),(n=e.users).push.apply(n,Object(Ne["a"])(t)),e.userPagination=Object(i["a"])({},e.userPagination,{currentPage:e.userPagination.currentPage+1,lastPage:t.length<10})},pushUser:function(e,t){e.users=[t].concat(Object(Ne["a"])(e.users))},startUserLoading:function(e){e.usersLoading=!0},startUserNextLoading:function(e){e.userPagination=Object(i["a"])({},e.userPagination,{loading:!0})},stopUserLoading:function(e){e.usersLoading=!1},stopUserNextLoading:function(e){e.userPagination=Object(i["a"])({},e.userPagination,{loading:!1})},startAddUserLoading:function(e){e.addUserLoading=!0},stopAddUserLoading:function(e){e.addUserLoading=!1},setCities:function(e,t){e.cities=t},startCityLoading:function(e){e.cityLoading=!0},stopCityLoading:function(e){e.cityLoading=!1},setTheatres:function(e,t){e.theatres=t},setCurrentTheatre:function(e,t){e.theatres=[t]},startTheatreLoading:function(e){e.theatreLoading=!0},stopTheatreLoading:function(e){e.theatreLoading=!1},startAddTheatreLoading:function(e){e.addTheatreLoading=!0},stopAddTheatreLoading:function(e){e.addTheatreLoading=!1},setMovies:function(e,t){e.movies=t,e.moviePagination=Object(i["a"])({},e.moviePagination,{currentPage:1,lastPage:t.length<15,value:t.value})},setMoviesNext:function(e,t){var n,r={};e.movies.forEach((function(e){r[e.id]=!0})),t=t.filter((function(e){return!(e.id in r)})),(n=e.movies).push.apply(n,Object(Ne["a"])(t)),e.moviePagination=Object(i["a"])({},e.moviePagination,{currentPage:e.moviePagination.currentPage+1,lastPage:t.length<15})},startMoviesLoading:function(e){e.moviesLoading=!0},startMoviesNextLoading:function(e){e.moviePagination=Object(i["a"])({},e.moviePagination,{loading:!0})},stopMoviesLoading:function(e){e.moviesLoading=!1},stopMoviesNextLoading:function(e){e.moviePagination=Object(i["a"])({},e.moviePagination,{loading:!1})},startAddMovieLoading:function(e){e.addMovieLoading=!0},stopAddMovieLoading:function(e){e.addMovieLoading=!1},pushMovie:function(e,t){e.movies.unshift(t)},startSendingMail:function(e){e.sendingMail=!0},stopSendingMail:function(e){e.sendingMail=!1},listsClear:function(e){e.movies=[],e.users=[],e.theatres=[]}},actions:{login:function(e,t){var n=t.username,r=t.password;return Object(me["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.getters.getLoadingAuth){t.next=2;break}return t.abrupt("return");case 2:return e.commit("startAuthLoading"),t.next=5,ze({url:"/api/auth/login",method:"POST",payload:{username:n,password:r}});case 5:if(a=t.sent,200===a.code){t.next=9;break}return e.commit("stopAuthLoading"),t.abrupt("return",e.commit("setAuthMessage",!1));case 9:return e.commit("setToken",a.token),t.next=12,e.dispatch("verify");case 12:e.commit("stopAuthLoading");case 13:case"end":return t.stop()}}),t)})))()},register:function(e,t){return Object(me["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.getters.getLoadingAuth){n.next=2;break}return n.abrupt("return");case 2:return e.commit("startAuthLoading"),n.next=5,ze({url:"/api/auth/register",method:"POST",payload:t});case 5:if(r=n.sent,200===r.code){n.next=9;break}return e.commit("stopAuthLoading"),n.abrupt("return",e.commit("setAuthMessage",r.message));case 9:return e.commit("setToken",r.token),n.next=12,e.dispatch("verify");case 12:e.commit("stopAuthLoading");case 13:case"end":return n.stop()}}),n)})))()},verify:function(e){return Object(me["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,We({url:"/api/auth/verify",method:"GET"});case 2:if(n=t.sent,!n){t.next=5;break}return t.abrupt("return",e.commit("setAuthDetails",n));case 5:case"end":return t.stop()}}),t)})))()},searchUserByName:function(e,t){return Object(me["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("startUserLoading"),n.next=3,We({url:"/api/user/search?value=".concat(encodeURI(t)),method:"GET"});case 3:if(r=n.sent,r&&200===r.code){n.next=6;break}return n.abrupt("return",e.commit("stopUserLoading"));case 6:r.users.value=t,e.commit("setUsers",r.users),e.commit("stopUserLoading");case 9:case"end":return n.stop()}}),n)})))()},searchUserNextByName:function(e){return Object(me["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.getters.getUserPagination.loading&&!e.getters.getUserPagination.lastPage){t.next=2;break}return t.abrupt("return");case 2:return e.commit("startUserNextLoading"),t.next=5,We({url:"/api/user/search?value=".concat(encodeURI(e.getters.getUserPagination.value),"&page=").concat(e.getters.getUserPagination.currentPage),method:"GET"});case 5:if(n=t.sent,n&&200===n.code){t.next=8;break}return t.abrupt("return",e.commit("stopUserNextLoading"));case 8:e.commit("setUsersNext",n.users),e.commit("stopUserNextLoading");case 10:case"end":return t.stop()}}),t)})))()},searchCity:function(e,t){return Object(me["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("startCityLoading"),t=null===t?"":t,n.next=4,ze({url:"/api/user/city/search?value=".concat(encodeURI(t)),method:"GET"});case 4:if(r=n.sent,r&&200===r.code){n.next=7;break}return n.abrupt("return",e.commit("stopCityLoading"));case 7:return e.commit("setCities",r.cities),n.abrupt("return",e.commit("stopCityLoading"));case 9:case"end":return n.stop()}}),n)})))()},searchTheatre:function(e,t){return Object(me["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("startTheatreLoading"),t=null===t?"":t,n.next=4,We({url:"/api/theatre/search?value=".concat(encodeURI(t)),method:"GET"});case 4:if(r=n.sent,r&&200===r.code){n.next=7;break}return n.abrupt("return",e.commit("stopTheatreLoading"));case 7:return e.commit("setTheatres",r.theatres),n.abrupt("return",e.commit("stopTheatreLoading"));case 9:case"end":return n.stop()}}),n)})))()},searchMovie:function(e,t){return Object(me["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("startMoviesLoading"),t=null===t?"":t,n.next=4,We({url:"/api/movie/search?value=".concat(encodeURI(t)),method:"GET"});case 4:if(r=n.sent,r&&200===r.code){n.next=7;break}return n.abrupt("return",e.commit("stopMoviesLoading"));case 7:return r.movies.value=t,e.commit("setMovies",r.movies),n.abrupt("return",e.commit("stopMoviesLoading"));case 10:case"end":return n.stop()}}),n)})))()},searchMovieNext:function(e){return Object(me["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.getters.getMoviePagination.loading&&!e.getters.getMoviePagination.lastPage){t.next=2;break}return t.abrupt("return");case 2:return e.commit("startMoviesNextLoading"),t.next=5,We({url:"/api/movie/search?value=".concat(encodeURI(e.getters.getMoviePagination.value),"&page=").concat(e.getters.getMoviePagination.currentPage),method:"GET"});case 5:if(n=t.sent,n&&200===n.code){t.next=8;break}return t.abrupt("return",e.commit("stopMoviesNextLoading"));case 8:return e.commit("setMoviesNext",n.movies),t.abrupt("return",e.commit("stopMoviesNextLoading"));case 10:case"end":return t.stop()}}),t)})))()},addUser:function(e,t){return Object(me["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("startAddUserLoading"),n.next=3,We({url:"/api/user/create",method:"POST",payload:t});case 3:if(r=n.sent,r&&200===r.code){n.next=6;break}return n.abrupt("return",e.commit("stopAddUserLoading"));case 6:return e.commit("pushUser",r.user),n.abrupt("return",e.commit("stopAddUserLoading"));case 8:case"end":return n.stop()}}),n)})))()},addTheatre:function(e,t){return Object(me["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("startAddTheatreLoading"),n.next=3,We({url:"/api/theatre/add",method:"POST",payload:t});case 3:if(r=n.sent,r&&200===r.code){n.next=6;break}return n.abrupt("return",e.commit("stopAddTheatreLoading"));case 6:return e.commit("setCurrentTheatre",r.theatre),n.abrupt("return",e.commit("stopAddTheatreLoading"));case 8:case"end":return n.stop()}}),n)})))()},addMovie:function(e,t){return Object(me["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("startAddMovieLoading"),n.next=3,We({url:"/api/movie/add",method:"POST",payload:t});case 3:if(r=n.sent,r&&200===r.code){n.next=6;break}return n.abrupt("return",e.commit("stopAddMovieLoading"));case 6:return e.commit("pushMovie",r.movie),n.abrupt("return",e.commit("stopAddMovieLoading"));case 8:case"end":return n.stop()}}),n)})))()},sendMail:function(e,t){return Object(me["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.getters.getSendingMail){n.next=2;break}return n.abrupt("return",e.commit("setCommonErrorMessage","only one mail request can be sent at a time"));case 2:return e.commit("startSendingMail"),n.next=5,We({url:"/api/user/mail",method:"POST",payload:t});case 5:if(r=n.sent,r&&200===r.code){n.next=9;break}return e.commit("setCommonErrorMessage",r.message),n.abrupt("return",e.commit("stopSendingMail"));case 9:return e.commit("setCommonSuccessMessage",r.message),n.abrupt("return",e.commit("stopSendingMail"));case 11:case"end":return n.stop()}}),n)})))()},sendNotification:function(e,t){return Object(me["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.getters.getSendingMail){n.next=2;break}return n.abrupt("return",e.commit("setCommonErrorMessage","only one mail request can be sent at a time"));case 2:return e.commit("startSendingMail"),n.next=5,We({url:"/api/movie/mail",method:"POST",payload:t});case 5:if(r=n.sent,r&&200===r.code){n.next=9;break}return e.commit("setCommonErrorMessage",r.message),n.abrupt("return",e.commit("stopSendingMail"));case 9:return e.commit("setCommonSuccessMessage",r.message),n.abrupt("return",e.commit("stopSendingMail"));case 11:case"end":return n.stop()}}),n)})))()},logout:function(e){e.commit("authClear"),e.commit("listsClear")}},modules:{}});function Ye(e){return Qe.apply(this,arguments)}function Qe(){return Qe=Object(me["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]&&o[1],r=Ke.getters.getIsVerified,"VERIFIED"!==r){e.next=8;break}if(!n){e.next=5;break}return e.abrupt("return",t({name:"Home"}));case 5:return e.abrupt("return",t());case 8:if("NOT_VERIFIED"!==r){e.next=12;break}if(!n){e.next=11;break}return e.abrupt("return",t());case 11:return e.abrupt("return",t({name:"Login"}));case 12:if(a=localStorage.getItem("token"),null!==a){e.next=18;break}if(Ke.commit("authClear"),!n){e.next=17;break}return e.abrupt("return",t());case 17:return e.abrupt("return",t({name:"Login"}));case 18:return Ke.commit("setToken",a),e.next=21,Ke.dispatch("verify");case 21:if(r=Ke.getters.getIsVerified,"VERIFIED"!==r){e.next=28;break}if(!n){e.next=25;break}return e.abrupt("return",t({name:"Home"}));case 25:return e.abrupt("return",t());case 28:return n&&t(),e.abrupt("return",t({name:"Login"}));case 30:case"end":return e.stop()}}),e)}))),Qe.apply(this,arguments)}function Xe(e,t,n){return Ze.apply(this,arguments)}function Ze(){return Ze=Object(me["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Ye(r);case 1:case"end":return e.stop()}}),e)}))),Ze.apply(this,arguments)}function et(e,t,n){return tt.apply(this,arguments)}function tt(){return tt=Object(me["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Ye(r,!0);case 1:case"end":return e.stop()}}),e)}))),tt.apply(this,arguments)}r["a"].use(le["a"]);var nt=[{path:"/",name:"Home",component:_e,beforeEnter:Xe},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))},beforeEnter:Xe},{path:"/user",name:"User",component:function(){return Promise.all([n.e("chunk-314bfa43"),n.e("chunk-a1173a02")]).then(n.bind(null,"1511"))},beforeEnter:Xe},{path:"/add",name:"AddMovie",component:function(){return Promise.all([n.e("chunk-314bfa43"),n.e("chunk-02728c5f")]).then(n.bind(null,"e883"))},beforeEnter:Xe},{path:"/login",name:"Login",component:function(){return n.e("chunk-c3bc1cfc").then(n.bind(null,"a55b"))},beforeEnter:et},{path:"/register",name:"Register",component:function(){return Promise.all([n.e("chunk-314bfa43"),n.e("chunk-1fef05fe")]).then(n.bind(null,"73cf"))},beforeEnter:et}],rt=new le["a"]({mode:"history",base:"/",routes:nt});rt.beforeEach((function(e,t,n){document.title="PVR | ".concat(e.name),n()}));var at=rt,ot=(n("d1e78"),n("f309"));r["a"].use(ot["a"]);var it=new ot["a"]({icons:{iconfont:"md",theme:{primary:"#9652ff",success:"#3cd1c2",info:"#ffaa2c",error:"#f83e70"}}});r["a"].config.productionTip=!1,new r["a"]({router:at,store:Ke,vuetify:it,render:function(e){return e(ce)}}).$mount("#app")},"8e8e":function(e,t,n){"use strict";var r=n("cff0"),a=n.n(r);a.a},aca5:function(e,t,n){"use strict";var r=n("30a6"),a=n.n(r);a.a},cff0:function(e,t,n){},d175:function(e,t,n){}});
//# sourceMappingURL=app.70af9580.js.map