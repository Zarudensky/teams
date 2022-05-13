(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+npA":
/*!***********************************************!*\
  !*** ./src/app/main/teams/teams.component.ts ***!
  \***********************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ "o9EK");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/players.service */ "0NdQ");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/teams.service */ "Pzqt");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../spinner/spinner.component */ "CZqF");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team/team.component */ "MzZM");
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ "pj/B");














function TeamsComponent_app_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-spinner");
} }
function TeamsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "teams.info.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, "teams.info.description"));
} }
function TeamsComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamsComponent_div_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.onEditTeams(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "teams.edit"), " ");
} }
function TeamsComponent_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamsComponent_div_3_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.onSaveTeams(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "teams.save"), " ");
} }
function TeamsComponent_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamsComponent_div_3_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.onDivideTeams(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " II ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, "teams.divide.two"));
} }
function TeamsComponent_div_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamsComponent_div_3_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.onDivideTeams(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " III ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, "teams.divide.three"));
} }
function TeamsComponent_div_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamsComponent_div_3_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.onDivideTeams(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " IV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, "teams.divide.four"));
} }
function TeamsComponent_div_3_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamsComponent_div_3_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r24.deleteAllSelectedPlayers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "teams.clear"), " ");
} }
function TeamsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TeamsComponent_div_3_button_1_Template, 3, 3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TeamsComponent_div_3_button_2_Template, 3, 3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TeamsComponent_div_3_button_3_Template, 3, 3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TeamsComponent_div_3_button_4_Template, 3, 3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TeamsComponent_div_3_button_5_Template, 3, 3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TeamsComponent_div_3_button_6_Template, 3, 3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.selectedPlayers == null ? null : ctx_r2.selectedPlayers.length) >= 1 && !ctx_r2.editState);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.selectedPlayers == null ? null : ctx_r2.selectedPlayers.length) >= 1 && ctx_r2.editState);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.editState && (ctx_r2.selectedPlayers == null ? null : ctx_r2.selectedPlayers.length) >= 6 && ctx_r2.numberOfTeams === 3 || ctx_r2.editState && (ctx_r2.selectedPlayers == null ? null : ctx_r2.selectedPlayers.length) >= 6 && ctx_r2.numberOfTeams === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.editState && (ctx_r2.selectedPlayers == null ? null : ctx_r2.selectedPlayers.length) >= 12 && ctx_r2.numberOfTeams === 2 || ctx_r2.editState && (ctx_r2.selectedPlayers == null ? null : ctx_r2.selectedPlayers.length) >= 12 && ctx_r2.numberOfTeams === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.editState && ctx_r2.selectedPlayers.length >= 12 && ctx_r2.numberOfTeams === 2 || ctx_r2.editState && ctx_r2.selectedPlayers.length >= 12 && ctx_r2.numberOfTeams === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.selectedPlayers == null ? null : ctx_r2.selectedPlayers.length) >= 1);
} }
function TeamsComponent_div_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "teams.message.first"), " ");
} }
function TeamsComponent_div_4_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "teams.message.second"), " ");
} }
function TeamsComponent_div_4_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "teams.message.third"), " ");
} }
function TeamsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TeamsComponent_div_4_p_1_Template, 3, 3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TeamsComponent_div_4_p_2_Template, 3, 3, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TeamsComponent_div_4_p_3_Template, 3, 3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r3.selectedPlayers == null ? null : ctx_r3.selectedPlayers.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r3.selectedPlayers == null ? null : ctx_r3.selectedPlayers.length) >= 1 && (ctx_r3.selectedPlayers == null ? null : ctx_r3.selectedPlayers.length) <= 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r3.selectedPlayers == null ? null : ctx_r3.selectedPlayers.length) >= 6);
} }
function TeamsComponent_div_5_ng_container_1_app_team_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-team", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function TeamsComponent_div_5_ng_container_1_app_team_1_Template_app_team_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r33.drop($event); })("addNewPlayer", function TeamsComponent_div_5_ng_container_1_app_team_1_Template_app_team_addNewPlayer_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r35.addNewPlayerTeam(); })("selectListPlayer", function TeamsComponent_div_5_ng_container_1_app_team_1_Template_app_team_selectListPlayer_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r36.selectListPlayerTeam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const team_r30 = ctx_r37.$implicit;
    const i_r31 = ctx_r37.index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", team_r30)("team", team_r30)("editState", ctx_r32.editState)("indexTeam", i_r31);
} }
function TeamsComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TeamsComponent_div_5_ng_container_1_app_team_1_Template, 1, 4, "app-team", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const team_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", team_r30.length >= 1);
} }
function TeamsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TeamsComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListGroupDisabled", !ctx_r4.editState);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.teams);
} }
function TeamsComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "teams.save.descr"), " ");
} }
function TeamsComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamsComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.onGenereteTeams(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "teams.generete"), " ");
} }
const _c0 = function () { return ["viber", "telegram", "facebook", "twitter", "linkedin", "messenger", "whatsapp", "sms", "email", "copy", "print"]; };
function TeamsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "share-buttons", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 7, "teams.share"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("theme", "circles-dark")("include", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0))("show", 2)("size", 1)("url", ctx_r7.currentUrl)("autoSetMeta", false);
} }
var SearchState;
(function (SearchState) {
    SearchState["Ready"] = "READY";
    SearchState["Search"] = "SEARCH";
})(SearchState || (SearchState = {}));
class TeamsComponent {
    constructor(playersService, teamsService, authService, activatedRoute, router, location, translateService) {
        this.playersService = playersService;
        this.teamsService = teamsService;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.translateService = translateService;
        this.selectedPlayers = [];
    }
    ngOnInit() {
        this.editState = false;
        this.manualEditState = false;
        this.searchState = SearchState.Search;
        this.visibleOldTeams();
        this.teamsService.changeSearchStateToReady.subscribe(() => {
            this.searchState = SearchState.Ready;
        });
        this.teamsService.genereteTeams.subscribe(() => {
            this.countNewTeams();
            this.genereteTeams();
            this.editState = true;
            this.manualEditState = false;
        });
        this.teamsService.deletePlayerTeams.subscribe((player) => {
            this.deletePlayerTeams(player);
        });
        this.teamsService.setOnePlayerTeam.subscribe((player) => {
            this.setPlayerTeam(player);
            this.manualEditState = true;
            this.teamsService.teamIndex = null;
        });
        this.getParamUrl();
    }
    genereteTeams() {
        this.clearOldTeams();
        this.filteredPlayersPosition();
        this.addPlayersToTeamsByLevel(this.defensePlayers);
        this.addPlayersToTeamsByLevel(this.universalPlayers);
        this.addPlayersToTeamsByLevel(this.attackingPlayers);
        this.correctedTeamsByNumberOf();
        this.correctedTeamsByNumberOf();
        this.correctedTeamsByLevel();
        this.correctedTeamsByLevel();
        this.visibleTeams();
        this.editState = true;
    }
    visibleOldTeams() {
        this.activatedRoute.queryParams.subscribe(param => {
            this.playersService.selectedPlayers = [];
            this.playersService.getSelectedPlayersService(param.uid);
            this.selectedPlayers = this.playersService.selectedPlayers;
            this.numberOfPlayers = this.selectedPlayers.length;
            this.clearOldTeams();
            this.teamsService.getPlayersTeamService('firstTeam', param.uid);
            this.teamsService.getPlayersTeamService('secondTeam', param.uid);
            this.teamsService.getPlayersTeamService('thirdTeam', param.uid);
            this.teamsService.getPlayersTeamService('fourthTeam', param.uid);
            this.firstTeam = this.teamsService.firstTeam;
            this.secondTeam = this.teamsService.secondTeam;
            this.thirdTeam = this.teamsService.thirdTeam;
            this.fourthTeam = this.teamsService.fourthTeam;
            this.visibleTeams();
        });
    }
    visibleTeams() {
        this.sortPlayersByPosition(this.firstTeam);
        this.sortPlayersByPosition(this.secondTeam);
        this.sortPlayersByPosition(this.thirdTeam);
        this.sortPlayersByPosition(this.fourthTeam);
        this.teams = [
            this.firstTeam,
            this.secondTeam,
            this.thirdTeam,
            this.fourthTeam
        ];
    }
    setTeams() {
        this.teamsService.firstTeam = this.firstTeam;
        this.teamsService.secondTeam = this.secondTeam;
        this.teamsService.thirdTeam = this.thirdTeam;
        this.teamsService.fourthTeam = this.fourthTeam;
        this.teamsService.setTeamService(this.firstTeam, 'firstTeam');
        this.teamsService.setTeamService(this.secondTeam, 'secondTeam');
        this.teamsService.setTeamService(this.thirdTeam, 'thirdTeam');
        this.teamsService.setTeamService(this.fourthTeam, 'fourthTeam');
    }
    countNewTeams() {
        if (this.playersService.selectedPlayers.length >= 1) {
            this.selectedPlayers = this.playersService.selectedPlayers;
            this.numberOfPlayers = this.playersService.selectedPlayers.length;
        }
        switch (true) {
            case this.numberOfPlayers >= 6 && this.numberOfPlayers <= 11:
                this.numberOfTeams = 2;
                break;
            case this.numberOfPlayers >= 12 && this.numberOfPlayers <= 15:
                this.numberOfTeams = 3;
                break;
            case this.numberOfPlayers >= 16:
                this.numberOfTeams = 4;
                break;
            default:
                this.numberOfTeams = 0;
        }
    }
    filteredPlayersPosition() {
        this.defensePlayers = this.selectedPlayers.filter(player => {
            return player.position === 'defense';
        });
        this.universalPlayers = this.selectedPlayers.filter(player => {
            return player.position === 'universal';
        });
        this.attackingPlayers = this.selectedPlayers.filter(player => {
            return player.position === 'attack';
        });
    }
    addPlayersToTeamsByLevel(players) {
        players.forEach(player => {
            this.countLevelTeams();
            if (this.numberOfTeams === 2) {
                switch (true) {
                    case this.firstTeamLevel <= this.secondTeamLevel:
                        this.firstTeam.push(player);
                        break;
                    case this.secondTeamLevel <= this.firstTeamLevel:
                        this.secondTeam.push(player);
                        break;
                    default:
                        this.firstTeam.push(player);
                }
            }
            if (this.numberOfTeams === 3) {
                switch (true) {
                    case this.firstTeamLevel <= this.secondTeamLevel &&
                        this.firstTeamLevel <= this.thirdTeamLevel:
                        this.firstTeam.push(player);
                        break;
                    case this.secondTeamLevel <= this.firstTeamLevel &&
                        this.secondTeamLevel <= this.thirdTeamLevel:
                        this.secondTeam.push(player);
                        break;
                    case this.thirdTeamLevel <= this.firstTeamLevel &&
                        this.thirdTeamLevel <= this.secondTeamLevel:
                        this.thirdTeam.push(player);
                        break;
                    default:
                        this.firstTeam.push(player);
                }
            }
            if (this.numberOfTeams === 4) {
                switch (true) {
                    case this.firstTeamLevel <= this.secondTeamLevel &&
                        this.firstTeamLevel <= this.thirdTeamLevel &&
                        this.firstTeamLevel <= this.fourthTeamLevel:
                        this.firstTeam.push(player);
                        break;
                    case this.secondTeamLevel <= this.firstTeamLevel &&
                        this.secondTeamLevel <= this.thirdTeamLevel &&
                        this.secondTeamLevel <= this.fourthTeamLevel:
                        this.secondTeam.push(player);
                        break;
                    case this.thirdTeamLevel <= this.firstTeamLevel &&
                        this.thirdTeamLevel <= this.secondTeamLevel &&
                        this.thirdTeamLevel <= this.fourthTeamLevel:
                        this.thirdTeam.push(player);
                        break;
                    case this.fourthTeamLevel <= this.firstTeamLevel &&
                        this.fourthTeamLevel <= this.secondTeamLevel &&
                        this.fourthTeamLevel <= this.thirdTeamLevel:
                        this.fourthTeam.push(player);
                        break;
                    default:
                        this.firstTeam.push(player);
                }
            }
        });
    }
    countLevelTeams() {
        this.firstTeamLevel = this.countLevelTeam(this.firstTeam);
        this.secondTeamLevel = this.countLevelTeam(this.secondTeam);
        this.thirdTeamLevel = this.countLevelTeam(this.thirdTeam);
        this.fourthTeamLevel = this.countLevelTeam(this.fourthTeam);
    }
    correctedTeamsByNumberOf() {
        let lengthArr = [];
        let lengthMin;
        let lengthMax;
        if (this.firstTeam.length > 0) {
            lengthArr.push(this.firstTeam.length);
        }
        if (this.secondTeam.length > 0) {
            lengthArr.push(this.secondTeam.length);
        }
        if (this.thirdTeam.length > 0) {
            lengthArr.push(this.thirdTeam.length);
        }
        if (this.fourthTeam.length > 0) {
            lengthArr.push(this.fourthTeam.length);
        }
        lengthMin = Math.min(...lengthArr);
        lengthMax = Math.max(...lengthArr);
        if (lengthMax - lengthMin >= 2) {
            switch (lengthMax) {
                case this.firstTeam.length:
                    this.getRelocatePlayerMin(this.firstTeam);
                    this.firstTeam.splice(this.firstTeam.indexOf(this.relocatedPlayerMin), 1);
                    break;
                case this.secondTeam.length:
                    this.getRelocatePlayerMin(this.secondTeam);
                    this.secondTeam.splice(this.secondTeam.indexOf(this.relocatedPlayerMin), 1);
                    break;
                case this.thirdTeam.length:
                    this.getRelocatePlayerMin(this.thirdTeam);
                    this.thirdTeam.splice(this.thirdTeam.indexOf(this.relocatedPlayerMin), 1);
                    break;
                case this.thirdTeam.length:
                    this.getRelocatePlayerMin(this.thirdTeam);
                    this.fourthTeam.splice(this.fourthTeam.indexOf(this.relocatedPlayerMin), 1);
                    break;
            }
            switch (lengthMin) {
                case this.firstTeam.length:
                    this.firstTeam.push(this.relocatedPlayerMin);
                    break;
                case this.secondTeam.length:
                    this.secondTeam.push(this.relocatedPlayerMin);
                    break;
                case this.thirdTeam.length:
                    this.thirdTeam.push(this.relocatedPlayerMin);
                    break;
                case this.fourthTeam.length:
                    this.fourthTeam.push(this.relocatedPlayerMin);
                    break;
            }
        }
    }
    correctedTeamsByLevel() {
        let levelTeamsArr = [];
        let levelTeamMax;
        let levelTeamMin;
        let indexTeamMax;
        let indexTeamMin;
        this.countLevelTeams();
        if (this.firstTeamLevel > 0) {
            levelTeamsArr.push(this.firstTeamLevel);
        }
        if (this.secondTeamLevel > 0) {
            levelTeamsArr.push(this.secondTeamLevel);
        }
        if (this.thirdTeamLevel > 0) {
            levelTeamsArr.push(this.thirdTeamLevel);
        }
        if (this.fourthTeamLevel > 0) {
            levelTeamsArr.push(this.fourthTeamLevel);
        }
        levelTeamMax = Math.max(...levelTeamsArr);
        levelTeamMin = Math.min(...levelTeamsArr);
        indexTeamMax = levelTeamsArr.indexOf(Math.max(...levelTeamsArr));
        indexTeamMin = levelTeamsArr.indexOf(Math.min(...levelTeamsArr));
        if (levelTeamMax - levelTeamMin >= 150) {
            switch (indexTeamMax) {
                case 0:
                    this.getRelocatePlayerMax(this.firstTeam);
                    this.firstTeam.splice(this.firstTeam.indexOf(this.relocatedPlayerMax), 1);
                    break;
                case 1:
                    this.getRelocatePlayerMax(this.secondTeam);
                    this.secondTeam.splice(this.secondTeam.indexOf(this.relocatedPlayerMax), 1);
                    break;
                case 2:
                    this.getRelocatePlayerMax(this.thirdTeam);
                    this.thirdTeam.splice(this.thirdTeam.indexOf(this.relocatedPlayerMax), 1);
                    break;
                case 3:
                    this.getRelocatePlayerMax(this.fourthTeam);
                    this.fourthTeam.splice(this.fourthTeam.indexOf(this.relocatedPlayerMax), 1);
                    break;
            }
            switch (indexTeamMin) {
                case 0:
                    this.getRelocatePlayerMin(this.firstTeam);
                    this.firstTeam.splice(this.firstTeam.indexOf(this.relocatedPlayerMin), 1);
                    this.firstTeam.push(this.relocatedPlayerMax);
                    break;
                case 1:
                    this.getRelocatePlayerMin(this.secondTeam);
                    this.secondTeam.splice(this.secondTeam.indexOf(this.relocatedPlayerMin), 1);
                    this.secondTeam.push(this.relocatedPlayerMax);
                    break;
                case 2:
                    this.getRelocatePlayerMin(this.thirdTeam);
                    this.thirdTeam.splice(this.thirdTeam.indexOf(this.relocatedPlayerMin), 1);
                    this.thirdTeam.push(this.relocatedPlayerMax);
                    break;
                case 3:
                    this.getRelocatePlayerMin(this.fourthTeam);
                    this.fourthTeam.splice(this.fourthTeam.indexOf(this.relocatedPlayerMin), 1);
                    this.fourthTeam.push(this.relocatedPlayerMax);
                    break;
            }
            switch (indexTeamMax) {
                case 0:
                    this.firstTeam.push(this.relocatedPlayerMin);
                    break;
                case 1:
                    this.secondTeam.push(this.relocatedPlayerMin);
                    break;
                case 2:
                    this.thirdTeam.push(this.relocatedPlayerMin);
                    break;
                case 3:
                    this.fourthTeam.push(this.relocatedPlayerMin);
                    break;
            }
        }
    }
    getRelocatePlayerMax(team) {
        this.relocatedPlayerMax = team.reduce((res, player) => res.level > player.level ? res : player);
    }
    getRelocatePlayerMin(team) {
        this.relocatedPlayerMin = team.reduce((res, player) => player.level < res.level ? player : res);
    }
    countLevelTeam(team) {
        return team.reduce((sum, player) => sum + player.level, 0);
    }
    onDivideTeams(dividedInto) {
        this.numberOfTeams = dividedInto;
        this.genereteTeams();
    }
    clearOldTeams() {
        this.firstTeam = [];
        this.secondTeam = [];
        this.thirdTeam = [];
        this.fourthTeam = [];
        this.teamsService.firstTeam = [];
        this.teamsService.secondTeam = [];
        this.teamsService.thirdTeam = [];
        this.teamsService.fourthTeam = [];
        this.firstTeamLevel = 0;
        this.secondTeamLevel = 0;
        this.thirdTeamLevel = 0;
        this.fourthTeamLevel = 0;
    }
    deleteAllSelectedPlayers() {
        this.numberOfTeams = 0;
        this.selectedPlayers = [];
        this.clearOldTeams();
        this.playersService.deleteSelectedPlayersService();
        this.playersService.deleteAllSelectedPlayersService();
        this.deleteAllTeamsService();
        this.setParamUrl();
    }
    deleteAllTeamsService() {
        this.teamsService.deleteTeamService('firstTeam');
        this.teamsService.deleteTeamService('secondTeam');
        this.teamsService.deleteTeamService('thirdTeam');
        this.teamsService.deleteTeamService('fourthTeam');
    }
    onEditTeams() {
        this.editState = true;
        this.getOldTeams();
    }
    sortPlayersByPosition(team) {
        team.sort((a, b) => {
            if (a.sortPosition < b.sortPosition)
                return -1;
            else if (a.sortPosition > b.sortPosition)
                return 1;
            else
                return 0;
        });
    }
    getOldTeams() {
        this.firstTeam = this.teamsService.firstTeam;
        this.secondTeam = this.teamsService.secondTeam;
        this.thirdTeam = this.teamsService.thirdTeam;
        this.fourthTeam = this.teamsService.fourthTeam;
        this.countOldTeams();
    }
    countOldTeams() {
        switch (true) {
            case this.fourthTeam.length >= 1:
                this.numberOfTeams = 4;
                break;
            case this.thirdTeam.length >= 1:
                this.numberOfTeams = 3;
                break;
            case this.secondTeam.length >= 1:
                this.numberOfTeams = 2;
                break;
            default:
                this.numberOfTeams = 0;
        }
    }
    onSaveTeams() {
        this.teamsService.countTeams = 0;
        this.searchState = SearchState.Search;
        this.playersService.updateSelectedPlayersService();
        this.editState = false;
        this.manualEditState = false;
        this.setParamUrl();
        this.getParamUrl();
        this.setTeams();
    }
    setParamUrl() {
        let userId;
        if (this.authService.admin) {
            userId = null;
        }
        else {
            userId = this.authService.userData.uid;
        }
        const url = this.router.createUrlTree([], {
            queryParams: { uid: userId },
            queryParamsHandling: 'merge'
        }).toString();
        this.location.go(url);
    }
    getParamUrl() {
        this.currentUrl = this.router.url;
    }
    deletePlayerTeams(player) {
        this.teams.forEach(team => {
            const indexPlayer = team.findIndex(item => item.id === player.id);
            if (indexPlayer !== -1) {
                team.splice(indexPlayer, 1);
                this.countNewTeams();
                this.manualEditState = true;
            }
        });
    }
    onGenereteTeams() {
        this.countNewTeams();
        this.genereteTeams();
        this.manualEditState = false;
        this.teamsService.teamIndex = null;
    }
    addNewPlayerTeam() {
        this.createNewPlayer();
        this.playersService.selectedPlayers.push(this.newPlayer);
        this.teamsService.setPlayerAllListService(this.newPlayer);
        this.setPlayerTeam(this.newPlayer);
        this.manualEditState = true;
    }
    createNewPlayer() {
        this.newPlayer = {
            id: this.generateId(),
            avatar: '',
            name: this.countNumberNewPlayer() + "." + this.translateService.instant('teams.new.player.name'),
            surname: this.translateService.instant('teams.new.player.surname'),
            power: 'nо',
            status: 'newcomer',
            position: 'universal',
            attack: 50,
            defense: 50,
            accuracy: 50,
            cc: 0,
            level: 150,
            sortPosition: 999,
            sortPopularity: 999
        };
    }
    generateId() {
        return this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__["UUID"].UUID();
    }
    countNumberNewPlayer() {
        if (this.numberNewPlayer) {
            this.numberNewPlayer++;
        }
        else {
            this.numberNewPlayer = 1;
        }
        return this.numberNewPlayer;
    }
    setPlayerTeam(player) {
        switch (this.teamsService.teamIndex) {
            case 0:
                this.firstTeam.push(player);
                break;
            case 1:
                this.secondTeam.push(player);
                break;
            case 2:
                this.thirdTeam.push(player);
                break;
            case 3:
                this.fourthTeam.push(player);
                break;
        }
    }
    selectListPlayerTeam() {
        this.teamsService.scrollToTopService();
        this.teamsService.openSelectForTeamService();
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.manualEditState = true;
    }
}
TeamsComponent.ɵfac = function TeamsComponent_Factory(t) { return new (t || TeamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_teams_service__WEBPACK_IMPORTED_MODULE_4__["TeamsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"])); };
TeamsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TeamsComponent, selectors: [["app-teams"]], decls: 9, vars: 8, consts: [[1, "teams"], [4, "ngIf"], ["class", "info", 4, "ngIf"], ["class", "teams__actions", 4, "ngIf"], ["class", "message__block", 4, "ngIf"], ["class", "teams__block", "cdkDropListGroup", "", 3, "cdkDropListGroupDisabled", 4, "ngIf"], ["class", "info__descr", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "primary", "class", "btn btn__generete", 3, "click", 4, "ngIf"], ["class", "share__block", 4, "ngIf"], [1, "info"], [1, "teams__actions"], ["mat-button", "", "type", "button", "color", "primary", "class", "btn btn__state", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "primary", "class", "btn btn__state", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "type", "button", "color", "primary", "class", "btn btn__divide", 3, "title", "click", 4, "ngIf"], ["mat-button", "", "type", "button", "color", "primary", "class", "btn btn__clear", 3, "click", 4, "ngIf"], ["mat-button", "", "type", "button", "color", "primary", 1, "btn", "btn__state", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "primary", 1, "btn", "btn__state", 3, "click"], ["mat-mini-fab", "", "type", "button", "color", "primary", 1, "btn", "btn__divide", 3, "title", "click"], ["mat-button", "", "type", "button", "color", "primary", 1, "btn", "btn__clear", 3, "click"], [1, "message__block"], ["class", "message message__first", 4, "ngIf"], ["class", "message message__second", 4, "ngIf"], ["class", "message message__third", 4, "ngIf"], [1, "message", "message__first"], [1, "message", "message__second"], [1, "message", "message__third"], ["cdkDropListGroup", "", 1, "teams__block", 3, "cdkDropListGroupDisabled"], [4, "ngFor", "ngForOf"], ["class", "team", "cdkDropList", "", 3, "cdkDropListData", "team", "editState", "indexTeam", "cdkDropListDropped", "addNewPlayer", "selectListPlayer", 4, "ngIf"], ["cdkDropList", "", 1, "team", 3, "cdkDropListData", "team", "editState", "indexTeam", "cdkDropListDropped", "addNewPlayer", "selectListPlayer"], [1, "info__descr"], ["mat-raised-button", "", "type", "button", "color", "primary", 1, "btn", "btn__generete", 3, "click"], [1, "share__block"], [3, "theme", "include", "show", "size", "url", "autoSetMeta"]], template: function TeamsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TeamsComponent_app_spinner_1_Template, 1, 0, "app-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TeamsComponent_div_2_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TeamsComponent_div_3_Template, 7, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TeamsComponent_div_4_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TeamsComponent_div_5_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TeamsComponent_p_6_Template, 3, 3, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TeamsComponent_button_7_Template, 3, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TeamsComponent_div_8_Template, 5, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchState === "SEARCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchState === "READY" && !ctx.authService.userData && ctx.selectedPlayers.length <= 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authService.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchState === "READY" && ctx.authService.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedPlayers.length >= 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.selectedPlayers == null ? null : ctx.selectedPlayers.length) >= 6 && ctx.editState);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.manualEditState && ctx.selectedPlayers.length >= 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedPlayers.length >= 6 && !ctx.editState);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_12__["ShareButtons"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".teams[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.teams[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.teams[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.teams[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  color: #3f51b5;\n}\n.teams[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  font-size: 12px;\n}\n.teams[_ngcontent-%COMP%]   .teams__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.teams[_ngcontent-%COMP%]   .teams__actions[_ngcontent-%COMP%]   .btn__state[_ngcontent-%COMP%] {\n  margin-right: auto;\n  border-radius: 18px;\n}\n.teams[_ngcontent-%COMP%]   .teams__actions[_ngcontent-%COMP%]   .btn__divide[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  margin: 0 10px;\n}\n.teams[_ngcontent-%COMP%]   .teams__actions[_ngcontent-%COMP%]     .mat-mini-fab .mat-button-wrapper {\n  padding: 0;\n}\n.teams[_ngcontent-%COMP%]   .teams__actions[_ngcontent-%COMP%]   .btn__clear[_ngcontent-%COMP%] {\n  margin-left: auto;\n  border-radius: 18px;\n}\n.teams[_ngcontent-%COMP%]   .message__block[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.teams[_ngcontent-%COMP%]   .message__block[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.teams[_ngcontent-%COMP%]   .message__block[_ngcontent-%COMP%]   .message__first[_ngcontent-%COMP%], .teams[_ngcontent-%COMP%]   .message__block[_ngcontent-%COMP%]   .message__second[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.teams[_ngcontent-%COMP%]   .teams__block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n}\n.teams[_ngcontent-%COMP%]   .teams__block[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  max-width: 150px;\n}\n.teams[_ngcontent-%COMP%]   .teams__block[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.teams[_ngcontent-%COMP%]   .info__descr[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n}\n.teams[_ngcontent-%COMP%]   .btn__generete[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.teams[_ngcontent-%COMP%]   .share__block[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RlYW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLGtCQUFBO0FBQ047QUFDTTtFQUNFLGNBQUE7QUFDUjtBQUNNO0VBQ0UsZUFBQTtBQUNSO0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBSUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRk47QUFLSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSE47QUFLSTtFQUNFLFVBQUE7QUFITjtBQU1JO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUpOO0FBUUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBTko7QUFRSTtFQUNFLFNBQUE7QUFOTjtBQVNJOztFQUVFLGNBQUE7QUFQTjtBQVdFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVdJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVROO0FBV007RUFDRSxlQUFBO0FBVFI7QUFjRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQVpKO0FBZUU7RUFDRSxrQkFBQTtBQWJKO0FBZ0JFO0VBQ0Usa0JBQUE7QUFkSiIsImZpbGUiOiJ0ZWFtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLmluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICMzZjUxYjU7XG4gICAgICB9XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGVhbXNfX2FjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLmJ0bl9fc3RhdGUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICB9XG5cbiAgICAuYnRuX19kaXZpZGUge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIH1cbiAgICA6Om5nLWRlZXAgLm1hdC1taW5pLWZhYiAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmJ0bl9fY2xlYXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tZXNzYWdlX19ibG9jayB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAubWVzc2FnZSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2VfX2ZpcnN0LFxuICAgIC5tZXNzYWdlX19zZWNvbmQge1xuICAgICAgY29sb3I6ICMzZjUxYjU7XG4gICAgfVxuICB9XG4gIFxuICAudGVhbXNfX2Jsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAudGVhbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgbWF4LXdpZHRoOiAxNTBweDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pbmZvX19kZXNjciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5idG5fX2dlbmVyZXRlIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICAuc2hhcmVfX2Jsb2NrIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "/WLA":
/*!**************************************************!*\
  !*** ./src/app/languages/languages.component.ts ***!
  \**************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function LanguagesComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", language_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "languages." + language_r2.id), " ");
} }
class LanguagesComponent {
    constructor(translateService, activatedRoute, router) {
        this.translateService = translateService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.languageCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.languages = [];
    }
    ngOnInit() {
        this.getParamUrl();
        this.languageCtrl.valueChanges.subscribe((value) => {
            this.translateService.use(value);
            this.setParamUrl(value);
        });
    }
    getParamUrl() {
        this.activatedRoute.queryParams.subscribe(param => {
            this.translateService.use(param.language || _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].defaultLocale);
            this.selectedLanguage = param.language || _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].defaultLocale;
            if (param.language) {
                this.setParamUrl(param.language);
            }
        });
    }
    setParamUrl(language) {
        this.activatedRoute.queryParams.subscribe(param => {
            this.router.navigate([], {
                queryParams: {
                    language: language
                },
                queryParamsHandling: 'merge'
            });
        });
    }
    changeLocale(language) {
        this.translateService.use(language);
        this.setParamUrl(language);
    }
}
LanguagesComponent.ɵfac = function LanguagesComponent_Factory(t) { return new (t || LanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LanguagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LanguagesComponent, selectors: [["app-languages"]], decls: 26, vars: 13, consts: [[1, "languages__menu"], ["mat-button", "", 1, "languages__button", 3, "matMenuTriggerFor"], [1, "button__img-wrapp"], [1, "img", "button__img", 3, "src"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["src", "assets/images/ua.svg", 1, "img", "button__img"], [1, "button__lable"], ["src", "assets/images/ru.svg", 1, "img", "button__img"], ["src", "assets/images/en.svg", 1, "img", "button__img"], [1, "language__select", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LanguagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LanguagesComponent_Template_button_click_6_listener() { return ctx.changeLocale("ua"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LanguagesComponent_Template_button_click_12_listener() { return ctx.changeLocale("ru"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LanguagesComponent_Template_button_click_18_listener() { return ctx.changeLocale("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, LanguagesComponent_option_25_Template, 3, 4, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.selectedLanguage, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 7, "languages.ua"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 9, "languages.ru"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 11, "languages.en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.languageCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nbutton[_ngcontent-%COMP%]   .button__img-wrapp[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 1px solid #eaeaea;\n}\nbutton[_ngcontent-%COMP%]   .button__img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: auto;\n  height: 100%;\n}\n.languages__menu[_ngcontent-%COMP%]   .languages__button[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 22px;\n  min-height: 22px;\n  line-height: 22px;\n  border-radius: 50%;\n  padding: 0 13px 0 0;\n}\n.languages__menu[_ngcontent-%COMP%]   .languages__button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  right: 0;\n  display: inline-block;\n  border: 5px solid transparent;\n  border-bottom: 5px solid #757575;\n  border-top: 0 none;\n}\n.languages__menu[_ngcontent-%COMP%]   .languages__button[_ngcontent-%COMP%]:hover::before {\n  border-bottom: 5px solid #3f51b5;\n}\n.languages__menu[_ngcontent-%COMP%]   .languages__button[_ngcontent-%COMP%]     .mat-button-focus-overlay {\n  opacity: 0;\n  background: none;\n}\n.languages__menu[_ngcontent-%COMP%]   .languages__button[_ngcontent-%COMP%]     .mat-button-ripple.mat-ripple {\n  border-radius: 50%;\n  left: 0;\n  right: 13px;\n}\n.languages__menu[_ngcontent-%COMP%]   .languages__button[_ngcontent-%COMP%]   .button__img-wrapp[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.language__select[_ngcontent-%COMP%] {\n  display: none;\n}\n  .mat-menu-content:not(:empty) {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xhbmd1YWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUFOO0FBR0k7RUFDRSxnQ0FBQTtBQUROO0FBR0k7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUROO0FBSUk7RUFDRSxTQUFBO0FBRk47QUFNQTtFQUNFLGFBQUE7QUFIRjtBQUtBO0VBQ0UscUJBQUE7QUFGRiIsImZpbGUiOiJsYW5ndWFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgLmJ1dHRvbl9faW1nLXdyYXBwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICB9XG4gIC5idXR0b25fX2ltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuLmxhbmd1YWdlc19fbWVudSB7XG4gIC5sYW5ndWFnZXNfX2J1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi13aWR0aDogMjJweDtcbiAgICBtaW4taGVpZ2h0OiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAwIDEzcHggMCAwO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjNzU3NTc1O1xuICAgICAgYm9yZGVyLXRvcDogMCBub25lO1xuICAgIH1cbiAgXG4gICAgJjpob3Zlcjo6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjM2Y1MWI1O1xuICAgIH1cbiAgICA6Om5nLWRlZXAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXJpcHBsZS5tYXQtcmlwcGxlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMTNweDtcbiAgICB9XG5cbiAgICAuYnV0dG9uX19pbWctd3JhcHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuLmxhbmd1YWdlX19zZWxlY3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIC5tYXQtbWVudS1jb250ZW50Om5vdCg6ZW1wdHkpIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/staszarudensky/Desktop/work/teams/src/main.ts */"zUnb");


