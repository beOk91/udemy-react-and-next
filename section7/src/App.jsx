import { useRef, useState, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const mockData = [
  {
    id: 1,
    isDone: false,
    content: "리액트 공부하기ㅏ",
    date: new Date().toDateString(),
  },
  {
    id: 2,
    isDone: true,
    content: "운동하기",
    date: new Date().toDateString(),
  },
  {
    id: 3,
    isDone: false,
    content: "책읽기",
    date: new Date().toDateString(),
  },
];

function App() {
  const idRef = useRef(4);
  const [todos, setTodos] = useState(mockData);
  const onCreate = (content) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().toDateString(),
      },
    ]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = useCallback((targetId) => {
    console.log(targetId);
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }, []);
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
