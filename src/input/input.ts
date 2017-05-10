import { createElement, attributes, addClass, removeClass } from '@syncfusion/ej2-base/dom';
import { isNullOrUndefined } from '@syncfusion/ej2-base/util';
const CLASSNAMES: ClassNames = {
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
/**
 * Base for Input creation through util methods.
 */
export namespace Input {
   /**
    * Create a wrapper to input element with multiple span elements and set the basic properties to input based components.
    * ```
    * E.g : Input.createInput({ element: element, isFloat: true, properties: { placeholder: 'Search' } });
    * ```
    * @param args
    */
    export function createInput(args: InputArgs): InputObject {
        /**
         * Return object of createInput method.
         */
        let inputObject: InputObject = {
          container: null,
          buttons: []
         };
        if (isNullOrUndefined(args.isFloat) || !args.isFloat) {
         inputObject.container = createInputContainer(args, CLASSNAMES.INPUTGROUP, CLASSNAMES.INPUTCUSTOMTAG, 'span');
         args.element.addEventListener('focus', function() : void {
          let parent: HTMLElement = <HTMLElement>(this.parentNode);
          if (parent.classList.contains('e-input-group')) {
           parent.classList.add('e-input-focus');
          }
         });
         args.element.addEventListener('blur', function() : void {
          let parent: HTMLElement = <HTMLElement>(this.parentNode);
          if (parent.classList.contains('e-input-group')) {
           parent.classList.remove('e-input-focus');
          }
        });
         args.element.parentNode.insertBefore(inputObject.container, args.element);
         addClass([args.element], CLASSNAMES.INPUT);
         inputObject.container.appendChild(args.element);
        } else {
           let inputElement: HTMLElement;
           let floatLinelement: HTMLElement;
           let floatLabelElement: HTMLElement;
           args.element.addEventListener('focus', function() : void {
            let parent: HTMLElement = <HTMLElement>(this.parentNode);
            parent.getElementsByClassName('e-float-text')[0].classList.add('e-label-top');
           });
           args.element.addEventListener('blur', function() : void {
           let parent: HTMLElement = <HTMLElement>(this.parentNode);
           if (parent.getElementsByTagName('input')[0].value === '') {
              parent.getElementsByClassName('e-float-text')[0].classList.remove('e-label-top');
            }
           });
           inputObject.container = createInputContainer(args, CLASSNAMES.FLOATINPUT, CLASSNAMES.FLOATCUSTOMTAG, 'div');
           args.element.parentNode.insertBefore(inputObject.container, args.element);
           attributes(args.element, { 'required': 'true' });
           floatLinelement = createElement('span', { className: CLASSNAMES.FLOATLINE });
           floatLabelElement = createElement('label', { className: CLASSNAMES.FLOATTEXT });
           if (!isNullOrUndefined(args.element.id) && args.element.id !== '') {
             let labelId: string;
             labelId = 'label_' + args.element.id;
             floatLabelElement.id =  labelId.replace(/ /g, '_');
             attributes(args.element, { 'aria-labelledby': floatLabelElement.id});
           }
           if (!isNullOrUndefined(args.element.placeholder) && args.element.placeholder !== '') {
            floatLabelElement.innerHTML = args.element.placeholder;
            args.element.removeAttribute('placeholder');
           }
           if (!isNullOrUndefined(args.properties) && !isNullOrUndefined(args.properties.placeholder) &&
           args.properties.placeholder !== '') {
            floatLabelElement.innerHTML = args.properties.placeholder;
           }
           inputObject.container.appendChild(args.element);
           inputObject.container.appendChild(floatLinelement);
           inputObject.container.appendChild(floatLabelElement);
        }
        if (!isNullOrUndefined(args.buttons)) {
            for (let i: number = 0; i < args.buttons.length; i++) {
                inputObject.buttons.push(appendSpan(args.buttons[i], inputObject.container));
            }
         }
        if (!isNullOrUndefined(args.properties)) {
            for (let prop of Object.keys(args.properties)) {
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
   /**
    * To create input box contianer.
    */
    function createInputContainer(args: InputArgs, className: string, tagClass: string, tag: string): HTMLElement {
        let container: HTMLElement;
        if (!isNullOrUndefined(args.customTag)) {
          container = createElement(args.customTag , {  className: className} );
          container.classList.add(tagClass);
         } else {
          container = createElement(tag, { className: className });
         }
        return container;
    }
   /**
    * Sets the single or multiple cssClass to wrapper of input element.
    * ```
    * E.g : Input.setCssClass('e-custom-class', [element]);
    * ```
    * @param cssClass - Css class names which are needed to add.
    * @param elements - The elements which are needed to add / remove classes.
    * @param oldClass - Css class names which are needed to remove. If old classes are need to remove, can give this optional parameter.
    */
    export function setCssClass(cssClass: string, elements: Element[] | NodeList, oldClass?: string): void {
        if (!isNullOrUndefined(oldClass) && oldClass !== '') {
            removeClass(elements, oldClass);
        }
        if (!isNullOrUndefined(cssClass) && cssClass !== '') {
            addClass(elements, cssClass);
        }
    }
   /**
    * Set the placeholder attribute to the input element.
    * ```
    * E.g : Input.setPlaceholder('Search here', element);
    * ```
    * @param placeholder - Placeholder value which is need to add.
    * @param element - The element on which the placeholder is need to add.
    */
    export function setPlaceholder(placeholder: string, element: HTMLInputElement): void {
        let parentElement: HTMLElement;
        parentElement = <HTMLElement>element.parentNode;
        if (parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
         if (!isNullOrUndefined(placeholder) && placeholder !== '') {
           parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = placeholder;
          }
        } else {
         if (!isNullOrUndefined(placeholder) && placeholder !== '') {
            attributes(element, { 'placeholder': placeholder, 'aria-placeholder':  placeholder});
         } else {
            element.removeAttribute('placeholder');
            element.removeAttribute('aria-placeholder');
         }
        }
    }
   /**
    * Set the read only attribute to the input element
    * ```
    * E.g : Input.setReadonly(true, element);
    * ```
    * @param isReadonly
    * - Boolean value to specify whether to set read only. Setting "True" value enables read only.
    * @param element
    * - The element which is need to enable read only.
    */
    export function setReadonly(isReadonly: boolean, element: HTMLInputElement): void {
        if (isReadonly) {
            attributes(element, { readonly: '' });
        } else {
            element.removeAttribute('readonly');
        }
    }
   /**
    * Displays the element direction from right to left when its enabled.
    * ```
    * E.g : Input.setEnableRtl(true, [inputObj.container]);
    * ```
    * @param isRtl
    * - Boolean value to specify whether to set RTL. Setting "True" value enables the RTL mode.
    * @param elements
    * - The elements that are needed to enable/disable RTL.
    */
    export function setEnableRtl(isRtl: boolean, elements: Element[] | NodeList): void {
        if (isRtl) {
            addClass(elements, CLASSNAMES.RTL);
        } else {
            removeClass(elements, CLASSNAMES.RTL);
        }
    }
   /**
    * Enables or disables the given input element.
    * ```
    * E.g : Input.setEnabled(false, element);
    * ```
    * @param isEnable
    * - Boolean value to specify whether to enable or disable.
    * @param element
    * - Element to be enabled or disabled.
    */
    export function setEnabled(isEnable: boolean, element: HTMLInputElement): void {
        let disabledAttrs: { [key: string]: string } = { 'disabled': 'disabled', 'aria-disabled': 'true' };
        if (isEnable) {
            element.classList.remove(CLASSNAMES.DISABLE);
            removeAttributes(disabledAttrs, element);
        } else {
            element.classList.add(CLASSNAMES.DISABLE);
            addAttributes(disabledAttrs, element);
        }
    }
   /**
    * Removing the multiple attributes from the given element such as "disabled","id" , etc.
    * ```
    * E.g : Input.removeAttributes({ 'disabled': 'disabled', 'aria-disabled': 'true' }, element);
    * ```
    * @param attrs
    *  - Array of attributes which are need to removed from the element.
    * @param element
    *  - Element on which the attributes are needed to be removed.
    */
    export function removeAttributes(attrs: { [key: string]: string }, element: HTMLInputElement | HTMLElement): void {
        for (let key of Object.keys(attrs)) {
            let parentElement: HTMLElement;
            parentElement = <HTMLElement>element.parentNode;
            if (key === 'disabled') {
             element.classList.remove(CLASSNAMES.DISABLE);
            }
            if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
             parentElement.classList.remove(CLASSNAMES.DISABLE);
            }
            if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
               parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
            } else {
                element.removeAttribute(key);
            }
        }
    }
    /**
     * Adding the multiple attributes to the given element such as "disabled","id" , etc.
     * ```
     * E.g : Input.addAttributes({ 'id': 'inputpopup' }, element);
     * ```
     * @param attrs
     * - Array of attributes which is added to element.
     * @param element
     * - Element on which the attributes are needed to be added.
     */
    export function addAttributes(attrs: { [key: string]: string }, element: HTMLInputElement | HTMLElement): void {
      for (let key of Object.keys(attrs)) {
            let parentElement: HTMLElement;
            parentElement = <HTMLElement>element.parentNode;
            if (key === 'disabled') {
                element.classList.add(CLASSNAMES.DISABLE);
            }
            if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
                parentElement.classList.add(CLASSNAMES.DISABLE);
            }
            if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
             parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = attrs[key];
            } else {
                element.setAttribute(key, attrs[key]);
            }
      }
    }
   /**
    * Creates a new span element with the given icons added and append it in container element.
    * ```
    * E.g : Input.appendSpan('e-icon-spin', inputObj.container);
    * ```
    * @param iconClass - Icon classes which are need to add to the span element which is going to created.
    * Span element acts as icon or button element for input.
    * @param container - The container on which created span element is going to append.
    */
    export function appendSpan(iconClass: string, container: HTMLElement): HTMLElement {
        let button: HTMLElement = <HTMLElement>createElement('span', { className: iconClass });
        container.appendChild(button);
        if (!container.classList.contains(CLASSNAMES.INPUTGROUP)) {
          container.classList.add(CLASSNAMES.INPUTGROUP);
        }
        button.addEventListener('mousedown', function() : void {
         this.classList.add('e-input-btn-ripple');
        });
        button.addEventListener('mouseup', function() : void {
         let ele: HTMLElement = this;
         setTimeout(
          () => { ele.classList.remove('e-input-btn-ripple'); },
          500);
        });
        return button;
    }
}
interface ClassNames {
    RTL: string;
    DISABLE: string;
    INPUT: string;
    INPUTGROUP: string;
    FLOATINPUT: string;
    FLOATLINE: string;
    FLOATTEXT: string;
    INPUTCUSTOMTAG: string;
    FLOATCUSTOMTAG: string;
}
export interface InputObject {
    container?: HTMLElement;
    buttons?: HTMLElement[];
}
/**
 * Arguments to create input element for input text boxes utility.These properties are optional.
 */
