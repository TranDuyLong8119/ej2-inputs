/**
 * Default Uploader sample
 */
import { Uploader, FileInfo } from '../../src/uploader/uploader';
import { Event } from '@syncfusion/ej2-base';

let uploadObj: Uploader = new Uploader({
    autoUpload: false,
    asyncSettings: {
        saveUrl: 'http://104.238.131.174:8984/api/uploadbox/Save',
        removeUrl: 'http://104.238.131.174:8984/api/uploadbox/Remove'
    },
});
uploadObj.appendTo('#fileupload')

