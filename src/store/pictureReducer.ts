import { PictureActionTypes, } from './type/picture';
import type { PictureAction, PictureInterface} from './type/picture';

const defaultStore: PictureInterface = {
    pictureFileName: '',
    isUpdating: false,
    errorMessage: '',
};

const pictureReducer = (state: PictureInterface = defaultStore, action: PictureAction): PictureInterface => {
    switch (action.type) {
        case PictureActionTypes.ASYNC_UPDATE_IMAGE:
            return {isUpdating: false, pictureFileName: action.payload};
        case PictureActionTypes.REQUEST_UPDATE_IMAGE:
            return {...state, isUpdating: true};
        case PictureActionTypes.ERROR_UPDATE_IMAGE:
            return {...state, isUpdating: false, errorMessage: action.payload};
        default:
            return state;
    }
};

export {pictureReducer};
