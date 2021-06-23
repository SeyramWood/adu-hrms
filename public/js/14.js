(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/StaffDirectory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/StaffDirectory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dashboard */ "./resources/js/components/Dashboard.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "StaffDirectory",
  layout: _components_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"],
  metaInfo: function metaInfo() {
    return {
      title: "Staff Directory"
    };
  },
  components: {// Layout,
  },
  props: {
    staffList: Array
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getStaffList"])),
  created: function created() {
    this.dispatchStaff({
      payload: this.staffList
    });
  },
  mounted: function mounted() {
    console.log(this.getStaffList);
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchStaff"])), {}, {
    getFullName: function getFullName(details) {
      return "".concat(details.title || "", " ").concat(details.lastName || "", " ").concat(details.firstName || "", " ").concat(details.middleName || "");
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/StaffDirectory.vue?vue&type=template&id=28bbeed6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/StaffDirectory.vue?vue&type=template&id=28bbeed6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "staff__directory__container" }, [
    _c(
      "div",
      { staticClass: "staff__directory__container__search" },
      [
        _c(
          "b-field",
          [
            _c("b-input", {
              attrs: {
                placeholder: "Search staff...",
                type: "search",
                "icon-pack": "fas",
                icon: "search",
                size: "is-medium"
              }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "staff__directory__container__results" },
      _vm._l(_vm.getStaffList, function(staff) {
        return _c(
          "div",
          {
            key: staff.id,
            staticClass: "staff__directory__container__results__card"
          },
          [
            _c("div", { staticClass: "avatar" }, [
              _c("img", {
                attrs: {
                  src: "/storage/avatar/" + staff.personal_details.avatar,
                  alt: "avatar",
                  srcset: ""
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "info" },
              [
                _c("article", { staticClass: "info__details info--header" }, [
                  _c("strong", [
                    _vm._v(_vm._s(_vm.getFullName(staff.personal_details)))
                  ])
                ]),
                _vm._v(" "),
                _c("article", { staticClass: "info__details" }, [
                  _c("span", [_vm._v(_vm._s(staff.department))])
                ]),
                _vm._v(" "),
                _c("article", { staticClass: "info__details" }, [
                  _c("a", { attrs: { href: "mailto:" + staff.email } }, [
                    _vm._v(_vm._s(staff.email))
                  ])
                ]),
                _vm._v(" "),
                _c("article", { staticClass: "info__details mb-4" }, [
                  _c("a", { attrs: { href: "tel:+" + "233265518694" } }, [
                    _vm._v("0265518694")
                  ])
                ]),
                _vm._v(" "),
                _vm.$page.props.userRoles.includes("Admin")
                  ? _c(
                      "inertia-link",
                      {
                        attrs: {
                          href:
                            "" +
                            (_vm.$page.props.authUser.id === staff.id
                              ? "/dashboard/ess"
                              : "/dashboard/ess/" +
                                staff.id +
                                "/" +
                                staff.slug),
                          "preserve-scroll": ""
                        }
                      },
                      [
                        _c(
                          "b-button",
                          { attrs: { type: "is-info is-light", size: "" } },
                          [_vm._v("View profile")]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.$page.props.authUser.id === staff.id &&
                !_vm.$page.props.userRoles.includes("Admin")
                  ? _c(
                      "inertia-link",
                      {
                        attrs: { href: "/dashboard/ess", "preserve-scroll": "" }
                      },
                      [
                        _c(
                          "b-button",
                          { attrs: { type: "is-info is-light", size: "" } },
                          [_vm._v("View profile")]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/StaffDirectory.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/StaffDirectory.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StaffDirectory_vue_vue_type_template_id_28bbeed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaffDirectory.vue?vue&type=template&id=28bbeed6&scoped=true& */ "./resources/js/Pages/StaffDirectory.vue?vue&type=template&id=28bbeed6&scoped=true&");
/* harmony import */ var _StaffDirectory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaffDirectory.vue?vue&type=script&lang=js& */ "./resources/js/Pages/StaffDirectory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StaffDirectory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StaffDirectory_vue_vue_type_template_id_28bbeed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StaffDirectory_vue_vue_type_template_id_28bbeed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "28bbeed6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/StaffDirectory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/StaffDirectory.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/StaffDirectory.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffDirectory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StaffDirectory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/StaffDirectory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffDirectory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/StaffDirectory.vue?vue&type=template&id=28bbeed6&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/StaffDirectory.vue?vue&type=template&id=28bbeed6&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffDirectory_vue_vue_type_template_id_28bbeed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./StaffDirectory.vue?vue&type=template&id=28bbeed6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/StaffDirectory.vue?vue&type=template&id=28bbeed6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffDirectory_vue_vue_type_template_id_28bbeed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StaffDirectory_vue_vue_type_template_id_28bbeed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);