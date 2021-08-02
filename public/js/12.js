(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
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
  name: "PasswordReset",
  metaInfo: function metaInfo() {
    return {
      title: "Password Reset | ADU Staff Portal"
    };
  },
  computed: {},
  props: {
    token: String,
    email: String
  },
  data: function data() {
    return {
      credentials: {
        username: this.email,
        password: "",
        password_confirmation: "",
        token: this.token
      },
      usernameError: "",
      passwordError: "",
      recovering: false
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      this.recovering = true;
      this.usernameError = "";
      this.passwordError = "";
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].post("/password-reset", this.credentials, {
        errorBag: "recoverPassword",
        onError: function onError(err) {
          _this.recovering = false;
          _this.usernameError = err.username ? err.username : "";
          _this.passwordError = err.password ? err.password : "";
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "login__container" }, [
    _c("section", { staticClass: "login__container__panel__wrapper" }, [
      _c("div", { staticClass: "login__container__panel" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "login__container__panel__form" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "login__container__panel__form__container" },
            [
              _c(
                "div",
                {
                  staticClass: "login__container__panel__form__container__body"
                },
                [
                  _c("div", { staticStyle: { width: "100%" } }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.login()
                          }
                        }
                      },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Enter your username",
                              type: {
                                "is-danger": _vm.usernameError.length > 0
                              },
                              message: _vm.usernameError
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: {
                                expanded: "",
                                type: "email",
                                autocomplete: "email",
                                pack: "fas",
                                icon: "envelope",
                                placeholder: "yourstaffemail@gmail.com"
                              },
                              model: {
                                value: _vm.credentials.username,
                                callback: function($$v) {
                                  _vm.$set(_vm.credentials, "username", $$v)
                                },
                                expression: "credentials.username"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-field",
                          {
                            attrs: {
                              type: {
                                "is-danger": _vm.passwordError.length > 0
                              },
                              message: _vm.passwordError,
                              label: "Enter new password"
                            }
                          },
                          [
                            _c("b-input", {
                              staticClass: "is-dander",
                              attrs: {
                                expanded: "",
                                type: "password",
                                pack: "fas",
                                icon: "key",
                                placeholder: "New Password",
                                autocomplete: "current-password",
                                autofocus: ""
                              },
                              model: {
                                value: _vm.credentials.password,
                                callback: function($$v) {
                                  _vm.$set(_vm.credentials, "password", $$v)
                                },
                                expression: "credentials.password"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-field",
                          {
                            attrs: {
                              type: {
                                "is-danger": _vm.passwordError.length > 0
                              },
                              label: "Confirm New password"
                            }
                          },
                          [
                            _c("b-input", {
                              staticClass: "is-dander",
                              attrs: {
                                expanded: "",
                                type: "password",
                                pack: "fas",
                                icon: "key",
                                placeholder: "Confirm New Password",
                                autocomplete: "current-password"
                              },
                              model: {
                                value: _vm.credentials.password_confirmation,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.credentials,
                                    "password_confirmation",
                                    $$v
                                  )
                                },
                                expression: "credentials.password_confirmation"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "login-button" }, [
                          _c(
                            "button",
                            {
                              staticClass: "button is-primary",
                              attrs: {
                                type: "submit",
                                disabled: _vm.recovering
                              }
                            },
                            [
                              _vm._v(
                                "\n                    Recover\n                  "
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    )
                  ])
                ]
              )
            ]
          )
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
    return _c("div", { staticClass: "login__container__panel__logo" }, [
      _c("img", {
        attrs: { src: "/storage/logo/login.png", alt: "", srcset: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "login__container__panel__form__header" }, [
      _c(
        "div",
        { staticClass: "login__container__panel__form__header__text" },
        [_c("h4", [_vm._v("Recover Password")])]
      )
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

/***/ "./resources/js/Pages/PasswordReset.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/PasswordReset.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordReset.vue?vue&type=template&id=73e6829b& */ "./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b&");
/* harmony import */ var _PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordReset.vue?vue&type=script&lang=js& */ "./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/PasswordReset.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordReset.vue?vue&type=template&id=73e6829b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);