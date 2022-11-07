import React from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id} onClick={() => onDeleteTodo(item.id)}>
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
