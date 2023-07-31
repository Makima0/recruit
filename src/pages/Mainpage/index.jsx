

import { useContext } from "react";

import { useEffect } from 'react'
import { Loaded } from "../../App";
import './index.less'

export default function Mainpage() {
  const [LoadedState, setLoadedState] = useContext(Loaded);
  useEffect(() => {
    setLoadedState(1)
  }, [])//确保手动从首页一返回时点击继续也出现


  return (
    <div id='mainpage'>
      <p>星河守护</p>
      <p>永无止境的挑战</p>
      <div>欢迎来到星际帝国</div>
    </div>
  )
}
