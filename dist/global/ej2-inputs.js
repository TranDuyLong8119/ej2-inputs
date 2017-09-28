/*!
*  filename: ej2-inputs.js
*  version : 1.0.19
*  Copyright Syncfusion Inc. 2001 - 2017. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

this["ej"] = this["ej"] || {}; this["ej"]["numerictextboxModule"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createInstance;
/* harmony export (immutable) */ __webpack_exports__["b"] = setImmediate;
/* harmony export (immutable) */ __webpack_exports__["c"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["d"] = setValue;
/* harmony export (immutable) */ __webpack_exports__["e"] = deleteObject;
/* harmony export (immutable) */ __webpack_exports__["f"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["g"] = getEnumValue;
/* harmony export (immutable) */ __webpack_exports__["h"] = merge;
/* harmony export (immutable) */ __webpack_exports__["i"] = extend;
/* harmony export (immutable) */ __webpack_exports__["j"] = isNullOrUndefined;
/* harmony export (immutable) */ __webpack_exports__["k"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["l"] = getUniqueID;
/* harmony export (immutable) */ __webpack_exports__["m"] = debounce;
/* harmony export (immutable) */ __webpack_exports__["n"] = queryParams;
/* harmony export (immutable) */ __webpack_exports__["o"] = isObjectArray;
/* harmony export (immutable) */ __webpack_exports__["p"] = compareElementParent;
/* harmony export (immutable) */ __webpack_exports__["q"] = throwError;
/* harmony export (immutable) */ __webpack_exports__["r"] = print;
/* harmony export (immutable) */ __webpack_exports__["s"] = formatUnit;
/* harmony export (immutable) */ __webpack_exports__["t"] = getInstance;
/* harmony export (immutable) */ __webpack_exports__["u"] = addInstance;
var instances = 'ej2_instances';
var uid = 0;
function createInstance(classFunction, params) {
    var arrayParam = params;
    arrayParam.unshift(undefined);
    return new (Function.prototype.bind.apply(classFunction, arrayParam));
}
function setImmediate(handler) {
    var unbind;
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    intCrypto.getRandomValues(num);
    var secret = 'ej2' + combineArray(num);
    var messageHandler = function (event) {
        if (event.source === window && typeof event.data === 'string' && event.data.length <= 32 && event.data === secret) {
            handler();
            unbind();
        }
    };
    window.addEventListener('message', messageHandler, false);
    window.postMessage(secret, '*');
    return unbind = function () {
        window.removeEventListener('message', messageHandler);
    };
}
function getValue(nameSpace, obj) {
    var value = obj;
    var splits = nameSpace.split('.');
    for (var i = 0; i < splits.length && !isUndefined(value); i++) {
        value = value[splits[i]];
    }
    return value;
}
function setValue(nameSpace, value, obj) {
    var keys = nameSpace.split('.');
    var start = obj || {};
    var fromObj = start;
    var i;
    var length = keys.length;
    var key;
    for (i = 0; i < length; i++) {
        key = keys[i];
        if (i + 1 === length) {
            fromObj[key] = value === undefined ? {} : value;
        }
        else if (isNullOrUndefined(fromObj[key])) {
            fromObj[key] = {};
        }
        fromObj = fromObj[key];
    }
    return start;
}
function deleteObject(obj, key) {
    delete obj[key];
}
function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}
function getEnumValue(enumObject, enumValue) {
    return enumObject[enumValue];
}
function merge(source, destination) {
    if (!isNullOrUndefined(destination)) {
        var temrObj = source;
        var tempProp = destination;
        var keys = Object.keys(destination);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            temrObj[key] = tempProp[key];
        }
    }
}
function extend(copied, first, second, deep) {
    var result = copied || {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!arguments_1[i]) {
            return "continue";
        }
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copy = obj1[key];
            var clone;
            if (deep && isObject(copy)) {
                clone = isObject(src) ? src : {};
                result[key] = extend({}, clone, copy, true);
            }
            else {
                result[key] = copy;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
function isUndefined(value) {
    return ('undefined' === typeof value);
}
function getUniqueID(definedName) {
    return definedName + '_' + uid++;
}
function debounce(eventFunction, delay) {
    var out;
    return function () {
        var _this = this;
        var args = arguments;
        var later = function () {
            out = null;
            return eventFunction.apply(_this, args);
        };
        clearTimeout(out);
        out = setTimeout(later, delay);
    };
}
function queryParams(data) {
    var array = [];
    var keys = Object.keys(data);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        array.push(encodeURIComponent(key) + '=' + encodeURIComponent('' + data[key]));
    }
    return array.join('&');
}
function isObjectArray(value) {
    var parser = Object.prototype.toString;
    if (parser.call(value) === '[object Array]') {
        if (parser.call(value[0]) === '[object Object]') {
            return true;
        }
    }
    return false;
}
function compareElementParent(child, parent) {
    var node = child;
    if (node === parent) {
        return true;
    }
    else if (node === document || !node) {
        return false;
    }
    else {
        return compareElementParent(node.parentNode, parent);
    }
}
function throwError(message) {
    try {
        throw new Error(message);
    }
    catch (e) {
        throw e.message + '\n' + e.stack;
    }
}
function print(element, printWindow) {
    var div = document.createElement('div');
    var links = [].slice.call(document.getElementsByTagName('head')[0].querySelectorAll('link, style'));
    var reference = '';
    if (isNullOrUndefined(printWindow)) {
        printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
    }
    div.appendChild(element.cloneNode(true));
    for (var i = 0, len = links.length; i < len; i++) {
        reference += links[i].outerHTML;
    }
    printWindow.document.write('<!DOCTYPE html> <html><head>' + reference + '</head><body>' + div.innerHTML +
        '<script> (function() { window.ready = true; })(); </script>' + '</body></html>');
    printWindow.document.close();
    printWindow.focus();
    var interval = setInterval(function () {
        if (printWindow.ready) {
            printWindow.print();
            printWindow.close();
            clearInterval(interval);
        }
    }, 500);
    return printWindow;
}
function formatUnit(value) {
    var result = value + '';
    if (result === 'auto' || result.indexOf('%') !== -1 || result.indexOf('px') !== -1) {
        return result;
    }
    return result + 'px';
}
function getInstance(element, component) {
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        for (var _i = 0, _a = elem[instances]; _i < _a.length; _i++) {
            var inst = _a[_i];
            if (inst instanceof component) {
                return inst;
            }
        }
    }
    return null;
}
function addInstance(element, instance) {
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        elem[instances].push(instance);
    }
    else {
        elem[instances] = [instance];
    }
}
function combineArray(num) {
    var ret = '';
    for (var i = 0; i < 5; i++) {
        ret += (i ? ',' : '') + num[i];
    }
    return ret;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observer__ = __webpack_require__(11);



var Base = (function () {
    function Base(options, element) {
        this.isProtectedOnChange = true;
        this.properties = {};
        this.changedProperties = {};
        this.oldProperties = {};
        this.refreshing = false;
        this.finalUpdate = function () { };
        this.childChangedProperties = {};
        this.modelObserver = new __WEBPACK_IMPORTED_MODULE_2__observer__["a" /* Observer */](this);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(element)) {
            if ('string' === typeof (element)) {
                this.element = document.querySelector(element);
            }
            else {
                this.element = element;
            }
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.element)) {
                this.isProtectedOnChange = false;
                this.addInstance();
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(options)) {
            this.setProperties(options, true);
        }
        this.isDestroyed = false;
    }
    Base.prototype.setProperties = function (prop, muteOnChange) {
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = !!muteOnChange;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, prop);
        if (muteOnChange !== true) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this.changedProperties, prop);
            this.dataBind();
        }
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.isProtectedOnChange = prevDetection;
    };
    ;
    Base.callChildDataBind = function (obj, parent) {
        var keys = Object.keys(obj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (parent[key] instanceof Array) {
                for (var _a = 0, _b = parent[key]; _a < _b.length; _a++) {
                    var obj_1 = _b[_a];
                    if (obj_1.dataBind !== undefined) {
                        obj_1.dataBind();
                    }
                }
            }
            else {
                parent[key].dataBind();
            }
        }
    };
    Base.prototype.clearChanges = function () {
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.childChangedProperties = {};
    };
    Base.prototype.dataBind = function () {
        Base.callChildDataBind(this.childChangedProperties, this);
        if (Object.getOwnPropertyNames(this.changedProperties).length) {
            var prevDetection = this.isProtectedOnChange;
            var newChanges = this.changedProperties;
            var oldChanges = this.oldProperties;
            this.clearChanges();
            this.isProtectedOnChange = true;
            this.onPropertyChanged(newChanges, oldChanges);
            this.isProtectedOnChange = prevDetection;
        }
    };
    ;
    Base.prototype.saveChanges = function (key, newValue, oldValue) {
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        this.finalUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* setImmediate */])(this.dataBind.bind(this));
    };
    ;
    Base.prototype.addEventListener = function (eventName, handler) {
        this.modelObserver.on(eventName, handler);
    };
    Base.prototype.removeEventListener = function (eventName, handler) {
        this.modelObserver.off(eventName, handler);
    };
    Base.prototype.trigger = function (eventName, eventProp) {
        if (this.isDestroyed !== true) {
            var prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            this.modelObserver.notify(eventName, eventProp);
            this.isProtectedOnChange = prevDetection;
        }
    };
    Base.prototype.addInstance = function () {
        var moduleClass = 'e-' + this.getModuleName().toLowerCase();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["b" /* addClass */])([this.element], ['e-control', moduleClass]);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.element.ej2_instances)) {
            this.element.ej2_instances.push(this);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])('ej2_instances', [this], this.element);
        }
    };
    Base.prototype.destroy = function () {
        var _this = this;
        this.element.ej2_instances =
            this.element.ej2_instances.filter(function (i) { return i !== _this; });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["c" /* removeClass */])([this.element], ['e-' + this.getModuleName()]);
        if (this.element.ej2_instances.length === 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["c" /* removeClass */])([this.element], ['e-control']);
        }
        this.clearChanges();
        this.modelObserver.destroy();
        this.isDestroyed = true;
    };
    return Base;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createElement;
/* harmony export (immutable) */ __webpack_exports__["b"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["d"] = isVisible;
/* harmony export (immutable) */ __webpack_exports__["e"] = prepend;
/* harmony export (immutable) */ __webpack_exports__["f"] = append;
/* harmony export (immutable) */ __webpack_exports__["g"] = detach;
/* harmony export (immutable) */ __webpack_exports__["h"] = remove;
/* harmony export (immutable) */ __webpack_exports__["i"] = attributes;
/* harmony export (immutable) */ __webpack_exports__["j"] = select;
/* harmony export (immutable) */ __webpack_exports__["k"] = selectAll;
/* harmony export (immutable) */ __webpack_exports__["l"] = closest;
/* harmony export (immutable) */ __webpack_exports__["m"] = siblings;
/* harmony export (immutable) */ __webpack_exports__["n"] = getAttributeOrDefault;
/* harmony export (immutable) */ __webpack_exports__["o"] = setStyleAttribute;
/* harmony export (immutable) */ __webpack_exports__["p"] = classList;
/* harmony export (immutable) */ __webpack_exports__["q"] = matches;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


function createElement(tagName, properties) {
    var element = document.createElement(tagName);
    if (typeof (properties) === 'undefined') {
        return element;
    }
    element.innerHTML = (properties.innerHTML ? properties.innerHTML : '');
    if (properties.className !== undefined) {
        element.className = properties.className;
    }
    if (properties.id !== undefined) {
        element.id = properties.id;
    }
    if (properties.styles !== undefined) {
        element.setAttribute('style', properties.styles);
    }
    if (properties.attrs !== undefined) {
        attributes(element, properties.attrs);
    }
    return element;
}
function addClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        for (var _b = 0, classList_1 = classList; _b < classList_1.length; _b++) {
            var className = classList_1[_b];
            if (!ele.classList.contains(className)) {
                ele.classList.add(className);
            }
        }
    }
    return elements;
}
function removeClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        if (ele.className !== '') {
            for (var _b = 0, classList_2 = classList; _b < classList_2.length; _b++) {
                var className = classList_2[_b];
                ele.classList.remove(className);
            }
        }
    }
    return elements;
}
function getClassList(classes) {
    var classList = [];
    if (typeof classes === 'string') {
        classList.push(classes);
    }
    else {
        classList = classes;
    }
    return classList;
}
function isVisible(element) {
    var ele = element;
    return (ele.style.visibility === '' && ele.offsetWidth > 0);
}
function prepend(fromElements, toElement) {
    var docFrag = document.createDocumentFragment();
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
        var ele = _a[_i];
        docFrag.appendChild(ele);
    }
    toElement.insertBefore(docFrag, toElement.firstElementChild);
    return fromElements;
}
function append(fromElements, toElement) {
    var docFrag = document.createDocumentFragment();
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
        var ele = _a[_i];
        docFrag.appendChild(ele);
    }
    toElement.appendChild(docFrag);
    return fromElements;
}
function detach(element) {
    var parentNode = element.parentNode;
    return parentNode.removeChild(element);
}
function remove(element) {
    var parentNode = element.parentNode;
    __WEBPACK_IMPORTED_MODULE_0__event_handler__["a" /* EventHandler */].clearEvents(element);
    parentNode.removeChild(element);
}
function attributes(element, attributes) {
    var keys = Object.keys(attributes);
    var ele = element;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        ele.setAttribute(key, attributes[key]);
    }
    return ele;
}
function select(selector, context) {
    if (context === void 0) { context = document; }
    return context.querySelector(selector);
}
function selectAll(selector, context) {
    if (context === void 0) { context = document; }
    var nodeList = context.querySelectorAll(selector);
    return nodeList;
}
function closest(element, selector) {
    var el = element;
    if (typeof el.closest === 'function') {
        return el.closest(selector);
    }
    while (el && el.nodeType === 1) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentNode;
    }
    return null;
}
function siblings(element) {
    var siblings = [];
    var childNodes = Array.prototype.slice.call(element.parentNode.childNodes);
    for (var _i = 0, childNodes_1 = childNodes; _i < childNodes_1.length; _i++) {
        var curNode = childNodes_1[_i];
        if (curNode.nodeType === Node.ELEMENT_NODE && element !== curNode) {
            siblings.push(curNode);
        }
    }
    return siblings;
}
function getAttributeOrDefault(element, property, value) {
    var attrVal = element.getAttribute(property);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["j" /* isNullOrUndefined */])(attrVal)) {
        element.setAttribute(property, value.toString());
        attrVal = value;
    }
    return attrVal;
}
function setStyleAttribute(element, attrs) {
    if (attrs !== undefined) {
        Object.keys(attrs).forEach(function (key) {
            element.style[key] = attrs[key];
        });
    }
}
function classList(element, addClasses, removeClasses) {
    addClass([element], addClasses);
    removeClass([element], removeClasses);
}
function matches(element, selector) {
    var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
    if (matches) {
        return matches.call(element, selector);
    }
    else {
        return [].indexOf.call(document.querySelectorAll(selector), element) !== -1;
    }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Property;
/* harmony export (immutable) */ __webpack_exports__["b"] = Complex;
/* harmony export (immutable) */ __webpack_exports__["c"] = ComplexFactory;
/* harmony export (immutable) */ __webpack_exports__["d"] = Collection;
/* harmony export (immutable) */ __webpack_exports__["e"] = CollectionFactory;
/* harmony export (immutable) */ __webpack_exports__["f"] = Event;
/* harmony export (immutable) */ __webpack_exports__["g"] = NotifyPropertyChanges;
/* harmony export (immutable) */ __webpack_exports__["h"] = CreateBuilder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

function getObject(instance, curKey, defaultValue, type) {
    if (!instance.properties.hasOwnProperty(curKey)) {
        instance.properties[curKey] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(type, [instance, curKey, defaultValue]);
    }
    return instance.properties[curKey];
}
function getObjectArray(instance, curKey, defaultValue, type, isSetter, isFactory) {
    var result = [];
    var len = defaultValue.length;
    for (var i = 0; i < len; i++) {
        var curType = type;
        if (isFactory) {
            curType = type(defaultValue[i]);
        }
        if (isSetter) {
            var inst = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(curType, [instance, curKey, {}, true]);
            inst.setProperties(defaultValue[i], true);
            result.push(inst);
        }
        else {
            result.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(curType, [instance, curKey, defaultValue[i], true]));
        }
    }
    return result;
}
function propertyGetter(defaultValue, curKey) {
    return function () {
        if (!this.properties.hasOwnProperty(curKey)) {
            this.properties[curKey] = defaultValue;
        }
        return this.properties[curKey];
    };
}
function propertySetter(defaultValue, curKey) {
    return function (newValue) {
        if (this.properties[curKey] !== newValue) {
            var oldVal = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
            this.saveChanges(curKey, newValue, oldVal);
            this.properties[curKey] = newValue;
        }
    };
}
function complexGetter(defaultValue, curKey, type) {
    return function () {
        return getObject(this, curKey, defaultValue, type);
    };
}
function complexSetter(defaultValue, curKey, type) {
    return function (newValue) {
        getObject(this, curKey, defaultValue, type).setProperties(newValue);
    };
}
function complexFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        return getObject(this, curKey, defaultValue, curType);
    };
}
function complexFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var curType = type(newValue);
        getObject(this, curKey, defaultValue, curType).setProperties(newValue);
    };
}
function complexArrayGetter(defaultValue, curKey, type) {
    return function () {
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, type, false);
            this.properties[curKey] = defCollection;
        }
        return this.properties[curKey];
    };
}
function complexArraySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false);
        var newValCollection = getObjectArray(this, curKey, newValue, type, true);
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
function complexArrayFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false, true);
        var newValCollection = getObjectArray(this, curKey, newValue, type, true, true);
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
function complexArrayFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, curType, false);
            this.properties[curKey] = defCollection;
        }
        return this.properties[curKey];
    };
}
function Property(defaultValue) {
    return function (target, key) {
        var propertyDescriptor = {
            set: propertySetter(defaultValue, key),
            get: propertyGetter(defaultValue, key),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'prop', defaultValue);
    };
}
function Complex(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexSetter(defaultValue, key, type),
            get: complexGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', defaultValue, type);
    };
}
function ComplexFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexFactorySetter({}, key, type),
            get: complexFactoryGetter({}, key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', {}, type);
    };
}
function Collection(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArraySetter(defaultValue, key, type),
            get: complexArrayGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', defaultValue, type);
    };
}
function CollectionFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArrayFactorySetter([], key, type),
            get: complexArrayFactoryGetter([], key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', {}, type);
    };
}
function Event() {
    return function (target, key) {
        var eventDescriptor = {
            set: function (newValue) {
                var oldValue = this.properties[key];
                if (oldValue !== newValue) {
                    var finalContext = getParentContext(this, key);
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(oldValue) === false) {
                        finalContext.context.removeEventListener(finalContext.prefix, oldValue);
                    }
                    finalContext.context.addEventListener(finalContext.prefix, newValue);
                    this.properties[key] = newValue;
                }
            },
            get: propertyGetter(undefined, key),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, eventDescriptor);
        addPropertyCollection(target, key, 'event');
    };
}
function NotifyPropertyChanges(classConstructor) {
}
function addPropertyCollection(target, key, propertyType, defaultValue, type) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(target.propList)) {
        target.propList = {
            props: [],
            complexProps: [],
            colProps: [],
            events: [],
            propNames: [],
            complexPropNames: [],
            colPropNames: [],
            eventNames: []
        };
    }
    target.propList[propertyType + 's'].push({
        propertyName: key,
        defaultValue: defaultValue,
        type: type
    });
    target.propList[propertyType + 'Names'].push(key);
}
function getBuilderProperties(component) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(component.prototype.builderObject)) {
        component.prototype.builderObject = {
            properties: {}, propCollections: [], add: function () {
                this.isPropertyArray = true;
                this.propCollections.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, this.properties, {}));
            }
        };
        var rex = /complex/;
        for (var _i = 0, _a = Object.keys(component.prototype.propList); _i < _a.length; _i++) {
            var key = _a[_i];
            var _loop_1 = function (prop) {
                if (rex.test(key)) {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        var childType = {};
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(childType, getBuilderProperties(prop.type));
                        value(childType);
                        var tempValue;
                        if (!childType.isPropertyArray) {
                            tempValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, childType.properties, {});
                        }
                        else {
                            tempValue = childType.propCollections;
                        }
                        this.properties[prop.propertyName] = tempValue;
                        childType.properties = {};
                        childType.propCollections = [];
                        childType.isPropertyArray = false;
                        return this;
                    };
                }
                else {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        this.properties[prop.propertyName] = value;
                        return this;
                    };
                }
            };
            for (var _b = 0, _c = component.prototype.propList[key]; _b < _c.length; _b++) {
                var prop = _c[_b];
                _loop_1(prop);
            }
        }
    }
    return component.prototype.builderObject;
}
function CreateBuilder(component) {
    var builderFunction = function (element) {
        this.element = element;
        return this;
    };
    var instanceFunction = function (element) {
        if (!builderFunction.prototype.hasOwnProperty('create')) {
            builderFunction.prototype = getBuilderProperties(component);
            builderFunction.prototype.create = function () {
                var temp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, {}, this.properties);
                this.properties = {};
                return new component(temp, this.element);
            };
        }
        return new builderFunction(element);
    };
    return instanceFunction;
}
function getParentContext(context, prefix) {
    if (context.hasOwnProperty('parentObj') === false) {
        return { context: context, prefix: prefix };
    }
    else {
        var curText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('propName', context);
        if (curText) {
            prefix = curText + '-' + prefix;
        }
        return getParentContext(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('parentObj', context), prefix);
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var EventHandler = (function () {
    function EventHandler() {
    }
    EventHandler.addOrGetEventData = function (element) {
        if ('__eventList' in element) {
            return element.__eventList.events;
        }
        else {
            element.__eventList = {};
            return element.__eventList.events = [];
        }
    };
    EventHandler.add = function (element, eventName, listener, bindTo, intDebounce) {
        var eventData = EventHandler.addOrGetEventData(element);
        var debounceListener;
        if (intDebounce) {
            debounceListener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["m" /* debounce */])(listener, intDebounce);
        }
        else {
            debounceListener = listener;
        }
        if (bindTo) {
            debounceListener = debounceListener.bind(bindTo);
        }
        var event = eventName.split(' ');
        for (var i = 0; i < event.length; i++) {
            eventData.push({
                name: event[i],
                listener: listener,
                debounce: debounceListener
            });
            element.addEventListener(event[i], debounceListener);
        }
        return debounceListener;
    };
    EventHandler.remove = function (element, eventName, listener) {
        var eventData = EventHandler.addOrGetEventData(element);
        var event = eventName.split(' ');
        var _loop_1 = function (j) {
            var index = -1;
            var debounceListener;
            if (eventData && eventData.length !== 0) {
                eventData.some(function (x, i) {
                    return x.name === event[j] && x.listener === listener ?
                        (index = i, debounceListener = x.debounce, true) : false;
                });
            }
            if (index !== -1) {
                eventData.splice(index, 1);
            }
            element.removeEventListener(event[j], debounceListener);
        };
        for (var j = 0; j < event.length; j++) {
            _loop_1(j);
        }
    };
    EventHandler.clearEvents = function (element) {
        var eventData;
        var copyData;
        eventData = EventHandler.addOrGetEventData(element);
        copyData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])([], copyData, eventData);
        for (var i = 0; i < copyData.length; i++) {
            element.removeEventListener(copyData[i].name, copyData[i].debounce);
            eventData.shift();
        }
    };
    EventHandler.trigger = function (element, eventName, eventProp) {
        var eventData = EventHandler.addOrGetEventData(element);
        var fn = null;
        for (var _i = 0, eventData_1 = eventData; _i < eventData_1.length; _i++) {
            var event_1 = eventData_1[_i];
            if (event_1.name === eventName) {
                event_1.debounce.call(this, eventProp);
            }
        }
    };
    return EventHandler;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Browser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
var REGX_IE = /msie|trident/i;
var REGX_IE11 = /Trident\/7\./;
var REGX_IOS = /(ipad|iphone|ipod touch)/i;
var REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i;
var REGX_ANDROID = /android/i;
var REGX_WINDOWS = /trident|windows phone|edge/i;
var REGX_VERSION = /(version)[ \/]([\w.]+)/i;
var REGX_BROWSER = {
    OPERA: /(opera|opr)(?:.*version|)[ \/]([\w.]+)/i,
    EDGE: /(edge)(?:.*version|)[ \/]([\w.]+)/i,
    CHROME: /(chrome|crios)[ \/]([\w.]+)/i,
    PANTHOMEJS: /(phantomjs)[ \/]([\w.]+)/i,
    SAFARI: /(safari)[ \/]([\w.]+)/i,
    WEBKIT: /(webkit)[ \/]([\w.]+)/i,
    MSIE: /(msie|trident) ([\w.]+)/i,
    MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
window.browserDetails = window.browserDetails || {};
var Browser = (function () {
    function Browser() {
    }
    Browser.extractBrowserDetail = function () {
        var browserInfo = { culture: {} };
        var keys = Object.keys(REGX_BROWSER);
        var clientInfo = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            clientInfo = Browser.userAgent.match(REGX_BROWSER[key]);
            if (clientInfo) {
                browserInfo.name = (clientInfo[1].toLowerCase() === 'opr' ? 'opera' : clientInfo[1].toLowerCase());
                browserInfo.name = (clientInfo[1].toLowerCase() === 'crios' ? 'chrome' : browserInfo.name);
                browserInfo.version = clientInfo[2];
                browserInfo.culture.name = browserInfo.culture.language = navigator.language;
                if (!!Browser.userAgent.match(REGX_IE11)) {
                    browserInfo.name = 'msie';
                    break;
                }
                var version = Browser.userAgent.match(REGX_VERSION);
                if (browserInfo.name === 'safari' && version) {
                    browserInfo.version = version[2];
                }
                break;
            }
        }
        return browserInfo;
    };
    Browser.getEvent = function (event) {
        var events = {
            start: {
                isPointer: 'pointerdown', isTouch: 'touchstart', isDevice: 'mousedown'
            },
            move: {
                isPointer: 'pointermove', isTouch: 'touchmove', isDevice: 'mousemove'
            },
            end: {
                isPointer: 'pointerup', isTouch: 'touchend', isDevice: 'mouseup'
            }
        };
        return (Browser.isPointer ? events[event].isPointer :
            (Browser.isTouch ? events[event].isTouch + (!Browser.isDevice ? ' ' + events[event].isDevice : '')
                : events[event].isDevice));
    };
    Browser.getTouchStartEvent = function () {
        return Browser.getEvent('start');
    };
    Browser.getTouchEndEvent = function () {
        return Browser.getEvent('end');
    };
    Browser.getTouchMoveEvent = function () {
        return Browser.getEvent('move');
    };
    Browser.getValue = function (key, regX) {
        var browserDetails = window.browserDetails;
        if ('undefined' === typeof browserDetails[key]) {
            return browserDetails[key] = regX.test(Browser.userAgent);
        }
        return browserDetails[key];
    };
    Object.defineProperty(Browser, "userAgent", {
        get: function () {
            return Browser.uA;
        },
        set: function (uA) {
            Browser.uA = uA;
            window.browserDetails = {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "info", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.info)) {
                return window.browserDetails.info = Browser.extractBrowserDetail();
            }
            return window.browserDetails.info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIE", {
        get: function () {
            return Browser.getValue('isIE', REGX_IE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isTouch", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isTouch)) {
                return window.browserDetails.isTouch = ('ontouchstart' in window);
            }
            return window.browserDetails.isTouch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isPointer", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isPointer)) {
                return window.browserDetails.isPointer = ('pointerEnabled' in window.navigator);
            }
            return window.browserDetails.isPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isMSPointer", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isMSPointer)) {
                return window.browserDetails.isMSPointer = ('msPointerEnabled' in window.navigator);
            }
            return window.browserDetails.isMSPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isDevice", {
        get: function () {
            return Browser.getValue('isDevice', REGX_MOBILE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos", {
        get: function () {
            return Browser.getValue('isIos', REGX_IOS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos7", {
        get: function () {
            return Browser.getValue('isIos7', REGX_IOS7);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isAndroid", {
        get: function () {
            return Browser.getValue('isAndroid', REGX_ANDROID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWebView", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isWebView)) {
                window.browserDetails.isWebView = !(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.cordova) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.PhoneGap)
                    && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.phonegap) && window.forge !== 'object');
                return window.browserDetails.isWebView;
            }
            return window.browserDetails.isWebView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWindows", {
        get: function () {
            return Browser.getValue('isWindows', REGX_WINDOWS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchStartEvent", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.touchStartEvent)) {
                return window.browserDetails.touchStartEvent = Browser.getTouchStartEvent();
            }
            return window.browserDetails.touchStartEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchMoveEvent", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.touchMoveEvent)) {
                return window.browserDetails.touchMoveEvent = Browser.getTouchMoveEvent();
            }
            return window.browserDetails.touchMoveEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchEndEvent", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.touchEndEvent)) {
                return window.browserDetails.touchEndEvent = Browser.getTouchEndEvent();
            }
            return window.browserDetails.touchEndEvent;
        },
        enumerable: true,
        configurable: true
    });
    return Browser;
}());

Browser.uA = navigator.userAgent;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntlBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_formatter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__number_formatter__ = __webpack_require__(13);




var IntlBase;
(function (IntlBase) {
    IntlBase.negativeDataRegex = /^(('[^']+'|''|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.customRegex = /^(('[^']+'|''|[^*#@0,.])*)(\*.)?((([0#,]*[0,]*[0#]*)(\.[0#]*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.latnParseRegex = /0|1|2|3|4|5|6|7|8|9/g;
    var fractionRegex = /[0-9]/g;
    IntlBase.defaultCurrency = '$';
    var mapper = ['infinity', 'nan', 'group', 'decimal'];
    var patternRegex = /G|M|L|H|c|'| a|yy|y|EEEE|E/g;
    var patternMatch = {
        'G': '',
        'M': 'm',
        'L': 'm',
        'H': 'h',
        'c': 'd',
        '\'': '"',
        ' a': ' AM/PM',
        'yy': 'yy',
        'y': 'yyyy',
        'EEEE': 'dddd',
        'E': 'ddd'
    };
    IntlBase.formatRegex = /(^[ncpa]{1})([0-1]?[0-9]|20)?$/i;
    var typeMapper = {
        '$': 'isCurrency',
        '%': 'isPercent',
        '-': 'isNegative',
        0: 'nlead',
        1: 'nend'
    };
    IntlBase.dateParseRegex = /([a-z])\1*|'([^']|'')+'|''|./gi;
    IntlBase.basicPatterns = ['short', 'medium', 'long', 'full'];
    IntlBase.defaultObject = {
        'dates': {
            'calendars': {
                'gregorian': {
                    'months': {
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mar',
                                '4': 'Apr',
                                '5': 'May',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Aug',
                                '9': 'Sep',
                                '10': 'Oct',
                                '11': 'Nov',
                                '12': 'Dec'
                            },
                            'narrow': {
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S',
                                '10': 'O',
                                '11': 'N',
                                '12': 'D'
                            },
                            'wide': {
                                '1': 'January',
                                '2': 'February',
                                '3': 'March',
                                '4': 'April',
                                '5': 'May',
                                '6': 'June',
                                '7': 'July',
                                '8': 'August',
                                '9': 'September',
                                '10': 'October',
                                '11': 'November',
                                '12': 'December'
                            }
                        }
                    },
                    "days": {
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "wide": {
                                "am": "AM",
                                "pm": "PM"
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Before Christ',
                            '0-alt-variant': 'Before Common Era',
                            '1': 'Anno Domini',
                            "1-alt-variant": "Common Era"
                        },
                        'eraAbbr': {
                            '0': 'BC',
                            '0-alt-variant': 'BCE',
                            '1': 'AD',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'B',
                            '0-alt-variant': 'BCE',
                            '1': 'A',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, MMMM d, y',
                        'long': 'MMMM d, y',
                        'medium': 'MMM d, y',
                        'short': 'M/d/yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': "{1} 'at' {0}",
                        'long': "{1} 'at' {0}",
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'd': 'd',
                            'E': 'ccc',
                            'Ed': 'd E',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'MMM d, y G',
                            'GyMMMEd': 'E, MMM d, y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'hmsv': 'h:mm:ss a v',
                            'Hmsv': 'HH:mm:ss v',
                            'hmv': 'h:mm a v',
                            'Hmv': 'HH:mm v',
                            'M': 'L',
                            'Md': 'M/d',
                            'MEd': 'E, M/d',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d',
                            'MMMEd': 'E, MMM d',
                            'MMMMd': 'MMMM d',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'M/d/y',
                            'yMEd': 'E, M/d/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'MMM d, y',
                            'yMMMEd': 'E, MMM d, y',
                            'yMMMM': 'MMMM y',
                        },
                    }
                }
            },
            'timeZoneNames': {
                "hourFormat": "+HH:mm;-HH:mm",
                "gmtFormat": "GMT{0}",
                "gmtZeroFormat": "GMT",
            }
        },
        'numbers': {
            'currencies': {
                'USD': {
                    'displayName': 'US Dollar',
                    'symbol': '$',
                    'symbol-alt-narrow': '$'
                },
                'EUR': {
                    'displayName': 'Euro',
                    'symbol': '€',
                    'symbol-alt-narrow': '€'
                },
                'GBP': {
                    'displayName': 'British Pound',
                    'symbol-alt-narrow': '£'
                },
            },
            'defaultNumberingSystem': 'latn',
            'minimumGroupingDigits': '1',
            'symbols-numberSystem-latn': {
                'decimal': '.',
                'group': ',',
                'list': ';',
                'percentSign': '%',
                'plusSign': '+',
                'minusSign': '-',
                'exponential': 'E',
                'superscriptingExponent': '×',
                'perMille': '‰',
                'infinity': '∞',
                'nan': 'NaN',
                'timeSeparator': ':'
            },
            'decimalFormats-numberSystem-latn': {
                'standard': '#,##0.###',
            },
            'percentFormats-numberSystem-latn': {
                'standard': '#,##0%'
            },
            'currencyFormats-numberSystem-latn': {
                'standard': '¤#,##0.00',
                'accounting': '¤#,##0.00;(¤#,##0.00)'
            }
        }
    };
    IntlBase.monthIndex = {
        3: 'abbreviated',
        4: 'wide',
        5: 'narrow',
        1: 'abbreviated'
    };
    IntlBase.month = 'months';
    IntlBase.days = 'days';
    IntlBase.patternMatcher = {
        C: 'currency',
        P: 'percent',
        N: 'decimal',
        A: 'currency'
    };
    function getResultantPattern(skeleton, dateObject, type) {
        var resPattern;
        var iType = type || 'date';
        if (IntlBase.basicPatterns.indexOf(skeleton) !== -1) {
            resPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(iType + 'Formats.' + skeleton, dateObject);
            if (iType === 'dateTime') {
                var dPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dateFormats.' + skeleton, dateObject);
                var tPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('timeFormats.' + skeleton, dateObject);
                resPattern = resPattern.replace('{1}', dPattern).replace('{0}', tPattern);
            }
        }
        else {
            resPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dateTimeFormats.availableFormats.' + skeleton, dateObject);
        }
        return resPattern;
    }
    IntlBase.getResultantPattern = getResultantPattern;
    function getDependables(cldr, culture, isNumber) {
        var ret = {};
        ret.parserObject = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getMainObject(cldr, culture) || IntlBase.defaultObject;
        if (isNumber) {
            ret.numericObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('numbers', ret.parserObject);
        }
        else {
            ret.dateObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dates.calendars.gregorian', ret.parserObject);
        }
        return ret;
    }
    IntlBase.getDependables = getDependables;
    function getSymbolPattern(type, numSystem, obj, isAccount) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(type + 'Formats-numberSystem-' +
            numSystem + (isAccount ? '.accounting' : '.standard'), obj) || (isAccount ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(type + 'Formats-numberSystem-' +
            numSystem + '.standard', obj) : '');
    }
    IntlBase.getSymbolPattern = getSymbolPattern;
    function getProperNumericSkeleton(skeleton) {
        var matches = skeleton.match(IntlBase.formatRegex);
        var ret = {};
        var pattern = matches[1].toUpperCase();
        ret.isAccount = (pattern === 'A');
        ret.type = IntlBase.patternMatcher[pattern];
        if (skeleton.length > 1) {
            ret.fractionDigits = parseInt(matches[2], 10);
        }
        return ret;
    }
    IntlBase.getProperNumericSkeleton = getProperNumericSkeleton;
    function getFormatData(pattern, needFraction, cSymbol, fractionOnly) {
        var nData = fractionOnly ? {} : { nlead: '', nend: '' };
        var match = pattern.match(IntlBase.customRegex);
        if (match) {
            if (!fractionOnly) {
                nData.nlead = changeCurrencySymbol(match[1], cSymbol);
                nData.nend = changeCurrencySymbol(match[10], cSymbol);
                nData.groupPattern = match[4];
            }
            var fraction = match[7];
            if (fraction && needFraction) {
                var fmatch = fraction.match(fractionRegex);
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(fmatch)) {
                    nData.minimumFraction = fmatch.length;
                }
                else {
                    nData.minimumFraction = 0;
                }
                nData.maximumFraction = fraction.length - 1;
            }
        }
        return nData;
    }
    IntlBase.getFormatData = getFormatData;
    function changeCurrencySymbol(val, sym) {
        if (val) {
            return val.replace(IntlBase.defaultCurrency, sym);
        }
        return '';
    }
    function getCurrencySymbol(numericObject, currencyCode) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('currencies.' + currencyCode + '.symbol', numericObject) || '$';
    }
    IntlBase.getCurrencySymbol = getCurrencySymbol;
    function customFormat(format, dOptions, obj) {
        var options = {};
        var formatSplit = format.split(';');
        var data = ['pData', 'nData', 'zeroData'];
        for (var i = 0; i < formatSplit.length; i++) {
            options[data[i]] = customNumberFormat(formatSplit[i], dOptions, obj);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.nData)) {
            options.nData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, options.pData);
            options.nData.nlead = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(dOptions) ? '-' + options.nData.nlead : dOptions.minusSymbol + options.nData.nlead;
        }
        return options;
    }
    IntlBase.customFormat = customFormat;
    function customNumberFormat(format, dOptions, numObject) {
        var cOptions = { type: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
        var pattern = format.match(IntlBase.customRegex);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(pattern) || pattern[5] === '') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])('Given Format is not valid or Cldr data not loaded');
        }
        cOptions.nlead = pattern[1];
        cOptions.nend = pattern[10];
        var integerPart = pattern[6];
        cOptions.useGrouping = integerPart.indexOf(',') !== -1;
        integerPart = integerPart.replace(/,/g, '');
        var fractionPart = pattern[7];
        if (integerPart.indexOf('0') !== -1) {
            cOptions.minimumIntegerDigits = integerPart.length - integerPart.indexOf('0');
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(fractionPart)) {
            cOptions.minimumFractionDigits = fractionPart.lastIndexOf('0');
            cOptions.maximumFractionDigits = fractionPart.lastIndexOf('#');
            if (cOptions.minimumFractionDigits === -1) {
                cOptions.minimumFractionDigits = 0;
            }
            if (cOptions.maximumFractionDigits === -1 || cOptions.maximumFractionDigits < cOptions.minimumFractionDigits) {
                cOptions.maximumFractionDigits = cOptions.minimumFractionDigits;
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(dOptions)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '$', dOptions.currencySymbol));
            if (!cOptions.isCurrency) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', dOptions.percentSymbol));
            }
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', '%'));
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(numObject)) {
            var symbolPattern = getSymbolPattern(cOptions.type, dOptions.numberMapper.numberSystem, numObject, false);
            if (cOptions.useGrouping) {
                cOptions.groupSeparator = dOptions.numberMapper.numberSymbols[mapper[2]];
                cOptions.groupData = __WEBPACK_IMPORTED_MODULE_3__number_formatter__["a" /* NumberFormat */].getGroupingDetails(symbolPattern.split(';')[0]);
            }
            cOptions.nlead = cOptions.nlead.replace(/\'/g, '');
            cOptions.nend = cOptions.nend.replace(/\'/g, '');
        }
        return cOptions;
    }
    function isCurrencyPercent(parts, actual, symbol) {
        var options = { nlead: parts[0], nend: parts[1] };
        for (var i = 0; i < 2; i++) {
            var part = parts[i];
            var loc = part.indexOf(actual);
            if ((loc !== -1) && ((loc < part.indexOf('\'')) || (loc > part.lastIndexOf('\'')))) {
                options[typeMapper[i]] = part.substr(0, loc) + symbol + part.substr(loc + 1);
                options[typeMapper[actual]] = true;
                options.type = options.isCurrency ? 'currency' : 'percent';
                break;
            }
        }
        return options;
    }
    IntlBase.isCurrencyPercent = isCurrencyPercent;
    function getDateSeparator(dateObj) {
        var value = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dateFormats.short', dateObj) || '').match(/[d‏M‏]([^d‏M])[d‏M‏]/i);
        return value ? value[1] : '/';
    }
    IntlBase.getDateSeparator = getDateSeparator;
    function getActualDateTimeFormat(culture, options, cldr, isExcelFormat) {
        var dependable = getDependables(cldr, culture);
        var actualPattern = options.format || getResultantPattern(options.skeleton, dependable.dateObject, options.type);
        if (isExcelFormat) {
            actualPattern = actualPattern.replace(patternRegex, function (pattern) {
                return patternMatch[pattern];
            });
            if (actualPattern.indexOf('z') !== -1) {
                var tLength = actualPattern.match(/z/g).length;
                var timeZonePattern = void 0;
                var options_1 = { 'timeZone': {} };
                options_1.numMapper = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr));
                options_1.timeZone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dates.timeZoneNames', dependable.parserObject);
                var value = new Date();
                var timezone = value.getTimezoneOffset();
                var pattern = (tLength < 4) ? '+H;-H' : options_1.timeZone.hourFormat;
                pattern = pattern.replace(/:/g, options_1.numMapper.timeSeparator);
                if (timezone === 0) {
                    timeZonePattern = options_1.timeZone.gmtZeroFormat;
                }
                else {
                    timeZonePattern = __WEBPACK_IMPORTED_MODULE_2__date_formatter__["a" /* DateFormat */].getTimeZoneValue(timezone, pattern);
                    timeZonePattern = options_1.timeZone.gmtFormat.replace(/\{0\}/, timeZonePattern);
                }
                actualPattern = actualPattern.replace(/[z]+/, '"' + timeZonePattern + '"');
            }
            actualPattern = actualPattern.replace(/ $/, '');
        }
        return actualPattern;
    }
    IntlBase.getActualDateTimeFormat = getActualDateTimeFormat;
    function getActualNumberFormat(culture, options, cldr) {
        var dependable = getDependables(cldr, culture, true);
        var parseOptions = { custom: true };
        var minFrac;
        if ((/(c|a)$/ig).test(options.format) && !options.minimumFractionDigits && !options.maximumFractionDigits) {
            var dOptions = {};
            dOptions.numberMapper = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr), true);
            var symbolPattern = getSymbolPattern('currency', dOptions.numberMapper.numberSystem, dependable.numericObject, (/a/i).test(options.format));
            minFrac = getFormatData(symbolPattern.split(';')[0], true, '', true).minimumFraction;
        }
        var actualPattern;
        if ((IntlBase.formatRegex.test(options.format)) || !(options.format)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(parseOptions, getProperNumericSkeleton(options.format || 'N'));
            parseOptions.custom = false;
            actualPattern = '###0';
            if (parseOptions.fractionDigits || options.minimumFractionDigits || options.maximumFractionDigits || minFrac) {
                var defaultMinimum = 0;
                if (parseOptions.fractionDigits) {
                    options.minimumFractionDigits = options.maximumFractionDigits = parseOptions.fractionDigits;
                }
                actualPattern = fractionDigitsPattern(actualPattern, minFrac || parseOptions.fractionDigits ||
                    options.minimumFractionDigits || defaultMinimum, options.maximumFractionDigits || defaultMinimum);
            }
            if (options.minimumIntegerDigits) {
                actualPattern = minimumIntegerPattern(actualPattern, options.minimumIntegerDigits);
            }
            if (options.useGrouping) {
                actualPattern = groupingPattern(actualPattern);
            }
            if (parseOptions.type === 'currency' && !parseOptions.isAccount) {
                actualPattern = '$ ' + actualPattern;
            }
            else if (parseOptions.type === 'currency' && parseOptions.isAccount) {
                actualPattern = '$ ' + actualPattern + ';($ ' + actualPattern + ')';
            }
            if (parseOptions.type === 'percent') {
                actualPattern += ' %';
            }
        }
        else {
            actualPattern = options.format.replace(/\'/g, '"');
        }
        return actualPattern;
    }
    IntlBase.getActualNumberFormat = getActualNumberFormat;
    function fractionDigitsPattern(pattern, minDigits, maxDigits) {
        pattern += '.';
        for (var a = 0; a < minDigits; a++) {
            pattern += '0';
        }
        if (minDigits < maxDigits) {
            var diff = maxDigits - minDigits;
            for (var b = 0; b < diff; b++) {
                pattern += '#';
            }
        }
        return pattern;
    }
    function minimumIntegerPattern(pattern, digits) {
        var temp = pattern.split('.');
        var integer = '';
        for (var x = 0; x < digits; x++) {
            integer += '0';
        }
        return temp[1] ? (integer + '.' + temp[1]) : integer;
    }
    function groupingPattern(pattern) {
        var temp = pattern.split('.');
        var integer = temp[0];
        var no = 3 - integer.length % 3;
        var hash = (no && no === 1) ? '#' : (no === 2 ? '##' : '');
        integer = hash + integer;
        pattern = '';
        for (var x = integer.length - 1; x > 0; x = x - 3) {
            pattern = ',' + integer[x - 2] + integer[x - 1] + integer[x] + pattern;
        }
        pattern = pattern.slice(1);
        return temp[1] ? (pattern + '.' + temp[1]) : pattern;
    }
})(IntlBase || (IntlBase = {}));


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParserBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
var defaultNumberingSystem = {
    'latn': {
        '_digits': '0123456789',
        '_type': 'numeric'
    }
};

