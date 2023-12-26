import "./App.css";
import TodoList from "./pages/TodoList";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import { useRef, useState } from "react";
const mockData = [
  { id: 1, isDone: false, content: "React 공부하기", dat: "2023.07.10" },
  { id: 2, isDone: false, content: "빨래널기", dat: "2023.07.10" },
  { id: 3, isDone: false, content: "노래 연습하기", dat: "2023.07.10" },
];
function App() {
  const idRef = useRef(4);
  const [todos, setTodos] = useState(mockData);
  const onCreate = (content) => {
    setTodos([
      ...todos,
      { id: idRef.current++, isDone: false, content, dat: "2023.12.27" },
    ]);
  };
  return (
    <>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
