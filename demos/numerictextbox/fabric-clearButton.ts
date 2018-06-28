import { NumericTextBox } from '../../src/numerictextbox/numerictextbox';
/**
 * Default NumericTextBox sample
 */
let numeric: NumericTextBox = new NumericTextBox({
    value: 10,
    floatLabelType: "Auto",
    showClearButton: true
});
numeric.appendTo('#numeric');


