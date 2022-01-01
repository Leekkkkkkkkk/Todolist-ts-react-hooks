import * as React from 'react';
import { Todo } from '../../type';
import { Switch,Button,Input } from 'antd';

interface Iprops{
  todo: Todo,
  toggleTodo: (id: number) => void
  removeTodo:(id:number)=>void
}

const Item: React.FC<Iprops> = ({ todo, toggleTodo, removeTodo }) => {
  const { id, content, completed } = todo
  // function onChange(checked: boolean) {
  //   console.log(`switch to ${checked}`);
  // }
  return (
    <>
      <Switch checked={completed} onChange={()=>toggleTodo(id)} />
      <Input value={content} style={{width:300,margin:10}} />
      <Button type="primary" danger onClick={ ()=> removeTodo(id) }>删除</Button>
    </>
  )
}
export default Item