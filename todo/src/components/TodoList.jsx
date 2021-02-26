import React,{useReducer} from 'react';
import { initialState } from '../reducers/reducer';
import reducer from '../reducers/reducer'

const TodoList = (props) => {
  const [state] = useReducer(reducer, initialState)
  console.log('todo list:',state)


  return (
    <div>
      {state.todos.length > 0 ? state.todos.map(todo => <span key={todo.id}><h3>{todo.body}</h3></span>): 'You have no Todos'}
    </div>
   );
}

export default TodoList;