import {OptionActionTypes} from './type/options';
import type {OptionInterface, OptionAction} from './type/options';

const defaultStore: OptionInterface = {
    width: '',
    option1: '',
    option2: '',
};

const optionReducer = (state: OptionInterface = defaultStore,
                       action: OptionAction): OptionInterface => {
    switch (action.type){
        case OptionActionTypes.UPDATE_WIDTH:
            return {...state, width: action.payload};

        case OptionActionTypes.UPDATE_OPTION1:
            return {...state, option1: action.payload};

        case OptionActionTypes.UPDATE_OPTION2:
            return {...state, option2: action.payload};

        default:
            return state;
    }
};

export {optionReducer};