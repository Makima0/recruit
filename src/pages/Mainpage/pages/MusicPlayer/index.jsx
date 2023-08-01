
import { useState,  useRef, useContext } from "react";
import { useNavigate } from 'react-router-dom'

import { Loaded } from "../../../../App";
import BGM from "../../../../assets/BGM.mp3";
import Throttle from "../../../../common/helpers/Throttle";
import "./index.less";
export default function MusicPlayer() {
  const [play, setPlay] = useState(false);
  const audio = useRef(null);
  const clickRef = useRef(null);
  const [LoadedState, setLoadedState] = useContext(Loaded);
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
  const navigate = useNavigate()

  const handleStart = Throttle(() => {
    navigate('/page1')
    setPlay(true);
    audio.current.play();
    setLoadedState(2)
  })
  

  return (
    <div>
    <div
      className={play ? "play-icon playing" : "play-icon"}
      onClick={handleMusic}
      ref={clickRef}
    >
      <audio ref={audio} src={BGM} loop={true} controls={false}></audio>
    </div>
    {LoadedState == 1 && <div onClick={handleStart} id="clickStart">点击继续</div>}
    </div>
  );
}
