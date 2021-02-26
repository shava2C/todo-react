import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>ほげ</h1>
      <ColorfulMessage color="blue">元気？</ColorfulMessage>
      <ColorfulMessage color="pink">げんきっす</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;
