import  './index.less'

export default function End1() {
  const team=1
  return (
    <div id='end1'>
      <div id='endText1'>
      <p>您已和<p id='teamText'>{team}星球战队</p>联盟</p>
      <p id='textred'>请尽快扫描二维码</p>
      <p>进行两支战队的整合</p>
      <p>然后一起战斗吧！</p>
      <p>相信在你们的联盟下</p>
      <p>很快就可以获得宝贵资源</p>
      </div>
      <div id='qrCode'><div>1</div><div>2</div></div>
    </div>
  )
}
