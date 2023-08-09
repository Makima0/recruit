import { useEffect, useState } from 'react';
import './index.less'

export default function Page3() {
  //从url中获取team和c（次数）
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const team = params.get('team')
  const c = params.get('c')
  const [maskShow, setMaskShow] = useState(false)
  const [matchShow, setmatchShow] = useState(false)//记录“点击匹配按钮”是否出现

  const handleMaskNext = function () {
    setmatchShow(true)
    setMaskShow(false)
  }

  useEffect(() => {
    if (c != 1) {
      setmatchShow(true)
    } else {
      setTimeout(() => {
        setMaskShow(true)
      }, 2000)
    }
  }, [])

  return (
    <div id='page3'>
      <div id='teamlogo'></div>
      {maskShow == true &&
        <div id='MatchMask'>
          <p>尊敬的艾克塔尔星系战队总指挥官，当前为您遇到的第一支红岩星系的战队，请您测试我方战队与红岩星系战队的匹配度，从而判断两队是否适合联盟</p>
          <div onClick={handleMaskNext}>下一步</div>
        </div>}
      {
        matchShow == true &&
        <div id='matchButton'>
          点击测试匹配度
        </div>
      }
    </div>
  )
}
