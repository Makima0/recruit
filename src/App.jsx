import React,{ useState, createContext, useEffect,useRef} from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import FirstLoading from "./pages/FirstLoading";
import Error from "./pages/Error";
import MusicPlayer from "./pages/Mainpage/pages/MusicPlayer";
import "./App.less";
//异步加载组件
// const FirstLoading = React.lazy(() => import('./pages/FirstLoading'));
export const Loaded = createContext();
function App() {
  const element = useRoutes(routes);
  const [LoadedState, setLoadedState] = useState(0);

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
  return (
    <Loaded.Provider value={[LoadedState, setLoadedState]}>
      {LoadedState!=0&&<MusicPlayer/>}
      {LoadedState == 0 ? <FirstLoading /> : <div>{element}</div>}
    </Loaded.Provider>
  );
}
export default App;
//
