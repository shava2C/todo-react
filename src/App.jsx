import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(true);

  console.log("最初" + num);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickFaceShow = () => {
    setFaceShowFlg(!faceShowFlg);
  };
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>ほげ</h1>
      <ColorfulMessage color="blue">元気？</ColorfulMessage>
      <ColorfulMessage color="pink">げんきっす</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickFaceShow}>表示・非表示</button>
      {faceShowFlg && <p>:-)</p>}
    </React.Fragment>
  );
};

export default App;
