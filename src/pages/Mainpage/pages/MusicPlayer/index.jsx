
import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import { Loaded, MusicLoad } from "../../../../App";
import BGM from "../../../../assets/BGM.mp3";
import Throttle from "../../../../common/helpers/Throttle";
import "./index.less";
export default function MusicPlayer() {
  const [play, setPlay] = useState(false);
  const audio = useRef(null);
  const clickRef = useRef(null);
  const [LoadedState, setLoadedState] = useContext(Loaded);
  const [musicLoaded, setmusicLoaded] = useContext(MusicLoad);
  const [ReadyState, setReadyState] = useState(0)
  const navigate = useNavigate()
  const currentPath = window.location.pathname;
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



 const handleStart =()=> {
    // console.log(ReadyState);
    if (audio.current.readyState!= 4) {
      alert(audio.current.readyState)
      // console.log(ReadyState);
      setmusicLoaded(0)
      setTimeout(() => {
        handleStart()
      },2500)
    } else {
      setmusicLoaded(1)
      setPlay(true);
      audio.current.play()
    }

  }

  // useEffect(() => {
  //   const audioElement = audio.current;
  // setReadyState(audio.current.readyState);
  // console.log(audio.current.readyState);
  //   const handleReadyStateChange = () => {
  //     setReadyState(audioElement.readyState);
  //   };

  //   audioElement.addEventListener('readystatechange', handleReadyStateChange);

  //   return () => {
  //     audioElement.removeEventListener('readystatechange', handleReadyStateChange);
  //   };
  // }, []);

  return (
    <div>
      <div
        className={play ? "play-icon playing" : "play-icon"}
        onClick={handleMusic}
        ref={clickRef}
      >
        <audio ref={audio} src={BGM} loop={true} controls={false} preload="auto"></audio>
      </div>
      {LoadedState == 1 & currentPath == '/main' && <div onClick={() => {
        navigate('/page1')
        handleStart()
      }} id="clickStart">点击继续</div>}
    </div>
  );
}
