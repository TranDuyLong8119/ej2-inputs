import { Input, InputObject } from  '../../src/input/index';

let inputObj: InputObject;
let inputO = Input;
let element: HTMLInputElement;

element = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group-normal').appendChild(element);
Input.createInput({
    element: element,
    floatLabelType: "Never",
    properties: {
        placeholder: 'Never Floating Input'
    }
});

let element10: HTMLInputElement;
let inputObj10: InputObject;

element10 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group1-normal').appendChild(element10);
inputObj10 = Input.createInput({
    element: element10,
    floatLabelType: "Auto",
    properties: {
        placeholder: 'Auto Floating Input'
    }
});

let element101: HTMLInputElement;
let inputObj101: InputObject;

element101 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group2-normal').appendChild(element101);
inputObj101 = Input.createInput({
    element: element101,
    floatLabelType: "Always",
    properties: {
        placeholder: 'Always Floating Input'
    }
});

let element19: HTMLInputElement;
let inputObj19: InputObject;

element19 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group3-normal').appendChild(element19);
inputObj19 = Input.createInput({
            element: element19,
            properties:{
                placeholder:'Never Floating Input'
            }
          });
Input.appendSpan('e-input-group-icon e-input-down', inputObj19.container);

let element22: HTMLInputElement;
let inputObj22: InputObject;

element22 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group4-normal').appendChild(element22);
inputObj22 = Input.createInput({
            element: element22,
            floatLabelType: "Auto",
            properties: {
               placeholder:'Auto Floating Input'
              },
          });
Input.appendSpan('e-input-group-icon e-input-down', inputObj22.container);


let element11: HTMLInputElement;
let inputObj11: InputObject;

element11 = <HTMLInputElement>document.createElement('input');
document.getElementById('form-group5-normal').appendChild(element11);
inputObj11 = Input.createInput({
    element: element11,
    floatLabelType: "Always",
    properties: {
        placeholder: 'Always Float Input'
    }
});
Input.appendSpan('e-input-group-icon e-input-down', inputObj11.container);
