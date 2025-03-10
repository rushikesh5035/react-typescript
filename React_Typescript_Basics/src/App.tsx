import React, { useState } from "react";

import Todo from "./components/Todo/Todo";
import Counter from "./components/Counter/Counter";

const myTodoItems = [
  {
    id: 1,
    title: "I need to finish my work",
  },
  {
    id: 2,
    title: "I need to watch instagram",
  },
  {
    id: 3,
    title: "I need to sleep",
  },
];

const App: React.FC = () => {
  const [state, setState] = useState<boolean>(true);
  return (
    <div>
      <Todo item={myTodoItems} />
      <button onClick={(e) => setState(!state)}>Toggle</button>
      {state ? <Counter /> : ""}
    </div>
  );
};

export default App;
