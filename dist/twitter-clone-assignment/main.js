(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gaurav2146\Desktop\Twitter_clone_assignment\twitter-clone-assignment\src\main.ts */"zUnb");


/***/ }),

/***/ "0P5e":
/*!*******************************************!*\
  !*** ./src/app/services/tweet.service.ts ***!
  \*******************************************/
/*! exports provided: TweetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetService", function() { return TweetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "H+bZ");



class TweetService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    createTweet(productObject) {
        return this.apiService.request('post', 'tweet/createTweet', productObject);
    }
    ;
}
TweetService.ɵfac = function TweetService_Factory(t) { return new (t || TweetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
TweetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TweetService, factory: TweetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TweetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "1QKq":
/*!********************************************!*\
  !*** ./src/app/services/signin.service.ts ***!
  \********************************************/
/*! exports provided: SigninService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return SigninService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "H+bZ");



class SigninService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    register(Obj) {
        return this.apiService.request('post', 'user/registration', Obj);
    }
    ;
    login(Obj) {
        return this.apiService.request('post', 'user/login', Obj);
    }
    ;
}
SigninService.ɵfac = function SigninService_Factory(t) { return new (t || SigninService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
SigninService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SigninService, factory: SigninService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _followers_followers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./followers/followers.component */ "kfpQ");





function UserComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-followers", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", user_r1.name)("email", user_r1.email)("userId", user_r1._id);
} }
class UserComponent {
    constructor(userService) {
        this.userService = userService;
        this.users_to_follow = [];
    }
    ngOnInit() {
        this.getUsersToFollow();
    }
    getUsersToFollow() {
        this.userService.getUsersToFollow().subscribe((data) => {
            this.users_to_follow = data;
        }, (error) => {
            console.log(error);
        });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 13, vars: 1, consts: [[2, "overflow-y", "scroll"], [1, "user__input"], ["aria-hidden", "true", 1, "fa", "fa-search", "user__searchIcon"], ["placeholder", "Search Twitter", "type", "text"], [1, "follower__info"], [1, "header_text"], [4, "ngFor", "ngForOf"], [1, "policy_header"], [1, "policy"], [3, "name", "email", "userId"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Who to follow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserComponent_span_7_Template, 2, 3, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Terms of Service Privacy Policy Cookie Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Ads info More... \u00A9 2021 Twitter, Inc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users_to_follow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _followers_followers_component__WEBPACK_IMPORTED_MODULE_3__["FollowersComponent"]], styles: [".user__input[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: var(--twitter-background);\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    margin-top: 10px;\r\n    margin-left: 20px;\r\n    border: 1px solid  transparent;\r\n  }\r\n\r\n\r\n  .follower__info[_ngcontent-%COMP%]\r\n  {\r\n    background-color: var(--twitter-background);\r\n    \r\n    border-radius: 20px;\r\n    margin-top: 10px;\r\n    margin-left: 20px;\r\n    min-height: 80vh;\r\n  }\r\n\r\n\r\n  .user__input[_ngcontent-%COMP%]:focus-within\r\n  {\r\n      border: 1px solid  var(--twitter-color);\r\n      transition-duration: 0.5s\r\n  }\r\n\r\n\r\n  .user__input[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    background-color: var(--twitter-background);\r\n    outline: none;\r\n  }\r\n\r\n\r\n  .user__searchIcon[_ngcontent-%COMP%] {\r\n    color: gray;\r\n    padding-right: 20px;\r\n    padding-left: 10px;\r\n  }\r\n\r\n\r\n  .user__widgetContainer[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    margin-left: 20px;\r\n    padding: 20px;\r\n    background-color: #f5f8fa;\r\n    border-radius: 20px;\r\n  }\r\n\r\n\r\n  .user__widgetContainer[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 800;\r\n  }\r\n\r\n\r\n  .header_text[_ngcontent-%COMP%]\r\n  {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n    \r\n  }\r\n\r\n\r\n  .policy_header[_ngcontent-%COMP%]\r\n  {\r\n    margin-left: 30px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n\r\n  .policy[_ngcontent-%COMP%]\r\n  {\r\n    color: rgb(161, 160, 160);\r\n    font-size: 12px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtFQUNoQzs7O0VBR0E7O0lBRUUsMkNBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7OztFQUVBOztNQUVJLHVDQUF1QztNQUN2QztFQUNKOzs7RUFHQTtJQUNFLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsYUFBYTtFQUNmOzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7OztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhOztFQUVmOzs7RUFFQTs7SUFFRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOzs7RUFFQTs7SUFFRSx5QkFBeUI7SUFDekIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLnVzZXJfX2lucHV0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHdpdHRlci1iYWNrZ3JvdW5kKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcblxyXG4gIC5mb2xsb3dlcl9faW5mb1xyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR3aXR0ZXItYmFja2dyb3VuZCk7XHJcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG5cclxuICAudXNlcl9faW5wdXQ6Zm9jdXMtd2l0aGluXHJcbiAge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAgdmFyKC0tdHdpdHRlci1jb2xvcik7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXNcclxuICB9XHJcblxyXG4gXHJcbiAgLnVzZXJfX2lucHV0ID4gaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHdpdHRlci1iYWNrZ3JvdW5kKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2VyX19zZWFyY2hJY29uIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXJfX3dpZGdldENvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2VyX193aWRnZXRDb250YWluZXIgPiBoMiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyX3RleHRcclxuICB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5wb2xpY3lfaGVhZGVyXHJcbiAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvbGljeVxyXG4gIHtcclxuICAgIGNvbG9yOiByZ2IoMTYxLCAxNjAsIDE2MCk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tweet_dialog_tweet_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tweet-dialog/tweet-dialog.component */ "lZE3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class SidebarComponent {
    constructor(dialog, router, snackbar) {
        this.dialog = dialog;
        this.router = router;
        this.snackbar = snackbar;
    }
    ngOnInit() {
    }
    openDialog() {
        this.dialog.open(_tweet_dialog_tweet_dialog_component__WEBPACK_IMPORTED_MODULE_1__["TweetDialogComponent"], {
            data: {
            // image : data,
            },
        });
    }
    logout() {
        localStorage.clear();
        this.snackbar.open("Logout Successfully", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
        this.router.navigate(['']);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 41, vars: 0, consts: [[1, "sidebar"], [1, "twitter-icon"], [1, "fab", "fa-twitter", "twitter-i", "active"], [1, "sidebar-field"], ["aria-hidden", "true", 1, "fa", "fa-home", "icon"], [1, "option"], ["aria-hidden", "true", 1, "fa", "fa-hashtag", "icon"], ["aria-hidden", "true", 1, "fa", "fa-bell", "icon"], ["aria-hidden", "true", 1, "fa", "fa-envelope", "icon"], ["aria-hidden", "true", 1, "fa", "fa-bookmark", "icon"], ["aria-hidden", "true", 1, "fa", "fa-list", "icon"], ["aria-hidden", "true", 1, "fa", "fa-user", "icon"], ["aria-hidden", "true", 1, "fa", "fa-info-circle", "icon"], ["type", "button", 1, "tweet", 3, "click"], ["type", "button", 1, "logout", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Explore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Notification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Messages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Bookmarks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Lists ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_37_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Tweet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_39_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".sidebar-field[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    margin-left: 15%;\r\n    max-width: 150px;\r\n    \r\n    \r\n}\r\n\r\n.twitter-icon[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    \r\n    max-width: 60px;\r\n    margin-left: 15%;\r\n}\r\n\r\n.tweet[_ngcontent-%COMP%]\r\n{\r\n    margin-left: 20%;\r\n    width: 65%;\r\n    background-color: var(--twitter-color) !important;\r\n    border: none !important;\r\n    color: white !important;\r\n    font-weight: 700 !important;\r\n    text-transform: inherit !important;\r\n    border-radius: 30px !important;\r\n    height: 50px !important;\r\n    margin-top: 10px !important;\r\n}\r\n\r\n.logout[_ngcontent-%COMP%]\r\n{\r\n    margin-left: 20%;\r\n    width: 65%;\r\n    background-color: rgb(248, 75, 75) !important;\r\n    border: none !important;\r\n    color: white !important;\r\n    font-weight: 700 !important;\r\n    text-transform: inherit !important;\r\n    border-radius: 30px !important;\r\n    height: 50px !important;\r\n    margin-top: 10px !important;\r\n}\r\n\r\n.tweet[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color: #269ee9 !important;\r\n}\r\n\r\n.sidebar-field[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color: #e8f5fe;\r\n    border-radius: 30px;\r\n    color: var(--twitter-color);\r\n    transition : color 100ms ease-out;\r\n    cursor: pointer;\r\n}\r\n\r\n.twitter-icon[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color: #e8f5fe;\r\n    border-radius: 30px;\r\n    color: var(--twitter-color);\r\n    transition : color 100ms ease-out;\r\n    cursor: pointer;\r\n}\r\n\r\n.option[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 15px; \r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 22px;\r\n    padding: 15px;\r\n}\r\n\r\n.twitter-i[_ngcontent-%COMP%]\r\n{\r\n    font-size: 30px;\r\n    padding: 15px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%]\r\n{\r\n    color: var(--twitter-color);\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]\r\n{\r\n    border-right: 0.5px solid rgb(204, 196, 196);\r\n    \r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    min-width: 250px;\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0lBRWhCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixpREFBaUQ7SUFDakQsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9COztBQUlBOztJQUVJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsNkNBQTZDO0lBQzdDLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSw0Q0FBNEM7SUFDNUMscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLWZpZWxkXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIFxyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXHJcbn1cclxuXHJcbi50d2l0dGVyLWljb25cclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xyXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufVxyXG5cclxuLnR3ZWV0XHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHdpdHRlci1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmxvZ291dFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDc1LCA3NSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50d2VldDpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY5ZWU5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWZpZWxkOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXR3aXR0ZXItY29sb3IpO1xyXG4gICAgdHJhbnNpdGlvbiA6IGNvbG9yIDEwMG1zIGVhc2Utb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udHdpdHRlci1pY29uOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXR3aXR0ZXItY29sb3IpO1xyXG4gICAgdHJhbnNpdGlvbiA6IGNvbG9yIDEwMG1zIGVhc2Utb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub3B0aW9uXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmljb25cclxue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnR3aXR0ZXItaVxyXG57XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59IFxyXG5cclxuLmFjdGl2ZVxyXG57XHJcbiAgICBjb2xvcjogdmFyKC0tdHdpdHRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5zaWRlYmFyXHJcbntcclxuICAgIGJvcmRlci1yaWdodDogMC41cHggc29saWQgcmdiKDIwNCwgMTk2LCAxOTYpO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNXB4OyAqL1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feed/feed.component */ "eVva");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.component */ "3nXK");





class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "app"], [1, "sidebar-width"], [1, "feed-width"], [1, "user-width"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_2__["FeedComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]], styles: [".app[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    max-width: 1300px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 0 10px;\r\n}\r\n\r\n.sidebar-width[_ngcontent-%COMP%]\r\n{\r\n    min-width: 22%;\r\n    max-width: 22%;\r\n}\r\n\r\n.feed-width[_ngcontent-%COMP%]\r\n{\r\n    min-width: 48%;\r\n    max-width: 48%;\r\n}\r\n\r\n.user-width[_ngcontent-%COMP%]\r\n{\r\n    min-width: 30%;\r\n    max-width: 30%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC13aWR0aDogMTMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXdpZHRoXHJcbntcclxuICAgIG1pbi13aWR0aDogMjIlO1xyXG4gICAgbWF4LXdpZHRoOiAyMiU7XHJcbn1cclxuXHJcbi5mZWVkLXdpZHRoXHJcbntcclxuICAgIG1pbi13aWR0aDogNDglO1xyXG4gICAgbWF4LXdpZHRoOiA0OCU7XHJcbn1cclxuXHJcbi51c2VyLXdpZHRoXHJcbntcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


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
    apiEndPoint: 'http://localhost:3210'
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

/***/ "DK59":
/*!*******************************************************!*\
  !*** ./src/app/feed/tweet-box/tweet-box.component.ts ***!
  \*******************************************************/
/*! exports provided: TweetBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetBoxComponent", function() { return TweetBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_tweet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tweet.service */ "0P5e");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["fileInput"];
const _c1 = ["textinput"];
function TweetBoxComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.base64Img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class TweetBoxComponent {
    constructor(dialog, tweetService, snackbar, userService) {
        this.dialog = dialog;
        this.tweetService = tweetService;
        this.snackbar = snackbar;
        this.userService = userService;
        this.row = 1;
        this.base64Img = '';
        this.description = '';
    }
    ngOnInit() {
    }
    fun(event) {
        console.log(event);
        this.description = event;
        let len = event.length;
        console.log();
        let row = Math.ceil(len / 35);
        this.row = row;
    }
    loadAllImages(files) {
        let filesLength = files.length;
        for (let i = 0; i < filesLength; i++) {
            if (files[i].type == 'image/jpeg' || files[i].type == 'image/jpg' || files[i].type == 'image/png' || files[i].type == 'image/jfif' || files[i].type == 'image/gif') {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const promise = new Promise((resolve, reject) => {
                        resolve(event.target.result);
                    });
                    promise.then((data) => {
                        this.base64Img = data;
                        // this.saveProductDetailsStepThree();
                        // console.log( data , 'base64 data' );
                        this.el.nativeElement.value = '';
                        // this.openDialog(data);
                    });
                };
                reader.readAsDataURL(files[i]);
            }
            else {
                // this.snack.open('Invalid File Format. Accepted File Format: /jpg, /jpeg, /png, /jfif, /gif', 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['error-snackbar'] });
                console.log('Invalid File Format. Accepted File Format: /jpg, /jpeg, /png, /jfif, /gif');
            }
        }
    }
    saveProductDetailsStepThree() {
        if (!this.description && !this.base64Img) {
            return;
        }
        let body = {
            image: this.base64Img,
            description: this.description,
        };
        this.tweetService.createTweet(body).subscribe((result) => {
            if (result.success === true) {
                console.log(result);
                this.base64Img = '';
                this.text.nativeElement.value = '';
                this.userService.newTweet.next('new Tweet');
                this.snackbar.open("Tweet done Successfully!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
            }
        }, (error) => {
            this.snackbar.open("Something went wrong!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
        });
    }
    getRecentTweet() {
        this.userService.newTweet.next('Tweet Done');
    }
}
TweetBoxComponent.ɵfac = function TweetBoxComponent_Factory(t) { return new (t || TweetBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_tweet_service__WEBPACK_IMPORTED_MODULE_2__["TweetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
TweetBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TweetBoxComponent, selectors: [["app-tweet-box"]], viewQuery: function TweetBoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.text = _t.first);
    } }, decls: 21, vars: 2, consts: [[1, "tweet-box"], [1, "tweetBox-input"], ["src", "../../../assets/blank.png", "alt", "Avatar", 1, "avatar"], ["cols", "50", "placeholder", "What's happening?", 3, "rows", "keyup"], ["textinput", ""], ["class", "icon_image", 4, "ngIf"], [1, "tweet_section"], [1, "container"], [1, "upload-btn-wrapper"], [1, "btn"], ["aria-hidden", "true", 1, "fa", "fa-upload"], ["type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["type", "button", 1, "tweet_button", 3, "click"], [1, "tweet_no_container"], [1, "tweet_no", 3, "click"], [1, "icon_image"], ["alt", "Avatar", 3, "src"]], template: function TweetBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TweetBoxComponent_Template_textarea_keyup_5_listener($event) { return ctx.fun($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TweetBoxComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TweetBoxComponent_Template_input_change_13_listener($event) { return ctx.loadAllImages($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TweetBoxComponent_Template_button_click_16_listener() { return ctx.saveProductDetailsStepThree(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Tweet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TweetBoxComponent_Template_div_click_19_listener() { return ctx.getRecentTweet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Show Recent Tweet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.row);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.base64Img);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".tweet-box[_ngcontent-%COMP%]\r\n{\r\n\r\n    padding-bottom: 10px;\r\n    border-bottom: 0.5px solid var(--twitter-background);\r\n    padding-right: 10px;\r\n\r\n}\r\n\r\n.tweet-box[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.tweetBox-input[_ngcontent-%COMP%]\r\n{\r\n   padding: 20px;\r\n   display: flex;\r\n}\r\n\r\n.tweetBox-input[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]\r\n{\r\n   flex: 1; \r\n   margin-left: 20px;\r\n   font-size: 20px;\r\n   border: none;\r\n   width: 100%;\r\n   outline: none;\r\n}\r\n\r\n.tweetBox-input[_ngcontent-%COMP%]    > textarea[_ngcontent-%COMP%]\r\n{\r\n   flex: 1; \r\n   margin-left: 20px;\r\n   font-size: 20px;\r\n   border: none;\r\n   width: 100%;\r\n   outline: none;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n.tweet_button[_ngcontent-%COMP%]\r\n{\r\n    background-color: var(--twitter-color) !important;\r\n    border: none !important;\r\n    color: white !important;\r\n    font-weight: 700 !important;\r\n    text-transform: inherit !important;\r\n    border-radius: 30px !important;\r\n    width: 80px;\r\n    height: 40px !important;\r\n    margin-top: 0px !important;\r\n    margin-left: auto !important;\r\n}\r\n\r\n.tweet_button[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color: #269ee9 !important;\r\n}\r\n\r\n.tweet_no[_ngcontent-%COMP%]\r\n{\r\n    padding: 15px;\r\n    color: var(--twitter-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.tweet_no_container[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    border-bottom: 0.5px solid var(--twitter-background);\r\n}\r\n\r\n.tweet_no_container[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color: #e8f5fe;\r\n}\r\n\r\n.tweet_section[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.upload-btn-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    \r\n    color: var(--twitter-color);\r\n    background-color: white;\r\n    background-color: #e8f5fe;\r\n    padding: 6px 20px;\r\n    border-radius: 8px;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border: none;\r\n    \r\n  }\r\n\r\n.btn[_ngcontent-%COMP%]:hover\r\n  {\r\n    background-color: #e8f5fe;\r\n    cursor: pointer;\r\n  }\r\n\r\n.upload-btn-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\r\n    font-size: 100px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n.container[_ngcontent-%COMP%]\r\n  {\r\n    padding-left: 50px;\r\n    padding-top: 5px;\r\n  }\r\n\r\n.icon_image[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    \r\n    margin: 0 auto;\r\n}\r\n\r\n.icon_image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain;\r\n    border-radius: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.post[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  border-bottom: 1px solid var(--twitter-background);\r\n  padding-bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.post__body[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.post__body[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  border-radius: 20px;\r\n}\r\n\r\n.post_img[_ngcontent-%COMP%]\r\n{\r\n    max-width: 500px;\r\n    min-width: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC90d2VldC1ib3gvdHdlZXQtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLG9CQUFvQjtJQUNwQixvREFBb0Q7SUFDcEQsbUJBQW1COztBQUV2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztHQUVHLGFBQWE7R0FDYixhQUFhO0FBQ2hCOztBQUVBOztHQUVHLE9BQU87R0FDUCxpQkFBaUI7R0FDakIsZUFBZTtHQUNmLFlBQVk7R0FDWixXQUFXO0dBQ1gsYUFBYTtBQUNoQjs7QUFHQTs7R0FFRyxPQUFPO0dBQ1AsaUJBQWlCO0dBQ2pCLGVBQWU7R0FDZixZQUFZO0dBQ1osV0FBVztHQUNYLGFBQWE7QUFDaEI7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0FBRUY7O0lBRUksaURBQWlEO0lBQ2pELHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDOztBQUdBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvREFBb0Q7QUFDeEQ7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtFQUN2Qjs7QUFFQTs7SUFFRSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjs7QUFHQTs7SUFFRSx5QkFBeUI7SUFDekIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixVQUFVO0VBQ1o7O0FBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7QUFHQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQU9BO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrREFBa0Q7RUFDbEQsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZmVlZC90d2VldC1ib3gvdHdlZXQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHdlZXQtYm94XHJcbntcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHZhcigtLXR3aXR0ZXItYmFja2dyb3VuZCk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuLnR3ZWV0LWJveCA+IGZvcm1cclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50d2VldEJveC1pbnB1dFxyXG57XHJcbiAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50d2VldEJveC1pbnB1dCA+IGlucHV0XHJcbntcclxuICAgZmxleDogMTsgXHJcbiAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICBmb250LXNpemU6IDIwcHg7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4udHdlZXRCb3gtaW5wdXQgPiB0ZXh0YXJlYVxyXG57XHJcbiAgIGZsZXg6IDE7IFxyXG4gICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBib3JkZXI6IG5vbmU7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuLnR3ZWV0X2J1dHRvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10d2l0dGVyLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG59ICBcclxuXHJcblxyXG4udHdlZXRfYnV0dG9uOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjllZTkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnR3ZWV0X25vXHJcbntcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdHdpdHRlci1jb2xvcik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50d2VldF9ub19jb250YWluZXJcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgdmFyKC0tdHdpdHRlci1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLnR3ZWV0X25vX2NvbnRhaW5lcjpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWZlO1xyXG59XHJcblxyXG4udHdlZXRfc2VjdGlvblxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5cclxuLnVwbG9hZC1idG4td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuYnRuIHtcclxuICAgIFxyXG4gICAgY29sb3I6IHZhcigtLXR3aXR0ZXItY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWZlO1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIH1cclxuXHJcblxyXG4gIC5idG46aG92ZXJcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAudXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lclxyXG4gIHtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmljb25faW1hZ2Uge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgLyogaGVpZ2h0OiA1MDBweDsgKi9cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaWNvbl9pbWFnZSA+IGltZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ucG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHdpdHRlci1iYWNrZ3JvdW5kKTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wb3N0X19ib2R5IHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBvc3RfX2JvZHkgPiBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5wb3N0X2ltZ1xyXG57XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TweetBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tweet-box',
                templateUrl: './tweet-box.component.html',
                styleUrls: ['./tweet-box.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: src_app_services_tweet_service__WEBPACK_IMPORTED_MODULE_2__["TweetService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput']
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['textinput']
        }] }); })();


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ApiService {
    constructor(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoint;
        this.token = '';
        this.env = '';
    }
    /*
        save token into localStorage as a item with specific key
     */
    saveToken(token) {
        localStorage.setItem('sdasd923hd9dwe', token);
        this.token = token;
    }
    /*
        call for fetch token from localStrogae
     */
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('sdasd923hd9dwe');
        }
        return this.token;
    }
    /*
        fetch user token details
     */
    getUserDetails() {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    }
    /*
        call for check the user session
     */
    isLoggedIn() {
        const user = localStorage.getItem('sdasd923hd9dwe');
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    /*
        all type of api call handlers at client side and send token in header in all GET api call to verify valid user
        application at back end match user token with this token, if both token are match means this is a valid user otherwise
        return with a exception invalid user
     */
    request(method, type, user, paramslist) {
        let base;
        if (method === 'post') {
            if (type === 'registration' || type === 'login' || type === 'securityauth') {
                base = this.http.post(`${this.apiURL}/` + type, user, {
                    withCredentials: true
                });
            }
            else {
                base = this.http.post(`${this.apiURL}/` + type, user, {
                    headers: { Authorization: `Bearer ${this.getToken()}` },
                    withCredentials: true,
                });
            }
        }
        else {
            base = this.http.get(`${this.apiURL}/` + type, {
                headers: { Authorization: `Bearer ${this.getToken()}` },
                withCredentials: true,
                params: paramslist
            });
        }
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (data !== null && data.token) {
                this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiService.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ApiService });
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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



class AppComponent {
    constructor() {
        this.title = 'twitter-clone-assignment';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed/feed.component */ "eVva");
/* harmony import */ var _feed_tweet_box_tweet_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed/tweet-box/tweet-box.component */ "DK59");
/* harmony import */ var _feed_post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed/post/post.component */ "x+vh");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _user_followers_followers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/followers/followers.component */ "kfpQ");
/* harmony import */ var _tweet_dialog_tweet_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tweet-dialog/tweet-dialog.component */ "lZE3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"],
        _feed_tweet_box_tweet_box_component__WEBPACK_IMPORTED_MODULE_6__["TweetBoxComponent"],
        _feed_post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
        _user_followers_followers_component__WEBPACK_IMPORTED_MODULE_11__["FollowersComponent"],
        _tweet_dialog_tweet_dialog_component__WEBPACK_IMPORTED_MODULE_12__["TweetDialogComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                    _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"],
                    _feed_tweet_box_tweet_box_component__WEBPACK_IMPORTED_MODULE_6__["TweetBoxComponent"],
                    _feed_post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                    _user_followers_followers_component__WEBPACK_IMPORTED_MODULE_11__["FollowersComponent"],
                    _tweet_dialog_tweet_dialog_component__WEBPACK_IMPORTED_MODULE_12__["TweetDialogComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eVva":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _tweet_box_tweet_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tweet-box/tweet-box.component */ "DK59");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post.component */ "x+vh");







function FeedComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", post_r1.image)("description", post_r1.description)("name", post_r1.user_detail[0].name)("email", post_r1.user_detail[0].email);
} }
class FeedComponent {
    constructor(userService, snackbar) {
        this.userService = userService;
        this.snackbar = snackbar;
        this.Posts = [];
    }
    ngOnInit() {
        this.getPosts();
        this.userService.newTweet.subscribe((data) => {
            if (data) {
                this.getPosts();
            }
        });
    }
    getPosts() {
        this.userService.getPosts().subscribe((data) => {
            this.Posts = data;
            // this.snackbar.open("Tweet Fetched Successfully!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
        }, (error) => {
            // this.snackbar.open("Something Went Wrong!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
        });
    }
}
FeedComponent.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedComponent, selectors: [["app-feed"]], decls: 6, vars: 1, consts: [[1, "feed"], [1, "header"], [4, "ngFor", "ngForOf"], [3, "image", "description", "name", "email"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tweet-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FeedComponent_div_5_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Posts);
    } }, directives: [_tweet_box_tweet_box_component__WEBPACK_IMPORTED_MODULE_3__["TweetBoxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]], styles: [".feed[_ngcontent-%COMP%]\r\n{\r\n    flex: 0.4;\r\n    border-right: 1px solid var(--twitter-background);\r\n    min-width: -moz-fit-content;\r\n    min-width: fit-content;\r\n    overflow-y: scroll;\r\n    height: 100vh;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]\r\n{\r\n    position: sticky;\r\n    top: 0;\r\n    background-color: white;\r\n    z-index: 100;\r\n    border: 1px solid var(--twitter-background);\r\n    padding: 10px 20px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%]\r\n{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksU0FBUztJQUNULGlEQUFpRDtJQUNqRCwyQkFBc0I7SUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVlZFxyXG57XHJcbiAgICBmbGV4OiAwLjQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS10d2l0dGVyLWJhY2tncm91bmQpO1xyXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5oZWFkZXJcclxue1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHdpdHRlci1iYWNrZ3JvdW5kKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuLmhlYWRlciA+IGgyXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feed',
                templateUrl: './feed.component.html',
                styleUrls: ['./feed.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");





const MaterialComponents = [
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[MaterialComponents], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]], exports: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MaterialComponents],
                exports: [MaterialComponents]
            }]
    }], null, null); })();


