import { Component, Property, Event, EmitType, EventHandler, classList, L10n, compile, isNullOrUndefined } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, INotifyPropertyChanged, createElement, detach, append, Animation } from '@syncfusion/ej2-base';
import { addClass, removeClass, KeyboardEvents, KeyboardEventArgs, setValue, getValue, ChildProperty } from '@syncfusion/ej2-base';
import { Collection, Complex } from '@syncfusion/ej2-base';
import { UploaderModel, AsyncSettingsModel, ButtonsPropsModel, FilesPropModel } from './uploader-model';

const ROOT: string =  'e-uploader';
const CONTROL_WRAPPER: string = 'e-upload';
const INPUT_WRAPPER: string = 'e-file-select';
const DROP_AREA: string = 'e-file-drop';
const DROP_WRAPPER: string = 'e-file-select-wrap';
const LIST_PARENT: string = 'e-upload-files';
const FILE: string = 'e-upload-file-list';
const STATUS: string = 'e-file-status';
const ACTION_BUTTONS: string = 'e-upload-actions';
const UPLOAD_BUTTONS: string = 'e-file-upload-btn e-css e-btn e-primary';
const CLEAR_BUTTONS: string = 'e-file-clear-btn e-css e-btn e-flat';
const FILE_NAME: string = 'e-file-name';
const FILE_TYPE: string = 'e-file-type';
const FILE_SIZE: string = 'e-file-size';
const CLEAR_ICON: string = 'e-file-remove-btn';
const REMOVE_ICON: string = 'e-file-delete-btn';
const DRAG_HOVER: string = 'e-upload-drag-hover';
const PROGRESS_WRAPPER: string = 'e-upload-progress-wrap';
const PROGRESSBAR: string = 'e-upload-progress-bar';
const PROGRESSBAR_TEXT: string = 'e-progress-bar-text';
const UPLOAD_INPROGRESS: string = 'e-upload-progress';
const UPLOAD_SUCCESS: string = 'e-upload-success';
const UPLOAD_FAILED: string = 'e-upload-fails';
const TEXT_CONTAINER: string = 'e-file-container';
const VALIDATION_FAILS: string = 'e-validation-fails';
const RTL: string = 'e-rtl';
const DISABLED : string = 'e-disabled';
const RTL_CONTAINER : string = 'e-rtl-container';
const ICON_FOCUSED : string = 'e-clear-icon-focus';
const PROGRESS_INNER_WRAPPER: string = 'e-progress-inner-wrap';

export class FilesProp extends ChildProperty<FilesProp> {
    /**
     * Specifies the name of the file
     * @default ''
     */
    @Property('')
    public name: string;
    /**
     * Specifies the size of the file
     * @default null
     */
    @Property(null)
    public size: number;
    /**
     * Specifies the type of the file
     * @default ''
     */
    @Property('')
    public type: string;
}

export class ButtonsProps extends ChildProperty<ButtonsProps> {
    /**
     * Specifies the text or html content to browse button
     * @default 'Browse'
     */
    @Property('Browse')
    public browse: string | HTMLElement;
    /**
     * Specifies the text or html content to upload button
     * @default 'Upload'
     */
    @Property('Upload')
    public upload: string | HTMLElement;
    /**
     * Specifies the text or html content to clear button
     * @default 'Clear'
     */
    @Property('Clear')
    public clear: string | HTMLElement;
}

export class AsyncSettings  extends ChildProperty<AsyncSettings> {
    /**
     * Specifies the URL of save action that will receive the upload files and save in the server.
     * The save action type must be POST request and define the argument as same input name used to render the component.
     * The upload operations could not perform without this property.
     */
    @Property('')
    public saveUrl: string;
    /**
     * Specifies the URL of remove action that receives the file information and handle the remove operation in server.
     * The remove action type must be POST request and define “removeFileNames” attribute to get file information that will be removed.
     * This property is optional. 
     */
    @Property('')
    public removeUrl: string;
}

export interface FileInfo {
    name: string;
    rawFile: string | Blob;
    size: number;
    status: string;
    type: string;
    validationMessages: ValidationMessages;
    statusCode: string;
}

export interface ValidationMessages {
    minSize? : string;
    maxSize? : string;
}

export interface SelectedEventArgs {
    cancel: boolean;
    filesData: FileInfo[];
    isModified: boolean;
    modifiedFilesData: FileInfo[];
    progressInterval: string;
}

export interface RemovingEventArgs {
    cancel: boolean;
    filesData: FileInfo[];
}

export interface ClearingEventArgs {
    cancel: boolean;
    filesData: FileInfo[];
}

export interface UploadingEventArgs {
    fileData: FileInfo;
    customFormData: { [key: string]: Object }[];
    cancel: boolean;
}

interface InitialAttr {
    accept: string;
    multiple: boolean;
    disabled: boolean;
}

/**
 * The uploader component allows to upload images, documents, and other files from local to server.
 * ```html
 * <input type='file' name='images[]' id='upload'/>
 * ```
 * ```typescript
 * <script>
 *   var uploadObj = new Uploader();
 *   uploadObj.appendTo('#upload');
 * </script>
 * ```
 */

@NotifyPropertyChanges
export class Uploader extends Component<HTMLInputElement> implements INotifyPropertyChanged {
    private initialAttr: InitialAttr = { accept: null, multiple: false, disabled: false };
    private uploadWrapper: HTMLElement;
    private browseButton: HTMLElement;
    private listParent: HTMLElement;
    private cloneElement: HTMLElement;
    private fileList: HTMLElement[] = [];
    private actionButtons: HTMLElement;
    private uploadButton: HTMLElement;
    private clearButton: HTMLElement;
    private dropAreaWrapper: HTMLElement;
    private filesData: FileInfo[] = [];
    private uploadedFilesData: FileInfo[] = [];
    private dropZoneElement: HTMLElement;
    private currentStatus : string;
    private l10n: L10n;
    private preLocaleObj: { [key: string]: Object };
    private uploadTemplateFn: Function;
    private keyboardModule: KeyboardEvents;
    private progressInterval: string;
    private progressAnimation: Animation;
    private isForm: boolean = false;
    private keyConfigs: { [key: string]: string };
    private localeText: { [key: string]: Object };
    /**
     * Configures the save and remove URL to perform the upload operations in the server asynchronously.
     * @default { saveUrl: '', removeUrl: '' }
     */
    @Complex<AsyncSettingsModel>({ saveUrl: '', removeUrl: '' }, AsyncSettings)
    public asyncSettings: AsyncSettingsModel;

    /**
     * When this property is enabled, the uploader component elements are aligned from right-to-left direction to support locales.
     * @default false
     */
    @Property(false)
    public enableRtl: boolean;

    /**
     * Specifies Boolean value that indicates whether the component is enabled or disabled.
     * The uploader component does not allow to interact when this property is disabled.
     * @default true
     */
    @Property(true)
    public enabled: boolean;

    /**
     * Specifies the HTML string that used to customize the content of each file in the list.
     * @default null
     */
    @Property(null)
    public template: string;

    /**
     * Specifies a Boolean value that indicates whether the multiple files can be browsed or
     * dropped simultaneously in the uploader component.
     * @default true
     */
    @Property(true)
    public multiple: boolean;

    /**
     * By default, the uploader component initiates automatic upload when the files are added in upload queue.
     * If you want to manipulate the files before uploading to server, disable the autoUpload property.
     * The buttons “upload” and “clear” will be hided from file list when autoUpload property is true.
     * @default true
     */
    @Property(true)
    public autoUpload: boolean;

    /**
     * You can customize the default text of “browse, clear, and upload” buttons with plain text or HTML elements.
     * The buttons’ text can be customized from localization also. If you configured both locale and buttons property,
     * the uploader component considers the buttons property value.
     * @default { browse : 'Browse', clear: 'Clear', upload: 'Upload' }
     */
    @Complex<ButtonsPropsModel>({}, ButtonsProps)
    public buttons: ButtonsPropsModel;

