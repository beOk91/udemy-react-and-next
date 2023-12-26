import { useState } from "react";
import TodoItem from "../components/TodoItem";

const TodoList = (props) => {
  const { todos } = { ...props };
  return (
    <>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </>
  );
};

export default TodoList;
