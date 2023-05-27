import React, {MouseEventHandler, useState} from 'react';
import Task from "./Task/Task";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import './App.css';

const  App = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: 'Задача 1' },
    { id: 2, text: 'Задача 2' },
    { id: 3, text: 'Задача 3' },
  ]);
const [text, setText] = useState('');

const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
};

const addTask = (text: string) => {
    setTodo(prevState => [...prevState,{ id: Date.now(), text}])
};

const onRemoveTask = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    event.preventDefault();
     setTodo(prevState => prevState.filter(element=> element.id !== id));
};
  return (
    <div className="App">
      <AddTaskForm
          text={text}
          onChange={onChange}
          addTask={addTask}
      />
        {todo.map(element => (
            <Task
                onRemoveTask={onRemoveTask}
                key={element.id}
                id={element.id}
                text={element.text} />
        ))}
    </div>
  );
};

export default App;
