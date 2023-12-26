import { useState, useContext } from "react";
import "./TodoEditor.css";
import { TodoDispatchContext } from "../TodoContext";
export default function TodoEditor() {
  const { onCreate } = useContext(TodoDispatchContext);
  const [todo, setTodo] = useState("");
  const onClickCreate = () => {
    onCreate(todo);
  };
  const onChangeText = (text) => {
    setTodo(text.target.value);
  };
  return (
    <div className="TodoEditor">
      <input placeholder="새로운 Todo ..." onChange={onChangeText} />
      <button onClick={onClickCreate}>추가</button>
    </div>
  );
}
