import { useState ,useRef,useEffect,useContext,createContext} from 'react'
import FirstLoading from './pages/FirstLoading'

import MusicPlayer from './pages/Mainpage/MusicPlayer'
import './App.less'
export const Loaded =createContext()
function App() {
  const [LoadedState, setLoadedState] = useState(0)
  return (
    <Loaded.Provider value={[LoadedState, setLoadedState]}>
        <MusicPlayer/>
        {LoadedState<2?<FirstLoading />:<div>主页</div>}
    </Loaded.Provider>
  )
}
export default App
