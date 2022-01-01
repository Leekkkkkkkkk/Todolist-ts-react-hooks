import * as React from 'react';
import { Todo } from '../../type';
import Item from './Item'
interface Iprops{
  todoList:Todo[]
  toggleTodo: (id: number) => void
  removeTodo:(id:number)=>void
}
const List: React.FC<Iprops> = ({todoList,toggleTodo,removeTodo}) => {
  return (
    <>
      {
        todoList && todoList.map((item:Todo) => {
          return (
            <Item key={item.id} todo={item} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
          )
        })
      }
    </>
  )
}

export default List