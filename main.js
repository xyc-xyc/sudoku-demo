(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>\n<!-- <app-life></app-life> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sudoku-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cell/cell.component */ "./src/app/cell/cell.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _life_life_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./life/life.component */ "./src/app/life/life.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"],
                _cell_cell_component__WEBPACK_IMPORTED_MODULE_7__["CellComponent"],
                _life_life_component__WEBPACK_IMPORTED_MODULE_9__["LifeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-list {\n    width: 486px;\n    border: 1px solid;\n}\n\nmat-grid-tile {\n    border: 1px solid;\n}\n\n.thick-bottom {\n    border-bottom: 1px solid;\n}\n\n.thick-right {\n    border-right: 1px solid;\n}\n\nbutton {\n    width: 80px;\n    height: 30px;\n    margin-right: 0.5em;\n}\n\ninput {\n    width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtbGlzdCB7XG4gICAgd2lkdGg6IDQ4NnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG5tYXQtZ3JpZC10aWxlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLnRoaWNrLWJvdHRvbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuXG4udGhpY2stcmlnaHQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xufVxuXG5idXR0b24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDQwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"9\" rowHeight=\"54px\">\n  <mat-grid-tile *ngFor=\"let cell of cells ; index as i\">\n    <app-cell [cell]=\"cell\" (chooseEvent)=\"choose($event, true)\"></app-cell>\n  </mat-grid-tile>\n</mat-grid-list>\n<hr />\n<!-- <button (click)=\"test()\">test</button> -->\n<button (click)=\"newboard()\">new</button>\n\n<button (click)=\"record()\">record</button>\n\n<button (click)=\"next()\">next</button>\n<button (click)=\"undo()\" [disabled]=\"steps.length==0\">undo</button>\n<!-- \n<button (click)=\"undo(true)\" [disabled]=\"steps.length==0\">undo to last try</button> -->\n<button (click)=\"resolve()\">resolve</button>\n<label><input type=\"checkbox\" [checked]=\"willGuessAndUndo\" (click)=\"toggleGuessFlag()\" style=\"width:20px;\" />Guess</label>\n<hr />\n<div>\n  <label>Start:<input type=\"text\" [value]=\"starttime\" /></label>\n</div>\n<div>\n  <label>End:<input type=\"text\" [value]=\"endtime\" /></label>\n</div>\n<div>\n  {{status}}\n</div>"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");



var BoardComponent = /** @class */ (function () {
    function BoardComponent(modelService) {
        this.steps = [];
        this.starttime = '';
        this.endtime = '';
        this.willGuessAndUndo = false;
        this.status = 'trying...';
        this.modelService = modelService;
        this.lastTryInit = modelService.lastTryInit;
        this.defaultCandidateColor = modelService.defaultCandidateColor;
        this.newboard();
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var init;
        init = '[]';
        // test
        // init = '[{"position":0,"value":1,"isDeterministic":false,"lastTry":0},{"position":9,"value":2,"isDeterministic":false,"lastTry":0},{"position":18,"value":3,"isDeterministic":false,"lastTry":0},{"position":27,"value":4,"isDeterministic":false,"lastTry":0},{"position":36,"value":5,"isDeterministic":false,"lastTry":0},{"position":45,"value":6,"isDeterministic":false,"lastTry":0}]';
        // test house
        // init = '[{"position":9,"value":1,"isDeterministic":false},{"position":21,"value":1,"isDeterministic":false},{"position":42,"value":1,"isDeterministic":false},{"position":79,"value":1,"isDeterministic":false}]';
        // the most difficult
        init = '[{"position":0,"value":8,"isDeterministic":true},{"position":11,"value":3,"isDeterministic":true},{"position":12,"value":6,"isDeterministic":true},{"position":19,"value":7,"isDeterministic":true},{"position":22,"value":9,"isDeterministic":true},{"position":24,"value":2,"isDeterministic":true},{"position":28,"value":5,"isDeterministic":true},{"position":32,"value":7,"isDeterministic":true},{"position":40,"value":4,"isDeterministic":true},{"position":41,"value":5,"isDeterministic":true},{"position":42,"value":7,"isDeterministic":true},{"position":48,"value":1,"isDeterministic":true},{"position":52,"value":3,"isDeterministic":true},{"position":56,"value":1,"isDeterministic":true},{"position":65,"value":8,"isDeterministic":true},{"position":66,"value":5,"isDeterministic":true},{"position":73,"value":9,"isDeterministic":true},{"position":61,"value":6,"isDeterministic":true},{"position":62,"value":8,"isDeterministic":true},{"position":70,"value":1,"isDeterministic":true},{"position":78,"value":4,"isDeterministic":true}]';
        // a case
        // init = '[{"position":3,"value":6,"isDeterministic":false},{"position":6,"value":9,"isDeterministic":false},{"position":7,"value":2,"isDeterministic":false},{"position":16,"value":3,"isDeterministic":false},{"position":25,"value":1,"isDeterministic":false},{"position":17,"value":5,"isDeterministic":false},{"position":35,"value":2,"isDeterministic":false},{"position":53,"value":9,"isDeterministic":false},{"position":33,"value":7,"isDeterministic":false},{"position":42,"value":3,"isDeterministic":false},{"position":77,"value":8,"isDeterministic":false},{"position":50,"value":3,"isDeterministic":false},{"position":41,"value":6,"isDeterministic":false},{"position":22,"value":2,"isDeterministic":false},{"position":58,"value":4,"isDeterministic":false},{"position":39,"value":9,"isDeterministic":false},{"position":30,"value":1,"isDeterministic":false},{"position":27,"value":8,"isDeterministic":false},{"position":45,"value":4,"isDeterministic":false},{"position":38,"value":5,"isDeterministic":false},{"position":55,"value":7,"isDeterministic":false},{"position":64,"value":1,"isDeterministic":false},{"position":73,"value":9,"isDeterministic":false},{"position":63,"value":3,"isDeterministic":false},{"position":47,"value":7,"isDeterministic":false},{"position":74,"value":4,"isDeterministic":false}]';
        // a case for strategy IV
        //init = '[{"position":0,"value":4,"isDeterministic":true},{"position":3,"value":1,"isDeterministic":true},{"position":5,"value":5,"isDeterministic":true},{"position":14,"value":3,"isDeterministic":true},{"position":17,"value":6,"isDeterministic":true},{"position":21,"value":2,"isDeterministic":true},{"position":22,"value":7,"isDeterministic":true},{"position":25,"value":3,"isDeterministic":true},{"position":27,"value":7,"isDeterministic":true},{"position":29,"value":2,"isDeterministic":true},{"position":33,"value":1,"isDeterministic":true},{"position":34,"value":6,"isDeterministic":true},{"position":37,"value":8,"isDeterministic":true},{"position":43,"value":2,"isDeterministic":true},{"position":46,"value":6,"isDeterministic":true},{"position":47,"value":9,"isDeterministic":true},{"position":51,"value":4,"isDeterministic":true},{"position":53,"value":7,"isDeterministic":true},{"position":55,"value":9,"isDeterministic":true},{"position":58,"value":3,"isDeterministic":true},{"position":59,"value":1,"isDeterministic":true},{"position":63,"value":3,"isDeterministic":true},{"position":66,"value":4,"isDeterministic":true},{"position":75,"value":6,"isDeterministic":true},{"position":77,"value":9,"isDeterministic":true},{"position":80,"value":8,"isDeterministic":true}]';
        //    init='[{"position":7,"value":8,"isDeterministic":true},{"position":6,"value":3,"isDeterministic":true},{"position":5,"value":1,"isDeterministic":true},{"position":13,"value":7,"isDeterministic":true},{"position":11,"value":5,"isDeterministic":true},{"position":9,"value":6,"isDeterministic":true},{"position":20,"value":3,"isDeterministic":true},{"position":21,"value":2,"isDeterministic":true},{"position":22,"value":9,"isDeterministic":true},{"position":29,"value":8,"isDeterministic":true},{"position":34,"value":1,"isDeterministic":true},{"position":35,"value":3,"isDeterministic":true},{"position":43,"value":9,"isDeterministic":true},{"position":37,"value":5,"isDeterministic":true},{"position":46,"value":2,"isDeterministic":true},{"position":45,"value":9,"isDeterministic":true},{"position":51,"value":7,"isDeterministic":true},{"position":60,"value":1,"isDeterministic":true},{"position":59,"value":7,"isDeterministic":true},{"position":58,"value":8,"isDeterministic":true},{"position":67,"value":5,"isDeterministic":true},{"position":69,"value":9,"isDeterministic":true},{"position":71,"value":8,"isDeterministic":true},{"position":75,"value":9,"isDeterministic":true},{"position":74,"value":4,"isDeterministic":true},{"position":73,"value":7,"isDeterministic":true}]';
        //
        //init='[{"position":1,"value":5,"isDeterministic":true},{"position":9,"value":2,"isDeterministic":true},{"position":2,"value":7,"isDeterministic":true},{"position":21,"value":9,"isDeterministic":true},{"position":24,"value":4,"isDeterministic":true},{"position":15,"value":6,"isDeterministic":true},{"position":17,"value":1,"isDeterministic":true},{"position":30,"value":2,"isDeterministic":true},{"position":29,"value":1,"isDeterministic":true},{"position":27,"value":8,"isDeterministic":true},{"position":36,"value":7,"isDeterministic":true},{"position":39,"value":5,"isDeterministic":true},{"position":41,"value":1,"isDeterministic":true},{"position":44,"value":3,"isDeterministic":true},{"position":51,"value":2,"isDeterministic":true},{"position":53,"value":8,"isDeterministic":true},{"position":71,"value":9,"isDeterministic":true},{"position":79,"value":5,"isDeterministic":true},{"position":78,"value":3,"isDeterministic":true},{"position":50,"value":6,"isDeterministic":true},{"position":59,"value":9,"isDeterministic":true},{"position":56,"value":4,"isDeterministic":true},{"position":65,"value":8,"isDeterministic":true},{"position":63,"value":5,"isDeterministic":true}]';
        // evil
        //init = '[{"position":7,"value":1,"isDeterministic":true},{"position":8,"value":2,"isDeterministic":true},{"position":17,"value":3,"isDeterministic":true},{"position":24,"value":4,"isDeterministic":true},{"position":35,"value":5,"isDeterministic":true},{"position":20,"value":2,"isDeterministic":true},{"position":21,"value":3,"isDeterministic":true},{"position":29,"value":1,"isDeterministic":true},{"position":30,"value":8,"isDeterministic":true},{"position":37,"value":6,"isDeterministic":true},{"position":40,"value":7,"isDeterministic":true},{"position":50,"value":9,"isDeterministic":true},{"position":42,"value":8,"isDeterministic":true},{"position":57,"value":5,"isDeterministic":true},{"position":56,"value":8,"isDeterministic":true},{"position":67,"value":4,"isDeterministic":true},{"position":77,"value":6,"isDeterministic":true},{"position":69,"value":5,"isDeterministic":true},{"position":73,"value":7,"isDeterministic":true},{"position":72,"value":4,"isDeterministic":true},{"position":63,"value":9,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":74,"value":5,"nextStep":[{"id":74,"value":5}]},{"position":74,"value":5,"isDeterministic":true}]';
        // solution 
        //init='[{"action":1,"isDeterministic":true,"position":0,"value":8,"nextStep":[{"id":0,"value":8}]},{"position":0,"value":8,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":46,"value":8,"nextStep":[{"id":46,"value":8}]},{"position":46,"value":8,"isDeterministic":true},{"position":1,"value":3,"isDeterministic":false},{"action":1,"isDeterministic":true,"position":2,"value":9,"nextStep":[{"id":2,"value":9}]},{"position":2,"value":9,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":28,"value":9,"nextStep":[{"id":28,"value":9}]},{"position":28,"value":9,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":10,"value":4,"nextStep":[{"id":10,"value":4}]},{"position":10,"value":4,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":19,"value":5,"nextStep":[{"id":19,"value":5}]},{"position":19,"value":5,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":16,"value":5,"nextStep":[{"id":16,"value":5}]},{"position":16,"value":5,"isDeterministic":true},{"position":3,"value":4,"isDeterministic":false},{"action":1,"isDeterministic":true,"position":4,"value":6,"nextStep":[{"id":4,"value":6}]},{"position":4,"value":6,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":6,"value":7,"nextStep":[{"id":6,"value":7}]},{"position":6,"value":7,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":5,"value":5,"nextStep":[{"id":5,"value":5}]},{"position":5,"value":5,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":48,"value":6,"nextStep":[{"id":48,"value":6}]},{"position":48,"value":6,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":36,"value":5,"nextStep":[{"id":36,"value":5}]},{"position":36,"value":5,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":49,"value":5,"nextStep":[{"id":49,"value":5}]},{"position":49,"value":5,"isDeterministic":true},{"position":9,"value":1,"isDeterministic":false},{"position":11,"value":6,"isDeterministic":false},{"action":1,"isDeterministic":true,"position":15,"value":9,"nextStep":[{"id":15,"value":9}]},{"position":15,"value":9,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":18,"value":7,"nextStep":[{"id":18,"value":7}]},{"position":18,"value":7,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":65,"value":3,"nextStep":[{"id":65,"value":3}]},{"position":65,"value":3,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":38,"value":4,"nextStep":[{"id":38,"value":4}]},{"position":38,"value":4,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":47,"value":7,"nextStep":[{"id":47,"value":7}]},{"position":47,"value":7,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":54,"value":6,"nextStep":[{"id":54,"value":6}]},{"position":54,"value":6,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":22,"value":9,"nextStep":[{"id":22,"value":9}]},{"position":22,"value":9,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":23,"value":1,"nextStep":[{"id":23,"value":1}]},{"position":23,"value":1,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":34,"value":7,"nextStep":[{"id":34,"value":7}]},{"position":34,"value":7,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":32,"value":4,"nextStep":[{"id":32,"value":4}]},{"position":32,"value":4,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":33,"value":6,"nextStep":[{"id":33,"value":6}]},{"position":33,"value":6,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":75,"value":9,"nextStep":[{"id":75,"value":9}]},{"position":75,"value":9,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":39,"value":1,"nextStep":[{"id":39,"value":1}]},{"position":39,"value":1,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":44,"value":9,"nextStep":[{"id":44,"value":9}]},{"position":44,"value":9,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":61,"value":9,"nextStep":[{"id":61,"value":9}]},{"position":61,"value":9,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":62,"value":4,"nextStep":[{"id":62,"value":4}]},{"position":62,"value":4,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":53,"value":1,"nextStep":[{"id":53,"value":1}]},{"position":53,"value":1,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":80,"value":8,"nextStep":[{"id":80,"value":8}]},{"position":80,"value":8,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":26,"value":6,"nextStep":[{"id":26,"value":6}]},{"position":26,"value":6,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":25,"value":8,"nextStep":[{"id":25,"value":8}]},{"position":25,"value":8,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":71,"value":7,"nextStep":[{"id":71,"value":7}]},{"position":71,"value":7,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":66,"value":2,"nextStep":[{"id":66,"value":2}]},{"position":66,"value":2,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":12,"value":7,"nextStep":[{"id":12,"value":7}]},{"position":12,"value":7,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":64,"value":1,"nextStep":[{"id":64,"value":1}]},{"position":64,"value":1,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":55,"value":2,"nextStep":[{"id":55,"value":2}]},{"position":55,"value":2,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":68,"value":8,"nextStep":[{"id":68,"value":8}]},{"position":68,"value":8,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":14,"value":2,"nextStep":[{"id":14,"value":2}]},{"position":14,"value":2,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":13,"value":8,"nextStep":[{"id":13,"value":8}]},{"position":13,"value":8,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":41,"value":3,"nextStep":[{"id":41,"value":3}]},{"position":41,"value":3,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":31,"value":2,"nextStep":[{"id":31,"value":2}]},{"position":31,"value":2,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":27,"value":3,"nextStep":[{"id":27,"value":3}]},{"position":27,"value":3,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":43,"value":2,"nextStep":[{"id":43,"value":2}]},{"position":43,"value":2,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":45,"value":2,"nextStep":[{"id":45,"value":2}]},{"position":45,"value":2,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":51,"value":3,"nextStep":[{"id":51,"value":3}]},{"position":51,"value":3,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":52,"value":4,"nextStep":[{"id":52,"value":4}]},{"position":52,"value":4,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":59,"value":7,"nextStep":[{"id":59,"value":7}]},{"position":59,"value":7,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":60,"value":1,"nextStep":[{"id":60,"value":1}]},{"position":60,"value":1,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":58,"value":3,"nextStep":[{"id":58,"value":3}]},{"position":58,"value":3,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":70,"value":6,"nextStep":[{"id":70,"value":6}]},{"position":70,"value":6,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":76,"value":1,"nextStep":[{"id":76,"value":1}]},{"position":76,"value":1,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":78,"value":2,"nextStep":[{"id":78,"value":2}]},{"position":78,"value":2,"isDeterministic":true},{"action":1,"isDeterministic":true,"position":79,"value":3,"nextStep":[{"id":79,"value":3}]},{"position":79,"value":3,"isDeterministic":true}]';
        // expert
        //init = '[{"position":2,"value":3,"isDeterministic":true},{"position":3,"value":8,"isDeterministic":true},{"position":5,"value":2,"isDeterministic":true},{"position":13,"value":3,"isDeterministic":true},{"position":6,"value":7,"isDeterministic":true},{"position":15,"value":4,"isDeterministic":true},{"position":19,"value":8,"isDeterministic":true},{"position":20,"value":7,"isDeterministic":true},{"position":9,"value":1,"isDeterministic":true},{"position":26,"value":2,"isDeterministic":true},{"position":31,"value":6,"isDeterministic":true},{"position":34,"value":9,"isDeterministic":true},{"position":43,"value":4,"isDeterministic":true},{"position":44,"value":6,"isDeterministic":true},{"position":37,"value":9,"isDeterministic":true},{"position":46,"value":4,"isDeterministic":true},{"position":36,"value":5,"isDeterministic":true},{"position":49,"value":8,"isDeterministic":true},{"position":54,"value":3,"isDeterministic":true},{"position":65,"value":2,"isDeterministic":true},{"position":74,"value":4,"isDeterministic":true},{"position":75,"value":5,"isDeterministic":true},{"position":67,"value":9,"isDeterministic":true},{"position":77,"value":6,"isDeterministic":true},{"position":78,"value":3,"isDeterministic":true},{"position":60,"value":6,"isDeterministic":true},{"position":61,"value":7,"isDeterministic":true},{"position":71,"value":4,"isDeterministic":true}]';
        // easy
        //init = '[{"position":4,"value":3,"isDeterministic":true},{"position":5,"value":5,"isDeterministic":true},{"position":6,"value":7,"isDeterministic":true},{"position":11,"value":2,"isDeterministic":true},{"position":23,"value":8,"isDeterministic":true},{"position":28,"value":1,"isDeterministic":true},{"position":34,"value":6,"isDeterministic":true},{"position":35,"value":2,"isDeterministic":true},{"position":36,"value":2,"isDeterministic":true},{"position":37,"value":5,"isDeterministic":true},{"position":40,"value":9,"isDeterministic":true},{"position":43,"value":3,"isDeterministic":true},{"position":52,"value":4,"isDeterministic":true},{"position":46,"value":7,"isDeterministic":true},{"position":45,"value":8,"isDeterministic":true},{"position":57,"value":6,"isDeterministic":true},{"position":75,"value":2,"isDeterministic":true},{"position":74,"value":4,"isDeterministic":true},{"position":76,"value":1,"isDeterministic":true},{"position":69,"value":5,"isDeterministic":true}]';
        // pi
        // init = '[{"position":4,"value":3,"isDeterministic":true},{"position":5,"value":1,"isDeterministic":true},{"position":15,"value":4,"isDeterministic":true},{"position":25,"value":1,"isDeterministic":true},{"position":35,"value":5,"isDeterministic":true},{"position":44,"value":9,"isDeterministic":true},{"position":53,"value":2,"isDeterministic":true},{"position":61,"value":6,"isDeterministic":true},{"position":69,"value":5,"isDeterministic":true},{"position":77,"value":3,"isDeterministic":true},{"position":76,"value":5,"isDeterministic":true},{"position":75,"value":8,"isDeterministic":true},{"position":65,"value":9,"isDeterministic":true},{"position":55,"value":7,"isDeterministic":true},{"position":45,"value":9,"isDeterministic":true},{"position":36,"value":3,"isDeterministic":true},{"position":27,"value":2,"isDeterministic":true},{"position":19,"value":3,"isDeterministic":true},{"position":11,"value":8,"isDeterministic":true},{"position":3,"value":4,"isDeterministic":true}]';
        JSON.parse(init).forEach(function (step) {
            if (!(step.action > 0)) {
                _this.choose({ id: step.position, value: step.value }, true);
            }
        });
        this.steps = [];
    };
    BoardComponent.prototype.choose = function ($event, isDeterministic, lastTry, color) {
        if (isDeterministic === void 0) { isDeterministic = null; }
        if (lastTry === void 0) { lastTry = this.lastTryInit; }
        if (color === void 0) { color = 'black'; }
        if ($event.id === 4) {
            console.log($event);
        }
        // console.log($event);
        this.cells[$event.id] = { id: $event.id, value: $event.value, color: color, candidates: [], lastTry: lastTry };
        if (isDeterministic === null) {
            isDeterministic = $event.candidates.filter(function (e) { return e.value > 0; }).length === 1;
        }
        var step = { position: $event.id, value: $event.value, isDeterministic: isDeterministic };
        console.log(JSON.stringify(step));
        this.steps.push(step);
        this.calcCandidates();
    };
    BoardComponent.prototype.calcCandidates = function () {
        this.modelService.updateCandidates(this.cells);
    };
    BoardComponent.prototype.squareId = function (rowIdOrColId) {
        return Math.floor(rowIdOrColId / 3);
    };
    BoardComponent.prototype.rowHouse = function (i) {
        var house = [];
        for (var ind = 0; ind < 9; ind++) {
            house.push(this.cells[i * 9 + ind]);
        }
        return house;
    };
    BoardComponent.prototype.colHouse = function (i) {
        var house = [];
        for (var ind = 0; ind < 9; ind++) {
            house.push(this.cells[i + 9 * ind]);
        }
        return house;
    };
    BoardComponent.prototype.squareHouse = function (x, y) {
        var house = [];
        for (var indx = 0; indx < 3; indx++) {
            for (var indy = 0; indy < 3; indy++) {
                house.push(this.cells[(indx + x * 3) + (indy + y * 3) * 9]);
            }
        }
        return house;
    };
    BoardComponent.prototype.allHousesCheckSingleCandidateInHouse = function () {
        for (var i = 0; i < 9; i++) {
            if (this.singleCandidateInHouse(this.rowHouse(i))) {
                return true;
            }
            if (this.singleCandidateInHouse(this.colHouse(i))) {
                return true;
            }
        }
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                if (this.singleCandidateInHouse(this.squareHouse(x, y))) {
                    return true;
                }
            }
        }
        return false;
    };
    BoardComponent.prototype.allHousesCheckTwoIdenticalCandidatesInTwoCellsInTheHouse = function () {
        for (var i = 0; i < 9; i++) {
            if (this.twoIdenticalCandidatesInTwoCellsInTheHouse(this.rowHouse(i))) {
                return true;
            }
            if (this.twoIdenticalCandidatesInTwoCellsInTheHouse(this.colHouse(i))) {
                return true;
            }
        }
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                if (this.twoIdenticalCandidatesInTwoCellsInTheHouse(this.squareHouse(x, y))) {
                    return true;
                }
            }
        }
        return false;
    };
    BoardComponent.prototype.undo = function (isToLastTry) {
        if (isToLastTry === void 0) { isToLastTry = false; }
        var lastStep = this.undoOneStep();
        while (isToLastTry && lastStep.isDeterministic && this.steps.length > 0) {
            lastStep = this.undoOneStep();
        }
        // reset lastTry of unfilled cells to initial value except lastStep
        for (var i = 0; i < this.cells.length; i++) {
            if (i !== lastStep.position) {
                if (this.cells[i].value === 0) {
                    this.cells[i].lastTry = this.lastTryInit;
                }
            }
        }
        this.calcCandidates();
    };
    BoardComponent.prototype.undoOneStep = function () {
        var lastStep = this.steps.pop();
        if (!(lastStep.action > 0)) {
            this.cells[lastStep.position].value = 0;
            if (lastStep.isDeterministic) {
                this.cells[lastStep.position].lastTry = this.lastTryInit;
            }
            else {
                this.cells[lastStep.position].lastTry = lastStep.value;
            }
        }
        return lastStep;
    };
    BoardComponent.prototype.next = function () {
        if (this.isFinished()) {
            this.status = 'finished!';
            return false;
        }
        this.status = 'trying...';
        // check if last step is highlight step, Yes, appy the change
        if (this.steps.length > 0) {
            var lastStep = this.steps.pop();
            this.steps.push(lastStep);
            if (lastStep.action === 1) {
                if (lastStep.value > 0) {
                    this.choose(lastStep.nextStep[0], true, this.lastTryInit, lastStep.nextStep[0].color);
                    return true;
                }
            }
        }
        // strategy 0: check failure after enabling try out
        if (this.willGuessAndUndo && this.steps.length > 0) {
            for (var i = 0; i < this.cells.length; i++) {
                if (this.cells[i].value > 0) {
                    continue;
                }
                var candidates = this.cells[i].candidates.filter(function (e) { return e.value > 0; });
                if (candidates.length === 0) {
                    this.status = ('failed! undo due to -> (' + (this.modelService.colId(i) + 1) + ',' + (this.modelService.rowId(i) + 1) + ')');
                    this.undo(true);
                    return true;
                }
            }
        }
        // strategy I: one candidate for single cell
        for (var i = 0; i < this.cells.length; i++) {
            if (this.cells[i].value > 0) {
                continue;
            }
            var candidates = this.cells[i].candidates.filter(function (e) { return e.value > 0; });
            if (candidates.length === 1) {
                this.highlight(i, [candidates[0].value], 'yellow');
                var step = {
                    action: 1, isDeterministic: true, position: i, value: candidates[0].value,
                    nextStep: [{ id: i, value: candidates[0].value }]
                };
                this.steps.push(step);
                return true;
            }
        }
        // stragegy II: single candidate in house
        if (this.allHousesCheckSingleCandidateInHouse()) {
            return true;
        }
        // strategy III: two candidates in house
        if (this.allHousesCheckTwoIdenticalCandidatesInTwoCellsInTheHouse()) {
            return true;
        }
        // // strategy IV: remove candidate in another house due to it is within the overlap of two
        if (this.checkColumnsForOverlapDeterminedCandidate()) {
            return true;
        }
        // strategy XXX: guess others
        if (this.willGuessAndUndo) {
            for (var i = 0; i < this.cells.length; i++) {
                if (this.cells[i].value > 0) {
                    continue;
                }
                var candidates = this.cells[i].candidates.filter(function (e) { return e.value > 0; });
                var guessIndex = this.lastTryInit === 0 ? 0 : candidates.length - 1;
                this.choose({ id: i, value: candidates[guessIndex].value }, false, 0, 'orange');
                return true;
            }
        }
        this.status = 'I will not guess, help me...';
        return false;
    };
    BoardComponent.prototype.checkColumnsForOverlapDeterminedCandidate = function () {
        for (var col = 0; col < 9; col++) {
            var house = this.colHouse(col);
            for (var c = 1; c <= 9; c++) {
                var min = -1;
                var max = -1;
                for (var hi = 0; hi < 9; hi++) {
                    if (house[hi].value === 0) {
                        if (house[hi].candidates[c - 1].value > 0) {
                            if (min === -1) {
                                min = hi;
                            }
                            if (max < hi) {
                                max = hi;
                            }
                        }
                    }
                }
                // console.log(c + '::' + min + '~' + max);
                if (min >= 0 && this.squareId(min) === this.squareId(max)) {
                    var sqHouse = this.squareHouse(this.squareId(col), this.squareId(min));
                    var list = [];
                    for (var hi = 0; hi < 9; hi++) {
                        if (sqHouse[hi].value === 0 && col !== this.modelService.colId(sqHouse[hi].id) && sqHouse[hi].candidates[c - 1].value > 0) {
                            list.push(sqHouse[hi].id);
                        }
                    }
                    if (list.length > 0) {
                        this.highlightOrRemove(c, list, house);
                        return true;
                    }
                }
            }
        }
        return false;
    };
    BoardComponent.prototype.checkRowsForOverlapDeterminedCandidate = function () {
        for (var row = 0; row < 9; row++) {
            var house = this.colHouse(row);
            for (var c = 1; c <= 9; c++) {
                var min = -1;
                var max = -1;
                for (var hi = 0; hi < 9; hi++) {
                    if (house[hi].value === 0) {
                        if (house[hi].candidates[c - 1].value > 0) {
                            if (min === -1) {
                                min = hi;
                            }
                            if (max < hi) {
                                max = hi;
                            }
                        }
                    }
                }
                // console.log(c + '::' + min + '~' + max);
                if (min >= 0 && this.squareId(min) === this.squareId(max)) {
                    var sqHouse = this.squareHouse(this.squareId(min), this.squareId(row));
                    var list = [];
                    for (var hi = 0; hi < 9; hi++) {
                        if (sqHouse[hi].value === 0 && row !== this.modelService.rowId(sqHouse[hi].id) && sqHouse[hi].candidates[c - 1].value > 0) {
                            list.push(sqHouse[hi].id);
                        }
                    }
                    if (list.length > 0) {
                        this.highlightOrRemove(c, list, house);
                        return true;
                    }
                }
            }
        }
        return false;
    };
    BoardComponent.prototype.highlightOrRemove = function (c, list, house) {
        var _this = this;
        if (list.length > 0) {
            if (this.isNeedToHighlight()) {
                house.filter(function (cell) { return cell.value === 0; }).filter(function (cell) { return cell.candidates[c - 1].value > 0; }).forEach(function (cell) {
                    return _this.highlight(cell.id, [c], 'yellow');
                });
                list.forEach(function (id) { return _this.highlight(id, [c], 'red'); });
                this.steps.push({ position: 0, value: 0, action: 1, isDeterministic: true });
            }
            else {
                house.filter(function (cell) { return cell.value === 0; }).filter(function (cell) { return cell.candidates[c - 1].value > 0; }).forEach(function (cell) {
                    return _this.highlight(cell.id, [c], _this.defaultCandidateColor);
                });
                list.forEach(function (id) { return _this.highlight(id, [c], _this.defaultCandidateColor, true); });
                this.steps.push({ position: 0, value: 0, action: 2, isDeterministic: true });
            }
        }
    };
    BoardComponent.prototype.highlight = function (id, candidates, color, isRemoving) {
        var _this = this;
        if (isRemoving === void 0) { isRemoving = false; }
        candidates.forEach(function (candidate) {
            var tile = _this.cells[id].candidates[candidate - 1];
            tile.color = color;
            // this.cells[id].candidates[candidate - 1] = tile;
            if (isRemoving) {
                tile.value = 0;
            }
        });
    };
    BoardComponent.prototype.resetCandidatesColor = function (cells) {
        var _this = this;
        cells.map(function (cell) { return cell.id; }).forEach(function (id) {
            _this.cells[id].candidates.forEach(function (candidate) { return candidate.color = 'black'; });
        });
    };
    BoardComponent.prototype.record = function () {
        console.log('init=\'' + JSON.stringify(this.steps) + '\';');
    };
    BoardComponent.prototype.isFinished = function () {
        return this.cells.filter(function (e) { return e.value === 0; }).length === 0;
    };
    BoardComponent.prototype.resolve = function () {
        var _this = this;
        if (this.starttime === '') {
            this.starttime = '' + new Date();
        }
        var r = this.next();
        if (r) {
            setTimeout(function () { return _this.resolve(); }, 10);
        }
        else {
            this.endtime = '' + new Date();
        }
    };
    BoardComponent.prototype.test = function () {
    };
    BoardComponent.prototype.singleCandidateInHouse = function (house) {
        try {
            var map_1 = new Map();
            for (var i = 1; i <= 9; i++) {
                map_1.set(i, []);
            }
            house.forEach(function (cell) {
                cell.candidates.forEach(function (candidate) {
                    if (candidate.value > 0) {
                        var list = map_1.get(candidate.value);
                        if (list.indexOf(cell.id) <= 0) {
                            list.push(cell.id);
                        }
                    }
                });
            });
            for (var i = 1; i <= 9; i++) {
                var list = map_1.get(i);
                if (list.length === 1) {
                    var id = list[0];
                    var value = i;
                    this.highlight(id, [value], 'yellow');
                    var step = {
                        action: 1, isDeterministic: true, position: id, value: value,
                        nextStep: [{ id: id, value: value }]
                    };
                    this.steps.push(step);
                    // this.choose({ id: list[0], value: i }, true, this.lastTryInit, 'purple', );
                    return true;
                }
            }
        }
        catch (e) {
            console.log(e);
        }
        return false;
    };
    BoardComponent.prototype.twoIdenticalCandidatesInTwoCellsInTheHouse = function (house) {
        var _this = this;
        var map = new Map();
        for (var i = 0; i < 9; i++) {
            var candidates = house[i].candidates.filter(function (e) { return e.value > 0; });
            if (candidates.length === 2) {
                map.set(i, [candidates[0].value, candidates[1].value]);
            }
            else {
                map.set(i, []);
            }
        }
        var _loop_1 = function (i) {
            var candidatesI = map.get(i);
            if (candidatesI.length === 2) {
                for (var j = i + 1; j < 9; j++) {
                    var candidatesJ = map.get(j);
                    if (candidatesJ.length === 2) {
                        if (this_1.isIdentical(candidatesI, candidatesJ)) {
                            var changedList = [];
                            for (var k = 0; k < 9; k++) {
                                if (k !== i && k !== j) {
                                    if (house[k].value === 0
                                        && (house[k].candidates[candidatesI[0] - 1].value > 0 ||
                                            house[k].candidates[candidatesI[1] - 1].value > 0)) {
                                        //                    house[k].candidates[candidatesI[0]].value = 0;
                                        //                    house[k].candidates[candidatesI[1]].value = 0;
                                        changedList.push(k);
                                    }
                                }
                            }
                            if (changedList.length > 0) {
                                if (this_1.isNeedToHighlight()) {
                                    this_1.highlight(house[i].id, candidatesI, 'yellow');
                                    this_1.highlight(house[j].id, candidatesI, 'yellow');
                                    changedList.forEach(function (k) {
                                        _this.highlight(house[k].id, candidatesI, 'red');
                                    });
                                    this_1.steps.push({ position: 0, value: 0, action: 1, isDeterministic: true });
                                }
                                else {
                                    this_1.highlight(house[i].id, candidatesI, this_1.defaultCandidateColor);
                                    this_1.highlight(house[j].id, candidatesI, this_1.defaultCandidateColor);
                                    changedList.forEach(function (k) {
                                        _this.highlight(house[k].id, candidatesI, _this.defaultCandidateColor, true);
                                    });
                                    this_1.steps.push({ position: 0, value: 0, action: 2, isDeterministic: true });
                                }
                                return { value: true };
                            }
                            else {
                                return { value: false };
                            }
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < 8; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return false;
    };
    BoardComponent.prototype.isIdentical = function (x, y) {
        return JSON.stringify(x.sort(function (a, b) { return a - b; })) === JSON.stringify(y.sort(function (a, b) { return a - b; }));
    };
    BoardComponent.prototype.isNeedToHighlight = function () {
        if (this.steps.length > 0 && this.steps[this.steps.length - 1].action === 1) {
            return false;
        }
        else {
            return true;
        }
    };
    BoardComponent.prototype.newboard = function () {
        this.cells = [];
        for (var i = 0; i < 81; i++) {
            var cell = { id: i, value: 0, color: 'black', lastTry: this.lastTryInit, candidates: [] };
            this.cells.push(cell);
        }
        this.calcCandidates();
        this.steps = [];
        this.newboard_test();
    };
    BoardComponent.prototype.newboard_test = function () {
        var a = [1, 2, 3, 4, 3, 2, 1];
        var cache = [];
        var u = [];
        a.forEach(function (v) {
            if (cache[v] !== 1) {
                cache[v] = 1;
                u.push(v);
            }
        });
        console.log(u);
    };
    BoardComponent.prototype.toggleGuessFlag = function () {
        this.willGuessAndUndo = !this.willGuessAndUndo;
        console.log(this.willGuessAndUndo);
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/cell/cell.component.css":
/*!*****************************************!*\
  !*** ./src/app/cell/cell.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-list {\n    width: 54px;\n}\n\n.filledCell {\n    font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VsbC9jZWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2VsbC9jZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC1saXN0IHtcbiAgICB3aWR0aDogNTRweDtcbn1cblxuLmZpbGxlZENlbGwge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cell/cell.component.html":
/*!******************************************!*\
  !*** ./src/app/cell/cell.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"18px\" *ngIf=\"cell.value==0\" [style.background]=\"bg\">\n  <mat-grid-tile *ngFor=\"let tile of cell.candidates\">\n    <button (click)=\"chooseme(tile)\" *ngIf=\"tile.value>0\" [style.backgroundColor]=\"tile.color\">{{tile.value}}</button>\n    <button disabled *ngIf=\"tile.value==0\"></button>\n  </mat-grid-tile>\n</mat-grid-list>\n<mat-grid-list cols=\"1\" rowHeight=\"54px\" *ngIf=\"cell.value>0\" [style.background]=\"bg\">\n  <mat-grid-tile class=\"filledCell\" [style.color]=\"cell.color\">\n    {{cell.value}}\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/cell/cell.component.ts":
/*!****************************************!*\
  !*** ./src/app/cell/cell.component.ts ***!
  \****************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CellComponent = /** @class */ (function () {
    function CellComponent() {
        this.chooseEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CellComponent.prototype.ngOnInit = function () {
        // console.log(this.cell);
        var i = this.cell.id;
        this.bg = (i % 9 < 3 || i % 9 >= 6) && (i / 9 < 3 || i / 9 >= 6)
            || (i % 9 >= 3 && i % 9 < 6 && i / 9 >= 3 && i / 9 < 6)
            ? '#ddd' : '#fff';
        if (this.cell.value === 0 && this.cell.candidates.filter(function (e) { return e.value > 0; }).length === 0) {
            this.bg = '#a00';
        }
    };
    CellComponent.prototype.chooseme = function (tile) {
        this.cell.value = tile.value;
        this.chooseEvent.emit(this.cell);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CellComponent.prototype, "cell", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CellComponent.prototype, "chooseEvent", void 0);
    CellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cell',
            template: __webpack_require__(/*! ./cell.component.html */ "./src/app/cell/cell.component.html"),
            styles: [__webpack_require__(/*! ./cell.component.css */ "./src/app/cell/cell.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CellComponent);
    return CellComponent;
}());



/***/ }),

/***/ "./src/app/life/life.component.css":
/*!*****************************************!*\
  !*** ./src/app/life/life.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".square {\n    margin: 0 0 0 0;\n    height: 0px;\n    padding: 2px 2px 2px 2px;\n    border: 1px solid black;\n}\n\n.rowsq {\n    margin: 0 0 0 0;\n    padding: 0 0 0 0;\n    height: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZS9saWZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLHdCQUF3QjtJQUN4Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xpZmUvbGlmZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNxdWFyZSB7XG4gICAgbWFyZ2luOiAwIDAgMCAwO1xuICAgIGhlaWdodDogMHB4O1xuICAgIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnJvd3NxIHtcbiAgICBtYXJnaW46IDAgMCAwIDA7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICBoZWlnaHQ6IDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/life/life.component.html":
/*!******************************************!*\
  !*** ./src/app/life/life.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let row of data\" class='rowsq'>\n  <span *ngFor=\"let cell of row\" class=\"square\" [style.background]=\"cell\"></span>\n</div>"

/***/ }),

/***/ "./src/app/life/life.component.ts":
/*!****************************************!*\
  !*** ./src/app/life/life.component.ts ***!
  \****************************************/
/*! exports provided: LifeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeComponent", function() { return LifeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LifeComponent = /** @class */ (function () {
    function LifeComponent() {
        this.size = 100;
        this.data = [];
        for (var y = 0; y < this.size; y++) {
            var row = [];
            for (var x = 0; x < this.size; x++) {
                row.push(this.getColor((x + 2 * y) % 3));
            }
            this.data.push(row);
        }
        console.log(this.data);
    }
    LifeComponent.prototype.ngOnInit = function () {
    };
    LifeComponent.prototype.getColor = function (v) {
        if (v === 0) {
            return 'white';
        }
        else if (v === 1) {
            return 'red';
        }
        else {
            return 'blue';
        }
    };
    LifeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-life',
            template: __webpack_require__(/*! ./life.component.html */ "./src/app/life/life.component.html"),
            styles: [__webpack_require__(/*! ./life.component.css */ "./src/app/life/life.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LifeComponent);
    return LifeComponent;
}());



/***/ }),

/***/ "./src/app/model.service.ts":
/*!**********************************!*\
  !*** ./src/app/model.service.ts ***!
  \**********************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModelService = /** @class */ (function () {
    function ModelService() {
        this.lastTryInit = 0;
        this.defaultCandidateColor = '#eee';
    }
    ModelService.prototype.rowId = function (i) {
        return Math.floor(i / 9);
    };
    ModelService.prototype.colId = function (i) {
        return i % 9;
    };
    ModelService.prototype.updateCandidates = function (cells) {
        for (var i = 0; i < 81; i++) {
            cells[i].candidates = [];
            var colId = this.colId(i);
            var rowId = this.rowId(i);
            var houseLeft = Math.floor(this.colId(i) / 3) * 3;
            var houseTop = Math.floor(this.rowId(i) / 3) * 3;
            var candidatesMap = new Map();
            for (var c = 0; c < 9; c++) {
                var cv = c + 1;
                if (this.lastTryInit === 0 && cv <= cells[i].lastTry
                    || this.lastTryInit !== 0 && cv >= cells[i].lastTry) {
                    cv = 0;
                }
                candidatesMap.set(c, cv);
            }
            // if having value
            if (cells[i].value > 0) {
                for (var c = 0; c < 9; c++) {
                    candidatesMap.set(c, 0);
                }
            }
            else {
                // remove by col
                for (var c = 0; c < 9; c++) {
                    var v = cells[c * 9 + colId].value;
                    if (v > 0) {
                        candidatesMap.set(v - 1, 0);
                    }
                }
                // remove by row
                for (var c = 0; c < 9; c++) {
                    var v = cells[rowId * 9 + c].value;
                    if (v > 0) {
                        candidatesMap.set(v - 1, 0);
                    }
                }
                // remove by house
                for (var cx = 0; cx < 3; cx++) {
                    for (var cy = 0; cy < 3; cy++) {
                        var v = cells[(houseTop + cy) * 9 + (houseLeft + cx)].value;
                        if (v > 0) {
                            candidatesMap.set(v - 1, 0);
                        }
                    }
                }
                // remove by last try
                for (var c = 0; c < 9; c++) {
                    cells[i].candidates.push({ value: candidatesMap.get(c), color: this.defaultCandidateColor });
                }
            }
        }
    };
    ModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stone/github/sudoku-github/sudoku-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map