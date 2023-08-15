import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducers} from './rootReducers';
// import rootSaga from './sagas';
// import {pictureWatcher} from "../saga/pictureSaga";
// import {rootWatcher} from '../saga/sagaRoot';
import {pictureWatcher} from "../saga/pictureSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(pictureWatcher);

export {store};
