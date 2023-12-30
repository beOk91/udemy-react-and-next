import TodoItem from "../components/TodoItem";

const TodoList = (props) => {
  console.log(props);
  return (
    <>
      {props.data.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default TodoList;
