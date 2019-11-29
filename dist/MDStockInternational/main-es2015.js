(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/file-upload/fesm2015/file-upload.js":
/*!**************************************************!*\
  !*** ./dist/file-upload/fesm2015/file-upload.js ***!
  \**************************************************/
/*! exports provided: FileUploadService, FileUploadComponent, FileUploadModule, ɵe, ɵb, ɵc, ɵd, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AlertMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DialogBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return PreviewFilesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DragDropDirective; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
















































/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUploadService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = "http://3.15.236.141:5005/uploads";
    }
    /* Upload Function */
    /**
     * @param {?} uploadURL
     * @param {?} data
     * @return {?}
     */
    upload(uploadURL, data) {
        /** @type {?} */
        const formData = new FormData();
        formData.append('file', data.file);
        formData.append('type', data.type);
        formData.append('path', data.path);
        formData.append('prefix', data.prefix);
        return this.httpClient.post(uploadURL, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpEventType"].UploadProgress:
                    /** @type {?} */
                    const percentage = Math.round(100 * event.loaded / event.total);
                    if (percentage >= 0 && percentage <= 100) {
                        return { status: 'progress', data: { totalData: event.total, loadedData: event.loaded, percentage: percentage } };
                    }
                    else {
                        return { status: 'complete', data: null };
                    }
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpEventType"].Response:
                    if (event.body.status == 'success') {
                        return { status: 'complete', data: event.body };
                    }
                    else {
                        return { status: 'error', data: 'An error occord.' };
                    }
                default:
                    return { status: 'waiting', data: '' };
                    return `Unhandled event: ${event.type}`;
            }
        })));
    }
    /**
     * @param {?} uploadURL
     * @param {?} data
     * @return {?}
     */
    uploadBase64(uploadURL, data) {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.post(uploadURL, data, httpOptions);
    }
}
FileUploadService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FileUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClient"] }
];
/** @nocollapse */ FileUploadService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_46__["defineInjectable"])({ factory: function FileUploadService_Factory() { return new FileUploadService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_46__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClient"])); }, token: FileUploadService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DialogBoxComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DialogBoxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["Component"], args: [{
                selector: 'lib-dialog-box',
                template: "<h1 mat-dialog-title>Are you sure ??</h1>\n<div mat-dialog-actions>\n  <button mat-button type=\"button\" [mat-dialog-close]=\"false\" (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button type=\"button\" [mat-dialog-close]=\"true\" cdkFocusInitial>Yes</button>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
DialogBoxComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_DATA"],] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PreviewFilesComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('Preview component: ', this.data);
    }
}
PreviewFilesComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["Component"], args: [{
                selector: 'lib-preview-files',
                template: "<h2 mat-dialog-title>File Preview</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <img mat-card-image [src]=\"this.data.imgURL\" *ngIf=\"this.data.imgURL\">\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button type=\"button\" mat-dialog-close>Cancel</button>\n</mat-dialog-actions>",
                styles: ["img{max-width:100%;max-height:64vh}"]
            }] }
];
/** @nocollapse */
PreviewFilesComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_DATA"],] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUploadComponent {
    /**
     * @param {?} formBuilder
     * @param {?} fileUploadService
     * @param {?} ActivatedRoute
     * @param {?} router
     * @param {?} _snackBar
     * @param {?} dialog
     */
    constructor(formBuilder, fileUploadService, ActivatedRoute$$1, router, _snackBar, dialog) {
        this.formBuilder = formBuilder;
        this.fileUploadService = fileUploadService;
        this.ActivatedRoute = ActivatedRoute$$1;
        this.router = router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.formData = new FormData();
        this.files = [];
        this.filesProcess = [];
        this.totalFile = 0;
        this.loading = false;
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /* Select File Proccess */
    /**
     * @param {?} event
     * @return {?}
     */
    selectFiles(event) {
        this.loading = true;
        for (let index = 0; index < event.length; index++) {
            /** @type {?} */
            var count = this.files.length;
            /** @type {?} */
            const element = event[index];
            /* Checking Validation */
            /** @type {?} */
            let validate = this.checkingValidation(element);
            if (validate.status) {
                element.valid = { status: true };
                element.upload = { status: 'selected' };
                element.viewUrl = 'https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif';
                this.files.push(element);
                this.viewFiles(count, element);
            }
            else {
                element.valid = { status: false, message: validate.message };
                element.upload = { status: 'selected' };
                element.viewUrl = null;
                /** @type {?} */
                let format = element.type.split("/");
                element.viewText = format[1];
                this.files.push(element);
            }
        }
    }
    /**
     * @param {?} count
     * @param {?} element
     * @return {?}
     */
    viewFiles(count, element) {
        /** @type {?} */
        let format = element.type.split("/");
        if (format[0] == 'image') {
            /** @type {?} */
            var reader = new FileReader();
            /** @type {?} */
            let imagePath = this.files[count];
            reader.readAsDataURL(this.files[count]);
            reader.onload = (/**
             * @param {?} _event
             * @return {?}
             */
            (_event) => {
                /** @type {?} */
                let imgURL = reader.result;
                this.files[count].viewUrl = imgURL;
            });
        }
        else {
            this.files[count].viewUrl = null;
            this.files[count].viewText = format[1];
        }
    }
    /* Checking Validation */
    /**
     * @param {?} element
     * @return {?}
     */
    checkingValidation(element) {
        /** @type {?} */
        let valid = { status: true, message: null };
        /* Checking File Format */
        /** @type {?} */
        let format = element.type.split("/");
        /** @type {?} */
        let check = this.configData.format.includes(format[1]);
        if (check == false) {
            valid.status = false;
            valid.message = format[1].toUpperCase() + " format not supported.";
            this.openSnackBar(format[1].toUpperCase() + " format not supported.", '');
            return valid;
        }
        /* Checking File size */
        if (element.size / 1000 > this.configData.size) {
            valid.status = false;
            valid.message = "File size too large. Maximum file size limit: " + this.configData.size + " KB.";
            this.openSnackBar("File size too large. Maximum file size limit: " + this.configData.size + " KB.", '');
            return valid;
        }
        if (valid.status == true) {
            return valid;
        }
    }
    /* File Upload Process */
    /**
     * @param {?=} getIndex
     * @return {?}
     */
    uploadAll(getIndex = null) {
        for (let index = 0; index < this.files.length; index++) {
            if (this.files[index].valid.status == true && this.files[index].upload.status != 'complete') {
                this.uploading(index);
            }
        }
    }
    /* Upload */
    /**
     * @param {?} index
     * @return {?}
     */
    uploading(index) {
        /** @type {?} */
        var postData = {
            file: this.files[index],
            type: this.configData.type,
            path: this.configData.path,
            prefix: this.configData.prefix,
            uploadType: this.configData.uploadType
        };
        /** @type {?} */
        var url = this.configData.baseUrl + this.configData.endpoint + '?path=' + this.configData.path + '&prefix=' + this.configData.prefix + '&type=' + this.configData.type + '&rand=' + index;
        this.fileUploadService.upload(url, postData).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            let result = response;
            switch (result.status) {
                case 'complete':
                    this.files[index].upload = result;
                    this.configData.files = this.files;
                    this.openSnackBar('Successfully Uploaded !!', 'Undo');
                    break;
                case 'error':
                    this.files[index].upload = result.data;
                    this.openSnackBar(result.data, '');
                    break;
                default:
                    this.files[index].upload = result;
                    break;
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            this.files[index] = { status: 'error' };
            this.openSnackBar('An error occurred !!', 'Retry');
        }));
    }
    /* Remove Files */
    /**
     * @param {?=} index
     * @return {?}
     */
    removeFiles(index = null) {
        this.openDialog();
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result) {
                this.files.splice(index, 1);
                this.openSnackBar('Successfully Remove !!', '');
            }
        }));
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    /* Dialog Box */
    /**
     * @return {?}
     */
    openDialog() {
        this.dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '250px',
            data: { message: "Message" }
        });
    }
    /* Delete all selected files */
    /**
     * @return {?}
     */
    deleteAll() {
        this.openDialog();
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result) {
                this.files.splice(0, this.files.length);
                this.openSnackBar('Successfully Remove !!', '');
            }
        }));
    }
    /* Preview Files */
    /**
     * @param {?} index
     * @return {?}
     */
    previewFiles(index) {
        /** @type {?} */
        var mimeType = this.files[index].type;
        if (mimeType.match(/image\/*/) == null) {
            this.openSnackBar('Preview not supported.', '');
            return;
        }
        /** @type {?} */
        var reader = new FileReader();
        /** @type {?} */
        let imagePath = this.files[index];
        reader.readAsDataURL(this.files[index]);
        reader.onload = (/**
         * @param {?} _event
         * @return {?}
         */
        (_event) => {
            /** @type {?} */
            let imgURL = reader.result;
            /** @type {?} */
            const dialogRef = this.dialog.open(PreviewFilesComponent, {
                data: { imgURL: imgURL }
            });
        });
    }
}
FileUploadComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["Component"], args: [{
                selector: 'lib-file-upload',
                template: "<!-- File Upload -->\n<div class=\"uploadfilecontainer\" (click)=\"fileInput.click()\" libDragDrop (onFileDropped)=\"selectFiles($event)\">\n    <input hidden type=\"file\" #fileInput (change)=\"selectFiles($event.target.files)\" multiple>\n    <div class=\"uploadtextwrapper\">\n        <h2>Drag and Drop Files</h2>\n        <p>Supported Formats:\n            <ng-container *ngFor=\"let val of configData.format; let i = index\">\n                {{ val }}<ng-container *ngIf=\"i + 1 < configData.format.length\">,</ng-container>\n            </ng-container>\n        </p>\n        <p>MAX Size: {{ configData.size / 1024 | number: '.1-2' }} MB</p>\n    </div>\n</div>\n\n<div class=\"button-group\" *ngIf=\"files.length > 0\">\n    <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"uploadAll();\">Upload All</button>\n    <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"deleteAll();\">Delete All</button>\n</div>\n\n<div class=\"files-view\">\n    <!-- View Files -->\n    <mat-card class=\"example-card\" *ngFor=\"let file of files; let i = index;\">\n        <span class=\"viewUrlwrapper\">\n            <div *ngIf=\"file.viewUrl == null\" (click)=\"previewFiles(i);\" class=\"othersFilePreview\"> <h2 style=\"color:white; font-weight: bold;\">{{ file.viewText | uppercase }}</h2></div>\n            <img mat-card-image *ngIf=\"file.viewUrl != null\" [src]=\"file.viewUrl\" alt=\"{{ file.name }}\" (click)=\"previewFiles(i);\" />\n        </span>\n        <span class=\"viewUrlcontent\">\n            <mat-card-header>\n                <mat-card-title>{{ file.name }}</mat-card-title>\n                <mat-card-subtitle class=\"fileDescription\">Type: {{ file.type }}, Size:\n                    <ng-container *ngIf=\"file.size / 1000 > 999\">\n                        {{ file.size / 1000 / 1000 | number: '.1-2' }} MB\n                    </ng-container>\n                    <ng-container *ngIf=\"file.size / 1000 < 1000\">\n                        {{ file.size / 1000 | number: '.1-2' }} KB\n                    </ng-container>\n                </mat-card-subtitle>\n                <mat-card-subtitle class=\"error\" *ngIf=\"file.valid.status == false\">{{ file.valid.message }}\n                </mat-card-subtitle>\n            </mat-card-header>\n\n            <mat-card-content>\n                <mat-progress-bar mode=\"determinate\" *ngIf=\"file.upload.status == 'progress'\"\n                    value=\"{{ file.upload.data.percentage }}\"></mat-progress-bar>\n                <mat-progress-bar mode=\"indeterminate\" *ngIf=\"file.upload.status == 'waiting'\"></mat-progress-bar>\n            </mat-card-content>\n\n            <mat-card-actions>\n                <!-- <button mat-raised-button matTooltip=\"Preview\" *ngIf=\"file.valid.status == true\" aria-label=\"Preview\" (click)=\"previewFiles(i);\">Preview</button> -->\n\n                <button mat-raised-button color=\"primary\" type=\"button\"\n                    *ngIf=\"file.valid.status == true && file.upload.status != 'complete'\" matTooltip=\"Upload\"\n                    aria-label=\"Upload\" (click)=\"uploading(i);\">Upload</button>\n                <button mat-raised-button type=\"button\" disabled *ngIf=\"file.upload.status == 'complete'\">Upload Complete</button>\n\n                <button mat-raised-button type=\"button\" color=\"warn\" matTooltip=\"Remove\" aria-label=\"Remove\"\n                    (click)=\"removeFiles(i);\">Remove</button>\n            </mat-card-actions>\n        </span>\n    </mat-card>\n</div>",
                styles: [".uploadfilecontainer{background-repeat:no-repeat;background-size:100px;background-position:center;height:200px;width:80%;margin:20px auto;border:2px dashed #1c8adb;border-radius:10px;text-align:center;display:flex;justify-content:center;align-items:center}.uploadfilecontainer:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}.button-group{background-repeat:no-repeat;background-size:100px;background-position:center;height:40px;width:80%;margin:20px auto;border-radius:10px}.error.mat-card-subtitle{color:#a00;text-align:left}.example-card{margin:6px auto auto;max-width:100%}.example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.progress-bar{margin-top:24px}.file-div{background-color:#dedddc;margin-top:6px}.othersFilePreview{background-color:#8a2be2;height:100%;width:100%;text-align:center;justify-content:center;align-items:center;display:flex}.fileDescription{text-align:left}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{position:relative;z-index:9;flex:1 1 28.33%;margin:10px!important;display:flex;flex-wrap:wrap}.viewUrlwrapper{height:160px;width:100%;overflow:hidden;position:relative}.viewUrlwrapper img{max-width:100%;-o-object-fit:cover;object-fit:cover;margin:0 auto;z-index:99;position:relative;max-width:100%;width:initial;display:block;margin-top:-46px!important}.viewUrlcontent{display:block;justify-content:center;align-items:stretch;flex-wrap:wrap;flex:1 1 100%}.viewUrlcontent .mat-card-header{display:flex;flex-direction:row;flex:1 1 100%;justify-content:center;text-align:center;flex-wrap:wrap}.viewUrlcontent .mat-progress-bar{margin-bottom:5px}.viewUrlcontent .mat-card-header .mat-card-header-text{margin:10px;width:100%}.viewUrlcontent .mat-card-header .mat-card-header-text .mat-card-title{width:100%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:19px;max-height:40px;-webkit-line-clamp:2}.mat-typography .mat-card-image{width:inherit!important;margin:0!important}"]
            }] }
];
/** @nocollapse */
FileUploadComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: FileUploadService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"] }
];
FileUploadComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaterialModule {
}
MaterialModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["NgModule"], args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"],
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragDropDirective {
    constructor() {
        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_46__["EventEmitter"]();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Dragover listener
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    }
    //Dragleave listener
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Drop listener
    /**
     * @param {?} evt
     * @return {?}
     */
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        /** @type {?} */
        let files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    }
}
DragDropDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["Directive"], args: [{
                selector: '[libDragDrop]'
            },] }
];
DragDropDirective.propDecorators = {
    onFileDropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["Output"] }],
    background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["HostBinding"], args: ['style.background-color',] }],
    opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["HostBinding"], args: ['style.opacity',] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["HostListener"], args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["HostListener"], args: ['dragleave', ['$event'],] }],
    ondrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["HostListener"], args: ['drop', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertMessageComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AlertMessageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["Component"], args: [{
                selector: 'lib-alert-message',
                template: "<span class=\"example-pizza-party\">\n  An error occurred.\n</span>",
                styles: [".example-pizza-party{color:#ff69b4}"]
            }] }
];
/** @nocollapse */
AlertMessageComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUploadModule {
}
FileUploadModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_46__["NgModule"], args: [{
                declarations: [
                    FileUploadComponent,
                    DragDropDirective,
                    AlertMessageComponent,
                    DialogBoxComponent,
                    PreviewFilesComponent
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    MaterialModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClientModule"]
                ],
                providers: [],
                exports: [FileUploadComponent],
                entryComponents: [
                    AlertMessageComponent,
                    DialogBoxComponent,
                    PreviewFilesComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=file-upload.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  aboutus works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul> -->\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"scroll-to-top\" [ngClass]=\"{ 'show-scrollTop': windowScrolled }\">\r\n  <a (click)=\"scrollToTop()\">\r\n    <i class=\"fa fa-chevron-up\"></i>\r\n  </a>\r\n</span>\r\n\r\n<div class=\"container-fluid nmsfunneldoctor_block1\">\r\n  <div class=\"nmsfunneldoctor_block_wrapper\">\r\n    <h2> GLOBAL MEDICAL SALES MANAGEMENT GROUP LISTING AND SELLING MEDICAL SUPPLIES </h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid nmsfunneldoctor_block2\">\r\n  <div class=\"nmsfunneldoctor_block_wrapper\">\r\n    <div class=\"row nmsfunneldoctor_block2_innerwrapper\">\r\n      <div class=\"col-md-8 nmsfunneldoctor_block2_left\">\r\n        <div class=\"nmsfunneldoctor_block2_left_top\">\r\n          <div class=\"nmsfunneldoctor_block2_left_top_logo\">\r\n            <img src=\"./assets/images/landinglogonew.png\" alt=\"landinglogonew\" class=\"landinglogonew\" />\r\n          </div>\r\n          <div class=\"nmsfunneldoctor_block2_left_top_content\">\r\n            <h2>\r\n              WE ARE THE PARTNER YOU WANT FOR SOURCING AND SELLING YOUR MEDICAL EQUIPMENT\r\n\r\n\r\n            </h2>\r\n          </div>\r\n        </div>\r\n        <h3>\r\n          <span class=\"spnabigtxt\">attention!!</span> We are currently partnered with over 100 medical facilities.</h3>\r\n        <h4>\r\n          <span>DIRECT TO MANUFACTURER PURCHASES, HIGH QUALITY ON-DEMAND SUPPLIES. LIST\r\n            YOUR MEDICAL EQUIPMENT AND SELL IT THROUGH OUR GLOBAL PARTNER RELATIONSHIPS!\r\n          </span>\r\n        </h4>\r\n        <div class=\"nmsfunneldoctor_block2_left_content2\">\r\n          <h2>\r\n            <!-- The Advanced Wellness Solutions ANS device and smart engagement form technology will transform your practice. There are other <span>devices on the market</span>, but none off them give you the incredible amount of <span>analytical data or the billing profile</span> support we offer!  Produce incredible results for your patients and a super bill that is pre-populated with your exact billing requirements to get reimbursed! -->\r\n\r\n\r\n            MD Stock International has the sound experience you can expect operating successfully in the space since\r\n            1999. We have championed supply and demand in the provision of medical, surgical supplies, laboratory\r\n            chemicals, laboratory consumables, diagnostic equipment, dental consumables, microbiology, clinical\r\n            chemistry, instruments, pharmaceuticals, and industrial products.\r\n          </h2>\r\n        </div>\r\n        <img src=\"./assets/images/landingleftimg1man.png\" alt=\"landingleftimg1man\" class=\"landingleftimg1man\" />\r\n        <img src=\"./assets/images/landingleftimg2computer.png\" alt=\"landingleftimg2computer\"\r\n          class=\"landingleftimg2computer\" />\r\n\r\n        <div class=\"btnleftinfo\">\r\n          <h2>\r\n            <!-- <span>DRAMATICALLY</span> IMPROVE YOUR PATIENT OUTCOMES WHILE <span>INCREASING PRACTICE REVENUES</span> WITH OUR COMPLETE ANS SYSTEM. -->\r\n\r\n            WE HAVE <span> SET OUR REPUTATION </span>AS THE KEY SPECIALIST RESOURCE PARTNER TO <span>COMPANIES AND\r\n              TERRITORIES </span> GLOBALLY.\r\n\r\n          </h2>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"col-md-4 nmsfunneldoctor_block2_right\">\r\n        <div class=\"nmsfunneldoctor_formblock\" id=\"nmsfunneldoctor_formblock\">\r\n          <h2>Please send us an inquiry</h2>\r\n          <h3> We will get back to you right away!</h3>\r\n          <h1>\r\n            <!-- improve your patients’<br />\r\n            needs, satistfaction,<br />\r\n            & health quality <span>now!</span> -->\r\n            WE ARE YOUR SOURCING<br> AND LISTING EXPERTS.<br> <span>LET'S TALK!</span>\r\n          </h1>\r\n          <!-- <form>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"palceholder\">\r\n                                <label for=\"fname\">First name</label>\r\n                                <span class=\"star\">*</span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" id=\"fname\" required>\r\n                            <span class=\"bmd-help\">error msg.</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"palceholder\">\r\n                                <label for=\"lname\">Last name</label>\r\n                                <span class=\"star\">*</span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" id=\"lname\" required>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"palceholder\">\r\n                                <label for=\"email\">Email</label>\r\n                                <span class=\"star\">*</span>\r\n                            </div>\r\n                            <input type=\"email\" class=\"form-control\" id=\"email\" required>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"palceholder\">\r\n                                <label for=\"phone\">Telephone number</label>\r\n                                <span class=\"star\">*</span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" id=\"phone\" required>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"palceholder\">\r\n                                <label for=\"city\">City</label>\r\n                                <span class=\"star\">*</span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" id=\"city\" required>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"palceholder\">\r\n                                <label for=\"state\">State</label>\r\n                                <span class=\"star\">*</span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" id=\"state\" required>\r\n                        </div>\r\n                        <div class=\"btnsubmitwrapper\">\r\n                            <button type=\"submit\" class=\"btnsubmit\">Submit</button>\r\n                            <img src=\"./assets/images/submiticon.png\" class=\"submiticon\">\r\n                        </div>\r\n                    </form> -->\r\n\r\n          <form [formGroup]=\"signUpform\" (ngSubmit)=\"doSubmit(template)\" autocomplete=\"off\">\r\n            <div class=\"form-group\">\r\n\r\n              <!-- Hospital name -->\r\n              <input class=\"form-control\" placeholder=\"Hospital Name\" type=\"text\"\r\n                [formControl]=\"signUpform.controls['hospitalname']\" (blur)=\"inputUntouch(signUpform, 'hospitalname')\" />\r\n              <span *ngIf=\"\r\n                  signUpform.controls['hospitalname'].touched &&\r\n                  !signUpform.controls['hospitalname'].valid\r\n                \" class=\"errortext\">Hospital Name is required</span>\r\n            </div>\r\n\r\n            <!--Contact Person -->\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" placeholder=\"Contact Person\" type=\"text\"\r\n                [formControl]=\"signUpform.controls['contactperson']\"\r\n                (blur)=\"inputUntouch(signUpform, 'contactperson')\" />\r\n              <span *ngIf=\"\r\n                  signUpform.controls['contactperson'].touched &&\r\n                  !signUpform.controls['contactperson'].valid\r\n                \" class=\"errortext\">Contact Person is required</span>\r\n            </div>\r\n\r\n            <!-- Primary Email-->\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" placeholder=\"Primary Email\" type=\"email\"\r\n                [formControl]=\"signUpform.controls['email']\" (blur)=\"inputUntouch(signUpform, 'email')\" />\r\n              <span *ngIf=\"\r\n                  signUpform.controls['email'].touched &&\r\n                  !signUpform.controls['email'].valid\r\n                \" class=\"errortext\">Email Id is required</span>\r\n            </div>\r\n           \r\n            <!-- phone number multiple -->\r\n            <div class=\"form-group aditionalField\">\r\n                <input class=\"form-control\" [formControl]=\"signUpform.controls['contactphones']\" placeholder=\"Contact Phone no's \" (keyup)=\"collect_phones($event)\" autocomplete=\"false\">\r\n            <div *ngFor=\"let cpa of collect_phone_array;let i = index\">\r\n                {{ cpa }}\r\n                <i (click)=\"clearPhones(i)\">remove</i>\r\n            </div>\r\n            <span *ngIf=\"\r\n                  signUpform.controls['contactphones'].touched &&\r\n                  !signUpform.controls['contactphones'].valid\r\n                \" class=\"errortext\">Phone Number is required</span>\r\n          </div>\r\n            <!-- Password\r\n             -->\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" placeholder=\"Password\" type=\"password\"\r\n                [formControl]=\"signUpform.controls['password']\" (blur)=\"inputUntouch(signUpform, 'password')\" autocomplete=\"false\"/>\r\n              <span *ngIf=\"\r\n                  signUpform.controls['password'].touched &&\r\n                  !signUpform.controls['password'].valid\r\n                \" class=\"errortext\">Password is required</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" placeholder=\"Confirm Password\" type=\"password\"\r\n                [formControl]=\"signUpform.controls['confirmpassword']\"\r\n                (blur)=\"inputUntouch(signUpform, 'confirmpassword')\" />\r\n              <span *ngIf=\"signUpform.controls['confirmpassword'].touched && !signUpform.controls['confirmpassword'].valid\" class=\"errortext\">Confirm Password is required</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" placeholder=\"Address\" type=\"text\"\r\n                [formControl]=\"signUpform.controls['address']\" (blur)=\"inputUntouch(signUpform, 'address')\" />\r\n              <span *ngIf=\"\r\n                  signUpform.controls['address'].touched &&\r\n                  !signUpform.controls['address'].valid\r\n                \" class=\"errortext\">Address is required</span>\r\n            </div>\r\n\r\n             <div class=\"form-group\">\r\n              <select class=\"form-control\" placeholder=\"Select State\" type=\"text\"\r\n                [formControl]=\"signUpform.controls['state']\" (blur)=\"inputUntouch(signUpform, 'state')\">\r\n                <option value=\"\">Select State</option>\r\n                <option *ngFor=\"let item of stateslist\" value=\"{{ item.abbreviation }}\">{{ item.name }}</option>\r\n              </select>\r\n              <span *ngIf=\"\r\n                  signUpform.controls['state'].touched &&\r\n                  !signUpform.controls['state'].valid\r\n                \" class=\"errortext\">State is required</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <select class=\"form-control\" placeholder=\"Select City\" type=\"text\"\r\n                [formControl]=\"signUpform.controls['city']\" (blur)=\"inputUntouch(signUpform, 'city')\">\r\n                <option value=\"\">Select City</option>\r\n                <option *ngFor=\"let item of citylist\" value=\"{{ item.city }}\">{{ item.city }}</option>\r\n              </select>\r\n              <span *ngIf=\"\r\n                  signUpform.controls['city'].touched &&\r\n                  !signUpform.controls['city'].valid\r\n                \" class=\"errortext\">City is required</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" placeholder=\"Zip\" type=\"text\" [formControl]=\"signUpform.controls['zip']\"\r\n                  (blur)=\"inputUntouch(signUpform, 'zip')\" />\r\n                <span *ngIf=\"\r\n                    signUpform.controls['zip'].touched &&\r\n                    !signUpform.controls['zip'].valid\r\n                  \" class=\"errortext\">Zip is required</span>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                  <input class=\"form-control\" placeholder=\"Specialty\" type=\"text\"\r\n                    [formControl]=\"signUpform.controls['speciality']\" (blur)=\"inputUntouch(signUpform, 'speciality')\" />\r\n                  <span *ngIf=\"\r\n                      signUpform.controls['speciality'].touched &&\r\n                      !signUpform.controls['speciality'].valid\r\n                    \" class=\"errortext\">Specialty is required</span>\r\n                </div>\r\n\r\n            <!-- check box for status -->\r\n            <!-- <div class=\"form-group\">\r\n                <input type=\"checkbox\" [formControl]=\"signUpform.controls['status']\">Active\r\n            </div> -->\r\n\r\n             <!-- Medical Parner's Image  -->\r\n             <!-- <div class=\"form-group\">\r\n              <h1>Medical Parner's Image</h1>*Just add a single image\r\n             <lib-file-upload [config]=\"configData\"></lib-file-upload>\r\n             <span *ngIf=\"ErrCode==true\">Please add just one service image.</span>\r\n             </div> -->\r\n            \r\n            <div class=\"form-group\">\r\n              <div class=\"btnsubmitwrapper\">\r\n                <button type=\"submit\" class=\"btnsubmit\" data-toggle=\"modal\">\r\n                  Submit\r\n                </button>\r\n                <img src=\"./assets/images/submiticon.png\" class=\"submiticon\" />\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"inner_para\">\r\n  <p>The Mission of MD Stock International for our domestic and International partners is to become the key specialist\r\n    resource partner to companies and territories for the provision of medical and laboratory equipment, supplies,\r\n    pharmaceuticals, chemicals and consumables world wide.\r\n  </p>\r\n</div>\r\n<div class=\"container-fluid nmsfunneldoctor_block3\">\r\n  <div class=\"nmsfunneldoctor_block_wrapper\">\r\n    <div class=\"row nmsfunneldoctor_block3_innerwrapper\">\r\n      <div class=\"col-lg-5 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block3_left\">\r\n        <!-- <h2>Watch This Video!</h2>\r\n        <div class=\"videoWrapper\">\r\n            <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/YfzmwjKFzHA?rel=0&hd=1\" frameallow=\"autoplay; encrypted-media\" allowfullscreen></iframe> -->\r\n        <!---->\r\n        <!-- <img width=\"560\" height=\"315\" src=\"./assets/images/suvideowrapperdivnew.jpg\" > -->\r\n        <!-- <video width=\"400\" controls=\"\" controlslist=\"nodownload\" style=\"border: solid 5px #000;\">\r\n            <source src=\"http://crmfiles.influxhostserver.s3-website.us-east-2.amazonaws.com/How%20To%20Use%20The%20NMS-100_5-17-17.mp4\" type=\"video/mp4\" />\r\n          </video> -->\r\n\r\n        <img src=\"assets/images/hospital image.jpg\">\r\n\r\n\r\n        <!-- </div> -->\r\n      </div>\r\n      <div class=\"col-lg-7 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block3_right\">\r\n        <h2> MD STOCK INTERNATIONAL HAS SEVERAL KEY CLIENTS THAT WE SOURCE FROM AND WORK DIRECTLY WITH. WE BUILD STRONG\r\n          MUTUALLY BENEFICIAL RELATIONSHIPS AND WANT TO ADD YOU TO OUR LIST! </h2>\r\n        <ul>\r\n          <li>Missions Pharmaceuticals</li>\r\n          <li>CARIRI</li>\r\n          <li>University Of The West Indies</li>\r\n          <li>Antigua General Hospital</li>\r\n          <li>VH Marketing Limited </li>\r\n          <li>K.D. Enterprise</li>\r\n          <li>St Jude’s Hospital, St Lucia</li>\r\n          <li>International Pharmaceutical Agency, Guyana</li>\r\n          <li>Makro-Medic LLC</li>\r\n          <li>Bermuda Hospitals Board</li>\r\n          <li>Matrix Distributors</li>\r\n          <li>ITX Medical Supply</li>\r\n          <li>MJL Positive Meds (Aruba)</li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"container-fluid nmsfunneldoctor_block9 videos\">\r\n  <div class=\"nmsfunneldoctor_block_wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 videolist\">\r\n          <h2>Patient Encounter Compilation & Execution</h2>\r\n          <div class=\"videoWrapper\">\r\n              <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/xCbfRgR__ho?rel=0&hd=1\" frameallow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 videolist\">\r\n          <h2>Super Bill \"Smart\" Encounter Form Billing Profile</h2>\r\n          <div class=\"videoWrapper\">\r\n              <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/uLsQlL-0YLE?rel=0&hd=1\" frameallow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid nmsfunneldoctor_block8\">\r\n  <div class=\"nmsfunneldoctor_block_wrapper\">\r\n    <h2>Testing for 8 Essential Risk Factors</h2>\r\n    <ol>\r\n      <li class=\"libase li1\">\r\n        <div class=\"listwarppercls\">\r\n            <h4>Autonomic Nervous System Dysfunction</h4>\r\n            <span class=\"imgwrapperblock8\">\r\n              <img src=\"./assets/images/block8featureimg1.jpg\" class=\"imgblock8cls\">\r\n            </span>\r\n        </div>\r\n\r\n      </li>\r\n      <li class=\"libase li2\">\r\n          <div class=\"listwarppercls\">\r\n              <h4>Insulin Resistance</h4>\r\n              <span class=\"imgwrapperblock8\">\r\n                <img src=\"./assets/images/block8featureimg2.jpg\" class=\"imgblock8cls\">\r\n              </span>\r\n          </div>\r\n      </li>\r\n      <li class=\"libase li3\">\r\n          <div class=\"listwarppercls\">\r\n              <h4>Endothelial Dysfunction.</h4>\r\n              <span class=\"imgwrapperblock8\">\r\n                <img src=\"./assets/images/block8featureimg3.jpg\" class=\"imgblock8cls\">\r\n              </span>\r\n          </div>\r\n      </li>\r\n      <li class=\"libase li4\">\r\n          <div class=\"listwarppercls\">\r\n              <h4>Sudomotor Dysfunction</h4>\r\n              <span class=\"imgwrapperblock8\">\r\n                <img src=\"./assets/images/block8featureimg4.jpg\" class=\"imgblock8cls\">\r\n              </span>\r\n          </div>\r\n      </li>\r\n      <li class=\"libase li5\">\r\n          <div class=\"listwarppercls\">\r\n              <h4>Cardiac Autonomic Neuropathy</h4>\r\n              <span class=\"imgwrapperblock8\">\r\n                <img src=\"./assets/images/block8featureimg5.jpg\" class=\"imgblock8cls\">\r\n              </span>\r\n          </div>\r\n      </li>\r\n      <li class=\"libase li6\">\r\n          <div class=\"listwarppercls\">\r\n              <h4>Cardio- Metabolic Risk</h4>\r\n              <span class=\"imgwrapperblock8\">\r\n                <img src=\"./assets/images/block8featureimg6.jpg\" class=\"imgblock8cls\">\r\n              </span>\r\n          </div>\r\n      </li>\r\n      <li class=\"libase li7\">\r\n          <div class=\"listwarppercls\">\r\n              <h4>Small Fibre Neuropathy</h4>\r\n              <span class=\"imgwrapperblock8\">\r\n                <img src=\"./assets/images/block8featureimg7.jpg\" class=\"imgblock8cls\">\r\n              </span>\r\n        </div>\r\n      </li>\r\n      <li class=\"libase li8\">\r\n          <div class=\"listwarppercls\">\r\n              <h4>Cardio-vascular Disease </h4>\r\n              <span class=\"imgwrapperblock8\">\r\n                <img src=\"./assets/images/block8featureimg8.jpg\" class=\"imgblock8cls\">\r\n              </span>\r\n          </div>\r\n      </li>\r\n\r\n\r\n\r\n\r\n    </ol>\r\n\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"container-fluid nmsfunneldoctor_s_1\">\r\n  <div class=\"nms_s_containt_wrapper\">\r\n    <div class=\"custom_container\">\r\n      <div class=\"header_part\">\r\n        <h1> MD Stock International is the agent for and has partnerships With the following companies: </h1>\r\n      </div>\r\n\r\n\r\n      <div class=\"content_section\">\r\n\r\n        <!-- <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>1</h3>\r\n          </div>\r\n          <h1>United Hospital Supply Corporation</h1>\r\n          <p> Design & Fabrication of Pharmacy & Laboratory Furniture</p>\r\n        </div> -->\r\n        <div class=\"items\" *ngFor=\"let item of partnerList\">\r\n          <div class=\"icons\">\r\n            <h3>2</h3>\r\n          </div>\r\n          <h1>{{item.name}}</h1>\r\n          <!-- <p> Worldwide Producer of Laboratory, Biotechnology and Pharmaceuticals, Specialty Industrial and\r\n            Microelectronic Chemicals </p> -->\r\n          <p>{{item.details}}</p>\r\n          <button class=\"view_more\" (click)=\"showDetails(item, showtemplate)\">View More</button>\r\n        </div>\r\n        <!-- <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>3</h3>\r\n          </div>\r\n          <h1>Kimble / Kontes</h1>\r\n          <p> World Class Laboratory Glassware (Reusable, Disposable and Specialty Glassware)</p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>4</h3>\r\n          </div>\r\n          <h1>Advanced Instrumentations Inc</h1>\r\n          <p>First Class Medical Equipment </p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>5</h3>\r\n          </div>\r\n          <h1>Adam Equipment</h1>\r\n          <p> Suppliers of Balances, Scales and Weighing Equipment for Laboratory Medical and Industrial Use </p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>6</h3>\r\n          </div>\r\n          <h1>A J Cope & Sons Ltd</h1>\r\n          <p> Suppliers of Labware, Laboratory Products, Laboratory Consumables and Scientific Equipment </p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>7</h3>\r\n          </div>\r\n          <h1>Pride Corporation</h1>\r\n          <p> Over-the-counter Drugs and General Merchandize</p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>8</h3>\r\n          </div>\r\n          <h1>Genetics Pharmaceuticals</h1>\r\n          <p>Manufacturers of Pharmaceuticals </p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>9</h3>\r\n          </div>\r\n          <h1>Dynarex Corp</h1>\r\n          <p> Manufacturers and Distributors of Disposable Medical Supplies</p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>10</h3>\r\n          </div>\r\n          <h1>Macs Pharmaceuticals and Cosmetics</h1>\r\n          <p> Manufacturers of Pharmaceutical and Cosmetic Supplies </p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>12</h3>\r\n          </div>\r\n          <h1>Harvard Drug Group</h1>\r\n          <p> Manufacturers of Pharmaceuticals </p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>13</h3>\r\n          </div>\r\n          <h1>American Diagnostics Corporation</h1>\r\n          <p> Supplier of Stethoscopes and Blood Pressure Instruments </p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>14</h3>\r\n          </div>\r\n          <h1>Pharmasupply </h1>\r\n          <p> Manufacturers of Glucose Meters and Blood Pressures Instruments </p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>15</h3>\r\n          </div>\r\n          <h1>MD Science</h1>\r\n          <p> Manufacturers of Multivitamins </p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>16</h3>\r\n          </div>\r\n          <h1>Bio Nuclear Diagnostic</h1>\r\n          <p> Manufacturer and Distributor of Medical, Diagnostic and Laboratory Supplies </p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>17</h3>\r\n          </div>\r\n          <h1>Nalgene </h1>\r\n          <p> Manufacturer and Distributor of durable, break-resistant, light weight Labware (Beakers, Bottles, Glass\r\n            Carboys, filters …) </p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>18</h3>\r\n          </div>\r\n          <h1>Ansell </h1>\r\n          <p> Global Leader in Healthcare Barrier Protection Products (Condoms, Gloves, Aprons …) </p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>19</h3>\r\n          </div>\r\n          <h1>Hach </h1>\r\n          <p>Global Company in Water Quality Testing and Analysis, Offers Portable Laboratory and Online\r\n            Instrumentation. Manufacturer and Distributor of Reagents used to Test Water Quality and Other Aqueous\r\n            Solutions\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>20</h3>\r\n          </div>\r\n          <h1>Labconco </h1>\r\n          <p> Provides Laboratory Equipment including Chemical Fume Hoods, HEPA Filtered Safety Cabinets, Carbon\r\n            Filtered and Laboratory Animal Enclosures – Glassware Washers, Carts and Benches & Water Purification System\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>21</h3>\r\n          </div>\r\n          <h1>Lab Safety Supplies (LSS)</h1>\r\n          <p> Distributor of a Variety of Safety Products, Material Handling, Industrial and Laboratory Supplies </p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>22</h3>\r\n          </div>\r\n          <h1>Ben Meadows</h1>\r\n          <p> Distributor of Forestry Supplies, Surveying Equipment, GPS Navigation etc. </p>\r\n\r\n          <button class=\"view_more\">View More</button>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>23</h3>\r\n          </div>\r\n          <h1>ThermoFisher Scientific </h1>\r\n          <p> Fisher Scientific - Complete Portfolio of Laboratory Equipment, Chemicals, Supplies and Services for\r\n            Research, Safety, Healthcare and Science Education </p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>24</h3>\r\n          </div>\r\n          <h1>VWR International </h1>\r\n          <p> Manufacturer and Distributor of Laboratory Necessities, Chemicals, Furniture, Lifer Science, Bioscience,\r\n            Safety Chromatography, Controlled Environment & Clinical Healthcare</p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>25</h3>\r\n          </div>\r\n          <h1>Cole Parmer</h1>\r\n          <p> A Leading Global Source of Laboratory and Industrial Fluid Handling Products, Instrumentation, Equipment\r\n            and Supplies. Proven Experts in the Fields of Temperature Measurement and Control, Electrochemistry, and\r\n            Fluid Handling </p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>26</h3>\r\n          </div>\r\n          <h1>Phillips Avent</h1>\r\n          <p> Manufacturers of a Full Range of Baby Products </p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>27</h3>\r\n          </div>\r\n          <h1>Genthics Pharmaceuticals</h1>\r\n          <p> Manufactures Over-the-counter Drugs and Prescription drugs </p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>28</h3>\r\n          </div>\r\n          <h1>Nipro Diagnostic</h1>\r\n          <p> (Formerly Home Diagnostic Ltd)- Manufacturers of Glucometers and Diabetic Care Products </p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>29</h3>\r\n          </div>\r\n          <h1>Invacare- </h1>\r\n          <p> Manufacturers and Distributors of Medical Supplies, Instruments and Equipment</p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>30</h3>\r\n          </div>\r\n          <h1>Welch Allyn</h1>\r\n          <p>Manufacturers of Diagnostics, Equipments and Instruments </p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>31</h3>\r\n          </div>\r\n          <h1>Hi Media</h1>\r\n          <p>Manufacturers of Microbiology Laboratory Products </p>\r\n        </div>\r\n\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>32</h3>\r\n          </div>\r\n          <h1>Polyscience- </h1>\r\n          <p>Manufacturers of Chillers and Circulators</p>\r\n        </div>\r\n        <div class=\"items\">\r\n          <div class=\"icons\">\r\n            <h3>33</h3>\r\n          </div>\r\n          <h1>Harvard Drug Group</h1>\r\n          <p>Manufacturers and Distributors of a Comprehensive Range of Pharmaceuticals Including Over-the-counter\r\n            Drugs, Prescription Drugs, Dermatology and Ophthalmology</p>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"container-fluid nmsfunneldoctor_block4\">\r\n  <div class=\"nmsfunneldoctor_block_wrapper\">\r\n    <div class=\"nmsfunneldoctor_block4_content_wrapper\">\r\n      <div class=\"nmsfunneldoctor_block4_content\">\r\n        <div class=\"ImgWrapper\">\r\n          <img width=\"560\" height=\"315\" src=\"./assets/images/nmsfunneldoctorblock4img1.jpg\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"nmsfunneldoctor_block4_content\">\r\n        <div class=\"ImgWrapper\">\r\n          <img width=\"560\" height=\"315\" src=\"./assets/images/nmsfunneldoctorblock4img2.jpg\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"nmsfunneldoctor_block4_content\">\r\n        <div class=\"ImgWrapper\">\r\n          <img width=\"560\" height=\"315\" src=\"./assets/images/nmsfunneldoctorblock4img3.jpg\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"nmsfunneldoctor_block4_content\">\r\n        <div class=\"ImgWrapper\">\r\n          <img width=\"560\" height=\"315\" src=\"./assets/images/nmsfunneldoctorblock4img4.jpg\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"button\" class=\"btngetinfonow\">\r\n      <span>Get info now!</span>\r\n    </button>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- <div class=\"container-fluid nmsfunneldoctor_block5\">\r\n  <div class=\"nmsfunneldoctor_block_wrapper\">\r\n    <div class=\"row nmsfunneldoctor_block5_content_wrapper\">\r\n      <div class=\"col-lg-7 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block5_content_left\">\r\n        <div class=\"nmsfunneldoctor_block5_top\">\r\n          <div class=\"nmsfunneldoctor_block5_imgwrapper\">\r\n            <img src=\"./assets/images/nmsfunneldoctorblock5img2.png\" />\r\n          </div>\r\n          <div class=\"nmsfunneldoctor_block5_topright\">\r\n            <div class=\"nmsfunneldoctor_block5_topright_inner_2\">\r\n              <h2>dr tinsley, M.D., FACs</h2>\r\n            </div>\r\n            <h3>\r\n                <strong>Vascular Surgeon –</strong> <br><span>specializing in</span> Endovascular\r\n                <span>and</span> Open Vascular Surgery\r\n              </h3>\r\n          </div>\r\n        </div>\r\n        <p>\r\n          “I can tell you that every patient with a BMI over 25 would benefit\r\n          from evaluation with the\r\n          <span>NMS-100</span>. The early identification of abnormal biomarkers\r\n          for <span>CAD, PAD,</span> diabetes and hypertension should allow you\r\n          to measure, motivate and monitor your specific patient population,\r\n          leading to improved health in your community through the personalized\r\n          wellness programs.”\r\n        </p>\r\n      </div>\r\n      <div class=\"col-lg-5 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block5_content_right\">\r\n        <img src=\"./assets/images/nmsfunneldoctorblock5img1.png\" alt=\"nmsfunneldoctorblock5img1\"\r\n          class=\"nmsfunneldoctorblock5img1\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- <div class=\"container-fluid nmsfunneldoctor_block5\">\r\n  <div class=\"nmsfunneldoctor_block_wrapper\">\r\n    <div class=\"row nmsfunneldoctor_block5_content_wrapper\">\r\n      <div class=\"col-lg-7 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block5_content_left\">\r\n        <div class=\"nmsfunneldoctor_block5_topright_inner_2\">\r\n          <h2>Physician Taxonomies that will qualify for our system:</h2>\r\n        </div>\r\n        <ul>\r\n          <li>Family Medicine</li>\r\n          <li>General Practice</li>\r\n          <li>Primary Care</li>\r\n          <li>Cardiology</li>\r\n          <li>Internal Medicine</li>\r\n          <li>Endocrinology</li>\r\n          <li>D.O. (Doctor of Osteopathy)</li>\r\n          <li>Pain Management (Integrated Practice)</li>\r\n          <li>OB-GYN</li>\r\n          <li>Multi-Specialty Group</li>\r\n          <li>Orthopedic Surgeon (that provides long-term patient care)</li>\r\n          <li>Pain Management Group with MD of proper taxonomy</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-5 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block5_content_right\">\r\n        <img src=\"./assets/images/nmsfunneldoctorblock5img1.png\" alt=\"nmsfunneldoctorblock5img1\"\r\n          class=\"nmsfunneldoctorblock5img1\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<!-- We want to partner with you Section -->\r\n\r\n\r\n\r\n<div class=\"container-fluid partner_section\">\r\n  <div class=\"background_wrapper\">\r\n    <h2 class=\"section_header\"> We want to partner with you </h2>\r\n    <p>There is a lot of value to be experienced in a solid partnership, working directly with MD Stock International.\r\n      As an organization, we are able to take your medical equipment that you are replacing, and quickly list and sell\r\n      it for you. We have partnerships all over the country and around the world. We are also able to offer current\r\n      stock that we hold in our warehouse, and direct to manufacture pricing for any need you may have as a medical\r\n      facility.</p>\r\n\r\n\r\n\r\n    <div class=\"offer_section\">\r\n\r\n      <h3>\r\n        Medical Supplies<br>\r\n        Consultancy Service for Medical Institutions\r\n\r\n      </h3>\r\n\r\n\r\n      <div class=\"inside_section\">\r\n        <div class=\"items_section\">\r\n          <h4>We offer sales support in : </h4>\r\n\r\n          <ul>\r\n            <li>Lab Design and Furnishing</li>\r\n            <li>Laboratory Supplies, Chemicals and Equipment</li>\r\n            <li>Pharmaceutical Products</li>\r\n            <li>Clinical Lab Instruments </li>\r\n            <li>Diagnostic Kits and Controls</li>\r\n            <li>Personal Protection Equipment </li>\r\n            <li>Organic and Custom Synthesis Products</li>\r\n            <li>Cell Culture Supplies, Protein Assay Kits and Reagents</li>\r\n            <li>Field Service, Technical Services, Procurement Solutions </li>\r\n          </ul>\r\n\r\n        </div>\r\n        <div class=\"items_section\">\r\n          <h4>What we offer before, during and after the sale:</h4>\r\n\r\n          <ul>\r\n            <li>In-house services including warranty and field repair services, check up, and installation calibration.\r\n            </li>\r\n            <li>On-site services including warranty and field repair work, start up, and installation services and\r\n              preventative maintenance plans.\r\n            </li>\r\n            <li>Custom programs to meet your unique requirements.</li>\r\n            <li>Rental and lease programs.</li>\r\n            <li>For consumables and supplies that we have ex-stock, we deliver in twenty four (24) hours.</li>\r\n            <li>Consultancy programs for laboratory designs and equipment.</li>\r\n\r\n          </ul>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"container-fluid nmsfunneldoctor_block6\">\r\n  <div class=\"nmsfunneldoctor_block_wrapper\">\r\n    <div class=\"row nmsfunneldoctor_block6_content_wrapper\">\r\n      <div class=\"col-md-4 col-sm-12 col-xs-12 nmsfunneldoctor_block6_left\">\r\n        <img src=\"./assets/images/nmsfunneldoctorblock6img1.jpg\" alt=\"nmsfunneldoctorblock6img1\"\r\n          class=\"nmsfunneldoctorblock6img1\" />\r\n      </div>\r\n      <div class=\"col-md-8 col-sm-12 col-xs-12 nmsfunneldoctor_block6_right\">\r\n        <h2>\r\n          <span>Get in touch with us right away!\r\n          </span> We look forward to building a business relationship with your organization and contributing to your\r\n          personal and commercial success.\r\n\r\n        </h2>\r\n        <a mat-button class=\"btngetinfonow\" href=\"javascript:void(0)\" (click)=\"toTop()\"><span>Get info now!</span></a>\r\n        <!-- <button type=\"button\" class=\"btngetinfonow\" href=\"javascript:void(0)\" (click)=\"toTop()\">\r\n          <span></span>\r\n        </button> -->\r\n        <img src=\"./assets/images/nmsfunneldoctorblock6img2.png\" alt=\"nmsfunneldoctorblock6img2\"\r\n          class=\"nmsfunneldoctorblock6img2\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid nmsfunneldoctor_block7\">\r\n  <div class=\"nmsfunneldoctor_block_wrapper\">\r\n    <div class=\"row nmsfunneldoctor_block7_content_wrapper\">\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block7_copyright\">\r\n        <p>\r\n          <span><a href=\"javascript:void(0);\">Privacy Policy</a> |\r\n            <a href=\"javascript:void(0);\">Terms & Conditions</a></span>\r\n        </p>\r\n        <p>© Copyright 2018 MD Stock International - All Rights Reserved</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-body text-center\">\r\n    <button type=\"button\" class=\"close\" (click)=\"closep()\">&times;</button>\r\n    <img alt=\"#\" class=\"modallogo\" src=\"./assets/images/landinglogonew.png\" />\r\n    <p>\r\n      <!-- One of our consultants will get with you to schedule a 15 minute call right away! -->\r\n      Thank you for the inquiry We will get back to you soon!\r\n    </p>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #imagetemplate>\r\n  <div class=\"modal-body text-center\">\r\n    <button type=\"button\" class=\"close\" (click)=\"closep()\">&times;</button>\r\n\r\n    <img *ngIf=\"imgval!=null\" [src]=\"imgval\">\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #showtemplate>\r\n  <div class=\"modal-body text-center\">\r\n    <button type=\"button\" class=\"close\" (click)=\"closep()\">&times;</button>\r\n\r\n    <div class=\"inner_data\" *ngIf=\"data != ''\">\r\n      <h1>{{data.name}}</h1>\r\n      <p>{{data.details}}</p>\r\n    </div>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rep-signup/rep-signup.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rep-signup/rep-signup.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"scroll-to-top \" [ngClass]=\"{ 'show-scrollTop': windowScrolled }\">\r\n    <a (click)=\"scrollToTop()\">\r\n      <i class=\"fa fa-chevron-up\"></i>\r\n    </a>\r\n  </span>\r\n  \r\n  <div class=\"container-fluid nmsfunneldoctor_block1 \">\r\n    <div class=\"nmsfunneldoctor_block_wrapper\">\r\n      <h2> GLOBAL MEDICAL SALES MANAGEMENT GROUP LISTING AND SELLING MEDICAL SUPPLIES </h2>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container-fluid nmsfunneldoctor_block2 rep-signup\">\r\n    <div class=\"nmsfunneldoctor_block_wrapper\">\r\n      <div class=\"row nmsfunneldoctor_block2_innerwrapper\">\r\n        <div class=\"col-md-8 nmsfunneldoctor_block2_left\">\r\n          <div class=\"nmsfunneldoctor_block2_left_top\">\r\n            <div class=\"nmsfunneldoctor_block2_left_top_logo\">\r\n              <img src=\"./assets/images/landinglogonew.png\" alt=\"landinglogonew\" class=\"landinglogonew\" />\r\n            </div>\r\n            <div class=\"nmsfunneldoctor_block2_left_top_content\">\r\n              <h2>\r\n                WE OFFER INCREDIBLE EARNING OPPORTUNITIES FOR YOU BY WAY OF MASSIVE COMMISSIONS\r\n              </h2>\r\n            </div>\r\n          </div>\r\n          <h3>\r\n            <span class=\"spnabigtxt\">attention!!</span> We are currently accepting new SALES REPS to represent us.</h3>\r\n          <h4>\r\n            <span>SET UP DISCOVERIES WITH NEW MEDICAL FACILITIES FOR POTENTIAL PARTNERSHIPS, WHERE THEY CAN BUY AND SELL THEIR HOSPITAL EQUIPMENT, AND GET YOU INCREDIBLE COMMISSIONS ALONG THE WAY!\r\n            </span>\r\n          </h4>\r\n          <div class=\"nmsfunneldoctor_block2_left_content2\">\r\n            <h2>\r\n              <!-- The Advanced Wellness Solutions ANS device and smart engagement form technology will transform your practice. There are other <span>devices on the market</span>, but none off them give you the incredible amount of <span>analytical data or the billing profile</span> support we offer!  Produce incredible results for your patients and a super bill that is pre-populated with your exact billing requirements to get reimbursed! -->\r\n  \r\n  \r\n              MD Stock International has the sound experience you can expect operating successfully in the space since\r\n              1999. We have championed supply and demand in the provision of medical, surgical supplies, laboratory\r\n              chemicals, laboratory consumables, diagnostic equipment, dental consumables, microbiology, clinical\r\n              chemistry, instruments, pharmaceuticals, and industrial products.\r\n            </h2>\r\n          </div>\r\n          <img src=\"./assets/images/repLeftimg1man.png\" alt=\"landingleftimg1man\" class=\"landingleftimg1man\" />\r\n          <img src=\"./assets/images/landingleftimg2computer.png\" alt=\"landingleftimg2computer\"\r\n            class=\"landingleftimg2computer\" />\r\n  \r\n          <div class=\"btnleftinfo\">\r\n            <h2>\r\n              <!-- <span>DRAMATICALLY</span> IMPROVE YOUR PATIENT OUTCOMES WHILE <span>INCREASING PRACTICE REVENUES</span> WITH OUR COMPLETE ANS SYSTEM. -->\r\n  \r\n              THERE IS <span>TREMENDOUS VALUE IN REPRESENTING US </span> AS WE HAVE THE  REPUTATION OF BEING THE KEY SPECIALIST RESOURCE PARTNER TO <span>COMPANIES AND TERRITORIES</span> GLOBALLY.\r\n   \r\n            </h2>\r\n  \r\n          </div>\r\n  \r\n  \r\n        </div>\r\n  \r\n        <div class=\"col-md-4 nmsfunneldoctor_block2_right\">\r\n          <div class=\"nmsfunneldoctor_formblock\" id=\"nmsfunneldoctor_formblock\">\r\n            <h2>Speak with a Consultant NOW!</h2>\r\n            <h3>Set a <span>15</span>-minute quick discussion</h3>\r\n            <h1>\r\n              <!-- improve your patients’<br />\r\n              needs, satistfaction,<br />\r\n              & health quality <span>now!</span> -->\r\n              WE ARE YOUR SOURCING<br> AND LISTING EXPERTS.<br> <span>LET'S TALK!</span>\r\n            </h1>\r\n            <!-- <form>\r\n                          <div class=\"form-group\">\r\n                              <div class=\"palceholder\">\r\n                                  <label for=\"fname\">First name</label>\r\n                                  <span class=\"star\">*</span>\r\n                              </div>\r\n                              <input type=\"text\" class=\"form-control\" id=\"fname\" required>\r\n                              <span class=\"bmd-help\">error msg.</span>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <div class=\"palceholder\">\r\n                                  <label for=\"lname\">Last name</label>\r\n                                  <span class=\"star\">*</span>\r\n                              </div>\r\n                              <input type=\"text\" class=\"form-control\" id=\"lname\" required>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <div class=\"palceholder\">\r\n                                  <label for=\"email\">Email</label>\r\n                                  <span class=\"star\">*</span>\r\n                              </div>\r\n                              <input type=\"email\" class=\"form-control\" id=\"email\" required>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <div class=\"palceholder\">\r\n                                  <label for=\"phone\">Telephone number</label>\r\n                                  <span class=\"star\">*</span>\r\n                              </div>\r\n                              <input type=\"text\" class=\"form-control\" id=\"phone\" required>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <div class=\"palceholder\">\r\n                                  <label for=\"city\">City</label>\r\n                                  <span class=\"star\">*</span>\r\n                              </div>\r\n                              <input type=\"text\" class=\"form-control\" id=\"city\" required>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                              <div class=\"palceholder\">\r\n                                  <label for=\"state\">State</label>\r\n                                  <span class=\"star\">*</span>\r\n                              </div>\r\n                              <input type=\"text\" class=\"form-control\" id=\"state\" required>\r\n                          </div>\r\n                          <div class=\"btnsubmitwrapper\">\r\n                              <button type=\"submit\" class=\"btnsubmit\">Submit</button>\r\n                              <img src=\"./assets/images/submiticon.png\" class=\"submiticon\">\r\n                          </div>\r\n                      </form> -->\r\n  \r\n            <form [formGroup]=\"myform\" (ngSubmit)=\"doSubmit(template)\">\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" placeholder=\"First Name\" type=\"text\"\r\n                  [formControl]=\"myform.controls['firstname']\" (blur)=\"inputUntouch(myform, 'firstname')\" />\r\n                <span *ngIf=\"\r\n                    myform.controls['firstname'].touched &&\r\n                    !myform.controls['firstname'].valid\r\n                  \" class=\"errortext\">First Name is required</span>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" placeholder=\"Last Name\" type=\"text\"\r\n                  [formControl]=\"myform.controls['lastname']\" (blur)=\"inputUntouch(myform, 'lastname')\" />\r\n                <span *ngIf=\"\r\n                    myform.controls['lastname'].touched &&\r\n                    !myform.controls['lastname'].valid\r\n                  \" class=\"errortext\">Last Name is required</span>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" placeholder=\"Email\" type=\"email\" [formControl]=\"myform.controls['email']\"\r\n                  (blur)=\"inputUntouch(myform, 'email')\" />\r\n                <span *ngIf=\"\r\n                    myform.controls['email'].touched &&\r\n                    !myform.controls['email'].valid\r\n                  \" class=\"errortext\">Email Number is required</span>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" placeholder=\"Phone Number\" type=\"text\"\r\n                  [formControl]=\"myform.controls['phoneno']\" (blur)=\"inputUntouch(myform, 'phoneno')\" />\r\n                <span *ngIf=\"\r\n                    myform.controls['phoneno'].touched &&\r\n                    !myform.controls['phoneno'].valid\r\n                  \" class=\"errortext\">Phone Number is required</span>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" placeholder=\"Address\" type=\"text\" [formControl]=\"myform.controls['address']\"\r\n                  (blur)=\"inputUntouch(myform, 'address')\" />\r\n                <span *ngIf=\"\r\n                    myform.controls['address'].touched &&\r\n                    !myform.controls['address'].valid\r\n                  \" class=\"errortext\">Address is required</span>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <select class=\"form-control\" placeholder=\"Select State\" type=\"text\"\r\n                  [formControl]=\"myform.controls['state']\" (blur)=\"inputUntouch(myform, 'state')\">\r\n                  <option value=\"\">Select State</option>\r\n                  <option *ngFor=\"let item of stateslist\" value=\"{{ item.abbreviation }}\">{{ item.name }}</option>\r\n                </select>\r\n                <span *ngIf=\"\r\n                    myform.controls['state'].touched &&\r\n                    !myform.controls['state'].valid\r\n                  \" class=\"errortext\">State is required</span>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <div class=\"btnsubmitwrapper\">\r\n                  <button type=\"submit\" class=\"btnsubmit\" data-toggle=\"modal\">\r\n                    Submit\r\n                  </button>\r\n                  <img src=\"./assets/images/submiticon.png\" class=\"submiticon\" />\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"inner_para\">\r\n    <p>The Mission of MD Stock International for our domestic and International partners is to become the key specialist resource partner to companies and territories for the provision of medical and laboratory equipment, supplies, pharmaceuticals, chemicals and consumables world wide.\r\n    </p>\r\n  </div>\r\n  <div class=\"container-fluid nmsfunneldoctor_block3\">\r\n    <div class=\"nmsfunneldoctor_block_wrapper\">\r\n      <div class=\"row nmsfunneldoctor_block3_innerwrapper\">\r\n        <div class=\"col-lg-5 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block3_left\">\r\n          <!-- <h2>Watch This Video!</h2>\r\n          <div class=\"videoWrapper\">\r\n              <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/YfzmwjKFzHA?rel=0&hd=1\" frameallow=\"autoplay; encrypted-media\" allowfullscreen></iframe> -->\r\n          <!---->\r\n          <!-- <img width=\"560\" height=\"315\" src=\"./assets/images/suvideowrapperdivnew.jpg\" > -->\r\n          <!-- <video width=\"400\" controls=\"\" controlslist=\"nodownload\" style=\"border: solid 5px #000;\">\r\n              <source src=\"http://crmfiles.influxhostserver.s3-website.us-east-2.amazonaws.com/How%20To%20Use%20The%20NMS-100_5-17-17.mp4\" type=\"video/mp4\" />\r\n            </video> -->\r\n  \r\n          <img src=\"assets/images/hospital image.jpg\">\r\n  \r\n  \r\n          <!-- </div> -->\r\n        </div>\r\n        <div class=\"col-lg-7 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block3_right\">\r\n          <h2>MD STOCK INTERNATIONAL HAS SEVERAL KEY CLIENTS THAT WE SOURCE FROM AND WORK DIRECTLY WITH. WE BUILD STRONG MUTUALLY BENEFICIAL RELATIONSHIPS AND WANT YOU TO ADD TO OUR LIST!\r\n        </h2>\r\n          <ul>\r\n            <li>Missions Pharmaceuticals</li>\r\n            <li>CARIRI</li>\r\n            <li>University Of The West Indies</li>\r\n            <li>Antigua General Hospital</li>\r\n            <li>VH Marketing Limited </li>\r\n            <li>K.D. Enterprise</li>\r\n            <li>St Jude’s Hospital, St Lucia</li>\r\n            <li>International Pharmaceutical Agency, Guyana</li>\r\n            <li>Makro-Medic LLC</li>\r\n            <li>Bermuda Hospitals Board</li>\r\n            <li>Matrix Distributors</li>\r\n            <li>ITX Medical Supply</li>\r\n            <li>MJL Positive Meds (Aruba)</li>\r\n  \r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- <div class=\"container-fluid nmsfunneldoctor_block9 videos\">\r\n    <div class=\"nmsfunneldoctor_block_wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 videolist\">\r\n            <h2>Patient Encounter Compilation & Execution</h2>\r\n            <div class=\"videoWrapper\">\r\n                <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/xCbfRgR__ho?rel=0&hd=1\" frameallow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 videolist\">\r\n            <h2>Super Bill \"Smart\" Encounter Form Billing Profile</h2>\r\n            <div class=\"videoWrapper\">\r\n                <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/uLsQlL-0YLE?rel=0&hd=1\" frameallow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container-fluid nmsfunneldoctor_block8\">\r\n    <div class=\"nmsfunneldoctor_block_wrapper\">\r\n      <h2>Testing for 8 Essential Risk Factors</h2>\r\n      <ol>\r\n        <li class=\"libase li1\">\r\n          <div class=\"listwarppercls\">\r\n              <h4>Autonomic Nervous System Dysfunction</h4>\r\n              <span class=\"imgwrapperblock8\">\r\n                <img src=\"./assets/images/block8featureimg1.jpg\" class=\"imgblock8cls\">\r\n              </span>\r\n          </div>\r\n  \r\n        </li>\r\n        <li class=\"libase li2\">\r\n            <div class=\"listwarppercls\">\r\n                <h4>Insulin Resistance</h4>\r\n                <span class=\"imgwrapperblock8\">\r\n                  <img src=\"./assets/images/block8featureimg2.jpg\" class=\"imgblock8cls\">\r\n                </span>\r\n            </div>\r\n        </li>\r\n        <li class=\"libase li3\">\r\n            <div class=\"listwarppercls\">\r\n                <h4>Endothelial Dysfunction.</h4>\r\n                <span class=\"imgwrapperblock8\">\r\n                  <img src=\"./assets/images/block8featureimg3.jpg\" class=\"imgblock8cls\">\r\n                </span>\r\n            </div>\r\n        </li>\r\n        <li class=\"libase li4\">\r\n            <div class=\"listwarppercls\">\r\n                <h4>Sudomotor Dysfunction</h4>\r\n                <span class=\"imgwrapperblock8\">\r\n                  <img src=\"./assets/images/block8featureimg4.jpg\" class=\"imgblock8cls\">\r\n                </span>\r\n            </div>\r\n        </li>\r\n        <li class=\"libase li5\">\r\n            <div class=\"listwarppercls\">\r\n                <h4>Cardiac Autonomic Neuropathy</h4>\r\n                <span class=\"imgwrapperblock8\">\r\n                  <img src=\"./assets/images/block8featureimg5.jpg\" class=\"imgblock8cls\">\r\n                </span>\r\n            </div>\r\n        </li>\r\n        <li class=\"libase li6\">\r\n            <div class=\"listwarppercls\">\r\n                <h4>Cardio- Metabolic Risk</h4>\r\n                <span class=\"imgwrapperblock8\">\r\n                  <img src=\"./assets/images/block8featureimg6.jpg\" class=\"imgblock8cls\">\r\n                </span>\r\n            </div>\r\n        </li>\r\n        <li class=\"libase li7\">\r\n            <div class=\"listwarppercls\">\r\n                <h4>Small Fibre Neuropathy</h4>\r\n                <span class=\"imgwrapperblock8\">\r\n                  <img src=\"./assets/images/block8featureimg7.jpg\" class=\"imgblock8cls\">\r\n                </span>\r\n          </div>\r\n        </li>\r\n        <li class=\"libase li8\">\r\n            <div class=\"listwarppercls\">\r\n                <h4>Cardio-vascular Disease </h4>\r\n                <span class=\"imgwrapperblock8\">\r\n                  <img src=\"./assets/images/block8featureimg8.jpg\" class=\"imgblock8cls\">\r\n                </span>\r\n            </div>\r\n        </li>\r\n  \r\n  \r\n  \r\n  \r\n      </ol>\r\n  \r\n    </div>\r\n  </div> -->\r\n  \r\n  <div class=\"container-fluid nmsfunneldoctor_s_1\">\r\n    <div class=\"nms_s_containt_wrapper\">\r\n      <div class=\"custom_container\">\r\n        <div class=\"header_part\">\r\n          <h1> MD Stock International is the agent for and has partnerships With the following companies: </h1>\r\n        </div>\r\n  \r\n  \r\n        <div class=\"content_section\">\r\n  \r\n          <!-- <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>1</h3>\r\n            </div>\r\n            <h1>United Hospital Supply Corporation</h1>\r\n            <p> Design & Fabrication of Pharmacy & Laboratory Furniture</p>\r\n          </div> -->\r\n          <div class=\"items\" *ngFor=\"let item of partnerList\">\r\n            <div class=\"icons\">\r\n              <h3>2</h3>\r\n            </div>\r\n            <h1>{{item.name}}</h1>\r\n            <!-- <p> Worldwide Producer of Laboratory, Biotechnology and Pharmaceuticals, Specialty Industrial and\r\n              Microelectronic Chemicals </p> -->\r\n            <p>{{item.details}}</p>\r\n            <button class=\"view_more\"  (click)=\"showDetails(item, showtemplate)\">View More</button>\r\n          </div>\r\n          <!-- <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>3</h3>\r\n            </div>\r\n            <h1>Kimble / Kontes</h1>\r\n            <p> World Class Laboratory Glassware (Reusable, Disposable and Specialty Glassware)</p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>4</h3>\r\n            </div>\r\n            <h1>Advanced Instrumentations Inc</h1>\r\n            <p>First Class Medical Equipment </p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>5</h3>\r\n            </div>\r\n            <h1>Adam Equipment</h1>\r\n            <p> Suppliers of Balances, Scales and Weighing Equipment for Laboratory Medical and Industrial Use </p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>6</h3>\r\n            </div>\r\n            <h1>A J Cope & Sons Ltd</h1>\r\n            <p> Suppliers of Labware, Laboratory Products, Laboratory Consumables and Scientific Equipment </p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>7</h3>\r\n            </div>\r\n            <h1>Pride Corporation</h1>\r\n            <p> Over-the-counter Drugs and General Merchandize</p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>8</h3>\r\n            </div>\r\n            <h1>Genetics Pharmaceuticals</h1>\r\n            <p>Manufacturers of Pharmaceuticals </p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>9</h3>\r\n            </div>\r\n            <h1>Dynarex Corp</h1>\r\n            <p> Manufacturers and Distributors of Disposable Medical Supplies</p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>10</h3>\r\n            </div>\r\n            <h1>Macs Pharmaceuticals and Cosmetics</h1>\r\n            <p> Manufacturers of Pharmaceutical and Cosmetic Supplies </p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>12</h3>\r\n            </div>\r\n            <h1>Harvard Drug Group</h1>\r\n            <p> Manufacturers of Pharmaceuticals </p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>13</h3>\r\n            </div>\r\n            <h1>American Diagnostics Corporation</h1>\r\n            <p> Supplier of Stethoscopes and Blood Pressure Instruments </p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>14</h3>\r\n            </div>\r\n            <h1>Pharmasupply </h1>\r\n            <p> Manufacturers of Glucose Meters and Blood Pressures Instruments </p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>15</h3>\r\n            </div>\r\n            <h1>MD Science</h1>\r\n            <p> Manufacturers of Multivitamins </p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>16</h3>\r\n            </div>\r\n            <h1>Bio Nuclear Diagnostic</h1>\r\n            <p> Manufacturer and Distributor of Medical, Diagnostic and Laboratory Supplies </p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>17</h3>\r\n            </div>\r\n            <h1>Nalgene </h1>\r\n            <p> Manufacturer and Distributor of durable, break-resistant, light weight Labware (Beakers, Bottles, Glass\r\n              Carboys, filters …) </p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>18</h3>\r\n            </div>\r\n            <h1>Ansell </h1>\r\n            <p> Global Leader in Healthcare Barrier Protection Products (Condoms, Gloves, Aprons …) </p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>19</h3>\r\n            </div>\r\n            <h1>Hach </h1>\r\n            <p>Global Company in Water Quality Testing and Analysis, Offers Portable Laboratory and Online\r\n              Instrumentation. Manufacturer and Distributor of Reagents used to Test Water Quality and Other Aqueous\r\n              Solutions\r\n            </p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>20</h3>\r\n            </div>\r\n            <h1>Labconco </h1>\r\n            <p> Provides Laboratory Equipment including Chemical Fume Hoods, HEPA Filtered Safety Cabinets, Carbon\r\n              Filtered and Laboratory Animal Enclosures – Glassware Washers, Carts and Benches & Water Purification System\r\n            </p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>21</h3>\r\n            </div>\r\n            <h1>Lab Safety Supplies (LSS)</h1>\r\n            <p> Distributor of a Variety of Safety Products, Material Handling, Industrial and Laboratory Supplies </p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>22</h3>\r\n            </div>\r\n            <h1>Ben Meadows</h1>\r\n            <p> Distributor of Forestry Supplies, Surveying Equipment, GPS Navigation etc. </p>\r\n  \r\n            <button class=\"view_more\">View More</button>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>23</h3>\r\n            </div>\r\n            <h1>ThermoFisher Scientific </h1>\r\n            <p> Fisher Scientific - Complete Portfolio of Laboratory Equipment, Chemicals, Supplies and Services for\r\n              Research, Safety, Healthcare and Science Education </p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>24</h3>\r\n            </div>\r\n            <h1>VWR International </h1>\r\n            <p> Manufacturer and Distributor of Laboratory Necessities, Chemicals, Furniture, Lifer Science, Bioscience,\r\n              Safety Chromatography, Controlled Environment & Clinical Healthcare</p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>25</h3>\r\n            </div>\r\n            <h1>Cole Parmer</h1>\r\n            <p> A Leading Global Source of Laboratory and Industrial Fluid Handling Products, Instrumentation, Equipment\r\n              and Supplies. Proven Experts in the Fields of Temperature Measurement and Control, Electrochemistry, and\r\n              Fluid Handling </p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>26</h3>\r\n            </div>\r\n            <h1>Phillips Avent</h1>\r\n            <p> Manufacturers of a Full Range of Baby Products </p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>27</h3>\r\n            </div>\r\n            <h1>Genthics Pharmaceuticals</h1>\r\n            <p> Manufactures Over-the-counter Drugs and Prescription drugs </p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>28</h3>\r\n            </div>\r\n            <h1>Nipro Diagnostic</h1>\r\n            <p> (Formerly Home Diagnostic Ltd)- Manufacturers of Glucometers and Diabetic Care Products </p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>29</h3>\r\n            </div>\r\n            <h1>Invacare- </h1>\r\n            <p> Manufacturers and Distributors of Medical Supplies, Instruments and Equipment</p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>30</h3>\r\n            </div>\r\n            <h1>Welch Allyn</h1>\r\n            <p>Manufacturers of Diagnostics, Equipments and Instruments </p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>31</h3>\r\n            </div>\r\n            <h1>Hi Media</h1>\r\n            <p>Manufacturers of Microbiology Laboratory Products </p>\r\n          </div>\r\n  \r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>32</h3>\r\n            </div>\r\n            <h1>Polyscience- </h1>\r\n            <p>Manufacturers of Chillers and Circulators</p>\r\n          </div>\r\n          <div class=\"items\">\r\n            <div class=\"icons\">\r\n              <h3>33</h3>\r\n            </div>\r\n            <h1>Harvard Drug Group</h1>\r\n            <p>Manufacturers and Distributors of a Comprehensive Range of Pharmaceuticals Including Over-the-counter\r\n              Drugs, Prescription Drugs, Dermatology and Ophthalmology</p>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  <!-- <div class=\"container-fluid nmsfunneldoctor_block4\">\r\n    <div class=\"nmsfunneldoctor_block_wrapper\">\r\n      <div class=\"nmsfunneldoctor_block4_content_wrapper\">\r\n        <div class=\"nmsfunneldoctor_block4_content\">\r\n          <div class=\"ImgWrapper\">\r\n            <img width=\"560\" height=\"315\" src=\"./assets/images/nmsfunneldoctorblock4img1.jpg\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"nmsfunneldoctor_block4_content\">\r\n          <div class=\"ImgWrapper\">\r\n            <img width=\"560\" height=\"315\" src=\"./assets/images/nmsfunneldoctorblock4img2.jpg\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"nmsfunneldoctor_block4_content\">\r\n          <div class=\"ImgWrapper\">\r\n            <img width=\"560\" height=\"315\" src=\"./assets/images/nmsfunneldoctorblock4img3.jpg\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"nmsfunneldoctor_block4_content\">\r\n          <div class=\"ImgWrapper\">\r\n            <img width=\"560\" height=\"315\" src=\"./assets/images/nmsfunneldoctorblock4img4.jpg\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button type=\"button\" class=\"btngetinfonow\">\r\n        <span>Get info now!</span>\r\n      </button>\r\n    </div>\r\n  </div> -->\r\n  \r\n  <!-- <div class=\"container-fluid nmsfunneldoctor_block5\">\r\n    <div class=\"nmsfunneldoctor_block_wrapper\">\r\n      <div class=\"row nmsfunneldoctor_block5_content_wrapper\">\r\n        <div class=\"col-lg-7 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block5_content_left\">\r\n          <div class=\"nmsfunneldoctor_block5_top\">\r\n            <div class=\"nmsfunneldoctor_block5_imgwrapper\">\r\n              <img src=\"./assets/images/nmsfunneldoctorblock5img2.png\" />\r\n            </div>\r\n            <div class=\"nmsfunneldoctor_block5_topright\">\r\n              <div class=\"nmsfunneldoctor_block5_topright_inner_2\">\r\n                <h2>dr tinsley, M.D., FACs</h2>\r\n              </div>\r\n              <h3>\r\n                  <strong>Vascular Surgeon –</strong> <br><span>specializing in</span> Endovascular\r\n                  <span>and</span> Open Vascular Surgery\r\n                </h3>\r\n            </div>\r\n          </div>\r\n          <p>\r\n            “I can tell you that every patient with a BMI over 25 would benefit\r\n            from evaluation with the\r\n            <span>NMS-100</span>. The early identification of abnormal biomarkers\r\n            for <span>CAD, PAD,</span> diabetes and hypertension should allow you\r\n            to measure, motivate and monitor your specific patient population,\r\n            leading to improved health in your community through the personalized\r\n            wellness programs.”\r\n          </p>\r\n        </div>\r\n        <div class=\"col-lg-5 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block5_content_right\">\r\n          <img src=\"./assets/images/nmsfunneldoctorblock5img1.png\" alt=\"nmsfunneldoctorblock5img1\"\r\n            class=\"nmsfunneldoctorblock5img1\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  \r\n  <!-- <div class=\"container-fluid nmsfunneldoctor_block5\">\r\n    <div class=\"nmsfunneldoctor_block_wrapper\">\r\n      <div class=\"row nmsfunneldoctor_block5_content_wrapper\">\r\n        <div class=\"col-lg-7 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block5_content_left\">\r\n          <div class=\"nmsfunneldoctor_block5_topright_inner_2\">\r\n            <h2>Physician Taxonomies that will qualify for our system:</h2>\r\n          </div>\r\n          <ul>\r\n            <li>Family Medicine</li>\r\n            <li>General Practice</li>\r\n            <li>Primary Care</li>\r\n            <li>Cardiology</li>\r\n            <li>Internal Medicine</li>\r\n            <li>Endocrinology</li>\r\n            <li>D.O. (Doctor of Osteopathy)</li>\r\n            <li>Pain Management (Integrated Practice)</li>\r\n            <li>OB-GYN</li>\r\n            <li>Multi-Specialty Group</li>\r\n            <li>Orthopedic Surgeon (that provides long-term patient care)</li>\r\n            <li>Pain Management Group with MD of proper taxonomy</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-lg-5 col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block5_content_right\">\r\n          <img src=\"./assets/images/nmsfunneldoctorblock5img1.png\" alt=\"nmsfunneldoctorblock5img1\"\r\n            class=\"nmsfunneldoctorblock5img1\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  \r\n  \r\n  <!-- We want to partner with you Section -->\r\n  \r\n  \r\n  \r\n  <div class=\"container-fluid partner_section\">\r\n    <div class=\"background_wrapper\">\r\n      <h2 class=\"section_header\"> WE WANT YOU TO REPRESENT US </h2>\r\n      <p>There is a lot to gain from becoming a Sales Representative with MD Stock International. You would be representing an organization with years of experience and a solid reputation of being the top Specialist Resource Partner to some of the major Medical facilities within the USA as well as across the globe. At the same time, you also get to make some major earnings by way of massive commissions and provide a great boost to your career as a successful Sales Rep.\r\n    </p>\r\n  \r\n  \r\n  \r\n      <div class=\"offer_section\">\r\n  \r\n        <h3>\r\n          Medical Supplies<br>\r\n          SALES & CONSULTANCY SERVICE FOR MEDICAL INSTITUTIONS  \r\n        </h3>\r\n  \r\n  \r\n        <div class=\"inside_section\">\r\n          <div class=\"items_section\">\r\n            <h4>Services you will be offering to Potential Partners and Medical Facilities:</h4>\r\n  \r\n            <ul>\r\n              <li>Lab Design and Furnishing</li>\r\n              <li>Laboratory Supplies, Chemicals and Equipment</li>\r\n              <li>Pharmaceutical Products</li>\r\n              <li>Clinical Lab Instruments </li>\r\n              <li>Diagnostic and Surgical Instruments and Equipment</li>\r\n              <li>Diagnostic Kits and Controls</li>\r\n              <li>Personal Protection Equipment </li>\r\n              <li>Organic and Custom Synthesis Products</li>\r\n              <li>Cell Culture Supplies, Protein Assay Kits and Reagents</li>\r\n              <!-- <li>Disposable Hospital Supplies</li> -->\r\n              <li>Field Service, Technical Services, Procurement Solutions </li>\r\n            </ul>\r\n  \r\n          </div>\r\n          <div class=\"items_section\">\r\n            <h4>What you stand to gain by representing us as a Sales Rep:</h4>\r\n  \r\n            <ul>\r\n              \r\n              <li>Massive Commissions on every transaction</li>\r\n              <li>Residual income opportunities for the life of the Medical Partnerships</li>\r\n              <li>Increased revenue and professional growth</li>\r\n              <li>Opportunity to represent an organization that has a reputation of being the premier medical resource partner to hundreds of medical facilities in major cities in the United States and abroad</li>\r\n              <li>Represent a technology and service model that enjoys tremendous value and popularity in the Healthcare industry</li>\r\n              <li>Work with a back-office known for its ability to close deals swiftly and efficiently, offering top-notch support to Sales Reps</li>\r\n  \r\n            </ul>\r\n  \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  <div class=\"container-fluid nmsfunneldoctor_block6\">\r\n    <div class=\"nmsfunneldoctor_block_wrapper\">\r\n      <div class=\"row nmsfunneldoctor_block6_content_wrapper\">\r\n        <div class=\"col-md-4 col-sm-12 col-xs-12 nmsfunneldoctor_block6_left\">\r\n          <img src=\"./assets/images/nmsfunneldoctorblock6img1.jpg\" alt=\"nmsfunneldoctorblock6img1\"\r\n            class=\"nmsfunneldoctorblock6img1\" />\r\n        </div>\r\n        <div class=\"col-md-8 col-sm-12 col-xs-12 nmsfunneldoctor_block6_right\">\r\n          <h2>\r\n            <span>Get in touch with us right away!\r\n            </span> We look forward to building a business relationship with your organization and contributing to your\r\n            personal and commercial success.\r\n  \r\n          </h2>\r\n          <a mat-button class=\"btngetinfonow\" href=\"javascript:void(0)\" (click)=\"toTop()\"><span>Get info now!</span></a>\r\n          <!-- <button type=\"button\" class=\"btngetinfonow\" href=\"javascript:void(0)\" (click)=\"toTop()\">\r\n            <span></span>\r\n          </button> -->\r\n          <img src=\"./assets/images/nmsfunneldoctorblock6img2.png\" alt=\"nmsfunneldoctorblock6img2\"\r\n            class=\"nmsfunneldoctorblock6img2\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container-fluid nmsfunneldoctor_block7\">\r\n    <div class=\"nmsfunneldoctor_block_wrapper\">\r\n      <div class=\"row nmsfunneldoctor_block7_content_wrapper\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 nmsfunneldoctor_block7_copyright\">\r\n          <p>\r\n            <span><a href=\"javascript:void(0);\">Privacy Policy</a> |\r\n              <a href=\"javascript:void(0);\">Terms & Conditions</a></span>\r\n          </p>\r\n          <p>© Copyright 2018  MD Stock International - All Rights Reserved</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  <ng-template #template>\r\n    <div class=\"modal-body text-center\">\r\n      <button type=\"button\" class=\"close\" (click)=\"closep()\">&times;</button>\r\n      <img alt=\"#\" class=\"modallogo\" src=\"./assets/images/landinglogonew.png\" />\r\n      <p>\r\n        One of our consultants will get with you to schedule a 15 minute call right away!\r\n      </p>\r\n    </div>\r\n  </ng-template>\r\n  \r\n  <ng-template #imagetemplate>\r\n    <div class=\"modal-body text-center\">\r\n      <button type=\"button\" class=\"close\" (click)=\"closep()\">&times;</button>\r\n  \r\n      <!-- <img *ngIf=\"imgval!=null\" [src]=\"imgval\"> -->\r\n    </div>\r\n  </ng-template>\r\n  \r\n  <ng-template #showtemplate>\r\n      <div class=\"modal-body text-center\">\r\n        <button type=\"button\" class=\"close\" (click)=\"closep()\">&times;</button>\r\n  \r\n        <div class=\"inner_data\" *ngIf=\"data != ''\">\r\n          <h1>{{data.name}}</h1>\r\n        <p >{{data.details}}</p>\r\n      </div>\r\n      </div>\r\n    </ng-template>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  contactus works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "./node_modules/@ngx-meta/core/fesm2015/ngx-meta-core.js");



let AboutusComponent = class AboutusComponent {
    constructor(meta) {
        this.meta = meta;
        this.meta.setTitle('About us dynamic');
        this.meta.setTag('og:description', 'This is dynamic decription ');
        this.meta.setTag('og:title', 'This is dynamic title with meta og ');
        this.meta.setTag('og:type', 'website');
        this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');
    }
    ngOnInit() {
    }
};
AboutusComponent.ctorParameters = () => [
    { type: _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaService"] }
];
AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aboutus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aboutus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")).default]
    })
], AboutusComponent);