    /**
     * Specifies the extensions of the file types allowed in the uploader component and pass the extensions
     * with comma separators. For example,
     * if you want to upload specific image files,  pass allowedExtensions as “.jpg,.png”.
     * @default ''
     */
    @Property('')
    public allowedExtensions: string;

    /**
     * Specifies the minimum file size to be uploaded in bytes.
     * The property used to make sure that you cannot upload empty files and small files.
     * @default 0
     */
    @Property(0)
    public minFileSize: number;

    /**
     * Specifies the maximum allowed file size to be uploaded in bytes.
     * The property used to make sure that you cannot upload too large files.
     * @default 30000000
     */
    @Property(30000000)
    public maxFileSize: number;

    /**
     * Specifies the drop target to handle the drag-and-drop upload.
     * By default, the component creates wrapper around file input that will act as drop target.
     * @default null
     */
    @Property(null)
    public dropArea: string | HTMLElement;

    /**
     * Specifies the list of files that will be preloaded on rendering of uploader component.
     * The property used to view and remove the uploaded files from server. By default, the files are configured with
     * uploaded successfully state. The following properties are mandatory to configure the preload files:
     * * Name
     * * Size
     * * Type
     * ```html
     * <input type="file" id="fileupload"/>
     * ```
     * ```typescript
     *   let preloadFiles = [{
     *      { name: 'Nature', size: 500000, type: '.png' },
     *      { name: 'TypeScript Succintly', size: 12000, type: '.pdf' },
     *      { name: 'ASP.NET Webhooks', size: 500000, type: '.docx' }
     *   }]
     *   let uploadObj: Uploader = new Uploader({
     *      files: preloadFiles
     *   });
     *   uploadObj.appendTo("#fileupload");
     * ```
     * @default { name: '', size: null, type: '' }
     */
    @Collection<FilesPropModel>([{}], FilesProp)
    public files: FilesPropModel[];

    /**
     * Specifies a Boolean value that indicates whether the default file list can be rendered.
     * The property used to prevent default file list and design own template for file list.
     * @default true
     */
    @Property(true)
    public showFileList: boolean;

    /**
     * Triggers after selecting or dropping the files by adding the files in upload queue.
     * @event
     */
    @Event()
    public selected: EmitType<SelectedEventArgs>;

    /**
     * Triggers when the upload process gets started. This event is used to add additional parameter with upload request.
     * @event
     */
    @Event()
    public uploading: EmitType<Object>;

    /**
     * Triggers when the AJAX request gets success on uploading files or removing files.
     * @event
     */
    @Event()
    public success: EmitType<Object>;

    /**
     * Triggers when the AJAX request fails on uploading or removing files.
     * @event
     */
    @Event()
    public failure: EmitType<Object>;

    /**
     * Triggers on removing the uploaded file. The event used to get confirm before removing the file from server.
     * @event
     */
    @Event()
    public removing: EmitType<RemovingEventArgs>;

    /**
     * Triggers before clearing the items in file list when clicking “clear”.
     * @event
     */
    @Event()
    public clearing: EmitType<ClearingEventArgs>;

    /**
     * Triggers when uploading a file to the server using the AJAX request.
     * @event
     */
    @Event()
    public progress: EmitType<Object>;

    /**
     * Triggers when changes occur in uploaded file list by selecting or dropping files.
     * @event
     */
    @Event()
    public change: EmitType<Object>;

    /**
     * Triggers when change the Uploader value.
     */
    constructor(options?: UploaderModel, element?: string | HTMLInputElement) {
        super(options, element);
    }