/***/ }),

/***/ "0NdQ":
/*!*********************************************!*\
  !*** ./src/app/services/players.service.ts ***!
  \*********************************************/
/*! exports provided: PlayersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersService", function() { return PlayersService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");




class PlayersService {
    constructor(firestore, authService) {
        this.firestore = firestore;
        this.authService = authService;
        this.allPlayers = [];
        this.deleteSelectedPlayers = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.allPlayersData = this.firestore.collection('players', ref => ref.orderBy('sortPopularity', 'asc')).valueChanges();
        this.selectedPlayersData = firestore.collection('selected').valueChanges();
        this.playersRef = firestore.collection('players');
        this.getAllPlayersService();
    }
    saveDataPlayerService(player, collection) {
        return this.firestore.collection(collection)
            .doc(player.id)
            .set({
            id: player.id,
            avatar: player.avatar,
            name: player.name,
            surname: player.surname,
            power: player.power,
            status: player.status,
            position: player.position,
            attack: player.attack,
            defense: player.defense,
            accuracy: player.accuracy,
            cc: player.cc,
            level: player.level,
            sortPosition: player.sortPosition,
            sortPopularity: player.sortPopularity
        }, { merge: true });
    }
    deleteOnePlayerService(player, collection) {
        return this.firestore.collection(collection)
            .doc(player.id)
            .delete();
    }
    getAllPlayersService() {
        const playersDocAll = this.firestore.collection('players');
        playersDocAll.get().toPromise().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.allPlayers.push(doc.data());
            });
        });
    }
    getUserSelectedCollection() {
        let userId;
        if (this.authService.admin) {
            return 'selected';
        }
        else {
            userId = this.authService.userData.uid;
            return `users/${userId}/selected`;
        }
    }
    getSelectedPlayersService(userId) {
        let collection;
        if (userId) {
            collection = `users/${userId}/selected`;
        }
        else {
            collection = `selected`;
        }
        const selectedDoc = this.firestore.collection(collection);
        selectedDoc.get().toPromise().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.selectedPlayers.push(doc.data());
            });
        });
    }
    setSelectedPlayerService(player) {
        const collection = this.getUserSelectedCollection();
        const playerDoc = this.firestore.collection(collection).doc(player.id);
        playerDoc.get().toPromise().then(() => {
            playerDoc.set(player);
        });
    }
    deleteSelectedPlayersService() {
        const collection = this.getUserSelectedCollection();
        const playerDoc = this.firestore.collection(collection);
        playerDoc.get().toPromise().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                playerDoc.doc(doc.data().id).delete();
            });
        });
    }
    updateSelectedPlayersService() {
        this.deleteSelectedPlayersService();
        this.selectedPlayers.forEach((player) => {
            this.setSelectedPlayerService(player);
        });
    }
    deleteAllSelectedPlayersService() {
        this.deleteSelectedPlayers.next();
        this.selectedPlayers = [];
    }
    sortByLevelService(results) {
        this.allPlayersData = this.firestore.collection('players', ref => ref.orderBy('level', results)).valueChanges();
    }
    sortByPositionService(results) {
        this.allPlayersData = this.firestore.collection('players', ref => ref.orderBy('sortPosition', results)).valueChanges();
    }
    sortByPopularityService(results) {
        this.allPlayersData = this.firestore.collection('players', ref => ref.orderBy('sortPopularity', results)).valueChanges();
    }
}
PlayersService.ɵfac = function PlayersService_Factory(t) { return new (t || PlayersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
PlayersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlayersService, factory: PlayersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "99qh":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popup/popup.component */ "GvNj");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/players.service */ "0NdQ");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/teams.service */ "Pzqt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/form.component */ "CdvH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../avatar/avatar.component */ "Z/Cu");