export interface InputArgs {
   /**
    * Element which is needed to add to the container.
    * ```
    * E.g : Input.createInput({ element: element });
    * ```
    */
    element: HTMLInputElement;
   /**
    * ```
    * E.g : Input.createInput({ element: element, buttons: ['e-icon-up', 'e-icon-down'] });
    * ```
    * Specifies the icon classes for span element which will be append to the container.
    */
    buttons?: string[];
   /**
    * ```
    * E.g : Input.createInput({ element: element, customTag: 'ej2-custom-input' });
    * ```
    * Specifies the custom tag which is acts as container to the input.
    */
    customTag?: string;
   /**
    * ```
    * E.g : Input.createInput({ element: element, isFloat: true });
    * ```
    * Sets to enable input with floating label feature.
    */
    isFloat?: boolean;
   /**
    * ```
    * E.g : Input.createInput({ element: element, properties: { readonly: true, placeholder: 'Search here' } });
    * ```
    * To specifies the properties such as readonly,enable rtl,etc.
    */
    properties?: {
        readonly?: boolean;
        placeholder?: string;
        cssClass?: string;
        enableRtl?: boolean;
        enabled?: boolean;
    };
}
/**
 * Default required properties for input components.
 */
export interface IInput {
    /**
     *  Sets the placeholder value to input.
     */
    placeholder: string;
    /**
     *  Sets the css class value to input.
     */
    cssClass: string;
    /**
     *  Sets the enabled value to input.
     */
    enabled: boolean;
    /**
     *  Sets the readonly value to input.
     */
    readonly: boolean;
    /**
     *  Sets the enable rtl value to input.
     */
    enableRtl: boolean;
    /**
     *  Sets the change event mapping function to input.
     */
    change: Function;
}