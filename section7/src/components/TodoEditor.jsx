import { useState } from "react";
import "./TodoEditor.css";
export default function TodoEditor({ onCreate }) {
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
