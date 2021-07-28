(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ESS.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ESS.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dashboard */ "./resources/js/components/Dashboard.vue");
/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tab */ "./resources/js/components/Tab.vue");
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tabs */ "./resources/js/components/Tabs.vue");
/* harmony import */ var _components_ess_ProfileComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ess/ProfileComponent */ "./resources/js/components/ess/ProfileComponent.vue");
/* harmony import */ var _components_ess_MyLeaveComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ess/MyLeaveComponent */ "./resources/js/components/ess/MyLeaveComponent.vue");
/* harmony import */ var _components_ess_MyEntitlementComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ess/MyEntitlementComponent */ "./resources/js/components/ess/MyEntitlementComponent.vue");
/* harmony import */ var _components_ess_ConfigurationComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ess/ConfigurationComponent */ "./resources/js/components/ess/ConfigurationComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ESS",
  metaInfo: function metaInfo() {
    return {
      title: "Employee Self Service"
    };
  },
  components: {
    Tab: _components_Tab__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tabs: _components_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProfileComponent: _components_ess_ProfileComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    MyLeaveComponent: _components_ess_MyLeaveComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    MyEntitlementComponent: _components_ess_MyEntitlementComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    ConfigurationComponent: _components_ess_ConfigurationComponent__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  layout: _components_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    profile: {
      require: true,
      type: Object
    },
    jobCategories: Array,
    jobTitles: Array,
    employmentStatuses: Array,
    branches: Array,
    departments: Array,
    units: Array,
    positions: Array,
    supervisors: Array,
    hods: Array,
    managers: Array,
    reportTo: Array,
    reportToMe: Array,
    directorates: Array
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])(["getProfile", "getJobCategories", "getJobTitles", "getEmploymentStatus", "getDepartments", "getUnits", "getCountries"])),
  beforeMount: function beforeMount() {},
  created: function created() {
    this.dispatchProfile({
      payload: this.profile
    });
    this.dispatchJobCategory({
      payload: this.jobCategories
    });
    this.dispatchJobTitle({
      payload: this.jobTitles
    });
    this.dispatchEmploymentStatus({
      payload: this.employmentStatuses
    });
    this.dispatchDepartment({
      payload: this.departments
    });
    this.dispatchUnit({
      payload: this.units
    });
    this.dispatchPosition({
      payload: this.positions
    });
    this.dispatchProfile({
      type: "ADD_MY_LEADERS",
      payload: {
        supervisors: this.supervisors,
        hods: this.hods,
        reportTo: this.reportTo,
        reportToMe: this.reportToMe,
        directorates: this.directorates
      }
    });
    this.getAllCountries();
  },
  data: function data() {
    return {
      tabIndex: 0,
      regex: new RegExp("^/dashboard/ess/[0-9]+/[a-z-]*$"),
      countries: []
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapActions"])(["dispatchProfile", "dispatchJobCategory", "dispatchJobTitle", "dispatchEmploymentStatus", "dispatchDepartment", "dispatchUnit", "dispatchPosition", "dispatchMyLeaders", "dispatchCountry"])), {}, {
    getUserDepartment: function getUserDepartment(profile) {
      if (profile.job && profile.job.department) {
        var result = this.getDepartments.find(function (b) {
          return b.id === parseInt(profile.job.department);
        });
        return result.name;
      }

      if (profile.job && profile.job.unit) {
        var _result = this.getUnits.find(function (b) {
          return b.id === parseInt(profile.job.unit);
        });

        return _result.name;
      }

      return "";
    },
    getEmpStatus: function getEmpStatus(profile) {
      if (profile.job) {
        var status = this.getEmploymentStatus.find(function (b) {
          return b.id === parseInt(profile.job.employmentStatus);
        });
        return status.status;
      }

      return "";
    },
    getAllCountries: function getAllCountries() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!localStorage.getItem("countries")) {
                  localStorage.setItem("countries", JSON.stringify([]));
                }

                if (!(JSON.parse(localStorage.getItem("countries")).length === 0)) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return _this.$axios.get("https://restcountries.eu/rest/v2/all");

              case 5:
                data = _context.sent;
                localStorage.setItem("countries", JSON.stringify(data.data));
                _context.next = 11;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);

              case 11:
                _context.next = 14;
                break;

              case 13:
                _this.dispatchCountry({
                  payload: JSON.parse(localStorage.getItem("countries"))
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ViewPdf.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ViewPdf.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_pdf_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-pdf-app */ "./node_modules/vue-pdf-app/dist/vue-pdf-app.umd.js");
/* harmony import */ var vue_pdf_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_pdf_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_pdf_app_dist_icons_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-pdf-app/dist/icons/main.css */ "./node_modules/vue-pdf-app/dist/icons/main.css");
/* harmony import */ var vue_pdf_app_dist_icons_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_pdf_app_dist_icons_main_css__WEBPACK_IMPORTED_MODULE_1__);
//
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
  name: "ViewPdf",
  components: {
    VuePdfApp: vue_pdf_app__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  computed: {
    getFile: function getFile() {
      return this.file;
    }
  },
  props: {
    file: {
      required: true
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    pagesRendered: function pagesRendered(pdfApp) {
      setTimeout(function () {
        return pdfApp.pdfViewer.currentScaleValue = "page-height";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ConfigurationComponent",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])([])),
  beforeMount: function beforeMount() {
    this.authUser = this.$page.props.authUser;
  },
  mounted: function mounted() {// console.log(this.$lang.getLocale());
  },
  created: function created() {
    var _this = this;

    this.$watch(function () {
      return _this.locale;
    }, function (value) {
      if (value) {
        _this.changeLocale(value);
      }
    });
  },
  data: function data() {
    return {
      isUpdatingPassword: false,
      openChangePassword: true,
      openChangeLanguage: true,
      authUser: null,
      locale: this.$lang.getLocale(),
      languages: [{
        name: "English",
        locale: "en"
      }, {
        name: "French",
        locale: "fr"
      }],
      credentials: {
        current_password: "",
        new_password: "",
        confirm_new_password: ""
      },
      credentialErrors: {
        current_password: [],
        new_password: [],
        confirm_new_password: []
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])([])), {}, {
    changePassword: function changePassword() {
      var _this2 = this;

      this.setCredentialErrors();
      this.isUpdatingPassword = true;
      this.$axios.put("/change-password", this.credentials).then(function (res) {
        _this2.isUpdatingPassword = false;

        if (res.status === 200 && res.data.changed) {
          _this2.clearCredentials();

          _this2.snackbar("Your password was successfuly changed.", "is-dark");
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this2.isUpdatingPassword = false, _this2.setCredentialErrors(err.response.data.errors);
        }
      });
    },
    cancelChangePassword: function cancelChangePassword() {
      this.openChangePassword = false;
      this.clearCredentials();
      this.setCredentialErrors();
    },
    clearCredentials: function clearCredentials() {
      this.credentials = {
        current_password: "",
        new_password: "",
        confirm_new_password: ""
      };
    },
    setCredentialErrors: function setCredentialErrors() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.credentialErrors = {
        current_password: obj.current_password || [],
        new_password: obj.new_password || [],
        confirm_new_password: obj.confirm_new_password || []
      };
    },
    changeLocale: function changeLocale(locale) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this3.$axios.get("/lang/".concat(locale));

              case 3:
                res = _context.sent;

                if (res.status === 200) {
                  _this3.$lang.setLocale(locale);

                  localStorage.setItem("locale", locale);
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.trace(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MyEntitlementComponent",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getLeaves", "getLeaveBalance", "getAuthUser"])), {}, {
    authUserLeaves: function authUserLeaves() {
      var _this = this;

      var leaves = [];
      this.getLeaveBalance.forEach(function (leave) {
        if (leave.user_id === _this.getAuthUser.id) {
          leaves = leave.entitlement;
        }
      });
      return leaves;
    }
  }),
  created: function created() {
    this.fetchLeaves();
    this.fetchLeaveBalance();
  },
  data: function data() {
    return {
      isPaginated: true,
      isPaginationSimple: true,
      paginationPosition: "bottom",
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 5
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["fetchLeaves", "fetchLeaveBalance"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyLeaveComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/MyLeaveComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "MyLeaveComponent",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getLeaves", "getPersonalDetails", "getAuthUser", "getLeaveBalance", "getProfile", "getMyLeaveRequest"])), {}, {
    authUserLeaves: function authUserLeaves() {
      var _this = this;

      var leaves = [];
      this.getLeaveBalance.forEach(function (leave) {
        if (leave.user_id === _this.getAuthUser.id) {
          leaves = leave.entitlement;
        }
      });
      return leaves;
    },
    newBalance: function newBalance() {
      return +(Math.round(this.leaveRequest.availableBalance - this.leaveRequest.total + "e+2") + "e-2");
    }
  }),
  created: function created() {
    var _this2 = this;

    this.fetchLeaves();
    this.fetchLeaveBalance();
    this.fetchMyLeaveRequest();
    this.$watch(function () {
      return _this2.leaveRequest.leaveType;
    }, function (value) {
      var leave = _this2.authUserLeaves.find(function (val) {
        return val.name === value;
      });

      _this2.leaveRequest.availableBalance = +(Math.round(leave.accrual + "e+2") + "e-2");
      _this2.leaveCount = leave.leaveCount;
    });
    this.$watch(function () {
      return _this2.leaveRequest.from;
    }, function (value) {
      _this2.leaveRequest.total = _this2.formatDurationInDay(value, _this2.leaveRequest.to);
    });
    this.$watch(function () {
      return _this2.leaveRequest.to;
    }, function (value) {
      _this2.leaveRequest.total = _this2.formatDurationInDay(_this2.leaveRequest.from, value);
    });
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      isPaginated: true,
      isPaginationSimple: true,
      paginationPosition: "bottom",
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 5,
      isSubmittingApplyLeave: false,
      isToggleApplyLeaveForm: false,
      leaveCount: undefined,
      insufficientBalanceError: "",
      leaveRequest: {
        leaveType: "",
        from: new Date(),
        to: new Date(),
        total: "",
        newBalance: undefined,
        availableBalance: undefined,
        reason: ""
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["fetchLeaves", "fetchLeaveBalance", "fetchMyLeaveRequest"])), {}, {
    applyLeave: function applyLeave() {
      var _this3 = this;

      this.isSubmittingApplyLeave = true;
      this.leaveRequest.newBalance = this.newBalance; //   this.$axios
      //     .post(`/dashboard/add-leave-request`, this.leaveRequest)
      //     .then((res) => {
      //       this.fetchMyLeaveRequest();
      //       setTimeout(() => {
      //         this.toast("Request sent successfully", "is-dark");
      //         this.isSubmittingApplyLeave = false;
      //       }, 1000);
      //     })
      //     .catch((err) => {
      //       if (err.response.status === 422) {
      //         console.log(err.response.data.errors);
      //         this.isSubmittingApplyLeave = false;
      //       }
      //     });

      if (this.leaveRequest.availableBalance >= this.leaveCount) {
        this.leaveRequest.newBalance = this.newBalance;
        this.$axios.post("/dashboard/add-leave-request", this.leaveRequest).then(function (res) {
          _this3.fetchMyLeaveRequest();

          setTimeout(function () {
            _this3.toast("Request sent successfully", "is-dark");
          }, 1000);
        })["catch"](function (err) {
          if (err.response.status === 422) {
            console.log(err.response.data.errors);
          }

          _this3.isSubmittingApplyLeave = false;
        });
      } else {
        this.insufficientBalanceError = "In sufficient leave balance, ".concat(this.leaveCount, " days or more is required to make the request");
        setTimeout(function () {
          _this3.insufficientBalanceError = "";
          _this3.isSubmittingApplyLeave = false;
        }, 5000);
      }
    },
    cancelApplyLeaveFrom: function cancelApplyLeaveFrom() {
      this.isToggleApplyLeaveForm = !this.isToggleApplyLeaveForm;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ProfileComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/ProfileComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _profile_PersonalDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/PersonalDetails */ "./resources/js/components/ess/profile/PersonalDetails.vue");
/* harmony import */ var _profile_ContactDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/ContactDetails */ "./resources/js/components/ess/profile/ContactDetails.vue");
/* harmony import */ var _profile_EmergencyContactDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/EmergencyContactDetails */ "./resources/js/components/ess/profile/EmergencyContactDetails.vue");
/* harmony import */ var _profile_JobDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/JobDetails */ "./resources/js/components/ess/profile/JobDetails.vue");
/* harmony import */ var _profile_QualificationDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/QualificationDetails */ "./resources/js/components/ess/profile/QualificationDetails.vue");
/* harmony import */ var _profile_ReportToDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/ReportToDetails */ "./resources/js/components/ess/profile/ReportToDetails.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProfileComponent",
  components: {
    PersonalDetails: _profile_PersonalDetails__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContactDetails: _profile_ContactDetails__WEBPACK_IMPORTED_MODULE_2__["default"],
    EmergencyContactDetails: _profile_EmergencyContactDetails__WEBPACK_IMPORTED_MODULE_3__["default"],
    JobDetails: _profile_JobDetails__WEBPACK_IMPORTED_MODULE_4__["default"],
    QualificationDetails: _profile_QualificationDetails__WEBPACK_IMPORTED_MODULE_5__["default"],
    ReportToDetails: _profile_ReportToDetails__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  computed: {},
  beforeMount: function beforeMount() {},
  created: function created() {},
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ContactDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/ContactDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ContactDetails",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getProfile", "getCountries"])),
  created: function created() {},
  beforeMount: function beforeMount() {
    this.setContactDetails(this.getProfile.contact_details);
  },
  data: function data() {
    return {
      locale: this.$lang.getLocale(),
      isEditContactDetails: true,
      isSubmittingContactDetails: false,
      contactDetails: {
        address1: "",
        address2: "",
        city: "",
        region: "",
        country: "",
        mobile: "",
        homeTelephone: "",
        workTelephone: "",
        workEmail: "",
        otherEmail: ""
      },
      contactDetailsErrors: {
        address1: [],
        address2: [],
        city: [],
        region: [],
        country: [],
        mobile: [],
        homeTelephone: [],
        workTelephone: [],
        workEmail: [],
        otherEmail: []
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchProfile"])), {}, {
    deleteContractDetails: function deleteContractDetails(index) {
      this.job.contractDetails.splice(index, 1);
    },
    updateContactDetails: function updateContactDetails() {
      var _this = this;

      this.setContactDetailsErrors();
      this.isSubmittingContactDetails = true;
      this.$axios.put("/dashboard/ess/update-contact-details/".concat(this.getProfile.user_id), this.contactDetails).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this.isSubmittingContactDetails = false;

          _this.dispatchProfile({
            type: "UPDATE_CONTACT_DETAILS",
            payload: _this.contactDetails
          });

          _this.snackbar("Contact details updated successfully", "is-dark");
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this.isSubmittingContactDetails = false;

            _this.setContactDetailsErrors(err.response.data.errors);
          }, 1000);
        }
      });
    },
    setContactDetailsErrors: function setContactDetailsErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.contactDetailsErrors.address1 = error.address1 ? error.address1 : [];
      this.contactDetailsErrors.address2 = error.address2 ? error.address2 : [];
      this.contactDetailsErrors.city = error.city ? error.city : [];
      this.contactDetailsErrors.region = error.region ? error.region : [];
      this.contactDetailsErrors.country = error.country ? error.country : [];
      this.contactDetailsErrors.mobile = error.mobile ? error.mobile : [];
      this.contactDetailsErrors.homeTelephone = error.homeTelephone ? error.homeTelephone : [];
      this.contactDetailsErrors.workTelephone = error.workTelephone ? error.workTelephone : [];
      this.contactDetailsErrors.workEmail = error.workEmail ? error.workEmail : [];
      this.contactDetailsErrors.otherEmail = error.otherEmail ? error.otherEmail : [];
    },
    cancelContactDetailsForm: function cancelContactDetailsForm() {
      this.contactDetailsErrors.address1 = [];
      this.contactDetailsErrors.address2 = [];
      this.contactDetailsErrors.city = [];
      this.contactDetailsErrors.region = [];
      this.contactDetailsErrors.country = [];
      this.contactDetailsErrors.mobile = [];
      this.contactDetailsErrors.homeTelephone = [];
      this.contactDetailsErrors.workTelephone = [];
      this.contactDetailsErrors.workEmail = [];
      this.contactDetailsErrors.otherEmail = [];
      this.isEditContactDetails = !this.isEditContactDetails;
      this.setContactDetails();
    },
    setEmergencyContactErrors: function setEmergencyContactErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.emergencyContactErrors.name = error.name ? error.name : [];
      this.emergencyContactErrors.relationship = error.relationship ? error.relationship : [];
      this.emergencyContactErrors.mobile = error.mobile ? error.mobile : [];
      this.emergencyContactErrors.homeTelephone = error.homeTelephone ? error.homeTelephone : [];
      this.emergencyContactErrors.workTelephone = error.workTelephone ? error.workTelephone : [];
    },
    setContactDetails: function setContactDetails(contact) {
      if (contact !== null) {
        this.contactDetails = {
          address1: contact.address1,
          address2: contact.address2,
          city: contact.city,
          region: contact.region,
          country: contact.country,
          mobile: contact.mobile,
          homeTelephone: contact.homeTelephone,
          workTelephone: contact.workTelephone,
          workEmail: contact.workEmail,
          otherEmail: contact.otherEmail
        };
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ContactDetails",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getProfile"])), {}, {
    getContactDropperId: function getContactDropperId() {
      return this.contactDropperId;
    }
  }),
  created: function created() {},
  data: function data() {
    return {
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      closeEmergencyContactDetailsForm: false,
      isSubmittingEmergencyContact: false,
      contactDropperId: null,
      emergencyContact: {
        name: "",
        relationship: "",
        mobile: "",
        homeTelephone: "",
        workTelephone: ""
      },
      emergencyContactErrors: {
        name: [],
        relationship: [],
        mobile: [],
        homeTelephone: [],
        workTelephone: []
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchProfile"])), {}, {
    openContactDropper: function openContactDropper(data) {
      this.contactDropperId = data.id;
      var dropper = this.$refs.contactDropper;

      if (dropper) {
        this.emergencyContact = {
          name: data.name,
          relationship: data.relationship,
          mobile: data.mobile,
          homeTelephone: data.homeTelephone,
          workTelephone: data.workTelephone
        };
        dropper.open();
      }
    },
    closeContactDropper: function closeContactDropper() {
      var dropper = this.$refs.contactDropper;

      if (dropper) {
        this.cancelEmergencyContactDetailsForm();
        dropper.close();
      }
    },
    addEmergencyContact: function addEmergencyContact() {
      var _this = this;

      this.setEmergencyContactErrors();
      this.isSubmittingEmergencyContact = true;
      this.$axios.put("/dashboard/ess/add-emergency-contact/".concat(this.getProfile.user_id), this.emergencyContact).then(function (res) {
        if (res.status === 200 && res.data.added) {
          _this.clearEmergencyForm();

          _this.isSubmittingEmergencyContact = false;

          _this.dispatchProfile({
            type: "ADD_EMERGENCY_CONTACT_DETAILS",
            payload: JSON.parse(res.data.contacts)
          });

          _this.snackbar("Contact added successfully", "is-dark");
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this.setEmergencyContactErrors(err.response.data.errors);

            _this.isSubmittingEmergencyContact = false;
          }, 1000);
        }
      });
    },
    updateEmergencyContact: function updateEmergencyContact() {
      var _this2 = this;

      this.setEmergencyContactErrors();
      this.isSubmittingEmergencyContact = true;
      this.$axios.put("/dashboard/ess/update-emergency-contact/".concat(this.getProfile.user_id, "/").concat(this.contactDropperId), this.emergencyContact).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this2.isSubmittingEmergencyContact = false;

          _this2.dispatchProfile({
            type: "UPDATE_EMERGENCY_CONTACT_DETAILS",
            payload: _objectSpread(_objectSpread({}, _this2.emergencyContact), {}, {
              id: _this2.contactDropperId
            })
          });

          _this2.snackbar("Contact updated successfully", "is-dark");
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this2.setEmergencyContactErrors(err.response.data.errors);

            _this2.isSubmittingEmergencyContact = false;
          }, 1000);
        }
      });
    },
    deleteEmergencyContact: function deleteEmergencyContact(id) {
      var _this3 = this;

      this.$axios["delete"]("/dashboard/ess/delete-emergency-contact/".concat(this.getProfile.user_id, "/").concat(id)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this3.dispatchProfile({
            type: "DELETE_EMERGENCY_CONTACT_DETAILS",
            payload: _this3.contactDropperId
          });

          _this3.snackbar("Contact deleted successfully", "is-dark");
        }
      })["catch"](function (err) {});
    },
    cancelEmergencyContactDetailsForm: function cancelEmergencyContactDetailsForm() {
      this.emergencyContactErrors.name = [];
      this.emergencyContactErrors.relationship = [];
      this.emergencyContactErrors.mobile = [];
      this.emergencyContactErrors.homeTelephone = [];
      this.emergencyContactErrors.workTelephone = [];
      this.closeEmergencyContactDetailsForm = false;
      this.clearEmergencyForm();
    },
    clearEmergencyForm: function clearEmergencyForm() {
      this.emergencyContact.name = "";
      this.emergencyContact.relationship = "";
      this.emergencyContact.mobile = "";
      this.emergencyContact.homeTelephone = "";
      this.emergencyContact.workTelephone = "";
    },
    setEmergencyContactErrors: function setEmergencyContactErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.emergencyContactErrors = {
        name: error.name || [],
        relationship: error.relationship || [],
        mobile: error.mobile || [],
        homeTelephone: error.homeTelephone || [],
        workTelephone: error.workTelephone || []
      };
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/JobDetails.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/JobDetails.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ViewPdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ViewPdf */ "./resources/js/components/ViewPdf.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "JobDetails",
  components: {
    ViewPdf: _ViewPdf__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getProfile", "getJobCategories", "getJobTitles", "getEmploymentStatus", "getDepartments", "getUnits", "getPositions"])), {}, {
    filteredJobTitles: function filteredJobTitles() {
      return this.jTitles;
    }
  }),
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    this.setJob(this.getProfile.job);
    this.$watch(function () {
      return _this.job.category;
    }, function (value) {
      _this.job.specification = "";
      _this.jTitles = _this.getJobTitles.filter(function (el) {
        return el.job_category_id === parseInt(value);
      });
    }, {
      immediate: true
    });
    this.$watch(function () {
      return _this.job.title;
    }, function (value) {
      var title = _this.getJobTitles.find(function (title) {
        return title.id === parseInt(value);
      });

      if (title) {
        _this.job.specification = title.specification;
      }
    }, {
      immediate: true
    });
    this.$watch(function () {
      return _this.job.department;
    }, function (value) {
      _this.departmentUnits = _this.getUnits.filter(function (u) {
        return u.department_id === parseInt(value);
      });

      if (_this.getProfile.job.unit) {
        if (_this.departmentUnits.length === 0) {
          _this.departmentUnits = _this.getUnits.filter(function (u) {
            return u.id === parseInt(_this.getProfile.job.unit);
          });
        }

        _this.job.unit = parseInt(_this.getProfile.job.unit);
      }

      if (_this.departmentUnits.length === 0) {
        _this.job.unit = "";
      }
    }, {
      immediate: true
    });
  },
  data: function data() {
    return {
      showUserUnit: true,
      jTitles: [],
      departmentUnits: [],
      jobSpecification: "",
      contractDetailsControl: "kc",
      isEditJob: true,
      isSubmittingJob: false,
      isAwardingContract: false,
      job: {
        category: "",
        title: "",
        specification: "",
        employmentStatus: "",
        department: "",
        unit: "",
        position: "",
        startDate: null,
        endDate: null,
        contractDetails: null,
        contractDetailsAvailable: "",
        contractStatus: null
      },
      jobErrors: {
        title: [],
        specification: [],
        category: [],
        employmentStatus: [],
        department: [],
        unit: [],
        position: [],
        startDate: [],
        endDate: [],
        contractDetails: []
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchProfile"])), {}, {
    setJob: function setJob(jobDetails) {
      if (jobDetails) {
        this.job = _objectSpread(_objectSpread({}, this.job), {}, {
          title: jobDetails.title,
          category: jobDetails.category,
          employmentStatus: jobDetails.employmentStatus,
          department: jobDetails.department || "none",
          unit: jobDetails.unit || "",
          position: jobDetails.position || "",
          startDate: new Date(jobDetails.startDate),
          endDate: new Date(jobDetails.endDate),
          contractDetailsAvailable: jobDetails.contractDetails,
          contractStatus: jobDetails.contractStatus ? jobDetails.contractStatus : null
        });
      }
    },
    updateJob: function updateJob() {
      var _this2 = this;

      this.setJobErrors();
      this.isSubmittingJob = true;
      var data = new FormData();
      data.append("category", this.job.category);
      data.append("title", this.job.title);
      data.append("employmentStatus", this.job.employmentStatus);
      data.append("department", this.job.department);
      data.append("unit", this.job.unit);
      data.append("position", this.job.position);
      data.append("startDate", this.job.startDate ? this.job.startDate.toISOString() : "");
      data.append("endDate", this.job.endDate ? this.job.endDate.toISOString() : "");
      data.append("contractStatus", this.job.contractStatus);
      data.append("contractDetailsControl", this.contractDetailsControl);

      if (this.job.contractDetailsAvailable) {
        data.append("contractDetails", this.job.contractDetailsAvailable);
      }

      if (this.contractDetailsControl === "rc" || !this.job.contractDetailsAvailable) {
        data.append("contractDetails", this.job.contractDetails);
      }

      this.$axios.post("/dashboard/ess/update-job/".concat(this.getProfile.user_id), data, this.axiosConfig).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this2.dispatchProfile({
            type: "ADD_JOB",
            payload: res.data.data
          });

          _this2.setJob(_this2.getProfile.job);

          _this2.contractDetailsControl = "kc";
          _this2.job.contractDetails = null;
          setTimeout(function () {
            _this2.snackbar("Job updated successfully", "is-dark");

            _this2.isSubmittingJob = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this2.isSubmittingJob = false;

            _this2.setJobErrors(err.response.data.errors);
          }, 1000);
        }
      });
    },
    awardContract: function awardContract(status) {
      var _this3 = this;

      this.isAwardingContract = true;
      this.$axios.put("/dashboard/ess/award-job-contract/".concat(this.getProfile.user_id, "/").concat(status)).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this3.dispatchProfile({
            type: "ADD_JOB",
            payload: res.data.data
          });

          _this3.setJob(_this3.getProfile.job);

          setTimeout(function () {
            _this3.snackbar("Contract ".concat(status ? "termindated" : "awarded", " successfully"), "is-dark");

            _this3.isAwardingContract = false;
          }, 1000);
        }
      })["catch"](function (err) {
        _this3.isAwardingContract = false;
      });
    },
    viewSpecification: function viewSpecification(file) {
      this.$buefy.modal.open({
        parent: this,
        component: _ViewPdf__WEBPACK_IMPORTED_MODULE_1__["default"],
        hasModalCard: true,
        trapFocus: true,
        props: {
          file: file
        }
      });
    },
    clearJobForm: function clearJobForm() {
      this.job.title = "";
      this.job.specification = "";
      this.job.category = "";
      this.job.employmentStatus = "";
      this.job.department = "";
      this.job.unit = "";
      this.job.position = "";
      this.job.startDate = null;
      this.job.endDate = null;
      this.job.contractDetails = null;
      this.job.contractDetailsAvailable = "";
      this.job.contractStatus = null;
    },
    setJobErrors: function setJobErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.jobErrors.title = error.title || [];
      this.jobErrors.specification = error.specification || [];
      this.jobErrors.category = error.category || [];
      this.jobErrors.employmentStatus = error.employmentStatus || [];
      this.jobErrors.department = error.department || [];
      this.jobErrors.unit = error.unit || [];
      this.jobErrors.position = error.position || [];
      this.jobErrors.startDate = error.startDate || [];
      this.jobErrors.endDate = error.endDate || [];
      this.jobErrors.contractDetails = error.contractDetails || [];
    },
    cancelJobForm: function cancelJobForm() {
      // this.clearJobForm();
      this.setJobErrors();
      this.isEditJob = !this.isEditJob;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ViewPdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ViewPdf */ "./resources/js/components/ViewPdf.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PersonalDetails",
  components: {
    ViewPdf: _ViewPdf__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getProfile", "getCountries"])), {}, {
    getPersonalAttachments: function getPersonalAttachments() {
      if (typeof this.getProfile.personal_details.attachments === "string") return JSON.parse(this.getProfile.personal_details.attachments);
      return [];
    },
    getAttachmentDropperId: function getAttachmentDropperId() {
      return this.attachmentDropperId;
    }
  }),
  created: function created() {
    var _this = this;

    this.$watch(function () {
      return _this.personalDetails.avatar;
    }, function (avatar) {
      if (avatar) {
        _this.uploadUserAvatar(avatar);
      }
    });
  },
  beforeMount: function beforeMount() {
    this.setPersonalDetails(this.getProfile.personal_details);
  },
  data: function data() {
    return {
      isEditPersonalDetails: true,
      isEditPersonalDetailsAttachment: true,
      isSubmittingPersonalDetails: false,
      isSubmittingPersonalDetailsAttachment: false,
      isUploadingPhoto: false,
      isUpdatingFileComment: false,
      attachmentDropperId: "",
      attachmentUpdateType: "",
      personalDetails: {
        avatar: null,
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        staffId: "",
        birthDate: new Date(),
        maritalStatus: "",
        gender: "",
        attachment: {
          file: null,
          comment: ""
        }
      },
      userAvatarError: [],
      personalDetailsAttachmentError: {
        file: [],
        comment: []
      },
      personalDetailsErrors: {
        title: [],
        firstName: [],
        middleName: [],
        lastName: [],
        staffId: [],
        birthDate: [],
        maritalStatus: [],
        gender: []
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchAuthUser", "dispatchProfile"])), {}, {
    openAttachmentDropper: function openAttachmentDropper(data, type) {
      var dropper = this.$refs.attachmentDropper;
      this.attachmentDropperId = data.id;
      this.attachmentUpdateType = type;

      if (dropper) {
        this.personalDetails.attachment.comment = data.comment;
        dropper.open();
      }
    },
    closeAttachmentDropper: function closeAttachmentDropper() {
      var dropper = this.$refs.attachmentDropper;
      this.attachmentUpdateType = "";

      if (dropper) {
        this.personalDetails.attachment.comment = "";
        this.personalDetails.attachment.file = null;
        dropper.close();
      }
    },
    setPersonalDetails: function setPersonalDetails(details) {
      this.personalDetails = _objectSpread(_objectSpread({}, this.personalDetails), {}, {
        title: details.title || "",
        firstName: details.firstName || "",
        middleName: details.middleName || "",
        lastName: details.lastName || "",
        staffId: details.staffId || "",
        birthDate: details.birthDate ? new Date(details.birthDate) : new Date(),
        maritalStatus: details.maritalStatus || "",
        gender: details.gender || ""
      });
    },
    uploadUserAvatar: function uploadUserAvatar(avatar) {
      var _this2 = this;

      this.userAvatarError = [];
      this.isUploadingPhoto = true;
      var data = new FormData();
      data.append("avatar", avatar);
      data.append("id", this.getProfile.user_id);
      this.$axios.post("/dashboard/ess/upload-avatar", data).then(function (res) {
        if (res.status === 200 && res.data.uploaded) {
          _this2.isUploadingPhoto = false;

          if (_this2.$page.props.authUser.id === _this2.getProfile.user_id) {
            _this2.dispatchAuthUser({
              type: "UPDATE_AVATAR",
              payload: res.data.avatar
            });
          }

          _this2.dispatchProfile({
            type: "UPDATE_AVATAR",
            payload: res.data.avatar
          });
        }
      })["catch"](function (err) {});
    },
    updatePersonalDetails: function updatePersonalDetails() {
      var _this3 = this;

      this.setPersonalDetailsErrors();
      this.isSubmittingPersonalDetails = true;
      this.$axios.put("/dashboard/ess/update-personal-details/".concat(this.getProfile.user_id), _objectSpread(_objectSpread({}, this.personalDetails), {}, {
        birthDate: this.personalDetails.birthDate.toISOString()
      })).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          if (_this3.$page.props.authUser.id === _this3.getProfile.user_id) {
            _this3.dispatchAuthUser({
              payload: res.data.authUser
            });
          }

          _this3.dispatchProfile({
            type: "UPDATE_PERSONAL_DETAILS",
            payload: res.data.profile
          });

          setTimeout(function () {
            _this3.snackbar("Personal details updated successfully", "is-dark");

            _this3.isSubmittingPersonalDetails = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this3.isSubmittingPersonalDetails = false;

            _this3.setPersonalDetailsErrors(err.response.data.errors);
          }, 1000);
        }
      });
    },
    updatePersonalDetailsAttachment: function updatePersonalDetailsAttachment() {
      var _this4 = this;

      this.isSubmittingPersonalDetailsAttachment = true;
      this.personalDetailsAttachmentError = {
        file: [],
        comment: []
      };
      var data = new FormData();
      data.append("file", this.personalDetails.attachment.file);
      data.append("comment", this.personalDetails.attachment.comment);
      this.$axios.post("/dashboard/ess/update-personal-details-attachment/".concat(this.getProfile.user_id), data).then(function (res) {
        if (res.status === 200) {
          _this4.personalDetails.attachment = {
            file: null,
            comment: ""
          };

          _this4.dispatchProfile({
            type: "UPDATE_PERSONAL_DETAILS_ATTACHMENT",
            payload: res.data.attachments
          });

          setTimeout(function () {
            _this4.snackbar("Attachment updated successfully", "is-dark");

            _this4.isSubmittingPersonalDetailsAttachment = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status == 422) {
          setTimeout(function () {
            _this4.setPersonalDetailsAttachmentErrors(err.response.data.errors);

            _this4.isSubmittingPersonalDetailsAttachment = false;
          }, 1000);
        }
      });
    },
    replacePersonalDetailsAttachment: function replacePersonalDetailsAttachment(type) {
      var _this5 = this;

      this.isSubmittingPersonalDetailsAttachment = true;
      this.personalDetailsAttachmentError = {
        file: [],
        comment: []
      };
      var data = new FormData();

      if (type === "comment") {
        data.append("id", this.attachmentDropperId);
        data.append("comment", this.personalDetails.attachment.comment);
      }

      if (type === "attachment") {
        data.append("id", this.attachmentDropperId);
        data.append("file", this.personalDetails.attachment.file);
      }

      this.$axios.post("/dashboard/ess/replace-personal-details-attachment/".concat(this.getProfile.user_id), data).then(function (res) {
        if (res.status === 200) {
          _this5.personalDetails.attachment.file = null;

          _this5.dispatchProfile({
            type: "UPDATE_PERSONAL_DETAILS_ATTACHMENT",
            payload: res.data.attachments
          });

          setTimeout(function () {
            if (type === "comment") {
              _this5.snackbar("Comment updated successfully", "is-dark");
            }

            if (type === "attachment") {
              _this5.snackbar("Attachment updated successfully", "is-dark");
            }

            _this5.isSubmittingPersonalDetailsAttachment = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status == 422) {
          setTimeout(function () {
            _this5.setPersonalDetailsAttachmentErrors(err.response.data.errors);

            _this5.isSubmittingPersonalDetailsAttachment = false;
          }, 1000);
        }
      });
    },
    deletePersonalDetailsAttachment: function deletePersonalDetailsAttachment(id) {
      var _this6 = this;

      this.$axios["delete"]("/dashboard/ess/delete-personal-details-attachment/".concat(this.getProfile.user_id, "/").concat(id)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this6.dispatchProfile({
            type: "DELETE_ATTACHMENT",
            payload: id
          });

          setTimeout(function () {
            _this6.snackbar("Attachment deleted successfully", "is-dark");

            _this6.isSubmittingPersonalDetailsAttachment = false;
          }, 1000);
        }
      })["catch"](function (err) {});
    },
    viewAttachment: function viewAttachment(file) {
      this.$buefy.modal.open({
        parent: this,
        component: _ViewPdf__WEBPACK_IMPORTED_MODULE_1__["default"],
        hasModalCard: true,
        trapFocus: true,
        props: {
          file: file
        }
      });
    },
    setPersonalDetailsErrors: function setPersonalDetailsErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.personalDetailsErrors.title = error.title || [];
      this.personalDetailsErrors.firstName = error.firstName || [];
      this.personalDetailsErrors.middleName = error.middleName || [];
      this.personalDetailsErrors.lastName = error.lastName || [];
      this.personalDetailsErrors.staffId = error.staffId || [];
      this.personalDetailsErrors.birthDate = error.birthDate || [];
      this.personalDetailsErrors.maritalStatus = error.maritalStatus || [];
      this.personalDetailsErrors.gender = error.gender || [];
    },
    cancelPersonalDetailsForm: function cancelPersonalDetailsForm() {
      this.setPersonalDetailsErrors();
      this.isEditPersonalDetails = !this.isEditPersonalDetails;
    },
    setPersonalDetailsAttachmentErrors: function setPersonalDetailsAttachmentErrors(obj) {
      this.personalDetailsAttachmentError = {
        file: obj.file || [],
        comment: obj.comment || []
      };
      this.isSubmittingPersonalDetailsAttachment = false;
    },
    cancelPersonalDetailsAttachmentForm: function cancelPersonalDetailsAttachmentForm() {
      this.personalDetails.attachment = {
        file: null,
        comment: ""
      };
      this.personalDetailsAttachmentError = {
        file: [],
        comment: []
      };
      this.isEditPersonalDetailsAttachment = !this.isEditPersonalDetailsAttachment;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "QualificayionDetails",
  components: {},
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getProfile"])), {}, {
    getEducation: function getEducation() {
      if (typeof this.getProfile.qualifications.education === "string") return JSON.parse(this.getProfile.qualifications.education);
      return [];
    },
    getContinuousDev: function getContinuousDev() {
      if (typeof this.getProfile.qualifications.continuousDev === "string") return JSON.parse(this.getProfile.qualifications.continuousDev);
      return [];
    },
    getExpertise: function getExpertise() {
      if (typeof this.getProfile.qualifications.expertise === "string") return JSON.parse(this.getProfile.qualifications.expertise);
      return [];
    },
    getLanguages: function getLanguages() {
      if (typeof this.getProfile.qualifications.languages === "string") return JSON.parse(this.getProfile.qualifications.languages);
      return [];
    },
    getAttachmentDropperId: function getAttachmentDropperId() {
      return this.attachmentDropperId;
    }
  }),
  created: function created() {},
  data: function data() {
    return {
      isEditEducation: false,
      isEditExpertise: false,
      isEditLanguage: false,
      isEditContinuousDev: false,
      isSubmitting: false,
      attachmentUpdateType: null,
      attachmentDropperId: null,
      isSubmittingEducation: false,
      isSubmittingContinuousDev: false,
      isSubmittingExpertise: false,
      isSubmittingLanguage: false,
      qualifications: {
        education: {
          institution: "",
          specialization: "",
          started: null,
          completed: null
        },
        continuousDev: {
          institution: "",
          specialization: "",
          started: null,
          completed: null
        },
        expertise: {
          expertise: "",
          yearOfExperience: "",
          comment: ""
        },
        languages: {
          language: "",
          fluency: "",
          comment: ""
        }
      },
      qualificationsErrors: {
        education: {
          institution: [],
          specialization: [],
          started: [],
          completed: []
        },
        continuousDev: {
          institution: [],
          specialization: [],
          started: [],
          completed: []
        },
        expertise: {
          expertise: [],
          yearOfExperience: [],
          comment: []
        },
        languages: {
          language: [],
          fluency: [],
          comment: []
        }
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchProfile"])), {}, {
    openEducationDropper: function openEducationDropper(data) {
      var dropper = this.$refs.educationDropper;
      this.attachmentDropperId = data.id;

      if (dropper) {
        this.qualifications.education = {
          institution: data.institution,
          specialization: data.specialization,
          gpa: data.gpa,
          started: data.started,
          completed: data.completed
        };
        dropper.open();
      }
    },
    closeEducationDropper: function closeEducationDropper() {
      var dropper = this.$refs.educationDropper;
      this.attachmentUpdateType = "";

      if (dropper) {
        this.cancelEducationForm();
        dropper.close();
      }
    },
    openContinuousDevDropper: function openContinuousDevDropper(data) {
      var dropper = this.$refs.continuousDevDropper;
      this.attachmentDropperId = data.id;

      if (dropper) {
        this.qualifications.continuousDev = {
          institution: data.institution,
          specialization: data.specialization,
          started: data.started,
          completed: data.completed
        };
        dropper.open();
      }
    },
    closeContinuousDevDropper: function closeContinuousDevDropper() {
      var dropper = this.$refs.continuousDevDropper;
      this.attachmentUpdateType = "";

      if (dropper) {
        this.cancelContinuousDevForm();
        dropper.close();
      }
    },
    openExpertiseDropper: function openExpertiseDropper(data) {
      var dropper = this.$refs.expertiseDropper;
      this.attachmentDropperId = data.id;

      if (dropper) {
        this.qualifications.expertise = {
          expertise: data.expertise,
          yearOfExperience: data.yearOfExperience,
          comment: data.comment
        };
        dropper.open();
      }
    },
    closeExpertiseDropper: function closeExpertiseDropper() {
      var dropper = this.$refs.expertiseDropper;
      this.attachmentUpdateType = "";

      if (dropper) {
        this.cancelExpertiseForm();
        dropper.close();
      }
    },
    openLanguageDropper: function openLanguageDropper(data) {
      var dropper = this.$refs.languageDropper;
      this.attachmentDropperId = data.id;

      if (dropper) {
        this.qualifications.languages = {
          language: data.language,
          fluency: data.fluency,
          comment: data.comment
        };
        dropper.open();
      }
    },
    closeLanguageDropper: function closeLanguageDropper() {
      var dropper = this.$refs.languageDropper;
      this.attachmentUpdateType = "";

      if (dropper) {
        this.cancelLanguageForm();
        dropper.close();
      }
    },
    addEducation: function addEducation() {
      var _this = this;

      this.isSubmittingEducation = true;
      this.setEducationErrors();
      this.$axios.put("/dashboard/ess/add-education/".concat(this.getProfile.user_id), this.qualifications.education).then(function (res) {
        if (res.status === 200 && res.data.added) {
          _this.dispatchProfile({
            type: "ADD_EDUCATION",
            payload: res.data.data
          });

          _this.clearEducationForm();

          setTimeout(function () {
            _this.snackbar("Education added successfully", "is-dark");

            _this.isSubmittingEducation = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this.setEducationErrors(err.response.data.errors);
        }

        _this.isSubmittingEducation = false;
      });
    },
    updateEducation: function updateEducation() {
      var _this2 = this;

      this.isSubmittingEducation = true;
      this.setEducationErrors();
      this.$axios.put("/dashboard/ess/update-education/".concat(this.getProfile.user_id, "/").concat(this.attachmentDropperId), this.qualifications.education).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this2.closeEducationDropper();

          _this2.dispatchProfile({
            type: "ADD_EDUCATION",
            payload: res.data.data
          });

          setTimeout(function () {
            _this2.snackbar("Education updated successfully", "is-dark");

            _this2.isSubmittingEducation = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this2.setEducationErrors(err.response.data.errors);
        }

        _this2.isSubmittingEducation = false;
      });
    },
    addContinuousDev: function addContinuousDev() {
      var _this3 = this;

      this.isSubmittingContinuousDev = true;
      this.setContinuousDevErrors();
      this.$axios.put("/dashboard/ess/add-continuous-dev/".concat(this.getProfile.user_id), this.qualifications.continuousDev).then(function (res) {
        if (res.status === 200 && res.data.added) {
          _this3.dispatchProfile({
            type: "ADD_CONTINUOUS_DEV",
            payload: res.data.data
          });

          _this3.clearContinuousDevForm();

          setTimeout(function () {
            _this3.snackbar("Development added successfully", "is-dark");

            _this3.isSubmittingContinuousDev = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this3.setContinuousDevErrors(err.response.data.errors);
        }

        _this3.isSubmittingContinuousDev = false;
      });
    },
    updateContinuousDev: function updateContinuousDev() {
      var _this4 = this;

      this.isSubmittingContinuousDev = true;
      this.setContinuousDevErrors();
      this.$axios.put("/dashboard/ess/update-continuous-dev/".concat(this.getProfile.user_id, "/").concat(this.attachmentDropperId), this.qualifications.continuousDev).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this4.closeContinuousDevDropper();

          _this4.dispatchProfile({
            type: "ADD_CONTINUOUS_DEV",
            payload: res.data.data
          });

          setTimeout(function () {
            _this4.snackbar("Development updated successfully", "is-dark");

            _this4.isSubmittingContinuousDev = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this4.setContinuousDevErrors(err.response.data.errors);
        }

        _this4.isSubmittingContinuousDev = false;
      });
    },
    addExpertise: function addExpertise() {
      var _this5 = this;

      this.isSubmittingExpertise = true;
      this.setExpertiseErrors();
      this.$axios.put("/dashboard/ess/add-expertise/".concat(this.getProfile.user_id), this.qualifications.expertise).then(function (res) {
        if (res.status === 200 && res.data.added) {
          _this5.clearExpertiseForm();

          _this5.dispatchProfile({
            type: "ADD_EXPERTISE",
            payload: res.data.data
          });

          setTimeout(function () {
            _this5.snackbar("Expertise added successfully", "is-dark");

            _this5.isSubmittingExpertise = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this5.setExpertiseErrors(err.response.data.errors);
        }

        _this5.isSubmittingExpertise = false;
      });
    },
    updateExpertise: function updateExpertise() {
      var _this6 = this;

      this.isSubmittingExpertise = true;
      this.setExpertiseErrors();
      this.$axios.put("/dashboard/ess/update-expertise/".concat(this.getProfile.user_id, "/").concat(this.attachmentDropperId), this.qualifications.expertise).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this6.closeExpertiseDropper();

          _this6.dispatchProfile({
            type: "ADD_EXPERTISE",
            payload: res.data.data
          });

          setTimeout(function () {
            _this6.snackbar("Expertise updated successfully", "is-dark");

            _this6.isSubmittingExpertise = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this6.setExpertiseErrors(err.response.data.errors);
        }

        _this6.isSubmittingExpertise = false;
      });
    },
    addLanguage: function addLanguage() {
      var _this7 = this;

      this.isSubmittingLanguage = true;
      this.setLanguageErrors();
      this.$axios.put("/dashboard/ess/add-language/".concat(this.getProfile.user_id), this.qualifications.languages).then(function (res) {
        if (res.status === 200 && res.data.added) {
          _this7.clearLanguageForm();

          _this7.dispatchProfile({
            type: "ADD_LANGUAGE",
            payload: res.data.data
          });

          setTimeout(function () {
            _this7.snackbar("Laguage added successfully", "is-dark");

            _this7.isSubmittingLanguage = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this7.setLanguageErrors(err.response.data.errors);
        }

        _this7.isSubmittingLanguage = false;
      });
    },
    updateLanguage: function updateLanguage() {
      var _this8 = this;

      this.isSubmittingLanguage = true;
      this.setLanguageErrors();
      this.$axios.put("/dashboard/ess/update-language/".concat(this.getProfile.user_id, "/").concat(this.attachmentDropperId), this.qualifications.languages).then(function (res) {
        if (res.status === 200 && res.data.added) {
          _this8.closeLanguageDropper();

          _this8.dispatchProfile({
            type: "ADD_LANGUAGE",
            payload: res.data.data
          });

          setTimeout(function () {
            _this8.snackbar("Laguage updated successfully", "is-dark");

            _this8.isSubmittingLanguage = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this8.setLanguageErrors(err.response.data.errors);
        }

        _this8.isSubmittingLanguage = false;
      });
    },
    deleteHandler: function deleteHandler(type, id) {
      var _this9 = this;

      this.$axios["delete"]("/dashboard/ess/delete-qualification/".concat(this.getProfile.user_id, "/").concat(id, "/").concat(type)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this9.dispatchProfile({
            type: "UDATE_QUALIFICATION",
            payload: {
              type: type,
              data: res.data.data
            }
          });

          setTimeout(function () {
            _this9.snackbar("Data successfully deleted", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    clearEducationForm: function clearEducationForm() {
      this.qualifications.education.institution = "";
      this.qualifications.education.specialization = "";
      this.qualifications.education.started = "";
      this.qualifications.education.completed = "";
    },
    clearContinuousDevForm: function clearContinuousDevForm() {
      this.qualifications.continuousDev.institution = "";
      this.qualifications.continuousDev.specialization = "";
      this.qualifications.continuousDev.started = "";
      this.qualifications.continuousDev.completed = "";
    },
    clearExpertiseForm: function clearExpertiseForm() {
      this.qualifications.expertise.expertise = "";
      this.qualifications.expertise.yearOfExperience = "";
      this.qualifications.expertise.comment = "";
    },
    clearLanguageForm: function clearLanguageForm() {
      this.qualifications.languages.language = "";
      this.qualifications.languages.fluency = "";
      this.qualifications.languages.comment = "";
    },
    cancelEducationForm: function cancelEducationForm() {
      this.isEditEducation = false;
      this.clearEducationForm();
      this.setEducationErrors();
    },
    cancelContinuousDevForm: function cancelContinuousDevForm() {
      this.isEditContinuousDev = false;
      this.clearContinuousDevForm();
      this.setContinuousDevErrors();
    },
    cancelLanguageForm: function cancelLanguageForm() {
      this.isEditLanguage = false;
      this.clearLanguageForm();
      this.setLanguageErrors();
    },
    cancelExpertiseForm: function cancelExpertiseForm() {
      this.isEditExpertise = false;
      this.clearExpertiseForm();
      this.setExpertiseErrors();
    },
    setEducationErrors: function setEducationErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.qualificationsErrors.education = {
        institution: error.institution || [],
        specialization: error.specialization || [],
        started: error.started || [],
        completed: error.completed || []
      };
    },
    setContinuousDevErrors: function setContinuousDevErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.qualificationsErrors.continuousDev = {
        institution: error.institution || [],
        specialization: error.specialization || [],
        started: error.started || [],
        completed: error.completed || []
      };
    },
    setExpertiseErrors: function setExpertiseErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.qualificationsErrors.expertise.expertise = error.expertise ? error.expertise : [];
      this.qualificationsErrors.expertise.yearOfExperience = error.yearOfExperience || [];
      this.qualificationsErrors.expertise.comment = error.comment || [];
    },
    setLanguageErrors: function setLanguageErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.qualificationsErrors.languages.language = error.language || [];
      this.qualificationsErrors.languages.fluency = error.fluency || [];
      this.qualificationsErrors.languages.comment = error.comment || [];
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ReportToDetails",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getProfile", "getMyLeaders"])),
  created: function created() {},
  data: function data() {
    return {};
  },
  methods: {
    getFullName: function getFullName(staff) {
      return "".concat(this.isNull(staff.title), " ").concat(staff.firstName, " ").concat(this.isNull(staff.middleName), " ").concat(staff.lastName);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".change-password-btns[data-v-408372c8] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".is-capitalized[data-v-fd22e4de] {\n  text-transform: capitalize;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".report_to_label[data-v-80913e30] {\n  display: block;\n  font-size: 1rem;\n  color: #686767b5;\n  letter-spacing: 2px;\n}\n.report_to_text[data-v-80913e30]:not(:last-child) {\n  margin-bottom: 0.15rem !important;\n}\n.leader__details[data-v-80913e30]:not(:last-child) {\n  border-bottom: 1px solid #686767b5;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-fragment/dist/vue-fragment.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-fragment/dist/vue-fragment.esm.js ***!
  \************************************************************/
/*! exports provided: default, Fragment, SSR, Plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSR", function() { return SSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_defineProperty(e,t,n[t])})}return e}var freeze=function(e,t,n){Object.defineProperty(e,t,{configurable:!0,get:function(){return n},set:function(e){console.warn("tried to set frozen property ".concat(t," with ").concat(e))}})},component={abstract:!0,name:"Fragment",props:{name:{type:String,default:function(){return Math.floor(Date.now()*Math.random()).toString(16)}},html:{type:String,default:null}},mounted:function(){var e=this.$el,t=e.parentNode;e.__isFragment=!0,e.__isMounted=!1;var n=document.createComment("fragment#".concat(this.name,"#head")),r=document.createComment("fragment#".concat(this.name,"#tail"));e.__head=n,e.__tail=r;var o=document.createDocumentFragment();if(o.appendChild(n),Array.from(e.childNodes).forEach(function(t){var n=!t.hasOwnProperty("__isFragmentChild__");o.appendChild(t),n&&(freeze(t,"parentNode",e),freeze(t,"__isFragmentChild__",!0))}),o.appendChild(r),this.html){var a=document.createElement("template");a.innerHTML=this.html,Array.from(a.content.childNodes).forEach(function(e){o.appendChild(e)})}var i=e.nextSibling;t.insertBefore(o,e,!0),t.removeChild(e),freeze(e,"parentNode",t),freeze(e,"nextSibling",i),i&&freeze(i,"previousSibling",e),e.__isMounted=!0},render:function(e){var t=this,n=this.$slots.default;return n&&n.length&&n.forEach(function(e){return e.data=_objectSpread({},e.data,{attrs:_objectSpread({fragment:t.name},(e.data||{}).attrs)})}),e("div",{attrs:{fragment:this.name}},n)}};function ssr(e,t){ true&&console.warn("v-fragment SSR is not implemented yet.")}var Fragment=component,SSR=ssr,Plugin={install:function(e){e.component("fragment",component)}},index={Fragment:component,Plugin:Plugin,SSR:ssr};/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ESS.vue?vue&type=template&id=a1665a28&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ESS.vue?vue&type=template&id=a1665a28&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "content__split" }, [
    _c("div", { staticClass: "content__split__left" }, [
      _c("div", { staticClass: "content__split__left__panel" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "content" }, [
              _c("div", { staticClass: "profile__sidebar" }, [
                _c(
                  "p",
                  [
                    _c("b-icon", { attrs: { pack: "fas", icon: "phone" } }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.getProfile.contact_details
                            ? _vm.getProfile.contact_details.mobile
                            : ""
                        )
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c("b-icon", { attrs: { pack: "fas", icon: "envelope" } }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.getProfile.contact_details
                            ? _vm.getProfile.contact_details.workEmail
                            : ""
                        )
                      )
                    ])
                  ],
                  1
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "content" }, [
              _c("div", { staticClass: "profile__sidebar" }, [
                _c(
                  "p",
                  [
                    _c("b-icon", { attrs: { pack: "fas", icon: "id-card" } }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.getProfile.personal_details
                            ? _vm.getProfile.personal_details.staffId
                            : ""
                        )
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c("b-icon", { attrs: { pack: "fas", icon: "umbrella" } }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(_vm._s(_vm.getUserDepartment(_vm.getProfile)))
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c("b-icon", { attrs: { pack: "fas", icon: "briefcase" } }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(_vm._s(_vm.getEmpStatus(_vm.getProfile)))
                    ])
                  ],
                  1
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "content" }, [
              _c("div", { staticClass: "profile__sidebar" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c("b-icon", {
                      attrs: { pack: "fas", icon: "calendar-alt" }
                    }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.formatDate(
                            _vm.getProfile.job
                              ? _vm.getProfile.job.startDate
                              : ""
                          )
                        )
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c("b-icon", { attrs: { pack: "fas", icon: "clock" } }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.formatTime(
                            _vm.getProfile.job
                              ? _vm.getProfile.job.startDate
                              : ""
                          )
                        )
                      )
                    ])
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
    _c(
      "div",
      { staticClass: "content__split__right" },
      [
        _c(
          "tabs",
          {
            attrs: {
              stickyTab: "content__split__right__sticky",
              tabIndex: _vm.tabIndex
            }
          },
          [
            _c(
              "tab",
              { attrs: { label: _vm.$t("app.profile") } },
              [_c("ProfileComponent")],
              1
            ),
            _vm._v(" "),
            !_vm.regex.test(_vm.$page.url)
              ? _c(
                  "tab",
                  { attrs: { label: _vm.$tc("app.configuration", 2) } },
                  [_c("ConfigurationComponent")],
                  1
                )
              : _vm._e()
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Hire Date")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ViewPdf.vue?vue&type=template&id=a7e1ca1c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ViewPdf.vue?vue&type=template&id=a7e1ca1c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "modal-card", staticStyle: { width: "auto" } },
    [
      _c("vue-pdf-app", {
        staticStyle: { height: "100vh", width: "960px" },
        attrs: { pdf: "/storage" + _vm.getFile },
        on: { "pages-rendered": _vm.pagesRendered }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=template&id=408372c8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=template&id=408372c8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c("div", { staticClass: "content__split__right__tabs__myleave" }, [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column is-6" }, [
          _c(
            "section",
            { staticClass: "b__collapse__section" },
            [
              _c(
                "b-collapse",
                {
                  staticClass: "card",
                  attrs: { animation: "slide", "aria-id": "myleavelist" },
                  model: {
                    value: _vm.openChangePassword,
                    callback: function($$v) {
                      _vm.openChangePassword = $$v
                    },
                    expression: "openChangePassword"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card-header",
                      attrs: {
                        slot: "trigger",
                        role: "button",
                        "aria-controls": "myleavelist"
                      },
                      slot: "trigger"
                    },
                    [
                      _c(
                        "p",
                        { staticClass: "card-header-title has-text-info" },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.$t("app.change_password")) +
                              "\n              "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "card-header-icon" },
                        [
                          _c("b-icon", {
                            attrs: {
                              type: "is-info",
                              pack: "fas",
                              icon: _vm.openChangePassword
                                ? "angle-down"
                                : "angle-up"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-content" }, [
                    _c("div", { staticClass: "content" }, [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.changePassword()
                            }
                          }
                        },
                        [
                          _c(
                            "b-field",
                            {
                              attrs: {
                                label: _vm.$t("app.current_password"),
                                type: {
                                  "is-danger":
                                    _vm.credentialErrors.current_password
                                      .length > 0
                                },
                                message: _vm.credentialErrors.current_password
                              }
                            },
                            [
                              _c("b-input", {
                                attrs: {
                                  placeholder: _vm.$t("app.current_password"),
                                  type: "password",
                                  value: "",
                                  "icon-pack": "fas",
                                  icon: "lock"
                                },
                                model: {
                                  value: _vm.credentials.current_password,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.credentials,
                                      "current_password",
                                      $$v
                                    )
                                  },
                                  expression: "credentials.current_password"
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
                                label: _vm.$t("app.new_password"),
                                type: {
                                  "is-danger":
                                    _vm.credentialErrors.new_password.length > 0
                                },
                                message: _vm.credentialErrors.new_password
                              }
                            },
                            [
                              _c("b-input", {
                                attrs: {
                                  placeholder: _vm.$t("app.new_password"),
                                  type: "password",
                                  value: "",
                                  "icon-pack": "fas",
                                  icon: "key"
                                },
                                model: {
                                  value: _vm.credentials.new_password,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.credentials,
                                      "new_password",
                                      $$v
                                    )
                                  },
                                  expression: "credentials.new_password"
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
                                label: _vm.$t("app.confirm_password"),
                                type: {
                                  "is-danger":
                                    _vm.credentialErrors.confirm_new_password
                                      .length > 0
                                },
                                message:
                                  _vm.credentialErrors.confirm_new_password
                              }
                            },
                            [
                              _c("b-input", {
                                attrs: {
                                  placeholder: _vm.$t("app.confirm_password"),
                                  type: "password",
                                  value: "",
                                  "icon-pack": "fas",
                                  icon: "key"
                                },
                                model: {
                                  value: _vm.credentials.confirm_new_password,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.credentials,
                                      "confirm_new_password",
                                      $$v
                                    )
                                  },
                                  expression: "credentials.confirm_new_password"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c("div", { staticClass: "change-password-btns" }, [
                            _c(
                              "div",
                              { staticClass: "buttons" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "button is-success is-light",
                                    attrs: {
                                      type: "submit",
                                      disabled: _vm.isUpdatingPassword
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(
                                          _vm.isUpdatingPassword
                                            ? _vm.$t("app.updating") + "..."
                                            : _vm.$t("app.update")
                                        ) +
                                        "\n                      "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "is-danger is-light",
                                    on: {
                                      click: function($event) {
                                        return _vm.cancelChangePassword()
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("app.cancel")))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "login-forget-password" },
                              [
                                _c(
                                  "inertia-link",
                                  { attrs: { href: "/password-reset-link" } },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("app.forget_pass_text"))
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      )
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column is-3" }, [
          _c(
            "section",
            { staticClass: "b__collapse__section" },
            [
              _c(
                "b-collapse",
                {
                  staticClass: "card",
                  attrs: { animation: "slide", "aria-id": "myleavelist" },
                  model: {
                    value: _vm.openChangeLanguage,
                    callback: function($$v) {
                      _vm.openChangeLanguage = $$v
                    },
                    expression: "openChangeLanguage"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card-header",
                      attrs: {
                        slot: "trigger",
                        role: "button",
                        "aria-controls": "myleavelist"
                      },
                      slot: "trigger"
                    },
                    [
                      _c(
                        "p",
                        { staticClass: "card-header-title has-text-info" },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.$t("app.change_language")) +
                              "\n              "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "card-header-icon" },
                        [
                          _c("b-icon", {
                            attrs: {
                              type: "is-info",
                              pack: "fas",
                              icon: _vm.openChangeLanguage
                                ? "angle-down"
                                : "angle-up"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-content" }, [
                    _c(
                      "div",
                      { staticClass: "content" },
                      _vm._l(_vm.languages, function(l) {
                        return _c(
                          "b-field",
                          { key: l.name },
                          [
                            _c(
                              "b-radio",
                              {
                                attrs: {
                                  "native-value": l.locale,
                                  type: "is-info",
                                  size: "is-medium"
                                },
                                model: {
                                  value: _vm.locale,
                                  callback: function($$v) {
                                    _vm.locale = $$v
                                  },
                                  expression: "locale"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(l.name) +
                                    "\n                  "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      }),
                      1
                    )
                  ])
                ]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=template&id=fd22e4de&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=template&id=fd22e4de&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c("div", { staticClass: "content__split__right__tabs__myleave" }, [
      _c(
        "section",
        { staticClass: "b__collapse__section" },
        [
          _c(
            "b-collapse",
            {
              staticClass: "card",
              attrs: { animation: "slide", "aria-id": "myentitlements" },
              scopedSlots: _vm._u([
                {
                  key: "trigger",
                  fn: function(props) {
                    return _c(
                      "div",
                      {
                        staticClass: "card-header",
                        attrs: {
                          role: "button",
                          "aria-controls": "myentitlements"
                        }
                      },
                      [
                        _c("p", { staticClass: "card-header-title" }, [
                          _vm._v("My Entitlements")
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "card-header-icon" },
                          [
                            _c("b-icon", {
                              attrs: {
                                pack: "fas",
                                icon: props.open ? "caret-down" : "caret-up"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  }
                }
              ])
            },
            [
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c(
                  "div",
                  { staticClass: "content" },
                  [
                    _c(
                      "b-table",
                      {
                        attrs: {
                          data: _vm.authUserLeaves,
                          paginated: _vm.isPaginated,
                          "per-page": _vm.perPage,
                          "current-page": _vm.currentPage,
                          "pagination-simple": _vm.isPaginationSimple,
                          "pagination-position": _vm.paginationPosition,
                          "default-sort-direction": _vm.defaultSortDirection,
                          "sort-icon": _vm.sortIcon,
                          "sort-icon-size": _vm.sortIconSize,
                          "default-sort": "name",
                          "aria-next-label": "Next page",
                          "aria-previous-label": "Previous page",
                          "aria-page-label": "Page",
                          "aria-current-label": "Current page"
                        }
                      },
                      [
                        _c("b-table-column", {
                          attrs: { field: "name", label: "Name", sortable: "" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [_vm._v(_vm._s(props.row.name))]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("b-table-column", {
                          attrs: { field: "type", label: "Type", sortable: "" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c(
                                    "span",
                                    { staticClass: "is-capitalized" },
                                    [_vm._v(_vm._s(props.row.type))]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("b-table-column", {
                          attrs: {
                            field: "accrual",
                            label: "Accrual",
                            sortable: ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c(
                                    "span",
                                    { staticClass: "is-capitalized" },
                                    [_vm._v(_vm._s(props.row.accrual))]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "content__split__right__tabs__myleave" }, [
      _c(
        "section",
        { staticClass: "b__collapse__section" },
        [
          _c(
            "b-collapse",
            {
              staticClass: "card",
              attrs: {
                open: false,
                animation: "slide",
                "aria-id": "entitlements"
              },
              scopedSlots: _vm._u([
                {
                  key: "trigger",
                  fn: function(props) {
                    return _c(
                      "div",
                      {
                        staticClass: "card-header",
                        attrs: {
                          role: "button",
                          "aria-controls": "entitlements"
                        }
                      },
                      [
                        _c("p", { staticClass: "card-header-title" }, [
                          _vm._v("Entitlements")
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "card-header-icon" },
                          [
                            _c("b-icon", {
                              attrs: {
                                pack: "fas",
                                icon: props.open ? "caret-down" : "caret-up"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  }
                }
              ])
            },
            [
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c(
                  "div",
                  { staticClass: "content" },
                  [
                    _c(
                      "b-table",
                      {
                        attrs: {
                          data: _vm.getLeaves,
                          paginated: _vm.isPaginated,
                          "per-page": _vm.perPage,
                          "current-page": _vm.currentPage,
                          "pagination-simple": _vm.isPaginationSimple,
                          "pagination-position": _vm.paginationPosition,
                          "default-sort-direction": _vm.defaultSortDirection,
                          "sort-icon": _vm.sortIcon,
                          "sort-icon-size": _vm.sortIconSize,
                          "default-sort": "name",
                          "aria-next-label": "Next page",
                          "aria-previous-label": "Previous page",
                          "aria-page-label": "Page",
                          "aria-current-label": "Current page"
                        }
                      },
                      [
                        _c("b-table-column", {
                          attrs: { field: "name", label: "Name", sortable: "" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [_vm._v(_vm._s(props.row.name))]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("b-table-column", {
                          attrs: { field: "type", label: "Type", sortable: "" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c(
                                    "span",
                                    { staticClass: "is-capitalized" },
                                    [_vm._v(_vm._s(props.row.type))]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("b-table-column", {
                          attrs: {
                            field: "count",
                            label: "Minimum Leave",
                            sortable: ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        props.row.leave_count +
                                          " " +
                                          props.row.unit
                                      )
                                    )
                                  ])
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("b-table-column", {
                          attrs: { field: "role", label: "Role", sortable: "" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c(
                                    "span",
                                    { staticClass: "is-capitalized" },
                                    [
                                      _vm._v(
                                        _vm._s(props.row.applicable["role"])
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("b-table-column", {
                          attrs: {
                            field: "gender",
                            label: "Gender",
                            sortable: ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c(
                                    "span",
                                    { staticClass: "is-capitalized" },
                                    [
                                      _vm._v(
                                        _vm._s(props.row.applicable["gender"])
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("b-table-column", {
                          attrs: {
                            field: "maritalStatus",
                            label: "Marital Status",
                            sortable: ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c(
                                    "span",
                                    { staticClass: "is-capitalized" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          props.row.applicable["maritalStatus"]
                                        )
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyLeaveComponent.vue?vue&type=template&id=1cb0ef07&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/MyLeaveComponent.vue?vue&type=template&id=1cb0ef07&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c("div", { staticClass: "content__split__right__tabs__myleave" }, [
      _c(
        "section",
        { staticClass: "b__collapse__section" },
        [
          _c(
            "b-collapse",
            {
              staticClass: "card",
              attrs: {
                open: true,
                animation: "slide",
                "aria-id": "myleavelist"
              },
              scopedSlots: _vm._u([
                {
                  key: "trigger",
                  fn: function(props) {
                    return _c(
                      "div",
                      {
                        staticClass: "card-header",
                        attrs: {
                          role: "button",
                          "aria-controls": "myleavelist"
                        }
                      },
                      [
                        _c("p", { staticClass: "card-header-title" }, [
                          _vm._v("Leave Requests")
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "card-header-icon" },
                          [
                            _c("b-icon", {
                              attrs: {
                                pack: "fas",
                                icon: props.open ? "caret-down" : "caret-up"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  }
                }
              ])
            },
            [
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c(
                    "div",
                    { staticClass: "content__split__right__tabs__myleave" },
                    [
                      _c(
                        "section",
                        { staticClass: "b__collapse__section" },
                        [
                          _c(
                            "b-collapse",
                            {
                              staticClass: "card",
                              attrs: {
                                animation: "slide",
                                "aria-id": "myleave"
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "trigger",
                                  fn: function(props) {
                                    return _c(
                                      "div",
                                      {
                                        staticClass: "card-header",
                                        attrs: {
                                          role: "button",
                                          "aria-controls": "myleave"
                                        }
                                      },
                                      [
                                        _c(
                                          "p",
                                          { staticClass: "card-header-title" },
                                          [
                                            _vm._v(
                                              "\n                      Appy Leave  \n                      "
                                            ),
                                            _vm.insufficientBalanceError
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "message is-danger"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "message-body",
                                                        staticStyle: {
                                                          padding: ".3rem 1rem"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.insufficientBalanceError
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          { staticClass: "card-header-icon" },
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                pack: "fas",
                                                icon: props.open
                                                  ? "caret-down"
                                                  : "caret-up"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.isToggleApplyLeaveForm,
                                callback: function($$v) {
                                  _vm.isToggleApplyLeaveForm = $$v
                                },
                                expression: "isToggleApplyLeaveForm"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c("div", { staticClass: "card-content" }, [
                                _c("div", { staticClass: "content" }, [
                                  _c("div", { staticClass: "columns" }, [
                                    _c("div", { staticClass: "column is-7" }, [
                                      _c(
                                        "form",
                                        {
                                          staticClass: "leave__type__form",
                                          attrs: { action: "" },
                                          on: {
                                            submit: function($event) {
                                              $event.preventDefault()
                                              return _vm.applyLeave()
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "section",
                                            [
                                              _c(
                                                "b-field",
                                                {
                                                  attrs: {
                                                    label: "Select Leave Type:",
                                                    horizontal: ""
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "b-select",
                                                    {
                                                      attrs: {
                                                        size: "is-small",
                                                        expanded: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.leaveRequest
                                                            .leaveType,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.leaveRequest,
                                                            "leaveType",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "leaveRequest.leaveType"
                                                      }
                                                    },
                                                    _vm._l(
                                                      _vm.authUserLeaves,
                                                      function(leave) {
                                                        return _c(
                                                          "option",
                                                          {
                                                            key: leave.id,
                                                            domProps: {
                                                              value: leave.name
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(leave.name)
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-field",
                                                {
                                                  attrs: {
                                                    label: "Date:",
                                                    horizontal: ""
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "columns" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "column is-6"
                                                        },
                                                        [
                                                          _c(
                                                            "b-field",
                                                            {
                                                              attrs: {
                                                                label: "From"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "b-datepicker",
                                                                {
                                                                  attrs: {
                                                                    size:
                                                                      "is-small",
                                                                    pack: "fas",
                                                                    icon:
                                                                      "calendar"
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .leaveRequest
                                                                        .from,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.leaveRequest,
                                                                        "from",
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "leaveRequest.from"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "column is-6"
                                                        },
                                                        [
                                                          _c(
                                                            "b-field",
                                                            {
                                                              attrs: {
                                                                label: "to"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "b-datepicker",
                                                                {
                                                                  attrs: {
                                                                    size:
                                                                      "is-small",
                                                                    pack: "fas",
                                                                    icon:
                                                                      "calendar"
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .leaveRequest
                                                                        .to,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.leaveRequest,
                                                                        "to",
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "leaveRequest.to"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-field",
                                                {
                                                  attrs: {
                                                    label: "Total:",
                                                    horizontal: ""
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "columns" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "column is-6"
                                                        },
                                                        [
                                                          _c("b-input", {
                                                            attrs: {
                                                              size: "is-small",
                                                              expanded: "",
                                                              value: "1",
                                                              disabled: "true"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.leaveRequest
                                                                  .total,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.leaveRequest,
                                                                  "total",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "leaveRequest.total"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "column is-6"
                                                        },
                                                        [
                                                          _c("p", [
                                                            _vm._v("day(s)")
                                                          ])
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-field",
                                                {
                                                  attrs: {
                                                    label: "Reason:",
                                                    horizontal: ""
                                                  }
                                                },
                                                [
                                                  _c("b-input", {
                                                    attrs: {
                                                      type: "textarea",
                                                      size: "is-small",
                                                      expanded: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.leaveRequest.reason,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.leaveRequest,
                                                          "reason",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "leaveRequest.reason"
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
                                            "section",
                                            { staticClass: "mt-5" },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "button is-success is-light",
                                                  attrs: { type: "submit" }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.isSubmittingApplyLeave
                                                        ? "Submitting..."
                                                        : "Add"
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "button is-danger is-light",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.cancelApplyLeaveFrom()
                                                    }
                                                  }
                                                },
                                                [_vm._v("Close")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "column is-5" }, [
                                      _c("div", { staticClass: "card" }, [
                                        _c(
                                          "div",
                                          { staticClass: "card-content" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "content",
                                                staticStyle: {
                                                  "font-size": ".75rem"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "columns",
                                                    staticStyle: {
                                                      "margin-bottom": "-1.2rem"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "column is-10"
                                                      },
                                                      [
                                                        _c("b", [
                                                          _vm._v(
                                                            "As of " +
                                                              _vm._s(
                                                                _vm.formatDate2(
                                                                  new Date()
                                                                )
                                                              )
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "column is-2"
                                                      },
                                                      [
                                                        _c("b", [
                                                          _vm._v("Day(s)")
                                                        ])
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "columns",
                                                    staticStyle: {
                                                      "margin-bottom": "-1.2rem"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "column is-10"
                                                      },
                                                      [
                                                        _c("p", [
                                                          _vm._v(
                                                            "Available balance"
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "column is-2"
                                                      },
                                                      [
                                                        _c("p", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.leaveRequest
                                                                .availableBalance
                                                            )
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "columns",
                                                    staticStyle: {
                                                      "margin-bottom": "-1.2rem"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "column is-10"
                                                      },
                                                      [
                                                        _c("p", [
                                                          _vm._v(
                                                            "Currently booked"
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "column is-2"
                                                      },
                                                      [
                                                        _c("p", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.leaveRequest
                                                                .total
                                                            )
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "columns" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "column is-10"
                                                      },
                                                      [
                                                        _c("p", [
                                                          _vm._v("New balance")
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "column is-2"
                                                      },
                                                      [
                                                        _c("p", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.newBalance
                                                                ? _vm.newBalance
                                                                : ""
                                                            )
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "section",
                    [
                      _c(
                        "b-table",
                        {
                          attrs: {
                            data: _vm.getMyLeaveRequest,
                            paginated: _vm.isPaginated,
                            "per-page": _vm.perPage,
                            "current-page": _vm.currentPage,
                            "pagination-simple": _vm.isPaginationSimple,
                            "pagination-position": _vm.paginationPosition,
                            "default-sort-direction": _vm.defaultSortDirection,
                            "sort-icon": _vm.sortIcon,
                            "sort-icon-size": _vm.sortIconSize,
                            "default-sort": "date",
                            "aria-next-label": "Next page",
                            "aria-previous-label": "Previous page",
                            "aria-page-label": "Page",
                            "aria-current-label": "Current page"
                          }
                        },
                        [
                          _c("b-table-column", {
                            attrs: {
                              field: "date",
                              label: "Date",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c("span", { staticClass: "tag" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.formatDateShort2(props.row.from) +
                                            " - " +
                                            _vm.formatDateShort2(props.row.to)
                                        )
                                      )
                                    ])
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "type",
                              label: "Type",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "is-capitalized" },
                                      [_vm._v(_vm._s(props.row.type))]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "accrual",
                              label: "Days",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "is-capitalized" },
                                      [_vm._v(_vm._s(props.row.days))]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "accrual",
                              label: "New Balance",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "is-capitalized" },
                                      [_vm._v(_vm._s(props.row.new_balance))]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "accrual",
                              label: "Old Balance",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "is-capitalized" },
                                      [_vm._v(_vm._s(props.row.prev_balance))]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "accrual",
                              label: "Reason",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "is-capitalized" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            "" +
                                              (props.row.reason !== null
                                                ? props.row.reason.substring(
                                                    0,
                                                    25
                                                  ) + "..."
                                                : "")
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "accrual",
                              label: "Status",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "span",
                                      {
                                        staticClass: "is-capitalized tag",
                                        class: _vm.leaveRequestStatus(
                                          props.row.status
                                        )
                                      },
                                      [_vm._v(_vm._s(props.row.status))]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            { attrs: { field: "actions", label: "Actions" } },
                            [
                              _c(
                                "div",
                                { staticClass: "b-tooltips" },
                                [
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: "Cancel",
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-default is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "times"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: "Delete",
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-danger is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "trash"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ProfileComponent.vue?vue&type=template&id=22f352ee&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/ProfileComponent.vue?vue&type=template&id=22f352ee&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "staff__profile" },
    [
      _c(
        "b-tabs",
        {
          attrs: { type: "is-toggle", size: "", animated: false, expanded: "" }
        },
        [
          _c(
            "b-tab-item",
            { attrs: { label: _vm.$t("app.personal_details") } },
            [_c("PersonalDetails")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tab-item",
            { attrs: { label: _vm.$t("app.contact_details") } },
            [_c("ContactDetails")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tab-item",
            { attrs: { label: _vm.$t("app.emergency_contacts") } },
            [_c("EmergencyContactDetails")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tab-item",
            { attrs: { label: _vm.$t("app.job") } },
            [_c("JobDetails")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tab-item",
            { attrs: { label: _vm.$tc("app.qualification", 2) } },
            [_c("QualificationDetails")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tab-item",
            { attrs: { label: _vm.$t("app.report_to1") } },
            [_c("ReportToDetails")],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ContactDetails.vue?vue&type=template&id=614bd6c6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/ContactDetails.vue?vue&type=template&id=614bd6c6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "b__collapse__section" }, [
    _c("div", { staticClass: "card" }, [
      _c("header", { staticClass: "card-header" }),
      _vm._v(" "),
      _c("div", { staticClass: "profile-detail-bar" }, [
        _c("p", { staticClass: "p-text" }, [
          _vm._v(_vm._s(_vm.$t("app.contact_detail_cta")))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c(
          "div",
          { staticClass: "content" },
          [
            _vm.userOrPermission("update", _vm.getProfile.user_id)
              ? [
                  _vm.isEditContactDetails
                    ? _c(
                        "b-field",
                        { staticClass: "mb-4" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "is-info is-light",
                              attrs: { "icon-left": "pen" },
                              on: {
                                click: function($event) {
                                  _vm.isEditContactDetails = !_vm.isEditContactDetails
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("app.edit")))]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("fieldset", { attrs: { disabled: _vm.isEditContactDetails } }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateContactDetails()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-6" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: " " + _vm.$t("app.address") + " (1)",
                              type: {
                                "is-danger":
                                  _vm.contactDetailsErrors.address1.length > 0
                              },
                              message: _vm.contactDetailsErrors.address1
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: {
                                type: "textarea",
                                placeholder:
                                  " " +
                                  _vm.$t("app.address_placehoder") +
                                  "...",
                                size: ""
                              },
                              model: {
                                value: _vm.contactDetails.address1,
                                callback: function($$v) {
                                  _vm.$set(_vm.contactDetails, "address1", $$v)
                                },
                                expression: "contactDetails.address1"
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
                      { staticClass: "column is-6" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: " " + _vm.$t("app.address") + " (2)",
                              type: {
                                "is-danger":
                                  _vm.contactDetailsErrors.address2.length > 0
                              },
                              message: _vm.contactDetailsErrors.address2
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: {
                                type: "textarea",
                                placeholder:
                                  " " +
                                  _vm.$t("app.address_placehoder") +
                                  "...",
                                size: ""
                              },
                              model: {
                                value: _vm.contactDetails.address2,
                                callback: function($$v) {
                                  _vm.$set(_vm.contactDetails, "address2", $$v)
                                },
                                expression: "contactDetails.address2"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: _vm.$t("app.city"),
                              expanded: "",
                              type: {
                                "is-danger":
                                  _vm.contactDetailsErrors.city.length > 0
                              },
                              message: _vm.contactDetailsErrors.city
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { size: "" },
                              model: {
                                value: _vm.contactDetails.city,
                                callback: function($$v) {
                                  _vm.$set(_vm.contactDetails, "city", $$v)
                                },
                                expression: "contactDetails.city"
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
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label:
                                _vm.$t("app.state") +
                                "/" +
                                _vm.$t("app.region"),
                              expanded: "",
                              type: {
                                "is-danger":
                                  _vm.contactDetailsErrors.region.length > 0
                              },
                              message: _vm.contactDetailsErrors.region
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { size: "" },
                              model: {
                                value: _vm.contactDetails.region,
                                callback: function($$v) {
                                  _vm.$set(_vm.contactDetails, "region", $$v)
                                },
                                expression: "contactDetails.region"
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
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: _vm.$t("app.country"),
                              expanded: "",
                              type: {
                                "is-danger":
                                  _vm.contactDetailsErrors.country.length > 0
                              },
                              message: _vm.contactDetailsErrors.country
                            }
                          },
                          [
                            _c(
                              "b-select",
                              {
                                attrs: { size: "", expanded: "" },
                                model: {
                                  value: _vm.contactDetails.country,
                                  callback: function($$v) {
                                    _vm.$set(_vm.contactDetails, "country", $$v)
                                  },
                                  expression: "contactDetails.country"
                                }
                              },
                              _vm._l(_vm.getCountries, function(c) {
                                return _c(
                                  "option",
                                  { key: c.name, domProps: { value: c.name } },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(
                                          _vm.locale !== "en"
                                            ? c.translations["" + _vm.locale]
                                            : c.name
                                        ) +
                                        "\n                    "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: _vm.$t("app.mobile"),
                              expanded: "",
                              type: {
                                "is-danger":
                                  _vm.contactDetailsErrors.mobile.length > 0
                              },
                              message: _vm.contactDetailsErrors.mobile
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { size: "" },
                              model: {
                                value: _vm.contactDetails.mobile,
                                callback: function($$v) {
                                  _vm.$set(_vm.contactDetails, "mobile", $$v)
                                },
                                expression: "contactDetails.mobile"
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
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: _vm.$t("app.work_tel"),
                              expanded: "",
                              type: {
                                "is-danger":
                                  _vm.contactDetailsErrors.workTelephone
                                    .length > 0
                              },
                              message: _vm.contactDetailsErrors.workTelephone
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { size: "" },
                              model: {
                                value: _vm.contactDetails.workTelephone,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.contactDetails,
                                    "workTelephone",
                                    $$v
                                  )
                                },
                                expression: "contactDetails.workTelephone"
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
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: _vm.$t("app.home_tel"),
                              expanded: "",
                              type: {
                                "is-danger":
                                  _vm.contactDetailsErrors.homeTelephone
                                    .length > 0
                              },
                              message: _vm.contactDetailsErrors.homeTelephone
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { size: "" },
                              model: {
                                value: _vm.contactDetails.homeTelephone,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.contactDetails,
                                    "homeTelephone",
                                    $$v
                                  )
                                },
                                expression: "contactDetails.homeTelephone"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: _vm.$t("app.work_email"),
                              expanded: "",
                              type: {
                                "is-danger":
                                  _vm.contactDetailsErrors.workEmail.length > 0
                              },
                              message: _vm.contactDetailsErrors.workEmail
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { size: "" },
                              model: {
                                value: _vm.contactDetails.workEmail,
                                callback: function($$v) {
                                  _vm.$set(_vm.contactDetails, "workEmail", $$v)
                                },
                                expression: "contactDetails.workEmail"
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
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: _vm.$t("app.other_email"),
                              expanded: "",
                              type: {
                                "is-danger":
                                  _vm.contactDetailsErrors.otherEmail.length > 0
                              },
                              message: _vm.contactDetailsErrors.otherEmail
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { size: "" },
                              model: {
                                value: _vm.contactDetails.otherEmail,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.contactDetails,
                                    "otherEmail",
                                    $$v
                                  )
                                },
                                expression: "contactDetails.otherEmail"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  !_vm.isEditContactDetails
                    ? _c("b-field", [
                        _c(
                          "div",
                          { staticClass: "buttons" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "button is-success is-light",
                                attrs: {
                                  type: "submit",
                                  disabled: _vm.isSubmittingContactDetails
                                }
                              },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(
                                      _vm.isSubmittingContactDetails
                                        ? _vm.$t("app.saving") + "..."
                                        : _vm.$t("app.save")
                                    ) +
                                    "\n                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "is-danger is-light",
                                on: {
                                  click: function($event) {
                                    return _vm.cancelContactDetailsForm()
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.$t("app.cancel")))]
                            )
                          ],
                          1
                        )
                      ])
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _vm.userOrPermission("update", _vm.getProfile.user_id)
              ? [
                  _vm.isEditContactDetails
                    ? _c(
                        "b-field",
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "is-info is-light",
                              attrs: { "icon-left": "pen" },
                              on: {
                                click: function($event) {
                                  _vm.isEditContactDetails = !_vm.isEditContactDetails
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("app.edit")))]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=template&id=831a7530&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=template&id=831a7530&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    { staticClass: "b__collapse__section" },
    [
      _c("div", { staticClass: "card" }, [
        _c("header", { staticClass: "card-header" }),
        _vm._v(" "),
        _c("div", { staticClass: "profile-detail-bar" }, [
          _c("p", { staticClass: "p-text" }, [
            _vm._v(_vm._s(_vm.$t("app.emergency_contact_cta")))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-content" }, [
          _c(
            "div",
            { staticClass: "content" },
            [
              _vm.userOrPermission("create", _vm.getProfile.user_id)
                ? _c(
                    "section",
                    { staticClass: "b__collapse__section" },
                    [
                      _c(
                        "b-collapse",
                        {
                          staticClass: "card",
                          attrs: {
                            animation: "slide",
                            "aria-id": "addreportingmethod"
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "trigger",
                                fn: function(props) {
                                  return _c(
                                    "div",
                                    {
                                      staticClass: "card-header",
                                      attrs: {
                                        role: "button",
                                        "aria-controls": "addreportingmethod"
                                      }
                                    },
                                    [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "card-header-title has-text-info"
                                        },
                                        [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(
                                                _vm.$t(
                                                  "app.add_emergency_contact"
                                                )
                                              ) +
                                              "\n              "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        { staticClass: "card-header-icon" },
                                        [
                                          _c("b-icon", {
                                            attrs: {
                                              pack: "fas",
                                              type: "is-info",
                                              icon: props.open
                                                ? "angle-down"
                                                : "angle-up"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                }
                              }
                            ],
                            null,
                            false,
                            1740276904
                          ),
                          model: {
                            value: _vm.closeEmergencyContactDetailsForm,
                            callback: function($$v) {
                              _vm.closeEmergencyContactDetailsForm = $$v
                            },
                            expression: "closeEmergencyContactDetailsForm"
                          }
                        },
                        [
                          _vm._v(" "),
                          _c("div", { staticClass: "card-content" }, [
                            _c("div", { staticClass: "content" }, [
                              _c(
                                "form",
                                {
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.addEmergencyContact()
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "columns" }, [
                                    _c(
                                      "div",
                                      { staticClass: "column is-6" },
                                      [
                                        _c(
                                          "b-field",
                                          {
                                            attrs: {
                                              label: _vm.$t("app.name"),
                                              expanded: "",
                                              type: {
                                                "is-danger":
                                                  _vm.emergencyContactErrors
                                                    .name.length > 0
                                              },
                                              message:
                                                _vm.emergencyContactErrors.name
                                            }
                                          },
                                          [
                                            _c("b-input", {
                                              attrs: { size: "" },
                                              model: {
                                                value:
                                                  _vm.emergencyContact.name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.emergencyContact,
                                                    "name",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "emergencyContact.name"
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
                                      { staticClass: "column is-6" },
                                      [
                                        _c(
                                          "b-field",
                                          {
                                            attrs: {
                                              label: _vm.$t("app.relationship"),
                                              expanded: "",
                                              type: {
                                                "is-danger":
                                                  _vm.emergencyContactErrors
                                                    .relationship.length > 0
                                              },
                                              message:
                                                _vm.emergencyContactErrors
                                                  .relationship
                                            }
                                          },
                                          [
                                            _c("b-input", {
                                              attrs: { size: "" },
                                              model: {
                                                value:
                                                  _vm.emergencyContact
                                                    .relationship,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.emergencyContact,
                                                    "relationship",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "emergencyContact.relationship"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "columns" }, [
                                    _c(
                                      "div",
                                      { staticClass: "column is-4" },
                                      [
                                        _c(
                                          "b-field",
                                          {
                                            attrs: {
                                              label: _vm.$t("app.mobile"),
                                              expanded: "",
                                              type: {
                                                "is-danger":
                                                  _vm.emergencyContactErrors
                                                    .mobile.length > 0
                                              },
                                              message:
                                                _vm.emergencyContactErrors
                                                  .mobile
                                            }
                                          },
                                          [
                                            _c("b-input", {
                                              attrs: { size: "" },
                                              model: {
                                                value:
                                                  _vm.emergencyContact.mobile,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.emergencyContact,
                                                    "mobile",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "emergencyContact.mobile"
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
                                      { staticClass: "column is-4" },
                                      [
                                        _c(
                                          "b-field",
                                          {
                                            attrs: {
                                              label: _vm.$t("app.home_tel"),
                                              expanded: "",
                                              type: {
                                                "is-danger":
                                                  _vm.emergencyContactErrors
                                                    .homeTelephone.length > 0
                                              },
                                              message:
                                                _vm.emergencyContactErrors
                                                  .homeTelephone
                                            }
                                          },
                                          [
                                            _c("b-input", {
                                              attrs: { size: "" },
                                              model: {
                                                value:
                                                  _vm.emergencyContact
                                                    .homeTelephone,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.emergencyContact,
                                                    "homeTelephone",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "emergencyContact.homeTelephone"
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
                                      { staticClass: "column is-4" },
                                      [
                                        _c(
                                          "b-field",
                                          {
                                            attrs: {
                                              label: _vm.$t("app.work_tel"),
                                              expanded: "",
                                              type: {
                                                "is-danger":
                                                  _vm.emergencyContactErrors
                                                    .workTelephone.length > 0
                                              },
                                              message:
                                                _vm.emergencyContactErrors
                                                  .workTelephone
                                            }
                                          },
                                          [
                                            _c("b-input", {
                                              attrs: { size: "" },
                                              model: {
                                                value:
                                                  _vm.emergencyContact
                                                    .workTelephone,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.emergencyContact,
                                                    "workTelephone",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "emergencyContact.workTelephone"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("hr"),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "buttons" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "button is-success is-light",
                                          attrs: {
                                            type: "submit",
                                            disabled:
                                              _vm.isSubmittingEmergencyContact
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(
                                                _vm.isSubmittingEmergencyContact
                                                  ? _vm.$t("app.submitting") +
                                                      "..."
                                                  : _vm.$t("app.submit")
                                              ) +
                                              "\n                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "is-danger is-light",
                                          on: {
                                            click: function($event) {
                                              return _vm.cancelEmergencyContactDetailsForm()
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.$t("app.cancel")))]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ])
                          ])
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-table",
                {
                  attrs: {
                    data: _vm.getProfile.emergency_contacts || [],
                    paginated: true,
                    "per-page": 10,
                    "current-page": 1,
                    "pagination-simple": true,
                    "default-sort-direction": "desc",
                    "sort-icon": "arrow-up",
                    "sort-icon-size": "is-small",
                    striped: "",
                    hoverable: "",
                    "default-sort": "id",
                    "pagination-position": "bottom",
                    "aria-next-label": "Next page",
                    "aria-previous-label": "Previous page",
                    "aria-page-label": "Page",
                    "aria-current-label": "Current page"
                  }
                },
                [
                  _c("b-table-column", {
                    attrs: {
                      field: "name",
                      label: _vm.$t("app.name"),
                      sortable: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [_vm._v(_vm._s(props.row.name))]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("b-table-column", {
                    attrs: {
                      field: "relationship",
                      label: _vm.$t("app.relationship"),
                      sortable: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [_vm._v(_vm._s(props.row.relationship))]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("b-table-column", {
                    attrs: {
                      field: "mobile",
                      label: _vm.$t("app.mobile"),
                      sortable: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [_vm._v(_vm._s(props.row.mobile))]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("b-table-column", {
                    attrs: {
                      field: "worktelephone",
                      label: _vm.$t("app.work_tel"),
                      sortable: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [_vm._v(_vm._s(props.row.workTelephone))]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("b-table-column", {
                    attrs: {
                      field: "telephone",
                      label: _vm.$t("app.home_tel"),
                      sortable: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [_vm._v(_vm._s(props.row.homeTelephone))]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("b-table-column", {
                    attrs: {
                      field: "actions",
                      label: _vm.$tc("app.action", 2)
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [
                            _c(
                              "div",
                              { staticClass: "b-tooltips" },
                              [
                                _c(
                                  "b-tooltip",
                                  {
                                    attrs: {
                                      label: _vm.$t("app.editContact"),
                                      type: "is-dark"
                                    }
                                  },
                                  [
                                    _c("b-button", {
                                      staticClass: "is-info is-light",
                                      attrs: {
                                        size: "is-small",
                                        pack: "fas",
                                        "icon-right": "pen",
                                        id:
                                          "contact-id" +
                                          _vm.getContactDropperId,
                                        disabled: !_vm.userOrPermission(
                                          "update",
                                          _vm.getProfile.user_id
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.openContactDropper(
                                            props.row
                                          )
                                        }
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-tooltip",
                                  {
                                    attrs: {
                                      label: _vm.$t("app.delete"),
                                      type: "is-dark"
                                    }
                                  },
                                  [
                                    _c("b-button", {
                                      staticClass: "is-danger is-light",
                                      attrs: {
                                        size: "is-small",
                                        pack: "fas",
                                        "icon-right": "trash",
                                        disabled: !_vm.userOrPermission(
                                          "delete",
                                          _vm.getProfile.user_id
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteEmergencyContact(
                                            props.row.id
                                          )
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "contactDropper",
          staticClass: "dropper",
          attrs: {
            join: "#contact-id" + _vm.getContactDropperId,
            "z-index": 999
          },
          on: {
            "esc-keydown": _vm.closeContactDropper,
            "other-area-clicked": _vm.closeContactDropper
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateEmergencyContact()
                }
              }
            },
            [
              _c("h3", { staticClass: "label text-main" }, [
                _vm._v("Edit Emergency Contact")
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-6" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Name",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.emergencyContactErrors.name.length > 0
                          },
                          message: _vm.emergencyContactErrors.name
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "" },
                          model: {
                            value: _vm.emergencyContact.name,
                            callback: function($$v) {
                              _vm.$set(_vm.emergencyContact, "name", $$v)
                            },
                            expression: "emergencyContact.name"
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
                  { staticClass: "column is-6" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Relationship",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.emergencyContactErrors.relationship.length > 0
                          },
                          message: _vm.emergencyContactErrors.relationship
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "" },
                          model: {
                            value: _vm.emergencyContact.relationship,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.emergencyContact,
                                "relationship",
                                $$v
                              )
                            },
                            expression: "emergencyContact.relationship"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-6" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Mobile",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.emergencyContactErrors.mobile.length > 0
                          },
                          message: _vm.emergencyContactErrors.mobile
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "" },
                          model: {
                            value: _vm.emergencyContact.mobile,
                            callback: function($$v) {
                              _vm.$set(_vm.emergencyContact, "mobile", $$v)
                            },
                            expression: "emergencyContact.mobile"
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
                  { staticClass: "column is-6" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Home Telephone",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.emergencyContactErrors.homeTelephone.length >
                              0
                          },
                          message: _vm.emergencyContactErrors.homeTelephone
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "" },
                          model: {
                            value: _vm.emergencyContact.homeTelephone,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.emergencyContact,
                                "homeTelephone",
                                $$v
                              )
                            },
                            expression: "emergencyContact.homeTelephone"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-12" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Work Telephone",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.emergencyContactErrors.workTelephone.length >
                              0
                          },
                          message: _vm.emergencyContactErrors.workTelephone
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "" },
                          model: {
                            value: _vm.emergencyContact.workTelephone,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.emergencyContact,
                                "workTelephone",
                                $$v
                              )
                            },
                            expression: "emergencyContact.workTelephone"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "buttons" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "button is-success is-light",
                      attrs: {
                        type: "submit",
                        disabled: _vm.isSubmittingEmergencyContact
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.isSubmittingEmergencyContact
                              ? "Saving..."
                              : "Save"
                          ) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "is-danger is-light",
                      on: {
                        click: function($event) {
                          return _vm.closeContactDropper()
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/JobDetails.vue?vue&type=template&id=1b5ebb40&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/JobDetails.vue?vue&type=template&id=1b5ebb40&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "b__collapse__section" }, [
    _c("div", { staticClass: "card" }, [
      _c("header", { staticClass: "card-header" }),
      _vm._v(" "),
      _c("div", { staticClass: "profile-detail-bar" }, [
        _c("p", { staticClass: "p-text" }, [
          _vm._v(_vm._s(_vm.$t("app.job_details_cta")))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c(
          "div",
          { staticClass: "content" },
          [
            _vm.isPermission("update")
              ? [
                  _vm.isEditJob
                    ? _c(
                        "div",
                        { staticClass: "buttons mb-4" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "is-info is-light",
                              attrs: { "icon-left": "pen" },
                              on: {
                                click: function($event) {
                                  _vm.isEditJob = !_vm.isEditJob
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("app.edit")))]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("fieldset", { attrs: { disabled: _vm.isEditJob } }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateJob()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: {
                            label: _vm.$t("app.jobCategory"),
                            expanded: ""
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              expanded: "",
                              type: {
                                "is-danger": _vm.jobErrors.category.length > 0
                              },
                              message: _vm.jobErrors.category
                            }
                          },
                          [
                            _c(
                              "b-select",
                              {
                                attrs: { size: "", expanded: "" },
                                model: {
                                  value: _vm.job.category,
                                  callback: function($$v) {
                                    _vm.$set(_vm.job, "category", $$v)
                                  },
                                  expression: "job.category"
                                }
                              },
                              _vm._l(_vm.getJobCategories, function(el, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: el.id } },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(el.category) +
                                        "\n                    "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: { label: _vm.$t("app.jobTitle"), expanded: "" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "",
                              expanded: "",
                              type: {
                                "is-danger": _vm.jobErrors.title.length > 0
                              },
                              message: _vm.jobErrors.title
                            }
                          },
                          [
                            _c(
                              "b-select",
                              {
                                attrs: { size: "", expanded: "" },
                                model: {
                                  value: _vm.job.title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.job, "title", $$v)
                                  },
                                  expression: "job.title"
                                }
                              },
                              _vm._l(_vm.filteredJobTitles, function(
                                title,
                                index
                              ) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: title.id } },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(title.title) +
                                        "\n                    "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: { label: _vm.$t("app.jobSpec"), expanded: "" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-8" },
                      [
                        _c("b-field", { attrs: { label: "", expanded: "" } }, [
                          _c("p", [
                            _vm.job.specification === ""
                              ? _c("span", [
                                  _vm._v(_vm._s(_vm.$t("app.notDefined")))
                                ])
                              : !_vm.jobSpecification && _vm.job.specification
                              ? _c(
                                  "a",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.viewSpecification(
                                          "/job-specifications/" +
                                            _vm.job.specification
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.job.specification))]
                                )
                              : _vm._e()
                          ])
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: {
                            label: _vm.$t("app.empStatus"),
                            expanded: ""
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "",
                              expanded: "",
                              type: {
                                "is-danger":
                                  _vm.jobErrors.employmentStatus.length > 0
                              },
                              message: _vm.jobErrors.employmentStatus
                            }
                          },
                          [
                            _c(
                              "b-select",
                              {
                                attrs: { size: "", expanded: "" },
                                model: {
                                  value: _vm.job.employmentStatus,
                                  callback: function($$v) {
                                    _vm.$set(_vm.job, "employmentStatus", $$v)
                                  },
                                  expression: "job.employmentStatus"
                                }
                              },
                              _vm._l(_vm.getEmploymentStatus, function(
                                status,
                                index
                              ) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: { value: status.id }
                                  },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(status.status) +
                                        "\n                    "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("h5", { staticClass: "text-main" }, [
                    _vm._v(_vm._s(_vm.$t("app.organization")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: {
                            label: _vm.$t("app.department"),
                            expanded: ""
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "",
                              expanded: "",
                              type: {
                                "is-danger": _vm.jobErrors.department.length > 0
                              },
                              message: _vm.jobErrors.department
                            }
                          },
                          [
                            _c(
                              "b-select",
                              {
                                attrs: { size: "", expanded: "" },
                                model: {
                                  value: _vm.job.department,
                                  callback: function($$v) {
                                    _vm.$set(_vm.job, "department", $$v)
                                  },
                                  expression: "job.department"
                                }
                              },
                              [
                                _c("option", { attrs: { value: "none" } }, [
                                  _vm._v("None")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.getDepartments, function(
                                  dept,
                                  index
                                ) {
                                  return _c(
                                    "option",
                                    {
                                      key: index,
                                      domProps: { value: dept.id }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(dept.name) +
                                          "\n                    "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: { label: _vm.$t("app.unit"), expanded: "" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "",
                              expanded: "",
                              type: {
                                "is-danger": _vm.jobErrors.unit.length > 0
                              },
                              message: _vm.jobErrors.unit
                            }
                          },
                          [
                            _c(
                              "b-select",
                              {
                                attrs: { size: "", expanded: "" },
                                model: {
                                  value: _vm.job.unit,
                                  callback: function($$v) {
                                    _vm.$set(_vm.job, "unit", $$v)
                                  },
                                  expression: "job.unit"
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("None")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.departmentUnits, function(u, index) {
                                  return _c(
                                    "option",
                                    {
                                      key: u + index,
                                      domProps: { value: u.id }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(u.name) +
                                          "\n                    "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: { label: _vm.$t("app.position"), expanded: "" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "",
                              expanded: "",
                              type: {
                                "is-danger": _vm.jobErrors.position.length > 0
                              },
                              message: _vm.jobErrors.position
                            }
                          },
                          [
                            _c(
                              "b-select",
                              {
                                attrs: { size: "", expanded: "" },
                                model: {
                                  value: _vm.job.position,
                                  callback: function($$v) {
                                    _vm.$set(_vm.job, "position", $$v)
                                  },
                                  expression: "job.position"
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("None")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.getPositions, function(p, index) {
                                  return _c(
                                    "option",
                                    {
                                      key: p + index,
                                      domProps: { value: p.id }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(p.name) +
                                          "\n                    "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("h5", { staticClass: "text-main" }, [
                    _vm._v(_vm._s(_vm.$t("app.empContract")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: { label: _vm.$t("app.sDate"), expanded: "" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "",
                              expanded: "",
                              type: {
                                "is-danger": _vm.jobErrors.startDate.length > 0
                              },
                              message: _vm.jobErrors.startDate
                            }
                          },
                          [
                            _c("b-datetimepicker", {
                              attrs: {
                                timepicker: { hourFormat: "12" },
                                "horizontal-time-picker": "",
                                placeholder: "Click to select...",
                                pack: "fas",
                                icon: "calendar",
                                "trap-focus": "",
                                size: ""
                              },
                              model: {
                                value: _vm.job.startDate,
                                callback: function($$v) {
                                  _vm.$set(_vm.job, "startDate", $$v)
                                },
                                expression: "job.startDate"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: { label: _vm.$t("app.eDate"), expanded: "" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              expanded: "",
                              type: {
                                "is-danger": _vm.jobErrors.endDate.length > 0
                              },
                              message: _vm.jobErrors.endDate
                            }
                          },
                          [
                            _c("b-datetimepicker", {
                              attrs: {
                                timepicker: { hourFormat: "12" },
                                "horizontal-time-picker": "",
                                placeholder: "Click to select...",
                                pack: "fas",
                                icon: "calendar",
                                "trap-focus": "",
                                size: ""
                              },
                              model: {
                                value: _vm.job.endDate,
                                callback: function($$v) {
                                  _vm.$set(_vm.job, "endDate", $$v)
                                },
                                expression: "job.endDate"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: {
                            label: _vm.$t("app.conStatus"),
                            expanded: ""
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        _c("b-field", { attrs: { label: "", expanded: "" } }, [
                          _c("p", [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm.job.contractStatus === "award"
                                    ? _vm.$t("app.active")
                                    : _vm.job.contractStatus === "terminate"
                                    ? _vm.$t("app.terminated")
                                    : _vm.$t("app.notDefined")
                                ) +
                                "\n                  "
                            )
                          ])
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: {
                            label: _vm.$t("app.conDetails"),
                            expanded: ""
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        !_vm.isNull(_vm.job.contractDetailsAvailable)
                          ? _c("b-field", { attrs: { expanded: "" } }, [
                              _c("p", [
                                _vm._v(_vm._s(_vm.$t("app.notDefined")))
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isNull(_vm.job.contractDetailsAvailable)
                          ? _c("b-field", { attrs: { expanded: "" } }, [
                              _c("p", [
                                _c(
                                  "a",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.viewSpecification(
                                          "/job-contracts/" +
                                            _vm.job.contractDetailsAvailable
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.job.contractDetailsAvailable)
                                    )
                                  ]
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.job.contractDetailsAvailable
                          ? _c(
                              "b-field",
                              {
                                attrs: {
                                  type: {
                                    "is-danger":
                                      _vm.jobErrors.contractDetails.length > 0
                                  },
                                  message: _vm.jobErrors.contractDetails
                                }
                              },
                              [
                                _c(
                                  "b-field",
                                  {
                                    staticClass: "file is-dark",
                                    attrs: { expanded: "" }
                                  },
                                  [
                                    _c(
                                      "b-upload",
                                      {
                                        staticClass: "file-label",
                                        attrs: { size: "is-small" },
                                        model: {
                                          value: _vm.job.contractDetails,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.job,
                                              "contractDetails",
                                              $$v
                                            )
                                          },
                                          expression: "job.contractDetails"
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "file-cta" },
                                          [
                                            _c("b-icon", {
                                              staticClass: "file-icon",
                                              attrs: {
                                                icon: "upload",
                                                size: "is-small"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "file-label" },
                                              [_vm._v("Upload")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.job.contractDetails
                                          ? _c(
                                              "span",
                                              { staticClass: "file-name" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.job.contractDetails.name
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c("div", { staticClass: "column is-3" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-5" },
                      [
                        _vm.job.contractDetailsAvailable
                          ? _c(
                              "div",
                              { staticClass: "block" },
                              [
                                _c(
                                  "b-radio",
                                  {
                                    attrs: {
                                      size: "",
                                      type: "is-info",
                                      name: "contractDetailsControl",
                                      "native-value": "kc"
                                    },
                                    model: {
                                      value: _vm.contractDetailsControl,
                                      callback: function($$v) {
                                        _vm.contractDetailsControl = $$v
                                      },
                                      expression: "contractDetailsControl"
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("app.keepCurrent")))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-radio",
                                  {
                                    attrs: {
                                      size: "",
                                      type: "is-info",
                                      name: "contractDetailsControl",
                                      "native-value": "dc"
                                    },
                                    model: {
                                      value: _vm.contractDetailsControl,
                                      callback: function($$v) {
                                        _vm.contractDetailsControl = $$v
                                      },
                                      expression: "contractDetailsControl"
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("app.deleteCurrent")))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-radio",
                                  {
                                    attrs: {
                                      size: "",
                                      type: "is-info",
                                      name: "contractDetailsControl",
                                      "native-value": "rc"
                                    },
                                    model: {
                                      value: _vm.contractDetailsControl,
                                      callback: function($$v) {
                                        _vm.contractDetailsControl = $$v
                                      },
                                      expression: "contractDetailsControl"
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("app.replaceCurrent")))]
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.contractDetailsControl === "rc"
                          ? _c(
                              "b-field",
                              {
                                attrs: {
                                  type: {
                                    "is-danger":
                                      _vm.jobErrors.contractDetails.length > 0
                                  },
                                  message: _vm.jobErrors.contractDetails
                                }
                              },
                              [
                                _c(
                                  "b-field",
                                  {
                                    staticClass: "file is-dark",
                                    attrs: { expanded: "" }
                                  },
                                  [
                                    _c(
                                      "b-upload",
                                      {
                                        staticClass: "file-label",
                                        attrs: { size: "is-small" },
                                        model: {
                                          value: _vm.job.contractDetails,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.job,
                                              "contractDetails",
                                              $$v
                                            )
                                          },
                                          expression: "job.contractDetails"
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "file-cta" },
                                          [
                                            _c("b-icon", {
                                              staticClass: "file-icon",
                                              attrs: {
                                                icon: "upload",
                                                size: "is-small"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "file-label" },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("app.upload"))
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.job.contractDetails
                                          ? _c(
                                              "span",
                                              { staticClass: "file-name" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.job.contractDetails.name
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  !_vm.isEditJob
                    ? _c(
                        "div",
                        { staticClass: "buttons" },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "button is-success is-light",
                              attrs: { disabled: _vm.isSubmittingJob }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(
                                    _vm.isSubmittingJob
                                      ? _vm.$t("app.submitting") + "..."
                                      : _vm.$t("app.save")
                                  ) +
                                  "\n              "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "is-danger is-light",
                              on: {
                                click: function($event) {
                                  return _vm.cancelJobForm()
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("app.cancel")))]
                          ),
                          _vm._v(" "),
                          _vm.isPermission("update")
                            ? [
                                _vm.job.contractStatus === "award"
                                  ? _c(
                                      "b-button",
                                      {
                                        staticClass: "is-dark is-light",
                                        on: {
                                          click: function($event) {
                                            return _vm.awardContract(
                                              "terminate"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              _vm.isAwardingContract
                                                ? _vm.$t(
                                                    "app.terminatingContract"
                                                  )
                                                : _vm.$t(
                                                    "app.terminateContract"
                                                  )
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.job.contractStatus === "terminate" ||
                                _vm.job.contractStatus === null
                                  ? _c(
                                      "b-button",
                                      {
                                        staticClass: "is-info is-light",
                                        on: {
                                          click: function($event) {
                                            return _vm.awardContract("award")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              _vm.isAwardingContract
                                                ? _vm.$t("app.awardingContract")
                                                : _vm.$t("app.awardContract")
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    : _vm._e()
                ]
              )
            ]),
            _vm._v(" "),
            _vm.isPermission("update")
              ? [
                  _vm.isEditJob
                    ? _c(
                        "div",
                        { staticClass: "buttons" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "is-info is-light",
                              attrs: { "icon-left": "pen" },
                              on: {
                                click: function($event) {
                                  _vm.isEditJob = !_vm.isEditJob
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("app.edit")))]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=template&id=0e698652&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=template&id=0e698652&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("section", { staticClass: "b__collapse__section" }, [
        _c("div", { staticClass: "card" }, [
          _c("header", { staticClass: "card-header" }),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "content" }, [
              _c("div", { staticClass: "personal__details" }, [
                _c("div", { staticClass: "personal__details__photo" }, [
                  _c("div", { staticClass: "p-text" }, [
                    _c("p", [
                      _vm._v(
                        "\n                  " +
                          _vm._s(_vm.$t("app.personal_detail_cta")) +
                          "\n                "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "personal__details__photo__display" },
                    [
                      _vm.userOrPermission("update", _vm.getProfile.user_id)
                        ? _c(
                            "div",
                            { staticClass: "profile__photo__overlay" },
                            [
                              _c(
                                "b-field",
                                [
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t(
                                          "app.upload_profile_photo"
                                        ),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c(
                                        "b-upload",
                                        {
                                          staticClass: "file-label",
                                          model: {
                                            value: _vm.personalDetails.avatar,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.personalDetails,
                                                "avatar",
                                                $$v
                                              )
                                            },
                                            expression: "personalDetails.avatar"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "file-cta" },
                                            [
                                              _c("b-icon", {
                                                staticClass: "file-icon",
                                                attrs: {
                                                  icon: "camera",
                                                  size: "large"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "photo__wrapper" },
                        [
                          _c("b-loading", {
                            attrs: {
                              "can-cancel": true,
                              "is-full-page": false
                            },
                            model: {
                              value: _vm.isUploadingPhoto,
                              callback: function($$v) {
                                _vm.isUploadingPhoto = $$v
                              },
                              expression: "isUploadingPhoto"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            attrs: {
                              src:
                                "/storage/avatar/" +
                                _vm.getProfile.personal_details.avatar,
                              alt: _vm.$t("app.profile_photo"),
                              srcset: ""
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "personal__details__detail" },
                  [
                    _vm.userOrPermission("update", _vm.getProfile.user_id)
                      ? [
                          _vm.isEditPersonalDetails
                            ? _c(
                                "b-field",
                                { staticClass: "mb-4" },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "is-info is-light",
                                      attrs: { "icon-left": "pen" },
                                      on: {
                                        click: function($event) {
                                          _vm.isEditPersonalDetails = !_vm.isEditPersonalDetails
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.$t("app.edit")))]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "fieldset",
                      {
                        staticClass: "mb-4",
                        attrs: { disabled: _vm.isEditPersonalDetails }
                      },
                      [
                        _c(
                          "form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.updatePersonalDetails()
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "columns" }, [
                              _c(
                                "div",
                                { staticClass: "column is-3" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.title"),
                                        type: {
                                          "is-danger":
                                            _vm.personalDetailsErrors.title
                                              .length > 0
                                        },
                                        message: _vm.personalDetailsErrors.title
                                      }
                                    },
                                    [
                                      _c(
                                        "b-select",
                                        {
                                          attrs: { size: "", expanded: "" },
                                          model: {
                                            value: _vm.personalDetails.title,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.personalDetails,
                                                "title",
                                                $$v
                                              )
                                            },
                                            expression: "personalDetails.title"
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "Mr." } },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$tc("app.mr", 1))
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Miss" } },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(_vm.$t("app.miss")) +
                                                  "\n                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Mrs." } },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(_vm.$t("app.mrs")) +
                                                  "\n                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Hon." } },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(_vm.$t("app.hon")) +
                                                  "\n                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Rev." } },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(_vm.$t("app.rev")) +
                                                  "\n                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Dr." } },
                                            [_vm._v(_vm._s(_vm.$t("app.dr")))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Prof." } },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(_vm.$t("app.prof")) +
                                                  "\n                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Other" } },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(
                                                    _vm.$tc("app.other", 1)
                                                  ) +
                                                  "\n                          "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "column is-3" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.firstName"),
                                        expanded: "",
                                        type: {
                                          "is-danger":
                                            _vm.personalDetailsErrors.firstName
                                              .length > 0
                                        },
                                        message:
                                          _vm.personalDetailsErrors.firstName
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "" },
                                        model: {
                                          value: _vm.personalDetails.firstName,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.personalDetails,
                                              "firstName",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "personalDetails.firstName"
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
                                { staticClass: "column is-3" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.middleName"),
                                        expanded: "",
                                        type: {
                                          "is-danger":
                                            _vm.personalDetailsErrors.middleName
                                              .length > 0
                                        },
                                        message:
                                          _vm.personalDetailsErrors.middleName
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "" },
                                        model: {
                                          value: _vm.personalDetails.middleName,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.personalDetails,
                                              "middleName",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "personalDetails.middleName"
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
                                { staticClass: "column is-3" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.lastName"),
                                        expanded: "",
                                        type: {
                                          "is-danger":
                                            _vm.personalDetailsErrors.lastName
                                              .length > 0
                                        },
                                        message:
                                          _vm.personalDetailsErrors.lastName
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "" },
                                        model: {
                                          value: _vm.personalDetails.lastName,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.personalDetails,
                                              "lastName",
                                              $$v
                                            )
                                          },
                                          expression: "personalDetails.lastName"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "columns" }, [
                              _c(
                                "div",
                                { staticClass: "column is-3" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.birthDate"),
                                        type: {
                                          "is-danger":
                                            _vm.personalDetailsErrors.birthDate
                                              .length > 0
                                        },
                                        message:
                                          _vm.personalDetailsErrors.birthDate
                                      }
                                    },
                                    [
                                      _c("b-datepicker", {
                                        attrs: {
                                          placeholder: _vm.$t(
                                            "placeholder_birthdate"
                                          ),
                                          pack: "fas",
                                          icon: "calendar",
                                          "trap-focus": ""
                                        },
                                        model: {
                                          value: _vm.personalDetails.birthDate,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.personalDetails,
                                              "birthDate",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "personalDetails.birthDate"
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
                                { staticClass: "column is-3" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.maritalStatus"),
                                        type: {
                                          "is-danger":
                                            _vm.personalDetailsErrors
                                              .maritalStatus.length > 0
                                        },
                                        message:
                                          _vm.personalDetailsErrors
                                            .maritalStatus
                                      }
                                    },
                                    [
                                      _c(
                                        "b-select",
                                        {
                                          attrs: { size: "", expanded: "" },
                                          model: {
                                            value:
                                              _vm.personalDetails.maritalStatus,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.personalDetails,
                                                "maritalStatus",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "personalDetails.maritalStatus"
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            {
                                              domProps: {
                                                value: _vm.$tc("app.single", 1)
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(
                                                    _vm.$tc("app.single", 1)
                                                  ) +
                                                  "\n                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              domProps: {
                                                value: _vm.$tc("app.married", 1)
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(
                                                    _vm.$tc("app.married", 1)
                                                  ) +
                                                  "\n                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              domProps: {
                                                value: _vm.$tc(
                                                  "app.divorced",
                                                  1
                                                )
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(
                                                    _vm.$tc("app.divorced", 1)
                                                  ) +
                                                  "\n                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              domProps: {
                                                value: _vm.$tc("app.widowed", 1)
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(
                                                    _vm.$tc("app.widowed", 1)
                                                  ) +
                                                  "\n                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              domProps: {
                                                value: _vm.$tc("app.other", 1)
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(
                                                    _vm.$tc("app.other", 1)
                                                  ) +
                                                  "\n                          "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "column is-3" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        label: _vm.$tc("app.staffId"),
                                        expanded: "",
                                        type: {
                                          "is-danger":
                                            _vm.personalDetailsErrors.staffId
                                              .length > 0
                                        },
                                        message:
                                          _vm.personalDetailsErrors.staffId
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "" },
                                        model: {
                                          value: _vm.personalDetails.staffId,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.personalDetails,
                                              "staffId",
                                              $$v
                                            )
                                          },
                                          expression: "personalDetails.staffId"
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
                                { staticClass: "column is-3" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        label: "" + _vm.$tc("app.gender", 1),
                                        type: {
                                          "is-danger":
                                            _vm.personalDetailsErrors.gender
                                              .length > 0
                                        },
                                        message:
                                          _vm.personalDetailsErrors.gender
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "block",
                                          staticStyle: {
                                            "margin-bottom": "-0.2rem"
                                          }
                                        },
                                        [
                                          _c(
                                            "b-radio",
                                            {
                                              attrs: {
                                                name: "gender",
                                                type: "is-info",
                                                "native-value": "Male",
                                                size: ""
                                              },
                                              model: {
                                                value:
                                                  _vm.personalDetails.gender,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.personalDetails,
                                                    "gender",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "personalDetails.gender"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$tc("app.male", 1))
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-radio",
                                            {
                                              attrs: {
                                                name: "gender",
                                                type: "is-info",
                                                "native-value": "Female",
                                                size: ""
                                              },
                                              model: {
                                                value:
                                                  _vm.personalDetails.gender,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.personalDetails,
                                                    "gender",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "personalDetails.gender"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$tc("app.female", 1))
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            !_vm.isEditPersonalDetails
                              ? _c("b-field", [
                                  _c(
                                    "div",
                                    { staticClass: "buttons" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "button is-success is-light",
                                          attrs: {
                                            type: "submit",
                                            disabled:
                                              _vm.isSubmittingPersonalDetails
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(
                                                _vm.isSubmittingPersonalDetails
                                                  ? _vm.$t("app.saving") + "..."
                                                  : _vm.$t("app.save")
                                              ) +
                                              "\n                      "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "is-danger is-light",
                                          on: {
                                            click: function($event) {
                                              return _vm.cancelPersonalDetailsForm()
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.$t("app.cancel")))]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.userOrPermission("update", _vm.getProfile.user_id)
                      ? [
                          _vm.isEditPersonalDetails
                            ? _c(
                                "b-field",
                                [
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "is-info is-light",
                                      attrs: { "icon-left": "pen" },
                                      on: {
                                        click: function($event) {
                                          _vm.isEditPersonalDetails = !_vm.isEditPersonalDetails
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.$t("app.edit")))]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "b__collapse__section" }, [
        _c("div", { staticClass: "card" }, [
          _c("header", { staticClass: "card-header" }, [
            _c("p", { staticClass: "card-header-title" }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.$tc("app.attachment", 2)) +
                  "\n          "
              ),
              _c("span", { staticStyle: { color: "#686767c5" } }, [
                _vm._v(" (" + _vm._s(_vm.$t("app.pdAttachmentDesc")) + ")")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.userOrPermission("update", _vm.getProfile.user_id)
                  ? _c(
                      "section",
                      { staticClass: "b__collapse__section" },
                      [
                        _c(
                          "b-collapse",
                          {
                            staticClass: "card",
                            attrs: {
                              open: false,
                              animation: "slide",
                              "aria-id": "addattachment"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "trigger",
                                  fn: function(props) {
                                    return _c(
                                      "div",
                                      {
                                        staticClass: "card-header",
                                        attrs: {
                                          role: "button",
                                          "aria-controls": "Add Attachment"
                                        }
                                      },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "card-header-title has-text-info"
                                          },
                                          [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  _vm.$t("app.addAttament")
                                                ) +
                                                "\n                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          { staticClass: "card-header-icon" },
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                type: "is-info",
                                                pack: "fas",
                                                icon: props.open
                                                  ? "angle-up"
                                                  : "angle-down"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }
                                }
                              ],
                              null,
                              false,
                              1106428251
                            )
                          },
                          [
                            _vm._v(" "),
                            _c("div", { staticClass: "card-content" }, [
                              _c(
                                "div",
                                { staticClass: "content" },
                                [
                                  _c(
                                    "fieldset",
                                    {
                                      attrs: {
                                        disabled:
                                          _vm.isEditPersonalDetailsAttachment
                                      }
                                    },
                                    [
                                      _c(
                                        "form",
                                        {
                                          on: {
                                            submit: function($event) {
                                              $event.preventDefault()
                                              return _vm.updatePersonalDetailsAttachment(
                                                $event
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "columns" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "column is-3" },
                                                [
                                                  _c(
                                                    "b-field",
                                                    [
                                                      _c(
                                                        "b-upload",
                                                        {
                                                          attrs: {
                                                            "drag-drop": "",
                                                            size: "is-small"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .personalDetails
                                                                .attachment
                                                                .file,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm
                                                                  .personalDetails
                                                                  .attachment,
                                                                "file",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "personalDetails.attachment.file"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "section",
                                                            {
                                                              staticClass:
                                                                "section"
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "content has-text-centered"
                                                                },
                                                                [
                                                                  _c(
                                                                    "p",
                                                                    [
                                                                      _c(
                                                                        "b-icon",
                                                                        {
                                                                          attrs: {
                                                                            icon:
                                                                              "upload",
                                                                            size:
                                                                              "is-small"
                                                                          }
                                                                        }
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c("p", [
                                                                    _vm._v(
                                                                      "\n                                    " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "app.placeholder_attachment"
                                                                          )
                                                                        ) +
                                                                        "\n                                  "
                                                                    )
                                                                  ])
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _vm.personalDetails.attachment
                                                    .file
                                                    ? _c(
                                                        "div",
                                                        { staticClass: "tags" },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "tag is-large is-info is-light"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                              " +
                                                                  _vm._s(
                                                                    _vm
                                                                      .personalDetails
                                                                      .attachment
                                                                      .file.name
                                                                  ) +
                                                                  "\n                              "
                                                              ),
                                                              _c("button", {
                                                                staticClass:
                                                                  "delete is-small",
                                                                attrs: {
                                                                  type: "button"
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.personalDetails.attachment.file = null
                                                                  }
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c("b-field", {
                                                    attrs: {
                                                      type: {
                                                        "is-danger":
                                                          _vm
                                                            .personalDetailsAttachmentError
                                                            .file.length > 0
                                                      },
                                                      message:
                                                        _vm
                                                          .personalDetailsAttachmentError
                                                          .file
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "column is-4" },
                                                [
                                                  _c(
                                                    "b-field",
                                                    {
                                                      attrs: {
                                                        type: {
                                                          "is-danger":
                                                            _vm
                                                              .personalDetailsAttachmentError
                                                              .comment.length >
                                                            0
                                                        },
                                                        message:
                                                          _vm
                                                            .personalDetailsAttachmentError
                                                            .comment
                                                      }
                                                    },
                                                    [
                                                      _c("b-input", {
                                                        attrs: {
                                                          type: "textarea",
                                                          placeholder:
                                                            _vm.$tc(
                                                              "app.placeholder_comment"
                                                            ) + "..."
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.personalDetails
                                                              .attachment
                                                              .comment,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm
                                                                .personalDetails
                                                                .attachment,
                                                              "comment",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "personalDetails.attachment.comment"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("hr"),
                                          _vm._v(" "),
                                          !_vm.isEditPersonalDetailsAttachment
                                            ? _c("b-field", [
                                                _c(
                                                  "div",
                                                  { staticClass: "buttons" },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "button is-success is-light",
                                                        attrs: {
                                                          type: "submit",
                                                          disabled:
                                                            _vm.isSubmittingPersonalDetailsAttachment
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                            " +
                                                            _vm._s(
                                                              _vm.isSubmittingPersonalDetailsAttachment
                                                                ? _vm.$t(
                                                                    "app.submitting"
                                                                  ) + "..."
                                                                : _vm.$t(
                                                                    "app.submit"
                                                                  )
                                                            ) +
                                                            "\n                          "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-button",
                                                      {
                                                        staticClass:
                                                          "is-danger is-light",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.cancelPersonalDetailsAttachmentForm()
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("app.cancel")
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ])
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.isEditPersonalDetailsAttachment
                                    ? _c(
                                        "b-field",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              staticClass: "is-info is-light",
                                              attrs: { "icon-left": "plus" },
                                              on: {
                                                click: function($event) {
                                                  _vm.isEditPersonalDetailsAttachment = !_vm.isEditPersonalDetailsAttachment
                                                }
                                              }
                                            },
                                            [_vm._v(_vm._s(_vm.$t("app.add")))]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "b-table",
                  {
                    attrs: {
                      data: _vm.getPersonalAttachments,
                      paginated: true,
                      "per-page": 5,
                      "current-page": 1,
                      "pagination-simple": true,
                      "pagination-position": "bottom"
                    }
                  },
                  [
                    _c("b-table-column", {
                      attrs: {
                        field: "file",
                        label: "" + _vm.$tc("app.file", 1),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _c(
                                "a",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.viewAttachment(
                                        "/attachments/personal/" +
                                          props.row.file
                                      )
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(props.row.file))]
                              )
                            ]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "comment",
                        label: _vm.$tc("app.comment", 1),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.comment))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "actions",
                        label: _vm.$tc("app.action", 2)
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _c(
                                "div",
                                { staticClass: "b-tooltips" },
                                [
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.replaceAttachment"),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "upload",
                                          id:
                                            "comment-id" +
                                            _vm.getAttachmentDropperId
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openAttachmentDropper(
                                              props.row,
                                              "attachment"
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.editComment"),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          id:
                                            "comment-id" +
                                            _vm.getAttachmentDropperId,
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "pen"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openAttachmentDropper(
                                              props.row,
                                              "comment"
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.delete"),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-danger is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "trash"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deletePersonalDetailsAttachment(
                                              props.row.id
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    })
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "attachmentDropper",
          staticClass: "job-cat-dropper",
          attrs: {
            join: "#comment-id" + _vm.getAttachmentDropperId,
            "z-index": 1000
          },
          on: {
            "esc-keydown": _vm.closeAttachmentDropper,
            "other-area-clicked": _vm.closeAttachmentDropper
          }
        },
        [
          _vm.attachmentUpdateType === "comment"
            ? _c(
                "form",
                {
                  staticClass: "p-4",
                  staticStyle: { width: "30rem" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.replacePersonalDetailsAttachment(
                        _vm.attachmentUpdateType
                      )
                    }
                  }
                },
                [
                  _c("h3", { staticClass: "label text-main" }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(
                          _vm.$t("app.edit") + " " + _vm.$tc("app.comment", 1)
                        ) +
                        "\n      "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger":
                            _vm.personalDetailsAttachmentError.comment.length >
                            0
                        },
                        message: _vm.personalDetailsAttachmentError.comment
                      }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          type: "textarea",
                          placeholder:
                            _vm.$t("app.placeholder_comment") + "...",
                          expanded: ""
                        },
                        model: {
                          value: _vm.personalDetails.attachment.comment,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.personalDetails.attachment,
                              "comment",
                              $$v
                            )
                          },
                          expression: "personalDetails.attachment.comment"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-field", { staticClass: "buttons" }, [
                    _c(
                      "button",
                      {
                        staticClass: "button is-success is-light",
                        attrs: {
                          type: "submit",
                          disabled: _vm.isUpdatingFileComment
                        }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              _vm.isUpdatingFileComment
                                ? _vm.$t("app.saving") + "..."
                                : _vm.$t("app.save")
                            ) +
                            "\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "button is-danger is-light",
                        attrs: {
                          type: "button",
                          disabled: _vm.isUpdatingFileComment
                        },
                        on: {
                          click: function($event) {
                            return _vm.closeAttachmentDropper()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("app.cancel")) +
                            "\n        "
                        )
                      ]
                    )
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.attachmentUpdateType === "attachment"
            ? _c(
                "form",
                {
                  staticClass: "p-4",
                  staticStyle: { width: "30rem" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.replacePersonalDetailsAttachment(
                        _vm.attachmentUpdateType
                      )
                    }
                  }
                },
                [
                  _c("h3", { staticClass: "label text-main" }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(
                          _vm.$tc("app.replace", 1) +
                            " " +
                            _vm.$tc("app.attachment", 1)
                        ) +
                        "\n      "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    [
                      _c(
                        "b-upload",
                        {
                          staticStyle: { cursor: "pointer" },
                          attrs: { size: "is-small" },
                          model: {
                            value: _vm.personalDetails.attachment.file,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.personalDetails.attachment,
                                "file",
                                $$v
                              )
                            },
                            expression: "personalDetails.attachment.file"
                          }
                        },
                        [
                          _c("section", { staticClass: "section" }, [
                            _c(
                              "div",
                              { staticClass: "content has-text-centered" },
                              [
                                _c(
                                  "p",
                                  [
                                    _c("b-icon", {
                                      attrs: {
                                        icon: "upload",
                                        size: "is-small"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("app.placeholder_attachment1")
                                    )
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.personalDetails.attachment.file
                    ? _c("div", { staticClass: "tags" }, [
                        _c(
                          "span",
                          { staticClass: "tag is-large is-info is-light" },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(
                                  _vm.personalDetails.attachment.file.name
                                ) +
                                "\n          "
                            ),
                            _c("button", {
                              staticClass: "delete is-small",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.personalDetails.attachment.file = null
                                }
                              }
                            })
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("b-field", {
                    attrs: {
                      type: {
                        "is-danger":
                          _vm.personalDetailsAttachmentError.file.length > 0
                      },
                      message: _vm.personalDetailsAttachmentError.file
                    }
                  }),
                  _vm._v(" "),
                  _c("b-field", { staticClass: "buttons" }, [
                    _c(
                      "button",
                      {
                        staticClass: "button is-success is-light",
                        attrs: {
                          type: "submit",
                          disabled: _vm.isUpdatingFileComment
                        }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              _vm.isUpdatingFileComment
                                ? _vm.$t("app.saving") + "..."
                                : _vm.$t("app.save")
                            ) +
                            "\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "button is-danger is-light",
                        attrs: {
                          type: "button",
                          disabled: _vm.isUpdatingFileComment
                        },
                        on: {
                          click: function($event) {
                            return _vm.closeAttachmentDropper()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("app.cancel")) +
                            "\n        "
                        )
                      ]
                    )
                  ])
                ],
                1
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=template&id=9268b5a4&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=template&id=9268b5a4&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("section", { staticClass: "b__collapse__section" }, [
        _c("div", { staticClass: "card" }, [
          _c("header", { staticClass: "card-header" }),
          _vm._v(" "),
          _c("div", { staticClass: "profile-detail-bar" }, [
            _c("p", { staticClass: "p-text" }, [
              _vm._v(_vm._s(_vm.$t("app.qualification_cta")))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.userOrPermission("create", _vm.getProfile.user_id)
                  ? _c(
                      "section",
                      { staticClass: "b__collapse__section" },
                      [
                        _c(
                          "b-collapse",
                          {
                            staticClass: "card",
                            attrs: {
                              animation: "slide",
                              "aria-id": "addreportingmethod"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "trigger",
                                  fn: function(props) {
                                    return _c(
                                      "div",
                                      {
                                        staticClass: "card-header",
                                        attrs: {
                                          role: "button",
                                          "aria-controls": "addreportingmethod"
                                        }
                                      },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "card-header-title has-text-info"
                                          },
                                          [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  _vm.$t("app.add_education")
                                                ) +
                                                "\n                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          { staticClass: "card-header-icon" },
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                pack: "fas",
                                                type: "is-info",
                                                icon: props.open
                                                  ? "angle-down"
                                                  : "angle-up"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }
                                }
                              ],
                              null,
                              false,
                              1913714004
                            ),
                            model: {
                              value: _vm.isEditEducation,
                              callback: function($$v) {
                                _vm.isEditEducation = $$v
                              },
                              expression: "isEditEducation"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c("div", { staticClass: "card-content" }, [
                              _c("div", { staticClass: "content" }, [
                                _c(
                                  "form",
                                  {
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        return _vm.addEducation()
                                      }
                                    }
                                  },
                                  [
                                    _c("div", { staticClass: "columns" }, [
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$t(
                                                  "app.institution"
                                                ),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .education.institution
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .education.institution
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  size: "",
                                                  expanded: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications.education
                                                      .institution,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .education,
                                                      "institution",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.education.institution"
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
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$t("app.major_spec"),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .education.specialization
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .education.specialization
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  size: "",
                                                  expanded: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications.education
                                                      .specialization,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .education,
                                                      "specialization",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.education.specialization"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "columns" }, [
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$t("app.started"),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .education.started
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .education.started
                                              }
                                            },
                                            [
                                              _c(
                                                "b-select",
                                                {
                                                  attrs: {
                                                    placeholder: _vm.$t(
                                                      "app.selectYear"
                                                    ),
                                                    size: "",
                                                    expanded: ""
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.qualifications
                                                        .education.started,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.qualifications
                                                          .education,
                                                        "started",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "qualifications.education.started"
                                                  }
                                                },
                                                _vm._l(_vm.getYears, function(
                                                  year,
                                                  index
                                                ) {
                                                  return _c(
                                                    "option",
                                                    {
                                                      key: index,
                                                      domProps: { value: year }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                              " +
                                                          _vm._s(year) +
                                                          "\n                            "
                                                      )
                                                    ]
                                                  )
                                                }),
                                                0
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$t("app.completed"),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .education.completed
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .education.completed
                                              }
                                            },
                                            [
                                              _c(
                                                "b-select",
                                                {
                                                  attrs: {
                                                    placeholder: _vm.$t(
                                                      "app.selectYear"
                                                    ),
                                                    size: "",
                                                    expanded: ""
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.qualifications
                                                        .education.completed,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.qualifications
                                                          .education,
                                                        "completed",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "qualifications.education.completed"
                                                  }
                                                },
                                                _vm._l(_vm.getYears, function(
                                                  year,
                                                  index
                                                ) {
                                                  return _c(
                                                    "option",
                                                    {
                                                      key: index,
                                                      domProps: { value: year }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                              " +
                                                          _vm._s(year) +
                                                          "\n                            "
                                                      )
                                                    ]
                                                  )
                                                }),
                                                0
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("hr"),
                                    _vm._v(" "),
                                    _c(
                                      "b-field",
                                      { staticClass: "buttons" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "button is-success is-light",
                                            attrs: {
                                              type: "submit",
                                              disabled:
                                                _vm.isSubmittingEducation
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(
                                                  _vm.isSubmittingEducation
                                                    ? "" +
                                                        _vm.$t("app.submitting")
                                                    : _vm.$t("app.add")
                                                ) +
                                                "\n                      "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "is-danger is-light",
                                            on: {
                                              click: function($event) {
                                                return _vm.cancelEducationForm()
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(_vm.$t("app.cancel")))]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "b-table",
                  {
                    attrs: {
                      data: _vm.getEducation,
                      paginated: true,
                      "per-page": 5,
                      "current-page": 1,
                      "pagination-simple": true,
                      "pagination-position": "bottom"
                    }
                  },
                  [
                    _c("b-table-column", {
                      attrs: {
                        field: "institution",
                        label: _vm.$t("app.institution"),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.institution))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "specialization",
                        label: _vm.$t("app.specialization"),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.specialization))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "started",
                        label: _vm.$t("app.started"),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.started))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "completed",
                        label: _vm.$t("app.completed"),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.completed))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "actions",
                        label: _vm.$tc("app.action", 2)
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _c(
                                "div",
                                { staticClass: "b-tooltips" },
                                [
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.edit_education"),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "pen",
                                          id:
                                            "education-id" +
                                            _vm.getAttachmentDropperId,
                                          disabled: !_vm.userOrPermission(
                                            "update",
                                            _vm.getProfile.user_id
                                          )
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openEducationDropper(
                                              props.row
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.delete"),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-danger is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "trash",
                                          disabled: !_vm.userOrPermission(
                                            "delete",
                                            _vm.getProfile.user_id
                                          )
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteHandler(
                                              "education",
                                              props.row.id
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    })
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "b__collapse__section" }, [
        _c("div", { staticClass: "card" }, [
          _c("header", { staticClass: "card-header" }, [
            _c("p", { staticClass: "card-header-title" }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.$tc("app.expertise", 1)) +
                  "\n        "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.userOrPermission("create", _vm.getProfile.user_id)
                  ? _c(
                      "section",
                      { staticClass: "b__collapse__section" },
                      [
                        _c(
                          "b-collapse",
                          {
                            staticClass: "card",
                            attrs: {
                              animation: "slide",
                              "aria-id": "addreportingmethod"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "trigger",
                                  fn: function(props) {
                                    return _c(
                                      "div",
                                      {
                                        staticClass: "card-header",
                                        attrs: {
                                          role: "button",
                                          "aria-controls": "addreportingmethod"
                                        }
                                      },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "card-header-title has-text-info"
                                          },
                                          [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  _vm.$t("app.add_expertise")
                                                ) +
                                                "\n                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          { staticClass: "card-header-icon" },
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                pack: "fas",
                                                type: "is-info",
                                                icon: props.open
                                                  ? "angle-down"
                                                  : "angle-up"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }
                                }
                              ],
                              null,
                              false,
                              3298448367
                            ),
                            model: {
                              value: _vm.isEditExpertise,
                              callback: function($$v) {
                                _vm.isEditExpertise = $$v
                              },
                              expression: "isEditExpertise"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c("div", { staticClass: "card-content" }, [
                              _c("div", { staticClass: "content" }, [
                                _c(
                                  "form",
                                  {
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        return _vm.addExpertise()
                                      }
                                    }
                                  },
                                  [
                                    _c("div", { staticClass: "columns" }, [
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$tc(
                                                  "app.expertise",
                                                  1
                                                ),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .expertise.expertise
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .expertise.expertise
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  size: "",
                                                  expanded: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications.expertise
                                                      .expertise,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .expertise,
                                                      "expertise",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.expertise.expertise"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "columns" }, [
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$t(
                                                  "app.year_of_expe"
                                                ),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .expertise
                                                      .yearOfExperience.length >
                                                    0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .expertise.yearOfExperience
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  size: "",
                                                  expanded: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications.expertise
                                                      .yearOfExperience,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .expertise,
                                                      "yearOfExperience",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "\n                              qualifications.expertise.yearOfExperience\n                            "
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "columns" }, [
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$tc(
                                                  "app.comment",
                                                  1
                                                ),
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .expertise.comment
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .expertise.comment
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  type: "textarea",
                                                  placeholder: _vm.$t(
                                                    "app.comment_placeholder"
                                                  ),
                                                  size: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications.expertise
                                                      .comment,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .expertise,
                                                      "comment",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.expertise.comment"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("hr"),
                                    _vm._v(" "),
                                    _c(
                                      "b-field",
                                      { staticClass: "buttons" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "button is-success is-light",
                                            attrs: {
                                              type: "submit",
                                              disabled:
                                                _vm.isSubmittingExpertise
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(
                                                  _vm.isSubmittingExpertise
                                                    ? "" +
                                                        _vm.$t("app.submitting")
                                                    : _vm.$t("app.add")
                                                ) +
                                                "\n                      "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "is-danger is-light",
                                            on: {
                                              click: function($event) {
                                                return _vm.cancelExpertiseForm()
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(_vm.$t("app.cancel")))]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "b-table",
                  {
                    attrs: {
                      data: _vm.getExpertise,
                      paginated: true,
                      "per-page": 5,
                      "current-page": 1,
                      "pagination-simple": true,
                      "pagination-position": "bottom"
                    }
                  },
                  [
                    _c("b-table-column", {
                      attrs: {
                        field: "expertise",
                        label: _vm.$tc("app.expertise", 1),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.expertise))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "yoe",
                        label: _vm.$t("app.year_of_expe"),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.yearOfExperience))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "comment",
                        label: _vm.$tc("app.comment", 1),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.comment))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "actions",
                        label: _vm.$tc("app.action", 2)
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _c(
                                "div",
                                { staticClass: "b-tooltips" },
                                [
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.edit_expertise"),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "pen",
                                          id:
                                            "expertise-id" +
                                            _vm.getAttachmentDropperId,
                                          disabled: !_vm.userOrPermission(
                                            "update",
                                            _vm.getProfile.user_id
                                          )
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openExpertiseDropper(
                                              props.row
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.delete"),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-danger is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "trash",
                                          disabled: !_vm.userOrPermission(
                                            "delete",
                                            _vm.getProfile.user_id
                                          )
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteHandler(
                                              "expertise",
                                              props.row.id
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    })
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "b__collapse__section" }, [
        _c("div", { staticClass: "card" }, [
          _c("header", { staticClass: "card-header" }, [
            _c("p", { staticClass: "card-header-title" }, [
              _vm._v(_vm._s(_vm.$tc("app.language", 2)))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.userOrPermission("create", _vm.getProfile.user_id)
                  ? _c(
                      "section",
                      { staticClass: "b__collapse__section" },
                      [
                        _c(
                          "b-collapse",
                          {
                            staticClass: "card",
                            attrs: {
                              animation: "slide",
                              "aria-id": "addreportingmethod"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "trigger",
                                  fn: function(props) {
                                    return _c(
                                      "div",
                                      {
                                        staticClass: "card-header",
                                        attrs: {
                                          role: "button",
                                          "aria-controls": "addreportingmethod"
                                        }
                                      },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "card-header-title has-text-info"
                                          },
                                          [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  _vm.$t("app.add_language")
                                                ) +
                                                "\n                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          { staticClass: "card-header-icon" },
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                pack: "fas",
                                                type: "is-info",
                                                icon: props.open
                                                  ? "angle-down"
                                                  : "angle-up"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }
                                }
                              ],
                              null,
                              false,
                              2403258220
                            ),
                            model: {
                              value: _vm.isEditLanguage,
                              callback: function($$v) {
                                _vm.isEditLanguage = $$v
                              },
                              expression: "isEditLanguage"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c("div", { staticClass: "card-content" }, [
                              _c("div", { staticClass: "content" }, [
                                _c(
                                  "form",
                                  {
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        return _vm.addLanguage()
                                      }
                                    }
                                  },
                                  [
                                    _c("div", { staticClass: "columns" }, [
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$tc(
                                                  "app.language",
                                                  1
                                                ),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .languages.language
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .languages.language
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  size: "",
                                                  expanded: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications.languages
                                                      .language,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .languages,
                                                      "language",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.languages.language"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "columns" }, [
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$t("app.fluency"),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .languages.fluency
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .languages.fluency
                                              }
                                            },
                                            [
                                              _c(
                                                "b-select",
                                                {
                                                  attrs: {
                                                    size: "",
                                                    expanded: ""
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.qualifications
                                                        .languages.fluency,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.qualifications
                                                          .languages,
                                                        "fluency",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "qualifications.languages.fluency"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    {
                                                      domProps: {
                                                        value: _vm.$t(
                                                          "app.poor"
                                                        )
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                              " +
                                                          _vm._s(
                                                            _vm.$t("app.poor")
                                                          ) +
                                                          "\n                            "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      domProps: {
                                                        value: _vm.$t(
                                                          "app.good"
                                                        )
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                              " +
                                                          _vm._s(
                                                            _vm.$t("app.good")
                                                          ) +
                                                          "\n                            "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      domProps: {
                                                        value: _vm.$t(
                                                          "app.very_good"
                                                        )
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                              " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "app.very_good"
                                                            )
                                                          ) +
                                                          "\n                            "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      domProps: {
                                                        value: _vm.$t(
                                                          "app.mother_tongue"
                                                        )
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                              " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "app.mother_tongue"
                                                            )
                                                          ) +
                                                          "\n                            "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "columns" }, [
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$tc(
                                                  "app.comment",
                                                  1
                                                ),
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .languages.comment
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .languages.comment
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  type: "textarea",
                                                  size: "",
                                                  placeholder: _vm.$t(
                                                    "app.comment_placeholder"
                                                  )
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications.languages
                                                      .comment,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .languages,
                                                      "comment",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.languages.comment"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("hr"),
                                    _vm._v(" "),
                                    _c(
                                      "b-field",
                                      { staticClass: "buttons" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "button is-success is-light",
                                            attrs: {
                                              type: "submit",
                                              disabled: _vm.isSubmittingLanguage
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(
                                                  _vm.isSubmittingLanguage
                                                    ? "" +
                                                        _vm.$t("app.submitting")
                                                    : _vm.$t("app.add")
                                                ) +
                                                "\n                      "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "is-danger is-light",
                                            on: {
                                              click: function($event) {
                                                return _vm.cancelLanguageForm()
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(_vm.$t("app.cancel")))]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "b-table",
                  {
                    attrs: {
                      data: _vm.getLanguages,
                      paginated: true,
                      "per-page": 5,
                      "current-page": 1,
                      "pagination-simple": true,
                      "pagination-position": "bottom"
                    }
                  },
                  [
                    _c("b-table-column", {
                      attrs: {
                        field: "language",
                        label: _vm.$tc("app.language", 1),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.language))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "fluency",
                        label: _vm.$t("app.fluency"),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.fluency))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "comment",
                        label: _vm.$tc("app.comment", 1),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.comment))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "actions",
                        label: _vm.$tc("app.action", 2)
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _c(
                                "div",
                                { staticClass: "b-tooltips" },
                                [
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.edit_language"),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "pen",
                                          id:
                                            "language-id" +
                                            _vm.getAttachmentDropperId,
                                          disabled: !_vm.userOrPermission(
                                            "update",
                                            _vm.getProfile.user_id
                                          )
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openLanguageDropper(
                                              props.row
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.delete"),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-danger is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "trash",
                                          disabled: !_vm.userOrPermission(
                                            "delete",
                                            _vm.getProfile.user_id
                                          )
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteHandler(
                                              "languages",
                                              props.row.id
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    })
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "b__collapse__section" }, [
        _c("div", { staticClass: "card" }, [
          _c("header", { staticClass: "card-header" }, [
            _c("p", { staticClass: "card-header-title" }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.$t("app.continuous_dev")) +
                  "\n        "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.userOrPermission("create", _vm.getProfile.user_id)
                  ? _c(
                      "section",
                      { staticClass: "b__collapse__section" },
                      [
                        _c(
                          "b-collapse",
                          {
                            staticClass: "card",
                            attrs: {
                              animation: "slide",
                              "aria-id": "addreportingmethod"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "trigger",
                                  fn: function(props) {
                                    return _c(
                                      "div",
                                      {
                                        staticClass: "card-header",
                                        attrs: {
                                          role: "button",
                                          "aria-controls": "addreportingmethod"
                                        }
                                      },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "card-header-title has-text-info"
                                          },
                                          [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  _vm.$t(
                                                    "app.add_continuous_dev"
                                                  )
                                                ) +
                                                "\n                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          { staticClass: "card-header-icon" },
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                pack: "fas",
                                                type: "is-info",
                                                icon: props.open
                                                  ? "angle-down"
                                                  : "angle-up"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }
                                }
                              ],
                              null,
                              false,
                              3950233307
                            ),
                            model: {
                              value: _vm.isEditContinuousDev,
                              callback: function($$v) {
                                _vm.isEditContinuousDev = $$v
                              },
                              expression: "isEditContinuousDev"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c("div", { staticClass: "card-content" }, [
                              _c("div", { staticClass: "content" }, [
                                _c(
                                  "form",
                                  {
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        return _vm.addContinuousDev()
                                      }
                                    }
                                  },
                                  [
                                    _c("div", { staticClass: "columns" }, [
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$t(
                                                  "app.institution"
                                                ),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .continuousDev.institution
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .continuousDev.institution
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  size: "",
                                                  expanded: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications
                                                      .continuousDev
                                                      .institution,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .continuousDev,
                                                      "institution",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.continuousDev.institution"
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
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$t("app.major_spec"),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .continuousDev
                                                      .specialization.length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .continuousDev
                                                    .specialization
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  size: "",
                                                  expanded: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications
                                                      .continuousDev
                                                      .specialization,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .continuousDev,
                                                      "specialization",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "\n                              qualifications.continuousDev.specialization\n                            "
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "columns" }, [
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$t("app.started"),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .continuousDev.started
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .continuousDev.started
                                              }
                                            },
                                            [
                                              _c(
                                                "b-select",
                                                {
                                                  attrs: {
                                                    placeholder: _vm.$t(
                                                      "app.selectYear"
                                                    ),
                                                    size: "",
                                                    expanded: ""
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.qualifications
                                                        .continuousDev.started,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.qualifications
                                                          .continuousDev,
                                                        "started",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "qualifications.continuousDev.started"
                                                  }
                                                },
                                                _vm._l(_vm.getYears, function(
                                                  year,
                                                  index
                                                ) {
                                                  return _c(
                                                    "option",
                                                    {
                                                      key: index,
                                                      domProps: { value: year }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                              " +
                                                          _vm._s(year) +
                                                          "\n                            "
                                                      )
                                                    ]
                                                  )
                                                }),
                                                0
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: _vm.$t("app.completed"),
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .continuousDev.completed
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .continuousDev.completed
                                              }
                                            },
                                            [
                                              _c(
                                                "b-select",
                                                {
                                                  attrs: {
                                                    placeholder: _vm.$t(
                                                      "app.selectYear"
                                                    ),
                                                    size: "",
                                                    expanded: ""
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.qualifications
                                                        .continuousDev
                                                        .completed,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.qualifications
                                                          .continuousDev,
                                                        "completed",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "qualifications.continuousDev.completed"
                                                  }
                                                },
                                                _vm._l(_vm.getYears, function(
                                                  year,
                                                  index
                                                ) {
                                                  return _c(
                                                    "option",
                                                    {
                                                      key: index,
                                                      domProps: { value: year }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                              " +
                                                          _vm._s(year) +
                                                          "\n                            "
                                                      )
                                                    ]
                                                  )
                                                }),
                                                0
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("hr"),
                                    _vm._v(" "),
                                    _c(
                                      "b-field",
                                      { staticClass: "buttons" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "button is-success is-light",
                                            attrs: {
                                              type: "submit",
                                              disabled:
                                                _vm.isSubmittingContinuousDev
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(
                                                  _vm.isSubmittingContinuousDev
                                                    ? "" +
                                                        _vm.$t("app.submitting")
                                                    : _vm.$t("app.add")
                                                ) +
                                                "\n                      "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "is-danger is-light",
                                            on: {
                                              click: function($event) {
                                                return _vm.cancelContinuousDevForm()
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(_vm.$t("app.cancel")))]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "b-table",
                  {
                    attrs: {
                      data: _vm.getContinuousDev,
                      paginated: true,
                      "per-page": 5,
                      "current-page": 1,
                      "pagination-simple": true,
                      "pagination-position": "bottom"
                    }
                  },
                  [
                    _c("b-table-column", {
                      attrs: {
                        field: "institution",
                        label: _vm.$t("app.institution"),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.institution))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "specialization",
                        label: _vm.$t("app.specialization"),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.specialization))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "started",
                        label: _vm.$t("app.started"),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.started))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "completed",
                        label: _vm.$t("app.completed"),
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.completed))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "actions",
                        label: _vm.$tc("app.action", 2)
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _c(
                                "div",
                                { staticClass: "b-tooltips" },
                                [
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.edit_education"),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "pen",
                                          id:
                                            "continuous-dev-id" +
                                            _vm.getAttachmentDropperId,
                                          disabled: !_vm.userOrPermission(
                                            "update",
                                            _vm.getProfile.user_id
                                          )
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openContinuousDevDropper(
                                              props.row
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        label: _vm.$t("app.delete"),
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-danger is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "trash",
                                          disabled: !_vm.userOrPermission(
                                            "delete",
                                            _vm.getProfile.user_id
                                          )
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteHandler(
                                              "continuousDev",
                                              props.row.id
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    })
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "educationDropper",
          staticClass: "dropper",
          attrs: {
            join: "#education-id" + _vm.getAttachmentDropperId,
            "z-index": 1000
          },
          on: {
            "esc-keydown": _vm.closeEducationDropper,
            "other-area-clicked": _vm.closeEducationDropper
          }
        },
        [
          _c(
            "form",
            {
              staticStyle: { width: "30rem" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateEducation()
                }
              }
            },
            [
              _c("h3", { staticClass: "label text-main" }, [
                _vm._v("Edit Educational Details")
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-12" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Institution",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.education.institution
                                .length > 0
                          },
                          message:
                            _vm.qualificationsErrors.education.institution
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value: _vm.qualifications.education.institution,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.education,
                                "institution",
                                $$v
                              )
                            },
                            expression: "qualifications.education.institution"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-12" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Major/Specialization",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.education.specialization
                                .length > 0
                          },
                          message:
                            _vm.qualificationsErrors.education.specialization
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value: _vm.qualifications.education.specialization,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.education,
                                "specialization",
                                $$v
                              )
                            },
                            expression:
                              "qualifications.education.specialization"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-4" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Started",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.education.started
                                .length > 0
                          },
                          message: _vm.qualificationsErrors.education.started
                        }
                      },
                      [
                        _c(
                          "b-select",
                          {
                            attrs: {
                              placeholder: "Select year...",
                              size: "",
                              expanded: ""
                            },
                            model: {
                              value: _vm.qualifications.education.started,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.qualifications.education,
                                  "started",
                                  $$v
                                )
                              },
                              expression: "qualifications.education.started"
                            }
                          },
                          _vm._l(_vm.getYears, function(year, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: year } },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(year) +
                                    "\n              "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "column is-4" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Completed",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.education.completed
                                .length > 0
                          },
                          message: _vm.qualificationsErrors.education.completed
                        }
                      },
                      [
                        _c(
                          "b-select",
                          {
                            attrs: {
                              placeholder: "Select year...",
                              size: "",
                              expanded: ""
                            },
                            model: {
                              value: _vm.qualifications.education.completed,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.qualifications.education,
                                  "completed",
                                  $$v
                                )
                              },
                              expression: "qualifications.education.completed"
                            }
                          },
                          _vm._l(_vm.getYears, function(year, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: year } },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(year) +
                                    "\n              "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-field",
                { staticClass: "buttons" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "button is-success is-light",
                      attrs: {
                        type: "submit",
                        disabled: _vm.isSubmittingEducation
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.isSubmittingEducation ? "Saving..." : "Save"
                          ) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "is-danger is-light",
                      on: {
                        click: function($event) {
                          return _vm.closeEducationDropper()
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "continuousDevDropper",
          staticClass: "dropper",
          attrs: {
            join: "#continuous-dev-id" + _vm.getAttachmentDropperId,
            "z-index": 1000
          },
          on: {
            "esc-keydown": _vm.closeContinuousDevDropper,
            "other-area-clicked": _vm.closeContinuousDevDropper
          }
        },
        [
          _c(
            "form",
            {
              staticStyle: { width: "30rem" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateContinuousDev()
                }
              }
            },
            [
              _c("h3", { staticClass: "label text-main" }, [
                _vm._v("Edit Continuous Development")
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-12" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Institution",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.continuousDev.institution
                                .length > 0
                          },
                          message:
                            _vm.qualificationsErrors.continuousDev.institution
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value: _vm.qualifications.continuousDev.institution,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.continuousDev,
                                "institution",
                                $$v
                              )
                            },
                            expression:
                              "qualifications.continuousDev.institution"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-12" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Major/Specialization",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.continuousDev
                                .specialization.length > 0
                          },
                          message:
                            _vm.qualificationsErrors.continuousDev
                              .specialization
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value:
                              _vm.qualifications.continuousDev.specialization,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.continuousDev,
                                "specialization",
                                $$v
                              )
                            },
                            expression:
                              "qualifications.continuousDev.specialization"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-4" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Started",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.continuousDev.started
                                .length > 0
                          },
                          message:
                            _vm.qualificationsErrors.continuousDev.started
                        }
                      },
                      [
                        _c(
                          "b-select",
                          {
                            attrs: {
                              placeholder: "Select year...",
                              size: "",
                              expanded: ""
                            },
                            model: {
                              value: _vm.qualifications.continuousDev.started,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.qualifications.continuousDev,
                                  "started",
                                  $$v
                                )
                              },
                              expression: "qualifications.continuousDev.started"
                            }
                          },
                          _vm._l(_vm.getYears, function(year, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: year } },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(year) +
                                    "\n              "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "column is-4" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Completed",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.continuousDev.completed
                                .length > 0
                          },
                          message:
                            _vm.qualificationsErrors.continuousDev.completed
                        }
                      },
                      [
                        _c(
                          "b-select",
                          {
                            attrs: {
                              placeholder: "Select year...",
                              size: "",
                              expanded: ""
                            },
                            model: {
                              value: _vm.qualifications.continuousDev.completed,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.qualifications.continuousDev,
                                  "completed",
                                  $$v
                                )
                              },
                              expression:
                                "qualifications.continuousDev.completed"
                            }
                          },
                          _vm._l(_vm.getYears, function(year, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: year } },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(year) +
                                    "\n              "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-field",
                { staticClass: "buttons" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "button is-success is-light",
                      attrs: {
                        type: "submit",
                        disabled: _vm.isSubmittingContinuousDev
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.isSubmittingContinuousDev ? "Saving..." : "Save"
                          ) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "is-danger is-light",
                      on: {
                        click: function($event) {
                          return _vm.closeContinuousDevDropper()
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "expertiseDropper",
          staticClass: "dropper",
          attrs: {
            join: "#expertise-id" + _vm.getAttachmentDropperId,
            "z-index": 1000
          },
          on: {
            "esc-keydown": _vm.closeExpertiseDropper,
            "other-area-clicked": _vm.closeExpertiseDropper
          }
        },
        [
          _c(
            "form",
            {
              staticStyle: { width: "30rem" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateExpertise()
                }
              }
            },
            [
              _c("h3", { staticClass: "label text-main" }, [
                _vm._v("Edit Expertise")
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-6" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Expertise",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.expertise.expertise
                                .length > 0
                          },
                          message: _vm.qualificationsErrors.expertise.expertise
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value: _vm.qualifications.expertise.expertise,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.expertise,
                                "expertise",
                                $$v
                              )
                            },
                            expression: "qualifications.expertise.expertise"
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
                  { staticClass: "column is-6" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Years of experience",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.expertise
                                .yearOfExperience.length > 0
                          },
                          message:
                            _vm.qualificationsErrors.expertise.yearOfExperience
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value:
                              _vm.qualifications.expertise.yearOfExperience,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.expertise,
                                "yearOfExperience",
                                $$v
                              )
                            },
                            expression:
                              "qualifications.expertise.yearOfExperience"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-12" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Comment",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.expertise.comment
                                .length > 0
                          },
                          message: _vm.qualificationsErrors.expertise.comment
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: {
                            type: "textarea",
                            placeholder: "Type your comment...",
                            size: ""
                          },
                          model: {
                            value: _vm.qualifications.expertise.comment,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.expertise,
                                "comment",
                                $$v
                              )
                            },
                            expression: "qualifications.expertise.comment"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-field",
                { staticClass: "buttons" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "button is-success is-light",
                      attrs: {
                        type: "submit",
                        disabled: _vm.isSubmittingExpertise
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.isSubmittingExpertise ? "Saving..." : "Save"
                          ) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "is-danger is-light",
                      on: {
                        click: function($event) {
                          return _vm.closeExpertiseDropper()
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "languageDropper",
          staticClass: "dropper",
          attrs: {
            join: "#language-id" + _vm.getAttachmentDropperId,
            "z-index": 1000
          },
          on: {
            "esc-keydown": _vm.closeLanguageDropper,
            "other-area-clicked": _vm.closeLanguageDropper
          }
        },
        [
          _c(
            "form",
            {
              staticStyle: { width: "30rem" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateLanguage()
                }
              }
            },
            [
              _c("h3", { staticClass: "label text-main" }, [
                _vm._v("Edit Language")
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-6" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Language",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.languages.language
                                .length > 0
                          },
                          message: _vm.qualificationsErrors.languages.language
                        }
                      },
                      [
                        _c(
                          "b-select",
                          {
                            attrs: { size: "", expanded: "" },
                            model: {
                              value: _vm.qualifications.languages.language,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.qualifications.languages,
                                  "language",
                                  $$v
                                )
                              },
                              expression: "qualifications.languages.language"
                            }
                          },
                          [
                            _c("option", { attrs: { value: "English" } }, [
                              _vm._v("English")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "French" } }, [
                              _vm._v("French")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Ewe" } }, [
                              _vm._v("Ewe")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Ga" } }, [
                              _vm._v("Ga")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Twi" } }, [
                              _vm._v("Twi")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "column is-6" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Fluency",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.languages.fluency
                                .length > 0
                          },
                          message: _vm.qualificationsErrors.languages.fluency
                        }
                      },
                      [
                        _c(
                          "b-select",
                          {
                            attrs: { size: "", expanded: "" },
                            model: {
                              value: _vm.qualifications.languages.fluency,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.qualifications.languages,
                                  "fluency",
                                  $$v
                                )
                              },
                              expression: "qualifications.languages.fluency"
                            }
                          },
                          [
                            _c("option", { attrs: { value: "Poor" } }, [
                              _vm._v("Poor")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Good" } }, [
                              _vm._v("Good")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Very Good" } }, [
                              _vm._v("Very Good")
                            ]),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "Mother Tongue" } },
                              [_vm._v("Mother Tongue")]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  { staticClass: "column is-12" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Comment",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.languages.comment
                                .length > 0
                          },
                          message: _vm.qualificationsErrors.languages.comment
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: {
                            type: "textarea",
                            size: "",
                            placeholder: "Type your comment..."
                          },
                          model: {
                            value: _vm.qualifications.languages.comment,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.languages,
                                "comment",
                                $$v
                              )
                            },
                            expression: "qualifications.languages.comment"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-field",
                { staticClass: "buttons" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "button is-success is-light",
                      attrs: {
                        type: "submit",
                        disabled: _vm.isSubmittingLanguage
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.isSubmittingLanguage ? "Saving..." : "Save"
                          ) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "is-danger is-light",
                      on: {
                        click: function($event) {
                          return _vm.closeLanguageDropper()
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=template&id=80913e30&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=template&id=80913e30&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "b__collapse__section" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "profile-detail-bar" }, [
        _c("p", { staticClass: "p-text" }, [
          _vm._v(_vm._s(_vm.$t("app.report_to_cta")))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c("div", { staticClass: "content" }, [
          _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column is-4" }, [
              _c("h5", { staticClass: "text-main" }, [
                _vm._v(_vm._s(_vm.$t("app.report_to")))
              ]),
              _vm._v(" "),
              _vm.getMyLeaders.hods.length > 0
                ? _c(
                    "div",
                    { staticClass: "mb-3" },
                    _vm._l(_vm.getMyLeaders.hods, function(s, i) {
                      return _c(
                        "div",
                        { key: i },
                        [
                          _vm.getProfile.department_id === s.department_id
                            ? [
                                _c("h5", {}, [
                                  _vm._v(_vm._s(_vm.$t("app.hod")) + "(s)")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "article",
                                  { staticClass: "leader__details" },
                                  [
                                    _c("p", { staticClass: "report_to_text" }, [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            _vm.getFullName({
                                              title: s.title,
                                              lastName: s.lastName,
                                              firstName: s.firstName,
                                              middleName: s.middleName
                                            })
                                          ) +
                                          "\n                      "
                                      ),
                                      _c(
                                        "span",
                                        { staticClass: "report_to_label" },
                                        [_vm._v(_vm._s(_vm.$t("app.name")))]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    s.mobile
                                      ? _c(
                                          "p",
                                          { staticClass: "report_to_text" },
                                          [
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(s.mobile) +
                                                "\n                      "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "report_to_label"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("app.mobile"))
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    s.mail
                                      ? _c(
                                          "p",
                                          { staticClass: "report_to_text" },
                                          [
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(s.mail) +
                                                "\n                      "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "report_to_label"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$tc("app.email", 1)
                                                  )
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    s.position
                                      ? _c(
                                          "p",
                                          { staticClass: "report_to_text" },
                                          [
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(s.position) +
                                                "\n                      "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "report_to_label"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("app.position"))
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.getMyLeaders.supervisors.length > 0
                ? _c(
                    "div",
                    {},
                    _vm._l(_vm.getMyLeaders.supervisors, function(s, i) {
                      return _c(
                        "div",
                        { key: i },
                        [
                          _vm.getProfile.unit_id === s.unit_id
                            ? [
                                _c("h5", {}, [
                                  _vm._v(
                                    _vm._s(_vm.$t("app.supervisor")) + "(s)"
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "article",
                                  { staticClass: "leader__details" },
                                  [
                                    _c("p", { staticClass: "report_to_text" }, [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            _vm.getFullName({
                                              title: s.title,
                                              lastName: s.lastName,
                                              firstName: s.firstName,
                                              middleName: s.middleName
                                            })
                                          ) +
                                          "\n                      "
                                      ),
                                      _c(
                                        "span",
                                        { staticClass: "report_to_label" },
                                        [_vm._v(_vm._s(_vm.$t("app.name")))]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    s.mobile
                                      ? _c(
                                          "p",
                                          { staticClass: "report_to_text" },
                                          [
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(s.mobile) +
                                                "\n                      "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "report_to_label"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("app.mobile"))
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    s.mail
                                      ? _c(
                                          "p",
                                          { staticClass: "report_to_text" },
                                          [
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(s.mail) +
                                                "\n                      "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "report_to_label"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$tc("app.email", 1)
                                                  )
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    s.position
                                      ? _c(
                                          "p",
                                          { staticClass: "report_to_text" },
                                          [
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(s.position) +
                                                "\n                      "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "report_to_label"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("app.position"))
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    }),
                    0
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column is-4" }, [
              _c("h5", { staticClass: "text-main" }, [
                _vm._v(_vm._s(_vm.$t("app.report_to_me")))
              ]),
              _vm._v(" "),
              _vm.getMyLeaders.reportToMe.length > 0
                ? _c(
                    "div",
                    { staticClass: "mb-3" },
                    _vm._l(_vm.getMyLeaders.reportToMe, function(s, i) {
                      return _c("div", { key: i }, [
                        _c("article", { staticClass: "leader__details" }, [
                          _c("p", { staticClass: "report_to_text" }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm.getFullName({
                                    title: s.title,
                                    lastName: s.lastName,
                                    firstName: s.firstName,
                                    middleName: s.middleName
                                  })
                                ) +
                                "\n                    "
                            ),
                            _c("span", { staticClass: "report_to_label" }, [
                              _vm._v(_vm._s(_vm.$t("app.name")))
                            ])
                          ]),
                          _vm._v(" "),
                          s.mobile
                            ? _c("p", { staticClass: "report_to_text" }, [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(s.mobile) +
                                    "\n                    "
                                ),
                                _c("span", { staticClass: "report_to_label" }, [
                                  _vm._v(_vm._s(_vm.$t("app.mobile")))
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          s.mail
                            ? _c("p", { staticClass: "report_to_text" }, [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(s.mail) +
                                    "\n                    "
                                ),
                                _c("span", { staticClass: "report_to_label" }, [
                                  _vm._v(_vm._s(_vm.$tc("app.email", 1)))
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          s.position
                            ? _c("p", { staticClass: "report_to_text" }, [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(s.position) +
                                    "\n                    "
                                ),
                                _c("span", { staticClass: "report_to_label" }, [
                                  _vm._v(_vm._s(_vm.$t("app.position")))
                                ])
                              ])
                            : _vm._e()
                        ])
                      ])
                    }),
                    0
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.$page.props.authUser.report_to_roles &&
            JSON.parse(_vm.$page.props.authUser.report_to_roles).length > 0
              ? _c("div", { staticClass: "column is-4" }, [
                  _c("h5", { staticClass: "text-main" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(
                          _vm.$t("app.directorate") +
                            "  (" +
                            _vm.$t("app.report_to") +
                            ")"
                        ) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-3" },
                    _vm._l(
                      JSON.parse(_vm.$page.props.authUser.report_to_roles),
                      function(office, i) {
                        return _c(
                          "div",
                          { key: i },
                          [
                            _vm._l(_vm.getMyLeaders.directorates, function(
                              s,
                              j
                            ) {
                              return [
                                JSON.parse(s.roles).includes(office)
                                  ? _c("article", { key: j }, [
                                      _c(
                                        "article",
                                        { staticClass: "leader__details" },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "report_to_text" },
                                            [
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(
                                                    _vm.getFullName({
                                                      title: s.title,
                                                      lastName: s.lastName,
                                                      firstName: s.firstName,
                                                      middleName: s.middleName
                                                    })
                                                  ) +
                                                  "\n                        "
                                              ),
                                              _c(
                                                "span",
                                                {
                                                  staticClass: "report_to_label"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("app.name"))
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          s.mobile
                                            ? _c(
                                                "p",
                                                {
                                                  staticClass: "report_to_text"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(s.mobile) +
                                                      "\n                        "
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "report_to_label"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("app.mobile")
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          s.mail
                                            ? _c(
                                                "p",
                                                {
                                                  staticClass: "report_to_text"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(s.mail) +
                                                      "\n                        "
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "report_to_label"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$tc(
                                                            "app.email",
                                                            1
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          s.position
                                            ? _c(
                                                "p",
                                                {
                                                  staticClass: "report_to_text"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(s.position) +
                                                      "\n                        "
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "report_to_label"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("app.position")
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            })
                          ],
                          2
                        )
                      }
                    ),
                    0
                  )
                ])
              : _vm._e()
          ])
        ])
      ])
    ])
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

/***/ "./resources/js/Pages/ESS.vue":
/*!************************************!*\
  !*** ./resources/js/Pages/ESS.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ESS_vue_vue_type_template_id_a1665a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ESS.vue?vue&type=template&id=a1665a28&scoped=true& */ "./resources/js/Pages/ESS.vue?vue&type=template&id=a1665a28&scoped=true&");
/* harmony import */ var _ESS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ESS.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ESS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ESS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ESS_vue_vue_type_template_id_a1665a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ESS_vue_vue_type_template_id_a1665a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a1665a28",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ESS.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ESS.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/ESS.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ESS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ESS.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ESS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ESS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/ESS.vue?vue&type=template&id=a1665a28&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/ESS.vue?vue&type=template&id=a1665a28&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ESS_vue_vue_type_template_id_a1665a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ESS.vue?vue&type=template&id=a1665a28&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ESS.vue?vue&type=template&id=a1665a28&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ESS_vue_vue_type_template_id_a1665a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ESS_vue_vue_type_template_id_a1665a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ViewPdf.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/ViewPdf.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewPdf_vue_vue_type_template_id_a7e1ca1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewPdf.vue?vue&type=template&id=a7e1ca1c&scoped=true& */ "./resources/js/components/ViewPdf.vue?vue&type=template&id=a7e1ca1c&scoped=true&");
/* harmony import */ var _ViewPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewPdf.vue?vue&type=script&lang=js& */ "./resources/js/components/ViewPdf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewPdf_vue_vue_type_template_id_a7e1ca1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewPdf_vue_vue_type_template_id_a7e1ca1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a7e1ca1c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ViewPdf.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ViewPdf.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/ViewPdf.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewPdf.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ViewPdf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ViewPdf.vue?vue&type=template&id=a7e1ca1c&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ViewPdf.vue?vue&type=template&id=a7e1ca1c&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewPdf_vue_vue_type_template_id_a7e1ca1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewPdf.vue?vue&type=template&id=a7e1ca1c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ViewPdf.vue?vue&type=template&id=a7e1ca1c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewPdf_vue_vue_type_template_id_a7e1ca1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewPdf_vue_vue_type_template_id_a7e1ca1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ess/ConfigurationComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/ess/ConfigurationComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfigurationComponent_vue_vue_type_template_id_408372c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfigurationComponent.vue?vue&type=template&id=408372c8&scoped=true& */ "./resources/js/components/ess/ConfigurationComponent.vue?vue&type=template&id=408372c8&scoped=true&");
/* harmony import */ var _ConfigurationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigurationComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ess/ConfigurationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ConfigurationComponent_vue_vue_type_style_index_0_id_408372c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true& */ "./resources/js/components/ess/ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConfigurationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfigurationComponent_vue_vue_type_template_id_408372c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConfigurationComponent_vue_vue_type_template_id_408372c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "408372c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ess/ConfigurationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ess/ConfigurationComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ess/ConfigurationComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfigurationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfigurationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfigurationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ess/ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/ess/ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfigurationComponent_vue_vue_type_style_index_0_id_408372c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=style&index=0&id=408372c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfigurationComponent_vue_vue_type_style_index_0_id_408372c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfigurationComponent_vue_vue_type_style_index_0_id_408372c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfigurationComponent_vue_vue_type_style_index_0_id_408372c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfigurationComponent_vue_vue_type_style_index_0_id_408372c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ess/ConfigurationComponent.vue?vue&type=template&id=408372c8&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ess/ConfigurationComponent.vue?vue&type=template&id=408372c8&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfigurationComponent_vue_vue_type_template_id_408372c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfigurationComponent.vue?vue&type=template&id=408372c8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ConfigurationComponent.vue?vue&type=template&id=408372c8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfigurationComponent_vue_vue_type_template_id_408372c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfigurationComponent_vue_vue_type_template_id_408372c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ess/MyEntitlementComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/ess/MyEntitlementComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyEntitlementComponent_vue_vue_type_template_id_fd22e4de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyEntitlementComponent.vue?vue&type=template&id=fd22e4de&scoped=true& */ "./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=template&id=fd22e4de&scoped=true&");
/* harmony import */ var _MyEntitlementComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyEntitlementComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyEntitlementComponent_vue_vue_type_style_index_0_id_fd22e4de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true& */ "./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyEntitlementComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyEntitlementComponent_vue_vue_type_template_id_fd22e4de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyEntitlementComponent_vue_vue_type_template_id_fd22e4de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fd22e4de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ess/MyEntitlementComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyEntitlementComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyEntitlementComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyEntitlementComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MyEntitlementComponent_vue_vue_type_style_index_0_id_fd22e4de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=style&index=0&id=fd22e4de&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MyEntitlementComponent_vue_vue_type_style_index_0_id_fd22e4de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MyEntitlementComponent_vue_vue_type_style_index_0_id_fd22e4de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MyEntitlementComponent_vue_vue_type_style_index_0_id_fd22e4de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MyEntitlementComponent_vue_vue_type_style_index_0_id_fd22e4de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=template&id=fd22e4de&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=template&id=fd22e4de&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyEntitlementComponent_vue_vue_type_template_id_fd22e4de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyEntitlementComponent.vue?vue&type=template&id=fd22e4de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyEntitlementComponent.vue?vue&type=template&id=fd22e4de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyEntitlementComponent_vue_vue_type_template_id_fd22e4de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyEntitlementComponent_vue_vue_type_template_id_fd22e4de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ess/MyLeaveComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/ess/MyLeaveComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyLeaveComponent_vue_vue_type_template_id_1cb0ef07_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyLeaveComponent.vue?vue&type=template&id=1cb0ef07&scoped=true& */ "./resources/js/components/ess/MyLeaveComponent.vue?vue&type=template&id=1cb0ef07&scoped=true&");
/* harmony import */ var _MyLeaveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyLeaveComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ess/MyLeaveComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyLeaveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyLeaveComponent_vue_vue_type_template_id_1cb0ef07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyLeaveComponent_vue_vue_type_template_id_1cb0ef07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1cb0ef07",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ess/MyLeaveComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ess/MyLeaveComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ess/MyLeaveComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLeaveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyLeaveComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyLeaveComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLeaveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ess/MyLeaveComponent.vue?vue&type=template&id=1cb0ef07&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/ess/MyLeaveComponent.vue?vue&type=template&id=1cb0ef07&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLeaveComponent_vue_vue_type_template_id_1cb0ef07_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyLeaveComponent.vue?vue&type=template&id=1cb0ef07&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/MyLeaveComponent.vue?vue&type=template&id=1cb0ef07&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLeaveComponent_vue_vue_type_template_id_1cb0ef07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLeaveComponent_vue_vue_type_template_id_1cb0ef07_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ess/ProfileComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/ess/ProfileComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileComponent_vue_vue_type_template_id_22f352ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileComponent.vue?vue&type=template&id=22f352ee&scoped=true& */ "./resources/js/components/ess/ProfileComponent.vue?vue&type=template&id=22f352ee&scoped=true&");
/* harmony import */ var _ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ess/ProfileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProfileComponent_vue_vue_type_style_index_0_id_22f352ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true& */ "./resources/js/components/ess/ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileComponent_vue_vue_type_template_id_22f352ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileComponent_vue_vue_type_template_id_22f352ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "22f352ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ess/ProfileComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ess/ProfileComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ess/ProfileComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ProfileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ess/ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/ess/ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_id_22f352ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ProfileComponent.vue?vue&type=style&index=0&id=22f352ee&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_id_22f352ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_id_22f352ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_id_22f352ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_style_index_0_id_22f352ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ess/ProfileComponent.vue?vue&type=template&id=22f352ee&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/ess/ProfileComponent.vue?vue&type=template&id=22f352ee&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_22f352ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileComponent.vue?vue&type=template&id=22f352ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/ProfileComponent.vue?vue&type=template&id=22f352ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_22f352ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_22f352ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ess/profile/ContactDetails.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/ess/profile/ContactDetails.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactDetails_vue_vue_type_template_id_614bd6c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactDetails.vue?vue&type=template&id=614bd6c6&scoped=true& */ "./resources/js/components/ess/profile/ContactDetails.vue?vue&type=template&id=614bd6c6&scoped=true&");
/* harmony import */ var _ContactDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/ess/profile/ContactDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactDetails_vue_vue_type_template_id_614bd6c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactDetails_vue_vue_type_template_id_614bd6c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "614bd6c6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ess/profile/ContactDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ess/profile/ContactDetails.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/ContactDetails.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ContactDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ess/profile/ContactDetails.vue?vue&type=template&id=614bd6c6&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/ContactDetails.vue?vue&type=template&id=614bd6c6&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactDetails_vue_vue_type_template_id_614bd6c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactDetails.vue?vue&type=template&id=614bd6c6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ContactDetails.vue?vue&type=template&id=614bd6c6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactDetails_vue_vue_type_template_id_614bd6c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactDetails_vue_vue_type_template_id_614bd6c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ess/profile/EmergencyContactDetails.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ess/profile/EmergencyContactDetails.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmergencyContactDetails_vue_vue_type_template_id_831a7530_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmergencyContactDetails.vue?vue&type=template&id=831a7530&scoped=true& */ "./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=template&id=831a7530&scoped=true&");
/* harmony import */ var _EmergencyContactDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmergencyContactDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmergencyContactDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmergencyContactDetails_vue_vue_type_template_id_831a7530_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmergencyContactDetails_vue_vue_type_template_id_831a7530_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "831a7530",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ess/profile/EmergencyContactDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmergencyContactDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmergencyContactDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmergencyContactDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=template&id=831a7530&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=template&id=831a7530&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmergencyContactDetails_vue_vue_type_template_id_831a7530_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmergencyContactDetails.vue?vue&type=template&id=831a7530&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/EmergencyContactDetails.vue?vue&type=template&id=831a7530&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmergencyContactDetails_vue_vue_type_template_id_831a7530_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmergencyContactDetails_vue_vue_type_template_id_831a7530_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ess/profile/JobDetails.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/ess/profile/JobDetails.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JobDetails_vue_vue_type_template_id_1b5ebb40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JobDetails.vue?vue&type=template&id=1b5ebb40&scoped=true& */ "./resources/js/components/ess/profile/JobDetails.vue?vue&type=template&id=1b5ebb40&scoped=true&");
/* harmony import */ var _JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/ess/profile/JobDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JobDetails_vue_vue_type_template_id_1b5ebb40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JobDetails_vue_vue_type_template_id_1b5ebb40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b5ebb40",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ess/profile/JobDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ess/profile/JobDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/JobDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JobDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/JobDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ess/profile/JobDetails.vue?vue&type=template&id=1b5ebb40&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/JobDetails.vue?vue&type=template&id=1b5ebb40&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_template_id_1b5ebb40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JobDetails.vue?vue&type=template&id=1b5ebb40&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/JobDetails.vue?vue&type=template&id=1b5ebb40&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_template_id_1b5ebb40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_template_id_1b5ebb40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ess/profile/PersonalDetails.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ess/profile/PersonalDetails.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PersonalDetails_vue_vue_type_template_id_0e698652_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonalDetails.vue?vue&type=template&id=0e698652&scoped=true& */ "./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=template&id=0e698652&scoped=true&");
/* harmony import */ var _PersonalDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonalDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PersonalDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonalDetails_vue_vue_type_template_id_0e698652_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PersonalDetails_vue_vue_type_template_id_0e698652_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0e698652",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ess/profile/PersonalDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=template&id=0e698652&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=template&id=0e698652&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_template_id_0e698652_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalDetails.vue?vue&type=template&id=0e698652&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/PersonalDetails.vue?vue&type=template&id=0e698652&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_template_id_0e698652_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_template_id_0e698652_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ess/profile/QualificationDetails.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/ess/profile/QualificationDetails.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QualificationDetails_vue_vue_type_template_id_9268b5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QualificationDetails.vue?vue&type=template&id=9268b5a4&scoped=true& */ "./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=template&id=9268b5a4&scoped=true&");
/* harmony import */ var _QualificationDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QualificationDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QualificationDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QualificationDetails_vue_vue_type_template_id_9268b5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QualificationDetails_vue_vue_type_template_id_9268b5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9268b5a4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ess/profile/QualificationDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QualificationDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QualificationDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QualificationDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=template&id=9268b5a4&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=template&id=9268b5a4&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QualificationDetails_vue_vue_type_template_id_9268b5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QualificationDetails.vue?vue&type=template&id=9268b5a4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/QualificationDetails.vue?vue&type=template&id=9268b5a4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QualificationDetails_vue_vue_type_template_id_9268b5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QualificationDetails_vue_vue_type_template_id_9268b5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ess/profile/ReportToDetails.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ess/profile/ReportToDetails.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportToDetails_vue_vue_type_template_id_80913e30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportToDetails.vue?vue&type=template&id=80913e30&scoped=true& */ "./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=template&id=80913e30&scoped=true&");
/* harmony import */ var _ReportToDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportToDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportToDetails_vue_vue_type_style_index_0_id_80913e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true& */ "./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportToDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportToDetails_vue_vue_type_template_id_80913e30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportToDetails_vue_vue_type_template_id_80913e30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "80913e30",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ess/profile/ReportToDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportToDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportToDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportToDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportToDetails_vue_vue_type_style_index_0_id_80913e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=style&index=0&id=80913e30&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportToDetails_vue_vue_type_style_index_0_id_80913e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportToDetails_vue_vue_type_style_index_0_id_80913e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportToDetails_vue_vue_type_style_index_0_id_80913e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportToDetails_vue_vue_type_style_index_0_id_80913e30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=template&id=80913e30&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=template&id=80913e30&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportToDetails_vue_vue_type_template_id_80913e30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportToDetails.vue?vue&type=template&id=80913e30&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ess/profile/ReportToDetails.vue?vue&type=template&id=80913e30&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportToDetails_vue_vue_type_template_id_80913e30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportToDetails_vue_vue_type_template_id_80913e30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);