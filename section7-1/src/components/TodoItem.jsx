const TodoItem = (props) => {
  const { id, content, myDate } = props;

  return (
    <div>
      {id}
      {content}
      {myDate}
    </div>
  );
};
export default TodoItem;
