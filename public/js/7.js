(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1:function(t,e,a){"use strict";function s(t,e,a,s,i,r,o,n){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=n?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var _=c.render;c.render=function(t,e){return l.call(e),_(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}a.d(e,"a",(function(){return s}))},26:function(t,e,a){var s=a(83);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(5)(s,i);s.locals&&(t.exports=s.locals)},52:function(t,e,a){"use strict";a.r(e);var s={name:"Leave",metaInfo:function(){return{title:"Leave"}},components:{},layout:a(6).a,props:{event:String}},i=a(1),r=Object(i.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h1",[this._v("Leave")])])}],!1,null,"71151698",null);e.default=r.exports},6:function(t,e,a){"use strict";var s=a(13),i=a(0);function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={name:"Dashboard",metaInfo:{title:"ADU Staff Portal",titleTemplate:"%s | ADU Staff Portal"},props:{userPermissions:{require:!0,type:Array}},computed:o(o({},Object(i.c)(["getDepartments","getOrganizationProfile","getProfile","getAuthUser","getJobTitles"])),{},{authUserName:function(){return"".concat(this.isNull(this.getAuthUser.title)," ").concat(this.getAuthUser.lastName," ").concat(this.getAuthUser.firstName," ").concat(this.isNull(this.getAuthUser.middleName))},authJobTitle:function(){var t=this;if(this.getAuthUser.jobTitle&&this.getJobTitles.length){var e=this.getJobTitles.find((function(e){return e.id===parseInt(t.getAuthUser.jobTitle)}));return e?e.title:""}return""},getLogo:function(){if(this.getOrganizationProfile)return this.getOrganizationProfile.logo},getOrgName:function(){if(this.getOrganizationProfile)return this.getOrganizationProfile.name}}),beforeMount:function(){var t=this;this.activePage=this.$page.url,s.Inertia.on("navigate",(function(e){t.activePage=e.detail.page.url})),localStorage.getItem("locale")?this.$lang.setLocale(localStorage.getItem("locale")):this.$lang.setLocale("en")},created:function(){this.dispatchAuthUser({payload:this.$page.props.authUser}),this.dispatchOrgnizationProfile({payload:this.$page.props.orgInfo})},mounted:function(){},data:function(){return{activePage:"",regex:new RegExp("^/dashboard/ess/[0-9]+/[a-z-]*$")}},methods:o(o({},Object(i.b)(["dispatchOrgnizationProfile","dispatchAuthUser"])),{},{isNull:function(t){return"null"===t?"":t}})},c=(a(82),a(1)),_=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"v-cloak"},[a("div",{staticClass:"brand__logo"},[a("div",{staticClass:"brand__logo__main"},[a("img",{attrs:{src:"/storage/logo/"+t.getLogo,alt:"Brand Logo",srcset:""}})])]),t._v(" "),a("header",{staticClass:"header"},[a("nav",{staticClass:"header__nav"},[a("ul",{staticClass:"header__nav__list header__nav__list--left"},[a("li",{class:"header__nav__list__item "+("/dashboard"===t.activePage?"active-left":"")},[a("inertia-link",{attrs:{href:"/dashboard","preserve-scroll":"",headers:{"Custom-Header":"poopjpo"}}},[t._v(t._s(t.$t("app.dashboard")))])],1),t._v(" "),a("li",{class:"header__nav__list__item "+("/dashboard/ess"===t.activePage||t.regex.test(t.activePage)?"active-left":"")},[a("inertia-link",{attrs:{href:"/dashboard/ess","preserve-scroll":""}},[t._v(t._s(t.$t("app.employee")))])],1),t._v(" "),t.isPermission("view_admin")?a("li",{class:"header__nav__list__item "+("/dashboard/admin"===t.activePage?"active-left":"")},[a("inertia-link",{attrs:{href:"/dashboard/admin","preserve-scroll":""}},[t._v(t._s(t.$t("app.admin")))])],1):t._e(),t._v(" "),t.isPermission("view_pim")?a("li",{class:"header__nav__list__item "+("/dashboard/pim"===t.activePage?"active-left":"")},[a("inertia-link",{attrs:{href:"/dashboard/pim","preserve-scroll":""}},[t._v(t._s(t.$t("app.pim")))])],1):t._e(),t._v(" "),t.isPermission("view_leave")?a("li",{class:"header__nav__list__item "+("/dashboard/leave"===t.activePage?"active-left":"")},[a("inertia-link",{attrs:{href:"/dashboard/leave","preserve-scroll":""}},[t._v(t._s(t.$t("app.leave")))])],1):t._e(),t._v(" "),a("li",{class:"header__nav__list__item "+("/dashboard/kpi"===t.activePage?"active-left":"")},[a("inertia-link",{attrs:{href:"/dashboard/kpi","preserve-scroll":""}},[t._v(t._s(t.$t("app.kpi")))])],1),t._v(" "),a("li",{class:"header__nav__list__item "+("/dashboard/staff-directory"===t.activePage?"active-left":"")},[a("inertia-link",{attrs:{href:"/dashboard/staff-directory","preserve-scroll":""}},[t._v(t._s(t.$t("app.staff_directory")))])],1)]),t._v(" "),a("ul",{staticClass:"header__nav__list header__nav__list--right"},[a("li",{staticClass:"header__nav__list__item"},[a("b-dropdown",{attrs:{"aria-role":"list",position:"is-bottom-left"}},[a("p",{attrs:{slot:"trigger",role:"button"},slot:"trigger"},[a("b-icon",{attrs:{pack:"fas",icon:"exclamation-circle",size:"is-small"}})],1),t._v(" "),a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("a",{staticClass:"default",attrs:{href:"#"}},[t._v(" Notifications")])]),t._v(" "),a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("a",{staticClass:"default",attrs:{href:"#"}},[t._v(" Notifications")])]),t._v(" "),a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("a",{staticClass:"default",attrs:{href:"#"}},[t._v(" Notifications")])]),t._v(" "),a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("a",{staticClass:"default",attrs:{href:"#"}},[t._v(" Notifications")])])],1)],1),t._v(" "),a("li",{staticClass:"header__nav__list__item"},[a("b-dropdown",{attrs:{"aria-role":"list",position:"is-bottom-left"}},[a("p",{attrs:{slot:"trigger",role:"button"},slot:"trigger"},[a("b-icon",{attrs:{pack:"fas",icon:"cogs",size:"is-small"}})],1),t._v(" "),a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("inertia-link",{attrs:{href:"/dashboard/ess","preserve-scroll":""}},[a("b-icon",{attrs:{pack:"fas",icon:"user",size:"is-small"}}),t._v("\n                  "+t._s(t.$t("app.profile"))+"\n              ")],1)],1),t._v(" "),a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("inertia-link",{staticClass:"logout-btn",attrs:{href:"/logout",method:"POST",as:"button"}},[a("b-icon",{attrs:{pack:"fas",icon:"sign-out-alt",size:"is-small"}}),t._v("\n                  "+t._s(t.$t("app.logout")))],1)],1)],1)],1)])]),t._v(" "),a("div",{staticClass:"header__details"},[a("div",{staticClass:"header__details__avatar"},[a("div",{staticClass:"header__details__avatar__round"},[a("img",{attrs:{src:"/storage/avatar/"+t.getAuthUser.avatar,alt:"avatar",srcset:""}})])]),t._v(" "),a("div",{staticClass:"header__details__staff"},[a("strong",{staticClass:"header__details__staff__name"},[a("span",[t._v(t._s(t.authUserName))])]),t._v(" "),a("h4",{staticClass:"header__details__staff__title"},[a("span",[t._v(t._s(t.authJobTitle))])])]),t._v(" "),a("div",{staticClass:"header__details__brand__name"},[a("h4",[t._v(t._s(t.getOrgName))])])])]),t._v(" "),[t._t("default")],t._v(" "),a("vue-confirm-dialog")],2)}),[],!1,null,"4aa382c1",null);e.a=_.exports},82:function(t,e,a){"use strict";a(26)},83:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,"[v-cloak][data-v-4aa382c1]{display:none}.logout-btn[data-v-4aa382c1]{border:none;background-color:transparent;color:#686767;cursor:pointer}.logout-btn[data-v-4aa382c1]:active{border:none}",""])}}]);