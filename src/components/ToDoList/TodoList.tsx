import * as React from 'react'
import { ACTION_TYPE, IState, Todo } from '../type'
import TdInput from './Input'
import List from './List'
import { todoReducer } from './reducer'
// const initalState:IState = {
//   todoList:[]
// }
function init(initTodoList: Todo[]): IState{
  return {
    todoList:initTodoList
  }
}
const TodoList: React.FC = ():React.ReactElement => {
  // const [todoList, settodoList] = React.useState<Todo[]>([])
  const [state,dispatch]=React.useReducer(todoReducer,[],init)
  React.useEffect(() => {
    console.log(state.todoList)
  },[state.todoList])
  const addTodo = React.useCallback((Todo:Todo) => {
    console.log(Todo);
    // settodoList(todoList=>[...todoList,Todo])
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload:Todo
    })
  }, [])
  const removeTodo = React.useCallback((Todo:number) => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload:Todo
    })
  }, [])
  const toggleTodo = React.useCallback((id:number) => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload:id
    })
  },[])
  return (
    <div>
      <TdInput addTodo={addTodo} todoList={state.todoList} />
      <List todoList={state.todoList} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  )
}
export default TodoList