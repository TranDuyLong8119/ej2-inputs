import { ColorPicker, ColorPickerEventArgs } from './../../../src/color-picker/color-picker';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Flat Color Picker sample
 */
let colorPicker: ColorPicker = new ColorPicker(
    {
        mode: 'Picker',
        inline: true,
        modeSwitcher: false,
        showButtons: false,
        value: '#7E57C2',
        change: (args: ColorPickerEventArgs) => {
            document.body.style.backgroundColor = args.currentValue.hex;
        }
    },
    '#color-picker-flat');

/**
 * Flat Color Palette sample
 */
colorPicker = new ColorPicker(
    {
        mode: 'Palette',
        value: '#7E57C2',
        modeSwitcher: false,
        inline: true,
        showButtons: false,
        change: (args: ColorPickerEventArgs) => {
            document.body.style.backgroundColor = args.currentValue.hex;
        }
    },
    '#color-palette-flat');

document.getElementById('material').onclick = (e: Event) => {
    document.getElementById('theme').setAttribute('href', './../../../styles/color-picker/material.css');
};
document.getElementById('fabric').onclick = (e: Event) => {
    document.getElementById('theme').setAttribute('href', './../../../styles/color-picker/fabric.css');
};
document.getElementById('bootstrap').onclick = (e: Event) => {
    document.getElementById('theme').setAttribute('href', './../../../styles/color-picker/bootstrap.css');
};