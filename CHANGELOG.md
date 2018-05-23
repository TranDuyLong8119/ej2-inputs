# Changelog

## [Unreleased]

## 16.1.45 (2018-05-23)

### Input

#### Bug Fixes

- Added `Focus` and `Blur` event arguments.

## 16.1.40 (2018-05-08)

### MaskedTextBox

#### Bug Fixes

- While copying a text and hold the “Ctrl + v” on the MaskedTextBox with number mask, value is not updating properly
  along with script error issue has been fixed.

## 16.1.38 (2018-05-02)

### Uploader

#### Bug Fixes

- Provided option to customize request header on trigger `uploading` and `removing` events.

- Provided option to add additional data in `removing` event.

### NumericTextBox

#### Bug Fixes

- Now native events triggered properly in Angular NumericTextBox component.

## 16.1.37 (2018-04-24)

### NumericTextBox

#### Features

- Provided clear button option in NumericTextBox.

#### Bug Fixes

- NumericTextBox is now aligned properly in inline element when `showSpinButton` property disabled.

## 16.1.35 (2018-04-17)

### MaskedTextBox

#### Bug Fixes

- While dynamically changing the MaskedTextBox value as null, value not updated properly issue is fixed.

### Uploader

#### Bug Fixes

- The script issue with removing uploaded files has been fixed.

## 16.1.34 (2018-04-10)

### FormValidator

#### Bug Fixes

- Resolved multiple form validation issue.

## 16.1.29 (2018-03-13)

### Input

#### Features

- The clear button can be enabled/disabled dynamically through `setClearButton` method.

## 16.1.28-preview (2018-03-09)

### NumericTextBox

#### Bug Fixes

- In NumericTextBox, unwanted “change” events has been prevented from triggering.

### Uploader

#### Bug Fixes

- The issue with rendering Uploader component in internet explorer browser has been fixed.

### Input

#### Bug Fixes

- Theme compatibility issue resolved for CSS Input component.

## 16.1.24 (2018-02-22)

### Uploader

    The Uploader component is useful to upload images, documents, and other files to server.
The component is extended version of HTML5 upload with multiple file selection, auto upload,
drag and drop, progress bar, preload files, and validation.

- The available key features are

- **Asynchronous Upload** - Allows you to upload the files with asynchronous way.

- **Drag and Drop** - The files can be dragged from file explorer, and dropping into the drop area.

- **Form Supports** - The selected or dropped files are received as a collection in a form action when the form is submitted.

- **File Validation** - Validate the files based on file's size and type.

- **Template** - Allows you to customize the default appearance of `Uploader`.

- **Accessibility** - provides built-in accessibility support which helps to access all the  `Uploader` features through keyboard, on-screen readers, or other assistive technology devices.

### TextBox

#### Bug Fixes

- Fixed the input alignment issue in the window 8.1 edge browser.

- Removed the additional spaces for error messages on the input.

### Slider

The Slider component allows the user to select a value or range of values in-between the min and max range, by dragging the handle over the slider bar.

There are three types of Slider:

- `Default` - Shows a default slider to select a single value.
- `MinRange` - Displays fill color from the start value to the current selected value.
- `Range` - Select a range of values.

The available key features are

- **Types**: Provided three types of Slider.

- **Orientation**: Displays the Slider in horizontal or vertical direction.

- **Buttons**: Provided built-in support to render the buttons in both edges of the Slider.

- **Tooltip**: Displays a tooltip to show the currently selected value.

- **Ticks**: Displays a scale with small and big ticks.

- **Format**: Customize the slider values into various format.

- **Accessibility**: Built-in compliance with the [`WAI-ARIA`](http://www.w3.org/WAI/PF/aria-practices/) specifications.

- **Keyboard Interaction**: The Slider can be intractable through the keyboard.

## 15.4.29-preview (2018-02-07)

### MaskedTextBox

#### Bug Fixes

- While set floatLabelType property as "Never", the placeholder not shown issue has been fixed

- While set floatLabelType property as "Auto", the value becomes "undefined" at two-way binding issue has been fixed

- While setting escape sequence in mask format, value is not updated properly issue has been fixed

- Cursor is not positioned properly while focusing the MaskedTextBox issue has been fixed

## 15.4.24-preview (2018-01-10)

### MaskedTextBox

#### Bug Fixes

- Value not maintained properly in the MaskedTextBox two-way binding

## 15.4.23-preview (2017-12-27)

### Common

#### New Features

- Added typing file for ES5 global scripts (dist/global/index.d.ts)

#### Breaking Changes

- Modified the module bundle file name for ES6 bundling

## 15.4.21-preview (2017-12-08)

### FormValidator

#### Bug Fixes

- **IE11** - Recursive call on form reset.

### TextBox

#### Bug Fixes

- Height mismatch between input and input with icon issue has fixed.

## 15.4.20-preview (2017-12-01)

### Common

#### New Features

- Upgraded TypeScript version to 2.6.2.

## 15.4.17-preview (2017-11-13)

### TextBox

TextBox is an input element that allows to get input from the user. It allows the user to edit or display the text value.

- **Groups** - Supports to group the icon element with the input

- **Floating Label** - Added option to float label always, float label on focus, and disable floating support in the input element.

- **Clear Button** - Provided option to show/hide clear button to reset the value in input element.

- **Validation States** - Provided option to indicate success, error, and warning states.

### NumericTextBox

NumericTextBox is used to get the number inputs from the user. The input values can be incremented or decremented by a predefined step value. The available key features are

- **Range Validation** - allows to set the minimum and maximum range of values in the NumericTextBox.

- **Number Formats** - supports the number display formatting with MSDN standard and custom number formats.

- **Precision Of Numbers** - allows to restrict the number precision when enters the value.

- **Keyboard Interaction** - allows users to interact with the NumericTextBox using the keyboard.

- **Accessibility** - provides built-in accessibility support which helps to access all the NumericTextBox component features through keyboard, on-screen readers or other assistive technology devices.

- **Internationalization** - library provides support for formatting and parsing number using the official Unicode CLDR JSON data.

- **Localization** - Supports to localize spin up and down buttons title for the tooltip to different cultures.

### MaskedTextBox

MaskedTextBox allows the user to enter the valid input only based on the provided mask. The available key features are

- **Custom Characters** - allows you to use your own characters as the mask elements.

- **Regular Expression** - can be used as a mask element for each character of the MaskedTextBox.

- **Accessibility** - provides built-in accessibility support which helps to access all the MaskedTextBox component features through keyboard, on-screen readers, or other assistive technology devices.