    /**
     * Calls internally if any of the property value is changed.
     * @private
     */
    public onPropertyChanged(newProp: UploaderModel, oldProp: UploaderModel): void {
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'allowedExtensions':
                    this.setExtensions(this.allowedExtensions);
                    this.clearAll();
                    break;
                case 'enabled':
                    this.setControlStatus();
                    break;
                case 'multiple':
                    this.setMultipleSelection();
                    break;
                case 'enableRtl':
                    this.setRTL();
                    this.reRenderFileList();
                    break;
                case 'buttons':
                    this.buttons.browse = isNullOrUndefined(this.buttons.browse) ? '' : this.buttons.browse;
                    this.buttons.clear = isNullOrUndefined(this.buttons.clear) ? '' : this.buttons.clear;
                    this.buttons.upload = isNullOrUndefined(this.buttons.upload) ? '' : this.buttons.upload;
                    this.renderButtonTemplates();
                    break;
                case 'dropArea':
                    this.unBindDropEvents();
                    this.setDropArea();
                    break;
                case 'showFileList':
                    if (this.listParent) {
                        this.listParent.style.display = this.showFileList ? 'block' : 'none';
                        this.actionButtons.style.display = this.showFileList ? 'block' : 'none';
                    }
                    break;
                case 'files':
                    this.renderPreLoadFiles();
                    break;
                case 'minFileSize':
                case 'maxFileSize':
                case 'template':
                case 'autoUpload':
                    this.clearAll();
                    break;
                case 'locale':
                    this.l10n.setLocale(this.locale);
                    this.setLocalizedTexts();
                    this.preLocaleObj = getValue('currentLocale', this.l10n);
                    break;
            }
        }
    }

    private setLocalizedTexts() : void {
        if (isNullOrUndefined(this.template)) {
            if (typeof (this.buttons.browse) === 'string') {
                this.browseButton.innerText = (this.buttons.browse === 'Browse') ?
                this.localizedTexts('Browse') : this.buttons.browse;
                this.browseButton.setAttribute('title', this.browseButton.innerText);
                this.uploadWrapper.querySelector('.' + DROP_AREA).innerHTML = this.localizedTexts('dropFilesHint');
            }
            this.updateFileList();
        }
    }

    private getKeyValue(val : string): string {
        let keyValue: string;
        for (let key of Object.keys(this.preLocaleObj)) {
            if (this.preLocaleObj[key] === val) {
                keyValue = key;
            }
        }
        return keyValue;
    }

    private updateFileList () : void {
        let element : HTMLElement;
        if (this.fileList.length > 0 && !isNullOrUndefined(this.uploadWrapper.querySelector('.' + LIST_PARENT ))) {
            for (let i: number = 0; i < this.fileList.length; i++) {
                element = this.fileList[i].querySelector('.e-file-status') as HTMLElement;
                element.innerHTML = this.localizedTexts(this.getKeyValue(this.filesData[i].status));
                this.filesData[i].status = this.localizedTexts(this.getKeyValue(this.filesData[i].status));
                if (this.fileList[i].classList.contains(UPLOAD_SUCCESS)) {
                    this.fileList[i].querySelector('.e-icons').setAttribute('title', this.localizedTexts('remove'));
                } else {
                    this.fileList[i].querySelector('.e-icons').setAttribute('title', this.localizedTexts('delete'));
                }
                if (!this.autoUpload) {
                    this.uploadButton.innerText = (this.buttons.upload === 'Upload') ?
                    this.localizedTexts('Upload') : <string>this.buttons.upload;
                    this.clearButton.innerText = (this.buttons.clear === 'Clear') ?
                    this.localizedTexts('Clear') : <string>this.buttons.clear;
                }
            }
        }
    }

    private reRenderFileList(): void {
        if (this.listParent) {
            detach(this.listParent);
            this.listParent = null;
            this.fileList = [];
            this.removeActionButtons();
            this.createFileList(this.filesData);
            this.renderActionButtons();
        }
    }

    protected preRender(): void {
        this.cloneElement = <HTMLElement>this.element.cloneNode(true);
        this.localeText = { Browse  : 'Browse', Clear : 'Clear', Upload : 'Upload',
            dropFilesHint : 'or Drop files here', invalidMaxFileSize : 'File size is too large',
            invalidMinFileSize : 'File size is too small', invalidFileType: 'File type is not allowed',
            uploadFailedMessage : 'File failed to upload', uploadSuccessMessage : 'File uploaded successfully',
            removedSuccessMessage: 'File removed successfully', removedFailedMessage: 'File failed to remove', inProgress: 'Uploading',
            readyToUploadMessage: 'Ready to upload', remove: 'Remove', cancel: 'Cancel', delete: 'Delete file'
           };
        this.l10n = new L10n('uploader', this.localeText, this.locale);
        this.preLocaleObj = getValue('currentLocale', this.l10n);
        this.checkHTMLAttributes();
        if (this.asyncSettings.saveUrl === '' && this.asyncSettings.removeUrl === '' && !this.autoUpload) {
            if (!isNullOrUndefined(this.element.closest('form'))) {
                this.isForm = true;
                this.element.closest('form').setAttribute('enctype', 'multipart/form-data');
                this.element.closest('form').setAttribute('encoding', 'multipart/form-data');
             }
        }
        let ejInstance: Object = getValue('ej2_instances', this.element);
        if (this.element.tagName === 'EJS-UPLOADER' || this.element.tagName === 'UPLOADERCOMPONENT') {
            let inputElement: HTMLInputElement = <HTMLInputElement>createElement('input', { attrs: { type: 'file' }});
            let index: number = 0;
            for (index; index < this.element.attributes.length; index++) {
                inputElement.setAttribute(this.element.attributes[index].nodeName, this.element.attributes[index].nodeValue);
                inputElement.innerHTML = this.element.innerHTML;
            }
            if (!inputElement.hasAttribute('name')) {
                inputElement.setAttribute('name', 'UploadFiles');
            }
            this.element.appendChild(inputElement);
            this.element = inputElement;
            setValue('ej2_instances', ejInstance, this.element);
        }
        if (isNullOrUndefined(this.element.getAttribute('name'))) {
            this.element.setAttribute('name', this.element.getAttribute('id'));
        }
        if (!this.element.hasAttribute('type')) {
            this.element.setAttribute('type', 'file');
        }
        this.keyConfigs = {
            previous: 'shift+tab',
            enter: 'enter',
            next: 'tab'
        };
    }

    protected getPersistData(): string {
        return this.addOnPersist([]);
    }

    /**
     * Return the module name of the component.
     */
    public getModuleName(): string {
        return 'uploader';
    }

    /**
     * To Initialize the control rendering
     * @private
     */
    public render(): void {
        this.renderBrowseButton();
        this.initializeUpload();
        this.wireEvents();
        this.setMultipleSelection();
        this.setExtensions(this.allowedExtensions);
        this.setRTL();
        this.renderPreLoadFiles();
        this.setControlStatus();
    }

    private renderBrowseButton(): void {
        this.browseButton = createElement('button', { className: 'e-css e-btn', attrs: {'type': 'button'}});
        if (typeof(this.buttons.browse) === 'string') {
            this.browseButton.innerText = (this.buttons.browse === 'Browse') ?
            this.localizedTexts('Browse') : this.buttons.browse;
            this.browseButton.setAttribute('title', this.browseButton.innerText);
        } else {
            this.browseButton.appendChild(this.buttons.browse);
        }
        this.element.setAttribute('aria-label', 'Uploader');
    }

    private renderActionButtons(): void {
        this.element.setAttribute('tabindex', '-1');
        this.actionButtons = createElement('div', { className: ACTION_BUTTONS });
        this.uploadButton = createElement('button', { className: UPLOAD_BUTTONS, attrs: {'type': 'button', 'tabindex': '-1'} });
        this.clearButton = createElement('button', { className: CLEAR_BUTTONS, attrs: {'type': 'button', 'tabindex': '-1'} });
        this.actionButtons.appendChild(this.clearButton);
        this.actionButtons.appendChild(this.uploadButton);
        this.renderButtonTemplates();
        this.uploadWrapper.appendChild(this.actionButtons);
        this.browseButton.blur();
        this.uploadButton.focus();
        this.wireActionButtonEvents();
    }

    private wireActionButtonEvents(): void {
        EventHandler.add(this.uploadButton, 'click', this.uploadButtonClick, this);
        EventHandler.add(this.clearButton, 'click', this.clearButtonClick, this);
    }

    private unwireActionButtonEvents(): void {
        EventHandler.remove(this.uploadButton, 'click', this.uploadButtonClick);
        EventHandler.remove(this.clearButton, 'click', this.clearButtonClick);
    }

    private removeActionButtons(): void {
        if (this.actionButtons) {
            this.unwireActionButtonEvents();
            detach(this.actionButtons);
            this.actionButtons = null;
        }
    }

    private renderButtonTemplates(): void {
        if (typeof (this.buttons.browse) === 'string') {
            this.browseButton.innerText = (this.buttons.browse === 'Browse') ?
            this.localizedTexts('Browse') : this.buttons.browse;
            this.browseButton.setAttribute('title', this.browseButton.innerText);
        } else {
            this.browseButton.appendChild(this.buttons.browse);
        }
        if (this.uploadButton) {
            let uploadText: string | HTMLElement;
            uploadText = isNullOrUndefined(this.buttons.upload) ? 'Upload' : this.buttons.upload;
            this.buttons.upload = uploadText;
            if (typeof (this.buttons.upload) === 'string') {
                this.uploadButton.innerText = (this.buttons.upload === 'Upload') ?
                this.localizedTexts('Upload') : this.buttons.upload;
                this.uploadButton.setAttribute('title', this.uploadButton.innerText);
            } else {
                this.uploadButton.appendChild(this.buttons.upload);
            }
        }
        if (this.clearButton) {
            let clearText: string | HTMLElement;
            clearText = isNullOrUndefined(this.buttons.clear) ? 'Clear' : this.buttons.clear;
            this.buttons.clear = clearText;
            if (typeof (this.buttons.clear) === 'string') {
                this.clearButton.innerText = (this.buttons.clear === 'Clear') ?
                this.localizedTexts('Clear') : this.buttons.clear;
                this.clearButton.setAttribute('title', this.clearButton.innerText);
            } else {
                this.clearButton.appendChild(this.buttons.clear);
            }
        }
    }

    private initializeUpload(): void {
        this.element.setAttribute('tabindex', '-1');
        let inputWrapper: HTMLElement = createElement('span', { className: INPUT_WRAPPER });
        this.element.parentElement.insertBefore(inputWrapper, this.element);
        this.dropAreaWrapper = createElement('div', { className: DROP_WRAPPER });
        this.element.parentElement.insertBefore(this.dropAreaWrapper, this.element);
        inputWrapper.appendChild(this.element);
        this.dropAreaWrapper.appendChild(this.browseButton);
        this.dropAreaWrapper.appendChild(inputWrapper);
        let fileDropArea: HTMLElement = createElement('span', { className: DROP_AREA});
        fileDropArea.innerHTML = this.localizedTexts('dropFilesHint');
        this.dropAreaWrapper.appendChild(fileDropArea);
        this.uploadWrapper = createElement('div', { className: CONTROL_WRAPPER, attrs: {'aria-activedescendant': 'li-focused'}});
        this.dropAreaWrapper.parentElement.insertBefore(this.uploadWrapper, this.dropAreaWrapper);
        this.uploadWrapper.appendChild(this.dropAreaWrapper);
        this.setDropArea();
    }

    private renderPreLoadFiles(): void {
        if (isNullOrUndefined(this.files[0].size) || !isNullOrUndefined(this.template)) {
            return;
        }
        let files: FilesPropModel[] = [].slice.call(this.files);
        let filesData: FileInfo[] = [];
        if (!this.multiple) {
            this.clearData();
            files = [files[0]];
        }
        for (let data of files) {
            let fileData: FileInfo = {
                name: this.getFileNameOnly(data.name) + '.' + data.type.split('.')[data.type.split('.').length - 1],
                rawFile: '',
                size: data.size,
                status: this.localizedTexts('uploadSuccessMessage'),
                type: data.type,
                validationMessages: {minSize: '', maxSize: ''},
                statusCode: '2'
            };
            filesData.push(fileData);
            this.filesData.push(fileData);
        }
        this.createFileList(filesData);
        if (!this.autoUpload && this.listParent && !this.actionButtons && !this.isForm) {
            this.renderActionButtons();
        }
        this.checkActionButtonStatus();
    }

    private checkActionButtonStatus(): void {
        if (this.actionButtons) {
            let length: number = this.uploadWrapper.querySelectorAll('.' + VALIDATION_FAILS).length +
            this.uploadWrapper.querySelectorAll('.e-upload-fails:not(.e-upload-progress)').length +
            this.uploadWrapper.querySelectorAll('span.' + UPLOAD_SUCCESS).length +
            this.uploadWrapper.querySelectorAll('span.' + UPLOAD_INPROGRESS).length;
            if (length > 0 && length === this.uploadWrapper.querySelectorAll('li').length) {
                this.uploadButton.setAttribute('disabled', 'disabled');
            } else {
                this.uploadButton.removeAttribute('disabled');
            }
        }
    }

    private setDropArea(): void {
        let dropTextArea: HTMLElement = <HTMLElement>this.dropAreaWrapper.querySelector('.e-file-drop');
        if (this.dropArea) {
            this.dropZoneElement = (typeof(this.dropArea) !== 'string') ? this.dropArea :
            document.querySelector(this.dropArea);
            let element: HTMLElement = this.element;
            let enableDropText: Boolean = false;
            while (element.parentNode) {
                element = element.parentNode as HTMLElement;
                if (element === this.dropZoneElement) {

                    enableDropText = true;
                }
            }
            if (!enableDropText) {
                dropTextArea.textContent = '';
            }
        } else {
            this.dropZoneElement = this.uploadWrapper;
            dropTextArea.textContent = this.localizedTexts('dropFilesHint');
        }
        this.bindDropEvents();
    }

    private setMultipleSelection(): void {
        if (this.multiple && !this.element.hasAttribute('multiple')) {
            let newAttr: Attr = document.createAttribute('multiple');
            this.element.setAttributeNode(newAttr);
        } else if (!this.multiple) {
            this.element.removeAttribute('multiple');
        }
    }

    private checkAutoUpload(fileData: FileInfo[]): void {
        if (this.autoUpload) {
            this.upload(fileData);
            this.removeActionButtons();
        } else if (!this.actionButtons) {
            this.renderActionButtons();
        }
        this.checkActionButtonStatus();
    }

    private wireEvents(): void {
        EventHandler.add(this.browseButton, 'click', this.browseButtonClick, this);
        EventHandler.add(this.element, 'change', this.onSelectFiles, this);
        EventHandler.add(document, 'click', this.removeFocus, this);
        this.keyboardModule = new KeyboardEvents( this.uploadWrapper, {
                keyAction: this.keyActionHandler.bind(this),
                keyConfigs: this.keyConfigs,
                eventName: 'keydown',
            });
        if (this.isForm) {
            EventHandler.add(this.element.closest('form'), 'reset', this.resetForm, this);
        }
    }

    private unWireEvents(): void {
        EventHandler.remove(this.browseButton, 'click', this.browseButtonClick);
        EventHandler.remove(this.element, 'change', this.onSelectFiles);
        EventHandler.remove(document, 'click', this.removeFocus);
        this.keyboardModule.destroy();
    }

    private resetForm() : void {
        this.clearAll();
        this.element.value = '';
    }

    private keyActionHandler(e: KeyboardEventArgs): void {
        switch (e.action) {
            case 'next':
                if (e.target === this.browseButton && isNullOrUndefined(this.listParent)) {
                    this.browseButton.blur();
                } else if (e.target === this.uploadButton) {
                    this.uploadButton.blur();
                } else {
                    this.setTabFocus(e);
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.target === this.clearButton && this.uploadButton.hasAttribute('disabled')) {
                        this.clearButton.blur();
                    }
                }
                break;
            case 'previous':
                if (e.target === this.browseButton) {
                    this.browseButton.blur();
                } else {
                    this.setReverseFocus(e);
                    e.preventDefault();
                    e.stopPropagation();
                }
                break;
            case 'enter':
                if (e.target === this.clearButton) {
                    this.clearButtonClick();
                } else if (e.target === this.uploadButton) {
                    this.uploadButtonClick();
                } else if (e.target === this.browseButton) {
                    this.browseButtonClick();
                } else {
                    this.removeFiles(e);
                    this.browseButton.focus();
                }
                e.preventDefault();
                e.stopPropagation();
                break;
        }
    }

    private setReverseFocus(e: KeyboardEventArgs): void {
        let target: HTMLElement = <HTMLElement>e.target;
        if (target === this.uploadButton) {
            this.uploadButton.blur();
            this.clearButton.focus();
        } else if (target === this.clearButton && this.listParent && this.listParent.querySelector('.e-icons')) {
            this.clearButton.blur();
            let items: HTMLElement[] = [].slice.call(this.listParent.querySelectorAll('span.e-icons'));
            items[items.length - 1].classList.add(ICON_FOCUSED);
            items[items.length - 1].focus();
        } else {
            let iconElements: HTMLElement[] = [].slice.call(this.listParent.querySelectorAll('span.e-icons'));
            let index: number = iconElements.indexOf(target);
            if (index > 0) {
                this.removeFocus();
                iconElements[index - 1].classList.add(ICON_FOCUSED);
                iconElements[index - 1].focus();
            } else {
                this.removeFocus();
                this.browseButton.focus();
            }
        }
    }

    private setTabFocus(e: KeyboardEventArgs): void {
        let target: HTMLElement = <HTMLElement>e.target;
        if (target === this.clearButton) {
            this.removeFocus();
            if (this.uploadButton.hasAttribute('disabled')) { return; }
            this.uploadButton.focus();
        } else if (target.classList.contains('e-icons')) {
            let iconElements: HTMLElement[] = [].slice.call(this.listParent.querySelectorAll('span.e-icons'));
            let index: number = iconElements.indexOf(target);
            if (index < (iconElements.length - 1)) {
                this.removeFocus();
                iconElements[index + 1].classList.add(ICON_FOCUSED);
                iconElements[index + 1].focus();
            } else {
                this.removeFocus();
                this.clearButton.focus();
            }
        } else {
            this.browseButton.blur();
            let iconElement: HTMLElement = this.listParent.querySelector('span.e-icons') as HTMLElement;
            iconElement.focus();
            iconElement.classList.add(ICON_FOCUSED);
        }
    }

    private removeFocus() : void {
        if (this.uploadWrapper && this.listParent && this.listParent.querySelector('.' + ICON_FOCUSED)) {
            (<HTMLElement>document.activeElement).blur();
            this.listParent.querySelector('.' + ICON_FOCUSED).classList.remove(ICON_FOCUSED);
        }
    }

    private browseButtonClick(): void {
        this.element.click();
    }

    private uploadButtonClick(): void {
        this.upload(this.filesData);
    }

    private clearButtonClick(): void {
        this.clearAll();
    }

    private bindDropEvents(): void {
        if (this.dropZoneElement) {
            EventHandler.add(this.dropZoneElement, 'drop', this.dropElement, this);
            EventHandler.add(this.dropZoneElement, 'dragover', this.dragHover, this);
            EventHandler.add(this.dropZoneElement, 'dragleave', this.onDragLeave, this);
        }
    }

    private unBindDropEvents(): void {
        if (this.dropZoneElement) {
            EventHandler.remove(this.dropZoneElement, 'drop', this.dropElement);
            EventHandler.remove(this.dropZoneElement, 'dragover', this.dragHover);
            EventHandler.remove(this.dropZoneElement, 'dragleave', this.onDragLeave);
        }
    }

    private onDragLeave(e: DragEvent): void {
        this.dropZoneElement.classList.remove(DRAG_HOVER);
    }

    private dragHover(e: DragEvent): void {
        if (!this.enabled) { return; }
        this.dropZoneElement.classList.add(DRAG_HOVER);
        e.preventDefault();
        e.stopPropagation();
    }

    private dropElement(e: DragEvent): void {
        this.dropZoneElement.classList.remove(DRAG_HOVER);
        this.onSelectFiles(e);
        e.preventDefault();
        e.stopPropagation();
    }

    private removeFiles(args: MouseEvent | TouchEvent | KeyboardEventArgs): void {
        if (!this.enabled) { return; }
        let selectedElement: HTMLElement = (<HTMLInputElement>args.target).parentElement;
        let index: number = this.fileList.indexOf(selectedElement);
        let fileData: FileInfo = this.filesData[index];
        this.remove(fileData);
        this.element.value = '';
        this.checkActionButtonStatus();
    }

    private removeFilesData(file: FileInfo, customTemplate: boolean): void {
        if (customTemplate) { return; }
        let selectedElement: HTMLElement = this.getLiElement(file);
        if (isNullOrUndefined(selectedElement)) { return; }
        detach(selectedElement);
        let index: number = this.fileList.indexOf(selectedElement);
        this.fileList.splice(index, 1);
        this.filesData.splice(index, 1);
        if (this.fileList.length === 0) {
            detach(this.listParent);
            this.listParent = null;
            this.removeActionButtons();
        }
    }

    private removeUploadedFile(file: FileInfo, custom: boolean): void {
        let selectedFiles: FileInfo = file;
        let ajax : XMLHttpRequest = new XMLHttpRequest();
        let formData : FormData = new FormData();
        formData.append('_datas', selectedFiles.rawFile);
        ajax.addEventListener('load',  (e : Event) => { this.removeCompleted(e, selectedFiles, custom);  }, false);
        /* istanbul ignore next */
        ajax.addEventListener('error', (e : Event) => { this.removeFailed(e, selectedFiles, custom); }, false);
        ajax.open('POST', this.asyncSettings.removeUrl);
        ajax.send(formData);
    }

    private removeCompleted(e: Event, files:  FileInfo, customTemplate: boolean): void {
        let args : Object = {
            e, operation: 'remove', file: this.updateStatus(files, this.localizedTexts('removedSuccessMessage'), '2') };
        this.trigger('success', args);
        this.removeFilesData(files, customTemplate);
        let index: number = this.uploadedFilesData.indexOf(files);
        this.uploadedFilesData.splice(index, 1);
        this.trigger('change', { files: this.uploadedFilesData });
    }

    private removeFailed(e: Event, files:  FileInfo, customTemplate: boolean): void {
        let args : Object = {
            e, operation: 'remove', file: this.updateStatus(files, this.localizedTexts('removedFailedMessage'), '0') };
        if (!customTemplate) {
            let index: number = this.filesData.indexOf(files);
            let rootElement: HTMLElement = this.fileList[index];
            if (rootElement) {
                let statusElement: HTMLElement = rootElement.querySelector('.' + STATUS) as HTMLElement;
                rootElement.classList.remove(UPLOAD_SUCCESS);
                statusElement.classList.remove(UPLOAD_SUCCESS);
                rootElement.classList.add(UPLOAD_FAILED);
                statusElement.classList.add(UPLOAD_FAILED);
            }
            this.checkActionButtonStatus();
        }
        this.trigger('failure', args);
    }

    private onSelectFiles(args: MouseEvent | TouchEvent | DragEvent): void {
        if (!this.enabled) { return; }
        let fileData: FileInfo[] = [];
        let targetFiles: File[];
        if (args.type === 'drop') {
           let files: FileList = (<DragEvent>args).dataTransfer.files;
           targetFiles = this.multiple ? this.sortFileList(files) : [files[0]];
        } else {
            targetFiles = [].slice.call((<HTMLInputElement>args.target).files);
        }
        if (!this.multiple) {
            this.clearData();
            targetFiles = [targetFiles[0]];
        }
        for (let i: number = 0; i < targetFiles.length; i++) {
            let file: File = targetFiles[i];
            let eventArgs: FileInfo = {
                name: file.name,
                rawFile: file,
                size: file.size,
                status: this.localizedTexts('readyToUploadMessage'),
                type: this.getFileType(file.name),
                validationMessages: this.validatedFileSize(file.size),
                statusCode: '1'
            };
            eventArgs.status = eventArgs.validationMessages.minSize !== '' ? this.localizedTexts('invalidMinFileSize') :
            eventArgs.validationMessages.maxSize !== '' ? this.localizedTexts('invalidMaxFileSize') : eventArgs.status;
            if (eventArgs.validationMessages.minSize !== '' || eventArgs.validationMessages.maxSize !== '') {
                eventArgs.statusCode = '0';
            }
            fileData.push(eventArgs);
        }
        let eventArgs: SelectedEventArgs = {
            cancel: false,
            filesData: fileData,
            isModified: false,
            modifiedFilesData: [],
            progressInterval: ''
        };
        if (args.type === 'drop') { fileData =  this.checkExtension(fileData); }
        this.trigger('selected', eventArgs);
        if (eventArgs.cancel) { return; }
        if (eventArgs.isModified && eventArgs.modifiedFilesData.length > 0) {
            let dataFiles: FileInfo[] = this.checkExtension(eventArgs.modifiedFilesData);
            this.updateSortedFileList(dataFiles);
            if (!this.isForm) {
                this.checkAutoUpload(dataFiles);
            }
            this.filesData = dataFiles;
        } else {
            this.createFileList(fileData);
            this.filesData = this.filesData.concat(fileData);
            if (!this.isForm) {
                this.checkAutoUpload(fileData);
            }
        }
        if (!isNullOrUndefined(eventArgs.progressInterval) && eventArgs.progressInterval !== '') {
            this.progressInterval = eventArgs.progressInterval;
        }
    }

    private clearData() : void {
        if (!isNullOrUndefined(this.listParent)) {
            detach(this.listParent);
            this.listParent = null;
        }
        this.element.value = '';
        this.fileList = [];
        this.filesData = [];
        this.removeActionButtons();
    }

    private updateSortedFileList(filesData: FileInfo[]): void {
        let previousListClone: HTMLElement = createElement('div', {id: 'clonewrapper'});
        let added: number = -1;
        let removedList: HTMLElement[];
        if (this.listParent) {
            for (let i: number = 0; i < this.listParent.querySelectorAll('li').length; i++) {
                let liElement: HTMLElement = this.listParent.querySelectorAll('li')[i];
                previousListClone.appendChild(liElement.cloneNode(true));
            }
            removedList = <HTMLElement[] & NodeListOf<HTMLLIElement>>this.listParent.querySelectorAll('li');
            for (let item of removedList) {
                detach(item);
            }
            this.removeActionButtons();
            let oldList: HTMLElement[] = [].slice.call(previousListClone.childNodes);
            detach(this.listParent);
            this.listParent = null;
            this.fileList = [];
            this.createParentUL();
            for (let index: number = 0; index < filesData.length; index++) {
                for (let j: number = 0; j < this.filesData.length; j++) {
                    if (this.filesData[j].name === filesData[index].name) {
                        this.listParent.appendChild(oldList[j]);
                        EventHandler.add(oldList[j].querySelector('.e-icons'), 'click', this.removeFiles, this);
                        this.fileList.push(oldList[j]);
                        added = index;
                    }
                }
                if (added !== index) { this.createFileList([filesData[index]]); }
            }
        } else { this.createFileList(filesData); }
    }

    private checkExtension(files: FileInfo[]): FileInfo[] {
        let dropFiles: FileInfo[] = files;
        if (this.allowedExtensions !== '') {
            let allowedExtensions: string[] = [];
            let extensions: string[] = this.allowedExtensions.split(',');
            for (let extension of extensions) {
                allowedExtensions.push(extension.trim().toLocaleLowerCase());
            }
            for (let i: number = 0; i < files.length; i++) {
                if (allowedExtensions.indexOf(('.' + files[i].type).toLocaleLowerCase()) === -1) {
                    files[i].status = this.localizedTexts('invalidFileType');
                    files[i].statusCode = '0';
                }
            }
        }
        return dropFiles;
    }

    private validatedFileSize(fileSize: number): Object {
        let minSizeError: string = '';
        let maxSizeError: string = '';
        if (fileSize < this.minFileSize) {
            minSizeError = this.localizedTexts('invalidMinFileSize');
        } else if (fileSize > this.maxFileSize) {
            maxSizeError = this.localizedTexts('invalidMaxFileSize');
        } else {
            minSizeError = '';
            maxSizeError = '';
        }
        let errorMessage: Object = { minSize: minSizeError, maxSize: maxSizeError };
        return errorMessage;
    }

    private createCustomfileList (fileData : FileInfo[]) : void {
        this.createParentUL();
        for (let listItem of fileData) {
            let liElement: HTMLElement = createElement('li', { className: FILE, attrs: {'data-file-name': listItem.name}});
            this.uploadTemplateFn = this.templateComplier(this.template);
            let length: number = this.uploadTemplateFn(listItem).length;
            for (let i: number = 0; i < length; i++) {
                liElement.appendChild(this.uploadTemplateFn(listItem)[i]);
            }
            this.listParent.appendChild(liElement);
            this.fileList.push(liElement);
        }
    }

    private createParentUL() : void {
        if (isNullOrUndefined(this.listParent)) {
            this.listParent = createElement('ul', { className: LIST_PARENT });
            this.uploadWrapper.appendChild(this.listParent);
            this.listParent.style.display = this.showFileList ? 'block' : 'none';
        }
    }

    private createFileList(fileData: FileInfo[]) : void {
        this.createParentUL();
        if (this.template !== '' && !isNullOrUndefined(this.template)) {
            this.createCustomfileList(fileData);
        } else {
            for (let listItem of fileData) {
                let liElement: HTMLElement = createElement('li', { className: FILE, attrs: {'data-file-name': listItem.name}});
                let textContainer: Element = createElement('span', { className: TEXT_CONTAINER });
                let textElement: HTMLElement = createElement('span', { className: FILE_NAME, attrs: {'title': listItem.name} });
                textElement.innerHTML = this.getFileNameOnly(listItem.name);
                let fileExtension: Element = createElement('span', { className: FILE_TYPE });
                fileExtension.innerHTML = '.' + this.getFileType(listItem.name);
                if (!this.enableRtl) {
                    textContainer.appendChild(textElement);
                    textContainer.appendChild(fileExtension);
                } else {
                    let rtlContainer: Element = createElement('span', { className: RTL_CONTAINER });
                    rtlContainer.appendChild(fileExtension);
                    rtlContainer.appendChild(textElement);
                    textContainer.appendChild(rtlContainer);
                }
                let fileSize: Element = createElement('span', { className: FILE_SIZE });
                fileSize.innerHTML = this.bytesToSize(listItem.size);
                textContainer.appendChild(fileSize);
                let statusElement: HTMLElement = createElement('span', {className: STATUS});
                textContainer.appendChild(statusElement);
                statusElement.innerHTML = listItem.status;
                liElement.appendChild(textContainer);
                let iconElement: HTMLElement = createElement('span', {className: ' e-icons', attrs: { 'tabindex': '-1'}});
                iconElement.setAttribute('title', this.localizedTexts('remove'));
                liElement.appendChild(iconElement);
                EventHandler.add(iconElement, 'click', this.removeFiles, this);
                if (listItem.statusCode === '2') {
                    statusElement.classList.add(UPLOAD_SUCCESS);
                    iconElement.classList.add(REMOVE_ICON);
                } else if (listItem.statusCode !== '1') {
                    statusElement.classList.remove(UPLOAD_SUCCESS);
                    statusElement.classList.add(VALIDATION_FAILS);
                }
                if (this.autoUpload && listItem.statusCode === '1' && this.asyncSettings.saveUrl !== '') {
                    statusElement.innerHTML = '';
                }
                if (!iconElement.classList.contains(REMOVE_ICON)) {
                    iconElement.classList.add(CLEAR_ICON);
                }
                this.listParent.appendChild(liElement);
                this.fileList.push(liElement);
                this.truncateName(textElement);
            }
        }
    }

    private truncateName(name: HTMLElement): void {
        let nameElement: HTMLElement = name;
        let text: string;
        if (nameElement.offsetWidth < nameElement.scrollWidth) {
            text = nameElement.textContent;
            nameElement.dataset.tail = text.slice(text.length - 10);
        }
    }

    private getFileType(name: string): string {
        let extension: string;
        let index: number = name.lastIndexOf('.');
        if (index >= 0) {
            extension = name.substring(index + 1);
        }
        return extension ? extension : '';
    }

    private getFileNameOnly(name: string): string {
        let type: string = this.getFileType(name);
        let names: string[] = name.split('.' + type);
        return type = names[0];
    }

    private setInitialAttributes(): void {
        if (this.initialAttr.accept) { this.element.setAttribute('accept', this.initialAttr.accept); }
        if (this.initialAttr.disabled) { this.element.setAttribute('disabled', 'disabled'); }
        if (this.initialAttr.multiple) {
            let newAttr: Attr = document.createAttribute('multiple');
            this.element.setAttributeNode(newAttr);
        }
    }

    private filterfileList(files : FileInfo[]) : FileInfo[] {
        let filterFiles : FileInfo[] = [];
        let li : HTMLElement;
        for (let i : number = 0;  i < files.length; i++) {
            li = this.getLiElement(files[i]);
            if (!li.classList.contains(UPLOAD_SUCCESS)) {
                filterFiles.push(files[i]);
            }
        }
        return filterFiles;
    }

    private updateStatus(files : FileInfo, status ? : string, statusCode? : string ) : FileInfo {
        if (!(status === '' || isNullOrUndefined(status)) && !(statusCode === '' || isNullOrUndefined(statusCode))) {
            files.status = status;
            files.statusCode = statusCode;
        }
        let li : HTMLElement = this.getLiElement(files);
        if (!isNullOrUndefined(li)) {
            if (!isNullOrUndefined(li.querySelector('.' + STATUS)) && !((status === '' || isNullOrUndefined(status)))) {
                li.querySelector('.' + STATUS).textContent = status;
            }
        }
        return files;
    }


    private getLiElement(files : FileInfo) : HTMLElement {
        let liElements: HTMLElement[] = [];
        let li : HTMLElement;
        if (this.uploadWrapper) {
            liElements = <HTMLElement[] & NodeListOf<Element>>this.uploadWrapper.querySelectorAll('.' + LIST_PARENT + '> li');
            for ( let i : number = 0; i < liElements.length; i++) {
                if ( liElements[i].getAttribute('data-file-name') === files.name ) {
                    li = liElements[i];
                }
            }
        }
        return li;
    }

    private createProgressBar(liElement : Element) : void {
        let progressbarWrapper : Element = createElement('span', {className: PROGRESS_WRAPPER});
        let progressBar : Element = createElement('progressbar', {className: PROGRESSBAR, attrs: {value : '0', max : '100'}});
        let progressbarInnerWrapper : Element = createElement('span', {className: PROGRESS_INNER_WRAPPER});
        progressBar.setAttribute('style', 'width: 0%');
        let progressbarText : Element = createElement('span', {className: PROGRESSBAR_TEXT});
        progressbarText.textContent = '0%';
        progressbarInnerWrapper.appendChild(progressBar);
        progressbarWrapper.appendChild(progressbarInnerWrapper);
        progressbarWrapper.appendChild(progressbarText);
        liElement.querySelector('.' + TEXT_CONTAINER).appendChild(progressbarWrapper);
    }

    private updateProgressbar(e : ProgressEventInit, li : Element) : void {
        if (!isNaN(Math.round((e.loaded / e.total) * 100)) && !isNullOrUndefined(li.querySelector('.' + PROGRESSBAR))) {
            if (!isNullOrUndefined(this.progressInterval) && this.progressInterval !== '') {
                let value : number = (Math.round((e.loaded / e.total) * 100)) % parseInt(this.progressInterval, 10);
                if (value === 0 || value === 100 ) {
                        this.changeProgressValue(li, Math.round((e.loaded / e.total) * 100).toString() + '%');
                    }
                } else {
                        this.changeProgressValue(li, Math.round((e.loaded / e.total) * 100).toString() + '%');
                }
        }
    }

    private changeProgressValue(li : Element, progressValue : string) : void {
        li.querySelector('.' + PROGRESSBAR).setAttribute('style', 'width:' + progressValue );
        li.querySelector('.' + PROGRESSBAR_TEXT).textContent = progressValue;
    }

    private uploadInProgress (e: ProgressEventInit , files : FileInfo, customUI?: boolean) : void {
        let li : HTMLElement = this.getLiElement(files);
        if (isNullOrUndefined(li)  &&  (!customUI || isNullOrUndefined(customUI)) ) { return; }
        if (!isNullOrUndefined(li)) {
            if (!(li.querySelectorAll('.' + PROGRESS_WRAPPER).length > 0) && li.querySelector('.' + STATUS)) {
                li.querySelector('.' + STATUS).classList.add(UPLOAD_INPROGRESS);
                this.createProgressBar(li);
                this.updateProgressBarClasses(li, UPLOAD_INPROGRESS);
            }
            this.updateProgressbar(e, li);
            if (!isNullOrUndefined(li.querySelector('.e-icons'))) {
            li.querySelector('.e-icons').removeAttribute('title');
            EventHandler.remove(li.querySelector('.e-icons'), 'click', this.removeFiles);
            li.querySelector('.e-icons').classList.add(UPLOAD_INPROGRESS);
            }
        }
        let args : object = {e, operation: 'upload', file: this.updateStatus(files, this.localizedTexts('inProgress'), '3')};
        this.trigger('progress', args);
    }

    /* istanbul ignore next */
    private uploadComplete(e: Event, files :  FileInfo, customUI ?: boolean) : void {
        let status : XMLHttpRequest = e.target as XMLHttpRequest;
        if (status.readyState === 4 && status.status === 200 ) {
            let li : HTMLElement = this.getLiElement(files);
            if (isNullOrUndefined(li)  &&  (!customUI || isNullOrUndefined(customUI)) ) { return; }
            if (!isNullOrUndefined(li)) {
                this.updateProgressBarClasses(li, UPLOAD_SUCCESS);
                this.removeProgressbar(li, 'success');
                if (!isNullOrUndefined(li.querySelector('.' + CLEAR_ICON))) {
                    li.querySelector('.' + CLEAR_ICON).classList.add(REMOVE_ICON);
                    li.querySelector('.' + CLEAR_ICON).setAttribute('title', this.localizedTexts('delete'));
                    li.querySelector('.' + CLEAR_ICON).classList.remove(CLEAR_ICON);
                }
                if (!isNullOrUndefined(li.querySelector('.e-icons'))) {
                EventHandler.add(li.querySelector('.e-icons'), 'click', this.removeFiles, this);
                li.querySelector('.e-icons').classList.remove(UPLOAD_INPROGRESS);
                li.querySelector('.e-icons').setAttribute('title', this.localizedTexts('delete'));
                }
            }
            let args: object = {e, operation: 'upload', file: this.updateStatus(files, this.localizedTexts('uploadSuccessMessage'), '2')};
            this.trigger('success', args );
            this.uploadedFilesData.push(files);
            this.trigger('change', { files: this.uploadedFilesData });
            this.checkActionButtonStatus();
        } else  {
            this.uploadFailed(e, files);
        }
    }

    private uploadFailed(e: Event, files : FileInfo) : void {
        let li : HTMLElement = this.getLiElement(files);
        let args : object = {e , operation: 'upload', file: this.updateStatus(files, this.localizedTexts('uploadFailedMessage'), '0') };
        if (!isNullOrUndefined(li)) {
            this.updateProgressBarClasses(li, UPLOAD_FAILED);
            this.removeProgressbar(li, 'failure');
            li.querySelector('.' + CLEAR_ICON).setAttribute('title', this.localizedTexts('remove'));
            EventHandler.add(li.querySelector('.e-icons'), 'click', this.removeFiles, this);
            li.querySelector('.e-icons').classList.remove(UPLOAD_INPROGRESS);
        }
        this.trigger('failure', args);
        this.checkActionButtonStatus();
    }

    private updateProgressBarClasses (li : HTMLElement, className : string) : void {
        let progressBar: HTMLElement = <HTMLElement>li.querySelector('.' + PROGRESSBAR);
        if (!isNullOrUndefined(progressBar)) {
            progressBar.classList.add(className);
        }
    }

    private removeProgressbar(li : HTMLElement, callType : string) : void {
        if (!isNullOrUndefined(li.querySelector('.' + PROGRESS_WRAPPER))) {
            this.progressAnimation = new Animation({ duration: 1250 });
            this.progressAnimation.animate(<HTMLElement>li.querySelector('.' + PROGRESS_WRAPPER), {name: 'FadeOut'});
            this.progressAnimation.animate(<HTMLElement>li.querySelector('.' + PROGRESSBAR_TEXT), {name: 'FadeOut'});
            setTimeout(() => { this.animateProgressBar(li, callType); }, 750);
        }
    }

    /* istanbul ignore next */
    private animateProgressBar(li: Element, callType: string) : void {
        if (callType === 'success') {
            li.classList.add(UPLOAD_SUCCESS);
            if (!isNullOrUndefined(li.querySelector('.' + STATUS))) {
                li.querySelector('.' + STATUS).classList.remove(UPLOAD_INPROGRESS);
                this.progressAnimation.animate(<HTMLElement>li.querySelector('.' + STATUS), {name: 'FadeIn'});
                li.querySelector('.' + STATUS).classList.add(UPLOAD_SUCCESS);
            }
        } else {
            if (!isNullOrUndefined(li.querySelector('.' + STATUS))) {
                li.querySelector('.' + STATUS).classList.remove(UPLOAD_INPROGRESS);
                this.progressAnimation.animate(<HTMLElement>li.querySelector('.' + STATUS), {name: 'FadeIn'});
                li.querySelector('.' + STATUS).classList.add(UPLOAD_FAILED);
            }
        }
        detach(li.querySelector('.' + PROGRESS_WRAPPER));
    }

    private setExtensions(extensions : string): void {
        this.element.setAttribute('accept', extensions);
    }

    private templateComplier(uploadTemplate: string): Function {
        if (uploadTemplate) {
            let exception: Object;
            try {
                if (document.querySelectorAll(uploadTemplate).length) {
                    return compile(document.querySelector(uploadTemplate).innerHTML.trim());
                }
            } catch (exception) {
                return compile(uploadTemplate);
            }
        }
        return undefined;
    }

    private setRTL() : void {
        this.enableRtl ? addClass([this.uploadWrapper], RTL) : removeClass([this.uploadWrapper], RTL);
    }

    private localizedTexts(localeText : string): string {
        this.l10n.setLocale(this.locale);
        return this.l10n.getConstant(localeText);
    }

    private setControlStatus() : void {
        if (!this.enabled) {
            this.uploadWrapper.classList.add(DISABLED);
            this.element.setAttribute('disabled', 'disabled');
            this.browseButton.setAttribute('disabled', 'disabled');
            if (!isNullOrUndefined(this.clearButton)) {
                this.clearButton.setAttribute('disabled', 'disabled');
            }
            if (!isNullOrUndefined(this.uploadButton)) {
                this.uploadButton.setAttribute('disabled', 'disabled');
            }
        } else {
            if (this.uploadWrapper.classList.contains(DISABLED)) {
                this.uploadWrapper.classList.remove(DISABLED);
            }
            if (!isNullOrUndefined(this.browseButton) && this.element.hasAttribute('disabled')) {
                this.element.removeAttribute('disabled');
                this.browseButton.removeAttribute('disabled');
            }
            if (!isNullOrUndefined(this.clearButton) && this.clearButton.hasAttribute('disabled')) {
                this.clearButton.removeAttribute('disabled');
            }
            if (!isNullOrUndefined(this.uploadButton) && this.uploadButton.hasAttribute('disabled')) {
                this.uploadButton.hasAttribute('disabled');
            }
        }
    }

    private checkHTMLAttributes() : void {
        if (this.element.hasAttribute('accept')) {
            this.allowedExtensions = this.element.getAttribute('accept');
            this.initialAttr.accept = this.allowedExtensions;
        }
        if (this.element.hasAttribute('multiple')) {
            this.multiple = true;
            this.initialAttr.multiple = true;
        }
        if (this.element.hasAttribute('disabled')) {
            this.enabled = false;
            this.initialAttr.disabled = true;
        }
    }

    /**
     * It is used to convert bytes value into kilobytes or megabytes depending on the size based
     * on [binary prefix](https://en.wikipedia.org/wiki/Binary_prefix).
     * @param { number } bytes - specifies the file size in bytes.
     * @returns string
     */
    public bytesToSize(bytes : number) : string {
        let i : number = -1;
        let size : number;
        if (!bytes) {
            return '0.0 KB';
        }
        do {
            bytes = bytes / 1000;
            i++;
        } while (bytes > 99);
        if (i >= 2) {
            bytes = bytes * 1000;
            i = 1;
        }
        return Math.max(bytes, 0).toFixed(1) + ' ' + ['KB', 'MB'][i];
    }

    /**
     * Allows you to sort the file data alphabetically based on its file name clearly.
     * @param { FileList } filesData - specifies the files data for upload.
     * @returns File[]
     */
    public sortFileList(filesData: FileList): File[] {
        let files: FileList = filesData;
        let fileNames: string[] = [];
        for (let i: number = 0; i < files.length; i++) {
            fileNames.push(files[i].name);
        }
        let sortedFileNames: string[] = fileNames.sort();
        let sortedFilesData: File[] = [];
        let index: number = 0;
        for (let name of sortedFileNames) {
            for (let i: number = 0; i < files.length; i++) {
                if (name === files[i].name) {
                    sortedFilesData.push(files[i]);
                }
            }
        }
        return sortedFilesData;
    }

    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also it removes the attributes and classes.
     * @method destroy
     * @return {void}.
     */
    public destroy(): void {
        this.element.value = null;
        this.clearAll();
        this.unWireEvents();
        this.unBindDropEvents();
        if (this.multiple) {
            this.element.removeAttribute('multiple');
        }
        if (!this.enabled) {
            this.element.removeAttribute('disabled');
        }
        this.element.removeAttribute('accept');
        this.setInitialAttributes();
        this.uploadWrapper.parentElement.appendChild(this.cloneElement);
        this.cloneElement.classList.remove('e-control', ROOT);
        detach(this.uploadWrapper);
        this.uploadWrapper = null;
        super.destroy();
    }

    /**
     * Allows you to call the upload process manually by calling save URL action.
     * To process the selected files (added in upload queue), pass an empty argument otherwise
     * upload the specific file based on its argument. 
     * @param { FileInfo[] } files - specifies the files data for upload.
     * @returns void
     */
    public upload(files: FileInfo[], custom?: boolean): void {
        let selectedFiles: FileInfo[] = [];
        if (this.asyncSettings.saveUrl === '' || isNullOrUndefined(this.asyncSettings.saveUrl)) {
            return;
        }
        if (!custom || isNullOrUndefined(custom)) {
            if (!this.multiple) {
                let file : FileInfo[] = [];
                file.push(files[0]);
                selectedFiles = this.filterfileList(file);
            } else {
                selectedFiles = this.filterfileList(files);
            }
        } else {
            selectedFiles = files;
        }
        for (let i: number = 0; i < selectedFiles.length; i++ ) {
            let ajax : XMLHttpRequest = new XMLHttpRequest();
            let formData : FormData = new FormData();
            if (selectedFiles[i].statusCode === '1') {
                let eventArgs: UploadingEventArgs = {
                    fileData: selectedFiles[i],
                    customFormData: [{}],
                    cancel: false
                };
                this.trigger('uploading', eventArgs);
                if (eventArgs.cancel) { return; }
                let name: string = this.element.getAttribute('name');
                formData.append(name, selectedFiles[i].rawFile, selectedFiles[i].name);
                if (eventArgs.customFormData.length > 0 ) {
                    let datas: Object[] = eventArgs.customFormData;
                    for (let i: number = 0; i < eventArgs.customFormData.length; i++) {
                        let customData: { [key: string]: Object } = eventArgs.customFormData[i];
                        // tslint:disable-next-line
                        formData.append(Object.keys(customData)[0], (<any>Object).values(customData)[0]);
                    }
                }
                ajax.addEventListener('load',  (e : Event) => { this.uploadComplete(e, selectedFiles[i], custom);  }, false);
                /* istanbul ignore next */
                ajax.addEventListener('error', (e : Event) => { this.uploadFailed(e, selectedFiles[i] ); }, false);
                ajax.upload.addEventListener('progress', (e : Event) => { this.uploadInProgress(e, selectedFiles[i], custom); }, false);
                ajax.open('POST', this.asyncSettings.saveUrl);
                ajax.send(formData);
            }
        }
    }

    /**
     * Remove the uploaded file from server manually by calling the remove URL action.
     * If you pass an empty argument to this method, the complete file list can be cleared,
     * otherwise remove the specific file based on its argument (“file_data”).
     * @param { FileInfo | FileInfo[] } fileData - specifies the files data to remove from file list/server.
     * @returns void
     */
    public remove(fileData?: FileInfo | FileInfo[], customTemplate?: boolean): void {
        let removeFiles: FileInfo[] = [];
        fileData = !isNullOrUndefined(fileData) ? fileData : this.filesData;
        if (fileData instanceof Array) {
            removeFiles = fileData;
        } else {
            removeFiles.push(fileData);
        }
        let eventArgs: RemovingEventArgs = {
            cancel: false,
            filesData: removeFiles
        };
        this.trigger('removing', eventArgs);
        if (eventArgs.cancel) { return; }
        let removeUrl: string = this.asyncSettings.removeUrl;
        let validUrl: boolean = (removeUrl === '' || isNullOrUndefined(removeUrl)) ? false : true;
        for (let files of removeFiles) {
            if (files.statusCode === '2' && validUrl) {
                this.removeUploadedFile(files, customTemplate);
            } else {
                this.removeFilesData(files, customTemplate);
            }
        }
    }

    /**
     * Clear all the file entries from list that can be uploaded files or added in upload queue.
     * @returns void
     */
    public clearAll(): void {
        if (isNullOrUndefined(this.listParent)) { return; }
        let eventArgs: ClearingEventArgs = {
            cancel: false,
            filesData: this.filesData
        };
        this.trigger('clearing', eventArgs);
        if (eventArgs.cancel) { return; }
        this.clearData();
    }

    public getFilesData(): FileInfo[] {
        return this.filesData;
    }
}