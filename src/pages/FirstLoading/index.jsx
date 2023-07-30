import React from 'react'
import { useRef, useEffect, useState,useContext } from 'react'

import Throttle from '../../common/helpers/Throttle'
import {Loaded} from '../../App'
import './index.less'
export default function Bar() {
  const elementRef = useRef(null);
  const [count, setcount] = useState(0);
  const loaderRef = useRef(null);
  const [loaderWidth, setLoaderWidth] = useState(0);
  const [LoadedState, setLoadedState]=useContext(Loaded)
  useEffect(() => {
    if (elementRef.current) {
      const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          const width = entry.contentRect.width;
          setcount(width)
        }
      });
      observer.observe(elementRef.current);
    }
    if (loaderRef.current) {
      const width = loaderRef.current.offsetWidth;
      setLoaderWidth(width);
    }
  }, []);
  useEffect(()=>{
    setTimeout(() => {
      setLoadedState(1)
    }, 5000);
  },[])
  return (
    <div id='firstLoading' onLoadedData={()=>{}}>
      <div id='spaceShip'>飞船</div>
      <div className="loader" ref={loaderRef}>
        <div id="bar" ref={elementRef}></div>
        <div id="num">{Math.round((count / loaderWidth) * 100)}%</div>
      </div>
    </div>
  )
}
