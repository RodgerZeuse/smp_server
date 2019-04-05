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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <router-outlet></router-outlet> -->\n<posts-preview-container [accessToken]=\"accessToken\"></posts-preview-container>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ActivatedRoute } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent(eltRef) {
        this.eltRef = eltRef;
        this.title = 'post-preview';
        this.accessToken = eltRef.nativeElement.getAttribute('accessToken');
    }
    // @HostListener('swipeleft', ['$event'])
    // dropCalendarEvent(e) {
    //   this.nextSlide();
    // }
    AppComponent.prototype.ngOnInit = function () {
        console.log("accessToken from server", this.accessToken);
        // this.accessToken = this.activeroute.snapshot.params['id'];
        // console.log("param is ",param)
        // this.isPostApprove = false;
        // this.isCongrsScreenShow = false;
        // this.posts = [];
        // this.orignalData = [];
        // this
        //   .postService
        //   .getPostsData()
        //   .subscribe(res => {
        //     this.posts = res;
        //     this.orignalData = res;
        //     this.totalPost = this.posts.length;
        //   })
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'app-root', template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"), styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")] }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-fontawesome/angular2-fontawesome */ "./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-hm-carousel */ "./node_modules/ngx-hm-carousel/fesm5/ngx-hm-carousel.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _service_post_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/post-data.service */ "./src/app/service/post-data.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./congratulation/congratulation.component */ "./src/app/congratulation/congratulation.component.ts");
/* harmony import */ var _posts_preview_container_posts_preview_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts-preview-container/posts-preview-container.component */ "./src/app/posts-preview-container/posts-preview-container.component.ts");
/* harmony import */ var _posts_preview_container_posts_preview_posts_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./posts-preview-container/posts-preview/posts-preview.component */ "./src/app/posts-preview-container/posts-preview/posts-preview.component.ts");
/* harmony import */ var _campaign_comments_container_campaign_comments_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./campaign-comments-container/campaign-comments-container.component */ "./src/app/campaign-comments-container/campaign-comments-container.component.ts");
/* harmony import */ var _posts_preview_container_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts-preview-container/facebook/facebook.component */ "./src/app/posts-preview-container/facebook/facebook.component.ts");
/* harmony import */ var _posts_preview_container_pinterest_pinterest_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./posts-preview-container/pinterest/pinterest.component */ "./src/app/posts-preview-container/pinterest/pinterest.component.ts");
/* harmony import */ var _posts_preview_container_twitter_twitter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./posts-preview-container/twitter/twitter.component */ "./src/app/posts-preview-container/twitter/twitter.component.ts");
/* harmony import */ var _posts_preview_container_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./posts-preview-container/instagram/instagram.component */ "./src/app/posts-preview-container/instagram/instagram.component.ts");
/* harmony import */ var _posts_preview_container_facebook_post_image_post_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./posts-preview-container/facebook/post-image/post-image.component */ "./src/app/posts-preview-container/facebook/post-image/post-image.component.ts");
/* harmony import */ var _posts_preview_container_facebook_post_video_post_video_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./posts-preview-container/facebook/post-video/post-video.component */ "./src/app/posts-preview-container/facebook/post-video/post-video.component.ts");
/* harmony import */ var _posts_preview_container_facebook_post_text_post_text_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./posts-preview-container/facebook/post-text/post-text.component */ "./src/app/posts-preview-container/facebook/post-text/post-text.component.ts");
/* harmony import */ var _posts_preview_container_instagram_post_image_post_image_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./posts-preview-container/instagram/post-image/post-image.component */ "./src/app/posts-preview-container/instagram/post-image/post-image.component.ts");
/* harmony import */ var _posts_preview_container_instagram_post_video_post_video_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./posts-preview-container/instagram/post-video/post-video.component */ "./src/app/posts-preview-container/instagram/post-video/post-video.component.ts");
/* harmony import */ var _posts_preview_container_pinterest_post_image_post_image_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./posts-preview-container/pinterest/post-image/post-image.component */ "./src/app/posts-preview-container/pinterest/post-image/post-image.component.ts");
/* harmony import */ var _posts_preview_container_twitter_post_video_post_video_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./posts-preview-container/twitter/post-video/post-video.component */ "./src/app/posts-preview-container/twitter/post-video/post-video.component.ts");
/* harmony import */ var _posts_preview_container_twitter_post_text_post_text_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./posts-preview-container/twitter/post-text/post-text.component */ "./src/app/posts-preview-container/twitter/post-text/post-text.component.ts");
/* harmony import */ var _posts_preview_container_twitter_post_image_post_image_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./posts-preview-container/twitter/post-image/post-image.component */ "./src/app/posts-preview-container/twitter/post-image/post-image.component.ts");
/* harmony import */ var _posts_preview_container_facebook_fb_confirmation_model_fb_confirmation_model_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./posts-preview-container/facebook/fb-confirmation-model/fb-confirmation-model.component */ "./src/app/posts-preview-container/facebook/fb-confirmation-model/fb-confirmation-model.component.ts");
/* harmony import */ var _posts_preview_container_instagram_ig_confirmation_model_ig_confirmation_model_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./posts-preview-container/instagram/ig-confirmation-model/ig-confirmation-model.component */ "./src/app/posts-preview-container/instagram/ig-confirmation-model/ig-confirmation-model.component.ts");
/* harmony import */ var _posts_preview_container_pinterest_pi_confirmation_model_pi_confirmation_model_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./posts-preview-container/pinterest/pi-confirmation-model/pi-confirmation-model.component */ "./src/app/posts-preview-container/pinterest/pi-confirmation-model/pi-confirmation-model.component.ts");
/* harmony import */ var _posts_preview_container_twitter_tw_confirmation_model_tw_confirmation_model_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./posts-preview-container/twitter/tw-confirmation-model/tw-confirmation-model.component */ "./src/app/posts-preview-container/twitter/tw-confirmation-model/tw-confirmation-model.component.ts");
/* harmony import */ var _campaign_comments_container_compose_component_compose_component_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./campaign-comments-container/compose-component/compose-component.component */ "./src/app/campaign-comments-container/compose-component/compose-component.component.ts");
/* harmony import */ var _campaign_comments_container_comment_component_comment_component_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./campaign-comments-container/comment-component/comment-component.component */ "./src/app/campaign-comments-container/comment-component/comment-component.component.ts");
/* harmony import */ var _service_comments_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./service/comments.service */ "./src/app/service/comments.service.ts");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var ng_socket_io_dist_src_socket_io_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-socket-io/dist/src/socket-io.service */ "./node_modules/ng-socket-io/dist/src/socket-io.service.js");
/* harmony import */ var ng_socket_io_dist_src_socket_io_service__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io_dist_src_socket_io_service__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var config = { url: _config__WEBPACK_IMPORTED_MODULE_36__["Config"].END_POINT_URL, options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _posts_preview_container_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_14__["FacebookComponent"],
                _posts_preview_container_pinterest_pinterest_component__WEBPACK_IMPORTED_MODULE_15__["PinterestComponent"],
                _posts_preview_container_twitter_twitter_component__WEBPACK_IMPORTED_MODULE_16__["TwitterComponent"],
                _posts_preview_container_instagram_instagram_component__WEBPACK_IMPORTED_MODULE_17__["InstagramComponent"],
                _posts_preview_container_facebook_post_image_post_image_component__WEBPACK_IMPORTED_MODULE_18__["FbPostImageComponent"],
                _posts_preview_container_facebook_post_video_post_video_component__WEBPACK_IMPORTED_MODULE_19__["FbPostVideoComponent"],
                _posts_preview_container_facebook_post_text_post_text_component__WEBPACK_IMPORTED_MODULE_20__["FbPostTextComponent"],
                _posts_preview_container_instagram_post_image_post_image_component__WEBPACK_IMPORTED_MODULE_21__["IgPostImageComponent"],
                _posts_preview_container_instagram_post_video_post_video_component__WEBPACK_IMPORTED_MODULE_22__["IgPostVideoComponent"],
                _posts_preview_container_pinterest_post_image_post_image_component__WEBPACK_IMPORTED_MODULE_23__["PiPostImageComponent"],
                _posts_preview_container_twitter_post_video_post_video_component__WEBPACK_IMPORTED_MODULE_24__["TwPostVideoComponent"],
                _posts_preview_container_twitter_post_text_post_text_component__WEBPACK_IMPORTED_MODULE_25__["TwPostTextComponent"],
                _posts_preview_container_twitter_post_image_post_image_component__WEBPACK_IMPORTED_MODULE_26__["TwPostImageComponent"],
                _posts_preview_container_facebook_fb_confirmation_model_fb_confirmation_model_component__WEBPACK_IMPORTED_MODULE_27__["FbConfirmationModelComponent"],
                _posts_preview_container_instagram_ig_confirmation_model_ig_confirmation_model_component__WEBPACK_IMPORTED_MODULE_28__["IgConfirmationModelComponent"],
                _posts_preview_container_pinterest_pi_confirmation_model_pi_confirmation_model_component__WEBPACK_IMPORTED_MODULE_29__["PiConfirmationModelComponent"],
                _posts_preview_container_twitter_tw_confirmation_model_tw_confirmation_model_component__WEBPACK_IMPORTED_MODULE_30__["TwConfirmationModelComponent"],
                _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_10__["CongratulationComponent"],
                _posts_preview_container_posts_preview_posts_preview_component__WEBPACK_IMPORTED_MODULE_12__["PostsPreviewComponent"],
                _posts_preview_container_posts_preview_container_component__WEBPACK_IMPORTED_MODULE_11__["PostsPreviewContainerComponent"],
                _campaign_comments_container_campaign_comments_container_component__WEBPACK_IMPORTED_MODULE_13__["CampaignCommentsContainerComponent"],
                _campaign_comments_container_compose_component_compose_component_component__WEBPACK_IMPORTED_MODULE_31__["ComposeComponentComponent"],
                _campaign_comments_container_comment_component_comment_component_component__WEBPACK_IMPORTED_MODULE_32__["CommentComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_4__["Angular2FontawesomeModule"],
                ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_6__["NgxHmCarouselModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
                // AppRoutingModule,
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                ng_socket_io__WEBPACK_IMPORTED_MODULE_34__["SocketIoModule"].forRoot(config)
            ],
            providers: [_service_post_data_service__WEBPACK_IMPORTED_MODULE_8__["PostService"], _service_comments_service__WEBPACK_IMPORTED_MODULE_33__["CommentsService"], ng_socket_io_dist_src_socket_io_service__WEBPACK_IMPORTED_MODULE_35__["WrappedSocket"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/campaign-comments-container/campaign-comments-container.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/campaign-comments-container/campaign-comments-container.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"campaign-comments-container\">\n  <div class=\"comments-header\">\n    Comments\n  </div>\n  <div class=\"comments-body\">\n    <div *ngIf=\"comments && comments.length > 0\">\n        <div class=\"comment-container\" *ngFor=\"let c of comments\">\n            <comment-component (isShowChild)=\"showCommentReply($event)\" (commentReply)=\"commentReply($event)\" [comment]=\"c\"></comment-component>\n        </div>\n    </div>\n  </div>\n  <div class=\"comments-footer\">\n    <compose-component (newComment)=\"sendComment($event)\"></compose-component>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/campaign-comments-container/campaign-comments-container.component.less":
/*!****************************************************************************************!*\
  !*** ./src/app/campaign-comments-container/campaign-comments-container.component.less ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".campaign-comments-container {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background: #fafafa;\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.campaign-comments-container .comments-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 78px;\n  background-color: #303f9f;\n  color: #fff;\n  line-height: 3.5;\n  font-weight: bolder;\n  font-size: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.campaign-comments-container .comments-body {\n  margin-top: 78px;\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 74%;\n  overflow-y: scroll;\n}\n.campaign-comments-container .comments-footer {\n  position: absolute;\n  bottom: 0;\n  height: 100px;\n  background-color: #f5f5f5;\n  color: #fff;\n  border-top: 1px solid;\n  border-color: rgba(0, 0, 0, 0.12);\n  padding: 20px;\n  width: 32.5%;\n}\n"

/***/ }),

/***/ "./src/app/campaign-comments-container/campaign-comments-container.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/campaign-comments-container/campaign-comments-container.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CampaignCommentsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignCommentsContainerComponent", function() { return CampaignCommentsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_comments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/comments.service */ "./src/app/service/comments.service.ts");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ActivatedRoute } from '@angular/router';

var CampaignCommentsContainerComponent = /** @class */ (function () {
    function CampaignCommentsContainerComponent(commentsService, socket) {
        var _this = this;
        this.commentsService = commentsService;
        this.socket = socket;
        this.sendComment = function ($event) {
            _this.commentsService.sendComment(_this.campaignId, $event).subscribe(function (res) {
                _this.sendMessageToIo();
            });
        };
        this.sendMessageToIo = function () {
            _this.socket.emit("message", _this.campaignId);
        };
    }
    CampaignCommentsContainerComponent.prototype.ngOnInit = function () {
    };
    CampaignCommentsContainerComponent.prototype.ngOnChanges = function () {
        if (this.comments && this.comments.length > 0) {
            for (var i = 0; i < this.comments.length; i++) {
                this.comments[i].children = [];
                this.comments[i].isChildrenShow = false;
                if (this.comments[i].parent) {
                    for (var j = 0; j < this.comments.length; j++) {
                        if (this.comments[i].parent === this.comments[j].id) {
                            this.comments[j].children.push(this.comments[i]);
                        }
                    }
                }
            }
        }
    };
    CampaignCommentsContainerComponent.prototype.commentReply = function ($event) {
        var _this = this;
        this.commentsService.replyComment(this.campaignId, $event.msg, $event.p_id).subscribe(function (res) {
            _this.sendComment($event.msg);
        });
    };
    CampaignCommentsContainerComponent.prototype.showCommentReply = function ($event) {
        for (var i = 0; i < this.comments.length; i++) {
            if (this.comments[i].id == $event) {
                this.comments[i].isChildrenShow = !this.comments[i].isChildrenShow;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CampaignCommentsContainerComponent.prototype, "comments", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CampaignCommentsContainerComponent.prototype, "campaignId", void 0);
    CampaignCommentsContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'campaign-comments-container',
            template: __webpack_require__(/*! ./campaign-comments-container.component.html */ "./src/app/campaign-comments-container/campaign-comments-container.component.html"),
            styles: [__webpack_require__(/*! ./campaign-comments-container.component.less */ "./src/app/campaign-comments-container/campaign-comments-container.component.less")]
        }),
        __metadata("design:paramtypes", [_service_comments_service__WEBPACK_IMPORTED_MODULE_1__["CommentsService"], ng_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], CampaignCommentsContainerComponent);
    return CampaignCommentsContainerComponent;
}());



/***/ }),

