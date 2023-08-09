import './index.less'

export default function End1(props) {
  return (
    <div id='end1'>
      <div id='endText1'>
        <p>您已和<p id='teamText'>{props.team}星球战队</p>联盟</p>
        {/* <p id='textred'>请尽快扫描二维码</p> */}
        <p>愿你们不再被生存所束缚</p>
        <p>能够仰望星空</p>
        <p>延续希望</p>
        <p>纵然星辰晦暗</p>
        <p>但你们在</p>

        <p>光和救赎就在！</p>
      </div>
      <div id='qrCode'><div>1</div><div>2</div></div>
    </div>
  )
}
// 您已和XX星球战队联盟，愿你们不再被生存所束缚，能够仰望星空，延续希望。纵然星辰晦暗，但你们在，光和救赎就在！