var latnRegex = /^[0-9]*$/;
var defaultNumberSymbols = {
    'decimal': '.',
    'group': ',',
    'percentSign': '%',
    'plusSign': '+',
    'minusSign': '-',
    'infinity': '∞',
    'nan': 'NaN',
    'exponential': 'E'
};
var latnNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var ParserBase = (function () {
    function ParserBase() {
    }
    ParserBase.getMainObject = function (obj, cName) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('main.' + cName, obj);
    };
    ParserBase.getNumberingSystem = function (obj) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('supplemental.numberingSystems', obj) || this.numberingSystems;
    };
    ParserBase.reverseObject = function (prop, keys) {
        var propKeys = keys || Object.keys(prop);
        var res = {};
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var key = propKeys_1[_i];
            if (!res.hasOwnProperty(prop[key])) {
                res[prop[key]] = key;
            }
        }
        return res;
    };
    ParserBase.getSymbolRegex = function (props) {
        var regexStr = props.map(function (str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        }).join('|');
        return new RegExp(regexStr, 'g');
    };
    ParserBase.getSymbolMatch = function (prop) {
        var matchKeys = Object.keys(defaultNumberSymbols);
        var ret = {};
        for (var _i = 0, matchKeys_1 = matchKeys; _i < matchKeys_1.length; _i++) {
            var key = matchKeys_1[_i];
            ret[prop[key]] = defaultNumberSymbols[key];
        }
        return ret;
    };
    ParserBase.constructRegex = function (val) {
        var len = val.length;
        var ret = '';
        for (var i = 0; i < len; i++) {
            if (i !== len - 1) {
                ret += val[i] + '|';
            }
            else {
                ret += val[i];
            }
        }
        return ret;
    };
    ParserBase.convertValueParts = function (value, regex, obj) {
        return value.replace(regex, function (str) {
            return obj[str];
        });
    };
    ParserBase.getDefaultNumberingSystem = function (obj) {
        var ret = {};
        ret.obj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('numbers', obj);
        ret.nSystem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('defaultNumberingSystem', ret.obj);
        return ret;
    };
    ParserBase.getCurrentNumericOptions = function (curObj, numberSystem, needSymbols) {
        var ret = {};
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(cur.nSystem)) {
            var digits = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(cur.nSystem + '._digits', numberSystem);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(digits)) {
                ret.numericPair = this.reverseObject(digits, latnNumberSystem);
                ret.numberParseRegex = new RegExp(this.constructRegex(digits), 'g');
                ret.numericRegex = '[' + digits[0] + '-' + digits[9] + ']';
                if (needSymbols) {
                    ret.numericRegex = digits[0] + '-' + digits[9];
                    ret.symbolNumberSystem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('symbols-numberSystem-' + cur.nSystem, cur.obj);
                    ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem);
                    ret.numberSystem = cur.nSystem;
                }
            }
        }
        return ret;
    };
    ParserBase.getNumberMapper = function (curObj, numberSystem, isNumber) {
        var ret = { mapper: {} };
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(cur.nSystem)) {
            ret.numberSystem = cur.nSystem;
            ret.numberSymbols = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('symbols-numberSystem-' + cur.nSystem, cur.obj);
            ret.timeSeparator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('timeSeparator', ret.numberSymbols);
            var digits = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(cur.nSystem + '._digits', numberSystem);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(digits)) {
                for (var _i = 0, latnNumberSystem_1 = latnNumberSystem; _i < latnNumberSystem_1.length; _i++) {
                    var i = latnNumberSystem_1[_i];
                    ret.mapper[i] = digits[i];
                }
            }
        }
        return ret;
    };
    return ParserBase;
}());

ParserBase.nPair = 'numericPair';
ParserBase.nRegex = 'numericRegex';
ParserBase.numberingSystems = defaultNumberingSystem;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(15);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Ajax", function() { return __WEBPACK_IMPORTED_MODULE_0__ajax__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__(16);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rippleEffect", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isRippleEnabled", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enableRipple", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return __WEBPACK_IMPORTED_MODULE_2__base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return __WEBPACK_IMPORTED_MODULE_3__browser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canvas_renderer__ = __webpack_require__(17);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderer", function() { return __WEBPACK_IMPORTED_MODULE_4__canvas_renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component__ = __webpack_require__(18);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_5__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__child_property__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ChildProperty", function() { return __WEBPACK_IMPORTED_MODULE_6__child_property__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__draggable__ = __webpack_require__(19);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return __WEBPACK_IMPORTED_MODULE_7__draggable__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return __WEBPACK_IMPORTED_MODULE_7__draggable__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__droppable__ = __webpack_require__(20);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return __WEBPACK_IMPORTED_MODULE_8__droppable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_handler__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return __WEBPACK_IMPORTED_MODULE_9__event_handler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__internationalization__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "onIntlChange", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rightToLeft", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cldrData", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defaultCulture", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defaultCurrencyCode", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Internationalization", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setCulture", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setCurrencyCode", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "loadCldr", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enableRtl", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getNumericObject", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getDefaultDateObject", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["l"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__keyboard__ = __webpack_require__(23);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvents", function() { return __WEBPACK_IMPORTED_MODULE_11__keyboard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__l10n__ = __webpack_require__(24);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "L10n", function() { return __WEBPACK_IMPORTED_MODULE_12__l10n__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__module_loader__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ModuleLoader", function() { return __WEBPACK_IMPORTED_MODULE_13__module_loader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__notify_property_change__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Complex", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ComplexFactory", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CollectionFactory", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NotifyPropertyChanges", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CreateBuilder", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__svg_renderer__ = __webpack_require__(25);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SvgRenderer", function() { return __WEBPACK_IMPORTED_MODULE_15__svg_renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__touch__ = __webpack_require__(28);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SwipeSettings", function() { return __WEBPACK_IMPORTED_MODULE_16__touch__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return __WEBPACK_IMPORTED_MODULE_16__touch__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__template_engine__ = __webpack_require__(26);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return __WEBPACK_IMPORTED_MODULE_17__template_engine__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setTemplateEngine", function() { return __WEBPACK_IMPORTED_MODULE_17__template_engine__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getTemplateEngine", function() { return __WEBPACK_IMPORTED_MODULE_17__template_engine__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__util__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "deleteObject", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getEnumValue", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getUniqueID", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "queryParams", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObjectArray", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compareElementParent", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "print", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatUnit", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addInstance", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["u"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dom__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "append", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getAttributeOrDefault", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setStyleAttribute", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "classList", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["q"]; });






















/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(1);


var ChildProperty = (function () {
    function ChildProperty(parent, propName, defaultValue, isArray) {
        this.properties = {};
        this.changedProperties = {};
        this.childChangedProperties = {};
        this.oldProperties = {};
        this.finalUpdate = function () { };
        this.callChildDataBind = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('callChildDataBind', __WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]);
        this.parentObj = parent;
        this.controlParent = this.parentObj.controlParent || this.parentObj;
        this.propName = propName;
        this.setProperties(defaultValue, true);
        this.isParentArray = isArray;
    }
    ChildProperty.prototype.updateChange = function (val, propName) {
        if (val === true) {
            this.parentObj.childChangedProperties[propName] = val;
        }
        else {
            delete this.parentObj.childChangedProperties[propName];
        }
        if (this.parentObj.updateChange) {
            this.parentObj.updateChange(val, this.parentObj.propName);
        }
    };
    ChildProperty.prototype.updateTimeOut = function () {
        if (this.parentObj.updateTimeOut) {
            this.parentObj.finalUpdate();
            this.parentObj.updateTimeOut();
        }
        else {
            this.parentObj.finalUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* setImmediate */])(this.parentObj.dataBind.bind(this.parentObj));
        }
    };
    ChildProperty.prototype.clearChanges = function () {
        this.finalUpdate();
        this.updateChange(false, this.propName);
        this.oldProperties = {};
        this.changedProperties = {};
    };
    ChildProperty.prototype.setProperties = function (prop, muteOnChange) {
        if (muteOnChange === true) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, prop);
            this.updateChange(false, this.propName);
            this.clearChanges();
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, prop);
        }
    };
    ChildProperty.prototype.dataBind = function () {
        this.callChildDataBind(this.childChangedProperties, this);
        if (this.isParentArray) {
            var curIndex = this.parentObj[this.propName].indexOf(this);
            if (Object.keys(this.changedProperties).length) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(this.propName + '.' + curIndex, this.changedProperties, this.parentObj.changedProperties);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(this.propName + '.' + curIndex, this.oldProperties, this.parentObj.oldProperties);
            }
        }
        else {
            this.parentObj.changedProperties[this.propName] = this.changedProperties;
            this.parentObj.oldProperties[this.propName] = this.oldProperties;
        }
        this.clearChanges();
    };
    ChildProperty.prototype.saveChanges = function (key, newValue, oldValue) {
        if (this.controlParent.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.updateChange(true, this.propName);
        this.finalUpdate();
        this.updateTimeOut();
    };
    return ChildProperty;
}());



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onIntlChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rightToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cldrData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultCulture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultCurrencyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Internationalization; });
/* harmony export (immutable) */ __webpack_exports__["g"] = setCulture;
/* harmony export (immutable) */ __webpack_exports__["h"] = setCurrencyCode;
/* harmony export (immutable) */ __webpack_exports__["i"] = loadCldr;
/* harmony export (immutable) */ __webpack_exports__["j"] = enableRtl;
/* harmony export (immutable) */ __webpack_exports__["k"] = getNumericObject;
/* harmony export (immutable) */ __webpack_exports__["l"] = getDefaultDateObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intl_date_formatter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__intl_number_formatter__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intl_date_parser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intl_number_parser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__observer__ = __webpack_require__(11);







var onIntlChange = new __WEBPACK_IMPORTED_MODULE_6__observer__["a" /* Observer */]();
var rightToLeft = false;
var cldrData = {};
var defaultCulture = 'en-US';
var defaultCurrencyCode = 'USD';
var mapper = ['numericObject', 'dateObject'];
var Internationalization = (function () {
    function Internationalization(cultureName) {
        if (cultureName) {
            this.culture = cultureName;
        }
    }
    Internationalization.prototype.getDateFormat = function (options) {
        return __WEBPACK_IMPORTED_MODULE_0__intl_date_formatter__["a" /* DateFormat */].dateFormat(this.getCulture(), options || { type: 'date', skeleton: 'short' }, cldrData);
    };
    Internationalization.prototype.getNumberFormat = function (options) {
        if (options && !options.currency) {
            options.currency = defaultCurrencyCode;
        }
        return __WEBPACK_IMPORTED_MODULE_1__intl_number_formatter__["a" /* NumberFormat */].numberFormatter(this.getCulture(), options || {}, cldrData);
    };
    Internationalization.prototype.getDateParser = function (options) {
        return __WEBPACK_IMPORTED_MODULE_2__intl_date_parser__["a" /* DateParser */].dateParser(this.getCulture(), options || { skeleton: 'short', type: 'date' }, cldrData);
    };
    Internationalization.prototype.getNumberParser = function (options) {
        return __WEBPACK_IMPORTED_MODULE_3__intl_number_parser__["a" /* NumberParser */].numberParser(this.getCulture(), options || { format: 'N' }, cldrData);
    };
    Internationalization.prototype.formatNumber = function (value, option) {
        return this.getNumberFormat(option)(value);
    };
    Internationalization.prototype.formatDate = function (value, option) {
        return this.getDateFormat(option)(value);
    };
    Internationalization.prototype.parseDate = function (value, option) {
        return this.getDateParser(option)(value);
    };
    Internationalization.prototype.parseNumber = function (value, option) {
        return this.getNumberParser(option)(value);
    };
    Internationalization.prototype.getDatePattern = function (option, isExcelFormat) {
        return __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getActualDateTimeFormat(this.getCulture(), option, cldrData, isExcelFormat);
    };
    Internationalization.prototype.getNumberPattern = function (option) {
        return __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getActualNumberFormat(this.getCulture(), option, cldrData);
    };
    Internationalization.prototype.getCulture = function () {
        return this.culture || defaultCulture;
    };
    return Internationalization;
}());

function setCulture(cultureName) {
    defaultCulture = cultureName;
    onIntlChange.notify('notifyExternalChange', { 'locale': defaultCulture });
}
function setCurrencyCode(currencyCode) {
    defaultCurrencyCode = currencyCode;
}
function loadCldr() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var obj = data_1[_a];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["i" /* extend */])(cldrData, obj, {}, true);
    }
}
function enableRtl(status) {
    if (status === void 0) { status = true; }
    rightToLeft = status;
    onIntlChange.notify('notifyExternalChange', { enableRtl: rightToLeft });
}
function getNumericObject(locale, type) {
    var numObject = __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDependables(cldrData, locale, true)[mapper[0]];
    var dateObject = __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDependables(cldrData, locale)[mapper[1]];
    var numSystem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["c" /* getValue */])('defaultNumberingSystem', numObject);
    var symbPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["c" /* getValue */])('symbols-numberSystem-' + numSystem, numObject);
    var pattern = __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getSymbolPattern(type || 'decimal', numSystem, numObject, false);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["i" /* extend */])(symbPattern, __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getFormatData(pattern, true, '', true), { 'dateSeparator': __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDateSeparator(dateObject) });
}
function getDefaultDateObject() {
    return __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDependables(cldrData, '', false)[mapper[1]];
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var Observer = (function () {
    function Observer(context) {
        this.boundedEvents = {};
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(context)) {
            return;
        }
        this.context = context;
    }
    ;
    Observer.prototype.on = function (property, handler, context) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(handler)) {
            return;
        }
        var cntxt = context || this.context;
        if (this.notExist(property)) {
            this.boundedEvents[property] = [{ handler: handler, context: cntxt }];
            return;
        }
        if (!this.isHandlerPresent(this.boundedEvents[property], handler)) {
            this.boundedEvents[property].push({ handler: handler, context: cntxt });
        }
    };
    Observer.prototype.off = function (property, handler) {
        if (this.notExist(property)) {
            return;
        }
        var curObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(property, this.boundedEvents);
        if (handler) {
            for (var i = 0; i < curObject.length; i++) {
                if (handler === curObject[i].handler) {
                    curObject.splice(i, 1);
                    break;
                }
            }
        }
        else {
            delete this.boundedEvents[property];
        }
    };
    Observer.prototype.notify = function (property, argument) {
        if (this.notExist(property)) {
            return;
        }
        if (argument) {
            argument.name = property;
        }
        var curObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(property, this.boundedEvents).slice(0);
        for (var _i = 0, curObject_1 = curObject; _i < curObject_1.length; _i++) {
            var cur = curObject_1[_i];
            cur.handler.call(cur.context, argument);
        }
    };
    Observer.prototype.destroy = function () {
        this.boundedEvents = this.context = undefined;
    };
    Observer.prototype.notExist = function (prop) {
        return this.boundedEvents.hasOwnProperty(prop) === false;
    };
    Observer.prototype.isHandlerPresent = function (boundedEvents, handler) {
        for (var _i = 0, boundedEvents_1 = boundedEvents; _i < boundedEvents_1.length; _i++) {
            var cur = boundedEvents_1[_i];
            if (cur.handler === handler) {
                return true;
            }
        }
        return false;
    };
    return Observer;
}());



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export basicPatterns */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parser_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__intl_base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



var abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLL|EEEEE|EEEE|E|K|ccc|G+|z+/gi;
var standalone = 'stand-alone';
var weekdayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var basicPatterns = ['short', 'medium', 'long', 'full'];
var timeSetter = {
    m: 'getMinutes',
    h: 'getHours',
    H: 'getHours',
    s: 'getSeconds',
    d: 'getDate',
};
var datePartMatcher = {
    'M': 'month',
    'd': 'day',
    'E': 'weekday',
    'c': 'weekday',
    'y': 'year',
    'm': 'minute',
    'h': 'hour',
    'H': 'hour',
    's': 'second',
    'L': 'month',
    'a': 'designator',
    'z': 'timeZone',
    'Z': 'timeZone',
    'G': 'era'
};
var timeSeparator = 'timeSeparator';
var DateFormat = (function () {
    function DateFormat() {
    }
    DateFormat.dateFormat = function (culture, option, cldr) {
        var _this = this;
        var dependable = __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].getDependables(cldr, culture);
        var formatOptions = {};
        var resPattern = option.format || __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].getResultantPattern(option.skeleton, dependable.dateObject, option.type);
        formatOptions.dateSeperator = __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].getDateSeparator(dependable.dateObject);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(resPattern)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["q" /* throwError */])('Format options or type given must be invalid');
        }
        else {
            formatOptions.pattern = resPattern;
            formatOptions.numMapper = __WEBPACK_IMPORTED_MODULE_0__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_0__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr));
            var patternMatch = resPattern.match(abbreviateRegexGlobal) || [];
            for (var _i = 0, patternMatch_1 = patternMatch; _i < patternMatch_1.length; _i++) {
                var str = patternMatch_1[_i];
                var len = str.length;
                var char = str[0];
                if (char === 'K') {
                    char = 'h';
                }
                var charKey = datePartMatcher[char];
                switch (char) {
                    case 'E':
                    case 'c':
                        formatOptions.weekday = dependable.dateObject[__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].days][standalone][__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].monthIndex[len]];
                        break;
                    case 'M':
                    case 'L':
                        formatOptions.month = dependable.dateObject[__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].month][standalone][__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].monthIndex[len]];
                        break;
                    case 'a':
                        formatOptions.designator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dayPeriods.format.wide', dependable.dateObject);
                        break;
                    case 'G':
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        formatOptions.era = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('eras.' + eText, dependable.dateObject);
                        break;
                    case 'z':
                        formatOptions.timeZone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dates.timeZoneNames', dependable.parserObject);
                        break;
                }
            }
        }
        return function (value) {
            if (isNaN(value.getDate())) {
                return null;
            }
            return _this.intDateFormatter(value, formatOptions);
        };
    };
    DateFormat.intDateFormatter = function (value, options) {
        var pattern = options.pattern;
        var ret = '';
        var matches = pattern.match(__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].dateParseRegex);
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var length_1 = match.length;
            var char = match[0];
            if (char === 'K') {
                char = 'h';
            }
            var curval = void 0;
            var isNumber = void 0;
            var processNumber = void 0;
            var curstr = '';
            switch (char) {
                case 'M':
                case 'L':
                    curval = value.getMonth() + 1;
                    if (length_1 > 2) {
                        ret += options.month[curval];
                    }
                    else {
                        isNumber = true;
                    }
                    break;
                case 'E':
                case 'c':
                    ret += options.weekday[weekdayKey[value.getDay()]];
                    break;
                case 'H':
                case 'h':
                case 'm':
                case 's':
                case 'd':
                    isNumber = true;
                    curval = value[timeSetter[char]]();
                    if (char === 'h') {
                        curval = curval % 12 || 12;
                    }
                    break;
                case 'y':
                    processNumber = true;
                    curstr += value.getFullYear();
                    if (length_1 === 2) {
                        curstr = curstr.substr(curstr.length - 2);
                    }
                    break;
                case 'a':
                    var desig = value.getHours() < 12 ? 'am' : 'pm';
                    ret += options.designator[desig];
                    break;
                case 'G':
                    var dec = value.getFullYear() < 0 ? 0 : 1;
                    ret += options.era[dec];
                    break;
                case '\'':
                    ret += (match === '\'\'') ? '\'' : match.replace(/\'/g, '');
                    break;
                case 'z':
                    var timezone = value.getTimezoneOffset();
                    var pattern_1 = (length_1 < 4) ? '+H;-H' : options.timeZone.hourFormat;
                    pattern_1 = pattern_1.replace(/:/g, options.numMapper.timeSeparator);
                    if (timezone === 0) {
                        ret += options.timeZone.gmtZeroFormat;
                    }
                    else {
                        processNumber = true;
                        curstr = this.getTimeZoneValue(timezone, pattern_1);
                    }
                    curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
                    break;
                case ':':
                    ret += options.numMapper.numberSymbols[timeSeparator];
                    break;
                case '/':
                    ret += options.dateSeperator;
                    break;
                default:
                    ret += match;
            }
            if (isNumber) {
                processNumber = true;
                curstr = this.checkTwodigitNumber(curval, length_1);
            }
            if (processNumber) {
                ret += __WEBPACK_IMPORTED_MODULE_0__parser_base__["a" /* ParserBase */].convertValueParts(curstr, __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].latnParseRegex, options.numMapper.mapper);
            }
        }
        return ret;
    };
    DateFormat.checkTwodigitNumber = function (val, len) {
        var ret = val + '';
        if (len === 2 && ret.length !== 2) {
            return '0' + ret;
        }
        return ret;
    };
    DateFormat.getTimeZoneValue = function (tVal, pattern) {
        var _this = this;
        var splt = pattern.split(';');
        var curPattern = splt[tVal > 0 ? 1 : 0];
        var no = Math.abs(tVal);
        return curPattern = curPattern.replace(/HH?|mm/g, function (str) {
            var len = str.length;
            var ishour = str.indexOf('H') !== -1;
            return _this.checkTwodigitNumber(Math.floor(ishour ? (no / 60) : (no % 60)), len);
        });
    };
    return DateFormat;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberFormat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internationalization__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intl_base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parser_base__ = __webpack_require__(7);




var errorText = {
    'ms': 'minimumSignificantDigits',
    'ls': 'maximumSignificantDigits',
    'mf': 'minimumFractionDigits',
    'lf': 'maximumFractionDigits',
};
var integerError = 'minimumIntegerDigits';
var percentSign = 'percentSign';
var minusSign = 'minusSign';
var spaceRegex = /\s/;
var mapper = ['infinity', 'nan', 'group', 'decimal'];
var infinity = 'infinity';
var nan = 'nan';
var NumberFormat = (function () {
    function NumberFormat() {
    }
    NumberFormat.numberFormatter = function (culture, option, cldr) {
        var _this = this;
        var fOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, option);
        var cOptions = {};
        var dOptions = {};
        var symbolPattern;
        var dependable = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getDependables(cldr, culture, true);
        dOptions.numberMapper = __WEBPACK_IMPORTED_MODULE_3__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_3__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr), true);
        dOptions.currencySymbol = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getCurrencySymbol(dependable.numericObject, fOptions.currency || __WEBPACK_IMPORTED_MODULE_1__internationalization__["e" /* defaultCurrencyCode */]);
        dOptions.percentSymbol = dOptions.numberMapper.numberSymbols[percentSign];
        dOptions.minusSymbol = dOptions.numberMapper.numberSymbols[minusSign];
        var symbols = dOptions.numberMapper.numberSymbols;
        if ((option.format) && !(__WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].formatRegex.test(option.format))) {
            cOptions = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].customFormat(option.format, dOptions, dependable.numericObject);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(fOptions, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getProperNumericSkeleton(option.format || 'N'));
            fOptions.isCurrency = fOptions.type === 'currency';
            fOptions.isPercent = fOptions.type === 'percent';
            symbolPattern = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount);
            fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, true);
            this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, false, true);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.fractionDigits)) {
                fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits;
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.useGrouping)) {
                fOptions.useGrouping = true;
            }
            if (fOptions.isCurrency) {
                symbolPattern = symbolPattern.replace(/\u00A4/g, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].defaultCurrency);
            }
            var split = symbolPattern.split(';');
            cOptions.nData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[1] || '-' + split[0], true, dOptions.currencySymbol);
            cOptions.pData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[0], false, dOptions.currencySymbol);
            if (fOptions.useGrouping) {
                fOptions.groupSeparator = symbols[mapper[2]];
                fOptions.groupData = this.getGroupingDetails(split[0]);
            }
            var minFrac = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.minimumFractionDigits);
            if (minFrac) {
                fOptions.minimumFractionDigits = cOptions.nData.minimumFraction;
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.maximumFractionDigits)) {
                var mval = cOptions.nData.maximumFraction;
                fOptions.maximumFractionDigits = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(mval) && fOptions.isPercent ? 0 : mval;
            }
            var mfrac = fOptions.minimumFractionDigits;
            var lfrac = fOptions.maximumFractionDigits;
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(mfrac) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(lfrac)) {
                if (mfrac > lfrac) {
                    fOptions.maximumFractionDigits = mfrac;
                }
            }
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions.nData, fOptions);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions.pData, fOptions);
        return function (value) {
            if (isNaN(value)) {
                return symbols[mapper[1]];
            }
            else if (!isFinite(value)) {
                return symbols[mapper[0]];
            }
            return _this.intNumberFormatter(value, cOptions, dOptions);
        };
    };
    NumberFormat.getGroupingDetails = function (pattern) {
        var ret = {};
        var match = pattern.match(__WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].negativeDataRegex);
        if (match && match[4]) {
            var pattern_1 = match[4];
            var p = pattern_1.lastIndexOf(',');
            if (p !== -1) {
                var temp = pattern_1.split('.')[0];
                ret.primary = (temp.length - p) - 1;
                var s = pattern_1.lastIndexOf(',', p - 1);
                if (s !== -1) {
                    ret.secondary = p - 1 - s;
                }
            }
        }
        return ret;
    };
    NumberFormat.checkValueRange = function (val1, val2, checkbothExist, isFraction) {
        var decide = isFraction ? 'f' : 's';
        var dint = 0;
        var str1 = errorText['l' + decide];
        var str2 = errorText['m' + decide];
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(val1)) {
            this.checkRange(val1, str1, isFraction);
            dint++;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(val2)) {
            this.checkRange(val2, str2, isFraction);
            dint++;
        }
        if (dint === 2) {
            if (val1 < val2) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])(str2 + 'specified must be less than the' + str1);
            }
            else {
                return true;
            }
        }
        else if (checkbothExist && dint === 1) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])('Both' + str2 + 'and' + str2 + 'must be present');
        }
        return false;
    };
    NumberFormat.checkRange = function (val, text, isFraction) {
        var range = isFraction ? [0, 20] : [1, 21];
        if (val < range[0] || val > range[1]) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])(text + 'value must be within the range' + range[0] + 'to' + range[1]);
        }
    };
    NumberFormat.intNumberFormatter = function (value, fOptions, dOptions) {
        var curData;
        if (value < 0) {
            value = value * -1;
            curData = fOptions.nData;
        }
        else if (value === 0) {
            curData = fOptions.zeroData || fOptions.pData;
        }
        else {
            curData = fOptions.pData;
        }
        var fValue = '';
        if (curData.isPercent) {
            value = value * 100;
        }
        if (curData.groupOne) {
            fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits);
        }
        else {
            fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits);
            if (curData.minimumIntegerDigits) {
                fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits);
            }
        }
        fValue = fValue.replace('.', dOptions.numberMapper.numberSymbols[mapper[3]]);
        if (curData.useGrouping) {
            fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ',', dOptions.numberMapper.numberSymbols[mapper[3]] || '.', curData.groupData.secondary);
        }
        fValue = __WEBPACK_IMPORTED_MODULE_3__parser_base__["a" /* ParserBase */].convertValueParts(fValue, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].latnParseRegex, dOptions.numberMapper.mapper);
        return curData.nlead + fValue + curData.nend;
    };
    NumberFormat.processSignificantDigits = function (value, min, max) {
        var temp = value + '';
        var tn;
        var length = temp.length;
        if (length < min) {
            return value.toPrecision(min);
        }
        else {
            temp = value.toPrecision(max);
            tn = +temp;
            return tn + '';
        }
    };
    NumberFormat.groupNumbers = function (val, level1, sep, decimalSymbol, level2) {
        var flag = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(level2) && level2 !== 0;
        var split = val.split(decimalSymbol);
        var prefix = split[0];
        var length = prefix.length;
        var str = '';
        while (length > level1) {
            str = prefix.slice(length - level1, length) + (str.length ?
                (sep + str) : '');
            length -= level1;
            if (flag) {
                level1 = level2;
                flag = false;
            }
        }
        split[0] = prefix.slice(0, length) + (str.length ? sep : '') + str;
        return split.join(decimalSymbol);
    };
    NumberFormat.processFraction = function (value, min, max) {
        var temp = (value + '').split('.')[1];
        var length = temp ? temp.length : 0;
        if (min && length < min) {
            var ret = '';
            if (length === 0) {
                ret = value.toFixed(min);
            }
            else {
                ret += value;
                for (var j = 0; j < min - length; j++) {
                    ret += '0';
                }
                return ret;
            }
            return value.toFixed(min);
        }
        else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(max) && (length > max || max === 0)) {
            return value.toFixed(max);
        }
        return value + '';
    };
    NumberFormat.processMinimumIntegers = function (value, min) {
        var temp = value.split('.');
        var lead = temp[0];
        var len = lead.length;
        if (len < min) {
            for (var i = 0; i < min - len; i++) {
                lead = '0' + lead;
            }
            temp[0] = lead;
        }
        return temp.join('.');
    };
    return NumberFormat;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var MODULE_SUFFIX = 'Module';
var ModuleLoader = (function () {
    function ModuleLoader(parent) {
        this.loadedModules = [];
        this.parent = parent;
    }
    ;
    ModuleLoader.prototype.inject = function (requiredModules, moduleList) {
        var reqLength = requiredModules.length;
        if (reqLength === 0) {
            this.clean();
            return;
        }
        if (this.loadedModules.length) {
            this.clearUnusedModule(requiredModules);
        }
        for (var i = 0; i < reqLength; i++) {
            var modl = requiredModules[i];
            for (var _i = 0, moduleList_1 = moduleList; _i < moduleList_1.length; _i++) {
                var module = moduleList_1[_i];
                var modName = modl.member;
                if (module.prototype.getModuleName() === modl.member && !this.isModuleLoaded(modName)) {
                    var moduleObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(module, modl.args);
                    var memberName = this.getMemberName(modName);
                    if (modl.isProperty) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(memberName, module, this.parent);
                    }
                    else {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(memberName, moduleObject, this.parent);
                    }
                    var loadedModule = modl;
                    loadedModule.member = memberName;
                    this.loadedModules.push(loadedModule);
                }
            }
        }
    };
    ModuleLoader.prototype.clean = function () {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var modules = _a[_i];
            if (!modules.isProperty) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(modules.member, this.parent).destroy();
            }
        }
        this.loadedModules = [];
    };
    ModuleLoader.prototype.clearUnusedModule = function (moduleList) {
        var _this = this;
        var usedModules = moduleList.map(function (arg) { return _this.getMemberName(arg.member); });
        var removableModule = this.loadedModules.filter(function (module) {
            return usedModules.indexOf(module.member) === -1;
        });
        for (var _i = 0, removableModule_1 = removableModule; _i < removableModule_1.length; _i++) {
            var mod = removableModule_1[_i];
            if (!mod.isProperty) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(mod.member, this.parent).destroy();
            }
            this.loadedModules.splice(this.loadedModules.indexOf(mod), 1);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* deleteObject */])(this.parent, mod.member);
        }
    };
    ModuleLoader.prototype.getMemberName = function (name) {
        return name[0].toLowerCase() + name.substring(1) + MODULE_SUFFIX;
    };
    ModuleLoader.prototype.isModuleLoaded = function (modName) {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var mod = _a[_i];
            if (mod.member === this.getMemberName(modName)) {
                return true;
            }
        }
        return false;
    };
    return ModuleLoader;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ajax; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var headerRegex = /^(.*?):[ \t]*([^\r\n]*)$/gm;
var defaultType = 'GET';
var Ajax = (function () {
    function Ajax(options, type, async) {
        this.mode = true;
        this.options = {};
        if (typeof options === 'string') {
            this.url = options;
            this.type = type ? type.toUpperCase() : defaultType;
            this.mode = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(async) ? async : true;
        }
        else if (typeof options === 'object') {
            this.options = options;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, this.options);
        }
        this.type = this.type ? this.type.toUpperCase() : defaultType;
    }
    Ajax.prototype.send = function (data) {
        var _this = this;
        this.data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(data) ? this.data : data;
        var promise = new Promise(function (resolve, reject) {
            _this.httpRequest = new XMLHttpRequest();
            _this.httpRequest.onreadystatechange = function () { _this.stateChange(resolve, reject); };
            _this.httpRequest.open(_this.type, _this.url, _this.mode);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.data)) {
                _this.httpRequest.setRequestHeader('Content-Type', _this.contentType || 'application/json; charset=utf-8');
            }
            if (_this.beforeSend) {
                _this.beforeSend();
            }
            _this.httpRequest.send(!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.data) ? _this.data : null);
        });
        return promise;
    };
    Ajax.prototype.successHandler = function (data) {
        if (this.onSuccess) {
            this.onSuccess(data, this);
        }
        return data;
    };
    Ajax.prototype.failureHandler = function (reason) {
        if (this.onFailure) {
            this.onFailure(this.httpRequest);
        }
        return reason;
    };
    Ajax.prototype.stateChange = function (resolve, reject) {
        var data = this.httpRequest.responseText;
        if (this.dataType && this.dataType.toLowerCase() === 'json') {
            if (data === '') {
                data = undefined;
            }
            else {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                }
            }
        }
        if (this.httpRequest.readyState === 4) {
            if (this.httpRequest.status === 200 || this.httpRequest.status === 304) {
                resolve(this.successHandler(data));
            }
            else {
                reject(new Error(this.failureHandler(this.httpRequest.statusText)));
            }
        }
    };
    Ajax.prototype.getResponseHeader = function (key) {
        var responseHeaders;
        var header;
        responseHeaders = {};
        var headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        while (headers) {
            responseHeaders[headers[1].toLowerCase()] = headers[2];
            headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        }
        header = responseHeaders[key.toLowerCase()];
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(header) ? null : header;
    };
    return Ajax;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
