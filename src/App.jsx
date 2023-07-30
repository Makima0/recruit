import { useState ,useRef,useEffect} from 'react'
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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} ref={elementRef}>
          count is {count}
        </button>
        <Bar/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
