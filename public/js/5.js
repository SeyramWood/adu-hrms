(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Administration.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Administration.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Dashboard */ "./resources/js/components/Dashboard.vue");
/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Tab */ "./resources/js/components/Tab.vue");
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tabs */ "./resources/js/components/Tabs.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_admin_ManageUserComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/admin/ManageUserComponent */ "./resources/js/components/admin/ManageUserComponent.vue");
/* harmony import */ var _components_admin_JobComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/admin/JobComponent */ "./resources/js/components/admin/JobComponent.vue");
/* harmony import */ var _components_admin_WorkShiftComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/admin/WorkShiftComponent */ "./resources/js/components/admin/WorkShiftComponent.vue");
/* harmony import */ var _components_admin_OrganizationComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/admin/OrganizationComponent */ "./resources/js/components/admin/OrganizationComponent.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_8__);
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









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Administration",
  metaInfo: function metaInfo() {
    return {
      title: "Admin"
    };
  },
  components: {
    Tab: _components_Tab__WEBPACK_IMPORTED_MODULE_1__["default"],
    Tabs: _components_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"],
    ManageUserComponent: _components_admin_ManageUserComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    JobComponent: _components_admin_JobComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    WorkShiftComponent: _components_admin_WorkShiftComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    OrganizationComponent: _components_admin_OrganizationComponent__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  layout: _components_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    authUser: Object,
    userRoles: Array,
    users: Object,
    jobCategories: Array,
    jobTitles: Array,
    employmentStatuses: Array,
    branches: Array,
    departments: Array,
    positions: Array,
    rolePermissions: Object,
    staffCount: Object,
    workShifts: Array
  },
  computed: {},
  created: function created() {
    this.dispatchUserAccount({
      payload: 1
    });
    this.dispatchUserAccount({
      type: "ADD_ROLE_PERMISSION",
      payload: JSON.parse(this.rolePermissions.role_permission)
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
    this.dispatchPosition({
      payload: this.positions
    });
    this.dispatchStaffCount({
      payload: this.staffCount
    });
    this.dispatchWorkShift({
      payload: this.workShifts
    }); // this.$axios.get("/api/bio").then((res) => {
    //   this.test = res.data.data;
    //   // window.location.reload();
    //   // console.log(res.data);
    // });
  },
  data: function data() {
    return {
      tabIndex: 0,
      test: ""
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])(["dispatchUserAccount", "dispatchJobCategory", "dispatchJobTitle", "dispatchEmploymentStatus", "dispatchBranch", "dispatchDepartment", "dispatchPosition", "dispatchOrgnizationProfile", "dispatchStaffCount", "dispatchWorkShift"])), {}, {
    changeLang: function changeLang(lang) {
      localStorage.setItem("lang", lang);
      window.location.reload();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Paginate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Paginate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Paginate",
  props: {
    state: {
      require: true,
      type: Object
    },
    dispatch: {
      require: true,
      type: Function
    },
    dispatchAction: {
      "default": "",
      type: String
    }
  },
  computed: {
    currentPage: {
      get: function get() {
        return this.state.current_page || 0;
      },
      set: function set(value) {
        if (this.dispatchAction) {
          this.dispatch({
            type: this.dispatchAction,
            payload: value || 0
          });
        } else {
          this.dispatch({
            payload: value || 0
          });
        }
      }
    },
    perPage: {
      get: function get() {
        return this.state.per_page || 0;
      }
    },
    totalPage: {
      get: function get() {
        return this.state.total || 0;
      }
    }
  },
  data: function data() {
    return {
      order: "is-right",
      size: "",
      isSimple: true,
      isRounded: true,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right"
    };
  }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/JobComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/JobComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ViewPdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ViewPdf */ "./resources/js/components/ViewPdf.vue");
/* harmony import */ var _organization_UpdateJobTitleModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization/UpdateJobTitleModal */ "./resources/js/components/admin/organization/UpdateJobTitleModal.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "JobComponent",
  components: {
    ViewPdf: _ViewPdf__WEBPACK_IMPORTED_MODULE_1__["default"],
    UpdateJobTitleModal: _organization_UpdateJobTitleModal__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {},
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getUsers", "getJobCategories", "getJobTitles", "getEmploymentStatus"])), {}, {
    getDropperId: function getDropperId() {
      return this.dropperId.toString();
    },
    getEmpStatusDropperId: function getEmpStatusDropperId() {
      return this.empStatusDropperId.toString();
    }
  }),
  data: function data() {
    return {
      openJobTitleDesc: undefined,
      isPaginated: true,
      isPaginationSimple: true,
      paginationPosition: "bottom",
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 50,
      checkedJobCats: [],
      checkedJobTitles: [],
      checkedEmpStatus: [],
      jobConfigurationsDta: [],
      toggleAddJobTitle: false,
      toggleAddJobCategory: false,
      toggleAddEmploymentStatus: false,
      isviewSpecification: false,
      isSubmittingJobCategory: false,
      isSubmittingEmploymentStatus: false,
      isSubmittingJobTitle: false,
      isUpdateJobTitleModalActive: false,
      dropperId: "",
      empStatusDropperId: "",
      jobCategory: {
        name: "",
        id: ""
      },
      employmentStatus: {
        status: "",
        id: ""
      },
      jobTitle: {
        category: "",
        title: "",
        description: "",
        specification: null
      },
      jobId: null,
      jobCategoryErrors: {
        name: []
      },
      employmentStatusErrors: {
        status: []
      },
      jobTitleErrors: {
        category: [],
        title: [],
        description: [],
        specification: []
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchJobCategory", "dispatchJobTitle", "dispatchEmploymentStatus"])), {}, {
    openJobCatDropper: function openJobCatDropper(data) {
      var dropper = this.$refs.jobCatDropper;
      this.dropperId = data.id;

      if (dropper) {
        this.jobCategory = {
          name: data.category,
          id: data.id
        };
        dropper.open();
      }
    },
    closeJobCatDropper: function closeJobCatDropper() {
      var dropper = this.$refs.jobCatDropper;

      if (dropper) {
        this.jobCategory.id = "";
        this.jobCategory.name = "";
        this.jobCategoryErrors.name = [];
        dropper.close();
      }
    },
    openEmpStatusDropper: function openEmpStatusDropper(data) {
      var dropper = this.$refs.empStatusDropper;
      this.empStatusDropperId = data.id;

      if (dropper) {
        this.employmentStatus = {
          status: data.status,
          id: data.id
        };
        dropper.open();
      }
    },
    closeEmpStatusDropper: function closeEmpStatusDropper() {
      var dropper = this.$refs.empStatusDropper;

      if (dropper) {
        this.employmentStatus.id = "";
        this.employmentStatus.status = "";
        this.employmentStatusErrors.status = [];
        dropper.close();
      }
    },
    getFullName: function getFullName() {},
    addJobCategory: function addJobCategory() {
      var _this = this;

      this.isSubmittingJobCategory = true;
      this.jobCategoryErrors.name = [];
      this.$axios.post("/dashboard/create-job-catgory", {
        categoryName: this.jobCategory.name
      }).then(function (res) {
        _this.jobCategory.name = "";

        if (res.status === 201) {
          _this.dispatchJobCategory({
            type: "ADD_NEW_CATEGORY",
            payload: res.data
          });

          setTimeout(function () {
            _this.snackbar("Category added successfully", "is-dark");

            _this.isSubmittingJobCategory = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this.jobCategoryErrors.name = err.response.data.errors.categoryName ? err.response.data.errors.categoryName : [];
            _this.isSubmittingJobCategory = false;
          }, 1000);
        }
      });
    },
    updateJobCategory: function updateJobCategory() {
      var _this2 = this;

      this.isSubmittingJobCategory = true;
      this.jobCategoryErrors.name = [];
      this.$axios.put("/dashboard/edit-job-catgory/".concat(this.jobCategory.id), {
        categoryName: this.jobCategory.name
      }).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this2.dispatchJobCategory({
            type: "UPDATE_CATEGORY",
            payload: res.data.category
          });

          setTimeout(function () {
            _this2.snackbar("Category updated successfully", "is-dark");

            _this2.isSubmittingJobCategory = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this2.jobCategoryErrors.name = err.response.data.errors.categoryName ? err.response.data.errors.categoryName : [];
            _this2.isSubmittingJobCategory = false;
          }, 1000);
        }
      });
    },
    deleteJobCategory: function deleteJobCategory(id) {
      var _this3 = this;

      this.$axios["delete"]("/dashboard/delete-job-catgory/".concat(id)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this3.dispatchJobCategory({
            type: "DELETE_CATEGORY",
            payload: id
          });

          setTimeout(function () {
            _this3.snackbar("Category deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    deleteJobCategories: function deleteJobCategories() {
      var _this4 = this;

      var ids = this.checkedJobCats.map(function (r) {
        return r.id;
      });
      this.$axios["delete"]("/dashboard/delete-job-catgories/".concat(JSON.stringify(ids))).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this4.dispatchJobCategory({
            type: "DELETE_CATEGORIES",
            payload: ids
          });

          _this4.checkedJobCats = [];
          setTimeout(function () {
            _this4.snackbar("Category deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    addJobTitle: function addJobTitle() {
      var _this5 = this;

      this.isSubmittingJobTitle = true;
      this.setAddJobTitleErrors();
      var data = new FormData();
      data.append("category", this.jobTitle.category);
      data.append("title", this.jobTitle.title);
      data.append("description", this.jobTitle.description);
      data.append("specification", this.jobTitle.specification);
      this.$axios.post("/dashboard/create-job-title", data).then(function (res) {
        _this5.cancelAddJobTitle();

        _this5.dispatchJobTitle({
          type: "ADD_NEW_TITLE",
          payload: res.data
        });

        setTimeout(function () {
          _this5.snackbar("Title successfully", "is-dark");

          _this5.isSubmittingJobTitle = false;
        }, 1000);
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this5.setAddJobTitleErrors(err.response.data.errors);

            _this5.isSubmittingJobTitle = false;
          }, 1000);
        }
      });
    },
    getJobTitleToEdit: function getJobTitleToEdit(jobTitle) {
      this.jobId = jobTitle.id;
      this.jobTitle.category = jobTitle.job_category_id;
      this.jobTitle.title = jobTitle.title;
      this.jobTitle.description = jobTitle.description;
      this.isUpdateJobTitleModalActive = true;
    },
    updateJobTitle: function updateJobTitle(id) {
      var _this6 = this;

      this.isSubmittingJobTitle = true;
      this.setAddJobTitleErrors();
      var data = new FormData();
      data.append("_method", "put");
      data.append("category", this.jobTitle.category);
      data.append("title", this.jobTitle.title);
      data.append("description", this.jobTitle.description);

      if (this.jobTitle.specification !== null) {
        data.append("specification", this.jobTitle.specification);
      }

      this.$axios.post("/dashboard/edit-job-title/".concat(id), data).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this6.isUpdateJobTitleModalActive = false;

          _this6.cancelAddJobTitle("modal");

          _this6.dispatchJobTitle({
            type: "UPDATE_TITLE",
            payload: res.data.job
          });

          setTimeout(function () {
            _this6.snackbar("Status updated successfully", "is-dark");

            _this6.isSubmittingJobTitle = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this6.setAddJobTitleErrors(err.response.data.errors);

            _this6.isSubmittingJobTitle = false;
          }, 1000);
        }
      });
    },
    deleteJobTitle: function deleteJobTitle(id) {
      var _this7 = this;

      this.$axios["delete"]("/dashboard/delete-job-title/".concat(id)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this7.dispatchJobTitle({
            type: "DELETE_TITLE",
            payload: id
          });

          setTimeout(function () {
            _this7.snackbar("Job title deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    deleteJobTitles: function deleteJobTitles() {
      var _this8 = this;

      var ids = this.checkedJobTitles.map(function (r) {
        return r.id;
      });
      this.$axios["delete"]("/dashboard/delete-job-titles/".concat(JSON.stringify(ids))).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this8.dispatchJobTitle({
            type: "DELETE_TITLES",
            payload: ids
          });

          _this8.checkedJobTitles = [];
          setTimeout(function () {
            _this8.snackbar("Job title deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    addEmploymentStatus: function addEmploymentStatus() {
      var _this9 = this;

      this.isSubmittingEmploymentStatus = true;
      this.employmentStatusErrors.status = [];
      this.$axios.post("/dashboard/create-employment-status", this.employmentStatus).then(function (res) {
        if (res.status === 201) {
          _this9.dispatchEmploymentStatus({
            type: "ADD_NEW_EMP_STATUS",
            payload: res.data
          });

          _this9.employmentStatus.status = "";
          setTimeout(function () {
            _this9.snackbar("Status added successfully", "is-dark");

            _this9.isSubmittingEmploymentStatus = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this9.employmentStatusErrors.status = err.response.data.errors.status ? err.response.data.errors.status : [];
            _this9.isSubmittingEmploymentStatus = false;
          }, 1000);
        }
      });
    },
    updateEmploymentStatus: function updateEmploymentStatus() {
      var _this10 = this;

      this.isSubmittingEmploymentStatus = true;
      this.employmentStatusErrors.status = [];
      this.$axios.put("/dashboard/edit-employment-status/".concat(this.employmentStatus.id), this.employmentStatus).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this10.dispatchEmploymentStatus({
            type: "UPDATE_EMP_STATUS",
            payload: res.data.status
          });

          setTimeout(function () {
            _this10.snackbar("Status updated successfully", "is-dark");

            _this10.isSubmittingEmploymentStatus = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this10.employmentStatusErrors.status = err.response.data.errors.status ? err.response.data.errors.status : [];
            _this10.isSubmittingEmploymentStatus = false;
          }, 1000);
        }
      });
    },
    deleteEmploymentStatus: function deleteEmploymentStatus(id) {
      var _this11 = this;

      this.$axios["delete"]("/dashboard/delete-employment-status/".concat(id)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this11.dispatchEmploymentStatus({
            type: "DELETE_EMP_STATUS",
            payload: id
          });

          setTimeout(function () {
            _this11.snackbar("Status deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    deleteEmploymentStatuses: function deleteEmploymentStatuses() {
      var _this12 = this;

      var ids = this.checkedEmpStatus.map(function (r) {
        return r.id;
      });
      this.$axios["delete"]("/dashboard/delete-employment-statuses/".concat(JSON.stringify(ids))).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this12.dispatchEmploymentStatus({
            type: "DELETE_EMP_STATUSES",
            payload: ids
          });

          _this12.checkedEmpStatus = [];
          setTimeout(function () {
            _this12.snackbar("Status deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    setAddJobTitleErrors: function setAddJobTitleErrors() {
      var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.jobTitleErrors.category = errors.category || [];
      this.jobTitleErrors.title = errors.title || [];
      this.jobTitleErrors.description = errors.description || [];
      this.jobTitleErrors.specification = errors.specification || [];
    },
    cancelAddJobCategory: function cancelAddJobCategory() {
      this.jobCategoryErrors.name = [];
      this.toggleAddJobCategory = !this.toggleAddJobCategory;
    },
    cancelAddJobTitle: function cancelAddJobTitle(modal) {
      this.clearAddJobTitle();
      this.setAddJobTitleErrors();

      if (!modal) {
        this.toggleAddJobTitle = !this.toggleAddJobTitle;
      }
    },
    cancelAddEmploymentStatus: function cancelAddEmploymentStatus() {
      this.employmentStatusErrors.status = [];
      this.toggleAddEmploymentStatus = !this.toggleAddEmploymentStatus;
    },
    clearAddJobTitle: function clearAddJobTitle() {
      this.jobTitle.category = "";
      this.jobTitle.title = "";
      this.jobTitle.description = "";
      this.jobTitle.specification = null;
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
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ManageUserComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/ManageUserComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Paginate */ "./resources/js/components/Paginate.vue");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @riophae/vue-treeselect */ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css");
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_3__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ManageUserComponent",
  components: {
    Paginate: _Paginate__WEBPACK_IMPORTED_MODULE_1__["default"],
    Treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {},
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getUsers", "getRolePermissions"])), {}, {
    getDropperId: function getDropperId() {
      return this.dropperId.toString();
    },
    getStaff: function getStaff() {
      return this.getUsers.data.map(function (s) {
        return {
          id: s.id,
          label: "".concat(s.personal_details.title || "", " ").concat(s.personal_details.firstName, " ").concat(s.personal_details.middleName || "", " ").concat(s.personal_details.lastName)
        };
      });
    }
  }),
  beforeMount: function beforeMount() {
    this.authUser = this.$page.props.authUser;
  },
  mounted: function mounted() {
    var _this = this;

    this.isLoading = true;
    this.$nextTick(function () {
      if (_this.getUsers.data.length > 0) {
        _this.isLoading = false;
      } else {
        setTimeout(function () {
          _this.isLoading = false;
          _this.noAppraisalFound = true;
        }, 1000);
      }
    });
  },
  watch: {
    selectedUsers: function selectedUsers(v) {
      if (v.length === 0) {
        this.showAssignRoleForm = false;
        this.showAssignStatusForm = false;
        this.roleData = ["ESS"];
        this.statusData = "";
      }
    }
  },
  data: function data() {
    return {
      authUser: null,
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      selectedUsers: [],
      checkedRoles: [],
      toggleUserForm: false,
      toggleQueryForm: false,
      showAssignRoleForm: false,
      showAssignStatusForm: false,
      isSubmitting: false,
      noUserFound: false,
      isLoading: false,
      isSubmittingRole: false,
      dropperId: "",
      newStaff: {
        value: [],
        errors: []
      },
      user: {
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        role: ["ESS"],
        status: "1"
      },
      userPersonalDetails: {
        avatar: "",
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        staffId: "",
        otherId: "",
        birthDate: "",
        maritalStatus: "",
        nationality: "",
        gender: "",
        attachments: []
      },
      userError: {
        firstName: [],
        middleName: [],
        lastName: [],
        username: [],
        password: [],
        confirmPassword: [],
        role: [],
        status: []
      },
      roleData: ["ESS"],
      statusData: "",
      permissions: ["Create", "Edit", "Delete"]
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchUserAccount", "dispatchStaffCount"])), {}, {
    openRoleDropper: function openRoleDropper() {
      var dropper = this.$refs.roleDropper; // this.positionDropperId = data.id;

      if (dropper) {
        dropper.open();
      }
    },
    closeRoleDropper: function closeRoleDropper() {
      var dropper = this.$refs.roleDropper;

      if (dropper) {
        dropper.close();
      }
    },
    openAddStaffDropper: function openAddStaffDropper(index) {
      var dropper = this.$refs.addStaffDropper;
      this.dropperId = index;
      console.log(dropper);

      if (dropper) {
        dropper.open();
      }
    },
    closeAddStaffDropper: function closeAddStaffDropper() {
      var dropper = this.$refs.addStaffDropper;

      if (dropper) {
        dropper.close();
      }
    },
    closeUserForm: function closeUserForm() {
      this.toggleUserForm = !this.toggleUserForm;
      this.setUserErrors();
    },
    openQueryForm: function openQueryForm() {
      this.toggleQueryForm = !this.toggleQueryForm;
    },
    openAssignRoleForm: function openAssignRoleForm() {
      this.showAssignStatusForm = false;
      this.showAssignRoleForm = !this.showAssignRoleForm;
    },
    openAssignStatusForm: function openAssignStatusForm() {
      this.showAssignRoleForm = false;
      this.showAssignStatusForm = !this.showAssignStatusForm;
    },
    cancelAssignForm: function cancelAssignForm() {
      this.showAssignRoleForm = false;
      this.showAssignRoleForm = false;
      this.selectedUsers = [];
      this.roleData = ["ESS"];
      this.statusData = "";
    },
    addUser: function addUser() {
      var _this2 = this;

      this.setUserErrors();
      this.isSubmitting = true;
      var data = {
        first_name: this.user.firstName,
        middle_name: this.user.middleName,
        last_name: this.user.lastName,
        email: this.user.username,
        role: this.user.role,
        status: this.user.status,
        userPersonalDetails: _objectSpread(_objectSpread({}, this.userPersonalDetails), {}, {
          firstName: this.user.firstName,
          middleName: this.user.middleName,
          lastName: this.user.lastName
        })
      };
      this.$axios.post("/dashboard/register", data).then(function (res) {
        _this2.clearUserForm();

        if (res.status === 200) {
          _this2.dispatchUserAccount({
            type: "ADD_NEW_USER",
            payload: res.data.user
          });

          _this2.dispatchStaffCount({
            payload: res.data.staffCount
          });

          setTimeout(function () {
            _this2.snackbar("User added successfully.", "is-success");

            _this2.isSubmitting = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this2.setUserErrors(err.response.data.errors);

            _this2.isSubmitting = false;
          }, 1000);
        } else {
          console.log(err);
        }
      });
    },
    assignUserRole: function assignUserRole() {
      var _this3 = this;

      var ids = this.selectedUsers.map(function (r) {
        return r.id;
      });
      this.$axios.put("/dashboard/assign-users-role", {
        ids: ids,
        role: this.roleData
      }).then(function (res) {
        if (res.data.assigned) {
          _this3.dispatchUserAccount({
            type: "ASSIGN_ROLE",
            payload: {
              ids: ids,
              role: JSON.stringify(_this3.roleData)
            }
          });

          _this3.selectedUsers = [];
          _this3.roleData = ["ESS"];
          setTimeout(function () {
            _this3.snackbar("Role assigned successfully.", "is-success");
          }, 1000);
        }
      })["catch"](function (err) {
        setTimeout(function () {
          _this3.snackbar("There was a problem assigning role.", "is-danger");
        }, 1000);
      });
    },
    assignUserStatus: function assignUserStatus() {
      var _this4 = this;

      var ids = this.selectedUsers.map(function (r) {
        return r.id;
      });
      this.$axios.put("/dashboard/assign-users-status", {
        ids: ids,
        status: this.statusData
      }).then(function (res) {
        if (res.data.assigned) {
          _this4.dispatchUserAccount({
            type: "ASSIGN_STATUS",
            payload: {
              ids: ids,
              status: _this4.statusData
            }
          });

          _this4.selectedUsers = [];
          _this4.statusData = "";
          setTimeout(function () {
            _this4.snackbar("Status assigned successfully.", "is-success");
          }, 1000);
        }
      })["catch"](function (err) {
        setTimeout(function () {
          _this4.snackbar("There was a problem assigning role.", "is-danger");
        }, 1000);
      });
    },
    deleteUser: function deleteUser(id) {
      var _this5 = this;

      this.$confirm({
        auth: true,
        message: "Are you sure you want to delete this user?",
        button: {
          no: "No",
          yes: "Yes"
        },
        callback: function callback(confirm, password) {
          if (confirm) {
            _this5.$axios.get("/dashboard/check-user-password/".concat(_this5.authUser.id, "/").concat(password)).then(function (res) {
              if (res.data.confirmed) {
                _this5.$axios["delete"]("/dashboard/delete-user/".concat(id)).then(function (res) {
                  _this5.dispatchUserAccount({
                    type: "DELETE_USER",
                    payload: id
                  });

                  _this5.dispatchStaffCount({
                    payload: res.data.staffCount
                  });

                  setTimeout(function () {
                    _this5.snackbar("User deleted successfully.", "is-success");
                  }, 1000);
                })["catch"](function (err) {
                  setTimeout(function () {
                    _this5.toast("There was a problem deleting user.", "is-danger");
                  }, 1000);
                });
              } else {
                setTimeout(function () {
                  _this5.toast("Your password is incorrect!", "is-danger");
                }, 1000);
              }
            });
          }
        }
      });
    },
    deleteUsers: function deleteUsers() {
      var _this6 = this;

      var ids = this.selectedUsers.map(function (r) {
        return r.id;
      });
      this.$confirm({
        auth: true,
        message: "Are you sure you want to delete this user?",
        button: {
          no: "No",
          yes: "Yes"
        },
        callback: function callback(confirm, password) {
          if (confirm) {
            _this6.$axios.get("/dashboard/check-user-password/".concat(_this6.authUser.id, "/").concat(password)).then(function (res) {
              if (res.data.confirmed) {
                _this6.$axios["delete"]("/dashboard/delete-users/".concat(JSON.stringify(ids))).then(function (res) {
                  _this6.dispatchUserAccount({
                    type: "DELETE_USERS",
                    payload: ids
                  });

                  _this6.selectedUsers = [];
                  setTimeout(function () {
                    _this6.snackbar("User deleted successfully.", "is-success");
                  }, 1000);
                })["catch"](function (err) {
                  setTimeout(function () {
                    _this6.snackbar("There was a problem deleting user.", "is-danger");
                  }, 1000);
                });
              } else {
                setTimeout(function () {
                  _this6.snackbar("Your password is incorrect!", "is-danger");
                }, 1000);
              }
            });
          }
        }
      });
    },
    setUserErrors: function setUserErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.userError = {
        firstName: error.first_name || [],
        middleName: error.middle_name || [],
        lastName: error.last_name || [],
        username: error.email || [],
        role: error.role || [],
        status: error.status || []
      };
    },
    clearUserForm: function clearUserForm() {
      this.user = {
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        role: "ESS",
        status: "1"
      };
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/OrganizationComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/OrganizationComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _organization_UpdateBranchModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization/UpdateBranchModal */ "./resources/js/components/admin/organization/UpdateBranchModal.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "OrganizationComponent",
  components: {
    UpdateBranchModal: _organization_UpdateBranchModal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {},
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getBranches", "getDepartments", "getPositions", "getOrganizationProfile", "getStaffCount"])), {}, {
    getDropperId: function getDropperId() {
      return this.dropperId.toString();
    },
    getPositionDropperId: function getPositionDropperId() {
      return this.positionDropperId.toString();
    }
  }),
  watch: {
    brandLogo: function brandLogo(file) {
      if (file) {
        this.isUploadingBrandLogo = true;
        this.updateBranLogo(file);
      } else {
        this.isUploadingBrandLogo = false;
      }
    }
  },
  beforeMount: function beforeMount() {
    this.organizationMetadata = {
      name: this.getOrganizationProfile.name,
      telephone: this.getOrganizationProfile.telephone,
      email: this.getOrganizationProfile.email,
      address: this.getOrganizationProfile.address,
      city: this.getOrganizationProfile.city,
      landmark: this.getOrganizationProfile.landmark,
      district: this.getOrganizationProfile.district,
      region: this.getOrganizationProfile.region,
      regNumber: this.getOrganizationProfile.reg_number,
      tin: this.getOrganizationProfile.tin,
      currentStaff: this.getStaffCount.current,
      pastStaff: this.getStaffCount.past,
      totalStaff: this.getStaffCount.total
    };
  },
  data: function data() {
    return {
      toggleAddOrganizationBranch: false,
      toggleAddOrganizationDepartment: false,
      toggleAddOrganizationLeadership: false,
      isSubmittingNewBranch: false,
      isSubmittingPosition: false,
      isSubmittingNewDepartment: false,
      isUdateDepartmentModalActive: false,
      isUploadingBrandLogo: false,
      isPaginated: true,
      isPaginationSimple: true,
      isEditOrganizationMetadata: true,
      isSubmittingMetadata: false,
      paginationPosition: "bottom",
      defaultSortDirection: "desc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 50,
      checkedBranches: [],
      checkedDepartments: [],
      checkedPositions: [],
      dropperId: "",
      positionDropperId: "",
      branchId: null,
      brandLogo: null,
      brandLogoError: [],
      organizationBranch: {
        name: "",
        city: "",
        telephone: "",
        landmark: "",
        email: "",
        address: ""
      },
      organizationDepartment: {
        name: "",
        id: ""
      },
      organizationPosition: {
        name: "",
        id: ""
      },
      organizationBranchErrors: {
        name: [],
        city: [],
        telephone: [],
        landmark: [],
        email: [],
        address: []
      },
      organizationDepartmentErrors: {
        name: []
      },
      organizationPositionErrors: {
        name: []
      },
      organizationMetadata: {
        name: "",
        telephone: "",
        email: "",
        address: "",
        city: "",
        landmark: "",
        district: "",
        region: "",
        regNumber: "",
        tin: "",
        currentStaff: "",
        pastStaff: "",
        totalStaff: ""
      },
      organizationMetadataErrors: {
        name: [],
        telephone: [],
        email: [],
        address: [],
        city: [],
        landmark: [],
        district: [],
        region: [],
        regNumber: [],
        tin: []
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchBranch", "dispatchDepartment", "dispatchPosition", "dispatchOrgnizationProfile"])), {}, {
    openDepartmentDropper: function openDepartmentDropper(data) {
      var dropper = this.$refs.departmentDropper;
      this.dropperId = data.id;

      if (dropper) {
        this.organizationDepartment.id = data.id;
        this.organizationDepartment.name = data.name;
        dropper.open();
      }
    },
    closeDepartmentDropper: function closeDepartmentDropper() {
      var dropper = this.$refs.departmentDropper;

      if (dropper) {
        this.organizationDepartment.id = "";
        this.organizationDepartment.name = "";
        this.organizationDepartmentErrors.name = [];
        dropper.close();
      }
    },
    openPositionDropper: function openPositionDropper(data) {
      var dropper = this.$refs.positionDropper;
      this.positionDropperId = data.id;

      if (dropper) {
        this.organizationPosition.id = data.id;
        this.organizationPosition.name = data.name;
        dropper.open();
      }
    },
    closePositionDropper: function closePositionDropper() {
      var dropper = this.$refs.positionDropper;

      if (dropper) {
        this.organizationPosition.id = "";
        this.organizationPosition.name = "";
        this.organizationPositionErrors.name = [];
        dropper.close();
      }
    },
    updateBranLogo: function updateBranLogo(file) {
      var _this = this;

      this.brandLogoError = [];
      var data = new FormData();
      data.append("logo", file);
      this.$axios.post("/dashboard/update-brand-logo", data).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this.dispatchOrgnizationProfile({
            type: "UPDATE_LOGO",
            payload: res.data.logo
          });

          setTimeout(function () {
            _this.snackbar("Logo updated successfully", "is-dark");

            _this.isUploadingBrandLogo = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this.brandLogoError = err.response.data.errors.logo ? err.response.data.errors.logo : [];
            _this.isUploadingBrandLogo = false;
          }, 1000);
        } else {
          console.log(err);
        }
      });
    },
    updateOrganizationMetadata: function updateOrganizationMetadata() {
      var _this2 = this;

      this.isSubmittingMetadata = true;
      this.setOrganizationMetaDataErrors();
      this.$axios.post("/dashboard/update-organization-metadata", this.organizationMetadata).then(function (res) {
        _this2.clearAddOrganizationBranchForm();

        if (res.status === 200) {
          _this2.dispatchOrgnizationProfile({
            type: "UPDATE_INFO",
            payload: res.data.info
          });

          setTimeout(function () {
            _this2.snackbar("Metadata updated successfully", "is-dark");

            _this2.isSubmittingMetadata = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this2.setOrganizationMetaDataErrors(err.response.data.errors);

            _this2.isSubmittingMetadata = false;
          }, 1000);
        }
      });
    },
    addOrganizationBranch: function addOrganizationBranch() {
      var _this3 = this;

      this.isSubmittingNewBranch = true;
      this.setAddOrganizationBranchErrors();
      this.$axios.post("/dashboard/create-branch", this.organizationBranch).then(function (res) {
        _this3.clearAddOrganizationBranchForm();

        if (res.status === 201) {
          _this3.dispatchBranch({
            type: "ADD_NEW_BRANCH",
            payload: res.data
          });

          setTimeout(function () {
            _this3.snackbar("Branch added successfully", "is-dark");

            _this3.isSubmittingNewBranch = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this3.setAddOrganizationBranchErrors(err.response.data.errors);

            _this3.isSubmittingNewBranch = false;
          }, 1000);
        }
      });
    },
    getBranchToEdit: function getBranchToEdit(branch) {
      this.branchId = branch.id;
      this.organizationBranch.name = branch.name;
      this.organizationBranch.city = branch.city;
      this.organizationBranch.landmark = branch.landmark;
      this.organizationBranch.address = branch.address;
      this.organizationBranch.telephone = branch.telephone;
      this.organizationBranch.email = branch.email;
      this.isUdateDepartmentModalActive = true;
    },
    updateBranch: function updateBranch(id) {
      var _this4 = this;

      this.isSubmittingNewBranch = true;
      this.setAddOrganizationBranchErrors();
      this.$axios.put("/dashboard/update-branch/".concat(id), this.organizationBranch).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this4.dispatchBranch({
            type: "UPDATE_BRANCH",
            payload: res.data.branch
          });

          _this4.cancelAddOrganizationBranch("modal");

          _this4.isUdateDepartmentModalActive = false;
          setTimeout(function () {
            _this4.snackbar("Branch updated successfully", "is-dark");

            _this4.isSubmittingNewBranch = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this4.setAddOrganizationBranchErrors(err.response.data.errors);

            _this4.isSubmittingNewBranch = false;
          }, 1000);
        }
      });
    },
    deleteBranch: function deleteBranch(id) {
      var _this5 = this;

      this.$axios["delete"]("/dashboard/delete-branch/".concat(id)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this5.dispatchBranch({
            type: "DELETE_BRANCH",
            payload: id
          });

          setTimeout(function () {
            _this5.snackbar("Branch deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    deleteBranches: function deleteBranches() {
      var _this6 = this;

      var ids = this.checkedBranches.map(function (r) {
        return r.id;
      });
      this.$axios["delete"]("/dashboard/delete-branches/".concat(JSON.stringify(ids))).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this6.dispatchBranch({
            type: "DELETE_BRANCHES",
            payload: ids
          });

          _this6.checkedBranches = [];
          setTimeout(function () {
            _this6.snackbar("Branch deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    addOrganizationDepartment: function addOrganizationDepartment() {
      var _this7 = this;

      this.isSubmittingNewDepartment = true;
      this.organizationDepartmentErrors.name = [];
      this.$axios.post("/dashboard/create-department", this.organizationDepartment).then(function (res) {
        _this7.organizationDepartment.name = "";

        if (res.status === 201) {
          _this7.dispatchDepartment({
            type: "ADD_NEW_DEPARTMENT",
            payload: res.data
          });

          setTimeout(function () {
            _this7.snackbar("Department added successfully", "is-dark");

            _this7.isSubmittingNewDepartment = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this7.organizationDepartmentErrors.name = err.response.data.errors.name ? err.response.data.errors.name : [];
            _this7.isSubmittingNewDepartment = false;
          }, 1000);
        }
      });
    },
    updateOrganizationDepartment: function updateOrganizationDepartment() {
      var _this8 = this;

      this.isSubmittingNewDepartment = true;
      this.organizationDepartmentErrors.name = [];
      this.$axios.put("/dashboard/edit-department/".concat(this.organizationDepartment.id), this.organizationDepartment).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this8.dispatchDepartment({
            type: "UPDATE_DEPARTMENT",
            payload: res.data.department
          });

          setTimeout(function () {
            _this8.snackbar("Department updated successfully", "is-dark");

            _this8.isSubmittingNewDepartment = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this8.organizationDepartmentErrors.name = err.response.data.errors.name ? err.response.data.errors.name : [];
            _this8.isSubmittingNewDepartment = false;
          }, 1000);
        }
      });
    },
    deleteDepartment: function deleteDepartment(id) {
      var _this9 = this;

      this.$axios["delete"]("/dashboard/delete-department/".concat(id)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this9.dispatchDepartment({
            type: "DELETE_DEPARTMENT",
            payload: id
          });

          setTimeout(function () {
            _this9.snackbar("Department deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    deleteDepartments: function deleteDepartments() {
      var _this10 = this;

      var ids = this.checkedDepartments.map(function (r) {
        return r.id;
      });
      this.$axios["delete"]("/dashboard/delete-departments/".concat(JSON.stringify(ids))).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this10.dispatchDepartment({
            type: "DELETE_DEPARTMENTS",
            payload: ids
          });

          _this10.checkedDepartments = [];
          setTimeout(function () {
            _this10.snackbar("Department deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    addOrganizationPosition: function addOrganizationPosition() {
      var _this11 = this;

      this.isSubmittingPosition = true;
      this.organizationPositionErrors.name = [];
      this.$axios.post("/dashboard/create-position", this.organizationPosition).then(function (res) {
        _this11.organizationPosition.name = "";

        if (res.status === 201) {
          _this11.dispatchPosition({
            type: "ADD_NEW_POSITION",
            payload: res.data
          });

          setTimeout(function () {
            _this11.snackbar("Position added successfully", "is-dark");

            _this11.isSubmittingPosition = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this11.organizationPositionErrors.name = err.response.data.errors.name ? err.response.data.errors.name : [];
            _this11.isSubmittingPosition = false;
          }, 1000);
        }
      });
    },
    updateOrganizationPosition: function updateOrganizationPosition() {
      var _this12 = this;

      this.isSubmittingPosition = true;
      this.organizationPositionErrors.name = [];
      this.$axios.put("/dashboard/edit-position/".concat(this.organizationPosition.id), this.organizationPosition).then(function (res) {
        if (res.status === 200 && res.data.updated) {
          _this12.dispatchPosition({
            type: "UPDATE_POSITION",
            payload: res.data.position
          });

          setTimeout(function () {
            _this12.snackbar("Position updated successfully", "is-dark");

            _this12.isSubmittingPosition = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this12.organizationPositionErrors.name = err.response.data.errors.name ? err.response.data.errors.name : [];
            _this12.isSubmittingPosition = false;
          }, 1000);
        }
      });
    },
    deletePosition: function deletePosition(id) {
      var _this13 = this;

      this.$axios["delete"]("/dashboard/delete-position/".concat(id)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this13.dispatchPosition({
            type: "DELETE_POSITION",
            payload: id
          });

          setTimeout(function () {
            _this13.snackbar("Position deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    deletePositions: function deletePositions() {
      var _this14 = this;

      var ids = this.checkedPositions.map(function (r) {
        return r.id;
      });
      this.$axios["delete"]("/dashboard/delete-positions/".concat(JSON.stringify(ids))).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this14.dispatchPosition({
            type: "DELETE_POSITIONS",
            payload: ids
          });

          _this14.checkedPositions = [];
          setTimeout(function () {
            _this14.snackbar("Position deleted successfully", "is-dark");
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    assignStaff: function assignStaff() {
      this.selectedStaff = this.availableStaff;
      this.workShift.assignedStaff = this.selectedStaff;
    },
    removeStaff: function removeStaff() {
      var _this15 = this;

      this.assignedStaffIndex.forEach(function (val) {
        _this15.selectedStaff.forEach(function (value, index) {
          if (val === index) {
            _this15.selectedStaff.splice(index, _this15.assignedStaffIndex.length);
          }
        });
      });
    },
    setAddOrganizationBranchErrors: function setAddOrganizationBranchErrors() {
      var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.organizationBranchErrors.name = errors.name ? errors.name : [];
      this.organizationBranchErrors.city = errors.city ? errors.city : [];
      this.organizationBranchErrors.telephone = errors.telephone ? errors.telephone : [];
      this.organizationBranchErrors.landmark = errors.landmark ? errors.landmark : [];
      this.organizationBranchErrors.email = errors.email ? errors.email : [];
      this.organizationBranchErrors.address = errors.address ? errors.address : [];
    },
    setOrganizationMetaDataErrors: function setOrganizationMetaDataErrors() {
      var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.organizationMetadataErrors = {
        name: errors.name ? errors.name : [],
        telephone: errors.telephone ? errors.telephone : [],
        email: errors.email ? errors.email : [],
        address: errors.address ? errors.address : [],
        city: errors.city ? errors.city : [],
        landmark: errors.landmark ? errors.landmark : [],
        district: errors.district ? errors.district : [],
        region: errors.region ? errors.region : [],
        regNumber: errors.regNumber ? errors.regNumber : [],
        tin: errors.tin ? errors.tin : []
      };
    },
    cancelAddOrganizationBranch: function cancelAddOrganizationBranch() {
      var modal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      this.clearAddOrganizationBranchForm();
      this.setAddOrganizationBranchErrors();

      if (!modal) {
        this.toggleAddOrganizationBranch = !this.toggleAddOrganizationBranch;
      }
    },
    cancelAddOrganizationDepartment: function cancelAddOrganizationDepartment() {
      this.organizationDepartmentErrors.name = [];
      this.toggleAddOrganizationDepartment = !this.toggleAddOrganizationDepartment;
    },
    cancelAddOrganizationPosition: function cancelAddOrganizationPosition() {
      this.organizationPositionErrors.name = [];
      this.toggleAddOrganizationPosition = !this.toggleAddOrganizationPosition;
    },
    clearAddOrganizationBranchForm: function clearAddOrganizationBranchForm() {
      this.organizationBranch.name = "";
      this.organizationBranch.city = "";
      this.organizationBranch.telephone = "";
      this.organizationBranch.landmark = "";
      this.organizationBranch.email = "";
      this.organizationBranch.address = "";
    },
    cancelOrganizationMetaData: function cancelOrganizationMetaData() {
      this.setOrganizationMetaDataErrors();
      this.isEditOrganizationMetadata = true;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/WorkShiftComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/WorkShiftComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shift_EditShiftModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift/EditShiftModal */ "./resources/js/components/admin/shift/EditShiftModal.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WorkShiftComponent",
  components: {
    EditShiftModal: _shift_EditShiftModal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getUsers", "getWorkShifts"])), {}, {
    indeterminate: function indeterminate() {
      if (this.removedStaff.length === this.selectedStaff.length) {
        if (this.removedStaff.length > 0 && this.selectedStaff.length > 0) {
          this.selectAllSectedStaff = true;
        }

        return false;
      }

      if (this.removedStaff.length === 0) {
        this.selectAllSectedStaff = false;
        return false;
      }

      if (this.removedStaff.length > 0) {
        return true;
      }
    }
  }),
  watch: {
    selectAllSectedStaff: function selectAllSectedStaff(v) {
      if (v) {
        this.removedStaff = _toConsumableArray(this.selectedStaff);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch(function () {
      return _this.workShift.from;
    }, function (value) {
      var duration = _this.formatDurationInHours(value, _this.workShift.to);

      _this.workShift.duration = duration;
    });
    this.$watch(function () {
      return _this.workShift.to;
    }, function (value) {
      var duration = _this.formatDurationInHours(_this.workShift.from, value);

      _this.workShift.duration = duration;
    });
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
      perPage: 50,
      toggleWorkShift: false,
      isSubmittingWorkShift: false,
      viewWorkShiftModal: false,
      availableStaff: [],
      selectedStaff: [],
      removedStaff: [],
      selectAllSectedStaff: false,
      shiftDropperId: "",
      selectedWorkShifts: [],
      weekDefinitions: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturay", "Sunday", "Weekdays", "Weekend", "All"],
      workShift: {
        assignedStaff: [],
        name: "",
        from: new Date(),
        to: new Date(),
        duration: "",
        days: []
      },
      workShiftErrors: {
        assignedStaff: [],
        name: [],
        from: [],
        to: [],
        duration: [],
        days: []
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchWorkShift"])), {}, {
    assignStaff: function assignStaff() {
      this.selectedStaff = _toConsumableArray(this.availableStaff);
      this.selectAllSectedStaff = false;
    },
    removeStaff: function removeStaff() {
      var _this2 = this;

      this.selectedStaff = this.selectedStaff.filter(function (s) {
        if (!_this2.removedStaff.includes(s)) return s;
      });
      this.removedStaff = [];

      if (this.selectedStaff.length === 0) {
        this.selectAllSectedStaff = false;
      }
    },
    addWorkShift: function addWorkShift() {
      var _this3 = this;

      this.isSubmittingWorkShift = true;
      this.$axios.post("/dashboard/add-work-shift", _objectSpread(_objectSpread({}, this.workShift), {}, {
        from: this.workShift.from.toISOString(),
        to: this.workShift.to.toISOString()
      })).then(function (res) {
        _this3.clearWorkShiftForm();

        if (res.status === 200 && res.data.created) {
          _this3.dispatchWorkShift({
            type: "ADD_NEW_SHIFT",
            payload: res.data.data
          });

          setTimeout(function () {
            _this3.snackbar("Shift added successfully", "is-dark");

            _this3.isSubmittingWorkShift = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this3.setWorkShiftErrors(err.response.data.errors);

            _this3.isSubmittingWorkShift = false;
          }, 1000);
        }
      });
    },
    deleteWorkShift: function deleteWorkShift(id) {
      var _this4 = this;

      this.$axios["delete"]("/dashboard/delete-work-shift/".concat(id)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this4.dispatchWorkShift({
            type: "DELETE_SHIFT",
            payload: id
          });

          setTimeout(function () {
            _this4.snackbar("Shift deleted successfully", "is-dark");
          }, 1000);
        }
      });
    },
    deleteWorkShifts: function deleteWorkShifts() {
      var _this5 = this;

      var ids = this.selectedWorkShifts.map(function (s) {
        return s.id;
      });
      this.$axios["delete"]("/dashboard/delete-work-shifts/".concat(ids)).then(function (res) {
        if (res.status === 200 && res.data.deleted) {
          _this5.dispatchWorkShift({
            type: "DELETE_SHIFTS",
            payload: ids
          });

          setTimeout(function () {
            _this5.snackbar("Shift deleted successfully", "is-dark");
          }, 1000);
        }
      });
    },
    setShiftToEdit: function setShiftToEdit(shift) {
      this.$buefy.modal.open({
        parent: this,
        component: _shift_EditShiftModal__WEBPACK_IMPORTED_MODULE_1__["default"],
        hasModalCard: true,
        trapFocus: true,
        canCancel: ["escape"],
        props: {
          shift: shift
        }
      });
    },
    cancelWorkShiftForm: function cancelWorkShiftForm() {
      this.clearWorkShiftForm();
      this.toggleWorkShift = !this.toggleWorkShift;
    },
    setWorkShiftErrors: function setWorkShiftErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.workShiftErrors.name = error.name || [];
      this.workShiftErrors.days = error.days || [];
      this.workShiftErrors.duration = error.duration || [];
    },
    clearWorkShiftForm: function clearWorkShiftForm() {
      this.setWorkShiftErrors();
      this.workShift.name = "";
      this.workShift.from = new Date();
      this.workShift.to = new Date();
      this.workShift.duration = "";
      this.workShift.days = [];
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UpdateBranchModal",
  computed: {},
  props: {
    branchId: {
      required: true,
      type: Number
    },
    organizationBranch: {
      required: true,
      type: Object
    },
    organizationBranchErrors: {
      required: true,
      type: Object
    },
    isSubmittingNewBranch: {
      required: true,
      type: Boolean
    },
    cancelAddOrganizationBranch: {
      required: true,
      type: Function
    },
    updateBranch: {
      required: true,
      type: Function
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    cancelModal: function cancelModal() {
      this.$emit("close");
      this.cancelAddOrganizationBranch("modal");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UpdateJobTitleModal",
  computed: {},
  props: {
    jobId: {
      required: true,
      type: Number
    },
    jobTitle: {
      required: true,
      type: Object
    },
    jobTitleErrors: {
      required: true,
      type: Object
    },
    getJobCategories: {
      required: true,
      type: Array
    },
    isSubmittingJobTitle: {
      required: true,
      type: Boolean
    },
    cancelAddJobTitle: {
      required: true,
      type: Function
    },
    updateJobTitle: {
      required: true,
      type: Function
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    cancelModal: function cancelModal() {
      this.$emit("close");
      this.cancelAddJobTitle("modal");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EditShiftModal",
  props: {
    shift: {
      require: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.setWorkShift(this.shift);
    this.$watch(function () {
      return _this.workShift.from;
    }, function (value) {
      var duration = _this.formatDurationInHours(value, _this.workShift.to);

      _this.workShift.duration = duration;
    });
    this.$watch(function () {
      return _this.workShift.to;
    }, function (value) {
      var duration = _this.formatDurationInHours(_this.workShift.from, value);

      _this.workShift.duration = duration;
    });
  },
  data: function data() {
    return {
      isSubmittingWorkShift: false,
      weekDefinitions: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturay", "Sunday", "Weekdays", "Weekend", "All"],
      workShift: {
        name: "",
        from: new Date(),
        to: new Date(),
        duration: "",
        days: []
      },
      workShiftErrors: {
        name: [],
        from: [],
        to: [],
        duration: [],
        days: []
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["dispatchWorkShift"])), {}, {
    updateWorkShift: function updateWorkShift() {
      var _this2 = this;

      this.isSubmittingWorkShift = true;
      this.$axios.put("/dashboard/update-work-shift/".concat(this.shift.id), _objectSpread(_objectSpread({}, this.workShift), {}, {
        from: this.workShift.from.toISOString(),
        to: this.workShift.to.toISOString()
      })).then(function (res) {
        _this2.$emit("close");

        _this2.clearWorkShiftForm();

        if (res.status === 200 && res.data.created) {
          _this2.dispatchWorkShift({
            type: "UPDATE_SHIFT",
            payload: res.data.data
          });

          setTimeout(function () {
            _this2.snackbar("Shift updated successfully", "is-dark");

            _this2.isSubmittingWorkShift = false;
          }, 1000);
        }
      })["catch"](function (err) {
        if (err.response.status === 422) {
          setTimeout(function () {
            _this2.setWorkShiftErrors(err.response.data.errors);

            _this2.isSubmittingWorkShift = false;
          }, 1000);
        }
      });
    },
    setWorkShift: function setWorkShift(shift) {
      this.workShift = {
        name: shift.name,
        from: new Date(shift.from),
        to: new Date(shift.to),
        duration: shift.duration,
        days: shift.days
      };
    },
    cancelWorkShiftForm: function cancelWorkShiftForm() {
      this.$emit("close");
      this.clearWorkShiftForm();
    },
    setWorkShiftErrors: function setWorkShiftErrors() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.workShiftErrors.name = error.name || [];
      this.workShiftErrors.days = error.days || [];
      this.workShiftErrors.duration = error.duration || [];
    },
    clearWorkShiftForm: function clearWorkShiftForm() {
      this.setWorkShiftErrors();
      this.workShift.name = "";
      this.workShift.from = new Date();
      this.workShift.to = new Date();
      this.workShift.duration = "";
      this.workShift.days = [];
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button.is-rounded[data-v-276c2ef2] {\n  border-radius: 290486px;\n  padding-bottom: calc(0.2em - 1px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.2em - 1px);\n}\n.role-user[data-v-276c2ef2] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0 1rem 1rem 0;\n}\n.role-user > span[data-v-276c2ef2] {\n  margin-left: 1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".brand-logo-overlay[data-v-b08483a2] {\n  position: relative;\n}\n.brand-logo[data-v-b08483a2] {\n  width: 25rem;\n  height: 12.4rem;\n  margin-bottom: 1.5rem;\n  border: 1px solid #eee;\n}\n.brand-logo > img[data-v-b08483a2] {\n  width: 100%;\n  height: 100%;\n}\n.brand-logo-overlay[data-v-b08483a2] {\n  width: 25rem;\n  height: 12.4rem;\n  position: absolute;\n  background-color: rgba(7, 7, 7, 0.616);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: -1;\n  transition: opacity 0.1s ease-in;\n}\n.show-brand-logo-overlay[data-v-b08483a2] {\n  z-index: 1;\n  opacity: 1;\n}\n.hide-brand-logo-overlay[data-v-b08483a2] {\n  z-index: -1;\n  opacity: 0;\n}\n.text-withe[data-v-b08483a2] {\n  color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Administration.vue?vue&type=template&id=32205172&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Administration.vue?vue&type=template&id=32205172& ***!
  \************************************************************************************************************************************************************************************************************/
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
    { staticClass: "main__content" },
    [
      _c(
        "tabs",
        { attrs: { stickyTab: "main__content__sticky" } },
        [
          _c(
            "tab",
            { attrs: { label: "User Management" } },
            [_c("ManageUserComponent")],
            1
          ),
          _vm._v(" "),
          _c("tab", { attrs: { label: "Job" } }, [_c("JobComponent")], 1),
          _vm._v(" "),
          _c(
            "tab",
            { attrs: { label: "Shift Management" } },
            [_c("WorkShiftComponent")],
            1
          ),
          _vm._v(" "),
          _c(
            "tab",
            { attrs: { label: "Organization" } },
            [_c("OrganizationComponent")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Paginate.vue?vue&type=template&id=75d45e62&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Paginate.vue?vue&type=template&id=75d45e62& ***!
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
  return _c(
    "section",
    [
      _c("b-pagination", {
        attrs: {
          total: _vm.totalPage,
          order: _vm.order,
          size: _vm.size,
          simple: _vm.isSimple,
          "per-page": _vm.perPage,
          "icon-prev": _vm.prevIcon,
          "icon-next": _vm.nextIcon,
          "aria-next-label": "Next page",
          "aria-previous-label": "Previous page",
          "aria-page-label": "Page",
          "aria-current-label": "Current page"
        },
        model: {
          value: _vm.currentPage,
          callback: function($$v) {
            _vm.currentPage = $$v
          },
          expression: "currentPage"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/JobComponent.vue?vue&type=template&id=891be3aa&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/JobComponent.vue?vue&type=template&id=891be3aa&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "main",
    [
      _c(
        "b-tabs",
        {
          attrs: { type: "is-toggle", size: "", animated: false, expanded: "" }
        },
        [
          _c("b-tab-item", { attrs: { label: "Job Categories" } }, [
            _c(
              "section",
              { staticClass: "b__collapse__section" },
              [
                _c(
                  "b-collapse",
                  {
                    staticClass: "card",
                    attrs: { animation: "slide", "aria-id": "addreason" },
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
                                "aria-controls": "addreason"
                              }
                            },
                            [
                              _c(
                                "p",
                                { staticClass: "card-header-title" },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      type: "is-info",
                                      pack: "fas",
                                      icon: "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "has-text-info" }, [
                                    _vm._v(" Add New Job Category")
                                  ])
                                ],
                                1
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
                    ]),
                    model: {
                      value: _vm.toggleAddJobCategory,
                      callback: function($$v) {
                        _vm.toggleAddJobCategory = $$v
                      },
                      expression: "toggleAddJobCategory"
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
                                return _vm.addJobCategory()
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "columns" }, [
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Category Name")
                                ])
                              ]),
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
                                            _vm.jobCategoryErrors.name.length >
                                            0
                                        },
                                        message: _vm.jobCategoryErrors.name
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value: _vm.jobCategory.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.jobCategory,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression: "jobCategory.name"
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
                                      disabled: _vm.isSubmittingJobCategory
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(
                                          _vm.isSubmittingJobCategory
                                            ? "Submitting..."
                                            : "Add"
                                        ) +
                                        "\n                  "
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
                                        return _vm.cancelAddJobCategory()
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
            ),
            _vm._v(" "),
            _c("section", { staticClass: "b__collapse__section" }, [
              _c("div", { staticClass: "card" }, [
                _c("header", { staticClass: "card-header" }, [
                  _c("article", { staticClass: "table__header" }, [
                    _c("h5", { staticClass: "table__header__title" }, [
                      _vm._v("Job Categories")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _c(
                        "section",
                        { staticClass: "py-4 multiples-actions" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                "aria-role": "list",
                                disabled:
                                  _vm.checkedJobCats.length > 0 ? false : true
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "trigger",
                                  fn: function(ref) {
                                    var active = ref.active
                                    return [
                                      _c("b-button", {
                                        attrs: {
                                          type: "is-info is-light",
                                          label: "Actions",
                                          pack: "fas",
                                          "icon-right": active
                                            ? "angle-up"
                                            : "angle-down"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  attrs: { "aria-role": "listitem" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteJobCategories()
                                    }
                                  }
                                },
                                [_vm._v("Delete job categories")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table",
                        {
                          attrs: {
                            data: _vm.getJobCategories,
                            paginated: _vm.isPaginated,
                            "per-page": _vm.perPage,
                            "current-page": _vm.currentPage,
                            "pagination-simple": _vm.isPaginationSimple,
                            "pagination-position": _vm.paginationPosition,
                            "default-sort-direction": _vm.defaultSortDirection,
                            "sort-icon": _vm.sortIcon,
                            "sort-icon-size": _vm.sortIconSize,
                            "checked-rows": _vm.checkedJobCats,
                            checkable: "",
                            striped: "",
                            hoverable: "",
                            "default-sort": "id",
                            "aria-next-label": "Next page",
                            "aria-previous-label": "Previous page",
                            "aria-page-label": "Page",
                            "aria-current-label": "Current page"
                          },
                          on: {
                            "update:checkedRows": function($event) {
                              _vm.checkedJobCats = $event
                            },
                            "update:checked-rows": function($event) {
                              _vm.checkedJobCats = $event
                            }
                          }
                        },
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
                                  return [_vm._v(_vm._s(props.row.category))]
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
                                              label: "Edit",
                                              size: "",
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
                                                  "job-cat-id" +
                                                  props.row.id.toString()
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.openJobCatDropper(
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
                                              size: "",
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
                                                  return _vm.deleteJobCategory(
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
            ])
          ]),
          _vm._v(" "),
          _c("b-tab-item", { attrs: { label: "Job Titles" } }, [
            _c(
              "section",
              { staticClass: "b__collapse__section" },
              [
                _c(
                  "b-collapse",
                  {
                    staticClass: "card",
                    attrs: { animation: "slide", "aria-id": "addreason" },
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
                                "aria-controls": "addreason"
                              }
                            },
                            [
                              _c(
                                "p",
                                { staticClass: "card-header-title" },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      type: "is-info",
                                      pack: "fas",
                                      icon: "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "has-text-info" }, [
                                    _vm._v(" Add New Job Title")
                                  ])
                                ],
                                1
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
                    ]),
                    model: {
                      value: _vm.toggleAddJobTitle,
                      callback: function($$v) {
                        _vm.toggleAddJobTitle = $$v
                      },
                      expression: "toggleAddJobTitle"
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
                                return _vm.addJobTitle()
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "columns" }, [
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Job Category")
                                ])
                              ]),
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
                                            _vm.jobTitleErrors.category.length >
                                            0
                                        },
                                        message: _vm.jobTitleErrors.category
                                      }
                                    },
                                    [
                                      _c(
                                        "b-select",
                                        {
                                          attrs: { size: "", expanded: "" },
                                          model: {
                                            value: _vm.jobTitle.category,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.jobTitle,
                                                "category",
                                                $$v
                                              )
                                            },
                                            expression: "jobTitle.category"
                                          }
                                        },
                                        _vm._l(_vm.getJobCategories, function(
                                          cat,
                                          index
                                        ) {
                                          return _c(
                                            "option",
                                            {
                                              key: index,
                                              domProps: { value: cat.id }
                                            },
                                            [
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(cat.category) +
                                                  "\n                        "
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
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Job Title")
                                ])
                              ]),
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
                                            _vm.jobTitleErrors.title.length > 0
                                        },
                                        message: _vm.jobTitleErrors.title
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value: _vm.jobTitle.title,
                                          callback: function($$v) {
                                            _vm.$set(_vm.jobTitle, "title", $$v)
                                          },
                                          expression: "jobTitle.title"
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
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Job Description")
                                ])
                              ]),
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
                                            _vm.jobTitleErrors.description
                                              .length > 0
                                        },
                                        message: _vm.jobTitleErrors.description
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: {
                                          size: "",
                                          type: "textarea",
                                          placeholder: "Job Description...",
                                          expanded: ""
                                        },
                                        model: {
                                          value: _vm.jobTitle.description,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.jobTitle,
                                              "description",
                                              $$v
                                            )
                                          },
                                          expression: "jobTitle.description"
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
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Job Specification")
                                ])
                              ]),
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
                                            _vm.jobTitleErrors.specification
                                              .length > 0
                                        },
                                        message:
                                          _vm.jobTitleErrors.specification
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
                                              attrs: { size: "" },
                                              model: {
                                                value:
                                                  _vm.jobTitle.specification,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.jobTitle,
                                                    "specification",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "jobTitle.specification"
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
                                                    {
                                                      staticClass: "file-label"
                                                    },
                                                    [_vm._v("Upload")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _vm.jobTitle.specification
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass: "file-name"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.jobTitle
                                                            .specification.name
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
                                      disabled: _vm.isSubmittingJobTitle
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(
                                          _vm.isSubmittingJobTitle
                                            ? "Submitting..."
                                            : "Add"
                                        ) +
                                        "\n                  "
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
                                        return _vm.cancelAddJobTitle()
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
            ),
            _vm._v(" "),
            _c("section", { staticClass: "b__collapse__section" }, [
              _c("div", { staticClass: "card" }, [
                _c("header", { staticClass: "card-header" }, [
                  _c("article", { staticClass: "table__header" }, [
                    _c("h5", { staticClass: "table__header__title" }, [
                      _vm._v("Job Titles")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _c(
                        "section",
                        { staticClass: "py-4 multiples-actions" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                "aria-role": "list",
                                disabled:
                                  _vm.checkedJobTitles.length > 0 ? false : true
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "trigger",
                                  fn: function(ref) {
                                    var active = ref.active
                                    return [
                                      _c("b-button", {
                                        attrs: {
                                          type: "is-info is-light",
                                          label: "Actions",
                                          pack: "fas",
                                          "icon-right": active
                                            ? "angle-up"
                                            : "angle-down"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  attrs: { "aria-role": "listitem" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteJobTitles()
                                    }
                                  }
                                },
                                [_vm._v("Delete job titles")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table",
                        {
                          attrs: {
                            data: _vm.getJobTitles,
                            paginated: _vm.isPaginated,
                            "per-page": _vm.perPage,
                            "current-page": _vm.currentPage,
                            "pagination-simple": _vm.isPaginationSimple,
                            "pagination-position": _vm.paginationPosition,
                            "default-sort-direction": _vm.defaultSortDirection,
                            "sort-icon": _vm.sortIcon,
                            "sort-icon-size": _vm.sortIconSize,
                            "checked-rows": _vm.checkedJobTitles,
                            detailed: "",
                            "detail-key": "id",
                            "show-detail-icon": false,
                            checkable: "",
                            striped: "",
                            hoverable: "",
                            "default-sort": "id",
                            "aria-next-label": "Next page",
                            "aria-previous-label": "Previous page",
                            "aria-page-label": "Page",
                            "aria-current-label": "Current page"
                          },
                          on: {
                            "update:checkedRows": function($event) {
                              _vm.checkedJobTitles = $event
                            },
                            "update:checked-rows": function($event) {
                              _vm.checkedJobTitles = $event
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "detail",
                              fn: function(props) {
                                return [
                                  _c("article", [
                                    _c("p", [
                                      _c("strong", [
                                        _vm._v("Detail Description ")
                                      ]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(props.row.description) +
                                          "\n                    "
                                      )
                                    ])
                                  ])
                                ]
                              }
                            }
                          ])
                        },
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
                              field: "title",
                              label: "Title",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [_vm._v(_vm._s(props.row.title))]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "specification",
                              label: "Specification",
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
                                            return _vm.viewSpecification(
                                              "/job-specifications/" +
                                                props.row.specification
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(props.row.specification))]
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "dsecription",
                              label: "Description",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _vm.openJobTitleDesc !== props.row.id
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                props.row.description.substring(
                                                  0,
                                                  130
                                                ) + "..."
                                              ) +
                                              "\n                  "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "b-collapse",
                                      {
                                        attrs: {
                                          open:
                                            _vm.openJobTitleDesc ===
                                            props.row.id,
                                          position: "is-bottom",
                                          "aria-id": "contentIdForA11y1",
                                          animation: "slide"
                                        },
                                        on: {
                                          open: function($event) {
                                            _vm.openJobTitleDesc = props.row.id
                                          },
                                          close: function($event) {
                                            _vm.openJobTitleDesc = !props.row.id
                                          }
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "trigger",
                                              fn: function(props) {
                                                return [
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        "aria-controls":
                                                          "contentIdForA11y1"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            !props.open
                                                              ? "view more"
                                                              : "view less"
                                                          ) +
                                                          "\n                      "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(props.row.description) +
                                              "\n                    "
                                          )
                                        ])
                                      ]
                                    )
                                  ]
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
                                              label: "Edit",
                                              size: "is-small",
                                              type: "is-dark"
                                            }
                                          },
                                          [
                                            _c("b-button", {
                                              staticClass: "is-info is-light",
                                              attrs: {
                                                size: "is-small",
                                                pack: "fas",
                                                "icon-right": "pen"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.getJobTitleToEdit(
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
                                              size: "is-small",
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
                                                  return _vm.deleteJobTitle(
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
            ])
          ]),
          _vm._v(" "),
          _c("b-tab-item", { attrs: { label: "Employment Status" } }, [
            _c(
              "section",
              { staticClass: "b__collapse__section" },
              [
                _c(
                  "b-collapse",
                  {
                    staticClass: "card",
                    attrs: { animation: "slide", "aria-id": "addreason" },
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
                                "aria-controls": "addreason"
                              }
                            },
                            [
                              _c(
                                "p",
                                { staticClass: "card-header-title" },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      type: "is-info",
                                      pack: "fas",
                                      icon: "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "has-text-info" }, [
                                    _vm._v(" Add New Eployment Status")
                                  ])
                                ],
                                1
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
                    ]),
                    model: {
                      value: _vm.toggleAddEmploymentStatus,
                      callback: function($$v) {
                        _vm.toggleAddEmploymentStatus = $$v
                      },
                      expression: "toggleAddEmploymentStatus"
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
                                return _vm.addEmploymentStatus()
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "columns" }, [
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Eployment Status")
                                ])
                              ]),
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
                                            _vm.employmentStatusErrors.status
                                              .length > 0
                                        },
                                        message:
                                          _vm.employmentStatusErrors.status
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value: _vm.employmentStatus.status,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.employmentStatus,
                                              "status",
                                              $$v
                                            )
                                          },
                                          expression: "employmentStatus.status"
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
                                      disabled: _vm.isSubmittingEmploymentStatus
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(
                                          _vm.isSubmittingEmploymentStatus
                                            ? "Submitting..."
                                            : "Add"
                                        ) +
                                        "\n                  "
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
                                        return _vm.cancelAddEmploymentStatus()
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
            ),
            _vm._v(" "),
            _c("section", { staticClass: "b__collapse__section" }, [
              _c("div", { staticClass: "card" }, [
                _c("header", { staticClass: "card-header" }, [
                  _c("article", { staticClass: "table__header" }, [
                    _c("h5", { staticClass: "table__header__title" }, [
                      _vm._v("Employment Status")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _c(
                        "section",
                        { staticClass: "py-4 multiples-actions" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                "aria-role": "list",
                                disabled:
                                  _vm.checkedEmpStatus.length > 0 ? false : true
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "trigger",
                                  fn: function(ref) {
                                    var active = ref.active
                                    return [
                                      _c("b-button", {
                                        attrs: {
                                          type: "is-info is-light",
                                          label: "Actions",
                                          pack: "fas",
                                          "icon-right": active
                                            ? "angle-up"
                                            : "angle-down"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  attrs: { "aria-role": "listitem" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteEmploymentStatuses()
                                    }
                                  }
                                },
                                [_vm._v("Delete employment statuses")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table",
                        {
                          attrs: {
                            data: _vm.getEmploymentStatus,
                            paginated: _vm.isPaginated,
                            "per-page": _vm.perPage,
                            "current-page": _vm.currentPage,
                            "pagination-simple": _vm.isPaginationSimple,
                            "pagination-position": _vm.paginationPosition,
                            "default-sort-direction": _vm.defaultSortDirection,
                            "sort-icon": _vm.sortIcon,
                            "sort-icon-size": _vm.sortIconSize,
                            "checked-rows": _vm.checkedEmpStatus,
                            checkable: "",
                            striped: "",
                            hoverable: "",
                            "default-sort": "id",
                            "aria-next-label": "Next page",
                            "aria-previous-label": "Previous page",
                            "aria-page-label": "Page",
                            "aria-current-label": "Current page"
                          },
                          on: {
                            "update:checkedRows": function($event) {
                              _vm.checkedEmpStatus = $event
                            },
                            "update:checked-rows": function($event) {
                              _vm.checkedEmpStatus = $event
                            }
                          }
                        },
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
                              field: "status",
                              label: "Status",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [_vm._v(_vm._s(props.row.status))]
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
                                              label: "Edit",
                                              size: "is-small",
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
                                                  "emp-status-id" +
                                                  props.row.id.toString()
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.openEmpStatusDropper(
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
                                              size: "is-small",
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
                                                  return _vm.deleteEmploymentStatus(
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
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "jobCatDropper",
          staticClass: "dropper",
          attrs: { join: "#job-cat-id" + _vm.getDropperId, "z-index": 1000 },
          on: {
            "esc-keydown": _vm.closeJobCatDropper,
            "other-area-clicked": _vm.closeJobCatDropper
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateJobCategory()
                }
              }
            },
            [
              _c(
                "b-field",
                {
                  attrs: {
                    label: "Update Category Name",
                    expanded: "",
                    type: {
                      "is-danger": _vm.jobCategoryErrors.name.length > 0
                    },
                    message: _vm.jobCategoryErrors.name
                  }
                },
                [
                  _c("b-input", {
                    attrs: { type: "is-info" },
                    model: {
                      value: _vm.jobCategory.name,
                      callback: function($$v) {
                        _vm.$set(_vm.jobCategory, "name", $$v)
                      },
                      expression: "jobCategory.name"
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
                      disabled: _vm.isSubmittingJobCategory
                    }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.isSubmittingJobCategory ? "Saving..." : "Save"
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
                      disabled: _vm.isSubmittingJobCategory
                    },
                    on: {
                      click: function($event) {
                        return _vm.closeJobCatDropper()
                      }
                    }
                  },
                  [_vm._v("\n          Cancel\n        ")]
                )
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "empStatusDropper",
          staticClass: "dropper",
          attrs: {
            join: "#emp-status-id" + _vm.getEmpStatusDropperId,
            "z-index": 1000
          },
          on: {
            "esc-keydown": _vm.closeEmpStatusDropper,
            "other-area-clicked": _vm.closeEmpStatusDropper
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateEmploymentStatus()
                }
              }
            },
            [
              _c(
                "b-field",
                {
                  attrs: {
                    label: "Update Employment Status",
                    expanded: "",
                    type: {
                      "is-danger": _vm.employmentStatusErrors.status.length > 0
                    },
                    message: _vm.employmentStatusErrors.status
                  }
                },
                [
                  _c("b-input", {
                    attrs: { type: "is-info" },
                    model: {
                      value: _vm.employmentStatus.status,
                      callback: function($$v) {
                        _vm.$set(_vm.employmentStatus, "status", $$v)
                      },
                      expression: "employmentStatus.status"
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
                      disabled: _vm.isSubmittingEmploymentStatus
                    }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.isSubmittingEmploymentStatus
                            ? "Saving..."
                            : "Save"
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
                      disabled: _vm.isSubmittingEmploymentStatus
                    },
                    on: {
                      click: function($event) {
                        return _vm.closeEmpStatusDropper()
                      }
                    }
                  },
                  [_vm._v("\n          Cancel\n        ")]
                )
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("b-modal", {
        attrs: {
          "has-modal-card": "",
          "trap-focus": "",
          "destroy-on-hide": false,
          "aria-role": "dialog",
          "aria-label": "Example Modal",
          "aria-modal": "",
          "can-cancel": ["escape"],
          "on-cancel": _vm.cancelAddJobTitle
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(props) {
              return [
                _c(
                  "UpdateJobTitleModal",
                  _vm._b(
                    { on: { close: props.close } },
                    "UpdateJobTitleModal",
                    {
                      jobId: _vm.jobId,
                      jobTitle: _vm.jobTitle,
                      jobTitleErrors: _vm.jobTitleErrors,
                      isSubmittingJobTitle: _vm.isSubmittingJobTitle,
                      getJobCategories: _vm.getJobCategories,
                      cancelAddJobTitle: _vm.cancelAddJobTitle,
                      updateJobTitle: _vm.updateJobTitle
                    },
                    false
                  )
                )
              ]
            }
          }
        ]),
        model: {
          value: _vm.isUpdateJobTitleModalActive,
          callback: function($$v) {
            _vm.isUpdateJobTitleModalActive = $$v
          },
          expression: "isUpdateJobTitleModalActive"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ManageUserComponent.vue?vue&type=template&id=276c2ef2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/ManageUserComponent.vue?vue&type=template&id=276c2ef2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "b-tabs",
        {
          attrs: { type: "is-toggle", size: "", animated: false, expanded: "" }
        },
        [
          _c("b-tab-item", { attrs: { label: "Staff Account" } }, [
            _c(
              "section",
              { staticClass: "b__collapse__section" },
              [
                _c(
                  "b-collapse",
                  {
                    staticClass: "card",
                    attrs: { animation: "slide", "aria-id": "querystaff" },
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
                                "aria-controls": "querystaff"
                              }
                            },
                            [
                              _c(
                                "p",
                                { staticClass: "card-header-title" },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      type: "is-info",
                                      pack: "fas",
                                      icon: "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "has-text-info" }, [
                                    _vm._v(" Add New User")
                                  ])
                                ],
                                1
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
                    ]),
                    model: {
                      value: _vm.toggleUserForm,
                      callback: function($$v) {
                        _vm.toggleUserForm = $$v
                      },
                      expression: "toggleUserForm"
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
                                return _vm.addUser()
                              }
                            }
                          },
                          [
                            _c("h5", { staticClass: "text-main" }, [
                              _vm._v("Full Name")
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
                                        label: "Last Name",
                                        expanded: "",
                                        type: {
                                          "is-danger":
                                            _vm.userError.lastName.length > 0
                                        },
                                        message: _vm.userError.lastName
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: {
                                          expanded: "",
                                          placeholder: "Enter last name"
                                        },
                                        model: {
                                          value: _vm.user.lastName,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "lastName", $$v)
                                          },
                                          expression: "user.lastName"
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
                                        label: "First Name",
                                        expanded: "",
                                        type: {
                                          "is-danger":
                                            _vm.userError.firstName.length > 0
                                        },
                                        message: _vm.userError.firstName
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: {
                                          expanded: "",
                                          placeholder: "Enter first name"
                                        },
                                        model: {
                                          value: _vm.user.firstName,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "firstName", $$v)
                                          },
                                          expression: "user.firstName"
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
                                            _vm.userError.middleName.length > 0
                                        },
                                        message: _vm.userError.middleName
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: {
                                          expanded: "",
                                          placeholder: "Enter middle name"
                                        },
                                        model: {
                                          value: _vm.user.middleName,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.user,
                                              "middleName",
                                              $$v
                                            )
                                          },
                                          expression: "user.middleName"
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
                            _c("h5", { staticClass: "text-main" }, [
                              _vm._v("Login Credentials")
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
                                        label: "Username",
                                        expanded: "",
                                        type: {
                                          "is-danger":
                                            _vm.userError.username.length > 0
                                        },
                                        message: _vm.userError.username
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: {
                                          expanded: "",
                                          placeholder: "Enter email"
                                        },
                                        model: {
                                          value: _vm.user.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "username", $$v)
                                          },
                                          expression: "user.username"
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
                            _c("h5", { staticClass: "text-main" }, [
                              _vm._v("Access Level")
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
                                        label: "User Role",
                                        expanded: "",
                                        type: {
                                          "is-danger":
                                            _vm.userError.role.length > 0
                                        },
                                        message: _vm.userError.role
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "block" },
                                        _vm._l(_vm.getRolePermissions, function(
                                          r,
                                          i
                                        ) {
                                          return _c(
                                            "b-checkbox",
                                            {
                                              key: i,
                                              attrs: {
                                                "native-value": r.role,
                                                disabled: r.role === "ESS"
                                              },
                                              model: {
                                                value: _vm.user.role,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.user,
                                                    "role",
                                                    $$v
                                                  )
                                                },
                                                expression: "user.role"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(r.role) +
                                                  "\n                        "
                                              )
                                            ]
                                          )
                                        }),
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
                                { staticClass: "column is-12" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        label: "Status",
                                        expanded: "",
                                        type: {
                                          "is-danger":
                                            _vm.userError.status.length > 0
                                        },
                                        message: _vm.userError.status
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "block" },
                                        [
                                          _c(
                                            "b-radio",
                                            {
                                              attrs: {
                                                type: "is-info",
                                                name: "status",
                                                "native-value": "1"
                                              },
                                              model: {
                                                value: _vm.user.status,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.user,
                                                    "status",
                                                    $$v
                                                  )
                                                },
                                                expression: "user.status"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                          Enable\n                        "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-radio",
                                            {
                                              attrs: {
                                                type: "is-info",
                                                name: "status",
                                                "native-value": "0"
                                              },
                                              model: {
                                                value: _vm.user.status,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.user,
                                                    "status",
                                                    $$v
                                                  )
                                                },
                                                expression: "user.status"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                          Disable\n                        "
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
                                      disabled: _vm.isSubmitting
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(
                                          _vm.isSubmitting
                                            ? "Submitting..."
                                            : "Add"
                                        ) +
                                        "\n                  "
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
                                        return _vm.closeUserForm()
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
            ),
            _vm._v(" "),
            _c("section", { staticClass: "b__collapse__section" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "header",
                  { staticClass: "card-header", attrs: { role: "button" } },
                  [
                    _c("article", { staticClass: "table__header" }, [
                      _c("h5", { staticClass: "table__header__title" }, [
                        _vm._v("User List")
                      ]),
                      _vm._v(" "),
                      _c("section", { staticClass: "table__header__lists" }, [
                        _c(
                          "div",
                          {
                            staticClass: "table__header__lists__item",
                            on: {
                              click: function($event) {
                                return _vm.openQueryForm()
                              }
                            }
                          },
                          [
                            _c(
                              "b-tooltip",
                              {
                                attrs: {
                                  label: "Query Users.",
                                  type: "is-dark"
                                }
                              },
                              [
                                _c("b-icon", {
                                  staticClass: "icon--wrapper",
                                  attrs: { icon: "search" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _vm.toggleQueryForm
                        ? _c(
                            "section",
                            { staticClass: "b__collapse__section" },
                            [
                              _c(
                                "b-collapse",
                                {
                                  staticClass: "card",
                                  attrs: {
                                    open: _vm.toggleQueryForm,
                                    animation: "slide",
                                    "aria-id": "querystaff"
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
                                                "aria-controls": "querystaff"
                                              }
                                            },
                                            [
                                              _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "card-header-title"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "has-text-info"
                                                    },
                                                    [_vm._v("Query Users")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "card-header-icon"
                                                },
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
                                    2710651610
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("div", { staticClass: "card-content" }, [
                                    _c("div", { staticClass: "content" }, [
                                      _c(
                                        "form",
                                        { attrs: { action: "" } },
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
                                                    {
                                                      attrs: {
                                                        label: "Username",
                                                        expanded: ""
                                                      }
                                                    },
                                                    [
                                                      _c("b-input", {
                                                        attrs: { expanded: "" }
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
                                                        label: "Staff Name",
                                                        expanded: ""
                                                      }
                                                    },
                                                    [
                                                      _c("b-input", {
                                                        attrs: { expanded: "" }
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
                                                        label: "User Role",
                                                        expanded: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "b-select",
                                                        {
                                                          attrs: {
                                                            expanded: ""
                                                          }
                                                        },
                                                        [
                                                          _c("option", [
                                                            _vm._v("Full-Time")
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("option", [
                                                            _vm._v("Part-Time")
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("option", [
                                                            _vm._v("Other")
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
                                                { staticClass: "column is-3" },
                                                [
                                                  _c(
                                                    "b-field",
                                                    {
                                                      attrs: {
                                                        label: "Status",
                                                        expanded: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "b-select",
                                                        {
                                                          attrs: {
                                                            expanded: ""
                                                          }
                                                        },
                                                        [
                                                          _c("option", [
                                                            _vm._v(
                                                              "Current Staff Only"
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("option", [
                                                            _vm._v(
                                                              "Current and Past Staff Only"
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("option", [
                                                            _vm._v(
                                                              "Past Staff Only"
                                                            )
                                                          ])
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
                                          _c("hr"),
                                          _vm._v(" "),
                                          _c(
                                            "b-field",
                                            { staticClass: "buttons" },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass:
                                                    "is-success is-light"
                                                },
                                                [_vm._v("Search")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass:
                                                    "is-danger is-light"
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
                        "section",
                        { staticClass: "py-4 multiples-actions" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                "aria-role": "list",
                                disabled:
                                  _vm.selectedUsers.length > 0 ? false : true
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "trigger",
                                  fn: function(ref) {
                                    var active = ref.active
                                    return [
                                      _c("b-button", {
                                        attrs: {
                                          type: "is-info is-light",
                                          label: "Actions",
                                          pack: "fas",
                                          "icon-right": active
                                            ? "angle-up"
                                            : "angle-down"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  attrs: { "aria-role": "listitem" },
                                  on: {
                                    click: function($event) {
                                      return _vm.openAssignRoleForm()
                                    }
                                  }
                                },
                                [_vm._v("Assign user role")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  attrs: { "aria-role": "listitem" },
                                  on: {
                                    click: function($event) {
                                      return _vm.openAssignStatusForm()
                                    }
                                  }
                                },
                                [_vm._v("Assign account status")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  attrs: { "aria-role": "listitem" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteUsers()
                                    }
                                  }
                                },
                                [_vm._v("Delete users")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("transition", { attrs: { name: "fade" } }, [
                            _vm.showAssignRoleForm &&
                            _vm.selectedUsers.length > 0
                              ? _c(
                                  "form",
                                  { attrs: { action: "" } },
                                  [
                                    _c(
                                      "b-field",
                                      {
                                        attrs: {
                                          label: "Choose Role",
                                          expanded: ""
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "block" },
                                          _vm._l(
                                            _vm.getRolePermissions,
                                            function(r, i) {
                                              return _c(
                                                "b-checkbox",
                                                {
                                                  key: i,
                                                  attrs: {
                                                    "native-value": r.role,
                                                    disabled: r.role === "ESS"
                                                  },
                                                  model: {
                                                    value: _vm.roleData,
                                                    callback: function($$v) {
                                                      _vm.roleData = $$v
                                                    },
                                                    expression: "roleData"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(r.role) +
                                                      "\n                        "
                                                  )
                                                ]
                                              )
                                            }
                                          ),
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-field",
                                      { staticClass: "buttons" },
                                      [
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "is-success is-light",
                                            on: {
                                              click: function($event) {
                                                return _vm.assignUserRole()
                                              }
                                            }
                                          },
                                          [_vm._v("Save")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "is-danger is-light",
                                            on: {
                                              click: function($event) {
                                                return _vm.cancelAssignForm()
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
                            _vm.showAssignStatusForm &&
                            _vm.selectedUsers.length > 0
                              ? _c(
                                  "form",
                                  { attrs: { action: "" } },
                                  [
                                    _c(
                                      "b-field",
                                      {
                                        attrs: {
                                          label: "Choose Status",
                                          expanded: ""
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "block" },
                                          [
                                            _c(
                                              "b-radio",
                                              {
                                                attrs: {
                                                  type: "is-info",
                                                  name: "status",
                                                  "native-value": "1"
                                                },
                                                model: {
                                                  value: _vm.statusData,
                                                  callback: function($$v) {
                                                    _vm.statusData = $$v
                                                  },
                                                  expression: "statusData"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                          Enable\n                        "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-radio",
                                              {
                                                attrs: {
                                                  type: "is-info",
                                                  name: "status",
                                                  "native-value": "0"
                                                },
                                                model: {
                                                  value: _vm.statusData,
                                                  callback: function($$v) {
                                                    _vm.statusData = $$v
                                                  },
                                                  expression: "statusData"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                          Disable\n                        "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-field",
                                      { staticClass: "buttons" },
                                      [
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "is-success is-light",
                                            on: {
                                              click: function($event) {
                                                return _vm.assignUserStatus()
                                              }
                                            }
                                          },
                                          [_vm._v("Save")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "is-danger is-light",
                                            on: {
                                              click: function($event) {
                                                return _vm.cancelAssignForm()
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
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table",
                        {
                          attrs: {
                            data: _vm.getUsers.data,
                            "default-sort-direction": _vm.defaultSortDirection,
                            "sort-icon": _vm.sortIcon,
                            "sort-icon-size": _vm.sortIconSize,
                            "checked-rows": _vm.selectedUsers,
                            loading: _vm.isLoading,
                            checkable: "",
                            striped: "",
                            hoverable: "",
                            "default-sort": "id",
                            "aria-next-label": "Next page",
                            "aria-previous-label": "Previous page",
                            "aria-page-label": "Page",
                            "aria-current-label": "Current page"
                          },
                          on: {
                            "update:checkedRows": function($event) {
                              _vm.selectedUsers = $event
                            },
                            "update:checked-rows": function($event) {
                              _vm.selectedUsers = $event
                            }
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "footer",
                                fn: function() {
                                  return [
                                    _c("paginate", {
                                      attrs: {
                                        state: _vm.getUsers,
                                        dispatch: _vm.dispatchUserAccount
                                      }
                                    })
                                  ]
                                },
                                proxy: true
                              },
                              _vm.noUserFound
                                ? {
                                    key: "empty",
                                    fn: function() {
                                      return [
                                        _c(
                                          "article",
                                          {
                                            staticClass: "table__data__notfound"
                                          },
                                          [
                                            _c("b-icon", {
                                              attrs: {
                                                icon: "database",
                                                pack: "fas"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "strong",
                                              { staticClass: "pt-3" },
                                              [_vm._v("Ooops! No user found.")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    },
                                    proxy: true
                                  }
                                : null
                            ],
                            null,
                            true
                          )
                        },
                        [
                          _c("b-table-column", {
                            staticClass: "is-info",
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
                              field: "username",
                              label: "Username",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [_vm._v(_vm._s(props.row.email))]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "staff_name",
                              label: "Name",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _vm._v(
                                      _vm._s(
                                        (props.row.personal_details.title ||
                                          "") +
                                          " " +
                                          props.row.personal_details.firstName +
                                          " " +
                                          (props.row.personal_details
                                            .middleName || "") +
                                          " " +
                                          props.row.personal_details.lastName
                                      )
                                    )
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "user_role",
                              label: "User Role",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return _vm._l(
                                    JSON.parse(props.row.role),
                                    function(r) {
                                      return _c(
                                        "b-tag",
                                        {
                                          key: r,
                                          staticClass: "mr-1",
                                          attrs: { type: "is-dark" }
                                        },
                                        [_vm._v(_vm._s(r))]
                                      )
                                    }
                                  )
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "status",
                              label: "Status",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "b-tag",
                                      {
                                        attrs: {
                                          type:
                                            (props.row.status === 1
                                              ? "is-success"
                                              : "is-danger") + " is-light"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            props.row.status === 1
                                              ? "Enabled"
                                              : "Disabled"
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
                                              label: "View Profile",
                                              size: "is-small",
                                              type: "is-dark"
                                            }
                                          },
                                          [
                                            _vm.$page.props.authUser.id !==
                                            props.row.id
                                              ? _c(
                                                  "inertia-link",
                                                  {
                                                    attrs: {
                                                      href:
                                                        "/dashboard/ess/" +
                                                        props.row.id +
                                                        "/" +
                                                        props.row.slug,
                                                      "preserve-scroll": ""
                                                    }
                                                  },
                                                  [
                                                    _c("b-button", {
                                                      staticClass: "is-light",
                                                      attrs: {
                                                        size: "is-small",
                                                        pack: "fas",
                                                        "icon-right": "eye"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _c(
                                                  "inertia-link",
                                                  {
                                                    attrs: {
                                                      href: "/dashboard/ess",
                                                      "preserve-scroll": ""
                                                    }
                                                  },
                                                  [
                                                    _c("b-button", {
                                                      staticClass: "is-light",
                                                      attrs: {
                                                        size: "is-small",
                                                        pack: "fas",
                                                        "icon-right": "eye"
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
                                          "b-tooltip",
                                          {
                                            attrs: {
                                              label: "Delete",
                                              size: "is-small",
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
                                                  return _vm.deleteUser(
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
            ])
          ]),
          _c("b-tab-item", { attrs: { label: "Roles & Permissions" } }, [
            _c("section", { staticClass: "b__collapse__section" }, [
              _c("div", { staticClass: "card" }, [
                _c("header", { staticClass: "card-header" }, [
                  _c("article", { staticClass: "table__header" }, [
                    _c("h5", { staticClass: "table__header__title" }, [
                      _vm._v("Roles")
                    ]),
                    _vm._v(" "),
                    _c("section", { staticClass: "table__header__lists" }, [
                      _c(
                        "div",
                        {
                          staticClass: "table__header__lists__item",
                          attrs: { id: "add-new-role" }
                        },
                        [
                          _c(
                            "b-tooltip",
                            {
                              attrs: { label: "Add new role", type: "is-dark" }
                            },
                            [
                              _c("b-icon", {
                                staticClass: "icon--wrapper",
                                attrs: { icon: "plus" }
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
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _c(
                        "b-table",
                        {
                          attrs: {
                            data: ["hphophpo"],
                            paginated: true,
                            "per-page": 100,
                            "current-page": 1,
                            "pagination-simple": true,
                            "pagination-position": "bottom",
                            "default-sort-direction": "desc",
                            "sort-icon": "arrow-up",
                            "sort-icon-size": "is-small",
                            "checked-rows": _vm.checkedRoles,
                            checkable: "",
                            hoverable: "",
                            "default-sort": "id",
                            "aria-next-label": "Next page",
                            "aria-previous-label": "Previous page",
                            "aria-page-label": "Page",
                            "aria-current-label": "Current page"
                          },
                          on: {
                            "update:checkedRows": function($event) {
                              _vm.checkedRoles = $event
                            },
                            "update:checked-rows": function($event) {
                              _vm.checkedRoles = $event
                            }
                          }
                        },
                        [
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                field: "role",
                                label: "Role",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n                  dsjkgfjkaasg\n                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                field: "staff",
                                label: "Staff",
                                sortable: ""
                              }
                            },
                            [
                              _vm._l(["dsdsgds"], function(member, index) {
                                return _c(
                                  "div",
                                  { key: index, staticClass: "role-user" },
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          rounded: "",
                                          size: "",
                                          type: "is-danger is-light"
                                        }
                                      },
                                      [
                                        _c("b-icon", {
                                          attrs: {
                                            icon: "minus",
                                            size: "is-small"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("span", [_vm._v(_vm._s(member))])
                                  ],
                                  1
                                )
                              }),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    rounded: "",
                                    "icon-left": "plus",
                                    size: "",
                                    type: "is-info is-light",
                                    id: "add-staff-" + 546546
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.openAddStaffDropper(546546)
                                    }
                                  }
                                },
                                [_vm._v("Add\n                  ")]
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                field: "permissions",
                                label: "Permissions",
                                sortable: ""
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "block",
                                  staticStyle: { display: "block" }
                                },
                                _vm._l(_vm.permissions, function(p, i) {
                                  return _c(
                                    "b-checkbox",
                                    {
                                      key: i,
                                      attrs: {
                                        "native-value": p.id,
                                        size: "",
                                        type: "is-success"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(p) +
                                          "\n                    "
                                      )
                                    ]
                                  )
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        "icon-left": "file",
                                        rounded: "",
                                        size: "",
                                        type: "is-info is-light"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.savePermissions()
                                        }
                                      }
                                    },
                                    [
                                      _c("span", { ref: "abs" }, [
                                        _vm._v("Save")
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
                            "b-table-column",
                            {
                              attrs: {
                                field: "report-to",
                                label: "Report to",
                                sortable: ""
                              }
                            },
                            [
                              _vm._l(["dsdsgds"], function(member, index) {
                                return _c(
                                  "div",
                                  { key: index, staticClass: "role-user" },
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          rounded: "",
                                          size: "",
                                          type: "is-danger is-light"
                                        }
                                      },
                                      [
                                        _c("b-icon", {
                                          attrs: {
                                            icon: "minus",
                                            size: "is-small"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("span", [_vm._v(_vm._s(member))])
                                  ],
                                  1
                                )
                              }),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    rounded: "",
                                    "icon-left": "plus",
                                    size: "",
                                    type: "is-info is-light",
                                    id: "add-staff-" + 546546
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.openAddStaffDropper(546546)
                                    }
                                  }
                                },
                                [_vm._v("Add\n                  ")]
                              )
                            ],
                            2
                          ),
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
                                              label: "Assign",
                                              size: "is-small",
                                              type: "is-dark"
                                            }
                                          },
                                          [
                                            _c("b-button", {
                                              staticClass: "is-light",
                                              attrs: {
                                                size: "is-small",
                                                pack: "fas",
                                                "icon-right": "user-cog"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.getStaffToAssign(
                                                    props.row.id
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
                                              label: "View Profile",
                                              size: "is-small",
                                              type: "is-dark"
                                            }
                                          },
                                          [
                                            _vm.$page.props.authUser.id !==
                                            props.row.id
                                              ? _c(
                                                  "inertia-link",
                                                  {
                                                    attrs: {
                                                      href:
                                                        "/dashboard/ess/" +
                                                        props.row.id +
                                                        "/" +
                                                        props.row.slug,
                                                      "preserve-scroll": ""
                                                    }
                                                  },
                                                  [
                                                    _c("b-button", {
                                                      staticClass: "is-light",
                                                      attrs: {
                                                        size: "is-small",
                                                        pack: "fas",
                                                        "icon-right": "eye"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _c(
                                                  "inertia-link",
                                                  {
                                                    attrs: {
                                                      href: "/dashboard/ess",
                                                      "preserve-scroll": ""
                                                    }
                                                  },
                                                  [
                                                    _c("b-button", {
                                                      staticClass: "is-light",
                                                      attrs: {
                                                        size: "is-small",
                                                        pack: "fas",
                                                        "icon-right": "eye"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
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
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "roleDropper",
          staticClass: "dropper",
          attrs: { join: "#add-new-role", "z-index": 9999 },
          on: {
            "esc-keydown": _vm.closeRoleDropper,
            "other-area-clicked": _vm.closeRoleDropper
          }
        },
        [
          _c("h5", { staticClass: "text-main py-4" }, [_vm._v("Add New Role")]),
          _vm._v(" "),
          _c(
            "form",
            { staticStyle: { width: "25rem" } },
            [
              _c(
                "b-field",
                [
                  _c("b-input", {
                    staticClass: "is-info",
                    attrs: {
                      placeholder: "Enter new role",
                      type: "text",
                      expanded: ""
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("b-field", { staticClass: "buttons pt-4" }, [
                _c(
                  "button",
                  {
                    staticClass: "button is-success is-light",
                    attrs: { type: "submit", disabled: _vm.isSubmittingRole }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.isSubmittingRole ? "Saving..." : "Save") +
                        "\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "button is-danger is-light",
                    attrs: { type: "button", disabled: _vm.isSubmittingRole },
                    on: {
                      click: function($event) {
                        return _vm.closeRoleDropper()
                      }
                    }
                  },
                  [_vm._v("\n          Cancel\n        ")]
                )
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "addStaffDropper",
          staticClass: "dropper",
          attrs: { join: "#add-staff-" + _vm.getDropperId, "z-index": 9999 },
          on: {
            "esc-keydown": _vm.closeAddStaffDropper,
            "other-area-clicked": _vm.closeAddStaffDropper
          }
        },
        [
          _c("h5", { staticClass: "text-main py-4" }, [
            _vm._v("Add New Staff")
          ]),
          _vm._v(" "),
          _c(
            "form",
            { staticStyle: { width: "25rem" } },
            [
              _c(
                "b-field",
                {
                  staticClass: "expand-input",
                  attrs: {
                    type: {
                      "is-danger": _vm.newStaff.errors.length > 0
                    },
                    message: _vm.newStaff.errors
                  }
                },
                [
                  _c("treeselect", {
                    attrs: {
                      multiple: true,
                      options: _vm.getStaff,
                      placeholder: "Select staff..."
                    },
                    model: {
                      value: _vm.newStaff.value,
                      callback: function($$v) {
                        _vm.$set(_vm.newStaff, "value", $$v)
                      },
                      expression: "newStaff.value"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("b-field", { staticClass: "buttons pt-4" }, [
                _c(
                  "button",
                  {
                    staticClass: "button is-success is-light",
                    attrs: { type: "submit", disabled: _vm.isSubmittingRole }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.isSubmittingRole ? "Saving..." : "Save") +
                        "\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "button is-danger is-light",
                    attrs: { type: "button", disabled: _vm.isSubmittingRole },
                    on: {
                      click: function($event) {
                        return _vm.closeRoleDropper()
                      }
                    }
                  },
                  [_vm._v("\n          Cancel\n        ")]
                )
              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/OrganizationComponent.vue?vue&type=template&id=b08483a2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/OrganizationComponent.vue?vue&type=template&id=b08483a2&scoped=true& ***!
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
    "section",
    [
      _c(
        "b-tabs",
        {
          attrs: { type: "is-toggle", size: "", animated: false, expanded: "" }
        },
        [
          _c("b-tab-item", { attrs: { label: "Organization Metadata" } }, [
            _c(
              "section",
              { staticClass: "b__collapse__section" },
              [
                _c(
                  "b-collapse",
                  {
                    staticClass: "card",
                    attrs: { animation: "slide", "aria-id": "addreason" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "card-header",
                        attrs: { role: "button", "aria-controls": "addreason" }
                      },
                      [
                        _c("p", { staticClass: "card-header-title" }, [
                          _vm._v("Metadata")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-content" }, [
                      _c("div", { staticClass: "content" }, [
                        _c("div", { staticClass: "columns" }, [
                          _c("div", { staticClass: "column is-3" }, [
                            _c(
                              "div",
                              { staticClass: "brand-logo-container" },
                              [
                                _c(
                                  "div",
                                  {
                                    class:
                                      "brand-logo-overlay " +
                                      (_vm.isUploadingBrandLogo
                                        ? "show-brand-logo-overlay"
                                        : "hide-brand-logo-overlay")
                                  },
                                  [
                                    _c("p", { staticClass: "text-withe" }, [
                                      _vm._v("Uploading...")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "brand-logo" }, [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        "/storage/logo/" +
                                        _vm.getOrganizationProfile.logo,
                                      alt: "Brand Logo"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-field",
                                  {
                                    attrs: {
                                      type: {
                                        "is-danger":
                                          _vm.brandLogoError.length > 0
                                      },
                                      message: _vm.brandLogoError
                                    }
                                  },
                                  [
                                    _c(
                                      "b-field",
                                      {
                                        staticClass: "file is-info is-light",
                                        class: { "has-name": !!_vm.brandLogo }
                                      },
                                      [
                                        _c(
                                          "b-upload",
                                          {
                                            staticClass: "file-label",
                                            attrs: {
                                              rounded: "",
                                              disabled: _vm.isUploadingBrandLogo
                                            },
                                            model: {
                                              value: _vm.brandLogo,
                                              callback: function($$v) {
                                                _vm.brandLogo = $$v
                                              },
                                              expression: "brandLogo"
                                            }
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "file-cta" },
                                              [
                                                _c("b-icon", {
                                                  staticClass: "file-icon",
                                                  attrs: { icon: "upload" }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "file-label" },
                                                  [_vm._v("Upload Logo")]
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
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "column is-9" },
                            [
                              _c(
                                "fieldset",
                                {
                                  attrs: {
                                    disabled: _vm.isEditOrganizationMetadata
                                  }
                                },
                                [
                                  _c(
                                    "form",
                                    {
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.updateOrganizationMetadata()
                                        }
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "columns" }, [
                                        _c(
                                          "div",
                                          { staticClass: "column is-12" },
                                          [
                                            _c(
                                              "h3",
                                              {
                                                staticClass:
                                                  "label text-main is-pulled-right is-size-6"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                            Profile\n                          "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
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
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [
                                                        _vm._v(
                                                          "Organization Name"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c(
                                                      "b-field",
                                                      {
                                                        attrs: {
                                                          type: {
                                                            "is-danger":
                                                              _vm
                                                                .organizationMetadataErrors
                                                                .name.length > 0
                                                          },
                                                          message:
                                                            _vm
                                                              .organizationMetadataErrors
                                                              .name
                                                        }
                                                      },
                                                      [
                                                        _c("b-input", {
                                                          attrs: {
                                                            expanded: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .organizationMetadata
                                                                .name,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.organizationMetadata,
                                                                "name",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "organizationMetadata.name"
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
                                              "div",
                                              { staticClass: "columns" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [_vm._v("Telephone")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c(
                                                      "b-field",
                                                      {
                                                        attrs: {
                                                          type: {
                                                            "is-danger":
                                                              _vm
                                                                .organizationMetadataErrors
                                                                .telephone
                                                                .length > 0
                                                          },
                                                          message:
                                                            _vm
                                                              .organizationMetadataErrors
                                                              .telephone
                                                        }
                                                      },
                                                      [
                                                        _c("b-input", {
                                                          attrs: {
                                                            expanded: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .organizationMetadata
                                                                .telephone,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.organizationMetadata,
                                                                "telephone",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "organizationMetadata.telephone"
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
                                        )
                                      ]),
                                      _vm._v(" "),
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
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [_vm._v("Email")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c(
                                                      "b-field",
                                                      {
                                                        attrs: {
                                                          type: {
                                                            "is-danger":
                                                              _vm
                                                                .organizationMetadataErrors
                                                                .email.length >
                                                              0
                                                          },
                                                          message:
                                                            _vm
                                                              .organizationMetadataErrors
                                                              .email
                                                        }
                                                      },
                                                      [
                                                        _c("b-input", {
                                                          attrs: {
                                                            expanded: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .organizationMetadata
                                                                .email,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.organizationMetadata,
                                                                "email",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "organizationMetadata.email"
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
                                              "div",
                                              { staticClass: "columns" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [_vm._v("Address")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c(
                                                      "b-field",
                                                      {
                                                        attrs: {
                                                          type: {
                                                            "is-danger":
                                                              _vm
                                                                .organizationMetadataErrors
                                                                .address
                                                                .length > 0
                                                          },
                                                          message:
                                                            _vm
                                                              .organizationMetadataErrors
                                                              .address
                                                        }
                                                      },
                                                      [
                                                        _c("b-input", {
                                                          attrs: {
                                                            expanded: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .organizationMetadata
                                                                .address,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.organizationMetadata,
                                                                "address",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "organizationMetadata.address"
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
                                        )
                                      ]),
                                      _vm._v(" "),
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
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [_vm._v("City")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c(
                                                      "b-field",
                                                      {
                                                        attrs: {
                                                          type: {
                                                            "is-danger":
                                                              _vm
                                                                .organizationMetadataErrors
                                                                .city.length > 0
                                                          },
                                                          message:
                                                            _vm
                                                              .organizationMetadataErrors
                                                              .city
                                                        }
                                                      },
                                                      [
                                                        _c("b-input", {
                                                          attrs: {
                                                            expanded: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .organizationMetadata
                                                                .city,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.organizationMetadata,
                                                                "city",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "organizationMetadata.city"
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
                                              "div",
                                              { staticClass: "columns" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [_vm._v("Landmark")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c(
                                                      "b-field",
                                                      {
                                                        attrs: {
                                                          type: {
                                                            "is-danger":
                                                              _vm
                                                                .organizationMetadataErrors
                                                                .landmark
                                                                .length > 0
                                                          },
                                                          message:
                                                            _vm
                                                              .organizationMetadataErrors
                                                              .landmark
                                                        }
                                                      },
                                                      [
                                                        _c("b-input", {
                                                          attrs: {
                                                            expanded: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .organizationMetadata
                                                                .landmark,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.organizationMetadata,
                                                                "landmark",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "organizationMetadata.landmark"
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
                                        )
                                      ]),
                                      _vm._v(" "),
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
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [
                                                        _vm._v(
                                                          "Municipal/District"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c(
                                                      "b-field",
                                                      {
                                                        attrs: {
                                                          type: {
                                                            "is-danger":
                                                              _vm
                                                                .organizationMetadataErrors
                                                                .district
                                                                .length > 0
                                                          },
                                                          message:
                                                            _vm
                                                              .organizationMetadataErrors
                                                              .district
                                                        }
                                                      },
                                                      [
                                                        _c("b-input", {
                                                          attrs: {
                                                            expanded: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .organizationMetadata
                                                                .district,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.organizationMetadata,
                                                                "district",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "organizationMetadata.district"
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
                                              "div",
                                              { staticClass: "columns" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [_vm._v("Region")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c(
                                                      "b-field",
                                                      {
                                                        attrs: {
                                                          type: {
                                                            "is-danger":
                                                              _vm
                                                                .organizationMetadataErrors
                                                                .region.length >
                                                              0
                                                          },
                                                          message:
                                                            _vm
                                                              .organizationMetadataErrors
                                                              .region
                                                        }
                                                      },
                                                      [
                                                        _c("b-input", {
                                                          attrs: {
                                                            expanded: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .organizationMetadata
                                                                .region,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.organizationMetadata,
                                                                "region",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "organizationMetadata.region"
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
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "columns" }, [
                                        _c(
                                          "div",
                                          { staticClass: "column is-12" },
                                          [
                                            _c(
                                              "h3",
                                              {
                                                staticClass:
                                                  "label text-main is-pulled-right is-size-6"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                            Business Details\n                          "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
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
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [
                                                        _vm._v(
                                                          "Registration Number"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c(
                                                      "b-field",
                                                      {
                                                        attrs: {
                                                          type: {
                                                            "is-danger":
                                                              _vm
                                                                .organizationMetadataErrors
                                                                .regNumber
                                                                .length > 0
                                                          },
                                                          message:
                                                            _vm
                                                              .organizationMetadataErrors
                                                              .regNumber
                                                        }
                                                      },
                                                      [
                                                        _c("b-input", {
                                                          attrs: {
                                                            expanded: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .organizationMetadata
                                                                .regNumber,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.organizationMetadata,
                                                                "regNumber",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "organizationMetadata.regNumber"
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
                                              "div",
                                              { staticClass: "columns" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [_vm._v("TIN")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c(
                                                      "b-field",
                                                      {
                                                        attrs: {
                                                          type: {
                                                            "is-danger":
                                                              _vm
                                                                .organizationMetadataErrors
                                                                .tin.length > 0
                                                          },
                                                          message:
                                                            _vm
                                                              .organizationMetadataErrors
                                                              .tin
                                                        }
                                                      },
                                                      [
                                                        _c("b-input", {
                                                          attrs: {
                                                            expanded: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .organizationMetadata
                                                                .tin,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.organizationMetadata,
                                                                "tin",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "organizationMetadata.tin"
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
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "columns" }, [
                                        _c(
                                          "div",
                                          { staticClass: "column is-12" },
                                          [
                                            _c(
                                              "h3",
                                              {
                                                staticClass:
                                                  "label text-main is-pulled-right is-size-6"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                            Staff Details\n                          "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
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
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [_vm._v("Current Staff")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c("b-input", {
                                                      attrs: {
                                                        expanded: "",
                                                        disabled: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm
                                                            .organizationMetadata
                                                            .currentStaff,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.organizationMetadata,
                                                            "currentStaff",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "organizationMetadata.currentStaff"
                                                      }
                                                    })
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
                                              "div",
                                              { staticClass: "columns" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [_vm._v("Past Staff")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c("b-input", {
                                                      attrs: {
                                                        expanded: "",
                                                        disabled: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm
                                                            .organizationMetadata
                                                            .pastStaff,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.organizationMetadata,
                                                            "pastStaff",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "organizationMetadata.pastStaff"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
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
                                                  {
                                                    staticClass: "column is-4"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      { staticClass: "label" },
                                                      [_vm._v("Total Staff")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "column is-8"
                                                  },
                                                  [
                                                    _c("b-input", {
                                                      attrs: {
                                                        expanded: "",
                                                        disabled: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm
                                                            .organizationMetadata
                                                            .totalStaff,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.organizationMetadata,
                                                            "totalStaff",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "organizationMetadata.totalStaff"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("hr"),
                                      _vm._v(" "),
                                      !_vm.isEditOrganizationMetadata
                                        ? _c(
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
                                                      _vm.isSubmittingMetadata
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        _vm.isSubmittingMetadata
                                                          ? "Saving..."
                                                          : "Save"
                                                      ) +
                                                      "\n                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "button is-danger is-light",
                                                  attrs: {
                                                    type: "button",
                                                    disabled:
                                                      _vm.isSubmittingMetadata
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.cancelOrganizationMetaData()
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                          Cancel\n                        "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.isEditOrganizationMetadata
                                ? _c(
                                    "b-field",
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "is-info is-light",
                                          attrs: {
                                            "icon-pack": "fas",
                                            "icon-left": "pen"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.isEditOrganizationMetadata = !_vm.isEditOrganizationMetadata
                                            }
                                          }
                                        },
                                        [_vm._v("Edit Metadata")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("b-tab-item", { attrs: { label: "Branches" } }, [
            _c(
              "section",
              { staticClass: "b__collapse__section" },
              [
                _c(
                  "b-collapse",
                  {
                    staticClass: "card",
                    attrs: { animation: "slide", "aria-id": "addreason" },
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
                                "aria-controls": "addreason"
                              }
                            },
                            [
                              _c(
                                "p",
                                { staticClass: "card-header-title" },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      type: "is-info",
                                      pack: "fas",
                                      icon: "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "has-text-info" }, [
                                    _vm._v("Add New Branch")
                                  ])
                                ],
                                1
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
                    ]),
                    model: {
                      value: _vm.toggleAddOrganizationBranch,
                      callback: function($$v) {
                        _vm.toggleAddOrganizationBranch = $$v
                      },
                      expression: "toggleAddOrganizationBranch"
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
                                return _vm.addOrganizationBranch()
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "columns" }, [
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Branch Name")
                                ])
                              ]),
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
                                            _vm.organizationBranchErrors.name
                                              .length > 0
                                        },
                                        message:
                                          _vm.organizationBranchErrors.name
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value: _vm.organizationBranch.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.organizationBranch,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression: "organizationBranch.name"
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
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("City")
                                ])
                              ]),
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
                                            _vm.organizationBranchErrors.city
                                              .length > 0
                                        },
                                        message:
                                          _vm.organizationBranchErrors.city
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value: _vm.organizationBranch.city,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.organizationBranch,
                                              "city",
                                              $$v
                                            )
                                          },
                                          expression: "organizationBranch.city"
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
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Telephone")
                                ])
                              ]),
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
                                            _vm.organizationBranchErrors
                                              .telephone.length > 0
                                        },
                                        message:
                                          _vm.organizationBranchErrors.telephone
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value:
                                            _vm.organizationBranch.telephone,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.organizationBranch,
                                              "telephone",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "organizationBranch.telephone"
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
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Landmark/Location")
                                ])
                              ]),
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
                                            _vm.organizationBranchErrors
                                              .landmark.length > 0
                                        },
                                        message:
                                          _vm.organizationBranchErrors.landmark
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value:
                                            _vm.organizationBranch.landmark,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.organizationBranch,
                                              "landmark",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "organizationBranch.landmark"
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
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Official Email")
                                ])
                              ]),
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
                                            _vm.organizationBranchErrors.email
                                              .length > 0
                                        },
                                        message:
                                          _vm.organizationBranchErrors.email
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value: _vm.organizationBranch.email,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.organizationBranch,
                                              "email",
                                              $$v
                                            )
                                          },
                                          expression: "organizationBranch.email"
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
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Postal Address")
                                ])
                              ]),
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
                                            _vm.organizationBranchErrors.address
                                              .length > 0
                                        },
                                        message:
                                          _vm.organizationBranchErrors.address
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value: _vm.organizationBranch.address,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.organizationBranch,
                                              "address",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "organizationBranch.address"
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
                                      disabled: _vm.isSubmittingNewBranch
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(
                                          _vm.isSubmittingNewBranch
                                            ? "Submitting..."
                                            : "Add"
                                        ) +
                                        "\n                  "
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
                                        return _vm.cancelAddOrganizationBranch()
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
            ),
            _vm._v(" "),
            _c("section", { staticClass: "b__collapse__section" }, [
              _c("div", { staticClass: "card" }, [
                _c("header", { staticClass: "card-header" }, [
                  _c("article", { staticClass: "table__header" }, [
                    _c("h5", { staticClass: "table__header__title" }, [
                      _vm._v("Branches")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _c(
                        "section",
                        { staticClass: "py-4 multiples-actions" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                "aria-role": "list",
                                disabled:
                                  _vm.checkedBranches.length > 0 ? false : true
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "trigger",
                                  fn: function(ref) {
                                    var active = ref.active
                                    return [
                                      _c("b-button", {
                                        attrs: {
                                          type: "is-info is-light",
                                          label: "Actions",
                                          pack: "fas",
                                          "icon-right": active
                                            ? "angle-up"
                                            : "angle-down"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  attrs: { "aria-role": "listitem" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteBranches()
                                    }
                                  }
                                },
                                [_vm._v("Delete branches")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table",
                        {
                          attrs: {
                            data: _vm.getBranches,
                            paginated: _vm.isPaginated,
                            "per-page": _vm.perPage,
                            "current-page": _vm.currentPage,
                            "pagination-simple": _vm.isPaginationSimple,
                            "pagination-position": _vm.paginationPosition,
                            "default-sort-direction": _vm.defaultSortDirection,
                            "sort-icon": _vm.sortIcon,
                            "sort-icon-size": _vm.sortIconSize,
                            "checked-rows": _vm.checkedBranches,
                            checkable: "",
                            striped: "",
                            hoverable: "",
                            "default-sort": "id",
                            "aria-next-label": "Next page",
                            "aria-previous-label": "Previous page",
                            "aria-page-label": "Page",
                            "aria-current-label": "Current page"
                          },
                          on: {
                            "update:checkedRows": function($event) {
                              _vm.checkedBranches = $event
                            },
                            "update:checked-rows": function($event) {
                              _vm.checkedBranches = $event
                            }
                          }
                        },
                        [
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
                          _c("b-table-column", {
                            attrs: {
                              field: "city",
                              label: "City",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [_vm._v(_vm._s(props.row.city))]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "landmark",
                              label: "Landmark",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [_vm._v(_vm._s(props.row.landmark))]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "phone",
                              label: "Phone",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [_vm._v(_vm._s(props.row.telephone))]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "email",
                              label: "Email",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [_vm._v(_vm._s(props.row.email))]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "address",
                              label: "Address",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [_vm._v(_vm._s(props.row.address))]
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
                                              label: "Edit",
                                              size: "is-small",
                                              type: "is-dark"
                                            }
                                          },
                                          [
                                            _c("b-button", {
                                              staticClass: "is-info is-light",
                                              attrs: {
                                                size: "is-small",
                                                pack: "fas",
                                                "icon-right": "pen"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.getBranchToEdit(
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
                                              size: "is-small",
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
                                                  return _vm.deleteBranch(
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
            ])
          ]),
          _vm._v(" "),
          _c("b-tab-item", { attrs: { label: "Departments" } }, [
            _c(
              "section",
              { staticClass: "b__collapse__section" },
              [
                _c(
                  "b-collapse",
                  {
                    staticClass: "card",
                    attrs: { animation: "slide", "aria-id": "addreason" },
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
                                "aria-controls": "addreason"
                              }
                            },
                            [
                              _c(
                                "p",
                                { staticClass: "card-header-title" },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      type: "is-info",
                                      pack: "fas",
                                      icon: "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "has-text-info" }, [
                                    _vm._v("Add New Department")
                                  ])
                                ],
                                1
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
                    ]),
                    model: {
                      value: _vm.toggleAddOrganizationDepartment,
                      callback: function($$v) {
                        _vm.toggleAddOrganizationDepartment = $$v
                      },
                      expression: "toggleAddOrganizationDepartment"
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
                                return _vm.addOrganizationDepartment()
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "columns" }, [
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Department Name")
                                ])
                              ]),
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
                                            _vm.organizationDepartmentErrors
                                              .name.length > 0
                                        },
                                        message:
                                          _vm.organizationDepartmentErrors.name
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value:
                                            _vm.organizationDepartment.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.organizationDepartment,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "organizationDepartment.name"
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
                                      disabled: _vm.isSubmittingNewDepartment
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(
                                          _vm.isSubmittingNewDepartment
                                            ? "Submitting..."
                                            : "Add"
                                        ) +
                                        "\n                  "
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
                                        return _vm.cancelAddOrganizationDepartment()
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
            ),
            _vm._v(" "),
            _c("section", { staticClass: "b__collapse__section" }, [
              _c("div", { staticClass: "card" }, [
                _c("header", { staticClass: "card-header" }, [
                  _c("article", { staticClass: "table__header" }, [
                    _c("h5", { staticClass: "table__header__title" }, [
                      _vm._v("Departments")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _c(
                        "section",
                        { staticClass: "py-4 multiples-actions" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                "aria-role": "list",
                                disabled:
                                  _vm.checkedDepartments.length > 0
                                    ? false
                                    : true
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "trigger",
                                  fn: function(ref) {
                                    var active = ref.active
                                    return [
                                      _c("b-button", {
                                        attrs: {
                                          type: "is-info is-light",
                                          label: "Actions",
                                          pack: "fas",
                                          "icon-right": active
                                            ? "angle-up"
                                            : "angle-down"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  attrs: { "aria-role": "listitem" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteDepartments()
                                    }
                                  }
                                },
                                [_vm._v("Delete departments")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table",
                        {
                          attrs: {
                            data: _vm.getDepartments,
                            paginated: _vm.isPaginated,
                            "per-page": _vm.perPage,
                            "current-page": _vm.currentPage,
                            "pagination-simple": _vm.isPaginationSimple,
                            "pagination-position": _vm.paginationPosition,
                            "default-sort-direction": _vm.defaultSortDirection,
                            "sort-icon": _vm.sortIcon,
                            "sort-icon-size": _vm.sortIconSize,
                            "checked-rows": _vm.checkedDepartments,
                            checkable: "",
                            striped: "",
                            hoverable: "",
                            "default-sort": "id",
                            "aria-next-label": "Next page",
                            "aria-previous-label": "Previous page",
                            "aria-page-label": "Page",
                            "aria-current-label": "Current page"
                          },
                          on: {
                            "update:checkedRows": function($event) {
                              _vm.checkedDepartments = $event
                            },
                            "update:checked-rows": function($event) {
                              _vm.checkedDepartments = $event
                            }
                          }
                        },
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
                                              label: "Edit",
                                              size: "is-small",
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
                                                  "department-id" +
                                                  props.row.id.toString()
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.openDepartmentDropper(
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
                                              size: "is-small",
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
                                                  return _vm.deleteDepartment(
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
            ])
          ]),
          _vm._v(" "),
          _c("b-tab-item", { attrs: { label: "Leadership" } }, [
            _c(
              "section",
              { staticClass: "b__collapse__section" },
              [
                _c(
                  "b-collapse",
                  {
                    staticClass: "card",
                    attrs: { animation: "slide", "aria-id": "addreason" },
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
                                "aria-controls": "addreason"
                              }
                            },
                            [
                              _c(
                                "p",
                                { staticClass: "card-header-title" },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      type: "is-info",
                                      pack: "fas",
                                      icon: "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "has-text-info" }, [
                                    _vm._v("Define Organization Positions")
                                  ])
                                ],
                                1
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
                    ]),
                    model: {
                      value: _vm.toggleAddOrganizationLeadership,
                      callback: function($$v) {
                        _vm.toggleAddOrganizationLeadership = $$v
                      },
                      expression: "toggleAddOrganizationLeadership"
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
                                return _vm.addOrganizationPosition()
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "columns" }, [
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Position Name")
                                ])
                              ]),
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
                                            _vm.organizationPositionErrors.name
                                              .length > 0
                                        },
                                        message:
                                          _vm.organizationPositionErrors.name
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value: _vm.organizationPosition.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.organizationPosition,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "organizationPosition.name"
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
                                      disabled: _vm.isSubmittingPosition
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(
                                          _vm.isSubmittingPosition
                                            ? "Submitting..."
                                            : "Add"
                                        ) +
                                        "\n                  "
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
                                        return _vm.cancelAddOrganizationPosition()
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
            ),
            _vm._v(" "),
            _c("section", { staticClass: "b__collapse__section" }, [
              _c("div", { staticClass: "card" }, [
                _c("header", { staticClass: "card-header" }, [
                  _c("article", { staticClass: "table__header" }, [
                    _c("h5", { staticClass: "table__header__title" }, [
                      _vm._v("Leader Positions")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _c(
                        "section",
                        { staticClass: "py-4 multiples-actions" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                "aria-role": "list",
                                disabled:
                                  _vm.checkedPositions.length > 0 ? false : true
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "trigger",
                                  fn: function(ref) {
                                    var active = ref.active
                                    return [
                                      _c("b-button", {
                                        attrs: {
                                          type: "is-info is-light",
                                          label: "Actions",
                                          pack: "fas",
                                          "icon-right": active
                                            ? "angle-up"
                                            : "angle-down"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  attrs: { "aria-role": "listitem" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deletePositions()
                                    }
                                  }
                                },
                                [_vm._v("Delete postions")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table",
                        {
                          attrs: {
                            data: _vm.getPositions,
                            paginated: _vm.isPaginated,
                            "per-page": _vm.perPage,
                            "current-page": _vm.currentPage,
                            "pagination-simple": _vm.isPaginationSimple,
                            "pagination-position": _vm.paginationPosition,
                            "default-sort-direction": _vm.defaultSortDirection,
                            "sort-icon": _vm.sortIcon,
                            "sort-icon-size": _vm.sortIconSize,
                            "checked-rows": _vm.checkedPositions,
                            checkable: "",
                            striped: "",
                            hoverable: "",
                            "default-sort": "id",
                            "aria-next-label": "Next page",
                            "aria-previous-label": "Previous page",
                            "aria-page-label": "Page",
                            "aria-current-label": "Current page"
                          },
                          on: {
                            "update:checkedRows": function($event) {
                              _vm.checkedPositions = $event
                            },
                            "update:checked-rows": function($event) {
                              _vm.checkedPositions = $event
                            }
                          }
                        },
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
                                              label: "Edit",
                                              size: "is-small",
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
                                                  "position-id" +
                                                  props.row.id.toString()
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.openPositionDropper(
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
                                              size: "is-small",
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
                                                  return _vm.deletePosition(
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
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "departmentDropper",
          staticClass: "dropper",
          attrs: { join: "#department-id" + _vm.getDropperId, "z-index": 1000 },
          on: {
            "esc-keydown": _vm.closeDepartmentDropper,
            "other-area-clicked": _vm.closeDepartmentDropper
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateOrganizationDepartment()
                }
              }
            },
            [
              _c(
                "b-field",
                {
                  attrs: {
                    label: "Update department",
                    type: {
                      "is-danger":
                        _vm.organizationDepartmentErrors.name.length > 0
                    },
                    message: _vm.organizationDepartmentErrors.name
                  }
                },
                [
                  _c("b-input", {
                    attrs: { size: "", expanded: "" },
                    model: {
                      value: _vm.organizationDepartment.name,
                      callback: function($$v) {
                        _vm.$set(_vm.organizationDepartment, "name", $$v)
                      },
                      expression: "organizationDepartment.name"
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
                      disabled: _vm.isSubmittingNewDepartment
                    }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.isSubmittingNewDepartment ? "Saving..." : "Save"
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
                      disabled: _vm.isSubmittingNewDepartment
                    },
                    on: {
                      click: function($event) {
                        return _vm.closeDepartmentDropper()
                      }
                    }
                  },
                  [_vm._v("\n          Cancel\n        ")]
                )
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "dropper",
        {
          ref: "positionDropper",
          staticClass: "dropper",
          attrs: {
            join: "#position-id" + _vm.getPositionDropperId,
            "z-index": 1000
          },
          on: {
            "esc-keydown": _vm.closePositionDropper,
            "other-area-clicked": _vm.closePositionDropper
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateOrganizationPosition()
                }
              }
            },
            [
              _c(
                "b-field",
                {
                  attrs: {
                    label: "Update Position",
                    type: {
                      "is-danger":
                        _vm.organizationPositionErrors.name.length > 0
                    },
                    message: _vm.organizationPositionErrors.name
                  }
                },
                [
                  _c("b-input", {
                    attrs: { size: "", expanded: "" },
                    model: {
                      value: _vm.organizationPosition.name,
                      callback: function($$v) {
                        _vm.$set(_vm.organizationPosition, "name", $$v)
                      },
                      expression: "organizationPosition.name"
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
                      disabled: _vm.isSubmittingPosition
                    }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.isSubmittingPosition ? "Saving..." : "Save"
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
                      disabled: _vm.isSubmittingPosition
                    },
                    on: {
                      click: function($event) {
                        return _vm.closePositionDropper()
                      }
                    }
                  },
                  [_vm._v("\n          Cancel\n        ")]
                )
              ])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("b-modal", {
        attrs: {
          "has-modal-card": "",
          "trap-focus": "",
          "destroy-on-hide": false,
          "aria-role": "dialog",
          "aria-label": "Example Modal",
          "aria-modal": "",
          "can-cancel": ["escape"],
          "on-cancel": _vm.cancelAddOrganizationBranch
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(props) {
              return [
                _c(
                  "UpdateBranchModal",
                  _vm._b(
                    { on: { close: props.close } },
                    "UpdateBranchModal",
                    {
                      branchId: _vm.branchId,
                      organizationBranch: _vm.organizationBranch,
                      organizationBranchErrors: _vm.organizationBranchErrors,
                      isSubmittingNewBranch: _vm.isSubmittingNewBranch,
                      cancelAddOrganizationBranch:
                        _vm.cancelAddOrganizationBranch,
                      updateBranch: _vm.updateBranch
                    },
                    false
                  )
                )
              ]
            }
          }
        ]),
        model: {
          value: _vm.isUdateDepartmentModalActive,
          callback: function($$v) {
            _vm.isUdateDepartmentModalActive = $$v
          },
          expression: "isUdateDepartmentModalActive"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/WorkShiftComponent.vue?vue&type=template&id=64888792&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/WorkShiftComponent.vue?vue&type=template&id=64888792&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    "main",
    [
      _c(
        "b-tabs",
        {
          attrs: { type: "is-toggle", size: "", animated: false, expanded: "" }
        },
        [
          _c("b-tab-item", { attrs: { label: "Shifts" } }, [
            _c(
              "section",
              { staticClass: "b__collapse__section" },
              [
                _c(
                  "b-collapse",
                  {
                    staticClass: "card",
                    attrs: { animation: "slide", "aria-id": "addreason" },
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
                                "aria-controls": "addreason"
                              }
                            },
                            [
                              _c(
                                "p",
                                { staticClass: "card-header-title" },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      type: "is-info",
                                      pack: "fas",
                                      icon: "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "has-text-info" }, [
                                    _vm._v(" Add New Add Shift")
                                  ])
                                ],
                                1
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
                    ]),
                    model: {
                      value: _vm.toggleWorkShift,
                      callback: function($$v) {
                        _vm.toggleWorkShift = $$v
                      },
                      expression: "toggleWorkShift"
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
                                return _vm.addWorkShift()
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "columns" }, [
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Shift Name")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "column is-5" },
                                [
                                  _c(
                                    "b-field",
                                    {
                                      attrs: {
                                        type: {
                                          "is-danger":
                                            _vm.workShiftErrors.name.length > 0
                                        },
                                        message: _vm.workShiftErrors.name
                                      }
                                    },
                                    [
                                      _c("b-input", {
                                        attrs: { size: "", expanded: "" },
                                        model: {
                                          value: _vm.workShift.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.workShift, "name", $$v)
                                          },
                                          expression: "workShift.name"
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
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Work Hours")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "column is-5" }, [
                                _c("div", { staticClass: "columns" }, [
                                  _c(
                                    "div",
                                    { staticClass: "column is-4" },
                                    [
                                      _c(
                                        "b-field",
                                        {
                                          attrs: {
                                            label: "From",
                                            type: {
                                              "is-danger":
                                                _vm.workShiftErrors.from
                                                  .length > 0
                                            },
                                            message: _vm.workShiftErrors.from
                                          }
                                        },
                                        [
                                          _c("b-timepicker", {
                                            attrs: {
                                              size: "",
                                              "hour-format": "12",
                                              inline: "",
                                              expanded: ""
                                            },
                                            model: {
                                              value: _vm.workShift.from,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.workShift,
                                                  "from",
                                                  $$v
                                                )
                                              },
                                              expression: "workShift.from"
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
                                            label: "To",
                                            type: {
                                              "is-danger":
                                                _vm.workShiftErrors.to.length >
                                                0
                                            },
                                            message: _vm.workShiftErrors.to
                                          }
                                        },
                                        [
                                          _c("b-timepicker", {
                                            attrs: {
                                              size: "",
                                              "hour-format": "12",
                                              inline: ""
                                            },
                                            model: {
                                              value: _vm.workShift.to,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.workShift,
                                                  "to",
                                                  $$v
                                                )
                                              },
                                              expression: "workShift.to"
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
                                            label: "Duration",
                                            type: {
                                              "is-danger":
                                                _vm.workShiftErrors.duration
                                                  .length > 0
                                            },
                                            message:
                                              _vm.workShiftErrors.duration
                                          }
                                        },
                                        [
                                          _c("div", { staticClass: "card" }, [
                                            _c(
                                              "div",
                                              { staticClass: "card-content" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "content" },
                                                  [
                                                    _vm._v(
                                                      "\n                                " +
                                                        _vm._s(
                                                          _vm.workShift.duration
                                                        ) +
                                                        "\n                              "
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "columns" }, [
                              _c("div", { staticClass: "column is-2" }, [
                                _c("label", { staticClass: "label" }, [
                                  _vm._v("Week Definition")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "column is-5" }, [
                                _c("div", { staticClass: "columns" }, [
                                  _c("div", { staticClass: "column is-12" }, [
                                    _c(
                                      "div",
                                      { staticClass: "workshift__card" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "workshift__card__header"
                                          },
                                          [
                                            _c("strong", [_vm._v("Days")]),
                                            _vm._v(" "),
                                            _vm.workShiftErrors.days.length > 0
                                              ? _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "has-text-danger"
                                                  },
                                                  _vm._l(
                                                    _vm.workShiftErrors.days,
                                                    function(e, i) {
                                                      return _c(
                                                        "span",
                                                        { key: i },
                                                        [_vm._v(_vm._s(e))]
                                                      )
                                                    }
                                                  ),
                                                  0
                                                )
                                              : _vm._e()
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "workshift__card__content"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "checkbox__lists"
                                              },
                                              _vm._l(
                                                _vm.weekDefinitions,
                                                function(day) {
                                                  return _c(
                                                    "div",
                                                    {
                                                      key: day,
                                                      staticClass:
                                                        "checkbox__lists__list"
                                                    },
                                                    [
                                                      _c("label", [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.workShift
                                                                  .days,
                                                              expression:
                                                                "workShift.days"
                                                            }
                                                          ],
                                                          attrs: {
                                                            type: "checkbox"
                                                          },
                                                          domProps: {
                                                            value: day,
                                                            checked: Array.isArray(
                                                              _vm.workShift.days
                                                            )
                                                              ? _vm._i(
                                                                  _vm.workShift
                                                                    .days,
                                                                  day
                                                                ) > -1
                                                              : _vm.workShift
                                                                  .days
                                                          },
                                                          on: {
                                                            change: function(
                                                              $event
                                                            ) {
                                                              var $$a =
                                                                  _vm.workShift
                                                                    .days,
                                                                $$el =
                                                                  $event.target,
                                                                $$c = $$el.checked
                                                                  ? true
                                                                  : false
                                                              if (
                                                                Array.isArray(
                                                                  $$a
                                                                )
                                                              ) {
                                                                var $$v = day,
                                                                  $$i = _vm._i(
                                                                    $$a,
                                                                    $$v
                                                                  )
                                                                if (
                                                                  $$el.checked
                                                                ) {
                                                                  $$i < 0 &&
                                                                    _vm.$set(
                                                                      _vm.workShift,
                                                                      "days",
                                                                      $$a.concat(
                                                                        [$$v]
                                                                      )
                                                                    )
                                                                } else {
                                                                  $$i > -1 &&
                                                                    _vm.$set(
                                                                      _vm.workShift,
                                                                      "days",
                                                                      $$a
                                                                        .slice(
                                                                          0,
                                                                          $$i
                                                                        )
                                                                        .concat(
                                                                          $$a.slice(
                                                                            $$i +
                                                                              1
                                                                          )
                                                                        )
                                                                    )
                                                                }
                                                              } else {
                                                                _vm.$set(
                                                                  _vm.workShift,
                                                                  "days",
                                                                  $$c
                                                                )
                                                              }
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(day) + " "
                                                          )
                                                        ])
                                                      ])
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ])
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
                                  { staticClass: "button is-success is-light" },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(
                                          _vm.isSubmittingWorkShift
                                            ? "Submitting..."
                                            : "Add"
                                        ) +
                                        "\n                  "
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
                                        return _vm.cancelWorkShiftForm()
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
            ),
            _vm._v(" "),
            _c("section", { staticClass: "b__collapse__section" }, [
              _c("div", { staticClass: "card" }, [
                _c("header", { staticClass: "card-header" }, [
                  _c("article", { staticClass: "table__header" }, [
                    _c("h5", { staticClass: "table__header__title" }, [
                      _vm._v("Shift List")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c(
                    "div",
                    { staticClass: "content" },
                    [
                      _c(
                        "section",
                        { staticClass: "py-4 multiples-actions" },
                        [
                          _c(
                            "b-dropdown",
                            {
                              attrs: {
                                "aria-role": "list",
                                disabled:
                                  _vm.selectedWorkShifts.length > 0
                                    ? false
                                    : true
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "trigger",
                                  fn: function(ref) {
                                    var active = ref.active
                                    return [
                                      _c("b-button", {
                                        attrs: {
                                          type: "is-info is-light",
                                          label: "Actions",
                                          pack: "fas",
                                          "icon-right": active
                                            ? "angle-up"
                                            : "angle-down"
                                        }
                                      })
                                    ]
                                  }
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  attrs: { "aria-role": "listitem" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteWorkShifts()
                                    }
                                  }
                                },
                                [_vm._v("Delete shifts")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table",
                        {
                          attrs: {
                            data: _vm.getWorkShifts,
                            paginated: _vm.isPaginated,
                            "per-page": _vm.perPage,
                            "current-page": _vm.currentPage,
                            "pagination-simple": _vm.isPaginationSimple,
                            "pagination-position": _vm.paginationPosition,
                            "default-sort-direction": _vm.defaultSortDirection,
                            "sort-icon": _vm.sortIcon,
                            "sort-icon-size": _vm.sortIconSize,
                            checkable: "",
                            hoverable: "",
                            "checked-rows": _vm.selectedWorkShifts,
                            "default-sort": "id",
                            "aria-next-label": "Next page",
                            "aria-previous-label": "Previous page",
                            "aria-page-label": "Page",
                            "aria-current-label": "Current page"
                          },
                          on: {
                            "update:checkedRows": function($event) {
                              _vm.selectedWorkShifts = $event
                            },
                            "update:checked-rows": function($event) {
                              _vm.selectedWorkShifts = $event
                            }
                          }
                        },
                        [
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
                          _c("b-table-column", {
                            attrs: {
                              field: "from",
                              label: "From",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _vm._v(
                                      _vm._s(_vm.formatTime(props.row.from))
                                    )
                                  ]
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
                                  return [
                                    _vm._v(_vm._s(_vm.formatTime(props.row.to)))
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "hours",
                              label: "Hours",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [_vm._v(_vm._s(props.row.duration))]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: {
                              field: "days",
                              label: "Days",
                              sortable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(props.row.days.join(" | ")) +
                                        "\n                "
                                    )
                                  ]
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
                                              label: "Edit",
                                              type: " is-dark"
                                            }
                                          },
                                          [
                                            _c("b-button", {
                                              staticClass: "is-info is-light",
                                              attrs: {
                                                size: "is-small",
                                                pack: "fas",
                                                "icon-right": "pen",
                                                id: "shift-id" + props.row.id
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.setShiftToEdit(
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
                                              type: " is-dark"
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
                                                  return _vm.deleteWorkShift(
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
            ])
          ]),
          _vm._v(" "),
          _c("b-tab-item", { attrs: { label: "Shift Rotation" } })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=template&id=d059739e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=template&id=d059739e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.updateBranch(_vm.branchId)
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-card py-4", staticStyle: { width: "50rem" } },
        [
          _c("header", { staticClass: "modal-card-head" }, [
            _c("h4", { staticClass: "modal-card-title text-main label pt-2" }, [
              _vm._v("Update branch")
            ]),
            _vm._v(" "),
            _c("button", {
              staticClass: "delete",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.cancelModal()
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("section", { staticClass: "modal-card-body" }, [
            _c("div", { staticClass: "columns" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column is-9" },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger":
                            _vm.organizationBranchErrors.name.length > 0
                        },
                        message: _vm.organizationBranchErrors.name
                      }
                    },
                    [
                      _c("b-input", {
                        attrs: { size: "", expanded: "" },
                        model: {
                          value: _vm.organizationBranch.name,
                          callback: function($$v) {
                            _vm.$set(_vm.organizationBranch, "name", $$v)
                          },
                          expression: "organizationBranch.name"
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
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column is-9" },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger":
                            _vm.organizationBranchErrors.city.length > 0
                        },
                        message: _vm.organizationBranchErrors.city
                      }
                    },
                    [
                      _c("b-input", {
                        attrs: { size: "", expanded: "" },
                        model: {
                          value: _vm.organizationBranch.city,
                          callback: function($$v) {
                            _vm.$set(_vm.organizationBranch, "city", $$v)
                          },
                          expression: "organizationBranch.city"
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
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column is-9" },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger":
                            _vm.organizationBranchErrors.telephone.length > 0
                        },
                        message: _vm.organizationBranchErrors.telephone
                      }
                    },
                    [
                      _c("b-input", {
                        attrs: { size: "", expanded: "" },
                        model: {
                          value: _vm.organizationBranch.telephone,
                          callback: function($$v) {
                            _vm.$set(_vm.organizationBranch, "telephone", $$v)
                          },
                          expression: "organizationBranch.telephone"
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
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column is-9" },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger":
                            _vm.organizationBranchErrors.landmark.length > 0
                        },
                        message: _vm.organizationBranchErrors.landmark
                      }
                    },
                    [
                      _c("b-input", {
                        attrs: { size: "", expanded: "" },
                        model: {
                          value: _vm.organizationBranch.landmark,
                          callback: function($$v) {
                            _vm.$set(_vm.organizationBranch, "landmark", $$v)
                          },
                          expression: "organizationBranch.landmark"
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
              _vm._m(4),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column is-9" },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger":
                            _vm.organizationBranchErrors.email.length > 0
                        },
                        message: _vm.organizationBranchErrors.email
                      }
                    },
                    [
                      _c("b-input", {
                        attrs: { size: "", expanded: "" },
                        model: {
                          value: _vm.organizationBranch.email,
                          callback: function($$v) {
                            _vm.$set(_vm.organizationBranch, "email", $$v)
                          },
                          expression: "organizationBranch.email"
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
              _vm._m(5),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column is-9" },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger":
                            _vm.organizationBranchErrors.address.length > 0
                        },
                        message: _vm.organizationBranchErrors.address
                      }
                    },
                    [
                      _c("b-input", {
                        attrs: { size: "", expanded: "" },
                        model: {
                          value: _vm.organizationBranch.address,
                          callback: function($$v) {
                            _vm.$set(_vm.organizationBranch, "address", $$v)
                          },
                          expression: "organizationBranch.address"
                        }
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
            "footer",
            { staticClass: "modal-card-foot buttons" },
            [
              _c(
                "button",
                {
                  staticClass: "button is-success is-light",
                  attrs: { disabled: _vm.isSubmittingNewBranch }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.isSubmittingNewBranch ? "Saving..." : "Save") +
                      "\n      "
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
                      return _vm.cancelModal()
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Branch Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("label", { staticClass: "label" }, [_vm._v("City")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Telephone")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Landmark/Location")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Official Email")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Postal Address")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=template&id=94d66850&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=template&id=94d66850&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.updateJobTitle(_vm.jobId)
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-card py-4", staticStyle: { width: "50rem" } },
        [
          _c("header", { staticClass: "modal-card-head" }, [
            _c("h4", { staticClass: "modal-card-title text-main label pt-2" }, [
              _vm._v("Update job title")
            ]),
            _vm._v(" "),
            _c("button", {
              staticClass: "delete",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.cancelModal()
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("section", { staticClass: "modal-card-body" }, [
            _c("div", { staticClass: "columns" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column is-9" },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger": _vm.jobTitleErrors.category.length > 0
                        },
                        message: _vm.jobTitleErrors.category
                      }
                    },
                    [
                      _c(
                        "b-select",
                        {
                          attrs: { size: "", expanded: "" },
                          model: {
                            value: _vm.jobTitle.category,
                            callback: function($$v) {
                              _vm.$set(_vm.jobTitle, "category", $$v)
                            },
                            expression: "jobTitle.category"
                          }
                        },
                        _vm._l(_vm.getJobCategories, function(cat, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: cat.id } },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(cat.category) +
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
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column is-9" },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger": _vm.jobTitleErrors.title.length > 0
                        },
                        message: _vm.jobTitleErrors.title
                      }
                    },
                    [
                      _c("b-input", {
                        attrs: { size: "", expanded: "" },
                        model: {
                          value: _vm.jobTitle.title,
                          callback: function($$v) {
                            _vm.$set(_vm.jobTitle, "title", $$v)
                          },
                          expression: "jobTitle.title"
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
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column is-9" },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger": _vm.jobTitleErrors.description.length > 0
                        },
                        message: _vm.jobTitleErrors.description
                      }
                    },
                    [
                      _c("b-input", {
                        attrs: {
                          size: "",
                          type: "textarea",
                          placeholder: "Job Description...",
                          expanded: ""
                        },
                        model: {
                          value: _vm.jobTitle.description,
                          callback: function($$v) {
                            _vm.$set(_vm.jobTitle, "description", $$v)
                          },
                          expression: "jobTitle.description"
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
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column is-9" },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        type: {
                          "is-danger":
                            _vm.jobTitleErrors.specification.length > 0
                        },
                        message: _vm.jobTitleErrors.specification
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
                              attrs: { size: "" },
                              model: {
                                value: _vm.jobTitle.specification,
                                callback: function($$v) {
                                  _vm.$set(_vm.jobTitle, "specification", $$v)
                                },
                                expression: "jobTitle.specification"
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "file-cta" },
                                [
                                  _c("b-icon", {
                                    staticClass: "file-icon",
                                    attrs: { icon: "upload", size: "is-small" }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "file-label" }, [
                                    _vm._v("Upload")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.jobTitle.specification
                                ? _c("span", { staticClass: "file-name" }, [
                                    _vm._v(
                                      _vm._s(_vm.jobTitle.specification.name)
                                    )
                                  ])
                                : _vm._e()
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
            ])
          ]),
          _vm._v(" "),
          _c(
            "footer",
            { staticClass: "modal-card-foot buttons" },
            [
              _c(
                "button",
                {
                  staticClass: "button is-success is-light",
                  attrs: { disabled: _vm.isSubmittingJobTitle }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.isSubmittingJobTitle ? "Saving..." : "Save") +
                      "\n      "
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
                      return _vm.cancelModal()
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Job Category")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Job Title")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Job Description")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("label", { staticClass: "label" }, [_vm._v("Job Specification")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=template&id=c3c67ae6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=template&id=c3c67ae6&scoped=true& ***!
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
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.updateWorkShift()
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-card py-4", staticStyle: { width: "700px" } },
        [
          _c("header", { staticClass: "modal-card-head" }, [
            _c("h4", { staticClass: "modal-card-title text-main label pt-2" }, [
              _vm._v("Edit Work Shift")
            ]),
            _vm._v(" "),
            _c("button", {
              staticClass: "delete",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.$emit("close")
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "section",
            { staticClass: "modal-card-body" },
            [
              _c(
                "b-field",
                {
                  attrs: {
                    label: "Shift Name",
                    horizontal: "",
                    type: {
                      "is-danger": _vm.workShiftErrors.name.length > 0
                    },
                    message: _vm.workShiftErrors.name
                  }
                },
                [
                  _c("b-input", {
                    attrs: { size: "", expanded: "" },
                    model: {
                      value: _vm.workShift.name,
                      callback: function($$v) {
                        _vm.$set(_vm.workShift, "name", $$v)
                      },
                      expression: "workShift.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-field",
                { attrs: { label: "Work Hours", horizontal: "" } },
                [
                  _c(
                    "b-field",
                    {
                      attrs: {
                        label: "From",
                        type: {
                          "is-danger": _vm.workShiftErrors.from.length > 0
                        },
                        message: _vm.workShiftErrors.from
                      }
                    },
                    [
                      _c("b-timepicker", {
                        attrs: {
                          size: "",
                          "hour-format": "12",
                          inline: "",
                          expanded: ""
                        },
                        model: {
                          value: _vm.workShift.from,
                          callback: function($$v) {
                            _vm.$set(_vm.workShift, "from", $$v)
                          },
                          expression: "workShift.from"
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
                        label: "To",
                        type: {
                          "is-danger": _vm.workShiftErrors.to.length > 0
                        },
                        message: _vm.workShiftErrors.to
                      }
                    },
                    [
                      _c("b-timepicker", {
                        attrs: { size: "", "hour-format": "12", inline: "" },
                        model: {
                          value: _vm.workShift.to,
                          callback: function($$v) {
                            _vm.$set(_vm.workShift, "to", $$v)
                          },
                          expression: "workShift.to"
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
                        label: "Duration",
                        type: {
                          "is-danger": _vm.workShiftErrors.duration.length > 0
                        },
                        message: _vm.workShiftErrors.duration
                      }
                    },
                    [
                      _c("div", { staticClass: "card" }, [
                        _c("div", { staticClass: "card-content" }, [
                          _c("div", { staticClass: "content" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.workShift.duration) +
                                "\n              "
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-field",
                { attrs: { label: "Week Definition", horizontal: "" } },
                [
                  _c("div", { staticClass: "workshift__card" }, [
                    _c("div", { staticClass: "workshift__card__header" }, [
                      _c("strong", [_vm._v("Days")]),
                      _vm._v(" "),
                      _vm.workShiftErrors.days.length > 0
                        ? _c(
                            "p",
                            { staticClass: "has-text-danger" },
                            _vm._l(_vm.workShiftErrors.days, function(e, i) {
                              return _c("span", { key: i }, [_vm._v(_vm._s(e))])
                            }),
                            0
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "workshift__card__content" }, [
                      _c(
                        "div",
                        { staticClass: "checkbox__lists" },
                        _vm._l(_vm.weekDefinitions, function(day) {
                          return _c(
                            "div",
                            { key: day, staticClass: "checkbox__lists__list" },
                            [
                              _c("label", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.workShift.days,
                                      expression: "workShift.days"
                                    }
                                  ],
                                  attrs: { type: "checkbox" },
                                  domProps: {
                                    value: day,
                                    checked: Array.isArray(_vm.workShift.days)
                                      ? _vm._i(_vm.workShift.days, day) > -1
                                      : _vm.workShift.days
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.workShift.days,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = day,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.workShift,
                                              "days",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.workShift,
                                              "days",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.workShift, "days", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", [_vm._v(_vm._s(day) + " ")])
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "footer",
            { staticClass: "modal-card-foot" },
            [
              _c(
                "b-field",
                { staticClass: "buttons" },
                [
                  _c("button", { staticClass: "button is-success is-light" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.isSubmittingWorkShift ? "Saving..." : "Save"
                        ) +
                        "\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "is-danger is-light",
                      on: {
                        click: function($event) {
                          return _vm.cancelWorkShiftForm()
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
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Administration.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Administration.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Administration_vue_vue_type_template_id_32205172___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Administration.vue?vue&type=template&id=32205172& */ "./resources/js/Pages/Administration.vue?vue&type=template&id=32205172&");
/* harmony import */ var _Administration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Administration.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Administration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Administration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Administration_vue_vue_type_template_id_32205172___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Administration_vue_vue_type_template_id_32205172___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Administration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Administration.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Administration.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Administration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Administration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Administration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Administration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Administration.vue?vue&type=template&id=32205172&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Administration.vue?vue&type=template&id=32205172& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Administration_vue_vue_type_template_id_32205172___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Administration.vue?vue&type=template&id=32205172& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Administration.vue?vue&type=template&id=32205172&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Administration_vue_vue_type_template_id_32205172___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Administration_vue_vue_type_template_id_32205172___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Paginate.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Paginate.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paginate_vue_vue_type_template_id_75d45e62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paginate.vue?vue&type=template&id=75d45e62& */ "./resources/js/components/Paginate.vue?vue&type=template&id=75d45e62&");
/* harmony import */ var _Paginate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginate.vue?vue&type=script&lang=js& */ "./resources/js/components/Paginate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Paginate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Paginate_vue_vue_type_template_id_75d45e62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Paginate_vue_vue_type_template_id_75d45e62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Paginate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Paginate.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Paginate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Paginate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Paginate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Paginate.vue?vue&type=template&id=75d45e62&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Paginate.vue?vue&type=template&id=75d45e62& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_template_id_75d45e62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Paginate.vue?vue&type=template&id=75d45e62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Paginate.vue?vue&type=template&id=75d45e62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_template_id_75d45e62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_template_id_75d45e62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/admin/JobComponent.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/JobComponent.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JobComponent_vue_vue_type_template_id_891be3aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JobComponent.vue?vue&type=template&id=891be3aa&scoped=true& */ "./resources/js/components/admin/JobComponent.vue?vue&type=template&id=891be3aa&scoped=true&");
/* harmony import */ var _JobComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/JobComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JobComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JobComponent_vue_vue_type_template_id_891be3aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JobComponent_vue_vue_type_template_id_891be3aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "891be3aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/JobComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/JobComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/JobComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./JobComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/JobComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/JobComponent.vue?vue&type=template&id=891be3aa&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/JobComponent.vue?vue&type=template&id=891be3aa&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobComponent_vue_vue_type_template_id_891be3aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./JobComponent.vue?vue&type=template&id=891be3aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/JobComponent.vue?vue&type=template&id=891be3aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobComponent_vue_vue_type_template_id_891be3aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobComponent_vue_vue_type_template_id_891be3aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/ManageUserComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/ManageUserComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageUserComponent_vue_vue_type_template_id_276c2ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageUserComponent.vue?vue&type=template&id=276c2ef2&scoped=true& */ "./resources/js/components/admin/ManageUserComponent.vue?vue&type=template&id=276c2ef2&scoped=true&");
/* harmony import */ var _ManageUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageUserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/ManageUserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ManageUserComponent_vue_vue_type_style_index_0_id_276c2ef2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true& */ "./resources/js/components/admin/ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ManageUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageUserComponent_vue_vue_type_template_id_276c2ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageUserComponent_vue_vue_type_template_id_276c2ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "276c2ef2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/ManageUserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/ManageUserComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/ManageUserComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageUserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ManageUserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUserComponent_vue_vue_type_style_index_0_id_276c2ef2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ManageUserComponent.vue?vue&type=style&index=0&id=276c2ef2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUserComponent_vue_vue_type_style_index_0_id_276c2ef2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUserComponent_vue_vue_type_style_index_0_id_276c2ef2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUserComponent_vue_vue_type_style_index_0_id_276c2ef2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUserComponent_vue_vue_type_style_index_0_id_276c2ef2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/admin/ManageUserComponent.vue?vue&type=template&id=276c2ef2&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/admin/ManageUserComponent.vue?vue&type=template&id=276c2ef2&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUserComponent_vue_vue_type_template_id_276c2ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageUserComponent.vue?vue&type=template&id=276c2ef2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ManageUserComponent.vue?vue&type=template&id=276c2ef2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUserComponent_vue_vue_type_template_id_276c2ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUserComponent_vue_vue_type_template_id_276c2ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/OrganizationComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/admin/OrganizationComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrganizationComponent_vue_vue_type_template_id_b08483a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrganizationComponent.vue?vue&type=template&id=b08483a2&scoped=true& */ "./resources/js/components/admin/OrganizationComponent.vue?vue&type=template&id=b08483a2&scoped=true&");
/* harmony import */ var _OrganizationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrganizationComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/OrganizationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OrganizationComponent_vue_vue_type_style_index_0_id_b08483a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true& */ "./resources/js/components/admin/OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrganizationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrganizationComponent_vue_vue_type_template_id_b08483a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrganizationComponent_vue_vue_type_template_id_b08483a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b08483a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/OrganizationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/OrganizationComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/OrganizationComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrganizationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/OrganizationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationComponent_vue_vue_type_style_index_0_id_b08483a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/OrganizationComponent.vue?vue&type=style&index=0&id=b08483a2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationComponent_vue_vue_type_style_index_0_id_b08483a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationComponent_vue_vue_type_style_index_0_id_b08483a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationComponent_vue_vue_type_style_index_0_id_b08483a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationComponent_vue_vue_type_style_index_0_id_b08483a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/admin/OrganizationComponent.vue?vue&type=template&id=b08483a2&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/admin/OrganizationComponent.vue?vue&type=template&id=b08483a2&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationComponent_vue_vue_type_template_id_b08483a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrganizationComponent.vue?vue&type=template&id=b08483a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/OrganizationComponent.vue?vue&type=template&id=b08483a2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationComponent_vue_vue_type_template_id_b08483a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganizationComponent_vue_vue_type_template_id_b08483a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/WorkShiftComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/admin/WorkShiftComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkShiftComponent_vue_vue_type_template_id_64888792_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkShiftComponent.vue?vue&type=template&id=64888792&scoped=true& */ "./resources/js/components/admin/WorkShiftComponent.vue?vue&type=template&id=64888792&scoped=true&");
/* harmony import */ var _WorkShiftComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkShiftComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/WorkShiftComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WorkShiftComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkShiftComponent_vue_vue_type_template_id_64888792_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WorkShiftComponent_vue_vue_type_template_id_64888792_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64888792",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/WorkShiftComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/WorkShiftComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/WorkShiftComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkShiftComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkShiftComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/WorkShiftComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkShiftComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/WorkShiftComponent.vue?vue&type=template&id=64888792&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/admin/WorkShiftComponent.vue?vue&type=template&id=64888792&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkShiftComponent_vue_vue_type_template_id_64888792_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkShiftComponent.vue?vue&type=template&id=64888792&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/WorkShiftComponent.vue?vue&type=template&id=64888792&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkShiftComponent_vue_vue_type_template_id_64888792_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkShiftComponent_vue_vue_type_template_id_64888792_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/organization/UpdateBranchModal.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/admin/organization/UpdateBranchModal.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateBranchModal_vue_vue_type_template_id_d059739e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateBranchModal.vue?vue&type=template&id=d059739e&scoped=true& */ "./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=template&id=d059739e&scoped=true&");
/* harmony import */ var _UpdateBranchModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateBranchModal.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateBranchModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateBranchModal_vue_vue_type_template_id_d059739e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateBranchModal_vue_vue_type_template_id_d059739e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d059739e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/organization/UpdateBranchModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBranchModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateBranchModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBranchModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=template&id=d059739e&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=template&id=d059739e&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBranchModal_vue_vue_type_template_id_d059739e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateBranchModal.vue?vue&type=template&id=d059739e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/organization/UpdateBranchModal.vue?vue&type=template&id=d059739e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBranchModal_vue_vue_type_template_id_d059739e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBranchModal_vue_vue_type_template_id_d059739e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/organization/UpdateJobTitleModal.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/admin/organization/UpdateJobTitleModal.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateJobTitleModal_vue_vue_type_template_id_94d66850_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateJobTitleModal.vue?vue&type=template&id=94d66850&scoped=true& */ "./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=template&id=94d66850&scoped=true&");
/* harmony import */ var _UpdateJobTitleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateJobTitleModal.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateJobTitleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateJobTitleModal_vue_vue_type_template_id_94d66850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateJobTitleModal_vue_vue_type_template_id_94d66850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "94d66850",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/organization/UpdateJobTitleModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateJobTitleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateJobTitleModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateJobTitleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=template&id=94d66850&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=template&id=94d66850&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateJobTitleModal_vue_vue_type_template_id_94d66850_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateJobTitleModal.vue?vue&type=template&id=94d66850&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/organization/UpdateJobTitleModal.vue?vue&type=template&id=94d66850&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateJobTitleModal_vue_vue_type_template_id_94d66850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateJobTitleModal_vue_vue_type_template_id_94d66850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/shift/EditShiftModal.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/admin/shift/EditShiftModal.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditShiftModal_vue_vue_type_template_id_c3c67ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditShiftModal.vue?vue&type=template&id=c3c67ae6&scoped=true& */ "./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=template&id=c3c67ae6&scoped=true&");
/* harmony import */ var _EditShiftModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditShiftModal.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditShiftModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditShiftModal_vue_vue_type_template_id_c3c67ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditShiftModal_vue_vue_type_template_id_c3c67ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c3c67ae6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/shift/EditShiftModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShiftModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditShiftModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShiftModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=template&id=c3c67ae6&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=template&id=c3c67ae6&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShiftModal_vue_vue_type_template_id_c3c67ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditShiftModal.vue?vue&type=template&id=c3c67ae6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/shift/EditShiftModal.vue?vue&type=template&id=c3c67ae6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShiftModal_vue_vue_type_template_id_c3c67ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShiftModal_vue_vue_type_template_id_c3c67ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);