function PlayersComponent_app_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("boolChange", function PlayersComponent_app_form_0_Template_app_form_boolChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.showOrHideForm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("bool", ctx_r0.showOrHideForm);
} }
function PlayersComponent_th_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayersComponent_th_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r34.openForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, "players.add"));
} }
function PlayersComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PlayersComponent_th_4_button_1_Template, 4, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.showOrHideForm);
} }
function PlayersComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayersComponent_td_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const player_r36 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r37.deletePlayerClic(player_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayersComponent_td_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const player_r36 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r39.chengePlayerClic(player_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, "players.delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.showOrHideForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "players.chenge"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.showOrHideForm);
} }
function PlayersComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "th", 22);
} }
function PlayersComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-avatar", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("player", player_r40);
} }
function PlayersComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.name.lable"));
} }
function PlayersComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r41.name, " ");
} }
function PlayersComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.surname.lable"));
} }
function PlayersComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r42.surname, " ");
} }
function PlayersComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.power.lable"));
} }
function PlayersComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.power." + player_r43.power));
} }
function PlayersComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.status.lable"));
} }
function PlayersComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.status." + player_r44.status));
} }
function PlayersComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.position.lable"));
} }
function PlayersComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.position." + player_r45.position));
} }
function PlayersComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.attack"));
} }
function PlayersComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r46.attack, " ");
} }
function PlayersComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.defense"));
} }
function PlayersComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r47.defense, " ");
} }
function PlayersComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.accuracy"));
} }
function PlayersComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r48.accuracy, " ");
} }
function PlayersComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.cc.lable"));
} }
function PlayersComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r49.cc, " ");
} }
function PlayersComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayersComponent_th_37_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r50.onSortByLevel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "players.level"));
} }
function PlayersComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r52.level, " ");
} }
function PlayersComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayersComponent_th_40_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r53.onSortByPosition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "form.sort.position"));
} }
function PlayersComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r55.sortPosition, " ");
} }
function PlayersComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlayersComponent_th_43_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r56.onSortByPopularity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "form.sort.popularity"), " ");
} }
function PlayersComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r58.sortPopularity, " ");
} }
function PlayersComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 33);
} }
function PlayersComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 34);
} }
class PlayersComponent {
    constructor(translateService, playersService, teamsService, dialog) {
        this.translateService = translateService;
        this.playersService = playersService;
        this.teamsService = teamsService;
        this.dialog = dialog;
        this.allPlayersData = this.playersService.allPlayersData;
        this.showOrHideForm = false;
        this.displayedColumns = ['actions', 'avatar', 'name', 'surname', 'power', 'status', 'position', 'attack', 'defense', 'accuracy', 'cc', 'level', 'sortPosition', 'sortPopularity'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
    }
    ngOnInit() {
        // this.allPlayersData.subscribe((players) => {
        //   this.allPlayersData = players;
        // }) 
    }
    ngAfterViewInit() {
        // this.dataSource.sort = this.sort;
    }
    openForm() {
        this.showForm();
    }
    showForm() {
        this.showOrHideForm = true;
    }
    chengePlayerClic(player) {
        this.teamsService.scrollToTopService();
        this.showForm();
        this.playersService.player = player;
    }
    deletePlayerClic(player) {
        this.openDialog(player);
    }
    openDialog(player) {
        const dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__["PopupComponent"], {
            data: {
                title: this.translateService.instant('players.dialog.title') + " " + player.name + "?",
                content: this.translateService.instant('players.dialog.content'),
                yes: this.translateService.instant('players.dialog.yes'),
                no: this.translateService.instant('players.dialog.no'),
                status: true
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.playersService.deleteOnePlayerService(player, 'players');
            }
        });
    }
    onSortByLevel() {
        this.playersService.sortByLevelService('desc');
        this.allPlayersData = this.playersService.allPlayersData;
    }
    onSortByPosition() {
        this.playersService.sortByPositionService('asc');
        this.allPlayersData = this.playersService.allPlayersData;
    }
    onSortByPopularity() {
        this.playersService.sortByPopularityService('asc');
        this.allPlayersData = this.playersService.allPlayersData;
    }
}
PlayersComponent.ɵfac = function PlayersComponent_Factory(t) { return new (t || PlayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_players_service__WEBPACK_IMPORTED_MODULE_5__["PlayersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_teams_service__WEBPACK_IMPORTED_MODULE_6__["TeamsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
PlayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PlayersComponent, selectors: [["app-players"]], viewQuery: function PlayersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 47, vars: 4, consts: [["class", "form form__add", 3, "bool", "boolChange", 4, "ngIf"], [1, "table__wrapper"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "avatar"], ["matColumnDef", "name"], ["matColumnDef", "surname"], ["matColumnDef", "power"], ["matColumnDef", "status"], ["matColumnDef", "position"], ["matColumnDef", "attack"], ["matColumnDef", "defense"], ["matColumnDef", "accuracy"], ["matColumnDef", "cc"], ["matColumnDef", "level"], ["matColumnDef", "sortPosition"], ["matColumnDef", "sortPopularity"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "form", "form__add", 3, "bool", "boolChange"], ["mat-header-cell", ""], ["mat-icon-button", "", "class", "btn btn__add", 3, "title", "click", 4, "ngIf"], ["mat-icon-button", "", 1, "btn", "btn__add", 3, "title", "click"], ["color", "primary"], ["mat-cell", ""], ["mat-icon-button", "", 1, "btn", "btn__delete", 3, "disabled", "title", "click"], ["width", "32", "height", "32", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m8.21302,17.40972c0.69694,-2.54191 3.02383,-4.40972 5.78698,-4.40972l1,0l0,0l0,2l3,0l0,-2l10,0l0,3l-8.13197,1.74257l0,0c0.08647,0.40549 0.13197,0.82614 0.13197,1.25743c0,3.31371 -2.68629,6 -6,6c-2.76315,0 -5.09004,-1.86781 -5.78698,-4.40972c-0.33647,0.25704 -0.75691,0.40972 -1.21302,0.40972c-1.10457,0 -2,-0.89543 -2,-2c0,-1.10457 0.89543,-2 2,-2c0.45611,0 0.87655,0.15268 1.21302,0.40972l0,0l0,0zm-1.21302,0.59028c-0.55228,0 -1,0.44386 -1,1c0,0.55228 0.44386,1 1,1c0.55228,0 1,-0.44386 1,-1c0,-0.55228 -0.44386,-1 -1,-1l0,0zm9,-11l0,4l1,0l0,-4l-1,0l0,0zm5.11968,1.02099l-2.11968,3.3922l0.84805,0.52992l2.11968,-3.3922l-0.84805,-0.52992l0,0zm-9.27163,0l2.11968,3.3922l-0.84805,0.52992l-2.11968,-3.3922l0.84805,-0.52992l0,0z"], ["mat-icon-button", "", 1, "btn", "btn__chenge", 3, "disabled", "title", "click"], [1, "avatar__min", 3, "player"], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function PlayersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PlayersComponent_app_form_0_Template, 1, 1, "app-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PlayersComponent_th_4_Template, 2, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PlayersComponent_td_5_Template, 9, 8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PlayersComponent_th_7_Template, 1, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PlayersComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PlayersComponent_th_10_Template, 3, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PlayersComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PlayersComponent_th_13_Template, 3, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, PlayersComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PlayersComponent_th_16_Template, 3, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, PlayersComponent_td_17_Template, 3, 3, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, PlayersComponent_th_19_Template, 3, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, PlayersComponent_td_20_Template, 3, 3, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, PlayersComponent_th_22_Template, 3, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, PlayersComponent_td_23_Template, 3, 3, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, PlayersComponent_th_25_Template, 3, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, PlayersComponent_td_26_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, PlayersComponent_th_28_Template, 3, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, PlayersComponent_td_29_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, PlayersComponent_th_31_Template, 3, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, PlayersComponent_td_32_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, PlayersComponent_th_34_Template, 3, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, PlayersComponent_td_35_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](36, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, PlayersComponent_th_37_Template, 7, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, PlayersComponent_td_38_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](39, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, PlayersComponent_th_40_Template, 7, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, PlayersComponent_td_41_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](42, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, PlayersComponent_th_43_Template, 6, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, PlayersComponent_td_44_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, PlayersComponent_tr_45_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, PlayersComponent_tr_46_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showOrHideForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.allPlayersData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_12__["AvatarComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".table__wrapper[_ngcontent-%COMP%] {\n  overflow: scroll;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.table__wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 800px;\n}\n.table__wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 15px;\n}\nth.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 10px !important;\n  width: 80px;\n  padding-right: 10px;\n  white-space: nowrap;\n}\nth.mat-header-cell[_ngcontent-%COMP%]:last-of-type, td.mat-cell[_ngcontent-%COMP%]:last-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 10px !important;\n}\n.btn__delete[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #3f51b5;\n}\n.btn__delete[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ccc;\n}\n  .btn__delete .mat-button-focus-overlay {\n  background: none;\n}\n.btn__delete.mat-button-disabled[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #f5f5f5;\n}\n.btn__delete.mat-button-disabled[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #f5f5f5;\n}\n.btn__chenge[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.btn__chenge.mat-button-disabled[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n.btn__chenge.mat-button-disabled[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n}\n.mat-column-level[_ngcontent-%COMP%] {\n  border-left: 1px solid #ccc;\n  text-align: center;\n}\n.mat-column-sortPosition[_ngcontent-%COMP%], .mat-column-sortPopularity[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BsYXllcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLDJIQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUdBO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUE7RUFDRSw4QkFBQTtBQUNGO0FBRUU7RUFDRSxhQUFBO0FBQ0o7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUtJO0VBQ0UsZ0JBQUE7QUFGTjtBQU1BO0VBQ0UsYUFBQTtBQUhGO0FBS0E7RUFDRSxhQUFBO0FBRkY7QUFJQTtFQUNFLG1CQUFBO0FBREY7QUFHQTtFQUNFLHVCQUFBO0FBQUY7QUFFQTtFQUNFLGNBQUE7QUFDRjtBQUNBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQUE7O0VBRUUsa0JBQUE7QUFHRiIsImZpbGUiOiJwbGF5ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlX193cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggOHB4IDEwcHggMXB4IHJnYigwIDAgMCAvIDE0JSksIDBweCAzcHggMTRweCAycHggcmdiKDAgMCAwIC8gMTIlKTtcblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA4MDBweDtcblxuICAgIGFwcC1hdmF0YXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gIH1cbn1cbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbnRoLm1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUsIHRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cbi5idG5fX2RlbGV0ZSB7XG4gICY6aG92ZXIgc3ZnIHtcbiAgICBmaWxsOiAjM2Y1MWI1O1xuICB9XG4gIHN2ZyB7XG4gICAgZmlsbDogI2NjYztcbiAgfVxuICBcbn1cbjo6bmctZGVlcCB7XG4gIC5idG5fX2RlbGV0ZSB7XG4gICAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxufVxuLmJ0bl9fZGVsZXRlLm1hdC1idXR0b24tZGlzYWJsZWQgc3ZnIHtcbiAgZmlsbDogI2Y1ZjVmNTtcbn1cbi5idG5fX2RlbGV0ZS5tYXQtYnV0dG9uLWRpc2FibGVkOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmNWY1ZjU7XG59XG4uYnRuX19jaGVuZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuLmJ0bl9fY2hlbmdlLm1hdC1idXR0b24tZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5idG5fX2NoZW5nZS5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXRlcmlhbC1pY29ucyB7XG4gIGNvbG9yOiAjZjVmNWY1O1xufVxuLm1hdC1jb2x1bW4tbGV2ZWwge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXQtY29sdW1uLXNvcnRQb3NpdGlvbixcbi5tYXQtY29sdW1uLXNvcnRQb3B1bGFyaXR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    locales: ['en', 'ru', 'ua'],
    defaultLocale: 'en',
    firebase: {
        apiKey: 'AIzaSyCA6D-uC_WJlk3tRkZDPIzuPGos-dyKBUY',
        authDomain: 'teams-d98f6.firebaseapp.com',
        databaseURL: 'https://teams-d98f6-default-rtdb.firebaseio.com',
        projectId: 'teams-d98f6',
        storageBucket: 'teams-d98f6.appspot.com',
        messagingSenderId: '277595646270',
        appId: '1:277595646270:web:3104ce915cb7a1cecce46f'
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


/***/ }),

/***/ "CZqF":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 11, vars: 0, consts: [[1, "spinner__wrapp"], [1, "spinner"], ["viewBox", "0 0 866 866", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M142.327 112.062C214.1 47.017 307.79 5.714 411 .55V410.5H280.346c-8.144-184.333-121.358-284.64-138.02-298.438z", "fill", "currentColor", 1, "bb-0"], ["d", "M111.104 143.388C46.716 214.908 5.822 307.995.574 410.5h235.893c-7.19-145.817-109.942-251.965-125.363-267.112z", "fill", "currentColor", 1, "bb-1"], ["d", "M110.902 722.388C46.422 650.666 5.552 557.292.524 454.5h235.788c-8.297 149.66-114.564 257.273-125.41 267.888z", "fill", "currentColor", 1, "bb-2"], ["d", "M141.633 753.308C213.497 818.716 307.458 860.268 411 865.45V454.5H280.354c-8.297 189.4-127.334 289.638-138.72 298.808z", "fill", "currentColor", 1, "bb-3"], ["d", "M723.222 754.346C651.507 819.156 557.992 860.296 455 865.45V454h129.39c7.743 190.638 127.705 291.398 138.832 300.346z", "fill", "currentColor", 1, "bb-4"], ["d", "M754.06 723.538C819.244 651.55 860.555 557.54 865.5 454H628.416c7.704 151.184 115.666 259.807 125.644 269.538z", "fill", "currentColor", 1, "bb-5"], ["d", "M754.82 143.302C819.145 214.716 860.042 307.652 865.4 410H628.418c8.043-149.258 115.93-256.613 126.4-266.698z", "fill", "currentColor", 1, "bb-6"], ["d", "M723.687 112.075C651.91 47.022 558.217 5.715 455 .55V410h129.53c8.944-188.743 128.016-288.947 139.157-297.925z", "fill", "currentColor", 1, "bb-7"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".spinner__wrapp[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: #fff;\n  z-index: 99;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  background: #565656;\n  width: 150px;\n  height: 150px;\n  margin: 0 auto;\n  border-radius: 50%;\n  z-index: 999;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    opacity: 0.1;\n  }\n  20% {\n    opacity: 0.8;\n  }\n  100% {\n    opacity: 0.1;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 0.1;\n  }\n  20% {\n    opacity: 0.8;\n  }\n  100% {\n    opacity: 0.1;\n  }\n}\n\nsvg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-name: pulse;\n          animation-name: pulse;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  color: #FFF;\n}\n\n.bb-7[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.bb-6[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.875s;\n          animation-delay: -0.875s;\n}\n\n.bb-5[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.75s;\n          animation-delay: -0.75s;\n}\n\n.bb-4[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.625s;\n          animation-delay: -0.625s;\n}\n\n.bb-3[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n.bb-2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.375s;\n          animation-delay: -0.375s;\n}\n\n.bb-1[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.25s;\n          animation-delay: -0.25s;\n}\n\n.bb-0[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.125s;\n          animation-delay: -0.125s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0k7SUFBUyxZQUFBO0VBR1g7RUFGRTtJQUFTLFlBQUE7RUFLWDtFQUpFO0lBQVMsWUFBQTtFQU9YO0FBQ0Y7O0FBWEE7RUFDSTtJQUFTLFlBQUE7RUFHWDtFQUZFO0lBQVMsWUFBQTtFQUtYO0VBSkU7SUFBUyxZQUFBO0VBT1g7QUFDRjs7QUFMQTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLFdBQUE7QUFPSjs7QUFKQTtFQUFRLDRCQUFBO1VBQUEsb0JBQUE7QUFRUjs7QUFQQTtFQUFRLGdDQUFBO1VBQUEsd0JBQUE7QUFXUjs7QUFWQTtFQUFRLCtCQUFBO1VBQUEsdUJBQUE7QUFjUjs7QUFiQTtFQUFRLGdDQUFBO1VBQUEsd0JBQUE7QUFpQlI7O0FBaEJBO0VBQVEsOEJBQUE7VUFBQSxzQkFBQTtBQW9CUjs7QUFuQkE7RUFBUSxnQ0FBQTtVQUFBLHdCQUFBO0FBdUJSOztBQXRCQTtFQUFRLCtCQUFBO1VBQUEsdUJBQUE7QUEwQlI7O0FBekJBO0VBQVEsZ0NBQUE7VUFBQSx3QkFBQTtBQTZCUiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXJfX3dyYXBwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5OTtcbn1cbi5zcGlubmVyIHsgXG4gIGJhY2tncm91bmQ6ICM1NjU2NTY7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogOTk5O1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAwJSAgICAgeyBvcGFjaXR5OiAuMTsgfVxuICAgIDIwJSAgICB7IG9wYWNpdHk6IC44OyB9XG4gICAgMTAwJSAgIHsgb3BhY2l0eTogLjE7IH1cbn1cblxuc3ZnIHBhdGgge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4uYmItNyB7IGFuaW1hdGlvbi1kZWxheTogLTFzIH1cbi5iYi02IHsgYW5pbWF0aW9uLWRlbGF5OiAtLjg3NXMgfVxuLmJiLTUgeyBhbmltYXRpb24tZGVsYXk6IC0uNzVzIH1cbi5iYi00IHsgYW5pbWF0aW9uLWRlbGF5OiAtLjYyNXMgfVxuLmJiLTMgeyBhbmltYXRpb24tZGVsYXk6IC0uNXMgfVxuLmJiLTIgeyBhbmltYXRpb24tZGVsYXk6IC0uMzc1cyB9XG4uYmItMSB7IGFuaW1hdGlvbi1kZWxheTogLS4yNXMgfVxuLmJiLTAgeyBhbmltYXRpb24tZGVsYXk6IC0uMTI1cyB9Il19 */"] });


/***/ }),

/***/ "CdvH":
/*!************************************************!*\
  !*** ./src/app/players/form/form.component.ts ***!
  \************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-uuid */ "o9EK");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/players.service */ "0NdQ");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function FormComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const power_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", power_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "form.power." + power_r6.value), " ");
} }
function FormComponent_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "form.status." + status_r7.value), " ");
} }
function FormComponent_mat_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "form.position." + position_r8.value), " ");
} }
function FormComponent_mat_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", point_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", point_r9.value, " ");
} }
function FormComponent_mat_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", point_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", point_r10.value, " ");
} }
function FormComponent_mat_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", point_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", point_r11.value, " ");
} }
class FormComponent {
    constructor(playersService, storage, translateService) {
        this.playersService = playersService;
        this.storage = storage;
        this.translateService = translateService;
        this.boolChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedFile = null;
        this.powers = [
            { value: 'speed' },
            { value: 'tank' },
            { value: 'throw' },
            { value: 'nо' }
        ];
        this.statuses = [
            { value: 'young' },
            { value: 'veteran' },
            { value: 'newcomer' }
        ];
        this.positions = [
            { value: 'attack' },
            { value: 'defense' },
            { value: 'universal' }
        ];
        this.points = [
            { value: 100 },
            { value: 75 },
            { value: 50 },
            { value: 25 },
            { value: 0 },
        ];
        this.languages = [];
        this.playerGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            power: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.powers),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.statuses),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.positions),
            attack: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.points),
            defense: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.points),
            accuracy: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.points),
            cc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            level: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            sortPosition: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            sortPopularity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    set bool(value) { this._bool = value; this.boolChange.emit(value); }
    get bool() { return this.bool; }
    ngOnInit() {
        if (this.playersService.player) {
            this.setValuesForm(this.playersService.player);
        }
        this.playerGroup.valueChanges.subscribe(selectedValue => {
            this.valideteForm(selectedValue);
        });
    }
    valideteForm(selectedValue) {
        if (selectedValue.name &&
            selectedValue.surname &&
            typeof selectedValue.power === 'string' &&
            typeof selectedValue.status === 'string' &&
            typeof selectedValue.position === 'string' &&
            typeof selectedValue.attack === 'number' &&
            typeof selectedValue.defense === 'number' &&
            typeof selectedValue.accuracy === 'number') {
            this.filledFields = true;
        }
    }
    setValuesForm(player) {
        this.playerGroup.patchValue({
            id: player.id,
            avatar: player.avatar,
            name: player.name,
            surname: player.surname,
            power: player.power,
            status: player.status,
            position: player.position,
            attack: player.attack,
            defense: player.defense,
            accuracy: player.accuracy,
            cc: player.cc,
            sortPosition: player.sortPosition,
            sortPopularity: player.sortPopularity,
        });
        this.dowloadAvatarFile(player.id, player.avatar);
    }
    onFormSubmit() {
        this.savePlayer();
        this.resetForm();
        this.hideModal();
    }
    savePlayer() {
        this.generateId();
        this.countLevel();
        this.replaceCc();
        this.uploadNewAvatar();
        this.playersService.saveDataPlayerService(this.playerGroup.value, 'players');
    }
    generateId() {
        if (!this.playersService.player) {
            const id = this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_2__["UUID"].UUID();
            this.playerGroup.value.id = id;
        }
    }
    countLevel() {
        let level;
        level = this.playerGroup.value.attack +
            this.playerGroup.value.defense +
            this.playerGroup.value.accuracy +
            this.playerGroup.value.cc;
        this.playerGroup.value.level = level;
    }
    replaceCc() {
        if (this.playerGroup.value.cc === '') {
            this.playerGroup.value.cc = 0;
        }
    }
    cancelForm() {
        this.deletePreviewFile();
        this.resetForm();
        this.hideModal();
    }
    hideModal() {
        this.bool = false;
    }
    resetForm() {
        this.playerGroup.reset();
        this.playersService.player = null;
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.uploadPreviewFile();
    }
    dowloadAvatarFile(id, fileName) {
        if (fileName) {
            const filePath = 'avatars/' + id + '/' + fileName;
            const ref = this.storage.ref(filePath);
            this.fileUrl = ref.getDownloadURL();
        }
    }
    uploadPreviewFile() {
        const filePath = 'avatars/preview/' + this.selectedFile.name;
        const ref = this.storage.ref(filePath);
        ref.put(this.selectedFile).then(() => {
            this.dowloadPreviewFile(ref);
        });
    }
    dowloadPreviewFile(ref) {
        this.fileUrl = ref.getDownloadURL();
        if (this.playersService.player) {
            this.valideteForm(this.playersService.player);
        }
    }
    deletePreviewFile() {
        if (this.selectedFile) {
            this.storage.ref('avatars/preview/').child(this.selectedFile.name).delete();
            this.selectedFile = null;
        }
    }
    uploadNewAvatar() {
        if (this.selectedFile) {
            this.deleteOldAvatar();
            const filePath = 'avatars/' + this.playerGroup.value.id + '/' + this.selectedFile.name;
            const ref = this.storage.ref(filePath);
            ref.put(this.selectedFile).then(() => {
                this.dowloadPreviewFile(ref);
            });
            this.playerGroup.value.avatar = this.selectedFile.name;
            this.deletePreviewFile();
        }
    }
    deleteOldAvatar() {
        if (this.playerGroup.value.avatar) {
            this.storage.ref('avatars/' + this.playerGroup.value.id).child(this.playerGroup.value.avatar).delete();
        }
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], inputs: { bool: "bool" }, outputs: { boolChange: "boolChange" }, decls: 91, vars: 71, consts: [[1, "form", 3, "formGroup", "ngSubmit"], [1, "form__block", "form__block_ans"], [1, "field", "field__avatar"], [1, "avatar"], ["type", "file", 1, "input__avatar", 3, "title", "change"], ["mat-icon-button", "", "type", "button", 1, "btn", "btn__avatar", 3, "title"], ["color", "primary"], ["alt", "", 1, "img", "img__avatar", 3, "src"], [1, "name__info_block"], [1, "field", "field__name"], ["matInput", "", "formControlName", "name", "autocomplete", "off", 3, "placeholder"], [1, "field", "field__surname"], ["matInput", "", "formControlName", "surname", "autocomplete", "off", 3, "placeholder"], [1, "form__block", "form__block_ps"], ["appearance", "fill", 1, "field", "field__select"], ["formControlName", "power"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "status"], [1, "form__block", "form__block_p"], ["formControlName", "position"], [1, "form__block", "form__block_ad"], ["formControlName", "attack"], ["formControlName", "defense"], [1, "form__block", "form__block_ac"], ["formControlName", "accuracy"], [1, "field", "field__cc"], ["matInput", "", "type", "number", "formControlName", "cc", "autocomplete", "off", 3, "placeholder"], [1, "form__block", "form__block_sort"], [1, "field", "field__sort"], ["matInput", "", "type", "number", "formControlName", "sortPosition", "autocomplete", "off", 3, "placeholder"], ["matInput", "", "type", "number", "formControlName", "sortPopularity", "autocomplete", "off", 3, "placeholder"], [1, "form__block", "form__block_actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn", "btn__save", 3, "disabled"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "btn", "btn__cancel", 3, "click"], [3, "value"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_Template_input_change_4_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "camera_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FormComponent_mat_option_31_Template, 3, 4, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, FormComponent_mat_option_37_Template, 3, 4, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, FormComponent_mat_option_44_Template, 3, 4, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, FormComponent_mat_option_51_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, FormComponent_mat_option_57_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, FormComponent_mat_option_64_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_button_click_88_listener() { return ctx.cancelForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.playerGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 29, "form.avatar.upload"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 31, "form.avatar.edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 33, ctx.fileUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 35, "form.name.lable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 37, "form.name.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 39, "form.surname.lable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 41, "form.surname.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 43, "form.power.lable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.powers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 45, "form.status.lable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 47, "form.position.lable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.positions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 49, "form.attack"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.points);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 51, "form.defense"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.points);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 53, "form.accuracy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.points);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 55, "form.cc.lable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 57, "form.cc.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 59, "form.sort.position"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 61, "form.cc.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 63, "form.sort.popularity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 65, "form.cc.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.filledFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 67, "form.actions.save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 69, "form.actions.cancel"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  background-image: url('fon_form.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ans {\n  align-items: flex-end;\n  order: 1;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ans .field__avatar {\n  width: 100px;\n  margin-right: 20px;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ans .field__avatar .avatar {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-image: url('default_avatar.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  background-color: #d5d5d5;\n  overflow: hidden;\n  cursor: pointer;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ans .field__avatar .avatar .input__avatar {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  cursor: pointer;\n  z-index: 3;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ans .field__avatar .avatar .input__avatar_control {\n  display: none;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ans .field__avatar .avatar:hover .btn__avatar {\n  display: inline-flex;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ans .field__avatar .avatar .btn__avatar {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  border: 50px solid transparent;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  pointer-events: none;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ans .field__avatar .avatar .img__avatar {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: auto;\n  background: #f5f5f5;\n  z-index: 1;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ans .field__avatar .mat-form-field-underline {\n  display: none;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ans .field__avatar .mat-form-field-infix {\n  padding: 0;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ans .name__info_block {\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 120px);\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ps {\n  flex-direction: column;\n  justify-content: flex-end;\n  order: 2;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ad {\n  justify-content: space-between;\n  order: 3;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ad .field {\n  width: calc(50% - 10px);\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_p {\n  order: 4;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_p .field {\n  width: 100%;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ac {\n  justify-content: space-between;\n  order: 5;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_ac .field {\n  width: calc(50% - 10px);\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_actions {\n  justify-content: space-between;\n  order: 6;\n  margin-top: auto;\n  margin-bottom: -25px;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_actions .btn {\n  width: calc(50% - 20px);\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_sort {\n  justify-content: space-between;\n  order: 7;\n}\n.form[_ngcontent-%COMP%]     .form__block.form__block_sort .field {\n  width: calc(50% - 10px);\n}\n.form[_ngcontent-%COMP%]     .form__block {\n  display: flex;\n  width: calc(50% - 40px);\n}\n.form[_ngcontent-%COMP%]     .form__block .field {\n  margin-bottom: 20px;\n}\n.form[_ngcontent-%COMP%]     .form__block .mat-form-field-wrapper {\n  padding: 0;\n}\n.form[_ngcontent-%COMP%]     .form__block .mat-form-field-flex {\n  background: transparent;\n  padding: 0;\n}\n.form[_ngcontent-%COMP%]     .form__block .mat-form-field-appearance-legacy .mat-form-field-underline, .form[_ngcontent-%COMP%]     .form__block .mat-form-field-underline {\n  bottom: 0;\n}\n.form[_ngcontent-%COMP%]     .form__block .mat-form-field-infix {\n  padding: 5px 0;\n  border: 0;\n}\n@media screen and (max-width: 800px) {\n  .form[_ngcontent-%COMP%]     .form__block {\n    width: calc(50% - 20px);\n  }\n  .form[_ngcontent-%COMP%]     .form__block.form__block_actions .btn {\n    width: calc(50% - 10px);\n  }\n}\n@media screen and (max-width: 740px) {\n  .form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 300px;\n    width: 100%;\n    margin: 0 auto 30px;\n  }\n  .form[_ngcontent-%COMP%]     .form__block {\n    width: 100%;\n  }\n  .form[_ngcontent-%COMP%]     .form__block.form__block_p {\n    order: 3;\n  }\n  .form[_ngcontent-%COMP%]     .form__block.form__block_ad {\n    order: 4;\n  }\n  .form[_ngcontent-%COMP%]     .form__block.form__block_sort {\n    order: 6;\n  }\n  .form[_ngcontent-%COMP%]     .form__block.form__block_actions {\n    order: 7;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQUNGO0FBRUk7RUFDRSxxQkFBQTtFQUNBLFFBQUE7QUFBTjtBQUVNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFUTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFWO0FBRVU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFBWjtBQUVVO0VBQ0UsYUFBQTtBQUFaO0FBR1U7RUFDRSxvQkFBQTtBQURaO0FBR1U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQURaO0FBR1U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQURaO0FBSVE7RUFDRSxhQUFBO0FBRlY7QUFJUTtFQUNFLFVBQUE7QUFGVjtBQUtNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFIUjtBQU1JO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7QUFKTjtBQU1JO0VBQ0UsOEJBQUE7RUFDQSxRQUFBO0FBSk47QUFLTTtFQUNFLHVCQUFBO0FBSFI7QUFNSTtFQUNFLFFBQUE7QUFKTjtBQUtNO0VBQ0UsV0FBQTtBQUhSO0FBTUk7RUFDRSw4QkFBQTtFQUNBLFFBQUE7QUFKTjtBQUtNO0VBQ0UsdUJBQUE7QUFIUjtBQU1JO0VBQ0UsOEJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUpOO0FBS007RUFDRSx1QkFBQTtBQUhSO0FBTUk7RUFDRSw4QkFBQTtFQUNBLFFBQUE7QUFKTjtBQUtNO0VBQ0UsdUJBQUE7QUFIUjtBQU9JO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBTE47QUFPTTtFQUNFLG1CQUFBO0FBTFI7QUFRTTtFQUNFLFVBQUE7QUFOUjtBQVFNO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0FBTlI7QUFRTTs7RUFFRSxTQUFBO0FBTlI7QUFRTTtFQUNFLGNBQUE7RUFDQSxTQUFBO0FBTlI7QUFjQTtFQUdNO0lBQ0UsdUJBQUE7RUFiTjtFQWdCTTtJQUNFLHVCQUFBO0VBZFI7QUFDRjtBQW1CQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQWpCRjtFQW9CSTtJQUNFLFdBQUE7RUFsQk47RUFvQkk7SUFDRSxRQUFBO0VBbEJOO0VBb0JJO0lBQ0UsUUFBQTtFQWxCTjtFQW9CSTtJQUNFLFFBQUE7RUFsQk47RUFvQkk7SUFDRSxRQUFBO0lBQ0EsU0FBQTtFQWxCTjtBQUNGIiwiZmlsZSI6ImZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mb25fZm9ybS5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICA6Om5nLWRlZXAge1xuICAgIC5mb3JtX19ibG9jay5mb3JtX19ibG9ja19hbnMge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgb3JkZXI6IDE7XG5cbiAgICAgIC5maWVsZF9fYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdF9hdmF0YXIuc3ZnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDVkNTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gICAgICAgICAgLmlucHV0X19hdmF0YXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0X19hdmF0YXJfY29udHJvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyIC5idG5fX2F2YXRhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bl9fYXZhdGFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3JkZXI6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZ19fYXZhdGFyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm5hbWVfX2luZm9fYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgICAuZm9ybV9fYmxvY2suZm9ybV9fYmxvY2tfcHMge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBvcmRlcjogMjtcbiAgICB9XG4gICAgLmZvcm1fX2Jsb2NrLmZvcm1fX2Jsb2NrX2FkIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG9yZGVyOiAzO1xuICAgICAgLmZpZWxkIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG4gICAgfVxuICAgIC5mb3JtX19ibG9jay5mb3JtX19ibG9ja19wIHtcbiAgICAgIG9yZGVyOiA0O1xuICAgICAgLmZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgIC5mb3JtX19ibG9jay5mb3JtX19ibG9ja19hYyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBvcmRlcjogNTtcbiAgICAgIC5maWVsZCB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgICAuZm9ybV9fYmxvY2suZm9ybV9fYmxvY2tfYWN0aW9ucyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBvcmRlcjogNjtcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMjVweDtcbiAgICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmZvcm1fX2Jsb2NrLmZvcm1fX2Jsb2NrX3NvcnQge1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgb3JkZXI6IDc7XG4gICAgICAuZmllbGQge1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9ybV9fYmxvY2sge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDQwcHgpO1xuICAgICAgXG4gICAgICAuZmllbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZm9ybSB7XG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5mb3JtX19ibG9jayB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xuICAgICAgfVxuICAgICAgLmZvcm1fX2Jsb2NrLmZvcm1fX2Jsb2NrX2FjdGlvbnMge1xuICAgICAgICAuYnRuIHtcbiAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgLmZvcm0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4O1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5mb3JtX19ibG9jayB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmZvcm1fX2Jsb2NrLmZvcm1fX2Jsb2NrX3Age1xuICAgICAgICBvcmRlcjogMztcbiAgICAgIH1cbiAgICAgIC5mb3JtX19ibG9jay5mb3JtX19ibG9ja19hZCB7XG4gICAgICAgIG9yZGVyOiA0O1xuICAgICAgfVxuICAgICAgLmZvcm1fX2Jsb2NrLmZvcm1fX2Jsb2NrX3NvcnQge1xuICAgICAgICBvcmRlcjogNjtcbiAgICAgIH1cbiAgICAgIC5mb3JtX19ibG9jay5mb3JtX19ibG9ja19hY3Rpb25zIHtcbiAgICAgICAgb3JkZXI6IDc7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG59Il19 */"] });


/***/ }),

