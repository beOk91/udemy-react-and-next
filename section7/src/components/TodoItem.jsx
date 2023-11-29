import "./TodoItem.css";
import { memo } from "react";
function TodoItem({ id, isDone, content, date, onUpdate, onDelete }) {
  // const { id, isDone, content, date, onUpdate, onDelete } = { ...data };
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