/* harmony export (immutable) */ __webpack_exports__["b"] = rippleEffect;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isRippleEnabled; });
/* harmony export (immutable) */ __webpack_exports__["d"] = enableRipple;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notify_property_change__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
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





var Animation = Animation_1 = (function (_super) {
    __extends(Animation, _super);
    function Animation(options) {
        var _this = _super.call(this, options, undefined) || this;
        _this.easing = {
            ease: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
            linear: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
            easeIn: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
            easeOut: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
            easeInOut: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
            elasticInOut: 'cubic-bezier(0.5,-0.58,0.38,1.81)',
            elasticIn: 'cubic-bezier(0.17,0.67,0.59,1.81)',
            elasticOut: 'cubic-bezier(0.7,-0.75,0.99,1.01)'
        };
        return _this;
    }
    Animation.prototype.animate = function (element, options) {
        options = !options ? {} : options;
        var model = this.getModel(options);
        if (typeof element === 'string') {
            var elements = Array.prototype.slice.call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["k" /* selectAll */])(element, document));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element_1 = elements_1[_i];
                model.element = element_1;
                Animation_1.delayAnimation(model);
            }
        }
        else {
            model.element = element;
            Animation_1.delayAnimation(model);
        }
    };
    Animation.stop = function (element, model) {
        element.style.animation = '';
        element.removeAttribute('e-animate');
        var animationId = element.getAttribute('e-animation-id');
        if (animationId) {
            var frameId = parseInt(animationId, 10);
            cancelAnimationFrame(frameId);
            element.removeAttribute('e-animation-id');
        }
        if (model && model.end) {
            model.end.call(this, model);
        }
    };
    Animation.delayAnimation = function (model) {
        if (model.delay) {
            setTimeout(function () { Animation_1.applyAnimation(model); }, model.delay);
        }
        else {
            Animation_1.applyAnimation(model);
        }
    };
    Animation.applyAnimation = function (model) {
        var _this = this;
        model.timeStamp = 0;
        var step = 0;
        var timerId = 0;
        var startTime = 0;
        var prevTimeStamp = 0;
        var duration = model.duration;
        model.element.setAttribute('e-animate', 'true');
        var startAnimation = function (timeStamp) {
            try {
                if (timeStamp) {
                    prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
                    model.timeStamp = (timeStamp + model.timeStamp) - prevTimeStamp;
                    prevTimeStamp = timeStamp;
                    if (!step && model.begin) {
                        model.begin.call(_this, model);
                    }
                    step = step + 1;
                    var avg = model.timeStamp / step;
                    if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute('e-animate')) {
                        model.element.style.animation = model.name + ' ' + model.duration + 'ms ' + model.timingFunction;
                        if (model.progress) {
                            model.progress.call(_this, model);
                        }
                        requestAnimationFrame(startAnimation);
                    }
                    else {
                        cancelAnimationFrame(timerId);
                        model.element.removeAttribute('e-animation-id');
                        model.element.removeAttribute('e-animate');
                        model.element.style.animation = '';
                        if (model.end) {
                            model.end.call(_this, model);
                        }
                    }
                }
                else {
                    startTime = performance.now();
                    timerId = requestAnimationFrame(startAnimation);
                    model.element.setAttribute('e-animation-id', timerId.toString());
                }
            }
            catch (e) {
                cancelAnimationFrame(timerId);
                model.element.removeAttribute('e-animation-id');
                if (model.fail) {
                    model.fail.call(_this, e);
                }
            }
        };
        startAnimation();
    };
    Animation.prototype.getModel = function (options) {
        return {
            name: options.name || this.name,
            delay: options.delay || this.delay,
            duration: (options.duration !== undefined ? options.duration : this.duration),
            begin: options.begin || this.begin,
            end: options.end || this.end,
            fail: options.fail || this.fail,
            progress: options.progress || this.progress,
            timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] :
                (options.timingFunction || this.easing[this.timingFunction])
        };
    };
    Animation.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Animation.prototype.getModuleName = function () {
        return 'animation';
    };
    Animation.prototype.destroy = function () {
    };
    return Animation;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])('FadeIn')
], Animation.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])(400)
], Animation.prototype, "duration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])('ease')
], Animation.prototype, "timingFunction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])(0)
], Animation.prototype, "delay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "progress", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "begin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "end", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "fail", void 0);
Animation = Animation_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_4__notify_property_change__["g" /* NotifyPropertyChanges */]
], Animation);

function rippleEffect(element, rippleOptions, done) {
    var rippleModel = getRippleModel(rippleOptions);
    if (rippleModel.rippleFlag === false || (rippleModel.rippleFlag === undefined && !isRippleEnabled)) {
        return Function;
    }
    element.setAttribute('data-ripple', 'true');
    __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mousedown', rippleHandler, { parent: element, rippleOptions: rippleModel });
    __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mouseup', rippleUpHandler, { parent: element, rippleOptions: rippleModel, done: done });
    __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mouseleave', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    if (__WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].isPointer) {
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'transitionend', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    }
    return (function () {
        element.removeAttribute('data-ripple');
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mousedown', rippleHandler);
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mouseup', rippleUpHandler);
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mouseleave', rippleLeaveHandler);
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'transitionend', rippleLeaveHandler);
    });
}
function getRippleModel(rippleOptions) {
    var rippleModel = {
        selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
        ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
        rippleFlag: rippleOptions && rippleOptions.rippleFlag,
        isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
        duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
    };
    return rippleModel;
}
function rippleHandler(e) {
    var target = (e.target);
    var selector = this.rippleOptions.selector;
    var element = selector ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["l" /* closest */])(target, selector) : target;
    if (!element || (this.rippleOptions && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["l" /* closest */])(target, this.rippleOptions.ignore))) {
        return;
    }
    var offset = element.getBoundingClientRect();
    var offsetX = e.pageX - document.body.scrollLeft;
    var offsetY = e.pageY - document.body.scrollTop;
    var pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right));
    var pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom));
    var radius = Math.sqrt(pageX * pageX + pageY * pageY);
    var diameter = radius * 2 + 'px';
    var x = offsetX - offset.left - radius;
    var y = offsetY - offset.top - radius;
    if (this.rippleOptions && this.rippleOptions.isCenterRipple) {
        x = 0;
        y = 0;
        diameter = '100%';
    }
    element.classList.add('e-ripple');
    var duration = this.rippleOptions.duration.toString();
    var styles = 'width: ' + diameter + ';height: ' + diameter + ';left: ' + x + 'px;top: ' + y + 'px;' +
        'transition-duration: ' + duration + 'ms;';
    var rippleElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["a" /* createElement */])('div', { className: 'e-ripple-element', styles: styles });
    element.appendChild(rippleElement);
    window.getComputedStyle(rippleElement).getPropertyValue('opacity');
    rippleElement.style.transform = 'scale(1)';
    if (element !== this.parent) {
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mouseleave', rippleLeaveHandler, { parent: this.parent, rippleOptions: this.rippleOptions });
    }
}
function rippleUpHandler(e) {
    removeRipple(e, this);
}
function rippleLeaveHandler(e) {
    removeRipple(e, this);
}
function removeRipple(e, eventArgs) {
    var duration = eventArgs.rippleOptions.duration;
    var target = (e.target);
    var selector = eventArgs.rippleOptions.selector;
    var element = selector ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["l" /* closest */])(target, selector) : target;
    if (!element || (element && element.className.indexOf('e-ripple') === -1)) {
        return;
    }
    var rippleElements = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["k" /* selectAll */])('.e-ripple-element', element);
    var rippleElement = rippleElements[rippleElements.length - 1];
    if (rippleElement) {
        rippleElement.style.opacity = '0.5';
    }
    if (eventArgs.parent !== element) {
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mouseleave', rippleLeaveHandler);
    }
    setTimeout(function () {
        if (rippleElement && rippleElement.parentNode) {
            rippleElement.parentNode.removeChild(rippleElement);
        }
        if (!element.getElementsByClassName('e-ripple-element').length) {
            element.classList.remove('e-ripple');
        }
        if (eventArgs.done) {
            eventArgs.done(e);
        }
    }, duration);
}
var isRippleEnabled = false;
function enableRipple(isRipple) {
    isRippleEnabled = isRipple;
    return isRippleEnabled;
}
var Animation_1;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var CanvasRenderer = (function () {
    function CanvasRenderer(rootID) {
        this.rootId = rootID;
    }
    CanvasRenderer.prototype.getOptionValue = function (options, key) {
        return options[key];
    };
    CanvasRenderer.prototype.createCanvas = function (options) {
        var canvasObj = document.createElement('canvas');
        canvasObj.setAttribute('id', this.rootId + '_canvas');
        this.ctx = canvasObj.getContext('2d');
        this.canvasObj = canvasObj;
        this.setCanvasSize(options.width, options.height);
        return this.canvasObj;
    };
    CanvasRenderer.prototype.setCanvasSize = function (width, height) {
        var element = document.getElementById(this.rootId);
        var size = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(element) ? element.getBoundingClientRect() : null;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.width)) {
            this.canvasObj.setAttribute('width', width ? width.toString() : size.width.toString());
        }
        else {
            this.canvasObj.setAttribute('width', this.width.toString());
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.height)) {
            this.canvasObj.setAttribute('height', height ? height.toString() : '450');
        }
        else {
            this.canvasObj.setAttribute('height', this.height.toString());
        }
    };
    CanvasRenderer.prototype.setAttributes = function (options) {
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        var dashArray = this.getOptionValue(options, 'stroke-dasharray');
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(dashArray)) {
            var dashArrayString = dashArray.split(',');
            this.ctx.setLineDash([parseInt(dashArrayString[0], 10), parseInt(dashArrayString[1], 10)]);
        }
        this.ctx.strokeStyle = this.getOptionValue(options, 'stroke');
    };
    CanvasRenderer.prototype.drawLine = function (options) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.moveTo(options.x1, options.y1);
        this.ctx.lineTo(options.x2, options.y2);
        this.ctx.stroke();
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawRectangle = function (options) {
        var canvasCtx = this.ctx;
        var cornerRadius = options.rx;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.globalAlpha = this.getOptionValue(options, 'opacity');
        this.setAttributes(options);
        this.ctx.rect(options.x, options.y, options.width, options.height);
        if (cornerRadius !== null && cornerRadius >= 0) {
            this.drawCornerRadius(options);
        }
        else {
            if (options.fill === 'none') {
                options.fill = 'transparent';
            }
            this.ctx.fillStyle = options.fill;
            this.ctx.fillRect(options.x, options.y, options.width, options.height);
            this.ctx.stroke();
        }
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawCornerRadius = function (options) {
        var cornerRadius = options.rx;
        var x = options.x;
        var y = options.y;
        var width = options.width;
        var height = options.height;
        if (options.fill === 'none') {
            options.fill = 'transparent';
        }
        this.ctx.fillStyle = options.fill;
        if (width < 2 * cornerRadius) {
            cornerRadius = width / 2;
        }
        if (height < 2 * cornerRadius) {
            cornerRadius = height / 2;
        }
        this.ctx.beginPath();
        this.ctx.moveTo(x + width - cornerRadius, y);
        this.ctx.arcTo(x + width, y, x + width, y + height, cornerRadius);
        this.ctx.arcTo(x + width, y + height, x, y + height, cornerRadius);
        this.ctx.arcTo(x, y + height, x, y, cornerRadius);
        this.ctx.arcTo(x, y, x + width, y, cornerRadius);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawPath = function (options, canvasTranslate) {
        var path = options.d;
        var dataSplit = path.split(' ');
        var borderWidth = this.getOptionValue(options, 'stroke-width');
        var canvasCtx = this.ctx;
        var flag = true;
        this.ctx.save();
        this.ctx.beginPath();
        if (canvasTranslate) {
            this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
        }
        this.ctx.globalAlpha = options.opacity ? options.opacity : this.getOptionValue(options, 'fill-opacity');
        this.setAttributes(options);
        for (var i = 0; i < dataSplit.length; i = i + 3) {
            var x1 = parseFloat(dataSplit[i + 1]);
            var y1 = parseFloat(dataSplit[i + 2]);
            switch (dataSplit[i]) {
                case 'M':
                    if (!options.innerR && !options.cx) {
                        this.ctx.moveTo(x1, y1);
                    }
                    break;
                case 'L':
                    if (!options.innerR) {
                        this.ctx.lineTo(x1, y1);
                    }
                    break;
                case 'C':
                    var c1 = parseFloat(dataSplit[i + 3]);
                    var c2 = parseFloat(dataSplit[i + 4]);
                    var c3 = parseFloat(dataSplit[i + 5]);
                    var c4 = parseFloat(dataSplit[i + 6]);
                    this.ctx.bezierCurveTo(x1, y1, c1, c2, c3, c4);
                    i = i + 4;
                    break;
                case 'A':
                    if (!options.innerR) {
                        if (options.cx) {
                            this.ctx.arc(options.cx, options.cy, options.radius, 0, 2 * Math.PI, options.counterClockWise);
                        }
                        else {
                            this.ctx.moveTo(options.x, options.y);
                            this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                            this.ctx.lineTo(options.x, options.y);
                        }
                    }
                    else if (flag) {
                        this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                        this.ctx.arc(options.x, options.y, options.innerR, options.end, options.start, !options.counterClockWise);
                        flag = false;
                    }
                    i = i + 5;
                    break;
                case 'z':
                    this.ctx.closePath();
                    break;
            }
        }
        if (options.fill !== 'none' && options.fill !== undefined) {
            this.ctx.fillStyle = options.fill;
            this.ctx.fill();
        }
        if (borderWidth > 0) {
            this.ctx.stroke();
        }
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawText = function (options, label) {
        var fontWeight = this.getOptionValue(options, 'font-weight');
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(fontWeight) && fontWeight.toLowerCase() === 'regular') {
            fontWeight = 'normal';
        }
        var fontSize = this.getOptionValue(options, 'font-size');
        var fontFamily = this.getOptionValue(options, 'font-family');
        var fontStyle = this.getOptionValue(options, 'font-style').toLowerCase();
        var font = (fontStyle + ' ' + fontWeight + ' ' + fontSize + ' ' + fontFamily);
        var anchor = this.getOptionValue(options, 'text-anchor');
        var opacity = options.opacity !== undefined ? options.opacity : 1;
        if (anchor === 'middle') {
            anchor = 'center';
        }
        this.ctx.save();
        this.ctx.fillStyle = options.fill;
        this.ctx.font = font;
        this.ctx.textAlign = anchor;
        this.ctx.globalAlpha = opacity;
        if (options.baseline) {
            this.ctx.textBaseline = options.baseline;
        }
        var txtlngth = 0;
        this.ctx.translate(options.x + (txtlngth / 2), options.y);
        this.ctx.rotate(options.labelRotation * Math.PI / 180);
        this.ctx.fillText(label, 0, 0);
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawCircle = function (options) {
        var canvasCtx = this.ctx;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(options.cx, options.cy, options.r, 0, 2 * Math.PI);
        this.ctx.fillStyle = options.fill;
        this.ctx.globalAlpha = options.opacity;
        this.ctx.fill();
        this.setAttributes(options);
        this.ctx.stroke();
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawPolyline = function (options) {
        this.ctx.save();
        this.ctx.beginPath();
        var points = options.points.split(' ');
        for (var i = 0; i < points.length - 1; i++) {
            var point = points[i].split(',');
            var x = parseFloat(point[0]);
            var y = parseFloat(point[1]);
            if (i === 0) {
                this.ctx.moveTo(x, y);
            }
            else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.stroke();
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawEllipse = function (options) {
        var canvasCtx = this.ctx;
        var circumference = Math.max(options.rx, options.ry);
        var scaleX = options.rx / circumference;
        var scaleY = options.ry / circumference;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(options.cx, options.cy);
        this.ctx.save();
        this.ctx.scale(scaleX, scaleY);
        this.ctx.arc(0, 0, circumference, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = options.fill;
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.stroke();
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawImage = function (options) {
        this.ctx.save();
        var imageObj = new Image();
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.href)) {
            imageObj.src = options.href;
            this.ctx.drawImage(imageObj, options.x, options.y, options.width, options.height);
        }
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.createLinearGradient = function (colors) {
        var myGradient;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            myGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasObj.height);
        }
        var color = this.setGradientValues(colors, myGradient);
        return color;
    };
    CanvasRenderer.prototype.createRadialGradient = function (colors) {
        var myGradient;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            myGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, this.canvasObj.height);
        }
        var colorName = this.setGradientValues(colors, myGradient);
        return colorName;
    };
    CanvasRenderer.prototype.setGradientValues = function (colors, myGradient) {
        var colorName;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            for (var i = 0; i <= colors.length - 1; i++) {
                var color = colors[i].color;
                var newColorStop = (colors[i].colorStop).slice(0, -1);
                var stopColor = parseInt(newColorStop, 10) / 100;
                myGradient.addColorStop(stopColor, color);
            }
            colorName = myGradient.toString();
        }
        else {
            colorName = colors[0].color.toString();
        }
        this.dataUrl = this.canvasObj.toDataURL();
        return colorName;
    };
    CanvasRenderer.prototype.setElementAttributes = function (options, element) {
        var keys = Object.keys(options);
        var values = Object.keys(options).map(function (key) { return options[key]; });
        for (var i = 0; i < keys.length; i++) {
            element.setAttribute(keys[i], values[i]);
        }
        return element;
    };
    CanvasRenderer.prototype.updateCanvasAttributes = function (options) {
        this.setElementAttributes(options, this.canvasObj);
        var ctx = this.ctx;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.dataUrl)) {
            var img_1 = new Image;
            img_1.onload = function () {
                ctx.drawImage(img_1, 0, 0);
            };
            img_1.src = this.dataUrl;
        }
    };
    return CanvasRenderer;
}());



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_loader__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_property__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notify_property_change__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internationalization__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
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







var Component = (function (_super) {
    __extends(Component, _super);
    function Component(options, selector) {
        var _this = _super.call(this, options, selector) || this;
        _this.needsID = false;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.enableRtl)) {
            _this.setProperties({ 'enableRtl': __WEBPACK_IMPORTED_MODULE_6__internationalization__["b" /* rightToLeft */] }, true);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.locale)) {
            _this.setProperties({ 'locale': __WEBPACK_IMPORTED_MODULE_6__internationalization__["d" /* defaultCulture */] }, true);
        }
        _this.moduleLoader = new __WEBPACK_IMPORTED_MODULE_1__module_loader__["a" /* ModuleLoader */](_this);
        _this.localObserver = new __WEBPACK_IMPORTED_MODULE_3__observer__["a" /* Observer */](_this);
        _this.detectFunction = new Function('args', 'var prop = Object.keys(args); if(prop.length){this[prop[0]] = args[prop[0]];}');
        __WEBPACK_IMPORTED_MODULE_6__internationalization__["a" /* onIntlChange */].on('notifyExternalChange', _this.detectFunction, _this);
        if (_this.enablePersistence) {
            window.addEventListener('unload', _this.setPersistData.bind(_this));
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(selector)) {
            _this.appendTo();
        }
        return _this;
    }
    Component.prototype.requiredModules = function () {
        return [];
    };
    ;
    Component.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        this.localObserver.destroy();
        if (this.refreshing) {
            return;
        }
        this.trigger('destroyed', { cancel: false });
        _super.prototype.destroy.call(this);
        this.moduleLoader.clean();
        __WEBPACK_IMPORTED_MODULE_6__internationalization__["a" /* onIntlChange */].off('notifyExternalChange', this.detectFunction);
        if (this.enablePersistence) {
            this.setPersistData();
        }
    };
    Component.prototype.refresh = function () {
        this.refreshing = true;
        this.destroy();
        this.clearChanges();
        this.localObserver = new __WEBPACK_IMPORTED_MODULE_3__observer__["a" /* Observer */](this);
        this.preRender();
        this.injectModules();
        this.render();
        this.refreshing = false;
    };
    Component.prototype.appendTo = function (selector) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(selector) && typeof (selector) === 'string') {
            this.element = document.querySelector(selector);
        }
        else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(selector)) {
            this.element = selector;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.element)) {
            if (this.needsID && !this.element.id) {
                this.element.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* getUniqueID */])(this.getModuleName());
            }
            this.isProtectedOnChange = false;
            var inst = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('ej2_instances', this.element);
            if (!inst || inst.indexOf(this) === -1) {
                _super.prototype.addInstance.call(this);
            }
            this.preRender();
            if (this.enablePersistence) {
                this.mergePersistData();
            }
            this.injectModules();
            this.render();
            this.trigger('created');
        }
    };
    Component.prototype.dataBind = function () {
        this.injectModules();
        _super.prototype.dataBind.call(this);
    };
    ;
    Component.prototype.on = function (event, handler, context) {
        if (typeof event === 'string') {
            this.localObserver.on(event, handler, context);
        }
        else {
            for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                var arg = event_1[_i];
                this.localObserver.on(arg.event, arg.handler, arg.context);
            }
        }
    };
    Component.prototype.off = function (event, handler) {
        if (typeof event === 'string') {
            this.localObserver.off(event, handler);
        }
        else {
            for (var _i = 0, event_2 = event; _i < event_2.length; _i++) {
                var arg = event_2[_i];
                this.localObserver.off(arg.event, arg.handler);
            }
        }
    };
    Component.prototype.notify = function (property, argument) {
        if (this.isDestroyed !== true) {
            this.localObserver.notify(property, argument);
        }
    };
    Component.prototype.getInjectedModules = function () {
        return this.injectedModules;
    };
    ;
    Component.Inject = function () {
        var moduleList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            moduleList[_i] = arguments[_i];
        }
        if (!this.prototype.injectedModules) {
            this.prototype.injectedModules = [];
        }
        for (var i = 0; i < moduleList.length; i++) {
            if (this.prototype.injectedModules.indexOf(moduleList[i]) === -1) {
                this.prototype.injectedModules.push(moduleList[i]);
            }
        }
    };
    Component.prototype.injectModules = function () {
        if (this.injectedModules && this.injectedModules.length) {
            this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
        }
    };
    Component.prototype.mergePersistData = function () {
        var data = window.localStorage.getItem(this.getModuleName() + this.element.id);
        if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(data) || (data === ''))) {
            this.setProperties(JSON.parse(data), true);
        }
    };
    Component.prototype.setPersistData = function () {
        window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
    };
    Component.prototype.clearTemplate = function (templateName) {
    };
    Component.prototype.addOnPersist = function (options) {
        var _this = this;
        var persistObj = {};
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var key = options_1[_i];
            var objValue = void 0;
            objValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(key, this);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(objValue)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(key, this.getActualProperties(objValue), persistObj);
            }
        }
        return JSON.stringify(persistObj, function (key, value) {
            return _this.getActualProperties(value);
        });
    };
    Component.prototype.getActualProperties = function (obj) {
        if (obj instanceof __WEBPACK_IMPORTED_MODULE_4__child_property__["a" /* ChildProperty */]) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('properties', obj);
        }
        else {
            return obj;
        }
    };
    Component.prototype.ignoreOnPersist = function (options) {
        return JSON.stringify(this.iterateJsonProperties(this.properties, options));
    };
    Component.prototype.iterateJsonProperties = function (obj, ignoreList) {
        var newObj = {};
        var _loop_1 = function (key) {
            if (ignoreList.indexOf(key) === -1) {
                var value = obj[key];
                if (typeof value === 'object' && !(value instanceof Array)) {
                    var newList = ignoreList.filter(function (str) {
                        return new RegExp(key + '.').test(str);
                    }).map(function (str) {
                        return str.replace(key + '.', '');
                    });
                    newObj[key] = this_1.iterateJsonProperties(this_1.getActualProperties(value), newList);
                }
                else {
                    newObj[key] = value;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        return newObj;
    };
    return Component;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__notify_property_change__["a" /* Property */])(false)
], Component.prototype, "enablePersistence", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__notify_property_change__["a" /* Property */])()
], Component.prototype, "enableRtl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__notify_property_change__["a" /* Property */])()
], Component.prototype, "locale", void 0);
Component = __decorate([
    __WEBPACK_IMPORTED_MODULE_5__notify_property_change__["g" /* NotifyPropertyChanges */]
], Component);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Draggable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notify_property_change__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__child_property__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
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








var defaultPosition = { left: 0, top: 0, bottom: 0, right: 0 };
var positionProp = ['offsetLeft', 'offsetTop'];
var axisMapper = ['x', 'y'];
var axisValueMapper = ['left', 'top'];
var Position = (function (_super) {
    __extends(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Position;
}(__WEBPACK_IMPORTED_MODULE_5__child_property__["a" /* ChildProperty */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(0)
], Position.prototype, "left", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(0)
], Position.prototype, "top", void 0);
var Draggable = Draggable_1 = (function (_super) {
    __extends(Draggable, _super);
    function Draggable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.dragLimit = Draggable_1.getDefaultPosition();
        _this.borderWidth = Draggable_1.getDefaultPosition();
        _this.padding = Draggable_1.getDefaultPosition();
        _this.diffX = 0;
        _this.diffY = 0;
        _this.droppables = {};
        _this.bind();
        return _this;
    }
    Draggable.prototype.bind = function () {
        this.toggleEvents();
        if (__WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].isIE) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["b" /* addClass */])([this.element], 'e-block-touch');
        }
        this.droppables[this.scope] = {};
    };
    Draggable.getDefaultPosition = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["i" /* extend */])({}, defaultPosition);
    };
    Draggable.prototype.toggleEvents = function (isUnWire) {
        var ele;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(this.handle)) {
            ele = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["j" /* select */])(this.handle, this.element);
        }
        if (isUnWire) {
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(ele || this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchStartEvent, this.initialize);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(ele || this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchStartEvent, this.initialize, this);
        }
    };
    Draggable.prototype.initialize = function (evt) {
        this.target = evt.currentTarget;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches)) {
            evt.preventDefault();
        }
        if (this.abort) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["l" /* closest */])(evt.target, this.abort))) {
                return;
            }
        }
        this.element.setAttribute('aria-grabbed', 'true');
        var intCoord = this.getCoordinates(evt);
        this.initialPosition = { x: intCoord.pageX, y: intCoord.pageY };
        if (!this.clone) {
            var pos = this.element.getBoundingClientRect();
            this.relativeXPosition = intCoord.pageX - pos.left;
            this.relativeYPosition = intCoord.pageY - pos.top;
        }
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDragStart, this);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDestroy, this);
        this.toggleEvents(true);
        document.body.classList.add('e-prevent-select');
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].trigger(document.documentElement, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchStartEvent, evt);
    };
    Draggable.prototype.intDragStart = function (evt) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var intCordinate = this.getCoordinates(evt);
        var pos;
        var styleProp = getComputedStyle(this.element);
        this.margin = {
            left: parseInt(styleProp.marginLeft, 10),
            top: parseInt(styleProp.marginTop, 10),
            right: parseInt(styleProp.marginRight, 10),
            bottom: parseInt(styleProp.marginBottom, 10),
        };
        var element = this.element;
        if (this.clone && this.dragTarget) {
            var intClosest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["l" /* closest */])(evt.target, this.dragTarget);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(intClosest)) {
                element = intClosest;
            }
        }
        this.offset = this.calculateParentPosition(element);
        this.position = this.getMousePosition(evt);
        var x = this.initialPosition.x - intCordinate.pageX;
        var y = this.initialPosition.y - intCordinate.pageY;
        var distance = Math.sqrt((x * x) + (y * y));
        if (distance >= this.distance) {
            var ele = this.getHelperElement(evt);
            if (!ele || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(ele)) {
                return;
            }
            var dragTargetElement = this.helperElement = ele;
            this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent);
            if (this.dragStart) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStart', { event: evt, element: element, target: curTarget });
            }
            if (this.dragArea) {
                this.setDragArea();
            }
            else {
                this.dragLimit = { left: 0, right: 0, bottom: 0, top: 0 };
                this.borderWidth = { top: 0, left: 0 };
            }
            pos = { left: this.position.left - this.parentClientRect.left, top: this.position.top - this.parentClientRect.top };
            if (this.clone && !this.enableTailMode) {
                this.diffX = this.position.left - this.offset.left;
                this.diffY = this.position.top - this.offset.top;
            }
            var posValue = this.getProcessedPositionValue({ top: (pos.top - this.diffY) + 'px',
                left: (pos.left - this.diffX) + 'px' });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["o" /* setStyleAttribute */])(dragTargetElement, {
                position: 'absolute', top: posValue.top, left: posValue.left
            });
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDragStart);
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDestroy);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["d" /* isVisible */])(dragTargetElement)) {
                __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDrag, this);
                __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDragStop, this);
                this.setGlobalDroppables(false, this.element, dragTargetElement);
            }
            else {
                document.body.classList.remove('e-prevent-select');
            }
        }
    };
    Draggable.prototype.getProcessedPositionValue = function (value) {
        if (this.axis) {
            if (this.axis === 'x') {
                value.top = '0px';
            }
            else if (this.axis === 'y') {
                value.left = '0px';
            }
        }
        if (this.queryPositionInfo) {
            return this.queryPositionInfo(value);
        }
        return value;
    };
    Draggable.prototype.calculateParentPosition = function (ele) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(ele)) {
            return { left: 0, top: 0 };
        }
        var rect = ele.getBoundingClientRect();
        var style = getComputedStyle(ele);
        return {
            left: (rect.left + window.pageXOffset) - parseInt(style.marginLeft, 10),
            top: (rect.top + window.pageYOffset) - parseInt(style.marginTop, 10)
        };
    };
    Draggable.prototype.intDrag = function (evt) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var left;
        var top;
        this.position = this.getMousePosition(evt);
        var docHeight = this.getDocumentWidthHeight('Height');
        if (docHeight < this.position.top) {
            this.position.top = docHeight;
        }
        var docWidth = this.getDocumentWidthHeight('Width');
        if (docWidth < this.position.left) {
            this.position.left = docWidth;
        }
        if (this.drag) {
            var curTarget = this.getProperTargetElement(evt);
            this.trigger('drag', { event: evt, element: this.element, target: curTarget });
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.intOver(evt, eleObj.target);
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            this.hoverObject = eleObj;
        }
        else if (this.hoverObject) {
            this.hoverObject.instance.intOut(evt, eleObj.target);
            this.hoverObject.instance.dragData[this.scope] = null;
            this.hoverObject = null;
        }
        var helperElement = this.droppables[this.scope].helper;
        this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
        var tLeft = this.parentClientRect.left;
        var tTop = this.parentClientRect.top;
        var intCoord = this.getCoordinates(evt);
        var pagex = intCoord.pageX;
        var pagey = intCoord.pageY;
        var dLeft = this.position.left - this.diffX;
        var dTop = this.position.top - this.diffY;
        if (this.dragArea) {
            var styles = getComputedStyle(helperElement);
            if (this.pageX !== pagex || this.skipDistanceCheck) {
                var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft)
                    + parseFloat(styles.marginRight));
                if (this.dragLimit.left > dLeft) {
                    left = this.dragLimit.left;
                }
                else if (this.dragLimit.right < dLeft + helperWidth) {
                    left = this.dragLimit.right - helperWidth;
                }
                else {
                    left = dLeft;
                }
            }
            if (this.pageY !== pagey || this.skipDistanceCheck) {
                var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop)
                    + parseFloat(styles.marginBottom));
                if (this.dragLimit.top > dTop) {
                    top = this.dragLimit.top;
                }
                else if (this.dragLimit.bottom < dTop + helperHeight) {
                    top = this.dragLimit.bottom - helperHeight;
                }
                else {
                    top = dTop;
                }
            }
        }
        else {
            left = dLeft;
            top = dTop;
        }
        var iTop = tTop + this.borderWidth.top;
        var iLeft = tLeft + this.borderWidth.left;
        var dragValue = this.getProcessedPositionValue({ top: (top - iTop) + 'px', left: (left - iLeft) + 'px' });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["o" /* setStyleAttribute */])(helperElement, { left: dragValue.left, top: dragValue.top });
        this.position.left = left;
        this.position.top = top;
        this.pageX = pagex;
        this.pageY = pagey;
    };
    Draggable.prototype.getDocumentWidthHeight = function (str) {
        var docBody = document.body;
        var docEle = document.documentElement;
        var returnValue = Math.max(docBody['scroll' + str], docEle['scroll' + str], docBody['offset' + str], docEle['offset' + str], docEle['client' + str]);
        return returnValue;
    };
    Draggable.prototype.intDragStop = function (evt) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var type = ['touchend', 'pointerup', 'mouseup'];
        if (type.indexOf(evt.type) !== -1) {
            if (this.dragStop) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStop', { event: evt, element: this.element, target: curTarget, helper: this.helperElement });
            }
            this.intDestroy(evt);
        }
        else {
            this.element.setAttribute('aria-grabbed', 'false');
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.dragStopCalled = true;
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            eleObj.instance.intDrop(evt, eleObj.target);
        }
        this.setGlobalDroppables(true);
        document.body.classList.remove('e-prevent-select');
    };
    Draggable.prototype.intDestroy = function (evt) {
        this.toggleEvents();
        document.body.classList.remove('e-prevent-select');
        this.element.setAttribute('aria-grabbed', 'false');
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDragStart);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDragStop);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDestroy);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDrag);
    };
    Draggable.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Draggable.prototype.getModuleName = function () {
        return 'draggable';
    };
    Draggable.prototype.setDragArea = function () {
        var eleWidthBound;
        var eleHeightBound;
        var top = 0;
        var left = 0;
        var ele;
        var type = typeof this.dragArea;
        if (type === 'string') {
            ele = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["j" /* select */])(this.dragArea);
        }
        else {
            ele = this.dragArea;
        }
        if (ele) {
            var elementArea = ele.getBoundingClientRect();
            eleWidthBound = elementArea.width ? elementArea.width : elementArea.right - elementArea.left;
            eleHeightBound = elementArea.height ? elementArea.height : elementArea.bottom - elementArea.top;
            var keys = ['Top', 'Left', 'Bottom', 'Right'];
            var styles = getComputedStyle(ele);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var tborder = styles['border' + key + 'Width'];
                var tpadding = styles['padding' + key];
                var lowerKey = key.toLowerCase();
                this.borderWidth[lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder);
                this.padding[lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
            }
            top = elementArea.top;
            left = elementArea.left;
            this.dragLimit.left = left + this.borderWidth.left + this.padding.left;
            this.dragLimit.top = top + this.borderWidth.top + this.padding.top;
            this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right);
            this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
        }
    };
    Draggable.prototype.getProperTargetElement = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var ele;
        var prevStyle = this.helperElement.style.display || '';
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["p" /* compareElementParent */])(evt.target, this.helperElement) || evt.type.indexOf('touch') !== -1) {
            this.helperElement.style.display = 'none';
            ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY);
            this.helperElement.style.display = prevStyle;
        }
        else {
            ele = evt.target;
        }
        return ele;
    };
    Draggable.prototype.getMousePosition = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var pageX = this.clone ? intCoord.pageX : intCoord.pageX - this.relativeXPosition;
        var pageY = this.clone ? intCoord.pageY : intCoord.pageY - this.relativeYPosition;
        return {
            left: pageX - (this.margin.left + this.cursorAt.left),
            top: pageY - (this.margin.top + this.cursorAt.top)
        };
    };
    Draggable.prototype.getCoordinates = function (evt) {
        if (evt.type.indexOf('touch') > -1) {
            return evt.changedTouches[0];
        }
        return evt;
    };
    Draggable.prototype.getHelperElement = function (evt) {
        var element;
        if (this.clone) {
            if (this.helper) {
                element = this.helper({ sender: evt, element: this.target });
            }
            else {
                element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["a" /* createElement */])('div', { className: 'e-drag-helper e-block-touch', innerHTML: 'Draggable' });
                document.body.appendChild(element);
            }
        }
        else {
            element = this.element;
        }
        return element;
    };
    Draggable.prototype.setGlobalDroppables = function (reset, drag, helper) {
        this.droppables[this.scope] = reset ? null : {
            draggable: drag,
            helper: helper,
            draggedElement: this.element
        };
    };
    Draggable.prototype.checkTargetElement = function (evt) {
        var target = this.getProperTargetElement(evt);
        var dropIns = this.getDropInstance(target);
        if (!dropIns && target && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(target.parentNode)) {
            var parent_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["l" /* closest */])(target.parentNode, '.e-droppable') || target.parentElement;
            if (parent_1) {
                dropIns = this.getDropInstance(parent_1);
            }
        }
        return { target: target, instance: dropIns };
    };
    Draggable.prototype.getDropInstance = function (ele) {
        var name = 'getModuleName';
        var drop;
        var eleInst = ele && ele.ej2_instances;
        if (eleInst) {
            for (var _i = 0, eleInst_1 = eleInst; _i < eleInst_1.length; _i++) {
                var inst = eleInst_1[_i];
                if (inst[name]() === 'droppable') {
                    drop = inst;
                    break;
                }
            }
        }
        return drop;
    };
    Draggable.prototype.destroy = function () {
        this.toggleEvents(true);
        _super.prototype.destroy.call(this);
    };
    return Draggable;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["b" /* Complex */])({}, Position)
], Draggable.prototype, "cursorAt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(true)
], Draggable.prototype, "clone", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "dragArea", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Draggable.prototype, "drag", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Draggable.prototype, "dragStart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Draggable.prototype, "dragStop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(1)
], Draggable.prototype, "distance", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "handle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "abort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "helper", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])('default')
], Draggable.prototype, "scope", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])('')
], Draggable.prototype, "dragTarget", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "axis", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "queryPositionInfo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(false)
], Draggable.prototype, "enableTailMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(false)
], Draggable.prototype, "skipDistanceCheck", void 0);
Draggable = Draggable_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_3__notify_property_change__["g" /* NotifyPropertyChanges */]
], Draggable);

var Draggable_1;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Droppable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notify_property_change__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
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






