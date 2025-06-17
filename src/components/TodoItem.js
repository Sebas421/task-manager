import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => (
  <li className="todo-item">
    <span
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        flex: 1
      }}
    >
      {todo.text}
    </span>
    <button onClick={() => toggleComplete(todo.id)}>
      {todo.completed ? 'Undo' : 'Mark as complete'}
    </button>
    <button onClick={() => removeTodo(todo.id)}>❌</button>
  </li>
);

export default TodoItem;
