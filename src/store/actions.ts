import { PictureActionTypes } from './type/picture';
import {OptionActionTypes, OptionInterface} from './type/options';

const asyncUpdateImage = (pictureFileName: string) => ({
    type: PictureActionTypes.ASYNC_UPDATE_IMAGE,
    payload: pictureFileName,
});

const requestUpdateImage = (pictureRequest: OptionInterface) => ({
    type: PictureActionTypes.REQUEST_UPDATE_IMAGE,
    payload: pictureRequest,
});

const errorUpdateImage = (errorMessage: string) => ({
    type: PictureActionTypes.ERROR_UPDATE_IMAGE,
    payload: errorMessage,
});

const updateWidth = (width: string) => ({
    type: OptionActionTypes.UPDATE_WIDTH,
    payload: width,
});

const updateOption1 = (option1: string) => ({
    type: OptionActionTypes.UPDATE_OPTION1,
    payload: option1,
});

const updateOption2 = (option2: string) => ({
    type: OptionActionTypes.UPDATE_OPTION2,
    payload: option2,
});

export {
    asyncUpdateImage,
    requestUpdateImage,
    errorUpdateImage,
    updateWidth,
    updateOption1,
    updateOption2,
};
