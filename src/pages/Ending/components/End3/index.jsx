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
    <p>很遗憾</p>
    <p>因为不可抗力因素</p>
    <p>本次联盟失败</p>
    <p>但请坚信你会拥有非常强大的意志力和勇气</p>
    <p>突破困境</p>
    <p>胜利的曙光照耀在你觉醒之际</p>
    </div>
    <div id='rechoose'><div onClick={handleRechoose}>重新选择联盟</div></div>
  </div></div>
  )
}