/***/ }),

/***/ "kfpQ":
/*!*******************************************************!*\
  !*** ./src/app/user/followers/followers.component.ts ***!
  \*******************************************************/
/*! exports provided: FollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersComponent", function() { return FollowersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




class FollowersComponent {
    constructor(user_service, snackbar) {
        this.user_service = user_service;
        this.snackbar = snackbar;
        this.Follow = "Follow";
        this.name = "";
        this.email = "";
        this.userId = "";
    }
    ngOnInit() {
    }
    addFollower() {
        this.user_service.addFollower({ followerId: this.userId }).subscribe((data) => {
            console.log(data);
            this.Follow = "Following";
            this.user_service.newTweet.next('new Tweet');
            this.snackbar.open("Followed Successfully", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
        }, (error) => {
            this.snackbar.open("Something went wrong!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
        });
    }
}
FollowersComponent.ɵfac = function FollowersComponent_Factory(t) { return new (t || FollowersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
FollowersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FollowersComponent, selectors: [["app-followers"]], inputs: { name: "name", email: "email", userId: "userId" }, decls: 16, vars: 3, consts: [[1, "follow_user_info"], [1, "post"], [1, "post__avatar"], ["src", "../../../assets/blank.png", "alt", "Avatar", 1, "avatar"], [1, "post__body"], [1, "post__header"], [1, "post__headerText"], [1, "user_info"], [1, "bold"], [1, "user_name"], ["type", "button", 1, "btn", "btn-dark", "follow_btn", 3, "click"]], template: function FollowersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FollowersComponent_Template_button_click_14_listener() { return ctx.addFollower(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name.substring(0, 20), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.email.substring(0, 22), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Follow);
    } }, styles: [".avatar[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n\r\n  .post[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    border-bottom: 1px solid var(--twitter-background);\r\n    padding-bottom: 0px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n\r\n  .post__body[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 0px;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n\r\n  .post__badge[_ngcontent-%COMP%] {\r\n    font-size: 14px !important;\r\n    color: var(--twitter-color);\r\n  }\r\n  \r\n\r\n  .post__headerSpecial[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n    color: gray;\r\n  }\r\n  \r\n\r\n  .post__avatar[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n  \r\n\r\n  .user_name[_ngcontent-%COMP%]\r\n  {\r\n      color: gray;\r\n      font-size: 14px;\r\n  }\r\n  \r\n\r\n  .bold[_ngcontent-%COMP%]\r\n  {\r\n      font-weight: bold;\r\n      font-size: 14px;\r\n  }\r\n  \r\n\r\n  .user_info[_ngcontent-%COMP%]\r\n  {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      \r\n  }\r\n  \r\n\r\n  .avatar[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n\r\n  .icon[_ngcontent-%COMP%]\r\n  {\r\n      color: gray;\r\n      \r\n      padding: 10px;\r\n      border-radius: 50%;\r\n      margin: 0 10px;\r\n      \r\n  }\r\n  \r\n\r\n  .follow_user_info[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color: #dce2e6;\r\n}\r\n  \r\n\r\n  .follow_btn[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 25px;\r\n    margin-right: 15px;\r\n    border-radius: 50px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb2xsb3dlcnMvZm9sbG93ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOzs7RUFHQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0RBQWtEO0lBQ2xELG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOzs7RUFFQTtJQUNFLE9BQU87SUFDUCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOzs7RUFJQTtJQUNFLDBCQUEwQjtJQUMxQiwyQkFBMkI7RUFDN0I7OztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0VBQ2I7OztFQUVBO0lBQ0UsYUFBYTtFQUNmOzs7RUFFQTs7TUFFSSxXQUFXO01BQ1gsZUFBZTtFQUNuQjs7O0VBRUE7O01BRUksaUJBQWlCO01BQ2pCLGVBQWU7RUFDbkI7OztFQUVBOztNQUVJLGFBQWE7TUFDYiw4QkFBOEI7O0VBRWxDOzs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7O0VBSUE7O01BRUksV0FBVztNQUNYLDZCQUE2QjtNQUM3QixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGNBQWM7O0VBRWxCOzs7RUFLRjs7SUFFSSx5QkFBeUI7QUFDN0I7OztFQUdBOztJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvdXNlci9mb2xsb3dlcnMvZm9sbG93ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuYXZhdGFyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcblxyXG4gIC5wb3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10d2l0dGVyLWJhY2tncm91bmQpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnBvc3RfX2JvZHkge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgXHJcbiAgLnBvc3RfX2JhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLXR3aXR0ZXItY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAucG9zdF9faGVhZGVyU3BlY2lhbCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0X19hdmF0YXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC51c2VyX25hbWVcclxuICB7XHJcbiAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuYm9sZFxyXG4gIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC51c2VyX2luZm9cclxuICB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAuYXZhdGFyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICAuaWNvblxyXG4gIHtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICBcclxuICB9XHJcblxyXG5cclxuIFxyXG5cclxuLmZvbGxvd191c2VyX2luZm86aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZTJlNjtcclxufVxyXG5cclxuXHJcbi5mb2xsb3dfYnRuXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn0gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FollowersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-followers',
                templateUrl: './followers.component.html',
                styleUrls: ['./followers.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['name']
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['email']
        }], userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['userId']
        }] }); })();


/***/ }),

