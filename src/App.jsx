import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Bar from './pages/Bar'
import './App.less'

function App() {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null);
  useEffect(() => {
    if (elementRef.current) {
      const width = elementRef.current.offsetWidth; // 获取元素的宽度
      console.log('元素的宽度：', width);
    }
  }, []);
  return (
    <>
      <Bar />
    </>
  )
}

export default App
