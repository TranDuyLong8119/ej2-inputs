/**
 * Default Uploader sample
 */
import { Uploader, FileInfo, AsyncSettings } from '../../src/uploader/uploader';
import { Event, L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
    'fr-BE': {
       'uploader' : {
        'browseButtonText' : 'Feuilleter',
        'clearButtonText' : 'clair',
        'uploadButtonText' : 'télécharger',
        'DropFilesHint' : 'ou Déposez les fichiers ici',
        'readyToUploadMessage' : 'Prêt à télécharger',
        'InProgress' : 'Télécharger en cours', 
        'uploadFailedMessage' : 'Impossible d`importer le fichier',
        'uploadSuccessMessage' : 'Fichiers chargés avec succès',
        'InvalidMaxFileSize' : 'La taille du fichier est trop grande',
        'InvalidMinFileSize' : 'La taille du fichier est trop petite',
        'InvalidFileType' : 'File type is not allowed'
         }
     }
});

let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'http://104.238.131.174:8984/api/uploadbox/Save',
        removeUrl: 'http://104.238.131.174:8984/api/uploadbox/Remove'
    },
    autoUpload: false,
    locale: 'fr-BE'
});
uploadObj.appendTo('#fileupload')


