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
    <p>但请坚信你绝不是孤军作战</p>
    <p>亿万星辰将与你同行</p>
    <p>只要满怀希望</p>
    <p>定能突破困境</p>
    <p>迎来胜利的曙光</p>
    </div>
    <div id='rechoose'><div onClick={handleRechoose}>重新选择联盟</div></div>
  </div></div>
  )
}
// 很遗憾，因为不可抗力因素，本次联盟失败。但请坚信你绝不是孤军作战，亿万星辰将与你同行，只要满怀希望，定能突破困境，迎来胜利的曙光。