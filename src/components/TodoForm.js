import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
         type="text"
         value={text}
         onChange={(e) => setText(e.target.value)}
         placeholder="New task"
/>
<button type="submit">Add</button>

    </form>
  );
};

export default TodoForm;
