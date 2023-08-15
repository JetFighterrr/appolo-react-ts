import {OptionInterface} from "./options";

interface PictureInterface {
    pictureFileName?: string;
    isUpdating: boolean;
    errorMessage?: string;
}

enum PictureActionTypes  {
    ASYNC_UPDATE_IMAGE = 'ASYNC_UPDATE_IMAGE',
    REQUEST_UPDATE_IMAGE = 'REQUEST_UPDATE_IMAGE',
    ERROR_UPDATE_IMAGE = 'ERROR_UPDATE_IMAGE',
}

type PictureAction = UpdatePictureAction | RequestUpdateAction | ErrorUpdateAction;

interface UpdatePictureAction {
    type: PictureActionTypes.ASYNC_UPDATE_IMAGE;
    payload: string;
}

interface RequestUpdateAction {
    type: PictureActionTypes.REQUEST_UPDATE_IMAGE;
    payload: OptionInterface;
}

interface ErrorUpdateAction {
    type: PictureActionTypes.ERROR_UPDATE_IMAGE;
    payload: string;
}

export {
    PictureActionTypes,
};

export type {
    PictureAction,
    PictureInterface,
    UpdatePictureAction,
    RequestUpdateAction,
    ErrorUpdateAction,
};