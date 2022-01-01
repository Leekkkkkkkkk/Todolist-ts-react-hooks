 export  interface Todo {
  id: number,
  content: string,
  completed: boolean
 }
export interface IState {
  todoList:Todo[]
}

export interface IAction {
  type: ACTION_TYPE,
  payload:Todo|number
}

export enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo'
}