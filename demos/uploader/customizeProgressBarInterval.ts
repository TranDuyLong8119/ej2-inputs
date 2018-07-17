/**
 * Customize Uploader progress bar
 */
import { Uploader, FileInfo, AsyncSettings } from '../../src/uploader/uploader';
import { Event } from '@syncfusion/ej2-base';

let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'http://104.238.131.174:8984/api/uploadbox/Save',
        removeUrl: 'http://104.238.131.174:8984/api/uploadbox/Remove'
    },
    autoUpload: false,
    selected : onFilesSelect
});
uploadObj.appendTo('#fileupload')


function onFilesSelect(args : any) {
args.progressInterval = '10';
}