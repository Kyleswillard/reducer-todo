import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers/reducer'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList/>
    </div>
  );
}

export default App;
