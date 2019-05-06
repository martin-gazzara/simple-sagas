import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../store/actions';
import { CircularProgress } from '@material-ui/core';

class InputComponent extends React.Component{

  render(){
    const {tasks = [], removeTask, isLoading} = this.props;
    return(
      <div className="TodoList">
        {isLoading ? <CircularProgress/> : null}
        <ul>
        {tasks.map( (task) => <li onClick={() => removeTask(task.id)} key={task.id}>{task.title}</li>)}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = ({tasks, isLoading}) => ({
  tasks,
  isLoading
});

const mapDispatchToProps = {
  removeTask
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);