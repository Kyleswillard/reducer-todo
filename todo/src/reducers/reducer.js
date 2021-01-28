export const initialState = { todos: []}
const reducer = (state, action) => {
  switch(action.types) {
    case 'ADD_TODO':
      return {...state, todos: [...state.todos,{Id: new Date(), desc: action.payload, isComplete: false}]}
    default: return initialState
  }
}

export default reducer

