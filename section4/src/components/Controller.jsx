import useUpdate from "../hooks/useUpdate";
export default function Controller({ onClick }) {
  useUpdate(() => {
    console.log("CONTROLLER 컴포넌트 업데이트");
  });
  return (
    <>
      <button onClick={onClick} name={-1}>
        -1
      </button>
      <button onClick={onClick} name={-10}>
        -10
      </button>
      <button onClick={onClick} name={-100}>
        -100
      </button>
      <button onClick={onClick} name={+100}>
        +100
      </button>
      <button onClick={onClick} name={+10}>
        +10
      </button>
      <button onClick={onClick} name={+1}>
        +1
      </button>
    </>
  );
}
