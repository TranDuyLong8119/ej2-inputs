import{NumericTextBox} from "./numerictextbox";

import{ FloatLabelType} from "../input/input";

export interface NumericTextBoxHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): NumericTextBox
	/**
	* Specifies the callback function for change event and it triggers after the textbox value is changed.
	*/
	change(value:Function): BuilderProperties;
	/**
	* Specifies the callback function for create event and it triggers after the numeric textbox control is created successfully.
	*/
	created(value:Function): BuilderProperties;
	/**
	* Specifies the callback function for destroy event and it triggers when the numeric textbox control is destroyed successfully.
	*/
	destroyed(value:Function): BuilderProperties;
	/**
	* Specifies the root CSS class name to be added in the text boxes which allow you to customize the appearance.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Specifies the currency code to use in currency formatting.
Possible values are the ISO 4217 currency codes, such as 'USD' for the US dollar,'EUR' for the euro.
	*/
	currency(value:string): BuilderProperties;
	/**
	* Specifies the number precision applied to the textbox value when the numeric textbox is focused.
	*/
	decimals(value:number): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Specifies the right to left direction to numeric textbox.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies a value that indicates whether the numeric textbox control is enabled or not.
	*/
	enabled(value:boolean): BuilderProperties;
	/**
	* Specifies a value that indicates floating label functionality.
Specifies how the floating label works.
Possible values are:
* Never - Never floats the label in the numeric textbox when the placeholder is available.
* Always -  The floating label will always float above the numeric textbox.
* Auto - The floating label will float above the numeric textbox after focusing or entering a value in the numeric textbox.
	*/
	floatLabelType(value:FloatLabelType): BuilderProperties;
	/**
	* Specifies the number format that indicates the display format for the value of the numeric textbox.
	*/
	format(value:string): BuilderProperties;
	/**
	* Specifies the height of the numeric textbox.
	*/
	height(value:number|string): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default Global culture is 'en-US'
	*/
	locale(value:string): BuilderProperties;
	/**
	* Specifies a maximum value that is allowed a user can enter.
	*/
	max(value:number): BuilderProperties;
	/**
	* Specifies a minimum value that is allowed a user can enter.
	*/
	min(value:number): BuilderProperties;
	/**
	* The hint displayed by the numeric textbox when it is empty.
	*/
	placeholder(value:string): BuilderProperties;
	/**
	* Toggles the readonly state of the numeric textbox. When the numeric is readonly, it does not allow user interactions.
	*/
	readonly(value:boolean): BuilderProperties;
	/**
	* Specifies whether the up and down spin buttons should be displayed in numeric textbox.
	*/
	showSpinButton(value:boolean): BuilderProperties;
	/**
	* Specifies the incremental or decremental step size for the numeric textbox.
	*/
	step(value:number): BuilderProperties;
	/**
	* Specifies a value that indicates whether the numeric textbox control allows the value for the specified range.
If it is false, it allows the value outside of the range, but it highlights the textbox with error class.
Otherwise it is internally changed to the correct appropriate value.
	*/
	strictMode(value:boolean): BuilderProperties;
	/**
	* Specifies whether the decimals length should be restricted during typing.
	*/
	validateDecimalOnType(value:boolean): BuilderProperties;
	/**
	* Specifies the value of the numeric textbox.
	*/
	value(value:number): BuilderProperties;
	/**
	* Specifies the width of the numeric textbox.
	*/
	width(value:number|string): BuilderProperties;
}