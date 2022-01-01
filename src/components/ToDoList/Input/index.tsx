import * as React  from 'react';
import { Button,Input,message } from 'antd';
import 'antd/dist/antd.css'
import { Todo } from '../../type';
interface Iprops {
  addTodo:(todo:Todo)=> void
  todoList: Todo[]
}
const TdInput: React.FC<Iprops> = ({
  addTodo,
  todoList
}):React.ReactElement => {
  const inputRef = React.useRef<HTMLInputElement>() as any
  // const inputRef = React.createRef<HTMLInputElement>() as any
  const add = ():void => {
    // console.log(inputRef.current.state.value)
    const val: string = inputRef.current!.state.value.trim()
    if (val.length) {
      const isExist = todoList.find(item => item.content === val)
      if (isExist) {
        message.error('该事项已存在'); 
        return
      } 
      addTodo({
        id: Math.random(),
        content: val,
        completed:false
      })
      inputRef.current!.state.value = ''
    }
  }
  return (
    <div>
      <Input placeholder="请输入代办事项" style={{width:300,marginRight:10}}   ref={inputRef} /> 
      {/* <input type="text" placeholder="请输入代办事项"  style={{width:300,marginRight:10}} ref={inputRef}  /> */}
      <Button type='primary' onClick={add} >点击添加</Button>
    </div>
  )
}
export default TdInput