import { useState, createContext } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import FirstLoading from './pages/FirstLoading'

import './App.less'
export const Loaded = createContext()
function App() {
  const element = useRoutes(routes)
  const [LoadedState, setLoadedState] = useState(0)

  return (
    <Loaded.Provider value={[LoadedState, setLoadedState]}>
      {LoadedState == 0 ? < FirstLoading /> : <div>{ element }</div>}
    </Loaded.Provider>
  )
}
export default App
// 