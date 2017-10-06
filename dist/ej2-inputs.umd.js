/*!
*  filename: ej2-inputs.umd.js
*  version : 1.0.21
*  Copyright Syncfusion Inc. 2001 - 2017. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@syncfusion/ej2-base"));
	else if(typeof define === 'function' && define.amd)
		define(["@syncfusion/ej2-base"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@syncfusion/ej2-base")) : factory(root["@syncfusion/ej2-base"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(5), __webpack_require__(10), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, index_1, index_2, index_3, index_4) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(index_1);
	    __export(index_2);
	    __export(index_3);
	    __export(index_4);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, numerictextbox_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(numerictextbox_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, input_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ROOT = 'e-numeric';
	    var SPINICON = 'e-input-group-icon';
	    var SPINUP = 'e-spin-up';
	    var SPINDOWN = 'e-spin-down';
	    var ERROR = 'e-error';
	    var INCREMENT = 'increment';
	    var DECREMENT = 'decrement';
	    var INTREGEXP = new RegExp('/^(-)?(\d*)$/');
	    var DECIMALSEPARATOR = '.';
	    var NumericTextBox = (function (_super) {
	        __extends(NumericTextBox, _super);
	        function NumericTextBox(options, element) {
	            var _this = _super.call(this, options, element) || this;
	            _this.isPrevFocused = false;
	            _this.decimalSeparator = '.';
	            _this.intRegExp = new RegExp('/^(-)?(\d*)$/');
	            _this.isCalled = false;
	            return _this;
	        }
	        NumericTextBox.prototype.preRender = function () {
	            var ejInstance = ej2_base_4.getValue('ej2_instances', this.element);
	            this.cloneElement = this.element.cloneNode(true);
	            this.angularTagName = null;
	            if (this.element.tagName === 'EJ-NUMERICTEXTBOX') {
	                this.angularTagName = this.element.tagName;
	                var input = ej2_base_3.createElement('input');
	                var index = 0;
	                for (index; index < this.element.attributes.length; index++) {
	                    input.setAttribute(this.element.attributes[index].nodeName, this.element.attributes[index].nodeValue);
	                    input.innerHTML = this.element.innerHTML;
	                }
	                this.element.parentNode.appendChild(input);
	                this.element.parentNode.removeChild(this.element);
	                this.element = input;
	                ej2_base_4.setValue('ej2_instances', ejInstance, this.element);
	            }
	            ej2_base_3.attributes(this.element, { 'role': 'spinbutton', 'tabindex': '0', 'autocomplete': 'off', 'aria-live': 'assertive' });
	            var localeText = { incrementTitle: 'Increment value', decrementTitle: 'Decrement value', placeholder: '' };
	            this.l10n = new ej2_base_1.L10n('numerictextbox', localeText, this.locale);
	            this.isValidState = true;
	            this.inputStyle = null;
	            this.inputName = null;
	            this.cultureInfo = {};
	            this.initCultureInfo();
	            this.initCultureFunc();
	            this.checkAttributes();
	            this.prevValue = this.value;
	            this.validateMinMax();
	            this.validateStep();
	            if (this.placeholder === null) {
	                this.updatePlaceholder();
	            }
	        };
	        NumericTextBox.prototype.render = function () {
	            if (this.element.tagName.toLowerCase() === 'input') {
	                this.createWrapper();
	                if (this.showSpinButton) {
	                    this.spinBtnCreation();
	                }
	                if (!ej2_base_4.isNullOrUndefined(this.width)) {
	                    ej2_base_3.setStyleAttribute(this.container, { 'width': ej2_base_4.formatUnit(this.width) });
	                }
	                this.changeValue(this.value);
	                this.wireEvents();
	                if (this.value !== null && !isNaN(this.value)) {
	                    if (this.decimals) {
	                        this.setProperties({ value: this.roundNumber(this.value, this.decimals) }, true);
	                    }
	                }
	            }
	        };
	        NumericTextBox.prototype.checkAttributes = function () {
	            var attributes = ['value', 'min', 'max', 'step', 'disabled', 'readonly', 'style', 'name'];
	            for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
	                var prop = attributes_1[_i];
	                if (!ej2_base_4.isNullOrUndefined(this.element.getAttribute(prop))) {
	                    switch (prop) {
	                        case 'disabled':
	                            var enabled = this.element.getAttribute(prop) === 'disabled' ||
	                                this.element.getAttribute(prop) === 'true' ? false : true;
	                            this.setProperties({ enabled: enabled }, true);
	                            break;
	                        case 'readonly':
	                            var readonly = this.element.getAttribute(prop) === 'readonly'
	                                || this.element.getAttribute(prop) === 'true' ? true : false;
	                            this.setProperties({ readonly: readonly }, true);
	                            break;
	                        case 'style':
	                            this.inputStyle = this.element.getAttribute(prop);
	                            break;
	                        case 'name':
	                            this.inputName = this.element.getAttribute(prop);
	                            break;
	                        default:
	                            var value = this.instance.getNumberParser({ format: 'n' })(this.element.getAttribute(prop));
	                            if ((value !== null && !isNaN(value)) || (prop === 'value')) {
	                                this.setProperties(ej2_base_4.setValue(prop, value, {}), true);
	                            }
	                            break;
	                    }
	                }
	            }
	        };
	        NumericTextBox.prototype.updatePlaceholder = function () {
	            this.setProperties({ placeholder: this.l10n.getConstant('placeholder') }, true);
	        };
	        NumericTextBox.prototype.initCultureFunc = function () {
	            this.instance = new ej2_base_5.Internationalization(this.locale);
	        };
	        NumericTextBox.prototype.initCultureInfo = function () {
	            this.cultureInfo.format = this.format;
	            if (ej2_base_4.getValue('currency', this) !== null) {
	                ej2_base_4.setValue('currency', this.currency, this.cultureInfo);
	            }
	        };
	        NumericTextBox.prototype.createWrapper = function () {
	            var inputObj = input_1.Input.createInput({
	                element: this.element,
	                customTag: this.angularTagName,
	                floatLabelType: this.floatLabelType,
	                properties: {
	                    readonly: this.readonly,
	                    placeholder: this.placeholder,
	                    cssClass: this.cssClass,
	                    enableRtl: this.enableRtl,
	                    enabled: this.enabled
	                }
	            });
	            this.container = inputObj.container;
	            ej2_base_3.addClass([this.container], ROOT);
	            if (this.readonly) {
	                ej2_base_3.attributes(this.element, { 'aria-readonly': 'true' });
	            }
	            this.hiddenInput = (ej2_base_3.createElement('input', { attrs: { type: 'hidden' } }));
	            this.inputName = this.inputName !== null ? this.inputName : this.element.id;
	            this.element.removeAttribute('name');
	            ej2_base_3.attributes(this.hiddenInput, { 'name': this.inputName });
	            this.container.insertBefore(this.hiddenInput, this.element);
	            if (this.inputStyle !== null) {
	                ej2_base_3.attributes(this.container, { 'style': this.inputStyle });
	            }
	        };
	        NumericTextBox.prototype.spinBtnCreation = function () {
	            this.spinDown = input_1.Input.appendSpan(SPINICON + ' ' + SPINDOWN, this.container);
	            ej2_base_3.attributes(this.spinDown, {
	                'title': this.l10n.getConstant('decrementTitle'),
	                'aria-label': this.l10n.getConstant('decrementTitle')
	            });
	            this.spinUp = input_1.Input.appendSpan(SPINICON + ' ' + SPINUP, this.container);
	            ej2_base_3.attributes(this.spinUp, {
	                'title': this.l10n.getConstant('incrementTitle'),
	                'aria-label': this.l10n.getConstant('incrementTitle')
	            });
	            this.wireSpinBtnEvents();
	        };
	        NumericTextBox.prototype.validateMinMax = function () {
	            if (!(typeof (this.min) === 'number' && !isNaN(this.min))) {
	                this.setProperties({ min: -(Number.MAX_VALUE) }, true);
	            }
	            if (!(typeof (this.max) === 'number' && !isNaN(this.max))) {
	                this.setProperties({ max: Number.MAX_VALUE }, true);
	            }
	            if (this.decimals !== null) {
	                if (this.min !== -(Number.MAX_VALUE)) {
	                    this.setProperties({ min: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.min)) }, true);
	                }
	                if (this.max !== (Number.MAX_VALUE)) {
	                    this.setProperties({ max: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.max)) }, true);
	                }
	            }
	            this.setProperties({ min: this.min > this.max ? this.max : this.min }, true);
	            ej2_base_3.attributes(this.element, { 'aria-valuemin': this.min.toString(), 'aria-valuemax': this.max.toString() });
	        };
	        NumericTextBox.prototype.formattedValue = function (decimals, value) {
	            return this.instance.getNumberFormat({
	                maximumFractionDigits: decimals,
	                minimumFractionDigits: decimals, useGrouping: false
	            })(value);
	        };
	        NumericTextBox.prototype.validateStep = function () {
	            if (this.decimals !== null) {
	                this.setProperties({ step: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.step)) }, true);
	            }
	        };
	        NumericTextBox.prototype.action = function (operation) {
	            var value = this.isFocused ? this.instance.getNumberParser({ format: 'n' })(this.element.value) : this.value;
	            this.changeValue(this.performAction(value, this.step, operation));
	            this.raiseChangeEvent();
	        };
	        NumericTextBox.prototype.checkErrorClass = function () {
	            if (this.isValidState) {
	                ej2_base_3.removeClass([this.container], ERROR);
	            }
	            else {
	                ej2_base_3.addClass([this.container], ERROR);
	            }
	            ej2_base_3.attributes(this.element, { 'aria-invalid': this.isValidState ? 'false' : 'true' });
	        };
	        NumericTextBox.prototype.wireEvents = function () {
	            ej2_base_1.EventHandler.add(this.element, 'focus', this.focusIn, this);
	            ej2_base_1.EventHandler.add(this.element, 'blur', this.focusOut, this);
	            ej2_base_1.EventHandler.add(this.element, 'keydown', this.keyDownHandler, this);
	            ej2_base_1.EventHandler.add(this.element, 'keypress', this.keyPressHandler, this);
	            ej2_base_1.EventHandler.add(this.element, 'change', this.changeHandler, this);
	            ej2_base_1.EventHandler.add(this.element, 'paste', this.pasteHandler, this);
	        };
	        NumericTextBox.prototype.wireSpinBtnEvents = function () {
	            ej2_base_1.EventHandler.add(this.spinUp, ej2_base_1.Browser.touchStartEvent, this.mouseDownOnSpinner, this);
	            ej2_base_1.EventHandler.add(this.spinDown, ej2_base_1.Browser.touchStartEvent, this.mouseDownOnSpinner, this);
	            ej2_base_1.EventHandler.add(this.spinUp, ej2_base_1.Browser.touchEndEvent, this.mouseUpOnSpinner, this);
	            ej2_base_1.EventHandler.add(this.spinDown, ej2_base_1.Browser.touchEndEvent, this.mouseUpOnSpinner, this);
	            ej2_base_1.EventHandler.add(this.spinUp, ej2_base_1.Browser.touchMoveEvent, this.touchMoveOnSpinner, this);
	            ej2_base_1.EventHandler.add(this.spinDown, ej2_base_1.Browser.touchMoveEvent, this.touchMoveOnSpinner, this);
	        };
	        NumericTextBox.prototype.unwireEvents = function () {
	            ej2_base_1.EventHandler.remove(this.element, 'focus', this.focusIn);
	            ej2_base_1.EventHandler.remove(this.element, 'blur', this.focusOut);
	            ej2_base_1.EventHandler.remove(this.element, 'keydown', this.keyDownHandler);
	            ej2_base_1.EventHandler.remove(this.element, 'keypress', this.keyPressHandler);
	            ej2_base_1.EventHandler.remove(this.element, 'change', this.changeHandler);
	            ej2_base_1.EventHandler.remove(this.element, 'paste', this.pasteHandler);
	        };
	        NumericTextBox.prototype.unwireSpinBtnEvents = function () {
	            ej2_base_1.EventHandler.remove(this.spinUp, ej2_base_1.Browser.touchStartEvent, this.mouseDownOnSpinner);
	            ej2_base_1.EventHandler.remove(this.spinDown, ej2_base_1.Browser.touchStartEvent, this.mouseDownOnSpinner);
	            ej2_base_1.EventHandler.remove(this.spinUp, ej2_base_1.Browser.touchEndEvent, this.mouseUpOnSpinner);
	            ej2_base_1.EventHandler.remove(this.spinDown, ej2_base_1.Browser.touchEndEvent, this.mouseUpOnSpinner);
	            ej2_base_1.EventHandler.remove(this.spinUp, ej2_base_1.Browser.touchMoveEvent, this.touchMoveOnSpinner);
	            ej2_base_1.EventHandler.remove(this.spinDown, ej2_base_1.Browser.touchMoveEvent, this.touchMoveOnSpinner);
	        };
	        NumericTextBox.prototype.changeHandler = function (event) {
	            if (!this.element.value.length) {
	                this.setProperties({ value: null }, true);
	            }
	            var parsedInput = this.instance.getNumberParser({ format: 'n' })(this.element.value);
	            this.updateValue(parsedInput, event);
	        };
	        NumericTextBox.prototype.raiseChangeEvent = function (event) {
	            if (this.prevValue !== this.value) {
	                var eventArgs = {};
	                this.changeEventArgs = { value: this.value, previousValue: this.prevValue };
	                if (event) {
	                    this.changeEventArgs.event = event;
	                }
	                ej2_base_4.merge(eventArgs, this.changeEventArgs);
	                this.prevValue = this.value;
	                this.trigger('change', eventArgs);
	            }
	        };
	        NumericTextBox.prototype.pasteHandler = function () {
	            var _this = this;
	            var beforeUpdate = this.element.value;
	            setTimeout(function () {
	                if (!_this.numericRegex().test(_this.element.value)) {
	                    _this.setElementValue(beforeUpdate);
	                }
	            });
	        };
	        NumericTextBox.prototype.keyDownHandler = function (event) {
	            switch (event.keyCode) {
	                case 38:
	                    event.preventDefault();
	                    this.action(INCREMENT);
	                    break;
	                case 40:
	                    event.preventDefault();
	                    this.action(DECREMENT);
	                    break;
	                default: break;
	            }
	            if (!this.element.value.length) {
	                this.setProperties({ value: null }, true);
	                this.updateValue(this.instance.getNumberParser({ format: 'n' })(this.element.value));
	            }
	        };
	        ;
	        NumericTextBox.prototype.performAction = function (value, step, operation) {
	            if (value === null || isNaN(value)) {
	                value = 0;
	            }
	            var updatedValue = operation === INCREMENT ? value + step : value - step;
	            updatedValue = this.correctRounding(value, step, updatedValue);
	            return this.strictMode ? this.trimValue(updatedValue) : updatedValue;
	        };
	        ;
	        NumericTextBox.prototype.correctRounding = function (value, step, result) {
	            var floatExp = new RegExp('[,.](.*)');
	            var valueText = value.toString();
	            var stepText = step.toString();
	            var floatValue = floatExp.test(value.toString());
	            var floatStep = floatExp.test(step.toString());
	            if (floatValue || floatStep) {
	                var valueCount = floatValue ? floatExp.exec(value.toString())[0].length : 0;
	                var stepCount = floatStep ? floatExp.exec(step.toString())[0].length : 0;
	                var max = Math.max(valueCount, stepCount);
	                return value = this.roundValue(result, max);
	            }
	            return result;
	        };
	        ;
	        NumericTextBox.prototype.roundValue = function (result, precision) {
	            precision = precision || 0;
	            var divide = Math.pow(10, precision);
	            return result *= divide, result = Math.round(result) / divide;
	        };
	        ;
	        NumericTextBox.prototype.updateValue = function (value, event) {
	            if (value !== null && !isNaN(value)) {
	                if (this.decimals) {
	                    value = this.roundNumber(value, this.decimals);
	                }
	            }
	            this.changeValue(value === null || isNaN(value) ? null : this.strictMode ? this.trimValue(value) : value);
	            this.raiseChangeEvent(event);
	        };
	        NumericTextBox.prototype.changeValue = function (value) {
	            if (!(value || value === 0)) {
	                value = null;
	                this.setProperties({ value: value }, true);
	            }
	            else {
	                var numberOfDecimals = void 0;
	                var decimalPart = value.toString().split('.')[1];
	                numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
	                if (this.decimals !== null) {
	                    numberOfDecimals = numberOfDecimals < this.decimals ? numberOfDecimals : this.decimals;
	                }
	                this.setProperties({ value: this.roundNumber(value, numberOfDecimals) }, true);
	            }
	            this.modifyText();
	            if (!this.strictMode) {
	                this.validateState();
	            }
	        };
	        ;
	        NumericTextBox.prototype.modifyText = function () {
	            if (this.value || this.value === 0) {
	                var value = this.formatNumber();
	                var elementValue = this.isFocused ? value : this.instance.getNumberFormat(this.cultureInfo)(this.value);
	                this.setElementValue(elementValue);
	                ej2_base_3.attributes(this.element, { 'aria-valuenow': value });
	                this.hiddenInput.value = value;
	            }
	            else {
	                this.setElementValue('');
	                this.element.removeAttribute('aria-valuenow');
	                this.hiddenInput.value = null;
	            }
	        };
	        ;
	        NumericTextBox.prototype.setElementValue = function (val, element) {
	            input_1.Input.setValue(val, (element ? element : this.element), this.floatLabelType);
	        };
	        NumericTextBox.prototype.validateState = function () {
	            this.isValidState = true;
	            if (this.value || this.value === 0) {
	                this.isValidState = !(this.value > this.max || this.value < this.min);
	            }
	            this.checkErrorClass();
	        };
	        NumericTextBox.prototype.formatNumber = function () {
	            var numberOfDecimals;
	            var currentValue = this.value;
	            var decimalPart = currentValue.toString().split('.')[1];
	            numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
	            if (this.decimals !== null) {
	                numberOfDecimals = numberOfDecimals < this.decimals ? numberOfDecimals : this.decimals;
	            }
	            return this.instance.getNumberFormat({
	                maximumFractionDigits: numberOfDecimals,
	                minimumFractionDigits: numberOfDecimals, useGrouping: false
	            })(this.value);
	        };
	        ;
	        NumericTextBox.prototype.trimValue = function (value) {
	            if (value > this.max) {
	                return this.max;
	            }
	            if (value < this.min) {
	                return this.min;
	            }
	            return value;
	        };
	        ;
	        NumericTextBox.prototype.roundNumber = function (value, precision) {
	            var result = value;
	            var decimals = precision || 0;
	            var result1 = result.toString().split('e');
	            result = Math.round(Number(result1[0] + 'e' + (result1[1] ? (Number(result1[1]) + decimals) : decimals)));
	            var result2 = result.toString().split('e');
	            result = Number(result2[0] + 'e' + (result2[1] ? (Number(result2[1]) - decimals) : -decimals));
	            return Number(result.toFixed(decimals));
	        };
	        ;
	        NumericTextBox.prototype.cancelEvent = function (event) {
	            event.preventDefault();
	            return false;
	        };
	        NumericTextBox.prototype.keyPressHandler = function (event) {
	            if (event.which === 0 || event.metaKey || event.ctrlKey || event.keyCode === 8 || event.keyCode === 13) {
	                return true;
	            }
	            var currentChar = String.fromCharCode(event.which);
	            var text = this.element.value;
	            text = text.substring(0, this.element.selectionStart) + currentChar + text.substring(this.element.selectionEnd);
	            if (!this.numericRegex().test(text)) {
	                event.preventDefault();
	                event.stopPropagation();
	                return false;
	            }
	            else {
	                return true;
	            }
	        };
	        ;
	        NumericTextBox.prototype.numericRegex = function () {
	            var numericObject = ej2_base_5.getNumericObject(this.locale);
	            var decimalSeparator = ej2_base_4.getValue('decimal', numericObject);
	            var fractionRule = '*';
	            if (decimalSeparator === DECIMALSEPARATOR) {
	                decimalSeparator = '\\' + decimalSeparator;
	            }
	            if (this.decimals === 0) {
	                return INTREGEXP;
	            }
	            if (this.decimals && this.validateDecimalOnType) {
	                fractionRule = '{0,' + this.decimals + '}';
	            }
	            return new RegExp('^(-)?(((\\d+(' + decimalSeparator + '\\d' + fractionRule +
	                ')?)|(' + decimalSeparator + '\\d' + fractionRule + ')))?$');
	        };
	        ;
	        NumericTextBox.prototype.mouseWheel = function (event) {
	            event.preventDefault();
	            var delta;
	            var rawEvent = event;
	            if (rawEvent.wheelDelta) {
	                delta = rawEvent.wheelDelta / 120;
	            }
	            else if (rawEvent.detail) {
	                delta = -rawEvent.detail / 3;
	            }
	            if (delta > 0) {
	                this.action(INCREMENT);
	            }
	            else if (delta < 0) {
	                this.action(DECREMENT);
	            }
	            this.cancelEvent(event);
	        };
	        NumericTextBox.prototype.focusIn = function (event) {
	            if (!this.enabled || this.readonly) {
	                return;
	            }
	            this.isFocused = true;
	            ej2_base_3.removeClass([this.container], ERROR);
	            this.prevValue = this.value;
	            if ((this.value || this.value === 0)) {
	                var formatValue = this.formatNumber();
	                this.setElementValue(formatValue);
	                if (!this.isPrevFocused) {
	                    this.element.setSelectionRange(0, formatValue.length);
	                }
	            }
	            if (!ej2_base_1.Browser.isDevice) {
	                ej2_base_1.EventHandler.add(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel, this);
	            }
	        };
	        ;
	        NumericTextBox.prototype.focusOut = function (event) {
	            var _this = this;
	            if (this.isPrevFocused) {
	                event.preventDefault();
	                if (ej2_base_1.Browser.isDevice) {
	                    var value_1 = this.element.value;
	                    this.element.focus();
	                    this.isPrevFocused = false;
	                    var ele_1 = this.element;
	                    setTimeout(function () {
	                        _this.setElementValue(value_1, ele_1);
	                    }, 200);
	                }
	            }
	            else {
	                this.isFocused = false;
	                if (!this.element.value.length) {
	                    this.setProperties({ value: null }, true);
	                }
	                var parsedInput = this.instance.getNumberParser({ format: 'n' })(this.element.value);
	                this.updateValue(parsedInput);
	                if (!ej2_base_1.Browser.isDevice) {
	                    ej2_base_1.EventHandler.remove(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel);
	                }
	            }
	        };
	        ;
	        NumericTextBox.prototype.mouseDownOnSpinner = function (event) {
	            var _this = this;
	            if (this.isFocused) {
	                this.isPrevFocused = true;
	                event.preventDefault();
	            }
	            if (!this.getElementData(event)) {
	                return;
	            }
	            var result = this.getElementData(event);
	            var target = event.currentTarget;
	            var action = (target.classList.contains(SPINUP)) ? INCREMENT : DECREMENT;
	            ej2_base_1.EventHandler.add(target, 'mouseleave', this.mouseUpClick, this);
	            this.timeOut = setInterval(function () { _this.isCalled = true; _this.action(action); }, 150);
	            ej2_base_1.EventHandler.add(document, 'mouseup', this.mouseUpClick, this);
	        };
	        NumericTextBox.prototype.touchMoveOnSpinner = function (event) {
	            var target = document.elementFromPoint(event.clientX, event.clientY);
	            if (!(target.classList.contains(SPINICON))) {
	                clearInterval(this.timeOut);
	            }
	        };
	        NumericTextBox.prototype.mouseUpOnSpinner = function (event) {
	            if (this.isPrevFocused) {
	                this.element.focus();
	                if (!ej2_base_1.Browser.isDevice) {
	                    this.isPrevFocused = false;
	                }
	            }
	            if (!ej2_base_1.Browser.isDevice) {
	                event.preventDefault();
	            }
	            if (!this.getElementData(event)) {
	                return;
	            }
	            var target = event.currentTarget;
	            var action = (target.classList.contains(SPINUP)) ? INCREMENT : DECREMENT;
	            ej2_base_1.EventHandler.remove(target, 'mouseleave', this.mouseUpClick);
	            if (!this.isCalled) {
	                this.action(action);
	            }
	            this.isCalled = false;
	            ej2_base_1.EventHandler.remove(document, 'mouseup', this.mouseUpClick);
	        };
	        NumericTextBox.prototype.getElementData = function (event) {
	            if ((event.which && event.which === 3) || (event.button && event.button === 2)
	                || !this.enabled || this.readonly) {
	                return false;
	            }
	            clearInterval(this.timeOut);
	            return true;
	        };
	        NumericTextBox.prototype.mouseUpClick = function (event) {
	            event.stopPropagation();
	            clearInterval(this.timeOut);
	            this.isCalled = false;
	            ej2_base_1.EventHandler.remove(this.spinUp, 'mouseleave', this.mouseUpClick);
	            ej2_base_1.EventHandler.remove(this.spinDown, 'mouseleave', this.mouseUpClick);
	        };
	        NumericTextBox.prototype.increment = function (step) {
	            if (step === void 0) { step = this.step; }
	            this.changeValue(this.performAction(this.value, step, INCREMENT));
	        };
	        NumericTextBox.prototype.decrement = function (step) {
	            if (step === void 0) { step = this.step; }
	            this.changeValue(this.performAction(this.value, step, DECREMENT));
	        };
	        NumericTextBox.prototype.destroy = function () {
	            this.unwireEvents();
	            ej2_base_3.detach(this.hiddenInput);
	            if (this.showSpinButton) {
	                this.unwireSpinBtnEvents();
	                ej2_base_3.detach(this.spinUp);
	                ej2_base_3.detach(this.spinDown);
	            }
	            this.container.parentElement.appendChild(this.cloneElement);
	            ej2_base_3.detach(this.container);
	            _super.prototype.destroy.call(this);
	        };
	        NumericTextBox.prototype.getText = function () {
	            return this.element.value;
	        };
	        NumericTextBox.prototype.getPersistData = function () {
	            var keyEntity = ['value'];
	            return this.addOnPersist(keyEntity);
	        };
	        NumericTextBox.prototype.onPropertyChanged = function (newProp, oldProp) {
	            var elementVal;
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'width':
	                        ej2_base_3.setStyleAttribute(this.container, { 'width': ej2_base_4.formatUnit(newProp.width) });
	                        break;
	                    case 'cssClass':
	                        input_1.Input.setCssClass(newProp.cssClass, [this.container], oldProp.cssClass);
	                        break;
	                    case 'enabled':
	                        input_1.Input.setEnabled(newProp.enabled, this.element);
	                        break;
	                    case 'enableRtl':
	                        input_1.Input.setEnableRtl(newProp.enableRtl, [this.container]);
	                        break;
	                    case 'readonly':
	                        input_1.Input.setReadonly(newProp.readonly, this.element);
	                        if (this.readonly) {
	                            ej2_base_3.attributes(this.element, { 'aria-readonly': 'true' });
	                        }
	                        else {
	                            this.element.removeAttribute('aria-readonly');
	                        }
	                        break;
	                    case 'placeholder':
	                        input_1.Input.setPlaceholder(newProp.placeholder, this.element);
	                        break;
	                    case 'step':
	                        this.step = newProp.step;
	                        this.validateStep();
	                        break;
	                    case 'showSpinButton':
	                        if (newProp.showSpinButton) {
	                            this.spinBtnCreation();
	                        }
	                        else {
	                            ej2_base_3.detach(this.spinUp);
	                            ej2_base_3.detach(this.spinDown);
	                        }
	                        break;
	                    case 'value':
	                        this.updateValue(newProp.value);
	                        break;
	                    case 'min':
	                    case 'max':
	                        ej2_base_4.setValue(prop, ej2_base_4.getValue(prop, newProp), this);
	                        this.validateMinMax();
	                        this.updateValue(this.value);
	                        break;
	                    case 'strictMode':
	                        this.strictMode = newProp.strictMode;
	                        this.updateValue(this.value);
	                        this.validateState();
	                        break;
	                    case 'locale':
	                        this.initCultureFunc();
	                        this.l10n.setLocale(this.locale);
	                        this.updatePlaceholder();
	                        input_1.Input.setPlaceholder(this.placeholder, this.element);
	                        this.updateValue(this.value);
	                        break;
	                    case 'currency':
	                        ej2_base_4.setValue(prop, ej2_base_4.getValue(prop, newProp), this.cultureInfo);
	                        this.updateValue(this.value);
	                        break;
	                    case 'format':
	                        ej2_base_4.setValue(prop, ej2_base_4.getValue(prop, newProp), this);
	                        this.initCultureInfo();
	                        this.updateValue(this.value);
	                        break;
	                    case 'decimals':
	                        this.decimals = newProp.decimals;
	                        this.updateValue(this.value);
	                }
	            }
	        };
	        NumericTextBox.prototype.getModuleName = function () {
	            return 'numerictextbox';
	        };
	        return NumericTextBox;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_1.Property('')
	    ], NumericTextBox.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property(null)
	    ], NumericTextBox.prototype, "value", void 0);
	    __decorate([
	        ej2_base_1.Property(-(Number.MAX_VALUE))
	    ], NumericTextBox.prototype, "min", void 0);
	    __decorate([
	        ej2_base_1.Property(Number.MAX_VALUE)
	    ], NumericTextBox.prototype, "max", void 0);
	    __decorate([
	        ej2_base_1.Property(1)
	    ], NumericTextBox.prototype, "step", void 0);
	    __decorate([
	        ej2_base_1.Property(null)
	    ], NumericTextBox.prototype, "width", void 0);
	    __decorate([
	        ej2_base_1.Property(null)
	    ], NumericTextBox.prototype, "placeholder", void 0);
	    __decorate([
	        ej2_base_1.Property(true)
	    ], NumericTextBox.prototype, "showSpinButton", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], NumericTextBox.prototype, "readonly", void 0);
	    __decorate([
	        ej2_base_1.Property(true)
	    ], NumericTextBox.prototype, "enabled", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], NumericTextBox.prototype, "enableRtl", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], NumericTextBox.prototype, "enablePersistence", void 0);
	    __decorate([
	        ej2_base_1.Property('n2')
	    ], NumericTextBox.prototype, "format", void 0);
	    __decorate([
	        ej2_base_1.Property(null)
	    ], NumericTextBox.prototype, "decimals", void 0);
	    __decorate([
	        ej2_base_1.Property(null)
	    ], NumericTextBox.prototype, "currency", void 0);
	    __decorate([
	        ej2_base_1.Property(true)
	    ], NumericTextBox.prototype, "strictMode", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], NumericTextBox.prototype, "validateDecimalOnType", void 0);
	    __decorate([
	        ej2_base_1.Property('Never')
	    ], NumericTextBox.prototype, "floatLabelType", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], NumericTextBox.prototype, "created", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], NumericTextBox.prototype, "destroyed", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], NumericTextBox.prototype, "change", void 0);
	    NumericTextBox = __decorate([
	        ej2_base_2.NotifyPropertyChanges
	    ], NumericTextBox);
	    exports.NumericTextBox = NumericTextBox;
	    exports.numerictextboxHelper = ej2_base_1.CreateBuilder(NumericTextBox);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CLASSNAMES = {
	        RTL: 'e-rtl',
	        DISABLE: 'e-disabled',
	        INPUT: 'e-input',
	        INPUTGROUP: 'e-input-group',
	        FLOATINPUT: 'e-float-input',
	        FLOATLINE: 'e-float-line',
	        FLOATTEXT: 'e-float-text',
	        CLEARICON: 'e-clear-icon',
	        CLEARICONHIDE: 'e-clear-icon-hide',
	        LABELTOP: 'e-label-top',
	        LABELBOTTOM: 'e-label-bottom',
	        NOFLOATLABEL: 'e-no-float-label',
	        INPUTCUSTOMTAG: 'e-input-custom-tag',
	        FLOATCUSTOMTAG: 'e-float-custom-tag'
	    };
	    var Input;
	    (function (Input) {
	        var privateInputObj = {
	            container: null,
	            buttons: [],
	            clearButton: null
	        };
	        function createInput(args) {
	            var inputObject = { container: null, buttons: [], clearButton: null };
	            if (ej2_base_1.isNullOrUndefined(args.floatLabelType) || args.floatLabelType === 'Never') {
	                inputObject.container = createInputContainer(args, CLASSNAMES.INPUTGROUP, CLASSNAMES.INPUTCUSTOMTAG, 'span');
	                args.element.parentNode.insertBefore(inputObject.container, args.element);
	                ej2_base_1.addClass([args.element], CLASSNAMES.INPUT);
	                inputObject.container.appendChild(args.element);
	            }
	            else {
	                createFloatingInput(args, inputObject);
	            }
	            args.element.addEventListener('focus', function () {
	                var parent = getParentNode(this);
	                if (parent.classList.contains('e-input-group')) {
	                    parent.classList.add('e-input-focus');
	                }
	            });
	            args.element.addEventListener('blur', function () {
	                var parent = getParentNode(this);
	                if (parent.classList.contains('e-input-group')) {
	                    parent.classList.remove('e-input-focus');
	                }
	            });
	            if (!ej2_base_1.isNullOrUndefined(args.properties) && !ej2_base_1.isNullOrUndefined(args.properties.showClearButton) && args.properties.showClearButton) {
	                inputObject.clearButton = createClearButton(args.element, inputObject.container);
	                if (inputObject.container.classList.contains(CLASSNAMES.FLOATINPUT)) {
	                    ej2_base_1.addClass([inputObject.container], CLASSNAMES.INPUTGROUP);
	                }
	            }
	            if (!ej2_base_1.isNullOrUndefined(args.buttons)) {
	                for (var i = 0; i < args.buttons.length; i++) {
	                    inputObject.buttons.push(appendSpan(args.buttons[i], inputObject.container));
	                }
	            }
	            inputObject = setPropertyValue(args, inputObject);
	            privateInputObj = inputObject;
	            return inputObject;
	        }
	        Input.createInput = createInput;
	        function _focusFn() {
	            var label = getParentNode(this).getElementsByClassName('e-float-text')[0];
	            ej2_base_1.addClass([label], CLASSNAMES.LABELTOP);
	            if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
	                ej2_base_1.removeClass([label], CLASSNAMES.LABELBOTTOM);
	            }
	        }
	        function _blurFn() {
	            var parent = getParentNode(this);
	            if (parent.getElementsByTagName('input')[0].value === '') {
	                var label = parent.getElementsByClassName('e-float-text')[0];
	                if (label.classList.contains(CLASSNAMES.LABELTOP)) {
	                    ej2_base_1.removeClass([label], CLASSNAMES.LABELTOP);
	                }
	                ej2_base_1.addClass([label], CLASSNAMES.LABELBOTTOM);
	            }
	        }
	        function wireFloatingEvents(element) {
	            element.addEventListener('focus', _focusFn);
	            element.addEventListener('blur', _blurFn);
	        }
	        function unwireFloatingEvents(element) {
	            element.removeEventListener('focus', _focusFn);
	            element.removeEventListener('blur', _blurFn);
	        }
	        function createFloatingInput(args, inputObject) {
	            var inputElement;
	            var floatLinelement;
	            var floatLabelElement;
	            if (args.floatLabelType === 'Auto') {
	                wireFloatingEvents(args.element);
	            }
	            if (ej2_base_1.isNullOrUndefined(inputObject.container)) {
	                inputObject.container = createInputContainer(args, CLASSNAMES.FLOATINPUT, CLASSNAMES.FLOATCUSTOMTAG, 'div');
	                args.element.parentNode.insertBefore(inputObject.container, args.element);
	            }
	            else {
	                if (!ej2_base_1.isNullOrUndefined(args.customTag)) {
	                    inputObject.container.classList.add(CLASSNAMES.FLOATCUSTOMTAG);
	                }
	                inputObject.container.classList.add(CLASSNAMES.FLOATINPUT);
	            }
	            floatLinelement = ej2_base_1.createElement('span', { className: CLASSNAMES.FLOATLINE });
	            floatLabelElement = ej2_base_1.createElement('label', { className: CLASSNAMES.FLOATTEXT });
	            if (!ej2_base_1.isNullOrUndefined(args.element.id) && args.element.id !== '') {
	                floatLabelElement.id = 'label_' + args.element.id.replace(/ /g, '_');
	                ej2_base_1.attributes(args.element, { 'aria-labelledby': floatLabelElement.id });
	            }
	            if (!ej2_base_1.isNullOrUndefined(args.element.placeholder) && args.element.placeholder !== '') {
	                floatLabelElement.innerHTML = args.element.placeholder;
	                args.element.removeAttribute('placeholder');
	            }
	            if (!ej2_base_1.isNullOrUndefined(args.properties) && !ej2_base_1.isNullOrUndefined(args.properties.placeholder) &&
	                args.properties.placeholder !== '') {
	                floatLabelElement.innerHTML = args.properties.placeholder;
	            }
	            if (!floatLabelElement.innerHTML) {
	                inputObject.container.classList.add(CLASSNAMES.NOFLOATLABEL);
	            }
	            inputObject.container.appendChild(args.element);
	            inputObject.container.appendChild(floatLinelement);
	            inputObject.container.appendChild(floatLabelElement);
	            updateLabelState(args.element.value, floatLabelElement);
	            if (args.floatLabelType === 'Always') {
	                if (floatLabelElement.classList.contains(CLASSNAMES.LABELBOTTOM)) {
	                    ej2_base_1.removeClass([floatLabelElement], CLASSNAMES.LABELBOTTOM);
	                }
	                ej2_base_1.addClass([floatLabelElement], CLASSNAMES.LABELTOP);
	            }
	            if (args.floatLabelType === 'Auto') {
	                args.element.addEventListener('input', function (event) {
	                    updateLabelState(args.element.value, floatLabelElement);
	                });
	                args.element.addEventListener('blur', function (event) {
	                    updateLabelState(args.element.value, floatLabelElement);
	                });
	            }
	        }
	        function setPropertyValue(args, inputObject) {
	            if (!ej2_base_1.isNullOrUndefined(args.properties)) {
	                for (var _i = 0, _a = Object.keys(args.properties); _i < _a.length; _i++) {
	                    var prop = _a[_i];
	                    switch (prop) {
	                        case 'cssClass':
	                            setCssClass(args.properties.cssClass, [inputObject.container]);
	                            break;
	                        case 'enabled':
	                            setEnabled(args.properties.enabled, args.element);
	                            break;
	                        case 'enableRtl':
	                            setEnableRtl(args.properties.enableRtl, [inputObject.container]);
	                            break;
	                        case 'placeholder':
	                            setPlaceholder(args.properties.placeholder, args.element);
	                            break;
	                        case 'readonly':
	                            setReadonly(args.properties.readonly, args.element);
	                            break;
	                    }
	                }
	            }
	            return inputObject;
	        }
	        function updateIconState(value, button) {
	            if (value) {
	                ej2_base_1.removeClass([button], CLASSNAMES.CLEARICONHIDE);
	            }
	            else {
	                ej2_base_1.addClass([button], CLASSNAMES.CLEARICONHIDE);
	            }
	        }
	        function updateLabelState(value, label) {
	            if (value) {
	                ej2_base_1.addClass([label], CLASSNAMES.LABELTOP);
	                if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
	                    ej2_base_1.removeClass([label], CLASSNAMES.LABELBOTTOM);
	                }
	            }
	            else {
	                if (label.classList.contains(CLASSNAMES.LABELTOP)) {
	                    ej2_base_1.removeClass([label], CLASSNAMES.LABELTOP);
	                }
	                ej2_base_1.addClass([label], CLASSNAMES.LABELBOTTOM);
	            }
	        }
	        function getParentNode(element) {
	            var parentNode = element.parentNode;
	            return parentNode;
	        }
	        function createClearButton(element, container) {
	            var button = ej2_base_1.createElement('span', { className: CLASSNAMES.CLEARICON });
	            container.appendChild(button);
	            if (!ej2_base_1.isNullOrUndefined(privateInputObj.container) &&
	                privateInputObj.container.classList.contains(CLASSNAMES.FLOATINPUT)) {
	                ej2_base_1.addClass([privateInputObj.container], CLASSNAMES.INPUTGROUP);
	            }
	            ej2_base_1.addClass([button], CLASSNAMES.CLEARICONHIDE);
	            wireClearBtnEvents(element, button);
	            return button;
	        }
	        function wireClearBtnEvents(element, button) {
	            button.addEventListener('click', function (event) {
	                if (!(element.classList.contains(CLASSNAMES.DISABLE) || element.readOnly)) {
	                    event.preventDefault();
	                    if (element !== document.activeElement) {
	                        element.focus();
	                    }
	                    element.value = '';
	                    ej2_base_1.addClass([button], CLASSNAMES.CLEARICONHIDE);
	                }
	            });
	            element.addEventListener('input', function (event) {
	                updateIconState(element.value, button);
	            });
	            element.addEventListener('focus', function (event) {
	                updateIconState(element.value, button);
	            });
	            element.addEventListener('blur', function (event) {
	                setTimeout(function () { ej2_base_1.addClass([button], CLASSNAMES.CLEARICONHIDE); }, 200);
	            });
	        }
	        function validateLabel(element, floatLabelType) {
	            var parent = getParentNode(element);
	            if (parent.classList.contains(CLASSNAMES.FLOATINPUT) && floatLabelType === 'Auto') {
	                var label = getParentNode(element).getElementsByClassName('e-float-text')[0];
	                updateLabelState(element.value, label);
	            }
	        }
	        function createInputContainer(args, className, tagClass, tag) {
	            var container;
	            if (!ej2_base_1.isNullOrUndefined(args.customTag)) {
	                container = ej2_base_1.createElement(args.customTag, { className: className });
	                container.classList.add(tagClass);
	            }
	            else {
	                container = ej2_base_1.createElement(tag, { className: className });
	            }
	            return container;
	        }
	        function setValue(value, element, floatLabelType, clearButton) {
	            element.value = value;
	            if ((!ej2_base_1.isNullOrUndefined(floatLabelType)) && floatLabelType === 'Auto') {
	                validateLabel(element, floatLabelType);
	            }
	            if (!ej2_base_1.isNullOrUndefined(clearButton) && clearButton) {
	                var parentElement = getParentNode(element);
	                var button = parentElement.getElementsByClassName(CLASSNAMES.CLEARICON)[0];
	                if (element.value && parentElement.classList.contains('e-input-focus')) {
	                    ej2_base_1.removeClass([button], CLASSNAMES.CLEARICONHIDE);
	                }
	                else {
	                    ej2_base_1.addClass([button], CLASSNAMES.CLEARICONHIDE);
	                }
	            }
	        }
	        Input.setValue = setValue;
	        function setCssClass(cssClass, elements, oldClass) {
	            if (!ej2_base_1.isNullOrUndefined(oldClass) && oldClass !== '') {
	                ej2_base_1.removeClass(elements, oldClass);
	            }
	            if (!ej2_base_1.isNullOrUndefined(cssClass) && cssClass !== '') {
	                ej2_base_1.addClass(elements, cssClass);
	            }
	        }
	        Input.setCssClass = setCssClass;
	        function setPlaceholder(placeholder, element) {
	            var parentElement;
	            parentElement = getParentNode(element);
	            if (parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
	                if (!ej2_base_1.isNullOrUndefined(placeholder) && placeholder !== '') {
	                    parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = placeholder;
	                    parentElement.classList.remove(CLASSNAMES.NOFLOATLABEL);
	                }
	                else {
	                    parentElement.classList.add(CLASSNAMES.NOFLOATLABEL);
	                    parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
	                }
	            }
	            else {
	                if (!ej2_base_1.isNullOrUndefined(placeholder) && placeholder !== '') {
	                    ej2_base_1.attributes(element, { 'placeholder': placeholder, 'aria-placeholder': placeholder });
	                }
	                else {
	                    element.removeAttribute('placeholder');
	                    element.removeAttribute('aria-placeholder');
	                }
	            }
	        }
	        Input.setPlaceholder = setPlaceholder;
	        function setReadonly(isReadonly, element, floatLabelType) {
	            if (isReadonly) {
	                ej2_base_1.attributes(element, { readonly: '' });
	            }
	            else {
	                element.removeAttribute('readonly');
	            }
	            if (!ej2_base_1.isNullOrUndefined(floatLabelType)) {
	                validateLabel(element, floatLabelType);
	            }
	        }
	        Input.setReadonly = setReadonly;
	        function setEnableRtl(isRtl, elements) {
	            if (isRtl) {
	                ej2_base_1.addClass(elements, CLASSNAMES.RTL);
	            }
	            else {
	                ej2_base_1.removeClass(elements, CLASSNAMES.RTL);
	            }
	        }
	        Input.setEnableRtl = setEnableRtl;
	        function setEnabled(isEnable, element, floatLabelType) {
	            var disabledAttrs = { 'disabled': 'disabled', 'aria-disabled': 'true' };
	            if (isEnable) {
	                element.classList.remove(CLASSNAMES.DISABLE);
	                removeAttributes(disabledAttrs, element);
	            }
	            else {
	                element.classList.add(CLASSNAMES.DISABLE);
	                addAttributes(disabledAttrs, element);
	            }
	            if (!ej2_base_1.isNullOrUndefined(floatLabelType)) {
	                validateLabel(element, floatLabelType);
	            }
	        }
	        Input.setEnabled = setEnabled;
	        function removeAttributes(attrs, element) {
	            for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
	                var key = _a[_i];
	                var parentElement = void 0;
	                parentElement = getParentNode(element);
	                if (key === 'disabled') {
	                    element.classList.remove(CLASSNAMES.DISABLE);
	                }
	                if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
	                    parentElement.classList.remove(CLASSNAMES.DISABLE);
	                }
	                if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
	                    parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
	                }
	                else {
	                    element.removeAttribute(key);
	                }
	            }
	        }
	        Input.removeAttributes = removeAttributes;
	        function addAttributes(attrs, element) {
	            for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
	                var key = _a[_i];
	                var parentElement = void 0;
	                parentElement = getParentNode(element);
	                if (key === 'disabled') {
	                    element.classList.add(CLASSNAMES.DISABLE);
	                }
	                if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
	                    parentElement.classList.add(CLASSNAMES.DISABLE);
	                }
	                if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
	                    parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = attrs[key];
	                }
	                else {
	                    element.setAttribute(key, attrs[key]);
	                }
	            }
	        }
	        Input.addAttributes = addAttributes;
	        function removeFloating(input) {
	            var container = input.container;
	            if (!ej2_base_1.isNullOrUndefined(container) && container.classList.contains(CLASSNAMES.FLOATINPUT)) {
	                var inputEle = container.querySelector('input');
	                var placeholder = container.querySelector('.' + CLASSNAMES.FLOATTEXT).textContent;
	                var clearButton = container.querySelector('.e-clear-icon') !== null;
	                ej2_base_1.detach(container.querySelector('.' + CLASSNAMES.FLOATLINE));
	                ej2_base_1.detach(container.querySelector('.' + CLASSNAMES.FLOATTEXT));
	                ej2_base_1.classList(container, [CLASSNAMES.INPUTGROUP], [CLASSNAMES.FLOATINPUT]);
	                unwireFloatingEvents(inputEle);
	                ej2_base_1.attributes(inputEle, { 'placeholder': placeholder });
	                inputEle.classList.add(CLASSNAMES.INPUT);
	                if (!clearButton) {
	                    inputEle.removeAttribute('required');
	                }
	            }
	        }
	        Input.removeFloating = removeFloating;
	        function addFloating(input, type, placeholder) {
	            var container = ej2_base_1.closest(input, '.' + CLASSNAMES.INPUTGROUP);
	            if (type !== 'Never') {
	                var customTag = container.tagName;
	                customTag = customTag !== 'DIV' && customTag !== 'SPAN' ? customTag : null;
	                var args = { element: input, floatLabelType: type, customTag: customTag, properties: { placeholder: placeholder } };
	                var iconEle = container.querySelector('.e-clear-icon');
	                var inputObj = { container: container };
	                input.classList.remove(CLASSNAMES.INPUT);
	                createFloatingInput(args, inputObj);
	                if (ej2_base_1.isNullOrUndefined(iconEle)) {
	                    iconEle = container.querySelector('.e-input-group-icon');
	                }
	                if (ej2_base_1.isNullOrUndefined(iconEle)) {
	                    container.classList.remove(CLASSNAMES.INPUTGROUP);
	                }
	                else {
	                    var floatLine = container.querySelector('.' + CLASSNAMES.FLOATLINE);
	                    var floatText = container.querySelector('.' + CLASSNAMES.FLOATTEXT);
	                    container.insertBefore(input, iconEle);
	                    container.insertBefore(floatLine, iconEle);
	                    container.insertBefore(floatText, iconEle);
	                }
	            }
	        }
	        Input.addFloating = addFloating;
	        function appendSpan(iconClass, container) {
	            var button = ej2_base_1.createElement('span', { className: iconClass });
	            container.appendChild(button);
	            if (!container.classList.contains(CLASSNAMES.INPUTGROUP)) {
	                container.classList.add(CLASSNAMES.INPUTGROUP);
	            }
	            button.addEventListener('mousedown', function () {
	                if (!container.classList.contains('e-disabled') && !container.querySelector('input').readOnly) {
	                    this.classList.add('e-input-btn-ripple');
	                }
	            });
	            button.addEventListener('mouseup', function () {
	                var ele = this;
	                setTimeout(function () { ele.classList.remove('e-input-btn-ripple'); }, 500);
	            });
	            return button;
	        }
	        Input.appendSpan = appendSpan;
	    })(Input = exports.Input || (exports.Input = {}));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, index_1, index_2) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(index_1);
	    __export(index_2);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, mask_base_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(mask_base_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, input_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ERROR = 'e-error';
	    var INPUTGROUP = 'e-input-group';
	    var FLOATINPUT = 'e-float-input';
	    var UTILMASK = 'e-utility-mask';
	    var TOPLABEL = 'e-label-top';
	    var BOTTOMLABEL = 'e-label-bottom';
	    exports.regularExpressions = {
	        '0': '[0-9]',
	        '9': '[0-9 ]',
	        '#': '[0-9 +-]',
	        'L': '[A-Za-z]',
	        '?': '[A-Za-z ]',
	        '&': '[^\x7f ]+',
	        'C': '[^\x7f]+',
	        'A': '[A-Za-z0-9]',
	        'a': '[A-Za-z0-9 ]',
	    };
	    function createMask() {
	        ej2_base_1.attributes(this.element, { 'role': 'textbox', 'autocomplete': 'off', 'autocorrect': 'off', 'autocapitalize': 'off',
	            'spellcheck': 'false', 'aria-live': 'assertive', 'aria-valuenow': '' });
	        if (this.mask) {
	            var splitMask = this.mask.split(']');
	            for (var i = 0; i < splitMask.length; i++) {
	                if (splitMask[i][splitMask[i].length - 1] === '\\') {
	                    splitMask[i] = splitMask[i] + ']';
	                    var splitInnerMask = splitMask[i].split('[');
	                    for (var j = 0; j < splitInnerMask.length; j++) {
	                        if (splitInnerMask[j][splitInnerMask[j].length - 1] === '\\') {
	                            splitInnerMask[j] = splitInnerMask[j] + '[';
	                        }
	                        pushIntoRegExpCollec.call(this, splitInnerMask[j]);
	                    }
	                }
	                else {
	                    var splitInnerMask = splitMask[i].split('[');
	                    if (splitInnerMask.length > 1) {
	                        var chkSpace = false;
	                        for (var j = 0; j < splitInnerMask.length; j++) {
	                            if (splitInnerMask[j] === '\\') {
	                                this.customRegExpCollec.push('[');
	                                this.hiddenMask += splitInnerMask[j] + '[';
	                            }
	                            else if (splitInnerMask[j] === '') {
	                                chkSpace = true;
	                            }
	                            else if ((splitInnerMask[j] !== '' && chkSpace) || j === splitInnerMask.length - 1) {
	                                this.customRegExpCollec.push('[' + splitInnerMask[j] + ']');
	                                this.hiddenMask += this.promptChar;
	                                chkSpace = false;
	                            }
	                            else {
	                                pushIntoRegExpCollec.call(this, splitInnerMask[j]);
	                            }
	                        }
	                    }
	                    else {
	                        pushIntoRegExpCollec.call(this, splitInnerMask[0]);
	                    }
	                }
	            }
	            this.escapeMaskValue = this.hiddenMask;
	            this.promptMask = this.hiddenMask.replace(/[09?LCAa#&]/g, this.promptChar);
	            if (!ej2_base_1.isNullOrUndefined(this.customCharacters)) {
	                for (var i = 0; i < this.promptMask.length; i++) {
	                    if (!ej2_base_1.isNullOrUndefined(this.customCharacters[this.promptMask[i]])) {
	                        this.promptMask = this.promptMask.replace(new RegExp(this.promptMask[i], 'g'), this.promptChar);
	                    }
	                }
	            }
	            var escapeNumber = 0;
	            if (this.hiddenMask.match(new RegExp(/\\/))) {
	                for (var i = 0; i < this.hiddenMask.length; i++) {
	                    var j = 0;
	                    if (i >= 2) {
	                        j = i;
	                    }
	                    escapeNumber = this.hiddenMask.length - this.promptMask.length;
	                    j = j - escapeNumber;
	                    if ((i > 0 && this.hiddenMask[i - 1] !== '\\') && (this.hiddenMask[i] === '>' ||
	                        this.hiddenMask[i] === '<' || this.hiddenMask[i] === '|')) {
	                        this.promptMask = this.promptMask.substring(0, j) +
	                            this.promptMask.substring((i + 1) - escapeNumber, this.promptMask.length);
	                        this.escapeMaskValue = this.escapeMaskValue.substring(0, j) +
	                            this.escapeMaskValue.substring((i + 1) - escapeNumber, this.escapeMaskValue.length);
	                    }
	                    if (this.hiddenMask[i] === '\\') {
	                        this.promptMask = this.promptMask.substring(0, j) + this.hiddenMask[i + 1] +
	                            this.promptMask.substring((i + 2) - escapeNumber, this.promptMask.length);
	                        this.escapeMaskValue = this.escapeMaskValue.substring(0, j) + this.escapeMaskValue[i + 1] +
	                            this.escapeMaskValue.substring((i + 2) - escapeNumber, this.escapeMaskValue.length);
	                    }
	                }
	            }
	            else {
	                this.promptMask = this.promptMask.replace(/[>|<]/g, '');
	                this.escapeMaskValue = this.hiddenMask.replace(/[>|<]/g, '');
	            }
	            ej2_base_1.attributes(this.element, { 'aria-invalid': 'false' });
	        }
	    }
	    exports.createMask = createMask;
	    function applyMask() {
	        setElementValue.call(this, this.promptMask);
	        setMaskValue.call(this, this.value);
	    }
	    exports.applyMask = applyMask;
	    function wireEvents() {
	        ej2_base_1.EventHandler.add(this.element, 'keydown', maskInputKeyDownHandler, this);
	        ej2_base_1.EventHandler.add(this.element, 'keypress', maskInputKeyPressHandler, this);
	        ej2_base_1.EventHandler.add(this.element, 'keyup', maskInputKeyUpHandler, this);
	        ej2_base_1.EventHandler.add(this.element, 'focus', maskInputFocusHandler, this);
	        ej2_base_1.EventHandler.add(this.element, 'blur', maskInputBlurHandler, this);
	        ej2_base_1.EventHandler.add(this.element, 'paste', maskInputPasteHandler, this);
	        ej2_base_1.EventHandler.add(this.element, 'cut', maskInputCutHandler, this);
	        ej2_base_1.EventHandler.add(this.element, 'drop', maskInputDropHandler, this);
	    }
	    exports.wireEvents = wireEvents;
	    function unwireEvents() {
	        ej2_base_1.EventHandler.remove(this.element, 'keydown', maskInputKeyDownHandler);
	        ej2_base_1.EventHandler.remove(this.element, 'keypress', maskInputKeyPressHandler);
	        ej2_base_1.EventHandler.remove(this.element, 'keyup', maskInputKeyUpHandler);
	        ej2_base_1.EventHandler.remove(this.element, 'focus', maskInputFocusHandler);
	        ej2_base_1.EventHandler.remove(this.element, 'blur', maskInputBlurHandler);
	        ej2_base_1.EventHandler.remove(this.element, 'paste', maskInputPasteHandler);
	        ej2_base_1.EventHandler.remove(this.element, 'cut', maskInputCutHandler);
	    }
	    exports.unwireEvents = unwireEvents;
	    function unstrippedValue(element) {
	        return element.value;
	    }
	    exports.unstrippedValue = unstrippedValue;
	    function strippedValue(element) {
	        var value = '';
	        var k = 0;
	        var checkMask = false;
	        if (!ej2_base_1.isNullOrUndefined(element) && !ej2_base_1.isNullOrUndefined(this) && element.value !== this.promptMask) {
	            for (var i = 0; i < this.customRegExpCollec.length; i++) {
	                if (checkMask) {
	                    checkMask = false;
	                }
	                if (this.customRegExpCollec[k] === '>' || this.customRegExpCollec[k] === '<' ||
	                    this.customRegExpCollec[k] === '|' || this.customRegExpCollec[k] === '\\') {
	                    --i;
	                    checkMask = true;
	                }
	                if (!checkMask) {
	                    if ((element.value[i] !== this.promptChar) && (!ej2_base_1.isNullOrUndefined(this.customRegExpCollec[k]) &&
	                        ((!ej2_base_1.isNullOrUndefined(this.regExpCollec[this.customRegExpCollec[k]])) ||
	                            (this.customRegExpCollec[k].length > 2 && this.customRegExpCollec[k][0] === '[' &&
	                                this.customRegExpCollec[k][this.customRegExpCollec[k].length - 1] === ']') ||
	                            (!ej2_base_1.isNullOrUndefined(this.customCharacters) &&
	                                (!ej2_base_1.isNullOrUndefined(this.customCharacters[this.customRegExpCollec[k]])))))) {
	                        value += element.value[i];
	                    }
	                }
	                ++k;
	            }
	        }
	        return value;
	    }
	    exports.strippedValue = strippedValue;
	    function pushIntoRegExpCollec(value) {
	        for (var k = 0; k < value.length; k++) {
	            this.hiddenMask += value[k];
	            if (value[k] !== '\\') {
	                this.customRegExpCollec.push(value[k]);
	            }
	        }
	    }
	    function maskInputFocusHandler(event) {
	        var _this = this;
	        if (this.mask) {
	            this.isFocus = true;
	            if (this.placeholder && this.element.value === '') {
	                setElementValue.call(this, this.promptMask);
	                this.element.setSelectionRange(0, this.element.value.length);
	                setTimeout(function () {
	                    _this.element.setSelectionRange(0, _this.element.value.length);
	                }, 1);
	            }
	        }
	    }
	    exports.maskInputFocusHandler = maskInputFocusHandler;
	    function maskInputBlurHandler(event) {
	        if (this.mask) {
	            this.isFocus = false;
	            if (this.placeholder && this.element.value === this.promptMask && this.floatLabelType !== 'Always') {
	                setElementValue.call(this, '');
	                var labelElement = this.element.parentNode.querySelector('.e-float-text');
	                if (this.floatLabelType === 'Auto' && !ej2_base_1.isNullOrUndefined(labelElement) && labelElement.classList.contains(TOPLABEL)) {
	                    ej2_base_1.removeClass([labelElement], TOPLABEL);
	                }
	            }
	        }
	    }
	    exports.maskInputBlurHandler = maskInputBlurHandler;
	    function maskInputPasteHandler(event) {
	        var _this = this;
	        if (this.mask) {
	            var sIndex_1 = this.element.selectionStart;
	            var eIndex_1 = this.element.selectionEnd;
	            var oldValue_1 = this.element.value;
	            setElementValue.call(this, '');
	            setTimeout(function () {
	                var value = _this.element.value;
	                if (_this.redoCollec.length > 0 && _this.redoCollec[0].value === _this.element.value) {
	                    value = strippedValue.call(_this, _this.element);
	                }
	                setElementValue.call(_this, oldValue_1);
	                _this.element.selectionStart = sIndex_1;
	                _this.element.selectionEnd = eIndex_1;
	                var i = 0;
	                _this.maskKeyPress = true;
	                do {
	                    validateValue.call(_this, value[i], false, null);
	                    ++i;
	                } while (i < value.length);
	                _this.maskKeyPress = false;
	            }, 1);
	        }
	    }
	    function maskInputCutHandler(event) {
	        var _this = this;
	        if (this.mask) {
	            var sIndex_2 = this.element.selectionStart;
	            var eIndex = this.element.selectionEnd;
	            this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd });
	            var value_1 = this.element.value.substring(0, sIndex_2) + this.promptMask.substring(sIndex_2, eIndex) +
	                this.element.value.substring(eIndex);
	            setTimeout(function () {
	                setElementValue.call(_this, value_1);
	                _this.element.selectionStart = _this.element.selectionEnd = sIndex_2;
	            }, 0);
	        }
	    }
	    function maskInputDropHandler(event) {
	        event.preventDefault();
	    }
	    exports.maskInputDropHandler = maskInputDropHandler;
	    function maskInputKeyDownHandler(event) {
	        var _this = this;
	        if (this.mask) {
	            if (event.keyCode !== 229) {
	                if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
	                    event.preventDefault();
	                }
	                removeMaskInputValues.call(this, event);
	            }
	            else {
	                setTimeout(function () {
	                    removeMaskInputValues.call(_this, event);
	                }, 0);
	            }
	            var startValue = this.element.value;
	            if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
	                var collec = void 0;
	                if (event.keyCode === 90 && this.undoCollec.length > 0 && startValue !== this.undoCollec[this.undoCollec.length - 1].value) {
	                    collec = this.undoCollec[this.undoCollec.length - 1];
	                    this.redoCollec.unshift({
	                        value: this.element.value, startIndex: this.element.selectionStart,
	                        endIndex: this.element.selectionEnd
	                    });
	                    setElementValue.call(this, collec.value);
	                    this.element.selectionStart = collec.startIndex;
	                    this.element.selectionEnd = collec.endIndex;
	                    this.undoCollec.splice(this.undoCollec.length - 1, 1);
	                }
	                else if (event.keyCode === 89 && this.redoCollec.length > 0 && startValue !== this.redoCollec[0].value) {
	                    collec = this.redoCollec[0];
	                    this.undoCollec.push({
	                        value: this.element.value, startIndex: this.element.selectionStart,
	                        endIndex: this.element.selectionEnd
	                    });
	                    setElementValue.call(this, collec.value);
	                    this.element.selectionStart = collec.startIndex;
	                    this.element.selectionEnd = collec.endIndex;
	                    this.redoCollec.splice(0, 1);
	                }
	            }
	        }
	    }
	    function mobileRemoveFunction() {
	        var collec;
	        var sIndex = this.element.selectionStart;
	        var eIndex = this.element.selectionEnd;
	        if (this.redoCollec.length > 0) {
	            collec = this.redoCollec[0];
	            setElementValue.call(this, collec.value);
	            if ((collec.startIndex - sIndex) === 1) {
	                this.element.selectionStart = collec.startIndex;
	                this.element.selectionEnd = collec.endIndex;
	            }
	            else {
	                this.element.selectionStart = sIndex + 1;
	                this.element.selectionEnd = eIndex + 1;
	            }
	        }
	        else {
	            setElementValue.call(this, this.promptMask);
	            this.element.selectionStart = this.element.selectionEnd = sIndex;
	        }
	    }
	    exports.mobileRemoveFunction = mobileRemoveFunction;
	    function removeMaskInputValues(event) {
	        var isRemove = false;
	        var oldEventVal;
	        var isDeleted = false;
	        if (this.element.value.length < this.promptMask.length) {
	            isRemove = true;
	            mobileRemoveFunction.call(this);
	            oldEventVal = this.element.value;
	        }
	        var initStartIndex = this.element.selectionStart;
	        var initEndIndex = this.element.selectionEnd;
	        var startIndex = this.element.selectionStart;
	        var endIndex = this.element.selectionEnd;
	        var maskValue = this.hiddenMask.replace(/[>|\\<]/g, '');
	        var curMask = maskValue[startIndex - 1];
	        var parentElement = this.element.parentNode;
	        if (isRemove || event.keyCode === 8 || event.keyCode === 46) {
	            this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: endIndex });
	            var multipleDel = false;
	            if (startIndex > 0 || ((event.keyCode === 8 || event.keyCode === 46) && startIndex < this.element.value.length
	                && ((this.element.selectionEnd - startIndex) !== this.element.value.length))) {
	                var index = startIndex;
	                if (startIndex !== endIndex) {
	                    startIndex = endIndex;
	                    if (event.keyCode === 46) {
	                        multipleDel = true;
	                    }
	                }
	                else if (event.keyCode === 46) {
	                    ++index;
	                }
	                else {
	                    --index;
	                }
	                for (var k = startIndex; (event.keyCode === 8 || isRemove || multipleDel) ? k > index : k < index; (event.keyCode === 8 || isRemove || multipleDel) ? k-- : k++) {
	                    for (var i = startIndex; (event.keyCode === 8 || isRemove || multipleDel) ? i > 0 : i < this.element.value.length; (event.keyCode === 8 || isRemove || multipleDel) ? i-- : i++) {
	                        var sIndex = void 0;
	                        if (((event.keyCode === 8 || multipleDel) && ((initStartIndex !== initEndIndex && initStartIndex !== startIndex) ||
	                            (initStartIndex === initEndIndex))) || isRemove) {
	                            curMask = maskValue[i - 1];
	                            sIndex = startIndex - 1;
	                        }
	                        else {
	                            curMask = maskValue[i];
	                            sIndex = startIndex;
	                            ++startIndex;
	                        }
	                        var oldValue = this.element.value[sIndex];
	                        if ((ej2_base_1.isNullOrUndefined(this.regExpCollec[curMask]) && (!ej2_base_1.isNullOrUndefined(this.customCharacters)
	                            && ej2_base_1.isNullOrUndefined(this.customCharacters[curMask]))
	                            && ((this.hiddenMask[sIndex] !== this.promptChar && this.customRegExpCollec[sIndex][0] !== '['
	                                && this.customRegExpCollec[sIndex][this.customRegExpCollec[sIndex].length - 1] !== ']')))
	                            || (this.promptMask[sIndex] !== this.promptChar && ej2_base_1.isNullOrUndefined(this.customCharacters))) {
	                            this.element.selectionStart = this.element.selectionEnd = sIndex;
	                            event.preventDefault();
	                            if (event.keyCode === 46 && !multipleDel) {
	                                ++this.element.selectionStart;
	                            }
	                        }
	                        else {
	                            var value = this.element.value;
	                            var prompt_1 = this.promptChar;
	                            var elementValue = value.substring(0, sIndex) + prompt_1 + value.substring(startIndex, value.length);
	                            setElementValue.call(this, elementValue);
	                            event.preventDefault();
	                            this.element.selectionStart = this.element.selectionEnd = sIndex;
	                            isDeleted = true;
	                        }
	                        startIndex = this.element.selectionStart;
	                        if ((!isDeleted && event.keyCode === 8) || multipleDel || (!isDeleted && !(event.keyCode === 46))) {
	                            sIndex = startIndex - 1;
	                        }
	                        else {
	                            sIndex = startIndex;
	                            isDeleted = false;
	                        }
	                        oldValue = this.element.value[sIndex];
	                        if (((initStartIndex !== initEndIndex) && (this.element.selectionStart === initStartIndex))
	                            || (this.promptMask[sIndex] === this.promptChar) || ((oldValue !== this.promptMask[sIndex]) &&
	                            (this.promptMask[sIndex] !== this.promptChar) && !ej2_base_1.isNullOrUndefined(this.customCharacters))) {
	                            break;
	                        }
	                    }
	                }
	            }
	            if (this.element.selectionStart === 0 && (this.element.selectionEnd === this.element.value.length)) {
	                setElementValue.call(this, this.promptMask);
	                event.preventDefault();
	                this.element.selectionStart = this.element.selectionEnd = startIndex;
	            }
	            this.redoCollec.unshift({
	                value: this.element.value, startIndex: this.element.selectionStart,
	                endIndex: this.element.selectionEnd
	            });
	            triggerMaskChangeEvent.call(this, event, oldEventVal);
	        }
	    }
	    function maskInputKeyPressHandler(event) {
	        if (this.mask) {
	            var oldValue = this.element.value;
	            if ((!event.ctrlKey) || (event.ctrlKey && event.code !== 'KeyA' && event.code !== 'KeyY'
	                && event.code !== 'KeyZ' && event.code !== 'KeyX' && event.code !== 'KeyC' && event.code !== 'KeyV')) {
	                this.maskKeyPress = true;
	                var key = event.key;
	                if (key === 'Spacebar') {
	                    key = String.fromCharCode(event.keyCode);
	                }
	                if (!key) {
	                    this.isIosInvalid = true;
	                    validateValue.call(this, String.fromCharCode(event.keyCode), event.ctrlKey, event);
	                    event.preventDefault();
	                    this.isIosInvalid = false;
	                }
	                else if (key && key.length === 1) {
	                    validateValue.call(this, key, event.ctrlKey, event);
	                    event.preventDefault();
	                }
	            }
	            triggerMaskChangeEvent.call(this, event, oldValue);
	        }
	    }
	    function triggerMaskChangeEvent(event, oldValue) {
	        if (!ej2_base_1.isNullOrUndefined(this.changeEventArgs)) {
	            var eventArgs = {};
	            this.changeEventArgs = { value: this.element.value, maskedValue: this.element.value, isInteraction: false };
	            if (this.mask) {
	                this.changeEventArgs.value = strippedValue.call(this, this.element);
	            }
	            if (!ej2_base_1.isNullOrUndefined(event)) {
	                this.changeEventArgs.isInteraction = true;
	                this.changeEventArgs.event = event;
	            }
	            ej2_base_1.merge(eventArgs, this.changeEventArgs);
	            this.trigger('change', eventArgs);
	        }
	        ej2_base_1.attributes(this.element, { 'aria-valuenow': this.element.value });
	    }
	    function maskInputKeyUpHandler(event) {
	        if (this.mask) {
	            var collec = void 0;
	            if (!this.maskKeyPress && event.keyCode === 229) {
	                var oldEventVal = void 0;
	                if (this.element.value.length === 1) {
	                    this.element.value = this.element.value + this.promptMask;
	                    this.element.setSelectionRange(1, 1);
	                }
	                if (this.element.value.length > this.promptMask.length) {
	                    var startIndex = this.element.selectionStart;
	                    var addedValues = this.element.value.length - this.promptMask.length;
	                    var val_1 = this.element.value.substring(startIndex - addedValues, startIndex);
	                    if (this.undoCollec.length > 0) {
	                        collec = this.undoCollec[this.undoCollec.length - 1];
	                        var startIndex_1 = this.element.selectionStart;
	                        oldEventVal = collec.value;
	                        var oldVal = collec.value.substring(startIndex_1 - addedValues, startIndex_1);
	                        collec = this.redoCollec[0];
	                        val_1 = val_1.trim();
	                        if (oldVal !== val_1 && collec.value.substring(startIndex_1 - addedValues, startIndex_1) !== val_1) {
	                            validateValue.call(this, val_1, event.ctrlKey, event);
	                        }
	                    }
	                    else {
	                        oldEventVal = this.promptMask;
	                        validateValue.call(this, val_1, event.ctrlKey, event);
	                    }
	                    this.maskKeyPress = false;
	                    triggerMaskChangeEvent.call(this, event, oldEventVal);
	                }
	            }
	            else {
	                removeMaskError.call(this);
	            }
	            var val = strippedValue.call(this, this.element);
	            if (!((this.element.selectionStart === 0) && (this.promptMask === this.element.value) && val === '')) {
	                this.prevValue = val;
	                this.value = val;
	            }
	        }
	        else {
	            triggerMaskChangeEvent.call(this, event);
	            this.value = this.element.value;
	        }
	    }
	    function mobileSwipeCheck(key) {
	        if (key.length > 1 && ((this.promptMask.length + key.length) < this.element.value.length)) {
	            var elementValue = this.redoCollec[0].value.substring(0, this.redoCollec[0].startIndex) + key +
	                this.redoCollec[0].value.substring(this.redoCollec[0].startIndex, this.redoCollec[0].value.length);
	            setElementValue.call(this, elementValue);
	            this.element.selectionStart = this.element.selectionEnd = this.redoCollec[0].startIndex + key.length;
	        }
	        this.element.selectionStart = this.element.selectionStart - key.length;
	        this.element.selectionEnd = this.element.selectionEnd - key.length;
	    }
	    function validateValue(key, isCtrlKey, event) {
	        if (!this.maskKeyPress) {
	            mobileSwipeCheck.call(this, key);
	        }
	        var startIndex = this.element.selectionStart;
	        var initStartIndex = startIndex;
	        var endIndex = this.element.selectionEnd;
	        var curMask;
	        var allowText = false;
	        var value = this.element.value;
	        var eventOldVal;
	        var prevSupport = false;
	        for (var k = 0; k < key.length; k++) {
	            var keyValue = key[k];
	            startIndex = this.element.selectionStart;
	            endIndex = this.element.selectionEnd;
	            if (!this.maskKeyPress && initStartIndex === startIndex) {
	                startIndex = startIndex + k;
	            }
	            if ((!this.maskKeyPress || startIndex < this.promptMask.length)) {
	                for (var i = startIndex; i < this.promptMask.length; i++) {
	                    var maskValue = this.escapeMaskValue;
	                    curMask = maskValue[startIndex];
	                    if ((ej2_base_1.isNullOrUndefined(this.regExpCollec[curMask]) && (ej2_base_1.isNullOrUndefined(this.customCharacters)
	                        || (!ej2_base_1.isNullOrUndefined(this.customCharacters) && ej2_base_1.isNullOrUndefined(this.customCharacters[curMask])))
	                        && ((this.hiddenMask[startIndex] !== this.promptChar && this.customRegExpCollec[startIndex][0] !== '['
	                            && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] !== ']')))
	                        || ((this.promptMask[startIndex] !== this.promptChar) && ej2_base_1.isNullOrUndefined(this.customCharacters))
	                        || (this.promptChar === curMask && this.escapeMaskValue === this.mask)) {
	                        this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
	                        startIndex = this.element.selectionStart;
	                        curMask = this.hiddenMask[startIndex];
	                    }
	                }
	                if (!ej2_base_1.isNullOrUndefined(this.customCharacters) && !ej2_base_1.isNullOrUndefined(this.customCharacters[curMask])) {
	                    var customValStr = this.customCharacters[curMask];
	                    var customValArr = customValStr.split(',');
	                    for (var i = 0; i < customValArr.length; i++) {
	                        if (keyValue.match(new RegExp('[' + customValArr[i] + ']'))) {
	                            allowText = true;
	                            break;
	                        }
	                    }
	                }
	                else if (!ej2_base_1.isNullOrUndefined(this.regExpCollec[curMask]) && keyValue.match(new RegExp(this.regExpCollec[curMask]))
	                    && this.promptMask[startIndex] === this.promptChar) {
	                    allowText = true;
	                }
	                else if (this.promptMask[startIndex] === this.promptChar && this.customRegExpCollec[startIndex][0] === '['
	                    && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] === ']'
	                    && keyValue.match(new RegExp(this.customRegExpCollec[startIndex]))) {
	                    allowText = true;
	                }
	                if ((!this.maskKeyPress || startIndex < this.hiddenMask.length) && allowText) {
	                    if (k === 0) {
	                        if (this.maskKeyPress) {
	                            this.undoCollec.push({ value: value, startIndex: startIndex, endIndex: startIndex });
	                        }
	                        else {
	                            var sIndex = this.element.selectionStart;
	                            var eIndex = this.element.selectionEnd;
	                            if (this.redoCollec.length > 0) {
	                                eventOldVal = this.redoCollec[0].value;
	                                setElementValue.call(this, eventOldVal);
	                                this.undoCollec.push(this.redoCollec[0]);
	                            }
	                            else {
	                                this.undoCollec.push({ value: this.promptMask, startIndex: startIndex, endIndex: startIndex });
	                                eventOldVal = this.promptMask;
	                                setElementValue.call(this, eventOldVal);
	                            }
	                            this.element.selectionStart = sIndex;
	                            this.element.selectionEnd = eIndex;
	                        }
	                    }
	                    startIndex = this.element.selectionStart;
	                    applySupportedValues.call(this, event, startIndex, keyValue, eventOldVal);
	                    prevSupport = true;
	                    if (k === key.length - 1) {
	                        this.redoCollec.unshift({
	                            value: this.element.value, startIndex: this.element.selectionStart,
	                            endIndex: this.element.selectionEnd
	                        });
	                    }
	                    allowText = false;
	                }
	                else {
	                    startIndex = this.element.selectionStart;
	                    preventUnsupportedValues.call(this, event, startIndex, initStartIndex, key, isCtrlKey, prevSupport);
	                }
	                if (k === key.length - 1 && !allowText) {
	                    if (!ej2_base_1.Browser.isAndroid || (ej2_base_1.Browser.isAndroid && startIndex < this.promptMask.length)) {
	                        this.redoCollec.unshift({
	                            value: this.element.value,
	                            startIndex: this.element.selectionStart,
	                            endIndex: this.element.selectionEnd
	                        });
	                    }
	                }
	            }
	            else {
	                if (key.length === 1 && !isCtrlKey && !ej2_base_1.isNullOrUndefined(event)) {
	                    addMaskErrorClass.call(this);
	                }
	            }
	        }
	    }
	    function applySupportedValues(event, startIndex, keyValue, eventOldVal) {
	        if (this.hiddenMask.length > this.promptMask.length) {
	            keyValue = changeToLowerUpperCase.call(this, keyValue, this.element.value);
	        }
	        var value = this.element.value;
	        var elementValue = value.substring(0, startIndex) + keyValue + value.substring(startIndex + 1, value.length);
	        setElementValue.call(this, elementValue);
	        this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
	        triggerMaskChangeEvent.call(this, event, eventOldVal);
	    }
	    function preventUnsupportedValues(event, sIdx, idx, key, ctrl, chkSupport) {
	        if (!this.maskKeyPress) {
	            var eventOldVal = void 0;
	            var value = this.element.value;
	            if (sIdx >= this.promptMask.length) {
	                setElementValue.call(this, value.substring(0, sIdx));
	            }
	            else {
	                if (idx === sIdx) {
	                    setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx + 1, value.length));
	                }
	                else {
	                    if (this.promptMask.length === this.element.value.length) {
	                        setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx, value.length));
	                    }
	                    else {
	                        setElementValue.call(this, value.substring(0, idx) + value.substring(idx + 1, value.length));
	                    }
	                }
	                this.element.selectionStart = this.element.selectionEnd = (chkSupport ||
	                    this.element.value[idx] !== this.promptChar) ? sIdx : idx;
	            }
	            eventOldVal = this.element.value;
	            triggerMaskChangeEvent.call(this, event, eventOldVal);
	            addMaskErrorClass.call(this);
	        }
	        if (key.length === 1 && !ctrl && !ej2_base_1.isNullOrUndefined(event)) {
	            addMaskErrorClass.call(this);
	        }
	    }
	    function addMaskErrorClass() {
	        var _this = this;
	        var parentElement = this.element.parentNode;
	        var timer = 200;
	        if (parentElement.classList.contains(INPUTGROUP) || parentElement.classList.contains(FLOATINPUT)) {
	            ej2_base_1.addClass([parentElement], ERROR);
	        }
	        else {
	            ej2_base_1.addClass([this.element], ERROR);
	        }
	        if (this.isIosInvalid === true) {
	            timer = 400;
	        }
	        ej2_base_1.attributes(this.element, { 'aria-invalid': 'true' });
	        setTimeout(function () {
	            if (!_this.maskKeyPress) {
	                removeMaskError.call(_this);
	            }
	        }, timer);
	    }
	    function removeMaskError() {
	        var parentElement = this.element.parentNode;
	        ej2_base_1.removeClass([parentElement], ERROR);
	        ej2_base_1.removeClass([this.element], ERROR);
	        ej2_base_1.attributes(this.element, { 'aria-invalid': 'false' });
	    }
	    function changeToLowerUpperCase(key, value) {
	        var promptMask;
	        var i;
	        var j = 0;
	        var curVal = value;
	        var caseCount = 0;
	        for (i = 0; i < this.hiddenMask.length; i++) {
	            if (this.hiddenMask[i] === '\\') {
	                promptMask = curVal.substring(0, i) + '\\' + curVal.substring(i, curVal.length);
	            }
	            if (this.hiddenMask[i] === '>' || this.hiddenMask[i] === '<' || this.hiddenMask[i] === '|') {
	                if (this.hiddenMask[i] !== curVal[i]) {
	                    promptMask = curVal.substring(0, i) + this.hiddenMask[i] + curVal.substring(i, curVal.length);
	                }
	                ++caseCount;
	            }
	            if (promptMask) {
	                if (((promptMask[i] === this.promptChar) && (i > this.element.selectionStart)) ||
	                    (this.element.value.indexOf(this.promptChar) < 0 && (this.element.selectionStart + caseCount) === i)) {
	                    caseCount = 0;
	                    break;
	                }
	                curVal = promptMask;
	            }
	        }
	        while (i >= 0 && promptMask) {
	            if (i === 0 || promptMask[i - 1] !== '\\') {
	                var val = this.element.value;
	                if (promptMask[i] === '>') {
	                    key = key.toUpperCase();
	                    break;
	                }
	                else if (promptMask[i] === '<') {
	                    key = key.toLowerCase();
	                    break;
	                }
	                else if (promptMask[i] === '|') {
	                    break;
	                }
	            }
	            --i;
	        }
	        return key;
	    }
	    function setMaskValue(val) {
	        if (this.mask && !ej2_base_1.isNullOrUndefined(val) && (val === '' || this.prevValue !== val)) {
	            this.maskKeyPress = true;
	            setElementValue.call(this, this.promptMask);
	            if (val !== '') {
	                this.element.selectionStart = 0;
	                this.element.selectionEnd = 0;
	            }
	            for (var i = 0; i < val.length; i++) {
	                validateValue.call(this, val[i], false, null);
	            }
	            this.value = strippedValue.call(this, this.element);
	            this.maskKeyPress = false;
	            var labelElement = this.element.parentNode.querySelector('.e-float-text');
	            if (this.element.value === this.promptMask && this.floatLabelType === 'Auto' &&
	                !ej2_base_1.isNullOrUndefined(labelElement) && labelElement.classList.contains(TOPLABEL) && !this.isFocus) {
	                ej2_base_1.removeClass([labelElement], TOPLABEL);
	                ej2_base_1.addClass([labelElement], BOTTOMLABEL);
	                setElementValue.call(this, '');
	            }
	        }
	    }
	    exports.setMaskValue = setMaskValue;
	    function setElementValue(val, element) {
	        if (!this.isFocus && this.floatLabelType === 'Auto' && ej2_base_1.isNullOrUndefined(this.value)) {
	            val = '';
	        }
	        input_1.Input.setValue(val, (element ? element : this.element), this.floatLabelType);
	    }
	    exports.setElementValue = setElementValue;
	    function maskInput(args) {
	        var inputEle = getMaskInput(args);
	        applyMask.call(inputEle);
	        var val = strippedValue.call(this, this.element);
	        this.prevValue = val;
	        this.value = val;
	        if (args.mask) {
	            unwireEvents.call(inputEle);
	            wireEvents.call(inputEle);
	        }
	    }
	    exports.maskInput = maskInput;
	    function getMaskInput(args) {
	        ej2_base_1.addClass([args.element], UTILMASK);
	        var inputEle = {
	            element: args.element,
	            mask: args.mask,
	            promptMask: '',
	            hiddenMask: '',
	            escapeMaskValue: '',
	            promptChar: args.promptChar ? (args.promptChar.length > 1) ? args.promptChar = args.promptChar[0]
	                : args.promptChar : '_',
	            value: args.value ? args.value : null,
	            regExpCollec: exports.regularExpressions,
	            customRegExpCollec: [],
	            customCharacters: args.customCharacters,
	            undoCollec: [],
	            redoCollec: [],
	            maskKeyPress: false,
	            prevValue: ''
	        };
	        createMask.call(inputEle);
	        return inputEle;
	    }
	    function getVal(args) {
	        return strippedValue.call(getUtilMaskEle(args), args.element);
	    }
	    exports.getVal = getVal;
	    function getMaskedVal(args) {
	        return unstrippedValue.call(getUtilMaskEle(args), args.element);
	    }
	    exports.getMaskedVal = getMaskedVal;
	    function getUtilMaskEle(args) {
	        var value = '';
	        var inputEle;
	        if (!ej2_base_1.isNullOrUndefined(args) && args.element.classList.contains(UTILMASK)) {
	            inputEle = getMaskInput(args);
	        }
	        return inputEle;
	    }
	    var MaskUndo = (function () {
	        function MaskUndo() {
	        }
	        return MaskUndo;
	    }());
	    exports.MaskUndo = MaskUndo;
	    var maskUndo = new MaskUndo();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, maskedtextbox_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(maskedtextbox_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(4), __webpack_require__(6), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, input_1, index_1, index_2) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ROOT = 'e-widget e-mask';
	    var INPUT = 'e-input';
	    var MaskedTextBox = (function (_super) {
	        __extends(MaskedTextBox, _super);
	        function MaskedTextBox(options, element) {
	            var _this = _super.call(this, options, element) || this;
	            _this.promptMask = '';
	            _this.hiddenMask = '';
	            _this.escapeMaskValue = '';
	            _this.regExpCollec = index_1.regularExpressions;
	            _this.customRegExpCollec = [];
	            _this.undoCollec = [];
	            _this.redoCollec = [];
	            _this.changeEventArgs = {};
	            _this.maskKeyPress = false;
	            _this.isFocus = false;
	            _this.isInitial = false;
	            _this.isIosInvalid = false;
	            return _this;
	        }
	        MaskedTextBox.prototype.getModuleName = function () {
	            return 'maskedtextbox';
	        };
	        MaskedTextBox.prototype.preRender = function () {
	            var ejInstance = ej2_base_2.getValue('ej2_instances', this.element);
	            this.cloneElement = this.element.cloneNode(true);
	            this.angularTagName = null;
	            if (this.element.tagName === 'EJ-MASKEDTEXTBOX') {
	                this.angularTagName = this.element.tagName;
	                var input = ej2_base_2.createElement('input');
	                for (var i = 0; i < this.element.attributes.length; i++) {
	                    input.setAttribute(this.element.attributes[i].nodeName, this.element.attributes[i].nodeValue);
	                    input.innerHTML = this.element.innerHTML;
	                }
	                this.element.parentNode.appendChild(input);
	                this.element.parentNode.removeChild(this.element);
	                this.element = input;
	                ej2_base_2.setValue('ej2_instances', ejInstance, this.element);
	            }
	        };
	        MaskedTextBox.prototype.getPersistData = function () {
	            var keyEntity = ['value'];
	            return this.addOnPersist(keyEntity);
	        };
	        MaskedTextBox.prototype.render = function () {
	            if (this.element.tagName.toLowerCase() === 'input') {
	                if (this.floatLabelType === 'Never') {
	                    ej2_base_2.addClass([this.element], INPUT);
	                }
	                this.createWrapper();
	                this.isInitial = true;
	                this.resetMaskedTextBox();
	                this.isInitial = false;
	                this.setMaskPlaceholder(true);
	                this.setWidth(this.width);
	            }
	        };
	        MaskedTextBox.prototype.resetMaskedTextBox = function () {
	            this.promptMask = '';
	            this.hiddenMask = '';
	            this.escapeMaskValue = '';
	            this.customRegExpCollec = [];
	            this.undoCollec = [];
	            this.redoCollec = [];
	            if (this.promptChar.length > 1) {
	                this.promptChar = this.promptChar[0];
	            }
	            index_1.createMask.call(this);
	            index_1.applyMask.call(this);
	            var val = index_1.strippedValue.call(this, this.element);
	            this.prevValue = val;
	            this.value = val;
	            if (!this.isInitial) {
	                index_1.unwireEvents.call(this);
	            }
	            index_1.wireEvents.call(this);
	        };
	        MaskedTextBox.prototype.setMaskPlaceholder = function (setVal) {
	            if (this.placeholder) {
	                input_1.Input.setPlaceholder(this.placeholder, this.element);
	                if (this.element.value === this.promptMask && setVal && this.floatLabelType !== 'Always') {
	                    index_2.setElementValue.call(this, '');
	                }
	            }
	        };
	        MaskedTextBox.prototype.setCssClass = function (cssClass, element) {
	            if (cssClass) {
	                ej2_base_2.addClass(element, cssClass);
	            }
	        };
	        MaskedTextBox.prototype.setWidth = function (width) {
	            if (!ej2_base_2.isNullOrUndefined(width)) {
	                this.element.style.width = ej2_base_2.formatUnit(width);
	            }
	        };
	        MaskedTextBox.prototype.createWrapper = function () {
	            this.inputObj = input_1.Input.createInput({
	                element: this.element,
	                customTag: this.angularTagName,
	                floatLabelType: this.floatLabelType,
	                properties: {
	                    enableRtl: this.enableRtl,
	                    enabled: this.enabled,
	                    placeholder: this.placeholder
	                }
	            });
	            this.inputObj.container.setAttribute('class', ROOT + ' ' + this.inputObj.container.getAttribute('class'));
	        };
	        MaskedTextBox.prototype.onPropertyChanged = function (newProp, oldProp) {
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'value':
	                        index_2.setMaskValue.call(this, this.value);
	                        if (this.placeholder) {
	                            this.setMaskPlaceholder(false);
	                        }
	                        break;
	                    case 'placeholder':
	                        this.setMaskPlaceholder(true);
	                        break;
	                    case 'width':
	                        this.setWidth(newProp.width);
	                        break;
	                    case 'cssClass':
	                        this.setCssClass(newProp.cssClass, [this.inputObj.container]);
	                        break;
	                    case 'enabled':
	                        input_1.Input.setEnabled(newProp.enabled, this.element);
	                        break;
	                    case 'enableRtl':
	                        input_1.Input.setEnableRtl(newProp.enableRtl, [this.inputObj.container]);
	                        break;
	                    case 'customCharacters':
	                        this.customCharacters = newProp.customCharacters;
	                        this.resetMaskedTextBox();
	                        break;
	                    case 'mask':
	                        var strippedValue_1 = this.value;
	                        this.mask = newProp.mask;
	                        this.updateValue(strippedValue_1);
	                        break;
	                    case 'promptChar':
	                        if (newProp.promptChar.length > 1) {
	                            newProp.promptChar = newProp.promptChar[0];
	                        }
	                        if (newProp.promptChar) {
	                            this.promptChar = newProp.promptChar;
	                        }
	                        else {
	                            this.promptChar = '_';
	                        }
	                        var value = this.element.value.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
	                        if (this.promptMask === this.element.value) {
	                            value = this.promptMask.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
	                        }
	                        this.promptMask = this.promptMask.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
	                        this.undoCollec = this.redoCollec = [];
	                        index_2.setElementValue.call(this, value);
	                        break;
	                }
	            }
	        };
	        MaskedTextBox.prototype.updateValue = function (strippedVal) {
	            this.resetMaskedTextBox();
	            index_2.setMaskValue.call(this, strippedVal);
	        };
	        MaskedTextBox.prototype.getMaskedValue = function () {
	            return index_1.unstrippedValue.call(this, this.element);
	        };
	        MaskedTextBox.prototype.destroy = function () {
	            index_1.unwireEvents.call(this);
	            this.inputObj.container.parentElement.appendChild(this.cloneElement);
	            ej2_base_2.detach(this.inputObj.container);
	            _super.prototype.destroy.call(this);
	        };
	        return MaskedTextBox;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_1.Property(null)
	    ], MaskedTextBox.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property(null)
	    ], MaskedTextBox.prototype, "width", void 0);
	    __decorate([
	        ej2_base_1.Property(null)
	    ], MaskedTextBox.prototype, "placeholder", void 0);
	    __decorate([
	        ej2_base_1.Property('Never')
	    ], MaskedTextBox.prototype, "floatLabelType", void 0);
	    __decorate([
	        ej2_base_1.Property(true)
	    ], MaskedTextBox.prototype, "enabled", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], MaskedTextBox.prototype, "enablePersistence", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], MaskedTextBox.prototype, "enableRtl", void 0);
	    __decorate([
	        ej2_base_1.Property(null)
	    ], MaskedTextBox.prototype, "mask", void 0);
	    __decorate([
	        ej2_base_1.Property('_')
	    ], MaskedTextBox.prototype, "promptChar", void 0);
	    __decorate([
	        ej2_base_1.Property(null)
	    ], MaskedTextBox.prototype, "value", void 0);
	    __decorate([
	        ej2_base_1.Property(null)
	    ], MaskedTextBox.prototype, "customCharacters", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], MaskedTextBox.prototype, "created", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], MaskedTextBox.prototype, "destroyed", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], MaskedTextBox.prototype, "change", void 0);
	    MaskedTextBox = __decorate([
	        ej2_base_1.NotifyPropertyChanges
	    ], MaskedTextBox);
	    exports.MaskedTextBox = MaskedTextBox;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, input_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(input_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, form_validator_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(form_validator_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var VALIDATE_EMAIL = new RegExp('^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,5}' +
	        '|[.]{1}[a-zA-Z]{2,4}[.]{1}[a-zA-Z]{2,4})$');
	    var VALIDATE_URL = new RegExp('^((ftp|http|https):\/\/)?www\.([A-z]{2,})\.([A-z]{2,})$');
	    var VALIDATE_DATE_ISO = new RegExp('^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$');
	    var VALIDATE_DIGITS = new RegExp('^[0-9]*$');
	    var VALIDATE_PHONE = new RegExp('^[+]?[0-9]{9,13}$');
	    var VALIDATE_CREDITCARD = new RegExp('^\\d{13,16}$');
	    var ErrorOption;
	    (function (ErrorOption) {
	        ErrorOption[ErrorOption["Message"] = 0] = "Message";
	        ErrorOption[ErrorOption["Label"] = 1] = "Label";
	    })(ErrorOption = exports.ErrorOption || (exports.ErrorOption = {}));
	    var FormValidator = FormValidator_1 = (function (_super) {
	        __extends(FormValidator, _super);
	        function FormValidator(element, options) {
	            var _this = _super.call(this, options, element) || this;
	            _this.validated = [];
	            _this.errorRules = [];
	            _this.allowSubmit = false;
	            _this.required = 'required';
	            _this.infoElement = null;
	            _this.inputElement = null;
	            _this.selectQuery = 'input:not([type=reset]):not([type=button]), select, textarea';
	            _this.defaultMessages = {
	                required: 'This field is required.',
	                email: 'Please enter a valid email address.',
	                url: 'Please enter a valid URL.',
	                date: 'Please enter a valid date.',
	                dateIso: 'Please enter a valid date ( ISO ).',
	                creditcard: 'Please enter valid card number',
	                number: 'Please enter a valid number.',
	                digits: 'Please enter only digits.',
	                maxLength: 'Please enter no more than {0} characters.',
	                minLength: 'Please enter at least {0} characters.',
	                rangeLength: 'Please enter a value between {0} and {1} characters long.',
	                range: 'Please enter a value between {0} and {1}.',
	                max: 'Please enter a value less than or equal to {0}.',
	                min: 'Please enter a value greater than or equal to {0}.',
	                regex: 'Please enter a correct value.',
	                tel: 'Please enter a valid phone number.',
	                pattern: 'Please enter a correct pattern value.',
	                equalTo: 'Please enter the valid match text',
	            };
	            element = typeof element === 'string' ? ej2_base_1.select(element, document) : element;
	            if (_this.element != null) {
	                _this.element.setAttribute('novalidate', '');
	                _this.inputElements = ej2_base_1.selectAll(_this.selectQuery, _this.element);
	                _this.createHTML5Rules();
	                _this.wireEvents();
	            }
	            else {
	                return undefined;
	            }
	            return _this;
	        }
	        FormValidator.prototype.addRules = function (name, rules) {
	            if (this.rules.hasOwnProperty(name)) {
	                ej2_base_2.extend(this.rules[name], rules, {});
	            }
	            else {
	                this.rules[name] = rules;
	            }
	        };
	        FormValidator.prototype.removeRules = function (name, rules) {
	            if (!name && !rules) {
	                this.rules = {};
	            }
	            else if (this.rules[name] && !rules) {
	                delete this.rules[name];
	            }
	            else if (!ej2_base_2.isNullOrUndefined(this.rules[name] && rules)) {
	                for (var i = 0; i < rules.length; i++) {
	                    delete this.rules[name][rules[i]];
	                }
	            }
	            else {
	                return;
	            }
	        };
	        FormValidator.prototype.validate = function (selected) {
	            var rules = Object.keys(this.rules);
	            if (selected && rules.length) {
	                this.validateRules(selected);
	                return rules.indexOf(selected) !== -1 && this.errorRules.filter(function (data) {
	                    return data.name === selected;
	                }).length === 0;
	            }
	            else {
	                for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
	                    var name_1 = rules_1[_i];
	                    this.validateRules(name_1);
	                }
	                return this.errorRules.length === 0;
	            }
	        };
	        FormValidator.prototype.reset = function () {
	            this.errorRules = [];
	            this.validated = [];
	            this.element.reset();
	            var elements = ej2_base_1.selectAll(this.selectQuery, this.element);
	            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
	                var element = elements_1[_i];
	                var input = element;
	                input.removeAttribute('aria-invalid');
	                input.classList.remove(this.errorClass);
	                if (input.name.length > 0) {
	                    this.getInputElement(input.name);
	                    this.getErrorElement(input.name);
	                    this.hideMessage(input.name);
	                }
	                input.classList.remove(this.validClass);
	            }
	        };
	        FormValidator.prototype.getInputElement = function (name) {
	            this.inputElement = (ej2_base_1.select('[name=' + name + ']', this.element));
	            return this.inputElement;
	        };
	        FormValidator.prototype.destroy = function () {
	            this.reset();
	            this.unwireEvents();
	            this.rules = {};
	            var elements = ej2_base_1.selectAll('.' + this.errorClass + ', .' + this.validClass, this.element);
	            for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
	                var element = elements_2[_i];
	                element.remove();
	            }
	            _super.prototype.destroy.call(this);
	        };
	        FormValidator.prototype.onPropertyChanged = function (newProp, oldProp) {
	        };
	        ;
	        FormValidator.prototype.getModuleName = function () {
	            return 'formValidator';
	        };
	        FormValidator.prototype.createHTML5Rules = function () {
	            var defRules = ['required', 'regex', 'rangeLength', 'maxLength', 'minLength', 'dateIso', 'digits', 'pattern',
	                'data-val-required', 'type', 'data-validation', 'min', 'max', 'range', 'equalTo', 'data-val-minlength-min',
	                'data-val-equalto-other', 'data-val-maxlength-max', 'data-val-range-min', 'data-val-regex-pattern', 'data-val-length-max',
	                'data-val-creditcard', 'data-val-phone'];
	            var acceptedTypes = ['email', 'url', 'date', 'number', 'tel'];
	            for (var _i = 0, _a = (this.inputElements); _i < _a.length; _i++) {
	                var input = _a[_i];
	                var allRule = {};
	                for (var _b = 0, defRules_1 = defRules; _b < defRules_1.length; _b++) {
	                    var rule = defRules_1[_b];
	                    if (input.getAttribute(rule) !== null) {
	                        switch (rule) {
	                            case 'required':
	                                this.defRule(input, allRule, rule, input.required);
	                                break;
	                            case 'data-validation':
	                                rule = input.getAttribute(rule);
	                                this.defRule(input, allRule, rule, true);
	                                break;
	                            case 'type':
	                                if (acceptedTypes.indexOf(input.type) !== -1) {
	                                    this.defRule(input, allRule, input.type, true);
	                                }
	                                break;
	                            case 'rangeLength':
	                            case 'range':
	                                this.defRule(input, allRule, rule, JSON.parse(input.getAttribute(rule)));
	                                break;
	                            case 'equalTo':
	                                var id = input.getAttribute(rule);
	                                this.defRule(input, allRule, rule, id);
	                                break;
	                            default:
	                                if (input.getAttribute('data-val') === 'true') {
	                                    this.annotationRule(input, allRule, rule, input.getAttribute(rule));
	                                }
	                                else {
	                                    this.defRule(input, allRule, rule, input.getAttribute(rule));
	                                }
	                        }
	                    }
	                }
	                if (Object.keys(allRule).length !== 0) {
	                    this.addRules(input.name, allRule);
	                }
	            }
	        };
	        FormValidator.prototype.annotationRule = function (input, ruleCon, ruleName, value) {
	            var annotationRule = ruleName.split('-');
	            var rulesList = ['required', 'creditcard', 'phone', 'maxlength', 'minlength', 'range', 'regex', 'equalto'];
	            var ruleFirstName = annotationRule[annotationRule.length - 1];
	            var ruleSecondName = annotationRule[annotationRule.length - 2];
	            if (rulesList.indexOf(ruleFirstName) !== -1) {
	                switch (ruleFirstName) {
	                    case 'required':
	                        this.defRule(input, ruleCon, 'required', value);
	                        break;
	                    case 'creditcard':
	                        this.defRule(input, ruleCon, 'creditcard', value);
	                        break;
	                    case 'phone':
	                        this.defRule(input, ruleCon, 'tel', value);
	                        break;
	                }
	            }
	            else if (rulesList.indexOf(ruleSecondName) !== -1) {
	                switch (ruleSecondName) {
	                    case 'maxlength':
	                        this.defRule(input, ruleCon, 'maxLength', value);
	                        break;
	                    case 'minlength':
	                        this.defRule(input, ruleCon, 'minLength', value);
	                        break;
	                    case 'range':
	                        var minvalue = input.getAttribute('data-val-range-min');
	                        var maxvalue = input.getAttribute('data-val-range-max');
	                        this.defRule(input, ruleCon, 'range', [minvalue, maxvalue]);
	                        break;
	                    case 'equalto':
	                        var id = input.getAttribute(ruleName).split('.');
	                        this.defRule(input, ruleCon, 'equalTo', id[id.length - 1]);
	                        break;
	                    case 'regex':
	                        this.defRule(input, ruleCon, 'regex', value);
	                        break;
	                }
	            }
	        };
	        FormValidator.prototype.defRule = function (input, ruleCon, ruleName, value) {
	            var message = input.getAttribute('data-' + ruleName + '-message');
	            var annotationMessage = input.getAttribute('data-val-' + ruleName);
	            if (message) {
	                value = [value, message];
	            }
	            else if (annotationMessage) {
	                value = [value, annotationMessage];
	            }
	            ruleCon[ruleName] = value;
	        };
	        FormValidator.prototype.wireEvents = function () {
	            for (var _i = 0, _a = (this.inputElements); _i < _a.length; _i++) {
	                var input = _a[_i];
	                if (FormValidator_1.isCheckable(input)) {
	                    ej2_base_2.EventHandler.add(input, 'click', this.clickHandler, this);
	                }
	                else if (input.tagName === 'SELECT') {
	                    ej2_base_2.EventHandler.add(input, 'change', this.changeHandler, this);
	                }
	                else {
	                    ej2_base_2.EventHandler.add(input, 'focusout', this.focusOutHandler, this);
	                    ej2_base_2.EventHandler.add(input, 'keyup', this.keyUpHandler, this);
	                }
	            }
	            ej2_base_2.EventHandler.add(this.element, 'submit', this.submitHandler, this);
	        };
	        FormValidator.prototype.unwireEvents = function () {
	            for (var _i = 0, _a = (this.inputElements); _i < _a.length; _i++) {
	                var input = _a[_i];
	                ej2_base_2.EventHandler.clearEvents(input);
	            }
	            ej2_base_2.EventHandler.remove(this.element, 'submit', this.submitHandler);
	        };
	        FormValidator.prototype.focusOutHandler = function (e) {
	            this.trigger('focusout', e);
	            var element = e.target;
	            if (this.rules[element.name]) {
	                if (this.rules[element.name][this.required] || element.value.length > 0) {
	                    this.validate(element.name);
	                }
	                else if (this.validated.indexOf(element.name) === -1) {
	                    this.validated.push(element.name);
	                }
	            }
	        };
	        FormValidator.prototype.keyUpHandler = function (e) {
	            this.trigger('keyup', e);
	            var element = e.target;
	            var excludeKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
	            if (e.which === 9 && (!this.rules[element.name] || (this.rules[element.name] && !this.rules[element.name][this.required]))) {
	                return;
	            }
	            if (this.validated.indexOf(element.name) !== -1 && this.rules[element.name] && excludeKeys.indexOf(e.which) === -1) {
	                this.validate(element.name);
	            }
	        };
	        FormValidator.prototype.clickHandler = function (e) {
	            this.trigger('click', e);
	            var element = e.target;
	            if (element.type !== 'submit') {
	                this.validate(element.name);
	            }
	            else if (element.getAttribute('formnovalidate') !== null) {
	                this.allowSubmit = true;
	            }
	        };
	        FormValidator.prototype.changeHandler = function (e) {
	            this.trigger('change', e);
	            var element = e.target;
	            this.validate(element.name);
	        };
	        FormValidator.prototype.submitHandler = function (e) {
	            this.trigger('submit', e);
	            if (!this.allowSubmit && !this.validate()) {
	                e.preventDefault();
	            }
	            else {
	                this.allowSubmit = false;
	            }
	        };
	        FormValidator.prototype.validateRules = function (name) {
	            if (!this.rules[name]) {
	                return;
	            }
	            var rules = Object.keys(this.rules[name]);
	            this.getInputElement(name);
	            this.getErrorElement(name);
	            for (var _i = 0, rules_2 = rules; _i < rules_2.length; _i++) {
	                var rule = rules_2[_i];
	                var errorMessage = this.getErrorMessage(this.rules[name][rule], rule);
	                var errorRule = { name: name, message: errorMessage };
	                var eventArgs = {
	                    inputName: name,
	                    element: this.inputElement,
	                    message: errorMessage
	                };
	                if (!this.isValid(name, rule) && !this.inputElement.classList.contains(this.ignore)) {
	                    this.removeErrorRules(name);
	                    this.errorRules.push(errorRule);
	                    this.inputElement.setAttribute('aria-invalid', 'true');
	                    this.inputElement.setAttribute('aria-describedby', this.inputElement.id + '-info');
	                    if (!this.infoElement) {
	                        this.createErrorElement(name, errorRule.message, this.inputElement);
	                    }
	                    else {
	                        this.showMessage(errorRule);
	                    }
	                    eventArgs.errorElement = this.infoElement;
	                    eventArgs.status = 'failure';
	                    this.inputElement.classList.add(this.errorClass);
	                    this.inputElement.classList.remove(this.validClass);
	                    this.trigger('validationComplete', eventArgs);
	                    if (rule === 'required') {
	                        this.inputElement.setAttribute('aria-required', 'true');
	                    }
	                    break;
	                }
	                else {
	                    this.hideMessage(name);
	                    eventArgs.status = 'success';
	                    this.trigger('validationComplete', eventArgs);
	                }
	            }
	        };
	        FormValidator.prototype.isValid = function (name, rule) {
	            var params = this.rules[name][rule];
	            var param = (params instanceof Array && typeof params[1] === 'string') ? params[0] : params;
	            var currentRule = this.rules[name][rule];
	            var args = { value: this.inputElement.value, param: param, element: this.inputElement, formElement: this.element };
	            this.trigger('validationBegin', args);
	            if (currentRule && typeof currentRule[0] === 'function') {
	                var fn = currentRule[0];
	                return fn.call(this, { element: this.inputElement, value: this.inputElement.value });
	            }
	            else if (FormValidator_1.isCheckable(this.inputElement)) {
	                if (rule !== 'required') {
	                    return true;
	                }
	                return ej2_base_1.selectAll('input[name=' + name + ']:checked', this.element).length > 0;
	            }
	            else {
	                return FormValidator_1.checkValidator[rule](args);
	            }
	        };
	        FormValidator.prototype.getErrorMessage = function (ruleValue, rule) {
	            var message = (ruleValue instanceof Array && typeof ruleValue[1] === 'string') ? ruleValue[1] : this.defaultMessages[rule];
	            var formats = message.match(/{(\d)}/g);
	            if (!ej2_base_2.isNullOrUndefined(formats)) {
	                for (var i = 0; i < formats.length; i++) {
	                    var value = ruleValue instanceof Array ? ruleValue[i] : ruleValue;
	                    message = message.replace(formats[i], value);
	                }
	            }
	            return message;
	        };
	        FormValidator.prototype.createErrorElement = function (name, message, input) {
	            var errorElement = ej2_base_1.createElement(this.errorElement, {
	                className: this.errorClass,
	                innerHTML: message,
	                attrs: { for: name }
	            });
	            if (this.errorOption === ErrorOption.Message) {
	                errorElement.classList.remove(this.errorClass);
	                errorElement.classList.add('e-message');
	                errorElement = ej2_base_1.createElement(this.errorContainer, { className: this.errorClass, innerHTML: errorElement.outerHTML });
	            }
	            errorElement.id = this.inputElement.name + '-info';
	            if (this.element.querySelector('[data-valmsg-for="' + input.id + '"]')) {
	                this.element.querySelector('[data-valmsg-for="' + input.id + '"]').appendChild(errorElement);
	            }
	            else if (input.hasAttribute('data-msg-containerid') === true) {
	                var containerId = input.getAttribute('data-msg-containerid');
	                var divElement = input.parentElement.querySelector('#' + containerId);
	                divElement.appendChild(errorElement);
	            }
	            else if (this.customPlacement != null) {
	                this.customPlacement.call(this, this.inputElement, errorElement);
	            }
	            else {
	                this.inputElement.parentNode.insertBefore(errorElement, this.inputElement.nextSibling);
	            }
	            errorElement.style.display = 'block';
	            this.getErrorElement(name);
	            this.validated.push(name);
	            this.checkRequired(name);
	        };
	        FormValidator.prototype.getErrorElement = function (name) {
	            this.infoElement = ej2_base_1.select(this.errorElement + '.' + this.errorClass, this.inputElement.parentElement);
	            if (!this.infoElement) {
	                this.infoElement = ej2_base_1.select(this.errorElement + '.' + this.errorClass + '[for="' + name + '"]');
	            }
	            return this.infoElement;
	        };
	        FormValidator.prototype.removeErrorRules = function (name) {
	            for (var i = 0; i < this.errorRules.length; i++) {
	                var rule = this.errorRules[i];
	                if (rule.name === name) {
	                    this.errorRules.splice(i, 1);
	                }
	            }
	        };
	        FormValidator.prototype.showMessage = function (errorRule) {
	            this.infoElement.style.display = 'block';
	            this.infoElement.innerHTML = errorRule.message;
	            this.checkRequired(errorRule.name);
	        };
	        FormValidator.prototype.hideMessage = function (name) {
	            if (this.infoElement) {
	                this.infoElement.style.display = 'none';
	                this.removeErrorRules(name);
	                this.inputElement.classList.add(this.validClass);
	                this.inputElement.classList.remove(this.errorClass);
	                this.inputElement.setAttribute('aria-invalid', 'false');
	            }
	        };
	        FormValidator.prototype.checkRequired = function (name) {
	            if (!this.rules[name][this.required] && !this.inputElement.value.length) {
	                this.infoElement.innerHTML = this.inputElement.value;
	                this.infoElement.setAttribute('aria-invalid', 'false');
	                this.hideMessage(name);
	            }
	        };
	        FormValidator.isCheckable = function (input) {
	            var inputType = input.getAttribute('type');
	            return inputType && (inputType === 'checkbox' || inputType === 'radio' || inputType === 'submit');
	        };
	        return FormValidator;
	    }(ej2_base_1.Base));
	    FormValidator.checkValidator = {
	        required: function (option) {
	            return option.value.length > 0;
	        },
	        email: function (option) {
	            return VALIDATE_EMAIL.test(option.value);
	        },
	        url: function (option) {
	            return VALIDATE_URL.test(option.value);
	        },
	        dateIso: function (option) {
	            return VALIDATE_DATE_ISO.test(option.value);
	        },
	        tel: function (option) {
	            return VALIDATE_PHONE.test(option.value);
	        },
	        creditcard: function (option) {
	            return VALIDATE_CREDITCARD.test(option.value);
	        },
	        number: function (option) {
	            return !isNaN(Number(option.value)) && option.value.indexOf(' ') === -1;
	        },
	        digits: function (option) {
	            return VALIDATE_DIGITS.test(option.value);
	        },
	        maxLength: function (option) {
	            return option.value.length <= option.param;
	        },
	        minLength: function (option) {
	            return option.value.length >= option.param;
	        },
	        rangeLength: function (option) {
	            var param = option.param;
	            return option.value.length >= param[0] && option.value.length <= param[1];
	        },
	        range: function (option) {
	            var param = option.param;
	            return !isNaN(Number(option.value)) && Number(option.value) >= param[0] && Number(option.value) <= param[1];
	        },
	        date: function (option) {
	            return !isNaN(new Date(option.value).getTime());
	        },
	        max: function (option) {
	            if (!isNaN(Number(option.value))) {
	                return +option.value <= option.param;
	            }
	            return new Date(option.value).getTime() <= new Date(JSON.parse(JSON.stringify(option.param))).getTime();
	        },
	        min: function (option) {
	            if (!isNaN(Number(option.value))) {
	                return +option.value >= option.param;
	            }
	            return new Date(option.value).getTime() >= new Date(JSON.parse(JSON.stringify(option.param))).getTime();
	        },
	        regex: function (option) {
	            return new RegExp(option.param).test(option.value);
	        },
	        equalTo: function (option) {
	            var compareTo = option.formElement.querySelector('#' + option.param);
	            option.param = compareTo.value;
	            return option.param === option.value;
	        },
	    };
	    __decorate([
	        ej2_base_3.Property('e-hidden')
	    ], FormValidator.prototype, "ignore", void 0);
	    __decorate([
	        ej2_base_3.Property({})
	    ], FormValidator.prototype, "rules", void 0);
	    __decorate([
	        ej2_base_3.Property('e-error')
	    ], FormValidator.prototype, "errorClass", void 0);
	    __decorate([
	        ej2_base_3.Property('e-valid')
	    ], FormValidator.prototype, "validClass", void 0);
	    __decorate([
	        ej2_base_3.Property('label')
	    ], FormValidator.prototype, "errorElement", void 0);
	    __decorate([
	        ej2_base_3.Property('div')
	    ], FormValidator.prototype, "errorContainer", void 0);
	    __decorate([
	        ej2_base_3.Property(ErrorOption.Label)
	    ], FormValidator.prototype, "errorOption", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], FormValidator.prototype, "focusout", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], FormValidator.prototype, "keyup", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], FormValidator.prototype, "click", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], FormValidator.prototype, "change", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], FormValidator.prototype, "submit", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], FormValidator.prototype, "validationBegin", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], FormValidator.prototype, "validationComplete", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], FormValidator.prototype, "customPlacement", void 0);
	    FormValidator = FormValidator_1 = __decorate([
	        ej2_base_3.NotifyPropertyChanges
	    ], FormValidator);
	    exports.FormValidator = FormValidator;
	    var FormValidator_1;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YjhjOWNhY2JkYmIwOTBiYTI3ZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWN0ZXh0Ym94L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljdGV4dGJveC9udW1lcmljdGV4dGJveC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFza2VkdGV4dGJveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFza2VkdGV4dGJveC9iYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXNrZWR0ZXh0Ym94L2Jhc2UvbWFzay1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXNrZWR0ZXh0Ym94L21hc2tlZHRleHRib3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hc2tlZHRleHRib3gvbWFza2VkdGV4dGJveC9tYXNrZWR0ZXh0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS12YWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm0tdmFsaWRhdG9yL2Zvcm0tdmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztpRUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztpRUNWRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O0FDUEQ7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsd0NBQXdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQseUZBQXlGO0FBQzFJLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFrRSw2Q0FBNkM7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxxREFBcUQ7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELDBCQUEwQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0QsbUJBQW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWdELHFCQUFxQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXVFLGNBQWM7QUFDckY7QUFDQSx1RkFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0Msb0RBQW9EO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRCwwQkFBMEI7QUFDL0U7QUFDQSxvRUFBbUUsU0FBUyxpQkFBaUIsRUFBRTtBQUMvRjtBQUNBO0FBQ0Esc0RBQXFELHlCQUF5QjtBQUM5RTtBQUNBO0FBQ0Esd0RBQXVELDJCQUEyQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQywyQkFBMkI7QUFDL0Q7QUFDQTtBQUNBLHFDQUFvQyx3QkFBd0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EseUNBQXdDLHFDQUFxQyxjQUFjLGlEQUFpRDtBQUM1STtBQUNBO0FBQ0EseUNBQXdDLHFDQUFxQyxjQUFjLGlEQUFpRDtBQUM1STtBQUNBO0FBQ0EsaUNBQWdDLGlEQUFpRDtBQUNqRixrREFBaUQsNkVBQTZFO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLHNDQUFzQyxjQUFjLGtEQUFrRDtBQUMxSTtBQUNBO0FBQ0E7QUFDQSx5RUFBd0UsY0FBYztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFpRCx1REFBdUQ7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxjQUFjO0FBQ2xEO0FBQ0EsOERBQTZELGNBQWM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxjQUFjO0FBQ2xELGlFQUFnRSxjQUFjO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxlQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0MsbURBQW1EO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRCx5QkFBeUI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx3QkFBd0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDLGNBQWM7QUFDdEQ7QUFDQSxrRUFBaUUsY0FBYztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQW9ELHVCQUF1QixzQkFBc0IsRUFBRTtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyxrQkFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQSx1RUFBc0UsZ0RBQWdEO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFLDBCQUEwQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ2h2QkQsZ0Q7Ozs7OztpRUNBQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQix5QkFBeUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFnRSxrQ0FBa0M7QUFDbEcsb0VBQW1FLGtDQUFrQztBQUNyRztBQUNBO0FBQ0Esc0RBQXFELDBDQUEwQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW1FLGdCQUFnQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUEyRCxrQ0FBa0M7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EseUNBQXdDLHlEQUF5RCxFQUFFO0FBQ25HLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXNFLHVCQUF1QjtBQUM3RjtBQUNBO0FBQ0E7QUFDQSw0REFBMkQsdUJBQXVCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsOERBQThEO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWdELGVBQWU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRCxnQkFBZ0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQsZ0JBQWdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWlELDZCQUE2QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsMEVBQTBFLDJCQUEyQjtBQUNqSTtBQUNBLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUEyRCx1QkFBdUI7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EseUNBQXdDLDRDQUE0QyxFQUFFO0FBQ3RGLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxNQUFLLDhDQUE4QztBQUNuRCxFQUFDOzs7Ozs7O2lFQ2piRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7aUVDUkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsRUFBQzs7Ozs7OztpRUNQRDtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDO0FBQzdDLG1GQUFrRjtBQUNsRjtBQUNBO0FBQ0EsNEJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsMkJBQTJCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLDJCQUEyQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsNEJBQTRCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWlELDBCQUEwQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLG9DQUFvQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDLDBHQUEwRztBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyx5RkFBeUY7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0MsMEVBQTBFO0FBQ2xILDZDQUE0QywwRkFBMEY7QUFDdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxzQ0FBc0M7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3Qyw0QkFBNEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMseUJBQXlCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCw2REFBNkQ7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBc0QsdUVBQXVFO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLHlCQUF5QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7aUVDbnlCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O0FDUEQ7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0Isb0NBQW9DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7aUVDblBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBLEVBQUM7Ozs7Ozs7aUVDUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsRUFBQzs7Ozs7OztBQ1BEO0FBQ0E7QUFDQSxXQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYsMEJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEUsd0RBQXVELEdBQUcsVUFBVSxHQUFHLEtBQUssRUFBRSxTQUFTLElBQUk7QUFDM0YsZUFBYyxFQUFFLFNBQVMsSUFBSSxJQUFJLEVBQUUsU0FBUyxJQUFJO0FBQ2hELHlFQUF3RSxHQUFHLFVBQVUsR0FBRztBQUN4RixpREFBZ0QsRUFBRTtBQUNsRDtBQUNBLGlEQUFnRCxLQUFLO0FBQ3JELGdEQUErQyxNQUFNO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSyxnRUFBZ0U7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCxFQUFFO0FBQ3pELG9EQUFtRCxFQUFFO0FBQ3JELDZEQUE0RCxFQUFFLE1BQU0sRUFBRTtBQUN0RSx1REFBc0QsRUFBRSxNQUFNLEVBQUU7QUFDaEUsbUVBQWtFLEVBQUU7QUFDcEUsc0VBQXFFLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQsd0JBQXdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRCx3QkFBd0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBLHdEQUF1RCx3QkFBd0I7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxxQkFBcUI7QUFDbEU7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0MsNkRBQTZEO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLEtBQUs7QUFDL0M7QUFDQSxnQ0FBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXdCO0FBQ3hCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwrRUFBOEUsZ0VBQWdFO0FBQzlJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoiZWoyLWlucHV0cy51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIikpIDogZmFjdG9yeShyb290W1wiQHN5bmNmdXNpb24vZWoyLWJhc2VcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWI4YzljYWNiZGJiMDkwYmEyN2YiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL251bWVyaWN0ZXh0Ym94L2luZGV4XCIsIFwiLi9tYXNrZWR0ZXh0Ym94L2luZGV4XCIsIFwiLi9pbnB1dC9pbmRleFwiLCBcIi4vZm9ybS12YWxpZGF0b3IvaW5kZXhcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBpbmRleF8xLCBpbmRleF8yLCBpbmRleF8zLCBpbmRleF80KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChpbmRleF8xKTtcbiAgICBfX2V4cG9ydChpbmRleF8yKTtcbiAgICBfX2V4cG9ydChpbmRleF8zKTtcbiAgICBfX2V4cG9ydChpbmRleF80KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9udW1lcmljdGV4dGJveFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG51bWVyaWN0ZXh0Ym94XzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KG51bWVyaWN0ZXh0Ym94XzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9udW1lcmljdGV4dGJveC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCIuLi9pbnB1dC9pbnB1dFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMsIGVqMl9iYXNlXzQsIGVqMl9iYXNlXzUsIGlucHV0XzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIFJPT1QgPSAnZS1udW1lcmljJztcbiAgICB2YXIgU1BJTklDT04gPSAnZS1pbnB1dC1ncm91cC1pY29uJztcbiAgICB2YXIgU1BJTlVQID0gJ2Utc3Bpbi11cCc7XG4gICAgdmFyIFNQSU5ET1dOID0gJ2Utc3Bpbi1kb3duJztcbiAgICB2YXIgRVJST1IgPSAnZS1lcnJvcic7XG4gICAgdmFyIElOQ1JFTUVOVCA9ICdpbmNyZW1lbnQnO1xuICAgIHZhciBERUNSRU1FTlQgPSAnZGVjcmVtZW50JztcbiAgICB2YXIgSU5UUkVHRVhQID0gbmV3IFJlZ0V4cCgnL14oLSk/KFxcZCopJC8nKTtcbiAgICB2YXIgREVDSU1BTFNFUEFSQVRPUiA9ICcuJztcbiAgICB2YXIgTnVtZXJpY1RleHRCb3ggPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoTnVtZXJpY1RleHRCb3gsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIE51bWVyaWNUZXh0Qm94KG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnQpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5pc1ByZXZGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5kZWNpbWFsU2VwYXJhdG9yID0gJy4nO1xuICAgICAgICAgICAgX3RoaXMuaW50UmVnRXhwID0gbmV3IFJlZ0V4cCgnL14oLSk/KFxcZCopJC8nKTtcbiAgICAgICAgICAgIF90aGlzLmlzQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlakluc3RhbmNlID0gZWoyX2Jhc2VfNC5nZXRWYWx1ZSgnZWoyX2luc3RhbmNlcycsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNsb25lRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFuZ3VsYXJUYWdOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZSA9PT0gJ0VKLU5VTUVSSUNURVhUQk9YJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5ndWxhclRhZ05hbWUgPSB0aGlzLmVsZW1lbnQudGFnTmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGluZGV4OyBpbmRleCA8IHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50LmF0dHJpYnV0ZXNbaW5kZXhdLm5vZGVOYW1lLCB0aGlzLmVsZW1lbnQuYXR0cmlidXRlc1tpbmRleF0ubm9kZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuaW5uZXJIVE1MID0gdGhpcy5lbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRWYWx1ZSgnZWoyX2luc3RhbmNlcycsIGVqSW5zdGFuY2UsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7ICdyb2xlJzogJ3NwaW5idXR0b24nLCAndGFiaW5kZXgnOiAnMCcsICdhdXRvY29tcGxldGUnOiAnb2ZmJywgJ2FyaWEtbGl2ZSc6ICdhc3NlcnRpdmUnIH0pO1xuICAgICAgICAgICAgdmFyIGxvY2FsZVRleHQgPSB7IGluY3JlbWVudFRpdGxlOiAnSW5jcmVtZW50IHZhbHVlJywgZGVjcmVtZW50VGl0bGU6ICdEZWNyZW1lbnQgdmFsdWUnLCBwbGFjZWhvbGRlcjogJycgfTtcbiAgICAgICAgICAgIHRoaXMubDEwbiA9IG5ldyBlajJfYmFzZV8xLkwxMG4oJ251bWVyaWN0ZXh0Ym94JywgbG9jYWxlVGV4dCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbnB1dFN0eWxlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW5wdXROYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY3VsdHVyZUluZm8gPSB7fTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEN1bHR1cmVJbmZvKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRDdWx0dXJlRnVuYygpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgIHRoaXMucHJldlZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVNaW5NYXgoKTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVTdGVwKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZWhvbGRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1NwaW5CdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluQnRuQ3JlYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMud2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIHsgJ3dpZHRoJzogZWoyX2Jhc2VfNC5mb3JtYXRVbml0KHRoaXMud2lkdGgpIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMud2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBudWxsICYmICFpc05hTih0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWNpbWFscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgdmFsdWU6IHRoaXMucm91bmROdW1iZXIodGhpcy52YWx1ZSwgdGhpcy5kZWNpbWFscykgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5jaGVja0F0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlcyA9IFsndmFsdWUnLCAnbWluJywgJ21heCcsICdzdGVwJywgJ2Rpc2FibGVkJywgJ3JlYWRvbmx5JywgJ3N0eWxlJywgJ25hbWUnXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgYXR0cmlidXRlc18xID0gYXR0cmlidXRlczsgX2kgPCBhdHRyaWJ1dGVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBhdHRyaWJ1dGVzXzFbX2ldO1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKHByb3ApKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc2FibGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5hYmxlZCA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUocHJvcCkgPT09ICdkaXNhYmxlZCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShwcm9wKSA9PT0gJ3RydWUnID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IGVuYWJsZWQ6IGVuYWJsZWQgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWFkb25seSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRvbmx5ID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShwcm9wKSA9PT0gJ3JlYWRvbmx5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKHByb3ApID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgcmVhZG9ubHk6IHJlYWRvbmx5IH0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRTdHlsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0TmFtZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyUGFyc2VyKHsgZm9ybWF0OiAnbicgfSkodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShwcm9wKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh2YWx1ZSAhPT0gbnVsbCAmJiAhaXNOYU4odmFsdWUpKSB8fCAocHJvcCA9PT0gJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKGVqMl9iYXNlXzQuc2V0VmFsdWUocHJvcCwgdmFsdWUsIHt9KSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUudXBkYXRlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBwbGFjZWhvbGRlcjogdGhpcy5sMTBuLmdldENvbnN0YW50KCdwbGFjZWhvbGRlcicpIH0sIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuaW5pdEN1bHR1cmVGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBlajJfYmFzZV81LkludGVybmF0aW9uYWxpemF0aW9uKHRoaXMubG9jYWxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmluaXRDdWx0dXJlSW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VsdHVyZUluZm8uZm9ybWF0ID0gdGhpcy5mb3JtYXQ7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5nZXRWYWx1ZSgnY3VycmVuY3knLCB0aGlzKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0VmFsdWUoJ2N1cnJlbmN5JywgdGhpcy5jdXJyZW5jeSwgdGhpcy5jdWx0dXJlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5jcmVhdGVXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlucHV0T2JqID0gaW5wdXRfMS5JbnB1dC5jcmVhdGVJbnB1dCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIGN1c3RvbVRhZzogdGhpcy5hbmd1bGFyVGFnTmFtZSxcbiAgICAgICAgICAgICAgICBmbG9hdExhYmVsVHlwZTogdGhpcy5mbG9hdExhYmVsVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiB0aGlzLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IHRoaXMuY3NzQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVJ0bDogdGhpcy5lbmFibGVSdGwsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuZW5hYmxlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBpbnB1dE9iai5jb250YWluZXI7XG4gICAgICAgICAgICBlajJfYmFzZV8zLmFkZENsYXNzKFt0aGlzLmNvbnRhaW5lcl0sIFJPT1QpO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7ICdhcmlhLXJlYWRvbmx5JzogJ3RydWUnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oaWRkZW5JbnB1dCA9IChlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBhdHRyczogeyB0eXBlOiAnaGlkZGVuJyB9IH0pKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXROYW1lID0gdGhpcy5pbnB1dE5hbWUgIT09IG51bGwgPyB0aGlzLmlucHV0TmFtZSA6IHRoaXMuZWxlbWVudC5pZDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLmhpZGRlbklucHV0LCB7ICduYW1lJzogdGhpcy5pbnB1dE5hbWUgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5oaWRkZW5JbnB1dCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0U3R5bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5jb250YWluZXIsIHsgJ3N0eWxlJzogdGhpcy5pbnB1dFN0eWxlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuc3BpbkJ0bkNyZWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zcGluRG93biA9IGlucHV0XzEuSW5wdXQuYXBwZW5kU3BhbihTUElOSUNPTiArICcgJyArIFNQSU5ET1dOLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5zcGluRG93biwge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6IHRoaXMubDEwbi5nZXRDb25zdGFudCgnZGVjcmVtZW50VGl0bGUnKSxcbiAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6IHRoaXMubDEwbi5nZXRDb25zdGFudCgnZGVjcmVtZW50VGl0bGUnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNwaW5VcCA9IGlucHV0XzEuSW5wdXQuYXBwZW5kU3BhbihTUElOSUNPTiArICcgJyArIFNQSU5VUCwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKHRoaXMuc3BpblVwLCB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5sMTBuLmdldENvbnN0YW50KCdpbmNyZW1lbnRUaXRsZScpLFxuICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5sMTBuLmdldENvbnN0YW50KCdpbmNyZW1lbnRUaXRsZScpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMud2lyZVNwaW5CdG5FdmVudHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnZhbGlkYXRlTWluTWF4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEodHlwZW9mICh0aGlzLm1pbikgPT09ICdudW1iZXInICYmICFpc05hTih0aGlzLm1pbikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgbWluOiAtKE51bWJlci5NQVhfVkFMVUUpIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEodHlwZW9mICh0aGlzLm1heCkgPT09ICdudW1iZXInICYmICFpc05hTih0aGlzLm1heCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGVjaW1hbHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taW4gIT09IC0oTnVtYmVyLk1BWF9WQUxVRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgbWluOiB0aGlzLmluc3RhbmNlLmdldE51bWJlclBhcnNlcih7IGZvcm1hdDogJ24nIH0pKHRoaXMuZm9ybWF0dGVkVmFsdWUodGhpcy5kZWNpbWFscywgdGhpcy5taW4pKSB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4ICE9PSAoTnVtYmVyLk1BWF9WQUxVRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgbWF4OiB0aGlzLmluc3RhbmNlLmdldE51bWJlclBhcnNlcih7IGZvcm1hdDogJ24nIH0pKHRoaXMuZm9ybWF0dGVkVmFsdWUodGhpcy5kZWNpbWFscywgdGhpcy5tYXgpKSB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBtaW46IHRoaXMubWluID4gdGhpcy5tYXggPyB0aGlzLm1heCA6IHRoaXMubWluIH0sIHRydWUpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCwgeyAnYXJpYS12YWx1ZW1pbic6IHRoaXMubWluLnRvU3RyaW5nKCksICdhcmlhLXZhbHVlbWF4JzogdGhpcy5tYXgudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmZvcm1hdHRlZFZhbHVlID0gZnVuY3Rpb24gKGRlY2ltYWxzLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyRm9ybWF0KHtcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGRlY2ltYWxzLFxuICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHMsIHVzZUdyb3VwaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkodmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUudmFsaWRhdGVTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVjaW1hbHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBzdGVwOiB0aGlzLmluc3RhbmNlLmdldE51bWJlclBhcnNlcih7IGZvcm1hdDogJ24nIH0pKHRoaXMuZm9ybWF0dGVkVmFsdWUodGhpcy5kZWNpbWFscywgdGhpcy5zdGVwKSkgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5hY3Rpb24gPSBmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmlzRm9jdXNlZCA/IHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyUGFyc2VyKHsgZm9ybWF0OiAnbicgfSkodGhpcy5lbGVtZW50LnZhbHVlKSA6IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMucGVyZm9ybUFjdGlvbih2YWx1ZSwgdGhpcy5zdGVwLCBvcGVyYXRpb24pKTtcbiAgICAgICAgICAgIHRoaXMucmFpc2VDaGFuZ2VFdmVudCgpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuY2hlY2tFcnJvckNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5yZW1vdmVDbGFzcyhbdGhpcy5jb250YWluZXJdLCBFUlJPUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmFkZENsYXNzKFt0aGlzLmNvbnRhaW5lcl0sIEVSUk9SKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ2FyaWEtaW52YWxpZCc6IHRoaXMuaXNWYWxpZFN0YXRlID8gJ2ZhbHNlJyA6ICd0cnVlJyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnZm9jdXMnLCB0aGlzLmZvY3VzSW4sIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2JsdXInLCB0aGlzLmZvY3VzT3V0LCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdrZXlkb3duJywgdGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAna2V5cHJlc3MnLCB0aGlzLmtleVByZXNzSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnY2hhbmdlJywgdGhpcy5jaGFuZ2VIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdwYXN0ZScsIHRoaXMucGFzdGVIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLndpcmVTcGluQnRuRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuc3BpblVwLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hTdGFydEV2ZW50LCB0aGlzLm1vdXNlRG93bk9uU3Bpbm5lciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5zcGluRG93biwgZWoyX2Jhc2VfMS5Ccm93c2VyLnRvdWNoU3RhcnRFdmVudCwgdGhpcy5tb3VzZURvd25PblNwaW5uZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuc3BpblVwLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hFbmRFdmVudCwgdGhpcy5tb3VzZVVwT25TcGlubmVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLnNwaW5Eb3duLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hFbmRFdmVudCwgdGhpcy5tb3VzZVVwT25TcGlubmVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLnNwaW5VcCwgZWoyX2Jhc2VfMS5Ccm93c2VyLnRvdWNoTW92ZUV2ZW50LCB0aGlzLnRvdWNoTW92ZU9uU3Bpbm5lciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5zcGluRG93biwgZWoyX2Jhc2VfMS5Ccm93c2VyLnRvdWNoTW92ZUV2ZW50LCB0aGlzLnRvdWNoTW92ZU9uU3Bpbm5lciwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS51bndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnZm9jdXMnLCB0aGlzLmZvY3VzSW4pO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2JsdXInLCB0aGlzLmZvY3VzT3V0KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdrZXlkb3duJywgdGhpcy5rZXlEb3duSGFuZGxlcik7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAna2V5cHJlc3MnLCB0aGlzLmtleVByZXNzSGFuZGxlcik7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnY2hhbmdlJywgdGhpcy5jaGFuZ2VIYW5kbGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdwYXN0ZScsIHRoaXMucGFzdGVIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnVud2lyZVNwaW5CdG5FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5zcGluVXAsIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaFN0YXJ0RXZlbnQsIHRoaXMubW91c2VEb3duT25TcGlubmVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLnNwaW5Eb3duLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hTdGFydEV2ZW50LCB0aGlzLm1vdXNlRG93bk9uU3Bpbm5lcik7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5zcGluVXAsIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaEVuZEV2ZW50LCB0aGlzLm1vdXNlVXBPblNwaW5uZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuc3BpbkRvd24sIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaEVuZEV2ZW50LCB0aGlzLm1vdXNlVXBPblNwaW5uZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuc3BpblVwLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hNb3ZlRXZlbnQsIHRoaXMudG91Y2hNb3ZlT25TcGlubmVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLnNwaW5Eb3duLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hNb3ZlRXZlbnQsIHRoaXMudG91Y2hNb3ZlT25TcGlubmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHZhbHVlOiBudWxsIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBhcnNlZElucHV0ID0gdGhpcy5pbnN0YW5jZS5nZXROdW1iZXJQYXJzZXIoeyBmb3JtYXQ6ICduJyB9KSh0aGlzLmVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShwYXJzZWRJbnB1dCwgZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUucmFpc2VDaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldlZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50QXJncyA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRXZlbnRBcmdzID0geyB2YWx1ZTogdGhpcy52YWx1ZSwgcHJldmlvdXNWYWx1ZTogdGhpcy5wcmV2VmFsdWUgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudEFyZ3MuZXZlbnQgPSBldmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5tZXJnZShldmVudEFyZ3MsIHRoaXMuY2hhbmdlRXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUucGFzdGVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBiZWZvcmVVcGRhdGUgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLm51bWVyaWNSZWdleCgpLnRlc3QoX3RoaXMuZWxlbWVudC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RWxlbWVudFZhbHVlKGJlZm9yZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5rZXlEb3duSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24oSU5DUkVNRU5UKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24oREVDUkVNRU5UKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB2YWx1ZTogbnVsbCB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyUGFyc2VyKHsgZm9ybWF0OiAnbicgfSkodGhpcy5lbGVtZW50LnZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnBlcmZvcm1BY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUsIHN0ZXAsIG9wZXJhdGlvbikge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1cGRhdGVkVmFsdWUgPSBvcGVyYXRpb24gPT09IElOQ1JFTUVOVCA/IHZhbHVlICsgc3RlcCA6IHZhbHVlIC0gc3RlcDtcbiAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHRoaXMuY29ycmVjdFJvdW5kaW5nKHZhbHVlLCBzdGVwLCB1cGRhdGVkVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaWN0TW9kZSA/IHRoaXMudHJpbVZhbHVlKHVwZGF0ZWRWYWx1ZSkgOiB1cGRhdGVkVmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmNvcnJlY3RSb3VuZGluZyA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RlcCwgcmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgZmxvYXRFeHAgPSBuZXcgUmVnRXhwKCdbLC5dKC4qKScpO1xuICAgICAgICAgICAgdmFyIHZhbHVlVGV4dCA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB2YXIgc3RlcFRleHQgPSBzdGVwLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB2YXIgZmxvYXRWYWx1ZSA9IGZsb2F0RXhwLnRlc3QodmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB2YXIgZmxvYXRTdGVwID0gZmxvYXRFeHAudGVzdChzdGVwLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgaWYgKGZsb2F0VmFsdWUgfHwgZmxvYXRTdGVwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlQ291bnQgPSBmbG9hdFZhbHVlID8gZmxvYXRFeHAuZXhlYyh2YWx1ZS50b1N0cmluZygpKVswXS5sZW5ndGggOiAwO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwQ291bnQgPSBmbG9hdFN0ZXAgPyBmbG9hdEV4cC5leGVjKHN0ZXAudG9TdHJpbmcoKSlbMF0ubGVuZ3RoIDogMDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgodmFsdWVDb3VudCwgc3RlcENvdW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPSB0aGlzLnJvdW5kVmFsdWUocmVzdWx0LCBtYXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUucm91bmRWYWx1ZSA9IGZ1bmN0aW9uIChyZXN1bHQsIHByZWNpc2lvbikge1xuICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDA7XG4gICAgICAgICAgICB2YXIgZGl2aWRlID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICo9IGRpdmlkZSwgcmVzdWx0ID0gTWF0aC5yb3VuZChyZXN1bHQpIC8gZGl2aWRlO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS51cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiAhaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVjaW1hbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJvdW5kTnVtYmVyKHZhbHVlLCB0aGlzLmRlY2ltYWxzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlID09PSBudWxsIHx8IGlzTmFOKHZhbHVlKSA/IG51bGwgOiB0aGlzLnN0cmljdE1vZGUgPyB0aGlzLnRyaW1WYWx1ZSh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnJhaXNlQ2hhbmdlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuY2hhbmdlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghKHZhbHVlIHx8IHZhbHVlID09PSAwKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB2YWx1ZTogdmFsdWUgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbnVtYmVyT2ZEZWNpbWFscyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgZGVjaW1hbFBhcnQgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZEZWNpbWFscyA9ICFkZWNpbWFsUGFydCB8fCAhZGVjaW1hbFBhcnQubGVuZ3RoID8gMCA6IGRlY2ltYWxQYXJ0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWNpbWFscyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkRlY2ltYWxzID0gbnVtYmVyT2ZEZWNpbWFscyA8IHRoaXMuZGVjaW1hbHMgPyBudW1iZXJPZkRlY2ltYWxzIDogdGhpcy5kZWNpbWFscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgdmFsdWU6IHRoaXMucm91bmROdW1iZXIodmFsdWUsIG51bWJlck9mRGVjaW1hbHMpIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb2RpZnlUZXh0KCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5tb2RpZnlUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZm9ybWF0TnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRWYWx1ZSA9IHRoaXMuaXNGb2N1c2VkID8gdmFsdWUgOiB0aGlzLmluc3RhbmNlLmdldE51bWJlckZvcm1hdCh0aGlzLmN1bHR1cmVJbmZvKSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRWYWx1ZShlbGVtZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ2FyaWEtdmFsdWVub3cnOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRWYWx1ZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5zZXRFbGVtZW50VmFsdWUgPSBmdW5jdGlvbiAodmFsLCBlbGVtZW50KSB7XG4gICAgICAgICAgICBpbnB1dF8xLklucHV0LnNldFZhbHVlKHZhbCwgKGVsZW1lbnQgPyBlbGVtZW50IDogdGhpcy5lbGVtZW50KSwgdGhpcy5mbG9hdExhYmVsVHlwZSk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS52YWxpZGF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZFN0YXRlID0gISh0aGlzLnZhbHVlID4gdGhpcy5tYXggfHwgdGhpcy52YWx1ZSA8IHRoaXMubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tFcnJvckNsYXNzKCk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5mb3JtYXROdW1iZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZEZWNpbWFscztcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGRlY2ltYWxQYXJ0ID0gY3VycmVudFZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgIG51bWJlck9mRGVjaW1hbHMgPSAhZGVjaW1hbFBhcnQgfHwgIWRlY2ltYWxQYXJ0Lmxlbmd0aCA/IDAgOiBkZWNpbWFsUGFydC5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWNpbWFscyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG51bWJlck9mRGVjaW1hbHMgPSBudW1iZXJPZkRlY2ltYWxzIDwgdGhpcy5kZWNpbWFscyA/IG51bWJlck9mRGVjaW1hbHMgOiB0aGlzLmRlY2ltYWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyRm9ybWF0KHtcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG51bWJlck9mRGVjaW1hbHMsXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBudW1iZXJPZkRlY2ltYWxzLCB1c2VHcm91cGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKHRoaXMudmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS50cmltVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IHRoaXMubWF4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy5taW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5taW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnJvdW5kTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVjaXNpb24pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhciBkZWNpbWFscyA9IHByZWNpc2lvbiB8fCAwO1xuICAgICAgICAgICAgdmFyIHJlc3VsdDEgPSByZXN1bHQudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xuICAgICAgICAgICAgcmVzdWx0ID0gTWF0aC5yb3VuZChOdW1iZXIocmVzdWx0MVswXSArICdlJyArIChyZXN1bHQxWzFdID8gKE51bWJlcihyZXN1bHQxWzFdKSArIGRlY2ltYWxzKSA6IGRlY2ltYWxzKSkpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdDIgPSByZXN1bHQudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xuICAgICAgICAgICAgcmVzdWx0ID0gTnVtYmVyKHJlc3VsdDJbMF0gKyAnZScgKyAocmVzdWx0MlsxXSA/IChOdW1iZXIocmVzdWx0MlsxXSkgLSBkZWNpbWFscykgOiAtZGVjaW1hbHMpKTtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIocmVzdWx0LnRvRml4ZWQoZGVjaW1hbHMpKTtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuY2FuY2VsRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5rZXlQcmVzc0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMCB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGN1cnJlbnRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC53aGljaCk7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQpICsgY3VycmVudENoYXIgKyB0ZXh0LnN1YnN0cmluZyh0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5udW1lcmljUmVnZXgoKS50ZXN0KHRleHQpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUubnVtZXJpY1JlZ2V4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG51bWVyaWNPYmplY3QgPSBlajJfYmFzZV81LmdldE51bWVyaWNPYmplY3QodGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSBlajJfYmFzZV80LmdldFZhbHVlKCdkZWNpbWFsJywgbnVtZXJpY09iamVjdCk7XG4gICAgICAgICAgICB2YXIgZnJhY3Rpb25SdWxlID0gJyonO1xuICAgICAgICAgICAgaWYgKGRlY2ltYWxTZXBhcmF0b3IgPT09IERFQ0lNQUxTRVBBUkFUT1IpIHtcbiAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gJ1xcXFwnICsgZGVjaW1hbFNlcGFyYXRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRlY2ltYWxzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVFJFR0VYUDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRlY2ltYWxzICYmIHRoaXMudmFsaWRhdGVEZWNpbWFsT25UeXBlKSB7XG4gICAgICAgICAgICAgICAgZnJhY3Rpb25SdWxlID0gJ3swLCcgKyB0aGlzLmRlY2ltYWxzICsgJ30nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14oLSk/KCgoXFxcXGQrKCcgKyBkZWNpbWFsU2VwYXJhdG9yICsgJ1xcXFxkJyArIGZyYWN0aW9uUnVsZSArXG4gICAgICAgICAgICAgICAgJyk/KXwoJyArIGRlY2ltYWxTZXBhcmF0b3IgKyAnXFxcXGQnICsgZnJhY3Rpb25SdWxlICsgJykpKT8kJyk7XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLm1vdXNlV2hlZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZGVsdGE7XG4gICAgICAgICAgICB2YXIgcmF3RXZlbnQgPSBldmVudDtcbiAgICAgICAgICAgIGlmIChyYXdFdmVudC53aGVlbERlbHRhKSB7XG4gICAgICAgICAgICAgICAgZGVsdGEgPSByYXdFdmVudC53aGVlbERlbHRhIC8gMTIwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmF3RXZlbnQuZGV0YWlsKSB7XG4gICAgICAgICAgICAgICAgZGVsdGEgPSAtcmF3RXZlbnQuZGV0YWlsIC8gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbihJTkNSRU1FTlQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24oREVDUkVNRU5UKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuZm9jdXNJbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMucmVtb3ZlQ2xhc3MoW3RoaXMuY29udGFpbmVyXSwgRVJST1IpO1xuICAgICAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCh0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdFZhbHVlID0gdGhpcy5mb3JtYXROdW1iZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRWYWx1ZShmb3JtYXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUHJldkZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIGZvcm1hdFZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLkJyb3dzZXIuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnbW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbCcsIHRoaXMubW91c2VXaGVlbCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmZvY3VzT3V0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNQcmV2Rm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzEuQnJvd3Nlci5pc0RldmljZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVfMSA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2Rm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlXzEgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RWxlbWVudFZhbHVlKHZhbHVlXzEsIGVsZV8xKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB2YWx1ZTogbnVsbCB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZElucHV0ID0gdGhpcy5pbnN0YW5jZS5nZXROdW1iZXJQYXJzZXIoeyBmb3JtYXQ6ICduJyB9KSh0aGlzLmVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUocGFyc2VkSW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5Ccm93c2VyLmlzRGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsJywgdGhpcy5tb3VzZVdoZWVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLm1vdXNlRG93bk9uU3Bpbm5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2Rm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5nZXRFbGVtZW50RGF0YShldmVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZXRFbGVtZW50RGF0YShldmVudCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhTUElOVVApKSA/IElOQ1JFTUVOVCA6IERFQ1JFTUVOVDtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0YXJnZXQsICdtb3VzZWxlYXZlJywgdGhpcy5tb3VzZVVwQ2xpY2ssIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy50aW1lT3V0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyBfdGhpcy5pc0NhbGxlZCA9IHRydWU7IF90aGlzLmFjdGlvbihhY3Rpb24pOyB9LCAxNTApO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMubW91c2VVcENsaWNrLCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnRvdWNoTW92ZU9uU3Bpbm5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoISh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFNQSU5JQ09OKSkpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZU91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5tb3VzZVVwT25TcGlubmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ByZXZGb2N1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLkJyb3dzZXIuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLkJyb3dzZXIuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmdldEVsZW1lbnREYXRhKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFNQSU5VUCkpID8gSU5DUkVNRU5UIDogREVDUkVNRU5UO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRhcmdldCwgJ21vdXNlbGVhdmUnLCB0aGlzLm1vdXNlVXBDbGljayk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDYWxsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0NhbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMubW91c2VVcENsaWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmdldEVsZW1lbnREYXRhID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoKGV2ZW50LndoaWNoICYmIGV2ZW50LndoaWNoID09PSAzKSB8fCAoZXZlbnQuYnV0dG9uICYmIGV2ZW50LmJ1dHRvbiA9PT0gMilcbiAgICAgICAgICAgICAgICB8fCAhdGhpcy5lbmFibGVkIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZU91dCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLm1vdXNlVXBDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZU91dCk7XG4gICAgICAgICAgICB0aGlzLmlzQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5zcGluVXAsICdtb3VzZWxlYXZlJywgdGhpcy5tb3VzZVVwQ2xpY2spO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuc3BpbkRvd24sICdtb3VzZWxlYXZlJywgdGhpcy5tb3VzZVVwQ2xpY2spO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuaW5jcmVtZW50ID0gZnVuY3Rpb24gKHN0ZXApIHtcbiAgICAgICAgICAgIGlmIChzdGVwID09PSB2b2lkIDApIHsgc3RlcCA9IHRoaXMuc3RlcDsgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnBlcmZvcm1BY3Rpb24odGhpcy52YWx1ZSwgc3RlcCwgSU5DUkVNRU5UKSk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5kZWNyZW1lbnQgPSBmdW5jdGlvbiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IHZvaWQgMCkgeyBzdGVwID0gdGhpcy5zdGVwOyB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMucGVyZm9ybUFjdGlvbih0aGlzLnZhbHVlLCBzdGVwLCBERUNSRU1FTlQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnVud2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2godGhpcy5oaWRkZW5JbnB1dCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93U3BpbkJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHRoaXMudW53aXJlU3BpbkJ0bkV2ZW50cygpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuZGV0YWNoKHRoaXMuc3BpblVwKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmRldGFjaCh0aGlzLnNwaW5Eb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jbG9uZUVsZW1lbnQpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2godGhpcy5jb250YWluZXIpO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5nZXRUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmdldFBlcnNpc3REYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGtleUVudGl0eSA9IFsndmFsdWUnXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE9uUGVyc2lzdChrZXlFbnRpdHkpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRWYWw7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3UHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dpZHRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIHsgJ3dpZHRoJzogZWoyX2Jhc2VfNC5mb3JtYXRVbml0KG5ld1Byb3Aud2lkdGgpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nzc0NsYXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0XzEuSW5wdXQuc2V0Q3NzQ2xhc3MobmV3UHJvcC5jc3NDbGFzcywgW3RoaXMuY29udGFpbmVyXSwgb2xkUHJvcC5jc3NDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF8xLklucHV0LnNldEVuYWJsZWQobmV3UHJvcC5lbmFibGVkLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuYWJsZVJ0bCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF8xLklucHV0LnNldEVuYWJsZVJ0bChuZXdQcm9wLmVuYWJsZVJ0bCwgW3RoaXMuY29udGFpbmVyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVhZG9ubHknOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfMS5JbnB1dC5zZXRSZWFkb25seShuZXdQcm9wLnJlYWRvbmx5LCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7ICdhcmlhLXJlYWRvbmx5JzogJ3RydWUnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1yZWFkb25seScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BsYWNlaG9sZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0XzEuSW5wdXQuc2V0UGxhY2Vob2xkZXIobmV3UHJvcC5wbGFjZWhvbGRlciwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdGVwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcCA9IG5ld1Byb3Auc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVTdGVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2hvd1NwaW5CdXR0b24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3Auc2hvd1NwaW5CdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5CdG5DcmVhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2godGhpcy5zcGluVXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuZGV0YWNoKHRoaXMuc3BpbkRvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUobmV3UHJvcC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0VmFsdWUocHJvcCwgZWoyX2Jhc2VfNC5nZXRWYWx1ZShwcm9wLCBuZXdQcm9wKSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlTWluTWF4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmljdE1vZGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHJpY3RNb2RlID0gbmV3UHJvcC5zdHJpY3RNb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xvY2FsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRDdWx0dXJlRnVuYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sMTBuLnNldExvY2FsZSh0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBsYWNlaG9sZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF8xLklucHV0LnNldFBsYWNlaG9sZGVyKHRoaXMucGxhY2Vob2xkZXIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0VmFsdWUocHJvcCwgZWoyX2Jhc2VfNC5nZXRWYWx1ZShwcm9wLCBuZXdQcm9wKSwgdGhpcy5jdWx0dXJlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Zvcm1hdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV80LnNldFZhbHVlKHByb3AsIGVqMl9iYXNlXzQuZ2V0VmFsdWUocHJvcCwgbmV3UHJvcCksIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0Q3VsdHVyZUluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVjaW1hbHMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNpbWFscyA9IG5ld1Byb3AuZGVjaW1hbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ251bWVyaWN0ZXh0Ym94JztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE51bWVyaWNUZXh0Qm94O1xuICAgIH0oZWoyX2Jhc2VfMS5Db21wb25lbnQpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwiY3NzQ2xhc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KC0oTnVtYmVyLk1BWF9WQUxVRSkpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcIm1pblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KE51bWJlci5NQVhfVkFMVUUpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcIm1heFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KDEpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcInN0ZXBcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KG51bGwpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcInBsYWNlaG9sZGVyXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkodHJ1ZSlcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwic2hvd1NwaW5CdXR0b25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwicmVhZG9ubHlcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSh0cnVlKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJlbmFibGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImVuYWJsZVJ0bFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJlbmFibGVQZXJzaXN0ZW5jZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCduMicpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImZvcm1hdFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KG51bGwpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImRlY2ltYWxzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkobnVsbClcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwiY3VycmVuY3lcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSh0cnVlKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJzdHJpY3RNb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcInZhbGlkYXRlRGVjaW1hbE9uVHlwZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdOZXZlcicpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImZsb2F0TGFiZWxUeXBlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJjcmVhdGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJkZXN0cm95ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImNoYW5nZVwiLCB2b2lkIDApO1xuICAgIE51bWVyaWNUZXh0Qm94ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuTm90aWZ5UHJvcGVydHlDaGFuZ2VzXG4gICAgXSwgTnVtZXJpY1RleHRCb3gpO1xuICAgIGV4cG9ydHMuTnVtZXJpY1RleHRCb3ggPSBOdW1lcmljVGV4dEJveDtcbiAgICBleHBvcnRzLm51bWVyaWN0ZXh0Ym94SGVscGVyID0gZWoyX2Jhc2VfMS5DcmVhdGVCdWlsZGVyKE51bWVyaWNUZXh0Qm94KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbnVtZXJpY3RleHRib3gvbnVtZXJpY3RleHRib3guanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBlajJfYmFzZV8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBDTEFTU05BTUVTID0ge1xuICAgICAgICBSVEw6ICdlLXJ0bCcsXG4gICAgICAgIERJU0FCTEU6ICdlLWRpc2FibGVkJyxcbiAgICAgICAgSU5QVVQ6ICdlLWlucHV0JyxcbiAgICAgICAgSU5QVVRHUk9VUDogJ2UtaW5wdXQtZ3JvdXAnLFxuICAgICAgICBGTE9BVElOUFVUOiAnZS1mbG9hdC1pbnB1dCcsXG4gICAgICAgIEZMT0FUTElORTogJ2UtZmxvYXQtbGluZScsXG4gICAgICAgIEZMT0FUVEVYVDogJ2UtZmxvYXQtdGV4dCcsXG4gICAgICAgIENMRUFSSUNPTjogJ2UtY2xlYXItaWNvbicsXG4gICAgICAgIENMRUFSSUNPTkhJREU6ICdlLWNsZWFyLWljb24taGlkZScsXG4gICAgICAgIExBQkVMVE9QOiAnZS1sYWJlbC10b3AnLFxuICAgICAgICBMQUJFTEJPVFRPTTogJ2UtbGFiZWwtYm90dG9tJyxcbiAgICAgICAgTk9GTE9BVExBQkVMOiAnZS1uby1mbG9hdC1sYWJlbCcsXG4gICAgICAgIElOUFVUQ1VTVE9NVEFHOiAnZS1pbnB1dC1jdXN0b20tdGFnJyxcbiAgICAgICAgRkxPQVRDVVNUT01UQUc6ICdlLWZsb2F0LWN1c3RvbS10YWcnXG4gICAgfTtcbiAgICB2YXIgSW5wdXQ7XG4gICAgKGZ1bmN0aW9uIChJbnB1dCkge1xuICAgICAgICB2YXIgcHJpdmF0ZUlucHV0T2JqID0ge1xuICAgICAgICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgICAgICAgYnV0dG9uczogW10sXG4gICAgICAgICAgICBjbGVhckJ1dHRvbjogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVJbnB1dChhcmdzKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRPYmplY3QgPSB7IGNvbnRhaW5lcjogbnVsbCwgYnV0dG9uczogW10sIGNsZWFyQnV0dG9uOiBudWxsIH07XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLmZsb2F0TGFiZWxUeXBlKSB8fCBhcmdzLmZsb2F0TGFiZWxUeXBlID09PSAnTmV2ZXInKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRPYmplY3QuY29udGFpbmVyID0gY3JlYXRlSW5wdXRDb250YWluZXIoYXJncywgQ0xBU1NOQU1FUy5JTlBVVEdST1VQLCBDTEFTU05BTUVTLklOUFVUQ1VTVE9NVEFHLCAnc3BhbicpO1xuICAgICAgICAgICAgICAgIGFyZ3MuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpbnB1dE9iamVjdC5jb250YWluZXIsIGFyZ3MuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbYXJncy5lbGVtZW50XSwgQ0xBU1NOQU1FUy5JTlBVVCk7XG4gICAgICAgICAgICAgICAgaW5wdXRPYmplY3QuY29udGFpbmVyLmFwcGVuZENoaWxkKGFyZ3MuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVGbG9hdGluZ0lucHV0KGFyZ3MsIGlucHV0T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyZ3MuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnZS1pbnB1dC1ncm91cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdlLWlucHV0LWZvY3VzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhcmdzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnZS1pbnB1dC1ncm91cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdlLWlucHV0LWZvY3VzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoYXJncy5wcm9wZXJ0aWVzKSAmJiAhZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLnByb3BlcnRpZXMuc2hvd0NsZWFyQnV0dG9uKSAmJiBhcmdzLnByb3BlcnRpZXMuc2hvd0NsZWFyQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRPYmplY3QuY2xlYXJCdXR0b24gPSBjcmVhdGVDbGVhckJ1dHRvbihhcmdzLmVsZW1lbnQsIGlucHV0T2JqZWN0LmNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0T2JqZWN0LmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5GTE9BVElOUFVUKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtpbnB1dE9iamVjdC5jb250YWluZXJdLCBDTEFTU05BTUVTLklOUFVUR1JPVVApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLmJ1dHRvbnMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRPYmplY3QuYnV0dG9ucy5wdXNoKGFwcGVuZFNwYW4oYXJncy5idXR0b25zW2ldLCBpbnB1dE9iamVjdC5jb250YWluZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dE9iamVjdCA9IHNldFByb3BlcnR5VmFsdWUoYXJncywgaW5wdXRPYmplY3QpO1xuICAgICAgICAgICAgcHJpdmF0ZUlucHV0T2JqID0gaW5wdXRPYmplY3Q7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXRPYmplY3Q7XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQuY3JlYXRlSW5wdXQgPSBjcmVhdGVJbnB1dDtcbiAgICAgICAgZnVuY3Rpb24gX2ZvY3VzRm4oKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBnZXRQYXJlbnROb2RlKHRoaXMpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2UtZmxvYXQtdGV4dCcpWzBdO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbbGFiZWxdLCBDTEFTU05BTUVTLkxBQkVMVE9QKTtcbiAgICAgICAgICAgIGlmIChsYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5MQUJFTEJPVFRPTSkpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLnJlbW92ZUNsYXNzKFtsYWJlbF0sIENMQVNTTkFNRVMuTEFCRUxCT1RUT00pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9ibHVyRm4oKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0aGlzKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0udmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2UtZmxvYXQtdGV4dCcpWzBdO1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5MQUJFTFRPUCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5yZW1vdmVDbGFzcyhbbGFiZWxdLCBDTEFTU05BTUVTLkxBQkVMVE9QKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbbGFiZWxdLCBDTEFTU05BTUVTLkxBQkVMQk9UVE9NKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB3aXJlRmxvYXRpbmdFdmVudHMoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIF9mb2N1c0ZuKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIF9ibHVyRm4pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVud2lyZUZsb2F0aW5nRXZlbnRzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBfZm9jdXNGbik7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBfYmx1ckZuKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVGbG9hdGluZ0lucHV0KGFyZ3MsIGlucHV0T2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgdmFyIGZsb2F0TGluZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBmbG9hdExhYmVsRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChhcmdzLmZsb2F0TGFiZWxUeXBlID09PSAnQXV0bycpIHtcbiAgICAgICAgICAgICAgICB3aXJlRmxvYXRpbmdFdmVudHMoYXJncy5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGlucHV0T2JqZWN0LmNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIgPSBjcmVhdGVJbnB1dENvbnRhaW5lcihhcmdzLCBDTEFTU05BTUVTLkZMT0FUSU5QVVQsIENMQVNTTkFNRVMuRkxPQVRDVVNUT01UQUcsICdkaXYnKTtcbiAgICAgICAgICAgICAgICBhcmdzLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaW5wdXRPYmplY3QuY29udGFpbmVyLCBhcmdzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGFyZ3MuY3VzdG9tVGFnKSkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIuY2xhc3NMaXN0LmFkZChDTEFTU05BTUVTLkZMT0FUQ1VTVE9NVEFHKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXRPYmplY3QuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQ0xBU1NOQU1FUy5GTE9BVElOUFVUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZsb2F0TGluZWxlbWVudCA9IGVqMl9iYXNlXzEuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBDTEFTU05BTUVTLkZMT0FUTElORSB9KTtcbiAgICAgICAgICAgIGZsb2F0TGFiZWxFbGVtZW50ID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgY2xhc3NOYW1lOiBDTEFTU05BTUVTLkZMT0FUVEVYVCB9KTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLmVsZW1lbnQuaWQpICYmIGFyZ3MuZWxlbWVudC5pZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBmbG9hdExhYmVsRWxlbWVudC5pZCA9ICdsYWJlbF8nICsgYXJncy5lbGVtZW50LmlkLnJlcGxhY2UoLyAvZywgJ18nKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmF0dHJpYnV0ZXMoYXJncy5lbGVtZW50LCB7ICdhcmlhLWxhYmVsbGVkYnknOiBmbG9hdExhYmVsRWxlbWVudC5pZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLmVsZW1lbnQucGxhY2Vob2xkZXIpICYmIGFyZ3MuZWxlbWVudC5wbGFjZWhvbGRlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBmbG9hdExhYmVsRWxlbWVudC5pbm5lckhUTUwgPSBhcmdzLmVsZW1lbnQucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICAgICAgYXJncy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLnByb3BlcnRpZXMpICYmICFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGFyZ3MucHJvcGVydGllcy5wbGFjZWhvbGRlcikgJiZcbiAgICAgICAgICAgICAgICBhcmdzLnByb3BlcnRpZXMucGxhY2Vob2xkZXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZmxvYXRMYWJlbEVsZW1lbnQuaW5uZXJIVE1MID0gYXJncy5wcm9wZXJ0aWVzLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmbG9hdExhYmVsRWxlbWVudC5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIuY2xhc3NMaXN0LmFkZChDTEFTU05BTUVTLk5PRkxPQVRMQUJFTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIuYXBwZW5kQ2hpbGQoYXJncy5lbGVtZW50KTtcbiAgICAgICAgICAgIGlucHV0T2JqZWN0LmNvbnRhaW5lci5hcHBlbmRDaGlsZChmbG9hdExpbmVsZW1lbnQpO1xuICAgICAgICAgICAgaW5wdXRPYmplY3QuY29udGFpbmVyLmFwcGVuZENoaWxkKGZsb2F0TGFiZWxFbGVtZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZUxhYmVsU3RhdGUoYXJncy5lbGVtZW50LnZhbHVlLCBmbG9hdExhYmVsRWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoYXJncy5mbG9hdExhYmVsVHlwZSA9PT0gJ0Fsd2F5cycpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmxvYXRMYWJlbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuTEFCRUxCT1RUT00pKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoW2Zsb2F0TGFiZWxFbGVtZW50XSwgQ0xBU1NOQU1FUy5MQUJFTEJPVFRPTSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW2Zsb2F0TGFiZWxFbGVtZW50XSwgQ0xBU1NOQU1FUy5MQUJFTFRPUCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJncy5mbG9hdExhYmVsVHlwZSA9PT0gJ0F1dG8nKSB7XG4gICAgICAgICAgICAgICAgYXJncy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhYmVsU3RhdGUoYXJncy5lbGVtZW50LnZhbHVlLCBmbG9hdExhYmVsRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXJncy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGFiZWxTdGF0ZShhcmdzLmVsZW1lbnQudmFsdWUsIGZsb2F0TGFiZWxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXRQcm9wZXJ0eVZhbHVlKGFyZ3MsIGlucHV0T2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoYXJncy5wcm9wZXJ0aWVzKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhhcmdzLnByb3BlcnRpZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjc3NDbGFzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzQ2xhc3MoYXJncy5wcm9wZXJ0aWVzLmNzc0NsYXNzLCBbaW5wdXRPYmplY3QuY29udGFpbmVyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbmFibGVkKGFyZ3MucHJvcGVydGllcy5lbmFibGVkLCBhcmdzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlUnRsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbmFibGVSdGwoYXJncy5wcm9wZXJ0aWVzLmVuYWJsZVJ0bCwgW2lucHV0T2JqZWN0LmNvbnRhaW5lcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncGxhY2Vob2xkZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyKGFyZ3MucHJvcGVydGllcy5wbGFjZWhvbGRlciwgYXJncy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlYWRvbmx5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWFkb25seShhcmdzLnByb3BlcnRpZXMucmVhZG9ubHksIGFyZ3MuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5wdXRPYmplY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlSWNvblN0YXRlKHZhbHVlLCBidXR0b24pIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoW2J1dHRvbl0sIENMQVNTTkFNRVMuQ0xFQVJJQ09OSElERSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtidXR0b25dLCBDTEFTU05BTUVTLkNMRUFSSUNPTkhJREUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUxhYmVsU3RhdGUodmFsdWUsIGxhYmVsKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtsYWJlbF0sIENMQVNTTkFNRVMuTEFCRUxUT1ApO1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5MQUJFTEJPVFRPTSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5yZW1vdmVDbGFzcyhbbGFiZWxdLCBDTEFTU05BTUVTLkxBQkVMQk9UVE9NKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGFiZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuTEFCRUxUT1ApKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoW2xhYmVsXSwgQ0xBU1NOQU1FUy5MQUJFTFRPUCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW2xhYmVsXSwgQ0xBU1NOQU1FUy5MQUJFTEJPVFRPTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNsZWFyQnV0dG9uKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IGVqMl9iYXNlXzEuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBDTEFTU05BTUVTLkNMRUFSSUNPTiB9KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHByaXZhdGVJbnB1dE9iai5jb250YWluZXIpICYmXG4gICAgICAgICAgICAgICAgcHJpdmF0ZUlucHV0T2JqLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5GTE9BVElOUFVUKSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW3ByaXZhdGVJbnB1dE9iai5jb250YWluZXJdLCBDTEFTU05BTUVTLklOUFVUR1JPVVApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbYnV0dG9uXSwgQ0xBU1NOQU1FUy5DTEVBUklDT05ISURFKTtcbiAgICAgICAgICAgIHdpcmVDbGVhckJ0bkV2ZW50cyhlbGVtZW50LCBidXR0b24pO1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB3aXJlQ2xlYXJCdG5FdmVudHMoZWxlbWVudCwgYnV0dG9uKSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkRJU0FCTEUpIHx8IGVsZW1lbnQucmVhZE9ubHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtidXR0b25dLCBDTEFTU05BTUVTLkNMRUFSSUNPTkhJREUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUljb25TdGF0ZShlbGVtZW50LnZhbHVlLCBidXR0b24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlSWNvblN0YXRlKGVsZW1lbnQudmFsdWUsIGJ1dHRvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBlajJfYmFzZV8xLmFkZENsYXNzKFtidXR0b25dLCBDTEFTU05BTUVTLkNMRUFSSUNPTkhJREUpOyB9LCAyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVMYWJlbChlbGVtZW50LCBmbG9hdExhYmVsVHlwZSkge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkZMT0FUSU5QVVQpICYmIGZsb2F0TGFiZWxUeXBlID09PSAnQXV0bycpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2UtZmxvYXQtdGV4dCcpWzBdO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxhYmVsU3RhdGUoZWxlbWVudC52YWx1ZSwgbGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUlucHV0Q29udGFpbmVyKGFyZ3MsIGNsYXNzTmFtZSwgdGFnQ2xhc3MsIHRhZykge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLmN1c3RvbVRhZykpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBlajJfYmFzZV8xLmNyZWF0ZUVsZW1lbnQoYXJncy5jdXN0b21UYWcsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGFnQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KHRhZywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUsIGVsZW1lbnQsIGZsb2F0TGFiZWxUeXBlLCBjbGVhckJ1dHRvbikge1xuICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKCghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChmbG9hdExhYmVsVHlwZSkpICYmIGZsb2F0TGFiZWxUeXBlID09PSAnQXV0bycpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUxhYmVsKGVsZW1lbnQsIGZsb2F0TGFiZWxUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChjbGVhckJ1dHRvbikgJiYgY2xlYXJCdXR0b24pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IHBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShDTEFTU05BTUVTLkNMRUFSSUNPTilbMF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUgJiYgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2UtaW5wdXQtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLnJlbW92ZUNsYXNzKFtidXR0b25dLCBDTEFTU05BTUVTLkNMRUFSSUNPTkhJREUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbYnV0dG9uXSwgQ0xBU1NOQU1FUy5DTEVBUklDT05ISURFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQuc2V0VmFsdWUgPSBzZXRWYWx1ZTtcbiAgICAgICAgZnVuY3Rpb24gc2V0Q3NzQ2xhc3MoY3NzQ2xhc3MsIGVsZW1lbnRzLCBvbGRDbGFzcykge1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKG9sZENsYXNzKSAmJiBvbGRDbGFzcyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLnJlbW92ZUNsYXNzKGVsZW1lbnRzLCBvbGRDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoY3NzQ2xhc3MpICYmIGNzc0NsYXNzICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoZWxlbWVudHMsIGNzc0NsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBJbnB1dC5zZXRDc3NDbGFzcyA9IHNldENzc0NsYXNzO1xuICAgICAgICBmdW5jdGlvbiBzZXRQbGFjZWhvbGRlcihwbGFjZWhvbGRlciwgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50ID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkZMT0FUSU5QVVQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHBsYWNlaG9sZGVyKSAmJiBwbGFjZWhvbGRlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENMQVNTTkFNRVMuRkxPQVRURVhUKVswXS50ZXh0Q29udGVudCA9IHBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NOQU1FUy5OT0ZMT0FUTEFCRUwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTTkFNRVMuTk9GTE9BVExBQkVMKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENMQVNTTkFNRVMuRkxPQVRURVhUKVswXS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChwbGFjZWhvbGRlcikgJiYgcGxhY2Vob2xkZXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyhlbGVtZW50LCB7ICdwbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyLCAnYXJpYS1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIElucHV0LnNldFBsYWNlaG9sZGVyID0gc2V0UGxhY2Vob2xkZXI7XG4gICAgICAgIGZ1bmN0aW9uIHNldFJlYWRvbmx5KGlzUmVhZG9ubHksIGVsZW1lbnQsIGZsb2F0TGFiZWxUeXBlKSB7XG4gICAgICAgICAgICBpZiAoaXNSZWFkb25seSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyhlbGVtZW50LCB7IHJlYWRvbmx5OiAnJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGZsb2F0TGFiZWxUeXBlKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlTGFiZWwoZWxlbWVudCwgZmxvYXRMYWJlbFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIElucHV0LnNldFJlYWRvbmx5ID0gc2V0UmVhZG9ubHk7XG4gICAgICAgIGZ1bmN0aW9uIHNldEVuYWJsZVJ0bChpc1J0bCwgZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGlmIChpc1J0bCkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoZWxlbWVudHMsIENMQVNTTkFNRVMuUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoZWxlbWVudHMsIENMQVNTTkFNRVMuUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBJbnB1dC5zZXRFbmFibGVSdGwgPSBzZXRFbmFibGVSdGw7XG4gICAgICAgIGZ1bmN0aW9uIHNldEVuYWJsZWQoaXNFbmFibGUsIGVsZW1lbnQsIGZsb2F0TGFiZWxUeXBlKSB7XG4gICAgICAgICAgICB2YXIgZGlzYWJsZWRBdHRycyA9IHsgJ2Rpc2FibGVkJzogJ2Rpc2FibGVkJywgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScgfTtcbiAgICAgICAgICAgIGlmIChpc0VuYWJsZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU05BTUVTLkRJU0FCTEUpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZXMoZGlzYWJsZWRBdHRycywgZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NOQU1FUy5ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICBhZGRBdHRyaWJ1dGVzKGRpc2FibGVkQXR0cnMsIGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGZsb2F0TGFiZWxUeXBlKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlTGFiZWwoZWxlbWVudCwgZmxvYXRMYWJlbFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIElucHV0LnNldEVuYWJsZWQgPSBzZXRFbmFibGVkO1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGVzKGF0dHJzLCBlbGVtZW50KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMoYXR0cnMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudEVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2Rpc2FibGVkJykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NOQU1FUy5ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2Rpc2FibGVkJyAmJiBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLklOUFVUR1JPVVApKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU05BTUVTLkRJU0FCTEUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAncGxhY2Vob2xkZXInICYmIHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuRkxPQVRJTlBVVCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENMQVNTTkFNRVMuRkxPQVRURVhUKVswXS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQucmVtb3ZlQXR0cmlidXRlcyA9IHJlbW92ZUF0dHJpYnV0ZXM7XG4gICAgICAgIGZ1bmN0aW9uIGFkZEF0dHJpYnV0ZXMoYXR0cnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhhdHRycyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50ID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU05BTUVTLkRJU0FCTEUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnZGlzYWJsZWQnICYmIHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuSU5QVVRHUk9VUCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTTkFNRVMuRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdwbGFjZWhvbGRlcicgJiYgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5GTE9BVElOUFVUKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ0xBU1NOQU1FUy5GTE9BVFRFWFQpWzBdLnRleHRDb250ZW50ID0gYXR0cnNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIElucHV0LmFkZEF0dHJpYnV0ZXMgPSBhZGRBdHRyaWJ1dGVzO1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVGbG9hdGluZyhpbnB1dCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGlucHV0LmNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChjb250YWluZXIpICYmIGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5GTE9BVElOUFVUKSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dEVsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIENMQVNTTkFNRVMuRkxPQVRURVhUKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB2YXIgY2xlYXJCdXR0b24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmUtY2xlYXItaWNvbicpICE9PSBudWxsO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuZGV0YWNoKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIENMQVNTTkFNRVMuRkxPQVRMSU5FKSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5kZXRhY2goY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xBU1NOQU1FUy5GTE9BVFRFWFQpKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmNsYXNzTGlzdChjb250YWluZXIsIFtDTEFTU05BTUVTLklOUFVUR1JPVVBdLCBbQ0xBU1NOQU1FUy5GTE9BVElOUFVUXSk7XG4gICAgICAgICAgICAgICAgdW53aXJlRmxvYXRpbmdFdmVudHMoaW5wdXRFbGUpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyhpbnB1dEVsZSwgeyAncGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlciB9KTtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZS5jbGFzc0xpc3QuYWRkKENMQVNTTkFNRVMuSU5QVVQpO1xuICAgICAgICAgICAgICAgIGlmICghY2xlYXJCdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGUucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBJbnB1dC5yZW1vdmVGbG9hdGluZyA9IHJlbW92ZUZsb2F0aW5nO1xuICAgICAgICBmdW5jdGlvbiBhZGRGbG9hdGluZyhpbnB1dCwgdHlwZSwgcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBlajJfYmFzZV8xLmNsb3Nlc3QoaW5wdXQsICcuJyArIENMQVNTTkFNRVMuSU5QVVRHUk9VUCk7XG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gJ05ldmVyJykge1xuICAgICAgICAgICAgICAgIHZhciBjdXN0b21UYWcgPSBjb250YWluZXIudGFnTmFtZTtcbiAgICAgICAgICAgICAgICBjdXN0b21UYWcgPSBjdXN0b21UYWcgIT09ICdESVYnICYmIGN1c3RvbVRhZyAhPT0gJ1NQQU4nID8gY3VzdG9tVGFnIDogbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IHsgZWxlbWVudDogaW5wdXQsIGZsb2F0TGFiZWxUeXBlOiB0eXBlLCBjdXN0b21UYWc6IGN1c3RvbVRhZywgcHJvcGVydGllczogeyBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIgfSB9O1xuICAgICAgICAgICAgICAgIHZhciBpY29uRWxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5lLWNsZWFyLWljb24nKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRPYmogPSB7IGNvbnRhaW5lcjogY29udGFpbmVyIH07XG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU05BTUVTLklOUFVUKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVGbG9hdGluZ0lucHV0KGFyZ3MsIGlucHV0T2JqKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChpY29uRWxlKSkge1xuICAgICAgICAgICAgICAgICAgICBpY29uRWxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5lLWlucHV0LWdyb3VwLWljb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoaWNvbkVsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NOQU1FUy5JTlBVVEdST1VQKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbG9hdExpbmUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLicgKyBDTEFTU05BTUVTLkZMT0FUTElORSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbG9hdFRleHQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLicgKyBDTEFTU05BTUVTLkZMT0FUVEVYVCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoaW5wdXQsIGljb25FbGUpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGZsb2F0TGluZSwgaWNvbkVsZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZmxvYXRUZXh0LCBpY29uRWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQuYWRkRmxvYXRpbmcgPSBhZGRGbG9hdGluZztcbiAgICAgICAgZnVuY3Rpb24gYXBwZW5kU3BhbihpY29uQ2xhc3MsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IGVqMl9iYXNlXzEuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBpY29uQ2xhc3MgfSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLklOUFVUR1JPVVApKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQ0xBU1NOQU1FUy5JTlBVVEdST1VQKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdlLWRpc2FibGVkJykgJiYgIWNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZS1pbnB1dC1idG4tcmlwcGxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlID0gdGhpcztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2UtaW5wdXQtYnRuLXJpcHBsZScpOyB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICB9XG4gICAgICAgIElucHV0LmFwcGVuZFNwYW4gPSBhcHBlbmRTcGFuO1xuICAgIH0pKElucHV0ID0gZXhwb3J0cy5JbnB1dCB8fCAoZXhwb3J0cy5JbnB1dCA9IHt9KSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2lucHV0L2lucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vYmFzZS9pbmRleFwiLCBcIi4vbWFza2VkdGV4dGJveC9pbmRleFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGluZGV4XzEsIGluZGV4XzIpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGluZGV4XzEpO1xuICAgIF9fZXhwb3J0KGluZGV4XzIpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXNrZWR0ZXh0Ym94L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vbWFzay1iYXNlXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbWFza19iYXNlXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KG1hc2tfYmFzZV8xKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFza2VkdGV4dGJveC9iYXNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiLi4vLi4vaW5wdXQvaW5wdXRcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBlajJfYmFzZV8xLCBpbnB1dF8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBFUlJPUiA9ICdlLWVycm9yJztcbiAgICB2YXIgSU5QVVRHUk9VUCA9ICdlLWlucHV0LWdyb3VwJztcbiAgICB2YXIgRkxPQVRJTlBVVCA9ICdlLWZsb2F0LWlucHV0JztcbiAgICB2YXIgVVRJTE1BU0sgPSAnZS11dGlsaXR5LW1hc2snO1xuICAgIHZhciBUT1BMQUJFTCA9ICdlLWxhYmVsLXRvcCc7XG4gICAgdmFyIEJPVFRPTUxBQkVMID0gJ2UtbGFiZWwtYm90dG9tJztcbiAgICBleHBvcnRzLnJlZ3VsYXJFeHByZXNzaW9ucyA9IHtcbiAgICAgICAgJzAnOiAnWzAtOV0nLFxuICAgICAgICAnOSc6ICdbMC05IF0nLFxuICAgICAgICAnIyc6ICdbMC05ICstXScsXG4gICAgICAgICdMJzogJ1tBLVphLXpdJyxcbiAgICAgICAgJz8nOiAnW0EtWmEteiBdJyxcbiAgICAgICAgJyYnOiAnW15cXHg3ZiBdKycsXG4gICAgICAgICdDJzogJ1teXFx4N2ZdKycsXG4gICAgICAgICdBJzogJ1tBLVphLXowLTldJyxcbiAgICAgICAgJ2EnOiAnW0EtWmEtejAtOSBdJyxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU1hc2soKSB7XG4gICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ3JvbGUnOiAndGV4dGJveCcsICdhdXRvY29tcGxldGUnOiAnb2ZmJywgJ2F1dG9jb3JyZWN0JzogJ29mZicsICdhdXRvY2FwaXRhbGl6ZSc6ICdvZmYnLFxuICAgICAgICAgICAgJ3NwZWxsY2hlY2snOiAnZmFsc2UnLCAnYXJpYS1saXZlJzogJ2Fzc2VydGl2ZScsICdhcmlhLXZhbHVlbm93JzogJycgfSk7XG4gICAgICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgICAgICAgIHZhciBzcGxpdE1hc2sgPSB0aGlzLm1hc2suc3BsaXQoJ10nKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BsaXRNYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0TWFza1tpXVtzcGxpdE1hc2tbaV0ubGVuZ3RoIC0gMV0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBzcGxpdE1hc2tbaV0gPSBzcGxpdE1hc2tbaV0gKyAnXSc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGxpdElubmVyTWFzayA9IHNwbGl0TWFza1tpXS5zcGxpdCgnWycpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNwbGl0SW5uZXJNYXNrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRJbm5lck1hc2tbal1bc3BsaXRJbm5lck1hc2tbal0ubGVuZ3RoIC0gMV0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0SW5uZXJNYXNrW2pdID0gc3BsaXRJbm5lck1hc2tbal0gKyAnWyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoSW50b1JlZ0V4cENvbGxlYy5jYWxsKHRoaXMsIHNwbGl0SW5uZXJNYXNrW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwbGl0SW5uZXJNYXNrID0gc3BsaXRNYXNrW2ldLnNwbGl0KCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdElubmVyTWFzay5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hrU3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc3BsaXRJbm5lck1hc2subGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRJbm5lck1hc2tbal0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlYy5wdXNoKCdbJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuTWFzayArPSBzcGxpdElubmVyTWFza1tqXSArICdbJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3BsaXRJbm5lck1hc2tbal0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoa1NwYWNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKHNwbGl0SW5uZXJNYXNrW2pdICE9PSAnJyAmJiBjaGtTcGFjZSkgfHwgaiA9PT0gc3BsaXRJbm5lck1hc2subGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlYy5wdXNoKCdbJyArIHNwbGl0SW5uZXJNYXNrW2pdICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRkZW5NYXNrICs9IHRoaXMucHJvbXB0Q2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hrU3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hJbnRvUmVnRXhwQ29sbGVjLmNhbGwodGhpcywgc3BsaXRJbm5lck1hc2tbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hJbnRvUmVnRXhwQ29sbGVjLmNhbGwodGhpcywgc3BsaXRJbm5lck1hc2tbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lc2NhcGVNYXNrVmFsdWUgPSB0aGlzLmhpZGRlbk1hc2s7XG4gICAgICAgICAgICB0aGlzLnByb21wdE1hc2sgPSB0aGlzLmhpZGRlbk1hc2sucmVwbGFjZSgvWzA5P0xDQWEjJl0vZywgdGhpcy5wcm9tcHRDaGFyKTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLmN1c3RvbUNoYXJhY3RlcnMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb21wdE1hc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tQ2hhcmFjdGVyc1t0aGlzLnByb21wdE1hc2tbaV1dKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRNYXNrID0gdGhpcy5wcm9tcHRNYXNrLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLnByb21wdE1hc2tbaV0sICdnJyksIHRoaXMucHJvbXB0Q2hhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXNjYXBlTnVtYmVyID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGRlbk1hc2subWF0Y2gobmV3IFJlZ0V4cCgvXFxcXC8pKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oaWRkZW5NYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlTnVtYmVyID0gdGhpcy5oaWRkZW5NYXNrLmxlbmd0aCAtIHRoaXMucHJvbXB0TWFzay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGogPSBqIC0gZXNjYXBlTnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGkgPiAwICYmIHRoaXMuaGlkZGVuTWFza1tpIC0gMV0gIT09ICdcXFxcJykgJiYgKHRoaXMuaGlkZGVuTWFza1tpXSA9PT0gJz4nIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbk1hc2tbaV0gPT09ICc8JyB8fCB0aGlzLmhpZGRlbk1hc2tbaV0gPT09ICd8JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0TWFzayA9IHRoaXMucHJvbXB0TWFzay5zdWJzdHJpbmcoMCwgaikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0TWFzay5zdWJzdHJpbmcoKGkgKyAxKSAtIGVzY2FwZU51bWJlciwgdGhpcy5wcm9tcHRNYXNrLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVzY2FwZU1hc2tWYWx1ZSA9IHRoaXMuZXNjYXBlTWFza1ZhbHVlLnN1YnN0cmluZygwLCBqKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lc2NhcGVNYXNrVmFsdWUuc3Vic3RyaW5nKChpICsgMSkgLSBlc2NhcGVOdW1iZXIsIHRoaXMuZXNjYXBlTWFza1ZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuTWFza1tpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb21wdE1hc2sgPSB0aGlzLnByb21wdE1hc2suc3Vic3RyaW5nKDAsIGopICsgdGhpcy5oaWRkZW5NYXNrW2kgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRNYXNrLnN1YnN0cmluZygoaSArIDIpIC0gZXNjYXBlTnVtYmVyLCB0aGlzLnByb21wdE1hc2subGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXNjYXBlTWFza1ZhbHVlID0gdGhpcy5lc2NhcGVNYXNrVmFsdWUuc3Vic3RyaW5nKDAsIGopICsgdGhpcy5lc2NhcGVNYXNrVmFsdWVbaSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVzY2FwZU1hc2tWYWx1ZS5zdWJzdHJpbmcoKGkgKyAyKSAtIGVzY2FwZU51bWJlciwgdGhpcy5lc2NhcGVNYXNrVmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0TWFzayA9IHRoaXMucHJvbXB0TWFzay5yZXBsYWNlKC9bPnw8XS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lc2NhcGVNYXNrVmFsdWUgPSB0aGlzLmhpZGRlbk1hc2sucmVwbGFjZSgvWz58PF0vZywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMS5hdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCwgeyAnYXJpYS1pbnZhbGlkJzogJ2ZhbHNlJyB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnRzLmNyZWF0ZU1hc2sgPSBjcmVhdGVNYXNrO1xuICAgIGZ1bmN0aW9uIGFwcGx5TWFzaygpIHtcbiAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgdGhpcy5wcm9tcHRNYXNrKTtcbiAgICAgICAgc2V0TWFza1ZhbHVlLmNhbGwodGhpcywgdGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIGV4cG9ydHMuYXBwbHlNYXNrID0gYXBwbHlNYXNrO1xuICAgIGZ1bmN0aW9uIHdpcmVFdmVudHMoKSB7XG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdrZXlkb3duJywgbWFza0lucHV0S2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAna2V5cHJlc3MnLCBtYXNrSW5wdXRLZXlQcmVzc0hhbmRsZXIsIHRoaXMpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAna2V5dXAnLCBtYXNrSW5wdXRLZXlVcEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnZm9jdXMnLCBtYXNrSW5wdXRGb2N1c0hhbmRsZXIsIHRoaXMpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnYmx1cicsIG1hc2tJbnB1dEJsdXJIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ3Bhc3RlJywgbWFza0lucHV0UGFzdGVIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2N1dCcsIG1hc2tJbnB1dEN1dEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnZHJvcCcsIG1hc2tJbnB1dERyb3BIYW5kbGVyLCB0aGlzKTtcbiAgICB9XG4gICAgZXhwb3J0cy53aXJlRXZlbnRzID0gd2lyZUV2ZW50cztcbiAgICBmdW5jdGlvbiB1bndpcmVFdmVudHMoKSB7XG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdrZXlkb3duJywgbWFza0lucHV0S2V5RG93bkhhbmRsZXIpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAna2V5cHJlc3MnLCBtYXNrSW5wdXRLZXlQcmVzc0hhbmRsZXIpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAna2V5dXAnLCBtYXNrSW5wdXRLZXlVcEhhbmRsZXIpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnZm9jdXMnLCBtYXNrSW5wdXRGb2N1c0hhbmRsZXIpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnYmx1cicsIG1hc2tJbnB1dEJsdXJIYW5kbGVyKTtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ3Bhc3RlJywgbWFza0lucHV0UGFzdGVIYW5kbGVyKTtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2N1dCcsIG1hc2tJbnB1dEN1dEhhbmRsZXIpO1xuICAgIH1cbiAgICBleHBvcnRzLnVud2lyZUV2ZW50cyA9IHVud2lyZUV2ZW50cztcbiAgICBmdW5jdGlvbiB1bnN0cmlwcGVkVmFsdWUoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgZXhwb3J0cy51bnN0cmlwcGVkVmFsdWUgPSB1bnN0cmlwcGVkVmFsdWU7XG4gICAgZnVuY3Rpb24gc3RyaXBwZWRWYWx1ZShlbGVtZW50KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICcnO1xuICAgICAgICB2YXIgayA9IDA7XG4gICAgICAgIHZhciBjaGVja01hc2sgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGVsZW1lbnQpICYmICFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMpICYmIGVsZW1lbnQudmFsdWUgIT09IHRoaXMucHJvbXB0TWFzaykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjaGVja01hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tNYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1trXSA9PT0gJz4nIHx8IHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW2tdID09PSAnPCcgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21SZWdFeHBDb2xsZWNba10gPT09ICd8JyB8fCB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1trXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tNYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja01hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChlbGVtZW50LnZhbHVlW2ldICE9PSB0aGlzLnByb21wdENoYXIpICYmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1trXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5yZWdFeHBDb2xsZWNbdGhpcy5jdXN0b21SZWdFeHBDb2xsZWNba11dKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5jdXN0b21SZWdFeHBDb2xsZWNba10ubGVuZ3RoID4gMiAmJiB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1trXVswXSA9PT0gJ1snICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW2tdW3RoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW2tdLmxlbmd0aCAtIDFdID09PSAnXScpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tQ2hhcmFjdGVycykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tQ2hhcmFjdGVyc1t0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1trXV0pKSkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gZWxlbWVudC52YWx1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICArK2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBleHBvcnRzLnN0cmlwcGVkVmFsdWUgPSBzdHJpcHBlZFZhbHVlO1xuICAgIGZ1bmN0aW9uIHB1c2hJbnRvUmVnRXhwQ29sbGVjKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdmFsdWUubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuTWFzayArPSB2YWx1ZVtrXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZVtrXSAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21SZWdFeHBDb2xsZWMucHVzaCh2YWx1ZVtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbWFza0lucHV0Rm9jdXNIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLmVsZW1lbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgdGhpcy5wcm9tcHRNYXNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgX3RoaXMuZWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydHMubWFza0lucHV0Rm9jdXNIYW5kbGVyID0gbWFza0lucHV0Rm9jdXNIYW5kbGVyO1xuICAgIGZ1bmN0aW9uIG1hc2tJbnB1dEJsdXJIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5lbGVtZW50LnZhbHVlID09PSB0aGlzLnByb21wdE1hc2sgJiYgdGhpcy5mbG9hdExhYmVsVHlwZSAhPT0gJ0Fsd2F5cycpIHtcbiAgICAgICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCAnJyk7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsRWxlbWVudCA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lLWZsb2F0LXRleHQnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mbG9hdExhYmVsVHlwZSA9PT0gJ0F1dG8nICYmICFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGxhYmVsRWxlbWVudCkgJiYgbGFiZWxFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhUT1BMQUJFTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5yZW1vdmVDbGFzcyhbbGFiZWxFbGVtZW50XSwgVE9QTEFCRUwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnRzLm1hc2tJbnB1dEJsdXJIYW5kbGVyID0gbWFza0lucHV0Qmx1ckhhbmRsZXI7XG4gICAgZnVuY3Rpb24gbWFza0lucHV0UGFzdGVIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgICAgICAgIHZhciBzSW5kZXhfMSA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIHZhciBlSW5kZXhfMSA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgICAgICB2YXIgb2xkVmFsdWVfMSA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsICcnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF90aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnJlZG9Db2xsZWMubGVuZ3RoID4gMCAmJiBfdGhpcy5yZWRvQ29sbGVjWzBdLnZhbHVlID09PSBfdGhpcy5lbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc3RyaXBwZWRWYWx1ZS5jYWxsKF90aGlzLCBfdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwoX3RoaXMsIG9sZFZhbHVlXzEpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzSW5kZXhfMTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IGVJbmRleF8xO1xuICAgICAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgICAgICBfdGhpcy5tYXNrS2V5UHJlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVWYWx1ZS5jYWxsKF90aGlzLCB2YWx1ZVtpXSwgZmFsc2UsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoaSA8IHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgX3RoaXMubWFza0tleVByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBtYXNrSW5wdXRDdXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgICAgICAgIHZhciBzSW5kZXhfMiA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIHZhciBlSW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kO1xuICAgICAgICAgICAgdGhpcy51bmRvQ29sbGVjLnB1c2goeyB2YWx1ZTogdGhpcy5lbGVtZW50LnZhbHVlLCBzdGFydEluZGV4OiB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQsIGVuZEluZGV4OiB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kIH0pO1xuICAgICAgICAgICAgdmFyIHZhbHVlXzEgPSB0aGlzLmVsZW1lbnQudmFsdWUuc3Vic3RyaW5nKDAsIHNJbmRleF8yKSArIHRoaXMucHJvbXB0TWFzay5zdWJzdHJpbmcoc0luZGV4XzIsIGVJbmRleCkgK1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC52YWx1ZS5zdWJzdHJpbmcoZUluZGV4KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKF90aGlzLCB2YWx1ZV8xKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gX3RoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzSW5kZXhfMjtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hc2tJbnB1dERyb3BIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGV4cG9ydHMubWFza0lucHV0RHJvcEhhbmRsZXIgPSBtYXNrSW5wdXREcm9wSGFuZGxlcjtcbiAgICBmdW5jdGlvbiBtYXNrSW5wdXRLZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5tYXNrKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSAhPT0gMjI5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgJiYgKGV2ZW50LmtleUNvZGUgPT09IDg5IHx8IGV2ZW50LmtleUNvZGUgPT09IDkwKSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZW1vdmVNYXNrSW5wdXRWYWx1ZXMuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTWFza0lucHV0VmFsdWVzLmNhbGwoX3RoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGFydFZhbHVlID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgJiYgKGV2ZW50LmtleUNvZGUgPT09IDg5IHx8IGV2ZW50LmtleUNvZGUgPT09IDkwKSkge1xuICAgICAgICAgICAgICAgIHZhciBjb2xsZWMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkwICYmIHRoaXMudW5kb0NvbGxlYy5sZW5ndGggPiAwICYmIHN0YXJ0VmFsdWUgIT09IHRoaXMudW5kb0NvbGxlY1t0aGlzLnVuZG9Db2xsZWMubGVuZ3RoIC0gMV0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjID0gdGhpcy51bmRvQ29sbGVjW3RoaXMudW5kb0NvbGxlYy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRvQ29sbGVjLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZWxlbWVudC52YWx1ZSwgc3RhcnRJbmRleDogdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSW5kZXg6IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsIGNvbGxlYy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IGNvbGxlYy5zdGFydEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gY29sbGVjLmVuZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZG9Db2xsZWMuc3BsaWNlKHRoaXMudW5kb0NvbGxlYy5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gODkgJiYgdGhpcy5yZWRvQ29sbGVjLmxlbmd0aCA+IDAgJiYgc3RhcnRWYWx1ZSAhPT0gdGhpcy5yZWRvQ29sbGVjWzBdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlYyA9IHRoaXMucmVkb0NvbGxlY1swXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRvQ29sbGVjLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZWxlbWVudC52YWx1ZSwgc3RhcnRJbmRleDogdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSW5kZXg6IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsIGNvbGxlYy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IGNvbGxlYy5zdGFydEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gY29sbGVjLmVuZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZG9Db2xsZWMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBtb2JpbGVSZW1vdmVGdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbGxlYztcbiAgICAgICAgdmFyIHNJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdmFyIGVJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgIGlmICh0aGlzLnJlZG9Db2xsZWMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29sbGVjID0gdGhpcy5yZWRvQ29sbGVjWzBdO1xuICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgY29sbGVjLnZhbHVlKTtcbiAgICAgICAgICAgIGlmICgoY29sbGVjLnN0YXJ0SW5kZXggLSBzSW5kZXgpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY29sbGVjLnN0YXJ0SW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IGNvbGxlYy5lbmRJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IGVJbmRleCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCB0aGlzLnByb21wdE1hc2spO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnRzLm1vYmlsZVJlbW92ZUZ1bmN0aW9uID0gbW9iaWxlUmVtb3ZlRnVuY3Rpb247XG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFza0lucHV0VmFsdWVzKGV2ZW50KSB7XG4gICAgICAgIHZhciBpc1JlbW92ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgb2xkRXZlbnRWYWw7XG4gICAgICAgIHZhciBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC52YWx1ZS5sZW5ndGggPCB0aGlzLnByb21wdE1hc2subGVuZ3RoKSB7XG4gICAgICAgICAgICBpc1JlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICBtb2JpbGVSZW1vdmVGdW5jdGlvbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgb2xkRXZlbnRWYWwgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluaXRTdGFydEluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB2YXIgaW5pdEVuZEluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZDtcbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHZhciBlbmRJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgIHZhciBtYXNrVmFsdWUgPSB0aGlzLmhpZGRlbk1hc2sucmVwbGFjZSgvWz58XFxcXDxdL2csICcnKTtcbiAgICAgICAgdmFyIGN1ck1hc2sgPSBtYXNrVmFsdWVbc3RhcnRJbmRleCAtIDFdO1xuICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoaXNSZW1vdmUgfHwgZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0Nikge1xuICAgICAgICAgICAgdGhpcy51bmRvQ29sbGVjLnB1c2goeyB2YWx1ZTogdGhpcy5lbGVtZW50LnZhbHVlLCBzdGFydEluZGV4OiB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQsIGVuZEluZGV4OiBlbmRJbmRleCB9KTtcbiAgICAgICAgICAgIHZhciBtdWx0aXBsZURlbCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPiAwIHx8ICgoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0NikgJiYgc3RhcnRJbmRleCA8IHRoaXMuZWxlbWVudC52YWx1ZS5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiAoKHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgLSBzdGFydEluZGV4KSAhPT0gdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRJbmRleCAhPT0gZW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlRGVsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSA0Nikge1xuICAgICAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLS1pbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IHN0YXJ0SW5kZXg7IChldmVudC5rZXlDb2RlID09PSA4IHx8IGlzUmVtb3ZlIHx8IG11bHRpcGxlRGVsKSA/IGsgPiBpbmRleCA6IGsgPCBpbmRleDsgKGV2ZW50LmtleUNvZGUgPT09IDggfHwgaXNSZW1vdmUgfHwgbXVsdGlwbGVEZWwpID8gay0tIDogaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyAoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBpc1JlbW92ZSB8fCBtdWx0aXBsZURlbCkgPyBpID4gMCA6IGkgPCB0aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoOyAoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBpc1JlbW92ZSB8fCBtdWx0aXBsZURlbCkgPyBpLS0gOiBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzSW5kZXggPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChldmVudC5rZXlDb2RlID09PSA4IHx8IG11bHRpcGxlRGVsKSAmJiAoKGluaXRTdGFydEluZGV4ICE9PSBpbml0RW5kSW5kZXggJiYgaW5pdFN0YXJ0SW5kZXggIT09IHN0YXJ0SW5kZXgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGluaXRTdGFydEluZGV4ID09PSBpbml0RW5kSW5kZXgpKSkgfHwgaXNSZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJNYXNrID0gbWFza1ZhbHVlW2kgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzSW5kZXggPSBzdGFydEluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ck1hc2sgPSBtYXNrVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc0luZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3N0YXJ0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWVbc0luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLnJlZ0V4cENvbGxlY1tjdXJNYXNrXSkgJiYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tQ2hhcmFjdGVycylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tQ2hhcmFjdGVyc1tjdXJNYXNrXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh0aGlzLmhpZGRlbk1hc2tbc0luZGV4XSAhPT0gdGhpcy5wcm9tcHRDaGFyICYmIHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW3NJbmRleF1bMF0gIT09ICdbJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1tzSW5kZXhdW3RoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW3NJbmRleF0ubGVuZ3RoIC0gMV0gIT09ICddJykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICh0aGlzLnByb21wdE1hc2tbc0luZGV4XSAhPT0gdGhpcy5wcm9tcHRDaGFyICYmIGVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXN0b21DaGFyYWN0ZXJzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc0luZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQ2ICYmICFtdWx0aXBsZURlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3RoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb21wdF8xID0gdGhpcy5wcm9tcHRDaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50VmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgc0luZGV4KSArIHByb21wdF8xICsgdmFsdWUuc3Vic3RyaW5nKHN0YXJ0SW5kZXgsIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgZWxlbWVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCFpc0RlbGV0ZWQgJiYgZXZlbnQua2V5Q29kZSA9PT0gOCkgfHwgbXVsdGlwbGVEZWwgfHwgKCFpc0RlbGV0ZWQgJiYgIShldmVudC5rZXlDb2RlID09PSA0NikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc0luZGV4ID0gc3RhcnRJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWVbc0luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKGluaXRTdGFydEluZGV4ICE9PSBpbml0RW5kSW5kZXgpICYmICh0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPT09IGluaXRTdGFydEluZGV4KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5wcm9tcHRNYXNrW3NJbmRleF0gPT09IHRoaXMucHJvbXB0Q2hhcikgfHwgKChvbGRWYWx1ZSAhPT0gdGhpcy5wcm9tcHRNYXNrW3NJbmRleF0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvbXB0TWFza1tzSW5kZXhdICE9PSB0aGlzLnByb21wdENoYXIpICYmICFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tQ2hhcmFjdGVycykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID09PSAwICYmICh0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID09PSB0aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsIHRoaXMucHJvbXB0TWFzayk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc3RhcnRJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVkb0NvbGxlYy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5lbGVtZW50LnZhbHVlLCBzdGFydEluZGV4OiB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgZW5kSW5kZXg6IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHJpZ2dlck1hc2tDaGFuZ2VFdmVudC5jYWxsKHRoaXMsIGV2ZW50LCBvbGRFdmVudFZhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbWFza0lucHV0S2V5UHJlc3NIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGlmICgoIWV2ZW50LmN0cmxLZXkpIHx8IChldmVudC5jdHJsS2V5ICYmIGV2ZW50LmNvZGUgIT09ICdLZXlBJyAmJiBldmVudC5jb2RlICE9PSAnS2V5WSdcbiAgICAgICAgICAgICAgICAmJiBldmVudC5jb2RlICE9PSAnS2V5WicgJiYgZXZlbnQuY29kZSAhPT0gJ0tleVgnICYmIGV2ZW50LmNvZGUgIT09ICdLZXlDJyAmJiBldmVudC5jb2RlICE9PSAnS2V5VicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrS2V5UHJlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBldmVudC5rZXk7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ1NwYWNlYmFyJykge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSW9zSW52YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlVmFsdWUuY2FsbCh0aGlzLCBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpLCBldmVudC5jdHJsS2V5LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNJb3NJbnZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleSAmJiBrZXkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlVmFsdWUuY2FsbCh0aGlzLCBrZXksIGV2ZW50LmN0cmxLZXksIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmlnZ2VyTWFza0NoYW5nZUV2ZW50LmNhbGwodGhpcywgZXZlbnQsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0cmlnZ2VyTWFza0NoYW5nZUV2ZW50KGV2ZW50LCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jaGFuZ2VFdmVudEFyZ3MpKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0ge307XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUV2ZW50QXJncyA9IHsgdmFsdWU6IHRoaXMuZWxlbWVudC52YWx1ZSwgbWFza2VkVmFsdWU6IHRoaXMuZWxlbWVudC52YWx1ZSwgaXNJbnRlcmFjdGlvbjogZmFsc2UgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUV2ZW50QXJncy52YWx1ZSA9IHN0cmlwcGVkVmFsdWUuY2FsbCh0aGlzLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRXZlbnRBcmdzLmlzSW50ZXJhY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRXZlbnRBcmdzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8xLm1lcmdlKGV2ZW50QXJncywgdGhpcy5jaGFuZ2VFdmVudEFyZ3MpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCBldmVudEFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ2FyaWEtdmFsdWVub3cnOiB0aGlzLmVsZW1lbnQudmFsdWUgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hc2tJbnB1dEtleVVwSGFuZGxlcihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5tYXNrKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1hc2tLZXlQcmVzcyAmJiBldmVudC5rZXlDb2RlID09PSAyMjkpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkRXZlbnRWYWwgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC52YWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdGhpcy5lbGVtZW50LnZhbHVlICsgdGhpcy5wcm9tcHRNYXNrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoID4gdGhpcy5wcm9tcHRNYXNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZGVkVmFsdWVzID0gdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCAtIHRoaXMucHJvbXB0TWFzay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWxfMSA9IHRoaXMuZWxlbWVudC52YWx1ZS5zdWJzdHJpbmcoc3RhcnRJbmRleCAtIGFkZGVkVmFsdWVzLCBzdGFydEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5kb0NvbGxlYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWMgPSB0aGlzLnVuZG9Db2xsZWNbdGhpcy51bmRvQ29sbGVjLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0SW5kZXhfMSA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZEV2ZW50VmFsID0gY29sbGVjLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9sZFZhbCA9IGNvbGxlYy52YWx1ZS5zdWJzdHJpbmcoc3RhcnRJbmRleF8xIC0gYWRkZWRWYWx1ZXMsIHN0YXJ0SW5kZXhfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWMgPSB0aGlzLnJlZG9Db2xsZWNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxfMSA9IHZhbF8xLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWwgIT09IHZhbF8xICYmIGNvbGxlYy52YWx1ZS5zdWJzdHJpbmcoc3RhcnRJbmRleF8xIC0gYWRkZWRWYWx1ZXMsIHN0YXJ0SW5kZXhfMSkgIT09IHZhbF8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVWYWx1ZS5jYWxsKHRoaXMsIHZhbF8xLCBldmVudC5jdHJsS2V5LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRFdmVudFZhbCA9IHRoaXMucHJvbXB0TWFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlVmFsdWUuY2FsbCh0aGlzLCB2YWxfMSwgZXZlbnQuY3RybEtleSwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFza0tleVByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJNYXNrQ2hhbmdlRXZlbnQuY2FsbCh0aGlzLCBldmVudCwgb2xkRXZlbnRWYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1hc2tFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbCA9IHN0cmlwcGVkVmFsdWUuY2FsbCh0aGlzLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCEoKHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9PT0gMCkgJiYgKHRoaXMucHJvbXB0TWFzayA9PT0gdGhpcy5lbGVtZW50LnZhbHVlKSAmJiB2YWwgPT09ICcnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cmlnZ2VyTWFza0NoYW5nZUV2ZW50LmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBtb2JpbGVTd2lwZUNoZWNrKGtleSkge1xuICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDEgJiYgKCh0aGlzLnByb21wdE1hc2subGVuZ3RoICsga2V5Lmxlbmd0aCkgPCB0aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoKSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRWYWx1ZSA9IHRoaXMucmVkb0NvbGxlY1swXS52YWx1ZS5zdWJzdHJpbmcoMCwgdGhpcy5yZWRvQ29sbGVjWzBdLnN0YXJ0SW5kZXgpICsga2V5ICtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZG9Db2xsZWNbMF0udmFsdWUuc3Vic3RyaW5nKHRoaXMucmVkb0NvbGxlY1swXS5zdGFydEluZGV4LCB0aGlzLnJlZG9Db2xsZWNbMF0udmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsIGVsZW1lbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5yZWRvQ29sbGVjWzBdLnN0YXJ0SW5kZXggKyBrZXkubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCAtIGtleS5sZW5ndGg7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kIC0ga2V5Lmxlbmd0aDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsaWRhdGVWYWx1ZShrZXksIGlzQ3RybEtleSwgZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hc2tLZXlQcmVzcykge1xuICAgICAgICAgICAgbW9iaWxlU3dpcGVDaGVjay5jYWxsKHRoaXMsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHZhciBpbml0U3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgIHZhciBlbmRJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgIHZhciBjdXJNYXNrO1xuICAgICAgICB2YXIgYWxsb3dUZXh0ID0gZmFsc2U7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgdmFyIGV2ZW50T2xkVmFsO1xuICAgICAgICB2YXIgcHJldlN1cHBvcnQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBrZXkubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHZhciBrZXlWYWx1ZSA9IGtleVtrXTtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICBlbmRJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFza0tleVByZXNzICYmIGluaXRTdGFydEluZGV4ID09PSBzdGFydEluZGV4KSB7XG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXggKyBrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCghdGhpcy5tYXNrS2V5UHJlc3MgfHwgc3RhcnRJbmRleCA8IHRoaXMucHJvbXB0TWFzay5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPCB0aGlzLnByb21wdE1hc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tWYWx1ZSA9IHRoaXMuZXNjYXBlTWFza1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjdXJNYXNrID0gbWFza1ZhbHVlW3N0YXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5yZWdFeHBDb2xsZWNbY3VyTWFza10pICYmIChlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tQ2hhcmFjdGVycylcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLmN1c3RvbUNoYXJhY3RlcnMpICYmIGVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXN0b21DaGFyYWN0ZXJzW2N1ck1hc2tdKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHRoaXMuaGlkZGVuTWFza1tzdGFydEluZGV4XSAhPT0gdGhpcy5wcm9tcHRDaGFyICYmIHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW3N0YXJ0SW5kZXhdWzBdICE9PSAnWydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1tzdGFydEluZGV4XVt0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1tzdGFydEluZGV4XS5sZW5ndGggLSAxXSAhPT0gJ10nKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoKHRoaXMucHJvbXB0TWFza1tzdGFydEluZGV4XSAhPT0gdGhpcy5wcm9tcHRDaGFyKSAmJiBlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tQ2hhcmFjdGVycykpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5wcm9tcHRDaGFyID09PSBjdXJNYXNrICYmIHRoaXMuZXNjYXBlTWFza1ZhbHVlID09PSB0aGlzLm1hc2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc3RhcnRJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyTWFzayA9IHRoaXMuaGlkZGVuTWFza1tzdGFydEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXN0b21DaGFyYWN0ZXJzKSAmJiAhZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLmN1c3RvbUNoYXJhY3RlcnNbY3VyTWFza10pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXN0b21WYWxTdHIgPSB0aGlzLmN1c3RvbUNoYXJhY3RlcnNbY3VyTWFza107XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXN0b21WYWxBcnIgPSBjdXN0b21WYWxTdHIuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXN0b21WYWxBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlWYWx1ZS5tYXRjaChuZXcgUmVnRXhwKCdbJyArIGN1c3RvbVZhbEFycltpXSArICddJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLnJlZ0V4cENvbGxlY1tjdXJNYXNrXSkgJiYga2V5VmFsdWUubWF0Y2gobmV3IFJlZ0V4cCh0aGlzLnJlZ0V4cENvbGxlY1tjdXJNYXNrXSkpXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMucHJvbXB0TWFza1tzdGFydEluZGV4XSA9PT0gdGhpcy5wcm9tcHRDaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93VGV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucHJvbXB0TWFza1tzdGFydEluZGV4XSA9PT0gdGhpcy5wcm9tcHRDaGFyICYmIHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW3N0YXJ0SW5kZXhdWzBdID09PSAnWydcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5jdXN0b21SZWdFeHBDb2xsZWNbc3RhcnRJbmRleF1bdGhpcy5jdXN0b21SZWdFeHBDb2xsZWNbc3RhcnRJbmRleF0ubGVuZ3RoIC0gMV0gPT09ICddJ1xuICAgICAgICAgICAgICAgICAgICAmJiBrZXlWYWx1ZS5tYXRjaChuZXcgUmVnRXhwKHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW3N0YXJ0SW5kZXhdKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCghdGhpcy5tYXNrS2V5UHJlc3MgfHwgc3RhcnRJbmRleCA8IHRoaXMuaGlkZGVuTWFzay5sZW5ndGgpICYmIGFsbG93VGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoayA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFza0tleVByZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRvQ29sbGVjLnB1c2goeyB2YWx1ZTogdmFsdWUsIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsIGVuZEluZGV4OiBzdGFydEluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZUluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWRvQ29sbGVjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPbGRWYWwgPSB0aGlzLnJlZG9Db2xsZWNbMF0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsIGV2ZW50T2xkVmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRvQ29sbGVjLnB1c2godGhpcy5yZWRvQ29sbGVjWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5kb0NvbGxlYy5wdXNoKHsgdmFsdWU6IHRoaXMucHJvbXB0TWFzaywgc3RhcnRJbmRleDogc3RhcnRJbmRleCwgZW5kSW5kZXg6IHN0YXJ0SW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2xkVmFsID0gdGhpcy5wcm9tcHRNYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCBldmVudE9sZFZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5U3VwcG9ydGVkVmFsdWVzLmNhbGwodGhpcywgZXZlbnQsIHN0YXJ0SW5kZXgsIGtleVZhbHVlLCBldmVudE9sZFZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZTdXBwb3J0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGsgPT09IGtleS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZG9Db2xsZWMudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZWxlbWVudC52YWx1ZSwgc3RhcnRJbmRleDogdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEluZGV4OiB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhbGxvd1RleHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnRVbnN1cHBvcnRlZFZhbHVlcy5jYWxsKHRoaXMsIGV2ZW50LCBzdGFydEluZGV4LCBpbml0U3RhcnRJbmRleCwga2V5LCBpc0N0cmxLZXksIHByZXZTdXBwb3J0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGsgPT09IGtleS5sZW5ndGggLSAxICYmICFhbGxvd1RleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLkJyb3dzZXIuaXNBbmRyb2lkIHx8IChlajJfYmFzZV8xLkJyb3dzZXIuaXNBbmRyb2lkICYmIHN0YXJ0SW5kZXggPCB0aGlzLnByb21wdE1hc2subGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRvQ29sbGVjLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmVsZW1lbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleDogdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEluZGV4OiB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChrZXkubGVuZ3RoID09PSAxICYmICFpc0N0cmxLZXkgJiYgIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZE1hc2tFcnJvckNsYXNzLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGx5U3VwcG9ydGVkVmFsdWVzKGV2ZW50LCBzdGFydEluZGV4LCBrZXlWYWx1ZSwgZXZlbnRPbGRWYWwpIHtcbiAgICAgICAgaWYgKHRoaXMuaGlkZGVuTWFzay5sZW5ndGggPiB0aGlzLnByb21wdE1hc2subGVuZ3RoKSB7XG4gICAgICAgICAgICBrZXlWYWx1ZSA9IGNoYW5nZVRvTG93ZXJVcHBlckNhc2UuY2FsbCh0aGlzLCBrZXlWYWx1ZSwgdGhpcy5lbGVtZW50LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgIHZhciBlbGVtZW50VmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRJbmRleCkgKyBrZXlWYWx1ZSArIHZhbHVlLnN1YnN0cmluZyhzdGFydEluZGV4ICsgMSwgdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgZWxlbWVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IHN0YXJ0SW5kZXggKyAxO1xuICAgICAgICB0cmlnZ2VyTWFza0NoYW5nZUV2ZW50LmNhbGwodGhpcywgZXZlbnQsIGV2ZW50T2xkVmFsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJldmVudFVuc3VwcG9ydGVkVmFsdWVzKGV2ZW50LCBzSWR4LCBpZHgsIGtleSwgY3RybCwgY2hrU3VwcG9ydCkge1xuICAgICAgICBpZiAoIXRoaXMubWFza0tleVByZXNzKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRPbGRWYWwgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBpZiAoc0lkeCA+PSB0aGlzLnByb21wdE1hc2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgdmFsdWUuc3Vic3RyaW5nKDAsIHNJZHgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpZHggPT09IHNJZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgdmFsdWUuc3Vic3RyaW5nKDAsIHNJZHgpICsgdmFsdWUuc3Vic3RyaW5nKHNJZHggKyAxLCB2YWx1ZS5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb21wdE1hc2subGVuZ3RoID09PSB0aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCB2YWx1ZS5zdWJzdHJpbmcoMCwgc0lkeCkgKyB2YWx1ZS5zdWJzdHJpbmcoc0lkeCwgdmFsdWUubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCB2YWx1ZS5zdWJzdHJpbmcoMCwgaWR4KSArIHZhbHVlLnN1YnN0cmluZyhpZHggKyAxLCB2YWx1ZS5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gKGNoa1N1cHBvcnQgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnZhbHVlW2lkeF0gIT09IHRoaXMucHJvbXB0Q2hhcikgPyBzSWR4IDogaWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnRPbGRWYWwgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICB0cmlnZ2VyTWFza0NoYW5nZUV2ZW50LmNhbGwodGhpcywgZXZlbnQsIGV2ZW50T2xkVmFsKTtcbiAgICAgICAgICAgIGFkZE1hc2tFcnJvckNsYXNzLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IDEgJiYgIWN0cmwgJiYgIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoZXZlbnQpKSB7XG4gICAgICAgICAgICBhZGRNYXNrRXJyb3JDbGFzcy5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZE1hc2tFcnJvckNsYXNzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgdGltZXIgPSAyMDA7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhJTlBVVEdST1VQKSB8fCBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhGTE9BVElOUFVUKSkge1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbcGFyZW50RWxlbWVudF0sIEVSUk9SKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW3RoaXMuZWxlbWVudF0sIEVSUk9SKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0lvc0ludmFsaWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRpbWVyID0gNDAwO1xuICAgICAgICB9XG4gICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ2FyaWEtaW52YWxpZCc6ICd0cnVlJyB9KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLm1hc2tLZXlQcmVzcykge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1hc2tFcnJvci5jYWxsKF90aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGltZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVNYXNrRXJyb3IoKSB7XG4gICAgICAgIHZhciBwYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoW3BhcmVudEVsZW1lbnRdLCBFUlJPUik7XG4gICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoW3RoaXMuZWxlbWVudF0sIEVSUk9SKTtcbiAgICAgICAgZWoyX2Jhc2VfMS5hdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCwgeyAnYXJpYS1pbnZhbGlkJzogJ2ZhbHNlJyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hhbmdlVG9Mb3dlclVwcGVyQ2FzZShrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBwcm9tcHRNYXNrO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICB2YXIgY3VyVmFsID0gdmFsdWU7XG4gICAgICAgIHZhciBjYXNlQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5oaWRkZW5NYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oaWRkZW5NYXNrW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICBwcm9tcHRNYXNrID0gY3VyVmFsLnN1YnN0cmluZygwLCBpKSArICdcXFxcJyArIGN1clZhbC5zdWJzdHJpbmcoaSwgY3VyVmFsLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5oaWRkZW5NYXNrW2ldID09PSAnPicgfHwgdGhpcy5oaWRkZW5NYXNrW2ldID09PSAnPCcgfHwgdGhpcy5oaWRkZW5NYXNrW2ldID09PSAnfCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oaWRkZW5NYXNrW2ldICE9PSBjdXJWYWxbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0TWFzayA9IGN1clZhbC5zdWJzdHJpbmcoMCwgaSkgKyB0aGlzLmhpZGRlbk1hc2tbaV0gKyBjdXJWYWwuc3Vic3RyaW5nKGksIGN1clZhbC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICArK2Nhc2VDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9tcHRNYXNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCgocHJvbXB0TWFza1tpXSA9PT0gdGhpcy5wcm9tcHRDaGFyKSAmJiAoaSA+IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmVsZW1lbnQudmFsdWUuaW5kZXhPZih0aGlzLnByb21wdENoYXIpIDwgMCAmJiAodGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ICsgY2FzZUNvdW50KSA9PT0gaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1clZhbCA9IHByb21wdE1hc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGkgPj0gMCAmJiBwcm9tcHRNYXNrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCBwcm9tcHRNYXNrW2kgLSAxXSAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAocHJvbXB0TWFza1tpXSA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvbXB0TWFza1tpXSA9PT0gJzwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvbXB0TWFza1tpXSA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC0taTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRNYXNrVmFsdWUodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLm1hc2sgJiYgIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodmFsKSAmJiAodmFsID09PSAnJyB8fCB0aGlzLnByZXZWYWx1ZSAhPT0gdmFsKSkge1xuICAgICAgICAgICAgdGhpcy5tYXNrS2V5UHJlc3MgPSB0cnVlO1xuICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgdGhpcy5wcm9tcHRNYXNrKTtcbiAgICAgICAgICAgIGlmICh2YWwgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVWYWx1ZS5jYWxsKHRoaXMsIHZhbFtpXSwgZmFsc2UsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHN0cmlwcGVkVmFsdWUuY2FsbCh0aGlzLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5tYXNrS2V5UHJlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBsYWJlbEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZS1mbG9hdC10ZXh0Jyk7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnZhbHVlID09PSB0aGlzLnByb21wdE1hc2sgJiYgdGhpcy5mbG9hdExhYmVsVHlwZSA9PT0gJ0F1dG8nICYmXG4gICAgICAgICAgICAgICAgIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQobGFiZWxFbGVtZW50KSAmJiBsYWJlbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFRPUExBQkVMKSAmJiAhdGhpcy5pc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5yZW1vdmVDbGFzcyhbbGFiZWxFbGVtZW50XSwgVE9QTEFCRUwpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW2xhYmVsRWxlbWVudF0sIEJPVFRPTUxBQkVMKTtcbiAgICAgICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0cy5zZXRNYXNrVmFsdWUgPSBzZXRNYXNrVmFsdWU7XG4gICAgZnVuY3Rpb24gc2V0RWxlbWVudFZhbHVlKHZhbCwgZWxlbWVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNGb2N1cyAmJiB0aGlzLmZsb2F0TGFiZWxUeXBlID09PSAnQXV0bycgJiYgZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRfMS5JbnB1dC5zZXRWYWx1ZSh2YWwsIChlbGVtZW50ID8gZWxlbWVudCA6IHRoaXMuZWxlbWVudCksIHRoaXMuZmxvYXRMYWJlbFR5cGUpO1xuICAgIH1cbiAgICBleHBvcnRzLnNldEVsZW1lbnRWYWx1ZSA9IHNldEVsZW1lbnRWYWx1ZTtcbiAgICBmdW5jdGlvbiBtYXNrSW5wdXQoYXJncykge1xuICAgICAgICB2YXIgaW5wdXRFbGUgPSBnZXRNYXNrSW5wdXQoYXJncyk7XG4gICAgICAgIGFwcGx5TWFzay5jYWxsKGlucHV0RWxlKTtcbiAgICAgICAgdmFyIHZhbCA9IHN0cmlwcGVkVmFsdWUuY2FsbCh0aGlzLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgICAgICAgaWYgKGFyZ3MubWFzaykge1xuICAgICAgICAgICAgdW53aXJlRXZlbnRzLmNhbGwoaW5wdXRFbGUpO1xuICAgICAgICAgICAgd2lyZUV2ZW50cy5jYWxsKGlucHV0RWxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnRzLm1hc2tJbnB1dCA9IG1hc2tJbnB1dDtcbiAgICBmdW5jdGlvbiBnZXRNYXNrSW5wdXQoYXJncykge1xuICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFthcmdzLmVsZW1lbnRdLCBVVElMTUFTSyk7XG4gICAgICAgIHZhciBpbnB1dEVsZSA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGFyZ3MuZWxlbWVudCxcbiAgICAgICAgICAgIG1hc2s6IGFyZ3MubWFzayxcbiAgICAgICAgICAgIHByb21wdE1hc2s6ICcnLFxuICAgICAgICAgICAgaGlkZGVuTWFzazogJycsXG4gICAgICAgICAgICBlc2NhcGVNYXNrVmFsdWU6ICcnLFxuICAgICAgICAgICAgcHJvbXB0Q2hhcjogYXJncy5wcm9tcHRDaGFyID8gKGFyZ3MucHJvbXB0Q2hhci5sZW5ndGggPiAxKSA/IGFyZ3MucHJvbXB0Q2hhciA9IGFyZ3MucHJvbXB0Q2hhclswXVxuICAgICAgICAgICAgICAgIDogYXJncy5wcm9tcHRDaGFyIDogJ18nLFxuICAgICAgICAgICAgdmFsdWU6IGFyZ3MudmFsdWUgPyBhcmdzLnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgIHJlZ0V4cENvbGxlYzogZXhwb3J0cy5yZWd1bGFyRXhwcmVzc2lvbnMsXG4gICAgICAgICAgICBjdXN0b21SZWdFeHBDb2xsZWM6IFtdLFxuICAgICAgICAgICAgY3VzdG9tQ2hhcmFjdGVyczogYXJncy5jdXN0b21DaGFyYWN0ZXJzLFxuICAgICAgICAgICAgdW5kb0NvbGxlYzogW10sXG4gICAgICAgICAgICByZWRvQ29sbGVjOiBbXSxcbiAgICAgICAgICAgIG1hc2tLZXlQcmVzczogZmFsc2UsXG4gICAgICAgICAgICBwcmV2VmFsdWU6ICcnXG4gICAgICAgIH07XG4gICAgICAgIGNyZWF0ZU1hc2suY2FsbChpbnB1dEVsZSk7XG4gICAgICAgIHJldHVybiBpbnB1dEVsZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VmFsKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHN0cmlwcGVkVmFsdWUuY2FsbChnZXRVdGlsTWFza0VsZShhcmdzKSwgYXJncy5lbGVtZW50KTtcbiAgICB9XG4gICAgZXhwb3J0cy5nZXRWYWwgPSBnZXRWYWw7XG4gICAgZnVuY3Rpb24gZ2V0TWFza2VkVmFsKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHVuc3RyaXBwZWRWYWx1ZS5jYWxsKGdldFV0aWxNYXNrRWxlKGFyZ3MpLCBhcmdzLmVsZW1lbnQpO1xuICAgIH1cbiAgICBleHBvcnRzLmdldE1hc2tlZFZhbCA9IGdldE1hc2tlZFZhbDtcbiAgICBmdW5jdGlvbiBnZXRVdGlsTWFza0VsZShhcmdzKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICcnO1xuICAgICAgICB2YXIgaW5wdXRFbGU7XG4gICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzKSAmJiBhcmdzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFVUSUxNQVNLKSkge1xuICAgICAgICAgICAgaW5wdXRFbGUgPSBnZXRNYXNrSW5wdXQoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0RWxlO1xuICAgIH1cbiAgICB2YXIgTWFza1VuZG8gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBNYXNrVW5kbygpIHtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWFza1VuZG87XG4gICAgfSgpKTtcbiAgICBleHBvcnRzLk1hc2tVbmRvID0gTWFza1VuZG87XG4gICAgdmFyIG1hc2tVbmRvID0gbmV3IE1hc2tVbmRvKCk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hc2tlZHRleHRib3gvYmFzZS9tYXNrLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9tYXNrZWR0ZXh0Ym94XCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbWFza2VkdGV4dGJveF8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChtYXNrZWR0ZXh0Ym94XzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXNrZWR0ZXh0Ym94L21hc2tlZHRleHRib3gvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiLi4vLi4vaW5wdXQvaW5wdXRcIiwgXCIuLi9iYXNlL2luZGV4XCIsIFwiLi4vYmFzZS9pbmRleFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGlucHV0XzEsIGluZGV4XzEsIGluZGV4XzIpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIFJPT1QgPSAnZS13aWRnZXQgZS1tYXNrJztcbiAgICB2YXIgSU5QVVQgPSAnZS1pbnB1dCc7XG4gICAgdmFyIE1hc2tlZFRleHRCb3ggPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoTWFza2VkVGV4dEJveCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gTWFza2VkVGV4dEJveChvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBlbGVtZW50KSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMucHJvbXB0TWFzayA9ICcnO1xuICAgICAgICAgICAgX3RoaXMuaGlkZGVuTWFzayA9ICcnO1xuICAgICAgICAgICAgX3RoaXMuZXNjYXBlTWFza1ZhbHVlID0gJyc7XG4gICAgICAgICAgICBfdGhpcy5yZWdFeHBDb2xsZWMgPSBpbmRleF8xLnJlZ3VsYXJFeHByZXNzaW9ucztcbiAgICAgICAgICAgIF90aGlzLmN1c3RvbVJlZ0V4cENvbGxlYyA9IFtdO1xuICAgICAgICAgICAgX3RoaXMudW5kb0NvbGxlYyA9IFtdO1xuICAgICAgICAgICAgX3RoaXMucmVkb0NvbGxlYyA9IFtdO1xuICAgICAgICAgICAgX3RoaXMuY2hhbmdlRXZlbnRBcmdzID0ge307XG4gICAgICAgICAgICBfdGhpcy5tYXNrS2V5UHJlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmlzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmlzSW5pdGlhbCA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMuaXNJb3NJbnZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgTWFza2VkVGV4dEJveC5wcm90b3R5cGUuZ2V0TW9kdWxlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnbWFza2VkdGV4dGJveCc7XG4gICAgICAgIH07XG4gICAgICAgIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlakluc3RhbmNlID0gZWoyX2Jhc2VfMi5nZXRWYWx1ZSgnZWoyX2luc3RhbmNlcycsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNsb25lRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFuZ3VsYXJUYWdOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZSA9PT0gJ0VKLU1BU0tFRFRFWFRCT1gnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmd1bGFyVGFnTmFtZSA9IHRoaXMuZWxlbWVudC50YWdOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGVqMl9iYXNlXzIuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQuYXR0cmlidXRlc1tpXS5ub2RlTmFtZSwgdGhpcy5lbGVtZW50LmF0dHJpYnV0ZXNbaV0ubm9kZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuaW5uZXJIVE1MID0gdGhpcy5lbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5zZXRWYWx1ZSgnZWoyX2luc3RhbmNlcycsIGVqSW5zdGFuY2UsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLmdldFBlcnNpc3REYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGtleUVudGl0eSA9IFsndmFsdWUnXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE9uUGVyc2lzdChrZXlFbnRpdHkpO1xuICAgICAgICB9O1xuICAgICAgICBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZsb2F0TGFiZWxUeXBlID09PSAnTmV2ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuYWRkQ2xhc3MoW3RoaXMuZWxlbWVudF0sIElOUFVUKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0luaXRpYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRNYXNrZWRUZXh0Qm94KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0luaXRpYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1hc2tQbGFjZWhvbGRlcih0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFdpZHRoKHRoaXMud2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZS5yZXNldE1hc2tlZFRleHRCb3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnByb21wdE1hc2sgPSAnJztcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuTWFzayA9ICcnO1xuICAgICAgICAgICAgdGhpcy5lc2NhcGVNYXNrVmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjID0gW107XG4gICAgICAgICAgICB0aGlzLnVuZG9Db2xsZWMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucmVkb0NvbGxlYyA9IFtdO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvbXB0Q2hhci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRDaGFyID0gdGhpcy5wcm9tcHRDaGFyWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXhfMS5jcmVhdGVNYXNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBpbmRleF8xLmFwcGx5TWFzay5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHZhbCA9IGluZGV4XzEuc3RyaXBwZWRWYWx1ZS5jYWxsKHRoaXMsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbDtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJbml0aWFsKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhfMS51bndpcmVFdmVudHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4XzEud2lyZUV2ZW50cy5jYWxsKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZS5zZXRNYXNrUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoc2V0VmFsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIGlucHV0XzEuSW5wdXQuc2V0UGxhY2Vob2xkZXIodGhpcy5wbGFjZWhvbGRlciwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnZhbHVlID09PSB0aGlzLnByb21wdE1hc2sgJiYgc2V0VmFsICYmIHRoaXMuZmxvYXRMYWJlbFR5cGUgIT09ICdBbHdheXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4XzIuc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTWFza2VkVGV4dEJveC5wcm90b3R5cGUuc2V0Q3NzQ2xhc3MgPSBmdW5jdGlvbiAoY3NzQ2xhc3MsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChjc3NDbGFzcykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuYWRkQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aCkge1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8yLmlzTnVsbE9yVW5kZWZpbmVkKHdpZHRoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IGVqMl9iYXNlXzIuZm9ybWF0VW5pdCh3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLmNyZWF0ZVdyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0T2JqID0gaW5wdXRfMS5JbnB1dC5jcmVhdGVJbnB1dCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIGN1c3RvbVRhZzogdGhpcy5hbmd1bGFyVGFnTmFtZSxcbiAgICAgICAgICAgICAgICBmbG9hdExhYmVsVHlwZTogdGhpcy5mbG9hdExhYmVsVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVJ0bDogdGhpcy5lbmFibGVSdGwsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuZW5hYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRPYmouY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBST09UICsgJyAnICsgdGhpcy5pbnB1dE9iai5jb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpKTtcbiAgICAgICAgfTtcbiAgICAgICAgTWFza2VkVGV4dEJveC5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG5ld1Byb3ApOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleF8yLnNldE1hc2tWYWx1ZS5jYWxsKHRoaXMsIHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1hc2tQbGFjZWhvbGRlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGxhY2Vob2xkZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNYXNrUGxhY2Vob2xkZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnd2lkdGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRXaWR0aChuZXdQcm9wLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjc3NDbGFzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENzc0NsYXNzKG5ld1Byb3AuY3NzQ2xhc3MsIFt0aGlzLmlucHV0T2JqLmNvbnRhaW5lcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuYWJsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfMS5JbnB1dC5zZXRFbmFibGVkKG5ld1Byb3AuZW5hYmxlZCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVSdGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfMS5JbnB1dC5zZXRFbmFibGVSdGwobmV3UHJvcC5lbmFibGVSdGwsIFt0aGlzLmlucHV0T2JqLmNvbnRhaW5lcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2N1c3RvbUNoYXJhY3RlcnMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21DaGFyYWN0ZXJzID0gbmV3UHJvcC5jdXN0b21DaGFyYWN0ZXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldE1hc2tlZFRleHRCb3goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtYXNrJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHJpcHBlZFZhbHVlXzEgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrID0gbmV3UHJvcC5tYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShzdHJpcHBlZFZhbHVlXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Byb21wdENoYXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AucHJvbXB0Q2hhci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcC5wcm9tcHRDaGFyID0gbmV3UHJvcC5wcm9tcHRDaGFyWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AucHJvbXB0Q2hhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0Q2hhciA9IG5ld1Byb3AucHJvbXB0Q2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0Q2hhciA9ICdfJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZWxlbWVudC52YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ1snICsgb2xkUHJvcC5wcm9tcHRDaGFyICsgJ10nLCAnZycpLCB0aGlzLnByb21wdENoYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvbXB0TWFzayA9PT0gdGhpcy5lbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnByb21wdE1hc2sucmVwbGFjZShuZXcgUmVnRXhwKCdbJyArIG9sZFByb3AucHJvbXB0Q2hhciArICddJywgJ2cnKSwgdGhpcy5wcm9tcHRDaGFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0TWFzayA9IHRoaXMucHJvbXB0TWFzay5yZXBsYWNlKG5ldyBSZWdFeHAoJ1snICsgb2xkUHJvcC5wcm9tcHRDaGFyICsgJ10nLCAnZycpLCB0aGlzLnByb21wdENoYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRvQ29sbGVjID0gdGhpcy5yZWRvQ29sbGVjID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleF8yLnNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTWFza2VkVGV4dEJveC5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoc3RyaXBwZWRWYWwpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRNYXNrZWRUZXh0Qm94KCk7XG4gICAgICAgICAgICBpbmRleF8yLnNldE1hc2tWYWx1ZS5jYWxsKHRoaXMsIHN0cmlwcGVkVmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgTWFza2VkVGV4dEJveC5wcm90b3R5cGUuZ2V0TWFza2VkVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhfMS51bnN0cmlwcGVkVmFsdWUuY2FsbCh0aGlzLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9O1xuICAgICAgICBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW5kZXhfMS51bndpcmVFdmVudHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRPYmouY29udGFpbmVyLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jbG9uZUVsZW1lbnQpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2godGhpcy5pbnB1dE9iai5jb250YWluZXIpO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBNYXNrZWRUZXh0Qm94O1xuICAgIH0oZWoyX2Jhc2VfMS5Db21wb25lbnQpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLCBcImNzc0NsYXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkobnVsbClcbiAgICBdLCBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KG51bGwpXG4gICAgXSwgTWFza2VkVGV4dEJveC5wcm90b3R5cGUsIFwicGxhY2Vob2xkZXJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnTmV2ZXInKVxuICAgIF0sIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLCBcImZsb2F0TGFiZWxUeXBlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkodHJ1ZSlcbiAgICBdLCBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZSwgXCJlbmFibGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgTWFza2VkVGV4dEJveC5wcm90b3R5cGUsIFwiZW5hYmxlUGVyc2lzdGVuY2VcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZSwgXCJlbmFibGVSdGxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLCBcIm1hc2tcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnXycpXG4gICAgXSwgTWFza2VkVGV4dEJveC5wcm90b3R5cGUsIFwicHJvbXB0Q2hhclwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KG51bGwpXG4gICAgXSwgTWFza2VkVGV4dEJveC5wcm90b3R5cGUsIFwidmFsdWVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLCBcImN1c3RvbUNoYXJhY3RlcnNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgTWFza2VkVGV4dEJveC5wcm90b3R5cGUsIFwiY3JlYXRlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZSwgXCJkZXN0cm95ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgTWFza2VkVGV4dEJveC5wcm90b3R5cGUsIFwiY2hhbmdlXCIsIHZvaWQgMCk7XG4gICAgTWFza2VkVGV4dEJveCA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLk5vdGlmeVByb3BlcnR5Q2hhbmdlc1xuICAgIF0sIE1hc2tlZFRleHRCb3gpO1xuICAgIGV4cG9ydHMuTWFza2VkVGV4dEJveCA9IE1hc2tlZFRleHRCb3g7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hc2tlZHRleHRib3gvbWFza2VkdGV4dGJveC9tYXNrZWR0ZXh0Ym94LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vaW5wdXRcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBpbnB1dF8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChpbnB1dF8xKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5wdXQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vZm9ybS12YWxpZGF0b3JcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBmb3JtX3ZhbGlkYXRvcl8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChmb3JtX3ZhbGlkYXRvcl8xKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9ybS12YWxpZGF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZWoyX2Jhc2VfMSwgZWoyX2Jhc2VfMiwgZWoyX2Jhc2VfMykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgVkFMSURBVEVfRU1BSUwgPSBuZXcgUmVnRXhwKCdeW0EtWmEtejAtOS5fJSstXXszLH1AW2EtekEtWl17Myx9KFsuXXsxfVthLXpBLVpdezIsNX0nICtcbiAgICAgICAgJ3xbLl17MX1bYS16QS1aXXsyLDR9Wy5dezF9W2EtekEtWl17Miw0fSkkJyk7XG4gICAgdmFyIFZBTElEQVRFX1VSTCA9IG5ldyBSZWdFeHAoJ14oKGZ0cHxodHRwfGh0dHBzKTpcXC9cXC8pP3d3d1xcLihbQS16XXsyLH0pXFwuKFtBLXpdezIsfSkkJyk7XG4gICAgdmFyIFZBTElEQVRFX0RBVEVfSVNPID0gbmV3IFJlZ0V4cCgnXihbMC05XXs0fSktKDBbMS05XXwxWzAtMl0pLSgwWzEtOV18WzEtMl1bMC05XXwzWzAtMV0pJCcpO1xuICAgIHZhciBWQUxJREFURV9ESUdJVFMgPSBuZXcgUmVnRXhwKCdeWzAtOV0qJCcpO1xuICAgIHZhciBWQUxJREFURV9QSE9ORSA9IG5ldyBSZWdFeHAoJ15bK10/WzAtOV17OSwxM30kJyk7XG4gICAgdmFyIFZBTElEQVRFX0NSRURJVENBUkQgPSBuZXcgUmVnRXhwKCdeXFxcXGR7MTMsMTZ9JCcpO1xuICAgIHZhciBFcnJvck9wdGlvbjtcbiAgICAoZnVuY3Rpb24gKEVycm9yT3B0aW9uKSB7XG4gICAgICAgIEVycm9yT3B0aW9uW0Vycm9yT3B0aW9uW1wiTWVzc2FnZVwiXSA9IDBdID0gXCJNZXNzYWdlXCI7XG4gICAgICAgIEVycm9yT3B0aW9uW0Vycm9yT3B0aW9uW1wiTGFiZWxcIl0gPSAxXSA9IFwiTGFiZWxcIjtcbiAgICB9KShFcnJvck9wdGlvbiA9IGV4cG9ydHMuRXJyb3JPcHRpb24gfHwgKGV4cG9ydHMuRXJyb3JPcHRpb24gPSB7fSkpO1xuICAgIHZhciBGb3JtVmFsaWRhdG9yID0gRm9ybVZhbGlkYXRvcl8xID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEZvcm1WYWxpZGF0b3IsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEZvcm1WYWxpZGF0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgZWxlbWVudCkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLnZhbGlkYXRlZCA9IFtdO1xuICAgICAgICAgICAgX3RoaXMuZXJyb3JSdWxlcyA9IFtdO1xuICAgICAgICAgICAgX3RoaXMuYWxsb3dTdWJtaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLnJlcXVpcmVkID0gJ3JlcXVpcmVkJztcbiAgICAgICAgICAgIF90aGlzLmluZm9FbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIF90aGlzLmlucHV0RWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBfdGhpcy5zZWxlY3RRdWVyeSA9ICdpbnB1dDpub3QoW3R5cGU9cmVzZXRdKTpub3QoW3R5cGU9YnV0dG9uXSksIHNlbGVjdCwgdGV4dGFyZWEnO1xuICAgICAgICAgICAgX3RoaXMuZGVmYXVsdE1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy4nLFxuICAgICAgICAgICAgICAgIHVybDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIFVSTC4nLFxuICAgICAgICAgICAgICAgIGRhdGU6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLicsXG4gICAgICAgICAgICAgICAgZGF0ZUlzbzogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUgKCBJU08gKS4nLFxuICAgICAgICAgICAgICAgIGNyZWRpdGNhcmQ6ICdQbGVhc2UgZW50ZXIgdmFsaWQgY2FyZCBudW1iZXInLFxuICAgICAgICAgICAgICAgIG51bWJlcjogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIG51bWJlci4nLFxuICAgICAgICAgICAgICAgIGRpZ2l0czogJ1BsZWFzZSBlbnRlciBvbmx5IGRpZ2l0cy4nLFxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ1BsZWFzZSBlbnRlciBubyBtb3JlIHRoYW4gezB9IGNoYXJhY3RlcnMuJyxcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdQbGVhc2UgZW50ZXIgYXQgbGVhc3QgezB9IGNoYXJhY3RlcnMuJyxcbiAgICAgICAgICAgICAgICByYW5nZUxlbmd0aDogJ1BsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0gY2hhcmFjdGVycyBsb25nLicsXG4gICAgICAgICAgICAgICAgcmFuZ2U6ICdQbGVhc2UgZW50ZXIgYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9LicsXG4gICAgICAgICAgICAgICAgbWF4OiAnUGxlYXNlIGVudGVyIGEgdmFsdWUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHswfS4nLFxuICAgICAgICAgICAgICAgIG1pbjogJ1BsZWFzZSBlbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB7MH0uJyxcbiAgICAgICAgICAgICAgICByZWdleDogJ1BsZWFzZSBlbnRlciBhIGNvcnJlY3QgdmFsdWUuJyxcbiAgICAgICAgICAgICAgICB0ZWw6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBwaG9uZSBudW1iZXIuJyxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnUGxlYXNlIGVudGVyIGEgY29ycmVjdCBwYXR0ZXJuIHZhbHVlLicsXG4gICAgICAgICAgICAgICAgZXF1YWxUbzogJ1BsZWFzZSBlbnRlciB0aGUgdmFsaWQgbWF0Y2ggdGV4dCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZWxlbWVudCA9IHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGVqMl9iYXNlXzEuc2VsZWN0KGVsZW1lbnQsIGRvY3VtZW50KSA6IGVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCAnJyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW5wdXRFbGVtZW50cyA9IGVqMl9iYXNlXzEuc2VsZWN0QWxsKF90aGlzLnNlbGVjdFF1ZXJ5LCBfdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jcmVhdGVIVE1MNVJ1bGVzKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMud2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5hZGRSdWxlcyA9IGZ1bmN0aW9uIChuYW1lLCBydWxlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMucnVsZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLmV4dGVuZCh0aGlzLnJ1bGVzW25hbWVdLCBydWxlcywge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydWxlc1tuYW1lXSA9IHJ1bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5yZW1vdmVSdWxlcyA9IGZ1bmN0aW9uIChuYW1lLCBydWxlcykge1xuICAgICAgICAgICAgaWYgKCFuYW1lICYmICFydWxlcykge1xuICAgICAgICAgICAgICAgIHRoaXMucnVsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucnVsZXNbbmFtZV0gJiYgIXJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucnVsZXNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghZWoyX2Jhc2VfMi5pc051bGxPclVuZGVmaW5lZCh0aGlzLnJ1bGVzW25hbWVdICYmIHJ1bGVzKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucnVsZXNbbmFtZV1bcnVsZXNbaV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHZhciBydWxlcyA9IE9iamVjdC5rZXlzKHRoaXMucnVsZXMpO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHJ1bGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVSdWxlcyhzZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGVzLmluZGV4T2Yoc2VsZWN0ZWQpICE9PSAtMSAmJiB0aGlzLmVycm9yUnVsZXMuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLm5hbWUgPT09IHNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgcnVsZXNfMSA9IHJ1bGVzOyBfaSA8IHJ1bGVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lXzEgPSBydWxlc18xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVJ1bGVzKG5hbWVfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yUnVsZXMubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JSdWxlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZWQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXNldCgpO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZWoyX2Jhc2VfMS5zZWxlY3RBbGwodGhpcy5zZWxlY3RRdWVyeSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZWxlbWVudHNfMSA9IGVsZW1lbnRzOyBfaSA8IGVsZW1lbnRzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c18xW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmVycm9yQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5uYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbnB1dEVsZW1lbnQoaW5wdXQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JFbGVtZW50KGlucHV0Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNZXNzYWdlKGlucHV0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudmFsaWRDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmdldElucHV0RWxlbWVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudCA9IChlajJfYmFzZV8xLnNlbGVjdCgnW25hbWU9JyArIG5hbWUgKyAnXScsIHRoaXMuZWxlbWVudCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy51bndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMucnVsZXMgPSB7fTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGVqMl9iYXNlXzEuc2VsZWN0QWxsKCcuJyArIHRoaXMuZXJyb3JDbGFzcyArICcsIC4nICsgdGhpcy52YWxpZENsYXNzLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBlbGVtZW50c18yID0gZWxlbWVudHM7IF9pIDwgZWxlbWVudHNfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzXzJbX2ldO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Zvcm1WYWxpZGF0b3InO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5jcmVhdGVIVE1MNVJ1bGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRlZlJ1bGVzID0gWydyZXF1aXJlZCcsICdyZWdleCcsICdyYW5nZUxlbmd0aCcsICdtYXhMZW5ndGgnLCAnbWluTGVuZ3RoJywgJ2RhdGVJc28nLCAnZGlnaXRzJywgJ3BhdHRlcm4nLFxuICAgICAgICAgICAgICAgICdkYXRhLXZhbC1yZXF1aXJlZCcsICd0eXBlJywgJ2RhdGEtdmFsaWRhdGlvbicsICdtaW4nLCAnbWF4JywgJ3JhbmdlJywgJ2VxdWFsVG8nLCAnZGF0YS12YWwtbWlubGVuZ3RoLW1pbicsXG4gICAgICAgICAgICAgICAgJ2RhdGEtdmFsLWVxdWFsdG8tb3RoZXInLCAnZGF0YS12YWwtbWF4bGVuZ3RoLW1heCcsICdkYXRhLXZhbC1yYW5nZS1taW4nLCAnZGF0YS12YWwtcmVnZXgtcGF0dGVybicsICdkYXRhLXZhbC1sZW5ndGgtbWF4JyxcbiAgICAgICAgICAgICAgICAnZGF0YS12YWwtY3JlZGl0Y2FyZCcsICdkYXRhLXZhbC1waG9uZSddO1xuICAgICAgICAgICAgdmFyIGFjY2VwdGVkVHlwZXMgPSBbJ2VtYWlsJywgJ3VybCcsICdkYXRlJywgJ251bWJlcicsICd0ZWwnXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSAodGhpcy5pbnB1dEVsZW1lbnRzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIGFsbFJ1bGUgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIGRlZlJ1bGVzXzEgPSBkZWZSdWxlczsgX2IgPCBkZWZSdWxlc18xLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcnVsZSA9IGRlZlJ1bGVzXzFbX2JdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKHJ1bGUpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZXF1aXJlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgYWxsUnVsZSwgcnVsZSwgaW5wdXQucmVxdWlyZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkYXRhLXZhbGlkYXRpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlID0gaW5wdXQuZ2V0QXR0cmlidXRlKHJ1bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIGFsbFJ1bGUsIHJ1bGUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY2VwdGVkVHlwZXMuaW5kZXhPZihpbnB1dC50eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgYWxsUnVsZSwgaW5wdXQudHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFuZ2VMZW5ndGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBhbGxSdWxlLCBydWxlLCBKU09OLnBhcnNlKGlucHV0LmdldEF0dHJpYnV0ZShydWxlKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVhbFRvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gaW5wdXQuZ2V0QXR0cmlidXRlKHJ1bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIGFsbFJ1bGUsIHJ1bGUsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWwnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25SdWxlKGlucHV0LCBhbGxSdWxlLCBydWxlLCBpbnB1dC5nZXRBdHRyaWJ1dGUocnVsZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBhbGxSdWxlLCBydWxlLCBpbnB1dC5nZXRBdHRyaWJ1dGUocnVsZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGFsbFJ1bGUpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFJ1bGVzKGlucHV0Lm5hbWUsIGFsbFJ1bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuYW5ub3RhdGlvblJ1bGUgPSBmdW5jdGlvbiAoaW5wdXQsIHJ1bGVDb24sIHJ1bGVOYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGFubm90YXRpb25SdWxlID0gcnVsZU5hbWUuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIHZhciBydWxlc0xpc3QgPSBbJ3JlcXVpcmVkJywgJ2NyZWRpdGNhcmQnLCAncGhvbmUnLCAnbWF4bGVuZ3RoJywgJ21pbmxlbmd0aCcsICdyYW5nZScsICdyZWdleCcsICdlcXVhbHRvJ107XG4gICAgICAgICAgICB2YXIgcnVsZUZpcnN0TmFtZSA9IGFubm90YXRpb25SdWxlW2Fubm90YXRpb25SdWxlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIHJ1bGVTZWNvbmROYW1lID0gYW5ub3RhdGlvblJ1bGVbYW5ub3RhdGlvblJ1bGUubGVuZ3RoIC0gMl07XG4gICAgICAgICAgICBpZiAocnVsZXNMaXN0LmluZGV4T2YocnVsZUZpcnN0TmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChydWxlRmlyc3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgcnVsZUNvbiwgJ3JlcXVpcmVkJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NyZWRpdGNhcmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBydWxlQ29uLCAnY3JlZGl0Y2FyZCcsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdwaG9uZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIHJ1bGVDb24sICd0ZWwnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChydWxlc0xpc3QuaW5kZXhPZihydWxlU2Vjb25kTmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChydWxlU2Vjb25kTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtYXhsZW5ndGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBydWxlQ29uLCAnbWF4TGVuZ3RoJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21pbmxlbmd0aCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIHJ1bGVDb24sICdtaW5MZW5ndGgnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbnZhbHVlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbC1yYW5nZS1taW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXh2YWx1ZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWwtcmFuZ2UtbWF4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIHJ1bGVDb24sICdyYW5nZScsIFttaW52YWx1ZSwgbWF4dmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlcXVhbHRvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IGlucHV0LmdldEF0dHJpYnV0ZShydWxlTmFtZSkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgcnVsZUNvbiwgJ2VxdWFsVG8nLCBpZFtpZC5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVnZXgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBydWxlQ29uLCAncmVnZXgnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmRlZlJ1bGUgPSBmdW5jdGlvbiAoaW5wdXQsIHJ1bGVDb24sIHJ1bGVOYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIHJ1bGVOYW1lICsgJy1tZXNzYWdlJyk7XG4gICAgICAgICAgICB2YXIgYW5ub3RhdGlvbk1lc3NhZ2UgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsLScgKyBydWxlTmFtZSk7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlLCBtZXNzYWdlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFubm90YXRpb25NZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbdmFsdWUsIGFubm90YXRpb25NZXNzYWdlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJ1bGVDb25bcnVsZU5hbWVdID0gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gKHRoaXMuaW5wdXRFbGVtZW50cyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGlmIChGb3JtVmFsaWRhdG9yXzEuaXNDaGVja2FibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZChpbnB1dCwgJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpbnB1dC50YWdOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQoaW5wdXQsICdjaGFuZ2UnLCB0aGlzLmNoYW5nZUhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKGlucHV0LCAnZm9jdXNvdXQnLCB0aGlzLmZvY3VzT3V0SGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZChpbnB1dCwgJ2tleXVwJywgdGhpcy5rZXlVcEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdzdWJtaXQnLCB0aGlzLnN1Ym1pdEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS51bndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gKHRoaXMuaW5wdXRFbGVtZW50cyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmNsZWFyRXZlbnRzKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdzdWJtaXQnLCB0aGlzLnN1Ym1pdEhhbmRsZXIpO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5mb2N1c091dEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdmb2N1c291dCcsIGUpO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bGVzW2VsZW1lbnQubmFtZV0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ydWxlc1tlbGVtZW50Lm5hbWVdW3RoaXMucmVxdWlyZWRdIHx8IGVsZW1lbnQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlKGVsZW1lbnQubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudmFsaWRhdGVkLmluZGV4T2YoZWxlbWVudC5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZWQucHVzaChlbGVtZW50Lm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUua2V5VXBIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigna2V5dXAnLCBlKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgZXhjbHVkZUtleXMgPSBbMTYsIDE3LCAxOCwgMjAsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQ1LCAxNDQsIDIyNV07XG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gOSAmJiAoIXRoaXMucnVsZXNbZWxlbWVudC5uYW1lXSB8fCAodGhpcy5ydWxlc1tlbGVtZW50Lm5hbWVdICYmICF0aGlzLnJ1bGVzW2VsZW1lbnQubmFtZV1bdGhpcy5yZXF1aXJlZF0pKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlZC5pbmRleE9mKGVsZW1lbnQubmFtZSkgIT09IC0xICYmIHRoaXMucnVsZXNbZWxlbWVudC5uYW1lXSAmJiBleGNsdWRlS2V5cy5pbmRleE9mKGUud2hpY2gpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGUoZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCBlKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50eXBlICE9PSAnc3VibWl0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGUoZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdmb3Jtbm92YWxpZGF0ZScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxvd1N1Ym1pdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCBlKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKGVsZW1lbnQubmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLnN1Ym1pdEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdzdWJtaXQnLCBlKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5hbGxvd1N1Ym1pdCAmJiAhdGhpcy52YWxpZGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxvd1N1Ym1pdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZVJ1bGVzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ydWxlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBydWxlcyA9IE9iamVjdC5rZXlzKHRoaXMucnVsZXNbbmFtZV0pO1xuICAgICAgICAgICAgdGhpcy5nZXRJbnB1dEVsZW1lbnQobmFtZSk7XG4gICAgICAgICAgICB0aGlzLmdldEVycm9yRWxlbWVudChuYW1lKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgcnVsZXNfMiA9IHJ1bGVzOyBfaSA8IHJ1bGVzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJ1bGUgPSBydWxlc18yW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gdGhpcy5nZXRFcnJvck1lc3NhZ2UodGhpcy5ydWxlc1tuYW1lXVtydWxlXSwgcnVsZSk7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yUnVsZSA9IHsgbmFtZTogbmFtZSwgbWVzc2FnZTogZXJyb3JNZXNzYWdlIH07XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXROYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLmlucHV0RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZChuYW1lLCBydWxlKSAmJiAhdGhpcy5pbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuaWdub3JlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycm9yUnVsZXMobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JSdWxlcy5wdXNoKGVycm9yUnVsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGhpcy5pbnB1dEVsZW1lbnQuaWQgKyAnLWluZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmluZm9FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVycm9yRWxlbWVudChuYW1lLCBlcnJvclJ1bGUubWVzc2FnZSwgdGhpcy5pbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShlcnJvclJ1bGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QXJncy5lcnJvckVsZW1lbnQgPSB0aGlzLmluZm9FbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBldmVudEFyZ3Muc3RhdHVzID0gJ2ZhaWx1cmUnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZXJyb3JDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy52YWxpZENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCd2YWxpZGF0aW9uQ29tcGxldGUnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZSA9PT0gJ3JlcXVpcmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1lc3NhZ2UobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QXJncy5zdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcigndmFsaWRhdGlvbkNvbXBsZXRlJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmlzVmFsaWQgPSBmdW5jdGlvbiAobmFtZSwgcnVsZSkge1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHRoaXMucnVsZXNbbmFtZV1bcnVsZV07XG4gICAgICAgICAgICB2YXIgcGFyYW0gPSAocGFyYW1zIGluc3RhbmNlb2YgQXJyYXkgJiYgdHlwZW9mIHBhcmFtc1sxXSA9PT0gJ3N0cmluZycpID8gcGFyYW1zWzBdIDogcGFyYW1zO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRSdWxlID0gdGhpcy5ydWxlc1tuYW1lXVtydWxlXTtcbiAgICAgICAgICAgIHZhciBhcmdzID0geyB2YWx1ZTogdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUsIHBhcmFtOiBwYXJhbSwgZWxlbWVudDogdGhpcy5pbnB1dEVsZW1lbnQsIGZvcm1FbGVtZW50OiB0aGlzLmVsZW1lbnQgfTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigndmFsaWRhdGlvbkJlZ2luJywgYXJncyk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFJ1bGUgJiYgdHlwZW9mIGN1cnJlbnRSdWxlWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gY3VycmVudFJ1bGVbMF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgeyBlbGVtZW50OiB0aGlzLmlucHV0RWxlbWVudCwgdmFsdWU6IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoRm9ybVZhbGlkYXRvcl8xLmlzQ2hlY2thYmxlKHRoaXMuaW5wdXRFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGlmIChydWxlICE9PSAncmVxdWlyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZWoyX2Jhc2VfMS5zZWxlY3RBbGwoJ2lucHV0W25hbWU9JyArIG5hbWUgKyAnXTpjaGVja2VkJywgdGhpcy5lbGVtZW50KS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZvcm1WYWxpZGF0b3JfMS5jaGVja1ZhbGlkYXRvcltydWxlXShhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuZ2V0RXJyb3JNZXNzYWdlID0gZnVuY3Rpb24gKHJ1bGVWYWx1ZSwgcnVsZSkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAocnVsZVZhbHVlIGluc3RhbmNlb2YgQXJyYXkgJiYgdHlwZW9mIHJ1bGVWYWx1ZVsxXSA9PT0gJ3N0cmluZycpID8gcnVsZVZhbHVlWzFdIDogdGhpcy5kZWZhdWx0TWVzc2FnZXNbcnVsZV07XG4gICAgICAgICAgICB2YXIgZm9ybWF0cyA9IG1lc3NhZ2UubWF0Y2goL3soXFxkKX0vZyk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzIuaXNOdWxsT3JVbmRlZmluZWQoZm9ybWF0cykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcm1hdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcnVsZVZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyBydWxlVmFsdWVbaV0gOiBydWxlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoZm9ybWF0c1tpXSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5jcmVhdGVFcnJvckVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSwgbWVzc2FnZSwgaW5wdXQpIHtcbiAgICAgICAgICAgIHZhciBlcnJvckVsZW1lbnQgPSBlajJfYmFzZV8xLmNyZWF0ZUVsZW1lbnQodGhpcy5lcnJvckVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuZXJyb3JDbGFzcyxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBuYW1lIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JPcHRpb24gPT09IEVycm9yT3B0aW9uLk1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmVycm9yQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlLW1lc3NhZ2UnKTtcbiAgICAgICAgICAgICAgICBlcnJvckVsZW1lbnQgPSBlajJfYmFzZV8xLmNyZWF0ZUVsZW1lbnQodGhpcy5lcnJvckNvbnRhaW5lciwgeyBjbGFzc05hbWU6IHRoaXMuZXJyb3JDbGFzcywgaW5uZXJIVE1MOiBlcnJvckVsZW1lbnQub3V0ZXJIVE1MIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3JFbGVtZW50LmlkID0gdGhpcy5pbnB1dEVsZW1lbnQubmFtZSArICctaW5mbyc7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbG1zZy1mb3I9XCInICsgaW5wdXQuaWQgKyAnXCJdJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmFsbXNnLWZvcj1cIicgKyBpbnB1dC5pZCArICdcIl0nKS5hcHBlbmRDaGlsZChlcnJvckVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdkYXRhLW1zZy1jb250YWluZXJpZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lcklkID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1zZy1jb250YWluZXJpZCcpO1xuICAgICAgICAgICAgICAgIHZhciBkaXZFbGVtZW50ID0gaW5wdXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGNvbnRhaW5lcklkKTtcbiAgICAgICAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGVycm9yRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1c3RvbVBsYWNlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21QbGFjZW1lbnQuY2FsbCh0aGlzLCB0aGlzLmlucHV0RWxlbWVudCwgZXJyb3JFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVycm9yRWxlbWVudCwgdGhpcy5pbnB1dEVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3JFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5nZXRFcnJvckVsZW1lbnQobmFtZSk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlZC5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgdGhpcy5jaGVja1JlcXVpcmVkKG5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5nZXRFcnJvckVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5pbmZvRWxlbWVudCA9IGVqMl9iYXNlXzEuc2VsZWN0KHRoaXMuZXJyb3JFbGVtZW50ICsgJy4nICsgdGhpcy5lcnJvckNsYXNzLCB0aGlzLmlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbmZvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0VsZW1lbnQgPSBlajJfYmFzZV8xLnNlbGVjdCh0aGlzLmVycm9yRWxlbWVudCArICcuJyArIHRoaXMuZXJyb3JDbGFzcyArICdbZm9yPVwiJyArIG5hbWUgKyAnXCJdJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmZvRWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUucmVtb3ZlRXJyb3JSdWxlcyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXJyb3JSdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBydWxlID0gdGhpcy5lcnJvclJ1bGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChydWxlLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvclJ1bGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLnNob3dNZXNzYWdlID0gZnVuY3Rpb24gKGVycm9yUnVsZSkge1xuICAgICAgICAgICAgdGhpcy5pbmZvRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMuaW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gZXJyb3JSdWxlLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUmVxdWlyZWQoZXJyb3JSdWxlLm5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5oaWRlTWVzc2FnZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbmZvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVycm9yUnVsZXMobmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnZhbGlkQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5lcnJvckNsYXNzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5jaGVja1JlcXVpcmVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ydWxlc1tuYW1lXVt0aGlzLnJlcXVpcmVkXSAmJiAhdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmlucHV0RWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9FbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlTWVzc2FnZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5pc0NoZWNrYWJsZSA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgdmFyIGlucHV0VHlwZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpO1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0VHlwZSAmJiAoaW5wdXRUeXBlID09PSAnY2hlY2tib3gnIHx8IGlucHV0VHlwZSA9PT0gJ3JhZGlvJyB8fCBpbnB1dFR5cGUgPT09ICdzdWJtaXQnKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1WYWxpZGF0b3I7XG4gICAgfShlajJfYmFzZV8xLkJhc2UpKTtcbiAgICBGb3JtVmFsaWRhdG9yLmNoZWNrVmFsaWRhdG9yID0ge1xuICAgICAgICByZXF1aXJlZDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZS5sZW5ndGggPiAwO1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFZBTElEQVRFX0VNQUlMLnRlc3Qob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gVkFMSURBVEVfVVJMLnRlc3Qob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0ZUlzbzogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFZBTElEQVRFX0RBVEVfSVNPLnRlc3Qob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGVsOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gVkFMSURBVEVfUEhPTkUudGVzdChvcHRpb24udmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBjcmVkaXRjYXJkOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gVkFMSURBVEVfQ1JFRElUQ0FSRC50ZXN0KG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG51bWJlcjogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuICFpc05hTihOdW1iZXIob3B0aW9uLnZhbHVlKSkgJiYgb3B0aW9uLnZhbHVlLmluZGV4T2YoJyAnKSA9PT0gLTE7XG4gICAgICAgIH0sXG4gICAgICAgIGRpZ2l0czogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFZBTElEQVRFX0RJR0lUUy50ZXN0KG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1heExlbmd0aDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZS5sZW5ndGggPD0gb3B0aW9uLnBhcmFtO1xuICAgICAgICB9LFxuICAgICAgICBtaW5MZW5ndGg6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWUubGVuZ3RoID49IG9wdGlvbi5wYXJhbTtcbiAgICAgICAgfSxcbiAgICAgICAgcmFuZ2VMZW5ndGg6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHZhciBwYXJhbSA9IG9wdGlvbi5wYXJhbTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWUubGVuZ3RoID49IHBhcmFtWzBdICYmIG9wdGlvbi52YWx1ZS5sZW5ndGggPD0gcGFyYW1bMV07XG4gICAgICAgIH0sXG4gICAgICAgIHJhbmdlOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW0gPSBvcHRpb24ucGFyYW07XG4gICAgICAgICAgICByZXR1cm4gIWlzTmFOKE51bWJlcihvcHRpb24udmFsdWUpKSAmJiBOdW1iZXIob3B0aW9uLnZhbHVlKSA+PSBwYXJhbVswXSAmJiBOdW1iZXIob3B0aW9uLnZhbHVlKSA8PSBwYXJhbVsxXTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0ZTogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuICFpc05hTihuZXcgRGF0ZShvcHRpb24udmFsdWUpLmdldFRpbWUoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1heDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIob3B0aW9uLnZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gK29wdGlvbi52YWx1ZSA8PSBvcHRpb24ucGFyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUob3B0aW9uLnZhbHVlKS5nZXRUaW1lKCkgPD0gbmV3IERhdGUoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb24ucGFyYW0pKSkuZ2V0VGltZSgpO1xuICAgICAgICB9LFxuICAgICAgICBtaW46IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKG9wdGlvbi52YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICtvcHRpb24udmFsdWUgPj0gb3B0aW9uLnBhcmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKG9wdGlvbi52YWx1ZSkuZ2V0VGltZSgpID49IG5ldyBEYXRlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9uLnBhcmFtKSkpLmdldFRpbWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVnZXg6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKG9wdGlvbi5wYXJhbSkudGVzdChvcHRpb24udmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlcXVhbFRvOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgY29tcGFyZVRvID0gb3B0aW9uLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9uLnBhcmFtKTtcbiAgICAgICAgICAgIG9wdGlvbi5wYXJhbSA9IGNvbXBhcmVUby52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24ucGFyYW0gPT09IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLlByb3BlcnR5KCdlLWhpZGRlbicpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwiaWdub3JlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuUHJvcGVydHkoe30pXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwicnVsZXNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5Qcm9wZXJ0eSgnZS1lcnJvcicpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwiZXJyb3JDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLlByb3BlcnR5KCdlLXZhbGlkJylcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJ2YWxpZENsYXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuUHJvcGVydHkoJ2xhYmVsJylcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJlcnJvckVsZW1lbnRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5Qcm9wZXJ0eSgnZGl2JylcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJlcnJvckNvbnRhaW5lclwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLlByb3BlcnR5KEVycm9yT3B0aW9uLkxhYmVsKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcImVycm9yT3B0aW9uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcImZvY3Vzb3V0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcImtleXVwXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcImNsaWNrXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcImNoYW5nZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJzdWJtaXRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwidmFsaWRhdGlvbkJlZ2luXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcInZhbGlkYXRpb25Db21wbGV0ZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJjdXN0b21QbGFjZW1lbnRcIiwgdm9pZCAwKTtcbiAgICBGb3JtVmFsaWRhdG9yID0gRm9ybVZhbGlkYXRvcl8xID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuTm90aWZ5UHJvcGVydHlDaGFuZ2VzXG4gICAgXSwgRm9ybVZhbGlkYXRvcik7XG4gICAgZXhwb3J0cy5Gb3JtVmFsaWRhdG9yID0gRm9ybVZhbGlkYXRvcjtcbiAgICB2YXIgRm9ybVZhbGlkYXRvcl8xO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb3JtLXZhbGlkYXRvci9mb3JtLXZhbGlkYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==