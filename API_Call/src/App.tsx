import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface TodoItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
};

export default App;
