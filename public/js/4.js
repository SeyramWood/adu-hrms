(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ESS.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ESS.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Dashboard */ "./resources/js/components/Dashboard.vue");
/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Tab */ "./resources/js/components/Tab.vue");
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tabs */ "./resources/js/components/Tabs.vue");
/* harmony import */ var _components_ess_ProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ess/ProfileComponent */ "./resources/js/components/ess/ProfileComponent.vue");
/* harmony import */ var _components_ess_MyLeaveComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ess/MyLeaveComponent */ "./resources/js/components/ess/MyLeaveComponent.vue");
/* harmony import */ var _components_ess_MyEntitlementComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ess/MyEntitlementComponent */ "./resources/js/components/ess/MyEntitlementComponent.vue");
/* harmony import */ var _components_ess_ConfigurationComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ess/ConfigurationComponent */ "./resources/js/components/ess/ConfigurationComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
    Tab: _components_Tab__WEBPACK_IMPORTED_MODULE_1__["default"],
    Tabs: _components_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"],
    ProfileComponent: _components_ess_ProfileComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    MyLeaveComponent: _components_ess_MyLeaveComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    MyEntitlementComponent: _components_ess_MyEntitlementComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    ConfigurationComponent: _components_ess_ConfigurationComponent__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  layout: _components_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    profile: {
      require: true,
      type: Object
    },
    jobCategories: Array,
    jobTitles: Array,
    employmentStatuses: Array,
    branches: Array,
    departments: Array
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(["getProfile", "getJobCategories", "getJobTitles", "getEmploymentStatus", "getBranches", "getDepartments"])),
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
    this.dispatchBranch({
      payload: this.branches
    });
    this.dispatchDepartment({
      payload: this.departments
    });
  },
  data: function data() {
    return {
      tabIndex: 0,
      regex: new RegExp("^/dashboard/ess/[0-9]+/[a-z-]*$")
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])(["dispatchProfile", "dispatchJobCategory", "dispatchJobTitle", "dispatchEmploymentStatus", "dispatchBranch", "dispatchDepartment"])), {}, {
    getBranch: function getBranch(profile) {
      if (profile.job) {
        var branch = this.getDepartments.find(function (b) {
          return b.id === parseInt(profile.job.department);
        });
        return branch.name;
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ConfigurationComponent",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])([])),
  created: function created() {},
  beforeMount: function beforeMount() {
    this.authUser = this.$page.props.authUser;
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      isUpdatingPassword: false,
      openChangePassword: true,
      authUser: null,
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
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])([])), {}, {
    changePassword: function changePassword() {
      var _this = this;

      this.setCredentialErrors();
      this.isUpdatingPassword = true;
      this.$axios.put("/change-password", this.credentials).then(function (res) {
        _this.isUpdatingPassword = false;

        if (res.status === 200 && res.data.changed) {
          _this.clearCredentials();

          _this.snackbar("Your password was successfuly changed.", "is-dark");
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this.isUpdatingPassword = false, _this.setCredentialErrors(err.response.data.errors);
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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProfileComponent",
  components: {
    PersonalDetails: _profile_PersonalDetails__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContactDetails: _profile_ContactDetails__WEBPACK_IMPORTED_MODULE_2__["default"],
    EmergencyContactDetails: _profile_EmergencyContactDetails__WEBPACK_IMPORTED_MODULE_3__["default"],
    JobDetails: _profile_JobDetails__WEBPACK_IMPORTED_MODULE_4__["default"],
    QualificationDetails: _profile_QualificationDetails__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getProfile"])),
  created: function created() {// this.fetchJobs();
    // this.fetchBranches();
    // this.fetchDepartments();
    // this.setPersonalDetails();
    // this.setContactDetails();
    // this.setJob();
  },
  data: function data() {
    return {
      reports: [{
        id: "1",
        name: "PIM Report"
      }]
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchAuthUser", "dispatchProfile", "fetchJobs", "fetchBranches", "fetchDepartments", "fetchAuthUser", "fetchProfile"]))
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ContactDetails",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getProfile"])),
  created: function created() {},
  beforeMount: function beforeMount() {
    this.setContactDetails(this.getProfile.contact_details);
  },
  data: function data() {
    return {
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "JobDetails",
  components: {
    ViewPdf: _ViewPdf__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getProfile", "getJobCategories", "getJobTitles", "getEmploymentStatus", "getBranches", "getDepartments"])), {}, {
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
  },
  data: function data() {
    return {
      isAdmin: true,
      jTitles: [],
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
        branch: "",
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
        branch: [],
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
          department: jobDetails.department,
          branch: jobDetails.branch,
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
      data.append("branch", this.job.branch);
      data.append("startDate", this.job.startDate.toISOString());
      data.append("endDate", this.job.endDate.toISOString());
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
      this.job.branch = "";
      this.job.startDate = null;
      this.job.endDate = null;
      this.job.contractDetails = null;
      this.job.contractDetailsAvailable = "";
      this.job.contractStatus = null;
    },
    setJobErrors: function setJobErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.jobErrors.title = error.title ? error.title : [];
      this.jobErrors.specification = error.specification ? error.specification : [];
      this.jobErrors.category = error.category ? error.category : [];
      this.jobErrors.employmentStatus = error.employmentStatus ? error.employmentStatus : [];
      this.jobErrors.department = error.department ? error.department : [];
      this.jobErrors.branch = error.branch ? error.branch : [];
      this.jobErrors.startDate = error.startDate ? error.startDate : [];
      this.jobErrors.endDate = error.endDate ? error.endDate : [];
      this.jobErrors.contractDetails = error.contractDetails ? error.contractDetails : [];
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PersonalDetails",
  components: {
    ViewPdf: _ViewPdf__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getProfile"])), {}, {
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
        otherId: "",
        birthDate: new Date(),
        maritalStatus: "",
        nationality: "",
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
        otherId: [],
        birthDate: [],
        maritalStatus: [],
        nationality: [],
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
        otherId: details.otherId || "",
        birthDate: details.birthDate ? new Date(details.birthDate) : new Date(),
        maritalStatus: details.maritalStatus || "",
        nationality: details.nationality || "",
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
      this.personalDetailsErrors.otherId = error.otherId || [];
      this.personalDetailsErrors.birthDate = error.birthDate || [];
      this.personalDetailsErrors.maritalStatus = error.maritalStatus || [];
      this.personalDetailsErrors.nationality = error.nationality || [];
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
        file: [],
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ViewPdf: _ViewPdf__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getProfile"])), {}, {
    getWorkExperience: function getWorkExperience() {
      if (typeof this.getProfile.qualifications.workExperience === "string") return JSON.parse(this.getProfile.qualifications.workExperience);
      return [];
    },
    getEducation: function getEducation() {
      if (typeof this.getProfile.qualifications.education === "string") return JSON.parse(this.getProfile.qualifications.education);
      return [];
    },
    getSkills: function getSkills() {
      if (typeof this.getProfile.qualifications.skills === "string") return JSON.parse(this.getProfile.qualifications.skills);
      return [];
    },
    getLanguages: function getLanguages() {
      if (typeof this.getProfile.qualifications.languages === "string") return JSON.parse(this.getProfile.qualifications.languages);
      return [];
    },
    getAttachments: function getAttachments() {
      if (typeof this.getProfile.qualifications.attachments === "string") return JSON.parse(this.getProfile.qualifications.attachments);
      return [];
    },
    getAttachmentDropperId: function getAttachmentDropperId() {
      return this.attachmentDropperId;
    }
  }),
  created: function created() {},
  data: function data() {
    return {
      isEditWorkExperience: false,
      isEditEducation: false,
      isEditSkills: false,
      isEditLanguage: false,
      isEditQualificationAttachment: false,
      isSubmitting: false,
      attachmentUpdateType: null,
      attachmentDropperId: null,
      // isviewSpecification: false,
      isSubmittingWorkExperience: false,
      isSubmittingEducation: false,
      isSubmittingSkills: false,
      isSubmittingLanguage: false,
      isSubmittingQualificationAttachment: false,
      qualifications: {
        workExperience: {
          company: "",
          jobTitle: "",
          from: null,
          to: null,
          comment: ""
        },
        education: {
          institution: "",
          specialization: "",
          gpa: null,
          started: null,
          completed: null
        },
        skills: {
          skill: "",
          yearOfExperience: "",
          comment: ""
        },
        languages: {
          language: "",
          fluency: "",
          comment: ""
        },
        attachment: {
          file: null,
          comment: ""
        }
      },
      qualificationsErrors: {
        workExperience: {
          company: [],
          jobTitle: [],
          from: [],
          to: [],
          comment: []
        },
        education: {
          institution: [],
          specialization: [],
          gpa: [],
          started: [],
          completed: []
        },
        skills: {
          skill: [],
          yearOfExperience: [],
          comment: []
        },
        languages: {
          language: [],
          fluency: [],
          comment: []
        },
        attachment: {
          file: [],
          comment: []
        }
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchProfile"])), {}, {
    openAttachmentDropper: function openAttachmentDropper(data, type) {
      var dropper = this.$refs.attachmentDropper;
      this.attachmentDropperId = data.id;
      this.attachmentUpdateType = type;

      if (dropper) {
        this.qualifications.attachment = {
          comment: data.comment
        };
        dropper.open();
      }
    },
    closeAttachmentDropper: function closeAttachmentDropper() {
      var dropper = this.$refs.attachmentDropper;
      this.attachmentUpdateType = "";

      if (dropper) {
        this.cancelQualificationAttachmentForm();
        dropper.close();
      }
    },
    openWorkExperienceDropper: function openWorkExperienceDropper(data) {
      var dropper = this.$refs.workExperienceDropper;
      this.attachmentDropperId = data.id;

      if (dropper) {
        this.qualifications.workExperience = {
          company: data.company,
          jobTitle: data.jobTitle,
          from: data.from,
          to: data.to,
          comment: data.comment
        };
        dropper.open();
      }
    },
    closeWorkExperienceDropper: function closeWorkExperienceDropper() {
      var dropper = this.$refs.workExperienceDropper;
      this.attachmentUpdateType = "";

      if (dropper) {
        this.cancelWorkExperienceForm();
        dropper.close();
      }
    },
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
    openSkillDropper: function openSkillDropper(data) {
      var dropper = this.$refs.skillDropper;
      this.attachmentDropperId = data.id;

      if (dropper) {
        this.qualifications.skills = {
          skill: data.skill,
          yearOfExperience: data.yearOfExperience,
          comment: data.comment
        };
        dropper.open();
      }
    },
    closeSkillDropper: function closeSkillDropper() {
      var dropper = this.$refs.skillDropper;
      this.attachmentUpdateType = "";

      if (dropper) {
        this.cancelSkillsForm();
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
    addWorkExperience: function addWorkExperience() {
      var _this = this;

      this.isSubmittingWorkExperience = true;
      this.setWorkExperienceErrors();
      this.$axios.put("/dashboard/ess/add-work-experience/".concat(this.getProfile.user_id), this.qualifications.workExperience).then(function (res) {
        if (res.status === 200 && res.data.added) {
          _this.clearWorkExperienceForm();

          _this.dispatchProfile({
            type: "ADD_WORK_EXPERIENCE",
            payload: res.data.data
          });

          setTimeout(function () {
            _this.snackbar("Work experience added successfully", "is-dark");

            _this.isSubmittingWorkExperience = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this.setWorkExperienceErrors(err.response.data.errors);
        }

        _this.isSubmittingWorkExperience = false;
      });
    },
    updateWorkExperience: function updateWorkExperience() {
      var _this2 = this;

      this.isSubmittingWorkExperience = true;
      this.setWorkExperienceErrors();
      this.$axios.put("/dashboard/ess/update-work-experience/".concat(this.getProfile.user_id, "/").concat(this.attachmentDropperId), this.qualifications.workExperience).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this2.dispatchProfile({
            type: "ADD_WORK_EXPERIENCE",
            payload: res.data.data
          });

          setTimeout(function () {
            _this2.snackbar("Work experience updated successfully", "is-dark");

            _this2.isSubmittingWorkExperience = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this2.setWorkExperienceErrors(err.response.data.errors);
        }

        _this2.isSubmittingWorkExperience = false;
      });
    },
    addEducation: function addEducation() {
      var _this3 = this;

      this.isSubmittingEducation = true;
      this.setEducationErrors();
      this.$axios.put("/dashboard/ess/add-education/".concat(this.getProfile.user_id), this.qualifications.education).then(function (res) {
        if (res.status === 200 && res.data.added) {
          _this3.dispatchProfile({
            type: "ADD_EDUCATION",
            payload: res.data.data
          });

          _this3.clearEducationForm();

          setTimeout(function () {
            _this3.snackbar("Education added successfully", "is-dark");

            _this3.isSubmittingEducation = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this3.setEducationErrors(err.response.data.errors);
        }

        _this3.isSubmittingEducation = false;
      });
    },
    updateEducation: function updateEducation() {
      var _this4 = this;

      this.isSubmittingEducation = true;
      this.setEducationErrors();
      this.$axios.put("/dashboard/ess/update-education/".concat(this.getProfile.user_id, "/").concat(this.attachmentDropperId), this.qualifications.education).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this4.dispatchProfile({
            type: "ADD_EDUCATION",
            payload: res.data.data
          });

          setTimeout(function () {
            _this4.snackbar("Education updated successfully", "is-dark");

            _this4.isSubmittingEducation = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this4.setEducationErrors(err.response.data.errors);
        }

        _this4.isSubmittingEducation = false;
      });
    },
    addSkills: function addSkills() {
      var _this5 = this;

      this.isSubmittingSkills = true;
      this.setSkillsErrors();
      this.$axios.put("/dashboard/ess/add-skill/".concat(this.getProfile.user_id), this.qualifications.skills).then(function (res) {
        if (res.status === 200 && res.data.added) {
          _this5.clearSkillsForm();

          _this5.dispatchProfile({
            type: "ADD_SKILL",
            payload: res.data.data
          });

          setTimeout(function () {
            _this5.snackbar("Skill added successfully", "is-dark");

            _this5.isSubmittingSkills = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this5.setSkillsErrors(err.response.data.errors);
        }

        _this5.isSubmittingSkills = false;
      });
    },
    updateSkills: function updateSkills() {
      var _this6 = this;

      this.isSubmittingSkills = true;
      this.setSkillsErrors();
      this.$axios.put("/dashboard/ess/update-skill/".concat(this.getProfile.user_id, "/").concat(this.attachmentDropperId), this.qualifications.skills).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this6.dispatchProfile({
            type: "ADD_SKILL",
            payload: res.data.data
          });

          setTimeout(function () {
            _this6.snackbar("Skill updated successfully", "is-dark");

            _this6.isSubmittingSkills = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this6.setSkillsErrors(err.response.data.errors);
        }

        _this6.isSubmittingSkills = false;
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
    addQualificationAttachment: function addQualificationAttachment() {
      var _this9 = this;

      this.isSubmittingQualificationAttachment = true;
      this.setQualificationAttachmentErrors();
      var data = new FormData();
      data.append("file", this.qualifications.attachment.file);
      data.append("comment", this.qualifications.attachment.comment);
      this.$axios.post("/dashboard/ess/add-qualification-attachment/".concat(this.getProfile.user_id), data).then(function (res) {
        if (res.status === 200) {
          _this9.clearQualificationAttachmentForm();

          _this9.dispatchProfile({
            type: "ADD_ATTACHMENT",
            payload: res.data.data
          });

          setTimeout(function () {
            _this9.snackbar("Attachment added successfully", "is-dark");

            _this9.isSubmittingQualificationAttachment = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          _this9.setQualificationAttachmentErrors(err.response.data.errors);
        }

        _this9.isSubmittingQualificationAttachment = false;
      });
    },
    replaceAttachment: function replaceAttachment(type) {
      var _this10 = this;

      this.isSubmittingQualificationAttachment = true;
      this.setQualificationAttachmentErrors();
      var data = new FormData();

      if (type === "comment") {
        data.append("id", this.attachmentDropperId);
        data.append("comment", this.qualifications.attachment.comment);
      }

      if (type === "attachment") {
        data.append("id", this.attachmentDropperId);
        data.append("file", this.qualifications.attachment.file);
      }

      this.$axios.post("/dashboard/ess/replace-qualification-attachment/".concat(this.getProfile.user_id), data).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this10.qualifications.attachment.file = null;

          _this10.dispatchProfile({
            type: "ADD_ATTACHMENT",
            payload: res.data.data
          });

          setTimeout(function () {
            if (type === "comment") {
              _this10.snackbar("Comment updated successfully", "is-dark");
            }

            if (type === "attachment") {
              _this10.snackbar("Attachment updated successfully", "is-dark");
            }

            _this10.isSubmittingQualificationAttachment = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status == 422) {
          setTimeout(function () {
            _this10.setQualificationAttachmentErrors(err.response.data.errors);

            _this10.isSubmittingQualificationAttachment = false;
          }, 1000);
        }
      });
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
    deleteHandler: function deleteHandler(type, id) {
      var _this11 = this;

      this.$axios["delete"]("/dashboard/ess/delete-qualification/".concat(this.getProfile.user_id, "/").concat(id, "/").concat(type)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this11.dispatchProfile({
            type: "UDATE_QUALIFICATION",
            payload: {
              type: type,
              data: res.data.data
            }
          });

          setTimeout(function () {
            _this11.snackbar("Data successfully deleted", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    clearWorkExperienceForm: function clearWorkExperienceForm() {
      this.qualifications.workExperience.company = "";
      this.qualifications.workExperience.jobTitle = "";
      this.qualifications.workExperience.from = "";
      this.qualifications.workExperience.to = "";
      this.qualifications.workExperience.comment = "";
    },
    clearEducationForm: function clearEducationForm() {
      this.qualifications.education.institution = "";
      this.qualifications.education.specialization = "";
      this.qualifications.education.gpa = "";
      this.qualifications.education.started = "";
      this.qualifications.education.completed = "";
    },
    clearSkillsForm: function clearSkillsForm() {
      this.qualifications.skills.skill = "";
      this.qualifications.skills.yearOfExperience = "";
      this.qualifications.skills.comment = "";
    },
    clearLanguageForm: function clearLanguageForm() {
      this.qualifications.languages.language = "";
      this.qualifications.languages.fluency = "";
      this.qualifications.languages.comment = "";
    },
    clearQualificationAttachmentForm: function clearQualificationAttachmentForm() {
      this.qualifications.attachment.file = null;
      this.qualifications.attachment.comment = "";
    },
    cancelWorkExperienceForm: function cancelWorkExperienceForm() {
      this.isEditWorkExperience = false;
      this.clearWorkExperienceForm();
      this.setWorkExperienceErrors();
    },
    cancelEducationForm: function cancelEducationForm() {
      this.isEditEducation = false;
      this.clearEducationForm();
      this.setEducationErrors();
    },
    cancelLanguageForm: function cancelLanguageForm() {
      this.isEditLanguage = false;
      this.clearLanguageForm();
      this.setLanguageErrors();
    },
    cancelSkillsForm: function cancelSkillsForm() {
      this.isEditSkills = false;
      this.clearSkillsForm();
      this.setSkillsErrors();
    },
    cancelQualificationAttachmentForm: function cancelQualificationAttachmentForm() {
      this.isEditQualificationAttachment = false;
      this.clearQualificationAttachmentForm();
      this.setQualificationAttachmentErrors();
    },
    setWorkExperienceErrors: function setWorkExperienceErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.qualificationsErrors.workExperience.company = error.company ? error.company : [];
      this.qualificationsErrors.workExperience.jobTitle = error.jobTitle ? error.jobTitle : [];
      this.qualificationsErrors.workExperience.from = error.from ? error.from : [];
      this.qualificationsErrors.workExperience.to = error.to ? error.to : [];
      this.qualificationsErrors.workExperience.comment = error.comment ? error.comment : [];
    },
    setEducationErrors: function setEducationErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.qualificationsErrors.education.institution = error.institution ? error.institution : [];
      this.qualificationsErrors.education.specialization = error.specialization ? error.specialization : [];
      this.qualificationsErrors.education.gpa = error.gpa ? error.gpa : [];
      this.qualificationsErrors.education.started = error.started ? error.started : [];
      this.qualificationsErrors.education.completed = error.completed ? error.completed : [];
    },
    setSkillsErrors: function setSkillsErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.qualificationsErrors.skills.skill = error.skill ? error.skill : [];
      this.qualificationsErrors.skills.yearOfExperience = error.yearOfExperience ? error.yearOfExperience : [];
      this.qualificationsErrors.skills.comment = error.comment ? error.comment : [];
    },
    setLanguageErrors: function setLanguageErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.qualificationsErrors.languages.language = error.language ? error.language : [];
      this.qualificationsErrors.languages.fluency = error.fluency ? error.fluency : [];
      this.qualificationsErrors.languages.comment = error.comment ? error.comment : [];
    },
    setQualificationAttachmentErrors: function setQualificationAttachmentErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.qualificationsErrors.attachment.file = error.file || [];
      this.qualificationsErrors.attachment.comment = error.comment || [];
    }
  })
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
                    _c("span", [_vm._v(_vm._s(_vm.getBranch(_vm.getProfile)))])
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
            !_vm.regex.test(_vm.$page.url)
              ? _c(
                  "tab",
                  { attrs: { label: "My Leave" } },
                  [_c("MyLeaveComponent")],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.regex.test(_vm.$page.url)
              ? _c(
                  "tab",
                  { attrs: { label: "Entitlements" } },
                  [_c("MyEntitlementComponent")],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "tab",
              { attrs: { label: "Profile" } },
              [_c("ProfileComponent")],
              1
            ),
            _vm._v(" "),
            !_vm.regex.test(_vm.$page.url)
              ? _c(
                  "tab",
                  { attrs: { label: "Configurations" } },
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
                        [_vm._v("Change Password")]
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
                                label: "Current Password",
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
                                  placeholder: "Current password",
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
                                label: "New Password",
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
                                  placeholder: "New password",
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
                                label: "Confirm New Password",
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
                                  placeholder: "Confirm new password",
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
                                            ? "Updating..."
                                            : "Update"
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
                                  [_vm._v("Cancel")]
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
                                  [_vm._v("I forget my password")]
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
            { attrs: { label: "Personal Details" } },
            [_c("PersonalDetails")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tab-item",
            { attrs: { label: "Contact Details" } },
            [_c("ContactDetails")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tab-item",
            { attrs: { label: "Emergency Contacts" } },
            [_c("EmergencyContactDetails")],
            1
          ),
          _vm._v(" "),
          _c("b-tab-item", { attrs: { label: "Job" } }, [_c("JobDetails")], 1),
          _vm._v(" "),
          _c(
            "b-tab-item",
            { attrs: { label: "Qualifications" } },
            [_c("QualificationDetails")],
            1
          ),
          _vm._v(" "),
          _c("b-tab-item", { attrs: { label: "Report-to" } }, [
            _c("section", { staticClass: "b__collapse__section" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "profile-detail-bar" }, [
                  _c("p", { staticClass: "p-text" }, [
                    _vm._v("Assigned Supervisors")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _c(
                        "b-table",
                        { attrs: { data: _vm.reports } },
                        [
                          _c("b-table-column", {
                            attrs: {
                              field: "id",
                              label: "ID",
                              width: "40",
                              sortable: "",
                              numeric: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [_vm._v(_vm._s(props.row.id))]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "name",
                              label: "Name",
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
                          _c(
                            "b-table-column",
                            { attrs: { field: "actions", label: "Actions" } },
                            [
                              _c(
                                "div",
                                { staticClass: "buttons" },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "is-info is-light",
                                      attrs: {
                                        size: "is-small",
                                        pack: "fas",
                                        "icon-right": "pen"
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "is-danger is-light",
                                      attrs: {
                                        size: "is-small",
                                        pack: "fas",
                                        "icon-right": "trash"
                                      }
                                    },
                                    [_vm._v("Delete")]
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
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "b__collapse__section" }, [
              _c("div", { staticClass: "card" }, [
                _c("header", { staticClass: "card-header" }, [
                  _c("p", { staticClass: "card-header-title" }, [
                    _vm._v("Assigned Assintant Supervisors")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _c(
                        "b-table",
                        { attrs: { data: _vm.reports } },
                        [
                          _c("b-table-column", {
                            attrs: {
                              field: "id",
                              label: "ID",
                              width: "40",
                              sortable: "",
                              numeric: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [_vm._v(_vm._s(props.row.id))]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "name",
                              label: "Name",
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
                          _c(
                            "b-table-column",
                            { attrs: { field: "actions", label: "Actions" } },
                            [
                              _c(
                                "div",
                                { staticClass: "buttons" },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "is-info is-light",
                                      attrs: {
                                        size: "is-small",
                                        pack: "fas",
                                        "icon-right": "pen"
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "is-danger is-light",
                                      attrs: {
                                        size: "is-small",
                                        pack: "fas",
                                        "icon-right": "trash"
                                      }
                                    },
                                    [_vm._v("Delete")]
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
            ])
          ])
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
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c(
          "div",
          { staticClass: "content" },
          [
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
                              label: "Address (1)",
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
                                maxlength: "150",
                                placeholder: "Type your address(1)",
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
                              label: "Address (2)",
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
                                maxlength: "150",
                                placeholder: "Type your address(2)",
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
                              label: "City",
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
                              label: "State/Region",
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
                              label: "Country",
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
                              [
                                _c("option", { attrs: { value: "Ghana" } }, [
                                  _vm._v("Ghana")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "Nigeria" } }, [
                                  _vm._v("Nigeria")
                                ])
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
                      { staticClass: "column is-4" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Mobile",
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
                              label: "Work Telephone",
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
                              label: "Home Telephone",
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
                      { staticClass: "column is-6" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Work Email",
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
                      { staticClass: "column is-6" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Other Email",
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
                                        ? "Saving..."
                                        : "Save"
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
                              [_vm._v("Cancel")]
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
            _vm.roleOrUserPermission("Admin", _vm.getProfile.user_id)
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
                            [_vm._v("Edit")]
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-detail-bar" }, [
      _c("p", { staticClass: "p-text" }, [_vm._v("Employee Contact Details")])
    ])
  }
]
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
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-content" }, [
          _c(
            "div",
            { staticClass: "content" },
            [
              _vm.roleOrUserPermission("Admin", _vm.getProfile.user_id)
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
                                            "\n                Add Emergency Contact\n              "
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
                            2026274011
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
                                              label: "Name",
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
                                              label: "Relationship",
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
                                              label: "Mobile",
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
                                              label: "Home Telephone",
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
                                              label: "Work Telephone",
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
                                                  ? "Submitting..."
                                                  : "Add"
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
                                        [_vm._v("Cancel")]
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
                    attrs: {
                      field: "relationship",
                      label: "Relationship",
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
                    attrs: { field: "mobile", label: "Mobile", sortable: "" },
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
                      field: "telephone",
                      label: "Home Telephone",
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
                      field: "worktelephone",
                      label: "Work Telephone",
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
                    attrs: { field: "actions", label: "Actions" },
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
                                      label: "Edit contact",
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
                                        id: "contact-id" + props.row.id
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
                                    attrs: { label: "Delete", type: "is-dark" }
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-detail-bar" }, [
      _c("p", { staticClass: "p-text" }, [
        _vm._v("Employee Emergency Contacts")
      ])
    ])
  }
]
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
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c(
          "div",
          { staticClass: "content" },
          [
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
                          attrs: { label: "Job Category", expanded: "" }
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
                          attrs: { label: "Job Title", expanded: "" }
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
                          attrs: { label: "Job Specification", expanded: "" }
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
                              ? _c("span", [_vm._v("Not Defined")])
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
                          attrs: { label: "Employment Status", expanded: "" }
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
                    _vm._v("Organization")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: { label: "Branch", expanded: "" }
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
                                "is-danger": _vm.jobErrors.branch.length > 0
                              },
                              message: _vm.jobErrors.branch
                            }
                          },
                          [
                            _c(
                              "b-select",
                              {
                                attrs: { size: "", expanded: "" },
                                model: {
                                  value: _vm.job.branch,
                                  callback: function($$v) {
                                    _vm.$set(_vm.job, "branch", $$v)
                                  },
                                  expression: "job.branch"
                                }
                              },
                              _vm._l(_vm.getBranches, function(branch, index) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: { value: branch.id }
                                  },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(branch.name) +
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
                          attrs: { label: "Department/Unit", expanded: "" }
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
                              _vm._l(_vm.getDepartments, function(dept, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: dept.id } },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(dept.name) +
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
                    _vm._v("Employment Contract")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-3" },
                      [
                        _c("b-field", {
                          attrs: { label: "Start Date", expanded: "" }
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
                          attrs: { label: "End Date", expanded: "" }
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
                          attrs: { label: "Contract Status", expanded: "" }
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
                                    ? "Active"
                                    : _vm.job.contractStatus === "terminate"
                                    ? "Terminated"
                                    : "Not Defined"
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
                          attrs: { label: "Contract Details", expanded: "" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-4" },
                      [
                        !_vm.job.contractDetailsAvailable
                          ? _c("b-field", { attrs: { expanded: "" } }, [
                              _c("p", [_vm._v("Not Defined")])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.job.contractDetailsAvailable
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
                                  [_vm._v("Keep Current")]
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
                                  [_vm._v("Delete Current")]
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
                                  [_vm._v("Replace Current")]
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
                                      ? "Submitting..."
                                      : "Save"
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
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _vm.isUserRole("Admin")
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
                                                ? "Terminating Contract..."
                                                : "Terminate Contract"
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
                                                ? "Awarding Contract..."
                                                : "Award Contract"
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
            _vm.isUserRole("Admin") || _vm.isUserRole("Manager")
              ? [
                  this.$page.props.authUser.role && _vm.isEditJob
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
                            [_vm._v("Edit")]
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-detail-bar" }, [
      _c("p", { staticClass: "p-text" }, [_vm._v("Employee Job Details")])
    ])
  }
]
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
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "personal__details__photo__display" },
                    [
                      _vm.roleOrUserPermission("Admin", _vm.getProfile.user_id)
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
                                        label: "Upload profile photo",
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
                              alt: "Profile Photo",
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
                                        label: "Title",
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
                                            [_vm._v("Mr.")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Mrs." } },
                                            [_vm._v("Mrs.")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Dr." } },
                                            [_vm._v("Dr.")]
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
                                        label: "First Name",
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
                                        label: "Middle Name",
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
                                        label: "Last Name",
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
                                        label: "Birth Date",
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
                                          placeholder: "Click to select...",
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
                                        label: "Marital Status",
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
                                            { attrs: { value: "Single" } },
                                            [_vm._v("Single")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Married" } },
                                            [_vm._v("Married")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Other" } },
                                            [_vm._v("Other")]
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
                                        label: "Nationality",
                                        type: {
                                          "is-danger":
                                            _vm.personalDetailsErrors
                                              .nationality.length > 0
                                        },
                                        message:
                                          _vm.personalDetailsErrors.nationality
                                      }
                                    },
                                    [
                                      _c(
                                        "b-select",
                                        {
                                          attrs: { size: "", expanded: "" },
                                          model: {
                                            value:
                                              _vm.personalDetails.nationality,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.personalDetails,
                                                "nationality",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "personalDetails.nationality"
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "Ghana" } },
                                            [_vm._v("Ghana")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Nigeria" } },
                                            [_vm._v("Nigeria")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "USA" } },
                                            [_vm._v("USA")]
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
                                        label: "Gender",
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
                                            [_vm._v("Male")]
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
                                            [_vm._v("Female")]
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
                            _c("div", { staticClass: "columns" }, [
                              _c(
                                "div",
                                { staticClass: "column is-6" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        label: "Staff Id",
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
                                { staticClass: "column is-6" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        label: "Other Id",
                                        expanded: "",
                                        type: {
                                          "is-danger":
                                            _vm.personalDetailsErrors.otherId
                                              .length > 0
                                        },
                                        message:
                                          _vm.personalDetailsErrors.otherId
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "" },
                                        model: {
                                          value: _vm.personalDetails.otherId,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.personalDetails,
                                              "otherId",
                                              $$v
                                            )
                                          },
                                          expression: "personalDetails.otherId"
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
                                                  ? "Saving..."
                                                  : "Save"
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
                                        [_vm._v("Cancel")]
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
                    _vm.roleOrUserPermission("Admin", _vm.getProfile.user_id)
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
                                    [_vm._v("Edit")]
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
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.roleOrUserPermission("Admin", _vm.getProfile.user_id)
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
                                          [_vm._v("Add Attachment")]
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
                              3286137795
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
                                                                      "Drop or click to upload attachment"
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
                                                            "Type your comment here..."
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
                                                                ? "Submitting..."
                                                                : "Submit"
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
                                                      [_vm._v("Cancel")]
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
                                            [_vm._v("Add")]
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
                      attrs: { field: "file", label: "File", sortable: "" },
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
                        label: "Comment",
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
                      attrs: { field: "actions", label: "Actions" },
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
                                        label: "Replace attachment",
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "upload"
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
                                        label: "Edit comment",
                                        type: "is-dark"
                                      }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          id: "comment-id" + props.row.id,
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
                  _c("h3", { staticClass: "label" }, [_vm._v("Edit Comment")]),
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
                          placeholder: "Type your comment here..."
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
                              _vm.isUpdatingFileComment ? "Saving..." : "Save"
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
                      [_vm._v("\n          Cancel\n        ")]
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
                  _c("h3", { staticClass: "label has-text-info" }, [
                    _vm._v("Replace Attachment")
                  ]),
                  _vm._v(" "),
                  _c("hr"),
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
                                _c("p", [_vm._v("Click to replace attachment")])
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
                              _vm.isUpdatingFileComment ? "Saving..." : "Save"
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
                      [_vm._v("\n          Cancel\n        ")]
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-text" }, [
      _c("p", [_vm._v("Employee Personal Profile")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header" }, [
      _c("p", { staticClass: "card-header-title" }, [_vm._v("Attachments")])
    ])
  }
]
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
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.roleOrUserPermission("Admin", _vm.getProfile.user_id)
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
                                              "\n                  Add Working Experience\n                "
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
                              1739651533
                            ),
                            model: {
                              value: _vm.isEditWorkExperience,
                              callback: function($$v) {
                                _vm.isEditWorkExperience = $$v
                              },
                              expression: "isEditWorkExperience"
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
                                        return _vm.addWorkExperience()
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
                                                label: "Company",
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .workExperience.company
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .workExperience.company
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
                                                      .workExperience.company,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .workExperience,
                                                      "company",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.workExperience.company"
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
                                                label: "Job Title",
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .workExperience.jobTitle
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .workExperience.jobTitle
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
                                                      .workExperience.jobTitle,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .workExperience,
                                                      "jobTitle",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.workExperience.jobTitle"
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
                                                label: "From (Year)",
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .workExperience.from
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .workExperience.from
                                              }
                                            },
                                            [
                                              _c(
                                                "b-select",
                                                {
                                                  attrs: {
                                                    placeholder:
                                                      "Select year...",
                                                    size: "",
                                                    expanded: ""
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.qualifications
                                                        .workExperience.from,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.qualifications
                                                          .workExperience,
                                                        "from",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "qualifications.workExperience.from"
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
                                                label: "To (Year)",
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .workExperience.to
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .workExperience.to
                                              }
                                            },
                                            [
                                              _c(
                                                "b-select",
                                                {
                                                  attrs: {
                                                    placeholder:
                                                      "Select year...",
                                                    size: "",
                                                    expanded: ""
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.qualifications
                                                        .workExperience.to,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.qualifications
                                                          .workExperience,
                                                        "to",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "qualifications.workExperience.to"
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
                                    _c("div", { staticClass: "columns" }, [
                                      _c(
                                        "div",
                                        { staticClass: "column is-6" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: "Comment",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .workExperience.comment
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .workExperience.comment
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  size: "",
                                                  type: "textarea",
                                                  placeholder:
                                                    "Type your comment..."
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications
                                                      .workExperience.comment,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .workExperience,
                                                      "comment",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.workExperience.comment"
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
                                                _vm.isSubmittingWorkExperience
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(
                                                  _vm.isSubmittingWorkExperience
                                                    ? "Submitting..."
                                                    : "Add"
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
                                                return _vm.cancelWorkExperienceForm()
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
                      data: _vm.getWorkExperience || [],
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
                        field: "company",
                        label: "Company",
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.company))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "jtitle",
                        label: "Job Title",
                        sortable: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.jobTitle))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: { field: "from", label: "From", sortable: "" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.from))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: { field: "to", label: "To", sortable: "" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.to))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "comment",
                        label: "Comment",
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
                      attrs: { field: "actions", label: "Actions" },
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
                                      attrs: { label: "Edit", type: "is-dark" }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "pen",
                                          id: "wrk-experince-id" + props.row.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openWorkExperienceDropper(
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
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteHandler(
                                              "workExperience",
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
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.roleOrUserPermission("Admin", _vm.getProfile.user_id)
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
                                          [_vm._v("Add Education")]
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
                              3578189272
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
                                        { staticClass: "column is-4" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: "Institution",
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
                                        { staticClass: "column is-4" },
                                        [
                                          _c(
                                            "b-field",
                                            {
                                              attrs: {
                                                label: "Major/Specialization",
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
                                                label: "GPA/Score",
                                                expanded: "",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .education.gpa.length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .education.gpa
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
                                                      .gpa,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .education,
                                                      "gpa",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.education.gpa"
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
                                                label: "Started",
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
                                                    placeholder:
                                                      "Select year...",
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
                                                label: "Completed",
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
                                                    placeholder:
                                                      "Select year...",
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
                                                    ? "Submitting..."
                                                    : "Add"
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
                                          [_vm._v("Cancel")]
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
                      data: _vm.getEducation || [],
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
                        label: "Institution",
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
                        label: "Specialization",
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
                      attrs: { field: "gpa", label: "GPA/Score", sortable: "" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.gpa))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "started",
                        label: "Started",
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
                        label: "Completed",
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
                      attrs: { field: "actions", label: "Actions" },
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
                                      attrs: { label: "Edit", type: "is-dark" }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "pen",
                                          id: "education-id" + props.row.id
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
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.roleOrUserPermission("Admin", _vm.getProfile.user_id)
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
                                          [_vm._v("Add Skill")]
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
                              2926460067
                            ),
                            model: {
                              value: _vm.isEditSkills,
                              callback: function($$v) {
                                _vm.isEditSkills = $$v
                              },
                              expression: "isEditSkills"
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
                                        return _vm.addSkills()
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
                                            "div",
                                            { staticClass: "columns" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "column is-12" },
                                                [
                                                  _c(
                                                    "b-field",
                                                    {
                                                      attrs: {
                                                        label: "Skill",
                                                        expanded: "",
                                                        type: {
                                                          "is-danger":
                                                            _vm
                                                              .qualificationsErrors
                                                              .skills.skill
                                                              .length > 0
                                                        },
                                                        message:
                                                          _vm
                                                            .qualificationsErrors
                                                            .skills.skill
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
                                                              .skills.skill,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.qualifications
                                                                .skills,
                                                              "skill",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "qualifications.skills.skill"
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
                                          _c(
                                            "div",
                                            { staticClass: "columns" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "column is-12" },
                                                [
                                                  _c(
                                                    "b-field",
                                                    {
                                                      attrs: {
                                                        label:
                                                          "Years of experience",
                                                        expanded: "",
                                                        type: {
                                                          "is-danger":
                                                            _vm
                                                              .qualificationsErrors
                                                              .skills
                                                              .yearOfExperience
                                                              .length > 0
                                                        },
                                                        message:
                                                          _vm
                                                            .qualificationsErrors
                                                            .skills
                                                            .yearOfExperience
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
                                                              .skills
                                                              .yearOfExperience,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.qualifications
                                                                .skills,
                                                              "yearOfExperience",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "\n                                  qualifications.skills.yearOfExperience\n                                "
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
                                        ]
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
                                                label: "Comment",
                                                type: {
                                                  "is-danger":
                                                    _vm.qualificationsErrors
                                                      .skills.comment.length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .skills.comment
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  type: "textarea",
                                                  placeholder:
                                                    "Type your comment...",
                                                  size: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications.skills
                                                      .comment,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications.skills,
                                                      "comment",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.skills.comment"
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
                                              disabled: _vm.isSubmittingSkills
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(
                                                  _vm.isSubmittingSkills
                                                    ? "Submitting..."
                                                    : "Add"
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
                                                return _vm.cancelSkillsForm()
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
                      data: _vm.getSkills || [],
                      paginated: true,
                      "per-page": 5,
                      "current-page": 1,
                      "pagination-simple": true,
                      "pagination-position": "bottom"
                    }
                  },
                  [
                    _c("b-table-column", {
                      attrs: { field: "skill", label: "Skill", sortable: "" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [_vm._v(_vm._s(props.row.skill))]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        field: "yoe",
                        label: "Year of Experience",
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
                        label: "Commment",
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
                      attrs: { field: "actions", label: "Actions" },
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
                                      attrs: { label: "Edit", type: "is-dark" }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "pen",
                                          id: "skill-id" + props.row.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openSkillDropper(
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
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteHandler(
                                              "skills",
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
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.roleOrUserPermission("Admin", _vm.getProfile.user_id)
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
                                          [_vm._v("Add Language")]
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
                              1421197440
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
                                            "div",
                                            { staticClass: "columns" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "column is-12" },
                                                [
                                                  _c(
                                                    "b-field",
                                                    {
                                                      attrs: {
                                                        label: "Language",
                                                        expanded: "",
                                                        type: {
                                                          "is-danger":
                                                            _vm
                                                              .qualificationsErrors
                                                              .languages
                                                              .language.length >
                                                            0
                                                        },
                                                        message:
                                                          _vm
                                                            .qualificationsErrors
                                                            .languages.language
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
                                                                .languages
                                                                .language,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm
                                                                  .qualifications
                                                                  .languages,
                                                                "language",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "qualifications.languages.language"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "option",
                                                            {
                                                              attrs: {
                                                                value: "English"
                                                              }
                                                            },
                                                            [_vm._v("English")]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "option",
                                                            {
                                                              attrs: {
                                                                value: "French"
                                                              }
                                                            },
                                                            [_vm._v("French")]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "option",
                                                            {
                                                              attrs: {
                                                                value: "Ewe"
                                                              }
                                                            },
                                                            [_vm._v("Ewe")]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "option",
                                                            {
                                                              attrs: {
                                                                value: "Ga"
                                                              }
                                                            },
                                                            [_vm._v("Ga")]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "option",
                                                            {
                                                              attrs: {
                                                                value: "Twi"
                                                              }
                                                            },
                                                            [_vm._v("Twi")]
                                                          )
                                                        ]
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
                                            "div",
                                            { staticClass: "columns" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "column is-12" },
                                                [
                                                  _c(
                                                    "b-field",
                                                    {
                                                      attrs: {
                                                        label: "Fluency",
                                                        expanded: "",
                                                        type: {
                                                          "is-danger":
                                                            _vm
                                                              .qualificationsErrors
                                                              .languages.fluency
                                                              .length > 0
                                                        },
                                                        message:
                                                          _vm
                                                            .qualificationsErrors
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
                                                                .languages
                                                                .fluency,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm
                                                                  .qualifications
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
                                                              attrs: {
                                                                value: "Poor"
                                                              }
                                                            },
                                                            [_vm._v("Poor")]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "option",
                                                            {
                                                              attrs: {
                                                                value: "Good"
                                                              }
                                                            },
                                                            [_vm._v("Good")]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "option",
                                                            {
                                                              attrs: {
                                                                value:
                                                                  "Very Good"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Very Good"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "option",
                                                            {
                                                              attrs: {
                                                                value:
                                                                  "Mother Tongue"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                  Mother Tongue\n                                "
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
                                            ]
                                          )
                                        ]
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
                                                label: "Comment",
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
                                                  placeholder:
                                                    "Type your comment..."
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
                                                    ? "Submitting..."
                                                    : "Add"
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
                                          [_vm._v("Cancel")]
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
                      data: _vm.getLanguages || [],
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
                        label: "Language",
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
                        label: "Fluency",
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
                        label: "Commment",
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
                      attrs: { field: "actions", label: "Actions" },
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
                                      attrs: { label: "Edit", type: "is-dark" }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "pen",
                                          id: "language-id" + props.row.id
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
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.roleOrUserPermission("Admin", _vm.getProfile.user_id)
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
                                          [_vm._v("Add Attachment")]
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
                              1303806347
                            ),
                            model: {
                              value: _vm.isEditQualificationAttachment,
                              callback: function($$v) {
                                _vm.isEditQualificationAttachment = $$v
                              },
                              expression: "isEditQualificationAttachment"
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
                                        return _vm.addQualificationAttachment()
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
                                                      _vm.qualifications
                                                        .attachment.file,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.qualifications
                                                          .attachment,
                                                        "file",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "qualifications.attachment.file"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "section",
                                                    { staticClass: "section" },
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
                                                              _c("b-icon", {
                                                                attrs: {
                                                                  icon:
                                                                    "upload",
                                                                  size:
                                                                    "is-small"
                                                                }
                                                              })
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c("p", [
                                                            _vm._v(
                                                              "Drop or click to upload attachment"
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
                                          _vm.qualifications.attachment.file
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
                                                        "\n                            " +
                                                          _vm._s(
                                                            _vm.qualifications
                                                              .attachment.file
                                                              .name
                                                          ) +
                                                          "\n                            "
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
                                                            _vm.qualifications.attachment.file = null
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
                                                  _vm.qualificationsErrors
                                                    .attachment.file.length > 0
                                              },
                                              message:
                                                _vm.qualificationsErrors
                                                  .attachment.file
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
                                                    _vm.qualificationsErrors
                                                      .attachment.comment
                                                      .length > 0
                                                },
                                                message:
                                                  _vm.qualificationsErrors
                                                    .attachment.comment
                                              }
                                            },
                                            [
                                              _c("b-input", {
                                                attrs: {
                                                  type: "textarea",
                                                  placeholder:
                                                    "Type your comment..."
                                                },
                                                model: {
                                                  value:
                                                    _vm.qualifications
                                                      .attachment.comment,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.qualifications
                                                        .attachment,
                                                      "comment",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "qualifications.attachment.comment"
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
                                                _vm.isSubmittingQualificationAttachment
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(
                                                  _vm.isSubmittingQualificationAttachment
                                                    ? "Submitting..."
                                                    : "Add"
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
                                                return _vm.cancelQualificationAttachmentForm()
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
                      data: _vm.getAttachments || [],
                      paginated: true,
                      "per-page": 10,
                      "current-page": 1,
                      "pagination-simple": true,
                      "pagination-position": "bottom"
                    }
                  },
                  [
                    _c("b-table-column", {
                      attrs: { field: "file", label: "File", sortable: "" },
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
                                        "/attachments/qualification/" +
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
                        label: "Commment",
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
                      attrs: { field: "actions", label: "Actions" },
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
                                        label: "Replace attachment",
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
                                          id: "comment-id" + props.row.id
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
                                      attrs: { label: "Edit", type: "is-dark" }
                                    },
                                    [
                                      _c("b-button", {
                                        staticClass: "is-info is-light",
                                        attrs: {
                                          size: "is-small",
                                          pack: "fas",
                                          "icon-right": "pen",
                                          id: "comment-id" + props.row.id
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
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteHandler(
                                              "attachments",
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
          ref: "workExperienceDropper",
          staticClass: "dropper",
          attrs: {
            join: "#wrk-experince-id" + _vm.getAttachmentDropperId,
            "z-index": 1000
          },
          on: {
            "esc-keydown": _vm.closeWorkExperienceDropper,
            "other-area-clicked": _vm.closeWorkExperienceDropper
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateWorkExperience()
                }
              }
            },
            [
              _c("h3", { staticClass: "label text-main" }, [
                _vm._v("Edit Work Experience")
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
                          label: "Company",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.workExperience.company
                                .length > 0
                          },
                          message:
                            _vm.qualificationsErrors.workExperience.company
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value: _vm.qualifications.workExperience.company,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.workExperience,
                                "company",
                                $$v
                              )
                            },
                            expression: "qualifications.workExperience.company"
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
                          label: "Job Title",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.workExperience.jobTitle
                                .length > 0
                          },
                          message:
                            _vm.qualificationsErrors.workExperience.jobTitle
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value: _vm.qualifications.workExperience.jobTitle,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.workExperience,
                                "jobTitle",
                                $$v
                              )
                            },
                            expression: "qualifications.workExperience.jobTitle"
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
                          label: "From (Year)",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.workExperience.from
                                .length > 0
                          },
                          message: _vm.qualificationsErrors.workExperience.from
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
                              value: _vm.qualifications.workExperience.from,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.qualifications.workExperience,
                                  "from",
                                  $$v
                                )
                              },
                              expression: "qualifications.workExperience.from"
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
                  { staticClass: "column is-6" },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "To (Year)",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.workExperience.to
                                .length > 0
                          },
                          message: _vm.qualificationsErrors.workExperience.to
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
                              value: _vm.qualifications.workExperience.to,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.qualifications.workExperience,
                                  "to",
                                  $$v
                                )
                              },
                              expression: "qualifications.workExperience.to"
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
                              _vm.qualificationsErrors.workExperience.comment
                                .length > 0
                          },
                          message:
                            _vm.qualificationsErrors.workExperience.comment
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: {
                            size: "",
                            type: "textarea",
                            placeholder: "Type your comment..."
                          },
                          model: {
                            value: _vm.qualifications.workExperience.comment,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.workExperience,
                                "comment",
                                $$v
                              )
                            },
                            expression: "qualifications.workExperience.comment"
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
                        disabled: _vm.isSubmittingWorkExperience
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.isSubmittingWorkExperience
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
                          return _vm.closeWorkExperienceDropper()
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
                          label: "GPA/Score",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.education.gpa.length > 0
                          },
                          message: _vm.qualificationsErrors.education.gpa
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value: _vm.qualifications.education.gpa,
                            callback: function($$v) {
                              _vm.$set(_vm.qualifications.education, "gpa", $$v)
                            },
                            expression: "qualifications.education.gpa"
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
          ref: "skillDropper",
          staticClass: "dropper",
          attrs: {
            join: "#skill-id" + _vm.getAttachmentDropperId,
            "z-index": 1000
          },
          on: {
            "esc-keydown": _vm.closeSkillDropper,
            "other-area-clicked": _vm.closeSkillDropper
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateSkills()
                }
              }
            },
            [
              _c("h3", { staticClass: "label text-main" }, [
                _vm._v("Edit Skill")
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
                          label: "Skill",
                          expanded: "",
                          type: {
                            "is-danger":
                              _vm.qualificationsErrors.skills.skill.length > 0
                          },
                          message: _vm.qualificationsErrors.skills.skill
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value: _vm.qualifications.skills.skill,
                            callback: function($$v) {
                              _vm.$set(_vm.qualifications.skills, "skill", $$v)
                            },
                            expression: "qualifications.skills.skill"
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
                              _vm.qualificationsErrors.skills.yearOfExperience
                                .length > 0
                          },
                          message:
                            _vm.qualificationsErrors.skills.yearOfExperience
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value: _vm.qualifications.skills.yearOfExperience,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.skills,
                                "yearOfExperience",
                                $$v
                              )
                            },
                            expression: "qualifications.skills.yearOfExperience"
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
                              _vm.qualificationsErrors.skills.comment.length > 0
                          },
                          message: _vm.qualificationsErrors.skills.comment
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
                            value: _vm.qualifications.skills.comment,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.skills,
                                "comment",
                                $$v
                              )
                            },
                            expression: "qualifications.skills.comment"
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
                        disabled: _vm.isSubmittingSkills
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.isSubmittingSkills ? "Saving..." : "Save"
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
                          return _vm.closeSkillDropper()
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
      ),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "attachmentDropper",
          staticClass: "dropper",
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
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.replaceAttachment(_vm.attachmentUpdateType)
                    }
                  }
                },
                [
                  _c("h3", { staticClass: "label text-main" }, [
                    _vm._v("Edit Comment")
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger":
                            _vm.qualificationsErrors.attachment.comment.length >
                            0
                        },
                        message: _vm.qualificationsErrors.attachment.comment
                      }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          type: "textarea",
                          placeholder: "Type your comment..."
                        },
                        model: {
                          value: _vm.qualifications.attachment.comment,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.qualifications.attachment,
                              "comment",
                              $$v
                            )
                          },
                          expression: "qualifications.attachment.comment"
                        }
                      })
                    ],
                    1
                  ),
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
                            disabled: _vm.isSubmittingQualificationAttachment
                          }
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(
                                _vm.isSubmittingQualificationAttachment
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
                              return _vm.closeAttachmentDropper()
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
            : _vm._e(),
          _vm._v(" "),
          _vm.attachmentUpdateType === "attachment"
            ? _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.replaceAttachment(_vm.attachmentUpdateType)
                    }
                  }
                },
                [
                  _c("h3", { staticClass: "label has-text-info" }, [
                    _vm._v("Replace Attachment")
                  ]),
                  _vm._v(" "),
                  _c("hr"),
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
                            value: _vm.qualifications.attachment.file,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.qualifications.attachment,
                                "file",
                                $$v
                              )
                            },
                            expression: "qualifications.attachment.file"
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
                                _c("p", [_vm._v("Click to replace attachment")])
                              ]
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.qualifications.attachment.file
                    ? _c("div", { staticClass: "tags" }, [
                        _c(
                          "span",
                          { staticClass: "tag is-large is-info is-light" },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(
                                  _vm.qualifications.attachment.file.name
                                ) +
                                "\n          "
                            ),
                            _c("button", {
                              staticClass: "delete is-small",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.qualifications.attachment.file = null
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
                          _vm.qualificationsErrors.attachment.file.length > 0
                      },
                      message: _vm.qualificationsErrors.attachment.file
                    }
                  }),
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
                            disabled: _vm.isSubmittingQualificationAttachment
                          }
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(
                                _vm.isSubmittingQualificationAttachment
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
                              return _vm.closeAttachmentDropper()
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
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-detail-bar" }, [
      _c("p", { staticClass: "p-text" }, [_vm._v("Employee Qualifications")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header" }, [
      _c("p", { staticClass: "card-header-title" }, [_vm._v("Education")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header" }, [
      _c("p", { staticClass: "card-header-title" }, [_vm._v("Skills")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header" }, [
      _c("p", { staticClass: "card-header-title" }, [_vm._v("Languages")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header" }, [
      _c("p", { staticClass: "card-header-title" }, [_vm._v("Attachments")])
    ])
  }
]
render._withStripped = true



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



/***/ })

}]);