/***/ "./src/app/campaign-comments-container/comment-component/comment-component.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/campaign-comments-container/comment-component/comment-component.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comments-wrapper\" *ngIf=\"!comment.parent\">\n    <div class=\"comments-container\">\n      <div class=\"profile-img\" *ngIf=\"comment.registerUser && !comment.registerUser.profileImage\">\n        \n        <div *ngIf=\"comment.registerUser\">\n          {{comment.registerUser.firstName[0]}} {{comment.registerUser.lastName[0]}}\n        </div>\n      </div>\n      <div class=\"profile-img\" *ngIf=\"comment.externalUsers\">\n        <div *ngIf=\"comment.externalUsers && comment.externalUsers.firstName && comment.externalUsers.lastName\">\n          {{comment.externalUsers.firstName[0]}} {{comment.externalUsers.lastName[0]}}\n        </div>\n        <div  *ngIf=\"comment.externalUsers && !comment.externalUsers.firstName || !comment.externalUsers.lastName\">\n          E X\n        </div>\n      </div>\n      <div class=\"\" *ngIf=\"comment.registerUser && comment.registerUser.profileImage\">\n          <div >\n              <img class=\"dp\" src=\"{{imagePath}}{{comment.registerUser.profileImage}}\">\n            </div>\n      </div>\n      <div class=\"comment\">\n        <!-- <div class=\"comment-body\" [ngClass]=\"comment.registerUser && comment.registerUser.id === !currentUserId ? 'sender' : 'reciver' \"> -->\n        <div class=\"comment-body\" >\n            <p class=\"comment-text\">{{comment.msg}}</p>\n            \n        </div>\n        <div class=\"comment-body-footer\">\n            <p class=\"comment-date\">{{comment.createdOn}}</p>\n            <p class=\"reply\"><span (click)=\"showChildMsg(comment.id)\">Reply</span></p>\n            \n        </div>\n        <p class=\"reply \" *ngIf=\"comment.children.length > 0\"><span class=\"replies\" (click)=\"showChildMsg(comment.id)\">{{comment.children.length}} Replies</span></p>\n      </div>\n  \n    </div>\n   \n  </div>\n  \n  <div *ngIf=\"comment.isChildrenShow\">\n    <div *ngIf=\"comment.children && comment.children.length > 0\">\n        <div *ngFor=\"let r of comment.children\">\n            <div class=\"child-comments-wrapper\">\n                <div class=\"comments-container\">\n                  <div class=\"profile-img\" *ngIf=\"r.registerUser && !r.registerUser.profileImage\">\n                    <div *ngIf=\"r.registerUser && !r.registerUser.profileImage\">\n                      {{r.registerUser.firstName[0]}} {{r.registerUser.lastName[0]}}\n                    </div>\n                    \n                  </div>\n                  <div class=\"profile-img\" *ngIf=\"r.externalUsers\">\n                    <div *ngIf=\"r.externalUsers && r.externalUsers.firstName && r.externalUsers.lastName\">\n                      {{r.externalUsers.firstName[0]}} {{r.externalUsers.lastName[0]}}\n                    </div>\n                    <div  *ngIf=\"!r.externalUsers.firstName || !r.externalUsers.lastName[0]\">\n                     E X\n                    </div>\n                    \n                  </div>\n                  <div  *ngIf=\"r.registerUser && r.registerUser.profileImage\">\n                  <div *ngIf=\"r.registerUser && r.registerUser.profileImage\">\n                      <img class=\"dp\" src=\"{{imagePath}}{{r.registerUser.profileImage}}\">\n                    </div>\n                    </div>\n                  <div class=\"comment\">\n                      <!-- <div class=\"comment-body\" [ngClass]=\"r.registerUser.id === currentUserId ? 'reciver' : 'sender' \"> -->\n                      <div class=\"comment-body\" >\n                          <p class=\"comment-text\">{{r.msg}}</p>\n                          \n                      </div>\n                   \n                  </div>\n          \n                </div>\n                <div class=\"comment-body-footer\">\n                    <p class=\"comment-date\">{{r.createdOn}}</p>\n                </div>\n               \n              </div>\n             \n        </div>\n    </div>\n  \n            <input class=\"input-wrapper\" placeholder=\"Write a reply...\" [(ngModel)]=\"replyComment\" (keyup.enter)=\"sendReply(comment.id,replyComment)\">\n  \n  </div>\n"

/***/ }),

/***/ "./src/app/campaign-comments-container/comment-component/comment-component.component.less":
/*!************************************************************************************************!*\
  !*** ./src/app/campaign-comments-container/comment-component/comment-component.component.less ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comments-wrapper {\n  /* background-color: #2d323e; */\n  /* color: #fff; */\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.child-comments-wrapper {\n  padding: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  justify-content: space-between;\n  align-items: center;\n  width: 87%;\n  margin-left: 6%;\n  margin-right: 10px;\n}\n.comments-container {\n  display: flex;\n  width: 100%;\n}\n.profile-img {\n  height: 35px;\n  width: 35px;\n  border: 1px solid black;\n  border-radius: 50%;\n  padding: 7px 1px 1px 6px;\n  text-transform: capitalize;\n  font-size: 13px;\n}\n.dp {\n  height: 35px;\n  width: 35px;\n  border: 1px solid black;\n  border-radius: 50%;\n  padding: 7px 1px 1px 4px;\n  text-transform: capitalize;\n  font-size: 13px;\n}\n.comment {\n  margin-left: 10px;\n  width: 26%;\n}\n.comment-body {\n  background-color: #eff1f3;\n  border-radius: 18px;\n  padding: 8px 10px;\n}\n.comment-text {\n  margin-bottom: 0;\n}\n.comment-date {\n  font-size: 10px;\n  color: rgba(0, 0, 0, 0.54);\n  margin-bottom: 0;\n}\n.reply {\n  color: #365899;\n  cursor: pointer;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.partial-comment {\n  /* height: 763px;\n    overflow: scroll; */\n}\n.reply-textbox {\n  width: 79%;\n  margin-left: 19%;\n  margin-right: 0;\n}\n.input-wrapper {\n  min-height: 32px;\n  background-color: #f2f3f5;\n  border: none;\n  left: 0;\n  right: 0;\n  margin-left: 10px;\n  width: 23%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  min-width: 0;\n  border-radius: 16px;\n  border-color: #ccd0d5;\n  border: 1px solid #dddfe2;\n  padding-left: 10px;\n  padding-right: 10px;\n  /* width: 79%; */\n  margin-left: 7%;\n  margin-right: 0;\n}\n.reciver {\n  background-color: #3c4252;\n  color: #fff;\n}\n.sender {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: #e0e0e0;\n}\n.comment-body-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 1px;\n}\n.replies:hover {\n  text-decoration: underline;\n}\n.dp {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  /* margin: -3px -2px; */\n  border: 1px solid black;\n}\n"

/***/ }),

/***/ "./src/app/campaign-comments-container/comment-component/comment-component.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/campaign-comments-container/comment-component/comment-component.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CommentComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponentComponent", function() { return CommentComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentComponentComponent = /** @class */ (function () {
    function CommentComponentComponent(socket) {
        this.socket = socket;
        this.commentReply = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isShowChild = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CommentComponentComponent.prototype.ngOnInit = function () {
        // this.getMessage();
    };
    CommentComponentComponent.prototype.ngOnChanges = function () {
    };
    CommentComponentComponent.prototype.showChildMsg = function (id) {
        debugger;
        this.isShowChild.emit(id);
    };
    CommentComponentComponent.prototype.sendReply = function (id, reply) {
        var obj = {
            "p_id": id,
            "msg": reply
        };
        this.commentReply.emit(obj);
        this.replyComment = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CommentComponentComponent.prototype, "comment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommentComponentComponent.prototype, "commentReply", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommentComponentComponent.prototype, "commentId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommentComponentComponent.prototype, "isShowChild", void 0);
    CommentComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comment-component',
            template: __webpack_require__(/*! ./comment-component.component.html */ "./src/app/campaign-comments-container/comment-component/comment-component.component.html"),
            styles: [__webpack_require__(/*! ./comment-component.component.less */ "./src/app/campaign-comments-container/comment-component/comment-component.component.less")]
        }),
        __metadata("design:paramtypes", [ng_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]])
    ], CommentComponentComponent);
    return CommentComponentComponent;
}());



/***/ }),

/***/ "./src/app/campaign-comments-container/compose-component/compose-component.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/campaign-comments-container/compose-component/compose-component.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"sendMessage\" placeholder=\"Enter message\" [(ngModel)]=\"message\" (keyup.enter)=\"sendMessage()\" name=\"sendMessage\" id=\"sendMessage\">\n"

/***/ }),

/***/ "./src/app/campaign-comments-container/compose-component/compose-component.component.less":
/*!************************************************************************************************!*\
  !*** ./src/app/campaign-comments-container/compose-component/compose-component.component.less ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sendMessage {\n  border: none;\n  min-height: 40px;\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/campaign-comments-container/compose-component/compose-component.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/campaign-comments-container/compose-component/compose-component.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ComposeComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeComponentComponent", function() { return ComposeComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComposeComponentComponent = /** @class */ (function () {
    function ComposeComponentComponent() {
        this.newComment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ComposeComponentComponent.prototype.ngOnInit = function () {
    };
    ComposeComponentComponent.prototype.sendMessage = function () {
        if (this.message) {
            this.newComment.emit(this.message);
            this.message = "";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ComposeComponentComponent.prototype, "newComment", void 0);
    ComposeComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'compose-component',
            template: __webpack_require__(/*! ./compose-component.component.html */ "./src/app/campaign-comments-container/compose-component/compose-component.component.html"),
            styles: [__webpack_require__(/*! ./compose-component.component.less */ "./src/app/campaign-comments-container/compose-component/compose-component.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ComposeComponentComponent);
    return ComposeComponentComponent;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.END_POINT_URL = 'http://192.168.1.104:3000/';
    Config.IMAGE_DOWNLOAD_END_POINT_URL = 'http://192.168.1.104:3000/api/Containers/pics/download/';
    Config.IMAGE_UPLOAD_END_POINT_URL = "http://192.168.1.104:3000/api/Containers/pics/upload/";
    Config.CROPPED_IMAGE_UPLOAD_END_POINT_URL = "http://192.168.1.104:3000/api/Containers/fileUpload/";
    return Config;
}());



/***/ }),

/***/ "./src/app/congratulation/congratulation.component.html":
/*!**************************************************************!*\
  !*** ./src/app/congratulation/congratulation.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\"> -->\n    <div class=\"col-12 top-header d-md-none\">\n        <div class=\"row align-items-center p-2\">\n          <div class=\"col-4 \">\n            <img src=\"/assets/images/favicon.ico\">\n\n          </div>\n          <div class=\"col-4\">\n            <!-- COMPANY -->\n          </div>\n          <div class=\"col-4 text-right\">\n            Done\n          </div>\n        </div>\n\n      </div>\n  <div class=\"col-12 text-center congrs-screen-wrapper  col-md-6 offset-md-3\">\n    <div class=\"congrs-screen-container\">\n        <div class=\"congrs-text\">\n            <p>Congratulations</p>\n            <p>Nothing more to review</p>\n        </div>\n        <div class=\"approved-status-container\">\n          <p>you've approved {{totalApprovedPosts + totalRejectedPosts}} of {{totalPosts}} posts.</p>\n          <img src=\"/assets/images/champagne.png\" class=\"congrs-img\">\n        </div>\n    </div>\n    \n  </div>\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/congratulation/congratulation.component.less":
/*!**************************************************************!*\
  !*** ./src/app/congratulation/congratulation.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-header {\n  background: black;\n  color: #fff;\n}\n.congrs-screen-wrapper {\n  background: #f8f8f8;\n}\n.congrs-screen-wrapper .congrs-screen-container {\n  position: fixed;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n}\n.congrs-screen-wrapper .congrs-screen-container .congrs-text {\n  color: #2e886a;\n}\n.congrs-screen-wrapper .congrs-screen-container .congrs-text p {\n  font-size: 30px;\n  margin-bottom: 0;\n}\n.congrs-screen-wrapper .congrs-screen-container .approved-status-container {\n  margin-top: 15px;\n}\n.congrs-screen-wrapper .congrs-screen-container .approved-status-container p {\n  color: #7e7e7e;\n}\n.congrs-screen-wrapper .congrs-screen-container .approved-status-container .congrs-img {\n  width: 30vh;\n}\n"

/***/ }),

/***/ "./src/app/congratulation/congratulation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/congratulation/congratulation.component.ts ***!
  \************************************************************/
