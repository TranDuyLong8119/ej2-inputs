import { Component, EventHandler, Property, Event, EmitType, Complex } from '@syncfusion/ej2-base';import { L10n, Internationalization, NumberFormatOptions } from '@syncfusion/ej2-base';import { NotifyPropertyChanges, INotifyPropertyChanged, ChildProperty } from '@syncfusion/ej2-base';import { createElement, attributes, addClass, removeClass, setStyleAttribute, detach } from '@syncfusion/ej2-base';import { isNullOrUndefined, formatUnit, Browser } from '@syncfusion/ej2-base';import { Tooltip, Position, TooltipEventArgs } from '@syncfusion/ej2-popups';
import {Placement,TooltipPlacement,TooltipShowOn,SliderType,SliderOrientation,SliderTooltipEventArgs} from "./slider";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class TicksData
 */
export interface TicksDataModel {

    /**
     * It is used to denote the position of the ticks in the Slider. The available options are:
     *
     *  * before - Ticks are placed in the top of the horizontal slider bar or at the left of the vertical slider bar.
     *  * after - Ticks are placed in the bottom of the horizontal slider bar or at the right of the vertical slider bar.
     *  * both - Ticks are placed on the both side of the Slider bar.
     *  * none - Ticks are not shown.
     *
     * @default : 'None'
     */
    placement?: Placement;

    /**
     * It is used to denote the distance between two major (large) ticks from the scale of the Slider.
     * @default : 10
     */
    largeStep?: number;

    /**
     * It is used to denote the distance between two minor (small) ticks from the scale of the Slider.
     * @default : 1
     */
    smallStep?: number;

    /**
     * We can show or hide the small ticks in the Slider, which will be appeared in between the largeTicks.
     * @default : false
     */
    showSmallTicks?: boolean;

    /**
     * It is used to customize the Slider scale value to the desired format using Internationalization or events(custom formatting).
     */
    format?: string;

}

/**
 * Interface for a class TooltipData
 */
export interface TooltipDataModel {

    /**
     * It is used to customize the Tooltip which accepts custom CSS class names that define
     *  specific user-defined styles and themes to be applied on the Tooltip element.
     * @default ''
     */
    cssClass?: string;

    /**
     * It is used to denote the position for the tooltip element in the Slider. The available options are:
     *
     *  * Before - Tooltip is shown in the top of the horizontal slider bar or at the left of the vertical slider bar.
     *  * After - Tooltip is shown in the bottom of the horizontal slider bar or at the right of the vertical slider bar.
     */
    placement?: TooltipPlacement;

    /**
     * It is used to determine the device mode to show the Tooltip.
     * If it is in desktop, it will show the Tooltip content when hovering on the target element.
     * If it is in touch device. It will show the Tooltip content when tap and holding on the target element.
     * @default 'Auto'
     */
    showOn?: TooltipShowOn;

    /**
     * It is used to show or hide the Tooltip of Slider Component.
     */
    isVisible?: boolean;

    /**
     * It is used to customize the Tooltip content to the desired format
     *  using internationalization or events (custom formatting).
     */
    format?: string;

}

/**
 * Interface for a class Slider
 */
export interface SliderModel extends ComponentModel{

    /**
     * It is used to denote the current value of the Slider.
     * The value should be specified in array of number when render Slider type as range.
     * @default null
     */
    value?: number | number[];

    /**
     * It is used to denote the step value of Slider component which is the amount of Slider value change
     *  when increase / decrease button is clicked or press arrow keys or drag the thumb.
     *  Refer the documentation
     *  {@link http://ej2.syncfusion.com/documentation/slider/ticks.html?lang=typescript#step here}
     *  to know more about this property with demo.
     * @default 1
     */
    step?: number;

    /**
     * It sets the minimum value of Slider Component
     * @default 0
     */
    min?: number;

    /**
     * It sets the maximum value of Slider Component
     * @default 100
     */
    max?: number;

    /**
     * It is used to render the Slider component in read-only mode.
     * The slider rendered with user defined values and can’t be interacted with user actions.
     * @default false
     */
    readOnly?: boolean;

    /**
     * It is used to denote the type of the Slider. The available options are:
     *
     *  * default - Used to select a single value in the Slider.
     *  * minRange - Used to select a single value in the Slider. It displays shadow from the start value to the current value.
     *  * range - Used to select a range of values in the Slider. It displays shadow in-between the selection range.
     */
    type?: SliderType;

    /**
     * It is used to render the slider ticks options such as placement and step values.
     * Refer the documentation
     *  {@link http://ej2.syncfusion.com/documentation/slider/ticks.html?lang=typescript here}
     *  to know more about this property with demo.
     * @default { placement: 'before' }
     */
    ticks?: TicksDataModel;

    /**
     * It is used to enable or disable the slider.
     * @default true
     */
    enabled?: boolean;

    /**
     * It is used to render the Slider component from right to left direction.
     * @default false
     */
    enableRtl?: boolean;

    /**
     * It is used to denote the slider tooltip and it's position.
     * @default { placement: 'Before', isVisible: false, showOn: 'Focus', format: null }
     */
    tooltip?: TooltipDataModel;

    /**
     * It is used to show or hide the increase and decrease button of Slider Component,
     *  which is used to change the slider value.
     * Refer the documentation
     *  {@link http://ej2.syncfusion.com/documentation/slider/getting-started.html?lang=typescript#buttons here}
     *  to know more about this property with demo.
     * @default false
     */
    showButtons?: boolean;

    /**
     * It is used to enable or disable the Slider handle moving animation.
     * @default true
     */
    enableAnimation?: boolean;

    /**
     * It is used to render Slider in either horizontal or vertical orientation.
     *  Refer the documentation
     *  {@link http://ej2.syncfusion.com/documentation/slider/getting-started.html?lang=typescript#orientation here}
     *  to know more about this property with demo.
     * @default 'Horizontal'
     */
    orientation?: SliderOrientation;

    /**
     * This property sets the CSS classes to root element of the Slider
     *  which helps to customize the UI styles.
     * @default ''
     */
    cssClass?: string;

    /**
     * We can trigger created event when the Slider is created.
     * @event
     */
    created?: EmitType<Object>;

    /**
     * We can trigger change event whenever Slider value is changed.
     *  In other term, this event will be triggered while drag the slider thumb.
     * @event
     */
    change?: EmitType<Object>;

    /**
     * We can trigger changed event when Slider component action is completed while we change the Slider value.
     *  In other term, this event will be triggered, while drag the slider thumb completed.
     * @event
     */
    changed?: EmitType<Object>;

    /**
     * We can trigger renderingTicks event when the ticks rendered on Slider,
     *  which is used to customize the ticks labels dynamically.
     * @event
     */
    renderingTicks?: EmitType<Object>;

    /**
     * We can trigger renderedTicks event when the ticks are rendered on the Slider.
     * @event
     */
    renderedTicks?: EmitType<Object>;

    /**
     * We can trigger tooltipChange event when we change the Sider tooltip value.
     * @event
     */
    tooltipChange?: EmitType<SliderTooltipEventArgs>;

}