var Droppable = (function (_super) {
    __extends(Droppable, _super);
    function Droppable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.mouseOver = false;
        _this.dragData = {};
        _this.dragStopCalled = false;
        _this.bind();
        return _this;
    }
    Droppable.prototype.bind = function () {
        this.wireEvents();
    };
    Droppable.prototype.wireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDrop, this);
    };
    Droppable.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Droppable.prototype.getModuleName = function () {
        return 'droppable';
    };
    Droppable.prototype.intOver = function (event, element) {
        if (!this.mouseOver) {
            this.trigger('over', { event: event, target: element });
            this.mouseOver = true;
        }
    };
    Droppable.prototype.intOut = function (event, element) {
        if (this.mouseOver) {
            this.trigger('out', { evt: event, target: element });
            this.mouseOver = false;
        }
    };
    Droppable.prototype.intDrop = function (evt, element) {
        if (!this.dragStopCalled) {
            return;
        }
        else {
            this.dragStopCalled = false;
        }
        var accept = true;
        var drag = this.dragData[this.scope];
        var isDrag = drag ? (drag.helper && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["d" /* isVisible */])(drag.helper)) : false;
        var area;
        if (isDrag) {
            area = this.isDropArea(evt, drag.helper, element);
            if (this.accept) {
                accept = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["q" /* matches */])(drag.helper, this.accept);
            }
        }
        if (isDrag && this.drop && area.canDrop && accept) {
            this.trigger('drop', { event: evt, target: area.target, droppedElement: drag.helper, dragData: drag });
        }
    };
    Droppable.prototype.isDropArea = function (evt, helper, element) {
        var area = { canDrop: true, target: element || evt.target };
        var isTouch = evt.type === 'touchend';
        if (isTouch || area.target === helper) {
            helper.style.display = 'none';
            var coord = isTouch ? (evt.changedTouches[0]) : evt;
            var ele = document.elementFromPoint(coord.clientX, coord.clientY);
            area.canDrop = false;
            area.canDrop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["p" /* compareElementParent */])(ele, this.element);
            if (area.canDrop) {
                area.target = ele;
            }
            helper.style.display = '';
        }
        return area;
    };
    Droppable.prototype.destroy = function () {
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDrop);
        _super.prototype.destroy.call(this);
    };
    return Droppable;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Droppable.prototype, "accept", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])('default')
], Droppable.prototype, "scope", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Droppable.prototype, "drop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Droppable.prototype, "over", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Droppable.prototype, "out", void 0);
Droppable = __decorate([
    __WEBPACK_IMPORTED_MODULE_3__notify_property_change__["g" /* NotifyPropertyChanges */]
], Droppable);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intl_base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



var number = 'numbers';
var defNoSystem = 'defaultNumberingSystem';
var noSystem = 'numberingSystem';
var standalone = 'stand-alone';
var curWeekDay = 'curWeekDay';
var latnRegex = /^[0-9]*$/;
var abbreviateRegex = /\/MMMMM|MMMM|MMM|a|LLL|EEEEE|EEEE|E|ccc/;
var timeSetter = {
    minute: 'setMinutes',
    hour: 'setHours',
    second: 'setSeconds',
    day: 'setDate',
    month: 'setMonth'
};
var month = 'months';
var datePartMatcher = {
    'M': 'month',
    'd': 'day',
    'E': 'weekday',
    'c': 'weekday',
    'y': 'year',
    'm': 'minute',
    'h': 'hour',
    'H': 'hour',
    's': 'second',
    'L': 'month',
    'a': 'designator',
    'z': 'timeZone',
    'Z': 'timeZone',
    'G': 'era'
};
var DateParser = (function () {
    function DateParser() {
    }
    DateParser.dateParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = __WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].getDependables(cldr, culture);
        var numOptions = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getCurrentNumericOptions(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr));
        var parseOptions = {};
        var resPattern = option.format || __WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].getResultantPattern(option.skeleton, dependable.dateObject, option.type);
        var regexString = '';
        var hourOnly;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(resPattern)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["q" /* throwError */])('Format options or type given must be invalid');
        }
        else {
            parseOptions = { pattern: resPattern, evalposition: {} };
            var patternMatch = resPattern.match(__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].dateParseRegex) || [];
            var length_1 = patternMatch.length;
            var nRegx = numOptions.numericRegex;
            for (var i = 0; i < length_1; i++) {
                var str = patternMatch[i];
                var len = str.length;
                var char = (str[0] === 'K') ? 'h' : str[0];
                var isNumber = void 0;
                var canUpdate = void 0;
                var charKey = datePartMatcher[char];
                var optional = (len === 2) ? '' : '?';
                switch (char) {
                    case 'E':
                    case 'c':
                        var weekObject = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(dependable.dateObject[__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].days][standalone][__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].monthIndex[len]]);
                        regexString += '(' + Object.keys(weekObject).join('|') + ')';
                        break;
                    case 'M':
                    case 'L':
                    case 'd':
                    case 'm':
                    case 's':
                    case 'h':
                    case 'H':
                        canUpdate = true;
                        if ((char === 'M' || char === 'L') && len > 2) {
                            parseOptions[charKey] = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(dependable.dateObject[month][standalone][__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].monthIndex[len]]);
                            regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        }
                        else {
                            isNumber = true;
                            regexString += '(' + nRegx + nRegx + optional + ')';
                        }
                        if (char === 'h') {
                            parseOptions.hour12 = true;
                        }
                        break;
                    case 'y':
                        canUpdate = isNumber = true;
                        if (len === 2) {
                            regexString += '(' + nRegx + nRegx + ')';
                        }
                        else {
                            regexString += '(' + nRegx + '+)';
                        }
                        break;
                    case 'a':
                        canUpdate = true;
                        parseOptions[charKey] = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dayPeriods.format.wide', dependable.dateObject));
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        break;
                    case 'G':
                        canUpdate = true;
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        parseOptions[charKey] = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('eras.' + eText, dependable.dateObject));
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + '?)';
                        break;
                    case 'z':
                        var tval = new Date().getTimezoneOffset();
                        canUpdate = (tval !== 0);
                        parseOptions[charKey] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dates.timeZoneNames', dependable.parserObject);
                        var tzone = parseOptions[charKey];
                        hourOnly = (len < 4);
                        var hpattern = hourOnly ? '+H;-H' : tzone.hourFormat;
                        regexString += '(' + this.parseTimeZoneRegx(hpattern, tzone, nRegx) + ')?';
                        break;
                    case '\'':
                        var iString = str.replace(/\'/g, '');
                        regexString += '(' + iString + ')?';
                        break;
                    default:
                        regexString += '(.)?';
                        break;
                }
                if (canUpdate) {
                    parseOptions.evalposition[charKey] = { isNumber: isNumber, pos: i + 1, hourOnly: hourOnly };
                }
                if (i === length_1 - 1 && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(regexString)) {
                    parseOptions.parserRegex = new RegExp('^' + regexString + '$');
                }
            }
        }
        return function (value) {
            var parsedDateParts = _this.internalDateParse(value, parseOptions, numOptions);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(parsedDateParts) || !Object.keys(parsedDateParts).length) {
                return null;
            }
            return _this.getDateObject(parsedDateParts);
        };
    };
    DateParser.getDateObject = function (options, value) {
        var res = value || new Date();
        var tKeys = ['hour', 'minute', 'second', 'month', 'day'];
        var y = options.year;
        var desig = options.designator;
        var tzone = options.timeZone;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(y)) {
            var len = (y + '').length;
            if (len <= 2) {
                var century = Math.floor(res.getFullYear() / 100) * 100;
                y += century;
            }
            res.setFullYear(y);
        }
        for (var _i = 0, tKeys_1 = tKeys; _i < tKeys_1.length; _i++) {
            var key = tKeys_1[_i];
            var tValue = options[key];
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(tValue)) {
                if (key === 'month') {
                    tValue -= 1;
                    if (tValue < 0 || tValue > 11) {
                        return new Date('invalid');
                    }
                    var pDate = res.getDate();
                    res.setDate(1);
                    res[timeSetter[key]](tValue);
                    var lDate = new Date(res.getFullYear(), tValue + 1, 0).getDate();
                    res.setDate(pDate < lDate ? pDate : lDate);
                }
                else {
                    if (key === 'day') {
                        var lastDay = new Date(res.getFullYear(), res.getMonth() + 1, 0).getDate();
                        if ((tValue < 1 || tValue > lastDay)) {
                            return null;
                        }
                    }
                    res[timeSetter[key]](tValue);
                }
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(desig)) {
            var hour = res.getHours();
            if (desig === 'pm') {
                res.setHours(hour + (hour === 12 ? 0 : 12));
            }
            else if (hour === 12) {
                res.setHours(0);
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(tzone)) {
            var tzValue = tzone - res.getTimezoneOffset();
            if (tzValue !== 0) {
                res.setMinutes(res.getMinutes() + tzValue);
            }
        }
        return res;
    };
    DateParser.internalDateParse = function (value, parseOptions, num) {
        var matches = value.match(parseOptions.parserRegex);
        var retOptions = { 'hour': 0, 'minute': 0, 'second': 0 };
        var nRegx = num.numericRegex;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(matches)) {
            return null;
        }
        else {
            var props = Object.keys(parseOptions.evalposition);
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                var curObject = parseOptions.evalposition[prop];
                var matchString = matches[curObject.pos];
                if (curObject.isNumber) {
                    retOptions[prop] = this.internalNumberParser(matchString, num);
                }
                else {
                    if (prop === 'timeZone' && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(matchString)) {
                        var pos = curObject.pos;
                        var val = void 0;
                        var tmatch = matches[pos + 1];
                        var flag = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(tmatch);
                        if (curObject.hourOnly) {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 4], num) * 60;
                        }
                        else {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 7], num) * 60;
                            val += this.getZoneValue(flag, matches[pos + 4], matches[pos + 10], num);
                        }
                        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(val)) {
                            retOptions[prop] = val;
                        }
                    }
                    else {
                        retOptions[prop] = parseOptions[prop][matchString];
                    }
                }
            }
            if (parseOptions.hour12) {
                retOptions.hour12 = true;
            }
        }
        return retOptions;
    };
    DateParser.internalNumberParser = function (value, option) {
        value = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].convertValueParts(value, option.numberParseRegex, option.numericPair);
        if (latnRegex.test(value)) {
            return +value;
        }
        return null;
    };
    DateParser.parseTimeZoneRegx = function (hourFormat, tZone, nRegex) {
        var pattern = tZone.gmtFormat;
        var ret;
        var result;
        var cRegex = '(' + nRegex + ')' + '(' + nRegex + ')';
        var splitStr;
        ret = hourFormat.replace('+', '\\+');
        if (hourFormat.indexOf('HH') !== -1) {
            ret = ret.replace(/HH|mm/g, '(' + cRegex + ')');
        }
        else {
            ret = ret.replace(/H|m/g, '(' + cRegex + '?)');
        }
        splitStr = (ret.split(';').map(function (str) {
            return pattern.replace('{0}', str);
        }));
        ret = splitStr.join('|') + '|' + tZone.gmtZeroFormat;
        return ret;
    };
    DateParser.getZoneValue = function (flag, val1, val2, num) {
        var value = this.internalNumberParser(flag ? val1 : val2, num);
        if (flag) {
            return -value;
        }
        return value;
    };
    return DateParser;
}());



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intl_base__ = __webpack_require__(6);



var formatRegex = /(^[ncpa]{1})([0-1]?[0-9]|20)?$/i;
var parseRegex = /^([^0-9]*)(([0-9,]*[0-9]+)(\.[0-9]+)?)([Ee][+-]?[0-9]+)?([^0-9]*)$/;
var groupRegex = /,/g;
var latnDecimalRegex = /^[0-9]*(\.[0-9]+)?$/;
var keys = ['minusSign', 'infinity'];
var NumberParser = (function () {
    function NumberParser() {
    }
    NumberParser.numberParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getDependables(cldr, culture, true);
        var parseOptions = { custom: true };
        var numOptions;
        if ((__WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].formatRegex.test(option.format)) || !(option.format)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(parseOptions, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getProperNumericSkeleton(option.format || 'N'));
            parseOptions.custom = false;
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(parseOptions, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].customFormat(option.format, null, null));
        }
        numOptions = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getCurrentNumericOptions(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr), true);
        parseOptions.symbolRegex = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getSymbolRegex(Object.keys(numOptions.symbolMatch));
        parseOptions.infinity = numOptions.symbolNumberSystem[keys[1]];
        var symbolpattern = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getSymbolPattern(parseOptions.type, numOptions.numberSystem, dependable.numericObject, parseOptions.isAccount);
        if (symbolpattern) {
            symbolpattern = symbolpattern.replace(/\u00A4/g, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].defaultCurrency);
            var split = symbolpattern.split(';');
            parseOptions.nData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[1] || '-' + split[0], true, '');
            parseOptions.pData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[0], true, '');
        }
        return function (value) {
            return _this.getParsedNumber(value, parseOptions, numOptions);
        };
    };
    NumberParser.getParsedNumber = function (value, options, numOptions) {
        var isNegative;
        var isPercent;
        var tempValue;
        var lead;
        var end;
        var ret;
        if (value.indexOf(options.infinity) !== -1) {
            return Infinity;
        }
        else {
            value = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].convertValueParts(value, options.symbolRegex, numOptions.symbolMatch);
            value = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].convertValueParts(value, numOptions.numberParseRegex, numOptions.numericPair);
            if (value.indexOf('.') === 0) {
                value = '0' + value;
            }
            var matches = value.match(parseRegex);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(matches)) {
                return NaN;
            }
            lead = matches[1];
            tempValue = matches[2];
            var exponent = matches[5];
            end = matches[6];
            isNegative = options.custom ? ((lead === options.nData.nlead) && (end === options.nData.nend)) :
                ((lead.indexOf(options.nData.nlead) !== -1) && (end.indexOf(options.nData.nend) !== -1));
            isPercent = isNegative ?
                options.nData.isPercent :
                options.pData.isPercent;
            tempValue = tempValue.replace(groupRegex, '');
            if (exponent) {
                tempValue += exponent;
            }
            ret = +tempValue;
            if (options.type === 'percent' || isPercent) {
                ret = ret / 100;
            }
            if (options.custom || options.fractionDigits) {
                ret = parseFloat(ret.toFixed(options.custom ?
                    (isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits) : options.fractionDigits));
            }
            if (isNegative) {
                ret *= -1;
            }
            return ret;
        }
    };
    return NumberParser;
}());



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notify_property_change__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
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


var keyCode = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'control': 17,
    'alt': 18,
    'pause': 19,
    'capslock': 20,
    'space': 32,
    'escape': 27,
    'pageup': 33,
    'pagedown': 34,
    'end': 35,
    'home': 36,
    'leftarrow': 37,
    'uparrow': 38,
    'rightarrow': 39,
    'downarrow': 40,
    'insert': 45,
    'delete': 46,
    'f1': 112,
    'f2': 113,
    'f3': 114,
    'f4': 115,
    'f5': 116,
    'f6': 117,
    'f7': 118,
    'f8': 119,
    'f9': 120,
    'f10': 121,
    'f11': 122,
    'f12': 123,
    'semicolon': 186,
    'plus': 187,
    'comma': 188,
    'minus': 189,
    'dot': 190,
    'forwardslash': 191,
    'graveaccent': 192,
    'openbracket': 219,
    'backslash': 220,
    'closebracket': 221,
    'singlequote': 222
};
var KeyboardEvents = KeyboardEvents_1 = (function (_super) {
    __extends(KeyboardEvents, _super);
    function KeyboardEvents(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.keyPressHandler = function (e) {
            var isAltKey = e.altKey;
            var isCtrlKey = e.ctrlKey;
            var isShiftKey = e.shiftKey;
            var curkeyCode = e.which;
            var keys = Object.keys(_this.keyConfigs);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var configCollection = _this.keyConfigs[key].split(',');
                for (var _a = 0, configCollection_1 = configCollection; _a < configCollection_1.length; _a++) {
                    var rconfig = configCollection_1[_a];
                    var rKeyObj = KeyboardEvents_1.getKeyConfigData(rconfig.trim());
                    if (isAltKey === rKeyObj.altKey && isCtrlKey === rKeyObj.ctrlKey &&
                        isShiftKey === rKeyObj.shiftKey && curkeyCode === rKeyObj.keyCode) {
                        e.action = key;
                        if (_this.keyAction) {
                            _this.keyAction(e);
                        }
                    }
                }
            }
        };
        _this.bind();
        return _this;
    }
    KeyboardEvents.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    KeyboardEvents.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    ;
    KeyboardEvents.prototype.bind = function () {
        this.wireEvents();
    };
    KeyboardEvents.prototype.getModuleName = function () {
        return 'keyboard';
    };
    KeyboardEvents.prototype.wireEvents = function () {
        this.element.addEventListener(this.eventName, this.keyPressHandler);
    };
    KeyboardEvents.prototype.unwireEvents = function () {
        this.element.removeEventListener(this.eventName, this.keyPressHandler);
    };
    KeyboardEvents.getKeyConfigData = function (config) {
        if (config in this.configCache) {
            return this.configCache[config];
        }
        var keys = config.toLowerCase().split('+');
        var keyData = {
            altKey: (keys.indexOf('alt') !== -1 ? true : false),
            ctrlKey: (keys.indexOf('ctrl') !== -1 ? true : false),
            shiftKey: (keys.indexOf('shift') !== -1 ? true : false),
            keyCode: null
        };
        if (keys[keys.length - 1].length > 1 && !!Number(keys[keys.length - 1])) {
            keyData.keyCode = Number(keys[keys.length - 1]);
        }
        else {
            keyData.keyCode = KeyboardEvents_1.getKeyCode(keys[keys.length - 1]);
        }
        KeyboardEvents_1.configCache[config] = keyData;
        return keyData;
    };
    KeyboardEvents.getKeyCode = function (keyVal) {
        return keyCode[keyVal] || keyVal.toUpperCase().charCodeAt(0);
    };
    return KeyboardEvents;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));
KeyboardEvents.configCache = {};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__notify_property_change__["a" /* Property */])({})
], KeyboardEvents.prototype, "keyConfigs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__notify_property_change__["a" /* Property */])('keyup')
], KeyboardEvents.prototype, "eventName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__notify_property_change__["f" /* Event */])()
], KeyboardEvents.prototype, "keyAction", void 0);
KeyboardEvents = KeyboardEvents_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__notify_property_change__["g" /* NotifyPropertyChanges */]
], KeyboardEvents);

var KeyboardEvents_1;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return L10n; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internationalization__ = __webpack_require__(10);


var L10n = (function () {
    function L10n(controlName, localeStrings, locale) {
        this.controlName = controlName;
        this.localeStrings = localeStrings;
        this.setLocale(locale || __WEBPACK_IMPORTED_MODULE_1__internationalization__["d" /* defaultCulture */]);
    }
    L10n.prototype.setLocale = function (locale) {
        var intLocale = this.intGetControlConstant(L10n.locale, locale);
        if (!intLocale) {
            if (locale !== 'en-US') {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])('The specified locale or controlname not found in the locale object');
            }
            else {
                this.currentLocale = this.localeStrings;
            }
        }
        else {
            this.currentLocale = intLocale;
        }
    };
    L10n.load = function (localeObject) {
        this.locale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(this.locale, localeObject, {}, true);
    };
    L10n.prototype.getConstant = function (prop) {
        return this.currentLocale[prop] || this.localeStrings[prop] || '';
    };
    L10n.prototype.intGetControlConstant = function (curObject, locale) {
        if (curObject[locale]) {
            return curObject[locale][this.controlName];
        }
        return null;
    };
    return L10n;
}());

L10n.locale = {};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var SvgRenderer = (function () {
    function SvgRenderer(rootID) {
        this.svgLink = 'http://www.w3.org/2000/svg';
        this.rootId = rootID;
    }
    SvgRenderer.prototype.getOptionValue = function (options, key) {
        return options[key];
    };
    SvgRenderer.prototype.createSvg = function (options) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.id)) {
            options.id = this.rootId + '_svg';
        }
        this.svgObj = document.getElementById(options.id);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(document.getElementById(options.id))) {
            this.svgObj = document.createElementNS(this.svgLink, 'svg');
        }
        this.svgObj = this.setElementAttributes(options, this.svgObj);
        this.setSVGSize(options.width, options.height);
        return this.svgObj;
    };
    SvgRenderer.prototype.setSVGSize = function (width, height) {
        var element = document.getElementById(this.rootId);
        var size = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(element) ? element.getBoundingClientRect() : null;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.width) || this.width <= 0) {
            this.svgObj.setAttribute('width', width ? width.toString() : size.width.toString());
        }
        else {
            this.svgObj.setAttribute('width', this.width.toString());
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.height) || this.height <= 0) {
            this.svgObj.setAttribute('height', height ? height.toString() : '450');
        }
        else {
            this.svgObj.setAttribute('height', this.height.toString());
        }
    };
    SvgRenderer.prototype.drawPath = function (options) {
        var path = document.getElementById(options.id);
        if (path === null) {
            path = document.createElementNS(this.svgLink, 'path');
        }
        path = this.setElementAttributes(options, path);
        return path;
    };
    SvgRenderer.prototype.drawLine = function (options) {
        var line = document.getElementById(options.id);
        if (line === null) {
            line = document.createElementNS(this.svgLink, 'line');
        }
        line = this.setElementAttributes(options, line);
        return line;
    };
    SvgRenderer.prototype.drawRectangle = function (options) {
        var rectangle = document.getElementById(options.id);
        if (rectangle === null) {
            rectangle = document.createElementNS(this.svgLink, 'rect');
        }
        rectangle = this.setElementAttributes(options, rectangle);
        return rectangle;
    };
    SvgRenderer.prototype.drawCircle = function (options) {
        var circle = document.getElementById(options.id);
        if (circle === null) {
            circle = document.createElementNS(this.svgLink, 'circle');
        }
        circle = this.setElementAttributes(options, circle);
        return circle;
    };
    SvgRenderer.prototype.drawPolyline = function (options) {
        var polyline = document.getElementById(options.id);
        if (polyline === null) {
            polyline = document.createElementNS(this.svgLink, 'polyline');
        }
        polyline = this.setElementAttributes(options, polyline);
        return polyline;
    };
    SvgRenderer.prototype.drawEllipse = function (options) {
        var ellipse = document.getElementById(options.id);
        if (ellipse === null) {
            ellipse = document.createElementNS(this.svgLink, 'ellipse');
        }
        ellipse = this.setElementAttributes(options, ellipse);
        return ellipse;
    };
    SvgRenderer.prototype.drawPolygon = function (options) {
        var polygon = document.getElementById(options.id);
        if (polygon === null) {
            polygon = document.createElementNS(this.svgLink, 'polygon');
        }
        polygon = this.setElementAttributes(options, polygon);
        return polygon;
    };
    SvgRenderer.prototype.drawImage = function (options) {
        var img = document.createElementNS(this.svgLink, 'image');
        img.setAttributeNS(null, 'height', options.height.toString());
        img.setAttributeNS(null, 'width', options.width.toString());
        img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', options.href);
        img.setAttributeNS(null, 'x', options.x.toString());
        img.setAttributeNS(null, 'y', options.y.toString());
        img.setAttributeNS(null, 'id', options.id);
        img.setAttributeNS(null, 'visibility', options.visibility);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.getOptionValue(options, 'clip-path'))) {
            img.setAttributeNS(null, 'clip-path', this.getOptionValue(options, 'clip-path'));
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.preserveAspectRatio)) {
            img.setAttributeNS(null, 'preserveAspectRatio', options.preserveAspectRatio);
        }
        return img;
    };
    SvgRenderer.prototype.createText = function (options, label) {
        var text = document.createElementNS(this.svgLink, 'text');
        text = this.setElementAttributes(options, text);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(label)) {
            text.textContent = label;
        }
        return text;
    };
    SvgRenderer.prototype.createTSpan = function (options, label) {
        var tSpan = document.createElementNS(this.svgLink, 'tspan');
        tSpan = this.setElementAttributes(options, tSpan);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(label)) {
            tSpan.textContent = label;
        }
        return tSpan;
    };
    SvgRenderer.prototype.createTitle = function (text) {
        var title = document.createElementNS(this.svgLink, 'title');
        title.textContent = text;
        return title;
    };
    SvgRenderer.prototype.createDefs = function () {
        var defs = document.createElementNS(this.svgLink, 'defs');
        return defs;
    };
    SvgRenderer.prototype.createClipPath = function (options) {
        var clipPath = document.createElementNS(this.svgLink, 'clipPath');
        clipPath = this.setElementAttributes(options, clipPath);
        return clipPath;
    };
    SvgRenderer.prototype.createForeignObject = function (options) {
        var foreignObject = document.createElementNS(this.svgLink, 'foreignObject');
        foreignObject = this.setElementAttributes(options, foreignObject);
        return foreignObject;
    };
    SvgRenderer.prototype.createGroup = function (options) {
        var group = document.createElementNS(this.svgLink, 'g');
        group = this.setElementAttributes(options, group);
        return group;
    };
    SvgRenderer.prototype.createPattern = function (options, element) {
        var pattern = document.createElementNS(this.svgLink, element);
        pattern = this.setElementAttributes(options, pattern);
        return pattern;
    };
    SvgRenderer.prototype.createRadialGradient = function (colors, name, options) {
        var colorName;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            var newOptions = {
                'id': this.rootId + '_' + name + 'radialGradient',
                'cx': options.cx + '%',
                'cy': options.cy + '%',
                'r': options.r + '%',
                'fx': options.fx + '%',
                'fy': options.fy + '%'
            };
            this.drawGradient('radialGradient', newOptions, colors);
            colorName = 'url(#' + this.rootId + '_' + name + 'radialGradient)';
        }
        else {
            colorName = colors[0].color.toString();
        }
        return colorName;
    };
    SvgRenderer.prototype.createLinearGradient = function (colors, name, options) {
        var colorName;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            var newOptions = {
                'id': this.rootId + '_' + name + 'linearGradient',
                'x1': options.x1 + '%',
                'y1': options.y1 + '%',
                'x2': options.x2 + '%',
                'y2': options.y2 + '%'
            };
            this.drawGradient('linearGradient', newOptions, colors);
            colorName = 'url(#' + this.rootId + '_' + name + 'linearGradient)';
        }
        else {
            colorName = colors[0].color.toString();
        }
        return colorName;
    };
    SvgRenderer.prototype.drawGradient = function (gradientType, options, colors) {
        var defs = this.createDefs();
        var gradient = document.createElementNS(this.svgLink, gradientType);
        gradient = this.setElementAttributes(options, gradient);
        for (var i = 0; i < colors.length; i++) {
            var stop_1 = document.createElementNS(this.svgLink, 'stop');
            stop_1.setAttribute('offset', colors[i].colorStop);
            stop_1.setAttribute('stop-color', colors[i].color);
            stop_1.setAttribute('stop-opacity', '1');
            gradient.appendChild(stop_1);
        }
        defs.appendChild(gradient);
        return defs;
    };
    SvgRenderer.prototype.drawClipPath = function (options) {
        var defs = this.createDefs();
        var clipPath = this.createClipPath({ 'id': options.id });
        var rect = this.drawRectangle(options);
        clipPath.appendChild(rect);
        defs.appendChild(clipPath);
        return defs;
    };
    SvgRenderer.prototype.drawCircularClipPath = function (options) {
        var defs = this.createDefs();
        var clipPath = this.createClipPath({ 'id': options.id });
        var circle = this.drawCircle(options);
        clipPath.appendChild(circle);
        defs.appendChild(clipPath);
        return defs;
    };
    SvgRenderer.prototype.setElementAttributes = function (options, element) {
        var keys = Object.keys(options);
        for (var i = 0; i < keys.length; i++) {
            element.setAttribute(keys[i], options[keys[i]]);
        }
        return element;
    };
    return SvgRenderer;
}());



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
/* harmony export (immutable) */ __webpack_exports__["b"] = setTemplateEngine;
/* harmony export (immutable) */ __webpack_exports__["c"] = getTemplateEngine;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(2);


var HAS_ROW = /^[\n\r.]+\<tr|^\<tr/;
function compile(templateString, helper) {
    var compiler = engineObj.compile(templateString, helper);
    return function (data) {
        var result = compiler(data);
        if (typeof result === 'string') {
            var ele = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["a" /* createElement */])((HAS_ROW.test(result) ? 'table' : 'div'), { innerHTML: result });
            return ele.childNodes;
        }
        else {
            return result;
        }
    };
}
function setTemplateEngine(classObj) {
    engineObj.compile = classObj.compile;
}
function getTemplateEngine() {
    return engineObj.compile;
}
var Engine = (function () {
    function Engine() {
    }
    Engine.prototype.compile = function (templateString, helper) {
        if (helper === void 0) { helper = {}; }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__template__["a" /* compile */])(templateString, helper);
    };
    return Engine;
}());
var engineObj = { compile: new Engine().compile };


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export expression */
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
var LINES = new RegExp('\\n|\\r|\\s\\s+', 'g');
var QUOTES = new RegExp(/'|"/g);
var IF_STMT = new RegExp('if ?\\(');
var ELSE_STMT = new RegExp('else');
var FOR_STMT = new RegExp('for ?\\(');
var IF_OR_FOR = new RegExp('(\/if|\/for)');
var CALL_FUNCTION = new RegExp('\\((.*)\\)', '');
var NOT_NUMBER = new RegExp('^[0-9]+$', 'g');
var WORD = new RegExp('[\\w"\'.\\s+]+', 'g');
var DBL_QUOTED_STR = new RegExp('"(.*?)"', 'g');
var exp = new RegExp('\\${([^}]*)}', 'g');
function expression(value) {
    if (value) {
        exp = value;
    }
    return exp;
}
function compile(template, helper) {
    var argName = 'data';
    var evalExpResult = evalExp(template, argName, helper);
    var fnCode = "var str=\"" + evalExpResult + "\"; return str;";
    var fn = new Function(argName, fnCode);
    return fn.bind(helper);
}
function evalExp(str, nameSpace, helper) {
    var localKeys = [];
    return str.replace(LINES, '').replace(DBL_QUOTED_STR, '\'$1\'').replace(exp, function (match, cnt, offset, matchStr) {
        var matches = cnt.match(CALL_FUNCTION);
        if (matches) {
            var rlStr = matches[1];
            if (IF_STMT.test(cnt)) {
                cnt = '"; ' + cnt.replace(matches[1], rlStr.replace(WORD, function (str) {
                    str = str.trim();
                    return addNameSpace(str, !(QUOTES.test(str)) && (localKeys.indexOf(str) === -1), nameSpace, localKeys);
                })) + '{ \n str = str + "';
            }
            else if (FOR_STMT.test(cnt)) {
                var rlStr_1 = matches[1].split(' of ');
                cnt = '"; ' + cnt.replace(matches[1], function (mtc) {
                    localKeys.push(rlStr_1[0]);
                    localKeys.push(rlStr_1[0] + 'Index');
                    return 'var i=0; i < ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys) + '.length; i++';
                }) + '{ \n ' + rlStr_1[0] + '= ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys)
                    + '[i]; \n var ' + rlStr_1[0] + 'Index=i; \n str = str + "';
            }
            else {
                var fnStr = cnt.split('(');
                var fNameSpace = (helper && helper.hasOwnProperty(fnStr[0]) ? 'this.' : 'global');
                fNameSpace = (/\./.test(fnStr[0]) ? '' : fNameSpace);
                cnt = '" + ' + (fNameSpace === 'global' ? '' : fNameSpace) +
                    cnt.replace(rlStr, addNameSpace(matches[1].replace(',', nameSpace + '.'), (fNameSpace === 'global' ? false : true), nameSpace, localKeys)) +
                    '+"';
            }
        }
        else if (ELSE_STMT.test(cnt)) {
            cnt = '"; ' + cnt.replace(ELSE_STMT, '} else { \n str = str + "');
        }
        else if (!!cnt.match(IF_OR_FOR)) {
            cnt = cnt.replace(IF_OR_FOR, '"; \n } \n str = str + "');
        }
        else {
            cnt = '"+' + addNameSpace(cnt, (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '+"';
        }
        return cnt;
    });
}
function addNameSpace(str, addNS, nameSpace, ignoreList) {
    return ((addNS && !(NOT_NUMBER.test(str)) && ignoreList.indexOf(str.split('.')[0]) === -1) ? nameSpace + '.' + str : str);
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Touch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notify_property_change__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_property__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_handler__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
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






var SwipeSettings = (function (_super) {
    __extends(SwipeSettings, _super);
    function SwipeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SwipeSettings;
}(__WEBPACK_IMPORTED_MODULE_4__child_property__["a" /* ChildProperty */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["a" /* Property */])(50)
], SwipeSettings.prototype, "swipeThresholdDistance", void 0);
var swipeRegex = /(Up|Down)/;
var Touch = (function (_super) {
    __extends(Touch, _super);
    function Touch(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.startEvent = function (evt) {
            var point = (evt.changedTouches ? evt.changedTouches[0] : evt);
            _this.isTouchMoved = false;
            _this.movedDirection = '';
            _this.startPoint = _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
            _this.startEventData = point;
            _this.hScrollLocked = _this.vScrollLocked = false;
            _this.tStampStart = Date.now();
            _this.timeOutTapHold = setTimeout(function () { _this.tapHoldEvent(evt); }, _this.tapHoldThreshold);
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].add(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchMoveEvent, _this.moveEvent, _this);
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].add(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchEndEvent, _this.endEvent, _this);
        };
        _this.moveEvent = function (evt) {
            var point = evt.changedTouches ? evt.changedTouches[0] : evt;
            _this.movedPoint = point;
            _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
            var eScrollArgs = {};
            if (_this.isTouchMoved) {
                clearTimeout(_this.timeOutTapHold);
                _this.calcScrollPoints(evt);
                var scrollArg = {
                    startEvents: _this.startEventData,
                    originalEvent: evt, startX: _this.startPoint.clientX,
                    startY: _this.startPoint.clientY, distanceX: _this.distanceX,
                    distanceY: _this.distanceY, scrollDirection: _this.scrollDirection,
                    velocity: _this.getVelocity(point)
                };
                eScrollArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eScrollArgs, {}, scrollArg);
                _this.trigger('scroll', eScrollArgs);
                _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
            }
        };
        _this.endEvent = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            var point = evt;
            if (evt.changedTouches) {
                point = evt.changedTouches[0];
            }
            _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
            _this.endPoint = point;
            var dblTapTriggred = false;
            var eDblTapArgs;
            var eTapArgs;
            var eSwipeArgs;
            var tDistance = _this.swipeSettings.swipeThresholdDistance;
            _this.calcPoints(evt);
            var swipeArgs = {
                originalEvent: evt,
                startEvents: _this.startEventData,
                startX: _this.startPoint.clientX,
                startY: _this.startPoint.clientY,
                distanceX: _this.distanceX, distanceY: _this.distanceY, swipeDirection: _this.movedDirection,
                velocity: _this.getVelocity(point)
            };
            if (!_this.isTouchMoved) {
                eDblTapArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eDblTapArgs, _this.defaultArgs, {});
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.lastTapTime) && (new Date().getTime() - _this.lastTapTime) < _this.doubleTapThreshold) {
                    clearTimeout(_this.timeOutTap);
                    dblTapTriggred = true;
                    _this.trigger('doubleTap', eDblTapArgs);
                }
                if (!dblTapTriggred) {
                    eTapArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eTapArgs, _this.defaultArgs, {});
                    _this.timeOutTap = setTimeout(function () {
                        _this.trigger('tap', eTapArgs);
                    }, (typeof _this.doubleTap !== 'function' ? 0 : _this.doubleTapThreshold));
                }
            }
            else {
                eSwipeArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eSwipeArgs, _this.defaultArgs, swipeArgs);
                var canTrigger = false;
                var ele = _this.element;
                var scrollBool = _this.isScrollable(ele);
                var moved = swipeRegex.test(_this.movedDirection);
                if ((tDistance < _this.distanceX && !moved) || (tDistance < _this.distanceY && moved)) {
                    if (!scrollBool) {
                        canTrigger = true;
                    }
                    else {
                        canTrigger = _this.checkSwipe(ele, moved);
                    }
                }
                if (canTrigger) {
                    _this.trigger('swipe', eSwipeArgs);
                }
            }
            _this.lastTapTime = new Date().getTime();
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchMoveEvent, _this.moveEvent);
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchEndEvent, _this.endEvent);
        };
        _this.bind();
        return _this;
    }
    Touch.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Touch.prototype.bind = function () {
        this.wireEvents();
        if (__WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].isIE) {
            this.element.classList.add('e-block-touch');
        }
    };
    Touch.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    Touch.prototype.wireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].add(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchStartEvent, this.startEvent, this);
    };
    Touch.prototype.unwireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchStartEvent, this.startEvent);
    };
    Touch.prototype.getModuleName = function () {
        return 'touch';
    };
    Touch.prototype.isScrollable = function (element) {
        var eleStyle = getComputedStyle(element);
        var style = eleStyle.overflow + eleStyle.overflowX + eleStyle.overflowY;
        if ((/(auto|scroll)/).test(style)) {
            return true;
        }
        return false;
    };
    Touch.prototype.tapHoldEvent = function (evt) {
        var eTapArgs;
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchMoveEvent, this.moveEvent);
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchEndEvent, this.endEvent);
        eTapArgs = { originalEvent: evt };
        this.trigger('tapHold', eTapArgs);
    };
    Touch.prototype.calcPoints = function (evt) {
        var point = evt.changedTouches ? evt.changedTouches[0] : evt;
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.startPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.startPoint.clientY)));
        if (this.distanceX > this.distanceY) {
            this.movedDirection = (point.clientX > this.startPoint.clientX) ? 'Right' : 'Left';
        }
        else {
            this.movedDirection = (point.clientY < this.startPoint.clientY) ? 'Up' : 'Down';
        }
    };
    Touch.prototype.calcScrollPoints = function (evt) {
        var point = evt.changedTouches ? evt.changedTouches[0] : evt;
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.lastMovedPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.lastMovedPoint.clientY)));
        if ((this.distanceX > this.distanceY || this.hScrollLocked === true) && this.vScrollLocked === false) {
            this.scrollDirection = (point.clientX > this.lastMovedPoint.clientX) ? 'Right' : 'Left';
            this.hScrollLocked = true;
        }
        else {
            this.scrollDirection = (point.clientY < this.lastMovedPoint.clientY) ? 'Up' : 'Down';
            this.vScrollLocked = true;
        }
    };
    Touch.prototype.getVelocity = function (pnt) {
        var newX = pnt.clientX;
        var newY = pnt.clientY;
        var newT = Date.now();
        var xDist = newX - this.startPoint.clientX;
        var yDist = newY - this.startPoint.clientX;
        var interval = newT - this.tStampStart;
        return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
    };
    Touch.prototype.checkSwipe = function (ele, flag) {
        var keys = ['scroll', 'offset'];
        var temp = flag ? ['Height', 'Top'] : ['Width', 'Left'];
        if ((ele[keys[0] + temp[0]] <= ele[keys[1] + temp[0]])) {
            return true;
        }
        return (ele[keys[0] + temp[1]] === 0) ||
            (ele[keys[1] + temp[0]] + ele[keys[0] + temp[1]] >= ele[keys[0] + temp[0]]);
    };
    return Touch;
}(__WEBPACK_IMPORTED_MODULE_3__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "tap", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "doubleTap", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "tapHold", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "swipe", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "scroll", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["a" /* Property */])(500)
], Touch.prototype, "doubleTapThreshold", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["a" /* Property */])(750)
], Touch.prototype, "tapHoldThreshold", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["b" /* Complex */])({}, SwipeSettings)
], Touch.prototype, "swipeSettings", void 0);
Touch = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__notify_property_change__["g" /* NotifyPropertyChanges */]
], Touch);