/*! exports provided: CongratulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongratulationComponent", function() { return CongratulationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CongratulationComponent = /** @class */ (function () {
    function CongratulationComponent() {
    }
    CongratulationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CongratulationComponent.prototype, "totalApprovedPosts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CongratulationComponent.prototype, "totalRejectedPosts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CongratulationComponent.prototype, "totalPosts", void 0);
    CongratulationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'congratulation',
            template: __webpack_require__(/*! ./congratulation.component.html */ "./src/app/congratulation/congratulation.component.html"),
            styles: [__webpack_require__(/*! ./congratulation.component.less */ "./src/app/congratulation/congratulation.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], CongratulationComponent);
    return CongratulationComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/facebook/facebook.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/facebook.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-item1 \">\n  <!-- <div class=\"date-container  align-item-center justify-content-center d-flex\">\n    <p class=\"card-title\">{{fbPostData.secheduledAt}}</p>\n\n  </div> -->\n  <ul class=\"post-head list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <div class=\"row justify-content-between\">\n        <div class=\"header-wrapper\">\n          <div class=\"profile-img\">\n            <img class=\"\" *ngIf=\"fbPostData.socialMediaInfo.thumbnail\" src=\"{{fbPostData.socialMediaInfo.thumbnail}}\" alt=\"Card image cap\">\n          </div>\n          <div class=\"user-info\">\n            <h5>{{fbPostData.socialMediaInfo.name}}</h5>\n          </div>\n        </div>\n        <div class=\"platform-icon justify-content-end align-items-center d-flex\">\n          <span><img src=\"{{fbPostData.network == 'FB' ? '/assets/images/facebook.svg' : fbPostData.network == 'TW' ? '/assets/images/twitter.svg' : fbPostData.network == 'YT' ?  '/assets/images/youtube.png' : fbPostData.network == 'IN' ? '/assets/images/linkedin.png' : fbPostData.network == 'PI' ? '/assets/images/pinterest.svg' : fbPostData.network == 'IG' ? '/assets/images/instagram.svg' : '' }}\" class=\"fb-icon\"> POST PREVIEW</span>\n        </div>\n\n      </div>\n    </li>\n\n  </ul>\n  <div class=\"card-body post-msg\">\n    <p class=\"card-text\" *ngIf=\"fbPostData.description\">{{fbPostData.description}}</p>\n  </div>\n  <div class=\"post-body\">\n    <div id=\"post-container\">\n      <fb-post-image *ngIf=\"fbPostData.type === 'image'\" [mediaFiles]=\"fbPostData.mediaFiles\"></fb-post-image>\n      <fb-post-video *ngIf=\"fbPostData.type === 'video'\" [mediaFiles]=\"fbPostData.mediaFiles\"></fb-post-video>\n      <!-- <fb-post-text *ngIf=\"fbPostData.type === 'text'\" [text]=\"fbPostData.text\"></fb-post-text> -->\n\n    </div>\n  </div>\n  <div class=\"post-footer\">\n    <div class=\"approved-container\" *ngIf=\"fbPostData.postApproved\">\n      <div class=\"approved-range\">\n\n        <div class=\"approved-text\">\n          <i class=\"fa fa-check-circle\"></i> <span> {{totalReviewPost}} of {{totalPost}} approved</span>\n        </div>\n      </div>\n      <div class=\"undo-text\" (click)=\"removeApprovedPost(fbPostData.id)\">\n        Undo\n      </div>\n    </div>\n    <div class=\"row footer-body\">\n      <div class=\"col-4\">\n        <img src=\"/assets/images/reactions.png\" class=\"reaction\"> \n        <!-- {{fbPostData.reaction}} -->\n        0\n      </div>\n      <div class=\"col-4\">\n        <!-- {{fbPostData.comments}} comments -->\n        0 comments\n      </div>\n      <div class=\"col-4\">\n        <!-- {{fbPostData.share}} shares -->\n        0 shares\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/facebook/facebook.component.less":
/*!**************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/facebook.component.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date-container {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 12px;\n  background: url(\"/assets/images/mainhead-bg.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n}\n.date-container p {\n  margin-bottom: 0;\n}\n.post-head {\n  margin-bottom: 0;\n}\n.post-head .list-group-item {\n  border: none;\n  border-radius: 10px;\n}\n.post-head .list-group-item .row .header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.post-head .list-group-item .row .header-wrapper .profile-img img {\n  height: 50px;\n  width: 50px;\n}\n.post-head .list-group-item .row .header-wrapper .user-info {\n  color: #1c1f28;\n  margin-left: 15px;\n}\n.post-head .list-group-item .row .header-wrapper .user-info h5 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.post-head .list-group-item .row .header-wrapper .user-info small {\n  color: #9297a2;\n}\n.post-head .list-group-item .row .platform-icon {\n  font-size: 12px;\n  color: #9297a2;\n}\n.post-head .list-group-item .row .platform-icon .fb-icon {\n  width: 30px;\n  height: 30px;\n  margin-right: 3px;\n  color: #9297a2;\n}\n.post-body {\n  position: relative;\n}\n.post-body .tag-btn {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.post-msg,\n.post-footer {\n  padding: 10px;\n  font-size: 12px;\n}\n.post-footer {\n  color: #9297a2;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.post-footer .footer-body {\n  align-items: center;\n}\n.post-footer .approved-container {\n  background: #2d8371;\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-radius: 10px;\n  position: absolute;\n  z-index: 2;\n  bottom: 0;\n  right: 20px;\n  left: 20px;\n  align-items: center;\n}\n.post-footer .approved-container .undo-text {\n  text-decoration: underline;\n  color: moccasin;\n}\n.post-footer .approved-container .approved-text {\n  align-items: center;\n  display: flex;\n}\n.post-footer .approved-container .approved-text i {\n  font-size: 25px;\n}\n.post-footer .approved-container .approved-text span {\n  margin-left: 7px;\n}\n.post-option-container {\n  background: #8b5757;\n  margin-bottom: 0;\n  border-radius: 0px 0px 7px 7px;\n}\n.post-option-container .footer-container {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n.post-option-container .footer-container .reject {\n  width: 50%;\n  background: #dd314b;\n  color: #fff;\n  text-align: center;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n  border-radius: 0px 0px 0px 5px;\n}\n.post-option-container .footer-container .approve {\n  width: 50%;\n  border-radius: 0px 0px 5px 0px;\n  background: url(\"/assets/images/approvebg.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n  text-align: center;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n}\n.post-option-container .footer-container .tooltip {\n  position: relative;\n  display: inline-block;\n  opacity: 1;\n  padding: 10px;\n}\n.post-option-container .footer-container .tooltip .fa.fa-check {\n  color: white;\n  font-size: 24px;\n}\n.post-option-container .footer-container .tooltip .tooltiptext {\n  visibility: visible;\n  width: 120px;\n  background-color: green;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 10px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 130%;\n  left: 50%;\n  margin-left: -60px;\n}\n.post-option-container .footer-container .tooltip .tooltiptext .fa-heart {\n  border-radius: none;\n  border: none;\n}\n.post-option-container .footer-container .tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: green transparent transparent transparent;\n}\n.post-option-container .footer-container .tooltip:hover .tooltiptext {\n  visibility: visible !important;\n}\n.post-option-container .footer-container .right {\n  width: 50px;\n  height: 50px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n}\n.post-option-container .footer-container .dismiss {\n  margin-left: 10px;\n  width: 50px;\n  height: 50px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n}\n.post-option-container .list-group-item {\n  background: #000;\n}\n.post-option-container .glyphicon {\n  font-size: 25px;\n  line-height: 1.8;\n  color: white;\n}\n#fbmapper {\n  position: relative;\n  display: none;\n}\n#fbmapper .map-input {\n  width: 100px;\n}\n#fbmapper .map-input input {\n  width: 100%;\n}\n.carousel .content {\n  display: flex;\n}\n.carousel .content .item {\n  width: 100%;\n  display: block;\n}\n.carousel .content .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .item {\n  width: 100%;\n  display: block;\n}\n.carousel .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .ball {\n  width: 10px;\n  height: 10px;\n  border-radius: app-border-radius(cycle);\n  background: black;\n  border: 2px solid;\n  opacity: 0.5;\n}\n.carousel .ball.visible {\n  opacity: 1;\n}\n.carousel.transition {\n  transition: all 0.4s ease-in-out;\n}\n.carousel .progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background: #ff5252;\n}\n.carousel .click-area {\n  background: rgba(128, 128, 128, 0.4);\n  border-radius: 50%;\n  color: white;\n  font-weight: bolder;\n  width: 50px;\n  text-align: center;\n}\n.carousel .click-area i {\n  font-size: 3em;\n  font-weight: bolder;\n}\n.reaction {\n  width: 60px;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/facebook/facebook.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/facebook.component.ts ***!
  \************************************************************************/
/*! exports provided: FacebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookComponent", function() { return FacebookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_post_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/post-view.model */ "./src/app/posts-preview-container/model/post-view.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacebookComponent = /** @class */ (function () {
    function FacebookComponent() {
        this.lastSlide = 0;
    }
    FacebookComponent.prototype.ngOnInit = function () {
        $('.carousel').carousel({ interval: false });
    };
    FacebookComponent.prototype.ngOnChanges = function () { };
    FacebookComponent.prototype.imageSlider = function (i) {
        if (this.lastSlide >= 0 && this.lastSlide < i) {
            $('.carousel').carousel("next");
            this.lastSlide = i;
        }
        else if (this.lastSlide >= 0 && this.lastSlide > i) {
            $('.carousel').carousel("prev");
            this.lastSlide = i;
        }
    };
    FacebookComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_post_view_model__WEBPACK_IMPORTED_MODULE_1__["PostViewModel"])
    ], FacebookComponent.prototype, "fbPostData", void 0);
    FacebookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'facebook', template: __webpack_require__(/*! ./facebook.component.html */ "./src/app/posts-preview-container/facebook/facebook.component.html"), styles: [__webpack_require__(/*! ./facebook.component.less */ "./src/app/posts-preview-container/facebook/facebook.component.less")] }),
        __metadata("design:paramtypes", [])
    ], FacebookComponent);
    return FacebookComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/facebook/fb-confirmation-model/fb-confirmation-model.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/fb-confirmation-model/fb-confirmation-model.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" *ngIf=\"!isModelClose\" class=\"modal popup-modal\" role=\"dialog\">\n  <div class=\"modal-dialog reject-modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Why has this been rejected?</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeDismissPopUP()\" >×</button>\n\n      </div>\n      <div class=\"modal-body\">\n        <p>Comment</p>\n        <textarea [(ngModel)]=\"comment\">Type here</textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"closeDismissPopUP()\"  class=\"btn btn-secondary\" >Cancel</button>\n        <button type=\"button\" (click)=\"formSubmit(comment)\" [disabled]=\"!comment\" class=\"btn btn-primary\" >Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/facebook/fb-confirmation-model/fb-confirmation-model.component.less":
/*!*************************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/fb-confirmation-model/fb-confirmation-model.component.less ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts-preview-container/facebook/fb-confirmation-model/fb-confirmation-model.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/fb-confirmation-model/fb-confirmation-model.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: FbConfirmationModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbConfirmationModelComponent", function() { return FbConfirmationModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FbConfirmationModelComponent = /** @class */ (function () {
    function FbConfirmationModelComponent() {
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closePopUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FbConfirmationModelComponent.prototype.ngOnInit = function () {
        this.isModelClose = false;
    };
    FbConfirmationModelComponent.prototype.closeDismissPopUP = function () {
        this.isModelClose = true;
        this
            .closePopUP
            .emit(true);
    };
    FbConfirmationModelComponent.prototype.formSubmit = function (comment) {
        if (comment) {
            this.isModelClose = true;
            var obj = {
                "id": this.id,
                "msg": comment
            };
            this
                .submit
                .emit(obj);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FbConfirmationModelComponent.prototype, "submit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FbConfirmationModelComponent.prototype, "closePopUP", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FbConfirmationModelComponent.prototype, "id", void 0);
    FbConfirmationModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'fb-confirmation-model', template: __webpack_require__(/*! ./fb-confirmation-model.component.html */ "./src/app/posts-preview-container/facebook/fb-confirmation-model/fb-confirmation-model.component.html"), styles: [__webpack_require__(/*! ./fb-confirmation-model.component.less */ "./src/app/posts-preview-container/facebook/fb-confirmation-model/fb-confirmation-model.component.less")] }),
        __metadata("design:paramtypes", [])
    ], FbConfirmationModelComponent);
    return FbConfirmationModelComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/facebook/post-image/post-image.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/post-image/post-image.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mediaFiles.length > 0\" id=\"carouselExampleIndicators\" class=\"carousel  slide\" >\n        <ol class=\"carousel-indicators\" *ngIf=\"mediaFiles.length > 0\">\n          <li data-target=\"#carouselExampleIndicators\" *ngFor=\"let img of mediaFiles;let first=first;let i = index\"\n            [attr.data-slide-to]=\"i\" [ngClass]=\"{active: first}\" (click)=\"imageSlider(i)\"></li>\n        </ol>\n        <div class=\"carousel-inner\" *ngIf=\"mediaFiles.length > 0\">\n          <div class=\"carousel-item \" *ngFor=\"let p of mediaFiles;let first=first;let j =index\" [ngClass]=\"{active: first}\">\n            <img class=\"post-img\" id='igimageMap' src=\"{{imageDownlod + p.name}}\" alt=\"Card image cap\">\n          </div>\n          <div *ngFor=\"let p of mediaFiles;let t =index\">\n            <div *ngIf=\"p.tags.length > 0 \" id=\"tags-container\">\n              <div class=\"tags\" *ngFor=\"let t of p.tags\" style=\"position: fixed;color:#fff;padding:10px;border-radius: 3px; background : rgba(112, 70, 35,0.6);z-index:2\"\n                [style.left.px]=\"t.x\" [style.top.px]=\"t.y\">\n      \n                {{t.tag_text}}\n      \n      \n              </div>\n      \n            </div>\n          </div>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/posts-preview-container/facebook/post-image/post-image.component.less":
/*!***************************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/post-image/post-image.component.less ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-img {\n  width: 100%;\n  height: 400px;\n  border: none;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.carousel-item .tag-btn {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.carousel-item .post-img {\n  width: 100%;\n  height: 450px;\n  border: none;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.carousel .content {\n  display: flex;\n}\n.carousel .content .item {\n  width: 100%;\n  display: block;\n}\n.carousel .content .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .item {\n  width: 100%;\n  display: block;\n}\n.carousel .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .ball {\n  width: 10px;\n  height: 10px;\n  border-radius: app-border-radius(cycle);\n  background: black;\n  border: 2px solid;\n  opacity: 0.5;\n}\n.carousel .ball.visible {\n  opacity: 1;\n}\n.carousel.transition {\n  transition: all 0.4s ease-in-out;\n}\n.carousel .progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background: #ff5252;\n}\n.carousel .click-area {\n  background: rgba(128, 128, 128, 0.4);\n  border-radius: 50%;\n  color: white;\n  font-weight: bolder;\n  width: 50px;\n  text-align: center;\n}\n.carousel .click-area i {\n  font-size: 3em;\n  font-weight: bolder;\n}\n.carousel-indicators .active {\n  background-color: #000;\n}\n.carousel-indicators li {\n  position: relative;\n  flex: 0 1 auto;\n  width: 10px;\n  height: 10px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #d8d8d8;\n  border-radius: 50%;\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: -40px;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/facebook/post-image/post-image.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/post-image/post-image.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FbPostImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbPostImageComponent", function() { return FbPostImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FbPostImageComponent = /** @class */ (function () {
    function FbPostImageComponent() {
        this.imageDownlod = _config__WEBPACK_IMPORTED_MODULE_1__["Config"].IMAGE_DOWNLOAD_END_POINT_URL;
    }
    FbPostImageComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FbPostImageComponent.prototype, "mediaFiles", void 0);
    FbPostImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'fb-post-image', template: __webpack_require__(/*! ./post-image.component.html */ "./src/app/posts-preview-container/facebook/post-image/post-image.component.html"), styles: [__webpack_require__(/*! ./post-image.component.less */ "./src/app/posts-preview-container/facebook/post-image/post-image.component.less")] }),
        __metadata("design:paramtypes", [])
    ], FbPostImageComponent);
    return FbPostImageComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/facebook/post-text/post-text.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/post-text/post-text.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-post\">{{text}}</p>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/facebook/post-text/post-text.component.less":
