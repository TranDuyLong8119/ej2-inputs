/*!
*  filename: ej2-inputs.umd.js
*  version : 1.0.22
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
	                        var isSpace = ej2_base_1.Browser.isAndroid && val_1 === '';
	                        if (!isSpace && oldVal !== val_1 && collec.value.substring(startIndex_1 - addedValues, startIndex_1) !== val_1) {
	                            validateValue.call(this, val_1, event.ctrlKey, event);
	                        }
	                        else if (isSpace) {
	                            preventUnsupportedValues.call(this, event, startIndex_1 - 1, this.element.selectionEnd - 1, val_1, event.ctrlKey, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMjk3NzM2ZGNmMmUxMDUxNjIzZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWN0ZXh0Ym94L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljdGV4dGJveC9udW1lcmljdGV4dGJveC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFza2VkdGV4dGJveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFza2VkdGV4dGJveC9iYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXNrZWR0ZXh0Ym94L2Jhc2UvbWFzay1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXNrZWR0ZXh0Ym94L21hc2tlZHRleHRib3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hc2tlZHRleHRib3gvbWFza2VkdGV4dGJveC9tYXNrZWR0ZXh0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS12YWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm0tdmFsaWRhdG9yL2Zvcm0tdmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztpRUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztpRUNWRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O0FDUEQ7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsd0NBQXdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQseUZBQXlGO0FBQzFJLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFrRSw2Q0FBNkM7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxxREFBcUQ7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELDBCQUEwQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0QsbUJBQW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWdELHFCQUFxQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXVFLGNBQWM7QUFDckY7QUFDQSx1RkFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0Msb0RBQW9EO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRCwwQkFBMEI7QUFDL0U7QUFDQSxvRUFBbUUsU0FBUyxpQkFBaUIsRUFBRTtBQUMvRjtBQUNBO0FBQ0Esc0RBQXFELHlCQUF5QjtBQUM5RTtBQUNBO0FBQ0Esd0RBQXVELDJCQUEyQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQywyQkFBMkI7QUFDL0Q7QUFDQTtBQUNBLHFDQUFvQyx3QkFBd0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EseUNBQXdDLHFDQUFxQyxjQUFjLGlEQUFpRDtBQUM1STtBQUNBO0FBQ0EseUNBQXdDLHFDQUFxQyxjQUFjLGlEQUFpRDtBQUM1STtBQUNBO0FBQ0EsaUNBQWdDLGlEQUFpRDtBQUNqRixrREFBaUQsNkVBQTZFO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLHNDQUFzQyxjQUFjLGtEQUFrRDtBQUMxSTtBQUNBO0FBQ0E7QUFDQSx5RUFBd0UsY0FBYztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFpRCx1REFBdUQ7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxjQUFjO0FBQ2xEO0FBQ0EsOERBQTZELGNBQWM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxjQUFjO0FBQ2xELGlFQUFnRSxjQUFjO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxlQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0MsbURBQW1EO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRCx5QkFBeUI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx3QkFBd0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDLGNBQWM7QUFDdEQ7QUFDQSxrRUFBaUUsY0FBYztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQW9ELHVCQUF1QixzQkFBc0IsRUFBRTtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyxrQkFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQSx1RUFBc0UsZ0RBQWdEO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFLDBCQUEwQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ2h2QkQsZ0Q7Ozs7OztpRUNBQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQix5QkFBeUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFnRSxrQ0FBa0M7QUFDbEcsb0VBQW1FLGtDQUFrQztBQUNyRztBQUNBO0FBQ0Esc0RBQXFELDBDQUEwQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW1FLGdCQUFnQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUEyRCxrQ0FBa0M7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EseUNBQXdDLHlEQUF5RCxFQUFFO0FBQ25HLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXNFLHVCQUF1QjtBQUM3RjtBQUNBO0FBQ0E7QUFDQSw0REFBMkQsdUJBQXVCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsOERBQThEO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWdELGVBQWU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRCxnQkFBZ0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQsZ0JBQWdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWlELDZCQUE2QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsMEVBQTBFLDJCQUEyQjtBQUNqSTtBQUNBLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUEyRCx1QkFBdUI7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EseUNBQXdDLDRDQUE0QyxFQUFFO0FBQ3RGLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxNQUFLLDhDQUE4QztBQUNuRCxFQUFDOzs7Ozs7O2lFQ2piRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7aUVDUkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsRUFBQzs7Ozs7OztpRUNQRDtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDO0FBQzdDLG1GQUFrRjtBQUNsRjtBQUNBO0FBQ0EsNEJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsMkJBQTJCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLDJCQUEyQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsNEJBQTRCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWlELDBCQUEwQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLG9DQUFvQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDLDBHQUEwRztBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyx5RkFBeUY7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0MsMEVBQTBFO0FBQ2xILDZDQUE0QywwRkFBMEY7QUFDdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxzQ0FBc0M7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDLDRCQUE0QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyx5QkFBeUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELDZEQUE2RDtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRCx1RUFBdUU7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMseUJBQXlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztpRUN2eUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBLEVBQUM7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0EsV0FBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLDBCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixvQ0FBb0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztpRUNuUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsRUFBQzs7Ozs7OztpRUNQRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O0FDUEQ7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRSx3REFBdUQsR0FBRyxVQUFVLEdBQUcsS0FBSyxFQUFFLFNBQVMsSUFBSTtBQUMzRixlQUFjLEVBQUUsU0FBUyxJQUFJLElBQUksRUFBRSxTQUFTLElBQUk7QUFDaEQseUVBQXdFLEdBQUcsVUFBVSxHQUFHO0FBQ3hGLGlEQUFnRCxFQUFFO0FBQ2xEO0FBQ0EsaURBQWdELEtBQUs7QUFDckQsZ0RBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLLGdFQUFnRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELEVBQUU7QUFDekQsb0RBQW1ELEVBQUU7QUFDckQsNkRBQTRELEVBQUUsTUFBTSxFQUFFO0FBQ3RFLHVEQUFzRCxFQUFFLE1BQU0sRUFBRTtBQUNoRSxtRUFBa0UsRUFBRTtBQUNwRSxzRUFBcUUsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLGtEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRCx3QkFBd0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW1ELHdCQUF3QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0Esd0RBQXVELHdCQUF3QjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLHFCQUFxQjtBQUNsRTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQyw2REFBNkQ7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsS0FBSztBQUMvQztBQUNBLGdDQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0I7QUFDeEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLCtFQUE4RSxnRUFBZ0U7QUFDOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQiw0QkFBNEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyIsImZpbGUiOiJlajItaW5wdXRzLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMjk3NzM2ZGNmMmUxMDUxNjIzZSIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vbnVtZXJpY3RleHRib3gvaW5kZXhcIiwgXCIuL21hc2tlZHRleHRib3gvaW5kZXhcIiwgXCIuL2lucHV0L2luZGV4XCIsIFwiLi9mb3JtLXZhbGlkYXRvci9pbmRleFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGluZGV4XzEsIGluZGV4XzIsIGluZGV4XzMsIGluZGV4XzQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGluZGV4XzEpO1xuICAgIF9fZXhwb3J0KGluZGV4XzIpO1xuICAgIF9fZXhwb3J0KGluZGV4XzMpO1xuICAgIF9fZXhwb3J0KGluZGV4XzQpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL251bWVyaWN0ZXh0Ym94XCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgbnVtZXJpY3RleHRib3hfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQobnVtZXJpY3RleHRib3hfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL251bWVyaWN0ZXh0Ym94L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIi4uL2lucHV0L2lucHV0XCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZWoyX2Jhc2VfMSwgZWoyX2Jhc2VfMiwgZWoyX2Jhc2VfMywgZWoyX2Jhc2VfNCwgZWoyX2Jhc2VfNSwgaW5wdXRfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgUk9PVCA9ICdlLW51bWVyaWMnO1xuICAgIHZhciBTUElOSUNPTiA9ICdlLWlucHV0LWdyb3VwLWljb24nO1xuICAgIHZhciBTUElOVVAgPSAnZS1zcGluLXVwJztcbiAgICB2YXIgU1BJTkRPV04gPSAnZS1zcGluLWRvd24nO1xuICAgIHZhciBFUlJPUiA9ICdlLWVycm9yJztcbiAgICB2YXIgSU5DUkVNRU5UID0gJ2luY3JlbWVudCc7XG4gICAgdmFyIERFQ1JFTUVOVCA9ICdkZWNyZW1lbnQnO1xuICAgIHZhciBJTlRSRUdFWFAgPSBuZXcgUmVnRXhwKCcvXigtKT8oXFxkKikkLycpO1xuICAgIHZhciBERUNJTUFMU0VQQVJBVE9SID0gJy4nO1xuICAgIHZhciBOdW1lcmljVGV4dEJveCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhOdW1lcmljVGV4dEJveCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gTnVtZXJpY1RleHRCb3gob3B0aW9ucywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgZWxlbWVudCkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLmlzUHJldkZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmRlY2ltYWxTZXBhcmF0b3IgPSAnLic7XG4gICAgICAgICAgICBfdGhpcy5pbnRSZWdFeHAgPSBuZXcgUmVnRXhwKCcvXigtKT8oXFxkKikkLycpO1xuICAgICAgICAgICAgX3RoaXMuaXNDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUucHJlUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVqSW5zdGFuY2UgPSBlajJfYmFzZV80LmdldFZhbHVlKCdlajJfaW5zdGFuY2VzJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuY2xvbmVFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYW5ndWxhclRhZ05hbWUgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC50YWdOYW1lID09PSAnRUotTlVNRVJJQ1RFWFRCT1gnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmd1bGFyVGFnTmFtZSA9IHRoaXMuZWxlbWVudC50YWdOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaW5kZXg7IGluZGV4IDwgdGhpcy5lbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQuYXR0cmlidXRlc1tpbmRleF0ubm9kZU5hbWUsIHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzW2luZGV4XS5ub2RlVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5pbm5lckhUTUwgPSB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV80LnNldFZhbHVlKCdlajJfaW5zdGFuY2VzJywgZWpJbnN0YW5jZSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ3JvbGUnOiAnc3BpbmJ1dHRvbicsICd0YWJpbmRleCc6ICcwJywgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnLCAnYXJpYS1saXZlJzogJ2Fzc2VydGl2ZScgfSk7XG4gICAgICAgICAgICB2YXIgbG9jYWxlVGV4dCA9IHsgaW5jcmVtZW50VGl0bGU6ICdJbmNyZW1lbnQgdmFsdWUnLCBkZWNyZW1lbnRUaXRsZTogJ0RlY3JlbWVudCB2YWx1ZScsIHBsYWNlaG9sZGVyOiAnJyB9O1xuICAgICAgICAgICAgdGhpcy5sMTBuID0gbmV3IGVqMl9iYXNlXzEuTDEwbignbnVtZXJpY3RleHRib3gnLCBsb2NhbGVUZXh0LCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlucHV0U3R5bGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pbnB1dE5hbWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jdWx0dXJlSW5mbyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5pbml0Q3VsdHVyZUluZm8oKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEN1bHR1cmVGdW5jKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZU1pbk1heCgpO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVN0ZXAoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQbGFjZWhvbGRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVdyYXBwZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93U3BpbkJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5CdG5DcmVhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy53aWR0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lciwgeyAnd2lkdGgnOiBlajJfYmFzZV80LmZvcm1hdFVuaXQodGhpcy53aWR0aCkgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy53aXJlRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IG51bGwgJiYgIWlzTmFOKHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlY2ltYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB2YWx1ZTogdGhpcy5yb3VuZE51bWJlcih0aGlzLnZhbHVlLCB0aGlzLmRlY2ltYWxzKSB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmNoZWNrQXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzID0gWyd2YWx1ZScsICdtaW4nLCAnbWF4JywgJ3N0ZXAnLCAnZGlzYWJsZWQnLCAncmVhZG9ubHknLCAnc3R5bGUnLCAnbmFtZSddO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBhdHRyaWJ1dGVzXzEgPSBhdHRyaWJ1dGVzOyBfaSA8IGF0dHJpYnV0ZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IGF0dHJpYnV0ZXNfMVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUocHJvcCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGlzYWJsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmFibGVkID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShwcm9wKSA9PT0gJ2Rpc2FibGVkJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKHByb3ApID09PSAndHJ1ZScgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgZW5hYmxlZDogZW5hYmxlZCB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlYWRvbmx5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZG9ubHkgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKHByb3ApID09PSAncmVhZG9ubHknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUocHJvcCkgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyByZWFkb25seTogcmVhZG9ubHkgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFN0eWxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXROYW1lID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXROdW1iZXJQYXJzZXIoeyBmb3JtYXQ6ICduJyB9KSh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKHByb3ApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHZhbHVlICE9PSBudWxsICYmICFpc05hTih2YWx1ZSkpIHx8IChwcm9wID09PSAndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoZWoyX2Jhc2VfNC5zZXRWYWx1ZShwcm9wLCB2YWx1ZSwge30pLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS51cGRhdGVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHBsYWNlaG9sZGVyOiB0aGlzLmwxMG4uZ2V0Q29uc3RhbnQoJ3BsYWNlaG9sZGVyJykgfSwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5pbml0Q3VsdHVyZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IGVqMl9iYXNlXzUuSW50ZXJuYXRpb25hbGl6YXRpb24odGhpcy5sb2NhbGUpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuaW5pdEN1bHR1cmVJbmZvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jdWx0dXJlSW5mby5mb3JtYXQgPSB0aGlzLmZvcm1hdDtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmdldFZhbHVlKCdjdXJyZW5jeScsIHRoaXMpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRWYWx1ZSgnY3VycmVuY3knLCB0aGlzLmN1cnJlbmN5LCB0aGlzLmN1bHR1cmVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmNyZWF0ZVdyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRPYmogPSBpbnB1dF8xLklucHV0LmNyZWF0ZUlucHV0KHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgY3VzdG9tVGFnOiB0aGlzLmFuZ3VsYXJUYWdOYW1lLFxuICAgICAgICAgICAgICAgIGZsb2F0TGFiZWxUeXBlOiB0aGlzLmZsb2F0TGFiZWxUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IHRoaXMucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogdGhpcy5jc3NDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlUnRsOiB0aGlzLmVuYWJsZVJ0bCxcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdGhpcy5lbmFibGVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGlucHV0T2JqLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuYWRkQ2xhc3MoW3RoaXMuY29udGFpbmVyXSwgUk9PVCk7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ2FyaWEtcmVhZG9ubHknOiAndHJ1ZScgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhpZGRlbklucHV0ID0gKGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IGF0dHJzOiB7IHR5cGU6ICdoaWRkZW4nIH0gfSkpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dE5hbWUgPSB0aGlzLmlucHV0TmFtZSAhPT0gbnVsbCA/IHRoaXMuaW5wdXROYW1lIDogdGhpcy5lbGVtZW50LmlkO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKHRoaXMuaGlkZGVuSW5wdXQsIHsgJ25hbWUnOiB0aGlzLmlucHV0TmFtZSB9KTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmhpZGRlbklucHV0LCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRTdHlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLmNvbnRhaW5lciwgeyAnc3R5bGUnOiB0aGlzLmlucHV0U3R5bGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5zcGluQnRuQ3JlYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW5Eb3duID0gaW5wdXRfMS5JbnB1dC5hcHBlbmRTcGFuKFNQSU5JQ09OICsgJyAnICsgU1BJTkRPV04sIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLnNwaW5Eb3duLCB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5sMTBuLmdldENvbnN0YW50KCdkZWNyZW1lbnRUaXRsZScpLFxuICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5sMTBuLmdldENvbnN0YW50KCdkZWNyZW1lbnRUaXRsZScpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc3BpblVwID0gaW5wdXRfMS5JbnB1dC5hcHBlbmRTcGFuKFNQSU5JQ09OICsgJyAnICsgU1BJTlVQLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5zcGluVXAsIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiB0aGlzLmwxMG4uZ2V0Q29uc3RhbnQoJ2luY3JlbWVudFRpdGxlJyksXG4gICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLmwxMG4uZ2V0Q29uc3RhbnQoJ2luY3JlbWVudFRpdGxlJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy53aXJlU3BpbkJ0bkV2ZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUudmFsaWRhdGVNaW5NYXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoISh0eXBlb2YgKHRoaXMubWluKSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHRoaXMubWluKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBtaW46IC0oTnVtYmVyLk1BWF9WQUxVRSkgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISh0eXBlb2YgKHRoaXMubWF4KSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHRoaXMubWF4KSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBtYXg6IE51bWJlci5NQVhfVkFMVUUgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kZWNpbWFscyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pbiAhPT0gLShOdW1iZXIuTUFYX1ZBTFVFKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBtaW46IHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyUGFyc2VyKHsgZm9ybWF0OiAnbicgfSkodGhpcy5mb3JtYXR0ZWRWYWx1ZSh0aGlzLmRlY2ltYWxzLCB0aGlzLm1pbikpIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXggIT09IChOdW1iZXIuTUFYX1ZBTFVFKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBtYXg6IHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyUGFyc2VyKHsgZm9ybWF0OiAnbicgfSkodGhpcy5mb3JtYXR0ZWRWYWx1ZSh0aGlzLmRlY2ltYWxzLCB0aGlzLm1heCkpIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IG1pbjogdGhpcy5taW4gPiB0aGlzLm1heCA/IHRoaXMubWF4IDogdGhpcy5taW4gfSwgdHJ1ZSk7XG4gICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7ICdhcmlhLXZhbHVlbWluJzogdGhpcy5taW4udG9TdHJpbmcoKSwgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLm1heC50b1N0cmluZygpIH0pO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuZm9ybWF0dGVkVmFsdWUgPSBmdW5jdGlvbiAoZGVjaW1hbHMsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXROdW1iZXJGb3JtYXQoe1xuICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHMsXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBkZWNpbWFscywgdXNlR3JvdXBpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSh2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS52YWxpZGF0ZVN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWNpbWFscyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHN0ZXA6IHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyUGFyc2VyKHsgZm9ybWF0OiAnbicgfSkodGhpcy5mb3JtYXR0ZWRWYWx1ZSh0aGlzLmRlY2ltYWxzLCB0aGlzLnN0ZXApKSB9LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmFjdGlvbiA9IGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuaXNGb2N1c2VkID8gdGhpcy5pbnN0YW5jZS5nZXROdW1iZXJQYXJzZXIoeyBmb3JtYXQ6ICduJyB9KSh0aGlzLmVsZW1lbnQudmFsdWUpIDogdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5wZXJmb3JtQWN0aW9uKHZhbHVlLCB0aGlzLnN0ZXAsIG9wZXJhdGlvbikpO1xuICAgICAgICAgICAgdGhpcy5yYWlzZUNoYW5nZUV2ZW50KCk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5jaGVja0Vycm9yQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnJlbW92ZUNsYXNzKFt0aGlzLmNvbnRhaW5lcl0sIEVSUk9SKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYWRkQ2xhc3MoW3RoaXMuY29udGFpbmVyXSwgRVJST1IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCwgeyAnYXJpYS1pbnZhbGlkJzogdGhpcy5pc1ZhbGlkU3RhdGUgPyAnZmFsc2UnIDogJ3RydWUnIH0pO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUud2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdmb2N1cycsIHRoaXMuZm9jdXNJbiwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnYmx1cicsIHRoaXMuZm9jdXNPdXQsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdrZXlwcmVzcycsIHRoaXMua2V5UHJlc3NIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdjaGFuZ2UnLCB0aGlzLmNoYW5nZUhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ3Bhc3RlJywgdGhpcy5wYXN0ZUhhbmRsZXIsIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUud2lyZVNwaW5CdG5FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5zcGluVXAsIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaFN0YXJ0RXZlbnQsIHRoaXMubW91c2VEb3duT25TcGlubmVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLnNwaW5Eb3duLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hTdGFydEV2ZW50LCB0aGlzLm1vdXNlRG93bk9uU3Bpbm5lciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5zcGluVXAsIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaEVuZEV2ZW50LCB0aGlzLm1vdXNlVXBPblNwaW5uZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuc3BpbkRvd24sIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaEVuZEV2ZW50LCB0aGlzLm1vdXNlVXBPblNwaW5uZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuc3BpblVwLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hNb3ZlRXZlbnQsIHRoaXMudG91Y2hNb3ZlT25TcGlubmVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLnNwaW5Eb3duLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hNb3ZlRXZlbnQsIHRoaXMudG91Y2hNb3ZlT25TcGlubmVyLCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnVud2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdmb2N1cycsIHRoaXMuZm9jdXNJbik7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnYmx1cicsIHRoaXMuZm9jdXNPdXQpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdrZXlwcmVzcycsIHRoaXMua2V5UHJlc3NIYW5kbGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdjaGFuZ2UnLCB0aGlzLmNoYW5nZUhhbmRsZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ3Bhc3RlJywgdGhpcy5wYXN0ZUhhbmRsZXIpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUudW53aXJlU3BpbkJ0bkV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLnNwaW5VcCwgZWoyX2Jhc2VfMS5Ccm93c2VyLnRvdWNoU3RhcnRFdmVudCwgdGhpcy5tb3VzZURvd25PblNwaW5uZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuc3BpbkRvd24sIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaFN0YXJ0RXZlbnQsIHRoaXMubW91c2VEb3duT25TcGlubmVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLnNwaW5VcCwgZWoyX2Jhc2VfMS5Ccm93c2VyLnRvdWNoRW5kRXZlbnQsIHRoaXMubW91c2VVcE9uU3Bpbm5lcik7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5zcGluRG93biwgZWoyX2Jhc2VfMS5Ccm93c2VyLnRvdWNoRW5kRXZlbnQsIHRoaXMubW91c2VVcE9uU3Bpbm5lcik7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5zcGluVXAsIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaE1vdmVFdmVudCwgdGhpcy50b3VjaE1vdmVPblNwaW5uZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuc3BpbkRvd24sIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaE1vdmVFdmVudCwgdGhpcy50b3VjaE1vdmVPblNwaW5uZXIpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuY2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgdmFsdWU6IG51bGwgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcGFyc2VkSW5wdXQgPSB0aGlzLmluc3RhbmNlLmdldE51bWJlclBhcnNlcih7IGZvcm1hdDogJ24nIH0pKHRoaXMuZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHBhcnNlZElucHV0LCBldmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5yYWlzZUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2VmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudEFyZ3MgPSB7IHZhbHVlOiB0aGlzLnZhbHVlLCBwcmV2aW91c1ZhbHVlOiB0aGlzLnByZXZWYWx1ZSB9O1xuICAgICAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUV2ZW50QXJncy5ldmVudCA9IGV2ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlajJfYmFzZV80Lm1lcmdlKGV2ZW50QXJncywgdGhpcy5jaGFuZ2VFdmVudEFyZ3MpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldlZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5wYXN0ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGJlZm9yZVVwZGF0ZSA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMubnVtZXJpY1JlZ2V4KCkudGVzdChfdGhpcy5lbGVtZW50LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRFbGVtZW50VmFsdWUoYmVmb3JlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmtleURvd25IYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbihJTkNSRU1FTlQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbihERUNSRU1FTlQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHZhbHVlOiBudWxsIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5pbnN0YW5jZS5nZXROdW1iZXJQYXJzZXIoeyBmb3JtYXQ6ICduJyB9KSh0aGlzLmVsZW1lbnQudmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RlcCwgb3BlcmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVwZGF0ZWRWYWx1ZSA9IG9wZXJhdGlvbiA9PT0gSU5DUkVNRU5UID8gdmFsdWUgKyBzdGVwIDogdmFsdWUgLSBzdGVwO1xuICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdGhpcy5jb3JyZWN0Um91bmRpbmcodmFsdWUsIHN0ZXAsIHVwZGF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpY3RNb2RlID8gdGhpcy50cmltVmFsdWUodXBkYXRlZFZhbHVlKSA6IHVwZGF0ZWRWYWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuY29ycmVjdFJvdW5kaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBzdGVwLCByZXN1bHQpIHtcbiAgICAgICAgICAgIHZhciBmbG9hdEV4cCA9IG5ldyBSZWdFeHAoJ1ssLl0oLiopJyk7XG4gICAgICAgICAgICB2YXIgdmFsdWVUZXh0ID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHZhciBzdGVwVGV4dCA9IHN0ZXAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHZhciBmbG9hdFZhbHVlID0gZmxvYXRFeHAudGVzdCh2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHZhciBmbG9hdFN0ZXAgPSBmbG9hdEV4cC50ZXN0KHN0ZXAudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBpZiAoZmxvYXRWYWx1ZSB8fCBmbG9hdFN0ZXApIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVDb3VudCA9IGZsb2F0VmFsdWUgPyBmbG9hdEV4cC5leGVjKHZhbHVlLnRvU3RyaW5nKCkpWzBdLmxlbmd0aCA6IDA7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBDb3VudCA9IGZsb2F0U3RlcCA/IGZsb2F0RXhwLmV4ZWMoc3RlcC50b1N0cmluZygpKVswXS5sZW5ndGggOiAwO1xuICAgICAgICAgICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh2YWx1ZUNvdW50LCBzdGVwQ291bnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9IHRoaXMucm91bmRWYWx1ZShyZXN1bHQsIG1heCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5yb3VuZFZhbHVlID0gZnVuY3Rpb24gKHJlc3VsdCwgcHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24gfHwgMDtcbiAgICAgICAgICAgIHZhciBkaXZpZGUgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgKj0gZGl2aWRlLCByZXN1bHQgPSBNYXRoLnJvdW5kKHJlc3VsdCkgLyBkaXZpZGU7XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnVwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBldmVudCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmICFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWNpbWFscykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucm91bmROdW1iZXIodmFsdWUsIHRoaXMuZGVjaW1hbHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWUgPT09IG51bGwgfHwgaXNOYU4odmFsdWUpID8gbnVsbCA6IHRoaXMuc3RyaWN0TW9kZSA/IHRoaXMudHJpbVZhbHVlKHZhbHVlKSA6IHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucmFpc2VDaGFuZ2VFdmVudChldmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5jaGFuZ2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCEodmFsdWUgfHwgdmFsdWUgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHZhbHVlOiB2YWx1ZSB9LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBudW1iZXJPZkRlY2ltYWxzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBkZWNpbWFsUGFydCA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgICAgICBudW1iZXJPZkRlY2ltYWxzID0gIWRlY2ltYWxQYXJ0IHx8ICFkZWNpbWFsUGFydC5sZW5ndGggPyAwIDogZGVjaW1hbFBhcnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlY2ltYWxzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mRGVjaW1hbHMgPSBudW1iZXJPZkRlY2ltYWxzIDwgdGhpcy5kZWNpbWFscyA/IG51bWJlck9mRGVjaW1hbHMgOiB0aGlzLmRlY2ltYWxzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB2YWx1ZTogdGhpcy5yb3VuZE51bWJlcih2YWx1ZSwgbnVtYmVyT2ZEZWNpbWFscykgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1vZGlmeVRleHQoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVN0YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLm1vZGlmeVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5mb3JtYXROdW1iZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudFZhbHVlID0gdGhpcy5pc0ZvY3VzZWQgPyB2YWx1ZSA6IHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyRm9ybWF0KHRoaXMuY3VsdHVyZUluZm8pKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFZhbHVlKGVsZW1lbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCwgeyAnYXJpYS12YWx1ZW5vdyc6IHZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFZhbHVlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXZhbHVlbm93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnNldEVsZW1lbnRWYWx1ZSA9IGZ1bmN0aW9uICh2YWwsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlucHV0XzEuSW5wdXQuc2V0VmFsdWUodmFsLCAoZWxlbWVudCA/IGVsZW1lbnQgOiB0aGlzLmVsZW1lbnQpLCB0aGlzLmZsb2F0TGFiZWxUeXBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnZhbGlkYXRlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkU3RhdGUgPSAhKHRoaXMudmFsdWUgPiB0aGlzLm1heCB8fCB0aGlzLnZhbHVlIDwgdGhpcy5taW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGVja0Vycm9yQ2xhc3MoKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmZvcm1hdE51bWJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkRlY2ltYWxzO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB2YXIgZGVjaW1hbFBhcnQgPSBjdXJyZW50VmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdO1xuICAgICAgICAgICAgbnVtYmVyT2ZEZWNpbWFscyA9ICFkZWNpbWFsUGFydCB8fCAhZGVjaW1hbFBhcnQubGVuZ3RoID8gMCA6IGRlY2ltYWxQYXJ0Lmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlY2ltYWxzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZEZWNpbWFscyA9IG51bWJlck9mRGVjaW1hbHMgPCB0aGlzLmRlY2ltYWxzID8gbnVtYmVyT2ZEZWNpbWFscyA6IHRoaXMuZGVjaW1hbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXROdW1iZXJGb3JtYXQoe1xuICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogbnVtYmVyT2ZEZWNpbWFscyxcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IG51bWJlck9mRGVjaW1hbHMsIHVzZUdyb3VwaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkodGhpcy52YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnRyaW1WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPCB0aGlzLm1pbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1pbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUucm91bmROdW1iZXIgPSBmdW5jdGlvbiAodmFsdWUsIHByZWNpc2lvbikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgdmFyIGRlY2ltYWxzID0gcHJlY2lzaW9uIHx8IDA7XG4gICAgICAgICAgICB2YXIgcmVzdWx0MSA9IHJlc3VsdC50b1N0cmluZygpLnNwbGl0KCdlJyk7XG4gICAgICAgICAgICByZXN1bHQgPSBNYXRoLnJvdW5kKE51bWJlcihyZXN1bHQxWzBdICsgJ2UnICsgKHJlc3VsdDFbMV0gPyAoTnVtYmVyKHJlc3VsdDFbMV0pICsgZGVjaW1hbHMpIDogZGVjaW1hbHMpKSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0MiA9IHJlc3VsdC50b1N0cmluZygpLnNwbGl0KCdlJyk7XG4gICAgICAgICAgICByZXN1bHQgPSBOdW1iZXIocmVzdWx0MlswXSArICdlJyArIChyZXN1bHQyWzFdID8gKE51bWJlcihyZXN1bHQyWzFdKSAtIGRlY2ltYWxzKSA6IC1kZWNpbWFscykpO1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihyZXN1bHQudG9GaXhlZChkZWNpbWFscykpO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5jYW5jZWxFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmtleVByZXNzSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAwIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3VycmVudENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LndoaWNoKTtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCkgKyBjdXJyZW50Q2hhciArIHRleHQuc3Vic3RyaW5nKHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm51bWVyaWNSZWdleCgpLnRlc3QodGV4dCkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5udW1lcmljUmVnZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbnVtZXJpY09iamVjdCA9IGVqMl9iYXNlXzUuZ2V0TnVtZXJpY09iamVjdCh0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IGVqMl9iYXNlXzQuZ2V0VmFsdWUoJ2RlY2ltYWwnLCBudW1lcmljT2JqZWN0KTtcbiAgICAgICAgICAgIHZhciBmcmFjdGlvblJ1bGUgPSAnKic7XG4gICAgICAgICAgICBpZiAoZGVjaW1hbFNlcGFyYXRvciA9PT0gREVDSU1BTFNFUEFSQVRPUikge1xuICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPSAnXFxcXCcgKyBkZWNpbWFsU2VwYXJhdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGVjaW1hbHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5UUkVHRVhQO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGVjaW1hbHMgJiYgdGhpcy52YWxpZGF0ZURlY2ltYWxPblR5cGUpIHtcbiAgICAgICAgICAgICAgICBmcmFjdGlvblJ1bGUgPSAnezAsJyArIHRoaXMuZGVjaW1hbHMgKyAnfSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXigtKT8oKChcXFxcZCsoJyArIGRlY2ltYWxTZXBhcmF0b3IgKyAnXFxcXGQnICsgZnJhY3Rpb25SdWxlICtcbiAgICAgICAgICAgICAgICAnKT8pfCgnICsgZGVjaW1hbFNlcGFyYXRvciArICdcXFxcZCcgKyBmcmFjdGlvblJ1bGUgKyAnKSkpPyQnKTtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUubW91c2VXaGVlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBkZWx0YTtcbiAgICAgICAgICAgIHZhciByYXdFdmVudCA9IGV2ZW50O1xuICAgICAgICAgICAgaWYgKHJhd0V2ZW50LndoZWVsRGVsdGEpIHtcbiAgICAgICAgICAgICAgICBkZWx0YSA9IHJhd0V2ZW50LndoZWVsRGVsdGEgLyAxMjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyYXdFdmVudC5kZXRhaWwpIHtcbiAgICAgICAgICAgICAgICBkZWx0YSA9IC1yYXdFdmVudC5kZXRhaWwgLyAzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uKElOQ1JFTUVOVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbihERUNSRU1FTlQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYW5jZWxFdmVudChldmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5mb2N1c0luID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5yZW1vdmVDbGFzcyhbdGhpcy5jb250YWluZXJdLCBFUlJPUik7XG4gICAgICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICBpZiAoKHRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0VmFsdWUgPSB0aGlzLmZvcm1hdE51bWJlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFZhbHVlKGZvcm1hdFZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNQcmV2Rm9jdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgZm9ybWF0VmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuQnJvd3Nlci5pc0RldmljZSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsJywgdGhpcy5tb3VzZVdoZWVsLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuZm9jdXNPdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ByZXZGb2N1c2VkKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5Ccm93c2VyLmlzRGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZV8xID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVfMSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRFbGVtZW50VmFsdWUodmFsdWVfMSwgZWxlXzEpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHZhbHVlOiBudWxsIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VkSW5wdXQgPSB0aGlzLmluc3RhbmNlLmdldE51bWJlclBhcnNlcih7IGZvcm1hdDogJ24nIH0pKHRoaXMuZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShwYXJzZWRJbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLkJyb3dzZXIuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ21vdXNld2hlZWwgRE9NTW91c2VTY3JvbGwnLCB0aGlzLm1vdXNlV2hlZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUubW91c2VEb3duT25TcGlubmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmdldEVsZW1lbnREYXRhKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmdldEVsZW1lbnREYXRhKGV2ZW50KTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFNQSU5VUCkpID8gSU5DUkVNRU5UIDogREVDUkVNRU5UO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRhcmdldCwgJ21vdXNlbGVhdmUnLCB0aGlzLm1vdXNlVXBDbGljaywgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRpbWVPdXQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IF90aGlzLmlzQ2FsbGVkID0gdHJ1ZTsgX3RoaXMuYWN0aW9uKGFjdGlvbik7IH0sIDE1MCk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQoZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5tb3VzZVVwQ2xpY2ssIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUudG91Y2hNb3ZlT25TcGlubmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAgIGlmICghKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoU1BJTklDT04pKSkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lT3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLm1vdXNlVXBPblNwaW5uZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUHJldkZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuQnJvd3Nlci5pc0RldmljZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUHJldkZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuQnJvd3Nlci5pc0RldmljZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2V0RWxlbWVudERhdGEoZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoU1BJTlVQKSkgPyBJTkNSRU1FTlQgOiBERUNSRU1FTlQ7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGFyZ2V0LCAnbW91c2VsZWF2ZScsIHRoaXMubW91c2VVcENsaWNrKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0NhbGxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uKGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUoZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5tb3VzZVVwQ2xpY2spO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuZ2V0RWxlbWVudERhdGEgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgoZXZlbnQud2hpY2ggJiYgZXZlbnQud2hpY2ggPT09IDMpIHx8IChldmVudC5idXR0b24gJiYgZXZlbnQuYnV0dG9uID09PSAyKVxuICAgICAgICAgICAgICAgIHx8ICF0aGlzLmVuYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lT3V0KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUubW91c2VVcENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lT3V0KTtcbiAgICAgICAgICAgIHRoaXMuaXNDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLnNwaW5VcCwgJ21vdXNlbGVhdmUnLCB0aGlzLm1vdXNlVXBDbGljayk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5zcGluRG93biwgJ21vdXNlbGVhdmUnLCB0aGlzLm1vdXNlVXBDbGljayk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5pbmNyZW1lbnQgPSBmdW5jdGlvbiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IHZvaWQgMCkgeyBzdGVwID0gdGhpcy5zdGVwOyB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMucGVyZm9ybUFjdGlvbih0aGlzLnZhbHVlLCBzdGVwLCBJTkNSRU1FTlQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmRlY3JlbWVudCA9IGZ1bmN0aW9uIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAoc3RlcCA9PT0gdm9pZCAwKSB7IHN0ZXAgPSB0aGlzLnN0ZXA7IH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5wZXJmb3JtQWN0aW9uKHRoaXMudmFsdWUsIHN0ZXAsIERFQ1JFTUVOVCkpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudW53aXJlRXZlbnRzKCk7XG4gICAgICAgICAgICBlajJfYmFzZV8zLmRldGFjaCh0aGlzLmhpZGRlbklucHV0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dTcGluQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bndpcmVTcGluQnRuRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2godGhpcy5zcGluVXApO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuZGV0YWNoKHRoaXMuc3BpbkRvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNsb25lRWxlbWVudCk7XG4gICAgICAgICAgICBlajJfYmFzZV8zLmRldGFjaCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmdldFRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuZ2V0UGVyc2lzdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIga2V5RW50aXR5ID0gWyd2YWx1ZSddO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkT25QZXJzaXN0KGtleUVudGl0eSk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5vblByb3BlcnR5Q2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdQcm9wLCBvbGRQcm9wKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudFZhbDtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhuZXdQcm9wKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnd2lkdGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lciwgeyAnd2lkdGgnOiBlajJfYmFzZV80LmZvcm1hdFVuaXQobmV3UHJvcC53aWR0aCkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY3NzQ2xhc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfMS5JbnB1dC5zZXRDc3NDbGFzcyhuZXdQcm9wLmNzc0NsYXNzLCBbdGhpcy5jb250YWluZXJdLCBvbGRQcm9wLmNzc0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0XzEuSW5wdXQuc2V0RW5hYmxlZChuZXdQcm9wLmVuYWJsZWQsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlUnRsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0XzEuSW5wdXQuc2V0RW5hYmxlUnRsKG5ld1Byb3AuZW5hYmxlUnRsLCBbdGhpcy5jb250YWluZXJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWFkb25seSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF8xLklucHV0LnNldFJlYWRvbmx5KG5ld1Byb3AucmVhZG9ubHksIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ2FyaWEtcmVhZG9ubHknOiAndHJ1ZScgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXJlYWRvbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGxhY2Vob2xkZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfMS5JbnB1dC5zZXRQbGFjZWhvbGRlcihuZXdQcm9wLnBsYWNlaG9sZGVyLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0ZXAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwID0gbmV3UHJvcC5zdGVwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVN0ZXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaG93U3BpbkJ1dHRvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvcC5zaG93U3BpbkJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpbkJ0bkNyZWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmRldGFjaCh0aGlzLnNwaW5VcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2godGhpcy5zcGluRG93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShuZXdQcm9wLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtaW4nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdtYXgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRWYWx1ZShwcm9wLCBlajJfYmFzZV80LmdldFZhbHVlKHByb3AsIG5ld1Byb3ApLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVNaW5NYXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaWN0TW9kZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSBuZXdQcm9wLnN0cmljdE1vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbG9jYWxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEN1bHR1cmVGdW5jKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmwxMG4uc2V0TG9jYWxlKHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0XzEuSW5wdXQuc2V0UGxhY2Vob2xkZXIodGhpcy5wbGFjZWhvbGRlciwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRWYWx1ZShwcm9wLCBlajJfYmFzZV80LmdldFZhbHVlKHByb3AsIG5ld1Byb3ApLCB0aGlzLmN1bHR1cmVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZm9ybWF0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0VmFsdWUocHJvcCwgZWoyX2Jhc2VfNC5nZXRWYWx1ZShwcm9wLCBuZXdQcm9wKSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRDdWx0dXJlSW5mbygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWNpbWFscyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlY2ltYWxzID0gbmV3UHJvcC5kZWNpbWFscztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuZ2V0TW9kdWxlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnbnVtZXJpY3RleHRib3gnO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTnVtZXJpY1RleHRCb3g7XG4gICAgfShlajJfYmFzZV8xLkNvbXBvbmVudCkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJjc3NDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KG51bGwpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcInZhbHVlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoLShOdW1iZXIuTUFYX1ZBTFVFKSlcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwibWluXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoTnVtYmVyLk1BWF9WQUxVRSlcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwibWF4XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoMSlcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwic3RlcFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KG51bGwpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcIndpZHRoXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkobnVsbClcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwicGxhY2Vob2xkZXJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSh0cnVlKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJzaG93U3BpbkJ1dHRvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJyZWFkb25seVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KHRydWUpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImVuYWJsZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwiZW5hYmxlUnRsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImVuYWJsZVBlcnNpc3RlbmNlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ24yJylcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwiZm9ybWF0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkobnVsbClcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwiZGVjaW1hbHNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJjdXJyZW5jeVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KHRydWUpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcInN0cmljdE1vZGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwidmFsaWRhdGVEZWNpbWFsT25UeXBlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ05ldmVyJylcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwiZmxvYXRMYWJlbFR5cGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImNyZWF0ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImRlc3Ryb3llZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwiY2hhbmdlXCIsIHZvaWQgMCk7XG4gICAgTnVtZXJpY1RleHRCb3ggPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Ob3RpZnlQcm9wZXJ0eUNoYW5nZXNcbiAgICBdLCBOdW1lcmljVGV4dEJveCk7XG4gICAgZXhwb3J0cy5OdW1lcmljVGV4dEJveCA9IE51bWVyaWNUZXh0Qm94O1xuICAgIGV4cG9ydHMubnVtZXJpY3RleHRib3hIZWxwZXIgPSBlajJfYmFzZV8xLkNyZWF0ZUJ1aWxkZXIoTnVtZXJpY1RleHRCb3gpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9udW1lcmljdGV4dGJveC9udW1lcmljdGV4dGJveC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIENMQVNTTkFNRVMgPSB7XG4gICAgICAgIFJUTDogJ2UtcnRsJyxcbiAgICAgICAgRElTQUJMRTogJ2UtZGlzYWJsZWQnLFxuICAgICAgICBJTlBVVDogJ2UtaW5wdXQnLFxuICAgICAgICBJTlBVVEdST1VQOiAnZS1pbnB1dC1ncm91cCcsXG4gICAgICAgIEZMT0FUSU5QVVQ6ICdlLWZsb2F0LWlucHV0JyxcbiAgICAgICAgRkxPQVRMSU5FOiAnZS1mbG9hdC1saW5lJyxcbiAgICAgICAgRkxPQVRURVhUOiAnZS1mbG9hdC10ZXh0JyxcbiAgICAgICAgQ0xFQVJJQ09OOiAnZS1jbGVhci1pY29uJyxcbiAgICAgICAgQ0xFQVJJQ09OSElERTogJ2UtY2xlYXItaWNvbi1oaWRlJyxcbiAgICAgICAgTEFCRUxUT1A6ICdlLWxhYmVsLXRvcCcsXG4gICAgICAgIExBQkVMQk9UVE9NOiAnZS1sYWJlbC1ib3R0b20nLFxuICAgICAgICBOT0ZMT0FUTEFCRUw6ICdlLW5vLWZsb2F0LWxhYmVsJyxcbiAgICAgICAgSU5QVVRDVVNUT01UQUc6ICdlLWlucHV0LWN1c3RvbS10YWcnLFxuICAgICAgICBGTE9BVENVU1RPTVRBRzogJ2UtZmxvYXQtY3VzdG9tLXRhZydcbiAgICB9O1xuICAgIHZhciBJbnB1dDtcbiAgICAoZnVuY3Rpb24gKElucHV0KSB7XG4gICAgICAgIHZhciBwcml2YXRlSW5wdXRPYmogPSB7XG4gICAgICAgICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcbiAgICAgICAgICAgIGNsZWFyQnV0dG9uOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUlucHV0KGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dE9iamVjdCA9IHsgY29udGFpbmVyOiBudWxsLCBidXR0b25zOiBbXSwgY2xlYXJCdXR0b246IG51bGwgfTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGFyZ3MuZmxvYXRMYWJlbFR5cGUpIHx8IGFyZ3MuZmxvYXRMYWJlbFR5cGUgPT09ICdOZXZlcicpIHtcbiAgICAgICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIgPSBjcmVhdGVJbnB1dENvbnRhaW5lcihhcmdzLCBDTEFTU05BTUVTLklOUFVUR1JPVVAsIENMQVNTTkFNRVMuSU5QVVRDVVNUT01UQUcsICdzcGFuJyk7XG4gICAgICAgICAgICAgICAgYXJncy5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGlucHV0T2JqZWN0LmNvbnRhaW5lciwgYXJncy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFthcmdzLmVsZW1lbnRdLCBDTEFTU05BTUVTLklOUFVUKTtcbiAgICAgICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIuYXBwZW5kQ2hpbGQoYXJncy5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUZsb2F0aW5nSW5wdXQoYXJncywgaW5wdXRPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJncy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlLWlucHV0LWdyb3VwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2UtaW5wdXQtZm9jdXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFyZ3MuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlLWlucHV0LWdyb3VwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2UtaW5wdXQtZm9jdXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLnByb3BlcnRpZXMpICYmICFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGFyZ3MucHJvcGVydGllcy5zaG93Q2xlYXJCdXR0b24pICYmIGFyZ3MucHJvcGVydGllcy5zaG93Q2xlYXJCdXR0b24pIHtcbiAgICAgICAgICAgICAgICBpbnB1dE9iamVjdC5jbGVhckJ1dHRvbiA9IGNyZWF0ZUNsZWFyQnV0dG9uKGFyZ3MuZWxlbWVudCwgaW5wdXRPYmplY3QuY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRPYmplY3QuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkZMT0FUSU5QVVQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW2lucHV0T2JqZWN0LmNvbnRhaW5lcl0sIENMQVNTTkFNRVMuSU5QVVRHUk9VUCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGFyZ3MuYnV0dG9ucykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MuYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dE9iamVjdC5idXR0b25zLnB1c2goYXBwZW5kU3BhbihhcmdzLmJ1dHRvbnNbaV0sIGlucHV0T2JqZWN0LmNvbnRhaW5lcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0T2JqZWN0ID0gc2V0UHJvcGVydHlWYWx1ZShhcmdzLCBpbnB1dE9iamVjdCk7XG4gICAgICAgICAgICBwcml2YXRlSW5wdXRPYmogPSBpbnB1dE9iamVjdDtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dE9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBJbnB1dC5jcmVhdGVJbnB1dCA9IGNyZWF0ZUlucHV0O1xuICAgICAgICBmdW5jdGlvbiBfZm9jdXNGbigpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGdldFBhcmVudE5vZGUodGhpcykuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZS1mbG9hdC10ZXh0JylbMF07XG4gICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtsYWJlbF0sIENMQVNTTkFNRVMuTEFCRUxUT1ApO1xuICAgICAgICAgICAgaWYgKGxhYmVsLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkxBQkVMQk9UVE9NKSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoW2xhYmVsXSwgQ0xBU1NOQU1FUy5MQUJFTEJPVFRPTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2JsdXJGbigpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZS1mbG9hdC10ZXh0JylbMF07XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkxBQkVMVE9QKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLnJlbW92ZUNsYXNzKFtsYWJlbF0sIENMQVNTTkFNRVMuTEFCRUxUT1ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtsYWJlbF0sIENMQVNTTkFNRVMuTEFCRUxCT1RUT00pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHdpcmVGbG9hdGluZ0V2ZW50cyhlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgX2ZvY3VzRm4pO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgX2JsdXJGbik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdW53aXJlRmxvYXRpbmdFdmVudHMoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIF9mb2N1c0ZuKTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIF9ibHVyRm4pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUZsb2F0aW5nSW5wdXQoYXJncywgaW5wdXRPYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgZmxvYXRMaW5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIGZsb2F0TGFiZWxFbGVtZW50O1xuICAgICAgICAgICAgaWYgKGFyZ3MuZmxvYXRMYWJlbFR5cGUgPT09ICdBdXRvJykge1xuICAgICAgICAgICAgICAgIHdpcmVGbG9hdGluZ0V2ZW50cyhhcmdzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoaW5wdXRPYmplY3QuY29udGFpbmVyKSkge1xuICAgICAgICAgICAgICAgIGlucHV0T2JqZWN0LmNvbnRhaW5lciA9IGNyZWF0ZUlucHV0Q29udGFpbmVyKGFyZ3MsIENMQVNTTkFNRVMuRkxPQVRJTlBVVCwgQ0xBU1NOQU1FUy5GTE9BVENVU1RPTVRBRywgJ2RpdicpO1xuICAgICAgICAgICAgICAgIGFyZ3MuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpbnB1dE9iamVjdC5jb250YWluZXIsIGFyZ3MuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoYXJncy5jdXN0b21UYWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0T2JqZWN0LmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKENMQVNTTkFNRVMuRkxPQVRDVVNUT01UQUcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIuY2xhc3NMaXN0LmFkZChDTEFTU05BTUVTLkZMT0FUSU5QVVQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmxvYXRMaW5lbGVtZW50ID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IENMQVNTTkFNRVMuRkxPQVRMSU5FIH0pO1xuICAgICAgICAgICAgZmxvYXRMYWJlbEVsZW1lbnQgPSBlajJfYmFzZV8xLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyBjbGFzc05hbWU6IENMQVNTTkFNRVMuRkxPQVRURVhUIH0pO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGFyZ3MuZWxlbWVudC5pZCkgJiYgYXJncy5lbGVtZW50LmlkICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGZsb2F0TGFiZWxFbGVtZW50LmlkID0gJ2xhYmVsXycgKyBhcmdzLmVsZW1lbnQuaWQucmVwbGFjZSgvIC9nLCAnXycpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyhhcmdzLmVsZW1lbnQsIHsgJ2FyaWEtbGFiZWxsZWRieSc6IGZsb2F0TGFiZWxFbGVtZW50LmlkIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGFyZ3MuZWxlbWVudC5wbGFjZWhvbGRlcikgJiYgYXJncy5lbGVtZW50LnBsYWNlaG9sZGVyICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGZsb2F0TGFiZWxFbGVtZW50LmlubmVySFRNTCA9IGFyZ3MuZWxlbWVudC5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgICAgICBhcmdzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGFyZ3MucHJvcGVydGllcykgJiYgIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoYXJncy5wcm9wZXJ0aWVzLnBsYWNlaG9sZGVyKSAmJlxuICAgICAgICAgICAgICAgIGFyZ3MucHJvcGVydGllcy5wbGFjZWhvbGRlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBmbG9hdExhYmVsRWxlbWVudC5pbm5lckhUTUwgPSBhcmdzLnByb3BlcnRpZXMucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZsb2F0TGFiZWxFbGVtZW50LmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAgIGlucHV0T2JqZWN0LmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKENMQVNTTkFNRVMuTk9GTE9BVExBQkVMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0T2JqZWN0LmNvbnRhaW5lci5hcHBlbmRDaGlsZChhcmdzLmVsZW1lbnQpO1xuICAgICAgICAgICAgaW5wdXRPYmplY3QuY29udGFpbmVyLmFwcGVuZENoaWxkKGZsb2F0TGluZWxlbWVudCk7XG4gICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIuYXBwZW5kQ2hpbGQoZmxvYXRMYWJlbEVsZW1lbnQpO1xuICAgICAgICAgICAgdXBkYXRlTGFiZWxTdGF0ZShhcmdzLmVsZW1lbnQudmFsdWUsIGZsb2F0TGFiZWxFbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChhcmdzLmZsb2F0TGFiZWxUeXBlID09PSAnQWx3YXlzJykge1xuICAgICAgICAgICAgICAgIGlmIChmbG9hdExhYmVsRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5MQUJFTEJPVFRPTSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5yZW1vdmVDbGFzcyhbZmxvYXRMYWJlbEVsZW1lbnRdLCBDTEFTU05BTUVTLkxBQkVMQk9UVE9NKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbZmxvYXRMYWJlbEVsZW1lbnRdLCBDTEFTU05BTUVTLkxBQkVMVE9QKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcmdzLmZsb2F0TGFiZWxUeXBlID09PSAnQXV0bycpIHtcbiAgICAgICAgICAgICAgICBhcmdzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGFiZWxTdGF0ZShhcmdzLmVsZW1lbnQudmFsdWUsIGZsb2F0TGFiZWxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhcmdzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYWJlbFN0YXRlKGFyZ3MuZWxlbWVudC52YWx1ZSwgZmxvYXRMYWJlbEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldFByb3BlcnR5VmFsdWUoYXJncywgaW5wdXRPYmplY3QpIHtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLnByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKGFyZ3MucHJvcGVydGllcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nzc0NsYXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDc3NDbGFzcyhhcmdzLnByb3BlcnRpZXMuY3NzQ2xhc3MsIFtpbnB1dE9iamVjdC5jb250YWluZXJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuYWJsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVuYWJsZWQoYXJncy5wcm9wZXJ0aWVzLmVuYWJsZWQsIGFyZ3MuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVSdGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVuYWJsZVJ0bChhcmdzLnByb3BlcnRpZXMuZW5hYmxlUnRsLCBbaW5wdXRPYmplY3QuY29udGFpbmVyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwbGFjZWhvbGRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGxhY2Vob2xkZXIoYXJncy5wcm9wZXJ0aWVzLnBsYWNlaG9sZGVyLCBhcmdzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVhZG9ubHknOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlYWRvbmx5KGFyZ3MucHJvcGVydGllcy5yZWFkb25seSwgYXJncy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnB1dE9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVJY29uU3RhdGUodmFsdWUsIGJ1dHRvbikge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5yZW1vdmVDbGFzcyhbYnV0dG9uXSwgQ0xBU1NOQU1FUy5DTEVBUklDT05ISURFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW2J1dHRvbl0sIENMQVNTTkFNRVMuQ0xFQVJJQ09OSElERSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlTGFiZWxTdGF0ZSh2YWx1ZSwgbGFiZWwpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW2xhYmVsXSwgQ0xBU1NOQU1FUy5MQUJFTFRPUCk7XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkxBQkVMQk9UVE9NKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLnJlbW92ZUNsYXNzKFtsYWJlbF0sIENMQVNTTkFNRVMuTEFCRUxCT1RUT00pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5MQUJFTFRPUCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5yZW1vdmVDbGFzcyhbbGFiZWxdLCBDTEFTU05BTUVTLkxBQkVMVE9QKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbbGFiZWxdLCBDTEFTU05BTUVTLkxBQkVMQk9UVE9NKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQ2xlYXJCdXR0b24oZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IENMQVNTTkFNRVMuQ0xFQVJJQ09OIH0pO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQocHJpdmF0ZUlucHV0T2JqLmNvbnRhaW5lcikgJiZcbiAgICAgICAgICAgICAgICBwcml2YXRlSW5wdXRPYmouY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkZMT0FUSU5QVVQpKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbcHJpdmF0ZUlucHV0T2JqLmNvbnRhaW5lcl0sIENMQVNTTkFNRVMuSU5QVVRHUk9VUCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtidXR0b25dLCBDTEFTU05BTUVTLkNMRUFSSUNPTkhJREUpO1xuICAgICAgICAgICAgd2lyZUNsZWFyQnRuRXZlbnRzKGVsZW1lbnQsIGJ1dHRvbik7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHdpcmVDbGVhckJ0bkV2ZW50cyhlbGVtZW50LCBidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICghKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuRElTQUJMRSkgfHwgZWxlbWVudC5yZWFkT25seSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW2J1dHRvbl0sIENMQVNTTkFNRVMuQ0xFQVJJQ09OSElERSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlSWNvblN0YXRlKGVsZW1lbnQudmFsdWUsIGJ1dHRvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVJY29uU3RhdGUoZWxlbWVudC52YWx1ZSwgYnV0dG9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGVqMl9iYXNlXzEuYWRkQ2xhc3MoW2J1dHRvbl0sIENMQVNTTkFNRVMuQ0xFQVJJQ09OSElERSk7IH0sIDIwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZUxhYmVsKGVsZW1lbnQsIGZsb2F0TGFiZWxUeXBlKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuRkxPQVRJTlBVVCkgJiYgZmxvYXRMYWJlbFR5cGUgPT09ICdBdXRvJykge1xuICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZS1mbG9hdC10ZXh0JylbMF07XG4gICAgICAgICAgICAgICAgdXBkYXRlTGFiZWxTdGF0ZShlbGVtZW50LnZhbHVlLCBsYWJlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlSW5wdXRDb250YWluZXIoYXJncywgY2xhc3NOYW1lLCB0YWdDbGFzcywgdGFnKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGFyZ3MuY3VzdG9tVGFnKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGVqMl9iYXNlXzEuY3JlYXRlRWxlbWVudChhcmdzLmN1c3RvbVRhZywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0YWdDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBlajJfYmFzZV8xLmNyZWF0ZUVsZW1lbnQodGFnLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSwgZWxlbWVudCwgZmxvYXRMYWJlbFR5cGUsIGNsZWFyQnV0dG9uKSB7XG4gICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAoKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGZsb2F0TGFiZWxUeXBlKSkgJiYgZmxvYXRMYWJlbFR5cGUgPT09ICdBdXRvJykge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlTGFiZWwoZWxlbWVudCwgZmxvYXRMYWJlbFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGNsZWFyQnV0dG9uKSAmJiBjbGVhckJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRFbGVtZW50ID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgYnV0dG9uID0gcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENMQVNTTkFNRVMuQ0xFQVJJQ09OKVswXTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSAmJiBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZS1pbnB1dC1mb2N1cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoW2J1dHRvbl0sIENMQVNTTkFNRVMuQ0xFQVJJQ09OSElERSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtidXR0b25dLCBDTEFTU05BTUVTLkNMRUFSSUNPTkhJREUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBJbnB1dC5zZXRWYWx1ZSA9IHNldFZhbHVlO1xuICAgICAgICBmdW5jdGlvbiBzZXRDc3NDbGFzcyhjc3NDbGFzcywgZWxlbWVudHMsIG9sZENsYXNzKSB7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQob2xkQ2xhc3MpICYmIG9sZENsYXNzICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoZWxlbWVudHMsIG9sZENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChjc3NDbGFzcykgJiYgY3NzQ2xhc3MgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhlbGVtZW50cywgY3NzQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIElucHV0LnNldENzc0NsYXNzID0gc2V0Q3NzQ2xhc3M7XG4gICAgICAgIGZ1bmN0aW9uIHNldFBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuRkxPQVRJTlBVVCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQocGxhY2Vob2xkZXIpICYmIHBsYWNlaG9sZGVyICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ0xBU1NOQU1FUy5GTE9BVFRFWFQpWzBdLnRleHRDb250ZW50ID0gcGxhY2Vob2xkZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU05BTUVTLk5PRkxPQVRMQUJFTCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NOQU1FUy5OT0ZMT0FUTEFCRUwpO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ0xBU1NOQU1FUy5GTE9BVFRFWFQpWzBdLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHBsYWNlaG9sZGVyKSAmJiBwbGFjZWhvbGRlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hdHRyaWJ1dGVzKGVsZW1lbnQsIHsgJ3BsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIsICdhcmlhLXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtcGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQuc2V0UGxhY2Vob2xkZXIgPSBzZXRQbGFjZWhvbGRlcjtcbiAgICAgICAgZnVuY3Rpb24gc2V0UmVhZG9ubHkoaXNSZWFkb25seSwgZWxlbWVudCwgZmxvYXRMYWJlbFR5cGUpIHtcbiAgICAgICAgICAgIGlmIChpc1JlYWRvbmx5KSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hdHRyaWJ1dGVzKGVsZW1lbnQsIHsgcmVhZG9ubHk6ICcnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoZmxvYXRMYWJlbFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVMYWJlbChlbGVtZW50LCBmbG9hdExhYmVsVHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQuc2V0UmVhZG9ubHkgPSBzZXRSZWFkb25seTtcbiAgICAgICAgZnVuY3Rpb24gc2V0RW5hYmxlUnRsKGlzUnRsLCBlbGVtZW50cykge1xuICAgICAgICAgICAgaWYgKGlzUnRsKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhlbGVtZW50cywgQ0xBU1NOQU1FUy5SVEwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5yZW1vdmVDbGFzcyhlbGVtZW50cywgQ0xBU1NOQU1FUy5SVEwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIElucHV0LnNldEVuYWJsZVJ0bCA9IHNldEVuYWJsZVJ0bDtcbiAgICAgICAgZnVuY3Rpb24gc2V0RW5hYmxlZChpc0VuYWJsZSwgZWxlbWVudCwgZmxvYXRMYWJlbFR5cGUpIHtcbiAgICAgICAgICAgIHZhciBkaXNhYmxlZEF0dHJzID0geyAnZGlzYWJsZWQnOiAnZGlzYWJsZWQnLCAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyB9O1xuICAgICAgICAgICAgaWYgKGlzRW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTTkFNRVMuRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQXR0cmlidXRlcyhkaXNhYmxlZEF0dHJzLCBlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU05BTUVTLkRJU0FCTEUpO1xuICAgICAgICAgICAgICAgIGFkZEF0dHJpYnV0ZXMoZGlzYWJsZWRBdHRycywgZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoZmxvYXRMYWJlbFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVMYWJlbChlbGVtZW50LCBmbG9hdExhYmVsVHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQuc2V0RW5hYmxlZCA9IHNldEVuYWJsZWQ7XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZXMoYXR0cnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhhdHRycyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50ID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU05BTUVTLkRJU0FCTEUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnZGlzYWJsZWQnICYmIHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuSU5QVVRHUk9VUCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTTkFNRVMuRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdwbGFjZWhvbGRlcicgJiYgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5GTE9BVElOUFVUKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ0xBU1NOQU1FUy5GTE9BVFRFWFQpWzBdLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBJbnB1dC5yZW1vdmVBdHRyaWJ1dGVzID0gcmVtb3ZlQXR0cmlidXRlcztcbiAgICAgICAgZnVuY3Rpb24gYWRkQXR0cmlidXRlcyhhdHRycywgZWxlbWVudCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKGF0dHJzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRFbGVtZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTTkFNRVMuRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdkaXNhYmxlZCcgJiYgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5JTlBVVEdST1VQKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NOQU1FUy5ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3BsYWNlaG9sZGVyJyAmJiBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkZMT0FUSU5QVVQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShDTEFTU05BTUVTLkZMT0FUVEVYVClbMF0udGV4dENvbnRlbnQgPSBhdHRyc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQuYWRkQXR0cmlidXRlcyA9IGFkZEF0dHJpYnV0ZXM7XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUZsb2F0aW5nKGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gaW5wdXQuY29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGNvbnRhaW5lcikgJiYgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkZMT0FUSU5QVVQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0RWxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xBU1NOQU1FUy5GTE9BVFRFWFQpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHZhciBjbGVhckJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZS1jbGVhci1pY29uJykgIT09IG51bGw7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5kZXRhY2goY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xBU1NOQU1FUy5GTE9BVExJTkUpKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmRldGFjaChjb250YWluZXIucXVlcnlTZWxlY3RvcignLicgKyBDTEFTU05BTUVTLkZMT0FUVEVYVCkpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuY2xhc3NMaXN0KGNvbnRhaW5lciwgW0NMQVNTTkFNRVMuSU5QVVRHUk9VUF0sIFtDTEFTU05BTUVTLkZMT0FUSU5QVVRdKTtcbiAgICAgICAgICAgICAgICB1bndpcmVGbG9hdGluZ0V2ZW50cyhpbnB1dEVsZSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hdHRyaWJ1dGVzKGlucHV0RWxlLCB7ICdwbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyIH0pO1xuICAgICAgICAgICAgICAgIGlucHV0RWxlLmNsYXNzTGlzdC5hZGQoQ0xBU1NOQU1FUy5JTlBVVCk7XG4gICAgICAgICAgICAgICAgaWYgKCFjbGVhckJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZS5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIElucHV0LnJlbW92ZUZsb2F0aW5nID0gcmVtb3ZlRmxvYXRpbmc7XG4gICAgICAgIGZ1bmN0aW9uIGFkZEZsb2F0aW5nKGlucHV0LCB0eXBlLCBwbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGVqMl9iYXNlXzEuY2xvc2VzdChpbnB1dCwgJy4nICsgQ0xBU1NOQU1FUy5JTlBVVEdST1VQKTtcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSAnTmV2ZXInKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1c3RvbVRhZyA9IGNvbnRhaW5lci50YWdOYW1lO1xuICAgICAgICAgICAgICAgIGN1c3RvbVRhZyA9IGN1c3RvbVRhZyAhPT0gJ0RJVicgJiYgY3VzdG9tVGFnICE9PSAnU1BBTicgPyBjdXN0b21UYWcgOiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0geyBlbGVtZW50OiBpbnB1dCwgZmxvYXRMYWJlbFR5cGU6IHR5cGUsIGN1c3RvbVRhZzogY3VzdG9tVGFnLCBwcm9wZXJ0aWVzOiB7IHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlciB9IH07XG4gICAgICAgICAgICAgICAgdmFyIGljb25FbGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmUtY2xlYXItaWNvbicpO1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dE9iaiA9IHsgY29udGFpbmVyOiBjb250YWluZXIgfTtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTTkFNRVMuSU5QVVQpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUZsb2F0aW5nSW5wdXQoYXJncywgaW5wdXRPYmopO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGljb25FbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25FbGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmUtaW5wdXQtZ3JvdXAtaWNvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChpY29uRWxlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShDTEFTU05BTUVTLklOUFVUR1JPVVApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZsb2F0TGluZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIENMQVNTTkFNRVMuRkxPQVRMSU5FKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZsb2F0VGV4dCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIENMQVNTTkFNRVMuRkxPQVRURVhUKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShpbnB1dCwgaWNvbkVsZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZmxvYXRMaW5lLCBpY29uRWxlKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShmbG9hdFRleHQsIGljb25FbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBJbnB1dC5hZGRGbG9hdGluZyA9IGFkZEZsb2F0aW5nO1xuICAgICAgICBmdW5jdGlvbiBhcHBlbmRTcGFuKGljb25DbGFzcywgY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IGljb25DbGFzcyB9KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgaWYgKCFjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuSU5QVVRHUk9VUCkpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChDTEFTU05BTUVTLklOUFVUR1JPVVApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2UtZGlzYWJsZWQnKSAmJiAhY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykucmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdlLWlucHV0LWJ0bi1yaXBwbGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBlbGUuY2xhc3NMaXN0LnJlbW92ZSgnZS1pbnB1dC1idG4tcmlwcGxlJyk7IH0sIDUwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQuYXBwZW5kU3BhbiA9IGFwcGVuZFNwYW47XG4gICAgfSkoSW5wdXQgPSBleHBvcnRzLklucHV0IHx8IChleHBvcnRzLklucHV0ID0ge30pKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5wdXQvaW5wdXQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9iYXNlL2luZGV4XCIsIFwiLi9tYXNrZWR0ZXh0Ym94L2luZGV4XCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgaW5kZXhfMSwgaW5kZXhfMikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQoaW5kZXhfMSk7XG4gICAgX19leHBvcnQoaW5kZXhfMik7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hc2tlZHRleHRib3gvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9tYXNrLWJhc2VcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtYXNrX2Jhc2VfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQobWFza19iYXNlXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXNrZWR0ZXh0Ym94L2Jhc2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCIuLi8uLi9pbnB1dC9pbnB1dFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGlucHV0XzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIEVSUk9SID0gJ2UtZXJyb3InO1xuICAgIHZhciBJTlBVVEdST1VQID0gJ2UtaW5wdXQtZ3JvdXAnO1xuICAgIHZhciBGTE9BVElOUFVUID0gJ2UtZmxvYXQtaW5wdXQnO1xuICAgIHZhciBVVElMTUFTSyA9ICdlLXV0aWxpdHktbWFzayc7XG4gICAgdmFyIFRPUExBQkVMID0gJ2UtbGFiZWwtdG9wJztcbiAgICB2YXIgQk9UVE9NTEFCRUwgPSAnZS1sYWJlbC1ib3R0b20nO1xuICAgIGV4cG9ydHMucmVndWxhckV4cHJlc3Npb25zID0ge1xuICAgICAgICAnMCc6ICdbMC05XScsXG4gICAgICAgICc5JzogJ1swLTkgXScsXG4gICAgICAgICcjJzogJ1swLTkgKy1dJyxcbiAgICAgICAgJ0wnOiAnW0EtWmEtel0nLFxuICAgICAgICAnPyc6ICdbQS1aYS16IF0nLFxuICAgICAgICAnJic6ICdbXlxceDdmIF0rJyxcbiAgICAgICAgJ0MnOiAnW15cXHg3Zl0rJyxcbiAgICAgICAgJ0EnOiAnW0EtWmEtejAtOV0nLFxuICAgICAgICAnYSc6ICdbQS1aYS16MC05IF0nLFxuICAgIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlTWFzaygpIHtcbiAgICAgICAgZWoyX2Jhc2VfMS5hdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCwgeyAncm9sZSc6ICd0ZXh0Ym94JywgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnLCAnYXV0b2NvcnJlY3QnOiAnb2ZmJywgJ2F1dG9jYXBpdGFsaXplJzogJ29mZicsXG4gICAgICAgICAgICAnc3BlbGxjaGVjayc6ICdmYWxzZScsICdhcmlhLWxpdmUnOiAnYXNzZXJ0aXZlJywgJ2FyaWEtdmFsdWVub3cnOiAnJyB9KTtcbiAgICAgICAgaWYgKHRoaXMubWFzaykge1xuICAgICAgICAgICAgdmFyIHNwbGl0TWFzayA9IHRoaXMubWFzay5zcGxpdCgnXScpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdE1hc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRNYXNrW2ldW3NwbGl0TWFza1tpXS5sZW5ndGggLSAxXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0TWFza1tpXSA9IHNwbGl0TWFza1tpXSArICddJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwbGl0SW5uZXJNYXNrID0gc3BsaXRNYXNrW2ldLnNwbGl0KCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc3BsaXRJbm5lck1hc2subGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdElubmVyTWFza1tqXVtzcGxpdElubmVyTWFza1tqXS5sZW5ndGggLSAxXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRJbm5lck1hc2tbal0gPSBzcGxpdElubmVyTWFza1tqXSArICdbJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hJbnRvUmVnRXhwQ29sbGVjLmNhbGwodGhpcywgc3BsaXRJbm5lck1hc2tbal0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaXRJbm5lck1hc2sgPSBzcGxpdE1hc2tbaV0uc3BsaXQoJ1snKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0SW5uZXJNYXNrLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGtTcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzcGxpdElubmVyTWFzay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdElubmVyTWFza1tqXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjLnB1c2goJ1snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRkZW5NYXNrICs9IHNwbGl0SW5uZXJNYXNrW2pdICsgJ1snO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzcGxpdElubmVyTWFza1tqXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hrU3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoc3BsaXRJbm5lck1hc2tbal0gIT09ICcnICYmIGNoa1NwYWNlKSB8fCBqID09PSBzcGxpdElubmVyTWFzay5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjLnB1c2goJ1snICsgc3BsaXRJbm5lck1hc2tbal0gKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbk1hc2sgKz0gdGhpcy5wcm9tcHRDaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGtTcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVzaEludG9SZWdFeHBDb2xsZWMuY2FsbCh0aGlzLCBzcGxpdElubmVyTWFza1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaEludG9SZWdFeHBDb2xsZWMuY2FsbCh0aGlzLCBzcGxpdElubmVyTWFza1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVzY2FwZU1hc2tWYWx1ZSA9IHRoaXMuaGlkZGVuTWFzaztcbiAgICAgICAgICAgIHRoaXMucHJvbXB0TWFzayA9IHRoaXMuaGlkZGVuTWFzay5yZXBsYWNlKC9bMDk/TENBYSMmXS9nLCB0aGlzLnByb21wdENoYXIpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tQ2hhcmFjdGVycykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvbXB0TWFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXN0b21DaGFyYWN0ZXJzW3RoaXMucHJvbXB0TWFza1tpXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb21wdE1hc2sgPSB0aGlzLnByb21wdE1hc2sucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMucHJvbXB0TWFza1tpXSwgJ2cnKSwgdGhpcy5wcm9tcHRDaGFyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlc2NhcGVOdW1iZXIgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuTWFzay5tYXRjaChuZXcgUmVnRXhwKC9cXFxcLykpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhpZGRlbk1hc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVOdW1iZXIgPSB0aGlzLmhpZGRlbk1hc2subGVuZ3RoIC0gdGhpcy5wcm9tcHRNYXNrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaiA9IGogLSBlc2NhcGVOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoaSA+IDAgJiYgdGhpcy5oaWRkZW5NYXNrW2kgLSAxXSAhPT0gJ1xcXFwnKSAmJiAodGhpcy5oaWRkZW5NYXNrW2ldID09PSAnPicgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuTWFza1tpXSA9PT0gJzwnIHx8IHRoaXMuaGlkZGVuTWFza1tpXSA9PT0gJ3wnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRNYXNrID0gdGhpcy5wcm9tcHRNYXNrLnN1YnN0cmluZygwLCBqKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRNYXNrLnN1YnN0cmluZygoaSArIDEpIC0gZXNjYXBlTnVtYmVyLCB0aGlzLnByb21wdE1hc2subGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXNjYXBlTWFza1ZhbHVlID0gdGhpcy5lc2NhcGVNYXNrVmFsdWUuc3Vic3RyaW5nKDAsIGopICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVzY2FwZU1hc2tWYWx1ZS5zdWJzdHJpbmcoKGkgKyAxKSAtIGVzY2FwZU51bWJlciwgdGhpcy5lc2NhcGVNYXNrVmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oaWRkZW5NYXNrW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0TWFzayA9IHRoaXMucHJvbXB0TWFzay5zdWJzdHJpbmcoMCwgaikgKyB0aGlzLmhpZGRlbk1hc2tbaSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb21wdE1hc2suc3Vic3RyaW5nKChpICsgMikgLSBlc2NhcGVOdW1iZXIsIHRoaXMucHJvbXB0TWFzay5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lc2NhcGVNYXNrVmFsdWUgPSB0aGlzLmVzY2FwZU1hc2tWYWx1ZS5zdWJzdHJpbmcoMCwgaikgKyB0aGlzLmVzY2FwZU1hc2tWYWx1ZVtpICsgMV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXNjYXBlTWFza1ZhbHVlLnN1YnN0cmluZygoaSArIDIpIC0gZXNjYXBlTnVtYmVyLCB0aGlzLmVzY2FwZU1hc2tWYWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRNYXNrID0gdGhpcy5wcm9tcHRNYXNrLnJlcGxhY2UoL1s+fDxdL2csICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVzY2FwZU1hc2tWYWx1ZSA9IHRoaXMuaGlkZGVuTWFzay5yZXBsYWNlKC9bPnw8XS9nLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8xLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7ICdhcmlhLWludmFsaWQnOiAnZmFsc2UnIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydHMuY3JlYXRlTWFzayA9IGNyZWF0ZU1hc2s7XG4gICAgZnVuY3Rpb24gYXBwbHlNYXNrKCkge1xuICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCB0aGlzLnByb21wdE1hc2spO1xuICAgICAgICBzZXRNYXNrVmFsdWUuY2FsbCh0aGlzLCB0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgZXhwb3J0cy5hcHBseU1hc2sgPSBhcHBseU1hc2s7XG4gICAgZnVuY3Rpb24gd2lyZUV2ZW50cygpIHtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2tleWRvd24nLCBtYXNrSW5wdXRLZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdrZXlwcmVzcycsIG1hc2tJbnB1dEtleVByZXNzSGFuZGxlciwgdGhpcyk7XG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdrZXl1cCcsIG1hc2tJbnB1dEtleVVwSGFuZGxlciwgdGhpcyk7XG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdmb2N1cycsIG1hc2tJbnB1dEZvY3VzSGFuZGxlciwgdGhpcyk7XG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdibHVyJywgbWFza0lucHV0Qmx1ckhhbmRsZXIsIHRoaXMpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAncGFzdGUnLCBtYXNrSW5wdXRQYXN0ZUhhbmRsZXIsIHRoaXMpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnY3V0JywgbWFza0lucHV0Q3V0SGFuZGxlciwgdGhpcyk7XG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdkcm9wJywgbWFza0lucHV0RHJvcEhhbmRsZXIsIHRoaXMpO1xuICAgIH1cbiAgICBleHBvcnRzLndpcmVFdmVudHMgPSB3aXJlRXZlbnRzO1xuICAgIGZ1bmN0aW9uIHVud2lyZUV2ZW50cygpIHtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2tleWRvd24nLCBtYXNrSW5wdXRLZXlEb3duSGFuZGxlcik7XG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdrZXlwcmVzcycsIG1hc2tJbnB1dEtleVByZXNzSGFuZGxlcik7XG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdrZXl1cCcsIG1hc2tJbnB1dEtleVVwSGFuZGxlcik7XG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdmb2N1cycsIG1hc2tJbnB1dEZvY3VzSGFuZGxlcik7XG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdibHVyJywgbWFza0lucHV0Qmx1ckhhbmRsZXIpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAncGFzdGUnLCBtYXNrSW5wdXRQYXN0ZUhhbmRsZXIpO1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnY3V0JywgbWFza0lucHV0Q3V0SGFuZGxlcik7XG4gICAgfVxuICAgIGV4cG9ydHMudW53aXJlRXZlbnRzID0gdW53aXJlRXZlbnRzO1xuICAgIGZ1bmN0aW9uIHVuc3RyaXBwZWRWYWx1ZShlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBleHBvcnRzLnVuc3RyaXBwZWRWYWx1ZSA9IHVuc3RyaXBwZWRWYWx1ZTtcbiAgICBmdW5jdGlvbiBzdHJpcHBlZFZhbHVlKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gJyc7XG4gICAgICAgIHZhciBrID0gMDtcbiAgICAgICAgdmFyIGNoZWNrTWFzayA9IGZhbHNlO1xuICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoZWxlbWVudCkgJiYgIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcykgJiYgZWxlbWVudC52YWx1ZSAhPT0gdGhpcy5wcm9tcHRNYXNrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTWFzaykge1xuICAgICAgICAgICAgICAgICAgICBjaGVja01hc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW2tdID09PSAnPicgfHwgdGhpcy5jdXN0b21SZWdFeHBDb2xsZWNba10gPT09ICc8JyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1trXSA9PT0gJ3wnIHx8IHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW2tdID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgICAgICBjaGVja01hc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrTWFzaykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQudmFsdWVbaV0gIT09IHRoaXMucHJvbXB0Q2hhcikgJiYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW2tdKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLnJlZ0V4cENvbGxlY1t0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1trXV0pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1trXS5sZW5ndGggPiAyICYmIHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW2tdWzBdID09PSAnWycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21SZWdFeHBDb2xsZWNba11bdGhpcy5jdXN0b21SZWdFeHBDb2xsZWNba10ubGVuZ3RoIC0gMV0gPT09ICddJykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXN0b21DaGFyYWN0ZXJzKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXN0b21DaGFyYWN0ZXJzW3RoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW2tdXSkpKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSBlbGVtZW50LnZhbHVlW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICsraztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGV4cG9ydHMuc3RyaXBwZWRWYWx1ZSA9IHN0cmlwcGVkVmFsdWU7XG4gICAgZnVuY3Rpb24gcHVzaEludG9SZWdFeHBDb2xsZWModmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB2YWx1ZS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgdGhpcy5oaWRkZW5NYXNrICs9IHZhbHVlW2tdO1xuICAgICAgICAgICAgaWYgKHZhbHVlW2tdICE9PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlYy5wdXNoKHZhbHVlW2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBtYXNrSW5wdXRGb2N1c0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubWFzaykge1xuICAgICAgICAgICAgdGhpcy5pc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyICYmIHRoaXMuZWxlbWVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCB0aGlzLnByb21wdE1hc2spO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCB0aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBfdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0cy5tYXNrSW5wdXRGb2N1c0hhbmRsZXIgPSBtYXNrSW5wdXRGb2N1c0hhbmRsZXI7XG4gICAgZnVuY3Rpb24gbWFza0lucHV0Qmx1ckhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMubWFzaykge1xuICAgICAgICAgICAgdGhpcy5pc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLmVsZW1lbnQudmFsdWUgPT09IHRoaXMucHJvbXB0TWFzayAmJiB0aGlzLmZsb2F0TGFiZWxUeXBlICE9PSAnQWx3YXlzJykge1xuICAgICAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsICcnKTtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWxFbGVtZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmUtZmxvYXQtdGV4dCcpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZsb2F0TGFiZWxUeXBlID09PSAnQXV0bycgJiYgIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQobGFiZWxFbGVtZW50KSAmJiBsYWJlbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFRPUExBQkVMKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLnJlbW92ZUNsYXNzKFtsYWJlbEVsZW1lbnRdLCBUT1BMQUJFTCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydHMubWFza0lucHV0Qmx1ckhhbmRsZXIgPSBtYXNrSW5wdXRCbHVySGFuZGxlcjtcbiAgICBmdW5jdGlvbiBtYXNrSW5wdXRQYXN0ZUhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubWFzaykge1xuICAgICAgICAgICAgdmFyIHNJbmRleF8xID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgdmFyIGVJbmRleF8xID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZDtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZV8xID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgJycpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucmVkb0NvbGxlYy5sZW5ndGggPiAwICYmIF90aGlzLnJlZG9Db2xsZWNbMF0udmFsdWUgPT09IF90aGlzLmVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzdHJpcHBlZFZhbHVlLmNhbGwoX3RoaXMsIF90aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbChfdGhpcywgb2xkVmFsdWVfMSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNJbmRleF8xO1xuICAgICAgICAgICAgICAgIF90aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gZUluZGV4XzE7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgIF90aGlzLm1hc2tLZXlQcmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVZhbHVlLmNhbGwoX3RoaXMsIHZhbHVlW2ldLCBmYWxzZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChpIDwgdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5tYXNrS2V5UHJlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hc2tJbnB1dEN1dEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubWFzaykge1xuICAgICAgICAgICAgdmFyIHNJbmRleF8yID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgdmFyIGVJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgICAgICB0aGlzLnVuZG9Db2xsZWMucHVzaCh7IHZhbHVlOiB0aGlzLmVsZW1lbnQudmFsdWUsIHN0YXJ0SW5kZXg6IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCwgZW5kSW5kZXg6IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgfSk7XG4gICAgICAgICAgICB2YXIgdmFsdWVfMSA9IHRoaXMuZWxlbWVudC52YWx1ZS5zdWJzdHJpbmcoMCwgc0luZGV4XzIpICsgdGhpcy5wcm9tcHRNYXNrLnN1YnN0cmluZyhzSW5kZXhfMiwgZUluZGV4KSArXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnZhbHVlLnN1YnN0cmluZyhlSW5kZXgpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwoX3RoaXMsIHZhbHVlXzEpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBfdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNJbmRleF8yO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbWFza0lucHV0RHJvcEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgZXhwb3J0cy5tYXNrSW5wdXREcm9wSGFuZGxlciA9IG1hc2tJbnB1dERyb3BIYW5kbGVyO1xuICAgIGZ1bmN0aW9uIG1hc2tJbnB1dEtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlICE9PSAyMjkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSAmJiAoZXZlbnQua2V5Q29kZSA9PT0gODkgfHwgZXZlbnQua2V5Q29kZSA9PT0gOTApKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbW92ZU1hc2tJbnB1dFZhbHVlcy5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVNYXNrSW5wdXRWYWx1ZXMuY2FsbChfdGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSAmJiAoZXZlbnQua2V5Q29kZSA9PT0gODkgfHwgZXZlbnQua2V5Q29kZSA9PT0gOTApKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbGxlYyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOTAgJiYgdGhpcy51bmRvQ29sbGVjLmxlbmd0aCA+IDAgJiYgc3RhcnRWYWx1ZSAhPT0gdGhpcy51bmRvQ29sbGVjW3RoaXMudW5kb0NvbGxlYy5sZW5ndGggLSAxXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWMgPSB0aGlzLnVuZG9Db2xsZWNbdGhpcy51bmRvQ29sbGVjLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZG9Db2xsZWMudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5lbGVtZW50LnZhbHVlLCBzdGFydEluZGV4OiB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleDogdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgY29sbGVjLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY29sbGVjLnN0YXJ0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgPSBjb2xsZWMuZW5kSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5kb0NvbGxlYy5zcGxpY2UodGhpcy51bmRvQ29sbGVjLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSA4OSAmJiB0aGlzLnJlZG9Db2xsZWMubGVuZ3RoID4gMCAmJiBzdGFydFZhbHVlICE9PSB0aGlzLnJlZG9Db2xsZWNbMF0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjID0gdGhpcy5yZWRvQ29sbGVjWzBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZG9Db2xsZWMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5lbGVtZW50LnZhbHVlLCBzdGFydEluZGV4OiB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleDogdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgY29sbGVjLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY29sbGVjLnN0YXJ0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgPSBjb2xsZWMuZW5kSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkb0NvbGxlYy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vYmlsZVJlbW92ZUZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29sbGVjO1xuICAgICAgICB2YXIgc0luZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB2YXIgZUluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZDtcbiAgICAgICAgaWYgKHRoaXMucmVkb0NvbGxlYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb2xsZWMgPSB0aGlzLnJlZG9Db2xsZWNbMF07XG4gICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCBjb2xsZWMudmFsdWUpO1xuICAgICAgICAgICAgaWYgKChjb2xsZWMuc3RhcnRJbmRleCAtIHNJbmRleCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBjb2xsZWMuc3RhcnRJbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gY29sbGVjLmVuZEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc0luZGV4ICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gZUluZGV4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsIHRoaXMucHJvbXB0TWFzayk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc0luZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydHMubW9iaWxlUmVtb3ZlRnVuY3Rpb24gPSBtb2JpbGVSZW1vdmVGdW5jdGlvbjtcbiAgICBmdW5jdGlvbiByZW1vdmVNYXNrSW5wdXRWYWx1ZXMoZXZlbnQpIHtcbiAgICAgICAgdmFyIGlzUmVtb3ZlID0gZmFsc2U7XG4gICAgICAgIHZhciBvbGRFdmVudFZhbDtcbiAgICAgICAgdmFyIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCA8IHRoaXMucHJvbXB0TWFzay5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlzUmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vYmlsZVJlbW92ZUZ1bmN0aW9uLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBvbGRFdmVudFZhbCA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5pdFN0YXJ0SW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHZhciBpbml0RW5kSW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kO1xuICAgICAgICB2YXIgc3RhcnRJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdmFyIGVuZEluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZDtcbiAgICAgICAgdmFyIG1hc2tWYWx1ZSA9IHRoaXMuaGlkZGVuTWFzay5yZXBsYWNlKC9bPnxcXFxcPF0vZywgJycpO1xuICAgICAgICB2YXIgY3VyTWFzayA9IG1hc2tWYWx1ZVtzdGFydEluZGV4IC0gMV07XG4gICAgICAgIHZhciBwYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChpc1JlbW92ZSB8fCBldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2KSB7XG4gICAgICAgICAgICB0aGlzLnVuZG9Db2xsZWMucHVzaCh7IHZhbHVlOiB0aGlzLmVsZW1lbnQudmFsdWUsIHN0YXJ0SW5kZXg6IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCwgZW5kSW5kZXg6IGVuZEluZGV4IH0pO1xuICAgICAgICAgICAgdmFyIG11bHRpcGxlRGVsID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA+IDAgfHwgKChldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2KSAmJiBzdGFydEluZGV4IDwgdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aFxuICAgICAgICAgICAgICAgICYmICgodGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCAtIHN0YXJ0SW5kZXgpICE9PSB0aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoKSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgICAgICAgIGlmIChzdGFydEluZGV4ICE9PSBlbmRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA0Nikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVEZWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQ2KSB7XG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAtLWluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gc3RhcnRJbmRleDsgKGV2ZW50LmtleUNvZGUgPT09IDggfHwgaXNSZW1vdmUgfHwgbXVsdGlwbGVEZWwpID8gayA+IGluZGV4IDogayA8IGluZGV4OyAoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBpc1JlbW92ZSB8fCBtdWx0aXBsZURlbCkgPyBrLS0gOiBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IChldmVudC5rZXlDb2RlID09PSA4IHx8IGlzUmVtb3ZlIHx8IG11bHRpcGxlRGVsKSA/IGkgPiAwIDogaSA8IHRoaXMuZWxlbWVudC52YWx1ZS5sZW5ndGg7IChldmVudC5rZXlDb2RlID09PSA4IHx8IGlzUmVtb3ZlIHx8IG11bHRpcGxlRGVsKSA/IGktLSA6IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNJbmRleCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKGV2ZW50LmtleUNvZGUgPT09IDggfHwgbXVsdGlwbGVEZWwpICYmICgoaW5pdFN0YXJ0SW5kZXggIT09IGluaXRFbmRJbmRleCAmJiBpbml0U3RhcnRJbmRleCAhPT0gc3RhcnRJbmRleCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW5pdFN0YXJ0SW5kZXggPT09IGluaXRFbmRJbmRleCkpKSB8fCBpc1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ck1hc2sgPSBtYXNrVmFsdWVbaSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNJbmRleCA9IHN0YXJ0SW5kZXggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyTWFzayA9IG1hc2tWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzSW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrc3RhcnRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuZWxlbWVudC52YWx1ZVtzSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMucmVnRXhwQ29sbGVjW2N1ck1hc2tdKSAmJiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXN0b21DaGFyYWN0ZXJzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXN0b21DaGFyYWN0ZXJzW2N1ck1hc2tdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHRoaXMuaGlkZGVuTWFza1tzSW5kZXhdICE9PSB0aGlzLnByb21wdENoYXIgJiYgdGhpcy5jdXN0b21SZWdFeHBDb2xsZWNbc0luZGV4XVswXSAhPT0gJ1snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW3NJbmRleF1bdGhpcy5jdXN0b21SZWdFeHBDb2xsZWNbc0luZGV4XS5sZW5ndGggLSAxXSAhPT0gJ10nKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHRoaXMucHJvbXB0TWFza1tzSW5kZXhdICE9PSB0aGlzLnByb21wdENoYXIgJiYgZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLmN1c3RvbUNoYXJhY3RlcnMpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDYgJiYgIW11bHRpcGxlRGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbXB0XzEgPSB0aGlzLnByb21wdENoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRWYWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBzSW5kZXgpICsgcHJvbXB0XzEgKyB2YWx1ZS5zdWJzdHJpbmcoc3RhcnRJbmRleCwgdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCBlbGVtZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoIWlzRGVsZXRlZCAmJiBldmVudC5rZXlDb2RlID09PSA4KSB8fCBtdWx0aXBsZURlbCB8fCAoIWlzRGVsZXRlZCAmJiAhKGV2ZW50LmtleUNvZGUgPT09IDQ2KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzSW5kZXggPSBzdGFydEluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9IHRoaXMuZWxlbWVudC52YWx1ZVtzSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoaW5pdFN0YXJ0SW5kZXggIT09IGluaXRFbmRJbmRleCkgJiYgKHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9PT0gaW5pdFN0YXJ0SW5kZXgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICh0aGlzLnByb21wdE1hc2tbc0luZGV4XSA9PT0gdGhpcy5wcm9tcHRDaGFyKSB8fCAoKG9sZFZhbHVlICE9PSB0aGlzLnByb21wdE1hc2tbc0luZGV4XSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9tcHRNYXNrW3NJbmRleF0gIT09IHRoaXMucHJvbXB0Q2hhcikgJiYgIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXN0b21DaGFyYWN0ZXJzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPT09IDAgJiYgKHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgPT09IHRoaXMuZWxlbWVudC52YWx1ZS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgdGhpcy5wcm9tcHRNYXNrKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzdGFydEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZWRvQ29sbGVjLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmVsZW1lbnQudmFsdWUsIHN0YXJ0SW5kZXg6IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICBlbmRJbmRleDogdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0cmlnZ2VyTWFza0NoYW5nZUV2ZW50LmNhbGwodGhpcywgZXZlbnQsIG9sZEV2ZW50VmFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBtYXNrSW5wdXRLZXlQcmVzc0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMubWFzaykge1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgaWYgKCghZXZlbnQuY3RybEtleSkgfHwgKGV2ZW50LmN0cmxLZXkgJiYgZXZlbnQuY29kZSAhPT0gJ0tleUEnICYmIGV2ZW50LmNvZGUgIT09ICdLZXlZJ1xuICAgICAgICAgICAgICAgICYmIGV2ZW50LmNvZGUgIT09ICdLZXlaJyAmJiBldmVudC5jb2RlICE9PSAnS2V5WCcgJiYgZXZlbnQuY29kZSAhPT0gJ0tleUMnICYmIGV2ZW50LmNvZGUgIT09ICdLZXlWJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tLZXlQcmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnU3BhY2ViYXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNJb3NJbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVWYWx1ZS5jYWxsKHRoaXMsIFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSksIGV2ZW50LmN0cmxLZXksIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0lvc0ludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5ICYmIGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVWYWx1ZS5jYWxsKHRoaXMsIGtleSwgZXZlbnQuY3RybEtleSwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyaWdnZXJNYXNrQ2hhbmdlRXZlbnQuY2FsbCh0aGlzLCBldmVudCwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyaWdnZXJNYXNrQ2hhbmdlRXZlbnQoZXZlbnQsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLmNoYW5nZUV2ZW50QXJncykpIHtcbiAgICAgICAgICAgIHZhciBldmVudEFyZ3MgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRXZlbnRBcmdzID0geyB2YWx1ZTogdGhpcy5lbGVtZW50LnZhbHVlLCBtYXNrZWRWYWx1ZTogdGhpcy5lbGVtZW50LnZhbHVlLCBpc0ludGVyYWN0aW9uOiBmYWxzZSB9O1xuICAgICAgICAgICAgaWYgKHRoaXMubWFzaykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRXZlbnRBcmdzLnZhbHVlID0gc3RyaXBwZWRWYWx1ZS5jYWxsKHRoaXMsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudEFyZ3MuaXNJbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudEFyZ3MuZXZlbnQgPSBldmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzEubWVyZ2UoZXZlbnRBcmdzLCB0aGlzLmNoYW5nZUV2ZW50QXJncyk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIGV2ZW50QXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWoyX2Jhc2VfMS5hdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCwgeyAnYXJpYS12YWx1ZW5vdyc6IHRoaXMuZWxlbWVudC52YWx1ZSB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFza0lucHV0S2V5VXBIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgICAgICAgIHZhciBjb2xsZWMgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFza0tleVByZXNzICYmIGV2ZW50LmtleUNvZGUgPT09IDIyOSkge1xuICAgICAgICAgICAgICAgIHZhciBvbGRFdmVudFZhbCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWUgKyB0aGlzLnByb21wdE1hc2s7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgxLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC52YWx1ZS5sZW5ndGggPiB0aGlzLnByb21wdE1hc2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydEluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkZWRWYWx1ZXMgPSB0aGlzLmVsZW1lbnQudmFsdWUubGVuZ3RoIC0gdGhpcy5wcm9tcHRNYXNrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbF8xID0gdGhpcy5lbGVtZW50LnZhbHVlLnN1YnN0cmluZyhzdGFydEluZGV4IC0gYWRkZWRWYWx1ZXMsIHN0YXJ0SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bmRvQ29sbGVjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlYyA9IHRoaXMudW5kb0NvbGxlY1t0aGlzLnVuZG9Db2xsZWMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRJbmRleF8xID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkRXZlbnRWYWwgPSBjb2xsZWMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkVmFsID0gY29sbGVjLnZhbHVlLnN1YnN0cmluZyhzdGFydEluZGV4XzEgLSBhZGRlZFZhbHVlcywgc3RhcnRJbmRleF8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlYyA9IHRoaXMucmVkb0NvbGxlY1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbF8xID0gdmFsXzEudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzU3BhY2UgPSBlajJfYmFzZV8xLkJyb3dzZXIuaXNBbmRyb2lkICYmIHZhbF8xID09PSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNTcGFjZSAmJiBvbGRWYWwgIT09IHZhbF8xICYmIGNvbGxlYy52YWx1ZS5zdWJzdHJpbmcoc3RhcnRJbmRleF8xIC0gYWRkZWRWYWx1ZXMsIHN0YXJ0SW5kZXhfMSkgIT09IHZhbF8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVWYWx1ZS5jYWxsKHRoaXMsIHZhbF8xLCBldmVudC5jdHJsS2V5LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1NwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudFVuc3VwcG9ydGVkVmFsdWVzLmNhbGwodGhpcywgZXZlbnQsIHN0YXJ0SW5kZXhfMSAtIDEsIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgLSAxLCB2YWxfMSwgZXZlbnQuY3RybEtleSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkRXZlbnRWYWwgPSB0aGlzLnByb21wdE1hc2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVZhbHVlLmNhbGwodGhpcywgdmFsXzEsIGV2ZW50LmN0cmxLZXksIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tLZXlQcmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyTWFza0NoYW5nZUV2ZW50LmNhbGwodGhpcywgZXZlbnQsIG9sZEV2ZW50VmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNYXNrRXJyb3IuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWwgPSBzdHJpcHBlZFZhbHVlLmNhbGwodGhpcywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGlmICghKCh0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPT09IDApICYmICh0aGlzLnByb21wdE1hc2sgPT09IHRoaXMuZWxlbWVudC52YWx1ZSkgJiYgdmFsID09PSAnJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbDtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJpZ2dlck1hc2tDaGFuZ2VFdmVudC5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbW9iaWxlU3dpcGVDaGVjayhrZXkpIHtcbiAgICAgICAgaWYgKGtleS5sZW5ndGggPiAxICYmICgodGhpcy5wcm9tcHRNYXNrLmxlbmd0aCArIGtleS5sZW5ndGgpIDwgdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50VmFsdWUgPSB0aGlzLnJlZG9Db2xsZWNbMF0udmFsdWUuc3Vic3RyaW5nKDAsIHRoaXMucmVkb0NvbGxlY1swXS5zdGFydEluZGV4KSArIGtleSArXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRvQ29sbGVjWzBdLnZhbHVlLnN1YnN0cmluZyh0aGlzLnJlZG9Db2xsZWNbMF0uc3RhcnRJbmRleCwgdGhpcy5yZWRvQ29sbGVjWzBdLnZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCBlbGVtZW50VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IHRoaXMucmVkb0NvbGxlY1swXS5zdGFydEluZGV4ICsga2V5Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgLSBrZXkubGVuZ3RoO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCAtIGtleS5sZW5ndGg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVmFsdWUoa2V5LCBpc0N0cmxLZXksIGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5tYXNrS2V5UHJlc3MpIHtcbiAgICAgICAgICAgIG1vYmlsZVN3aXBlQ2hlY2suY2FsbCh0aGlzLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB2YXIgaW5pdFN0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICB2YXIgZW5kSW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kO1xuICAgICAgICB2YXIgY3VyTWFzaztcbiAgICAgICAgdmFyIGFsbG93VGV4dCA9IGZhbHNlO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgIHZhciBldmVudE9sZFZhbDtcbiAgICAgICAgdmFyIHByZXZTdXBwb3J0ID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwga2V5Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICB2YXIga2V5VmFsdWUgPSBrZXlba107XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgZW5kSW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1hc2tLZXlQcmVzcyAmJiBpbml0U3RhcnRJbmRleCA9PT0gc3RhcnRJbmRleCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBzdGFydEluZGV4ICsgaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoIXRoaXMubWFza0tleVByZXNzIHx8IHN0YXJ0SW5kZXggPCB0aGlzLnByb21wdE1hc2subGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpIDwgdGhpcy5wcm9tcHRNYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXNrVmFsdWUgPSB0aGlzLmVzY2FwZU1hc2tWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3VyTWFzayA9IG1hc2tWYWx1ZVtzdGFydEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMucmVnRXhwQ29sbGVjW2N1ck1hc2tdKSAmJiAoZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLmN1c3RvbUNoYXJhY3RlcnMpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXN0b21DaGFyYWN0ZXJzKSAmJiBlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tQ2hhcmFjdGVyc1tjdXJNYXNrXSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh0aGlzLmhpZGRlbk1hc2tbc3RhcnRJbmRleF0gIT09IHRoaXMucHJvbXB0Q2hhciAmJiB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1tzdGFydEluZGV4XVswXSAhPT0gJ1snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5jdXN0b21SZWdFeHBDb2xsZWNbc3RhcnRJbmRleF1bdGhpcy5jdXN0b21SZWdFeHBDb2xsZWNbc3RhcnRJbmRleF0ubGVuZ3RoIC0gMV0gIT09ICddJykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKCh0aGlzLnByb21wdE1hc2tbc3RhcnRJbmRleF0gIT09IHRoaXMucHJvbXB0Q2hhcikgJiYgZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLmN1c3RvbUNoYXJhY3RlcnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHRoaXMucHJvbXB0Q2hhciA9PT0gY3VyTWFzayAmJiB0aGlzLmVzY2FwZU1hc2tWYWx1ZSA9PT0gdGhpcy5tYXNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IHN0YXJ0SW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ck1hc2sgPSB0aGlzLmhpZGRlbk1hc2tbc3RhcnRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VzdG9tQ2hhcmFjdGVycykgJiYgIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXN0b21DaGFyYWN0ZXJzW2N1ck1hc2tdKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VzdG9tVmFsU3RyID0gdGhpcy5jdXN0b21DaGFyYWN0ZXJzW2N1ck1hc2tdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VzdG9tVmFsQXJyID0gY3VzdG9tVmFsU3RyLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VzdG9tVmFsQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWUubWF0Y2gobmV3IFJlZ0V4cCgnWycgKyBjdXN0b21WYWxBcnJbaV0gKyAnXScpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93VGV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5yZWdFeHBDb2xsZWNbY3VyTWFza10pICYmIGtleVZhbHVlLm1hdGNoKG5ldyBSZWdFeHAodGhpcy5yZWdFeHBDb2xsZWNbY3VyTWFza10pKVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnByb21wdE1hc2tbc3RhcnRJbmRleF0gPT09IHRoaXMucHJvbXB0Q2hhcikge1xuICAgICAgICAgICAgICAgICAgICBhbGxvd1RleHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnByb21wdE1hc2tbc3RhcnRJbmRleF0gPT09IHRoaXMucHJvbXB0Q2hhciAmJiB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1tzdGFydEluZGV4XVswXSA9PT0gJ1snXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW3N0YXJ0SW5kZXhdW3RoaXMuY3VzdG9tUmVnRXhwQ29sbGVjW3N0YXJ0SW5kZXhdLmxlbmd0aCAtIDFdID09PSAnXSdcbiAgICAgICAgICAgICAgICAgICAgJiYga2V5VmFsdWUubWF0Y2gobmV3IFJlZ0V4cCh0aGlzLmN1c3RvbVJlZ0V4cENvbGxlY1tzdGFydEluZGV4XSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93VGV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoIXRoaXMubWFza0tleVByZXNzIHx8IHN0YXJ0SW5kZXggPCB0aGlzLmhpZGRlbk1hc2subGVuZ3RoKSAmJiBhbGxvd1RleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGsgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tLZXlQcmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5kb0NvbGxlYy5wdXNoKHsgdmFsdWU6IHZhbHVlLCBzdGFydEluZGV4OiBzdGFydEluZGV4LCBlbmRJbmRleDogc3RhcnRJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzSW5kZXggPSB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVJbmRleCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVkb0NvbGxlYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2xkVmFsID0gdGhpcy5yZWRvQ29sbGVjWzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCBldmVudE9sZFZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5kb0NvbGxlYy5wdXNoKHRoaXMucmVkb0NvbGxlY1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZG9Db2xsZWMucHVzaCh7IHZhbHVlOiB0aGlzLnByb21wdE1hc2ssIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsIGVuZEluZGV4OiBzdGFydEluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9sZFZhbCA9IHRoaXMucHJvbXB0TWFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgZXZlbnRPbGRWYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IGVJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBhcHBseVN1cHBvcnRlZFZhbHVlcy5jYWxsKHRoaXMsIGV2ZW50LCBzdGFydEluZGV4LCBrZXlWYWx1ZSwgZXZlbnRPbGRWYWwpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2U3VwcG9ydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrID09PSBrZXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRvQ29sbGVjLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmVsZW1lbnQudmFsdWUsIHN0YXJ0SW5kZXg6IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleDogdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dUZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBwcmV2ZW50VW5zdXBwb3J0ZWRWYWx1ZXMuY2FsbCh0aGlzLCBldmVudCwgc3RhcnRJbmRleCwgaW5pdFN0YXJ0SW5kZXgsIGtleSwgaXNDdHJsS2V5LCBwcmV2U3VwcG9ydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrID09PSBrZXkubGVuZ3RoIC0gMSAmJiAhYWxsb3dUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5Ccm93c2VyLmlzQW5kcm9pZCB8fCAoZWoyX2Jhc2VfMS5Ccm93c2VyLmlzQW5kcm9pZCAmJiBzdGFydEluZGV4IDwgdGhpcy5wcm9tcHRNYXNrLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkb0NvbGxlYy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5lbGVtZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg6IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleDogdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSAmJiAhaXNDdHJsS2V5ICYmICFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRNYXNrRXJyb3JDbGFzcy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhcHBseVN1cHBvcnRlZFZhbHVlcyhldmVudCwgc3RhcnRJbmRleCwga2V5VmFsdWUsIGV2ZW50T2xkVmFsKSB7XG4gICAgICAgIGlmICh0aGlzLmhpZGRlbk1hc2subGVuZ3RoID4gdGhpcy5wcm9tcHRNYXNrLmxlbmd0aCkge1xuICAgICAgICAgICAga2V5VmFsdWUgPSBjaGFuZ2VUb0xvd2VyVXBwZXJDYXNlLmNhbGwodGhpcywga2V5VmFsdWUsIHRoaXMuZWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgICAgICB2YXIgZWxlbWVudFZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0SW5kZXgpICsga2V5VmFsdWUgKyB2YWx1ZS5zdWJzdHJpbmcoc3RhcnRJbmRleCArIDEsIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsIGVsZW1lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuZWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzdGFydEluZGV4ICsgMTtcbiAgICAgICAgdHJpZ2dlck1hc2tDaGFuZ2VFdmVudC5jYWxsKHRoaXMsIGV2ZW50LCBldmVudE9sZFZhbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByZXZlbnRVbnN1cHBvcnRlZFZhbHVlcyhldmVudCwgc0lkeCwgaWR4LCBrZXksIGN0cmwsIGNoa1N1cHBvcnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hc2tLZXlQcmVzcykge1xuICAgICAgICAgICAgdmFyIGV2ZW50T2xkVmFsID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgaWYgKHNJZHggPj0gdGhpcy5wcm9tcHRNYXNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsIHZhbHVlLnN1YnN0cmluZygwLCBzSWR4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSBzSWR4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsIHZhbHVlLnN1YnN0cmluZygwLCBzSWR4KSArIHZhbHVlLnN1YnN0cmluZyhzSWR4ICsgMSwgdmFsdWUubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9tcHRNYXNrLmxlbmd0aCA9PT0gdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgdmFsdWUuc3Vic3RyaW5nKDAsIHNJZHgpICsgdmFsdWUuc3Vic3RyaW5nKHNJZHgsIHZhbHVlLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgdmFsdWUuc3Vic3RyaW5nKDAsIGlkeCkgKyB2YWx1ZS5zdWJzdHJpbmcoaWR4ICsgMSwgdmFsdWUubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IChjaGtTdXBwb3J0IHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC52YWx1ZVtpZHhdICE9PSB0aGlzLnByb21wdENoYXIpID8gc0lkeCA6IGlkeDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50T2xkVmFsID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgdHJpZ2dlck1hc2tDaGFuZ2VFdmVudC5jYWxsKHRoaXMsIGV2ZW50LCBldmVudE9sZFZhbCk7XG4gICAgICAgICAgICBhZGRNYXNrRXJyb3JDbGFzcy5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkubGVuZ3RoID09PSAxICYmICFjdHJsICYmICFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50KSkge1xuICAgICAgICAgICAgYWRkTWFza0Vycm9yQ2xhc3MuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRNYXNrRXJyb3JDbGFzcygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHBhcmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHRpbWVyID0gMjAwO1xuICAgICAgICBpZiAocGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoSU5QVVRHUk9VUCkgfHwgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoRkxPQVRJTlBVVCkpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW3BhcmVudEVsZW1lbnRdLCBFUlJPUik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFt0aGlzLmVsZW1lbnRdLCBFUlJPUik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNJb3NJbnZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aW1lciA9IDQwMDtcbiAgICAgICAgfVxuICAgICAgICBlajJfYmFzZV8xLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7ICdhcmlhLWludmFsaWQnOiAndHJ1ZScgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5tYXNrS2V5UHJlc3MpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNYXNrRXJyb3IuY2FsbChfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRpbWVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFza0Vycm9yKCkge1xuICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICBlajJfYmFzZV8xLnJlbW92ZUNsYXNzKFtwYXJlbnRFbGVtZW50XSwgRVJST1IpO1xuICAgICAgICBlajJfYmFzZV8xLnJlbW92ZUNsYXNzKFt0aGlzLmVsZW1lbnRdLCBFUlJPUik7XG4gICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ2FyaWEtaW52YWxpZCc6ICdmYWxzZScgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoYW5nZVRvTG93ZXJVcHBlckNhc2Uoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgcHJvbXB0TWFzaztcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgdmFyIGN1clZhbCA9IHZhbHVlO1xuICAgICAgICB2YXIgY2FzZUNvdW50ID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuaGlkZGVuTWFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuTWFza1tpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgcHJvbXB0TWFzayA9IGN1clZhbC5zdWJzdHJpbmcoMCwgaSkgKyAnXFxcXCcgKyBjdXJWYWwuc3Vic3RyaW5nKGksIGN1clZhbC5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuTWFza1tpXSA9PT0gJz4nIHx8IHRoaXMuaGlkZGVuTWFza1tpXSA9PT0gJzwnIHx8IHRoaXMuaGlkZGVuTWFza1tpXSA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuTWFza1tpXSAhPT0gY3VyVmFsW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21wdE1hc2sgPSBjdXJWYWwuc3Vic3RyaW5nKDAsIGkpICsgdGhpcy5oaWRkZW5NYXNrW2ldICsgY3VyVmFsLnN1YnN0cmluZyhpLCBjdXJWYWwubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytjYXNlQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvbXB0TWFzaykge1xuICAgICAgICAgICAgICAgIGlmICgoKHByb21wdE1hc2tbaV0gPT09IHRoaXMucHJvbXB0Q2hhcikgJiYgKGkgPiB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQpKSB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5lbGVtZW50LnZhbHVlLmluZGV4T2YodGhpcy5wcm9tcHRDaGFyKSA8IDAgJiYgKHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCArIGNhc2VDb3VudCkgPT09IGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJWYWwgPSBwcm9tcHRNYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpID49IDAgJiYgcHJvbXB0TWFzaykge1xuICAgICAgICAgICAgaWYgKGkgPT09IDAgfHwgcHJvbXB0TWFza1tpIC0gMV0gIT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIHZhciB2YWwgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHByb21wdE1hc2tbaV0gPT09ICc+Jykge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb21wdE1hc2tbaV0gPT09ICc8Jykge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb21wdE1hc2tbaV0gPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAtLWk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0TWFza1ZhbHVlKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5tYXNrICYmICFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHZhbCkgJiYgKHZhbCA9PT0gJycgfHwgdGhpcy5wcmV2VmFsdWUgIT09IHZhbCkpIHtcbiAgICAgICAgICAgIHRoaXMubWFza0tleVByZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsIHRoaXMucHJvbXB0TWFzayk7XG4gICAgICAgICAgICBpZiAodmFsICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdGlvbkVuZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlVmFsdWUuY2FsbCh0aGlzLCB2YWxbaV0sIGZhbHNlLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBzdHJpcHBlZFZhbHVlLmNhbGwodGhpcywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMubWFza0tleVByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgbGFiZWxFbGVtZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmUtZmxvYXQtdGV4dCcpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC52YWx1ZSA9PT0gdGhpcy5wcm9tcHRNYXNrICYmIHRoaXMuZmxvYXRMYWJlbFR5cGUgPT09ICdBdXRvJyAmJlxuICAgICAgICAgICAgICAgICFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGxhYmVsRWxlbWVudCkgJiYgbGFiZWxFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhUT1BMQUJFTCkgJiYgIXRoaXMuaXNGb2N1cykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoW2xhYmVsRWxlbWVudF0sIFRPUExBQkVMKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtsYWJlbEVsZW1lbnRdLCBCT1RUT01MQUJFTCk7XG4gICAgICAgICAgICAgICAgc2V0RWxlbWVudFZhbHVlLmNhbGwodGhpcywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydHMuc2V0TWFza1ZhbHVlID0gc2V0TWFza1ZhbHVlO1xuICAgIGZ1bmN0aW9uIHNldEVsZW1lbnRWYWx1ZSh2YWwsIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRm9jdXMgJiYgdGhpcy5mbG9hdExhYmVsVHlwZSA9PT0gJ0F1dG8nICYmIGVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0XzEuSW5wdXQuc2V0VmFsdWUodmFsLCAoZWxlbWVudCA/IGVsZW1lbnQgOiB0aGlzLmVsZW1lbnQpLCB0aGlzLmZsb2F0TGFiZWxUeXBlKTtcbiAgICB9XG4gICAgZXhwb3J0cy5zZXRFbGVtZW50VmFsdWUgPSBzZXRFbGVtZW50VmFsdWU7XG4gICAgZnVuY3Rpb24gbWFza0lucHV0KGFyZ3MpIHtcbiAgICAgICAgdmFyIGlucHV0RWxlID0gZ2V0TWFza0lucHV0KGFyZ3MpO1xuICAgICAgICBhcHBseU1hc2suY2FsbChpbnB1dEVsZSk7XG4gICAgICAgIHZhciB2YWwgPSBzdHJpcHBlZFZhbHVlLmNhbGwodGhpcywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgICAgIGlmIChhcmdzLm1hc2spIHtcbiAgICAgICAgICAgIHVud2lyZUV2ZW50cy5jYWxsKGlucHV0RWxlKTtcbiAgICAgICAgICAgIHdpcmVFdmVudHMuY2FsbChpbnB1dEVsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0cy5tYXNrSW5wdXQgPSBtYXNrSW5wdXQ7XG4gICAgZnVuY3Rpb24gZ2V0TWFza0lucHV0KGFyZ3MpIHtcbiAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbYXJncy5lbGVtZW50XSwgVVRJTE1BU0spO1xuICAgICAgICB2YXIgaW5wdXRFbGUgPSB7XG4gICAgICAgICAgICBlbGVtZW50OiBhcmdzLmVsZW1lbnQsXG4gICAgICAgICAgICBtYXNrOiBhcmdzLm1hc2ssXG4gICAgICAgICAgICBwcm9tcHRNYXNrOiAnJyxcbiAgICAgICAgICAgIGhpZGRlbk1hc2s6ICcnLFxuICAgICAgICAgICAgZXNjYXBlTWFza1ZhbHVlOiAnJyxcbiAgICAgICAgICAgIHByb21wdENoYXI6IGFyZ3MucHJvbXB0Q2hhciA/IChhcmdzLnByb21wdENoYXIubGVuZ3RoID4gMSkgPyBhcmdzLnByb21wdENoYXIgPSBhcmdzLnByb21wdENoYXJbMF1cbiAgICAgICAgICAgICAgICA6IGFyZ3MucHJvbXB0Q2hhciA6ICdfJyxcbiAgICAgICAgICAgIHZhbHVlOiBhcmdzLnZhbHVlID8gYXJncy52YWx1ZSA6IG51bGwsXG4gICAgICAgICAgICByZWdFeHBDb2xsZWM6IGV4cG9ydHMucmVndWxhckV4cHJlc3Npb25zLFxuICAgICAgICAgICAgY3VzdG9tUmVnRXhwQ29sbGVjOiBbXSxcbiAgICAgICAgICAgIGN1c3RvbUNoYXJhY3RlcnM6IGFyZ3MuY3VzdG9tQ2hhcmFjdGVycyxcbiAgICAgICAgICAgIHVuZG9Db2xsZWM6IFtdLFxuICAgICAgICAgICAgcmVkb0NvbGxlYzogW10sXG4gICAgICAgICAgICBtYXNrS2V5UHJlc3M6IGZhbHNlLFxuICAgICAgICAgICAgcHJldlZhbHVlOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBjcmVhdGVNYXNrLmNhbGwoaW5wdXRFbGUpO1xuICAgICAgICByZXR1cm4gaW5wdXRFbGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFZhbChhcmdzKSB7XG4gICAgICAgIHJldHVybiBzdHJpcHBlZFZhbHVlLmNhbGwoZ2V0VXRpbE1hc2tFbGUoYXJncyksIGFyZ3MuZWxlbWVudCk7XG4gICAgfVxuICAgIGV4cG9ydHMuZ2V0VmFsID0gZ2V0VmFsO1xuICAgIGZ1bmN0aW9uIGdldE1hc2tlZFZhbChhcmdzKSB7XG4gICAgICAgIHJldHVybiB1bnN0cmlwcGVkVmFsdWUuY2FsbChnZXRVdGlsTWFza0VsZShhcmdzKSwgYXJncy5lbGVtZW50KTtcbiAgICB9XG4gICAgZXhwb3J0cy5nZXRNYXNrZWRWYWwgPSBnZXRNYXNrZWRWYWw7XG4gICAgZnVuY3Rpb24gZ2V0VXRpbE1hc2tFbGUoYXJncykge1xuICAgICAgICB2YXIgdmFsdWUgPSAnJztcbiAgICAgICAgdmFyIGlucHV0RWxlO1xuICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoYXJncykgJiYgYXJncy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhVVElMTUFTSykpIHtcbiAgICAgICAgICAgIGlucHV0RWxlID0gZ2V0TWFza0lucHV0KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dEVsZTtcbiAgICB9XG4gICAgdmFyIE1hc2tVbmRvID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTWFza1VuZG8oKSB7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hc2tVbmRvO1xuICAgIH0oKSk7XG4gICAgZXhwb3J0cy5NYXNrVW5kbyA9IE1hc2tVbmRvO1xuICAgIHZhciBtYXNrVW5kbyA9IG5ldyBNYXNrVW5kbygpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXNrZWR0ZXh0Ym94L2Jhc2UvbWFzay1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vbWFza2VkdGV4dGJveFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1hc2tlZHRleHRib3hfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQobWFza2VkdGV4dGJveF8xKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFza2VkdGV4dGJveC9tYXNrZWR0ZXh0Ym94L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIi4uLy4uL2lucHV0L2lucHV0XCIsIFwiLi4vYmFzZS9pbmRleFwiLCBcIi4uL2Jhc2UvaW5kZXhcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBlajJfYmFzZV8xLCBlajJfYmFzZV8yLCBpbnB1dF8xLCBpbmRleF8xLCBpbmRleF8yKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBST09UID0gJ2Utd2lkZ2V0IGUtbWFzayc7XG4gICAgdmFyIElOUFVUID0gJ2UtaW5wdXQnO1xuICAgIHZhciBNYXNrZWRUZXh0Qm94ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKE1hc2tlZFRleHRCb3gsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIE1hc2tlZFRleHRCb3gob3B0aW9ucywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgZWxlbWVudCkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLnByb21wdE1hc2sgPSAnJztcbiAgICAgICAgICAgIF90aGlzLmhpZGRlbk1hc2sgPSAnJztcbiAgICAgICAgICAgIF90aGlzLmVzY2FwZU1hc2tWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgX3RoaXMucmVnRXhwQ29sbGVjID0gaW5kZXhfMS5yZWd1bGFyRXhwcmVzc2lvbnM7XG4gICAgICAgICAgICBfdGhpcy5jdXN0b21SZWdFeHBDb2xsZWMgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLnVuZG9Db2xsZWMgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLnJlZG9Db2xsZWMgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLmNoYW5nZUV2ZW50QXJncyA9IHt9O1xuICAgICAgICAgICAgX3RoaXMubWFza0tleVByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5pc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5pc0luaXRpYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmlzSW9zSW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ21hc2tlZHRleHRib3gnO1xuICAgICAgICB9O1xuICAgICAgICBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZS5wcmVSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWpJbnN0YW5jZSA9IGVqMl9iYXNlXzIuZ2V0VmFsdWUoJ2VqMl9pbnN0YW5jZXMnLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5jbG9uZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hbmd1bGFyVGFnTmFtZSA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUgPT09ICdFSi1NQVNLRURURVhUQk9YJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5ndWxhclRhZ05hbWUgPSB0aGlzLmVsZW1lbnQudGFnTmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBlajJfYmFzZV8yLmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50LmF0dHJpYnV0ZXNbaV0ubm9kZU5hbWUsIHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzW2ldLm5vZGVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmlubmVySFRNTCA9IHRoaXMuZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuc2V0VmFsdWUoJ2VqMl9pbnN0YW5jZXMnLCBlakluc3RhbmNlLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZS5nZXRQZXJzaXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBrZXlFbnRpdHkgPSBbJ3ZhbHVlJ107XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRPblBlcnNpc3Qoa2V5RW50aXR5KTtcbiAgICAgICAgfTtcbiAgICAgICAgTWFza2VkVGV4dEJveC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mbG9hdExhYmVsVHlwZSA9PT0gJ05ldmVyJykge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8yLmFkZENsYXNzKFt0aGlzLmVsZW1lbnRdLCBJTlBVVCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlV3JhcHBlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNJbml0aWFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0TWFza2VkVGV4dEJveCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNJbml0aWFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNYXNrUGxhY2Vob2xkZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRXaWR0aCh0aGlzLndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTWFza2VkVGV4dEJveC5wcm90b3R5cGUucmVzZXRNYXNrZWRUZXh0Qm94ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9tcHRNYXNrID0gJyc7XG4gICAgICAgICAgICB0aGlzLmhpZGRlbk1hc2sgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZXNjYXBlTWFza1ZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbVJlZ0V4cENvbGxlYyA9IFtdO1xuICAgICAgICAgICAgdGhpcy51bmRvQ29sbGVjID0gW107XG4gICAgICAgICAgICB0aGlzLnJlZG9Db2xsZWMgPSBbXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb21wdENoYXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0Q2hhciA9IHRoaXMucHJvbXB0Q2hhclswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4XzEuY3JlYXRlTWFzay5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgaW5kZXhfMS5hcHBseU1hc2suY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBpbmRleF8xLnN0cmlwcGVkVmFsdWUuY2FsbCh0aGlzLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWw7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5pdGlhbCkge1xuICAgICAgICAgICAgICAgIGluZGV4XzEudW53aXJlRXZlbnRzLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRleF8xLndpcmVFdmVudHMuY2FsbCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgTWFza2VkVGV4dEJveC5wcm90b3R5cGUuc2V0TWFza1BsYWNlaG9sZGVyID0gZnVuY3Rpb24gKHNldFZhbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dF8xLklucHV0LnNldFBsYWNlaG9sZGVyKHRoaXMucGxhY2Vob2xkZXIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC52YWx1ZSA9PT0gdGhpcy5wcm9tcHRNYXNrICYmIHNldFZhbCAmJiB0aGlzLmZsb2F0TGFiZWxUeXBlICE9PSAnQWx3YXlzJykge1xuICAgICAgICAgICAgICAgICAgICBpbmRleF8yLnNldEVsZW1lbnRWYWx1ZS5jYWxsKHRoaXMsICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLnNldENzc0NsYXNzID0gZnVuY3Rpb24gKGNzc0NsYXNzLCBlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLmFkZENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTWFza2VkVGV4dEJveC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpIHtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMi5pc051bGxPclVuZGVmaW5lZCh3aWR0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSBlajJfYmFzZV8yLmZvcm1hdFVuaXQod2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZS5jcmVhdGVXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dE9iaiA9IGlucHV0XzEuSW5wdXQuY3JlYXRlSW5wdXQoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgICAgICBjdXN0b21UYWc6IHRoaXMuYW5ndWxhclRhZ05hbWUsXG4gICAgICAgICAgICAgICAgZmxvYXRMYWJlbFR5cGU6IHRoaXMuZmxvYXRMYWJlbFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVSdGw6IHRoaXMuZW5hYmxlUnRsLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0aGlzLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlucHV0T2JqLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgUk9PVCArICcgJyArIHRoaXMuaW5wdXRPYmouY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSk7XG4gICAgICAgIH07XG4gICAgICAgIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLm9uUHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1Byb3AsIG9sZFByb3ApIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhuZXdQcm9wKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfMi5zZXRNYXNrVmFsdWUuY2FsbCh0aGlzLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNYXNrUGxhY2Vob2xkZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BsYWNlaG9sZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFza1BsYWNlaG9sZGVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dpZHRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0V2lkdGgobmV3UHJvcC53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY3NzQ2xhc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDc3NDbGFzcyhuZXdQcm9wLmNzc0NsYXNzLCBbdGhpcy5pbnB1dE9iai5jb250YWluZXJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0XzEuSW5wdXQuc2V0RW5hYmxlZChuZXdQcm9wLmVuYWJsZWQsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlUnRsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0XzEuSW5wdXQuc2V0RW5hYmxlUnRsKG5ld1Byb3AuZW5hYmxlUnRsLCBbdGhpcy5pbnB1dE9iai5jb250YWluZXJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjdXN0b21DaGFyYWN0ZXJzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tQ2hhcmFjdGVycyA9IG5ld1Byb3AuY3VzdG9tQ2hhcmFjdGVycztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRNYXNrZWRUZXh0Qm94KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWFzayc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyaXBwZWRWYWx1ZV8xID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFzayA9IG5ld1Byb3AubWFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoc3RyaXBwZWRWYWx1ZV8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdwcm9tcHRDaGFyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9wLnByb21wdENoYXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3AucHJvbXB0Q2hhciA9IG5ld1Byb3AucHJvbXB0Q2hhclswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9wLnByb21wdENoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb21wdENoYXIgPSBuZXdQcm9wLnByb21wdENoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb21wdENoYXIgPSAnXyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKCdbJyArIG9sZFByb3AucHJvbXB0Q2hhciArICddJywgJ2cnKSwgdGhpcy5wcm9tcHRDaGFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb21wdE1hc2sgPT09IHRoaXMuZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5wcm9tcHRNYXNrLnJlcGxhY2UobmV3IFJlZ0V4cCgnWycgKyBvbGRQcm9wLnByb21wdENoYXIgKyAnXScsICdnJyksIHRoaXMucHJvbXB0Q2hhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb21wdE1hc2sgPSB0aGlzLnByb21wdE1hc2sucmVwbGFjZShuZXcgUmVnRXhwKCdbJyArIG9sZFByb3AucHJvbXB0Q2hhciArICddJywgJ2cnKSwgdGhpcy5wcm9tcHRDaGFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5kb0NvbGxlYyA9IHRoaXMucmVkb0NvbGxlYyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfMi5zZXRFbGVtZW50VmFsdWUuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLnVwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKHN0cmlwcGVkVmFsKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TWFza2VkVGV4dEJveCgpO1xuICAgICAgICAgICAgaW5kZXhfMi5zZXRNYXNrVmFsdWUuY2FsbCh0aGlzLCBzdHJpcHBlZFZhbCk7XG4gICAgICAgIH07XG4gICAgICAgIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLmdldE1hc2tlZFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4XzEudW5zdHJpcHBlZFZhbHVlLmNhbGwodGhpcywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgTWFza2VkVGV4dEJveC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGluZGV4XzEudW53aXJlRXZlbnRzLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0T2JqLmNvbnRhaW5lci5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2xvbmVFbGVtZW50KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuZGV0YWNoKHRoaXMuaW5wdXRPYmouY29udGFpbmVyKTtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTWFza2VkVGV4dEJveDtcbiAgICB9KGVqMl9iYXNlXzEuQ29tcG9uZW50KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkobnVsbClcbiAgICBdLCBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZSwgXCJjc3NDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KG51bGwpXG4gICAgXSwgTWFza2VkVGV4dEJveC5wcm90b3R5cGUsIFwid2lkdGhcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLCBcInBsYWNlaG9sZGVyXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ05ldmVyJylcbiAgICBdLCBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZSwgXCJmbG9hdExhYmVsVHlwZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KHRydWUpXG4gICAgXSwgTWFza2VkVGV4dEJveC5wcm90b3R5cGUsIFwiZW5hYmxlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLCBcImVuYWJsZVBlcnNpc3RlbmNlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgTWFza2VkVGV4dEJveC5wcm90b3R5cGUsIFwiZW5hYmxlUnRsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkobnVsbClcbiAgICBdLCBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZSwgXCJtYXNrXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ18nKVxuICAgIF0sIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLCBcInByb21wdENoYXJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLCBcInZhbHVlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkobnVsbClcbiAgICBdLCBNYXNrZWRUZXh0Qm94LnByb3RvdHlwZSwgXCJjdXN0b21DaGFyYWN0ZXJzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLCBcImNyZWF0ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgTWFza2VkVGV4dEJveC5wcm90b3R5cGUsIFwiZGVzdHJveWVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIE1hc2tlZFRleHRCb3gucHJvdG90eXBlLCBcImNoYW5nZVwiLCB2b2lkIDApO1xuICAgIE1hc2tlZFRleHRCb3ggPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Ob3RpZnlQcm9wZXJ0eUNoYW5nZXNcbiAgICBdLCBNYXNrZWRUZXh0Qm94KTtcbiAgICBleHBvcnRzLk1hc2tlZFRleHRCb3ggPSBNYXNrZWRUZXh0Qm94O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXNrZWR0ZXh0Ym94L21hc2tlZHRleHRib3gvbWFza2VkdGV4dGJveC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2lucHV0XCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgaW5wdXRfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQoaW5wdXRfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2lucHV0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2Zvcm0tdmFsaWRhdG9yXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZm9ybV92YWxpZGF0b3JfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQoZm9ybV92YWxpZGF0b3JfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zvcm0tdmFsaWRhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIFZBTElEQVRFX0VNQUlMID0gbmV3IFJlZ0V4cCgnXltBLVphLXowLTkuXyUrLV17Myx9QFthLXpBLVpdezMsfShbLl17MX1bYS16QS1aXXsyLDV9JyArXG4gICAgICAgICd8Wy5dezF9W2EtekEtWl17Miw0fVsuXXsxfVthLXpBLVpdezIsNH0pJCcpO1xuICAgIHZhciBWQUxJREFURV9VUkwgPSBuZXcgUmVnRXhwKCdeKChmdHB8aHR0cHxodHRwcyk6XFwvXFwvKT93d3dcXC4oW0Etel17Mix9KVxcLihbQS16XXsyLH0pJCcpO1xuICAgIHZhciBWQUxJREFURV9EQVRFX0lTTyA9IG5ldyBSZWdFeHAoJ14oWzAtOV17NH0pLSgwWzEtOV18MVswLTJdKS0oMFsxLTldfFsxLTJdWzAtOV18M1swLTFdKSQnKTtcbiAgICB2YXIgVkFMSURBVEVfRElHSVRTID0gbmV3IFJlZ0V4cCgnXlswLTldKiQnKTtcbiAgICB2YXIgVkFMSURBVEVfUEhPTkUgPSBuZXcgUmVnRXhwKCdeWytdP1swLTldezksMTN9JCcpO1xuICAgIHZhciBWQUxJREFURV9DUkVESVRDQVJEID0gbmV3IFJlZ0V4cCgnXlxcXFxkezEzLDE2fSQnKTtcbiAgICB2YXIgRXJyb3JPcHRpb247XG4gICAgKGZ1bmN0aW9uIChFcnJvck9wdGlvbikge1xuICAgICAgICBFcnJvck9wdGlvbltFcnJvck9wdGlvbltcIk1lc3NhZ2VcIl0gPSAwXSA9IFwiTWVzc2FnZVwiO1xuICAgICAgICBFcnJvck9wdGlvbltFcnJvck9wdGlvbltcIkxhYmVsXCJdID0gMV0gPSBcIkxhYmVsXCI7XG4gICAgfSkoRXJyb3JPcHRpb24gPSBleHBvcnRzLkVycm9yT3B0aW9uIHx8IChleHBvcnRzLkVycm9yT3B0aW9uID0ge30pKTtcbiAgICB2YXIgRm9ybVZhbGlkYXRvciA9IEZvcm1WYWxpZGF0b3JfMSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhGb3JtVmFsaWRhdG9yLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBGb3JtVmFsaWRhdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnQpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy52YWxpZGF0ZWQgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLmVycm9yUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLmFsbG93U3VibWl0ID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5yZXF1aXJlZCA9ICdyZXF1aXJlZCc7XG4gICAgICAgICAgICBfdGhpcy5pbmZvRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBfdGhpcy5pbnB1dEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgX3RoaXMuc2VsZWN0UXVlcnkgPSAnaW5wdXQ6bm90KFt0eXBlPXJlc2V0XSk6bm90KFt0eXBlPWJ1dHRvbl0pLCBzZWxlY3QsIHRleHRhcmVhJztcbiAgICAgICAgICAgIF90aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUkwuJyxcbiAgICAgICAgICAgICAgICBkYXRlOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZS4nLFxuICAgICAgICAgICAgICAgIGRhdGVJc286ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlICggSVNPICkuJyxcbiAgICAgICAgICAgICAgICBjcmVkaXRjYXJkOiAnUGxlYXNlIGVudGVyIHZhbGlkIGNhcmQgbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBudW1iZXI6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBudW1iZXIuJyxcbiAgICAgICAgICAgICAgICBkaWdpdHM6ICdQbGVhc2UgZW50ZXIgb25seSBkaWdpdHMuJyxcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdQbGVhc2UgZW50ZXIgbm8gbW9yZSB0aGFuIHswfSBjaGFyYWN0ZXJzLicsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnUGxlYXNlIGVudGVyIGF0IGxlYXN0IHswfSBjaGFyYWN0ZXJzLicsXG4gICAgICAgICAgICAgICAgcmFuZ2VMZW5ndGg6ICdQbGVhc2UgZW50ZXIgYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9IGNoYXJhY3RlcnMgbG9uZy4nLFxuICAgICAgICAgICAgICAgIHJhbmdlOiAnUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfS4nLFxuICAgICAgICAgICAgICAgIG1heDogJ1BsZWFzZSBlbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7MH0uJyxcbiAgICAgICAgICAgICAgICBtaW46ICdQbGVhc2UgZW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gezB9LicsXG4gICAgICAgICAgICAgICAgcmVnZXg6ICdQbGVhc2UgZW50ZXIgYSBjb3JyZWN0IHZhbHVlLicsXG4gICAgICAgICAgICAgICAgdGVsOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyLicsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogJ1BsZWFzZSBlbnRlciBhIGNvcnJlY3QgcGF0dGVybiB2YWx1ZS4nLFxuICAgICAgICAgICAgICAgIGVxdWFsVG86ICdQbGVhc2UgZW50ZXIgdGhlIHZhbGlkIG1hdGNoIHRleHQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBlajJfYmFzZV8xLnNlbGVjdChlbGVtZW50LCBkb2N1bWVudCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgaWYgKF90aGlzLmVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgJycpO1xuICAgICAgICAgICAgICAgIF90aGlzLmlucHV0RWxlbWVudHMgPSBlajJfYmFzZV8xLnNlbGVjdEFsbChfdGhpcy5zZWxlY3RRdWVyeSwgX3RoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY3JlYXRlSFRNTDVSdWxlcygpO1xuICAgICAgICAgICAgICAgIF90aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuYWRkUnVsZXMgPSBmdW5jdGlvbiAobmFtZSwgcnVsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5leHRlbmQodGhpcy5ydWxlc1tuYW1lXSwgcnVsZXMsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucnVsZXNbbmFtZV0gPSBydWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUucmVtb3ZlUnVsZXMgPSBmdW5jdGlvbiAobmFtZSwgcnVsZXMpIHtcbiAgICAgICAgICAgIGlmICghbmFtZSAmJiAhcnVsZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnJ1bGVzW25hbWVdICYmICFydWxlcykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJ1bGVzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWVqMl9iYXNlXzIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5ydWxlc1tuYW1lXSAmJiBydWxlcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJ1bGVzW25hbWVdW3J1bGVzW2ldXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICB2YXIgcnVsZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBydWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlUnVsZXMoc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBydWxlcy5pbmRleE9mKHNlbGVjdGVkKSAhPT0gLTEgJiYgdGhpcy5lcnJvclJ1bGVzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5uYW1lID09PSBzZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB9KS5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHJ1bGVzXzEgPSBydWxlczsgX2kgPCBydWxlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZV8xID0gcnVsZXNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVSdWxlcyhuYW1lXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvclJ1bGVzLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkID0gW107XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGVqMl9iYXNlXzEuc2VsZWN0QWxsKHRoaXMuc2VsZWN0UXVlcnksIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGVsZW1lbnRzXzEgPSBlbGVtZW50czsgX2kgPCBlbGVtZW50c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNfMVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5lcnJvckNsYXNzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQubmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRFbGVtZW50KGlucHV0Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEVycm9yRWxlbWVudChpbnB1dC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTWVzc2FnZShpbnB1dC5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnZhbGlkQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5nZXRJbnB1dEVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSAoZWoyX2Jhc2VfMS5zZWxlY3QoJ1tuYW1lPScgKyBuYW1lICsgJ10nLCB0aGlzLmVsZW1lbnQpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMudW53aXJlRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnJ1bGVzID0ge307XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBlajJfYmFzZV8xLnNlbGVjdEFsbCgnLicgKyB0aGlzLmVycm9yQ2xhc3MgKyAnLCAuJyArIHRoaXMudmFsaWRDbGFzcywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZWxlbWVudHNfMiA9IGVsZW1lbnRzOyBfaSA8IGVsZW1lbnRzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c18yW19pXTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLm9uUHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1Byb3AsIG9sZFByb3ApIHtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5nZXRNb2R1bGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmb3JtVmFsaWRhdG9yJztcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuY3JlYXRlSFRNTDVSdWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkZWZSdWxlcyA9IFsncmVxdWlyZWQnLCAncmVnZXgnLCAncmFuZ2VMZW5ndGgnLCAnbWF4TGVuZ3RoJywgJ21pbkxlbmd0aCcsICdkYXRlSXNvJywgJ2RpZ2l0cycsICdwYXR0ZXJuJyxcbiAgICAgICAgICAgICAgICAnZGF0YS12YWwtcmVxdWlyZWQnLCAndHlwZScsICdkYXRhLXZhbGlkYXRpb24nLCAnbWluJywgJ21heCcsICdyYW5nZScsICdlcXVhbFRvJywgJ2RhdGEtdmFsLW1pbmxlbmd0aC1taW4nLFxuICAgICAgICAgICAgICAgICdkYXRhLXZhbC1lcXVhbHRvLW90aGVyJywgJ2RhdGEtdmFsLW1heGxlbmd0aC1tYXgnLCAnZGF0YS12YWwtcmFuZ2UtbWluJywgJ2RhdGEtdmFsLXJlZ2V4LXBhdHRlcm4nLCAnZGF0YS12YWwtbGVuZ3RoLW1heCcsXG4gICAgICAgICAgICAgICAgJ2RhdGEtdmFsLWNyZWRpdGNhcmQnLCAnZGF0YS12YWwtcGhvbmUnXTtcbiAgICAgICAgICAgIHZhciBhY2NlcHRlZFR5cGVzID0gWydlbWFpbCcsICd1cmwnLCAnZGF0ZScsICdudW1iZXInLCAndGVsJ107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gKHRoaXMuaW5wdXRFbGVtZW50cyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHZhciBhbGxSdWxlID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBkZWZSdWxlc18xID0gZGVmUnVsZXM7IF9iIDwgZGVmUnVsZXNfMS5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ1bGUgPSBkZWZSdWxlc18xW19iXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShydWxlKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChydWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVxdWlyZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIGFsbFJ1bGUsIHJ1bGUsIGlucHV0LnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGF0YS12YWxpZGF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSA9IGlucHV0LmdldEF0dHJpYnV0ZShydWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBhbGxSdWxlLCBydWxlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndHlwZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NlcHRlZFR5cGVzLmluZGV4T2YoaW5wdXQudHlwZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIGFsbFJ1bGUsIGlucHV0LnR5cGUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhbmdlTGVuZ3RoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgYWxsUnVsZSwgcnVsZSwgSlNPTi5wYXJzZShpbnB1dC5nZXRBdHRyaWJ1dGUocnVsZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1YWxUbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IGlucHV0LmdldEF0dHJpYnV0ZShydWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBhbGxSdWxlLCBydWxlLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9uUnVsZShpbnB1dCwgYWxsUnVsZSwgcnVsZSwgaW5wdXQuZ2V0QXR0cmlidXRlKHJ1bGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgYWxsUnVsZSwgcnVsZSwgaW5wdXQuZ2V0QXR0cmlidXRlKHJ1bGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhhbGxSdWxlKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRSdWxlcyhpbnB1dC5uYW1lLCBhbGxSdWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmFubm90YXRpb25SdWxlID0gZnVuY3Rpb24gKGlucHV0LCBydWxlQ29uLCBydWxlTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBhbm5vdGF0aW9uUnVsZSA9IHJ1bGVOYW1lLnNwbGl0KCctJyk7XG4gICAgICAgICAgICB2YXIgcnVsZXNMaXN0ID0gWydyZXF1aXJlZCcsICdjcmVkaXRjYXJkJywgJ3Bob25lJywgJ21heGxlbmd0aCcsICdtaW5sZW5ndGgnLCAncmFuZ2UnLCAncmVnZXgnLCAnZXF1YWx0byddO1xuICAgICAgICAgICAgdmFyIHJ1bGVGaXJzdE5hbWUgPSBhbm5vdGF0aW9uUnVsZVthbm5vdGF0aW9uUnVsZS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBydWxlU2Vjb25kTmFtZSA9IGFubm90YXRpb25SdWxlW2Fubm90YXRpb25SdWxlLmxlbmd0aCAtIDJdO1xuICAgICAgICAgICAgaWYgKHJ1bGVzTGlzdC5pbmRleE9mKHJ1bGVGaXJzdE5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocnVsZUZpcnN0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZXF1aXJlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIHJ1bGVDb24sICdyZXF1aXJlZCcsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjcmVkaXRjYXJkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgcnVsZUNvbiwgJ2NyZWRpdGNhcmQnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBydWxlQ29uLCAndGVsJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocnVsZXNMaXN0LmluZGV4T2YocnVsZVNlY29uZE5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocnVsZVNlY29uZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWF4bGVuZ3RoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgcnVsZUNvbiwgJ21heExlbmd0aCcsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtaW5sZW5ndGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBydWxlQ29uLCAnbWluTGVuZ3RoJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW52YWx1ZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWwtcmFuZ2UtbWluJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4dmFsdWUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsLXJhbmdlLW1heCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBydWxlQ29uLCAncmFuZ2UnLCBbbWludmFsdWUsIG1heHZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1YWx0byc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUocnVsZU5hbWUpLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIHJ1bGVDb24sICdlcXVhbFRvJywgaWRbaWQubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlZ2V4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgcnVsZUNvbiwgJ3JlZ2V4JywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5kZWZSdWxlID0gZnVuY3Rpb24gKGlucHV0LCBydWxlQ29uLCBydWxlTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBydWxlTmFtZSArICctbWVzc2FnZScpO1xuICAgICAgICAgICAgdmFyIGFubm90YXRpb25NZXNzYWdlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbC0nICsgcnVsZU5hbWUpO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZSwgbWVzc2FnZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhbm5vdGF0aW9uTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlLCBhbm5vdGF0aW9uTWVzc2FnZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBydWxlQ29uW3J1bGVOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS53aXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9ICh0aGlzLmlucHV0RWxlbWVudHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAoRm9ybVZhbGlkYXRvcl8xLmlzQ2hlY2thYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQoaW5wdXQsICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKGlucHV0LCAnY2hhbmdlJywgdGhpcy5jaGFuZ2VIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZChpbnB1dCwgJ2ZvY3Vzb3V0JywgdGhpcy5mb2N1c091dEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQoaW5wdXQsICdrZXl1cCcsIHRoaXMua2V5VXBIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUudW53aXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9ICh0aGlzLmlucHV0RWxlbWVudHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5jbGVhckV2ZW50cyhpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuZm9jdXNPdXRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZm9jdXNvdXQnLCBlKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBpZiAodGhpcy5ydWxlc1tlbGVtZW50Lm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucnVsZXNbZWxlbWVudC5uYW1lXVt0aGlzLnJlcXVpcmVkXSB8fCBlbGVtZW50LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZShlbGVtZW50Lm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnZhbGlkYXRlZC5pbmRleE9mKGVsZW1lbnQubmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkLnB1c2goZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmtleVVwSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2tleXVwJywgZSk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGV4Y2x1ZGVLZXlzID0gWzE2LCAxNywgMTgsIDIwLCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0NSwgMTQ0LCAyMjVdO1xuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDkgJiYgKCF0aGlzLnJ1bGVzW2VsZW1lbnQubmFtZV0gfHwgKHRoaXMucnVsZXNbZWxlbWVudC5uYW1lXSAmJiAhdGhpcy5ydWxlc1tlbGVtZW50Lm5hbWVdW3RoaXMucmVxdWlyZWRdKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZWQuaW5kZXhPZihlbGVtZW50Lm5hbWUpICE9PSAtMSAmJiB0aGlzLnJ1bGVzW2VsZW1lbnQubmFtZV0gJiYgZXhjbHVkZUtleXMuaW5kZXhPZihlLndoaWNoKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlKGVsZW1lbnQubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgZSk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSAhPT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlKGVsZW1lbnQubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZm9ybW5vdmFsaWRhdGUnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dTdWJtaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5jaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJywgZSk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZShlbGVtZW50Lm5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5zdWJtaXRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc3VibWl0JywgZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWxsb3dTdWJtaXQgJiYgIXRoaXMudmFsaWRhdGUoKSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dTdWJtaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGVSdWxlcyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucnVsZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcnVsZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzW25hbWVdKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRFbGVtZW50KG5hbWUpO1xuICAgICAgICAgICAgdGhpcy5nZXRFcnJvckVsZW1lbnQobmFtZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHJ1bGVzXzIgPSBydWxlczsgX2kgPCBydWxlc18yLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBydWxlID0gcnVsZXNfMltfaV07XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKHRoaXMucnVsZXNbbmFtZV1bcnVsZV0sIHJ1bGUpO1xuICAgICAgICAgICAgICAgIHZhciBlcnJvclJ1bGUgPSB7IG5hbWU6IG5hbWUsIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSB9O1xuICAgICAgICAgICAgICAgIHZhciBldmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0TmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5pbnB1dEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQobmFtZSwgcnVsZSkgJiYgIXRoaXMuaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmlnbm9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnJvclJ1bGVzKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yUnVsZXMucHVzaChlcnJvclJ1bGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRoaXMuaW5wdXRFbGVtZW50LmlkICsgJy1pbmZvJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pbmZvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckVsZW1lbnQobmFtZSwgZXJyb3JSdWxlLm1lc3NhZ2UsIHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UoZXJyb3JSdWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudEFyZ3MuZXJyb3JFbGVtZW50ID0gdGhpcy5pbmZvRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRBcmdzLnN0YXR1cyA9ICdmYWlsdXJlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmVycm9yQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudmFsaWRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcigndmFsaWRhdGlvbkNvbXBsZXRlJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUgPT09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1yZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNZXNzYWdlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBldmVudEFyZ3Muc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3ZhbGlkYXRpb25Db21wbGV0ZScsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5pc1ZhbGlkID0gZnVuY3Rpb24gKG5hbWUsIHJ1bGUpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnJ1bGVzW25hbWVdW3J1bGVdO1xuICAgICAgICAgICAgdmFyIHBhcmFtID0gKHBhcmFtcyBpbnN0YW5jZW9mIEFycmF5ICYmIHR5cGVvZiBwYXJhbXNbMV0gPT09ICdzdHJpbmcnKSA/IHBhcmFtc1swXSA6IHBhcmFtcztcbiAgICAgICAgICAgIHZhciBjdXJyZW50UnVsZSA9IHRoaXMucnVsZXNbbmFtZV1bcnVsZV07XG4gICAgICAgICAgICB2YXIgYXJncyA9IHsgdmFsdWU6IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLCBwYXJhbTogcGFyYW0sIGVsZW1lbnQ6IHRoaXMuaW5wdXRFbGVtZW50LCBmb3JtRWxlbWVudDogdGhpcy5lbGVtZW50IH07XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3ZhbGlkYXRpb25CZWdpbicsIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRSdWxlICYmIHR5cGVvZiBjdXJyZW50UnVsZVswXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciBmbiA9IGN1cnJlbnRSdWxlWzBdO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHsgZWxlbWVudDogdGhpcy5pbnB1dEVsZW1lbnQsIHZhbHVlOiB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEZvcm1WYWxpZGF0b3JfMS5pc0NoZWNrYWJsZSh0aGlzLmlucHV0RWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocnVsZSAhPT0gJ3JlcXVpcmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVqMl9iYXNlXzEuc2VsZWN0QWxsKCdpbnB1dFtuYW1lPScgKyBuYW1lICsgJ106Y2hlY2tlZCcsIHRoaXMuZWxlbWVudCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBGb3JtVmFsaWRhdG9yXzEuY2hlY2tWYWxpZGF0b3JbcnVsZV0oYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmdldEVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIChydWxlVmFsdWUsIHJ1bGUpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gKHJ1bGVWYWx1ZSBpbnN0YW5jZW9mIEFycmF5ICYmIHR5cGVvZiBydWxlVmFsdWVbMV0gPT09ICdzdHJpbmcnKSA/IHJ1bGVWYWx1ZVsxXSA6IHRoaXMuZGVmYXVsdE1lc3NhZ2VzW3J1bGVdO1xuICAgICAgICAgICAgdmFyIGZvcm1hdHMgPSBtZXNzYWdlLm1hdGNoKC97KFxcZCl9L2cpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8yLmlzTnVsbE9yVW5kZWZpbmVkKGZvcm1hdHMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JtYXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJ1bGVWYWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gcnVsZVZhbHVlW2ldIDogcnVsZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKGZvcm1hdHNbaV0sIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuY3JlYXRlRXJyb3JFbGVtZW50ID0gZnVuY3Rpb24gKG5hbWUsIG1lc3NhZ2UsIGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgZXJyb3JFbGVtZW50ID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KHRoaXMuZXJyb3JFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmVycm9yQ2xhc3MsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogbmFtZSB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yT3B0aW9uID09PSBFcnJvck9wdGlvbi5NZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5lcnJvckNsYXNzKTtcbiAgICAgICAgICAgICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZS1tZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgZXJyb3JFbGVtZW50ID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KHRoaXMuZXJyb3JDb250YWluZXIsIHsgY2xhc3NOYW1lOiB0aGlzLmVycm9yQ2xhc3MsIGlubmVySFRNTDogZXJyb3JFbGVtZW50Lm91dGVySFRNTCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yRWxlbWVudC5pZCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hbWUgKyAnLWluZm8nO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YWxtc2ctZm9yPVwiJyArIGlucHV0LmlkICsgJ1wiXScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbG1zZy1mb3I9XCInICsgaW5wdXQuaWQgKyAnXCJdJykuYXBwZW5kQ2hpbGQoZXJyb3JFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tc2ctY29udGFpbmVyaWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJJZCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1tc2ctY29udGFpbmVyaWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgZGl2RWxlbWVudCA9IGlucHV0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBjb250YWluZXJJZCk7XG4gICAgICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChlcnJvckVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdXN0b21QbGFjZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tUGxhY2VtZW50LmNhbGwodGhpcywgdGhpcy5pbnB1dEVsZW1lbnQsIGVycm9yRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlcnJvckVsZW1lbnQsIHRoaXMuaW5wdXRFbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JFbGVtZW50KG5hbWUpO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZWQucHVzaChuYW1lKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tSZXF1aXJlZChuYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuZ2V0RXJyb3JFbGVtZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5mb0VsZW1lbnQgPSBlajJfYmFzZV8xLnNlbGVjdCh0aGlzLmVycm9yRWxlbWVudCArICcuJyArIHRoaXMuZXJyb3JDbGFzcywgdGhpcy5pbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5mb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9FbGVtZW50ID0gZWoyX2Jhc2VfMS5zZWxlY3QodGhpcy5lcnJvckVsZW1lbnQgKyAnLicgKyB0aGlzLmVycm9yQ2xhc3MgKyAnW2Zvcj1cIicgKyBuYW1lICsgJ1wiXScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5mb0VsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLnJlbW92ZUVycm9yUnVsZXMgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVycm9yUnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcnVsZSA9IHRoaXMuZXJyb3JSdWxlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JSdWxlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5zaG93TWVzc2FnZSA9IGZ1bmN0aW9uIChlcnJvclJ1bGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5mb0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB0aGlzLmluZm9FbGVtZW50LmlubmVySFRNTCA9IGVycm9yUnVsZS5tZXNzYWdlO1xuICAgICAgICAgICAgdGhpcy5jaGVja1JlcXVpcmVkKGVycm9yUnVsZS5uYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuaGlkZU1lc3NhZ2UgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5mb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnJvclJ1bGVzKG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy52YWxpZENsYXNzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZXJyb3JDbGFzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuY2hlY2tSZXF1aXJlZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucnVsZXNbbmFtZV1bdGhpcy5yZXF1aXJlZF0gJiYgIXRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1lc3NhZ2UobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IuaXNDaGVja2FibGUgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dFR5cGUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dFR5cGUgJiYgKGlucHV0VHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBpbnB1dFR5cGUgPT09ICdyYWRpbycgfHwgaW5wdXRUeXBlID09PSAnc3VibWl0Jyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtVmFsaWRhdG9yO1xuICAgIH0oZWoyX2Jhc2VfMS5CYXNlKSk7XG4gICAgRm9ybVZhbGlkYXRvci5jaGVja1ZhbGlkYXRvciA9IHtcbiAgICAgICAgcmVxdWlyZWQ6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWw6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBWQUxJREFURV9FTUFJTC50ZXN0KG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFZBTElEQVRFX1VSTC50ZXN0KG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVJc286IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBWQUxJREFURV9EQVRFX0lTTy50ZXN0KG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRlbDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFZBTElEQVRFX1BIT05FLnRlc3Qob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGl0Y2FyZDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFZBTElEQVRFX0NSRURJVENBUkQudGVzdChvcHRpb24udmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBudW1iZXI6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAhaXNOYU4oTnVtYmVyKG9wdGlvbi52YWx1ZSkpICYmIG9wdGlvbi52YWx1ZS5pbmRleE9mKCcgJykgPT09IC0xO1xuICAgICAgICB9LFxuICAgICAgICBkaWdpdHM6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBWQUxJREFURV9ESUdJVFMudGVzdChvcHRpb24udmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBtYXhMZW5ndGg6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWUubGVuZ3RoIDw9IG9wdGlvbi5wYXJhbTtcbiAgICAgICAgfSxcbiAgICAgICAgbWluTGVuZ3RoOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlLmxlbmd0aCA+PSBvcHRpb24ucGFyYW07XG4gICAgICAgIH0sXG4gICAgICAgIHJhbmdlTGVuZ3RoOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW0gPSBvcHRpb24ucGFyYW07XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlLmxlbmd0aCA+PSBwYXJhbVswXSAmJiBvcHRpb24udmFsdWUubGVuZ3RoIDw9IHBhcmFtWzFdO1xuICAgICAgICB9LFxuICAgICAgICByYW5nZTogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgdmFyIHBhcmFtID0gb3B0aW9uLnBhcmFtO1xuICAgICAgICAgICAgcmV0dXJuICFpc05hTihOdW1iZXIob3B0aW9uLnZhbHVlKSkgJiYgTnVtYmVyKG9wdGlvbi52YWx1ZSkgPj0gcGFyYW1bMF0gJiYgTnVtYmVyKG9wdGlvbi52YWx1ZSkgPD0gcGFyYW1bMV07XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGU6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAhaXNOYU4obmV3IERhdGUob3B0aW9uLnZhbHVlKS5nZXRUaW1lKCkpO1xuICAgICAgICB9LFxuICAgICAgICBtYXg6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKG9wdGlvbi52YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICtvcHRpb24udmFsdWUgPD0gb3B0aW9uLnBhcmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKG9wdGlvbi52YWx1ZSkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9uLnBhcmFtKSkpLmdldFRpbWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWluOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcihvcHRpb24udmFsdWUpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiArb3B0aW9uLnZhbHVlID49IG9wdGlvbi5wYXJhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShvcHRpb24udmFsdWUpLmdldFRpbWUoKSA+PSBuZXcgRGF0ZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbi5wYXJhbSkpKS5nZXRUaW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2V4OiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChvcHRpb24ucGFyYW0pLnRlc3Qob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXF1YWxUbzogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgdmFyIGNvbXBhcmVUbyA9IG9wdGlvbi5mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbi5wYXJhbSk7XG4gICAgICAgICAgICBvcHRpb24ucGFyYW0gPSBjb21wYXJlVG8udmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLnBhcmFtID09PSBvcHRpb24udmFsdWU7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5Qcm9wZXJ0eSgnZS1oaWRkZW4nKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcImlnbm9yZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLlByb3BlcnR5KHt9KVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcInJ1bGVzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuUHJvcGVydHkoJ2UtZXJyb3InKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcImVycm9yQ2xhc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5Qcm9wZXJ0eSgnZS12YWxpZCcpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwidmFsaWRDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLlByb3BlcnR5KCdsYWJlbCcpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwiZXJyb3JFbGVtZW50XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuUHJvcGVydHkoJ2RpdicpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwiZXJyb3JDb250YWluZXJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5Qcm9wZXJ0eShFcnJvck9wdGlvbi5MYWJlbClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJlcnJvck9wdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJmb2N1c291dFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJrZXl1cFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJjbGlja1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJjaGFuZ2VcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwic3VibWl0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcInZhbGlkYXRpb25CZWdpblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJ2YWxpZGF0aW9uQ29tcGxldGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwiY3VzdG9tUGxhY2VtZW50XCIsIHZvaWQgMCk7XG4gICAgRm9ybVZhbGlkYXRvciA9IEZvcm1WYWxpZGF0b3JfMSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLk5vdGlmeVByb3BlcnR5Q2hhbmdlc1xuICAgIF0sIEZvcm1WYWxpZGF0b3IpO1xuICAgIGV4cG9ydHMuRm9ybVZhbGlkYXRvciA9IEZvcm1WYWxpZGF0b3I7XG4gICAgdmFyIEZvcm1WYWxpZGF0b3JfMTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9ybS12YWxpZGF0b3IvZm9ybS12YWxpZGF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=