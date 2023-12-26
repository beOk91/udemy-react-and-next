import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useContext, useMemo } from "react";
import { TodoStateContext } from "../TodoContext";
export default function TodoList() {
  const { todos } = useContext(TodoStateContext);
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("todo 분석함수 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <div>전체 투두:{totalCount}</div>
      <div>완료 투두:{doneCount}</div>
      <div>미완 투두:{notDoneCount}</div>
      <input placeholder="검색어를 입력하세요 " />
      <div className="todos_wrapper">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}