/*!*************************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/post-text/post-text.component.less ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-post {\n  padding: 10px;\n  padding-bottom: 70px;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/facebook/post-text/post-text.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/post-text/post-text.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FbPostTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbPostTextComponent", function() { return FbPostTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FbPostTextComponent = /** @class */ (function () {
    function FbPostTextComponent() {
    }
    FbPostTextComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FbPostTextComponent.prototype, "text", void 0);
    FbPostTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'fb-post-text', template: __webpack_require__(/*! ./post-text.component.html */ "./src/app/posts-preview-container/facebook/post-text/post-text.component.html"), styles: [__webpack_require__(/*! ./post-text.component.less */ "./src/app/posts-preview-container/facebook/post-text/post-text.component.less")] }),
        __metadata("design:paramtypes", [])
    ], FbPostTextComponent);
    return FbPostTextComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/facebook/post-video/post-video.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/post-video/post-video.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"mediaFiles.length > 0\" id=\"carouselExampleIndicators\" class=\"carousel  slide\" >\n        <ol class=\"carousel-indicators\" *ngIf=\"mediaFiles.length > 0\">\n          <li data-target=\"#carouselExampleIndicators\" *ngFor=\"let video of mediaFiles;let first=first;let i = index\"\n            [attr.data-slide-to]=\"i\" [ngClass]=\"{active: first}\" (click)=\"imageSlider(i)\"></li>\n        </ol>\n        <div class=\"carousel-inner\" *ngIf=\"mediaFiles.length > 0\">\n          <div class=\"carousel-item \" *ngFor=\"let video of mediaFiles;let first=first;let j =index\" [ngClass]=\"{active: first}\">\n            <video controls class=\"video-wrapper\" [src]=\"video.name\">\n\n                </video>\n          </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/facebook/post-video/post-video.component.less":
/*!***************************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/post-video/post-video.component.less ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-wrapper {\n  max-height: 450px;\n  width: 100%;\n}\n.carousel-item .tag-btn {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.carousel-item .post-img {\n  width: 100%;\n  height: 450px;\n  border: none;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.carousel .content {\n  display: flex;\n}\n.carousel .content .item {\n  width: 100%;\n  display: block;\n}\n.carousel .content .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .item {\n  width: 100%;\n  display: block;\n}\n.carousel .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .ball {\n  width: 10px;\n  height: 10px;\n  border-radius: app-border-radius(cycle);\n  background: black;\n  border: 2px solid;\n  opacity: 0.5;\n}\n.carousel .ball.visible {\n  opacity: 1;\n}\n.carousel.transition {\n  transition: all 0.4s ease-in-out;\n}\n.carousel .progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background: #ff5252;\n}\n.carousel .click-area {\n  background: rgba(128, 128, 128, 0.4);\n  border-radius: 50%;\n  color: white;\n  font-weight: bolder;\n  width: 50px;\n  text-align: center;\n}\n.carousel .click-area i {\n  font-size: 3em;\n  font-weight: bolder;\n}\n.carousel-indicators .active {\n  background-color: #000;\n}\n.carousel-indicators li {\n  position: relative;\n  flex: 0 1 auto;\n  width: 10px;\n  height: 10px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #d8d8d8;\n  border-radius: 50%;\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: -40px;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/facebook/post-video/post-video.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/posts-preview-container/facebook/post-video/post-video.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FbPostVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbPostVideoComponent", function() { return FbPostVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FbPostVideoComponent = /** @class */ (function () {
    function FbPostVideoComponent() {
    }
    FbPostVideoComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FbPostVideoComponent.prototype, "mediaFiles", void 0);
    FbPostVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'fb-post-video', template: __webpack_require__(/*! ./post-video.component.html */ "./src/app/posts-preview-container/facebook/post-video/post-video.component.html"), styles: [__webpack_require__(/*! ./post-video.component.less */ "./src/app/posts-preview-container/facebook/post-video/post-video.component.less")] }),
        __metadata("design:paramtypes", [])
    ], FbPostVideoComponent);
    return FbPostVideoComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/instagram/ig-confirmation-model/ig-confirmation-model.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/ig-confirmation-model/ig-confirmation-model.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" *ngIf=\"!isModelClose\" class=\"modal popup-modal\" role=\"dialog\">\n  <div class=\"modal-dialog reject-modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Why has this been rejected?</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeDismissPopUP()\">×</button>\n\n      </div>\n      <div class=\"modal-body\">\n        <p>Comment</p>\n        <textarea [(ngModel)]=\"comment\">Type here</textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"closeDismissPopUP()\" class=\"btn btn-secondary\" >Cancel</button>\n        <button type=\"button\" (click)=\"formSubmit(comment)\" [disabled]=\"!comment\" class=\"btn btn-primary\" >Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/instagram/ig-confirmation-model/ig-confirmation-model.component.less":
/*!**************************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/ig-confirmation-model/ig-confirmation-model.component.less ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts-preview-container/instagram/ig-confirmation-model/ig-confirmation-model.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/ig-confirmation-model/ig-confirmation-model.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: IgConfirmationModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgConfirmationModelComponent", function() { return IgConfirmationModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IgConfirmationModelComponent = /** @class */ (function () {
    function IgConfirmationModelComponent() {
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closePopUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    IgConfirmationModelComponent.prototype.ngOnInit = function () {
        this.isModelClose = false;
    };
    IgConfirmationModelComponent.prototype.closeDismissPopUP = function () {
        this
            .closePopUP
            .emit(true);
        this.isModelClose = true;
    };
    IgConfirmationModelComponent.prototype.formSubmit = function (comment) {
        if (comment) {
            this.isModelClose = true;
            var obj = {
                "id": this.id,
                "msg": comment
            };
            this
                .submit
                .emit(obj);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], IgConfirmationModelComponent.prototype, "submit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], IgConfirmationModelComponent.prototype, "closePopUP", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], IgConfirmationModelComponent.prototype, "id", void 0);
    IgConfirmationModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'ig-confirmation-model', template: __webpack_require__(/*! ./ig-confirmation-model.component.html */ "./src/app/posts-preview-container/instagram/ig-confirmation-model/ig-confirmation-model.component.html"), styles: [__webpack_require__(/*! ./ig-confirmation-model.component.less */ "./src/app/posts-preview-container/instagram/ig-confirmation-model/ig-confirmation-model.component.less")] }),
        __metadata("design:paramtypes", [])
    ], IgConfirmationModelComponent);
    return IgConfirmationModelComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/instagram/instagram.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/instagram.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-item1 \">\n  <!-- <ig-confirmation-model *ngIf=\"isPopupShow\" [id]=\"id\" (closePopUP)=\"closeDismissPopUP($event)\" (submit)=\"submit($event)\"></ig-confirmation-model> -->\n  <div class=\"post-date-container  align-item-center justify-content-center d-flex\">\n    <p class=\"card-title\">{{igPostData.secheduledAt}}</p>\n\n  </div>\n  <ul class=\"post-header list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <div class=\"row justify-content-between\">\n        <div class=\"header-wrapper\">\n          <div class=\"profile-img\">\n            <img src=\"{{igPostData.profileImg}}\" alt=\"Card image cap\">\n          </div>\n          <div class=\"user-info\">\n            <h5>{{igPostData.name}}</h5>\n            <small>\n              {{igPostData.city}}\n            </small>\n\n          </div>\n        </div>\n        <div class=\"platform-icon justify-content-end align-items-center d-flex\">\n          <span><img src=\"/assets/images/instagram.svg\" class=\"fb-icon\"> POST PREVIEW</span>\n        </div>\n\n      </div>\n    </li>\n\n  </ul>\n\n  <div class=\"post-body\">\n    <div id=\"img-container\">\n      <ig-post-image *ngIf=\"igPostData.type === 'image' && igPostData.postImages.length > 0\" [postImages]=\"igPostData.postImages\"></ig-post-image>\n      <ig-post-video *ngIf=\"igPostData.type === 'video' && igPostData.videos.length > 0\" [videos]=\"igPostData.videos\"></ig-post-video>\n    </div>\n    <!-- <div id='igmapper' class=\"igmapper\">\n      <div class=\"map-input\">\n        <input type=\"text\" name=\"tag\" id=\"tags-container\" (keyup.enter)=\"addTags($event)\" [(ngModel)]=\"tag\">\n      </div>\n    </div> -->\n\n  </div>\n  <div class=\"approved-post-wrapper\">\n    <div class=\"approved-container\" *ngIf=\"igPostData.postApproved\">\n      <div class=\"approved-range\">\n\n        <div class=\"approved-text\">\n          <i class=\"fa fa-check-circle\"></i><span> {{totalReviewPost}} of {{totalPost}} approved</span>\n        </div>\n      </div>\n      <div class=\"undo-text\" (click)=\"removeApprovedPost()\">\n        Undo\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p class=\"like\"><span class=\"fa fa-heart mr-2\"></span> {{igPostData.like}} others</p>\n        <p class=\"card-text\"><span>{{igPostData.name}}</span> {{igPostData.message}}</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- <ul class=\"list-group post-options-wrapper list-group-flush\">\n    <div class=\"post-options-container\">\n      <div class=\"reject\" (click)=\"rejectAprovePost(igPostData.id)\">\n        Reject\n      </div>\n      <div class=\"approve\" (click)=\"postApprove(igPostData.id)\">\n        <span class=\"fa fa-heart mr-2\"></span> Approve\n      </div>\n    </div>\n  </ul> -->\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/instagram/instagram.component.less":
/*!****************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/instagram.component.less ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-date-container {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 12px;\n  background: url(\"/assets/images/mainhead-bg.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n}\n.post-date-container p {\n  margin-bottom: 0;\n}\n.popup-modal {\n  display: block !important;\n  position: absolute !important;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.popup-modal .modal-dialog {\n  width: 60%;\n  padding: 10px;\n}\n.popup-modal .modal-dialog .modal-content {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 42px;\n  border-radius: 10px;\n  background: green;\n  color: #ffff;\n}\n.popup-modal .modal-dialog .modal-content .row .col-12 {\n  text-align: center;\n}\n.popup-modal .modal-dialog .modal-content .row .col-12 p {\n  color: #fff;\n}\n.popup-modal .modal-dialog .modal-content .row .col-12 .right-icon {\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n  background: #ffffff;\n  color: green;\n  font-size: 25px;\n  line-height: 1.8;\n}\n.popup-modal .modal-dialog .modal-content .row .confirm {\n  text-align: center;\n}\n.popup-modal .modal-dialog .modal-content .row .confirm .btn-confirm {\n  color: #ffffff;\n  background: rgba(255, 255, 255, 0.4) !important;\n  border-radius: 20px;\n  width: 100px;\n  margin-top: 20px;\n}\n.popup-modal .reject-modal-dialog {\n  width: 90%;\n  padding: 10px;\n}\n.popup-modal .reject-modal-dialog .modal-content {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0px;\n  border-radius: 10px;\n  background: #fff;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-header {\n  padding-bottom: 10px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-header .modal-title {\n  color: #000;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-header .close {\n  font-size: 35px;\n  font-weight: 200;\n  padding-top: 9px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-body {\n  color: #000;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-body p {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  font-size: 15px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-body textarea {\n  width: 100%;\n  height: 10rem;\n  color: lightgrey;\n  border-color: lightgray;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-footer {\n  padding-bottom: 7px;\n  padding-top: 7px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-footer .btn {\n  font-weight: lighter;\n}\n.post-header {\n  margin-bottom: 0;\n}\n.post-header .list-group-item {\n  border: none;\n  border-radius: 10px;\n}\n.post-header .list-group-item .row .header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.post-header .list-group-item .row .header-wrapper .profile-img img {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n.post-header .list-group-item .row .header-wrapper .user-info {\n  color: #1c1f28;\n  margin-left: 15px;\n}\n.post-header .list-group-item .row .header-wrapper .user-info h5 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.post-header .list-group-item .row .header-wrapper .user-info small {\n  color: #9297a2;\n}\n.post-header .list-group-item .row .platform-icon {\n  font-size: 12px;\n  color: #9297a2;\n}\n.post-header .list-group-item .row .platform-icon .fb-icon {\n  width: 30px;\n  height: 30px;\n  margin-right: 3px;\n  color: #9297a2;\n}\n.post-body {\n  position: relative;\n}\n.approved-post-wrapper {\n  margin-top: 25px;\n  padding: 10px;\n  font-size: 12px;\n  position: relative;\n}\n.approved-post-wrapper .like {\n  color: #9297a2;\n}\n.approved-post-wrapper .like .fa-heart {\n  color: #121212;\n}\n.approved-post-wrapper .card-text {\n  color: #333333;\n}\n.approved-post-wrapper .card-text span {\n  color: #222222;\n  font-weight: bolder;\n}\n.approved-post-wrapper .approved-container {\n  background: #2d8371;\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-radius: 10px;\n  position: absolute;\n  z-index: 2;\n  bottom: 20px;\n  right: 20px;\n  left: 20px;\n  align-items: center;\n}\n.approved-post-wrapper .approved-container .undo-text {\n  text-decoration: underline;\n  color: moccasin;\n}\n.approved-post-wrapper .approved-container .approved-text {\n  align-items: center;\n  display: flex;\n}\n.approved-post-wrapper .approved-container .approved-text i {\n  font-size: 25px;\n}\n.approved-post-wrapper .approved-container .approved-text span {\n  margin-left: 7px;\n}\n.post-options-wrapper {\n  background: #8b5757;\n  margin-bottom: 0;\n  border-radius: 0px 0px 7px 7px;\n}\n.post-options-wrapper .post-options-container {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n.post-options-wrapper .post-options-container .reject {\n  width: 50%;\n  background: #dd314b;\n  color: #fff;\n  text-align: center;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n  border-radius: 0px 0px 0px 5px;\n}\n.post-options-wrapper .post-options-container .approve {\n  border-radius: 0px 0px 5px 0px;\n  width: 50%;\n  background: url(\"/assets/images/approvebg.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n  text-align: center;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n}\n.post-options-wrapper .post-options-container .tooltip {\n  position: relative;\n  display: inline-block;\n  opacity: 1;\n  padding: 10px;\n}\n.post-options-wrapper .post-options-container .tooltip .fa.fa-check {\n  color: white;\n  font-size: 24px;\n}\n.post-options-wrapper .post-options-container .tooltip .tooltiptext {\n  visibility: visible;\n  width: 120px;\n  background-color: green;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 10px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 130%;\n  left: 50%;\n  margin-left: -60px;\n}\n.post-options-wrapper .post-options-container .tooltip .tooltiptext .fa-heart {\n  border-radius: none;\n  border: none;\n}\n.post-options-wrapper .post-options-container .tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: green transparent transparent transparent;\n}\n.post-options-wrapper .post-options-container .tooltip:hover .tooltiptext {\n  visibility: visible !important;\n}\n.post-options-wrapper .post-options-container .right {\n  width: 50px;\n  height: 50px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n}\n.post-options-wrapper .post-options-container .dismiss {\n  margin-left: 10px;\n  width: 50px;\n  height: 50px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n}\n.post-options-wrapper .list-group-item {\n  background: #000;\n  border: none;\n}\n.post-options-wrapper .glyphicon {\n  font-size: 25px;\n  line-height: 1.8;\n  color: white;\n}\n#igmapper {\n  position: relative;\n  display: none;\n}\n#igmapper .map-input {\n  width: 100px;\n}\n#igmapper .map-input input {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/instagram/instagram.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/instagram.component.ts ***!
  \**************************************************************************/
