import React, { useEffect } from "react";

import "./index.less";
import { startAnimation } from "./Background";

function Background() {
  useEffect(() => {
    // const loadScript = async () => {
    //   await startAnimation().start();
    //   // 在这里可以调用script.js中的函数或变量
    // };

    // loadScript();
    startAnimation()
    
  }, []);

  return <canvas id="stars"></canvas>;
}

export default Background;
