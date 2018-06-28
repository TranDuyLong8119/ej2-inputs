import { ColorPicker, ColorPickerEventArgs, BeforeOpenCloseEventArgs, OpenEventArgs, ModeSwitchEventArgs } from './../../../src/color-picker/color-picker';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Default ColorPicker sample
 */
let colorPicker: ColorPicker = new ColorPicker({}, '#picker');

document.getElementById('material').onclick = (e: Event) => {
    document.getElementById('theme').setAttribute('href', './../../../styles/color-picker/material.css');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
};
document.getElementById('fabric').onclick = (e: Event) => {
    document.getElementById('theme').setAttribute('href', './../../../styles/color-picker/fabric.css');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
};
document.getElementById('bootstrap').onclick = (e: Event) => {
    document.getElementById('theme').setAttribute('href', './../../../styles/color-picker/bootstrap.css');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
};
document.getElementById('highcontrast').onclick = (e: Event) => {
    document.getElementById('theme').setAttribute('href', './../../../styles/color-picker/highcontrast.css');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
};