/*! exports provided: InstagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramComponent", function() { return InstagramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_post_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/post-view.model */ "./src/app/posts-preview-container/model/post-view.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstagramComponent = /** @class */ (function () {
    function InstagramComponent() {
    }
    InstagramComponent.prototype.ngOnInit = function () {
    };
    InstagramComponent.prototype.ngOnChanges = function () { };
    InstagramComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_post_view_model__WEBPACK_IMPORTED_MODULE_1__["PostViewModel"])
    ], InstagramComponent.prototype, "igPostData", void 0);
    InstagramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'instagram', template: __webpack_require__(/*! ./instagram.component.html */ "./src/app/posts-preview-container/instagram/instagram.component.html"), styles: [__webpack_require__(/*! ./instagram.component.less */ "./src/app/posts-preview-container/instagram/instagram.component.less")] }),
        __metadata("design:paramtypes", [])
    ], InstagramComponent);
    return InstagramComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/instagram/post-image/post-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/post-image/post-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"postImages.length > 0\" id=\"carouselExampleIndicators\" class=\"carousel  slide\" >\n  <ol class=\"carousel-indicators\" *ngIf=\"postImages.length > 0\">\n    <li data-target=\"#carouselExampleIndicators\" *ngFor=\"let img of postImages;let first=first;let i = index\"\n      [attr.data-slide-to]=\"i\" [ngClass]=\"{active: first}\" (click)=\"imageSlider(i)\"></li>\n  </ol>\n  <div class=\"carousel-inner\" *ngIf=\"postImages.length > 0\">\n    <div class=\"carousel-item \" *ngFor=\"let p of postImages;let first=first;let j =index\" [ngClass]=\"{active: first}\">\n      <button *ngIf=\"!p.isShowTags && p.tags.length > 0\" (click)=\"showTags(p.id)\" class=\"btn btn-info tag-btn\" type=\"button\">Show\n        Tags</button>\n      <button *ngIf=\"p.isShowTags && p.tags.length > 0\" (click)=\"showTags(p.id)\" class=\"btn btn-secondary tag-btn\" type=\"button\">Hide\n        Tags</button>\n      <img class=\"post-img\" id='igimageMap' src=\"{{p.image}}\" alt=\"Card image cap\">\n    </div>\n    <div *ngFor=\"let p of postImages;let t =index\">\n      <div *ngIf=\"p.tags.length > 0 && p.isShowTags\" id=\"tags-container\">\n        <div class=\"tags\" *ngFor=\"let t of p.tags\" style=\"position: fixed;color:#fff;padding:10px;border-radius: 3px; background : rgba(112, 70, 35,0.6);z-index:2\"\n          [style.left.px]=\"t.left\" [style.top.px]=\"t.top\">\n\n          {{t.tag}}\n\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/instagram/post-image/post-image.component.less":
/*!****************************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/post-image/post-image.component.less ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item .tag-btn {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.carousel-item .post-img {\n  width: 100%;\n  height: 450px;\n  border: none;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.carousel .content {\n  display: flex;\n}\n.carousel .content .item {\n  width: 100%;\n  display: block;\n}\n.carousel .content .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .item {\n  width: 100%;\n  display: block;\n}\n.carousel .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .ball {\n  width: 10px;\n  height: 10px;\n  border-radius: app-border-radius(cycle);\n  background: black;\n  border: 2px solid;\n  opacity: 0.5;\n}\n.carousel .ball.visible {\n  opacity: 1;\n}\n.carousel.transition {\n  transition: all 0.4s ease-in-out;\n}\n.carousel .progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background: #ff5252;\n}\n.carousel .click-area {\n  background: rgba(128, 128, 128, 0.4);\n  border-radius: 50%;\n  color: white;\n  font-weight: bolder;\n  width: 50px;\n  text-align: center;\n}\n.carousel .click-area i {\n  font-size: 3em;\n  font-weight: bolder;\n}\n.carousel-indicators .active {\n  background-color: #000;\n}\n.carousel-indicators li {\n  position: relative;\n  flex: 0 1 auto;\n  width: 10px;\n  height: 10px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #d8d8d8;\n  border-radius: 50%;\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: -40px;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/instagram/post-image/post-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/post-image/post-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: IgPostImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgPostImageComponent", function() { return IgPostImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IgPostImageComponent = /** @class */ (function () {
    function IgPostImageComponent() {
        this.lastSlide = -1;
    }
    IgPostImageComponent.prototype.ngOnInit = function () {
        $('.carousel').carousel({ interval: false });
    };
    IgPostImageComponent.prototype.showTags = function (id) {
        for (var j = 0; j < this.postImages.length; j++) {
            if (id === this.postImages[j].id) {
                this.postImages[j].isShowTags = !this.postImages[j].isShowTags;
            }
        }
    };
    IgPostImageComponent.prototype.tagsHide = function () {
        for (var j = 0; j < this.postImages.length; j++) {
            this.postImages[j].isShowTags = false;
        }
    };
    IgPostImageComponent.prototype.imageSlider = function (i) {
        if (this.lastSlide >= 0 && this.lastSlide < i) {
            $('.carousel').carousel("next");
            this.lastSlide = i;
        }
        else if (this.lastSlide >= 0 && this.lastSlide > i) {
            $('.carousel').carousel("prev");
            this.lastSlide = i;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], IgPostImageComponent.prototype, "postImages", void 0);
    IgPostImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'ig-post-image', template: __webpack_require__(/*! ./post-image.component.html */ "./src/app/posts-preview-container/instagram/post-image/post-image.component.html"), styles: [__webpack_require__(/*! ./post-image.component.less */ "./src/app/posts-preview-container/instagram/post-image/post-image.component.less")] }),
        __metadata("design:paramtypes", [])
    ], IgPostImageComponent);
    return IgPostImageComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/instagram/post-video/post-video.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/post-video/post-video.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"videos.length > 0\" id=\"carouselVideoIndicators\" class=\"carousel  slide\">\n  <ol class=\"carousel-indicators\" *ngIf=\"videos.length > 0\">\n    <li data-target=\"#carouselVideoIndicators\" *ngFor=\"let v of videos;let first=first;let i = index\"\n      [attr.data-slide-to]=\"i\" [ngClass]=\"{active: first}\" (click)=\"imageSlider(i)\"></li>\n  </ol>\n  <div class=\"carousel-inner\" *ngIf=\"videos.length > 0\">\n    <div class=\"carousel-item \" *ngFor=\"let v of videos;let first=first;let j =index\" [ngClass]=\"{active: first}\">\n\n      <video controls class=\"video-wrapper\" [src]=\"v\">\n\n      </video>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/instagram/post-video/post-video.component.less":
/*!****************************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/post-video/post-video.component.less ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-wrapper {\n  width: 100%;\n  max-height: 450px;\n}\n.carousel-item .tag-btn {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.carousel-item .post-img {\n  width: 100%;\n  height: 450px;\n  border: none;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.carousel .content {\n  display: flex;\n}\n.carousel .content .item {\n  width: 100%;\n  display: block;\n}\n.carousel .content .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .item {\n  width: 100%;\n  display: block;\n}\n.carousel .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .ball {\n  width: 10px;\n  height: 10px;\n  border-radius: app-border-radius(cycle);\n  background: black;\n  border: 2px solid;\n  opacity: 0.5;\n}\n.carousel .ball.visible {\n  opacity: 1;\n}\n.carousel.transition {\n  transition: all 0.4s ease-in-out;\n}\n.carousel .progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background: #ff5252;\n}\n.carousel .click-area {\n  background: rgba(128, 128, 128, 0.4);\n  border-radius: 50%;\n  color: white;\n  font-weight: bolder;\n  width: 50px;\n  text-align: center;\n}\n.carousel .click-area i {\n  font-size: 3em;\n  font-weight: bolder;\n}\n.carousel-indicators .active {\n  background-color: #000;\n}\n.carousel-indicators li {\n  position: relative;\n  flex: 0 1 auto;\n  width: 10px;\n  height: 10px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #d8d8d8;\n  border-radius: 50%;\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: -40px;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/instagram/post-video/post-video.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/posts-preview-container/instagram/post-video/post-video.component.ts ***!
  \**************************************************************************************/
/*! exports provided: IgPostVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgPostVideoComponent", function() { return IgPostVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IgPostVideoComponent = /** @class */ (function () {
    function IgPostVideoComponent() {
        this.lastSlide = 0;
    }
    IgPostVideoComponent.prototype.ngOnInit = function () {
        $('.carousel').carousel({ interval: false });
    };
    IgPostVideoComponent.prototype.imageSlider = function (i) {
        if (this.lastSlide >= 0 && this.lastSlide < i) {
            $('.carousel').carousel("next");
            this.lastSlide = i;
        }
        else if (this.lastSlide >= 0 && this.lastSlide > i) {
            $('.carousel').carousel("prev");
            this.lastSlide = i;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], IgPostVideoComponent.prototype, "videos", void 0);
    IgPostVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'ig-post-video', template: __webpack_require__(/*! ./post-video.component.html */ "./src/app/posts-preview-container/instagram/post-video/post-video.component.html"), styles: [__webpack_require__(/*! ./post-video.component.less */ "./src/app/posts-preview-container/instagram/post-video/post-video.component.less")] }),
        __metadata("design:paramtypes", [])
    ], IgPostVideoComponent);
    return IgPostVideoComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/model/post-view.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/posts-preview-container/model/post-view.model.ts ***!
  \******************************************************************/
/*! exports provided: CampaignViewModel, PostViewModel, SocialMediaAccount, Post, Comments, MediaFileAsset, Tag, MediaFileAssetViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignViewModel", function() { return CampaignViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewModel", function() { return PostViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaAccount", function() { return SocialMediaAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comments", function() { return Comments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaFileAsset", function() { return MediaFileAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaFileAssetViewModel", function() { return MediaFileAssetViewModel; });
var CampaignViewModel = /** @class */ (function () {
    function CampaignViewModel() {
        this.posts = [];
        this.title = '';
        this.description = '';
        this.currentDate = new Date();
        this.error = '';
        this.mediaFiles = [];
        this.id = '';
        this.name = '';
        this.deletedPersistantImages = [];
        this.campaignComments = [];
        this.posts = [];
        this.status = '';
        this.postsToDelete = [];
    }
    return CampaignViewModel;
}());

var PostViewModel = /** @class */ (function () {
    function PostViewModel() {
        this.mediaFiles = [];
        // toServerModelWithoutFiles() {
        //     let post: Post = new Post();
        //     post.description = this.description;
        //     post.network = this.network;
        //     post.scheduleDate = this.scheduleAt;
        //     post.status = this.status;
        //     post.socialMediaInfo = this.socialMediaInfo;
        //     post.registerUserId = this.ownerId;
        //     post.socialMediaAccountId = this.socialMediaAccountId;
        //     post.mediaFiles = [];
        //     if (this.id && this.id != '') {
        //         post.id = this.id;
        //     }
        //     return post;
        // }
        // populateFromServerModel(post: Post) {
        //     this.description = post.description;
        //     this.status = post.status;
        //     this.network = post.network;
        //     this.campaignId = post.campaignId;
        //     this.scheduleAt = post.scheduleDate;
        //     this.socialMediaInfo = post.socialMediaInfo;
        //     this.socialMediaAccounts = post.socialMediaAccounts;
        //     this.error = post.error;
        //     this.socialMediaAccountId = post.socialMediaAccountId;
        //     this.id = post.id;
        //     // this.createdByUser = post.registerUserId;
        //     // this.mediaFiles = post._mediaFiles;
        //     post.mediaFiles.forEach((file: MediaFileAsset) => {
        //         let mediaFile: MediaFileAssetViewModel = new MediaFileAssetViewModel();
        //         mediaFile.populateFromServerModel(file);
        //         this.mediaFiles.push(mediaFile);
        //     })
        // }
    }
    return PostViewModel;
}());

var SocialMediaAccount = /** @class */ (function () {
    function SocialMediaAccount() {
    }
    return SocialMediaAccount;
}());

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());

var Comments = /** @class */ (function () {
    function Comments() {
    }
    return Comments;
}());

var MediaFileAsset = /** @class */ (function () {
    function MediaFileAsset() {
    }
    return MediaFileAsset;
}());

var Tag = /** @class */ (function () {
    function Tag() {
    }
    return Tag;
}());

