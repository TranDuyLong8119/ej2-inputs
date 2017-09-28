/*!
*  filename: ej2-inputs.umd.js
*  version : 1.0.19
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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, index_1, index_2, index_3) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(index_1);
	    __export(index_2);
	    __export(index_3);
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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, input_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(input_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, form_validator_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(form_validator_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMGNjMjllYmRlM2M1YTAwMjFlYiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWN0ZXh0Ym94L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljdGV4dGJveC9udW1lcmljdGV4dGJveC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm0tdmFsaWRhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtLXZhbGlkYXRvci9mb3JtLXZhbGlkYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7aUVDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O2lFQ1REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBLEVBQUM7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0EsV0FBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLDBCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQix3Q0FBd0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFpRCx5RkFBeUY7QUFDMUksK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQWtFLDZDQUE2QztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLHFEQUFxRDtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsMEJBQTBCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnRCxtQkFBbUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0QscUJBQXFCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBdUUsY0FBYztBQUNyRjtBQUNBLHVGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyxvREFBb0Q7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esc0RBQXFELDBCQUEwQjtBQUMvRTtBQUNBLG9FQUFtRSxTQUFTLGlCQUFpQixFQUFFO0FBQy9GO0FBQ0E7QUFDQSxzREFBcUQseUJBQXlCO0FBQzlFO0FBQ0E7QUFDQSx3REFBdUQsMkJBQTJCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLDJCQUEyQjtBQUMvRDtBQUNBO0FBQ0EscUNBQW9DLHdCQUF3QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0MscUNBQXFDLGNBQWMsaURBQWlEO0FBQzVJO0FBQ0E7QUFDQSx5Q0FBd0MscUNBQXFDLGNBQWMsaURBQWlEO0FBQzVJO0FBQ0E7QUFDQSxpQ0FBZ0MsaURBQWlEO0FBQ2pGLGtEQUFpRCw2RUFBNkU7QUFDOUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0Msc0NBQXNDLGNBQWMsa0RBQWtEO0FBQzFJO0FBQ0E7QUFDQTtBQUNBLHlFQUF3RSxjQUFjO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWlELHVEQUF1RDtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLGNBQWM7QUFDbEQ7QUFDQSw4REFBNkQsY0FBYztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLGNBQWM7QUFDbEQsaUVBQWdFLGNBQWM7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLGVBQWU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxtREFBbUQ7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXFELHlCQUF5QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHdCQUF3QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0MsY0FBYztBQUN0RDtBQUNBLGtFQUFpRSxjQUFjO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsdUJBQXVCLHNCQUFzQixFQUFFO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0Msa0JBQWtCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHVFQUFzRSxnREFBZ0Q7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBaUUsMEJBQTBCO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDaHZCRCxnRDs7Ozs7O2lFQ0FBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLHlCQUF5QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWdFLGtDQUFrQztBQUNsRyxvRUFBbUUsa0NBQWtDO0FBQ3JHO0FBQ0E7QUFDQSxzREFBcUQsMENBQTBDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBbUUsZ0JBQWdCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTJELGtDQUFrQztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSx5Q0FBd0MseURBQXlELEVBQUU7QUFDbkcsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBc0UsdUJBQXVCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLDREQUEyRCx1QkFBdUI7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFvRCw4REFBOEQ7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0QsZUFBZTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXFELGdCQUFnQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRCxnQkFBZ0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQsNkJBQTZCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QiwwRUFBMEUsMkJBQTJCO0FBQ2pJO0FBQ0EsaUNBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTJELHVCQUF1QjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSx5Q0FBd0MsNENBQTRDLEVBQUU7QUFDdEYsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE1BQUssOENBQThDO0FBQ25ELEVBQUM7Ozs7Ozs7aUVDamJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBLEVBQUM7Ozs7Ozs7aUVDUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsRUFBQzs7Ozs7OztBQ1BEO0FBQ0E7QUFDQSxXQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYsMEJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEUsd0RBQXVELEdBQUcsVUFBVSxHQUFHLEtBQUssRUFBRSxTQUFTLElBQUk7QUFDM0YsZUFBYyxFQUFFLFNBQVMsSUFBSSxJQUFJLEVBQUUsU0FBUyxJQUFJO0FBQ2hELHlFQUF3RSxHQUFHLFVBQVUsR0FBRztBQUN4RixpREFBZ0QsRUFBRTtBQUNsRDtBQUNBLGlEQUFnRCxLQUFLO0FBQ3JELGdEQUErQyxNQUFNO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSyxnRUFBZ0U7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCxFQUFFO0FBQ3pELG9EQUFtRCxFQUFFO0FBQ3JELDZEQUE0RCxFQUFFLE1BQU0sRUFBRTtBQUN0RSx1REFBc0QsRUFBRSxNQUFNLEVBQUU7QUFDaEUsbUVBQWtFLEVBQUU7QUFDcEUsc0VBQXFFLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQsd0JBQXdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRCx3QkFBd0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBLHdEQUF1RCx3QkFBd0I7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxxQkFBcUI7QUFDbEU7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0MsNkRBQTZEO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLEtBQUs7QUFDL0M7QUFDQSxnQ0FBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXdCO0FBQ3hCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwrRUFBOEUsZ0VBQWdFO0FBQzlJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoiZWoyLWlucHV0cy51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIikpIDogZmFjdG9yeShyb290W1wiQHN5bmNmdXNpb24vZWoyLWJhc2VcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzBjYzI5ZWJkZTNjNWEwMDIxZWIiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL251bWVyaWN0ZXh0Ym94L2luZGV4XCIsIFwiLi9pbnB1dC9pbmRleFwiLCBcIi4vZm9ybS12YWxpZGF0b3IvaW5kZXhcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBpbmRleF8xLCBpbmRleF8yLCBpbmRleF8zKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChpbmRleF8xKTtcbiAgICBfX2V4cG9ydChpbmRleF8yKTtcbiAgICBfX2V4cG9ydChpbmRleF8zKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9udW1lcmljdGV4dGJveFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG51bWVyaWN0ZXh0Ym94XzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KG51bWVyaWN0ZXh0Ym94XzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9udW1lcmljdGV4dGJveC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCIuLi9pbnB1dC9pbnB1dFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMsIGVqMl9iYXNlXzQsIGVqMl9iYXNlXzUsIGlucHV0XzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIFJPT1QgPSAnZS1udW1lcmljJztcbiAgICB2YXIgU1BJTklDT04gPSAnZS1pbnB1dC1ncm91cC1pY29uJztcbiAgICB2YXIgU1BJTlVQID0gJ2Utc3Bpbi11cCc7XG4gICAgdmFyIFNQSU5ET1dOID0gJ2Utc3Bpbi1kb3duJztcbiAgICB2YXIgRVJST1IgPSAnZS1lcnJvcic7XG4gICAgdmFyIElOQ1JFTUVOVCA9ICdpbmNyZW1lbnQnO1xuICAgIHZhciBERUNSRU1FTlQgPSAnZGVjcmVtZW50JztcbiAgICB2YXIgSU5UUkVHRVhQID0gbmV3IFJlZ0V4cCgnL14oLSk/KFxcZCopJC8nKTtcbiAgICB2YXIgREVDSU1BTFNFUEFSQVRPUiA9ICcuJztcbiAgICB2YXIgTnVtZXJpY1RleHRCb3ggPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoTnVtZXJpY1RleHRCb3gsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIE51bWVyaWNUZXh0Qm94KG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnQpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5pc1ByZXZGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5kZWNpbWFsU2VwYXJhdG9yID0gJy4nO1xuICAgICAgICAgICAgX3RoaXMuaW50UmVnRXhwID0gbmV3IFJlZ0V4cCgnL14oLSk/KFxcZCopJC8nKTtcbiAgICAgICAgICAgIF90aGlzLmlzQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlakluc3RhbmNlID0gZWoyX2Jhc2VfNC5nZXRWYWx1ZSgnZWoyX2luc3RhbmNlcycsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNsb25lRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFuZ3VsYXJUYWdOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZSA9PT0gJ0VKLU5VTUVSSUNURVhUQk9YJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5ndWxhclRhZ05hbWUgPSB0aGlzLmVsZW1lbnQudGFnTmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGluZGV4OyBpbmRleCA8IHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50LmF0dHJpYnV0ZXNbaW5kZXhdLm5vZGVOYW1lLCB0aGlzLmVsZW1lbnQuYXR0cmlidXRlc1tpbmRleF0ubm9kZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuaW5uZXJIVE1MID0gdGhpcy5lbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRWYWx1ZSgnZWoyX2luc3RhbmNlcycsIGVqSW5zdGFuY2UsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7ICdyb2xlJzogJ3NwaW5idXR0b24nLCAndGFiaW5kZXgnOiAnMCcsICdhdXRvY29tcGxldGUnOiAnb2ZmJywgJ2FyaWEtbGl2ZSc6ICdhc3NlcnRpdmUnIH0pO1xuICAgICAgICAgICAgdmFyIGxvY2FsZVRleHQgPSB7IGluY3JlbWVudFRpdGxlOiAnSW5jcmVtZW50IHZhbHVlJywgZGVjcmVtZW50VGl0bGU6ICdEZWNyZW1lbnQgdmFsdWUnLCBwbGFjZWhvbGRlcjogJycgfTtcbiAgICAgICAgICAgIHRoaXMubDEwbiA9IG5ldyBlajJfYmFzZV8xLkwxMG4oJ251bWVyaWN0ZXh0Ym94JywgbG9jYWxlVGV4dCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbnB1dFN0eWxlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaW5wdXROYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY3VsdHVyZUluZm8gPSB7fTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEN1bHR1cmVJbmZvKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRDdWx0dXJlRnVuYygpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgIHRoaXMucHJldlZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVNaW5NYXgoKTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVTdGVwKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZWhvbGRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1NwaW5CdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluQnRuQ3JlYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMud2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIHsgJ3dpZHRoJzogZWoyX2Jhc2VfNC5mb3JtYXRVbml0KHRoaXMud2lkdGgpIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMud2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBudWxsICYmICFpc05hTih0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWNpbWFscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgdmFsdWU6IHRoaXMucm91bmROdW1iZXIodGhpcy52YWx1ZSwgdGhpcy5kZWNpbWFscykgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5jaGVja0F0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlcyA9IFsndmFsdWUnLCAnbWluJywgJ21heCcsICdzdGVwJywgJ2Rpc2FibGVkJywgJ3JlYWRvbmx5JywgJ3N0eWxlJywgJ25hbWUnXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgYXR0cmlidXRlc18xID0gYXR0cmlidXRlczsgX2kgPCBhdHRyaWJ1dGVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBhdHRyaWJ1dGVzXzFbX2ldO1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKHByb3ApKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc2FibGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5hYmxlZCA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUocHJvcCkgPT09ICdkaXNhYmxlZCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShwcm9wKSA9PT0gJ3RydWUnID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IGVuYWJsZWQ6IGVuYWJsZWQgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWFkb25seSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRvbmx5ID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShwcm9wKSA9PT0gJ3JlYWRvbmx5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKHByb3ApID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgcmVhZG9ubHk6IHJlYWRvbmx5IH0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRTdHlsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0TmFtZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyUGFyc2VyKHsgZm9ybWF0OiAnbicgfSkodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShwcm9wKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh2YWx1ZSAhPT0gbnVsbCAmJiAhaXNOYU4odmFsdWUpKSB8fCAocHJvcCA9PT0gJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKGVqMl9iYXNlXzQuc2V0VmFsdWUocHJvcCwgdmFsdWUsIHt9KSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUudXBkYXRlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBwbGFjZWhvbGRlcjogdGhpcy5sMTBuLmdldENvbnN0YW50KCdwbGFjZWhvbGRlcicpIH0sIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuaW5pdEN1bHR1cmVGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBlajJfYmFzZV81LkludGVybmF0aW9uYWxpemF0aW9uKHRoaXMubG9jYWxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmluaXRDdWx0dXJlSW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VsdHVyZUluZm8uZm9ybWF0ID0gdGhpcy5mb3JtYXQ7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5nZXRWYWx1ZSgnY3VycmVuY3knLCB0aGlzKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0VmFsdWUoJ2N1cnJlbmN5JywgdGhpcy5jdXJyZW5jeSwgdGhpcy5jdWx0dXJlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5jcmVhdGVXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlucHV0T2JqID0gaW5wdXRfMS5JbnB1dC5jcmVhdGVJbnB1dCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIGN1c3RvbVRhZzogdGhpcy5hbmd1bGFyVGFnTmFtZSxcbiAgICAgICAgICAgICAgICBmbG9hdExhYmVsVHlwZTogdGhpcy5mbG9hdExhYmVsVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiB0aGlzLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IHRoaXMuY3NzQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVJ0bDogdGhpcy5lbmFibGVSdGwsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuZW5hYmxlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBpbnB1dE9iai5jb250YWluZXI7XG4gICAgICAgICAgICBlajJfYmFzZV8zLmFkZENsYXNzKFt0aGlzLmNvbnRhaW5lcl0sIFJPT1QpO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7ICdhcmlhLXJlYWRvbmx5JzogJ3RydWUnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oaWRkZW5JbnB1dCA9IChlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBhdHRyczogeyB0eXBlOiAnaGlkZGVuJyB9IH0pKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXROYW1lID0gdGhpcy5pbnB1dE5hbWUgIT09IG51bGwgPyB0aGlzLmlucHV0TmFtZSA6IHRoaXMuZWxlbWVudC5pZDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLmhpZGRlbklucHV0LCB7ICduYW1lJzogdGhpcy5pbnB1dE5hbWUgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5oaWRkZW5JbnB1dCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0U3R5bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5jb250YWluZXIsIHsgJ3N0eWxlJzogdGhpcy5pbnB1dFN0eWxlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuc3BpbkJ0bkNyZWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zcGluRG93biA9IGlucHV0XzEuSW5wdXQuYXBwZW5kU3BhbihTUElOSUNPTiArICcgJyArIFNQSU5ET1dOLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5zcGluRG93biwge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6IHRoaXMubDEwbi5nZXRDb25zdGFudCgnZGVjcmVtZW50VGl0bGUnKSxcbiAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6IHRoaXMubDEwbi5nZXRDb25zdGFudCgnZGVjcmVtZW50VGl0bGUnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNwaW5VcCA9IGlucHV0XzEuSW5wdXQuYXBwZW5kU3BhbihTUElOSUNPTiArICcgJyArIFNQSU5VUCwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKHRoaXMuc3BpblVwLCB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5sMTBuLmdldENvbnN0YW50KCdpbmNyZW1lbnRUaXRsZScpLFxuICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5sMTBuLmdldENvbnN0YW50KCdpbmNyZW1lbnRUaXRsZScpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMud2lyZVNwaW5CdG5FdmVudHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnZhbGlkYXRlTWluTWF4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEodHlwZW9mICh0aGlzLm1pbikgPT09ICdudW1iZXInICYmICFpc05hTih0aGlzLm1pbikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgbWluOiAtKE51bWJlci5NQVhfVkFMVUUpIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEodHlwZW9mICh0aGlzLm1heCkgPT09ICdudW1iZXInICYmICFpc05hTih0aGlzLm1heCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGVjaW1hbHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taW4gIT09IC0oTnVtYmVyLk1BWF9WQUxVRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgbWluOiB0aGlzLmluc3RhbmNlLmdldE51bWJlclBhcnNlcih7IGZvcm1hdDogJ24nIH0pKHRoaXMuZm9ybWF0dGVkVmFsdWUodGhpcy5kZWNpbWFscywgdGhpcy5taW4pKSB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4ICE9PSAoTnVtYmVyLk1BWF9WQUxVRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgbWF4OiB0aGlzLmluc3RhbmNlLmdldE51bWJlclBhcnNlcih7IGZvcm1hdDogJ24nIH0pKHRoaXMuZm9ybWF0dGVkVmFsdWUodGhpcy5kZWNpbWFscywgdGhpcy5tYXgpKSB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBtaW46IHRoaXMubWluID4gdGhpcy5tYXggPyB0aGlzLm1heCA6IHRoaXMubWluIH0sIHRydWUpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCwgeyAnYXJpYS12YWx1ZW1pbic6IHRoaXMubWluLnRvU3RyaW5nKCksICdhcmlhLXZhbHVlbWF4JzogdGhpcy5tYXgudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmZvcm1hdHRlZFZhbHVlID0gZnVuY3Rpb24gKGRlY2ltYWxzLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyRm9ybWF0KHtcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGRlY2ltYWxzLFxuICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHMsIHVzZUdyb3VwaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkodmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUudmFsaWRhdGVTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVjaW1hbHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBzdGVwOiB0aGlzLmluc3RhbmNlLmdldE51bWJlclBhcnNlcih7IGZvcm1hdDogJ24nIH0pKHRoaXMuZm9ybWF0dGVkVmFsdWUodGhpcy5kZWNpbWFscywgdGhpcy5zdGVwKSkgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5hY3Rpb24gPSBmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmlzRm9jdXNlZCA/IHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyUGFyc2VyKHsgZm9ybWF0OiAnbicgfSkodGhpcy5lbGVtZW50LnZhbHVlKSA6IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMucGVyZm9ybUFjdGlvbih2YWx1ZSwgdGhpcy5zdGVwLCBvcGVyYXRpb24pKTtcbiAgICAgICAgICAgIHRoaXMucmFpc2VDaGFuZ2VFdmVudCgpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuY2hlY2tFcnJvckNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5yZW1vdmVDbGFzcyhbdGhpcy5jb250YWluZXJdLCBFUlJPUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmFkZENsYXNzKFt0aGlzLmNvbnRhaW5lcl0sIEVSUk9SKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ2FyaWEtaW52YWxpZCc6IHRoaXMuaXNWYWxpZFN0YXRlID8gJ2ZhbHNlJyA6ICd0cnVlJyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnZm9jdXMnLCB0aGlzLmZvY3VzSW4sIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2JsdXInLCB0aGlzLmZvY3VzT3V0LCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdrZXlkb3duJywgdGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAna2V5cHJlc3MnLCB0aGlzLmtleVByZXNzSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnY2hhbmdlJywgdGhpcy5jaGFuZ2VIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdwYXN0ZScsIHRoaXMucGFzdGVIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLndpcmVTcGluQnRuRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuc3BpblVwLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hTdGFydEV2ZW50LCB0aGlzLm1vdXNlRG93bk9uU3Bpbm5lciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5zcGluRG93biwgZWoyX2Jhc2VfMS5Ccm93c2VyLnRvdWNoU3RhcnRFdmVudCwgdGhpcy5tb3VzZURvd25PblNwaW5uZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuc3BpblVwLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hFbmRFdmVudCwgdGhpcy5tb3VzZVVwT25TcGlubmVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLnNwaW5Eb3duLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hFbmRFdmVudCwgdGhpcy5tb3VzZVVwT25TcGlubmVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLnNwaW5VcCwgZWoyX2Jhc2VfMS5Ccm93c2VyLnRvdWNoTW92ZUV2ZW50LCB0aGlzLnRvdWNoTW92ZU9uU3Bpbm5lciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5zcGluRG93biwgZWoyX2Jhc2VfMS5Ccm93c2VyLnRvdWNoTW92ZUV2ZW50LCB0aGlzLnRvdWNoTW92ZU9uU3Bpbm5lciwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS51bndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnZm9jdXMnLCB0aGlzLmZvY3VzSW4pO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2JsdXInLCB0aGlzLmZvY3VzT3V0KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdrZXlkb3duJywgdGhpcy5rZXlEb3duSGFuZGxlcik7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAna2V5cHJlc3MnLCB0aGlzLmtleVByZXNzSGFuZGxlcik7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnY2hhbmdlJywgdGhpcy5jaGFuZ2VIYW5kbGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdwYXN0ZScsIHRoaXMucGFzdGVIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnVud2lyZVNwaW5CdG5FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5zcGluVXAsIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaFN0YXJ0RXZlbnQsIHRoaXMubW91c2VEb3duT25TcGlubmVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLnNwaW5Eb3duLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hTdGFydEV2ZW50LCB0aGlzLm1vdXNlRG93bk9uU3Bpbm5lcik7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5zcGluVXAsIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaEVuZEV2ZW50LCB0aGlzLm1vdXNlVXBPblNwaW5uZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuc3BpbkRvd24sIGVqMl9iYXNlXzEuQnJvd3Nlci50b3VjaEVuZEV2ZW50LCB0aGlzLm1vdXNlVXBPblNwaW5uZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuc3BpblVwLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hNb3ZlRXZlbnQsIHRoaXMudG91Y2hNb3ZlT25TcGlubmVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLnNwaW5Eb3duLCBlajJfYmFzZV8xLkJyb3dzZXIudG91Y2hNb3ZlRXZlbnQsIHRoaXMudG91Y2hNb3ZlT25TcGlubmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHZhbHVlOiBudWxsIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBhcnNlZElucHV0ID0gdGhpcy5pbnN0YW5jZS5nZXROdW1iZXJQYXJzZXIoeyBmb3JtYXQ6ICduJyB9KSh0aGlzLmVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShwYXJzZWRJbnB1dCwgZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUucmFpc2VDaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldlZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50QXJncyA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRXZlbnRBcmdzID0geyB2YWx1ZTogdGhpcy52YWx1ZSwgcHJldmlvdXNWYWx1ZTogdGhpcy5wcmV2VmFsdWUgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudEFyZ3MuZXZlbnQgPSBldmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5tZXJnZShldmVudEFyZ3MsIHRoaXMuY2hhbmdlRXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUucGFzdGVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBiZWZvcmVVcGRhdGUgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLm51bWVyaWNSZWdleCgpLnRlc3QoX3RoaXMuZWxlbWVudC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RWxlbWVudFZhbHVlKGJlZm9yZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5rZXlEb3duSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24oSU5DUkVNRU5UKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24oREVDUkVNRU5UKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB2YWx1ZTogbnVsbCB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyUGFyc2VyKHsgZm9ybWF0OiAnbicgfSkodGhpcy5lbGVtZW50LnZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnBlcmZvcm1BY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUsIHN0ZXAsIG9wZXJhdGlvbikge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1cGRhdGVkVmFsdWUgPSBvcGVyYXRpb24gPT09IElOQ1JFTUVOVCA/IHZhbHVlICsgc3RlcCA6IHZhbHVlIC0gc3RlcDtcbiAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHRoaXMuY29ycmVjdFJvdW5kaW5nKHZhbHVlLCBzdGVwLCB1cGRhdGVkVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaWN0TW9kZSA/IHRoaXMudHJpbVZhbHVlKHVwZGF0ZWRWYWx1ZSkgOiB1cGRhdGVkVmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmNvcnJlY3RSb3VuZGluZyA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RlcCwgcmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgZmxvYXRFeHAgPSBuZXcgUmVnRXhwKCdbLC5dKC4qKScpO1xuICAgICAgICAgICAgdmFyIHZhbHVlVGV4dCA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB2YXIgc3RlcFRleHQgPSBzdGVwLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB2YXIgZmxvYXRWYWx1ZSA9IGZsb2F0RXhwLnRlc3QodmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB2YXIgZmxvYXRTdGVwID0gZmxvYXRFeHAudGVzdChzdGVwLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgaWYgKGZsb2F0VmFsdWUgfHwgZmxvYXRTdGVwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlQ291bnQgPSBmbG9hdFZhbHVlID8gZmxvYXRFeHAuZXhlYyh2YWx1ZS50b1N0cmluZygpKVswXS5sZW5ndGggOiAwO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwQ291bnQgPSBmbG9hdFN0ZXAgPyBmbG9hdEV4cC5leGVjKHN0ZXAudG9TdHJpbmcoKSlbMF0ubGVuZ3RoIDogMDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgodmFsdWVDb3VudCwgc3RlcENvdW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPSB0aGlzLnJvdW5kVmFsdWUocmVzdWx0LCBtYXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUucm91bmRWYWx1ZSA9IGZ1bmN0aW9uIChyZXN1bHQsIHByZWNpc2lvbikge1xuICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDA7XG4gICAgICAgICAgICB2YXIgZGl2aWRlID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICo9IGRpdmlkZSwgcmVzdWx0ID0gTWF0aC5yb3VuZChyZXN1bHQpIC8gZGl2aWRlO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS51cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiAhaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVjaW1hbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJvdW5kTnVtYmVyKHZhbHVlLCB0aGlzLmRlY2ltYWxzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlID09PSBudWxsIHx8IGlzTmFOKHZhbHVlKSA/IG51bGwgOiB0aGlzLnN0cmljdE1vZGUgPyB0aGlzLnRyaW1WYWx1ZSh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnJhaXNlQ2hhbmdlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuY2hhbmdlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghKHZhbHVlIHx8IHZhbHVlID09PSAwKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB2YWx1ZTogdmFsdWUgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbnVtYmVyT2ZEZWNpbWFscyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgZGVjaW1hbFBhcnQgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZEZWNpbWFscyA9ICFkZWNpbWFsUGFydCB8fCAhZGVjaW1hbFBhcnQubGVuZ3RoID8gMCA6IGRlY2ltYWxQYXJ0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWNpbWFscyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkRlY2ltYWxzID0gbnVtYmVyT2ZEZWNpbWFscyA8IHRoaXMuZGVjaW1hbHMgPyBudW1iZXJPZkRlY2ltYWxzIDogdGhpcy5kZWNpbWFscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgdmFsdWU6IHRoaXMucm91bmROdW1iZXIodmFsdWUsIG51bWJlck9mRGVjaW1hbHMpIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb2RpZnlUZXh0KCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5tb2RpZnlUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZm9ybWF0TnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRWYWx1ZSA9IHRoaXMuaXNGb2N1c2VkID8gdmFsdWUgOiB0aGlzLmluc3RhbmNlLmdldE51bWJlckZvcm1hdCh0aGlzLmN1bHR1cmVJbmZvKSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRWYWx1ZShlbGVtZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ2FyaWEtdmFsdWVub3cnOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRWYWx1ZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5zZXRFbGVtZW50VmFsdWUgPSBmdW5jdGlvbiAodmFsLCBlbGVtZW50KSB7XG4gICAgICAgICAgICBpbnB1dF8xLklucHV0LnNldFZhbHVlKHZhbCwgKGVsZW1lbnQgPyBlbGVtZW50IDogdGhpcy5lbGVtZW50KSwgdGhpcy5mbG9hdExhYmVsVHlwZSk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS52YWxpZGF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZFN0YXRlID0gISh0aGlzLnZhbHVlID4gdGhpcy5tYXggfHwgdGhpcy52YWx1ZSA8IHRoaXMubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tFcnJvckNsYXNzKCk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5mb3JtYXROdW1iZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZEZWNpbWFscztcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGRlY2ltYWxQYXJ0ID0gY3VycmVudFZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgIG51bWJlck9mRGVjaW1hbHMgPSAhZGVjaW1hbFBhcnQgfHwgIWRlY2ltYWxQYXJ0Lmxlbmd0aCA/IDAgOiBkZWNpbWFsUGFydC5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWNpbWFscyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG51bWJlck9mRGVjaW1hbHMgPSBudW1iZXJPZkRlY2ltYWxzIDwgdGhpcy5kZWNpbWFscyA/IG51bWJlck9mRGVjaW1hbHMgOiB0aGlzLmRlY2ltYWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyRm9ybWF0KHtcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG51bWJlck9mRGVjaW1hbHMsXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBudW1iZXJPZkRlY2ltYWxzLCB1c2VHcm91cGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKHRoaXMudmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS50cmltVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IHRoaXMubWF4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy5taW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5taW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnJvdW5kTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVjaXNpb24pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhciBkZWNpbWFscyA9IHByZWNpc2lvbiB8fCAwO1xuICAgICAgICAgICAgdmFyIHJlc3VsdDEgPSByZXN1bHQudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xuICAgICAgICAgICAgcmVzdWx0ID0gTWF0aC5yb3VuZChOdW1iZXIocmVzdWx0MVswXSArICdlJyArIChyZXN1bHQxWzFdID8gKE51bWJlcihyZXN1bHQxWzFdKSArIGRlY2ltYWxzKSA6IGRlY2ltYWxzKSkpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdDIgPSByZXN1bHQudG9TdHJpbmcoKS5zcGxpdCgnZScpO1xuICAgICAgICAgICAgcmVzdWx0ID0gTnVtYmVyKHJlc3VsdDJbMF0gKyAnZScgKyAocmVzdWx0MlsxXSA/IChOdW1iZXIocmVzdWx0MlsxXSkgLSBkZWNpbWFscykgOiAtZGVjaW1hbHMpKTtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIocmVzdWx0LnRvRml4ZWQoZGVjaW1hbHMpKTtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuY2FuY2VsRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5rZXlQcmVzc0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMCB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGN1cnJlbnRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC53aGljaCk7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCB0aGlzLmVsZW1lbnQuc2VsZWN0aW9uU3RhcnQpICsgY3VycmVudENoYXIgKyB0ZXh0LnN1YnN0cmluZyh0aGlzLmVsZW1lbnQuc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5udW1lcmljUmVnZXgoKS50ZXN0KHRleHQpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUubnVtZXJpY1JlZ2V4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG51bWVyaWNPYmplY3QgPSBlajJfYmFzZV81LmdldE51bWVyaWNPYmplY3QodGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSBlajJfYmFzZV80LmdldFZhbHVlKCdkZWNpbWFsJywgbnVtZXJpY09iamVjdCk7XG4gICAgICAgICAgICB2YXIgZnJhY3Rpb25SdWxlID0gJyonO1xuICAgICAgICAgICAgaWYgKGRlY2ltYWxTZXBhcmF0b3IgPT09IERFQ0lNQUxTRVBBUkFUT1IpIHtcbiAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gJ1xcXFwnICsgZGVjaW1hbFNlcGFyYXRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRlY2ltYWxzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVFJFR0VYUDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRlY2ltYWxzICYmIHRoaXMudmFsaWRhdGVEZWNpbWFsT25UeXBlKSB7XG4gICAgICAgICAgICAgICAgZnJhY3Rpb25SdWxlID0gJ3swLCcgKyB0aGlzLmRlY2ltYWxzICsgJ30nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14oLSk/KCgoXFxcXGQrKCcgKyBkZWNpbWFsU2VwYXJhdG9yICsgJ1xcXFxkJyArIGZyYWN0aW9uUnVsZSArXG4gICAgICAgICAgICAgICAgJyk/KXwoJyArIGRlY2ltYWxTZXBhcmF0b3IgKyAnXFxcXGQnICsgZnJhY3Rpb25SdWxlICsgJykpKT8kJyk7XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLm1vdXNlV2hlZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZGVsdGE7XG4gICAgICAgICAgICB2YXIgcmF3RXZlbnQgPSBldmVudDtcbiAgICAgICAgICAgIGlmIChyYXdFdmVudC53aGVlbERlbHRhKSB7XG4gICAgICAgICAgICAgICAgZGVsdGEgPSByYXdFdmVudC53aGVlbERlbHRhIC8gMTIwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmF3RXZlbnQuZGV0YWlsKSB7XG4gICAgICAgICAgICAgICAgZGVsdGEgPSAtcmF3RXZlbnQuZGV0YWlsIC8gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbihJTkNSRU1FTlQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24oREVDUkVNRU5UKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuZm9jdXNJbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMucmVtb3ZlQ2xhc3MoW3RoaXMuY29udGFpbmVyXSwgRVJST1IpO1xuICAgICAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCh0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdFZhbHVlID0gdGhpcy5mb3JtYXROdW1iZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRWYWx1ZShmb3JtYXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUHJldkZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIGZvcm1hdFZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLkJyb3dzZXIuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnbW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbCcsIHRoaXMubW91c2VXaGVlbCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmZvY3VzT3V0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNQcmV2Rm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzEuQnJvd3Nlci5pc0RldmljZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVfMSA9IHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2Rm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlXzEgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RWxlbWVudFZhbHVlKHZhbHVlXzEsIGVsZV8xKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB2YWx1ZTogbnVsbCB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZElucHV0ID0gdGhpcy5pbnN0YW5jZS5nZXROdW1iZXJQYXJzZXIoeyBmb3JtYXQ6ICduJyB9KSh0aGlzLmVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUocGFyc2VkSW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5Ccm93c2VyLmlzRGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsJywgdGhpcy5tb3VzZVdoZWVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLm1vdXNlRG93bk9uU3Bpbm5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2Rm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5nZXRFbGVtZW50RGF0YShldmVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZXRFbGVtZW50RGF0YShldmVudCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhTUElOVVApKSA/IElOQ1JFTUVOVCA6IERFQ1JFTUVOVDtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0YXJnZXQsICdtb3VzZWxlYXZlJywgdGhpcy5tb3VzZVVwQ2xpY2ssIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy50aW1lT3V0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyBfdGhpcy5pc0NhbGxlZCA9IHRydWU7IF90aGlzLmFjdGlvbihhY3Rpb24pOyB9LCAxNTApO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMubW91c2VVcENsaWNrLCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLnRvdWNoTW92ZU9uU3Bpbm5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoISh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFNQSU5JQ09OKSkpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZU91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5tb3VzZVVwT25TcGlubmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ByZXZGb2N1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLkJyb3dzZXIuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLkJyb3dzZXIuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmdldEVsZW1lbnREYXRhKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFNQSU5VUCkpID8gSU5DUkVNRU5UIDogREVDUkVNRU5UO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRhcmdldCwgJ21vdXNlbGVhdmUnLCB0aGlzLm1vdXNlVXBDbGljayk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDYWxsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0NhbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMubW91c2VVcENsaWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmdldEVsZW1lbnREYXRhID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoKGV2ZW50LndoaWNoICYmIGV2ZW50LndoaWNoID09PSAzKSB8fCAoZXZlbnQuYnV0dG9uICYmIGV2ZW50LmJ1dHRvbiA9PT0gMilcbiAgICAgICAgICAgICAgICB8fCAhdGhpcy5lbmFibGVkIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZU91dCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLm1vdXNlVXBDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZU91dCk7XG4gICAgICAgICAgICB0aGlzLmlzQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5zcGluVXAsICdtb3VzZWxlYXZlJywgdGhpcy5tb3VzZVVwQ2xpY2spO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuc3BpbkRvd24sICdtb3VzZWxlYXZlJywgdGhpcy5tb3VzZVVwQ2xpY2spO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUuaW5jcmVtZW50ID0gZnVuY3Rpb24gKHN0ZXApIHtcbiAgICAgICAgICAgIGlmIChzdGVwID09PSB2b2lkIDApIHsgc3RlcCA9IHRoaXMuc3RlcDsgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnBlcmZvcm1BY3Rpb24odGhpcy52YWx1ZSwgc3RlcCwgSU5DUkVNRU5UKSk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5kZWNyZW1lbnQgPSBmdW5jdGlvbiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IHZvaWQgMCkgeyBzdGVwID0gdGhpcy5zdGVwOyB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMucGVyZm9ybUFjdGlvbih0aGlzLnZhbHVlLCBzdGVwLCBERUNSRU1FTlQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnVud2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2godGhpcy5oaWRkZW5JbnB1dCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93U3BpbkJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHRoaXMudW53aXJlU3BpbkJ0bkV2ZW50cygpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuZGV0YWNoKHRoaXMuc3BpblVwKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmRldGFjaCh0aGlzLnNwaW5Eb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jbG9uZUVsZW1lbnQpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2godGhpcy5jb250YWluZXIpO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZS5nZXRUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmdldFBlcnNpc3REYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGtleUVudGl0eSA9IFsndmFsdWUnXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE9uUGVyc2lzdChrZXlFbnRpdHkpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRWYWw7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3UHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dpZHRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIHsgJ3dpZHRoJzogZWoyX2Jhc2VfNC5mb3JtYXRVbml0KG5ld1Byb3Aud2lkdGgpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nzc0NsYXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0XzEuSW5wdXQuc2V0Q3NzQ2xhc3MobmV3UHJvcC5jc3NDbGFzcywgW3RoaXMuY29udGFpbmVyXSwgb2xkUHJvcC5jc3NDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF8xLklucHV0LnNldEVuYWJsZWQobmV3UHJvcC5lbmFibGVkLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuYWJsZVJ0bCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF8xLklucHV0LnNldEVuYWJsZVJ0bChuZXdQcm9wLmVuYWJsZVJ0bCwgW3RoaXMuY29udGFpbmVyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVhZG9ubHknOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfMS5JbnB1dC5zZXRSZWFkb25seShuZXdQcm9wLnJlYWRvbmx5LCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7ICdhcmlhLXJlYWRvbmx5JzogJ3RydWUnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1yZWFkb25seScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BsYWNlaG9sZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0XzEuSW5wdXQuc2V0UGxhY2Vob2xkZXIobmV3UHJvcC5wbGFjZWhvbGRlciwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdGVwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcCA9IG5ld1Byb3Auc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVTdGVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2hvd1NwaW5CdXR0b24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3Auc2hvd1NwaW5CdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5CdG5DcmVhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2godGhpcy5zcGluVXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuZGV0YWNoKHRoaXMuc3BpbkRvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUobmV3UHJvcC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0VmFsdWUocHJvcCwgZWoyX2Jhc2VfNC5nZXRWYWx1ZShwcm9wLCBuZXdQcm9wKSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlTWluTWF4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmljdE1vZGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHJpY3RNb2RlID0gbmV3UHJvcC5zdHJpY3RNb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xvY2FsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRDdWx0dXJlRnVuYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sMTBuLnNldExvY2FsZSh0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBsYWNlaG9sZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF8xLklucHV0LnNldFBsYWNlaG9sZGVyKHRoaXMucGxhY2Vob2xkZXIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0VmFsdWUocHJvcCwgZWoyX2Jhc2VfNC5nZXRWYWx1ZShwcm9wLCBuZXdQcm9wKSwgdGhpcy5jdWx0dXJlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Zvcm1hdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV80LnNldFZhbHVlKHByb3AsIGVqMl9iYXNlXzQuZ2V0VmFsdWUocHJvcCwgbmV3UHJvcCksIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0Q3VsdHVyZUluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVjaW1hbHMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNpbWFscyA9IG5ld1Byb3AuZGVjaW1hbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ251bWVyaWN0ZXh0Ym94JztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE51bWVyaWNUZXh0Qm94O1xuICAgIH0oZWoyX2Jhc2VfMS5Db21wb25lbnQpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwiY3NzQ2xhc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KC0oTnVtYmVyLk1BWF9WQUxVRSkpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcIm1pblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KE51bWJlci5NQVhfVkFMVUUpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcIm1heFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KDEpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcInN0ZXBcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KG51bGwpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcInBsYWNlaG9sZGVyXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkodHJ1ZSlcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwic2hvd1NwaW5CdXR0b25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwicmVhZG9ubHlcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSh0cnVlKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJlbmFibGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImVuYWJsZVJ0bFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJlbmFibGVQZXJzaXN0ZW5jZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCduMicpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImZvcm1hdFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KG51bGwpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImRlY2ltYWxzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkobnVsbClcbiAgICBdLCBOdW1lcmljVGV4dEJveC5wcm90b3R5cGUsIFwiY3VycmVuY3lcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSh0cnVlKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJzdHJpY3RNb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcInZhbGlkYXRlRGVjaW1hbE9uVHlwZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdOZXZlcicpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImZsb2F0TGFiZWxUeXBlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJjcmVhdGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIE51bWVyaWNUZXh0Qm94LnByb3RvdHlwZSwgXCJkZXN0cm95ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgTnVtZXJpY1RleHRCb3gucHJvdG90eXBlLCBcImNoYW5nZVwiLCB2b2lkIDApO1xuICAgIE51bWVyaWNUZXh0Qm94ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuTm90aWZ5UHJvcGVydHlDaGFuZ2VzXG4gICAgXSwgTnVtZXJpY1RleHRCb3gpO1xuICAgIGV4cG9ydHMuTnVtZXJpY1RleHRCb3ggPSBOdW1lcmljVGV4dEJveDtcbiAgICBleHBvcnRzLm51bWVyaWN0ZXh0Ym94SGVscGVyID0gZWoyX2Jhc2VfMS5DcmVhdGVCdWlsZGVyKE51bWVyaWNUZXh0Qm94KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbnVtZXJpY3RleHRib3gvbnVtZXJpY3RleHRib3guanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBlajJfYmFzZV8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBDTEFTU05BTUVTID0ge1xuICAgICAgICBSVEw6ICdlLXJ0bCcsXG4gICAgICAgIERJU0FCTEU6ICdlLWRpc2FibGVkJyxcbiAgICAgICAgSU5QVVQ6ICdlLWlucHV0JyxcbiAgICAgICAgSU5QVVRHUk9VUDogJ2UtaW5wdXQtZ3JvdXAnLFxuICAgICAgICBGTE9BVElOUFVUOiAnZS1mbG9hdC1pbnB1dCcsXG4gICAgICAgIEZMT0FUTElORTogJ2UtZmxvYXQtbGluZScsXG4gICAgICAgIEZMT0FUVEVYVDogJ2UtZmxvYXQtdGV4dCcsXG4gICAgICAgIENMRUFSSUNPTjogJ2UtY2xlYXItaWNvbicsXG4gICAgICAgIENMRUFSSUNPTkhJREU6ICdlLWNsZWFyLWljb24taGlkZScsXG4gICAgICAgIExBQkVMVE9QOiAnZS1sYWJlbC10b3AnLFxuICAgICAgICBMQUJFTEJPVFRPTTogJ2UtbGFiZWwtYm90dG9tJyxcbiAgICAgICAgTk9GTE9BVExBQkVMOiAnZS1uby1mbG9hdC1sYWJlbCcsXG4gICAgICAgIElOUFVUQ1VTVE9NVEFHOiAnZS1pbnB1dC1jdXN0b20tdGFnJyxcbiAgICAgICAgRkxPQVRDVVNUT01UQUc6ICdlLWZsb2F0LWN1c3RvbS10YWcnXG4gICAgfTtcbiAgICB2YXIgSW5wdXQ7XG4gICAgKGZ1bmN0aW9uIChJbnB1dCkge1xuICAgICAgICB2YXIgcHJpdmF0ZUlucHV0T2JqID0ge1xuICAgICAgICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgICAgICAgYnV0dG9uczogW10sXG4gICAgICAgICAgICBjbGVhckJ1dHRvbjogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVJbnB1dChhcmdzKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRPYmplY3QgPSB7IGNvbnRhaW5lcjogbnVsbCwgYnV0dG9uczogW10sIGNsZWFyQnV0dG9uOiBudWxsIH07XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLmZsb2F0TGFiZWxUeXBlKSB8fCBhcmdzLmZsb2F0TGFiZWxUeXBlID09PSAnTmV2ZXInKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRPYmplY3QuY29udGFpbmVyID0gY3JlYXRlSW5wdXRDb250YWluZXIoYXJncywgQ0xBU1NOQU1FUy5JTlBVVEdST1VQLCBDTEFTU05BTUVTLklOUFVUQ1VTVE9NVEFHLCAnc3BhbicpO1xuICAgICAgICAgICAgICAgIGFyZ3MuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpbnB1dE9iamVjdC5jb250YWluZXIsIGFyZ3MuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbYXJncy5lbGVtZW50XSwgQ0xBU1NOQU1FUy5JTlBVVCk7XG4gICAgICAgICAgICAgICAgaW5wdXRPYmplY3QuY29udGFpbmVyLmFwcGVuZENoaWxkKGFyZ3MuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVGbG9hdGluZ0lucHV0KGFyZ3MsIGlucHV0T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyZ3MuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnZS1pbnB1dC1ncm91cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdlLWlucHV0LWZvY3VzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhcmdzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnZS1pbnB1dC1ncm91cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdlLWlucHV0LWZvY3VzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoYXJncy5wcm9wZXJ0aWVzKSAmJiAhZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLnByb3BlcnRpZXMuc2hvd0NsZWFyQnV0dG9uKSAmJiBhcmdzLnByb3BlcnRpZXMuc2hvd0NsZWFyQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRPYmplY3QuY2xlYXJCdXR0b24gPSBjcmVhdGVDbGVhckJ1dHRvbihhcmdzLmVsZW1lbnQsIGlucHV0T2JqZWN0LmNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0T2JqZWN0LmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5GTE9BVElOUFVUKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtpbnB1dE9iamVjdC5jb250YWluZXJdLCBDTEFTU05BTUVTLklOUFVUR1JPVVApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLmJ1dHRvbnMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRPYmplY3QuYnV0dG9ucy5wdXNoKGFwcGVuZFNwYW4oYXJncy5idXR0b25zW2ldLCBpbnB1dE9iamVjdC5jb250YWluZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dE9iamVjdCA9IHNldFByb3BlcnR5VmFsdWUoYXJncywgaW5wdXRPYmplY3QpO1xuICAgICAgICAgICAgcHJpdmF0ZUlucHV0T2JqID0gaW5wdXRPYmplY3Q7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXRPYmplY3Q7XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQuY3JlYXRlSW5wdXQgPSBjcmVhdGVJbnB1dDtcbiAgICAgICAgZnVuY3Rpb24gX2ZvY3VzRm4oKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBnZXRQYXJlbnROb2RlKHRoaXMpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2UtZmxvYXQtdGV4dCcpWzBdO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbbGFiZWxdLCBDTEFTU05BTUVTLkxBQkVMVE9QKTtcbiAgICAgICAgICAgIGlmIChsYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5MQUJFTEJPVFRPTSkpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLnJlbW92ZUNsYXNzKFtsYWJlbF0sIENMQVNTTkFNRVMuTEFCRUxCT1RUT00pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9ibHVyRm4oKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0aGlzKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0udmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2UtZmxvYXQtdGV4dCcpWzBdO1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5MQUJFTFRPUCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5yZW1vdmVDbGFzcyhbbGFiZWxdLCBDTEFTU05BTUVTLkxBQkVMVE9QKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbbGFiZWxdLCBDTEFTU05BTUVTLkxBQkVMQk9UVE9NKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB3aXJlRmxvYXRpbmdFdmVudHMoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIF9mb2N1c0ZuKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIF9ibHVyRm4pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVud2lyZUZsb2F0aW5nRXZlbnRzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBfZm9jdXNGbik7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBfYmx1ckZuKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVGbG9hdGluZ0lucHV0KGFyZ3MsIGlucHV0T2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgdmFyIGZsb2F0TGluZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBmbG9hdExhYmVsRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChhcmdzLmZsb2F0TGFiZWxUeXBlID09PSAnQXV0bycpIHtcbiAgICAgICAgICAgICAgICB3aXJlRmxvYXRpbmdFdmVudHMoYXJncy5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGlucHV0T2JqZWN0LmNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIgPSBjcmVhdGVJbnB1dENvbnRhaW5lcihhcmdzLCBDTEFTU05BTUVTLkZMT0FUSU5QVVQsIENMQVNTTkFNRVMuRkxPQVRDVVNUT01UQUcsICdkaXYnKTtcbiAgICAgICAgICAgICAgICBhcmdzLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaW5wdXRPYmplY3QuY29udGFpbmVyLCBhcmdzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGFyZ3MuY3VzdG9tVGFnKSkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIuY2xhc3NMaXN0LmFkZChDTEFTU05BTUVTLkZMT0FUQ1VTVE9NVEFHKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXRPYmplY3QuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQ0xBU1NOQU1FUy5GTE9BVElOUFVUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZsb2F0TGluZWxlbWVudCA9IGVqMl9iYXNlXzEuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBDTEFTU05BTUVTLkZMT0FUTElORSB9KTtcbiAgICAgICAgICAgIGZsb2F0TGFiZWxFbGVtZW50ID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgY2xhc3NOYW1lOiBDTEFTU05BTUVTLkZMT0FUVEVYVCB9KTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLmVsZW1lbnQuaWQpICYmIGFyZ3MuZWxlbWVudC5pZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBmbG9hdExhYmVsRWxlbWVudC5pZCA9ICdsYWJlbF8nICsgYXJncy5lbGVtZW50LmlkLnJlcGxhY2UoLyAvZywgJ18nKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmF0dHJpYnV0ZXMoYXJncy5lbGVtZW50LCB7ICdhcmlhLWxhYmVsbGVkYnknOiBmbG9hdExhYmVsRWxlbWVudC5pZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLmVsZW1lbnQucGxhY2Vob2xkZXIpICYmIGFyZ3MuZWxlbWVudC5wbGFjZWhvbGRlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBmbG9hdExhYmVsRWxlbWVudC5pbm5lckhUTUwgPSBhcmdzLmVsZW1lbnQucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICAgICAgYXJncy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLnByb3BlcnRpZXMpICYmICFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGFyZ3MucHJvcGVydGllcy5wbGFjZWhvbGRlcikgJiZcbiAgICAgICAgICAgICAgICBhcmdzLnByb3BlcnRpZXMucGxhY2Vob2xkZXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZmxvYXRMYWJlbEVsZW1lbnQuaW5uZXJIVE1MID0gYXJncy5wcm9wZXJ0aWVzLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmbG9hdExhYmVsRWxlbWVudC5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIuY2xhc3NMaXN0LmFkZChDTEFTU05BTUVTLk5PRkxPQVRMQUJFTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dE9iamVjdC5jb250YWluZXIuYXBwZW5kQ2hpbGQoYXJncy5lbGVtZW50KTtcbiAgICAgICAgICAgIGlucHV0T2JqZWN0LmNvbnRhaW5lci5hcHBlbmRDaGlsZChmbG9hdExpbmVsZW1lbnQpO1xuICAgICAgICAgICAgaW5wdXRPYmplY3QuY29udGFpbmVyLmFwcGVuZENoaWxkKGZsb2F0TGFiZWxFbGVtZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZUxhYmVsU3RhdGUoYXJncy5lbGVtZW50LnZhbHVlLCBmbG9hdExhYmVsRWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoYXJncy5mbG9hdExhYmVsVHlwZSA9PT0gJ0Fsd2F5cycpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmxvYXRMYWJlbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuTEFCRUxCT1RUT00pKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoW2Zsb2F0TGFiZWxFbGVtZW50XSwgQ0xBU1NOQU1FUy5MQUJFTEJPVFRPTSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW2Zsb2F0TGFiZWxFbGVtZW50XSwgQ0xBU1NOQU1FUy5MQUJFTFRPUCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJncy5mbG9hdExhYmVsVHlwZSA9PT0gJ0F1dG8nKSB7XG4gICAgICAgICAgICAgICAgYXJncy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhYmVsU3RhdGUoYXJncy5lbGVtZW50LnZhbHVlLCBmbG9hdExhYmVsRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXJncy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGFiZWxTdGF0ZShhcmdzLmVsZW1lbnQudmFsdWUsIGZsb2F0TGFiZWxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXRQcm9wZXJ0eVZhbHVlKGFyZ3MsIGlucHV0T2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoYXJncy5wcm9wZXJ0aWVzKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhhcmdzLnByb3BlcnRpZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjc3NDbGFzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzQ2xhc3MoYXJncy5wcm9wZXJ0aWVzLmNzc0NsYXNzLCBbaW5wdXRPYmplY3QuY29udGFpbmVyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbmFibGVkKGFyZ3MucHJvcGVydGllcy5lbmFibGVkLCBhcmdzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlUnRsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbmFibGVSdGwoYXJncy5wcm9wZXJ0aWVzLmVuYWJsZVJ0bCwgW2lucHV0T2JqZWN0LmNvbnRhaW5lcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncGxhY2Vob2xkZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyKGFyZ3MucHJvcGVydGllcy5wbGFjZWhvbGRlciwgYXJncy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlYWRvbmx5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWFkb25seShhcmdzLnByb3BlcnRpZXMucmVhZG9ubHksIGFyZ3MuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5wdXRPYmplY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlSWNvblN0YXRlKHZhbHVlLCBidXR0b24pIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoW2J1dHRvbl0sIENMQVNTTkFNRVMuQ0xFQVJJQ09OSElERSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtidXR0b25dLCBDTEFTU05BTUVTLkNMRUFSSUNPTkhJREUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUxhYmVsU3RhdGUodmFsdWUsIGxhYmVsKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtsYWJlbF0sIENMQVNTTkFNRVMuTEFCRUxUT1ApO1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5MQUJFTEJPVFRPTSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5yZW1vdmVDbGFzcyhbbGFiZWxdLCBDTEFTU05BTUVTLkxBQkVMQk9UVE9NKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGFiZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuTEFCRUxUT1ApKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoW2xhYmVsXSwgQ0xBU1NOQU1FUy5MQUJFTFRPUCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW2xhYmVsXSwgQ0xBU1NOQU1FUy5MQUJFTEJPVFRPTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNsZWFyQnV0dG9uKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IGVqMl9iYXNlXzEuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBDTEFTU05BTUVTLkNMRUFSSUNPTiB9KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHByaXZhdGVJbnB1dE9iai5jb250YWluZXIpICYmXG4gICAgICAgICAgICAgICAgcHJpdmF0ZUlucHV0T2JqLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5GTE9BVElOUFVUKSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoW3ByaXZhdGVJbnB1dE9iai5jb250YWluZXJdLCBDTEFTU05BTUVTLklOUFVUR1JPVVApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbYnV0dG9uXSwgQ0xBU1NOQU1FUy5DTEVBUklDT05ISURFKTtcbiAgICAgICAgICAgIHdpcmVDbGVhckJ0bkV2ZW50cyhlbGVtZW50LCBidXR0b24pO1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB3aXJlQ2xlYXJCdG5FdmVudHMoZWxlbWVudCwgYnV0dG9uKSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkRJU0FCTEUpIHx8IGVsZW1lbnQucmVhZE9ubHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmFkZENsYXNzKFtidXR0b25dLCBDTEFTU05BTUVTLkNMRUFSSUNPTkhJREUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUljb25TdGF0ZShlbGVtZW50LnZhbHVlLCBidXR0b24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlSWNvblN0YXRlKGVsZW1lbnQudmFsdWUsIGJ1dHRvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBlajJfYmFzZV8xLmFkZENsYXNzKFtidXR0b25dLCBDTEFTU05BTUVTLkNMRUFSSUNPTkhJREUpOyB9LCAyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVMYWJlbChlbGVtZW50LCBmbG9hdExhYmVsVHlwZSkge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkZMT0FUSU5QVVQpICYmIGZsb2F0TGFiZWxUeXBlID09PSAnQXV0bycpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2UtZmxvYXQtdGV4dCcpWzBdO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxhYmVsU3RhdGUoZWxlbWVudC52YWx1ZSwgbGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUlucHV0Q29udGFpbmVyKGFyZ3MsIGNsYXNzTmFtZSwgdGFnQ2xhc3MsIHRhZykge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChhcmdzLmN1c3RvbVRhZykpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBlajJfYmFzZV8xLmNyZWF0ZUVsZW1lbnQoYXJncy5jdXN0b21UYWcsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGFnQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KHRhZywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUsIGVsZW1lbnQsIGZsb2F0TGFiZWxUeXBlLCBjbGVhckJ1dHRvbikge1xuICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKCghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChmbG9hdExhYmVsVHlwZSkpICYmIGZsb2F0TGFiZWxUeXBlID09PSAnQXV0bycpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUxhYmVsKGVsZW1lbnQsIGZsb2F0TGFiZWxUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChjbGVhckJ1dHRvbikgJiYgY2xlYXJCdXR0b24pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IHBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShDTEFTU05BTUVTLkNMRUFSSUNPTilbMF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUgJiYgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2UtaW5wdXQtZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLnJlbW92ZUNsYXNzKFtidXR0b25dLCBDTEFTU05BTUVTLkNMRUFSSUNPTkhJREUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hZGRDbGFzcyhbYnV0dG9uXSwgQ0xBU1NOQU1FUy5DTEVBUklDT05ISURFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQuc2V0VmFsdWUgPSBzZXRWYWx1ZTtcbiAgICAgICAgZnVuY3Rpb24gc2V0Q3NzQ2xhc3MoY3NzQ2xhc3MsIGVsZW1lbnRzLCBvbGRDbGFzcykge1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKG9sZENsYXNzKSAmJiBvbGRDbGFzcyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLnJlbW92ZUNsYXNzKGVsZW1lbnRzLCBvbGRDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoY3NzQ2xhc3MpICYmIGNzc0NsYXNzICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoZWxlbWVudHMsIGNzc0NsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBJbnB1dC5zZXRDc3NDbGFzcyA9IHNldENzc0NsYXNzO1xuICAgICAgICBmdW5jdGlvbiBzZXRQbGFjZWhvbGRlcihwbGFjZWhvbGRlciwgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50ID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLkZMT0FUSU5QVVQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKHBsYWNlaG9sZGVyKSAmJiBwbGFjZWhvbGRlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENMQVNTTkFNRVMuRkxPQVRURVhUKVswXS50ZXh0Q29udGVudCA9IHBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NOQU1FUy5OT0ZMT0FUTEFCRUwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTTkFNRVMuTk9GTE9BVExBQkVMKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENMQVNTTkFNRVMuRkxPQVRURVhUKVswXS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChwbGFjZWhvbGRlcikgJiYgcGxhY2Vob2xkZXIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyhlbGVtZW50LCB7ICdwbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyLCAnYXJpYS1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIElucHV0LnNldFBsYWNlaG9sZGVyID0gc2V0UGxhY2Vob2xkZXI7XG4gICAgICAgIGZ1bmN0aW9uIHNldFJlYWRvbmx5KGlzUmVhZG9ubHksIGVsZW1lbnQsIGZsb2F0TGFiZWxUeXBlKSB7XG4gICAgICAgICAgICBpZiAoaXNSZWFkb25seSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyhlbGVtZW50LCB7IHJlYWRvbmx5OiAnJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGZsb2F0TGFiZWxUeXBlKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlTGFiZWwoZWxlbWVudCwgZmxvYXRMYWJlbFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIElucHV0LnNldFJlYWRvbmx5ID0gc2V0UmVhZG9ubHk7XG4gICAgICAgIGZ1bmN0aW9uIHNldEVuYWJsZVJ0bChpc1J0bCwgZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGlmIChpc1J0bCkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYWRkQ2xhc3MoZWxlbWVudHMsIENMQVNTTkFNRVMuUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmVtb3ZlQ2xhc3MoZWxlbWVudHMsIENMQVNTTkFNRVMuUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBJbnB1dC5zZXRFbmFibGVSdGwgPSBzZXRFbmFibGVSdGw7XG4gICAgICAgIGZ1bmN0aW9uIHNldEVuYWJsZWQoaXNFbmFibGUsIGVsZW1lbnQsIGZsb2F0TGFiZWxUeXBlKSB7XG4gICAgICAgICAgICB2YXIgZGlzYWJsZWRBdHRycyA9IHsgJ2Rpc2FibGVkJzogJ2Rpc2FibGVkJywgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScgfTtcbiAgICAgICAgICAgIGlmIChpc0VuYWJsZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU05BTUVTLkRJU0FCTEUpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZXMoZGlzYWJsZWRBdHRycywgZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NOQU1FUy5ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICBhZGRBdHRyaWJ1dGVzKGRpc2FibGVkQXR0cnMsIGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8xLmlzTnVsbE9yVW5kZWZpbmVkKGZsb2F0TGFiZWxUeXBlKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlTGFiZWwoZWxlbWVudCwgZmxvYXRMYWJlbFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIElucHV0LnNldEVuYWJsZWQgPSBzZXRFbmFibGVkO1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGVzKGF0dHJzLCBlbGVtZW50KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMoYXR0cnMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudEVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2Rpc2FibGVkJykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NOQU1FUy5ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2Rpc2FibGVkJyAmJiBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLklOUFVUR1JPVVApKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU05BTUVTLkRJU0FCTEUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAncGxhY2Vob2xkZXInICYmIHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuRkxPQVRJTlBVVCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENMQVNTTkFNRVMuRkxPQVRURVhUKVswXS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQucmVtb3ZlQXR0cmlidXRlcyA9IHJlbW92ZUF0dHJpYnV0ZXM7XG4gICAgICAgIGZ1bmN0aW9uIGFkZEF0dHJpYnV0ZXMoYXR0cnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhhdHRycyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50ID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU05BTUVTLkRJU0FCTEUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnZGlzYWJsZWQnICYmIHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTTkFNRVMuSU5QVVRHUk9VUCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTTkFNRVMuRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdwbGFjZWhvbGRlcicgJiYgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5GTE9BVElOUFVUKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ0xBU1NOQU1FUy5GTE9BVFRFWFQpWzBdLnRleHRDb250ZW50ID0gYXR0cnNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIElucHV0LmFkZEF0dHJpYnV0ZXMgPSBhZGRBdHRyaWJ1dGVzO1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVGbG9hdGluZyhpbnB1dCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGlucHV0LmNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChjb250YWluZXIpICYmIGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FUy5GTE9BVElOUFVUKSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dEVsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIENMQVNTTkFNRVMuRkxPQVRURVhUKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB2YXIgY2xlYXJCdXR0b24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmUtY2xlYXItaWNvbicpICE9PSBudWxsO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuZGV0YWNoKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIENMQVNTTkFNRVMuRkxPQVRMSU5FKSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5kZXRhY2goY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xBU1NOQU1FUy5GTE9BVFRFWFQpKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmNsYXNzTGlzdChjb250YWluZXIsIFtDTEFTU05BTUVTLklOUFVUR1JPVVBdLCBbQ0xBU1NOQU1FUy5GTE9BVElOUFVUXSk7XG4gICAgICAgICAgICAgICAgdW53aXJlRmxvYXRpbmdFdmVudHMoaW5wdXRFbGUpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyhpbnB1dEVsZSwgeyAncGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlciB9KTtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZS5jbGFzc0xpc3QuYWRkKENMQVNTTkFNRVMuSU5QVVQpO1xuICAgICAgICAgICAgICAgIGlmICghY2xlYXJCdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGUucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBJbnB1dC5yZW1vdmVGbG9hdGluZyA9IHJlbW92ZUZsb2F0aW5nO1xuICAgICAgICBmdW5jdGlvbiBhZGRGbG9hdGluZyhpbnB1dCwgdHlwZSwgcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBlajJfYmFzZV8xLmNsb3Nlc3QoaW5wdXQsICcuJyArIENMQVNTTkFNRVMuSU5QVVRHUk9VUCk7XG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gJ05ldmVyJykge1xuICAgICAgICAgICAgICAgIHZhciBjdXN0b21UYWcgPSBjb250YWluZXIudGFnTmFtZTtcbiAgICAgICAgICAgICAgICBjdXN0b21UYWcgPSBjdXN0b21UYWcgIT09ICdESVYnICYmIGN1c3RvbVRhZyAhPT0gJ1NQQU4nID8gY3VzdG9tVGFnIDogbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IHsgZWxlbWVudDogaW5wdXQsIGZsb2F0TGFiZWxUeXBlOiB0eXBlLCBjdXN0b21UYWc6IGN1c3RvbVRhZywgcHJvcGVydGllczogeyBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIgfSB9O1xuICAgICAgICAgICAgICAgIHZhciBpY29uRWxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5lLWNsZWFyLWljb24nKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRPYmogPSB7IGNvbnRhaW5lcjogY29udGFpbmVyIH07XG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU05BTUVTLklOUFVUKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVGbG9hdGluZ0lucHV0KGFyZ3MsIGlucHV0T2JqKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5pc051bGxPclVuZGVmaW5lZChpY29uRWxlKSkge1xuICAgICAgICAgICAgICAgICAgICBpY29uRWxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5lLWlucHV0LWdyb3VwLWljb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzEuaXNOdWxsT3JVbmRlZmluZWQoaWNvbkVsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NOQU1FUy5JTlBVVEdST1VQKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbG9hdExpbmUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLicgKyBDTEFTU05BTUVTLkZMT0FUTElORSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbG9hdFRleHQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLicgKyBDTEFTU05BTUVTLkZMT0FUVEVYVCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoaW5wdXQsIGljb25FbGUpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGZsb2F0TGluZSwgaWNvbkVsZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZmxvYXRUZXh0LCBpY29uRWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSW5wdXQuYWRkRmxvYXRpbmcgPSBhZGRGbG9hdGluZztcbiAgICAgICAgZnVuY3Rpb24gYXBwZW5kU3BhbihpY29uQ2xhc3MsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IGVqMl9iYXNlXzEuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBpY29uQ2xhc3MgfSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVTLklOUFVUR1JPVVApKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQ0xBU1NOQU1FUy5JTlBVVEdST1VQKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdlLWRpc2FibGVkJykgJiYgIWNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZS1pbnB1dC1idG4tcmlwcGxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlID0gdGhpcztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2UtaW5wdXQtYnRuLXJpcHBsZScpOyB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICB9XG4gICAgICAgIElucHV0LmFwcGVuZFNwYW4gPSBhcHBlbmRTcGFuO1xuICAgIH0pKElucHV0ID0gZXhwb3J0cy5JbnB1dCB8fCAoZXhwb3J0cy5JbnB1dCA9IHt9KSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2lucHV0L2lucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vaW5wdXRcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBpbnB1dF8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChpbnB1dF8xKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5wdXQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9mb3JtLXZhbGlkYXRvclwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGZvcm1fdmFsaWRhdG9yXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGZvcm1fdmFsaWRhdG9yXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb3JtLXZhbGlkYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIFZBTElEQVRFX0VNQUlMID0gbmV3IFJlZ0V4cCgnXltBLVphLXowLTkuXyUrLV17Myx9QFthLXpBLVpdezMsfShbLl17MX1bYS16QS1aXXsyLDV9JyArXG4gICAgICAgICd8Wy5dezF9W2EtekEtWl17Miw0fVsuXXsxfVthLXpBLVpdezIsNH0pJCcpO1xuICAgIHZhciBWQUxJREFURV9VUkwgPSBuZXcgUmVnRXhwKCdeKChmdHB8aHR0cHxodHRwcyk6XFwvXFwvKT93d3dcXC4oW0Etel17Mix9KVxcLihbQS16XXsyLH0pJCcpO1xuICAgIHZhciBWQUxJREFURV9EQVRFX0lTTyA9IG5ldyBSZWdFeHAoJ14oWzAtOV17NH0pLSgwWzEtOV18MVswLTJdKS0oMFsxLTldfFsxLTJdWzAtOV18M1swLTFdKSQnKTtcbiAgICB2YXIgVkFMSURBVEVfRElHSVRTID0gbmV3IFJlZ0V4cCgnXlswLTldKiQnKTtcbiAgICB2YXIgVkFMSURBVEVfUEhPTkUgPSBuZXcgUmVnRXhwKCdeWytdP1swLTldezksMTN9JCcpO1xuICAgIHZhciBWQUxJREFURV9DUkVESVRDQVJEID0gbmV3IFJlZ0V4cCgnXlxcXFxkezEzLDE2fSQnKTtcbiAgICB2YXIgRXJyb3JPcHRpb247XG4gICAgKGZ1bmN0aW9uIChFcnJvck9wdGlvbikge1xuICAgICAgICBFcnJvck9wdGlvbltFcnJvck9wdGlvbltcIk1lc3NhZ2VcIl0gPSAwXSA9IFwiTWVzc2FnZVwiO1xuICAgICAgICBFcnJvck9wdGlvbltFcnJvck9wdGlvbltcIkxhYmVsXCJdID0gMV0gPSBcIkxhYmVsXCI7XG4gICAgfSkoRXJyb3JPcHRpb24gPSBleHBvcnRzLkVycm9yT3B0aW9uIHx8IChleHBvcnRzLkVycm9yT3B0aW9uID0ge30pKTtcbiAgICB2YXIgRm9ybVZhbGlkYXRvciA9IEZvcm1WYWxpZGF0b3JfMSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhGb3JtVmFsaWRhdG9yLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBGb3JtVmFsaWRhdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnQpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy52YWxpZGF0ZWQgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLmVycm9yUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLmFsbG93U3VibWl0ID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5yZXF1aXJlZCA9ICdyZXF1aXJlZCc7XG4gICAgICAgICAgICBfdGhpcy5pbmZvRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBfdGhpcy5pbnB1dEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgX3RoaXMuc2VsZWN0UXVlcnkgPSAnaW5wdXQ6bm90KFt0eXBlPXJlc2V0XSk6bm90KFt0eXBlPWJ1dHRvbl0pLCBzZWxlY3QsIHRleHRhcmVhJztcbiAgICAgICAgICAgIF90aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUkwuJyxcbiAgICAgICAgICAgICAgICBkYXRlOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZS4nLFxuICAgICAgICAgICAgICAgIGRhdGVJc286ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlICggSVNPICkuJyxcbiAgICAgICAgICAgICAgICBjcmVkaXRjYXJkOiAnUGxlYXNlIGVudGVyIHZhbGlkIGNhcmQgbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBudW1iZXI6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBudW1iZXIuJyxcbiAgICAgICAgICAgICAgICBkaWdpdHM6ICdQbGVhc2UgZW50ZXIgb25seSBkaWdpdHMuJyxcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdQbGVhc2UgZW50ZXIgbm8gbW9yZSB0aGFuIHswfSBjaGFyYWN0ZXJzLicsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnUGxlYXNlIGVudGVyIGF0IGxlYXN0IHswfSBjaGFyYWN0ZXJzLicsXG4gICAgICAgICAgICAgICAgcmFuZ2VMZW5ndGg6ICdQbGVhc2UgZW50ZXIgYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9IGNoYXJhY3RlcnMgbG9uZy4nLFxuICAgICAgICAgICAgICAgIHJhbmdlOiAnUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfS4nLFxuICAgICAgICAgICAgICAgIG1heDogJ1BsZWFzZSBlbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7MH0uJyxcbiAgICAgICAgICAgICAgICBtaW46ICdQbGVhc2UgZW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gezB9LicsXG4gICAgICAgICAgICAgICAgcmVnZXg6ICdQbGVhc2UgZW50ZXIgYSBjb3JyZWN0IHZhbHVlLicsXG4gICAgICAgICAgICAgICAgdGVsOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyLicsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogJ1BsZWFzZSBlbnRlciBhIGNvcnJlY3QgcGF0dGVybiB2YWx1ZS4nLFxuICAgICAgICAgICAgICAgIGVxdWFsVG86ICdQbGVhc2UgZW50ZXIgdGhlIHZhbGlkIG1hdGNoIHRleHQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBlajJfYmFzZV8xLnNlbGVjdChlbGVtZW50LCBkb2N1bWVudCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgaWYgKF90aGlzLmVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgJycpO1xuICAgICAgICAgICAgICAgIF90aGlzLmlucHV0RWxlbWVudHMgPSBlajJfYmFzZV8xLnNlbGVjdEFsbChfdGhpcy5zZWxlY3RRdWVyeSwgX3RoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY3JlYXRlSFRNTDVSdWxlcygpO1xuICAgICAgICAgICAgICAgIF90aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuYWRkUnVsZXMgPSBmdW5jdGlvbiAobmFtZSwgcnVsZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5leHRlbmQodGhpcy5ydWxlc1tuYW1lXSwgcnVsZXMsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucnVsZXNbbmFtZV0gPSBydWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUucmVtb3ZlUnVsZXMgPSBmdW5jdGlvbiAobmFtZSwgcnVsZXMpIHtcbiAgICAgICAgICAgIGlmICghbmFtZSAmJiAhcnVsZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnJ1bGVzW25hbWVdICYmICFydWxlcykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJ1bGVzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWVqMl9iYXNlXzIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5ydWxlc1tuYW1lXSAmJiBydWxlcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJ1bGVzW25hbWVdW3J1bGVzW2ldXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICB2YXIgcnVsZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBydWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlUnVsZXMoc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBydWxlcy5pbmRleE9mKHNlbGVjdGVkKSAhPT0gLTEgJiYgdGhpcy5lcnJvclJ1bGVzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5uYW1lID09PSBzZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB9KS5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHJ1bGVzXzEgPSBydWxlczsgX2kgPCBydWxlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZV8xID0gcnVsZXNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVSdWxlcyhuYW1lXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvclJ1bGVzLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkID0gW107XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGVqMl9iYXNlXzEuc2VsZWN0QWxsKHRoaXMuc2VsZWN0UXVlcnksIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGVsZW1lbnRzXzEgPSBlbGVtZW50czsgX2kgPCBlbGVtZW50c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNfMVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5lcnJvckNsYXNzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQubmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRFbGVtZW50KGlucHV0Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEVycm9yRWxlbWVudChpbnB1dC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTWVzc2FnZShpbnB1dC5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnZhbGlkQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5nZXRJbnB1dEVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSAoZWoyX2Jhc2VfMS5zZWxlY3QoJ1tuYW1lPScgKyBuYW1lICsgJ10nLCB0aGlzLmVsZW1lbnQpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMudW53aXJlRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnJ1bGVzID0ge307XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBlajJfYmFzZV8xLnNlbGVjdEFsbCgnLicgKyB0aGlzLmVycm9yQ2xhc3MgKyAnLCAuJyArIHRoaXMudmFsaWRDbGFzcywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZWxlbWVudHNfMiA9IGVsZW1lbnRzOyBfaSA8IGVsZW1lbnRzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c18yW19pXTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLm9uUHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1Byb3AsIG9sZFByb3ApIHtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5nZXRNb2R1bGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmb3JtVmFsaWRhdG9yJztcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuY3JlYXRlSFRNTDVSdWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkZWZSdWxlcyA9IFsncmVxdWlyZWQnLCAncmVnZXgnLCAncmFuZ2VMZW5ndGgnLCAnbWF4TGVuZ3RoJywgJ21pbkxlbmd0aCcsICdkYXRlSXNvJywgJ2RpZ2l0cycsICdwYXR0ZXJuJyxcbiAgICAgICAgICAgICAgICAnZGF0YS12YWwtcmVxdWlyZWQnLCAndHlwZScsICdkYXRhLXZhbGlkYXRpb24nLCAnbWluJywgJ21heCcsICdyYW5nZScsICdlcXVhbFRvJywgJ2RhdGEtdmFsLW1pbmxlbmd0aC1taW4nLFxuICAgICAgICAgICAgICAgICdkYXRhLXZhbC1lcXVhbHRvLW90aGVyJywgJ2RhdGEtdmFsLW1heGxlbmd0aC1tYXgnLCAnZGF0YS12YWwtcmFuZ2UtbWluJywgJ2RhdGEtdmFsLXJlZ2V4LXBhdHRlcm4nLCAnZGF0YS12YWwtbGVuZ3RoLW1heCcsXG4gICAgICAgICAgICAgICAgJ2RhdGEtdmFsLWNyZWRpdGNhcmQnLCAnZGF0YS12YWwtcGhvbmUnXTtcbiAgICAgICAgICAgIHZhciBhY2NlcHRlZFR5cGVzID0gWydlbWFpbCcsICd1cmwnLCAnZGF0ZScsICdudW1iZXInLCAndGVsJ107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gKHRoaXMuaW5wdXRFbGVtZW50cyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHZhciBhbGxSdWxlID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBkZWZSdWxlc18xID0gZGVmUnVsZXM7IF9iIDwgZGVmUnVsZXNfMS5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ1bGUgPSBkZWZSdWxlc18xW19iXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShydWxlKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChydWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVxdWlyZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIGFsbFJ1bGUsIHJ1bGUsIGlucHV0LnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGF0YS12YWxpZGF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSA9IGlucHV0LmdldEF0dHJpYnV0ZShydWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBhbGxSdWxlLCBydWxlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndHlwZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NlcHRlZFR5cGVzLmluZGV4T2YoaW5wdXQudHlwZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIGFsbFJ1bGUsIGlucHV0LnR5cGUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhbmdlTGVuZ3RoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgYWxsUnVsZSwgcnVsZSwgSlNPTi5wYXJzZShpbnB1dC5nZXRBdHRyaWJ1dGUocnVsZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1YWxUbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IGlucHV0LmdldEF0dHJpYnV0ZShydWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBhbGxSdWxlLCBydWxlLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9uUnVsZShpbnB1dCwgYWxsUnVsZSwgcnVsZSwgaW5wdXQuZ2V0QXR0cmlidXRlKHJ1bGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgYWxsUnVsZSwgcnVsZSwgaW5wdXQuZ2V0QXR0cmlidXRlKHJ1bGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhhbGxSdWxlKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRSdWxlcyhpbnB1dC5uYW1lLCBhbGxSdWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmFubm90YXRpb25SdWxlID0gZnVuY3Rpb24gKGlucHV0LCBydWxlQ29uLCBydWxlTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBhbm5vdGF0aW9uUnVsZSA9IHJ1bGVOYW1lLnNwbGl0KCctJyk7XG4gICAgICAgICAgICB2YXIgcnVsZXNMaXN0ID0gWydyZXF1aXJlZCcsICdjcmVkaXRjYXJkJywgJ3Bob25lJywgJ21heGxlbmd0aCcsICdtaW5sZW5ndGgnLCAncmFuZ2UnLCAncmVnZXgnLCAnZXF1YWx0byddO1xuICAgICAgICAgICAgdmFyIHJ1bGVGaXJzdE5hbWUgPSBhbm5vdGF0aW9uUnVsZVthbm5vdGF0aW9uUnVsZS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBydWxlU2Vjb25kTmFtZSA9IGFubm90YXRpb25SdWxlW2Fubm90YXRpb25SdWxlLmxlbmd0aCAtIDJdO1xuICAgICAgICAgICAgaWYgKHJ1bGVzTGlzdC5pbmRleE9mKHJ1bGVGaXJzdE5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocnVsZUZpcnN0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZXF1aXJlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIHJ1bGVDb24sICdyZXF1aXJlZCcsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjcmVkaXRjYXJkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgcnVsZUNvbiwgJ2NyZWRpdGNhcmQnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGhvbmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBydWxlQ29uLCAndGVsJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocnVsZXNMaXN0LmluZGV4T2YocnVsZVNlY29uZE5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocnVsZVNlY29uZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWF4bGVuZ3RoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgcnVsZUNvbiwgJ21heExlbmd0aCcsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtaW5sZW5ndGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBydWxlQ29uLCAnbWluTGVuZ3RoJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW52YWx1ZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWwtcmFuZ2UtbWluJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4dmFsdWUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsLXJhbmdlLW1heCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZSdWxlKGlucHV0LCBydWxlQ29uLCAncmFuZ2UnLCBbbWludmFsdWUsIG1heHZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXF1YWx0byc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUocnVsZU5hbWUpLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZlJ1bGUoaW5wdXQsIHJ1bGVDb24sICdlcXVhbFRvJywgaWRbaWQubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlZ2V4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmUnVsZShpbnB1dCwgcnVsZUNvbiwgJ3JlZ2V4JywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5kZWZSdWxlID0gZnVuY3Rpb24gKGlucHV0LCBydWxlQ29uLCBydWxlTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBydWxlTmFtZSArICctbWVzc2FnZScpO1xuICAgICAgICAgICAgdmFyIGFubm90YXRpb25NZXNzYWdlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbC0nICsgcnVsZU5hbWUpO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZSwgbWVzc2FnZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhbm5vdGF0aW9uTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlLCBhbm5vdGF0aW9uTWVzc2FnZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBydWxlQ29uW3J1bGVOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS53aXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9ICh0aGlzLmlucHV0RWxlbWVudHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAoRm9ybVZhbGlkYXRvcl8xLmlzQ2hlY2thYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQoaW5wdXQsICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKGlucHV0LCAnY2hhbmdlJywgdGhpcy5jaGFuZ2VIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZChpbnB1dCwgJ2ZvY3Vzb3V0JywgdGhpcy5mb2N1c091dEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQoaW5wdXQsICdrZXl1cCcsIHRoaXMua2V5VXBIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUudW53aXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9ICh0aGlzLmlucHV0RWxlbWVudHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5jbGVhckV2ZW50cyhpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuZm9jdXNPdXRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZm9jdXNvdXQnLCBlKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBpZiAodGhpcy5ydWxlc1tlbGVtZW50Lm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucnVsZXNbZWxlbWVudC5uYW1lXVt0aGlzLnJlcXVpcmVkXSB8fCBlbGVtZW50LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZShlbGVtZW50Lm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnZhbGlkYXRlZC5pbmRleE9mKGVsZW1lbnQubmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkLnB1c2goZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmtleVVwSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2tleXVwJywgZSk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGV4Y2x1ZGVLZXlzID0gWzE2LCAxNywgMTgsIDIwLCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0NSwgMTQ0LCAyMjVdO1xuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDkgJiYgKCF0aGlzLnJ1bGVzW2VsZW1lbnQubmFtZV0gfHwgKHRoaXMucnVsZXNbZWxlbWVudC5uYW1lXSAmJiAhdGhpcy5ydWxlc1tlbGVtZW50Lm5hbWVdW3RoaXMucmVxdWlyZWRdKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZWQuaW5kZXhPZihlbGVtZW50Lm5hbWUpICE9PSAtMSAmJiB0aGlzLnJ1bGVzW2VsZW1lbnQubmFtZV0gJiYgZXhjbHVkZUtleXMuaW5kZXhPZihlLndoaWNoKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlKGVsZW1lbnQubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgZSk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSAhPT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlKGVsZW1lbnQubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZm9ybW5vdmFsaWRhdGUnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dTdWJtaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5jaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJywgZSk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZShlbGVtZW50Lm5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5zdWJtaXRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc3VibWl0JywgZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWxsb3dTdWJtaXQgJiYgIXRoaXMudmFsaWRhdGUoKSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dTdWJtaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGVSdWxlcyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucnVsZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcnVsZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzW25hbWVdKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRFbGVtZW50KG5hbWUpO1xuICAgICAgICAgICAgdGhpcy5nZXRFcnJvckVsZW1lbnQobmFtZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHJ1bGVzXzIgPSBydWxlczsgX2kgPCBydWxlc18yLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBydWxlID0gcnVsZXNfMltfaV07XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKHRoaXMucnVsZXNbbmFtZV1bcnVsZV0sIHJ1bGUpO1xuICAgICAgICAgICAgICAgIHZhciBlcnJvclJ1bGUgPSB7IG5hbWU6IG5hbWUsIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSB9O1xuICAgICAgICAgICAgICAgIHZhciBldmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0TmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5pbnB1dEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQobmFtZSwgcnVsZSkgJiYgIXRoaXMuaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmlnbm9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnJvclJ1bGVzKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yUnVsZXMucHVzaChlcnJvclJ1bGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRoaXMuaW5wdXRFbGVtZW50LmlkICsgJy1pbmZvJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pbmZvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckVsZW1lbnQobmFtZSwgZXJyb3JSdWxlLm1lc3NhZ2UsIHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UoZXJyb3JSdWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudEFyZ3MuZXJyb3JFbGVtZW50ID0gdGhpcy5pbmZvRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRBcmdzLnN0YXR1cyA9ICdmYWlsdXJlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmVycm9yQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudmFsaWRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcigndmFsaWRhdGlvbkNvbXBsZXRlJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUgPT09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1yZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNZXNzYWdlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBldmVudEFyZ3Muc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3ZhbGlkYXRpb25Db21wbGV0ZScsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5pc1ZhbGlkID0gZnVuY3Rpb24gKG5hbWUsIHJ1bGUpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnJ1bGVzW25hbWVdW3J1bGVdO1xuICAgICAgICAgICAgdmFyIHBhcmFtID0gKHBhcmFtcyBpbnN0YW5jZW9mIEFycmF5ICYmIHR5cGVvZiBwYXJhbXNbMV0gPT09ICdzdHJpbmcnKSA/IHBhcmFtc1swXSA6IHBhcmFtcztcbiAgICAgICAgICAgIHZhciBjdXJyZW50UnVsZSA9IHRoaXMucnVsZXNbbmFtZV1bcnVsZV07XG4gICAgICAgICAgICB2YXIgYXJncyA9IHsgdmFsdWU6IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLCBwYXJhbTogcGFyYW0sIGVsZW1lbnQ6IHRoaXMuaW5wdXRFbGVtZW50LCBmb3JtRWxlbWVudDogdGhpcy5lbGVtZW50IH07XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3ZhbGlkYXRpb25CZWdpbicsIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRSdWxlICYmIHR5cGVvZiBjdXJyZW50UnVsZVswXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciBmbiA9IGN1cnJlbnRSdWxlWzBdO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHsgZWxlbWVudDogdGhpcy5pbnB1dEVsZW1lbnQsIHZhbHVlOiB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEZvcm1WYWxpZGF0b3JfMS5pc0NoZWNrYWJsZSh0aGlzLmlucHV0RWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocnVsZSAhPT0gJ3JlcXVpcmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVqMl9iYXNlXzEuc2VsZWN0QWxsKCdpbnB1dFtuYW1lPScgKyBuYW1lICsgJ106Y2hlY2tlZCcsIHRoaXMuZWxlbWVudCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBGb3JtVmFsaWRhdG9yXzEuY2hlY2tWYWxpZGF0b3JbcnVsZV0oYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLmdldEVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIChydWxlVmFsdWUsIHJ1bGUpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gKHJ1bGVWYWx1ZSBpbnN0YW5jZW9mIEFycmF5ICYmIHR5cGVvZiBydWxlVmFsdWVbMV0gPT09ICdzdHJpbmcnKSA/IHJ1bGVWYWx1ZVsxXSA6IHRoaXMuZGVmYXVsdE1lc3NhZ2VzW3J1bGVdO1xuICAgICAgICAgICAgdmFyIGZvcm1hdHMgPSBtZXNzYWdlLm1hdGNoKC97KFxcZCl9L2cpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8yLmlzTnVsbE9yVW5kZWZpbmVkKGZvcm1hdHMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JtYXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJ1bGVWYWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gcnVsZVZhbHVlW2ldIDogcnVsZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKGZvcm1hdHNbaV0sIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuY3JlYXRlRXJyb3JFbGVtZW50ID0gZnVuY3Rpb24gKG5hbWUsIG1lc3NhZ2UsIGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgZXJyb3JFbGVtZW50ID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KHRoaXMuZXJyb3JFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmVycm9yQ2xhc3MsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogbmFtZSB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yT3B0aW9uID09PSBFcnJvck9wdGlvbi5NZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5lcnJvckNsYXNzKTtcbiAgICAgICAgICAgICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZS1tZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgZXJyb3JFbGVtZW50ID0gZWoyX2Jhc2VfMS5jcmVhdGVFbGVtZW50KHRoaXMuZXJyb3JDb250YWluZXIsIHsgY2xhc3NOYW1lOiB0aGlzLmVycm9yQ2xhc3MsIGlubmVySFRNTDogZXJyb3JFbGVtZW50Lm91dGVySFRNTCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yRWxlbWVudC5pZCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hbWUgKyAnLWluZm8nO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12YWxtc2ctZm9yPVwiJyArIGlucHV0LmlkICsgJ1wiXScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhbG1zZy1mb3I9XCInICsgaW5wdXQuaWQgKyAnXCJdJykuYXBwZW5kQ2hpbGQoZXJyb3JFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tc2ctY29udGFpbmVyaWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJJZCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1tc2ctY29udGFpbmVyaWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgZGl2RWxlbWVudCA9IGlucHV0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBjb250YWluZXJJZCk7XG4gICAgICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChlcnJvckVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdXN0b21QbGFjZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tUGxhY2VtZW50LmNhbGwodGhpcywgdGhpcy5pbnB1dEVsZW1lbnQsIGVycm9yRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlcnJvckVsZW1lbnQsIHRoaXMuaW5wdXRFbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JFbGVtZW50KG5hbWUpO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZWQucHVzaChuYW1lKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tSZXF1aXJlZChuYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuZ2V0RXJyb3JFbGVtZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5mb0VsZW1lbnQgPSBlajJfYmFzZV8xLnNlbGVjdCh0aGlzLmVycm9yRWxlbWVudCArICcuJyArIHRoaXMuZXJyb3JDbGFzcywgdGhpcy5pbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5mb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9FbGVtZW50ID0gZWoyX2Jhc2VfMS5zZWxlY3QodGhpcy5lcnJvckVsZW1lbnQgKyAnLicgKyB0aGlzLmVycm9yQ2xhc3MgKyAnW2Zvcj1cIicgKyBuYW1lICsgJ1wiXScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5mb0VsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLnJlbW92ZUVycm9yUnVsZXMgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVycm9yUnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcnVsZSA9IHRoaXMuZXJyb3JSdWxlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JSdWxlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZS5zaG93TWVzc2FnZSA9IGZ1bmN0aW9uIChlcnJvclJ1bGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5mb0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB0aGlzLmluZm9FbGVtZW50LmlubmVySFRNTCA9IGVycm9yUnVsZS5tZXNzYWdlO1xuICAgICAgICAgICAgdGhpcy5jaGVja1JlcXVpcmVkKGVycm9yUnVsZS5uYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuaGlkZU1lc3NhZ2UgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5mb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnJvclJ1bGVzKG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy52YWxpZENsYXNzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZXJyb3JDbGFzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUuY2hlY2tSZXF1aXJlZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucnVsZXNbbmFtZV1bdGhpcy5yZXF1aXJlZF0gJiYgIXRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1lc3NhZ2UobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1WYWxpZGF0b3IuaXNDaGVja2FibGUgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dFR5cGUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dFR5cGUgJiYgKGlucHV0VHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBpbnB1dFR5cGUgPT09ICdyYWRpbycgfHwgaW5wdXRUeXBlID09PSAnc3VibWl0Jyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtVmFsaWRhdG9yO1xuICAgIH0oZWoyX2Jhc2VfMS5CYXNlKSk7XG4gICAgRm9ybVZhbGlkYXRvci5jaGVja1ZhbGlkYXRvciA9IHtcbiAgICAgICAgcmVxdWlyZWQ6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWw6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBWQUxJREFURV9FTUFJTC50ZXN0KG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFZBTElEQVRFX1VSTC50ZXN0KG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVJc286IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBWQUxJREFURV9EQVRFX0lTTy50ZXN0KG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRlbDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFZBTElEQVRFX1BIT05FLnRlc3Qob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGl0Y2FyZDogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFZBTElEQVRFX0NSRURJVENBUkQudGVzdChvcHRpb24udmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBudW1iZXI6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAhaXNOYU4oTnVtYmVyKG9wdGlvbi52YWx1ZSkpICYmIG9wdGlvbi52YWx1ZS5pbmRleE9mKCcgJykgPT09IC0xO1xuICAgICAgICB9LFxuICAgICAgICBkaWdpdHM6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBWQUxJREFURV9ESUdJVFMudGVzdChvcHRpb24udmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBtYXhMZW5ndGg6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWUubGVuZ3RoIDw9IG9wdGlvbi5wYXJhbTtcbiAgICAgICAgfSxcbiAgICAgICAgbWluTGVuZ3RoOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlLmxlbmd0aCA+PSBvcHRpb24ucGFyYW07XG4gICAgICAgIH0sXG4gICAgICAgIHJhbmdlTGVuZ3RoOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW0gPSBvcHRpb24ucGFyYW07XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlLmxlbmd0aCA+PSBwYXJhbVswXSAmJiBvcHRpb24udmFsdWUubGVuZ3RoIDw9IHBhcmFtWzFdO1xuICAgICAgICB9LFxuICAgICAgICByYW5nZTogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgdmFyIHBhcmFtID0gb3B0aW9uLnBhcmFtO1xuICAgICAgICAgICAgcmV0dXJuICFpc05hTihOdW1iZXIob3B0aW9uLnZhbHVlKSkgJiYgTnVtYmVyKG9wdGlvbi52YWx1ZSkgPj0gcGFyYW1bMF0gJiYgTnVtYmVyKG9wdGlvbi52YWx1ZSkgPD0gcGFyYW1bMV07XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGU6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAhaXNOYU4obmV3IERhdGUob3B0aW9uLnZhbHVlKS5nZXRUaW1lKCkpO1xuICAgICAgICB9LFxuICAgICAgICBtYXg6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKG9wdGlvbi52YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICtvcHRpb24udmFsdWUgPD0gb3B0aW9uLnBhcmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKG9wdGlvbi52YWx1ZSkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9uLnBhcmFtKSkpLmdldFRpbWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWluOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcihvcHRpb24udmFsdWUpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiArb3B0aW9uLnZhbHVlID49IG9wdGlvbi5wYXJhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShvcHRpb24udmFsdWUpLmdldFRpbWUoKSA+PSBuZXcgRGF0ZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbi5wYXJhbSkpKS5nZXRUaW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2V4OiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChvcHRpb24ucGFyYW0pLnRlc3Qob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXF1YWxUbzogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgdmFyIGNvbXBhcmVUbyA9IG9wdGlvbi5mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbi5wYXJhbSk7XG4gICAgICAgICAgICBvcHRpb24ucGFyYW0gPSBjb21wYXJlVG8udmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLnBhcmFtID09PSBvcHRpb24udmFsdWU7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5Qcm9wZXJ0eSgnZS1oaWRkZW4nKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcImlnbm9yZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLlByb3BlcnR5KHt9KVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcInJ1bGVzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuUHJvcGVydHkoJ2UtZXJyb3InKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcImVycm9yQ2xhc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5Qcm9wZXJ0eSgnZS12YWxpZCcpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwidmFsaWRDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLlByb3BlcnR5KCdsYWJlbCcpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwiZXJyb3JFbGVtZW50XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuUHJvcGVydHkoJ2RpdicpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwiZXJyb3JDb250YWluZXJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5Qcm9wZXJ0eShFcnJvck9wdGlvbi5MYWJlbClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJlcnJvck9wdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJmb2N1c291dFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJrZXl1cFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJjbGlja1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJjaGFuZ2VcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwic3VibWl0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIEZvcm1WYWxpZGF0b3IucHJvdG90eXBlLCBcInZhbGlkYXRpb25CZWdpblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBGb3JtVmFsaWRhdG9yLnByb3RvdHlwZSwgXCJ2YWxpZGF0aW9uQ29tcGxldGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgRm9ybVZhbGlkYXRvci5wcm90b3R5cGUsIFwiY3VzdG9tUGxhY2VtZW50XCIsIHZvaWQgMCk7XG4gICAgRm9ybVZhbGlkYXRvciA9IEZvcm1WYWxpZGF0b3JfMSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLk5vdGlmeVByb3BlcnR5Q2hhbmdlc1xuICAgIF0sIEZvcm1WYWxpZGF0b3IpO1xuICAgIGV4cG9ydHMuRm9ybVZhbGlkYXRvciA9IEZvcm1WYWxpZGF0b3I7XG4gICAgdmFyIEZvcm1WYWxpZGF0b3JfMTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9ybS12YWxpZGF0b3IvZm9ybS12YWxpZGF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==