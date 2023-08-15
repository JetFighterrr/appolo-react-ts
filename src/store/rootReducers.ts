import {combineReducers} from "redux";
import {optionReducer} from './optionReducer';
import {pictureReducer} from './pictureReducer';


const rootReducers = combineReducers({
    picture: pictureReducer,
    options: optionReducer,
})

type RootState = ReturnType<typeof rootReducers>;

export {rootReducers};
export type {RootState};
