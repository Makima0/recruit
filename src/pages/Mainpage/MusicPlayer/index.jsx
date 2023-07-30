import React from "react";
import { useState, useEffect, useRef, useContext } from "react";

import { Loaded } from "../../../App";
import BGM from "../../../assets/BGM.mp3";
import Throttle from "../../../common/helpers/Throttle";
import "./index.less";
export default function MusicPlayer() {
  const [play, setPlay] = useState(false);
  const audio = useRef(null);
  const clickRef = useRef(null);
  const [LoadedState, setLoadedState] = useContext(Loaded);
  const [isPlay, setIsPlay] = useState(false);
  const handleMusic = Throttle(() => {
    //处理音乐图标点击事件
    console.log(1);
    if (play) {
      setPlay(false);
      audio.current.pause();
    } else {
      setPlay(true);
      audio.current.play();
    }
  }, 1000);
  const handleStart = Throttle(()=>{
    setLoadedState(2)
    setPlay(true);
    audio.current.play();
  })
//   useEffect(() => {
//     clickRef.current.click();
//   }, [LoadedState]);
  return (
    <div
      className={play ? "play-icon playing" : "play-icon"}
      onClick={handleMusic}
      ref={clickRef}
    >
      <audio ref={audio} src={BGM} loop={true} controls={false}></audio>
      {LoadedState==1 && <div onClick={handleStart}>点击继续</div>}
    </div>
  );
}