/***/ "GvNj":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/players.service */ "0NdQ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class PopupComponent {
    constructor(playersService, dialogRef, data) {
        this.playersService = playersService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_players_service__WEBPACK_IMPORTED_MODULE_2__["PlayersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], decls: 10, vars: 5, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_Template_button_click_8_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.data.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.yes, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.no, " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: ["[_nghost-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoicG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function AuthComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.loginWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.loginWithFacebook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "auth.login"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "auth.login.with"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 8, "auth.login.with"));
} }
function AuthComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.authService.userPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.authService.userData == null ? null : ctx_r1.authService.userData.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 4, "auth.logout"));
} }
class AuthComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() { }
    loginWithGoogle() {
        this.authService.loginWithGoogleService();
    }
    loginWithFacebook() {
        this.authService.loginWithFacebookService();
    }
    logOut() {
        this.authService.logOutService();
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 3, vars: 2, consts: [[1, "auth"], ["class", "login", 4, "ngIf"], ["class", "account", 4, "ngIf"], [1, "login"], ["mat-button", "", 1, "btn", "btn__login", 3, "matMenuTriggerFor", "title"], [1, "avatar"], ["src", "assets/images/default_avatar.svg", "alt", "user"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "btn__block"], [1, "btn__text"], ["src", "assets/images/google.svg", "alt", "Google", 1, "btn__icon"], ["src", "assets/images/facebook.svg", "alt", "Facebook", 1, "btn__icon"], [1, "account"], ["mat-button", "", 1, "btn", "btn__logout", 3, "matMenuTriggerFor"], ["alt", "user", 3, "src"], [1, "user__name"], ["color", "primary"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthComponent_div_1_Template, 19, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_div_2_Template, 15, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".auth[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.auth[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  display: flex;\n}\n.auth[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: #d5d5d5;\n  overflow: hidden;\n}\n.auth[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 18px 0 15px;\n  min-width: auto;\n}\n.auth[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  right: 3px;\n  display: inline-block;\n  border: 5px solid transparent;\n  border-top: 5px solid #757575;\n  border-bottom: 0 none;\n}\n.auth[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover::before {\n  border-top: 5px solid #3f51b5;\n}\n.auth[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]     .mat-button-focus-overlay {\n  opacity: 0;\n  background: none;\n}\n.auth[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]     .mat-button-ripple.mat-ripple {\n  border-radius: 50%;\n  left: 15px;\n  right: 18px;\n}\n.auth[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\np.user__name[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  margin: 0;\n}\nbutton.mat-menu-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn__block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.btn__block[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%] {\n  width: auto;\n  height: 20px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBQ047QUFDSTtFQUNFLDZCQUFBO0FBQ047QUFDSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUNOO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ047QUFHRTtFQUNFLFdBQUE7QUFESjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBREY7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUoiLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gIC5sb2dpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuYXZhdGFyIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMCAxOHB4IDAgMTVweDtcbiAgICBtaW4td2lkdGg6IGF1dG87XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgICByaWdodDogM3B4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzc1NzU3NTtcbiAgICAgIGJvcmRlci1ib3R0b206IDAgbm9uZTtcbiAgICB9XG4gICAgJjpob3Zlcjo6YmVmb3JlIHtcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjM2Y1MWI1O1xuICAgIH0gXG4gICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICAgIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1yaXBwbGUubWF0LXJpcHBsZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgICAgcmlnaHQ6IDE4cHg7XG4gICAgfVxuICB9XG4gIFxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5wLnVzZXJfX25hbWUge1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIG1hcmdpbjogMDtcbn1cbmJ1dHRvbi5tYXQtbWVudS1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bl9fYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuYnRuX19pY29uIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "MzZM":
/*!***************************************************!*\
  !*** ./src/app/main/teams/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/teams.service */ "Pzqt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "cP2V");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function TeamComponent_app_card_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
} }
const _c0 = function (a0) { return { "edit": a0 }; };
function TeamComponent_app_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamComponent_app_card_9_div_1_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card ", player_r2.position, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r0.editState))("player", player_r2)("indexTeam", ctx_r0.indexTeam)("editState", ctx_r0.editState);
} }
function TeamComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamComponent_div_10_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onAddNewPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamComponent_div_10_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSelectListPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "team.add.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "team.add.new"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, "team.add.list"), " ");
} }
class TeamComponent {
    constructor(teamsService) {
        this.teamsService = teamsService;
        this.addNewPlayer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectListPlayer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    countLevelTeam() {
        return this.team.reduce((sum, player) => sum + player.level, 0);
    }
    onAddNewPlayer() {
        this.teamsService.teamIndex = this.indexTeam;
        this.addNewPlayer.emit();
    }
    onSelectListPlayer() {
        this.teamsService.teamIndex = this.indexTeam;
        this.selectListPlayer.emit();
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], inputs: { team: "team", indexTeam: "indexTeam", editState: "editState" }, outputs: { addNewPlayer: "addNewPlayer", selectListPlayer: "selectListPlayer" }, decls: 11, vars: 7, consts: [[1, "team__container"], [1, "title", "title__team"], [1, "title", "title__level"], ["cdkDrag", "", 3, "class", "ngClass", "player", "indexTeam", "editState", 4, "ngFor", "ngForOf"], ["class", "btn__menu", 4, "ngIf"], ["cdkDrag", "", 3, "ngClass", "player", "indexTeam", "editState"], ["class", "custom__placeholder", 4, "cdkDragPlaceholder"], [1, "custom__placeholder"], [1, "btn__menu"], ["mat-button", "", 1, "btn", "btn__add", 3, "matMenuTriggerFor", "title"], ["color", "primary"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeamComponent_app_card_9_Template, 2, 9, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TeamComponent_div_10_Template, 13, 10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "team.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.indexTeam + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.countLevelTeam(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editState);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDragPlaceholder"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".team__container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 20px;\n  padding: 20px 0;\n}\n.team__container[_ngcontent-%COMP%]   .title__team[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: calc(50% - 50px);\n  width: 100px;\n  color: #3f51b5;\n  text-align: center;\n  background: #fff;\n}\n.team__container[_ngcontent-%COMP%]   .title__level[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  background: #eaeaea;\n  width: 100%;\n  text-align: center;\n}\n.team__container[_ngcontent-%COMP%]   .card.edit[_ngcontent-%COMP%] {\n  cursor: all-scroll;\n}\n.team__container[_ngcontent-%COMP%]   .card.edit[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.team__container[_ngcontent-%COMP%]   .btn__menu[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -12px;\n  left: calc(50% - 25px);\n  width: 50px;\n  text-align: center;\n  background: #fff;\n}\n.team__container[_ngcontent-%COMP%]   .btn__menu[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  min-width: 24px;\n  line-height: 24px;\n  padding: 0;\n  border-radius: 50%;\n}\n.team__container[_ngcontent-%COMP%]   .btn__menu[_ngcontent-%COMP%]     .mat-button-focus-overlay {\n  opacity: 0;\n  background: none;\n}\n.team__container[_ngcontent-%COMP%]   .btn__menu[_ngcontent-%COMP%]     .mat-button-ripple.mat-ripple {\n  border-radius: 50%;\n  top: 4px;\n  right: 2px;\n  bottom: 2px;\n  left: 2px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-preview[_ngcontent-%COMP%]     .btn__delete, .cdk-drag-preview[_ngcontent-%COMP%]     .player__info span:last-child {\n  display: none;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.teams.cdk-drop-list-dragging[_ngcontent-%COMP%]   .team__container[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.team__container[_ngcontent-%COMP%]   .custom__placeholder[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border: dotted 1px #ccc;\n  min-height: 112px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBRU07RUFDRSxtQkFBQTtBQUFSO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUZOO0FBSUk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBRk47QUFPQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFIQUFBO0FBSkY7QUFRRTs7RUFDMEMsYUFBQTtBQUw1QztBQVFBO0VBQ0Usc0RBQUE7QUFMRjtBQVFBO0VBQ0Usc0RBQUE7QUFMRjtBQU9BO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0RBQUE7QUFKRiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW1fX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4IDA7XG5cbiAgLnRpdGxlX190ZWFtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjb2xvcjogIzNmNTFiNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICAudGl0bGVfX2xldmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNhcmQge1xuICAgICYuZWRpdCB7XG4gICAgICBjdXJzb3I6IGFsbC1zY3JvbGw7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmJ0bl9fbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTEycHg7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgIC5tYXQtYnV0dG9uIHtcbiAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICAgIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1yaXBwbGUubWF0LXJpcHBsZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB0b3A6IDRweDtcbiAgICAgIHJpZ2h0OiAycHg7XG4gICAgICBib3R0b206IDJweDtcbiAgICAgIGxlZnQ6IDJweDtcbiAgICB9XG4gIH1cbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcblxuICA6Om5nLWRlZXAgLmJ0bl9fZGVsZXRlLFxuICA6Om5nLWRlZXAgIC5wbGF5ZXJfX2luZm8gc3BhbjpsYXN0LWNoaWxkIHtkaXNwbGF5OiBub25lO31cbn1cbiBcbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi50ZWFtcy5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC50ZWFtX19jb250YWluZXI6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4udGVhbV9fY29udGFpbmVyIC5jdXN0b21fX3BsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyOiBkb3R0ZWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDExMnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59Il19 */"] });


/***/ }),

