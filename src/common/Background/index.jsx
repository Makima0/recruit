import React, { useEffect } from "react";

import "./index.less";
// import { startAnimation } from "./Background";

function Background() {
  // useEffect(() => {
  //   // const loadScript = async () => {
  //   //   await startAnimation().start();
  //   //   // 在这里可以调用script.js中的函数或变量
  //   // };

  //   // loadScript();
  //   startAnimation()
    
  // }, []);

  return <div className="Background">
    <div id="Jupiter"></div>
    <div id="Venus"></div>
    <div id="Star1"></div>
    <div id="Star2"></div>
    <div id="Star3"></div>
    <div id="meteor1"></div>
    <div id="meteor2"></div>
    <div id="meteor3"></div>
    <div id="meteor456"></div>

  </div>
}

export default Background;