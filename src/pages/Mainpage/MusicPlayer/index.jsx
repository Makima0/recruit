import React from "react";
import { useState, useEffect, useRef } from "react";

import BGM from "../../../assets/BGM.mp3";
import Throttle from "../../../common/helpers/Throttle";
import "./index.less";
export default function MusicPlayer() {
  const [play, setPlay] = useState(true);
  const audio = useRef(null);
  const handleMusic = Throttle(() => {
    //处理音乐图标点击事件
    if (play) {
      setPlay(false);
      audio.current.pause();
    } else {
      setPlay(true);
      audio.current.play();
    }
  }, 1000);
  useEffect(()=>{
    // audio.current.pause();
    // audio.current.play();
  },[])
  return (
    <div className={play ? "play-icon playing" : "play-icon"} onClick={handleMusic}>
      <audio
        ref={audio}
        src={BGM}
        loop ={true}
        controls={false}
        autoPlay={play}
      ></audio>
    </div>
  );
}
