import React, {useState} from 'react';

const TodoForm = (props) => {
  const {dispatch} = props
  const [body, setBody] = useState('')


  const handleChange = (e) => {
    e.preventDefault()
    setBody(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: 'ADD_TODO', payload: body})
    setBody('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type='text' value={body} onChange={handleChange} />
      <button>Add Todo</button>
      </form>
    </div>
   );
}

export default TodoForm;