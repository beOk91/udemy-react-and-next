import "./TodoItem.css";
import { memo } from "react";
import { useContext } from "react";
import { TodoDispatchContext } from "../TodoContext";
function TodoItem({ id, isDone, content, date }) {
  // const { id, isDone, content, date, onUpdate, onDelete } = { ...data };
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheck = () => {
    onUpdate(id);
  };
  const onClickButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheck} />
      <div className="content">{content}</div>
      <div className="date">{date}</div>
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}

export default memo(TodoItem);