/***/ "Pzqt":
/*!*******************************************!*\
  !*** ./src/app/services/teams.service.ts ***!
  \*******************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players.service */ "0NdQ");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "lGQG");





class TeamsService {
    constructor(firestore, playersService, authService) {
        this.firestore = firestore;
        this.playersService = playersService;
        this.authService = authService;
        this.firstTeam = [];
        this.secondTeam = [];
        this.thirdTeam = [];
        this.fourthTeam = [];
        this.countTeams = 0;
        this.genereteTeams = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.deletePlayerTeams = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.openSelectForTeam = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.scrollToTop = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.setOnePlayerTeam = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.setPlayerAllList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.changeSearchStateToReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getPlayersTeamService(nameTeam, userId) {
        let collection;
        if (userId) {
            collection = `users/${userId}/${nameTeam}`;
        }
        else {
            collection = nameTeam;
        }
        const playersDoc = this.firestore.collection(collection);
        playersDoc.get().toPromise().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                switch (nameTeam) {
                    case 'firstTeam':
                        this.firstTeam.push(doc.data());
                        break;
                    case 'secondTeam':
                        this.secondTeam.push(doc.data());
                        break;
                    case 'thirdTeam':
                        this.thirdTeam.push(doc.data());
                        break;
                    case 'fourthTeam':
                        this.fourthTeam.push(doc.data());
                        break;
                }
            });
            this.sortPlayersByPositionService(this.firstTeam);
            this.sortPlayersByPositionService(this.secondTeam);
            this.sortPlayersByPositionService(this.thirdTeam);
            this.sortPlayersByPositionService(this.fourthTeam);
            this.countTeamsService();
        });
    }
    countTeamsService() {
        this.countTeams++;
        if (this.countTeams > 3) {
            this.changeSearchStateToReady.next();
        }
    }
    sortPlayersByPositionService(nameTeam) {
        nameTeam.sort((a, b) => {
            if (a.sortPosition < b.sortPosition)
                return -1;
            else if (a.sortPosition > b.sortPosition)
                return 1;
            else
                return 0;
        });
    }
    getUserCollectionService(nameTeam) {
        let userId;
        if (this.authService.admin) {
            return nameTeam;
        }
        else {
            userId = this.authService.userData.uid;
            return `users/${userId}/${nameTeam}`;
        }
    }
    setTeamService(team, nameTeam) {
        const collection = this.getUserCollectionService(nameTeam);
        const playersDoc = this.firestore.collection(collection);
        playersDoc.get().toPromise().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                playersDoc.doc(doc.data().id).delete();
            });
            team.forEach(player => {
                this.playersService.saveDataPlayerService(player, collection);
            });
            this.countTeamsService();
        });
    }
    deleteTeamService(nameTeam) {
        const collection = this.getUserCollectionService(nameTeam);
        const playersDoc = this.firestore.collection(collection);
        playersDoc.get().toPromise().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                playersDoc.doc(doc.data().id).delete();
            });
        });
    }
    generateTeemsService() {
        this.genereteTeams.next();
    }
    deletePlayerTeamsService(player) {
        this.deletePlayerTeams.next(player);
    }
    openSelectForTeamService() {
        this.openSelectForTeam.next();
    }
    scrollToTopService() {
        this.scrollToTop.next();
    }
    setOnePlayerTeamService(player) {
        this.setOnePlayerTeam.next(player);
    }
    setPlayerAllListService(player) {
        this.setPlayerAllList.next(player);
    }
}
TeamsService.ɵfac = function TeamsService_Factory(t) { return new (t || TeamsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
TeamsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TeamsService, factory: TeamsService.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/teams.service */ "Pzqt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _languages_languages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./languages/languages.component */ "/WLA");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









const _c0 = function () { return { exact: true }; };
function AppComponent_nav_9_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r3.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("active", _r4.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "tab." + link_r3.label), " ");
} }
function AppComponent_nav_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_nav_9_a_1_Template, 4, 7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.navLinks);
} }
function AppComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, authService, teamsService) {
        this.router = router;
        this.authService = authService;
        this.teamsService = teamsService;
        this.activeLinkIndex = -1;
        this.topPosToStartShowing = 100;
        this.navLinks = [
            {
                label: 'main',
                link: '/',
                index: 0
            }, {
                label: 'table',
                link: '/players',
                index: 1
            }
        ];
    }
    ngOnInit() {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === this.router.url));
        });
        this.teamsService.scrollToTop.subscribe(() => {
            this.scrollToTop();
        });
    }
    navigateMainPage() {
        this.router.navigate([''], { queryParamsHandling: 'merge' });
    }
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShowBtnTop = true;
        }
        else {
            this.isShowBtnTop = false;
        }
    }
    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() { return ctx.checkScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 14, vars: 2, consts: [[1, "app"], [1, "header"], [1, "logo", 3, "click"], ["src", "favicon.ico", "alt", "logo"], ["mat-tab-nav-bar", "", "class", "nav", 4, "ngIf"], ["class", "btn btn__top", 3, "click", 4, "ngIf"], ["mat-tab-nav-bar", "", 1, "nav"], ["mat-tab-link", "", "class", "tab", "routerLinkActive", "", "queryParamsHandling", "merge", 3, "routerLink", "routerLinkActiveOptions", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", "queryParamsHandling", "merge", 1, "tab", 3, "routerLink", "routerLinkActiveOptions", "active"], ["rla", "routerLinkActive"], [1, "btn", "btn__top", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_2_listener() { return ctx.navigateMainPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TeamS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_nav_9_Template, 2, 1, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-auth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_button_13_Template, 1, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowBtnTop);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _languages_languages_component__WEBPACK_IMPORTED_MODULE_6__["LanguagesComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.app[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 100px);\n  max-width: 800px;\n  margin-bottom: 50px;\n}\n\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 60px;\n  margin-bottom: 20px;\n}\n\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin-right: 5px;\n}\n\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 2.2px;\n  color: #5a3510;\n  margin: 0;\n}\n\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 8px;\n  line-height: 10px;\n  letter-spacing: 3px;\n  font-weight: 400;\n  margin-left: 2px;\n  color: #3f51b5;\n  text-transform: uppercase;\n}\n\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .tab.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n\n.app[_ngcontent-%COMP%]   app-languages[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: fixed;\n  bottom: 20px;\n}\n\n.app[_ngcontent-%COMP%]   .btn__top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  align-self: flex-end;\n  cursor: pointer;\n  width: 35px;\n  height: 35px;\n  border: none;\n  border-radius: 50%;\n  text-indent: -9999px;\n  background: url('arrowup.svg') no-repeat center;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.32);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  z-index: 99;\n}\n\n.app[_ngcontent-%COMP%]   .btn__top[_ngcontent-%COMP%]:active, .app[_ngcontent-%COMP%]   .btn__top[_ngcontent-%COMP%]:focus {\n  transform: translate(2px, 2px);\n  box-shadow: none;\n  border: none;\n  outline: none;\n}\n\n.app[_ngcontent-%COMP%]   .btn__top[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.36);\n}\n\n  mat-ink-bar.mat-ink-bar {\n  margin-bottom: 46px;\n}\n\n  .mat-tab-nav-bar,   .mat-tab-header {\n  border: none;\n  align-self: flex-start;\n}\n\n@media screen and (max-width: 560px) {\n  .app[_ngcontent-%COMP%] {\n    width: calc(100% - 40px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFDTjs7QUFDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFDTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNSOztBQUFRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUVWOztBQUFRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBRVY7O0FBR007RUFDRSxjQUFBO0FBRFI7O0FBS0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFISjs7QUFLRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtDQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtBQUhKOztBQUtFO0VBSUUsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSEo7O0FBS0U7RUFDRSw0Q0FBQTtBQUhKOztBQU9FO0VBQ0UsbUJBQUE7QUFKSjs7QUFNRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQUpKOztBQVFBO0VBQ0U7SUFDRSx3QkFBQTtFQUxGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFwcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLmxvZ28ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMi4ycHg7XG4gICAgICAgICAgY29sb3I6ICM1YTM1MTA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgIGNvbG9yOiAjM2Y1MWI1O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLm5hdiB7XG4gICAgICAudGFiLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICMzZjUxYjU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFwcC1sYW5ndWFnZXMge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMjBweDtcbiAgfVxuICAuYnRuX190b3Age1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2Fycm93dXAuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB6LWluZGV4OiA5OTtcbiAgfVxuICAuYnRuX190b3A6YWN0aXZlLCAuYnRuX190b3A6Zm9jdXMge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAuYnRuX190b3A6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICB9XG59XG46Om5nLWRlZXAge1xuICBtYXQtaW5rLWJhci5tYXQtaW5rLWJhciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDZweDtcbiAgfVxuICAubWF0LXRhYi1uYXYtYmFyLCAubWF0LXRhYi1oZWFkZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5hcHAge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "Z/Cu":
