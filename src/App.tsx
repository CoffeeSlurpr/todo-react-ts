import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import './App.css';

interface Todo {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleNewTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text: text }]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onNewTodo={handleNewTodo} />
      <TodoList items={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