/***/ }),
/* 29 */,
/* 30 */
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(8), __webpack_require__(8), __webpack_require__(8), __webpack_require__(8), __webpack_require__(8), __webpack_require__(32)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, input_1) {
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
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1) {
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
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, numerictextbox_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(numerictextbox_1);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);
this["ej"] = this["ej"] || {}; this["ej"]["formValidatorModule"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createInstance;
/* harmony export (immutable) */ __webpack_exports__["b"] = setImmediate;
/* harmony export (immutable) */ __webpack_exports__["c"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["d"] = setValue;
/* harmony export (immutable) */ __webpack_exports__["e"] = deleteObject;
/* harmony export (immutable) */ __webpack_exports__["f"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["g"] = getEnumValue;
/* harmony export (immutable) */ __webpack_exports__["h"] = merge;
/* harmony export (immutable) */ __webpack_exports__["i"] = extend;
/* harmony export (immutable) */ __webpack_exports__["j"] = isNullOrUndefined;
/* harmony export (immutable) */ __webpack_exports__["k"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["l"] = getUniqueID;
/* harmony export (immutable) */ __webpack_exports__["m"] = debounce;
/* harmony export (immutable) */ __webpack_exports__["n"] = queryParams;
/* harmony export (immutable) */ __webpack_exports__["o"] = isObjectArray;
/* harmony export (immutable) */ __webpack_exports__["p"] = compareElementParent;
/* harmony export (immutable) */ __webpack_exports__["q"] = throwError;
/* harmony export (immutable) */ __webpack_exports__["r"] = print;
/* harmony export (immutable) */ __webpack_exports__["s"] = formatUnit;
/* harmony export (immutable) */ __webpack_exports__["t"] = getInstance;
/* harmony export (immutable) */ __webpack_exports__["u"] = addInstance;
var instances = 'ej2_instances';
var uid = 0;
function createInstance(classFunction, params) {
    var arrayParam = params;
    arrayParam.unshift(undefined);
    return new (Function.prototype.bind.apply(classFunction, arrayParam));
}
function setImmediate(handler) {
    var unbind;
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    intCrypto.getRandomValues(num);
    var secret = 'ej2' + combineArray(num);
    var messageHandler = function (event) {
        if (event.source === window && typeof event.data === 'string' && event.data.length <= 32 && event.data === secret) {
            handler();
            unbind();
        }
    };
    window.addEventListener('message', messageHandler, false);
    window.postMessage(secret, '*');
    return unbind = function () {
        window.removeEventListener('message', messageHandler);
    };
}
function getValue(nameSpace, obj) {
    var value = obj;
    var splits = nameSpace.split('.');
    for (var i = 0; i < splits.length && !isUndefined(value); i++) {
        value = value[splits[i]];
    }
    return value;
}
function setValue(nameSpace, value, obj) {
    var keys = nameSpace.split('.');
    var start = obj || {};
    var fromObj = start;
    var i;
    var length = keys.length;
    var key;
    for (i = 0; i < length; i++) {
        key = keys[i];
        if (i + 1 === length) {
            fromObj[key] = value === undefined ? {} : value;
        }
        else if (isNullOrUndefined(fromObj[key])) {
            fromObj[key] = {};
        }
        fromObj = fromObj[key];
    }
    return start;
}
function deleteObject(obj, key) {
    delete obj[key];
}
function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}
function getEnumValue(enumObject, enumValue) {
    return enumObject[enumValue];
}
function merge(source, destination) {
    if (!isNullOrUndefined(destination)) {
        var temrObj = source;
        var tempProp = destination;
        var keys = Object.keys(destination);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            temrObj[key] = tempProp[key];
        }
    }
}
function extend(copied, first, second, deep) {
    var result = copied || {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!arguments_1[i]) {
            return "continue";
        }
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copy = obj1[key];
            var clone;
            if (deep && isObject(copy)) {
                clone = isObject(src) ? src : {};
                result[key] = extend({}, clone, copy, true);
            }
            else {
                result[key] = copy;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
function isUndefined(value) {
    return ('undefined' === typeof value);
}
function getUniqueID(definedName) {
    return definedName + '_' + uid++;
}
function debounce(eventFunction, delay) {
    var out;
    return function () {
        var _this = this;
        var args = arguments;
        var later = function () {
            out = null;
            return eventFunction.apply(_this, args);
        };
        clearTimeout(out);
        out = setTimeout(later, delay);
    };
}
function queryParams(data) {
    var array = [];
    var keys = Object.keys(data);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        array.push(encodeURIComponent(key) + '=' + encodeURIComponent('' + data[key]));
    }
    return array.join('&');
}
function isObjectArray(value) {
    var parser = Object.prototype.toString;
    if (parser.call(value) === '[object Array]') {
        if (parser.call(value[0]) === '[object Object]') {
            return true;
        }
    }
    return false;
}
function compareElementParent(child, parent) {
    var node = child;
    if (node === parent) {
        return true;
    }
    else if (node === document || !node) {
        return false;
    }
    else {
        return compareElementParent(node.parentNode, parent);
    }
}
function throwError(message) {
    try {
        throw new Error(message);
    }
    catch (e) {
        throw e.message + '\n' + e.stack;
    }
}
function print(element, printWindow) {
    var div = document.createElement('div');
    var links = [].slice.call(document.getElementsByTagName('head')[0].querySelectorAll('link, style'));
    var reference = '';
    if (isNullOrUndefined(printWindow)) {
        printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
    }
    div.appendChild(element.cloneNode(true));
    for (var i = 0, len = links.length; i < len; i++) {
        reference += links[i].outerHTML;
    }
    printWindow.document.write('<!DOCTYPE html> <html><head>' + reference + '</head><body>' + div.innerHTML +
        '<script> (function() { window.ready = true; })(); </script>' + '</body></html>');
    printWindow.document.close();
    printWindow.focus();
    var interval = setInterval(function () {
        if (printWindow.ready) {
            printWindow.print();
            printWindow.close();
            clearInterval(interval);
        }
    }, 500);
    return printWindow;
}
function formatUnit(value) {
    var result = value + '';
    if (result === 'auto' || result.indexOf('%') !== -1 || result.indexOf('px') !== -1) {
        return result;
    }
    return result + 'px';
}
function getInstance(element, component) {
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        for (var _i = 0, _a = elem[instances]; _i < _a.length; _i++) {
            var inst = _a[_i];
            if (inst instanceof component) {
                return inst;
            }
        }
    }
    return null;
}
function addInstance(element, instance) {
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        elem[instances].push(instance);
    }
    else {
        elem[instances] = [instance];
    }
}
function combineArray(num) {
    var ret = '';
    for (var i = 0; i < 5; i++) {
        ret += (i ? ',' : '') + num[i];
    }
    return ret;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observer__ = __webpack_require__(11);



var Base = (function () {
    function Base(options, element) {
        this.isProtectedOnChange = true;
        this.properties = {};
        this.changedProperties = {};
        this.oldProperties = {};
        this.refreshing = false;
        this.finalUpdate = function () { };
        this.childChangedProperties = {};
        this.modelObserver = new __WEBPACK_IMPORTED_MODULE_2__observer__["a" /* Observer */](this);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(element)) {
            if ('string' === typeof (element)) {
                this.element = document.querySelector(element);
            }
            else {
                this.element = element;
            }
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.element)) {
                this.isProtectedOnChange = false;
                this.addInstance();
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(options)) {
            this.setProperties(options, true);
        }
        this.isDestroyed = false;
    }
    Base.prototype.setProperties = function (prop, muteOnChange) {
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = !!muteOnChange;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, prop);
        if (muteOnChange !== true) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this.changedProperties, prop);
            this.dataBind();
        }
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.isProtectedOnChange = prevDetection;
    };
    ;
    Base.callChildDataBind = function (obj, parent) {
        var keys = Object.keys(obj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (parent[key] instanceof Array) {
                for (var _a = 0, _b = parent[key]; _a < _b.length; _a++) {
                    var obj_1 = _b[_a];
                    if (obj_1.dataBind !== undefined) {
                        obj_1.dataBind();
                    }
                }
            }
            else {
                parent[key].dataBind();
            }
        }
    };
    Base.prototype.clearChanges = function () {
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.childChangedProperties = {};
    };
    Base.prototype.dataBind = function () {
        Base.callChildDataBind(this.childChangedProperties, this);
        if (Object.getOwnPropertyNames(this.changedProperties).length) {
            var prevDetection = this.isProtectedOnChange;
            var newChanges = this.changedProperties;
            var oldChanges = this.oldProperties;
            this.clearChanges();
            this.isProtectedOnChange = true;
            this.onPropertyChanged(newChanges, oldChanges);
            this.isProtectedOnChange = prevDetection;
        }
    };
    ;
    Base.prototype.saveChanges = function (key, newValue, oldValue) {
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        this.finalUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* setImmediate */])(this.dataBind.bind(this));
    };
    ;
    Base.prototype.addEventListener = function (eventName, handler) {
        this.modelObserver.on(eventName, handler);
    };
    Base.prototype.removeEventListener = function (eventName, handler) {
        this.modelObserver.off(eventName, handler);
    };
    Base.prototype.trigger = function (eventName, eventProp) {
        if (this.isDestroyed !== true) {
            var prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            this.modelObserver.notify(eventName, eventProp);
            this.isProtectedOnChange = prevDetection;
        }
    };
    Base.prototype.addInstance = function () {
        var moduleClass = 'e-' + this.getModuleName().toLowerCase();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["b" /* addClass */])([this.element], ['e-control', moduleClass]);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.element.ej2_instances)) {
            this.element.ej2_instances.push(this);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])('ej2_instances', [this], this.element);
        }
    };
    Base.prototype.destroy = function () {
        var _this = this;
        this.element.ej2_instances =
            this.element.ej2_instances.filter(function (i) { return i !== _this; });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["c" /* removeClass */])([this.element], ['e-' + this.getModuleName()]);
        if (this.element.ej2_instances.length === 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["c" /* removeClass */])([this.element], ['e-control']);
        }
        this.clearChanges();
        this.modelObserver.destroy();
        this.isDestroyed = true;
    };
    return Base;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createElement;
/* harmony export (immutable) */ __webpack_exports__["b"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["d"] = isVisible;
/* harmony export (immutable) */ __webpack_exports__["e"] = prepend;
/* harmony export (immutable) */ __webpack_exports__["f"] = append;
/* harmony export (immutable) */ __webpack_exports__["g"] = detach;
/* harmony export (immutable) */ __webpack_exports__["h"] = remove;
/* harmony export (immutable) */ __webpack_exports__["i"] = attributes;
/* harmony export (immutable) */ __webpack_exports__["j"] = select;
/* harmony export (immutable) */ __webpack_exports__["k"] = selectAll;
/* harmony export (immutable) */ __webpack_exports__["l"] = closest;
/* harmony export (immutable) */ __webpack_exports__["m"] = siblings;
/* harmony export (immutable) */ __webpack_exports__["n"] = getAttributeOrDefault;
/* harmony export (immutable) */ __webpack_exports__["o"] = setStyleAttribute;
/* harmony export (immutable) */ __webpack_exports__["p"] = classList;
/* harmony export (immutable) */ __webpack_exports__["q"] = matches;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


function createElement(tagName, properties) {
    var element = document.createElement(tagName);
    if (typeof (properties) === 'undefined') {
        return element;
    }
    element.innerHTML = (properties.innerHTML ? properties.innerHTML : '');
    if (properties.className !== undefined) {
        element.className = properties.className;
    }
    if (properties.id !== undefined) {
        element.id = properties.id;
    }
    if (properties.styles !== undefined) {
        element.setAttribute('style', properties.styles);
    }
    if (properties.attrs !== undefined) {
        attributes(element, properties.attrs);
    }
    return element;
}
function addClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        for (var _b = 0, classList_1 = classList; _b < classList_1.length; _b++) {
            var className = classList_1[_b];
            if (!ele.classList.contains(className)) {
                ele.classList.add(className);
            }
        }
    }
    return elements;
}
function removeClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        if (ele.className !== '') {
            for (var _b = 0, classList_2 = classList; _b < classList_2.length; _b++) {
                var className = classList_2[_b];
                ele.classList.remove(className);
            }
        }
    }
    return elements;
}
function getClassList(classes) {
    var classList = [];
    if (typeof classes === 'string') {
        classList.push(classes);
    }
    else {
        classList = classes;
    }
    return classList;
}
function isVisible(element) {
    var ele = element;
    return (ele.style.visibility === '' && ele.offsetWidth > 0);
}
function prepend(fromElements, toElement) {
    var docFrag = document.createDocumentFragment();
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
        var ele = _a[_i];
        docFrag.appendChild(ele);
    }
    toElement.insertBefore(docFrag, toElement.firstElementChild);
    return fromElements;
}
function append(fromElements, toElement) {
    var docFrag = document.createDocumentFragment();
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
        var ele = _a[_i];
        docFrag.appendChild(ele);
    }
    toElement.appendChild(docFrag);
    return fromElements;
}
function detach(element) {
    var parentNode = element.parentNode;
    return parentNode.removeChild(element);
}
function remove(element) {
    var parentNode = element.parentNode;
    __WEBPACK_IMPORTED_MODULE_0__event_handler__["a" /* EventHandler */].clearEvents(element);
    parentNode.removeChild(element);
}
function attributes(element, attributes) {
    var keys = Object.keys(attributes);
    var ele = element;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        ele.setAttribute(key, attributes[key]);
    }
    return ele;
}
function select(selector, context) {
    if (context === void 0) { context = document; }
    return context.querySelector(selector);
}
function selectAll(selector, context) {
    if (context === void 0) { context = document; }
    var nodeList = context.querySelectorAll(selector);
    return nodeList;
}
function closest(element, selector) {
    var el = element;
    if (typeof el.closest === 'function') {
        return el.closest(selector);
    }
    while (el && el.nodeType === 1) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentNode;
    }
    return null;
}
function siblings(element) {
    var siblings = [];
    var childNodes = Array.prototype.slice.call(element.parentNode.childNodes);
    for (var _i = 0, childNodes_1 = childNodes; _i < childNodes_1.length; _i++) {
        var curNode = childNodes_1[_i];
        if (curNode.nodeType === Node.ELEMENT_NODE && element !== curNode) {
            siblings.push(curNode);
        }
    }
    return siblings;
}
function getAttributeOrDefault(element, property, value) {
    var attrVal = element.getAttribute(property);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["j" /* isNullOrUndefined */])(attrVal)) {
        element.setAttribute(property, value.toString());
        attrVal = value;
    }
    return attrVal;
}
function setStyleAttribute(element, attrs) {
    if (attrs !== undefined) {
        Object.keys(attrs).forEach(function (key) {
            element.style[key] = attrs[key];
        });
    }
}
function classList(element, addClasses, removeClasses) {
    addClass([element], addClasses);
    removeClass([element], removeClasses);
}
function matches(element, selector) {
    var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
    if (matches) {
        return matches.call(element, selector);
    }
    else {
        return [].indexOf.call(document.querySelectorAll(selector), element) !== -1;
    }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Property;
/* harmony export (immutable) */ __webpack_exports__["b"] = Complex;
/* harmony export (immutable) */ __webpack_exports__["c"] = ComplexFactory;
/* harmony export (immutable) */ __webpack_exports__["d"] = Collection;
/* harmony export (immutable) */ __webpack_exports__["e"] = CollectionFactory;
/* harmony export (immutable) */ __webpack_exports__["f"] = Event;
/* harmony export (immutable) */ __webpack_exports__["g"] = NotifyPropertyChanges;
/* harmony export (immutable) */ __webpack_exports__["h"] = CreateBuilder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

function getObject(instance, curKey, defaultValue, type) {
    if (!instance.properties.hasOwnProperty(curKey)) {
        instance.properties[curKey] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(type, [instance, curKey, defaultValue]);
    }
    return instance.properties[curKey];
}
function getObjectArray(instance, curKey, defaultValue, type, isSetter, isFactory) {
    var result = [];
    var len = defaultValue.length;
    for (var i = 0; i < len; i++) {
        var curType = type;
        if (isFactory) {
            curType = type(defaultValue[i]);
        }
        if (isSetter) {
            var inst = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(curType, [instance, curKey, {}, true]);
            inst.setProperties(defaultValue[i], true);
            result.push(inst);
        }
        else {
            result.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(curType, [instance, curKey, defaultValue[i], true]));
        }
    }
    return result;
}
function propertyGetter(defaultValue, curKey) {
    return function () {
        if (!this.properties.hasOwnProperty(curKey)) {
            this.properties[curKey] = defaultValue;
        }
        return this.properties[curKey];
    };
}
function propertySetter(defaultValue, curKey) {
    return function (newValue) {
        if (this.properties[curKey] !== newValue) {
            var oldVal = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
            this.saveChanges(curKey, newValue, oldVal);
            this.properties[curKey] = newValue;
        }
    };
}
function complexGetter(defaultValue, curKey, type) {
    return function () {
        return getObject(this, curKey, defaultValue, type);
    };
}
function complexSetter(defaultValue, curKey, type) {
    return function (newValue) {
        getObject(this, curKey, defaultValue, type).setProperties(newValue);
    };
}
function complexFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        return getObject(this, curKey, defaultValue, curType);
    };
}
function complexFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var curType = type(newValue);
        getObject(this, curKey, defaultValue, curType).setProperties(newValue);
    };
}
function complexArrayGetter(defaultValue, curKey, type) {
    return function () {
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, type, false);
            this.properties[curKey] = defCollection;
        }
        return this.properties[curKey];
    };
}
function complexArraySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false);
        var newValCollection = getObjectArray(this, curKey, newValue, type, true);
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
function complexArrayFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false, true);
        var newValCollection = getObjectArray(this, curKey, newValue, type, true, true);
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
function complexArrayFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, curType, false);
            this.properties[curKey] = defCollection;
        }
        return this.properties[curKey];
    };
}
function Property(defaultValue) {
    return function (target, key) {
        var propertyDescriptor = {
            set: propertySetter(defaultValue, key),
            get: propertyGetter(defaultValue, key),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'prop', defaultValue);
    };
}
function Complex(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexSetter(defaultValue, key, type),
            get: complexGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', defaultValue, type);
    };
}
function ComplexFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexFactorySetter({}, key, type),
            get: complexFactoryGetter({}, key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', {}, type);
    };
}
function Collection(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArraySetter(defaultValue, key, type),
            get: complexArrayGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', defaultValue, type);
    };
}
function CollectionFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArrayFactorySetter([], key, type),
            get: complexArrayFactoryGetter([], key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', {}, type);
    };
}
function Event() {
    return function (target, key) {
        var eventDescriptor = {
            set: function (newValue) {
                var oldValue = this.properties[key];
                if (oldValue !== newValue) {
                    var finalContext = getParentContext(this, key);
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(oldValue) === false) {
                        finalContext.context.removeEventListener(finalContext.prefix, oldValue);
                    }
                    finalContext.context.addEventListener(finalContext.prefix, newValue);
                    this.properties[key] = newValue;
                }
            },
            get: propertyGetter(undefined, key),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, eventDescriptor);
        addPropertyCollection(target, key, 'event');
    };
}
function NotifyPropertyChanges(classConstructor) {
}
function addPropertyCollection(target, key, propertyType, defaultValue, type) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(target.propList)) {
        target.propList = {
            props: [],
            complexProps: [],
            colProps: [],
            events: [],
            propNames: [],
            complexPropNames: [],
            colPropNames: [],
            eventNames: []
        };
    }
    target.propList[propertyType + 's'].push({
        propertyName: key,
        defaultValue: defaultValue,
        type: type
    });
    target.propList[propertyType + 'Names'].push(key);
}
function getBuilderProperties(component) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(component.prototype.builderObject)) {
        component.prototype.builderObject = {
            properties: {}, propCollections: [], add: function () {
                this.isPropertyArray = true;
                this.propCollections.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, this.properties, {}));
            }
        };
        var rex = /complex/;
        for (var _i = 0, _a = Object.keys(component.prototype.propList); _i < _a.length; _i++) {
            var key = _a[_i];
            var _loop_1 = function (prop) {
                if (rex.test(key)) {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        var childType = {};
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(childType, getBuilderProperties(prop.type));
                        value(childType);
                        var tempValue;
                        if (!childType.isPropertyArray) {
                            tempValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, childType.properties, {});
                        }
                        else {
                            tempValue = childType.propCollections;
                        }
                        this.properties[prop.propertyName] = tempValue;
                        childType.properties = {};
                        childType.propCollections = [];
                        childType.isPropertyArray = false;
                        return this;
                    };
                }
                else {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        this.properties[prop.propertyName] = value;
                        return this;
                    };
                }
            };
            for (var _b = 0, _c = component.prototype.propList[key]; _b < _c.length; _b++) {
                var prop = _c[_b];
                _loop_1(prop);
            }
        }
    }
    return component.prototype.builderObject;
}
function CreateBuilder(component) {
    var builderFunction = function (element) {
        this.element = element;
        return this;
    };
    var instanceFunction = function (element) {
        if (!builderFunction.prototype.hasOwnProperty('create')) {
            builderFunction.prototype = getBuilderProperties(component);
            builderFunction.prototype.create = function () {
                var temp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, {}, this.properties);
                this.properties = {};
                return new component(temp, this.element);
            };
        }
        return new builderFunction(element);
    };
    return instanceFunction;
}
function getParentContext(context, prefix) {
    if (context.hasOwnProperty('parentObj') === false) {
        return { context: context, prefix: prefix };
    }
    else {
        var curText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('propName', context);
        if (curText) {
            prefix = curText + '-' + prefix;
        }
        return getParentContext(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('parentObj', context), prefix);
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var EventHandler = (function () {
    function EventHandler() {
    }
    EventHandler.addOrGetEventData = function (element) {
        if ('__eventList' in element) {
            return element.__eventList.events;
        }
        else {
            element.__eventList = {};
            return element.__eventList.events = [];
        }
    };
    EventHandler.add = function (element, eventName, listener, bindTo, intDebounce) {
        var eventData = EventHandler.addOrGetEventData(element);
        var debounceListener;
        if (intDebounce) {
            debounceListener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["m" /* debounce */])(listener, intDebounce);
        }
        else {
            debounceListener = listener;
        }
        if (bindTo) {
            debounceListener = debounceListener.bind(bindTo);
        }
        var event = eventName.split(' ');
        for (var i = 0; i < event.length; i++) {
            eventData.push({
                name: event[i],
                listener: listener,
                debounce: debounceListener
            });
            element.addEventListener(event[i], debounceListener);
        }
        return debounceListener;
    };
    EventHandler.remove = function (element, eventName, listener) {
        var eventData = EventHandler.addOrGetEventData(element);
        var event = eventName.split(' ');
        var _loop_1 = function (j) {
            var index = -1;
            var debounceListener;
            if (eventData && eventData.length !== 0) {
                eventData.some(function (x, i) {
                    return x.name === event[j] && x.listener === listener ?
                        (index = i, debounceListener = x.debounce, true) : false;
                });
            }
            if (index !== -1) {
                eventData.splice(index, 1);
            }
            element.removeEventListener(event[j], debounceListener);
        };
        for (var j = 0; j < event.length; j++) {
            _loop_1(j);
        }
    };
    EventHandler.clearEvents = function (element) {
        var eventData;
        var copyData;
        eventData = EventHandler.addOrGetEventData(element);
        copyData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])([], copyData, eventData);
        for (var i = 0; i < copyData.length; i++) {
            element.removeEventListener(copyData[i].name, copyData[i].debounce);
            eventData.shift();
        }
    };
    EventHandler.trigger = function (element, eventName, eventProp) {
        var eventData = EventHandler.addOrGetEventData(element);
        var fn = null;
        for (var _i = 0, eventData_1 = eventData; _i < eventData_1.length; _i++) {
            var event_1 = eventData_1[_i];
            if (event_1.name === eventName) {
                event_1.debounce.call(this, eventProp);
            }
        }
    };
    return EventHandler;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Browser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
var REGX_IE = /msie|trident/i;
var REGX_IE11 = /Trident\/7\./;
var REGX_IOS = /(ipad|iphone|ipod touch)/i;
var REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i;
var REGX_ANDROID = /android/i;
var REGX_WINDOWS = /trident|windows phone|edge/i;
var REGX_VERSION = /(version)[ \/]([\w.]+)/i;
var REGX_BROWSER = {
    OPERA: /(opera|opr)(?:.*version|)[ \/]([\w.]+)/i,
    EDGE: /(edge)(?:.*version|)[ \/]([\w.]+)/i,
    CHROME: /(chrome|crios)[ \/]([\w.]+)/i,
    PANTHOMEJS: /(phantomjs)[ \/]([\w.]+)/i,
    SAFARI: /(safari)[ \/]([\w.]+)/i,
    WEBKIT: /(webkit)[ \/]([\w.]+)/i,
    MSIE: /(msie|trident) ([\w.]+)/i,
    MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
window.browserDetails = window.browserDetails || {};
var Browser = (function () {
    function Browser() {
    }
    Browser.extractBrowserDetail = function () {
        var browserInfo = { culture: {} };
        var keys = Object.keys(REGX_BROWSER);
        var clientInfo = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            clientInfo = Browser.userAgent.match(REGX_BROWSER[key]);
            if (clientInfo) {
                browserInfo.name = (clientInfo[1].toLowerCase() === 'opr' ? 'opera' : clientInfo[1].toLowerCase());
                browserInfo.name = (clientInfo[1].toLowerCase() === 'crios' ? 'chrome' : browserInfo.name);
                browserInfo.version = clientInfo[2];
                browserInfo.culture.name = browserInfo.culture.language = navigator.language;
                if (!!Browser.userAgent.match(REGX_IE11)) {
                    browserInfo.name = 'msie';
                    break;
                }
                var version = Browser.userAgent.match(REGX_VERSION);
                if (browserInfo.name === 'safari' && version) {
                    browserInfo.version = version[2];
                }
                break;
            }
        }
        return browserInfo;
    };
    Browser.getEvent = function (event) {
        var events = {
            start: {
                isPointer: 'pointerdown', isTouch: 'touchstart', isDevice: 'mousedown'
            },
            move: {
                isPointer: 'pointermove', isTouch: 'touchmove', isDevice: 'mousemove'
            },
            end: {
                isPointer: 'pointerup', isTouch: 'touchend', isDevice: 'mouseup'
            }
        };
        return (Browser.isPointer ? events[event].isPointer :
            (Browser.isTouch ? events[event].isTouch + (!Browser.isDevice ? ' ' + events[event].isDevice : '')
                : events[event].isDevice));
    };
    Browser.getTouchStartEvent = function () {
        return Browser.getEvent('start');
    };
    Browser.getTouchEndEvent = function () {
        return Browser.getEvent('end');
    };
    Browser.getTouchMoveEvent = function () {
        return Browser.getEvent('move');
    };
    Browser.getValue = function (key, regX) {
        var browserDetails = window.browserDetails;
        if ('undefined' === typeof browserDetails[key]) {
            return browserDetails[key] = regX.test(Browser.userAgent);
        }
        return browserDetails[key];
    };
    Object.defineProperty(Browser, "userAgent", {
        get: function () {
            return Browser.uA;
        },
        set: function (uA) {
            Browser.uA = uA;
            window.browserDetails = {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "info", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.info)) {
                return window.browserDetails.info = Browser.extractBrowserDetail();
            }
            return window.browserDetails.info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIE", {
        get: function () {
            return Browser.getValue('isIE', REGX_IE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isTouch", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isTouch)) {
                return window.browserDetails.isTouch = ('ontouchstart' in window);
            }
            return window.browserDetails.isTouch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isPointer", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isPointer)) {
                return window.browserDetails.isPointer = ('pointerEnabled' in window.navigator);
            }
            return window.browserDetails.isPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isMSPointer", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isMSPointer)) {
                return window.browserDetails.isMSPointer = ('msPointerEnabled' in window.navigator);
            }
            return window.browserDetails.isMSPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isDevice", {
        get: function () {
            return Browser.getValue('isDevice', REGX_MOBILE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos", {
        get: function () {
            return Browser.getValue('isIos', REGX_IOS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos7", {
        get: function () {
            return Browser.getValue('isIos7', REGX_IOS7);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isAndroid", {
        get: function () {
            return Browser.getValue('isAndroid', REGX_ANDROID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWebView", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isWebView)) {
                window.browserDetails.isWebView = !(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.cordova) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.PhoneGap)
                    && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.phonegap) && window.forge !== 'object');
                return window.browserDetails.isWebView;
            }
            return window.browserDetails.isWebView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWindows", {
        get: function () {
            return Browser.getValue('isWindows', REGX_WINDOWS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchStartEvent", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.touchStartEvent)) {
                return window.browserDetails.touchStartEvent = Browser.getTouchStartEvent();
            }
            return window.browserDetails.touchStartEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchMoveEvent", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.touchMoveEvent)) {
                return window.browserDetails.touchMoveEvent = Browser.getTouchMoveEvent();
            }
            return window.browserDetails.touchMoveEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchEndEvent", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.touchEndEvent)) {
                return window.browserDetails.touchEndEvent = Browser.getTouchEndEvent();
            }
            return window.browserDetails.touchEndEvent;
        },
        enumerable: true,
        configurable: true
    });
    return Browser;
}());

Browser.uA = navigator.userAgent;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntlBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_formatter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__number_formatter__ = __webpack_require__(13);




var IntlBase;
(function (IntlBase) {
    IntlBase.negativeDataRegex = /^(('[^']+'|''|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.customRegex = /^(('[^']+'|''|[^*#@0,.])*)(\*.)?((([0#,]*[0,]*[0#]*)(\.[0#]*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.latnParseRegex = /0|1|2|3|4|5|6|7|8|9/g;
    var fractionRegex = /[0-9]/g;
    IntlBase.defaultCurrency = '$';
    var mapper = ['infinity', 'nan', 'group', 'decimal'];
    var patternRegex = /G|M|L|H|c|'| a|yy|y|EEEE|E/g;
    var patternMatch = {
        'G': '',
        'M': 'm',
        'L': 'm',
        'H': 'h',
        'c': 'd',
        '\'': '"',
        ' a': ' AM/PM',
        'yy': 'yy',
        'y': 'yyyy',
        'EEEE': 'dddd',
        'E': 'ddd'
    };
    IntlBase.formatRegex = /(^[ncpa]{1})([0-1]?[0-9]|20)?$/i;
    var typeMapper = {
        '$': 'isCurrency',
        '%': 'isPercent',
        '-': 'isNegative',
        0: 'nlead',
        1: 'nend'
    };
    IntlBase.dateParseRegex = /([a-z])\1*|'([^']|'')+'|''|./gi;
    IntlBase.basicPatterns = ['short', 'medium', 'long', 'full'];
    IntlBase.defaultObject = {
        'dates': {
            'calendars': {
                'gregorian': {
                    'months': {
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mar',
                                '4': 'Apr',
                                '5': 'May',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Aug',
                                '9': 'Sep',
                                '10': 'Oct',
                                '11': 'Nov',
                                '12': 'Dec'
                            },
                            'narrow': {
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S',
                                '10': 'O',
                                '11': 'N',
                                '12': 'D'
                            },
                            'wide': {
                                '1': 'January',
                                '2': 'February',
                                '3': 'March',
                                '4': 'April',
                                '5': 'May',
                                '6': 'June',
                                '7': 'July',
                                '8': 'August',
                                '9': 'September',
                                '10': 'October',
                                '11': 'November',
                                '12': 'December'
                            }
                        }
                    },
                    "days": {
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "wide": {
                                "am": "AM",
                                "pm": "PM"
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Before Christ',
                            '0-alt-variant': 'Before Common Era',
                            '1': 'Anno Domini',
                            "1-alt-variant": "Common Era"
                        },
                        'eraAbbr': {
                            '0': 'BC',
                            '0-alt-variant': 'BCE',
                            '1': 'AD',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'B',
                            '0-alt-variant': 'BCE',
                            '1': 'A',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, MMMM d, y',
                        'long': 'MMMM d, y',
                        'medium': 'MMM d, y',
                        'short': 'M/d/yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': "{1} 'at' {0}",
                        'long': "{1} 'at' {0}",
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'd': 'd',
                            'E': 'ccc',
                            'Ed': 'd E',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'MMM d, y G',
                            'GyMMMEd': 'E, MMM d, y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'hmsv': 'h:mm:ss a v',
                            'Hmsv': 'HH:mm:ss v',
                            'hmv': 'h:mm a v',
                            'Hmv': 'HH:mm v',
                            'M': 'L',
                            'Md': 'M/d',
                            'MEd': 'E, M/d',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d',
                            'MMMEd': 'E, MMM d',
                            'MMMMd': 'MMMM d',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'M/d/y',
                            'yMEd': 'E, M/d/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'MMM d, y',
                            'yMMMEd': 'E, MMM d, y',
                            'yMMMM': 'MMMM y',
                        },
                    }
                }
            },
            'timeZoneNames': {
                "hourFormat": "+HH:mm;-HH:mm",
                "gmtFormat": "GMT{0}",
                "gmtZeroFormat": "GMT",
            }
        },
        'numbers': {
            'currencies': {
                'USD': {
                    'displayName': 'US Dollar',
                    'symbol': '$',
                    'symbol-alt-narrow': '$'
                },
                'EUR': {
                    'displayName': 'Euro',
                    'symbol': '€',
                    'symbol-alt-narrow': '€'
                },
                'GBP': {
                    'displayName': 'British Pound',
                    'symbol-alt-narrow': '£'
                },
            },
            'defaultNumberingSystem': 'latn',
            'minimumGroupingDigits': '1',
            'symbols-numberSystem-latn': {
                'decimal': '.',
                'group': ',',
                'list': ';',
                'percentSign': '%',
                'plusSign': '+',
                'minusSign': '-',
                'exponential': 'E',
                'superscriptingExponent': '×',
                'perMille': '‰',
                'infinity': '∞',
                'nan': 'NaN',
                'timeSeparator': ':'
            },
            'decimalFormats-numberSystem-latn': {
                'standard': '#,##0.###',
            },
            'percentFormats-numberSystem-latn': {
                'standard': '#,##0%'
            },
            'currencyFormats-numberSystem-latn': {
                'standard': '¤#,##0.00',
                'accounting': '¤#,##0.00;(¤#,##0.00)'
            }
        }
    };
    IntlBase.monthIndex = {
        3: 'abbreviated',
        4: 'wide',
        5: 'narrow',
        1: 'abbreviated'
    };
    IntlBase.month = 'months';
    IntlBase.days = 'days';
    IntlBase.patternMatcher = {
        C: 'currency',
        P: 'percent',
        N: 'decimal',
        A: 'currency'
    };
    function getResultantPattern(skeleton, dateObject, type) {
        var resPattern;
        var iType = type || 'date';
        if (IntlBase.basicPatterns.indexOf(skeleton) !== -1) {
            resPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(iType + 'Formats.' + skeleton, dateObject);
            if (iType === 'dateTime') {
                var dPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dateFormats.' + skeleton, dateObject);
                var tPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('timeFormats.' + skeleton, dateObject);
                resPattern = resPattern.replace('{1}', dPattern).replace('{0}', tPattern);
            }
        }
        else {
            resPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dateTimeFormats.availableFormats.' + skeleton, dateObject);
        }
        return resPattern;
    }
    IntlBase.getResultantPattern = getResultantPattern;
    function getDependables(cldr, culture, isNumber) {
        var ret = {};
        ret.parserObject = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getMainObject(cldr, culture) || IntlBase.defaultObject;
        if (isNumber) {
            ret.numericObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('numbers', ret.parserObject);
        }
        else {
            ret.dateObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dates.calendars.gregorian', ret.parserObject);
        }
        return ret;
    }
    IntlBase.getDependables = getDependables;
    function getSymbolPattern(type, numSystem, obj, isAccount) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(type + 'Formats-numberSystem-' +
            numSystem + (isAccount ? '.accounting' : '.standard'), obj) || (isAccount ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(type + 'Formats-numberSystem-' +
            numSystem + '.standard', obj) : '');
    }
    IntlBase.getSymbolPattern = getSymbolPattern;
    function getProperNumericSkeleton(skeleton) {
        var matches = skeleton.match(IntlBase.formatRegex);
        var ret = {};
        var pattern = matches[1].toUpperCase();
        ret.isAccount = (pattern === 'A');
        ret.type = IntlBase.patternMatcher[pattern];
        if (skeleton.length > 1) {
            ret.fractionDigits = parseInt(matches[2], 10);
        }
        return ret;
    }
    IntlBase.getProperNumericSkeleton = getProperNumericSkeleton;
    function getFormatData(pattern, needFraction, cSymbol, fractionOnly) {
        var nData = fractionOnly ? {} : { nlead: '', nend: '' };
        var match = pattern.match(IntlBase.customRegex);
        if (match) {
            if (!fractionOnly) {
                nData.nlead = changeCurrencySymbol(match[1], cSymbol);
                nData.nend = changeCurrencySymbol(match[10], cSymbol);
                nData.groupPattern = match[4];
            }
            var fraction = match[7];
            if (fraction && needFraction) {
                var fmatch = fraction.match(fractionRegex);
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(fmatch)) {
                    nData.minimumFraction = fmatch.length;
                }
                else {
                    nData.minimumFraction = 0;
                }
                nData.maximumFraction = fraction.length - 1;
            }
        }
        return nData;
    }
    IntlBase.getFormatData = getFormatData;
    function changeCurrencySymbol(val, sym) {
        if (val) {
            return val.replace(IntlBase.defaultCurrency, sym);
        }
        return '';
    }
    function getCurrencySymbol(numericObject, currencyCode) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('currencies.' + currencyCode + '.symbol', numericObject) || '$';
    }
    IntlBase.getCurrencySymbol = getCurrencySymbol;
    function customFormat(format, dOptions, obj) {
        var options = {};
        var formatSplit = format.split(';');
        var data = ['pData', 'nData', 'zeroData'];
        for (var i = 0; i < formatSplit.length; i++) {
            options[data[i]] = customNumberFormat(formatSplit[i], dOptions, obj);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.nData)) {
            options.nData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, options.pData);
            options.nData.nlead = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(dOptions) ? '-' + options.nData.nlead : dOptions.minusSymbol + options.nData.nlead;
        }
        return options;
    }
    IntlBase.customFormat = customFormat;
    function customNumberFormat(format, dOptions, numObject) {
        var cOptions = { type: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
        var pattern = format.match(IntlBase.customRegex);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(pattern) || pattern[5] === '') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])('Given Format is not valid or Cldr data not loaded');
        }
        cOptions.nlead = pattern[1];
        cOptions.nend = pattern[10];
        var integerPart = pattern[6];
        cOptions.useGrouping = integerPart.indexOf(',') !== -1;
        integerPart = integerPart.replace(/,/g, '');
        var fractionPart = pattern[7];
        if (integerPart.indexOf('0') !== -1) {
            cOptions.minimumIntegerDigits = integerPart.length - integerPart.indexOf('0');
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(fractionPart)) {
            cOptions.minimumFractionDigits = fractionPart.lastIndexOf('0');
            cOptions.maximumFractionDigits = fractionPart.lastIndexOf('#');
            if (cOptions.minimumFractionDigits === -1) {
                cOptions.minimumFractionDigits = 0;
            }
            if (cOptions.maximumFractionDigits === -1 || cOptions.maximumFractionDigits < cOptions.minimumFractionDigits) {
                cOptions.maximumFractionDigits = cOptions.minimumFractionDigits;
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(dOptions)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '$', dOptions.currencySymbol));
            if (!cOptions.isCurrency) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', dOptions.percentSymbol));
            }
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', '%'));
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(numObject)) {
            var symbolPattern = getSymbolPattern(cOptions.type, dOptions.numberMapper.numberSystem, numObject, false);
            if (cOptions.useGrouping) {
                cOptions.groupSeparator = dOptions.numberMapper.numberSymbols[mapper[2]];
                cOptions.groupData = __WEBPACK_IMPORTED_MODULE_3__number_formatter__["a" /* NumberFormat */].getGroupingDetails(symbolPattern.split(';')[0]);
            }
            cOptions.nlead = cOptions.nlead.replace(/\'/g, '');
            cOptions.nend = cOptions.nend.replace(/\'/g, '');
        }
        return cOptions;
    }
    function isCurrencyPercent(parts, actual, symbol) {
        var options = { nlead: parts[0], nend: parts[1] };
        for (var i = 0; i < 2; i++) {
            var part = parts[i];
            var loc = part.indexOf(actual);
            if ((loc !== -1) && ((loc < part.indexOf('\'')) || (loc > part.lastIndexOf('\'')))) {
                options[typeMapper[i]] = part.substr(0, loc) + symbol + part.substr(loc + 1);
                options[typeMapper[actual]] = true;
                options.type = options.isCurrency ? 'currency' : 'percent';
                break;
            }
        }
        return options;
    }
    IntlBase.isCurrencyPercent = isCurrencyPercent;
    function getDateSeparator(dateObj) {
        var value = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dateFormats.short', dateObj) || '').match(/[d‏M‏]([^d‏M])[d‏M‏]/i);
        return value ? value[1] : '/';
    }
    IntlBase.getDateSeparator = getDateSeparator;
    function getActualDateTimeFormat(culture, options, cldr, isExcelFormat) {
        var dependable = getDependables(cldr, culture);
        var actualPattern = options.format || getResultantPattern(options.skeleton, dependable.dateObject, options.type);
        if (isExcelFormat) {
            actualPattern = actualPattern.replace(patternRegex, function (pattern) {
                return patternMatch[pattern];
            });
            if (actualPattern.indexOf('z') !== -1) {
                var tLength = actualPattern.match(/z/g).length;
                var timeZonePattern = void 0;
                var options_1 = { 'timeZone': {} };
                options_1.numMapper = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr));
                options_1.timeZone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dates.timeZoneNames', dependable.parserObject);
                var value = new Date();
                var timezone = value.getTimezoneOffset();
                var pattern = (tLength < 4) ? '+H;-H' : options_1.timeZone.hourFormat;
                pattern = pattern.replace(/:/g, options_1.numMapper.timeSeparator);
                if (timezone === 0) {
                    timeZonePattern = options_1.timeZone.gmtZeroFormat;
                }
                else {
                    timeZonePattern = __WEBPACK_IMPORTED_MODULE_2__date_formatter__["a" /* DateFormat */].getTimeZoneValue(timezone, pattern);
                    timeZonePattern = options_1.timeZone.gmtFormat.replace(/\{0\}/, timeZonePattern);
                }
                actualPattern = actualPattern.replace(/[z]+/, '"' + timeZonePattern + '"');
            }
            actualPattern = actualPattern.replace(/ $/, '');
        }
        return actualPattern;
    }
    IntlBase.getActualDateTimeFormat = getActualDateTimeFormat;
    function getActualNumberFormat(culture, options, cldr) {
        var dependable = getDependables(cldr, culture, true);
        var parseOptions = { custom: true };
        var minFrac;
        if ((/(c|a)$/ig).test(options.format) && !options.minimumFractionDigits && !options.maximumFractionDigits) {
            var dOptions = {};
            dOptions.numberMapper = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr), true);
            var symbolPattern = getSymbolPattern('currency', dOptions.numberMapper.numberSystem, dependable.numericObject, (/a/i).test(options.format));
            minFrac = getFormatData(symbolPattern.split(';')[0], true, '', true).minimumFraction;
        }
        var actualPattern;
        if ((IntlBase.formatRegex.test(options.format)) || !(options.format)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(parseOptions, getProperNumericSkeleton(options.format || 'N'));
            parseOptions.custom = false;
            actualPattern = '###0';
            if (parseOptions.fractionDigits || options.minimumFractionDigits || options.maximumFractionDigits || minFrac) {
                var defaultMinimum = 0;
                if (parseOptions.fractionDigits) {
                    options.minimumFractionDigits = options.maximumFractionDigits = parseOptions.fractionDigits;
                }
                actualPattern = fractionDigitsPattern(actualPattern, minFrac || parseOptions.fractionDigits ||
                    options.minimumFractionDigits || defaultMinimum, options.maximumFractionDigits || defaultMinimum);
            }
            if (options.minimumIntegerDigits) {
                actualPattern = minimumIntegerPattern(actualPattern, options.minimumIntegerDigits);
            }
            if (options.useGrouping) {
                actualPattern = groupingPattern(actualPattern);
            }
            if (parseOptions.type === 'currency' && !parseOptions.isAccount) {
                actualPattern = '$ ' + actualPattern;
            }
            else if (parseOptions.type === 'currency' && parseOptions.isAccount) {
                actualPattern = '$ ' + actualPattern + ';($ ' + actualPattern + ')';
            }
            if (parseOptions.type === 'percent') {
                actualPattern += ' %';
            }
        }
        else {
            actualPattern = options.format.replace(/\'/g, '"');
        }
        return actualPattern;
    }
    IntlBase.getActualNumberFormat = getActualNumberFormat;
    function fractionDigitsPattern(pattern, minDigits, maxDigits) {
        pattern += '.';
        for (var a = 0; a < minDigits; a++) {
            pattern += '0';
        }
        if (minDigits < maxDigits) {
            var diff = maxDigits - minDigits;
            for (var b = 0; b < diff; b++) {
                pattern += '#';
            }
        }
        return pattern;
    }
    function minimumIntegerPattern(pattern, digits) {
        var temp = pattern.split('.');
        var integer = '';
        for (var x = 0; x < digits; x++) {
            integer += '0';
        }
        return temp[1] ? (integer + '.' + temp[1]) : integer;
    }
    function groupingPattern(pattern) {
        var temp = pattern.split('.');
        var integer = temp[0];
        var no = 3 - integer.length % 3;
        var hash = (no && no === 1) ? '#' : (no === 2 ? '##' : '');
        integer = hash + integer;
        pattern = '';
        for (var x = integer.length - 1; x > 0; x = x - 3) {
            pattern = ',' + integer[x - 2] + integer[x - 1] + integer[x] + pattern;
        }
        pattern = pattern.slice(1);
        return temp[1] ? (pattern + '.' + temp[1]) : pattern;
    }
})(IntlBase || (IntlBase = {}));


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParserBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
var defaultNumberingSystem = {
    'latn': {
        '_digits': '0123456789',
        '_type': 'numeric'
    }
};

