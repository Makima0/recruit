import { useNavigate } from 'react-router-dom'
import  './index.less'

export default function End3() {
const navigate=useNavigate()

function handleRechoose() {
  navigate('/letter2')
}

  return (
    <div>    <div id='end1'>
    <div id='endText1'>
    <p>您已和<p id='teamText'>星球战队</p>联盟</p>
    <p id='textred'>请尽快扫描二维码</p>
    <p>很遗憾</p>
    <p>然后一起战斗吧！</p>
    <p>相信在你们的联盟下</p>
    <p>很快就可以获得宝贵资源</p>
    </div>
    <div id='rechoose'><div onClick={handleRechoose}>重新选择联盟</div></div>
  </div></div>
  )
}