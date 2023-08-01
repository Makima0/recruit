import {useEffect} from 'react'
import  './index.less'

export default function Loading() {
  useEffect(() => { console.log(111); },[])
  
  return (
    <div>
    <div data-js="astro" className="astronaut">
      <div className="head"></div>
      <div className="arm arm-left"></div>
      <div className="arm arm-right"></div>
      <div className="body">
        <div className="panel"></div>
      </div>
      <div className="leg leg-left"></div>
      <div className="leg leg-right"></div>
      <div className="schoolbag"></div>
      
    </div><div>加载中</div></div>
  )
}
