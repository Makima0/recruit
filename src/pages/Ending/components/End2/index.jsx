import './index.less'
export default function End2(props) {
  return (
    <div>  <div id='end1'>
      <div id='endText1'>
        <p>您已和<p id='teamText'>{props.team}星球战队</p>联盟</p>
        <p>虽然匹配度不高</p>
        {/* <p id='textred'>请尽快扫描二维码</p> */}
        <p>但是也无法阻碍你们前行的脚步</p>
        <p>愿你们凭借勇气和坚毅</p>
        <p>延续种族生存的希望！</p>
      </div>
      <div id='qrCode'><div>1</div><img src='../../../../../src/common/group-lower.png'></img><div>2</div></div>
    </div></div>
  )
}
// 您已和XX星球战队联盟，虽然匹配度不高，但是也无法阻碍你们前行的脚步，愿你们凭借勇气和坚毅，延续种族生存的希望！
