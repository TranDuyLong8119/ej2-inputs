/**
 * Default Uploader sample
 */
import { Uploader } from '../../src/uploader/uploader';
import {FilesPropModel} from '../../src/uploader/uploader-model';
import { Event } from '@syncfusion/ej2-base';

let preLoadFiles: FilesPropModel[] = [
    {name: 'Books', size: 500, type: '.png'},
    {name: 'Movies', size: 12000, type: '.pdf'},
    {name: 'Study materials', size: 500000, type: '.docx'},
];
let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'http://104.238.131.174:8984/api/uploadbox/Save',
        removeUrl: 'http://104.238.131.174:8984/api/uploadbox/Remove'
    },
    autoUpload: false,
    files: preLoadFiles
});
uploadObj.appendTo('#fileupload')





