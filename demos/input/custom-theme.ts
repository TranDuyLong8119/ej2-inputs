import { Input, InputObject } from  '../../src/input/index';

let inputObj: InputObject;
let inputO = Input;
let element: HTMLInputElement;

element = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group-normal').appendChild(element);
Input.createInput({
    element: element,
    properties: {
        placeholder: 'Default Input',
        showClearButton:true
    }
});

let element10: HTMLInputElement;
let inputObj10: InputObject;

element10 = <HTMLInputElement>document.createElement('input');
element10.value = 'ASDFG';
document.getElementById('form-group1-normal').appendChild(element10);
inputObj10 = Input.createInput({
    element: element10,
    floatLabelType: "Auto",
    properties: {
        placeholder: 'Floating Input',
        showClearButton:true,
    }
});

let element19: HTMLInputElement;
let inputObj19: InputObject;

element19 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group2-normal').appendChild(element19);
inputObj19 = Input.createInput({
            element: element19,
            properties:{
                showClearButton: true,
                placeholder:'Default Input'
            }
          });
Input.appendSpan('e-input-group-icon e-input-down', inputObj19.container);

let element22: HTMLInputElement;
let inputObj22: InputObject;

element22 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group3-normal').appendChild(element22);
inputObj22 = Input.createInput({
            element: element22,
            floatLabelType: "Auto",
            properties: {
               showClearButton: true,
               placeholder:'Floating Input '
              },
          });
 Input.appendSpan('e-input-group-icon e-input-down', inputObj22.container);


let element11: HTMLInputElement;
let inputObj11: InputObject;

element11 = <HTMLInputElement>document.createElement('input');
element11.value = '12345';
document.getElementById('form-group4-normal').appendChild(element11);
inputObj11 = Input.createInput({
    element: element11,
    floatLabelType: "Auto",
    properties: {
        placeholder: 'Disabled Float Input',
        enabled: false
    }
});
inputObj11.container.classList.add('e-disabled');

// Bigger Input

let inputObj1: InputObject;
let inputO1 = Input;
let element1: HTMLInputElement;

element1 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group-bigger').appendChild(element1);
inputObj1 = Input.createInput({
    element: element1,
    properties: {
        placeholder: 'Default Input',
        showClearButton:true
    }
});
inputObj1.container.classList.add('e-bigger');

let element101: HTMLInputElement;
let inputObj101: InputObject;

element101 = <HTMLInputElement>document.createElement('input');
element101.value = 'ASDFG';
document.getElementById('form-group1-bigger').appendChild(element101);
inputObj101 = Input.createInput({
    element: element101,
    floatLabelType: "Auto",
    properties: {
        placeholder: 'Floating Input',
        showClearButton:true,
    }
});
inputObj101.container.classList.add('e-bigger');

let element191: HTMLInputElement;
let inputObj191: InputObject;

element191 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group2-bigger').appendChild(element191);
inputObj191 = Input.createInput({
            element: element191,
            properties:{
                showClearButton: true,
                placeholder:'Default Input'
            }
          });
Input.appendSpan('e-input-group-icon e-input-down', inputObj191.container);
inputObj191.container.classList.add('e-bigger');

let element221: HTMLInputElement;
let inputObj221: InputObject;

element221 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group3-bigger').appendChild(element221);
inputObj221 = Input.createInput({
            element: element221,
            floatLabelType: "Auto",
            properties: {
               showClearButton: true,
               placeholder:'Floating Input '
              },
          });
 Input.appendSpan('e-input-group-icon e-input-down', inputObj221.container);
 inputObj221.container.classList.add('e-bigger');


let element111: HTMLInputElement;
let inputObj111: InputObject;

element111 = <HTMLInputElement>document.createElement('input');
element111.value = '12345';
document.getElementById('form-group4-bigger').appendChild(element111);
inputObj111 = Input.createInput({
    element: element111,
    floatLabelType: "Auto",
    properties: {
        placeholder: 'Disabled Float Input',
        enabled: false
    }
});
inputObj111.container.classList.add('e-bigger');
inputObj111.container.classList.add('e-disabled');

// Small input

let inputObj2: InputObject;
let inputO2 = Input;
let element2: HTMLInputElement;