/***/ "lZE3":
/*!********************************************************!*\
  !*** ./src/app/tweet-dialog/tweet-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: TweetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetDialogComponent", function() { return TweetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_tweet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tweet.service */ "0P5e");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["fileInput"];
const _c1 = ["textinput"];
function TweetDialogComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.base64Img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class TweetDialogComponent {
    constructor(data, tweetService, snackbar, userService, dailogRef) {
        this.data = data;
        this.tweetService = tweetService;
        this.snackbar = snackbar;
        this.userService = userService;
        this.dailogRef = dailogRef;
        this.row = 1;
        this.base64Img = '';
        this.description = '';
    }
    ngOnInit() {
        console.log(this.data, 'data');
    }
    fun(event) {
        this.description = event;
        console.log(event);
        let len = event.length;
        let row = Math.ceil(len / 35);
        this.row = row;
    }
    loadAllImages(files) {
        let filesLength = files.length;
        for (let i = 0; i < filesLength; i++) {
            if (files[i].type == 'image/jpeg' || files[i].type == 'image/jpg' || files[i].type == 'image/png' || files[i].type == 'image/jfif' || files[i].type == 'image/gif') {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const promise = new Promise((resolve, reject) => {
                        resolve(event.target.result);
                    });
                    promise.then((data) => {
                        this.base64Img = data;
                        // console.log( data , 'base64 data' );
                        this.el.nativeElement.value = '';
                        // this.openDialog(data);
                    });
                };
                reader.readAsDataURL(files[i]);
            }
            else {
                // this.snack.open('Invalid File Format. Accepted File Format: /jpg, /jpeg, /png, /jfif, /gif', 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['error-snackbar'] });
                console.log('Invalid File Format. Accepted File Format: /jpg, /jpeg, /png, /jfif, /gif');
            }
        }
    }
    saveProductDetailsStepThree() {
        if (!this.description && !this.base64Img) {
            return;
        }
        let body = {
            image: this.base64Img,
            description: this.description,
        };
        this.tweetService.createTweet(body).subscribe((result) => {
            if (result.success === true) {
                console.log(result);
                this.base64Img = '';
                this.text.nativeElement.value = '';
                this.dailogRef.close();
                this.userService.newTweet.next('new Tweet');
                this.snackbar.open("Tweet done Successfully!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
            }
        }, (error) => {
            this.dailogRef.close();
            this.snackbar.open("Something went wrong!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
        });
    }
}
TweetDialogComponent.ɵfac = function TweetDialogComponent_Factory(t) { return new (t || TweetDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tweet_service__WEBPACK_IMPORTED_MODULE_2__["TweetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
TweetDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TweetDialogComponent, selectors: [["app-tweet-dialog"]], viewQuery: function TweetDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.text = _t.first);
    } }, decls: 19, vars: 3, consts: [[1, "tweet-box"], [1, "tweetBox-input"], ["src", "../../../assets/blank.png", "alt", "Avatar", 1, "avatar"], ["cols", "50", "placeholder", "What's happening?", 3, "rows", "keyup"], ["textinput", "", "inputval", ""], ["class", "icon_image", 4, "ngIf"], [1, "tweet_section"], [1, "container"], [1, "upload-btn-wrapper"], [1, "btn"], ["aria-hidden", "true", 1, "fa", "fa-upload"], ["type", "file", "id", "file", 3, "change"], ["fileInput", ""], ["type", "button", 1, "tweet_button", 3, "disabled", "click"], [1, "icon_image"], ["alt", "Avatar", 3, "src"]], template: function TweetDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TweetDialogComponent_Template_textarea_keyup_5_listener($event) { return ctx.fun($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TweetDialogComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TweetDialogComponent_Template_input_change_14_listener($event) { return ctx.loadAllImages($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TweetDialogComponent_Template_button_click_17_listener() { return ctx.saveProductDetailsStepThree(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tweet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.row);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.base64Img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.base64Img && !ctx.description);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".tweet-box[_ngcontent-%COMP%]\r\n{\r\n    padding-bottom: 10px;\r\n    border-bottom: 0.5px solid var(--twitter-background);\r\n    padding-right: 10px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.tweet-box[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.tweetBox-input[_ngcontent-%COMP%]\r\n{\r\n   padding: 20px;\r\n   display: flex;\r\n}\r\n\r\n.tweetBox-input[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]\r\n{\r\n   flex: 1; \r\n   margin-left: 20px;\r\n   font-size: 20px;\r\n   border: none;\r\n   width: 100%;\r\n   outline: none;\r\n}\r\n\r\n.tweetBox-input[_ngcontent-%COMP%]    > textarea[_ngcontent-%COMP%]\r\n{\r\n   flex: 1; \r\n   margin-left: 20px;\r\n   font-size: 20px;\r\n   border: none;\r\n   width: 100%;\r\n   outline: none;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n.tweet_button[_ngcontent-%COMP%]\r\n{\r\n    background-color: var(--twitter-color) !important;\r\n    border: none !important;\r\n    color: white !important;\r\n    font-weight: 700 !important;\r\n    text-transform: inherit !important;\r\n    border-radius: 30px !important;\r\n    width: 80px;\r\n    height: 40px !important;\r\n    margin-top: 0px !important;\r\n    margin-left: auto !important;\r\n}\r\n\r\n.tweet_button[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color: #269ee9 !important;\r\n}\r\n\r\n.tweet_no[_ngcontent-%COMP%]\r\n{\r\n    padding: 15px;\r\n    color: var(--twitter-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.tweet_no_container[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    border-bottom: 0.5px solid var(--twitter-background);\r\n}\r\n\r\n.tweet_no_container[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color: #e8f5fe;\r\n}\r\n\r\n.tweet_section[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.upload-btn-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    \r\n    color: var(--twitter-color);\r\n    background-color: white;\r\n    background-color: #e8f5fe;\r\n    padding: 6px 20px;\r\n    border-radius: 8px;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border: none;\r\n    \r\n  }\r\n\r\n.btn[_ngcontent-%COMP%]:hover\r\n  {\r\n    background-color: #e8f5fe;\r\n    cursor: pointer;\r\n  }\r\n\r\n.upload-btn-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\r\n    font-size: 100px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n.container[_ngcontent-%COMP%]\r\n  {\r\n    padding-left: 50px;\r\n    padding-top: 5px;\r\n  }\r\n\r\n.icon_image[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    \r\n    max-height: 400px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.icon_image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain;\r\n    border-radius: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.post[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  border-bottom: 1px solid var(--twitter-background);\r\n  padding-bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.post__body[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.post__body[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  border-radius: 20px;\r\n}\r\n\r\n.post_img[_ngcontent-%COMP%]\r\n{\r\n    max-width: 500px;\r\n    min-width: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdlZXQtZGlhbG9nL3R3ZWV0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxvQkFBb0I7SUFDcEIsb0RBQW9EO0lBQ3BELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7R0FFRyxhQUFhO0dBQ2IsYUFBYTtBQUNoQjs7QUFFQTs7R0FFRyxPQUFPO0dBQ1AsaUJBQWlCO0dBQ2pCLGVBQWU7R0FDZixZQUFZO0dBQ1osV0FBVztHQUNYLGFBQWE7QUFDaEI7O0FBR0E7O0dBRUcsT0FBTztHQUNQLGlCQUFpQjtHQUNqQixlQUFlO0dBQ2YsWUFBWTtHQUNaLFdBQVc7R0FDWCxhQUFhO0FBQ2hCOztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztBQUVGOztJQUVJLGlEQUFpRDtJQUNqRCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFHQTs7SUFFSSxvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0RBQW9EO0FBQ3hEOztBQUVBOztJQUVJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7O0FBRUE7O0lBRUUsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7RUFDL0I7O0FBR0E7O0lBRUUseUJBQXlCO0lBQ3pCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sVUFBVTtFQUNaOztBQUVBOztJQUVFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0FBR0E7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBT0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtEQUFrRDtFQUNsRCxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90d2VldC1kaWFsb2cvdHdlZXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnR3ZWV0LWJveFxyXG57XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHZhcigtLXR3aXR0ZXItYmFja2dyb3VuZCk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4udHdlZXQtYm94ID4gZm9ybVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnR3ZWV0Qm94LWlucHV0XHJcbntcclxuICAgcGFkZGluZzogMjBweDtcclxuICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnR3ZWV0Qm94LWlucHV0ID4gaW5wdXRcclxue1xyXG4gICBmbGV4OiAxOyBcclxuICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgYm9yZGVyOiBub25lO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi50d2VldEJveC1pbnB1dCA+IHRleHRhcmVhXHJcbntcclxuICAgZmxleDogMTsgXHJcbiAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICBmb250LXNpemU6IDIwcHg7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uYXZhdGFyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4udHdlZXRfYnV0dG9uXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR3aXR0ZXItY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn0gIFxyXG5cclxuXHJcbi50d2VldF9idXR0b246aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2OWVlOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udHdlZXRfbm9cclxue1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGNvbG9yOiB2YXIoLS10d2l0dGVyLWNvbG9yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnR3ZWV0X25vX2NvbnRhaW5lclxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCB2YXIoLS10d2l0dGVyLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4udHdlZXRfbm9fY29udGFpbmVyOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZmU7XHJcbn1cclxuXHJcbi50d2VldF9zZWN0aW9uXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4ge1xyXG4gICAgXHJcbiAgICBjb2xvcjogdmFyKC0tdHdpdHRlci1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZmU7XHJcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXHJcbiAgfVxyXG5cclxuXHJcbiAgLmJ0bjpob3ZlclxyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyXHJcbiAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcblxyXG5cclxuICAuaWNvbl9pbWFnZSB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmljb25faW1hZ2UgPiBpbWdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLnBvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXR3aXR0ZXItYmFja2dyb3VuZCk7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucG9zdF9fYm9keSB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wb3N0X19ib2R5ID4gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ucG9zdF9pbWdcclxue1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TweetDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tweet-dialog',
                templateUrl: './tweet-dialog.component.html',
                styleUrls: ['./tweet-dialog.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_tweet_service__WEBPACK_IMPORTED_MODULE_2__["TweetService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput']
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['textinput']
        }] }); })();


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


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "H+bZ");




