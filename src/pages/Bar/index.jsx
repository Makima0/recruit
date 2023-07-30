import React from 'react'
import { useRef, useEffect, useState } from 'react'
import './index.less'
export default function Bar() {
  const elementRef = useRef(null);
  const [count, setcount] = useState(0);
  const loaderRef = useRef(null);
  const [loaderWidth, setLoaderWidth] = useState(0);
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
  return (
    <div id='firstLoading'>
      <div id='spaceShip'>飞船</div>
      <div className="loader" ref={loaderRef}>
        <div id="bar" ref={elementRef}></div>
        <div id="num">{Math.round((count / loaderWidth) * 100)}%</div>
      </div>
    </div>
  )
}