element2 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group-small').appendChild(element2);
inputObj2 = Input.createInput({
    element: element2,
    properties: {
        placeholder: 'Default Input',
        showClearButton:true
    }
});
inputObj2.container.classList.add('e-small');

let element102: HTMLInputElement;
let inputObj102: InputObject;

element102 = <HTMLInputElement>document.createElement('input');
element102.value = 'ASDFG';
document.getElementById('form-group1-small').appendChild(element102);
inputObj102 = Input.createInput({
    element: element102,
    floatLabelType: "Auto",
    properties: {
        placeholder: 'Floating Input',
        showClearButton:true,
    }
});
inputObj102.container.classList.add('e-small');

let element192: HTMLInputElement;
let inputObj192: InputObject;

element192 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group2-small').appendChild(element192);
inputObj192 = Input.createInput({
            element: element192,
            properties:{
                showClearButton: true,
                placeholder:'Default Input'
            }
          });
Input.appendSpan('e-input-group-icon e-input-down', inputObj192.container);
inputObj192.container.classList.add('e-small');

let element222: HTMLInputElement;
let inputObj222: InputObject;

element222 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group3-small').appendChild(element222);
inputObj222 = Input.createInput({
            element: element222,
            floatLabelType: "Auto",
            properties: {
               showClearButton: true,
               placeholder:'Floating Input'
              },
          });
 Input.appendSpan('e-input-group-icon e-input-down', inputObj222.container);
 inputObj222.container.classList.add('e-small');


let element112: HTMLInputElement;
let inputObj112: InputObject;

element112 = <HTMLInputElement>document.createElement('input');
element112.value = '12345';
document.getElementById('form-group4-small').appendChild(element112);
inputObj112 = Input.createInput({
    element: element112,
    floatLabelType: "Auto",
    properties: {
        placeholder: 'Disabled Float Input',
        enabled: false
    }
});
inputObj112.container.classList.add('e-small');
inputObj112.container.classList.add('e-disabled');

// Small bigger

let inputObj3: InputObject;
let inputO3 = Input;
let element3: HTMLInputElement;

element3 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group-small-bigger').appendChild(element3);
inputObj3 = Input.createInput({
    element: element3,
    properties: {
        placeholder: 'Default Input',
        showClearButton:true
    }
});
inputObj3.container.classList.add('e-small');
inputObj3.container.classList.add('e-bigger');

let element103: HTMLInputElement;
let inputObj103: InputObject;

element103 = <HTMLInputElement>document.createElement('input');
element103.value = 'ASDFG';
document.getElementById('form-group1-small-bigger').appendChild(element103);
inputObj103 = Input.createInput({
    element: element103,
    floatLabelType: "Auto",
    properties: {
        placeholder: 'Floating Input',
        showClearButton:true,
    }
});
inputObj103.container.classList.add('e-small');
inputObj103.container.classList.add('e-bigger');

let element193: HTMLInputElement;
let inputObj193: InputObject;

element193 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group2-small-bigger').appendChild(element193);
inputObj193 = Input.createInput({
            element: element193,
            properties:{
                showClearButton: true,
                placeholder:'Default Input'
            }
          });
Input.appendSpan('e-input-group-icon e-input-down', inputObj193.container);
inputObj193.container.classList.add('e-small');
inputObj193.container.classList.add('e-bigger');

let element223: HTMLInputElement;
let inputObj223: InputObject;

element223 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group3-small-bigger').appendChild(element223);
inputObj223 = Input.createInput({
            element: element223,
            floatLabelType: "Auto",
            properties: {
               showClearButton: true,
               placeholder:'Floating Input '
              },
          });
 Input.appendSpan('e-input-group-icon e-input-down', inputObj223.container);
 inputObj223.container.classList.add('e-small');
 inputObj223.container.classList.add('e-bigger');


let element113: HTMLInputElement;
let inputObj113: InputObject;

element113 = <HTMLInputElement>document.createElement('input');
element113.value = '12345';
document.getElementById('form-group4-small-bigger').appendChild(element113);
inputObj113 = Input.createInput({
    element: element113,
    floatLabelType: "Auto",
    properties: {
        placeholder: 'Disabled Float Input',
        enabled: false
    }
});
inputObj113.container.classList.add('e-small');
inputObj113.container.classList.add('e-bigger');
inputObj113.container.classList.add('e-disabled');