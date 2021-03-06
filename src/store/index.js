import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducer';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer/*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;