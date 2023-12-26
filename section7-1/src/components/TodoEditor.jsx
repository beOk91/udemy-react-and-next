import { useState } from "react";

export default function TodoEditor({ onCreate }) {
  const [todo, setTodo] = useState();
  const onClickButton = () => {
    onCreate(todo);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="새로운 Todo..."
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
