import { useState } from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {

  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if(inputText !== '')
    setListTodo([...listTodo, inputText]);
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo ])
  }

  return (
    <>
      <div className='main-container'>
        <div className="center-container">
          <h1 className='app-heading'>TODO LIST</h1>
          <hr />
          <TodoInput addList={addList} />
          {listTodo.map((listItem, i) => {
            return (
              <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
