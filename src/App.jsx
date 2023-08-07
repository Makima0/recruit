import React, { useState, createContext, useEffect, useRef } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import routes from "./routes";
import MusicPlayer from "./pages/Mainpage/pages/MusicPlayer";
import Background from './common/Background/index'
import "./App.less";
//异步加载组件
// const FirstLoading = React.lazy(() => import('./pages/FirstLoading'));
export const Loaded = createContext();
export const MusicLoad = createContext();
function App() {


  const element = useRoutes(routes);
  const [LoadedState, setLoadedState] = useState(0);
  const [musicLoaded, setmusicLoaded] = useState(0);

  //网络监测
  const [onlineStatus, setOnlinStatus] = useState(true);
  useEffect(() => {
    const handleOfflineStatus = () => {
      setOnlinStatus(false);
    };

    const handleOnlineStatus = () => {
      setOnlinStatus(true);
    };

    window.addEventListener("offline", handleOfflineStatus);
    window.addEventListener("online", handleOnlineStatus);

    // 组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("offline", handleOfflineStatus);
      window.removeEventListener("online", handleOnlineStatus);
    };
  }, []);
  //获取当前地址进行判断
  const currentPath = window.location.pathname;

  const navigate = useNavigate()
  useEffect(() => {

    if (currentPath == '/main') {
      setLoadedState(0)
      navigate('/firstload')
    } else if (LoadedState == 1 && currentPath == '/firstload') {
      navigate('/main')
    }
  }, [LoadedState])
  return (
    <Loaded.Provider value={[LoadedState, setLoadedState]}>
      <Background />
      <MusicLoad.Provider value={[musicLoaded, setmusicLoaded]}>
        <MusicPlayer />
        {element}
      </MusicLoad.Provider >
    </Loaded.Provider>
  );
}
export default App;
