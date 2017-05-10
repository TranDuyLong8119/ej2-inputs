define(["require", "exports", "@syncfusion/ej2-base/dom", "@syncfusion/ej2-base/util", "../src/input/input"], function (require, exports, dom_1, util_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Input', function () {
        describe('createInput', function () {
            describe('create wrapper', function () {
                var inputObj;
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element
                    });
                });
                it('class name of container element', function () {
                    expect(inputObj.container.classList.contains('e-input-group')).toBe(true);
                });
                it('class name of input element', function () {
                    expect(element.classList.contains('e-input')).toBe(true);
                });
                it('Dom size', function () {
                    expect((inputObj.container.querySelectorAll('*').length === 1)).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('multiple buttons', function () {
                var inputObj;
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        buttons: ['e-icon-close', 'e-icon-search']
                    });
                });
                it('class name of first button', function () {
                    expect(inputObj.buttons[0].classList.contains('e-icon-close')).toBe(true);
                });
                it('class name of second button', function () {
                    expect(inputObj.buttons[1].classList.contains('e-icon-search')).toBe(true);
                });
                it('Dom size', function () {
                    expect((inputObj.container.querySelectorAll('*').length === 3)).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('readonly', function () {
                var inputObj;
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        properties: {
                            readonly: true,
                            placeholder: 'Search here',
                            cssClass: 'custom-class',
                            enabled: false,
                            enableRtl: true,
                        }
                    });
                });
                it('readonly attribute in input element', function () {
                    expect(element.hasAttribute('readonly')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('placeholder', function () {
                var inputObj;
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        properties: {
                            placeholder: 'Search here',
                        }
                    });
                });
                it('placeholder attribute value in input element', function () {
                    expect((element.getAttribute('placeholder') === 'Search here')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('cssClass', function () {
                var inputObj;
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        properties: {
                            cssClass: 'e-custom-class',
                        }
                    });
                });
                it('class name in container element', function () {
                    expect(inputObj.container.classList.contains('e-custom-class')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('enabled', function () {
                var inputObj;
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        properties: {
                            enabled: false,
                        }
                    });
                });
                it('disabled and aria-disabled attribute in input element', function () {
                    expect(element.hasAttribute('disabled') && element.hasAttribute('aria-disabled')).toBe(true);
                });
                it('e-disabled class in element', function () {
                    expect(element.classList.contains('e-disabled')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('enableRtl', function () {
                var inputObj;
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        properties: {
                            enableRtl: true,
                        }
                    });
                });
                it('e-rtl class in container element', function () {
                    expect(inputObj.container.classList.contains('e-rtl')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
        });
        describe('appendButton', function () {
            var inputObj;
            var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                });
            });
            it('class name of added button', function () {
                var button = input_1.Input.appendSpan('e-icon-spin', inputObj.container);
                expect(button.classList.contains('e-icon-spin')).toBe(true);
            });
            it('Dom size', function () {
                expect((inputObj.container.querySelectorAll('*').length === 2)).toBe(true);
            });
            afterAll(function () {
                element.remove();
            });
        });
        describe('Check Focus in and out', function () {
            var inputObj;
            var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                });
            });
            it('Check Focus in and out', function () {
                element.focus();
                expect((inputObj.container.classList.contains('e-input-focus'))).toBe(true);
                element.blur();
                expect((inputObj.container.classList.contains('e-input-focus'))).toBe(false);
            });
            afterAll(function () {
                element.remove();
            });
        });
        describe('Check Focus in and out for float input', function () {
            var inputObj;
            var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                    isFloat: true,
                    properties: {
                        placeholder: 'Read float group',
                        readonly: true,
                    },
                });
            });
            it('Check Focus in and out for float input', function () {
                element.focus();
                expect((inputObj.container.getElementsByClassName('e-float-text')[0].classList.contains('e-label-top'))).toBe(true);
                element.blur();
                expect((inputObj.container.getElementsByClassName('e-float-text')[0].classList.contains('e-label-top'))).toBe(false);
            });
            afterAll(function () {
                element.remove();
            });
        });
        describe('Check input button selected state with mouse up and down', function () {
            var inputObj;
            var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                    buttons: ['e-input-group-icon']
                });
            });
            it('Check mouse down event', function () {
                var spanEle = inputObj.buttons[0];
                var mouseEvents = document.createEvent('MouseEvents');
                mouseEvents.initEvent('mousedown', true, true);
                spanEle.dispatchEvent(mouseEvents);
                spanEle.addEventListener('mousedown', function () {
                    expect((this.classList.contains('e-input-btn-ripple'))).toBe(true);
                });
            });
            it('Check mouse up event', function (done) {
                var spanEle = inputObj.buttons[0];
                var mouseEvents = document.createEvent('MouseEvents');
                mouseEvents.initEvent('mouseup', true, true);
                spanEle.dispatchEvent(mouseEvents);
                setTimeout(function () {
                    spanEle.addEventListener('mouseup', function () {
                        expect((this.classList.contains('e-input-btn-ripple'))).toBe(false);
                    });
                    done();
                }, 1500);
            });
            afterAll(function () {
                element.remove();
            });
        });
        describe('Render Input box with Custom tag', function () {
            var inputObj;
            var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                    customTag: 'ej2-custominput'
                });
            });
            it('Check custom tag name', function () {
                expect((inputObj.container.tagName === 'EJ2-CUSTOMINPUT')).toBe(true);
            });
            afterAll(function () {
                element.remove();
            });
        });
        describe('Dynamic update the properties', function () {
            describe('setPlaceholder', function () {
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    input_1.Input.setPlaceholder('Search here', element);
                });
                it('placeholder text', function () {
                    expect(!util_1.isNullOrUndefined(element.getAttribute('placeholder'))).toBe(true);
                });
                it('remove placeholder while pass empty string', function () {
                    input_1.Input.setPlaceholder('', element);
                    expect(util_1.isNullOrUndefined(element.getAttribute('placeholder'))).toBe(true);
                });
                it('remove placeholder while pass null value', function () {
                    input_1.Input.setPlaceholder('Search here', element);
                    input_1.Input.setPlaceholder(null, element);
                    expect(util_1.isNullOrUndefined(element.getAttribute('placeholder'))).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('setCssClass', function () {
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    input_1.Input.setCssClass('e-custom-class', [element]);
                });
                it('class name of element', function () {
                    expect(element.classList.contains('e-custom-class')).toBe(true);
                });
                it('remove the old cssClass name from element', function () {
                    input_1.Input.setCssClass('e-change-class', [element], 'e-custom-class');
                    expect(element.classList.contains('e-custom-class')).toBe(false);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('setReadonly', function () {
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    input_1.Input.setReadonly(true, element);
                });
                it('add readonly attribute in input element', function () {
                    expect(element.hasAttribute('readonly')).toBe(true);
                });
                it('remove readonly attribute in input element', function () {
                    input_1.Input.setReadonly(false, element);
                    expect(element.hasAttribute('readonly')).toBe(false);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('setEnableRtl', function () {
                var inputObj;
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element
                    });
                    input_1.Input.setEnableRtl(true, [inputObj.container]);
                });
                it('add e-rtl class in container element', function () {
                    expect(inputObj.container.classList.contains('e-rtl')).toBe(true);
                });
                it('remove e-rtl class in container element', function () {
                    input_1.Input.setEnableRtl(false, [inputObj.container]);
                    expect(inputObj.container.classList.contains('e-rtl')).toBe(false);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('setEnabled', function () {
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    input_1.Input.setEnabled(false, element);
                });
                it('disabled and aria-disabled attribute in input element', function () {
                    expect(element.hasAttribute('disabled') && element.hasAttribute('aria-disabled')).toBe(true);
                });
                it('add e-disabled class in element', function () {
                    expect(element.classList.contains('e-disabled')).toBe(true);
                });
                it('remove the disabled and aria-disabled attribute in input element', function () {
                    input_1.Input.setEnabled(true, element);
                    expect(element.hasAttribute('disabled') && element.hasAttribute('aria-disabled')).toBe(false);
                });
                it('remove e-disabled class in element', function () {
                    expect(element.classList.contains('e-disabled')).toBe(false);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('removeAttributes', function () {
                var disabledAttrs = { 'disabled': 'disabled' };
                var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    dom_1.attributes(element, disabledAttrs);
                });
                it('remove the disabled attribute in input element', function () {
                    input_1.Input.removeAttributes({ 'disabled': 'disabled', 'aria-disabled': 'true' }, element);
                    expect(element.hasAttribute('disabled')).toBe(false);
                });
                afterAll(function () {
                    element.remove();
                });
            });
        });
    });
    describe('FloatInput', function () {
        describe('createFloatInput', function () {
            describe('create wrapper', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                        properties: {
                            placeholder: 'Search Float',
                        }
                    });
                });
                it('class name of container element', function () {
                    expect(inputObj.container.classList.contains('e-float-input')).toBe(true);
                });
                it('class and tag names of child nodes', function () {
                    expect((inputObj.container.childNodes[0].nodeName === 'INPUT')).toBe(true);
                    expect((inputObj.container.childNodes[1].nodeName === 'SPAN') &&
                        (inputObj.container.childNodes[1].classList.contains('e-float-line'))).toBe(true);
                    expect((inputObj.container.childNodes[2].nodeName === 'LABEL') &&
                        (inputObj.container.childNodes[2].classList.contains('e-float-text'))).toBe(true);
                });
                it('Dom size - Child nodes length', function () {
                    expect((inputObj.container.childNodes.length === 3)).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('readonly', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                        properties: {
                            readonly: true,
                            placeholder: 'Search Float',
                        }
                    });
                });
                it('readonly attribute in input element', function () {
                    expect(element.hasAttribute('readonly')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('placeholder through property', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text',
                        placeholder: 'Through Input element' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                        properties: {
                            placeholder: 'Through property',
                        }
                    });
                });
                it('placeholder label for floating input through property', function () {
                    expect((inputObj.container.childNodes[2].textContent === 'Through property')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('placeholder through input element', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text',
                        placeholder: 'Through Input element' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                    });
                });
                it('placeholder label for floating input through input element', function () {
                    expect((inputObj.container.childNodes[2].textContent === 'Through Input element')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('cssClass', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                        properties: {
                            cssClass: 'e-custom-class',
                            placeholder: 'Through Input element',
                        }
                    });
                });
                it('class name in container element', function () {
                    expect(inputObj.container.classList.contains('e-custom-class')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('enabled', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                        properties: {
                            placeholder: 'Input element',
                            enabled: false
                        }
                    });
                });
                it('disabled and aria-disabled attribute in input element', function () {
                    expect(element.hasAttribute('disabled') && element.hasAttribute('aria-disabled')).toBe(true);
                });
                it('e-disabled class in element', function () {
                    expect(element.classList.contains('e-disabled')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('enableRtl', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                        properties: {
                            placeholder: 'Input element',
                            enableRtl: true
                        }
                    });
                });
                it('e-rtl class in container element', function () {
                    expect(inputObj.container.classList.contains('e-rtl')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
        });
        describe('appendButton', function () {
            var inputObj;
            var element;
            element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                    isFloat: true,
                    properties: {
                        placeholder: 'Input element',
                    }
                });
            });
            it('class name of added button', function () {
                var button;
                button = input_1.Input.appendSpan('e-icon-spin', inputObj.container);
                expect(button.classList.contains('e-icon-spin')).toBe(true);
            });
            it('Dom size and check group class name', function () {
                expect((inputObj.container.querySelectorAll('*').length === 4)).toBe(true);
                expect((inputObj.container.classList.contains('e-input-group'))).toBe(true);
            });
            afterAll(function () {
                element.remove();
            });
        });
        describe('Dynamic update the properties', function () {
            describe('setPlaceholder', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                    });
                    input_1.Input.setPlaceholder('Float placeholder', element);
                });
                it('placeholder text', function () {
                    expect((inputObj.container.childNodes[2].textContent === 'Float placeholder')).toBe(true);
                });
                it('remove placeholder while pass empty string', function () {
                    input_1.Input.setPlaceholder('', element);
                    expect(util_1.isNullOrUndefined(element.getAttribute('placeholder'))).toBe(true);
                });
                it('remove placeholder while pass null value', function () {
                    input_1.Input.setPlaceholder('Search here', element);
                    input_1.Input.setPlaceholder(null, element);
                    expect(util_1.isNullOrUndefined(element.getAttribute('placeholder'))).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('setCssClass', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                    });
                    input_1.Input.setCssClass('e-custom-class', [element]);
                    input_1.Input.setCssClass('e-customparent-class', [inputObj.container]);
                });
                it('class name of element', function () {
                    expect(element.classList.contains('e-custom-class')).toBe(true);
                    expect(inputObj.container.classList.contains('e-customparent-class')).toBe(true);
                });
                it('remove the old cssClass name from element', function () {
                    input_1.Input.setCssClass('e-customparent-newclass', [inputObj.container], 'e-customparent-class');
                    expect(element.classList.contains('e-customparent-class')).toBe(false);
                    expect(element.classList.contains('e-customparent-newclass')).toBe(false);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('setReadonly', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                    });
                    input_1.Input.setReadonly(true, element);
                });
                it('add readonly attribute in input element', function () {
                    expect(element.hasAttribute('readonly')).toBe(true);
                });
                it('remove readonly attribute in input element', function () {
                    input_1.Input.setReadonly(false, element);
                    expect(element.hasAttribute('readonly')).toBe(false);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('setEnableRtl', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                    });
                    input_1.Input.setEnableRtl(true, [inputObj.container]);
                });
                it('add e-rtl class in container element', function () {
                    expect(inputObj.container.classList.contains('e-rtl')).toBe(true);
                });
                it('remove e-rtl class in container element', function () {
                    input_1.Input.setEnableRtl(false, [inputObj.container]);
                    expect(inputObj.container.classList.contains('e-rtl')).toBe(false);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('setEnabled', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                    });
                    input_1.Input.setEnabled(false, element);
                });
                it('disabled and aria-disabled attribute in input element', function () {
                    expect(element.hasAttribute('disabled') && element.hasAttribute('aria-disabled')).toBe(true);
                });
                it('add e-disabled class in element', function () {
                    expect(element.classList.contains('e-disabled')).toBe(true);
                });
                it('remove the disabled and aria-disabled attribute in input element', function () {
                    input_1.Input.setEnabled(true, element);
                    expect(element.hasAttribute('disabled') && element.hasAttribute('aria-disabled')).toBe(false);
                });
                it('remove e-disabled class in element', function () {
                    expect(element.classList.contains('e-disabled')).toBe(false);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('removeAttributes', function () {
                var inputObj;
                var element;
                var disabledAttrs = { 'disabled': 'disabled' };
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    dom_1.attributes(element, disabledAttrs);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                    });
                });
                it('remove the disabled attribute in input element', function () {
                    input_1.Input.removeAttributes({ 'disabled': 'disabled', 'aria-disabled': 'true' }, element);
                    expect(element.hasAttribute('disabled')).toBe(false);
                    expect(element.classList.contains('e-disabled')).toBe(false);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('removeAttributes through property', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                        properties: {
                            enabled: false
                        }
                    });
                });
                it('remove the disabled attribute in input element', function () {
                    input_1.Input.removeAttributes({ 'disabled': 'disabled', 'aria-disabled': 'true' }, element);
                    expect((element.hasAttribute('disabled') && element.hasAttribute('aria-disabled'))).toBe(false);
                    expect(element.classList.contains('e-disabled')).toBe(false);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('removeAttributes - placeholder', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                        properties: {
                            placeholder: 'Remove placeholder'
                        }
                    });
                });
                it('remove the placeholder/label', function () {
                    input_1.Input.removeAttributes({ 'placeholder': 'Remove placeholder' }, element);
                    expect((inputObj.container.childNodes[2].textContent === '')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('addAttributes - ID', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true,
                        properties: {
                            placeholder: 'Attribute id'
                        }
                    });
                });
                it('Add Placeholder', function () {
                    input_1.Input.addAttributes({ 'id': 'inputpopup' }, element);
                    expect((element.id === 'inputpopup')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
            describe('addAttributes - Placeholder', function () {
                var inputObj;
                var element;
                element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
                beforeAll(function () {
                    document.body.appendChild(element);
                    inputObj = input_1.Input.createInput({
                        element: element,
                        isFloat: true
                    });
                });
                it('Add Placeholder', function () {
                    input_1.Input.addAttributes({ 'placeholder': 'Attribute Placeholder' }, element);
                    expect((inputObj.container.childNodes[2].textContent === 'Attribute Placeholder')).toBe(true);
                });
                afterAll(function () {
                    element.remove();
                });
            });
        });
    });
    describe('Input Groups - Enable/Disable', function () {
        describe('Disable', function () {
            var inputObj;
            var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                    properties: {
                        enabled: false,
                    }
                });
                input_1.Input.appendSpan('e-input-group-icon', inputObj.container);
            });
            it('Check disabled classes and attributes in input element and container', function () {
                expect(element.hasAttribute('disabled') && element.classList.contains('e-disabled')).toBe(true);
                expect(inputObj.container.classList.contains('e-disabled')).toBe(true);
            });
            afterAll(function () {
                element.remove();
            });
        });
        describe('Enable', function () {
            var inputObj;
            var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                    properties: {
                        enabled: false,
                    }
                });
                input_1.Input.appendSpan('e-input-group-icon', inputObj.container);
                input_1.Input.setEnabled(true, element);
            });
            it('Check disabled classes and attributes in input element and container', function () {
                expect(!element.hasAttribute('disabled') && !element.classList.contains('e-disabled')).toBe(true);
                expect(!inputObj.container.classList.contains('e-disabled')).toBe(true);
            });
            afterAll(function () {
                element.remove();
            });
        });
        describe('Disable through add attributes', function () {
            var inputObj;
            var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                });
                input_1.Input.appendSpan('e-input-group-icon', inputObj.container);
                input_1.Input.addAttributes({ 'disabled': 'disabled' }, element);
            });
            it('Check disabled classes and attributes in input element and container', function () {
                expect(element.hasAttribute('disabled') && element.classList.contains('e-disabled')).toBe(true);
                expect(inputObj.container.classList.contains('e-disabled')).toBe(true);
            });
            afterAll(function () {
                element.remove();
            });
        });
        describe('Enable through add/remove attributes', function () {
            var inputObj;
            var element = dom_1.createElement('input', { id: 'inputpopup', attrs: { type: 'text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                });
                input_1.Input.appendSpan('e-input-group-icon', inputObj.container);
                input_1.Input.addAttributes({ 'disabled': 'disabled' }, element);
                input_1.Input.removeAttributes({ 'disabled': 'disabled' }, element);
            });
            it('Check disabled classes and attributes in input element and container', function () {
                expect(!element.hasAttribute('disabled') && !element.classList.contains('e-disabled')).toBe(true);
                expect(!inputObj.container.classList.contains('e-disabled')).toBe(true);
            });
            afterAll(function () {
                element.remove();
            });
        });
        describe('Render Floating Input box with Custom tag', function () {
            var inputObj;
            var element;
            element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                    isFloat: true,
                    customTag: 'ej2-custom-floatinput',
                    properties: {
                        placeholder: 'Custom Tag Float'
                    }
                });
            });
            it('Check custom tag name', function () {
                expect((inputObj.container.tagName === 'EJ2-CUSTOM-FLOATINPUT')).toBe(true);
            });
            afterAll(function () {
                element.remove();
            });
        });
        describe('Floating Input - aria labelledby_1', function () {
            var inputObj;
            var element;
            element = dom_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
            beforeAll(function () {
                document.body.appendChild(element);
                inputObj = input_1.Input.createInput({
                    element: element,
                    isFloat: true,
                    properties: {
                        placeholder: 'Custom Tag Float'
                    }
                });
            });
            it('Check aria labelledby', function () {
                expect((inputObj.container.children[2].id === 'label_inputpopup') && (element.getAttribute('aria-labelledby') === 'label_inputpopup')).toBe(true);
            });
            afterAll(function () {
                element.remove();
            });
        });
    });
});
