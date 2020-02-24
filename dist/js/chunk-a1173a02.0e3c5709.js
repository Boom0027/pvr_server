(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1173a02"],{1511:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user"},[a("h1",{staticClass:"subtitle-1 grey--text"},[t._v("User")]),a("content-vue"),a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.userPagination.loading,expression:"userPagination.loading"}],attrs:{color:"red lighten-2","buffer-value":"0",stream:"",height:"6"}})],1)},s=[],n=a("5530"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"my-5"},[a("search-bar"),a("add-user"),t.users.length>0?t._l(t.users,(function(e){return a("v-card",{key:e.id,staticClass:"py-4 px-5 mb-1",attrs:{flat:""}},[a("v-layout",{staticClass:"py-3 px-5",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md4:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Name")]),a("div",[t._v(t._s(e.firstName)+" "+t._s(e.lastName))])]),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("div",{staticClass:"caption grey--text"},[t._v("City")]),a("div",[t._v(t._s(e.city))])]),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Email")]),a("div",[a("send-mail",{attrs:{user:e}})],1)]),a("v-divider")],1)],1)})):a("h1",{staticClass:"caption text-uppercase text-center"},[t._v(" Nothing to show! Add new users ")])],2)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.usersLoading,expression:"usersLoading"}],attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}}),a("v-layout",{staticClass:"mb-3 mt-2 px-5",attrs:{row:""}},[a("v-text-field",{attrs:{outlined:"",label:"Search","append-icon":"search"},on:{input:t.searchLocal},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)},c=[],u=a("2f62"),d={name:"UserSearchBar",data:function(){return{searchValue:"",searchTimeout:null}},computed:Object(n["a"])({},Object(u["c"])({usersLoading:"getUsersLoading",users:"getUsers"})),methods:Object(n["a"])({},Object(u["b"])({searchUserByName:"searchUserByName"}),{searchLocal:function(){var t=this;null!==this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((function(){t.searchUserByName(t.searchValue),t.searchTimeout=null}),500)}}),created:function(){this.users.length<=0&&this.searchUserByName("")}},h=d,m=a("2877"),v=a("6544"),f=a.n(v),p=a("a722"),b=a("8e36"),g=a("8654"),x=Object(m["a"])(h,l,c,!1,null,null,null),y=x.exports;f()(x,{VLayout:p["a"],VProgressLinear:b["a"],VTextField:g["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-layout",{staticClass:"mt-0 mb-4",attrs:{row:"","justify-center":""}},[a("v-btn",t._g({attrs:{outlined:"",text:"",fab:""}},i),[a("v-icon",[t._v("add")])],1)],1)]}}]),model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("v-card",[a("v-card-title",[a("h2",{staticClass:"subtitle-1 text-uppercase"},[t._v("Add a new user")])]),a("v-card-text",{staticClass:"mt-4"},[a("v-form",{ref:"addUserForm",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{type:"text",id:"firstName",label:"First Name","prepend-icon":"person",rules:t.nameRule,"validate-on-blur":t.validateOnBlur},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{type:"text",id:"lastName",label:"Last Name","prepend-icon":"person",rules:t.nameRule,"validate-on-blur":t.validateOnBlur},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{id:"email",type:"email",label:"Email","prepend-icon":"email",rules:t.emailRule,"validate-on-blur":t.validateOnBlur},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-overflow-btn",{attrs:{label:"City",editable:"",items:t.formattedCities,"item-value":"id","prepend-icon":"location_on",loading:t.cityLoading},on:{"update:search-input":t.searchCityLocal},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1)],1),a("v-btn",{staticClass:"primary ma-0 mt-5",attrs:{type:"submit",block:"",ripple:"",loading:t.addUserLoading,large:"",text:"",dark:""}},[a("v-icon",{attrs:{left:""}},[t._v("add")]),a("span",[t._v("Add")])],1)],1)],1)],1)],1)},C=[],O=a("f82a"),_=a("9441"),k={name:"AddUser",mixins:[O["a"],_["a"]],computed:Object(n["a"])({},Object(u["c"])({errorMessage:"getCommonErrorMessage",addUserLoading:"getAddUserLoading"})),methods:Object(n["a"])({},Object(u["b"])({addUser:"addUser"}),{},Object(u["d"])({setCommonErrorMessage:"setCommonErrorMessage"}),{submitForm:function(){if(!this.$refs.addUserForm.validate())return!1;if(""===this.city)return this.setCommonErrorMessage("Please add city");var t={firstName:this.firstName,lastName:this.lastName,email:this.email,cityId:this.city};this.addUser(t)}}),watch:{addUserLoading:function(t){t||(this.firstName="",this.lastName="",this.email="",""===this.errorMessage&&(this.showDialog=!1))}}},N=k,V=(a("d56f"),a("8336")),j=a("b0af"),B=a("99d9"),T=a("169a"),$=a("0e8f"),A=a("4bd4"),U=a("132d"),E=a("de8e"),F=Object(m["a"])(N,w,C,!1,null,"2ca5ed7b",null),L=F.exports;f()(F,{VBtn:V["a"],VCard:j["a"],VCardText:B["b"],VCardTitle:B["c"],VDialog:T["a"],VFlex:$["a"],VForm:A["a"],VIcon:U["a"],VLayout:p["a"],VOverflowBtn:E["a"],VTextField:g["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{small:"",rounded:"",outlined:"",color:"primary"}},i),[t._v(" "+t._s(t.user.email)+" "),a("v-icon",{attrs:{right:"",small:""}},[t._v("send")])],1)]}}]),model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("v-card",[a("v-card-title",[a("h2",{staticClass:"subtitle-1 text-uppercase"},[t._v(" Send mail to "+t._s(t.user.firstName)+" ")])]),a("v-card-text",{staticClass:"mt-4"},[a("v-form",{ref:"sendEmailForm",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{type:"text",id:"title",label:"Title","prepend-icon":"title",rules:t.relaxedNameRule,"validate-on-blur":t.validateOnBlur},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{label:"Body","prepend-icon":"description",rules:t.anyTextRule},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1)],1),a("v-btn",{staticClass:"primary ma-0 mt-5",attrs:{type:"submit",block:"",ripple:"",large:"",text:"",dark:""}},[a("v-icon",{attrs:{left:""}},[t._v("send")]),a("span",[t._v("Send")])],1)],1)],1)],1)],1)},S=[],D={name:"SendMail",props:{user:Object},data:function(){return{title:"",body:"",showDialog:!1,validateOnBlur:!0}},mixins:[O["a"]],methods:Object(n["a"])({},Object(u["b"])({sendMail:"sendMail"}),{submitForm:function(){if(!this.$refs.sendEmailForm.validate())return!1;var t={id:[this.user.id],title:this.title,body:this.body};this.sendMail(t),this.showDialog=!1}})},M=D,H=a("a844"),P=Object(m["a"])(M,I,S,!1,null,null,null),R=P.exports;f()(P,{VBtn:V["a"],VCard:j["a"],VCardText:B["b"],VCardTitle:B["c"],VDialog:T["a"],VFlex:$["a"],VForm:A["a"],VIcon:U["a"],VLayout:p["a"],VTextField:g["a"],VTextarea:H["a"]});var z={name:"UserContent",computed:Object(n["a"])({},Object(u["c"])({users:"getUsers"})),components:{SearchBar:y,AddUser:L,SendMail:R}},G=z,Z=a("a523"),W=a("ce7e"),K=Object(m["a"])(G,o,r,!1,null,null,null),J=K.exports;f()(K,{VCard:j["a"],VContainer:Z["a"],VDivider:W["a"],VFlex:$["a"],VLayout:p["a"]});var q={name:"User",data:function(){return{timeout:null}},components:{ContentVue:J},computed:Object(n["a"])({},Object(u["c"])({userPagination:"getUserPagination"})),methods:Object(n["a"])({},Object(u["b"])({searchUserNextByName:"searchUserNextByName"}),{scrollBehaviour:function(){var t=this,e=document.documentElement,a=e.scrollTop+window.innerHeight,i=e.offsetHeight;a>=i-20&&(null!==this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.searchUserNextByName()}),500))}}),mounted:function(){window.addEventListener("scroll",this.scrollBehaviour)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollBehaviour)}},Q=q,X=(a("be72"),Object(m["a"])(Q,i,s,!1,null,"86d6e7bc",null));e["default"]=X.exports;f()(X,{VProgressLinear:b["a"]})},1681:function(t,e,a){},"169a":function(t,e,a){"use strict";a("caad"),a("45fc"),a("a9e3"),a("2532"),a("498a");var i=a("5530"),s=a("ade3"),n=(a("368e"),a("480e")),o=a("4ad4"),r=a("b848"),l=a("75eb"),c=a("e707"),u=a("e4d3"),d=a("21be"),h=a("f2e7"),m=a("a293"),v=a("58df"),f=a("d9bd"),p=a("80d2"),b=Object(v["a"])(o["a"],r["a"],l["a"],c["a"],u["a"],d["a"],h["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:m["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(f["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');a.length&&a[0].focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(n["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};return this.fullscreen||(t.style={maxWidth:"none"===this.maxWidth?void 0:Object(p["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["f"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,a){},3761:function(t,e,a){},a844:function(t,e,a){"use strict";a("a9e3");var i=a("5530"),s=(a("1681"),a("8654")),n=a("58df"),o=Object(n["a"])(s["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(i["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},s["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},be72:function(t,e,a){"use strict";var i=a("cb35"),s=a.n(i);s.a},cb35:function(t,e,a){},d56f:function(t,e,a){"use strict";var i=a("3761"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-a1173a02.0e3c5709.js.map