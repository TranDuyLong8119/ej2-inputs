/**
 * Default Uploader sample
 */
import { Uploader, FileInfo, SelectedEventArgs } from '../../src/uploader/uploader';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { detach, Browser, Event } from '@syncfusion/ej2-base';
let dropElement: HTMLElement = document.getElementById('drop');
let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'http://104.238.131.174:8984/api/uploadbox/Save',
        removeUrl: 'http://104.238.131.174:8984/api/uploadbox/Remove'
    },
    minFileSize: 10000,
    maxFileSize: 4000000,
    template: '<span class="wrapper"><img src="#" class="upload-image" alt="Loading..."/></span>' +
        '<div class="name file-name" title="${name}">${name}</div><div class="file-size-td file-size">' +
        '${Math.round(size/1000)} KB</div><span id="removeIcon" class="e-icons e-file-remove-btn" title="Remove"></span>' +
        '<progress id="progressBar" class="progressbar" value="0" max="100"></progress> <span class="percent-td percent"></span>',
    success: onUploadSuccess, selected: onSelect, uploading: onUploadBegin,
    progress: onUploadProgress, dropArea: dropElement, failure: onUploadFail, allowedExtensions: '.jpg,.png'
});
uploadObj.appendTo('#fileupload');
if (Browser.isDevice) { document.getElementById('drop').style.padding = '0px 10%'; }
document.getElementById('browse').onclick = () => {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
    return false;
};
function onUploadBegin(args: any): void {
    let li: HTMLElement = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
    readURL(li, args);
}
function onUploadSuccess(args: any): void {
    let spinnerElement: HTMLElement = document.getElementById('dropArea');
    let li: HTMLElement = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
    if (args.operation === 'upload') {
        let progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
        detach(li.getElementsByTagName('progress')[0]);
        detach(li.getElementsByClassName('percent')[0]);
        (li.querySelector('.file-size') as HTMLElement).style.display = 'block';
        (li.querySelector('.file-name') as HTMLElement).style.color = 'green';
        (li.querySelector('#removeIcon') as HTMLElement).onclick = () => { generateSpinner(spinnerElement); };
        (li.querySelector('#removeIcon') as HTMLElement).onkeydown = (e: any) => {
            if (e.keyCode === 13) { generateSpinner(spinnerElement); }
        };
    } else {
        hideSpinner(spinnerElement);
        detach(spinnerElement.querySelector('.e-spinner-pane'));
    }
}
function generateSpinner(targetElement: HTMLElement): void {
    createSpinner({ target: targetElement, width: '25px' });
    showSpinner(targetElement);
}
function onUploadProgress(args: any): void {
    if (args.operation === 'upload') {
        let li: HTMLElement = this.uploadWrapper.querySelector('[data-file-name="' + (<any>args).file.name + '"]');
        (li.querySelector('.file-size') as HTMLElement).style.display = 'none';
        let progressValue: number = Math.round(((<any>args).e.loaded / (<any>args).e.total) * 100);
        li.getElementsByTagName('progress')[0].value = progressValue;
        li.getElementsByClassName('percent')[0].textContent = progressValue.toString() + ' %';
    }
}
function onUploadFail(args: any): void {
    let li: HTMLElement = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
    let progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
    detach(li.getElementsByTagName('progress')[0]);
    detach(li.getElementsByClassName('percent')[0]);
    (li.querySelector('.file-name') as HTMLElement).style.color = 'red';
    (li.querySelector('.e-file-remove-btn') as HTMLElement).style.visibility = 'visible';
    (li.querySelector('.file-size') as HTMLElement).style.display = 'block';
}
function onSelect(args: SelectedEventArgs): void {
    let selectedFiles: FileInfo[] = args.filesData;
    let removedFiles: FileInfo[]  = [];
    let fileNames: String[] = [];
    for (let file of this.filesData) { fileNames.push(file.name); }
    for (let file of selectedFiles) {
        if (this.allowedExtensions.indexOf(('.' + file.type).toLowerCase()) === -1 || fileNames.indexOf(file.name) !== -1) {
            args.isModified = true;
            removedFiles.push(file);
        }
    }
    if (args.isModified) {
        for (let file of removedFiles) {
            let index: number = selectedFiles.indexOf(file);
            selectedFiles.splice(index, 1);
        }
        args.modifiedFilesData = this.filesData.concat(selectedFiles);
    }
}
function readURL(li: HTMLElement, args: any): void {
    let preview: HTMLImageElement = li.querySelector('.upload-image');
    let file: File = args.file.rawFile;
    let reader: FileReader = new FileReader();
    reader.addEventListener(
        'load', () => {
            preview.src = reader.result;
        },
        false
    );
    if (file) { reader.readAsDataURL(file); }
}