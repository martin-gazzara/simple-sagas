import React from 'react';
import InputComponent from './components/InputComponent';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <InputComponent/>
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
