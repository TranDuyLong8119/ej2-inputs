define(["require", "exports", "@syncfusion/ej2-base/dom", "@syncfusion/ej2-base/util"], function (require, exports, dom_1, util_1) {
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
        INPUTCUSTOMTAG: 'e-input-custom-tag',
        FLOATCUSTOMTAG: 'e-float-custom-tag'
    };
    var Input;
    (function (Input) {
        function createInput(args) {
            var inputObject = {
                container: null,
                buttons: []
            };
            if (util_1.isNullOrUndefined(args.isFloat) || !args.isFloat) {
                inputObject.container = createInputContainer(args, CLASSNAMES.INPUTGROUP, CLASSNAMES.INPUTCUSTOMTAG, 'span');
                args.element.addEventListener('focus', function () {
                    var parent = (this.parentNode);
                    if (parent.classList.contains('e-input-group')) {
                        parent.classList.add('e-input-focus');
                    }
                });
                args.element.addEventListener('blur', function () {
                    var parent = (this.parentNode);
                    if (parent.classList.contains('e-input-group')) {
                        parent.classList.remove('e-input-focus');
                    }
                });
                args.element.parentNode.insertBefore(inputObject.container, args.element);
                dom_1.addClass([args.element], CLASSNAMES.INPUT);
                inputObject.container.appendChild(args.element);
            }
            else {
                var inputElement = void 0;
                var floatLinelement = void 0;
                var floatLabelElement = void 0;
                args.element.addEventListener('focus', function () {
                    var parent = (this.parentNode);
                    parent.getElementsByClassName('e-float-text')[0].classList.add('e-label-top');
                });
                args.element.addEventListener('blur', function () {
                    var parent = (this.parentNode);
                    if (parent.getElementsByTagName('input')[0].value === '') {
                        parent.getElementsByClassName('e-float-text')[0].classList.remove('e-label-top');
                    }
                });
                inputObject.container = createInputContainer(args, CLASSNAMES.FLOATINPUT, CLASSNAMES.FLOATCUSTOMTAG, 'div');
                args.element.parentNode.insertBefore(inputObject.container, args.element);
                dom_1.attributes(args.element, { 'required': 'true' });
                floatLinelement = dom_1.createElement('span', { className: CLASSNAMES.FLOATLINE });
                floatLabelElement = dom_1.createElement('label', { className: CLASSNAMES.FLOATTEXT });
                if (!util_1.isNullOrUndefined(args.element.id) && args.element.id !== '') {
                    var labelId = void 0;
                    labelId = 'label_' + args.element.id;
                    floatLabelElement.id = labelId.replace(/ /g, '_');
                    dom_1.attributes(args.element, { 'aria-labelledby': floatLabelElement.id });
                }
                if (!util_1.isNullOrUndefined(args.element.placeholder) && args.element.placeholder !== '') {
                    floatLabelElement.innerHTML = args.element.placeholder;
                    args.element.removeAttribute('placeholder');
                }
                if (!util_1.isNullOrUndefined(args.properties) && !util_1.isNullOrUndefined(args.properties.placeholder) &&
                    args.properties.placeholder !== '') {
                    floatLabelElement.innerHTML = args.properties.placeholder;
                }
                inputObject.container.appendChild(args.element);
                inputObject.container.appendChild(floatLinelement);
                inputObject.container.appendChild(floatLabelElement);
            }
            if (!util_1.isNullOrUndefined(args.buttons)) {
                for (var i = 0; i < args.buttons.length; i++) {
                    inputObject.buttons.push(appendSpan(args.buttons[i], inputObject.container));
                }
            }
            if (!util_1.isNullOrUndefined(args.properties)) {
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
        Input.createInput = createInput;
        function createInputContainer(args, className, tagClass, tag) {
            var container;
            if (!util_1.isNullOrUndefined(args.customTag)) {
                container = dom_1.createElement(args.customTag, { className: className });
                container.classList.add(tagClass);
            }
            else {
                container = dom_1.createElement(tag, { className: className });
            }
            return container;
        }
        function setCssClass(cssClass, elements, oldClass) {
            if (!util_1.isNullOrUndefined(oldClass) && oldClass !== '') {
                dom_1.removeClass(elements, oldClass);
            }
            if (!util_1.isNullOrUndefined(cssClass) && cssClass !== '') {
                dom_1.addClass(elements, cssClass);
            }
        }
        Input.setCssClass = setCssClass;
        function setPlaceholder(placeholder, element) {
            var parentElement;
            parentElement = element.parentNode;
            if (parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
                if (!util_1.isNullOrUndefined(placeholder) && placeholder !== '') {
                    parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = placeholder;
                }
            }
            else {
                if (!util_1.isNullOrUndefined(placeholder) && placeholder !== '') {
                    dom_1.attributes(element, { 'placeholder': placeholder, 'aria-placeholder': placeholder });
                }
                else {
                    element.removeAttribute('placeholder');
                    element.removeAttribute('aria-placeholder');
                }
            }
        }
        Input.setPlaceholder = setPlaceholder;
        function setReadonly(isReadonly, element) {
            if (isReadonly) {
                dom_1.attributes(element, { readonly: '' });
            }
            else {
                element.removeAttribute('readonly');
            }
        }
        Input.setReadonly = setReadonly;
        function setEnableRtl(isRtl, elements) {
            if (isRtl) {
                dom_1.addClass(elements, CLASSNAMES.RTL);
            }
            else {
                dom_1.removeClass(elements, CLASSNAMES.RTL);
            }
        }
        Input.setEnableRtl = setEnableRtl;
        function setEnabled(isEnable, element) {
            var disabledAttrs = { 'disabled': 'disabled', 'aria-disabled': 'true' };
            if (isEnable) {
                element.classList.remove(CLASSNAMES.DISABLE);
                removeAttributes(disabledAttrs, element);
            }
            else {
                element.classList.add(CLASSNAMES.DISABLE);
                addAttributes(disabledAttrs, element);
            }
        }
        Input.setEnabled = setEnabled;
        function removeAttributes(attrs, element) {
            for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
                var key = _a[_i];
                var parentElement = void 0;
                parentElement = element.parentNode;
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
                parentElement = element.parentNode;
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
        function appendSpan(iconClass, container) {
            var button = dom_1.createElement('span', { className: iconClass });
            container.appendChild(button);
            if (!container.classList.contains(CLASSNAMES.INPUTGROUP)) {
                container.classList.add(CLASSNAMES.INPUTGROUP);
            }
            button.addEventListener('mousedown', function () {
                this.classList.add('e-input-btn-ripple');
            });
            button.addEventListener('mouseup', function () {
                var ele = this;
                setTimeout(function () { ele.classList.remove('e-input-btn-ripple'); }, 500);
            });
            return button;
        }
        Input.appendSpan = appendSpan;
    })(Input = exports.Input || (exports.Input = {}));
});