var MediaFileAssetViewModel = /** @class */ (function () {
    function MediaFileAssetViewModel() {
        this.base64File = {};
        this.croppedImages = [];
        // toServerModel() {
        //     let file: MediaFileAsset = new MediaFileAsset();
        //     file.id = this.id;
        //     file.isCropped = this.isCropped;
        //     file.name = this.name;
        //     file.network = this.network;
        //     file.originalFilename = this.originalFilename;
        //     file.tags = this.tags;
        //     file.thumbnail = this.thumbnailName;
        //     file.type = this.type;
        //     return file;
        // }
        // populateFromServerModel(file: MediaFileAsset) {
        //     this.name = file.name;
        //     this.originalFilename = file.originalFilename;
        //     this.thumbnailName = file.thumbnail;
        //     this.network = file.network;
        //     this.isCropped = file.isCropped;
        //     if (file.tags) {
        //         this.tags = file.tags.map(x => Object.assign({}, x));
        //     }
        //     this.type = file.type;
        //     this.id = file.id;
        // }
    }
    return MediaFileAssetViewModel;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/pinterest/pi-confirmation-model/pi-confirmation-model.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/pinterest/pi-confirmation-model/pi-confirmation-model.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" *ngIf=\"!isModelClose\" class=\"modal popup-modal\" role=\"dialog\">\n  <div class=\"modal-dialog reject-modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Why has this been rejected?</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeDismissPopUP()\">×</button>\n\n      </div>\n      <div class=\"modal-body\">\n        <p>Comment</p>\n        <textarea [(ngModel)]=\"comment\">Type here</textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"closeDismissPopUP()\" class=\"btn btn-secondary\" >Cancel</button>\n        <button type=\"button\" (click)=\"formSubmit(comment)\" [disabled]=\"!comment\" class=\"btn btn-primary\" >Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/pinterest/pi-confirmation-model/pi-confirmation-model.component.less":
/*!**************************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/pinterest/pi-confirmation-model/pi-confirmation-model.component.less ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts-preview-container/pinterest/pi-confirmation-model/pi-confirmation-model.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/pinterest/pi-confirmation-model/pi-confirmation-model.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PiConfirmationModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiConfirmationModelComponent", function() { return PiConfirmationModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PiConfirmationModelComponent = /** @class */ (function () {
    function PiConfirmationModelComponent() {
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closePopUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PiConfirmationModelComponent.prototype.ngOnInit = function () {
        this.isModelClose = false;
    };
    PiConfirmationModelComponent.prototype.closeDismissPopUP = function () {
        this
            .closePopUP
            .emit(true);
        this.isModelClose = true;
    };
    PiConfirmationModelComponent.prototype.formSubmit = function (comment) {
        if (comment) {
            this.isModelClose = true;
            var obj = {
                "id": this.id,
                "msg": comment
            };
            this
                .submit
                .emit(obj);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PiConfirmationModelComponent.prototype, "submit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PiConfirmationModelComponent.prototype, "closePopUP", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PiConfirmationModelComponent.prototype, "id", void 0);
    PiConfirmationModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'pi-confirmation-model', template: __webpack_require__(/*! ./pi-confirmation-model.component.html */ "./src/app/posts-preview-container/pinterest/pi-confirmation-model/pi-confirmation-model.component.html"), styles: [__webpack_require__(/*! ./pi-confirmation-model.component.less */ "./src/app/posts-preview-container/pinterest/pi-confirmation-model/pi-confirmation-model.component.less")] }),
        __metadata("design:paramtypes", [])
    ], PiConfirmationModelComponent);
    return PiConfirmationModelComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/pinterest/pinterest.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/posts-preview-container/pinterest/pinterest.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-item1 \">\n  <!-- <pi-confirmation-model *ngIf=\"isPopupShow\" [id]=\"id\" (closePopUP)=\"closeDismissPopUP($event)\" (submit)=\"submit($event)\"></pi-confirmation-model> -->\n  <div class=\"post-date align-item-center justify-content-center d-flex\">\n    <p class=\"card-title\">{{piPostData.secheduledAt}}</p>\n\n  </div>\n  <ul class=\"post-header list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <div class=\"row justify-content-between\">\n        <div class=\"header-wrapper\">\n          <div class=\"profile-img\">\n            <img src=\"{{piPostData.profileImg}}\" alt=\"Card image cap\">\n          </div>\n          <div class=\"user-info\">\n            <h5>{{piPostData.name}}</h5>\n\n\n          </div>\n        </div>\n        <div class=\"platform-icon  justify-content-end align-items-center d-flex\">\n          <span><img src=\"/assets/images/pinterest.svg\" class=\"pi-icon\"> POST PREVIEW</span>\n        </div>\n\n      </div>\n    </li>\n\n  </ul>\n  <div class=\"post-body\">\n    <div id=\"img-container\">\n      <pi-post-image *ngIf=\"piPostData.type == 'image'\" [image]=\"piPostData.image\"></pi-post-image>\n\n    </div>\n  </div>\n  <div class=\"card-body approved-wrapper\">\n    <div class=\"approved-container\" *ngIf=\"piPostData.postApproved\">\n      <div class=\"approved-range\">\n\n        <div class=\"approved-text\">\n          <i class=\"fa fa-check-circle\"></i> <span> {{totalReviewPost}} of {{totalPost}} approved</span>\n        </div>\n      </div>\n      <div class=\"undo-text\" (click)=\"removeApprovedPost()\">\n        Undo\n      </div>\n    </div>\n    <h4 class=\"card-text\">{{piPostData.board}}</h4>\n    <div class=\"col-12\">\n      <div class=\"row\" *ngIf=\"piPostData.pinned.length > 0\">\n        <div class=\"pinned text-center mr-2 p-1\" *ngFor=\"let pi of piPostData.pinned\" [ngStyle]=\"{'background':pi.color}\">\n          <span class=\"card-text\">{{pi.name}}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"d-flex align-items-center mt-2 mb-2\">\n      <p class=\"card-text mb-0\">Pinned from</p><span class=\"pinned-name mb-0 ml-1\"> {{piPostData.message}}</span>\n    </div>\n  </div>\n  <!-- <ul class=\"list-group post-options list-group-flush\">\n    <div class=\"footer-container\">\n      <div class=\"reject\" (click)=\"rejectAprovePost(piPostData.id)\">\n        Reject\n      </div>\n      <div class=\"approve\" (click)=\"postApprove(piPostData.id)\">\n        <span class=\"fa fa-heart mr-2\"></span> Approve\n      </div>\n\n    </div>\n  </ul> -->\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/pinterest/pinterest.component.less":
/*!****************************************************************************!*\
  !*** ./src/app/posts-preview-container/pinterest/pinterest.component.less ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-date {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 12px;\n  background: url(\"/assets/images/mainhead-bg.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n}\n.post-date p {\n  margin-bottom: 0;\n}\n.popup-modal {\n  display: block !important;\n  position: absolute !important;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.popup-modal .modal-dialog {\n  width: 60%;\n  padding: 10px;\n}\n.popup-modal .modal-dialog .modal-content {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 42px;\n  border-radius: 10px;\n  background: green;\n  color: #ffff;\n}\n.popup-modal .modal-dialog .modal-content .row .col-12 {\n  text-align: center;\n}\n.popup-modal .modal-dialog .modal-content .row .col-12 p {\n  color: #fff;\n}\n.popup-modal .modal-dialog .modal-content .row .col-12 .right-icon {\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n  background: #ffffff;\n  color: green;\n  font-size: 25px;\n  line-height: 1.8;\n}\n.popup-modal .modal-dialog .modal-content .row .confirm {\n  text-align: center;\n}\n.popup-modal .modal-dialog .modal-content .row .confirm .btn-confirm {\n  color: #ffffff;\n  background: rgba(255, 255, 255, 0.4) !important;\n  border-radius: 20px;\n  width: 100px;\n  margin-top: 20px;\n}\n.popup-modal .reject-modal-dialog {\n  width: 90%;\n  padding: 10px;\n}\n.popup-modal .reject-modal-dialog .modal-content {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0px;\n  border-radius: 10px;\n  background: #fff;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-header {\n  padding-bottom: 10px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-header .modal-title {\n  color: #000;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-header .close {\n  font-size: 35px;\n  font-weight: 200;\n  padding-top: 9px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-body {\n  color: #000;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-body p {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  font-size: 15px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-body textarea {\n  width: 100%;\n  height: 10rem;\n  color: lightgrey;\n  border-color: lightgray;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-footer {\n  padding-bottom: 7px;\n  padding-top: 7px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-footer .btn {\n  font-weight: lighter;\n}\n.post-header {\n  margin-bottom: 0;\n}\n.post-header .list-group-item {\n  border: none;\n  border-radius: 10px;\n}\n.post-header .list-group-item .row .header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.post-header .list-group-item .row .header-wrapper .profile-img img {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n}\n.post-header .list-group-item .row .header-wrapper .user-info {\n  color: #1c1f28;\n  margin-left: 15px;\n}\n.post-header .list-group-item .row .header-wrapper .user-info h5 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.post-header .list-group-item .row .header-wrapper .user-info small {\n  color: #9297a2;\n}\n.post-header .list-group-item .row .platform-icon {\n  font-size: 12px;\n  color: #9297a2;\n}\n.post-header .list-group-item .row .platform-icon .pi-icon {\n  width: 30px;\n  height: 30px;\n  margin-right: 3px;\n}\n.post-body {\n  position: relative;\n}\n.post-body .post-img {\n  width: 100%;\n  height: 550px;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n.approved-wrapper {\n  padding: 10px 30px 10px 30px;\n  position: relative;\n}\n.approved-wrapper .card-text {\n  color: #797b7c;\n}\n.approved-wrapper .pinned-name {\n  color: #3f4041;\n  font-weight: bolder;\n}\n.approved-wrapper .pinned {\n  color: #fff;\n  border-radius: 3px;\n}\n.approved-wrapper .pinned .card-text {\n  margin: 0 10px 0 10px;\n  color: #fff;\n}\n.approved-wrapper .approved-container {\n  background: #2d8371;\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-radius: 10px;\n  position: absolute;\n  z-index: 2;\n  bottom: 30px;\n  right: 20px;\n  left: 20px;\n  align-items: center;\n}\n.approved-wrapper .approved-container .undo-text {\n  text-decoration: underline;\n  color: moccasin;\n}\n.approved-wrapper .approved-container .approved-text {\n  align-items: center;\n  display: flex;\n}\n.approved-wrapper .approved-container .approved-text i {\n  font-size: 25px;\n}\n.approved-wrapper .approved-container .approved-text span {\n  margin-left: 7px;\n}\n.post-options {\n  background: #000;\n  margin-bottom: 0;\n  border-radius: 0px 0px 7px 7px;\n}\n.post-options .footer-container {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n.post-options .footer-container .reject {\n  width: 50%;\n  background: #dd314b;\n  color: #fff;\n  text-align: center;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n  border-radius: 0px 0px 0px 5px;\n}\n.post-options .footer-container .approve {\n  border-radius: 0px 0px 5px 0px;\n  width: 50%;\n  background: url(\"/assets/images/approvebg.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n  text-align: center;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n}\n.post-options .footer-container .tooltip {\n  position: relative;\n  display: inline-block;\n  opacity: 1;\n  padding: 10px;\n}\n.post-options .footer-container .tooltip .fa.fa-check {\n  color: white;\n  font-size: 24px;\n}\n.post-options .footer-container .tooltip .tooltiptext {\n  visibility: visible;\n  width: 120px;\n  background-color: green;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 10px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 130%;\n  left: 50%;\n  margin-left: -60px;\n}\n.post-options .footer-container .tooltip .tooltiptext .fa-heart {\n  border-radius: none;\n  border: none;\n}\n.post-options .footer-container .tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: green transparent transparent transparent;\n}\n.post-options .footer-container .tooltip:hover .tooltiptext {\n  visibility: visible !important;\n}\n.post-options .footer-container .right {\n  width: 50px;\n  height: 50px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n}\n.post-options .footer-container .dismiss {\n  margin-left: 10px;\n  width: 50px;\n  height: 50px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n}\n.post-options .list-group-item {\n  background: #000;\n}\n.post-options .glyphicon {\n  font-size: 25px;\n  line-height: 1.8;\n  color: white;\n}\n#pimapper {\n  position: relative;\n  display: none;\n}\n#pimapper .map-input {\n  width: 100px;\n}\n#pimapper .map-input input {\n  width: 100%;\n}\n.carousel .content {\n  display: flex;\n}\n.carousel .content .item {\n  width: 100%;\n  display: block;\n}\n.carousel .content .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .item {\n  width: 100%;\n  display: block;\n}\n.carousel .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .ball {\n  width: 10px;\n  height: 10px;\n  border-radius: app-border-radius(cycle);\n  background: black;\n  border: 2px solid;\n  opacity: 0.5;\n}\n.carousel .ball.visible {\n  opacity: 1;\n}\n.carousel.transition {\n  transition: all 0.4s ease-in-out;\n}\n.carousel .progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background: #ff5252;\n}\n.carousel .click-area {\n  background: rgba(128, 128, 128, 0.4);\n  border-radius: 50%;\n  color: white;\n  font-weight: bolder;\n  width: 50px;\n  text-align: center;\n}\n.carousel .click-area i {\n  font-size: 3em;\n  font-weight: bolder;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/pinterest/pinterest.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/posts-preview-container/pinterest/pinterest.component.ts ***!
  \**************************************************************************/
/*! exports provided: PinterestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinterestComponent", function() { return PinterestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PinterestComponent = /** @class */ (function () {
    function PinterestComponent() {
        // @Input()hideTags : any;
        // @Output()piApprovedPost : EventEmitter < number > = new EventEmitter < number > ();
        // @Output()piRejectPost : EventEmitter < number > = new EventEmitter < number > ();
        // @Input()totalPost : number;
        // @Input()totalReviewPost : number;
        this.lastSlide = 0;
    }
    PinterestComponent.prototype.ngOnInit = function () {
        $('.carousel').carousel({ interval: false });
    };
    PinterestComponent.prototype.ngOnChanges = function () { };
    PinterestComponent.prototype.ngOnDestroy = function () { };
    PinterestComponent.prototype.imageSlider = function (i) {
        if (this.lastSlide >= 0 && this.lastSlide < i) {
            $('.carousel').carousel("next");
            this.lastSlide = i;
        }
        else if (this.lastSlide >= 0 && this.lastSlide > i) {
            $('.carousel').carousel("prev");
            this.lastSlide = i;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PinterestComponent.prototype, "piPostData", void 0);
    PinterestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'pinterest', template: __webpack_require__(/*! ./pinterest.component.html */ "./src/app/posts-preview-container/pinterest/pinterest.component.html"), styles: [__webpack_require__(/*! ./pinterest.component.less */ "./src/app/posts-preview-container/pinterest/pinterest.component.less")] }),
        __metadata("design:paramtypes", [])
    ], PinterestComponent);
    return PinterestComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/pinterest/post-image/post-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/posts-preview-container/pinterest/post-image/post-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"post-img\" id='imageMap' src=\"{{image}}\" alt=\"Card image cap\">\n"

/***/ }),

