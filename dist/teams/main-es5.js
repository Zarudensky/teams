(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app/main/main.component */
      "./src/app/main/main.component.ts");
      /* harmony import */


      var _app_players_players_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app/players/players.component */
      "./src/app/players/players.component.ts");

      var routes = [{
        path: '',
        component: _app_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
      }, {
        path: 'players',
        component: _app_players_players_component__WEBPACK_IMPORTED_MODULE_3__["PlayersComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(firestore) {
          _classCallCheck(this, AppComponent);

          this.items = firestore.collection('items').valueChanges();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [[1, "app"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 100px);\n  max-width: 800px;\n  padding: 50px 50px;\n}\n\n@media screen and (max-width: 560px) {\n  .app[_ngcontent-%COMP%] {\n    width: calc(100% - 40px);\n    padding: 40px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxrQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgcGFkZGluZzogNTBweCA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuYXBwIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xuICB9XG59XG5cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main/main.component */
      "./src/app/main/main.component.ts");
      /* harmony import */


      var _players_players_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./players/players.component */
      "./src/app/players/players.component.ts");
      /* harmony import */


      var _teams_teams_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./teams/teams.component */
      "./src/app/teams/teams.component.ts");
      /* harmony import */


      var _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./filter/filter.component */
      "./src/app/filter/filter.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-mat-select-search */
      "./node_modules/ngx-mat-select-search/__ivy_ngcc__/fesm2015/ngx-mat-select-search.js");
      /* harmony import */


      var _teams_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./teams.service */
      "./src/app/teams.service.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_teams_service__WEBPACK_IMPORTED_MODULE_15__["TeamsService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_14__["NgxMatSelectSearchModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _players_players_component__WEBPACK_IMPORTED_MODULE_5__["PlayersComponent"], _teams_teams_component__WEBPACK_IMPORTED_MODULE_6__["TeamsComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_14__["NgxMatSelectSearchModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _players_players_component__WEBPACK_IMPORTED_MODULE_5__["PlayersComponent"], _teams_teams_component__WEBPACK_IMPORTED_MODULE_6__["TeamsComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_14__["NgxMatSelectSearchModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase)],
            providers: [_teams_service__WEBPACK_IMPORTED_MODULE_15__["TeamsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/demo-data.ts":
    /*!******************************!*\
      !*** ./src/app/demo-data.ts ***!
      \******************************/

    /*! exports provided: PLAYERS */

    /***/
    function srcAppDemoDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PLAYERS", function () {
        return PLAYERS;
      });

      var PLAYERS = [{
        id: 'p1',
        name: 'Stas',
        surname: 'Zarudensky',
        isSelected: false
      }, {
        id: 'p2',
        name: 'Dima',
        surname: 'Zarudensky',
        isSelected: false
      }, {
        id: 'p3',
        name: 'Alex',
        surname: 'Chernokun',
        isSelected: false
      }, {
        id: 'p4',
        name: 'Player_D',
        surname: 'Player_D',
        isSelected: false
      }, {
        id: 'p5',
        name: 'Player_E',
        surname: 'Player_E',
        isSelected: false
      }, {
        id: 'p6',
        name: 'Player_F',
        surname: 'Player_F',
        isSelected: false
      }, {
        id: 'p7',
        name: 'Player_G',
        surname: 'Player_G',
        isSelected: false
      }, {
        id: 'p8',
        name: 'Player_H',
        surname: 'Player_H',
        isSelected: false
      }, {
        id: 'p9',
        name: 'Player_I',
        surname: 'Player_I',
        isSelected: false
      }, {
        id: 'p10',
        name: 'Player_J',
        surname: 'Player_J',
        isSelected: false
      }, {
        id: 'p11',
        name: 'Player_K',
        surname: 'Player_K',
        isSelected: false
      }, {
        id: 'p12',
        name: 'Player_L',
        surname: 'Player_L',
        isSelected: false
      }, {
        id: 'p13',
        name: 'Player_M',
        surname: 'Player_M',
        isSelected: false
      }, {
        id: 'p14',
        name: 'Player_N',
        surname: 'Player_N',
        isSelected: false
      }, {
        id: 'p15',
        name: 'Player_O',
        surname: 'Player_O',
        isSelected: false
      }, {
        id: 'p16',
        name: 'Player_P',
        surname: 'Player_P',
        isSelected: false
      }, {
        id: 'p17',
        name: 'Player_R',
        surname: 'Player_R',
        isSelected: false
      }, {
        id: 'p18',
        name: 'Player_S',
        surname: 'Player_S',
        isSelected: false
      }, {
        id: 'p19',
        name: 'Player_T',
        surname: 'Player_T',
        isSelected: false
      }, {
        id: 'p20',
        name: 'Player_U',
        surname: 'Player_U',
        isSelected: false
      }];
      /***/
    },

    /***/
    "./src/app/filter/filter.component.ts":
    /*!********************************************!*\
      !*** ./src/app/filter/filter.component.ts ***!
      \********************************************/

    /*! exports provided: FilterComponent */

    /***/
    function srcAppFilterFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterComponent", function () {
        return FilterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app/teams.service */
      "./src/app/teams.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-mat-select-search */
      "./node_modules/ngx-mat-select-search/__ivy_ngcc__/fesm2015/ngx-mat-select-search.js");

      var _c0 = ["multiSelect"];

      function FilterComponent_div_0_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var player_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r4.name);
        }
      }

      function FilterComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterComponent_div_0_span_1_Template, 4, 1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.playersCtrl == null ? null : ctx_r0.playersCtrl.value);
        }
      }

      function FilterComponent_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var player_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", player_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r5.name, " ");
        }
      }

      var FilterComponent = /*#__PURE__*/function () {
        function FilterComponent(teamsService) {
          _classCallCheck(this, FilterComponent);

          this.teamsService = teamsService;
          /** list of players */

          this.players = this.teamsService.players;
          /** control for the selected player for multi-selection */

          this.playersCtrl = this.teamsService.playersCtrl;
          /** control for the MatSelect filter keyword multi-selection */

          this.playersFilterCtrl = this.teamsService.playersFilterCtrl;
          /** list of players filtered by search keyword */

          this.filteredPlayers = this.teamsService.filteredPlayers;
          /** Subject that emits when the component has been destroyed. */

          this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(FilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // set initial selection
            // this.playersCtrl.setValue([this.players[10], this.players[11], this.players[12]]);
            // load the initial player list
            this.filteredPlayers.next(this.players.slice()); // listen for search field value changes

            this.playersFilterCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy)).subscribe(function () {
              _this.filterPlayers();
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.setInitialValue();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._onDestroy.next();

            this._onDestroy.complete();
          }
          /**
           * Sets the initial value after the filteredPlayers are loaded initially
           */

        }, {
          key: "setInitialValue",
          value: function setInitialValue() {
            this.filteredPlayers.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy)).subscribe(function () {// setting the compareWith property to a comparison function
              // triggers initializing the selection according to the initial value of
              // the form control (i.e. _initializeSelection())
              // this needs to be done after the filteredPlayers are loaded initially
              // and after the mat-option elements are available
              // this.multiSelect.compareWith = (a: Player, b: Player) => a && b && a.id === b.id;
            });
          }
        }, {
          key: "filterPlayers",
          value: function filterPlayers() {
            if (!this.players) {
              return;
            } // get the search keyword


            var search = this.playersFilterCtrl.value;

            if (!search) {
              this.filteredPlayers.next(this.players.slice());
              return;
            } else {
              search = search.toLowerCase();
            } // filter the players


            this.filteredPlayers.next(this.players.filter(function (player) {
              return player.name.toLowerCase().indexOf(search) > -1;
            }));
          }
        }, {
          key: "onCloseOptions",
          value: function onCloseOptions() {
            this.multiSelect.close();
          }
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.playersCtrl.reset();
          }
        }, {
          key: "closedChangeSelect",
          value: function closedChangeSelect(value) {
            this.openedOrClosedSelect = value;

            if (!value && this.playersCtrl.value) {
              if (this.playersCtrl.value.length > 0) {
                this.teamsService.generateTeemsService();
              }
            }
          }
        }]);

        return FilterComponent;
      }();

      FilterComponent.ɵfac = function FilterComponent_Factory(t) {
        return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"]));
      };

      FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterComponent,
        selectors: [["app-filter"]],
        viewQuery: function FilterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiSelect = _t.first);
          }
        },
        decls: 13,
        vars: 8,
        consts: [["class", "selected__players", 4, "ngIf"], ["panelClass", "example-long-panel", "placeholder", "Players", 3, "formControl", "multiple", "openedChange"], ["multiSelect", ""], ["mat-icon-button", "", 1, "btn", "btn__home", 3, "click"], ["color", "primary"], ["placeholderLabel", "Find player...", "noEntriesFoundLabel", "No matching player found", "disableInitialFocus", "false", "preventHomeEndKeyPropagation", "false", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 1, "btn", "btn__clear", 3, "disabled", "click"], [1, "selected__players"], [4, "ngFor", "ngForOf"], [3, "value"]],
        template: function FilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FilterComponent_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function FilterComponent_Template_mat_select_openedChange_2_listener($event) {
              return ctx.closedChangeSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_4_listener() {
              return ctx.onCloseOptions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngx-mat-select-search", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FilterComponent_mat_option_9_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_11_listener() {
              return ctx.onResetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Clear\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openedOrClosedSelect);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.playersCtrl)("multiple", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.playersFilterCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx.filteredPlayers));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playersCtrl.value || ctx.playersCtrl.value.length === 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__["MatSelectSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.selected__players[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  left: 40px;\n  right: 0;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.selected__players[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn__home[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 4px;\n  width: 35px;\n  height: 35px;\n  line-height: 10px;\n  border-radius: 50%;\n  z-index: 999;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 900px) {\n    .cdk-overlay-pane {\n    top: 65px !important;\n    left: 25px !important;\n    transform: none !important;\n  }\n\n    .mat-select-panel.example-long-panel {\n    min-width: calc(100% + 50px) !important;\n    max-height: 380px;\n  }\n}\n\n@media screen and (max-width: 560px) {\n    .cdk-overlay-pane {\n    top: 55px !important;\n    left: 10px !important;\n  }\n\n    .mat-select-panel.example-long-panel {\n    min-width: calc(100% + 20px) !important;\n  }\n\n  .btn__clear.mat-button[_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSxxQkFBQTtJQUNBLDBCQUFBO0VBQ0Y7O0VBRUE7SUFDRSx1Q0FBQTtJQUNBLGlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSxxQkFBQTtFQUFGOztFQUdBO0lBQ0UsdUNBQUE7RUFBRjs7RUFHQTtJQUNFLGlCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uc2VsZWN0ZWRfX3BsYXllcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogNDBweDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2VsZWN0ZWRfX3BsYXllcnMgOmxhc3QtY2hpbGQgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuX19ob21lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogNHB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICB0b3A6IDY1cHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC1wYW5lbC5leGFtcGxlLWxvbmctcGFuZWwgeyBcbiAgICBtaW4td2lkdGg6IGNhbGMoMTAwJSArIDUwcHgpICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMzgwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICB0b3A6IDU1cHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC1wYW5lbC5leGFtcGxlLWxvbmctcGFuZWwgeyBcbiAgICBtaW4td2lkdGg6IGNhbGMoMTAwJSArIDIwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG5fX2NsZWFyLm1hdC1idXR0b24ge1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-filter',
            templateUrl: './filter.component.html',
            styleUrls: ['./filter.component.scss']
          }]
        }], function () {
          return [{
            type: _app_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"]
          }];
        }, {
          multiSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['multiSelect']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/main/main.component.ts":
    /*!****************************************!*\
      !*** ./src/app/main/main.component.ts ***!
      \****************************************/

    /*! exports provided: MainComponent */

    /***/
    function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../filter/filter.component */
      "./src/app/filter/filter.component.ts");
      /* harmony import */


      var _teams_teams_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../teams/teams.component */
      "./src/app/teams/teams.component.ts");

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent() {
          _classCallCheck(this, MainComponent);
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)();
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 3,
        vars: 0,
        consts: [[1, "main"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-teams");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"], _teams_teams_component__WEBPACK_IMPORTED_MODULE_2__["TeamsComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/players/players.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/players/players.component.ts ***!
      \**********************************************/

    /*! exports provided: PlayersComponent */

    /***/
    function srcAppPlayersPlayersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayersComponent", function () {
        return PlayersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../app/teams.service */
      "./src/app/teams.service.ts");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var PlayersComponent = /*#__PURE__*/function () {
        function PlayersComponent(teamsService, firestore) {
          _classCallCheck(this, PlayersComponent);

          this.teamsService = teamsService;
          this.items = firestore.collection('items').valueChanges();
        }

        _createClass(PlayersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.teamsService.getUsers(); // .subscribe(result => {
            //   this.items = result;
            // })
          }
        }]);

        return PlayersComponent;
      }();

      PlayersComponent.ɵfac = function PlayersComponent_Factory(t) {
        return new (t || PlayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
      };

      PlayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PlayersComponent,
        selectors: [["app-players"]],
        decls: 4,
        vars: 0,
        consts: [[1, "test__btn"]],
        template: function PlayersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "players works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllcnMvcGxheWVycy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-players',
            templateUrl: './players.component.html',
            styleUrls: ['./players.component.scss']
          }]
        }], function () {
          return [{
            type: _app_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/teams.service.ts":
    /*!**********************************!*\
      !*** ./src/app/teams.service.ts ***!
      \**********************************/

    /*! exports provided: TeamsService */

    /***/
    function srcAppTeamsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamsService", function () {
        return TeamsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _demo_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./demo-data */
      "./src/app/demo-data.ts"); // import { firebase } from '@firebase/app';
      // import '@firebase/database';


      var TeamsService = /*#__PURE__*/function () {
        function TeamsService() {
          _classCallCheck(this, TeamsService);

          // public database = firebase.database();
          // public reference = firebase.database().ref('players');
          // public docRef = db.collection("players").doc("SF");
          this.ganereteTeams = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.playersCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.playersFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.players = _demo_data__WEBPACK_IMPORTED_MODULE_3__["PLAYERS"];
          this.filteredPlayers = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
          this.selectedPlayers = [];
        }

        _createClass(TeamsService, [{
          key: "generateTeemsService",
          value: function generateTeemsService() {
            this.ganereteTeams.next();
          }
        }, {
          key: "onDeletePlayerService",
          value: function onDeletePlayerService(index, selectedPlayers) {
            this.selectedPlayers = selectedPlayers;
            this.selectedPlayers.splice(index, 1);
            this.playersCtrl.reset();
            this.playersCtrl.patchValue(this.selectedPlayers);
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            console.log('getUsers'); // console.log(this.database);
            // console.log(this.reference);
            // return new Promise<any>((resolve, reject) => {
            //   this.afs.collection('/players').snapshotChanges()
            //   .subscribe(snapshots => {
            //     resolve(snapshots)
            //   })
            // })
          }
        }]);

        return TeamsService;
      }();

      TeamsService.ɵfac = function TeamsService_Factory(t) {
        return new (t || TeamsService)();
      };

      TeamsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TeamsService,
        factory: TeamsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/teams/teams.component.ts":
    /*!******************************************!*\
      !*** ./src/app/teams/teams.component.ts ***!
      \******************************************/

    /*! exports provided: TeamsComponent */

    /***/
    function srcAppTeamsTeamsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamsComponent", function () {
        return TeamsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../app/teams.service */
      "./src/app/teams.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function TeamsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamsComponent_div_2_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onDeletePlayer(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var player_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", player_r1.name, " ", player_r1.surname, " ");
        }
      }

      var TeamsComponent = /*#__PURE__*/function () {
        function TeamsComponent(teamsService) {
          _classCallCheck(this, TeamsComponent);

          this.teamsService = teamsService;
          this.playersCtrl = this.teamsService.playersCtrl;
        }

        _createClass(TeamsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.teamsService.ganereteTeams.subscribe(function () {
              console.log('ganereteTeams - TeamsComponent');
              console.log(_this2.playersCtrl.value);
            });
          }
        }, {
          key: "onDeletePlayer",
          value: function onDeletePlayer(index) {
            var selectedPlayers = this.playersCtrl.value;
            this.teamsService.onDeletePlayerService(index, selectedPlayers);
          }
        }]);

        return TeamsComponent;
      }();

      TeamsComponent.ɵfac = function TeamsComponent_Factory(t) {
        return new (t || TeamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"]));
      };

      TeamsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TeamsComponent,
        selectors: [["app-teams"]],
        decls: 3,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "btn", "btn__delete", 3, "click"]],
        template: function TeamsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selected Players:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamsComponent_div_2_Template, 6, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playersCtrl == null ? null : ctx.playersCtrl.value);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        styles: [".btn__delete[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.btn__delete[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvdGVhbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90ZWFtcy90ZWFtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5fX2RlbGV0ZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-teams',
            templateUrl: './teams.component.html',
            styleUrls: ['./teams.component.scss']
          }]
        }], function () {
          return [{
            type: _app_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyCA6D-uC_WJlk3tRkZDPIzuPGos-dyKBUY",
          authDomain: "teams-d98f6.firebaseapp.com",
          databaseURL: "https://teams-d98f6-default-rtdb.firebaseio.com",
          projectId: "teams-d98f6",
          storageBucket: "teams-d98f6.appspot.com",
          messagingSenderId: "277595646270",
          appId: "1:277595646270:web:3104ce915cb7a1cecce46f"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/staszarudensky/Desktop/work/teams/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map