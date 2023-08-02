import { useState } from 'react'
import './index.less'
import { useNavigate } from 'react-router-dom'

export default function Letter1() {
  const [LetterStatus, setLetterStatus] = useState(0)
  const [teamStatus, setteamStatus] = useState('')
  const navigate = useNavigate()

  function handleLetter() {
    setLetterStatus(1)
  }
  const handleTeamChange = (e) => {
    setteamStatus(e.target.value)
  }
  function handleChoose1(team){
    if (teamStatus) {
      navigate(`/page2?team=${team}`)
    } else {
      alert('请选择你的战队')
    }
    console.log(22);
  }
  return (
    <><div id='letterMask'>
    </div>

      {LetterStatus == 0 ?
        <div id='Letter'>
          <p>你收到了一封紧急来信</p>
          <p> 打开看看吧</p>
          <div id='letter1' onClick={handleLetter}>
          </div></div>
        : <div id='Letter2'>
          <div id='letterText'>
            <div id='letterText1'>
              <h1>紧急来信</h1>
              <h4>尊敬的艾克塔尔星系战队总指挥官,</h4>
              <p>请您立即赴约，选择一支战队加入到红岩星系中与之匹配度最高的战队，以便减少磨合期，发挥本星系战队的最大作用，完成联盟。</p>
            </div>
            <div id='teamChoose'>
              <div><input type="radio" name="team" value="om" onChange={handleTeamChange} />战队1 （擅长稳定作战系统）</div>
              <div><input type="radio" name="team" value="be" onChange={handleTeamChange} />战队2 （擅长构建可靠的作战系统）</div>
              <div><input type="radio" name="team" value="fe" onChange={handleTeamChange} />战队3 （擅长锻造武器）</div>
              <div><input type="radio" name="team" value="vd" onChange={handleTeamChange} />战队4 （擅长绘制精细的作战地图）</div>
              <div><input type="radio" name="team" value="md" onChange={handleTeamChange} />战队5 （擅长迅速调整作战方法）</div>
              <div><input type="radio" name="team" value="pp" onChange={handleTeamChange} />战队6 （擅长制定出其不意的战略）</div>
            </div>
          </div>
          <button onClick={(() => {
            handleChoose1(teamStatus)
          })}>选好了，前往支援</button>

        </div>}
    </>
  )
}
