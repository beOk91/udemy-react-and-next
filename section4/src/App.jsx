import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import useUpdate from "./hooks/useUpdate";
import useInput from "./hooks/useInput";
//1. 마운트(탄생)
//2. 업데이트 (변화, 리랜더)
//3. 언마운트 (죽음))
function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();

  useUpdate(() => {
    console.log("APP 컴포넌트 업데이트");
  });

  const onClick = (e) => {
    setCount(count + parseInt(e.target.name));
  };
  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };

  useEffect(() => {
    console.log("마운트");
  }, []);

  // useEffect(() => {
  //   console.log(count, text);
  // }, [count, text]);
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" text={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClick={onClick} />
      </section>
    </div>
  );
}

export default App;
