/**
 * Input and Floating Input through Utility
 */
import { createElement } from '../../node_modules/@syncfusion/ej2-base';
import { Input, InputObject } from  '../../src/input/index';

let inputObj: InputObject;
let element: HTMLInputElement;

let inputIcon = document.querySelectorAll('.e-input-group-icon');
for (let i = 0; i < inputIcon.length; i++) {
    if(!(inputIcon[i].classList.contains('e-input-calc'))){
    inputIcon[i].addEventListener('mousedown', function () {
        this.classList.add('e-input-btn-ripple');
    });
    inputIcon[i].addEventListener('mouseup', function () {
        let element = this;
        setTimeout(function () {
            element.classList.remove('e-input-btn-ripple');
        }, 500);
    });
}
}
