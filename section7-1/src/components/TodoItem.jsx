export default function TodoItem(props) {
  const { id, isDone, content, dat } = props.todo;
  return (
    <div>
      <input type="checkbox" checked={isDone} />
      <div>{content}</div>
      <div>{dat}</div>
    </div>
  );
}