/***/ }),

/***/ "./src/app/api-service.ts":
/*!********************************!*\
  !*** ./src/app/api-service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");






// import {UploaderComponent} from "./uploader/uploader.component";
let ApiService = class ApiService {
    constructor(_http, _authHttp, cookieService
    // public jwtHelper: JwtHelperService,
    // private loggedinService: LoggedinService
    ) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.loginurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['loginurl'];
        this.api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["api_url"];
        this.jwttoken = this.cookieService.get('jwttoken');
    }
    isTokenExpired() {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    }
    getclientip() {
        console.log('endpoint');
        // this.isTokenExpired()
        var result = this._http.get("https://ipinfo.io/?format=json&token=9797c42b93078a").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
        return result;
    }
    getDatawithouttoken(endpoint) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        /* console.log('httpOptions');
         console.log(httpOptions);*/
        // this.isTokenExpired()
        var result = this._http.get(this.api_url + endpoint, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
        return result;
    }
    getJsonObject(path) {
        var result = this._http.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
        return result;
    }
    getEndpoint(endpoint) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.jwttoken
            })
        };
        let condition = endpoint.condition;
        console.log('condition');
        console.log(condition);
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log(this.cookieService.get('jwttoken'));
        // this.isTokenExpired()
        var result = this._http.post(this.api_url + endpoint.source, condition, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
        console.log(result);
        return result;
    }
    getData(endpoint) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookieService.get('jwttoken')
            })
        };
        console.log(this.cookieService.get('id'));
        console.log(this.cookieService.get('id'));
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log(this.cookieService.get('jwttoken'));
        console.log('httpOptions');
        console.log(httpOptions);
        // this.isTokenExpired()
        var result = this._http.post(this.api_url + 'datalist', endpoint, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
        return result;
    }
    // getData end
    postData(endpoint, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                // 'access-token': this.cookieService.get('jwttoken'),
                'Authorization': this.cookieService.get('jwttoken')
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
        return result;
    }
    postDatawithoutToken(endpoint, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        // console.log(this.cookieService.get('jwttoken'));
        // console.log('endpoint');
        // console.log(endpoint);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
        return result;
    }
    postlogin(endpoint, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
        return result;
    } // postData end
    getState() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        var result = this._http.get('assets/data/state.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
        return result;
    }
    getEndpointUrl(endpoint) {
        return this.api_url + endpoint;
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApiService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_rep_signup_rep_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rep-signup/rep-signup.component */ "./src/app/components/rep-signup/rep-signup.component.ts");





