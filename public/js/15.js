(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Dashboard */ "./resources/js/components/Dashboard.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: "Dashboard",
  metaInfo: function metaInfo() {
    return {
      title: "Welcome"
    };
  },
  components: {// Layout,
  },
  layout: _components_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    staffCount: Object,
    branches: Array,
    departments: Array,
    units: Array
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["getBranches", "getDepartments", "getUnits", "getStaffCount"])),
  created: function created() {
    this.dispatchStaffCount({
      payload: this.staffCount
    });
    this.dispatchBranch({
      payload: this.branches
    });
    this.dispatchDepartment({
      payload: this.departments
    });
    this.dispatchUnit({
      payload: this.units
    });
  },
  beforeMount: function beforeMount() {},
  data: function data() {
    return {
      date: new Date(),
      disableWeekends: false,
      data: [{
        staff: "Jesse",
        username: "username",
        ip: "127.0.0.1",
        date: "2016-10-15 13:43:27"
      }, {
        staff: "John",
        username: "Jacobs",
        ip: "127.0.0.1",
        date: "2016-10-15 13:43:27"
      }, {
        staff: "Tina",
        username: "Gilbert",
        ip: "127.0.0.1",
        date: "2016-10-15 13:43:27"
      }, {
        staff: "Clarence",
        username: "Flores",
        ip: "127.0.0.1",
        date: "2016-10-15 13:43:27"
      }, {
        staff: "Anne",
        username: "Lee",
        ip: "127.0.0.1",
        date: "2016-10-15 13:43:27"
      }],
      columns: [{
        field: "staff",
        label: "Staff"
      }, {
        field: "username",
        label: "Username"
      }, {
        field: "ip",
        label: "IP"
      }, {
        field: "date",
        label: "Login Date",
        centered: true
      }]
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["dispatchStaffCount", "dispatchBranch", "dispatchDepartment", "dispatchUnit"]))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "dashboard__wrapper" }, [
    _c("div", { staticClass: "dashboard__cards" }, [
      _c("div", { staticClass: "dashboard__cards__card c--3" }, [
        _c("div", { staticClass: "card gradient--1" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "content" }, [
              _c("div", { staticClass: "ui__card" }, [
                _c("div", { staticClass: "ui__card__content" }, [
                  _c(
                    "div",
                    { staticClass: "ui__card__content__icon" },
                    [_c("b-icon", { attrs: { icon: "users" } })],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ui__card__link" },
                  [
                    _c("inertia-link", [_vm._v("View Staff")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("→")])
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dashboard__cards__card c--3" }, [
        _c("div", { staticClass: "card gradient--2" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "content" }, [
              _c("div", { staticClass: "ui__card" }, [
                _c("div", { staticClass: "ui__card__content" }, [
                  _c(
                    "div",
                    { staticClass: "ui__card__content__icon" },
                    [_c("b-icon", { attrs: { icon: "building" } })],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(1)
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ui__card__link" },
                  [
                    _c("inertia-link", [_vm._v("View Departments")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("→")])
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dashboard__cards__card c--3" }, [
        _c("div", { staticClass: "card gradient--3" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "content" }, [
              _c("div", { staticClass: "ui__card" }, [
                _c("div", { staticClass: "ui__card__content" }, [
                  _c(
                    "div",
                    { staticClass: "ui__card__content__icon" },
                    [_c("b-icon", { attrs: { icon: "umbrella" } })],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(2)
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ui__card__link" },
                  [
                    _c("inertia-link", [_vm._v("View Units")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("→")])
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dashboard__cards__card c--3" }, [
        _c("div", { staticClass: "card gradient--4" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "content" }, [
              _c("div", { staticClass: "ui__card" }, [
                _c("div", { staticClass: "ui__card__content" }, [
                  _c(
                    "div",
                    { staticClass: "ui__card__content__icon" },
                    [_c("b-icon", { attrs: { icon: "city" } })],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(3)
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ui__card__link" },
                  [
                    _c("inertia-link", [_vm._v("View Branches")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("→")])
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "dashboard__cards" }, [
      _c("div", { staticClass: "dashboard__cards__card c--6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _c("p", {}, [_vm._v("Recent Access Logs")]),
                _vm._v(" "),
                _c("b-table", {
                  attrs: { data: _vm.data, columns: _vm.columns }
                })
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dashboard__cards__card c--3" },
        [
          _c("b-datepicker", {
            attrs: {
              inline: "",
              "unselectable-days-of-week": _vm.disableWeekends ? [0, 6] : null
            },
            model: {
              value: _vm.date,
              callback: function($$v) {
                _vm.date = $$v
              },
              expression: "date"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dashboard__cards__card c--3" }, [
        _c("div", { staticClass: "dashboard__cards" }, [
          _c("div", { staticClass: "dashboard__cards__card c--6" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c(
                    "div",
                    { staticClass: "side_card" },
                    [
                      _c(
                        "span",
                        {},
                        [_c("b-icon", { attrs: { icon: "user-friends" } })],
                        1
                      ),
                      _vm._v(" "),
                      _c("inertia-link", { attrs: { href: "#" } }, [
                        _vm._v("Organization")
                      ])
                    ],
                    1
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dashboard__cards__card c--6" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c(
                    "div",
                    { staticClass: "side_card" },
                    [
                      _c(
                        "span",
                        {},
                        [_c("b-icon", { attrs: { icon: "cogs" } })],
                        1
                      ),
                      _vm._v(" "),
                      _c("inertia-link", { attrs: { href: "#" } }, [
                        _vm._v("Admin")
                      ])
                    ],
                    1
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dashboard__cards__card c--6" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c(
                    "div",
                    { staticClass: "side_card" },
                    [
                      _c(
                        "span",
                        {},
                        [_c("b-icon", { attrs: { icon: "user-cog" } })],
                        1
                      ),
                      _vm._v(" "),
                      _c("inertia-link", { attrs: { href: "#" } }, [
                        _vm._v("Profile")
                      ])
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui__card__content__text" }, [
      _c("p", [_vm._v("5465")]),
      _vm._v(" "),
      _c("p", [_vm._v("Total Staff")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui__card__content__text" }, [
      _c("p", [_vm._v("5465")]),
      _vm._v(" "),
      _c("p", [_vm._v("Departments")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui__card__content__text" }, [
      _c("p", [_vm._v("5465")]),
      _vm._v(" "),
      _c("p", [_vm._v("Units")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ui__card__content__text" }, [
      _c("p", [_vm._v("5465")]),
      _vm._v(" "),
      _c("p", [_vm._v("Branches")])
    ])
  }
]
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

/***/ "./resources/js/Pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=097ba13b& */ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=097ba13b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);