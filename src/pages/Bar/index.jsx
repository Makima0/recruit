import React from 'react'
import {useRef ,useEffect,useState} from 'react'
import './index.less'
export default function Bar() {
  const elementRef = useRef(null);
  const [count, setcount]=useState(0)
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
  }, []);
  return (
    <div>  
        <div className="loader">
            <div id="bar" ref={elementRef}></div>
            <div id="num">{parseInt((count/192)*100)}%</div>
        </div>
    </div>
  )
}