const appRoutes = [
    {
        path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: {
            meta: {
                title: 'Home',
                description: 'MD Stock International'
            }
        }
    },
    {
        path: ':repid', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: {
            meta: {
                title: 'Home',
                description: 'MD Stock International'
            }
        }
    },
    {
        path: 'rep-signup', component: _components_rep_signup_rep_signup_component__WEBPACK_IMPORTED_MODULE_4__["RepSignupComponent"],
        data: {
            meta: {
                title: 'Home',
                description: 'MD Stock International'
            }
        }
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angularssr';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-meta/core */ "./node_modules/@ngx-meta/core/fesm2015/ngx-meta-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _components_rep_signup_rep_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/rep-signup/rep-signup.component */ "./src/app/components/rep-signup/rep-signup.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api-service */ "./src/app/api-service.ts");
/* harmony import */ var file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! file-upload */ "./dist/file-upload/fesm2015/file-upload.js");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"],
            _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__["AboutusComponent"],
            _components_rep_signup_rep_signup_component__WEBPACK_IMPORTED_MODULE_14__["RepSignupComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_6__["MetaModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"]
            // CookieService
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"], _api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "./node_modules/@ngx-meta/core/fesm2015/ngx-meta-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api-service */ "./src/app/api-service.ts");









let HomeComponent = class HomeComponent {
    // public api_url: any = 'https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/';
    constructor(apiService, router, activatedroute, meta, formBuilder, http, modalService, cookieservice) {
        this.apiService = apiService;
        this.router = router;
        this.activatedroute = activatedroute;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.http = http;
        this.modalService = modalService;
        this.cookieservice = cookieservice;
        this.successmodal = false;
        this.imagemodal = 1;
        this.collect_phone_array = [];
        this.collect_email_array = [];
        this.api_url = this.apiService.api_url;
        // agent array list
        this.partnerList = [
            { "id": 0, "name": "United Hospital Supply Corporation ", "details": "Design & Fabrication of Pharmacy & Laboratory Furniture" },
            { "id": 1, "name": "J.T. Baker ", "details": "Worldwide Producer of Laboratory, Biotechnology and Pharmaceuticals, Specialty Industrial and Microelectronic Chemicals" },
            { "id": 2, "name": "Kimble / Kontes ", "details": "World Class Laboratory Glassware (Reusable, Disposable and Specialty Glassware)" },
            { "id": 3, "name": "Advanced Instrumentations Inc ", "details": " First Class Medical Equipment" },
            { "id": 4, "name": "Adam Equipment", "details": " Suppliers of Balances, Scales and Weighing Equipment for Laboratory Medical and Industrial Use" },
            { "id": 5, "name": "A J Cope & Sons Ltd", "details": " Suppliers of Labware, Laboratory Products, Laboratory Consumables and Scientific Equipment" },
            { "id": 6, "name": "Pride Corporation", "details": " Over-the-counter Drugs and General Merchandize" },
            { "id": 7, "name": "Genetics Pharmaceuticals", "details": " Manufacturers of Pharmaceuticals" },
            { "id": 8, "name": "Dynarex Corp", "details": " Manufacturers and Distributors of Disposable Medical Supplies" },
            { "id": 9, "name": "Macs Pharmaceuticals and Cosmetics", "details": "  Manufacturers of Pharmaceutical and Cosmetic Supplies" },
            { "id": 10, "name": "Harvard Drug Group ", "details": "  Manufacturers of Pharmaceuticals " },
            { "id": 11, "name": "American Diagnostics Corporation", "details": "  Supplier of Stethoscopes and Blood Pressure Instruments " },
            { "id": 12, "name": "Pharmasupply ", "details": "Manufacturers of Glucose Meters and Blood Pressures Instruments" },
            { "id": 13, "name": "MD Science", "details": "Manufacturers of Multivitamins" },
            { "id": 14, "name": "Bio Nuclear Diagnostic", "details": "Manufacturer and Distributor of Medical, Diagnostic and Laboratory Supplies" },
            { "id": 15, "name": "Nalgene ", "details": "Manufacturer and Distributor of durable, break-resistant, light weight Labware (Beakers, Bottles, Glass Carboys, filters …)" },
            { "id": 16, "name": "Ansell  ", "details": "Global Leader in Healthcare Barrier Protection Products (Condoms, Gloves, Aprons …)" },
            { "id": 17, "name": "Hach", "details": " Global Company in Water Quality Testing and Analysis, Offers Portable Laboratory and Online Instrumentation.  Manufacturer and Distributor of Reagents used to Test Water Quality and Other Aqueous Solutions " },
            { "id": 18, "name": "Labconco ", "details": "Provides Laboratory Equipment including Chemical Fume Hoods, HEPA Filtered Safety Cabinets, Carbon Filtered and Laboratory Animal Enclosures – Glassware Washers, Carts and Benches & Water Purification System " },
            { "id": 19, "name": "Lab Safety Supplies (LSS) ", "details": " Distributor of a Variety of Safety Products, Material Handling, Industrial and Laboratory Supplies" },
            { "id": 20, "name": "Ben Meadows", "details": " Distributor of Forestry Supplies, Surveying Equipment, GPS Navigation etc. " },
            { "id": 21, "name": "ThermoFisher Scientific", "details": "  Fisher Scientific - Complete Portfolio of Laboratory Equipment, Chemicals, Supplies and Services for Research, Safety, Healthcare and Science Education" },
            { "id": 22, "name": "VWR International", "details": "Manufacturer and Distributor of Laboratory Necessities, Chemicals, Furniture, Lifer Science, Bioscience, Safety Chromatography, Controlled Environment & Clinical Healthcare" },
            { "id": 23, "name": "Cole Parmer", "details": "A Leading Global Source of Laboratory and Industrial Fluid Handling Products, Instrumentation, Equipment and Supplies. Proven Experts in the Fields of Temperature Measurement and Control, Electrochemistry, and Fluid Handling" },
            { "id": 24, "name": "Phillips Avent", "details": " Manufacturers of a Full Range of Baby Products" },
            { "id": 25, "name": "Genthics Pharmaceuticals", "details": " Manufactures Over-the-counter Drugs and Prescription drugs" },
            { "id": 26, "name": "Nipro Diagnostic", "details": "(Formerly Home Diagnostic Ltd)- Manufacturers of Glucometers and Diabetic Care Products" },
            { "id": 27, "name": "Invacare", "details": " Manufacturers and Distributors of Medical Supplies, Instruments and Equipment" },
            { "id": 28, "name": "Welch Allyn", "details": "Manufacturers of Diagnostics, Equipments and Instruments" },
            { "id": 29, "name": "Hi Media", "details": " Manufacturers of Microbiology Laboratory Products" },
            { "id": 30, "name": "Polyscience", "details": "Manufacturers of Chillers and Circulators" },
            { "id": 31, "name": "Harvard Drug Group", "details": "Manufacturers and Distributors of a Comprehensive Range of Pharmaceuticals Including Over-the-counter Drugs, Prescription Drugs, Dermatology and Ophthalmology " }
        ];
        this.data = '';
        this.getState();
        this.getCity();
        if (this.cookieservice.check('jwttoken') == false) {
            this.setTempToken();
        }
        this.signUpform = this.formBuilder.group({
            hospitalname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            contactperson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            contactphones: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            speciality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            salesrepselect: this.activatedroute.snapshot.params.repid,
            type: ['hospital'],
            status: 0,
        }, {
            validator: this.machpassword('password', 'confirmpassword')
        });
    }
    setTempToken() {
        const link = this.api_url + 'temptoken';
        this.http.post(link, {}).subscribe(res => {
            let result = res;
            this.cookieservice.set('jwttoken', result.token);
        });
    }
    //collecting mass phones
    collect_phones(event) {
        if (event.keyCode == 13) {
            this.collect_phone_array.push(event.target.value);
            this.signUpform.controls['contactphones'].patchValue("");
            return;
        }
    }
    //delete mass phone
    clearPhones(index) {
        this.collect_phone_array.splice(index, 1);
    }
    //collecting mass emails
    //  collect_email(event: any) {
    //   if (event.keyCode == 13) {
    //     this.collect_email_array.push(event.target.value);
    //     this.signUpform.controls['contactemails'].patchValue("");
    //     return;
    //   }
    // }
    //  //delete mass email
    //  clearEmail(index) {
    //   this.collect_email_array.splice(index, 1);
    // }
    //  =====================Image Upload Configuration====================
    // public configData: any = {
    //   baseUrl: "http://3.15.236.141:5005/",
    //   endpoint: "uploads",
    //   size: "51200", // kb
    //   format: ["jpg", "jpeg", "png"], // use all small font
    //   type: "med_partner_img",
    //   path: "files",
    //   prefix: "medpartner_picture_"
    // }
    //  ==================================================================
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
        else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    toTop() {
        document.getElementById("nmsfunneldoctor_formblock").scrollIntoView({ behavior: 'smooth' });
    }
    ngOnInit() {
        this.router.events.subscribe(() => window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        }));
        this.meta.setTitle('MD Stock International - Your Medical Partner');
        this.meta.setTag('og:description', 'MD Stock International is the Medical Equipment & Supplies Partner you want for Top-Quality On-Demand Supplies, Direct-to-Manufacturer Purchases and much more.');
        this.meta.setTag('og:title', 'MD Stock International - Your Medical Partner');
        this.meta.setTag('og:type', 'website');
        this.meta.setTag('og:url', 'https://mdstockint.com/');
        this.meta.setTag('og:image', 'https://mdstockint.com/assets/images/MDStockFacebookBanner.jpg');
    }
    /**fetch json state and city */
    getState() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        var result = this.http.get('assets/data/state.json').subscribe(res => {
            this.stateslist = res;
            //console.log('stateslist');
            // console.log(this.stateslist);
        });
        return result;
    }
    getCity() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        var result = this.http.get('assets/data/usa-cities.json').subscribe(res => {
            this.citylist = res;
            //   console.log('citylist');
            //  console.log(this.citylist);
        });
        return result;
    }
    /**Miss Match password check function */
    machpassword(passwordkye, confirmpasswordkye) {
        return (group) => {
            let passwordInput = group.controls[passwordkye], confirmpasswordInput = group.controls[confirmpasswordkye];
            if (passwordInput.value !== confirmpasswordInput.value) {
                return confirmpasswordInput.setErrors({ notEquivalent: true });
            }
            else {
                return confirmpasswordInput.setErrors(null);
            }
        };
    }
    /**submit function */
    doSubmit(template) {
        //     if (this.configData.files) {
        //   if (this.configData.files.length > 1)
        //    { 
        //      console.log("Errcode");
        //      this.ErrCode = true; return; 
        //   }
        //   this.signUpform.value.mpimage =
        //     {
        //       "basepath": this.configData.files[0].upload.data.basepath + '/' + this.configData.path + '/',
        //       "image": this.configData.files[0].upload.data.data.fileservername,
        //       "name": this.configData.files[0].name,
        //       "type": this.configData.files[0].type
        //     };
        // } else {
        //   this.signUpform.value.mpimage = false;
        // }
        // console.log(this.ErrCode);
        // console.log(this.signUpform.value);
        for (let i in this.signUpform.controls) {
            this.signUpform.controls[i].markAsTouched();
        }
        /**Submit start here */
        if (this.signUpform.valid) {
            if (this.signUpform.value.confirmpassword != null) {
                delete this.signUpform.value.confirmpassword;
            }
            let data = {
                "source": "users",
                "data": this.signUpform.value,
                "sourceobj": ["salesrepselect"],
            };
            //console.log(this.cookieservice.get('jwttoken'));
            // this.successmodal = true;
            this.apiService.postData('addorupdatedata', data).subscribe(res => {
                let result = {};
                result = res;
                console.log(result);
                if (result.status == 'success') {
                    this.modalRef = this.modalService.show(template, { class: 'modal-md submitpopup' });
                    this.signUpform.reset();
                    setTimeout(() => {
                        // this.successmodal = true;
                        // console.log(this.successmodal)
                        this.modalRef.hide();
                    }, 3000);
                }
            });
        }
    }
    closep() {
        this.modalRef.hide();
    }
    inputUntouch(form, val) {
        //console.log('on blur .....');
        form.controls[val].markAsUntouched();
    }
    openmodal(img, template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg submitpopup' });
        this.imgval = img;
    }
    showDetails(item, template) {
        // console.log(template);
        // console.log(item);
        this.data = item;
        // console.log(this.data)
        this.modalRef = this.modalService.show(template, { class: 'show_modal' });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", [])
], HomeComponent.prototype, "onWindowScroll", null);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/rep-signup/rep-signup.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/rep-signup/rep-signup.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwLXNpZ251cC9yZXAtc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/rep-signup/rep-signup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/rep-signup/rep-signup.component.ts ***!
  \***************************************************************/
