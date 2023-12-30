import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./pages/TodoList";
const mockData = [
  { id: 1, content: "첫번째 글", myDate: "2023-12-30" },
  { id: 2, content: "두번째 글", myDate: "2023-12-30" },
  { id: 3, content: "ㅁㄴㅇㄹㅁㄴㅇㄹㄴㅇ", myDate: "2023-12-30" },
];
function App() {
  const idRef = useRef(4);
  const [data, setData] = useState(mockData);

  const insertData = (content) => {
    setData([{ id: idRef.current++, content, myDate: "2023-12-30" }, ...data]);
  };
  return (
    <>
      <Header />
      <TodoEditor insertData={insertData} />
      <TodoList data={data} />
    </>
  );
}

export default App;
