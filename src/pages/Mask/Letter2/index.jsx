import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './index.less'

export default function Letter2() {

  const [teamStatus, setteamStatus] = useState('')
  const [clickCount, setclickCount] = useState(true)
  const navigate = useNavigate()
  const handleTeamChange = (e) => {
    setteamStatus(e.target.value)
  }
  function handleChoose1(team) {
    if (teamStatus) {
      // navigate(`/page2?team=${team}&c=1`)
      navigate(`/match?team=${team}&c=1`)
    } else {
      alert('请选择你的战队')
    }
  }
  function handleClick1() {
    setclickCount(!clickCount)
  }
  return (
    <>
      <div id='letterMask'>
      </div>
      <div id='Letter2'>
        <div id='letterText'>
          {clickCount == true ?
            <>
              <div id='letterText1'>
                <h1>紧急来信</h1>
                <h4>尊敬的艾克塔尔星系战队总指挥官,</h4>
                <p> 你好！</p>
                <p> 星际中的纷争愈演愈烈，如今我方地处联盟辖区的边缘地带，而其他星系正在迅速集结，面对如此规模的竞争对手们，目前我方星系只能坐以待毙，我们恳求您方战队立即赴约，与我方战队完成联盟。</p>
                <span>红岩星系</span>
              </div>

            </> :
            <>
              <div id='teamChoose'>
                <div><input type="radio" name="team" value="om" id='om' onChange={handleTeamChange} /><label htmlFor="om">战队一：擅长修复作战系统漏洞</label></div>
                <div><input type="radio" name="team" value="be" id='be' onChange={handleTeamChange} /><label htmlFor='be'>战队二：擅长构建可靠的作战系统</label></div>
                <div><input type="radio" name="team" value="fe" id='fe' onChange={handleTeamChange} /><label htmlFor='fe'>战队三：擅长打造完美的系统操作界面</label></div>
                <div><input type="radio" name="team" value="vd" id='vd' onChange={handleTeamChange} /><label htmlFor='vd'>战队四：擅长绘制精细的作战地图</label></div>
                <div><input type="radio" name="team" value="md" id='md' onChange={handleTeamChange} /><label htmlFor='md'>战队五：擅长构筑一切所需程序</label></div>
                <div><input type="radio" name="team" value="pp" id='pp' onChange={handleTeamChange} /><label htmlFor='pp'>战队六：擅长制定出其不意的作战战略</label></div>
              </div>
            </>
          }

          <span id='next' onClick={handleClick1}>▽</span>
        </div>
        <button onClick={(() => {
          handleChoose1(teamStatus)
        })}>选好了，前往联盟</button>

      </div></>
  )
}
