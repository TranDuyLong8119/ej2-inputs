/**
 * Default Uploader sample
 */
import { Uploader, FileInfo, SelectedEventArgs } from '../../src/uploader/uploader';
import { Event, detach } from '@syncfusion/ej2-base';

let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'http://104.238.131.174:8984/api/uploadbox/Save',
        removeUrl: 'http://104.238.131.174:8984/api/uploadbox/Remove'
    },
    template: "<span class='wrapper'><span class='icon file-icon ${type}'></span><span class='name file-name'>${name}</span></span>" +
    "<span class='file-size-td file-size'>${size} bytes</span> <span class='e-icons e-file-remove-btn' title='Remove'></span> <br/> " +
    "<progress id='progressBar' class='progressbar' value='0' max='100'></progress> <span class='percent-td percent'></span>",
    dropArea: document.getElementById('dropArea'),
    progress: onFileUpload,
    selected: onSelect,
    success: onuploadSuccess,
    failure: onuploadFailed
});
uploadObj.appendTo('#fileupload');

document.getElementById('browse').onclick = function() {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
    return false;
}
function onFileUpload(args: any) {
    let li: HTMLElement = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
    let progressValue: number = Math.round((args.e.loaded / args.e.total) * 100);
    li.getElementsByTagName('progress')[0].value = progressValue;
    li.getElementsByClassName('percent')[0].textContent = progressValue.toString() + " %";
}
function onuploadSuccess(args: any) {
    if (args.operation === 'remove') {
        let height: string = document.getElementById('dropArea').style.height;
        height = (parseInt(height) - 40) + 'px';
        document.getElementById('dropArea').style.height = height;
    } else {
        let li: HTMLElement = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
        let progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
        detach(li.getElementsByTagName('progress')[0]);
        detach(li.getElementsByClassName('percent')[0]);
        let height: string = document.getElementById('dropArea').style.height;
        document.getElementById('dropArea').style.height = parseInt(height) - 15 + 'px';
    }
}
function onuploadFailed(args: any) {
    let li: HTMLElement = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
    let progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
    detach(li.getElementsByTagName('progress')[0]);
    detach(li.getElementsByClassName('percent')[0]);
}
function onSelect(args: SelectedEventArgs) {
    let length: number = args.filesData.length;
    let height: string = document.getElementById('dropArea').style.height;
    height = parseInt(height) + (length * 55) + 'px';
    document.getElementById('dropArea').style.height = height;
}