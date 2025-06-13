import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => (
  <li className="todo-item">
    <span
      onClick={() => toggleComplete(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
    >
      {todo.text}
    </span>
    <button onClick={() => removeTodo(todo.id)}>❌</button>
  </li>
);

export default TodoItem;
