import { Component, EventHandler, Property, Event, Browser, CreateBuilder, L10n, EmitType } from '@syncfusion/ej2-base';import { NotifyPropertyChanges, INotifyPropertyChanged, BaseEventArgs } from '@syncfusion/ej2-base';import { createElement, attributes, addClass, removeClass, setStyleAttribute, detach } from '@syncfusion/ej2-base/dom';import { isNullOrUndefined, isUndefined, getValue, formatUnit, setValue, merge} from '@syncfusion/ej2-base/util';import { Internationalization , NumberFormatOptions, getNumericObject} from '@syncfusion/ej2-base';import { NumericTextBoxHelper } from './numerictextbox-builder';import { Input, InputObject } from '../input/input';
import {ChangeEventArgs} from "./numerictextbox";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class NumericTextBox
 */
export interface NumericTextBoxModel extends ComponentModel{

    /**
     * Specifies the root CSS class name to be added in the text boxes which allow you to customize the appearance.     * @default null     */    cssClass?: string;

    /**
     * Specifies the value of the numeric textbox.     * @default null     */    value?: number;

    /**
     * Specifies a minimum value that is allowed a user can enter.     * @default null     */    min?: number;

    /**
     * Specifies a maximum value that is allowed a user can enter.     * @default null     */    max?: number;

    /**
     * Specifies the incremental or decremental step size for the numeric textbox.     * @default 1     */    step?: number;

    /**
     * Specifies the width of the numeric textbox.     * @default null     */    width?: number | string;

    /**
     * Specifies the height of the numeric textbox.     * @default null     */    height?: number | string;

    /**
     * The hint displayed by the numeric textbox when it is empty.     * @default null     */    placeholder?: string;

    /**
     * Specifies whether the up and down spin buttons should be displayed in numeric textbox.     * @default true     */    showSpinButton?: boolean;

    /**
     * Toggles the readonly state of the numeric textbox. When the numeric is readonly, it does not allow user interactions.     * @default false     */    readonly?: boolean;

    /**
     * Specifies a value that indicates whether the numeric textbox control is enabled or not.     * @default true     */    enabled?: boolean;

    /**
     * Specifies the right to left direction to numeric textbox.     * @default false     */    enableRtl?: boolean;

    /**
     * Specifies the number format that indicates the display format for the value of the numeric textbox.     * @default 'n2'     */    format?: string;

    /**
     * Specifies the number precision applied to the textbox value when the numeric textbox is focused.     * @default null     */    decimals?: number;

    /**
     * Specifies the currency code to use in currency formatting.     * Possible values are the ISO 4217 currency codes, such as 'USD' for the US dollar,'EUR' for the euro.     * @default null     */    currency?: string;

    /**
     * Specifies a value that indicates whether the numeric textbox control allows the value for the specified range.     * If it is false, it allows the value outside of the range, but it highlights the textbox with error class.     * Otherwise it is internally changed to the correct appropriate value.     * @default true     */    strictMode?: boolean;

    /**
     * Specifies whether the decimals length should be restricted during typing.     * @default false     */    validateDecimalOnType?: boolean;

    /**
     * Specifies the callback function for create event and it triggers after the numeric textbox control is created successfully.     * @event     */    created?: EmitType<Object>;

    /**
     * Specifies the callback function for destroy event and it triggers when the numeric textbox control is destroyed successfully.     * @event     */    destroyed?: EmitType<Object>;

    /**
     * Specifies the callback function for change event and it triggers after the textbox value is changed.     * @event     */    change?: EmitType<ChangeEventArgs>;

}