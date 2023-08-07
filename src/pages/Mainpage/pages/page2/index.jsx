import { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import './index.less'

export default function Page2() {
  const [isLongTouch, setIsLongTouch] = useState(0);//记录是否长按超过2秒,两个状态：0表示为初始界面，1表示超过2秒没松手的动态界面
  const [isTouch, setIsTouch] = useState(false);//记录是否点击
  const [isTouchOver, setIsTouchOver] = useState(false);//记录是否松开
  const [pressStartTime, setPressStartTime] = useState(null);//记录点击开始时间
  const [pressTime, setPressTime] = useState(0);//记录长按时间
  const [isTurnto, setIsTurnto] = useState(false);//记录是否跳转
  const navigate = useNavigate()
  let timer

  //从url中获取team和c（次数）
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const team = params.get('team')
  const c = params.get('c')

  const [pageCount, setPageCount] = useState(c);//记录次数

  const handleTouchStart = () => {
    setIsTouch(true)
    setPressStartTime(Date.now())
    timer = setTimeout(() => {
      if(!isTouchOver){
        setIsLongTouch(1)
        setIsTurnto(true)
        console.log(23);
      }
    }, 2000)
    // 长按时间阈值,超过2秒才有变化
  };

  const handleTouchEnd = () => {
    clearTimeout(timer)
    let currentTime = pressStartTime
    setIsTouch(false)
    setPressTime(Date.now() - currentTime);
    setIsTouchOver(true)
    if (pressTime > 2000) {
      setIsLongTouch(true)
    }
  };

  useEffect(() => {
    if (isTurnto&&isTouchOver) {
      navigate(`/page3?c=${pageCount}`)
      setPageCount(pageCount + 1)
    }
  }, [isTurnto,isTouchOver])


  return (
    <div id='page2'>
      {isLongTouch == 0 ?
        <div id='page2start'>
          <div id="MaintitleBox"><div id='Maintitle1'></div>
            <div id="Maintitle2"></div></div>
          <div className="Centralstar"></div>
        </div>
        : <div></div>
      }

      <div id='longTouchButton'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
      </div>
    </div>

  )
}
