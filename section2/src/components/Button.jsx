import "./Button.css";
export default function Button({ color, text, children }) {
  const onClick = (e) => {
    console.log(e);
    alert("버튼을 클릭");
  };

  return (
    <button
      onClick={onClick}
      className="button"
      style={{ backgroundColor: color }}
    >
      {text}
      {children}
    </button>
  );
}
