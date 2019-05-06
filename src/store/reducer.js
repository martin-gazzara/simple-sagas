import {ADD_TASK, REMOVE_TASK, GET_TODOS} from '../constants';

const initialState={
  tasks: [],
  isLoading: false
}

let nextId = 3;

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_TODOS:
      return Object.assign({}, state, {isLoading: true});
    case ADD_TASK:
      return Object.assign({}, state, {tasks: [...state.tasks, ...action.task], isLoading: false});
    case REMOVE_TASK:
      return Object.assign({}, state, {tasks: state.tasks.filter( task => action.id !== task.id)})
    default:
      return state;
  }
}

export default rootReducer;