var latnRegex = /^[0-9]*$/;
var defaultNumberSymbols = {
    'decimal': '.',
    'group': ',',
    'percentSign': '%',
    'plusSign': '+',
    'minusSign': '-',
    'infinity': '∞',
    'nan': 'NaN',
    'exponential': 'E'
};
var latnNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var ParserBase = (function () {
    function ParserBase() {
    }
    ParserBase.getMainObject = function (obj, cName) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('main.' + cName, obj);
    };
    ParserBase.getNumberingSystem = function (obj) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('supplemental.numberingSystems', obj) || this.numberingSystems;
    };
    ParserBase.reverseObject = function (prop, keys) {
        var propKeys = keys || Object.keys(prop);
        var res = {};
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var key = propKeys_1[_i];
            if (!res.hasOwnProperty(prop[key])) {
                res[prop[key]] = key;
            }
        }
        return res;
    };
    ParserBase.getSymbolRegex = function (props) {
        var regexStr = props.map(function (str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        }).join('|');
        return new RegExp(regexStr, 'g');
    };
    ParserBase.getSymbolMatch = function (prop) {
        var matchKeys = Object.keys(defaultNumberSymbols);
        var ret = {};
        for (var _i = 0, matchKeys_1 = matchKeys; _i < matchKeys_1.length; _i++) {
            var key = matchKeys_1[_i];
            ret[prop[key]] = defaultNumberSymbols[key];
        }
        return ret;
    };
    ParserBase.constructRegex = function (val) {
        var len = val.length;
        var ret = '';
        for (var i = 0; i < len; i++) {
            if (i !== len - 1) {
                ret += val[i] + '|';
            }
            else {
                ret += val[i];
            }
        }
        return ret;
    };
    ParserBase.convertValueParts = function (value, regex, obj) {
        return value.replace(regex, function (str) {
            return obj[str];
        });
    };
    ParserBase.getDefaultNumberingSystem = function (obj) {
        var ret = {};
        ret.obj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('numbers', obj);
        ret.nSystem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('defaultNumberingSystem', ret.obj);
        return ret;
    };
    ParserBase.getCurrentNumericOptions = function (curObj, numberSystem, needSymbols) {
        var ret = {};
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(cur.nSystem)) {
            var digits = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(cur.nSystem + '._digits', numberSystem);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(digits)) {
                ret.numericPair = this.reverseObject(digits, latnNumberSystem);
                ret.numberParseRegex = new RegExp(this.constructRegex(digits), 'g');
                ret.numericRegex = '[' + digits[0] + '-' + digits[9] + ']';
                if (needSymbols) {
                    ret.numericRegex = digits[0] + '-' + digits[9];
                    ret.symbolNumberSystem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('symbols-numberSystem-' + cur.nSystem, cur.obj);
                    ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem);
                    ret.numberSystem = cur.nSystem;
                }
            }
        }
        return ret;
    };
    ParserBase.getNumberMapper = function (curObj, numberSystem, isNumber) {
        var ret = { mapper: {} };
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(cur.nSystem)) {
            ret.numberSystem = cur.nSystem;
            ret.numberSymbols = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('symbols-numberSystem-' + cur.nSystem, cur.obj);
            ret.timeSeparator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('timeSeparator', ret.numberSymbols);
            var digits = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(cur.nSystem + '._digits', numberSystem);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(digits)) {
                for (var _i = 0, latnNumberSystem_1 = latnNumberSystem; _i < latnNumberSystem_1.length; _i++) {
                    var i = latnNumberSystem_1[_i];
                    ret.mapper[i] = digits[i];
                }
            }
        }
        return ret;
    };
    return ParserBase;
}());

ParserBase.nPair = 'numericPair';
ParserBase.nRegex = 'numericRegex';
ParserBase.numberingSystems = defaultNumberingSystem;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(15);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Ajax", function() { return __WEBPACK_IMPORTED_MODULE_0__ajax__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__(16);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rippleEffect", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isRippleEnabled", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enableRipple", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return __WEBPACK_IMPORTED_MODULE_2__base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return __WEBPACK_IMPORTED_MODULE_3__browser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canvas_renderer__ = __webpack_require__(17);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderer", function() { return __WEBPACK_IMPORTED_MODULE_4__canvas_renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component__ = __webpack_require__(18);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_5__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__child_property__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ChildProperty", function() { return __WEBPACK_IMPORTED_MODULE_6__child_property__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__draggable__ = __webpack_require__(19);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return __WEBPACK_IMPORTED_MODULE_7__draggable__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return __WEBPACK_IMPORTED_MODULE_7__draggable__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__droppable__ = __webpack_require__(20);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return __WEBPACK_IMPORTED_MODULE_8__droppable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_handler__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return __WEBPACK_IMPORTED_MODULE_9__event_handler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__internationalization__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "onIntlChange", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rightToLeft", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cldrData", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defaultCulture", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defaultCurrencyCode", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Internationalization", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setCulture", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setCurrencyCode", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "loadCldr", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enableRtl", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getNumericObject", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getDefaultDateObject", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["l"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__keyboard__ = __webpack_require__(23);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvents", function() { return __WEBPACK_IMPORTED_MODULE_11__keyboard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__l10n__ = __webpack_require__(24);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "L10n", function() { return __WEBPACK_IMPORTED_MODULE_12__l10n__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__module_loader__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ModuleLoader", function() { return __WEBPACK_IMPORTED_MODULE_13__module_loader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__notify_property_change__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Complex", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ComplexFactory", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CollectionFactory", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NotifyPropertyChanges", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CreateBuilder", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__svg_renderer__ = __webpack_require__(25);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SvgRenderer", function() { return __WEBPACK_IMPORTED_MODULE_15__svg_renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__touch__ = __webpack_require__(28);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SwipeSettings", function() { return __WEBPACK_IMPORTED_MODULE_16__touch__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return __WEBPACK_IMPORTED_MODULE_16__touch__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__template_engine__ = __webpack_require__(26);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return __WEBPACK_IMPORTED_MODULE_17__template_engine__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setTemplateEngine", function() { return __WEBPACK_IMPORTED_MODULE_17__template_engine__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getTemplateEngine", function() { return __WEBPACK_IMPORTED_MODULE_17__template_engine__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__util__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "deleteObject", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getEnumValue", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getUniqueID", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "queryParams", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObjectArray", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compareElementParent", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "print", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatUnit", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addInstance", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["u"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dom__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "append", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getAttributeOrDefault", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setStyleAttribute", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "classList", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["q"]; });






















/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(1);


var ChildProperty = (function () {
    function ChildProperty(parent, propName, defaultValue, isArray) {
        this.properties = {};
        this.changedProperties = {};
        this.childChangedProperties = {};
        this.oldProperties = {};
        this.finalUpdate = function () { };
        this.callChildDataBind = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('callChildDataBind', __WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]);
        this.parentObj = parent;
        this.controlParent = this.parentObj.controlParent || this.parentObj;
        this.propName = propName;
        this.setProperties(defaultValue, true);
        this.isParentArray = isArray;
    }
    ChildProperty.prototype.updateChange = function (val, propName) {
        if (val === true) {
            this.parentObj.childChangedProperties[propName] = val;
        }
        else {
            delete this.parentObj.childChangedProperties[propName];
        }
        if (this.parentObj.updateChange) {
            this.parentObj.updateChange(val, this.parentObj.propName);
        }
    };
    ChildProperty.prototype.updateTimeOut = function () {
        if (this.parentObj.updateTimeOut) {
            this.parentObj.finalUpdate();
            this.parentObj.updateTimeOut();
        }
        else {
            this.parentObj.finalUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* setImmediate */])(this.parentObj.dataBind.bind(this.parentObj));
        }
    };
    ChildProperty.prototype.clearChanges = function () {
        this.finalUpdate();
        this.updateChange(false, this.propName);
        this.oldProperties = {};
        this.changedProperties = {};
    };
    ChildProperty.prototype.setProperties = function (prop, muteOnChange) {
        if (muteOnChange === true) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, prop);
            this.updateChange(false, this.propName);
            this.clearChanges();
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, prop);
        }
    };
    ChildProperty.prototype.dataBind = function () {
        this.callChildDataBind(this.childChangedProperties, this);
        if (this.isParentArray) {
            var curIndex = this.parentObj[this.propName].indexOf(this);
            if (Object.keys(this.changedProperties).length) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(this.propName + '.' + curIndex, this.changedProperties, this.parentObj.changedProperties);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(this.propName + '.' + curIndex, this.oldProperties, this.parentObj.oldProperties);
            }
        }
        else {
            this.parentObj.changedProperties[this.propName] = this.changedProperties;
            this.parentObj.oldProperties[this.propName] = this.oldProperties;
        }
        this.clearChanges();
    };
    ChildProperty.prototype.saveChanges = function (key, newValue, oldValue) {
        if (this.controlParent.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.updateChange(true, this.propName);
        this.finalUpdate();
        this.updateTimeOut();
    };
    return ChildProperty;
}());



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onIntlChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rightToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cldrData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultCulture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultCurrencyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Internationalization; });
/* harmony export (immutable) */ __webpack_exports__["g"] = setCulture;
/* harmony export (immutable) */ __webpack_exports__["h"] = setCurrencyCode;
/* harmony export (immutable) */ __webpack_exports__["i"] = loadCldr;
/* harmony export (immutable) */ __webpack_exports__["j"] = enableRtl;
/* harmony export (immutable) */ __webpack_exports__["k"] = getNumericObject;
/* harmony export (immutable) */ __webpack_exports__["l"] = getDefaultDateObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intl_date_formatter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__intl_number_formatter__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intl_date_parser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intl_number_parser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__observer__ = __webpack_require__(11);







var onIntlChange = new __WEBPACK_IMPORTED_MODULE_6__observer__["a" /* Observer */]();
var rightToLeft = false;
var cldrData = {};
var defaultCulture = 'en-US';
var defaultCurrencyCode = 'USD';
var mapper = ['numericObject', 'dateObject'];
var Internationalization = (function () {
    function Internationalization(cultureName) {
        if (cultureName) {
            this.culture = cultureName;
        }
    }
    Internationalization.prototype.getDateFormat = function (options) {
        return __WEBPACK_IMPORTED_MODULE_0__intl_date_formatter__["a" /* DateFormat */].dateFormat(this.getCulture(), options || { type: 'date', skeleton: 'short' }, cldrData);
    };
    Internationalization.prototype.getNumberFormat = function (options) {
        if (options && !options.currency) {
            options.currency = defaultCurrencyCode;
        }
        return __WEBPACK_IMPORTED_MODULE_1__intl_number_formatter__["a" /* NumberFormat */].numberFormatter(this.getCulture(), options || {}, cldrData);
    };
    Internationalization.prototype.getDateParser = function (options) {
        return __WEBPACK_IMPORTED_MODULE_2__intl_date_parser__["a" /* DateParser */].dateParser(this.getCulture(), options || { skeleton: 'short', type: 'date' }, cldrData);
    };
    Internationalization.prototype.getNumberParser = function (options) {
        return __WEBPACK_IMPORTED_MODULE_3__intl_number_parser__["a" /* NumberParser */].numberParser(this.getCulture(), options || { format: 'N' }, cldrData);
    };
    Internationalization.prototype.formatNumber = function (value, option) {
        return this.getNumberFormat(option)(value);
    };
    Internationalization.prototype.formatDate = function (value, option) {
        return this.getDateFormat(option)(value);
    };
    Internationalization.prototype.parseDate = function (value, option) {
        return this.getDateParser(option)(value);
    };
    Internationalization.prototype.parseNumber = function (value, option) {
        return this.getNumberParser(option)(value);
    };
    Internationalization.prototype.getDatePattern = function (option, isExcelFormat) {
        return __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getActualDateTimeFormat(this.getCulture(), option, cldrData, isExcelFormat);
    };
    Internationalization.prototype.getNumberPattern = function (option) {
        return __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getActualNumberFormat(this.getCulture(), option, cldrData);
    };
    Internationalization.prototype.getCulture = function () {
        return this.culture || defaultCulture;
    };
    return Internationalization;
}());

function setCulture(cultureName) {
    defaultCulture = cultureName;
    onIntlChange.notify('notifyExternalChange', { 'locale': defaultCulture });
}
function setCurrencyCode(currencyCode) {
    defaultCurrencyCode = currencyCode;
}
function loadCldr() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var obj = data_1[_a];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["i" /* extend */])(cldrData, obj, {}, true);
    }
}
function enableRtl(status) {
    if (status === void 0) { status = true; }
    rightToLeft = status;
    onIntlChange.notify('notifyExternalChange', { enableRtl: rightToLeft });
}
function getNumericObject(locale, type) {
    var numObject = __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDependables(cldrData, locale, true)[mapper[0]];
    var dateObject = __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDependables(cldrData, locale)[mapper[1]];
    var numSystem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["c" /* getValue */])('defaultNumberingSystem', numObject);
    var symbPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["c" /* getValue */])('symbols-numberSystem-' + numSystem, numObject);
    var pattern = __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getSymbolPattern(type || 'decimal', numSystem, numObject, false);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["i" /* extend */])(symbPattern, __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getFormatData(pattern, true, '', true), { 'dateSeparator': __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDateSeparator(dateObject) });
}
function getDefaultDateObject() {
    return __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDependables(cldrData, '', false)[mapper[1]];
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var Observer = (function () {
    function Observer(context) {
        this.boundedEvents = {};
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(context)) {
            return;
        }
        this.context = context;
    }
    ;
    Observer.prototype.on = function (property, handler, context) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(handler)) {
            return;
        }
        var cntxt = context || this.context;
        if (this.notExist(property)) {
            this.boundedEvents[property] = [{ handler: handler, context: cntxt }];
            return;
        }
        if (!this.isHandlerPresent(this.boundedEvents[property], handler)) {
            this.boundedEvents[property].push({ handler: handler, context: cntxt });
        }
    };
    Observer.prototype.off = function (property, handler) {
        if (this.notExist(property)) {
            return;
        }
        var curObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(property, this.boundedEvents);
        if (handler) {
            for (var i = 0; i < curObject.length; i++) {
                if (handler === curObject[i].handler) {
                    curObject.splice(i, 1);
                    break;
                }
            }
        }
        else {
            delete this.boundedEvents[property];
        }
    };
    Observer.prototype.notify = function (property, argument) {
        if (this.notExist(property)) {
            return;
        }
        if (argument) {
            argument.name = property;
        }
        var curObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(property, this.boundedEvents).slice(0);
        for (var _i = 0, curObject_1 = curObject; _i < curObject_1.length; _i++) {
            var cur = curObject_1[_i];
            cur.handler.call(cur.context, argument);
        }
    };
    Observer.prototype.destroy = function () {
        this.boundedEvents = this.context = undefined;
    };
    Observer.prototype.notExist = function (prop) {
        return this.boundedEvents.hasOwnProperty(prop) === false;
    };
    Observer.prototype.isHandlerPresent = function (boundedEvents, handler) {
        for (var _i = 0, boundedEvents_1 = boundedEvents; _i < boundedEvents_1.length; _i++) {
            var cur = boundedEvents_1[_i];
            if (cur.handler === handler) {
                return true;
            }
        }
        return false;
    };
    return Observer;
}());



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export basicPatterns */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parser_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__intl_base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



var abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLL|EEEEE|EEEE|E|K|ccc|G+|z+/gi;
var standalone = 'stand-alone';
var weekdayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var basicPatterns = ['short', 'medium', 'long', 'full'];
var timeSetter = {
    m: 'getMinutes',
    h: 'getHours',
    H: 'getHours',
    s: 'getSeconds',
    d: 'getDate',
};
var datePartMatcher = {
    'M': 'month',
    'd': 'day',
    'E': 'weekday',
    'c': 'weekday',
    'y': 'year',
    'm': 'minute',
    'h': 'hour',
    'H': 'hour',
    's': 'second',
    'L': 'month',
    'a': 'designator',
    'z': 'timeZone',
    'Z': 'timeZone',
    'G': 'era'
};
var timeSeparator = 'timeSeparator';
var DateFormat = (function () {
    function DateFormat() {
    }
    DateFormat.dateFormat = function (culture, option, cldr) {
        var _this = this;
        var dependable = __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].getDependables(cldr, culture);
        var formatOptions = {};
        var resPattern = option.format || __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].getResultantPattern(option.skeleton, dependable.dateObject, option.type);
        formatOptions.dateSeperator = __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].getDateSeparator(dependable.dateObject);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(resPattern)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["q" /* throwError */])('Format options or type given must be invalid');
        }
        else {
            formatOptions.pattern = resPattern;
            formatOptions.numMapper = __WEBPACK_IMPORTED_MODULE_0__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_0__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr));
            var patternMatch = resPattern.match(abbreviateRegexGlobal) || [];
            for (var _i = 0, patternMatch_1 = patternMatch; _i < patternMatch_1.length; _i++) {
                var str = patternMatch_1[_i];
                var len = str.length;
                var char = str[0];
                if (char === 'K') {
                    char = 'h';
                }
                var charKey = datePartMatcher[char];
                switch (char) {
                    case 'E':
                    case 'c':
                        formatOptions.weekday = dependable.dateObject[__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].days][standalone][__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].monthIndex[len]];
                        break;
                    case 'M':
                    case 'L':
                        formatOptions.month = dependable.dateObject[__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].month][standalone][__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].monthIndex[len]];
                        break;
                    case 'a':
                        formatOptions.designator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dayPeriods.format.wide', dependable.dateObject);
                        break;
                    case 'G':
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        formatOptions.era = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('eras.' + eText, dependable.dateObject);
                        break;
                    case 'z':
                        formatOptions.timeZone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dates.timeZoneNames', dependable.parserObject);
                        break;
                }
            }
        }
        return function (value) {
            if (isNaN(value.getDate())) {
                return null;
            }
            return _this.intDateFormatter(value, formatOptions);
        };
    };
    DateFormat.intDateFormatter = function (value, options) {
        var pattern = options.pattern;
        var ret = '';
        var matches = pattern.match(__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].dateParseRegex);
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var length_1 = match.length;
            var char = match[0];
            if (char === 'K') {
                char = 'h';
            }
            var curval = void 0;
            var isNumber = void 0;
            var processNumber = void 0;
            var curstr = '';
            switch (char) {
                case 'M':
                case 'L':
                    curval = value.getMonth() + 1;
                    if (length_1 > 2) {
                        ret += options.month[curval];
                    }
                    else {
                        isNumber = true;
                    }
                    break;
                case 'E':
                case 'c':
                    ret += options.weekday[weekdayKey[value.getDay()]];
                    break;
                case 'H':
                case 'h':
                case 'm':
                case 's':
                case 'd':
                    isNumber = true;
                    curval = value[timeSetter[char]]();
                    if (char === 'h') {
                        curval = curval % 12 || 12;
                    }
                    break;
                case 'y':
                    processNumber = true;
                    curstr += value.getFullYear();
                    if (length_1 === 2) {
                        curstr = curstr.substr(curstr.length - 2);
                    }
                    break;
                case 'a':
                    var desig = value.getHours() < 12 ? 'am' : 'pm';
                    ret += options.designator[desig];
                    break;
                case 'G':
                    var dec = value.getFullYear() < 0 ? 0 : 1;
                    ret += options.era[dec];
                    break;
                case '\'':
                    ret += (match === '\'\'') ? '\'' : match.replace(/\'/g, '');
                    break;
                case 'z':
                    var timezone = value.getTimezoneOffset();
                    var pattern_1 = (length_1 < 4) ? '+H;-H' : options.timeZone.hourFormat;
                    pattern_1 = pattern_1.replace(/:/g, options.numMapper.timeSeparator);
                    if (timezone === 0) {
                        ret += options.timeZone.gmtZeroFormat;
                    }
                    else {
                        processNumber = true;
                        curstr = this.getTimeZoneValue(timezone, pattern_1);
                    }
                    curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
                    break;
                case ':':
                    ret += options.numMapper.numberSymbols[timeSeparator];
                    break;
                case '/':
                    ret += options.dateSeperator;
                    break;
                default:
                    ret += match;
            }
            if (isNumber) {
                processNumber = true;
                curstr = this.checkTwodigitNumber(curval, length_1);
            }
            if (processNumber) {
                ret += __WEBPACK_IMPORTED_MODULE_0__parser_base__["a" /* ParserBase */].convertValueParts(curstr, __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].latnParseRegex, options.numMapper.mapper);
            }
        }
        return ret;
    };
    DateFormat.checkTwodigitNumber = function (val, len) {
        var ret = val + '';
        if (len === 2 && ret.length !== 2) {
            return '0' + ret;
        }
        return ret;
    };
    DateFormat.getTimeZoneValue = function (tVal, pattern) {
        var _this = this;
        var splt = pattern.split(';');
        var curPattern = splt[tVal > 0 ? 1 : 0];
        var no = Math.abs(tVal);
        return curPattern = curPattern.replace(/HH?|mm/g, function (str) {
            var len = str.length;
            var ishour = str.indexOf('H') !== -1;
            return _this.checkTwodigitNumber(Math.floor(ishour ? (no / 60) : (no % 60)), len);
        });
    };
    return DateFormat;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberFormat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internationalization__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intl_base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parser_base__ = __webpack_require__(7);




var errorText = {
    'ms': 'minimumSignificantDigits',
    'ls': 'maximumSignificantDigits',
    'mf': 'minimumFractionDigits',
    'lf': 'maximumFractionDigits',
};
var integerError = 'minimumIntegerDigits';
var percentSign = 'percentSign';
var minusSign = 'minusSign';
var spaceRegex = /\s/;
var mapper = ['infinity', 'nan', 'group', 'decimal'];
var infinity = 'infinity';
var nan = 'nan';
var NumberFormat = (function () {
    function NumberFormat() {
    }
    NumberFormat.numberFormatter = function (culture, option, cldr) {
        var _this = this;
        var fOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, option);
        var cOptions = {};
        var dOptions = {};
        var symbolPattern;
        var dependable = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getDependables(cldr, culture, true);
        dOptions.numberMapper = __WEBPACK_IMPORTED_MODULE_3__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_3__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr), true);
        dOptions.currencySymbol = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getCurrencySymbol(dependable.numericObject, fOptions.currency || __WEBPACK_IMPORTED_MODULE_1__internationalization__["e" /* defaultCurrencyCode */]);
        dOptions.percentSymbol = dOptions.numberMapper.numberSymbols[percentSign];
        dOptions.minusSymbol = dOptions.numberMapper.numberSymbols[minusSign];
        var symbols = dOptions.numberMapper.numberSymbols;
        if ((option.format) && !(__WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].formatRegex.test(option.format))) {
            cOptions = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].customFormat(option.format, dOptions, dependable.numericObject);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(fOptions, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getProperNumericSkeleton(option.format || 'N'));
            fOptions.isCurrency = fOptions.type === 'currency';
            fOptions.isPercent = fOptions.type === 'percent';
            symbolPattern = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount);
            fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, true);
            this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, false, true);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.fractionDigits)) {
                fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits;
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.useGrouping)) {
                fOptions.useGrouping = true;
            }
            if (fOptions.isCurrency) {
                symbolPattern = symbolPattern.replace(/\u00A4/g, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].defaultCurrency);
            }
            var split = symbolPattern.split(';');
            cOptions.nData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[1] || '-' + split[0], true, dOptions.currencySymbol);
            cOptions.pData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[0], false, dOptions.currencySymbol);
            if (fOptions.useGrouping) {
                fOptions.groupSeparator = symbols[mapper[2]];
                fOptions.groupData = this.getGroupingDetails(split[0]);
            }
            var minFrac = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.minimumFractionDigits);
            if (minFrac) {
                fOptions.minimumFractionDigits = cOptions.nData.minimumFraction;
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.maximumFractionDigits)) {
                var mval = cOptions.nData.maximumFraction;
                fOptions.maximumFractionDigits = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(mval) && fOptions.isPercent ? 0 : mval;
            }
            var mfrac = fOptions.minimumFractionDigits;
            var lfrac = fOptions.maximumFractionDigits;
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(mfrac) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(lfrac)) {
                if (mfrac > lfrac) {
                    fOptions.maximumFractionDigits = mfrac;
                }
            }
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions.nData, fOptions);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions.pData, fOptions);
        return function (value) {
            if (isNaN(value)) {
                return symbols[mapper[1]];
            }
            else if (!isFinite(value)) {
                return symbols[mapper[0]];
            }
            return _this.intNumberFormatter(value, cOptions, dOptions);
        };
    };
    NumberFormat.getGroupingDetails = function (pattern) {
        var ret = {};
        var match = pattern.match(__WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].negativeDataRegex);
        if (match && match[4]) {
            var pattern_1 = match[4];
            var p = pattern_1.lastIndexOf(',');
            if (p !== -1) {
                var temp = pattern_1.split('.')[0];
                ret.primary = (temp.length - p) - 1;
                var s = pattern_1.lastIndexOf(',', p - 1);
                if (s !== -1) {
                    ret.secondary = p - 1 - s;
                }
            }
        }
        return ret;
    };
    NumberFormat.checkValueRange = function (val1, val2, checkbothExist, isFraction) {
        var decide = isFraction ? 'f' : 's';
        var dint = 0;
        var str1 = errorText['l' + decide];
        var str2 = errorText['m' + decide];
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(val1)) {
            this.checkRange(val1, str1, isFraction);
            dint++;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(val2)) {
            this.checkRange(val2, str2, isFraction);
            dint++;
        }
        if (dint === 2) {
            if (val1 < val2) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])(str2 + 'specified must be less than the' + str1);
            }
            else {
                return true;
            }
        }
        else if (checkbothExist && dint === 1) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])('Both' + str2 + 'and' + str2 + 'must be present');
        }
        return false;
    };
    NumberFormat.checkRange = function (val, text, isFraction) {
        var range = isFraction ? [0, 20] : [1, 21];
        if (val < range[0] || val > range[1]) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])(text + 'value must be within the range' + range[0] + 'to' + range[1]);
        }
    };
    NumberFormat.intNumberFormatter = function (value, fOptions, dOptions) {
        var curData;
        if (value < 0) {
            value = value * -1;
            curData = fOptions.nData;
        }
        else if (value === 0) {
            curData = fOptions.zeroData || fOptions.pData;
        }
        else {
            curData = fOptions.pData;
        }
        var fValue = '';
        if (curData.isPercent) {
            value = value * 100;
        }
        if (curData.groupOne) {
            fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits);
        }
        else {
            fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits);
            if (curData.minimumIntegerDigits) {
                fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits);
            }
        }
        fValue = fValue.replace('.', dOptions.numberMapper.numberSymbols[mapper[3]]);
        if (curData.useGrouping) {
            fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ',', dOptions.numberMapper.numberSymbols[mapper[3]] || '.', curData.groupData.secondary);
        }
        fValue = __WEBPACK_IMPORTED_MODULE_3__parser_base__["a" /* ParserBase */].convertValueParts(fValue, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].latnParseRegex, dOptions.numberMapper.mapper);
        return curData.nlead + fValue + curData.nend;
    };
    NumberFormat.processSignificantDigits = function (value, min, max) {
        var temp = value + '';
        var tn;
        var length = temp.length;
        if (length < min) {
            return value.toPrecision(min);
        }
        else {
            temp = value.toPrecision(max);
            tn = +temp;
            return tn + '';
        }
    };
    NumberFormat.groupNumbers = function (val, level1, sep, decimalSymbol, level2) {
        var flag = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(level2) && level2 !== 0;
        var split = val.split(decimalSymbol);
        var prefix = split[0];
        var length = prefix.length;
        var str = '';
        while (length > level1) {
            str = prefix.slice(length - level1, length) + (str.length ?
                (sep + str) : '');
            length -= level1;
            if (flag) {
                level1 = level2;
                flag = false;
            }
        }
        split[0] = prefix.slice(0, length) + (str.length ? sep : '') + str;
        return split.join(decimalSymbol);
    };
    NumberFormat.processFraction = function (value, min, max) {
        var temp = (value + '').split('.')[1];
        var length = temp ? temp.length : 0;
        if (min && length < min) {
            var ret = '';
            if (length === 0) {
                ret = value.toFixed(min);
            }
            else {
                ret += value;
                for (var j = 0; j < min - length; j++) {
                    ret += '0';
                }
                return ret;
            }
            return value.toFixed(min);
        }
        else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(max) && (length > max || max === 0)) {
            return value.toFixed(max);
        }
        return value + '';
    };
    NumberFormat.processMinimumIntegers = function (value, min) {
        var temp = value.split('.');
        var lead = temp[0];
        var len = lead.length;
        if (len < min) {
            for (var i = 0; i < min - len; i++) {
                lead = '0' + lead;
            }
            temp[0] = lead;
        }
        return temp.join('.');
    };
    return NumberFormat;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var MODULE_SUFFIX = 'Module';
var ModuleLoader = (function () {
    function ModuleLoader(parent) {
        this.loadedModules = [];
        this.parent = parent;
    }
    ;
    ModuleLoader.prototype.inject = function (requiredModules, moduleList) {
        var reqLength = requiredModules.length;
        if (reqLength === 0) {
            this.clean();
            return;
        }
        if (this.loadedModules.length) {
            this.clearUnusedModule(requiredModules);
        }
        for (var i = 0; i < reqLength; i++) {
            var modl = requiredModules[i];
            for (var _i = 0, moduleList_1 = moduleList; _i < moduleList_1.length; _i++) {
                var module = moduleList_1[_i];
                var modName = modl.member;
                if (module.prototype.getModuleName() === modl.member && !this.isModuleLoaded(modName)) {
                    var moduleObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(module, modl.args);
                    var memberName = this.getMemberName(modName);
                    if (modl.isProperty) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(memberName, module, this.parent);
                    }
                    else {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(memberName, moduleObject, this.parent);
                    }
                    var loadedModule = modl;
                    loadedModule.member = memberName;
                    this.loadedModules.push(loadedModule);
                }
            }
        }
    };
    ModuleLoader.prototype.clean = function () {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var modules = _a[_i];
            if (!modules.isProperty) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(modules.member, this.parent).destroy();
            }
        }
        this.loadedModules = [];
    };
    ModuleLoader.prototype.clearUnusedModule = function (moduleList) {
        var _this = this;
        var usedModules = moduleList.map(function (arg) { return _this.getMemberName(arg.member); });
        var removableModule = this.loadedModules.filter(function (module) {
            return usedModules.indexOf(module.member) === -1;
        });
        for (var _i = 0, removableModule_1 = removableModule; _i < removableModule_1.length; _i++) {
            var mod = removableModule_1[_i];
            if (!mod.isProperty) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(mod.member, this.parent).destroy();
            }
            this.loadedModules.splice(this.loadedModules.indexOf(mod), 1);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* deleteObject */])(this.parent, mod.member);
        }
    };
    ModuleLoader.prototype.getMemberName = function (name) {
        return name[0].toLowerCase() + name.substring(1) + MODULE_SUFFIX;
    };
    ModuleLoader.prototype.isModuleLoaded = function (modName) {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var mod = _a[_i];
            if (mod.member === this.getMemberName(modName)) {
                return true;
            }
        }
        return false;
    };
    return ModuleLoader;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ajax; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var headerRegex = /^(.*?):[ \t]*([^\r\n]*)$/gm;
var defaultType = 'GET';
var Ajax = (function () {
    function Ajax(options, type, async) {
        this.mode = true;
        this.options = {};
        if (typeof options === 'string') {
            this.url = options;
            this.type = type ? type.toUpperCase() : defaultType;
            this.mode = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(async) ? async : true;
        }
        else if (typeof options === 'object') {
            this.options = options;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, this.options);
        }
        this.type = this.type ? this.type.toUpperCase() : defaultType;
    }
    Ajax.prototype.send = function (data) {
        var _this = this;
        this.data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(data) ? this.data : data;
        var promise = new Promise(function (resolve, reject) {
            _this.httpRequest = new XMLHttpRequest();
            _this.httpRequest.onreadystatechange = function () { _this.stateChange(resolve, reject); };
            _this.httpRequest.open(_this.type, _this.url, _this.mode);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.data)) {
                _this.httpRequest.setRequestHeader('Content-Type', _this.contentType || 'application/json; charset=utf-8');
            }
            if (_this.beforeSend) {
                _this.beforeSend();
            }
            _this.httpRequest.send(!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.data) ? _this.data : null);
        });
        return promise;
    };
    Ajax.prototype.successHandler = function (data) {
        if (this.onSuccess) {
            this.onSuccess(data, this);
        }
        return data;
    };
    Ajax.prototype.failureHandler = function (reason) {
        if (this.onFailure) {
            this.onFailure(this.httpRequest);
        }
        return reason;
    };
    Ajax.prototype.stateChange = function (resolve, reject) {
        var data = this.httpRequest.responseText;
        if (this.dataType && this.dataType.toLowerCase() === 'json') {
            if (data === '') {
                data = undefined;
            }
            else {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                }
            }
        }
        if (this.httpRequest.readyState === 4) {
            if (this.httpRequest.status === 200 || this.httpRequest.status === 304) {
                resolve(this.successHandler(data));
            }
            else {
                reject(new Error(this.failureHandler(this.httpRequest.statusText)));
            }
        }
    };
    Ajax.prototype.getResponseHeader = function (key) {
        var responseHeaders;
        var header;
        responseHeaders = {};
        var headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        while (headers) {
            responseHeaders[headers[1].toLowerCase()] = headers[2];
            headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        }
        header = responseHeaders[key.toLowerCase()];
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(header) ? null : header;
    };
    return Ajax;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