/***/ "./src/app/posts-preview-container/pinterest/post-image/post-image.component.less":
/*!****************************************************************************************!*\
  !*** ./src/app/posts-preview-container/pinterest/post-image/post-image.component.less ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-img {\n  width: 100%;\n  height: 400px;\n  border: none;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/pinterest/post-image/post-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/posts-preview-container/pinterest/post-image/post-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PiPostImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiPostImageComponent", function() { return PiPostImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PiPostImageComponent = /** @class */ (function () {
    function PiPostImageComponent() {
    }
    PiPostImageComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PiPostImageComponent.prototype, "image", void 0);
    PiPostImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'pi-post-image', template: __webpack_require__(/*! ./post-image.component.html */ "./src/app/posts-preview-container/pinterest/post-image/post-image.component.html"), styles: [__webpack_require__(/*! ./post-image.component.less */ "./src/app/posts-preview-container/pinterest/post-image/post-image.component.less")] }),
        __metadata("design:paramtypes", [])
    ], PiPostImageComponent);
    return PiPostImageComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/posts-preview-container.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/posts-preview-container/posts-preview-container.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-8 col-12\">\n      <div >\n          <posts-preview  [posts]=\"posts\"></posts-preview>\n      </div>\n       \n    </div>\n    <div class=\"col-sm-4 col-12\">\n        <campaign-comments-container [campaignId]=\"campaignId\" [comments]=\"comments\"></campaign-comments-container>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/posts-preview-container.component.less":
/*!********************************************************************************!*\
  !*** ./src/app/posts-preview-container/posts-preview-container.component.less ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts-preview-container/posts-preview-container.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/posts-preview-container/posts-preview-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: PostsPreviewContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPreviewContainerComponent", function() { return PostsPreviewContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_post_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/post-data.service */ "./src/app/service/post-data.service.ts");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ActivatedRoute } from '@angular/router';


var PostsPreviewContainerComponent = /** @class */ (function () {
    function PostsPreviewContainerComponent(postService, socket) {
        var _this = this;
        this.postService = postService;
        this.socket = socket;
        this.getMessage = function () {
            _this.socket.on("message", function (data) {
                if (data.newCampaign.campaignComments) {
                    _this.comments = data.newCampaign.campaignComments;
                }
                if (data.newCampaign.posts) {
                    _this.posts = data.newCampaign.posts;
                    for (var i = 0; i < _this.posts.length; i++) {
                        _this.posts[i].type = data.newCampaign.type;
                    }
                }
                console.log("get message from server using io", data);
            });
        };
        this.posts = [];
        this.orignalData = [];
    }
    PostsPreviewContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMessage();
        // this.accessToken = this.activeroute.snapshot.params['id'];
        this
            .postService
            .getCampaignPosts(this.accessToken)
            .subscribe(function (res) {
            localStorage["exUserProfile"] = JSON.stringify(res.exUser);
            _this.campaignId = res.campaign.id;
            if (res.campaign.campaignComments) {
                _this.comments = res.campaign.campaignComments;
            }
            if (res.campaign.posts) {
                _this.posts = res.campaign.posts;
                for (var i = 0; i < _this.posts.length; i++) {
                    _this.posts[i].type = res.campaign.type;
                }
            }
            _this.orignalData = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PostsPreviewContainerComponent.prototype, "accessToken", void 0);
    PostsPreviewContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posts-preview-container',
            template: __webpack_require__(/*! ./posts-preview-container.component.html */ "./src/app/posts-preview-container/posts-preview-container.component.html"),
            styles: [__webpack_require__(/*! ./posts-preview-container.component.less */ "./src/app/posts-preview-container/posts-preview-container.component.less")]
        }),
        __metadata("design:paramtypes", [_service_post_data_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], ng_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], PostsPreviewContainerComponent);
    return PostsPreviewContainerComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/posts-preview/posts-preview.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/posts-preview-container/posts-preview/posts-preview.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid collaboration\">\n  <div class=\"row d-none d-md-flex main-header align-items-center p-2 \">\n    <div>\n      SM\n\n    </div>\n    <div>\n      <!-- COMPANY -->\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"container-fluid main-container\">\n      <ngx-hm-carousel *ngIf=\"posts.length > 0\" [(ngModel)]=\"index\" (ngModelChange)=\"indexChanged($event)\"\n        [autoplay-speed]=\"3000\" [autoplay]=\"false\" [infinite]=\"infinite\" [between-delay]=\"2000\" class=\"carousel c-accent\">\n\n        <section ngx-hm-carousel-container class=\"content\">\n          <article class=\"item cursor-pointer\" *ngFor=\"let d of posts; let index = index;let main = first\">\n            <div class=\"col-12\" >\n              <div class=\"card callaboratio-card\">\n\n                <div class=\"top-header d-md-none\">\n                  <div class=\"row align-items-center p-2\">\n                    <div class=\"col-4 \">\n                      <img src=\"/assets/images/favicon.ico\">\n\n                    </div>\n                    <div class=\"col-4\">\n                      <!-- COMPANY -->\n                    </div>\n                    <div class=\"col-4 text-right\">\n                      {{totalReviewPost}} of {{totalPost}}\n                    </div>\n                  </div>\n\n                </div>\n                <div >\n                  <facebook [fbPostData]=\"d\"></facebook>\n                </div>\n                <!-- <div *ngIf=\"d.network === 'TW'\">\n                  <twitter [twPostData]=\"d\"></twitter>\n                </div> -->\n                <!-- <div *ngIf=\"d.network === 'PI'\">\n                  <pinterest [piPostData]=\"d\"></pinterest>\n                </div>\n                <div *ngIf=\"d.network === 'IG'\">\n                  <instagram [igPostData]=\"d\"></instagram>\n                </div> -->\n              </div>\n            </div>\n          </article>\n        </section>\n\n        <ng-template #carouselPrev>\n          <div  class=\"click-area d-none d-md-flex\">\n            <i class=\"fa fa-angle-left\"></i>\n          </div>\n        </ng-template>\n        <ng-template #carouselNext>\n          <div  class=\"click-area d-none d-md-flex\">\n            <i class=\"fa fa-angle-right\"></i>\n          </div>\n        </ng-template>\n      </ngx-hm-carousel>\n      <congratulation *ngIf=\"isCongrsScreenShow\" [totalApprovedPosts]=\"totalApprovedPosts\" [totalRejectedPosts]=\"totalRejectedPosts\" [totalPosts]=\"totalPosts\"></congratulation>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/posts-preview-container/posts-preview/posts-preview.component.less":
/*!************************************************************************************!*\
  !*** ./src/app/posts-preview-container/posts-preview/posts-preview.component.less ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 767px) {\n  .collaboration {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .collaboration .main-container {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n.collaboration .main-header {\n  background: black;\n  color: #fff;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\n.collaboration .carousel-indicators li {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n}\n.collaboration .row .callaboratio-card {\n  border: 1px solid grey;\n  border-radius: 7px;\n  position: relative;\n}\n.collaboration .row .callaboratio-card .top-header {\n  background: black;\n  color: #fff;\n}\n#mapper {\n  position: relative;\n  display: none;\n}\n#mapper .map-input {\n  width: 100px;\n}\n#mapper .map-input input {\n  width: 100%;\n}\n.carousel .content {\n  display: flex;\n}\n.carousel .content .item {\n  width: 100%;\n  display: block;\n}\n.carousel .content .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .item {\n  width: 100%;\n  display: block;\n}\n.carousel .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .ball {\n  width: 10px;\n  height: 10px;\n  border-radius: app-border-radius(cycle);\n  background: black;\n  border: 2px solid;\n  opacity: 0.5;\n}\n.carousel .ball.visible {\n  opacity: 1;\n}\n.carousel.transition {\n  transition: all 0.4s ease-in-out;\n}\n.carousel .progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background: #ff5252;\n}\n.carousel .direction.right {\n  right: 25px!important;\n}\n.carousel .click-area {\n  background: #000;\n  border-radius: 50%;\n  color: white;\n  font-weight: bolder;\n  width: 50px;\n  text-align: center;\n}\n.carousel .click-area i {\n  font-size: 3em;\n  font-weight: bolder;\n}\n.carousel .click-area .fa-angle-right {\n  margin-left: 19px;\n}\n.carousel .click-area .fa-angle-left {\n  margin-left: 13px;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/posts-preview/posts-preview.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/posts-preview-container/posts-preview/posts-preview.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PostsPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPreviewComponent", function() { return PostsPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostsPreviewComponent = /** @class */ (function () {
    function PostsPreviewComponent() {
    }
    PostsPreviewComponent.prototype.ngOnInit = function () {
    };
    PostsPreviewComponent.prototype.ngOnChanges = function () {
    };
    PostsPreviewComponent.prototype.indexChanged = function (index) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PostsPreviewComponent.prototype, "posts", void 0);
    PostsPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posts-preview',
            template: __webpack_require__(/*! ./posts-preview.component.html */ "./src/app/posts-preview-container/posts-preview/posts-preview.component.html"),
            styles: [__webpack_require__(/*! ./posts-preview.component.less */ "./src/app/posts-preview-container/posts-preview/posts-preview.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], PostsPreviewComponent);
    return PostsPreviewComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/twitter/post-image/post-image.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/post-image/post-image.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"post-img\" id='imageMap' src=\"{{image}}\" alt=\"Card image cap\">\n"

/***/ }),

/***/ "./src/app/posts-preview-container/twitter/post-image/post-image.component.less":
/*!**************************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/post-image/post-image.component.less ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-img {\n  width: 100%;\n  height: 400px;\n  border: none;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/twitter/post-image/post-image.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/post-image/post-image.component.ts ***!
  \************************************************************************************/
/*! exports provided: TwPostImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwPostImageComponent", function() { return TwPostImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwPostImageComponent = /** @class */ (function () {
    function TwPostImageComponent() {
    }
    TwPostImageComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TwPostImageComponent.prototype, "image", void 0);
    TwPostImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'tw-post-image', template: __webpack_require__(/*! ./post-image.component.html */ "./src/app/posts-preview-container/twitter/post-image/post-image.component.html"), styles: [__webpack_require__(/*! ./post-image.component.less */ "./src/app/posts-preview-container/twitter/post-image/post-image.component.less")] }),
        __metadata("design:paramtypes", [])
    ], TwPostImageComponent);
    return TwPostImageComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/twitter/post-text/post-text.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/post-text/post-text.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-post\">{{text}}</p>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/twitter/post-text/post-text.component.less":
/*!************************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/post-text/post-text.component.less ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-post {\n  padding: 10px;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/twitter/post-text/post-text.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/post-text/post-text.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TwPostTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwPostTextComponent", function() { return TwPostTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwPostTextComponent = /** @class */ (function () {
    function TwPostTextComponent() {
    }
    TwPostTextComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TwPostTextComponent.prototype, "text", void 0);
    TwPostTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'tw-post-text', template: __webpack_require__(/*! ./post-text.component.html */ "./src/app/posts-preview-container/twitter/post-text/post-text.component.html"), styles: [__webpack_require__(/*! ./post-text.component.less */ "./src/app/posts-preview-container/twitter/post-text/post-text.component.less")] }),
        __metadata("design:paramtypes", [])
    ], TwPostTextComponent);
    return TwPostTextComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/twitter/post-video/post-video.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/post-video/post-video.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video controls class=\"video-wrapper\" [src]=\"video\">\n\n</video>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/twitter/post-video/post-video.component.less":
/*!**************************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/post-video/post-video.component.less ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-wrapper {\n  max-height: 450px;\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/twitter/post-video/post-video.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/post-video/post-video.component.ts ***!
  \************************************************************************************/
/*! exports provided: TwPostVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwPostVideoComponent", function() { return TwPostVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwPostVideoComponent = /** @class */ (function () {
    function TwPostVideoComponent() {
    }
    TwPostVideoComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TwPostVideoComponent.prototype, "video", void 0);
    TwPostVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'tw-post-video', template: __webpack_require__(/*! ./post-video.component.html */ "./src/app/posts-preview-container/twitter/post-video/post-video.component.html"), styles: [__webpack_require__(/*! ./post-video.component.less */ "./src/app/posts-preview-container/twitter/post-video/post-video.component.less")] }),
        __metadata("design:paramtypes", [])
    ], TwPostVideoComponent);
    return TwPostVideoComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/twitter/tw-confirmation-model/tw-confirmation-model.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/tw-confirmation-model/tw-confirmation-model.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" *ngIf=\"!isModelClose\" class=\"modal popup-modal\" role=\"dialog\">\n  <div class=\"modal-dialog reject-modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Why has this been rejected?</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeDismissPopUP()\">×</button>\n\n      </div>\n      <div class=\"modal-body\">\n        <p>Comment</p>\n        <textarea [(ngModel)]=\"comment\">Type here</textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"closeDismissPopUP()\" class=\"btn btn-secondary\" >Cancel</button>\n        <button type=\"button\" (click)=\"formSubmit(comment)\" [disabled]=\"!comment\" class=\"btn btn-primary\" >Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/twitter/tw-confirmation-model/tw-confirmation-model.component.less":
/*!************************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/tw-confirmation-model/tw-confirmation-model.component.less ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts-preview-container/twitter/tw-confirmation-model/tw-confirmation-model.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/tw-confirmation-model/tw-confirmation-model.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: TwConfirmationModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwConfirmationModelComponent", function() { return TwConfirmationModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwConfirmationModelComponent = /** @class */ (function () {
    function TwConfirmationModelComponent() {
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closePopUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TwConfirmationModelComponent.prototype.ngOnInit = function () {
        this.isModelClose = false;
    };
    TwConfirmationModelComponent.prototype.closeDismissPopUP = function () {
        this
            .closePopUP
            .emit(true);
        this.isModelClose = true;
    };
    TwConfirmationModelComponent.prototype.formSubmit = function (comment) {
        if (comment) {
            this.isModelClose = true;
            var obj = {
                "id": this.id,
                "msg": comment
            };
            this
                .submit
                .emit(obj);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TwConfirmationModelComponent.prototype, "submit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TwConfirmationModelComponent.prototype, "closePopUP", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TwConfirmationModelComponent.prototype, "id", void 0);
    TwConfirmationModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'tw-confirmation-model', template: __webpack_require__(/*! ./tw-confirmation-model.component.html */ "./src/app/posts-preview-container/twitter/tw-confirmation-model/tw-confirmation-model.component.html"), styles: [__webpack_require__(/*! ./tw-confirmation-model.component.less */ "./src/app/posts-preview-container/twitter/tw-confirmation-model/tw-confirmation-model.component.less")] }),
        __metadata("design:paramtypes", [])
    ], TwConfirmationModelComponent);
    return TwConfirmationModelComponent;
}());



/***/ }),

