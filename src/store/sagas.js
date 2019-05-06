import { call, put, takeLatest } from 'redux-saga/effects';
import fetchTodos from '../api/index';
import {GET_TODOS} from '../constants';
import {addTask} from '../store/actions';

function * fetchData(){
  try{
    const todos = yield call(fetchTodos);
    yield put(addTask(todos));
  }
  catch(err){
    yield console.log(err);
  }
}

function * rootSaga(){
  yield takeLatest(GET_TODOS, fetchData);
}

export default rootSaga;