class UserService {
    constructor(apiService) {
        this.apiService = apiService;
        this.newTweet = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    addFollower(Obj) {
        return this.apiService.request('post', 'user/addFollower', Obj);
    }
    ;
    removeFollower(Obj) {
        return this.apiService.request('post', 'user/removeFollower', Obj);
    }
    ;
    getUsersToFollow() {
        return this.apiService.request('get', 'user/getUsersToFollow');
    }
    ;
    getPosts() {
        return this.apiService.request('get', 'user/getPosts');
    }
    ;
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_signin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/signin.service */ "1QKq");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");





const _c0 = ["name"];
const _c1 = ["email"];
const _c2 = ["password"];
class SignupComponent {
    constructor(router, signin, snackbar) {
        this.router = router;
        this.signin = signin;
        this.snackbar = snackbar;
    }
    ngOnInit() {
    }
    goToLogin() {
        this.router.navigate(['/login']);
    }
    signUp() {
        console.log(this.name.nativeElement.value, this.email.nativeElement.value, this.password.nativeElement.value);
        let obj = {
            email: this.email.nativeElement.value,
            name: this.name.nativeElement.value,
            password: this.password.nativeElement.value
        };
        this.signin.register(obj).subscribe((data) => {
            console.log(data, 'data');
            this.snackbar.open("Signup Successfully", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
            this.router.navigate(['/login']);
        }, (eror) => {
            this.snackbar.open("Something Went Wrong In Signup", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signin_service__WEBPACK_IMPORTED_MODULE_2__["SigninService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], viewQuery: function SignupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.name = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.email = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.password = _t.first);
    } }, decls: 51, vars: 0, consts: [[1, "container-fluid", "px-1", "px-md-5", "px-lg-1", "px-xl-5", "py-5", "mx-auto"], [1, "card", "card0", "border-0"], [1, "row", "d-flex"], [1, "col-lg-6"], [1, "card1", "pb-5"], [1, "row"], ["src", "https://i.imgur.com/CXQmsmF.png", 1, "logo"], [1, "row", "px-3", "justify-content-center", "mt-4", "mb-5", "border-line"], ["src", "https://i.imgur.com/uNGdWHi.png", 1, "image"], [1, "card2", "card", "border-0", "px-4", "py-5"], [1, "row", "px-3", "mb-4"], [1, "line"], [1, "or", "text-center"], [1, "row", "px-3"], [1, "mb-1"], [1, "mb-0", "text-sm"], ["type", "text", "name", "name", "required", "", "placeholder", "Enter a valid user name", 1, "mb-4"], ["name", ""], ["type", "text", "name", "email", "required", "", "placeholder", "Enter a valid email address", 1, "mb-4"], ["email", ""], ["type", "password", "name", "password", "required", "", "placeholder", "Enter password"], ["password", ""], [1, "row", "mb-3", "px-3"], ["type", "submit", 1, "btn", "btn-blue", "text-center", 3, "click"], [1, "row", "mb-4", "px-3"], [1, "font-weight-bold"], [1, "text-success", 3, "click"], [1, "bg-blue", "py-4"], [1, "ml-4", "ml-sm-5", "mb-2"], [1, "social-contact", "ml-4", "ml-sm-auto"], [1, "fa", "fa-facebook", "mr-4", "text-sm"], [1, "fa", "fa-google-plus", "mr-4", "text-sm"], [1, "fa", "fa-linkedin", "mr-4", "text-sm"], [1, "fa", "fa-twitter", "mr-4", "mr-sm-5", "text-sm"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_35_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "small", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Do You have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_a_click_40_listener() { return ctx.goToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "LogIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    overflow-x: hidden;\r\n    height: 100%;\r\n    background-color: #B0BEC5;\r\n    background-repeat: no-repeat\r\n}\r\n\r\n.card0[_ngcontent-%COMP%] {\r\n    box-shadow: 0px 4px 8px 0px #757575;\r\n    border-radius: 0px\r\n}\r\n\r\n.card2[_ngcontent-%COMP%] {\r\n    margin: 0px 40px\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 100px;\r\n    margin-top: 20px;\r\n    margin-left: 35px\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    width: 360px;\r\n    height: 280px\r\n}\r\n\r\n.border-line[_ngcontent-%COMP%] {\r\n    border-right: 1px solid #EEEEEE\r\n}\r\n\r\n.facebook[_ngcontent-%COMP%] {\r\n    background-color: #3b5998;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    padding-top: 5px;\r\n    border-radius: 50%;\r\n    width: 35px;\r\n    height: 35px;\r\n    cursor: pointer\r\n}\r\n\r\n.twitter[_ngcontent-%COMP%] {\r\n    background-color: #1DA1F2;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    padding-top: 5px;\r\n    border-radius: 50%;\r\n    width: 35px;\r\n    height: 35px;\r\n    cursor: pointer\r\n}\r\n\r\n.linkedin[_ngcontent-%COMP%] {\r\n    background-color: #2867B2;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    padding-top: 5px;\r\n    border-radius: 50%;\r\n    width: 35px;\r\n    height: 35px;\r\n    cursor: pointer\r\n}\r\n\r\n.line[_ngcontent-%COMP%] {\r\n    height: 1px;\r\n    width: 45%;\r\n    background-color: #E0E0E0;\r\n    margin-top: 10px\r\n}\r\n\r\n.or[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n    font-weight: bold\r\n}\r\n\r\n.text-sm[_ngcontent-%COMP%] {\r\n    font-size: 14px !important\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n    color: #BDBDBD;\r\n    opacity: 1;\r\n    font-weight: 300\r\n}\r\n\r\n[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n    color: #BDBDBD;\r\n    font-weight: 300\r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    color: #BDBDBD;\r\n    font-weight: 300\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    padding: 10px 12px 10px 12px;\r\n    border: 1px solid lightgrey;\r\n    border-radius: 2px;\r\n    margin-bottom: 5px;\r\n    margin-top: 2px;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    color: #2C3E50;\r\n    font-size: 14px;\r\n    letter-spacing: 1px\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none !important;\r\n    border: 1px solid #304FFE;\r\n    outline-width: 0\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none !important;\r\n    outline-width: 0\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: inherit;\r\n    cursor: pointer\r\n}\r\n\r\n.btn-blue[_ngcontent-%COMP%] {\r\n    background-color: #1A237E;\r\n    width: 150px;\r\n    color: #fff;\r\n    border-radius: 2px\r\n}\r\n\r\n.btn-blue[_ngcontent-%COMP%]:hover {\r\n    background-color: #000;\r\n    cursor: pointer\r\n}\r\n\r\n.bg-blue[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #1A237E\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 0px\r\n    }\r\n\r\n    .image[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        height: 220px\r\n    }\r\n\r\n    .border-line[_ngcontent-%COMP%] {\r\n        border-right: none\r\n    }\r\n\r\n    .card2[_ngcontent-%COMP%] {\r\n        border-top: 1px solid #EEEEEE !important;\r\n        margin: 0px 15px\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkM7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkO0FBQ0o7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTs7SUFJSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFHSSwyQkFBMkI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSx3Q0FBd0M7UUFDeEM7SUFDSjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBCRUM1O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxyXG59XHJcblxyXG4uY2FyZDAge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggMHB4ICM3NTc1NzU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHhcclxufVxyXG5cclxuLmNhcmQyIHtcclxuICAgIG1hcmdpbjogMHB4IDQwcHhcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzVweFxyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgaGVpZ2h0OiAyODBweFxyXG59XHJcblxyXG4uYm9yZGVyLWxpbmUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0VFRUVFRVxyXG59XHJcblxyXG4uZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi50d2l0dGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREExRjI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4ubGlua2VkaW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4NjdCMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5saW5lIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbn1cclxuXHJcbi5vciB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuLnRleHQtc20ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnRcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI0JEQkRCRDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXdlaWdodDogMzAwXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNCREJEQkQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwXHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjQkRCREJEO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMFxyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4IDEwcHggMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjMkMzRTUwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweFxyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDRGRkU7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAwXHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZS13aWR0aDogMFxyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5idG4tYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUEyMzdFO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHhcclxufVxyXG5cclxuLmJ0bi1ibHVlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmJnLWJsdWUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUEyMzdFXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweFxyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjIwcHhcclxuICAgIH1cclxuXHJcbiAgICAuYm9yZGVyLWxpbmUge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkMiB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFRUVFRUUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDBweCAxNXB4XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_signin_service__WEBPACK_IMPORTED_MODULE_2__["SigninService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['name']
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['email']
        }], password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['password']
        }] }); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('sdasd923hd9dwe')) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");









const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_signin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/signin.service */ "1QKq");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = ["email"];
const _c1 = ["password"];
class LoginComponent {
    constructor(apiService, router, signin, snackbar) {
        this.apiService = apiService;
        this.router = router;
        this.signin = signin;
        this.snackbar = snackbar;
        this.userName = '';
    }
    ngOnInit() {
        if (this.apiService.isLoggedIn()) {
            this.router.navigate(['./home']);
        }
    }
    updateUserName(userName) {
        this.userName = userName;
    }
    updatePassword(password) {
        this.password = password;
    }
    goToSignupPage() {
        this.router.navigate(['/signup']);
    }
    Login() {
        console.log(this.email.nativeElement.value, this.password.nativeElement.value);
        let obj = {
            email: this.email.nativeElement.value,
            password: this.password.nativeElement.value
        };
        this.signin.login(obj).subscribe((data) => {
            console.log(data, 'data');
            this.snackbar.open("Login Successfully", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
            this.router.navigate(['/home']);
        }, (error) => {
            this.snackbar.open("Something Went Wrong In Login", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signin_service__WEBPACK_IMPORTED_MODULE_3__["SigninService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.email = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.password = _t.first);
    } }, decls: 46, vars: 0, consts: [[1, "container-fluid", "px-1", "px-md-5", "px-lg-1", "px-xl-5", "py-5", "mx-auto"], [1, "card", "card0", "border-0"], [1, "row", "d-flex"], [1, "col-lg-6"], [1, "card1", "pb-5"], [1, "row"], ["src", "https://i.imgur.com/CXQmsmF.png", 1, "logo"], [1, "row", "px-3", "justify-content-center", "mt-4", "mb-5", "border-line"], ["src", "https://i.imgur.com/uNGdWHi.png", 1, "image"], [1, "card2", "card", "border-0", "px-4", "py-5"], [1, "row", "px-3", "mb-4"], [1, "line"], [1, "or", "text-center"], [1, "row", "px-3"], [1, "mb-1"], [1, "mb-0", "text-sm"], ["type", "text", "name", "email", "required", "", "placeholder", "Enter a valid email address", 1, "mb-4"], ["email", ""], ["type", "password", "name", "password", "required", "", "placeholder", "Enter password"], ["password", ""], [1, "row", "mb-3", "px-3"], ["type", "submit", 1, "btn", "btn-blue", "text-center", 3, "click"], [1, "row", "mb-4", "px-3"], [1, "font-weight-bold"], [1, "text-danger", 3, "click"], [1, "bg-blue", "py-4"], [1, "ml-4", "ml-sm-5", "mb-2"], [1, "social-contact", "ml-4", "ml-sm-auto"], [1, "fa", "fa-facebook", "mr-4", "text-sm"], [1, "fa", "fa-google-plus", "mr-4", "text-sm"], [1, "fa", "fa-linkedin", "mr-4", "text-sm"], [1, "fa", "fa-twitter", "mr-4", "mr-sm-5", "text-sm"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_30_listener() { return ctx.Login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_35_listener() { return ctx.goToSignupPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "small", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], styles: ["body[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    overflow-x: hidden;\r\n    height: 100%;\r\n    background-color: #B0BEC5;\r\n    background-repeat: no-repeat\r\n}\r\n\r\n.card0[_ngcontent-%COMP%] {\r\n    box-shadow: 0px 4px 8px 0px #757575;\r\n    border-radius: 0px\r\n}\r\n\r\n.card2[_ngcontent-%COMP%] {\r\n    margin: 0px 40px\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 100px;\r\n    margin-top: 20px;\r\n    margin-left: 35px\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    width: 360px;\r\n    height: 280px\r\n}\r\n\r\n.border-line[_ngcontent-%COMP%] {\r\n    border-right: 1px solid #EEEEEE\r\n}\r\n\r\n.facebook[_ngcontent-%COMP%] {\r\n    background-color: #3b5998;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    padding-top: 5px;\r\n    border-radius: 50%;\r\n    width: 35px;\r\n    height: 35px;\r\n    cursor: pointer\r\n}\r\n\r\n.twitter[_ngcontent-%COMP%] {\r\n    background-color: #1DA1F2;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    padding-top: 5px;\r\n    border-radius: 50%;\r\n    width: 35px;\r\n    height: 35px;\r\n    cursor: pointer\r\n}\r\n\r\n.linkedin[_ngcontent-%COMP%] {\r\n    background-color: #2867B2;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    padding-top: 5px;\r\n    border-radius: 50%;\r\n    width: 35px;\r\n    height: 35px;\r\n    cursor: pointer\r\n}\r\n\r\n.line[_ngcontent-%COMP%] {\r\n    height: 1px;\r\n    width: 45%;\r\n    background-color: #E0E0E0;\r\n    margin-top: 10px\r\n}\r\n\r\n.or[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n    font-weight: bold\r\n}\r\n\r\n.text-sm[_ngcontent-%COMP%] {\r\n    font-size: 14px !important\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n    color: #BDBDBD;\r\n    opacity: 1;\r\n    font-weight: 300\r\n}\r\n\r\n[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n    color: #BDBDBD;\r\n    font-weight: 300\r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    color: #BDBDBD;\r\n    font-weight: 300\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    padding: 10px 12px 10px 12px;\r\n    border: 1px solid lightgrey;\r\n    border-radius: 2px;\r\n    margin-bottom: 5px;\r\n    margin-top: 2px;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    color: #2C3E50;\r\n    font-size: 14px;\r\n    letter-spacing: 1px\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none !important;\r\n    border: 1px solid #304FFE;\r\n    outline-width: 0\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none !important;\r\n    outline-width: 0\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: inherit;\r\n    cursor: pointer\r\n}\r\n\r\n.btn-blue[_ngcontent-%COMP%] {\r\n    background-color: #1A237E;\r\n    width: 150px;\r\n    color: #fff;\r\n    border-radius: 2px\r\n}\r\n\r\n.btn-blue[_ngcontent-%COMP%]:hover {\r\n    background-color: #000;\r\n    cursor: pointer\r\n}\r\n\r\n.bg-blue[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #1A237E\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n    .logo[_ngcontent-%COMP%] {\r\n        margin-left: 0px\r\n    }\r\n\r\n    .image[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        height: 220px\r\n    }\r\n\r\n    .border-line[_ngcontent-%COMP%] {\r\n        border-right: none\r\n    }\r\n\r\n    .card2[_ngcontent-%COMP%] {\r\n        border-top: 1px solid #EEEEEE !important;\r\n        margin: 0px 15px\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7O0lBSUksMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBR0ksMkJBQTJCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaO0lBQ0o7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksd0NBQXdDO1FBQ3hDO0lBQ0o7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEJFQzU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XHJcbn1cclxuXHJcbi5jYXJkMCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggIzc1NzU3NTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweFxyXG59XHJcblxyXG4uY2FyZDIge1xyXG4gICAgbWFyZ2luOiAwcHggNDBweFxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBoZWlnaHQ6IDI4MHB4XHJcbn1cclxuXHJcbi5ib3JkZXItbGluZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRUVFRUVFXHJcbn1cclxuXHJcbi5mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLnR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQTFGMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5saW5rZWRpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg2N0IyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHhcclxufVxyXG5cclxuLm9yIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG4udGV4dC1zbSB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudFxyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjQkRCREJEO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDBcclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI0JEQkRCRDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDBcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNCREJEQkQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwXHJcbn1cclxuXHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHggMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICMyQzNFNTA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMwNEZGRTtcclxuICAgIG91dGxpbmUtd2lkdGg6IDBcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAwXHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmJ0bi1ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTIzN0U7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweFxyXG59XHJcblxyXG4uYnRuLWJsdWU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uYmctYmx1ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTIzN0VcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjBweFxyXG4gICAgfVxyXG5cclxuICAgIC5ib3JkZXItbGluZSB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQyIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VFRUVFRSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDE1cHhcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_signin_service__WEBPACK_IMPORTED_MODULE_3__["SigninService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, { email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['email']
        }], password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['password']
        }] }); })();


/***/ }),

/***/ "x+vh":
/*!*********************************************!*\
  !*** ./src/app/feed/post/post.component.ts ***!
  \*********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");



class PostComponent {
    constructor() {
        this.image = "";
        this.description = "";
        this.name = "";
        this.email = "";
    }
    ngOnInit() {
    }
    myFunction() {
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { image: "image", description: "description", name: "name", email: "email" }, decls: 20, vars: 4, consts: [[1, "post"], [1, "post__avatar"], ["src", "../../../assets/blank.png", "alt", "Avatar", 1, "avatar"], [1, "post__body"], [1, "post__header"], [1, "post__headerText"], [1, "user_info"], [1, "bold"], [1, "user_name"], [1, "post__headerDescription"], ["alt", "", 1, "post_img", 3, "src"], [1, "post__footer"], ["matTooltip", "Comment", "aria-hidden", "true", 1, "fa", "fa-comment", "icon"], ["matTooltip", "Like", "aria-hidden", "true", 1, "fa", "fa-heart", "icon"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltip"]], styles: [".post[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    border-bottom: 1px solid var(--twitter-background);\r\n    padding-bottom: 10px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .post__body[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .post__body[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n    border-radius: 20px;\r\n  }\r\n  \r\n  .post__footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .post__headerDescription[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .post__headerText[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    \r\n  }\r\n  \r\n  .post__badge[_ngcontent-%COMP%] {\r\n    font-size: 14px !important;\r\n    color: var(--twitter-color);\r\n  }\r\n  \r\n  .post__headerSpecial[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n    color: gray;\r\n  }\r\n  \r\n  .post__avatar[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n  \r\n  .user_name[_ngcontent-%COMP%]\r\n  {\r\n      color: gray;\r\n  }\r\n  \r\n  .bold[_ngcontent-%COMP%]\r\n  {\r\n      font-weight: bold;\r\n  }\r\n  \r\n  .user_info[_ngcontent-%COMP%]\r\n  {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      \r\n  }\r\n  \r\n  .avatar[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .post[_ngcontent-%COMP%]:hover\r\n  {\r\n    background-color: #e8f5fe;\r\n  }\r\n  \r\n  .icon[_ngcontent-%COMP%]\r\n  {\r\n      color: gray;\r\n      \r\n      padding: 10px;\r\n      border-radius: 50%;\r\n      margin: 0 10px;\r\n      \r\n  }\r\n  \r\n  .icon[_ngcontent-%COMP%]:hover\r\n  {\r\n    background-color: #5492be7e;\r\n    color: #269ee9 !important;\r\n  }\r\n  \r\n  .post_img[_ngcontent-%COMP%]\r\n{\r\n    max-width: 500px;\r\n    min-width: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0RBQWtEO0lBQ2xELG9CQUFvQjtJQUNwQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsT0FBTztJQUNQLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTs7TUFFSSxXQUFXO0VBQ2Y7O0VBRUE7O01BRUksaUJBQWlCO0VBQ3JCOztFQUVBOztNQUVJLGFBQWE7TUFDYiw4QkFBOEI7O0VBRWxDOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLHlCQUF5QjtFQUMzQjs7RUFFQTs7TUFFSSxXQUFXO01BQ1gsNkJBQTZCO01BQzdCLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsY0FBYzs7RUFFbEI7O0VBRUE7O0lBRUUsMkJBQTJCO0lBQzNCLHlCQUF5QjtFQUMzQjs7RUFFRjs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10d2l0dGVyLWJhY2tncm91bmQpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0X19ib2R5IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBvc3RfX2JvZHkgPiBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBvc3RfX2Zvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBvc3RfX2hlYWRlckRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0X19oZWFkZXJUZXh0ID4gaDMge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogNXB4OyAqL1xyXG4gIH1cclxuICBcclxuICAucG9zdF9fYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdHdpdHRlci1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0X19oZWFkZXJTcGVjaWFsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICB9XHJcbiAgXHJcbiAgLnBvc3RfX2F2YXRhciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXJfbmFtZVxyXG4gIHtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG5cclxuICAuYm9sZFxyXG4gIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAudXNlcl9pbmZvXHJcbiAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgLmF2YXRhciB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucG9zdDpob3ZlclxyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZmU7XHJcbiAgfVxyXG5cclxuICAuaWNvblxyXG4gIHtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIC5pY29uOmhvdmVyXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0OTJiZTdlO1xyXG4gICAgY29sb3I6ICMyNjllZTkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4ucG9zdF9pbWdcclxue1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css']
            }]
    }], function () { return []; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['image']
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['description']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['name']
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['email']
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
//# sourceMappingURL=main.js.map