/*! exports provided: RepSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepSignupComponent", function() { return RepSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "./node_modules/@ngx-meta/core/fesm2015/ngx-meta-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");








let RepSignupComponent = class RepSignupComponent {
    constructor(router, activatedroute, meta, fb, http, modalService, cookieservice) {
        this.router = router;
        this.activatedroute = activatedroute;
        this.meta = meta;
        this.fb = fb;
        this.http = http;
        this.modalService = modalService;
        this.cookieservice = cookieservice;
        this.formSubmited = false;
        this.successmodal = false;
        this.imagemodal = 1;
        // public api_url:any = environment['api_url'];
        this.api_url = 'https://api.influxhostserver.com/';
        // agent array list
        this.partnerList = [
            { "id": 0, "name": "United Hospital Supply Corporation ", "details": "Design & Fabrication of Pharmacy & Laboratory Furniture" },
            { "id": 1, "name": "J.T. Baker ", "details": "Worldwide Producer of Laboratory, Biotechnology and Pharmaceuticals, Specialty Industrial and Microelectronic Chemicals" },
            { "id": 2, "name": "Kimble / Kontes ", "details": "World Class Laboratory Glassware (Reusable, Disposable and Specialty Glassware)" },
            { "id": 3, "name": "Advanced Instrumentations Inc ", "details": " First Class Medical Equipment" },
            { "id": 4, "name": "Adam Equipment", "details": " Suppliers of Balances, Scales and Weighing Equipment for Laboratory Medical and Industrial Use" },
            { "id": 5, "name": "A J Cope & Sons Ltd", "details": " Suppliers of Labware, Laboratory Products, Laboratory Consumables and Scientific Equipment" },
            { "id": 6, "name": "Pride Corporation", "details": " Over-the-counter Drugs and General Merchandize" },
            { "id": 7, "name": "Genetics Pharmaceuticals", "details": " Manufacturers of Pharmaceuticals" },
            { "id": 8, "name": "Dynarex Corp", "details": " Manufacturers and Distributors of Disposable Medical Supplies" },
            { "id": 9, "name": "Macs Pharmaceuticals and Cosmetics", "details": "  Manufacturers of Pharmaceutical and Cosmetic Supplies" },
            { "id": 10, "name": "Harvard Drug Group ", "details": "  Manufacturers of Pharmaceuticals " },
            { "id": 11, "name": "American Diagnostics Corporation", "details": "  Supplier of Stethoscopes and Blood Pressure Instruments " },
            { "id": 12, "name": "Pharmasupply ", "details": "Manufacturers of Glucose Meters and Blood Pressures Instruments" },
            { "id": 13, "name": "MD Science", "details": "Manufacturers of Multivitamins" },
            { "id": 14, "name": "Bio Nuclear Diagnostic", "details": "Manufacturer and Distributor of Medical, Diagnostic and Laboratory Supplies" },
            { "id": 15, "name": "Nalgene ", "details": "Manufacturer and Distributor of durable, break-resistant, light weight Labware (Beakers, Bottles, Glass Carboys, filters …)" },
            { "id": 16, "name": "Ansell  ", "details": "Global Leader in Healthcare Barrier Protection Products (Condoms, Gloves, Aprons …)" },
            { "id": 17, "name": "Hach", "details": " Global Company in Water Quality Testing and Analysis, Offers Portable Laboratory and Online Instrumentation.  Manufacturer and Distributor of Reagents used to Test Water Quality and Other Aqueous Solutions " },
            { "id": 18, "name": "Labconco ", "details": "Provides Laboratory Equipment including Chemical Fume Hoods, HEPA Filtered Safety Cabinets, Carbon Filtered and Laboratory Animal Enclosures – Glassware Washers, Carts and Benches & Water Purification System " },
            { "id": 19, "name": "Lab Safety Supplies (LSS) ", "details": " Distributor of a Variety of Safety Products, Material Handling, Industrial and Laboratory Supplies" },
            { "id": 20, "name": "Ben Meadows", "details": " Distributor of Forestry Supplies, Surveying Equipment, GPS Navigation etc. " },
            { "id": 21, "name": "ThermoFisher Scientific", "details": "  Fisher Scientific - Complete Portfolio of Laboratory Equipment, Chemicals, Supplies and Services for Research, Safety, Healthcare and Science Education" },
            { "id": 22, "name": "VWR International", "details": "Manufacturer and Distributor of Laboratory Necessities, Chemicals, Furniture, Lifer Science, Bioscience, Safety Chromatography, Controlled Environment & Clinical Healthcare" },
            { "id": 23, "name": "Cole Parmer", "details": "A Leading Global Source of Laboratory and Industrial Fluid Handling Products, Instrumentation, Equipment and Supplies. Proven Experts in the Fields of Temperature Measurement and Control, Electrochemistry, and Fluid Handling" },
            { "id": 24, "name": "Phillips Avent", "details": " Manufacturers of a Full Range of Baby Products" },
            { "id": 25, "name": "Genthics Pharmaceuticals", "details": " Manufactures Over-the-counter Drugs and Prescription drugs" },
            { "id": 26, "name": "Nipro Diagnostic", "details": "(Formerly Home Diagnostic Ltd)- Manufacturers of Glucometers and Diabetic Care Products" },
            { "id": 27, "name": "Invacare", "details": " Manufacturers and Distributors of Medical Supplies, Instruments and Equipment" },
            { "id": 28, "name": "Welch Allyn", "details": "Manufacturers of Diagnostics, Equipments and Instruments" },
            { "id": 29, "name": "Hi Media", "details": " Manufacturers of Microbiology Laboratory Products" },
            { "id": 30, "name": "Polyscience", "details": "Manufacturers of Chillers and Circulators" },
            { "id": 31, "name": "Harvard Drug Group", "details": "Manufacturers and Distributors of a Comprehensive Range of Pharmaceuticals Including Over-the-counter Drugs, Prescription Drugs, Dermatology and Ophthalmology " }
        ];
        this.data = '';
        this.myform = this.fb.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            phoneno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/[0-9\+\-\ ]/)])],
            mobile: [''],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            website: [''],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
        else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    toTop() {
        document.getElementById("nmsfunneldoctor_formblock").scrollIntoView({ behavior: 'smooth' });
    }
    ngOnInit() {
        this.router.events.subscribe(() => window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        }));
        this.meta.setTitle('MD Stock International');
        this.meta.setTag('og:description', ' ');
        this.meta.setTag('og:title', 'MD Stock International');
        this.meta.setTag('og:type', 'www.advancewellnesssolutions.com/');
        this.meta.setTag('og:image', 'https://www.advancewellnesssolutions.com/assets/images/logo.png');
    }
    getState() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        var result = this.http.get('assets/data/state.json').subscribe(res => {
            this.stateslist = res;
            //console.log('stateslist');
            // console.log(this.stateslist);
        });
        return result;
    }
    doSubmit(template) {
        this.formSubmited = true;
        for (let i in this.myform.controls) {
            this.myform.controls[i].markAsTouched();
        }
        if (this.myform.valid) {
            console.log(this.myform.value);
            let link = this.api_url + 'addorupdatedata';
            let data = {
                "source": "leads",
                "data": this.myform.value,
                "sourceobj": ["created_by"]
            };
            // this.successmodal = true;
            this.http.post(link, data)
                .subscribe(res => {
                let result = {};
                result = res;
                console.log(result);
                if (result.status == 'success') {
                    this.modalRef = this.modalService.show(template, { class: 'modal-md submitpopup' });
                    this.myform.reset();
                    setTimeout(() => {
                        // this.successmodal = true;
                        // console.log(this.successmodal)
                        this.modalRef.hide();
                    }, 3000);
                }
            });
        }
    }
    closep() {
        this.modalRef.hide();
    }
    inputUntouch(form, val) {
        //console.log('on blur .....');
        form.controls[val].markAsUntouched();
    }
    openmodal(img, template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg submitpopup' });
        this.imgval = img;
    }
    showDetails(item, template) {
        // console.log(template);
        // console.log(item);
        this.data = item;
        // console.log(this.data)
        this.modalRef = this.modalService.show(template, { class: 'show_modal' });
    }
};
RepSignupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", [])
], RepSignupComponent.prototype, "onWindowScroll", null);
RepSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rep-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rep-signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rep-signup/rep-signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rep-signup.component.css */ "./src/app/components/rep-signup/rep-signup.component.css")).default]
    })
], RepSignupComponent);



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactusComponent = class ContactusComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")).default]
    })
], ContactusComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    api_url: 'https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\sourav\Md-stock-International-hospital\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map