/* harmony export (immutable) */ __webpack_exports__["b"] = rippleEffect;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isRippleEnabled; });
/* harmony export (immutable) */ __webpack_exports__["d"] = enableRipple;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notify_property_change__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
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





var Animation = Animation_1 = (function (_super) {
    __extends(Animation, _super);
    function Animation(options) {
        var _this = _super.call(this, options, undefined) || this;
        _this.easing = {
            ease: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
            linear: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
            easeIn: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
            easeOut: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
            easeInOut: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
            elasticInOut: 'cubic-bezier(0.5,-0.58,0.38,1.81)',
            elasticIn: 'cubic-bezier(0.17,0.67,0.59,1.81)',
            elasticOut: 'cubic-bezier(0.7,-0.75,0.99,1.01)'
        };
        return _this;
    }
    Animation.prototype.animate = function (element, options) {
        options = !options ? {} : options;
        var model = this.getModel(options);
        if (typeof element === 'string') {
            var elements = Array.prototype.slice.call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["k" /* selectAll */])(element, document));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element_1 = elements_1[_i];
                model.element = element_1;
                Animation_1.delayAnimation(model);
            }
        }
        else {
            model.element = element;
            Animation_1.delayAnimation(model);
        }
    };
    Animation.stop = function (element, model) {
        element.style.animation = '';
        element.removeAttribute('e-animate');
        var animationId = element.getAttribute('e-animation-id');
        if (animationId) {
            var frameId = parseInt(animationId, 10);
            cancelAnimationFrame(frameId);
            element.removeAttribute('e-animation-id');
        }
        if (model && model.end) {
            model.end.call(this, model);
        }
    };
    Animation.delayAnimation = function (model) {
        if (model.delay) {
            setTimeout(function () { Animation_1.applyAnimation(model); }, model.delay);
        }
        else {
            Animation_1.applyAnimation(model);
        }
    };
    Animation.applyAnimation = function (model) {
        var _this = this;
        model.timeStamp = 0;
        var step = 0;
        var timerId = 0;
        var startTime = 0;
        var prevTimeStamp = 0;
        var duration = model.duration;
        model.element.setAttribute('e-animate', 'true');
        var startAnimation = function (timeStamp) {
            try {
                if (timeStamp) {
                    prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
                    model.timeStamp = (timeStamp + model.timeStamp) - prevTimeStamp;
                    prevTimeStamp = timeStamp;
                    if (!step && model.begin) {
                        model.begin.call(_this, model);
                    }
                    step = step + 1;
                    var avg = model.timeStamp / step;
                    if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute('e-animate')) {
                        model.element.style.animation = model.name + ' ' + model.duration + 'ms ' + model.timingFunction;
                        if (model.progress) {
                            model.progress.call(_this, model);
                        }
                        requestAnimationFrame(startAnimation);
                    }
                    else {
                        cancelAnimationFrame(timerId);
                        model.element.removeAttribute('e-animation-id');
                        model.element.removeAttribute('e-animate');
                        model.element.style.animation = '';
                        if (model.end) {
                            model.end.call(_this, model);
                        }
                    }
                }
                else {
                    startTime = performance.now();
                    timerId = requestAnimationFrame(startAnimation);
                    model.element.setAttribute('e-animation-id', timerId.toString());
                }
            }
            catch (e) {
                cancelAnimationFrame(timerId);
                model.element.removeAttribute('e-animation-id');
                if (model.fail) {
                    model.fail.call(_this, e);
                }
            }
        };
        startAnimation();
    };
    Animation.prototype.getModel = function (options) {
        return {
            name: options.name || this.name,
            delay: options.delay || this.delay,
            duration: (options.duration !== undefined ? options.duration : this.duration),
            begin: options.begin || this.begin,
            end: options.end || this.end,
            fail: options.fail || this.fail,
            progress: options.progress || this.progress,
            timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] :
                (options.timingFunction || this.easing[this.timingFunction])
        };
    };
    Animation.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Animation.prototype.getModuleName = function () {
        return 'animation';
    };
    Animation.prototype.destroy = function () {
    };
    return Animation;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])('FadeIn')
], Animation.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])(400)
], Animation.prototype, "duration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])('ease')
], Animation.prototype, "timingFunction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])(0)
], Animation.prototype, "delay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "progress", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "begin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "end", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "fail", void 0);
Animation = Animation_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_4__notify_property_change__["g" /* NotifyPropertyChanges */]
], Animation);

function rippleEffect(element, rippleOptions, done) {
    var rippleModel = getRippleModel(rippleOptions);
    if (rippleModel.rippleFlag === false || (rippleModel.rippleFlag === undefined && !isRippleEnabled)) {
        return Function;
    }
    element.setAttribute('data-ripple', 'true');
    __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mousedown', rippleHandler, { parent: element, rippleOptions: rippleModel });
    __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mouseup', rippleUpHandler, { parent: element, rippleOptions: rippleModel, done: done });
    __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mouseleave', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    if (__WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].isPointer) {
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'transitionend', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    }
    return (function () {
        element.removeAttribute('data-ripple');
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mousedown', rippleHandler);
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mouseup', rippleUpHandler);
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mouseleave', rippleLeaveHandler);
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'transitionend', rippleLeaveHandler);
    });
}
function getRippleModel(rippleOptions) {
    var rippleModel = {
        selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
        ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
        rippleFlag: rippleOptions && rippleOptions.rippleFlag,
        isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
        duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
    };
    return rippleModel;
}
function rippleHandler(e) {
    var target = (e.target);
    var selector = this.rippleOptions.selector;
    var element = selector ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["l" /* closest */])(target, selector) : target;
    if (!element || (this.rippleOptions && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["l" /* closest */])(target, this.rippleOptions.ignore))) {
        return;
    }
    var offset = element.getBoundingClientRect();
    var offsetX = e.pageX - document.body.scrollLeft;
    var offsetY = e.pageY - document.body.scrollTop;
    var pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right));
    var pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom));
    var radius = Math.sqrt(pageX * pageX + pageY * pageY);
    var diameter = radius * 2 + 'px';
    var x = offsetX - offset.left - radius;
    var y = offsetY - offset.top - radius;
    if (this.rippleOptions && this.rippleOptions.isCenterRipple) {
        x = 0;
        y = 0;
        diameter = '100%';
    }
    element.classList.add('e-ripple');
    var duration = this.rippleOptions.duration.toString();
    var styles = 'width: ' + diameter + ';height: ' + diameter + ';left: ' + x + 'px;top: ' + y + 'px;' +
        'transition-duration: ' + duration + 'ms;';
    var rippleElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["a" /* createElement */])('div', { className: 'e-ripple-element', styles: styles });
    element.appendChild(rippleElement);
    window.getComputedStyle(rippleElement).getPropertyValue('opacity');
    rippleElement.style.transform = 'scale(1)';
    if (element !== this.parent) {
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mouseleave', rippleLeaveHandler, { parent: this.parent, rippleOptions: this.rippleOptions });
    }
}
function rippleUpHandler(e) {
    removeRipple(e, this);
}
function rippleLeaveHandler(e) {
    removeRipple(e, this);
}
function removeRipple(e, eventArgs) {
    var duration = eventArgs.rippleOptions.duration;
    var target = (e.target);
    var selector = eventArgs.rippleOptions.selector;
    var element = selector ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["l" /* closest */])(target, selector) : target;
    if (!element || (element && element.className.indexOf('e-ripple') === -1)) {
        return;
    }
    var rippleElements = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["k" /* selectAll */])('.e-ripple-element', element);
    var rippleElement = rippleElements[rippleElements.length - 1];
    if (rippleElement) {
        rippleElement.style.opacity = '0.5';
    }
    if (eventArgs.parent !== element) {
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mouseleave', rippleLeaveHandler);
    }
    setTimeout(function () {
        if (rippleElement && rippleElement.parentNode) {
            rippleElement.parentNode.removeChild(rippleElement);
        }
        if (!element.getElementsByClassName('e-ripple-element').length) {
            element.classList.remove('e-ripple');
        }
        if (eventArgs.done) {
            eventArgs.done(e);
        }
    }, duration);
}
var isRippleEnabled = false;
function enableRipple(isRipple) {
    isRippleEnabled = isRipple;
    return isRippleEnabled;
}
var Animation_1;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var CanvasRenderer = (function () {
    function CanvasRenderer(rootID) {
        this.rootId = rootID;
    }
    CanvasRenderer.prototype.getOptionValue = function (options, key) {
        return options[key];
    };
    CanvasRenderer.prototype.createCanvas = function (options) {
        var canvasObj = document.createElement('canvas');
        canvasObj.setAttribute('id', this.rootId + '_canvas');
        this.ctx = canvasObj.getContext('2d');
        this.canvasObj = canvasObj;
        this.setCanvasSize(options.width, options.height);
        return this.canvasObj;
    };
    CanvasRenderer.prototype.setCanvasSize = function (width, height) {
        var element = document.getElementById(this.rootId);
        var size = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(element) ? element.getBoundingClientRect() : null;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.width)) {
            this.canvasObj.setAttribute('width', width ? width.toString() : size.width.toString());
        }
        else {
            this.canvasObj.setAttribute('width', this.width.toString());
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.height)) {
            this.canvasObj.setAttribute('height', height ? height.toString() : '450');
        }
        else {
            this.canvasObj.setAttribute('height', this.height.toString());
        }
    };
    CanvasRenderer.prototype.setAttributes = function (options) {
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        var dashArray = this.getOptionValue(options, 'stroke-dasharray');
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(dashArray)) {
            var dashArrayString = dashArray.split(',');
            this.ctx.setLineDash([parseInt(dashArrayString[0], 10), parseInt(dashArrayString[1], 10)]);
        }
        this.ctx.strokeStyle = this.getOptionValue(options, 'stroke');
    };
    CanvasRenderer.prototype.drawLine = function (options) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.moveTo(options.x1, options.y1);
        this.ctx.lineTo(options.x2, options.y2);
        this.ctx.stroke();
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawRectangle = function (options) {
        var canvasCtx = this.ctx;
        var cornerRadius = options.rx;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.globalAlpha = this.getOptionValue(options, 'opacity');
        this.setAttributes(options);
        this.ctx.rect(options.x, options.y, options.width, options.height);
        if (cornerRadius !== null && cornerRadius >= 0) {
            this.drawCornerRadius(options);
        }
        else {
            if (options.fill === 'none') {
                options.fill = 'transparent';
            }
            this.ctx.fillStyle = options.fill;
            this.ctx.fillRect(options.x, options.y, options.width, options.height);
            this.ctx.stroke();
        }
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawCornerRadius = function (options) {
        var cornerRadius = options.rx;
        var x = options.x;
        var y = options.y;
        var width = options.width;
        var height = options.height;
        if (options.fill === 'none') {
            options.fill = 'transparent';
        }
        this.ctx.fillStyle = options.fill;
        if (width < 2 * cornerRadius) {
            cornerRadius = width / 2;
        }
        if (height < 2 * cornerRadius) {
            cornerRadius = height / 2;
        }
        this.ctx.beginPath();
        this.ctx.moveTo(x + width - cornerRadius, y);
        this.ctx.arcTo(x + width, y, x + width, y + height, cornerRadius);
        this.ctx.arcTo(x + width, y + height, x, y + height, cornerRadius);
        this.ctx.arcTo(x, y + height, x, y, cornerRadius);
        this.ctx.arcTo(x, y, x + width, y, cornerRadius);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawPath = function (options, canvasTranslate) {
        var path = options.d;
        var dataSplit = path.split(' ');
        var borderWidth = this.getOptionValue(options, 'stroke-width');
        var canvasCtx = this.ctx;
        var flag = true;
        this.ctx.save();
        this.ctx.beginPath();
        if (canvasTranslate) {
            this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
        }
        this.ctx.globalAlpha = options.opacity ? options.opacity : this.getOptionValue(options, 'fill-opacity');
        this.setAttributes(options);
        for (var i = 0; i < dataSplit.length; i = i + 3) {
            var x1 = parseFloat(dataSplit[i + 1]);
            var y1 = parseFloat(dataSplit[i + 2]);
            switch (dataSplit[i]) {
                case 'M':
                    if (!options.innerR && !options.cx) {
                        this.ctx.moveTo(x1, y1);
                    }
                    break;
                case 'L':
                    if (!options.innerR) {
                        this.ctx.lineTo(x1, y1);
                    }
                    break;
                case 'C':
                    var c1 = parseFloat(dataSplit[i + 3]);
                    var c2 = parseFloat(dataSplit[i + 4]);
                    var c3 = parseFloat(dataSplit[i + 5]);
                    var c4 = parseFloat(dataSplit[i + 6]);
                    this.ctx.bezierCurveTo(x1, y1, c1, c2, c3, c4);
                    i = i + 4;
                    break;
                case 'A':
                    if (!options.innerR) {
                        if (options.cx) {
                            this.ctx.arc(options.cx, options.cy, options.radius, 0, 2 * Math.PI, options.counterClockWise);
                        }
                        else {
                            this.ctx.moveTo(options.x, options.y);
                            this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                            this.ctx.lineTo(options.x, options.y);
                        }
                    }
                    else if (flag) {
                        this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                        this.ctx.arc(options.x, options.y, options.innerR, options.end, options.start, !options.counterClockWise);
                        flag = false;
                    }
                    i = i + 5;
                    break;
                case 'z':
                    this.ctx.closePath();
                    break;
            }
        }
        if (options.fill !== 'none' && options.fill !== undefined) {
            this.ctx.fillStyle = options.fill;
            this.ctx.fill();
        }
        if (borderWidth > 0) {
            this.ctx.stroke();
        }
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawText = function (options, label) {
        var fontWeight = this.getOptionValue(options, 'font-weight');
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(fontWeight) && fontWeight.toLowerCase() === 'regular') {
            fontWeight = 'normal';
        }
        var fontSize = this.getOptionValue(options, 'font-size');
        var fontFamily = this.getOptionValue(options, 'font-family');
        var fontStyle = this.getOptionValue(options, 'font-style').toLowerCase();
        var font = (fontStyle + ' ' + fontWeight + ' ' + fontSize + ' ' + fontFamily);
        var anchor = this.getOptionValue(options, 'text-anchor');
        var opacity = options.opacity !== undefined ? options.opacity : 1;
        if (anchor === 'middle') {
            anchor = 'center';
        }
        this.ctx.save();
        this.ctx.fillStyle = options.fill;
        this.ctx.font = font;
        this.ctx.textAlign = anchor;
        this.ctx.globalAlpha = opacity;
        if (options.baseline) {
            this.ctx.textBaseline = options.baseline;
        }
        var txtlngth = 0;
        this.ctx.translate(options.x + (txtlngth / 2), options.y);
        this.ctx.rotate(options.labelRotation * Math.PI / 180);
        this.ctx.fillText(label, 0, 0);
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawCircle = function (options) {
        var canvasCtx = this.ctx;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(options.cx, options.cy, options.r, 0, 2 * Math.PI);
        this.ctx.fillStyle = options.fill;
        this.ctx.globalAlpha = options.opacity;
        this.ctx.fill();
        this.setAttributes(options);
        this.ctx.stroke();
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawPolyline = function (options) {
        this.ctx.save();
        this.ctx.beginPath();
        var points = options.points.split(' ');
        for (var i = 0; i < points.length - 1; i++) {
            var point = points[i].split(',');
            var x = parseFloat(point[0]);
            var y = parseFloat(point[1]);
            if (i === 0) {
                this.ctx.moveTo(x, y);
            }
            else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.stroke();
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawEllipse = function (options) {
        var canvasCtx = this.ctx;
        var circumference = Math.max(options.rx, options.ry);
        var scaleX = options.rx / circumference;
        var scaleY = options.ry / circumference;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(options.cx, options.cy);
        this.ctx.save();
        this.ctx.scale(scaleX, scaleY);
        this.ctx.arc(0, 0, circumference, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = options.fill;
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.stroke();
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawImage = function (options) {
        this.ctx.save();
        var imageObj = new Image();
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.href)) {
            imageObj.src = options.href;
            this.ctx.drawImage(imageObj, options.x, options.y, options.width, options.height);
        }
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.createLinearGradient = function (colors) {
        var myGradient;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            myGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasObj.height);
        }
        var color = this.setGradientValues(colors, myGradient);
        return color;
    };
    CanvasRenderer.prototype.createRadialGradient = function (colors) {
        var myGradient;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            myGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, this.canvasObj.height);
        }
        var colorName = this.setGradientValues(colors, myGradient);
        return colorName;
    };
    CanvasRenderer.prototype.setGradientValues = function (colors, myGradient) {
        var colorName;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            for (var i = 0; i <= colors.length - 1; i++) {
                var color = colors[i].color;
                var newColorStop = (colors[i].colorStop).slice(0, -1);
                var stopColor = parseInt(newColorStop, 10) / 100;
                myGradient.addColorStop(stopColor, color);
            }
            colorName = myGradient.toString();
        }
        else {
            colorName = colors[0].color.toString();
        }
        this.dataUrl = this.canvasObj.toDataURL();
        return colorName;
    };
    CanvasRenderer.prototype.setElementAttributes = function (options, element) {
        var keys = Object.keys(options);
        var values = Object.keys(options).map(function (key) { return options[key]; });
        for (var i = 0; i < keys.length; i++) {
            element.setAttribute(keys[i], values[i]);
        }
        return element;
    };
    CanvasRenderer.prototype.updateCanvasAttributes = function (options) {
        this.setElementAttributes(options, this.canvasObj);
        var ctx = this.ctx;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.dataUrl)) {
            var img_1 = new Image;
            img_1.onload = function () {
                ctx.drawImage(img_1, 0, 0);
            };
            img_1.src = this.dataUrl;
        }
    };
    return CanvasRenderer;
}());



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_loader__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_property__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notify_property_change__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internationalization__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
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







var Component = (function (_super) {
    __extends(Component, _super);
    function Component(options, selector) {
        var _this = _super.call(this, options, selector) || this;
        _this.needsID = false;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.enableRtl)) {
            _this.setProperties({ 'enableRtl': __WEBPACK_IMPORTED_MODULE_6__internationalization__["b" /* rightToLeft */] }, true);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.locale)) {
            _this.setProperties({ 'locale': __WEBPACK_IMPORTED_MODULE_6__internationalization__["d" /* defaultCulture */] }, true);
        }
        _this.moduleLoader = new __WEBPACK_IMPORTED_MODULE_1__module_loader__["a" /* ModuleLoader */](_this);
        _this.localObserver = new __WEBPACK_IMPORTED_MODULE_3__observer__["a" /* Observer */](_this);
        _this.detectFunction = new Function('args', 'var prop = Object.keys(args); if(prop.length){this[prop[0]] = args[prop[0]];}');
        __WEBPACK_IMPORTED_MODULE_6__internationalization__["a" /* onIntlChange */].on('notifyExternalChange', _this.detectFunction, _this);
        if (_this.enablePersistence) {
            window.addEventListener('unload', _this.setPersistData.bind(_this));
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(selector)) {
            _this.appendTo();
        }
        return _this;
    }
    Component.prototype.requiredModules = function () {
        return [];
    };
    ;
    Component.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        this.localObserver.destroy();
        if (this.refreshing) {
            return;
        }
        this.trigger('destroyed', { cancel: false });
        _super.prototype.destroy.call(this);
        this.moduleLoader.clean();
        __WEBPACK_IMPORTED_MODULE_6__internationalization__["a" /* onIntlChange */].off('notifyExternalChange', this.detectFunction);
        if (this.enablePersistence) {
            this.setPersistData();
        }
    };
    Component.prototype.refresh = function () {
        this.refreshing = true;
        this.destroy();
        this.clearChanges();
        this.localObserver = new __WEBPACK_IMPORTED_MODULE_3__observer__["a" /* Observer */](this);
        this.preRender();
        this.injectModules();
        this.render();
        this.refreshing = false;
    };
    Component.prototype.appendTo = function (selector) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(selector) && typeof (selector) === 'string') {
            this.element = document.querySelector(selector);
        }
        else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(selector)) {
            this.element = selector;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.element)) {
            if (this.needsID && !this.element.id) {
                this.element.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* getUniqueID */])(this.getModuleName());
            }
            this.isProtectedOnChange = false;
            var inst = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('ej2_instances', this.element);
            if (!inst || inst.indexOf(this) === -1) {
                _super.prototype.addInstance.call(this);
            }
            this.preRender();
            if (this.enablePersistence) {
                this.mergePersistData();
            }
            this.injectModules();
            this.render();
            this.trigger('created');
        }
    };
    Component.prototype.dataBind = function () {
        this.injectModules();
        _super.prototype.dataBind.call(this);
    };
    ;
    Component.prototype.on = function (event, handler, context) {
        if (typeof event === 'string') {
            this.localObserver.on(event, handler, context);
        }
        else {
            for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                var arg = event_1[_i];
                this.localObserver.on(arg.event, arg.handler, arg.context);
            }
        }
    };
    Component.prototype.off = function (event, handler) {
        if (typeof event === 'string') {
            this.localObserver.off(event, handler);
        }
        else {
            for (var _i = 0, event_2 = event; _i < event_2.length; _i++) {
                var arg = event_2[_i];
                this.localObserver.off(arg.event, arg.handler);
            }
        }
    };
    Component.prototype.notify = function (property, argument) {
        if (this.isDestroyed !== true) {
            this.localObserver.notify(property, argument);
        }
    };
    Component.prototype.getInjectedModules = function () {
        return this.injectedModules;
    };
    ;
    Component.Inject = function () {
        var moduleList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            moduleList[_i] = arguments[_i];
        }
        if (!this.prototype.injectedModules) {
            this.prototype.injectedModules = [];
        }
        for (var i = 0; i < moduleList.length; i++) {
            if (this.prototype.injectedModules.indexOf(moduleList[i]) === -1) {
                this.prototype.injectedModules.push(moduleList[i]);
            }
        }
    };
    Component.prototype.injectModules = function () {
        if (this.injectedModules && this.injectedModules.length) {
            this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
        }
    };
    Component.prototype.mergePersistData = function () {
        var data = window.localStorage.getItem(this.getModuleName() + this.element.id);
        if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(data) || (data === ''))) {
            this.setProperties(JSON.parse(data), true);
        }
    };
    Component.prototype.setPersistData = function () {
        window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
    };
    Component.prototype.clearTemplate = function (templateName) {
    };
    Component.prototype.addOnPersist = function (options) {
        var _this = this;
        var persistObj = {};
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var key = options_1[_i];
            var objValue = void 0;
            objValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(key, this);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(objValue)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(key, this.getActualProperties(objValue), persistObj);
            }
        }
        return JSON.stringify(persistObj, function (key, value) {
            return _this.getActualProperties(value);
        });
    };
    Component.prototype.getActualProperties = function (obj) {
        if (obj instanceof __WEBPACK_IMPORTED_MODULE_4__child_property__["a" /* ChildProperty */]) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('properties', obj);
        }
        else {
            return obj;
        }
    };
    Component.prototype.ignoreOnPersist = function (options) {
        return JSON.stringify(this.iterateJsonProperties(this.properties, options));
    };
    Component.prototype.iterateJsonProperties = function (obj, ignoreList) {
        var newObj = {};
        var _loop_1 = function (key) {
            if (ignoreList.indexOf(key) === -1) {
                var value = obj[key];
                if (typeof value === 'object' && !(value instanceof Array)) {
                    var newList = ignoreList.filter(function (str) {
                        return new RegExp(key + '.').test(str);
                    }).map(function (str) {
                        return str.replace(key + '.', '');
                    });
                    newObj[key] = this_1.iterateJsonProperties(this_1.getActualProperties(value), newList);
                }
                else {
                    newObj[key] = value;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        return newObj;
    };
    return Component;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__notify_property_change__["a" /* Property */])(false)
], Component.prototype, "enablePersistence", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__notify_property_change__["a" /* Property */])()
], Component.prototype, "enableRtl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__notify_property_change__["a" /* Property */])()
], Component.prototype, "locale", void 0);
Component = __decorate([
    __WEBPACK_IMPORTED_MODULE_5__notify_property_change__["g" /* NotifyPropertyChanges */]
], Component);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Draggable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notify_property_change__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__child_property__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
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








var defaultPosition = { left: 0, top: 0, bottom: 0, right: 0 };
var positionProp = ['offsetLeft', 'offsetTop'];
var axisMapper = ['x', 'y'];
var axisValueMapper = ['left', 'top'];
var Position = (function (_super) {
    __extends(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Position;
}(__WEBPACK_IMPORTED_MODULE_5__child_property__["a" /* ChildProperty */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(0)
], Position.prototype, "left", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(0)
], Position.prototype, "top", void 0);
var Draggable = Draggable_1 = (function (_super) {
    __extends(Draggable, _super);
    function Draggable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.dragLimit = Draggable_1.getDefaultPosition();
        _this.borderWidth = Draggable_1.getDefaultPosition();
        _this.padding = Draggable_1.getDefaultPosition();
        _this.diffX = 0;
        _this.diffY = 0;
        _this.droppables = {};
        _this.bind();
        return _this;
    }
    Draggable.prototype.bind = function () {
        this.toggleEvents();
        if (__WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].isIE) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["b" /* addClass */])([this.element], 'e-block-touch');
        }
        this.droppables[this.scope] = {};
    };
    Draggable.getDefaultPosition = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["i" /* extend */])({}, defaultPosition);
    };
    Draggable.prototype.toggleEvents = function (isUnWire) {
        var ele;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(this.handle)) {
            ele = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["j" /* select */])(this.handle, this.element);
        }
        if (isUnWire) {
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(ele || this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchStartEvent, this.initialize);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(ele || this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchStartEvent, this.initialize, this);
        }
    };
    Draggable.prototype.initialize = function (evt) {
        this.target = evt.currentTarget;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches)) {
            evt.preventDefault();
        }
        if (this.abort) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["l" /* closest */])(evt.target, this.abort))) {
                return;
            }
        }
        this.element.setAttribute('aria-grabbed', 'true');
        var intCoord = this.getCoordinates(evt);
        this.initialPosition = { x: intCoord.pageX, y: intCoord.pageY };
        if (!this.clone) {
            var pos = this.element.getBoundingClientRect();
            this.relativeXPosition = intCoord.pageX - pos.left;
            this.relativeYPosition = intCoord.pageY - pos.top;
        }
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDragStart, this);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDestroy, this);
        this.toggleEvents(true);
        document.body.classList.add('e-prevent-select');
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].trigger(document.documentElement, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchStartEvent, evt);
    };
    Draggable.prototype.intDragStart = function (evt) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var intCordinate = this.getCoordinates(evt);
        var pos;
        var styleProp = getComputedStyle(this.element);
        this.margin = {
            left: parseInt(styleProp.marginLeft, 10),
            top: parseInt(styleProp.marginTop, 10),
            right: parseInt(styleProp.marginRight, 10),
            bottom: parseInt(styleProp.marginBottom, 10),
        };
        var element = this.element;
        if (this.clone && this.dragTarget) {
            var intClosest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["l" /* closest */])(evt.target, this.dragTarget);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(intClosest)) {
                element = intClosest;
            }
        }
        this.offset = this.calculateParentPosition(element);
        this.position = this.getMousePosition(evt);
        var x = this.initialPosition.x - intCordinate.pageX;
        var y = this.initialPosition.y - intCordinate.pageY;
        var distance = Math.sqrt((x * x) + (y * y));
        if (distance >= this.distance) {
            var ele = this.getHelperElement(evt);
            if (!ele || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(ele)) {
                return;
            }
            var dragTargetElement = this.helperElement = ele;
            this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent);
            if (this.dragStart) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStart', { event: evt, element: element, target: curTarget });
            }
            if (this.dragArea) {
                this.setDragArea();
            }
            else {
                this.dragLimit = { left: 0, right: 0, bottom: 0, top: 0 };
                this.borderWidth = { top: 0, left: 0 };
            }
            pos = { left: this.position.left - this.parentClientRect.left, top: this.position.top - this.parentClientRect.top };
            if (this.clone && !this.enableTailMode) {
                this.diffX = this.position.left - this.offset.left;
                this.diffY = this.position.top - this.offset.top;
            }
            var posValue = this.getProcessedPositionValue({ top: (pos.top - this.diffY) + 'px',
                left: (pos.left - this.diffX) + 'px' });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["o" /* setStyleAttribute */])(dragTargetElement, {
                position: 'absolute', top: posValue.top, left: posValue.left
            });
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDragStart);
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDestroy);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["d" /* isVisible */])(dragTargetElement)) {
                __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDrag, this);
                __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDragStop, this);
                this.setGlobalDroppables(false, this.element, dragTargetElement);
            }
            else {
                document.body.classList.remove('e-prevent-select');
            }
        }
    };
    Draggable.prototype.getProcessedPositionValue = function (value) {
        if (this.axis) {
            if (this.axis === 'x') {
                value.top = '0px';
            }
            else if (this.axis === 'y') {
                value.left = '0px';
            }
        }
        if (this.queryPositionInfo) {
            return this.queryPositionInfo(value);
        }
        return value;
    };
    Draggable.prototype.calculateParentPosition = function (ele) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(ele)) {
            return { left: 0, top: 0 };
        }
        var rect = ele.getBoundingClientRect();
        var style = getComputedStyle(ele);
        return {
            left: (rect.left + window.pageXOffset) - parseInt(style.marginLeft, 10),
            top: (rect.top + window.pageYOffset) - parseInt(style.marginTop, 10)
        };
    };
    Draggable.prototype.intDrag = function (evt) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var left;
        var top;
        this.position = this.getMousePosition(evt);
        var docHeight = this.getDocumentWidthHeight('Height');
        if (docHeight < this.position.top) {
            this.position.top = docHeight;
        }
        var docWidth = this.getDocumentWidthHeight('Width');
        if (docWidth < this.position.left) {
            this.position.left = docWidth;
        }
        if (this.drag) {
            var curTarget = this.getProperTargetElement(evt);
            this.trigger('drag', { event: evt, element: this.element, target: curTarget });
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.intOver(evt, eleObj.target);
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            this.hoverObject = eleObj;
        }
        else if (this.hoverObject) {
            this.hoverObject.instance.intOut(evt, eleObj.target);
            this.hoverObject.instance.dragData[this.scope] = null;
            this.hoverObject = null;
        }
        var helperElement = this.droppables[this.scope].helper;
        this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
        var tLeft = this.parentClientRect.left;
        var tTop = this.parentClientRect.top;
        var intCoord = this.getCoordinates(evt);
        var pagex = intCoord.pageX;
        var pagey = intCoord.pageY;
        var dLeft = this.position.left - this.diffX;
        var dTop = this.position.top - this.diffY;
        if (this.dragArea) {
            var styles = getComputedStyle(helperElement);
            if (this.pageX !== pagex || this.skipDistanceCheck) {
                var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft)
                    + parseFloat(styles.marginRight));
                if (this.dragLimit.left > dLeft) {
                    left = this.dragLimit.left;
                }
                else if (this.dragLimit.right < dLeft + helperWidth) {
                    left = this.dragLimit.right - helperWidth;
                }
                else {
                    left = dLeft;
                }
            }
            if (this.pageY !== pagey || this.skipDistanceCheck) {
                var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop)
                    + parseFloat(styles.marginBottom));
                if (this.dragLimit.top > dTop) {
                    top = this.dragLimit.top;
                }
                else if (this.dragLimit.bottom < dTop + helperHeight) {
                    top = this.dragLimit.bottom - helperHeight;
                }
                else {
                    top = dTop;
                }
            }
        }
        else {
            left = dLeft;
            top = dTop;
        }
        var iTop = tTop + this.borderWidth.top;
        var iLeft = tLeft + this.borderWidth.left;
        var dragValue = this.getProcessedPositionValue({ top: (top - iTop) + 'px', left: (left - iLeft) + 'px' });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["o" /* setStyleAttribute */])(helperElement, { left: dragValue.left, top: dragValue.top });
        this.position.left = left;
        this.position.top = top;
        this.pageX = pagex;
        this.pageY = pagey;
    };
    Draggable.prototype.getDocumentWidthHeight = function (str) {
        var docBody = document.body;
        var docEle = document.documentElement;
        var returnValue = Math.max(docBody['scroll' + str], docEle['scroll' + str], docBody['offset' + str], docEle['offset' + str], docEle['client' + str]);
        return returnValue;
    };
    Draggable.prototype.intDragStop = function (evt) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var type = ['touchend', 'pointerup', 'mouseup'];
        if (type.indexOf(evt.type) !== -1) {
            if (this.dragStop) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStop', { event: evt, element: this.element, target: curTarget, helper: this.helperElement });
            }
            this.intDestroy(evt);
        }
        else {
            this.element.setAttribute('aria-grabbed', 'false');
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.dragStopCalled = true;
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            eleObj.instance.intDrop(evt, eleObj.target);
        }
        this.setGlobalDroppables(true);
        document.body.classList.remove('e-prevent-select');
    };
    Draggable.prototype.intDestroy = function (evt) {
        this.toggleEvents();
        document.body.classList.remove('e-prevent-select');
        this.element.setAttribute('aria-grabbed', 'false');
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDragStart);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDragStop);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDestroy);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDrag);
    };
    Draggable.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Draggable.prototype.getModuleName = function () {
        return 'draggable';
    };
    Draggable.prototype.setDragArea = function () {
        var eleWidthBound;
        var eleHeightBound;
        var top = 0;
        var left = 0;
        var ele;
        var type = typeof this.dragArea;
        if (type === 'string') {
            ele = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["j" /* select */])(this.dragArea);
        }
        else {
            ele = this.dragArea;
        }
        if (ele) {
            var elementArea = ele.getBoundingClientRect();
            eleWidthBound = elementArea.width ? elementArea.width : elementArea.right - elementArea.left;
            eleHeightBound = elementArea.height ? elementArea.height : elementArea.bottom - elementArea.top;
            var keys = ['Top', 'Left', 'Bottom', 'Right'];
            var styles = getComputedStyle(ele);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var tborder = styles['border' + key + 'Width'];
                var tpadding = styles['padding' + key];
                var lowerKey = key.toLowerCase();
                this.borderWidth[lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder);
                this.padding[lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
            }
            top = elementArea.top;
            left = elementArea.left;
            this.dragLimit.left = left + this.borderWidth.left + this.padding.left;
            this.dragLimit.top = top + this.borderWidth.top + this.padding.top;
            this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right);
            this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
        }
    };
    Draggable.prototype.getProperTargetElement = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var ele;
        var prevStyle = this.helperElement.style.display || '';
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["p" /* compareElementParent */])(evt.target, this.helperElement) || evt.type.indexOf('touch') !== -1) {
            this.helperElement.style.display = 'none';
            ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY);
            this.helperElement.style.display = prevStyle;
        }
        else {
            ele = evt.target;
        }
        return ele;
    };
    Draggable.prototype.getMousePosition = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var pageX = this.clone ? intCoord.pageX : intCoord.pageX - this.relativeXPosition;
        var pageY = this.clone ? intCoord.pageY : intCoord.pageY - this.relativeYPosition;
        return {
            left: pageX - (this.margin.left + this.cursorAt.left),
            top: pageY - (this.margin.top + this.cursorAt.top)
        };
    };
    Draggable.prototype.getCoordinates = function (evt) {
        if (evt.type.indexOf('touch') > -1) {
            return evt.changedTouches[0];
        }
        return evt;
    };
    Draggable.prototype.getHelperElement = function (evt) {
        var element;
        if (this.clone) {
            if (this.helper) {
                element = this.helper({ sender: evt, element: this.target });
            }
            else {
                element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["a" /* createElement */])('div', { className: 'e-drag-helper e-block-touch', innerHTML: 'Draggable' });
                document.body.appendChild(element);
            }
        }
        else {
            element = this.element;
        }
        return element;
    };
    Draggable.prototype.setGlobalDroppables = function (reset, drag, helper) {
        this.droppables[this.scope] = reset ? null : {
            draggable: drag,
            helper: helper,
            draggedElement: this.element
        };
    };
    Draggable.prototype.checkTargetElement = function (evt) {
        var target = this.getProperTargetElement(evt);
        var dropIns = this.getDropInstance(target);
        if (!dropIns && target && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(target.parentNode)) {
            var parent_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["l" /* closest */])(target.parentNode, '.e-droppable') || target.parentElement;
            if (parent_1) {
                dropIns = this.getDropInstance(parent_1);
            }
        }
        return { target: target, instance: dropIns };
    };
    Draggable.prototype.getDropInstance = function (ele) {
        var name = 'getModuleName';
        var drop;
        var eleInst = ele && ele.ej2_instances;
        if (eleInst) {
            for (var _i = 0, eleInst_1 = eleInst; _i < eleInst_1.length; _i++) {
                var inst = eleInst_1[_i];
                if (inst[name]() === 'droppable') {
                    drop = inst;
                    break;
                }
            }
        }
        return drop;
    };
    Draggable.prototype.destroy = function () {
        this.toggleEvents(true);
        _super.prototype.destroy.call(this);
    };
    return Draggable;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["b" /* Complex */])({}, Position)
], Draggable.prototype, "cursorAt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(true)
], Draggable.prototype, "clone", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "dragArea", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Draggable.prototype, "drag", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Draggable.prototype, "dragStart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Draggable.prototype, "dragStop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(1)
], Draggable.prototype, "distance", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "handle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "abort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "helper", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])('default')
], Draggable.prototype, "scope", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])('')
], Draggable.prototype, "dragTarget", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "axis", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "queryPositionInfo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(false)
], Draggable.prototype, "enableTailMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(false)
], Draggable.prototype, "skipDistanceCheck", void 0);
Draggable = Draggable_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_3__notify_property_change__["g" /* NotifyPropertyChanges */]
], Draggable);

var Draggable_1;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Droppable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notify_property_change__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_handler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
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






