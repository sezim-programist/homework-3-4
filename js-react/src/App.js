import React, { useState } from 'react';

function Todo() {

  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

 
  const addTask = () => {
    if (inputText.trim() !== '') {
      setTasks([...tasks, { text: inputText, completed: false }]);
      setInputText(''); 
    }
  };

  return (
    <div>
      <h1>Todo </h1>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Добавить задачу"
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>
            {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
