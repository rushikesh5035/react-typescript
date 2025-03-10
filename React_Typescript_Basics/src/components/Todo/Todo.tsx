import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./Todo.css";

interface ITodoItem {
  id: number;
  title: string;
}

interface TodoProps {
  item: ITodoItem[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="todo-container">
      <ol>
        {props.item.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;
