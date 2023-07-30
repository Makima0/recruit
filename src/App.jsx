import { useState ,useRef,useEffect,useContext,createContext} from 'react'
import Bar from './pages/Bar'

import MusicPlayer from './pages/Mainpage/MusicPlayer'
import './App.less'
export const Loaded =createContext()
function App() {
  const [LoadedState, setLoadedState] = useState(false)
  return (
    <Loaded.Provider value={[LoadedState, setLoadedState]}>
        <MusicPlayer/>
        <Bar />
    </Loaded.Provider>
  )
}
export default App
