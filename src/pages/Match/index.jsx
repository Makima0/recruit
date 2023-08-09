import { useEffect, useState } from 'react';
import './index.less'
import { useNavigate } from 'react-router-dom';

export default function Match() {
  const matchList = {
    teamName: ['运维', '后端', '前端', '视觉', '移动开发', '产品',],
    'om': {
      matchdgree: [72, 76, 100, 65, 20, 23]
    }, 'be': {
      matchdgree: [81, 100, 76, 78, 21, 22]
    }, 'fe': {
      matchdgree: [100, 81, 72, 88, 40, 20]
    }, 'vd': {
      matchdgree: [40, 21, 20, 34, 100, 80]
    }, 'md': {
      matchdgree: [88, 78, 65, 100, 34, 29]
    }, 'pp': {
      matchdgree: [20, 22, 23, 29, 80, 100]
    }
  }
  //从url中获取team和c（次数）
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const team = params.get('team')
  const c = params.get('c')
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(Math.floor(Math.random() * 90) + 10);
    }, 80);

    setTimeout(() => {
      clearInterval(interval);
      setNumber(matchList[team].matchdgree[parseInt(c) - 1])
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const navigate = useNavigate()
  const handleGiveup = function () {
    if (c == '6') {
      navigate('/end?r=3')
    } else {
      navigate(`/page2?team=${team}&c=${parseInt(c) + 1}`)
    }
  }
  const handlealign = function () {
    if (matchList[team].matchdgree[parseInt(c) - 1] >= 75) {
      navigate(`/end?r=1&team=${matchList.teamName[parseInt(c) - 1]}`)
    } else {
      navigate(`/end?r=2&team=${matchList.teamName[parseInt(c) - 1]}`)
    }

  }
  return (
    <div id='matchingPage'>
      <div id='match1'>
        <p>当前为&nbsp;&nbsp;<p id='teamName'>{matchList.teamName[parseInt(c) - 1]}星球战队</p></p>
        <p>与我方战队匹配度为&nbsp;<p id='matchDgree'>{number}%</p></p></div>
      {c == '1' && <>
        {matchList.om.matchdgree[parseInt(c) - 1] < 75 && <div id='match2'>匹配度较低</div>}
        <div id='match3'>
          <h5>战队介绍：</h5>
          <p>此战队是红岩星系精准交互响应的工程师</p>
          <p>负责打造完美的网络页面</p>
          <p>运用HTML/CSS/JS等工具构建作战系统的操作界面</p>
          <p>从而提供更加便利和高效的操作体验</p>
        </div>
        <div id='match4'>
          <h5>战队优势：</h5>
          <p>拥有清晰逻辑与独特的美感。用代码和创意构建着系统操作界面</p>
        </div>
      </>
      }
      {c == '2' && <>
        {matchList.om.matchdgree[parseInt(c) - 1] < 75 && <div id='match2'>匹配度较低</div>}
        <div id='match3'>
          <h5>战队介绍：</h5>
          <p>此战队是红岩星系强大的数据架构师</p>
          <p>负责作战系统的后端开发</p>
          <p>利用Go语言将作战需求转化为数据模型</p>
          <p>为作战系统提供坚实的数据支持</p>
        </div>
        <div id='match4'>
          <h5>战队优势：</h5>
          <p>拥有分析和解决复杂的技术难题的能力。为红岩星系构建稳定可靠的作战系统</p>
        </div>
      </>
      }
      {c == '3' && <>
        {matchList.om.matchdgree[parseInt(c) - 1] < 75 && <div id='match2'>匹配度较低</div>}
        <div id='match3'>
          <h5>战队介绍：</h5>
          <p>此战队是红岩星系的神秘白帽黑客</p>
          <p>负责维护作战系统的稳定与安全</p>
          <p>利用Linux修复系统漏洞，为系统服务器的良好运转提供坚实后盾</p>
          <p>抵御其他黑客对作战系统的入侵。</p>
        </div>
        <div id='match4'>
          <h5>战队优势：</h5>
          <p>能将复杂的问题抽丝剥茧， 具有广阔的技术视野。能够确保作战系统的稳定性。</p>
        </div>
      </>
      }
      {c == '4' && <>
        {matchList.om.matchdgree[parseInt(c) - 1] < 75 && <div id='match2'>匹配度较低</div>}
        <div id='match3'>
          <h5>战队介绍：</h5>
          <p>此战队是红岩星系方寸间世界的缔造者</p>
          <p>负责开发信号处理应用程序</p>
          <p>以APP为载体，实现快速接收、处理与发送各种信号的目标</p>
          <p>便于内部获取信息并与外界进行交流</p>
        </div>
        <div id='match4'>
          <h5>战队优势：</h5>
          <p>具备敏捷开发的能力，用精密的代码构建完美的APP，打造使用者指尖的精彩。</p>
        </div>
      </>
      }
      {c == '5' && <>
        {matchList.om.matchdgree[parseInt(c) - 1] < 75 && <div id='match2'>匹配度较低</div>}
        <div id='match3'>
          <h5>战队介绍：</h5>
          <p>此战队是红岩星系精准交互响应的工程师</p>
          <p>负责打造作战系统的操作界面</p>
          <p>利用HTML/CSS/JS 等工具实现在操作界面一键即可触发作战系统的不同作战模式</p>
          <p>极致的作战系统使用体验由他们实现</p>
        </div>此战队是红岩星系创意和美感的实践者
        负责绘制出精美的作战地形图
        利用PS、Figma等工具创造出细致且独特的作品
        用灵动的画笔与绚丽的色彩将作战地形图完美呈现
        <div id='match4'>
          <h5>战队优势：</h5>
          <p>对色彩、形状和布局等细节具有敏锐的感知力。他们能够将独一无二的想法转变为精彩绝伦的画面。</p>
        </div>
      </>
      }
      {c == '6' && <>
        {<div id='match2'>当前为红岩星系最后一支战队</div>}
        <div id='match3'>
          <h5>战队介绍：</h5>
          <p>此战队是红岩星系的战略规划者</p>
          <p>负责结合战况洞察作战所需，制定作战计划</p>
          <p>利用智慧和洞察力引领作战的方向</p>
          <p>用精准的创意勾勒出作战计划的轮廓</p>
        </div>
        <div id='match4'>
          <h5>战队优势：</h5>
          <p>具备战况导向的思维和同理心。能够创造出独特且符合战况的作战计划，并基于实际战况做出相应的战略优化和改进。</p>
        </div>
      </>
      }
      <div id='match5'><span onClick={handleGiveup}>放弃联盟</span><span onClick={handlealign}>进行联盟</span></div>
    </div>
  )
}