/***/ "./src/app/posts-preview-container/twitter/twitter.component.html":
/*!************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/twitter.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <tw-confirmation-model *ngIf=\"isPopupShow\" [id]=\"id\" (closePopUP)=\"closeDismissPopUP($event)\" (submit)=\"submit($event)\"></tw-confirmation-model> -->\n<div class=\"carousel-item1 \">\n  <div class=\"post-date align-item-center justify-content-center d-flex\">\n    <p class=\"card-title\">{{twPostData.secheduledAt}}</p>\n\n  </div>\n  <ul class=\"post-header list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <div class=\"row justify-content-between\">\n        <div class=\"header-wrapper\">\n          <div class=\"profile-img\">\n            <img src=\"{{twPostData.profileImg}}\" alt=\"Card image cap\">\n          </div>\n          <div class=\"user-info\">\n            <h5>{{twPostData.name}}</h5>\n            <small>\n              {{twPostData.username}}\n            </small>\n\n          </div>\n        </div>\n        <div class=\"platform-icon  justify-content-end align-items-center d-flex\">\n          <span><img src=\"/assets/images/twitter.svg\" class=\"fb-icon\"> POST PREVIEW</span>\n        </div>\n\n      </div>\n    </li>\n\n  </ul>\n  <div class=\"card-body post-msg\">\n\n\n    <p class=\"card-text\">{{twPostData.message}}</p>\n    <p class=\"card-text tags\">{{twPostData.tags}}</p>\n\n  </div>\n  <div class=\"post-body\">\n    <div id=\"img-container\">\n      <tw-post-image *ngIf=\"twPostData.type === 'image'\" [image]=\"twPostData.postImage\"></tw-post-image>\n      <tw-post-video *ngIf=\"twPostData.type === 'video'\" [video]=\"twPostData.video\"></tw-post-video>\n      <tw-post-text *ngIf=\"twPostData.type === 'text'\" [text]=\"twPostData.text\"></tw-post-text>\n    </div>\n  </div>\n  <div class=\"body-footer\">\n    <div class=\"approved-container\" *ngIf=\"twPostData.postApproved\">\n      <div class=\"approved-range\">\n\n        <div class=\"approved-text\">\n          <i class=\"fa fa-check-circle\"></i> <span> {{totalReviewPost}} of {{totalPost}} approved</span>\n        </div>\n      </div>\n      <div class=\"undo-text\" (click)=\"removeApprovedPost()\">\n        Undo\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        {{twPostData.scheduledAt}}\n      </div>\n\n    </div>\n  </div>\n\n  <!-- <ul class=\"list-group post-options-wrapper list-group-flush\">\n    <div class=\"footer-container\">\n      <div class=\"reject\" (click)=\"openDismissPopUP(twPostData.id)\">\n        Reject\n      </div>\n      <div class=\"approve\" (click)=\"openApprovedPopUP(twPostData.id)\">\n        <span class=\"fa fa-heart mr-2\"></span> Approve\n      </div>\n\n    </div>\n\n\n  </ul> -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/posts-preview-container/twitter/twitter.component.less":
/*!************************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/twitter.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-modal {\n  display: block !important;\n  position: absolute !important;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.popup-modal .modal-dialog {\n  width: 60%;\n  padding: 10px;\n}\n.popup-modal .modal-dialog .modal-content {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 42px;\n  border-radius: 10px;\n  background: green;\n  color: #ffff;\n}\n.popup-modal .modal-dialog .modal-content .row .col-12 {\n  text-align: center;\n}\n.popup-modal .modal-dialog .modal-content .row .col-12 p {\n  color: #fff;\n}\n.popup-modal .modal-dialog .modal-content .row .col-12 .right-icon {\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n  background: #ffffff;\n  color: green;\n  font-size: 25px;\n  line-height: 1.8;\n}\n.popup-modal .modal-dialog .modal-content .row .confirm {\n  text-align: center;\n}\n.popup-modal .modal-dialog .modal-content .row .confirm .btn-confirm {\n  color: #ffffff;\n  background: rgba(255, 255, 255, 0.4) !important;\n  border-radius: 20px;\n  width: 100px;\n  margin-top: 20px;\n}\n.popup-modal .reject-modal-dialog {\n  width: 90%;\n  padding: 10px;\n}\n.popup-modal .reject-modal-dialog .modal-content {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0px;\n  border-radius: 10px;\n  background: #fff;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-header {\n  padding-bottom: 10px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-header .modal-title {\n  color: #000;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-header .close {\n  font-size: 35px;\n  font-weight: 200;\n  padding-top: 9px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-body {\n  color: #000;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-body p {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  font-size: 15px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-body textarea {\n  width: 100%;\n  height: 10rem;\n  color: lightgrey;\n  border-color: lightgray;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-footer {\n  padding-bottom: 7px;\n  padding-top: 7px;\n}\n.popup-modal .reject-modal-dialog .modal-content .modal-footer .btn {\n  font-weight: lighter;\n}\n.post-header {\n  margin-bottom: 0;\n}\n.post-header .list-group-item {\n  border: none;\n  border-radius: 10px;\n}\n.post-header .list-group-item .row .header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.post-header .list-group-item .row .header-wrapper .profile-img img {\n  height: 50px;\n  width: 50px;\n  border-radius: 10px;\n}\n.post-header .list-group-item .row .header-wrapper .user-info {\n  color: #1c1f28;\n  margin-left: 15px;\n}\n.post-header .list-group-item .row .header-wrapper .user-info h5 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.post-header .list-group-item .row .header-wrapper .user-info small {\n  color: #9297a2;\n}\n.post-header .list-group-item .row .platform-icon {\n  font-size: 12px;\n  color: #9297a2;\n}\n.post-header .list-group-item .row .platform-icon .fb-icon {\n  width: 30px;\n  height: 30px;\n  margin-right: 3px;\n  color: #9297a2;\n}\n.post-body {\n  position: relative;\n}\n.post-body .tag-btn {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.post-body .post-img {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 5px;\n}\n.post-body .post-img img {\n  width: 100%;\n  height: 350px;\n  border: none;\n  border-radius: 12px;\n  box-shadow: -4px 1px 0px 0px #c2c2c2, 2px 3px 4px 1px #c2c2c2;\n}\n.post-date {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 12px;\n  background: url(\"/assets/images/mainhead-bg.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n}\n.post-date p {\n  margin-bottom: 0;\n}\n.body-footer {\n  color: #9297a2;\n}\n.post-msg,\n.body-footer {\n  padding: 10px;\n  font-size: 12px;\n  position: relative;\n}\n.post-msg .tags,\n.body-footer .tags {\n  color: #1b95e0;\n}\n.post-msg .approved-container,\n.body-footer .approved-container {\n  background: #2d8371;\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-radius: 10px;\n  position: absolute;\n  z-index: 2;\n  bottom: -20px;\n  right: 20px;\n  left: 20px;\n  align-items: center;\n}\n.post-msg .approved-container .undo-text,\n.body-footer .approved-container .undo-text {\n  text-decoration: underline;\n  color: moccasin;\n}\n.post-msg .approved-container .approved-text,\n.body-footer .approved-container .approved-text {\n  align-items: center;\n  display: flex;\n}\n.post-msg .approved-container .approved-text i,\n.body-footer .approved-container .approved-text i {\n  font-size: 25px;\n}\n.post-msg .approved-container .approved-text span,\n.body-footer .approved-container .approved-text span {\n  margin-left: 7px;\n}\n.post-options-wrapper {\n  background: #000;\n  margin-bottom: 0;\n  margin-top: 40px;\n  border-radius: 0px 0px 7px 7px;\n}\n.post-options-wrapper .footer-container {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n.post-options-wrapper .footer-container .reject {\n  width: 50%;\n  background: #dd314b;\n  color: #fff;\n  text-align: center;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n  border-radius: 0px 0px 0px 5px;\n}\n.post-options-wrapper .footer-container .approve {\n  border-radius: 0px 0px 5px 0px;\n  width: 50%;\n  background: url(\"/assets/images/approvebg.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n  text-align: center;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n}\n.post-options-wrapper .footer-container .tooltip {\n  position: relative;\n  display: inline-block;\n  opacity: 1;\n  padding: 10px;\n}\n.post-options-wrapper .footer-container .tooltip .fa.fa-check {\n  color: white;\n  font-size: 24px;\n}\n.post-options-wrapper .footer-container .tooltip .tooltiptext {\n  visibility: visible;\n  width: 120px;\n  background-color: green;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 10px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 130%;\n  left: 50%;\n  margin-left: -60px;\n}\n.post-options-wrapper .footer-container .tooltip .tooltiptext .fa-heart {\n  border-radius: none;\n  border: none;\n}\n.post-options-wrapper .footer-container .tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: green transparent transparent transparent;\n}\n.post-options-wrapper .footer-container .tooltip:hover .tooltiptext {\n  visibility: visible !important;\n}\n.post-options-wrapper .footer-container .right {\n  width: 50px;\n  height: 50px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n}\n.post-options-wrapper .footer-container .dismiss {\n  margin-left: 10px;\n  width: 50px;\n  height: 50px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n}\n.post-options-wrapper .list-group-item {\n  background: #000;\n  border: none;\n}\n.post-options-wrapper .glyphicon {\n  font-size: 25px;\n  line-height: 1.8;\n  color: white;\n}\n#twmapper {\n  position: relative;\n  display: none;\n}\n#twmapper .map-input {\n  width: 100px;\n}\n#twmapper .map-input input {\n  width: 100%;\n}\n.carousel .content {\n  display: flex;\n}\n.carousel .content .item {\n  width: 100%;\n  display: block;\n}\n.carousel .content .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .item {\n  width: 100%;\n  display: block;\n}\n.carousel .item .img {\n  width: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center;\n  height: 0;\n  padding-bottom: 50%;\n}\n.carousel .ball {\n  width: 10px;\n  height: 10px;\n  border-radius: app-border-radius(cycle);\n  background: black;\n  border: 2px solid;\n  opacity: 0.5;\n}\n.carousel .ball.visible {\n  opacity: 1;\n}\n.carousel.transition {\n  transition: all 0.4s ease-in-out;\n}\n.carousel .progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background: #ff5252;\n}\n.carousel .click-area {\n  background: rgba(128, 128, 128, 0.4);\n  border-radius: 50%;\n  color: white;\n  font-weight: bolder;\n  width: 50px;\n  text-align: center;\n}\n.carousel .click-area i {\n  font-size: 3em;\n  font-weight: bolder;\n}\n.reaction {\n  width: 60px;\n}\n"

/***/ }),

/***/ "./src/app/posts-preview-container/twitter/twitter.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/posts-preview-container/twitter/twitter.component.ts ***!
  \**********************************************************************/
/*! exports provided: TwitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterComponent", function() { return TwitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_post_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/post-view.model */ "./src/app/posts-preview-container/model/post-view.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterComponent = /** @class */ (function () {
    function TwitterComponent() {
        // @Input()hideTags : any;
        // @Output()twApprovedPost : EventEmitter < number > = new EventEmitter < number > ();
        // @Output()twRejectPost : EventEmitter < number > = new EventEmitter < number > ();
        // @Input()totalPost : number;
        // @Input()totalReviewPost : number;
        this.lastSlide = 0;
    }
    TwitterComponent.prototype.ngOnInit = function () {
        $('.carousel').carousel({ interval: false });
        setInterval(function () {
            $(".tooltiptext").css({ "visibility": "hidden" });
        }, 5000);
    };
    TwitterComponent.prototype.ngOnChanges = function () { };
    TwitterComponent.prototype.ngOnDestroy = function () { };
    TwitterComponent.prototype.imageSlider = function (i) {
        if (this.lastSlide >= 0 && this.lastSlide < i) {
            $('.carousel').carousel("next");
            this.lastSlide = i;
        }
        else if (this.lastSlide >= 0 && this.lastSlide > i) {
            $('.carousel').carousel("prev");
            this.lastSlide = i;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_post_view_model__WEBPACK_IMPORTED_MODULE_1__["PostViewModel"])
    ], TwitterComponent.prototype, "twPostData", void 0);
    TwitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'twitter', template: __webpack_require__(/*! ./twitter.component.html */ "./src/app/posts-preview-container/twitter/twitter.component.html"), styles: [__webpack_require__(/*! ./twitter.component.less */ "./src/app/posts-preview-container/twitter/twitter.component.less")] }),
        __metadata("design:paramtypes", [])
    ], TwitterComponent);
    return TwitterComponent;
}());



/***/ }),

/***/ "./src/app/service/comments.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/comments.service.ts ***!
  \*********************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsService = /** @class */ (function () {
    function CommentsService(http) {
        var _this = this;
        this.http = http;
        this.getCampaignComments = function (campaignId) {
        };
        this.sendComment = function (campaignId, comment) {
            if (localStorage["exUserProfile"]) {
                var user = JSON.parse(localStorage["exUserProfile"]);
                var obj = { "msg": comment, "externalUsersId": user.id };
                return _this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].END_POINT_URL + 'api/campaigns/' + campaignId + '/campaignComments', obj).map(function (res) {
                    return res.json();
                });
            }
        };
        this.replyComment = function (campaignId, comment, commentId) {
            if (localStorage["exUserProfile"]) {
                var user = JSON.parse(localStorage["exUserProfile"]);
                var obj = { "msg": comment, "externalUsersId": user.id, "parent": commentId };
                return _this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].END_POINT_URL + 'api/campaigns/' + campaignId + '/campaignComments', obj).map(function (res) {
                    return res.json();
                });
            }
        };
    }
    CommentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/service/post-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/post-data.service.ts ***!
  \**********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(http) {
        var _this = this;
        this.http = http;
        this.getCampaignPosts = function (campaignId) {
            // let post = { relation: 'posts', scope: { fields: ['socialMediaAccountId', 'socialMediaInfo', 'id', 'campaignId', 'network', 'error','status', 'mediaFiles'], include: { relation : "socialMediaAccounts"} } };
            // let headers = new Headers();
            // headers.append("filter" , '{"include": [ {"relation": "posts","include": {"relation": "socialMediaAccounts" }},{"campaignComments": "registerUser"}]}')
            // let options = new RequestOptions({ headers: headers });
            _config__WEBPACK_IMPORTED_MODULE_3__["Config"].END_POINT_URL;
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].END_POINT_URL + 'api/campaigns/externalUserGetCampaignByAccessToken/' + campaignId).map(function (res) {
                return res.json();
            });
        };
    }
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PostService);
    return PostService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rameez/Documents/workspace/post-preview/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map