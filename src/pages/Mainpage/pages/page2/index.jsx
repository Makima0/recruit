import { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import './index.less'

export default function Page2() {
  const [isLongTouch, setIsLongTouch] = useState(false);//记录是否长按超过2秒,两个状态：0表示为初始界面，1表示超过2秒没松手的动态界面
  const [isTouch, setIsTouch] = useState(false);//记录是否点击
  const [isTouchOver, setIsTouchOver] = useState(true);//记录是否松开

  const navigate = useNavigate()
  let timer

  //从url中获取team和c（次数）
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const team = params.get('team')
  const c = params.get('c')

  const [pageCount, setPageCount] = useState(c);//记录次数

  const handleTouchStart2 = () => {  
   setIsTouchOver(false) 
   setIsTouch(true)
    // 长按时间阈值,超过2秒才有变化
  };

  const handleTouchEnd = () => {
    clearTimeout(timer)
    setIsTouch(false)
    setIsTouchOver(true)
    console.log(isTouchOver);
  };

  useEffect(() => {
    if(isTouch){
  setTimeout(() => { 
      if(!isTouchOver){
        setIsLongTouch(true)
      }
    }, 2000)
  }
  }, [isTouch])
  
  useEffect(() => {
    if (isLongTouch&&isTouchOver) {
      navigate(`/page3?c=${pageCount}`)
      setPageCount(pageCount + 1)
    }
  }, [isLongTouch,isTouchOver])


  return (
    <div id='page2'>
      {!isLongTouch  &&
        <div id='page2start'>
          <div id="MaintitleBox"><div id='Maintitle1'></div>
            <div id="Maintitle2"></div></div>
          <div className="Centralstar"></div>
        </div>}
        {
          (isLongTouch&&!isTouchOver)&&
          <div>第二个界面</div>
        } 
      

      <div id='longTouchButton'
        onTouchStart={() => {
          handleTouchStart1();
          handleTouchStart2();
        }}
        onTouchEnd={handleTouchEnd}>
      </div>
    </div>

  )
}
