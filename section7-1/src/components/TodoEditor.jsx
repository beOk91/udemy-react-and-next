import { useState } from "react";

const TodoEditor = ({ insertData }) => {
  const [content, setContent] = useState();
  const onClickButton = () => {
    console.log(content);
    insertData(content);
  };
  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={onClickButton}>등록</button>
    </div>
  );
};
export default TodoEditor;
