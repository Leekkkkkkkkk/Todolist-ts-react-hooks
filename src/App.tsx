import TodoList from "./components/ToDoList/TodoList";
import { Card } from 'antd';
import 'antd/dist/antd.css'
const App: React.FC = () => {
  return (
    <>
      <Card bordered={true} style={{ width: 500,margin:'0 auto' }}>
        <TodoList />
      </Card>
    </>
  )
};

export default App;