import { useEffect } from "react";

export default function Even() {
    //useEffect에 첫번쨰 인수인 콜백함수에서 새로운 함수를 리턴하면 반환된 함수는 컴포넌트가 언마운트될때 실행되는함수라는 뜻 useEffect를 가지고있는 컴포넌트가 언마운트될때 실행됨 
  useEffect(() => {
    return () => {
      console.log("언마운트");
    };
  }, []);
  return <div>짝수입니다.</div>;
}
