// import Letter1 from '../../../Mask/Letter1'

import "./index.less";
import { useState, useContext } from "react";

import { useEffect } from "react";
import { Loaded, MusicLoad } from "../../../../App";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Loading";
export default function Page1() {
  const [LoadedState, setLoadedState] = useContext(Loaded);
  const [musicLoaded, setmusicLoaded] = useContext(MusicLoad);

  const navigate = useNavigate();
  const [textCount, settextCount] = useState(1);
  function handleNext() {
    settextCount(textCount + 1)
  }
  useEffect(() => {
    setLoadedState(2);
  }, []); //确保手动从主页前进时点击继续消失

  useEffect(() => {
    if (textCount > 2) {
      navigate("/letter1");
    }
  }, [textCount]);

  return (<>
  {musicLoaded==0?<Loading/>:
    <div id='page1'>

      {textCount == 1 &&
        <>
          <p id='text1'>公元3202年，人类建立了一个由数百个星系组成的星际帝国。由于帝国的扩张和人口的剧烈增长，资源的稀缺性成为了一个严重的问题。</p>
          <span id='next1' onClick={handleNext}>▽</span></>
      }
      {textCount == 2 &&
        <>
          <div id='text2'><p>后来出现了一种神秘物质，拥有无限的能量和潜力，足以改变整个星际格局。各个星系闻讯而动，争相争夺。</p>
            <p>而宇宙中的竞争对手们拥有有强大的舰队和科技实力，通过商议，红岩星系决定与艾克塔尔星系联盟，共同争夺。</p>
          </div>
          <span id='next1' onClick={handleNext}>▽</span>
        </>

      }   </div>}
      </>
  )
}