var Droppable = (function (_super) {
    __extends(Droppable, _super);
    function Droppable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.mouseOver = false;
        _this.dragData = {};
        _this.dragStopCalled = false;
        _this.bind();
        return _this;
    }
    Droppable.prototype.bind = function () {
        this.wireEvents();
    };
    Droppable.prototype.wireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDrop, this);
    };
    Droppable.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Droppable.prototype.getModuleName = function () {
        return 'droppable';
    };
    Droppable.prototype.intOver = function (event, element) {
        if (!this.mouseOver) {
            this.trigger('over', { event: event, target: element });
            this.mouseOver = true;
        }
    };
    Droppable.prototype.intOut = function (event, element) {
        if (this.mouseOver) {
            this.trigger('out', { evt: event, target: element });
            this.mouseOver = false;
        }
    };
    Droppable.prototype.intDrop = function (evt, element) {
        if (!this.dragStopCalled) {
            return;
        }
        else {
            this.dragStopCalled = false;
        }
        var accept = true;
        var drag = this.dragData[this.scope];
        var isDrag = drag ? (drag.helper && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["d" /* isVisible */])(drag.helper)) : false;
        var area;
        if (isDrag) {
            area = this.isDropArea(evt, drag.helper, element);
            if (this.accept) {
                accept = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["q" /* matches */])(drag.helper, this.accept);
            }
        }
        if (isDrag && this.drop && area.canDrop && accept) {
            this.trigger('drop', { event: evt, target: area.target, droppedElement: drag.helper, dragData: drag });
        }
    };
    Droppable.prototype.isDropArea = function (evt, helper, element) {
        var area = { canDrop: true, target: element || evt.target };
        var isTouch = evt.type === 'touchend';
        if (isTouch || area.target === helper) {
            helper.style.display = 'none';
            var coord = isTouch ? (evt.changedTouches[0]) : evt;
            var ele = document.elementFromPoint(coord.clientX, coord.clientY);
            area.canDrop = false;
            area.canDrop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["p" /* compareElementParent */])(ele, this.element);
            if (area.canDrop) {
                area.target = ele;
            }
            helper.style.display = '';
        }
        return area;
    };
    Droppable.prototype.destroy = function () {
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDrop);
        _super.prototype.destroy.call(this);
    };
    return Droppable;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Droppable.prototype, "accept", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])('default')
], Droppable.prototype, "scope", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Droppable.prototype, "drop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Droppable.prototype, "over", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Droppable.prototype, "out", void 0);
Droppable = __decorate([
    __WEBPACK_IMPORTED_MODULE_3__notify_property_change__["g" /* NotifyPropertyChanges */]
], Droppable);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intl_base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(0);



var number = 'numbers';
var defNoSystem = 'defaultNumberingSystem';
var noSystem = 'numberingSystem';
var standalone = 'stand-alone';
var curWeekDay = 'curWeekDay';
var latnRegex = /^[0-9]*$/;
var abbreviateRegex = /\/MMMMM|MMMM|MMM|a|LLL|EEEEE|EEEE|E|ccc/;
var timeSetter = {
    minute: 'setMinutes',
    hour: 'setHours',
    second: 'setSeconds',
    day: 'setDate',
    month: 'setMonth'
};
var month = 'months';
var datePartMatcher = {
    'M': 'month',
    'd': 'day',
    'E': 'weekday',
    'c': 'weekday',
    'y': 'year',
    'm': 'minute',
    'h': 'hour',
    'H': 'hour',
    's': 'second',
    'L': 'month',
    'a': 'designator',
    'z': 'timeZone',
    'Z': 'timeZone',
    'G': 'era'
};
var DateParser = (function () {
    function DateParser() {
    }
    DateParser.dateParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = __WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].getDependables(cldr, culture);
        var numOptions = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getCurrentNumericOptions(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr));
        var parseOptions = {};
        var resPattern = option.format || __WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].getResultantPattern(option.skeleton, dependable.dateObject, option.type);
        var regexString = '';
        var hourOnly;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(resPattern)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["q" /* throwError */])('Format options or type given must be invalid');
        }
        else {
            parseOptions = { pattern: resPattern, evalposition: {} };
            var patternMatch = resPattern.match(__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].dateParseRegex) || [];
            var length_1 = patternMatch.length;
            var nRegx = numOptions.numericRegex;
            for (var i = 0; i < length_1; i++) {
                var str = patternMatch[i];
                var len = str.length;
                var char = (str[0] === 'K') ? 'h' : str[0];
                var isNumber = void 0;
                var canUpdate = void 0;
                var charKey = datePartMatcher[char];
                var optional = (len === 2) ? '' : '?';
                switch (char) {
                    case 'E':
                    case 'c':
                        var weekObject = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(dependable.dateObject[__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].days][standalone][__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].monthIndex[len]]);
                        regexString += '(' + Object.keys(weekObject).join('|') + ')';
                        break;
                    case 'M':
                    case 'L':
                    case 'd':
                    case 'm':
                    case 's':
                    case 'h':
                    case 'H':
                        canUpdate = true;
                        if ((char === 'M' || char === 'L') && len > 2) {
                            parseOptions[charKey] = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(dependable.dateObject[month][standalone][__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].monthIndex[len]]);
                            regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        }
                        else {
                            isNumber = true;
                            regexString += '(' + nRegx + nRegx + optional + ')';
                        }
                        if (char === 'h') {
                            parseOptions.hour12 = true;
                        }
                        break;
                    case 'y':
                        canUpdate = isNumber = true;
                        if (len === 2) {
                            regexString += '(' + nRegx + nRegx + ')';
                        }
                        else {
                            regexString += '(' + nRegx + '+)';
                        }
                        break;
                    case 'a':
                        canUpdate = true;
                        parseOptions[charKey] = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dayPeriods.format.wide', dependable.dateObject));
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        break;
                    case 'G':
                        canUpdate = true;
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        parseOptions[charKey] = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('eras.' + eText, dependable.dateObject));
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + '?)';
                        break;
                    case 'z':
                        var tval = new Date().getTimezoneOffset();
                        canUpdate = (tval !== 0);
                        parseOptions[charKey] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dates.timeZoneNames', dependable.parserObject);
                        var tzone = parseOptions[charKey];
                        hourOnly = (len < 4);
                        var hpattern = hourOnly ? '+H;-H' : tzone.hourFormat;
                        regexString += '(' + this.parseTimeZoneRegx(hpattern, tzone, nRegx) + ')?';
                        break;
                    case '\'':
                        var iString = str.replace(/\'/g, '');
                        regexString += '(' + iString + ')?';
                        break;
                    default:
                        regexString += '(.)?';
                        break;
                }
                if (canUpdate) {
                    parseOptions.evalposition[charKey] = { isNumber: isNumber, pos: i + 1, hourOnly: hourOnly };
                }
                if (i === length_1 - 1 && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(regexString)) {
                    parseOptions.parserRegex = new RegExp('^' + regexString + '$');
                }
            }
        }
        return function (value) {
            var parsedDateParts = _this.internalDateParse(value, parseOptions, numOptions);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(parsedDateParts) || !Object.keys(parsedDateParts).length) {
                return null;
            }
            return _this.getDateObject(parsedDateParts);
        };
    };
    DateParser.getDateObject = function (options, value) {
        var res = value || new Date();
        var tKeys = ['hour', 'minute', 'second', 'month', 'day'];
        var y = options.year;
        var desig = options.designator;
        var tzone = options.timeZone;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(y)) {
            var len = (y + '').length;
            if (len <= 2) {
                var century = Math.floor(res.getFullYear() / 100) * 100;
                y += century;
            }
            res.setFullYear(y);
        }
        for (var _i = 0, tKeys_1 = tKeys; _i < tKeys_1.length; _i++) {
            var key = tKeys_1[_i];
            var tValue = options[key];
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(tValue)) {
                if (key === 'month') {
                    tValue -= 1;
                    if (tValue < 0 || tValue > 11) {
                        return new Date('invalid');
                    }
                    var pDate = res.getDate();
                    res.setDate(1);
                    res[timeSetter[key]](tValue);
                    var lDate = new Date(res.getFullYear(), tValue + 1, 0).getDate();
                    res.setDate(pDate < lDate ? pDate : lDate);
                }
                else {
                    if (key === 'day') {
                        var lastDay = new Date(res.getFullYear(), res.getMonth() + 1, 0).getDate();
                        if ((tValue < 1 || tValue > lastDay)) {
                            return null;
                        }
                    }
                    res[timeSetter[key]](tValue);
                }
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(desig)) {
            var hour = res.getHours();
            if (desig === 'pm') {
                res.setHours(hour + (hour === 12 ? 0 : 12));
            }
            else if (hour === 12) {
                res.setHours(0);
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(tzone)) {
            var tzValue = tzone - res.getTimezoneOffset();
            if (tzValue !== 0) {
                res.setMinutes(res.getMinutes() + tzValue);
            }
        }
        return res;
    };
    DateParser.internalDateParse = function (value, parseOptions, num) {
        var matches = value.match(parseOptions.parserRegex);
        var retOptions = { 'hour': 0, 'minute': 0, 'second': 0 };
        var nRegx = num.numericRegex;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(matches)) {
            return null;
        }
        else {
            var props = Object.keys(parseOptions.evalposition);
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                var curObject = parseOptions.evalposition[prop];
                var matchString = matches[curObject.pos];
                if (curObject.isNumber) {
                    retOptions[prop] = this.internalNumberParser(matchString, num);
                }
                else {
                    if (prop === 'timeZone' && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(matchString)) {
                        var pos = curObject.pos;
                        var val = void 0;
                        var tmatch = matches[pos + 1];
                        var flag = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(tmatch);
                        if (curObject.hourOnly) {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 4], num) * 60;
                        }
                        else {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 7], num) * 60;
                            val += this.getZoneValue(flag, matches[pos + 4], matches[pos + 10], num);
                        }
                        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(val)) {
                            retOptions[prop] = val;
                        }
                    }
                    else {
                        retOptions[prop] = parseOptions[prop][matchString];
                    }
                }
            }
            if (parseOptions.hour12) {
                retOptions.hour12 = true;
            }
        }
        return retOptions;
    };
    DateParser.internalNumberParser = function (value, option) {
        value = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].convertValueParts(value, option.numberParseRegex, option.numericPair);
        if (latnRegex.test(value)) {
            return +value;
        }
        return null;
    };
    DateParser.parseTimeZoneRegx = function (hourFormat, tZone, nRegex) {
        var pattern = tZone.gmtFormat;
        var ret;
        var result;
        var cRegex = '(' + nRegex + ')' + '(' + nRegex + ')';
        var splitStr;
        ret = hourFormat.replace('+', '\\+');
        if (hourFormat.indexOf('HH') !== -1) {
            ret = ret.replace(/HH|mm/g, '(' + cRegex + ')');
        }
        else {
            ret = ret.replace(/H|m/g, '(' + cRegex + '?)');
        }
        splitStr = (ret.split(';').map(function (str) {
            return pattern.replace('{0}', str);
        }));
        ret = splitStr.join('|') + '|' + tZone.gmtZeroFormat;
        return ret;
    };
    DateParser.getZoneValue = function (flag, val1, val2, num) {
        var value = this.internalNumberParser(flag ? val1 : val2, num);
        if (flag) {
            return -value;
        }
        return value;
    };
    return DateParser;
}());



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intl_base__ = __webpack_require__(6);



var formatRegex = /(^[ncpa]{1})([0-1]?[0-9]|20)?$/i;
var parseRegex = /^([^0-9]*)(([0-9,]*[0-9]+)(\.[0-9]+)?)([Ee][+-]?[0-9]+)?([^0-9]*)$/;
var groupRegex = /,/g;
var latnDecimalRegex = /^[0-9]*(\.[0-9]+)?$/;
var keys = ['minusSign', 'infinity'];
var NumberParser = (function () {
    function NumberParser() {
    }
    NumberParser.numberParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getDependables(cldr, culture, true);
        var parseOptions = { custom: true };
        var numOptions;
        if ((__WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].formatRegex.test(option.format)) || !(option.format)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(parseOptions, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getProperNumericSkeleton(option.format || 'N'));
            parseOptions.custom = false;
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(parseOptions, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].customFormat(option.format, null, null));
        }
        numOptions = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getCurrentNumericOptions(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr), true);
        parseOptions.symbolRegex = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getSymbolRegex(Object.keys(numOptions.symbolMatch));
        parseOptions.infinity = numOptions.symbolNumberSystem[keys[1]];
        var symbolpattern = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getSymbolPattern(parseOptions.type, numOptions.numberSystem, dependable.numericObject, parseOptions.isAccount);
        if (symbolpattern) {
            symbolpattern = symbolpattern.replace(/\u00A4/g, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].defaultCurrency);
            var split = symbolpattern.split(';');
            parseOptions.nData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[1] || '-' + split[0], true, '');
            parseOptions.pData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[0], true, '');
        }
        return function (value) {
            return _this.getParsedNumber(value, parseOptions, numOptions);
        };
    };
    NumberParser.getParsedNumber = function (value, options, numOptions) {
        var isNegative;
        var isPercent;
        var tempValue;
        var lead;
        var end;
        var ret;
        if (value.indexOf(options.infinity) !== -1) {
            return Infinity;
        }
        else {
            value = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].convertValueParts(value, options.symbolRegex, numOptions.symbolMatch);
            value = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].convertValueParts(value, numOptions.numberParseRegex, numOptions.numericPair);
            if (value.indexOf('.') === 0) {
                value = '0' + value;
            }
            var matches = value.match(parseRegex);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(matches)) {
                return NaN;
            }
            lead = matches[1];
            tempValue = matches[2];
            var exponent = matches[5];
            end = matches[6];
            isNegative = options.custom ? ((lead === options.nData.nlead) && (end === options.nData.nend)) :
                ((lead.indexOf(options.nData.nlead) !== -1) && (end.indexOf(options.nData.nend) !== -1));
            isPercent = isNegative ?
                options.nData.isPercent :
                options.pData.isPercent;
            tempValue = tempValue.replace(groupRegex, '');
            if (exponent) {
                tempValue += exponent;
            }
            ret = +tempValue;
            if (options.type === 'percent' || isPercent) {
                ret = ret / 100;
            }
            if (options.custom || options.fractionDigits) {
                ret = parseFloat(ret.toFixed(options.custom ?
                    (isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits) : options.fractionDigits));
            }
            if (isNegative) {
                ret *= -1;
            }
            return ret;
        }
    };
    return NumberParser;
}());



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notify_property_change__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
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


var keyCode = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'control': 17,
    'alt': 18,
    'pause': 19,
    'capslock': 20,
    'space': 32,
    'escape': 27,
    'pageup': 33,
    'pagedown': 34,
    'end': 35,
    'home': 36,
    'leftarrow': 37,
    'uparrow': 38,
    'rightarrow': 39,
    'downarrow': 40,
    'insert': 45,
    'delete': 46,
    'f1': 112,
    'f2': 113,
    'f3': 114,
    'f4': 115,
    'f5': 116,
    'f6': 117,
    'f7': 118,
    'f8': 119,
    'f9': 120,
    'f10': 121,
    'f11': 122,
    'f12': 123,
    'semicolon': 186,
    'plus': 187,
    'comma': 188,
    'minus': 189,
    'dot': 190,
    'forwardslash': 191,
    'graveaccent': 192,
    'openbracket': 219,
    'backslash': 220,
    'closebracket': 221,
    'singlequote': 222
};
var KeyboardEvents = KeyboardEvents_1 = (function (_super) {
    __extends(KeyboardEvents, _super);
    function KeyboardEvents(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.keyPressHandler = function (e) {
            var isAltKey = e.altKey;
            var isCtrlKey = e.ctrlKey;
            var isShiftKey = e.shiftKey;
            var curkeyCode = e.which;
            var keys = Object.keys(_this.keyConfigs);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var configCollection = _this.keyConfigs[key].split(',');
                for (var _a = 0, configCollection_1 = configCollection; _a < configCollection_1.length; _a++) {
                    var rconfig = configCollection_1[_a];
                    var rKeyObj = KeyboardEvents_1.getKeyConfigData(rconfig.trim());
                    if (isAltKey === rKeyObj.altKey && isCtrlKey === rKeyObj.ctrlKey &&
                        isShiftKey === rKeyObj.shiftKey && curkeyCode === rKeyObj.keyCode) {
                        e.action = key;
                        if (_this.keyAction) {
                            _this.keyAction(e);
                        }
                    }
                }
            }
        };
        _this.bind();
        return _this;
    }
    KeyboardEvents.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    KeyboardEvents.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    ;
    KeyboardEvents.prototype.bind = function () {
        this.wireEvents();
    };
    KeyboardEvents.prototype.getModuleName = function () {
        return 'keyboard';
    };
    KeyboardEvents.prototype.wireEvents = function () {
        this.element.addEventListener(this.eventName, this.keyPressHandler);
    };
    KeyboardEvents.prototype.unwireEvents = function () {
        this.element.removeEventListener(this.eventName, this.keyPressHandler);
    };
    KeyboardEvents.getKeyConfigData = function (config) {
        if (config in this.configCache) {
            return this.configCache[config];
        }
        var keys = config.toLowerCase().split('+');
        var keyData = {
            altKey: (keys.indexOf('alt') !== -1 ? true : false),
            ctrlKey: (keys.indexOf('ctrl') !== -1 ? true : false),
            shiftKey: (keys.indexOf('shift') !== -1 ? true : false),
            keyCode: null
        };
        if (keys[keys.length - 1].length > 1 && !!Number(keys[keys.length - 1])) {
            keyData.keyCode = Number(keys[keys.length - 1]);
        }
        else {
            keyData.keyCode = KeyboardEvents_1.getKeyCode(keys[keys.length - 1]);
        }
        KeyboardEvents_1.configCache[config] = keyData;
        return keyData;
    };
    KeyboardEvents.getKeyCode = function (keyVal) {
        return keyCode[keyVal] || keyVal.toUpperCase().charCodeAt(0);
    };
    return KeyboardEvents;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));
KeyboardEvents.configCache = {};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__notify_property_change__["a" /* Property */])({})
], KeyboardEvents.prototype, "keyConfigs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__notify_property_change__["a" /* Property */])('keyup')
], KeyboardEvents.prototype, "eventName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__notify_property_change__["f" /* Event */])()
], KeyboardEvents.prototype, "keyAction", void 0);
KeyboardEvents = KeyboardEvents_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__notify_property_change__["g" /* NotifyPropertyChanges */]
], KeyboardEvents);

var KeyboardEvents_1;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return L10n; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internationalization__ = __webpack_require__(10);


var L10n = (function () {
    function L10n(controlName, localeStrings, locale) {
        this.controlName = controlName;
        this.localeStrings = localeStrings;
        this.setLocale(locale || __WEBPACK_IMPORTED_MODULE_1__internationalization__["d" /* defaultCulture */]);
    }
    L10n.prototype.setLocale = function (locale) {
        var intLocale = this.intGetControlConstant(L10n.locale, locale);
        if (!intLocale) {
            if (locale !== 'en-US') {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])('The specified locale or controlname not found in the locale object');
            }
            else {
                this.currentLocale = this.localeStrings;
            }
        }
        else {
            this.currentLocale = intLocale;
        }
    };
    L10n.load = function (localeObject) {
        this.locale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(this.locale, localeObject, {}, true);
    };
    L10n.prototype.getConstant = function (prop) {
        return this.currentLocale[prop] || this.localeStrings[prop] || '';
    };
    L10n.prototype.intGetControlConstant = function (curObject, locale) {
        if (curObject[locale]) {
            return curObject[locale][this.controlName];
        }
        return null;
    };
    return L10n;
}());

L10n.locale = {};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

var SvgRenderer = (function () {
    function SvgRenderer(rootID) {
        this.svgLink = 'http://www.w3.org/2000/svg';
        this.rootId = rootID;
    }
    SvgRenderer.prototype.getOptionValue = function (options, key) {
        return options[key];
    };
    SvgRenderer.prototype.createSvg = function (options) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.id)) {
            options.id = this.rootId + '_svg';
        }
        this.svgObj = document.getElementById(options.id);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(document.getElementById(options.id))) {
            this.svgObj = document.createElementNS(this.svgLink, 'svg');
        }
        this.svgObj = this.setElementAttributes(options, this.svgObj);
        this.setSVGSize(options.width, options.height);
        return this.svgObj;
    };
    SvgRenderer.prototype.setSVGSize = function (width, height) {
        var element = document.getElementById(this.rootId);
        var size = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(element) ? element.getBoundingClientRect() : null;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.width) || this.width <= 0) {
            this.svgObj.setAttribute('width', width ? width.toString() : size.width.toString());
        }
        else {
            this.svgObj.setAttribute('width', this.width.toString());
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.height) || this.height <= 0) {
            this.svgObj.setAttribute('height', height ? height.toString() : '450');
        }
        else {
            this.svgObj.setAttribute('height', this.height.toString());
        }
    };
    SvgRenderer.prototype.drawPath = function (options) {
        var path = document.getElementById(options.id);
        if (path === null) {
            path = document.createElementNS(this.svgLink, 'path');
        }
        path = this.setElementAttributes(options, path);
        return path;
    };
    SvgRenderer.prototype.drawLine = function (options) {
        var line = document.getElementById(options.id);
        if (line === null) {
            line = document.createElementNS(this.svgLink, 'line');
        }
        line = this.setElementAttributes(options, line);
        return line;
    };
    SvgRenderer.prototype.drawRectangle = function (options) {
        var rectangle = document.getElementById(options.id);
        if (rectangle === null) {
            rectangle = document.createElementNS(this.svgLink, 'rect');
        }
        rectangle = this.setElementAttributes(options, rectangle);
        return rectangle;
    };
    SvgRenderer.prototype.drawCircle = function (options) {
        var circle = document.getElementById(options.id);
        if (circle === null) {
            circle = document.createElementNS(this.svgLink, 'circle');
        }
        circle = this.setElementAttributes(options, circle);
        return circle;
    };
    SvgRenderer.prototype.drawPolyline = function (options) {
        var polyline = document.getElementById(options.id);
        if (polyline === null) {
            polyline = document.createElementNS(this.svgLink, 'polyline');
        }
        polyline = this.setElementAttributes(options, polyline);
        return polyline;
    };
    SvgRenderer.prototype.drawEllipse = function (options) {
        var ellipse = document.getElementById(options.id);
        if (ellipse === null) {
            ellipse = document.createElementNS(this.svgLink, 'ellipse');
        }
        ellipse = this.setElementAttributes(options, ellipse);
        return ellipse;
    };
    SvgRenderer.prototype.drawPolygon = function (options) {
        var polygon = document.getElementById(options.id);
        if (polygon === null) {
            polygon = document.createElementNS(this.svgLink, 'polygon');
        }
        polygon = this.setElementAttributes(options, polygon);
        return polygon;
    };
    SvgRenderer.prototype.drawImage = function (options) {
        var img = document.createElementNS(this.svgLink, 'image');
        img.setAttributeNS(null, 'height', options.height.toString());
        img.setAttributeNS(null, 'width', options.width.toString());
        img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', options.href);
        img.setAttributeNS(null, 'x', options.x.toString());
        img.setAttributeNS(null, 'y', options.y.toString());
        img.setAttributeNS(null, 'id', options.id);
        img.setAttributeNS(null, 'visibility', options.visibility);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.getOptionValue(options, 'clip-path'))) {
            img.setAttributeNS(null, 'clip-path', this.getOptionValue(options, 'clip-path'));
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.preserveAspectRatio)) {
            img.setAttributeNS(null, 'preserveAspectRatio', options.preserveAspectRatio);
        }
        return img;
    };
    SvgRenderer.prototype.createText = function (options, label) {
        var text = document.createElementNS(this.svgLink, 'text');
        text = this.setElementAttributes(options, text);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(label)) {
            text.textContent = label;
        }
        return text;
    };
    SvgRenderer.prototype.createTSpan = function (options, label) {
        var tSpan = document.createElementNS(this.svgLink, 'tspan');
        tSpan = this.setElementAttributes(options, tSpan);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(label)) {
            tSpan.textContent = label;
        }
        return tSpan;
    };
    SvgRenderer.prototype.createTitle = function (text) {
        var title = document.createElementNS(this.svgLink, 'title');
        title.textContent = text;
        return title;
    };
    SvgRenderer.prototype.createDefs = function () {
        var defs = document.createElementNS(this.svgLink, 'defs');
        return defs;
    };
    SvgRenderer.prototype.createClipPath = function (options) {
        var clipPath = document.createElementNS(this.svgLink, 'clipPath');
        clipPath = this.setElementAttributes(options, clipPath);
        return clipPath;
    };
    SvgRenderer.prototype.createForeignObject = function (options) {
        var foreignObject = document.createElementNS(this.svgLink, 'foreignObject');
        foreignObject = this.setElementAttributes(options, foreignObject);
        return foreignObject;
    };
    SvgRenderer.prototype.createGroup = function (options) {
        var group = document.createElementNS(this.svgLink, 'g');
        group = this.setElementAttributes(options, group);
        return group;
    };
    SvgRenderer.prototype.createPattern = function (options, element) {
        var pattern = document.createElementNS(this.svgLink, element);
        pattern = this.setElementAttributes(options, pattern);
        return pattern;
    };
    SvgRenderer.prototype.createRadialGradient = function (colors, name, options) {
        var colorName;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            var newOptions = {
                'id': this.rootId + '_' + name + 'radialGradient',
                'cx': options.cx + '%',
                'cy': options.cy + '%',
                'r': options.r + '%',
                'fx': options.fx + '%',
                'fy': options.fy + '%'
            };
            this.drawGradient('radialGradient', newOptions, colors);
            colorName = 'url(#' + this.rootId + '_' + name + 'radialGradient)';
        }
        else {
            colorName = colors[0].color.toString();
        }
        return colorName;
    };
    SvgRenderer.prototype.createLinearGradient = function (colors, name, options) {
        var colorName;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            var newOptions = {
                'id': this.rootId + '_' + name + 'linearGradient',
                'x1': options.x1 + '%',
                'y1': options.y1 + '%',
                'x2': options.x2 + '%',
                'y2': options.y2 + '%'
            };
            this.drawGradient('linearGradient', newOptions, colors);
            colorName = 'url(#' + this.rootId + '_' + name + 'linearGradient)';
        }
        else {
            colorName = colors[0].color.toString();
        }
        return colorName;
    };
    SvgRenderer.prototype.drawGradient = function (gradientType, options, colors) {
        var defs = this.createDefs();
        var gradient = document.createElementNS(this.svgLink, gradientType);
        gradient = this.setElementAttributes(options, gradient);
        for (var i = 0; i < colors.length; i++) {
            var stop_1 = document.createElementNS(this.svgLink, 'stop');
            stop_1.setAttribute('offset', colors[i].colorStop);
            stop_1.setAttribute('stop-color', colors[i].color);
            stop_1.setAttribute('stop-opacity', '1');
            gradient.appendChild(stop_1);
        }
        defs.appendChild(gradient);
        return defs;
    };
    SvgRenderer.prototype.drawClipPath = function (options) {
        var defs = this.createDefs();
        var clipPath = this.createClipPath({ 'id': options.id });
        var rect = this.drawRectangle(options);
        clipPath.appendChild(rect);
        defs.appendChild(clipPath);
        return defs;
    };
    SvgRenderer.prototype.drawCircularClipPath = function (options) {
        var defs = this.createDefs();
        var clipPath = this.createClipPath({ 'id': options.id });
        var circle = this.drawCircle(options);
        clipPath.appendChild(circle);
        defs.appendChild(clipPath);
        return defs;
    };
    SvgRenderer.prototype.setElementAttributes = function (options, element) {
        var keys = Object.keys(options);
        for (var i = 0; i < keys.length; i++) {
            element.setAttribute(keys[i], options[keys[i]]);
        }
        return element;
    };
    return SvgRenderer;
}());



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
/* harmony export (immutable) */ __webpack_exports__["b"] = setTemplateEngine;
/* harmony export (immutable) */ __webpack_exports__["c"] = getTemplateEngine;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(2);


var HAS_ROW = /^[\n\r.]+\<tr|^\<tr/;
function compile(templateString, helper) {
    var compiler = engineObj.compile(templateString, helper);
    return function (data) {
        var result = compiler(data);
        if (typeof result === 'string') {
            var ele = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["a" /* createElement */])((HAS_ROW.test(result) ? 'table' : 'div'), { innerHTML: result });
            return ele.childNodes;
        }
        else {
            return result;
        }
    };
}
function setTemplateEngine(classObj) {
    engineObj.compile = classObj.compile;
}
function getTemplateEngine() {
    return engineObj.compile;
}
var Engine = (function () {
    function Engine() {
    }
    Engine.prototype.compile = function (templateString, helper) {
        if (helper === void 0) { helper = {}; }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__template__["a" /* compile */])(templateString, helper);
    };
    return Engine;
}());
var engineObj = { compile: new Engine().compile };


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export expression */
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
var LINES = new RegExp('\\n|\\r|\\s\\s+', 'g');
var QUOTES = new RegExp(/'|"/g);
var IF_STMT = new RegExp('if ?\\(');
var ELSE_STMT = new RegExp('else');
var FOR_STMT = new RegExp('for ?\\(');
var IF_OR_FOR = new RegExp('(\/if|\/for)');
var CALL_FUNCTION = new RegExp('\\((.*)\\)', '');
var NOT_NUMBER = new RegExp('^[0-9]+$', 'g');
var WORD = new RegExp('[\\w"\'.\\s+]+', 'g');
var DBL_QUOTED_STR = new RegExp('"(.*?)"', 'g');
var exp = new RegExp('\\${([^}]*)}', 'g');
function expression(value) {
    if (value) {
        exp = value;
    }
    return exp;
}
function compile(template, helper) {
    var argName = 'data';
    var evalExpResult = evalExp(template, argName, helper);
    var fnCode = "var str=\"" + evalExpResult + "\"; return str;";
    var fn = new Function(argName, fnCode);
    return fn.bind(helper);
}
function evalExp(str, nameSpace, helper) {
    var localKeys = [];
    return str.replace(LINES, '').replace(DBL_QUOTED_STR, '\'$1\'').replace(exp, function (match, cnt, offset, matchStr) {
        var matches = cnt.match(CALL_FUNCTION);
        if (matches) {
            var rlStr = matches[1];
            if (IF_STMT.test(cnt)) {
                cnt = '"; ' + cnt.replace(matches[1], rlStr.replace(WORD, function (str) {
                    str = str.trim();
                    return addNameSpace(str, !(QUOTES.test(str)) && (localKeys.indexOf(str) === -1), nameSpace, localKeys);
                })) + '{ \n str = str + "';
            }
            else if (FOR_STMT.test(cnt)) {
                var rlStr_1 = matches[1].split(' of ');
                cnt = '"; ' + cnt.replace(matches[1], function (mtc) {
                    localKeys.push(rlStr_1[0]);
                    localKeys.push(rlStr_1[0] + 'Index');
                    return 'var i=0; i < ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys) + '.length; i++';
                }) + '{ \n ' + rlStr_1[0] + '= ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys)
                    + '[i]; \n var ' + rlStr_1[0] + 'Index=i; \n str = str + "';
            }
            else {
                var fnStr = cnt.split('(');
                var fNameSpace = (helper && helper.hasOwnProperty(fnStr[0]) ? 'this.' : 'global');
                fNameSpace = (/\./.test(fnStr[0]) ? '' : fNameSpace);
                cnt = '" + ' + (fNameSpace === 'global' ? '' : fNameSpace) +
                    cnt.replace(rlStr, addNameSpace(matches[1].replace(',', nameSpace + '.'), (fNameSpace === 'global' ? false : true), nameSpace, localKeys)) +
                    '+"';
            }
        }
        else if (ELSE_STMT.test(cnt)) {
            cnt = '"; ' + cnt.replace(ELSE_STMT, '} else { \n str = str + "');
        }
        else if (!!cnt.match(IF_OR_FOR)) {
            cnt = cnt.replace(IF_OR_FOR, '"; \n } \n str = str + "');
        }
        else {
            cnt = '"+' + addNameSpace(cnt, (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '+"';
        }
        return cnt;
    });
}
function addNameSpace(str, addNS, nameSpace, ignoreList) {
    return ((addNS && !(NOT_NUMBER.test(str)) && ignoreList.indexOf(str.split('.')[0]) === -1) ? nameSpace + '.' + str : str);
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Touch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notify_property_change__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_property__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_handler__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
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






var SwipeSettings = (function (_super) {
    __extends(SwipeSettings, _super);
    function SwipeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SwipeSettings;
}(__WEBPACK_IMPORTED_MODULE_4__child_property__["a" /* ChildProperty */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["a" /* Property */])(50)
], SwipeSettings.prototype, "swipeThresholdDistance", void 0);
var swipeRegex = /(Up|Down)/;
var Touch = (function (_super) {
    __extends(Touch, _super);
    function Touch(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.startEvent = function (evt) {
            var point = (evt.changedTouches ? evt.changedTouches[0] : evt);
            _this.isTouchMoved = false;
            _this.movedDirection = '';
            _this.startPoint = _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
            _this.startEventData = point;
            _this.hScrollLocked = _this.vScrollLocked = false;
            _this.tStampStart = Date.now();
            _this.timeOutTapHold = setTimeout(function () { _this.tapHoldEvent(evt); }, _this.tapHoldThreshold);
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].add(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchMoveEvent, _this.moveEvent, _this);
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].add(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchEndEvent, _this.endEvent, _this);
        };
        _this.moveEvent = function (evt) {
            var point = evt.changedTouches ? evt.changedTouches[0] : evt;
            _this.movedPoint = point;
            _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
            var eScrollArgs = {};
            if (_this.isTouchMoved) {
                clearTimeout(_this.timeOutTapHold);
                _this.calcScrollPoints(evt);
                var scrollArg = {
                    startEvents: _this.startEventData,
                    originalEvent: evt, startX: _this.startPoint.clientX,
                    startY: _this.startPoint.clientY, distanceX: _this.distanceX,
                    distanceY: _this.distanceY, scrollDirection: _this.scrollDirection,
                    velocity: _this.getVelocity(point)
                };
                eScrollArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eScrollArgs, {}, scrollArg);
                _this.trigger('scroll', eScrollArgs);
                _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
            }
        };
        _this.endEvent = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            var point = evt;
            if (evt.changedTouches) {
                point = evt.changedTouches[0];
            }
            _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
            _this.endPoint = point;
            var dblTapTriggred = false;
            var eDblTapArgs;
            var eTapArgs;
            var eSwipeArgs;
            var tDistance = _this.swipeSettings.swipeThresholdDistance;
            _this.calcPoints(evt);
            var swipeArgs = {
                originalEvent: evt,
                startEvents: _this.startEventData,
                startX: _this.startPoint.clientX,
                startY: _this.startPoint.clientY,
                distanceX: _this.distanceX, distanceY: _this.distanceY, swipeDirection: _this.movedDirection,
                velocity: _this.getVelocity(point)
            };
            if (!_this.isTouchMoved) {
                eDblTapArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eDblTapArgs, _this.defaultArgs, {});
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.lastTapTime) && (new Date().getTime() - _this.lastTapTime) < _this.doubleTapThreshold) {
                    clearTimeout(_this.timeOutTap);
                    dblTapTriggred = true;
                    _this.trigger('doubleTap', eDblTapArgs);
                }
                if (!dblTapTriggred) {
                    eTapArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eTapArgs, _this.defaultArgs, {});
                    _this.timeOutTap = setTimeout(function () {
                        _this.trigger('tap', eTapArgs);
                    }, (typeof _this.doubleTap !== 'function' ? 0 : _this.doubleTapThreshold));
                }
            }
            else {
                eSwipeArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eSwipeArgs, _this.defaultArgs, swipeArgs);
                var canTrigger = false;
                var ele = _this.element;
                var scrollBool = _this.isScrollable(ele);
                var moved = swipeRegex.test(_this.movedDirection);
                if ((tDistance < _this.distanceX && !moved) || (tDistance < _this.distanceY && moved)) {
                    if (!scrollBool) {
                        canTrigger = true;
                    }
                    else {
                        canTrigger = _this.checkSwipe(ele, moved);
                    }
                }
                if (canTrigger) {
                    _this.trigger('swipe', eSwipeArgs);
                }
            }
            _this.lastTapTime = new Date().getTime();
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchMoveEvent, _this.moveEvent);
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchEndEvent, _this.endEvent);
        };
        _this.bind();
        return _this;
    }
    Touch.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Touch.prototype.bind = function () {
        this.wireEvents();
        if (__WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].isIE) {
            this.element.classList.add('e-block-touch');
        }
    };
    Touch.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    Touch.prototype.wireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].add(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchStartEvent, this.startEvent, this);
    };
    Touch.prototype.unwireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchStartEvent, this.startEvent);
    };
    Touch.prototype.getModuleName = function () {
        return 'touch';
    };
    Touch.prototype.isScrollable = function (element) {
        var eleStyle = getComputedStyle(element);
        var style = eleStyle.overflow + eleStyle.overflowX + eleStyle.overflowY;
        if ((/(auto|scroll)/).test(style)) {
            return true;
        }
        return false;
    };
    Touch.prototype.tapHoldEvent = function (evt) {
        var eTapArgs;
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchMoveEvent, this.moveEvent);
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchEndEvent, this.endEvent);
        eTapArgs = { originalEvent: evt };
        this.trigger('tapHold', eTapArgs);
    };
    Touch.prototype.calcPoints = function (evt) {
        var point = evt.changedTouches ? evt.changedTouches[0] : evt;
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.startPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.startPoint.clientY)));
        if (this.distanceX > this.distanceY) {
            this.movedDirection = (point.clientX > this.startPoint.clientX) ? 'Right' : 'Left';
        }
        else {
            this.movedDirection = (point.clientY < this.startPoint.clientY) ? 'Up' : 'Down';
        }
    };
    Touch.prototype.calcScrollPoints = function (evt) {
        var point = evt.changedTouches ? evt.changedTouches[0] : evt;
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.lastMovedPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.lastMovedPoint.clientY)));
        if ((this.distanceX > this.distanceY || this.hScrollLocked === true) && this.vScrollLocked === false) {
            this.scrollDirection = (point.clientX > this.lastMovedPoint.clientX) ? 'Right' : 'Left';
            this.hScrollLocked = true;
        }
        else {
            this.scrollDirection = (point.clientY < this.lastMovedPoint.clientY) ? 'Up' : 'Down';
            this.vScrollLocked = true;
        }
    };
    Touch.prototype.getVelocity = function (pnt) {
        var newX = pnt.clientX;
        var newY = pnt.clientY;
        var newT = Date.now();
        var xDist = newX - this.startPoint.clientX;
        var yDist = newY - this.startPoint.clientX;
        var interval = newT - this.tStampStart;
        return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
    };
    Touch.prototype.checkSwipe = function (ele, flag) {
        var keys = ['scroll', 'offset'];
        var temp = flag ? ['Height', 'Top'] : ['Width', 'Left'];
        if ((ele[keys[0] + temp[0]] <= ele[keys[1] + temp[0]])) {
            return true;
        }
        return (ele[keys[0] + temp[1]] === 0) ||
            (ele[keys[1] + temp[0]] + ele[keys[0] + temp[1]] >= ele[keys[0] + temp[0]]);
    };
    return Touch;
}(__WEBPACK_IMPORTED_MODULE_3__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "tap", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "doubleTap", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "tapHold", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "swipe", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "scroll", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["a" /* Property */])(500)
], Touch.prototype, "doubleTapThreshold", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["a" /* Property */])(750)
], Touch.prototype, "tapHoldThreshold", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["b" /* Complex */])({}, SwipeSettings)
], Touch.prototype, "swipeSettings", void 0);
Touch = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__notify_property_change__["g" /* NotifyPropertyChanges */]
], Touch);



/***/ }),
/* 29 */
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(8), __webpack_require__(8), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3) {
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
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(29)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, form_validator_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(form_validator_1);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);