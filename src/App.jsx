import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickFaceShow = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlg || setFaceShowFlg(true);
    } else {
      faceShowFlg && setFaceShowFlg(false);
    }
  }, [num]);

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
