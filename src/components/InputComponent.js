import React from 'react';
import {connect} from 'react-redux';
import {getTodos} from '../store/actions';

class InputComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.getAllTasks = this.getAllTasks.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  getAllTasks(){
    const task = this.state.value;
    const { getTodos } = this.props;
    getTodos();
  }

  render(){
    const {value} = this.state;
    console.log(value);
    return(
      <div className="InputComponent">
        <input onChange={this.handleChange} value={value} placeholder="Enter a task..."></input>
        <button onClick={this.getAllTasks}>Add task</button>
      </div>
    )
  }


}

const mapDispatchToProps = {
  getTodos
}

export default connect(null, mapDispatchToProps)(InputComponent);