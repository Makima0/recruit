import React from "react";
import { useState, useEffect, useRef ,useContext} from "react";

import {Loaded} from '../../../App'
import BGM from "../../../assets/BGM.mp3";
import Throttle from "../../../common/helpers/Throttle";
import "./index.less";
export default function MusicPlayer() {
  const [play, setPlay] = useState(true);
  const audio = useRef(null);
  const clickRef = useRef(null);
  const [LoadedState, setLoadedState]=useContext(Loaded)
  const [isPlay,setIsPlay] =useState(false)
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

  useEffect(()=>{
    clickRef.current.click();
  },[LoadedState])
  return (
    <div className={play ? "play-icon playing" : "play-icon"} onClick={handleMusic} ref={clickRef}>
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
