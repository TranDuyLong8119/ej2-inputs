import { Uploader, FileInfo, AsyncSettings } from '../../src/uploader/uploader';
import { Event, detach } from '@syncfusion/ej2-base';

let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'http://104.238.131.174:8984/api/uploadbox/Save',
        removeUrl: 'http://104.238.131.174:8984/api/uploadbox/Remove'
    },
    template: "<div class='wrapper'><table><tbody><tr><td class='icon'><span class='file-icon ${type}'></span></td><td class='name'><span class='file-name'>${name}</span><br/><progress id='progressBar' class='progressbar' value='0' max='100' style='width:300px;'></progress><span class='upload-status' style='display: none'></span><td class='percent-td'><span class='percent'></span></td></td><td class='file-size-td'><span class='file-size'>${size} bytes</span></td></tr></tbody></table></div>",
    progress : onFileUpload,
    success : onuploadSuccess,
    failure : onuploadFailed
});
uploadObj.appendTo('#fileupload')



function onFileUpload(args : any){
    let li : Element = this.uploadWrapper.querySelector('[data-file-name="'+ args.file.name +'"]');
    let progressValue : number = Math.round((args.e.loaded / args.e.total) * 100);
    li.getElementsByTagName('progress')[0].value = progressValue;
    
    li.getElementsByClassName('percent')[0].textContent = progressValue.toString() + " %";
}

function onuploadSuccess(args : any){
    let li : Element = this.uploadWrapper.querySelector('[data-file-name="'+ args.file.name +'"]');
    let progressBar : Element = li.getElementsByTagName('progress')[0];
    let status : Element = li.getElementsByClassName('upload-status')[0];
    status.textContent = 'File uploaded successfully';
    status.classList.add('upload-success')
    detach(li.getElementsByTagName('progress')[0]);
    detach(li.getElementsByClassName('percent')[0]);
    detach(li.querySelector('.percent-td'));
}

function onuploadFailed(args : any) {
    let li : Element = this.uploadWrapper.querySelector('[data-file-name="'+ args.file.name +'"]');
    let progressBar : Element = li.getElementsByTagName('progress')[0];
    detach(li.getElementsByTagName('progress')[0]);
    detach(li.getElementsByClassName('percent')[0]);
    let status : Element = li.getElementsByClassName('upload-status')[0];
    status.textContent = 'File failed to upload';
    status.classList.add('upload-failed');
}