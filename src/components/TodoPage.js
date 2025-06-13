import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h2>My Tasks</h2>
      <div className="side-by-side">
        <TodoForm addTodo={addTodo} />
        <FilterButtons setFilter={setFilter} />
      </div>
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default TodoPage;
