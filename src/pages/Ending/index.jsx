
import { useEffect,useState } from 'react'
import End1 from './components/End1'
import End2 from './components/End2'
import End3 from './components/End3'


import './index.less'

export default function Ending() {
  const [matchDgree, setmatchDgree] = useState(3)
  useEffect(() => {

  }, [matchDgree])

  return (
    <div id='ending'>
      {matchDgree == 1 ? <End1 />
        : matchDgree == 2 ? <End2 />
          : matchDgree == 3 && <End3 />
      }

      <div className={`savebutton ${matchDgree==3?'appearE':''}`}>长按保存到相册</div>
    </div>
  )
}