/*!********************************************!*\
  !*** ./src/app/avatar/avatar.component.ts ***!
  \********************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class AvatarComponent {
    constructor(storage, authService) {
        this.storage = storage;
        this.authService = authService;
    }
    ngOnInit() {
        var _a;
        if ((_a = this.player) === null || _a === void 0 ? void 0 : _a.avatar) {
            const filePath = 'avatars/' + this.player.id + '/' + this.player.avatar;
            const ref = this.storage.ref(filePath);
            this.avatarUrl = ref.getDownloadURL();
        }
    }
}
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) { return new (t || AvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvatarComponent, selectors: [["app-avatar"]], inputs: { player: "player" }, decls: 3, vars: 3, consts: [[1, "avatar"], ["alt", "", 1, "img", "img__avatar", 3, "src"]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.avatarUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".avatar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-image: url('default_avatar.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  background-color: #d5d5d5;\n  overflow: hidden;\n}\n\n.img__avatar[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F2YXRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUVGIiwiZmlsZSI6ImF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdF9hdmF0YXIuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nX19hdmF0YXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/players.service */ "0NdQ");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/teams.service */ "Pzqt");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./players/players.component */ "99qh");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _main_select_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/select/select.component */ "hLek");
/* harmony import */ var _main_teams_teams_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/teams/teams.component */ "+npA");
/* harmony import */ var _main_teams_card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/teams/card/card.component */ "cP2V");
/* harmony import */ var _players_form_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./players/form/form.component */ "CdvH");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./popup/popup.component */ "GvNj");
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./avatar/avatar.component */ "Z/Cu");
/* harmony import */ var _main_teams_team_team_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/teams/team/team.component */ "MzZM");
/* harmony import */ var _languages_languages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./languages/languages.component */ "/WLA");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ "pj/B");
/* harmony import */ var ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-sharebuttons/icons */ "Sz05");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/analytics */ "h+eY");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./spinner/spinner.component */ "CZqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/core */ "fXoL");















































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_41__["TranslateHttpLoader"](http, './assets/locale/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_players_service__WEBPACK_IMPORTED_MODULE_5__["PlayersService"], _services_teams_service__WEBPACK_IMPORTED_MODULE_6__["TeamsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_26__["NgxMatSelectSearchModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__["DragDropModule"],
            ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_32__["ShareButtonsModule"].withConfig({
                debug: true
            }),
            ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_33__["ShareIconsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_39__["environment"].firebase),
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_35__["AngularFireAnalyticsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_36__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_37__["AngularFireStorageModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_38__["AngularFireAuthModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                },
                useDefaultLang: false,
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
        _players_players_component__WEBPACK_IMPORTED_MODULE_10__["PlayersComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
        _main_select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"],
        _main_teams_teams_component__WEBPACK_IMPORTED_MODULE_13__["TeamsComponent"],
        _main_teams_card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"],
        _players_form_form_component__WEBPACK_IMPORTED_MODULE_15__["FormComponent"],
        _popup_popup_component__WEBPACK_IMPORTED_MODULE_16__["PopupComponent"],
        _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__["AvatarComponent"],
        _main_teams_team_team_component__WEBPACK_IMPORTED_MODULE_18__["TeamComponent"],
        _languages_languages_component__WEBPACK_IMPORTED_MODULE_19__["LanguagesComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_20__["AuthComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__["SpinnerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
        ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_26__["NgxMatSelectSearchModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__["DragDropModule"], ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_32__["ShareButtonsModule"], ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_33__["ShareIconsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_35__["AngularFireAnalyticsModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_36__["AngularFirestoreModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_37__["AngularFireStorageModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_38__["AngularFireAuthModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__["TranslateModule"]] }); })();


/***/ }),

/***/ "cP2V":
/*!***************************************************!*\
  !*** ./src/app/main/teams/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/players.service */ "0NdQ");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/teams.service */ "Pzqt");
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../avatar/avatar.component */ "Z/Cu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function CardComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onDeletePlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CardComponent {
    constructor(playersService, teamsService) {
        this.playersService = playersService;
        this.teamsService = teamsService;
    }
    ngOnInit() {
    }
    onDeletePlayer() {
        const indexPlayer = this.playersService.selectedPlayers.findIndex(player => player.id === this.player.id);
        this.playersService.selectedPlayers.splice(indexPlayer, 1);
        this.teamsService.deletePlayerTeamsService(this.player);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_players_service__WEBPACK_IMPORTED_MODULE_1__["PlayersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { player: "player", indexTeam: "indexTeam", editState: "editState" }, decls: 7, vars: 4, consts: [[1, "avatar__max", 3, "player"], [1, "player__info"], [1, "player__name"], [1, "player__surname"], ["mat-icon-button", "", "class", "btn btn__delete", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "btn", "btn__delete", 3, "click"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-avatar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_button_6_Template, 3, 0, "button", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx.player);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.player.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editState);
    } }, directives: [_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__["AvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding-top: 15px;\n}\n[_nghost-%COMP%]   app-avatar[_ngcontent-%COMP%] {\n  pointer-events: none;\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   .player__info[_ngcontent-%COMP%] {\n  pointer-events: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .btn__delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 7px;\n  right: 7px;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]   .btn__delete[_ngcontent-%COMP%]:hover {\n  background: #fff;\n}\n[_nghost-%COMP%]   .btn__delete[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7QUFBTjtBQUVJO0VBQ0UsZUFBQTtBQUFOIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuXG4gIGFwcC1hdmF0YXIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAucGxheWVyX19pbmZvIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICAuYnRuX19kZWxldGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDdweDtcbiAgICByaWdodDogN3B4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB9XG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "dAlW":
/*!********************************!*\
  !*** ./src/app/admin.guard.ts ***!
  \********************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AdminGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(user => user && user.roles.admin ? true : false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(isAdmin => {
            if (!isAdmin) {
                this.router.navigate(['404']);
                console.error('Access denied - Admins only');
            }
        }));
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hLek":
/*!*************************************************!*\
  !*** ./src/app/main/select/select.component.ts ***!
  \*************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/players.service */ "0NdQ");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/teams.service */ "Pzqt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../avatar/avatar.component */ "Z/Cu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















const _c0 = ["multiSelect"];
function SelectComponent_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r4.name, " ");
} }
const _c1 = function (a0) { return { "top": a0 }; };
function SelectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SelectComponent_div_4_span_3_Template, 4, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r0.openedOrClosedSelect));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx_r0.playersCtrl.value.length || null, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.playersCtrl == null ? null : ctx_r0.playersCtrl.value);
} }
function SelectComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SelectComponent_mat_option_15_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const player_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.onSelectForTeam(player_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-avatar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", player_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("player", player_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", player_r5.name, " ", player_r5.surname, " ");
} }
class SelectComponent {
    constructor(playersService, teamsService) {
        this.playersService = playersService;
        this.teamsService = teamsService;
        this.players = this.playersService.allPlayers;
        this.playersCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.playersFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.filteredPlayers = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.uniquePlayers = [];
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.playersService.deleteSelectedPlayers.subscribe(() => {
            this.playersCtrl.setValue([]);
            this.playersService.selectedPlayers = [];
        });
        this.teamsService.openSelectForTeam.subscribe(() => {
            this.selectForTeamState = true;
            document.body.classList.add('disabled__checkbox');
            this.multiSelect.open();
        });
        this.teamsService.setPlayerAllList.subscribe((player) => {
            this.players.push(player);
            this.filteredPlayers.next(this.players.slice());
        });
        this.setInitialSelection();
        this.loadInitialPlayerList();
        this.playersFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterOptions();
        });
    }
    ngAfterViewInit() {
        this.setInitialValue();
    }
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }
    sortPlayersByPopularity(players) {
        players.sort((a, b) => {
            if (a.sortPopularity < b.sortPopularity)
                return -1;
            else if (a.sortPopularity > b.sortPopularity)
                return 1;
            else
                return 0;
        });
    }
    onSelectForTeam(player) {
        if (this.selectForTeamState) {
            this.teamsService.setOnePlayerTeamService(player);
            this.multiSelect.close();
            this.multiSelect._onBlur();
        }
    }
    setInitialValue() {
        this.filteredPlayers
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.multiSelect.compareWith = (a, b) => a && b && a.id === b.id;
        });
    }
    setInitialSelection() {
        this.playersService.selectedPlayersData.subscribe(() => {
            this.sortPlayersByPopularity(this.playersService.selectedPlayers);
            this.playersCtrl.setValue(this.playersService.selectedPlayers);
        });
    }
    loadInitialPlayerList() {
        if (this.players.length <= 1) {
            this.playersService.allPlayersData.subscribe((players) => {
                this.filteredPlayers.next(players.slice());
            });
        }
        else {
            this.sortPlayersByPopularity(this.players);
            this.filteredPlayers.next(this.players.slice());
        }
    }
    onSelectedPlayers(players) {
        this.playersService.selectedPlayers = players;
    }
    filterOptions() {
        if (!this.players) {
            return;
        }
        let search = this.playersFilterCtrl.value;
        if (!search) {
            this.loadInitialPlayerList();
            return;
        }
        else {
            search = search.trim().toLowerCase();
        }
        this.filteredPlayers.next(this.players.filter(player => player.name.toLowerCase().indexOf(search) > -1));
    }
    onCloseOptions() {
        this.multiSelect.close();
    }
    openedChangeSelect(value) {
        this.openedOrClosedSelect = value;
        if (value) {
            document.body.classList.add('disabled__scroll');
            this.setInitialValue();
        }
        else {
            if (!this.selectForTeamState) {
                this.teamsService.generateTeemsService();
            }
            this.selectForTeamState = false;
            document.body.classList.remove('disabled__checkbox');
            document.body.classList.remove('disabled__scroll');
        }
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_players_service__WEBPACK_IMPORTED_MODULE_4__["PlayersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_teams_service__WEBPACK_IMPORTED_MODULE_5__["TeamsService"])); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], viewQuery: function SelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.multiSelect = _t.first);
    } }, decls: 17, vars: 19, consts: [[1, "main__select"], [1, "selected__label", 3, "ngClass"], ["class", "selected__players", 3, "ngClass", 4, "ngIf"], ["panelClass", "example-long-panel", 3, "formControl", "multiple", "valueChange", "openedChange"], ["multiSelect", ""], ["mat-icon-button", "", 1, "btn", "btn__home", 3, "click"], ["color", "primary"], ["disableInitialFocus", "false", "preventHomeEndKeyPropagation", "false", 3, "formControl", "placeholderLabel", "noEntriesFoundLabel"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "selected__players", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "avatar__min", 3, "player"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SelectComponent_div_4_Template, 4, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function SelectComponent_Template_mat_select_valueChange_6_listener($event) { return ctx.onSelectedPlayers($event); })("openedChange", function SelectComponent_Template_mat_select_openedChange_6_listener($event) { return ctx.openedChangeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SelectComponent_Template_button_click_8_listener() { return ctx.onCloseOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ngx-mat-select-search", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SelectComponent_mat_option_15_Template, 3, 4, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c1, ctx.openedOrClosedSelect || ctx.playersCtrl.value && ctx.playersCtrl.value.length > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 9, "select.lable"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playersCtrl.value && ctx.playersCtrl.value.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.playersCtrl)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholderLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 11, "select.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("noEntriesFoundLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 13, "select.no.found.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.playersFilterCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 15, ctx.filteredPlayers));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_12__["MatSelectSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_13__["AvatarComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".main__select[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.selected__label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 0;\n  right: 20px;\n  height: 22px;\n  font-size: 14px;\n  color: #949494;\n  transition: 0.3s ease-out;\n}\n\n.selected__label.top[_ngcontent-%COMP%] {\n  top: -5px;\n  right: 0;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.selected__players[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 0;\n  right: 20px;\n  height: 22px;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  z-index: 9;\n  pointer-events: none;\n  transition: 0.3s ease-out;\n}\n\n.selected__players.top[_ngcontent-%COMP%] {\n  top: -5px;\n  left: 50px;\n  right: 0;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.selected__players[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.selected__players[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn__home[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 6px;\n  width: 35px;\n  height: 35px;\n  line-height: 10px;\n  border-radius: 50%;\n  z-index: 999;\n  cursor: pointer;\n}\n\n.btn__home[_ngcontent-%COMP%]:hover {\n  background: #F5F5F5;\n}\n\n.mat-form-field.mat-focused[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background-image: url('fon_select.svg');\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: 200px;\n  background-position: 62% 160px;\n  width: calc(100% + 20px);\n  height: 500px;\n  z-index: 9999;\n  pointer-events: none;\n  -webkit-animation: opacity 0.7s ease-in alternate;\n          animation: opacity 0.7s ease-in alternate;\n}\n\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes opacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\napp-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 10px;\n  margin-left: 5px;\n}\n\n  .mat-select-search-panel {\n  min-width: 100% !important;\n}\n\n  .cdk-overlay-pane {\n  transform: none !important;\n}\n\n  .mat-select-panel.example-long-panel {\n  max-height: 500px;\n}\n\n  .disabled__checkbox .mat-option .mat-pseudo-checkbox {\n  display: none;\n}\n\n  .disabled__checkbox .mat-option.mat-selected {\n  display: none;\n}\n\n@media screen and (max-width: 900px) {\n    .mat-select-panel.example-long-panel {\n    max-height: 380px;\n  }\n\n  .mat-form-field.mat-focused[_ngcontent-%COMP%]::before {\n    height: 400px;\n    background-size: 147px;\n    background-position-y: 157px;\n  }\n}\n\n@media screen and (max-width: 560px) {\n  .btn__clear.mat-button[_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n\n  .mat-form-field.mat-focused[_ngcontent-%COMP%]::before {\n    background-position-x: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBRTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBRUo7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUFFO0VBQ0UsYUFBQTtBQUVKOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREU7RUFDRSxtQkFBQTtBQUdKOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUFHRjs7QUFEQTtFQUNFO0lBQU8sVUFBQTtFQUtQO0VBSkE7SUFBTyxVQUFBO0VBT1A7QUFDRjs7QUFWQTtFQUNFO0lBQU8sVUFBQTtFQUtQO0VBSkE7SUFBTyxVQUFBO0VBT1A7QUFDRjs7QUFOQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTkE7RUFDRSwwQkFBQTtBQVNGOztBQVBBO0VBQ0UsMEJBQUE7QUFVRjs7QUFSQTtFQUNFLGlCQUFBO0FBV0Y7O0FBVEE7RUFBaUUsYUFBQTtBQWFqRTs7QUFaQTtFQUF5RCxhQUFBO0FBZ0J6RDs7QUFkQTtFQUNFO0lBQ0UsaUJBQUE7RUFpQkY7O0VBZEE7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSw0QkFBQTtFQWlCRjtBQUNGOztBQWRBO0VBQ0U7SUFDRSxpQkFBQTtFQWdCRjs7RUFkQTtJQUNFLDBCQUFBO0VBaUJGO0FBQ0YiLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fX3NlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnNlbGVjdGVkX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMjBweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTQ5NDk0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xuXG4gICYudG9wIHtcbiAgICB0b3A6IC01cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICB9XG59XG4uc2VsZWN0ZWRfX3BsYXllcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgei1pbmRleDogOTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG5cbiAgJi50b3Age1xuICAgIHRvcDogLTVweDtcbiAgICBsZWZ0OiA1MHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgfVxuICBzcGFuIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICA6bGFzdC1jaGlsZCBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG5fX2hvbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiA2cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIH1cbn1cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mb25fc2VsZWN0LnN2Zyk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDYyJSAxNjBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDIwcHgpO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IDAuN3MgZWFzZS1pbiBhbHRlcm5hdGU7XG59XG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSAgIHsgb3BhY2l0eTogMDsgfVxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuYXBwLWF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbjo6bmctZGVlcCAubWF0LXNlbGVjdC1zZWFyY2gtcGFuZWwge1xuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSB7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXBhbmVsLmV4YW1wbGUtbG9uZy1wYW5lbCB7IFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cbjo6bmctZGVlcCAuZGlzYWJsZWRfX2NoZWNrYm94IC5tYXQtb3B0aW9uIC5tYXQtcHNldWRvLWNoZWNrYm94IHsgZGlzcGxheTogbm9uZTsgfVxuOjpuZy1kZWVwIC5kaXNhYmxlZF9fY2hlY2tib3ggLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkIHsgZGlzcGxheTogbm9uZTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtcGFuZWwuZXhhbXBsZS1sb25nLXBhbmVsIHsgXG4gICAgbWF4LWhlaWdodDogMzgwcHg7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQ6OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE0N3B4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMTU3cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLmJ0bl9fY2xlYXIubWF0LWJ1dHRvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogOTAlO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");







class AuthService {
    constructor(fireAuth, firestore) {
        this.fireAuth = fireAuth;
        this.firestore = firestore;
        this.fireAuth.authState.subscribe(user => {
            if (user) {
                this.userData = JSON.parse(localStorage.getItem('user'));
                this.userPhoto = JSON.parse(localStorage.getItem('userPhoto'));
            }
            else {
                localStorage.setItem('user', null);
                localStorage.setItem('userPhoto', null);
            }
        });
        this.user = this.fireAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(user => {
            if (user) {
                return this.firestore.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }
        }));
        this.isAdminServise();
    }
    loginWithGoogleService() {
        return this.authLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider());
    }
    loginWithFacebookService() {
        return this.authLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.FacebookAuthProvider());
    }
    authLogin(provider) {
        return this.fireAuth.signInWithPopup(provider)
            .then((result) => {
            this.getUrlUserPhoto(result.user.providerData[0].providerId, result.user, result.credential);
            this.updeteUserData(result.user);
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('userPhoto', JSON.stringify(this.userPhoto));
        }).catch((error) => {
            console.log(error);
        });
    }
    getUrlUserPhoto(providerId, user, credential) {
        if (providerId === 'google.com') {
            this.userPhoto = user.photoURL;
        }
        if (providerId === 'facebook.com') {
            this.userPhoto = `${user.photoURL}/?access_token=${credential.accessToken}`;
        }
    }
    updeteUserData(user) {
        return this.firestore.collection('users')
            .doc(user.uid)
            .set({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            roles: {
                editor: true
            }
        }, { merge: true });
    }
    logOutService() {
        return this.fireAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.userData = null;
        });
    }
    isAdminServise() {
        this.user.subscribe(user => {
            var _a;
            if (!user) {
                return this.admin = false;
            }
            if (((_a = user.roles) === null || _a === void 0 ? void 0 : _a.admin) === true) {
                return this.admin = true;
            }
            else {
                return this.admin = false;
            }
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class NotFoundComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
    }
    backClicked() {
        this.location.back();
    }
    navigateMainPage() {
        this.router.navigate([''], { queryParamsHandling: 'preserve' });
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 9, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Not found page!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_5_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_7_listener() { return ctx.navigateMainPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/main/main.component */ "wlho");
/* harmony import */ var _app_players_players_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/players/players.component */ "99qh");
/* harmony import */ var _app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/not-found/not-found.component */ "nod/");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.guard */ "dAlW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _app_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] },
    { path: 'players', component: _app_players_players_component__WEBPACK_IMPORTED_MODULE_2__["PlayersComponent"], canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]] },
    { path: '404', component: _app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teams/teams.component */ "+npA");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select/select.component */ "hLek");





function MainComponent_app_select_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-select");
} }
class MainComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 1, consts: [[1, "main"], [4, "ngIf"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_app_select_1_Template, 1, 0, "app-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _teams_teams_component__WEBPACK_IMPORTED_MODULE_3__["TeamsComponent"], _select_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map