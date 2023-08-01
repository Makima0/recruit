import React,{Suspense} from 'react'
import { Navigate } from 'react-router-dom'
import MusicPlayer from '../pages/Mainpage/pages/MusicPlayer'
import Mainpage from '../pages/Mainpage'
import Loading from '../pages/Loading'
import Error from '../pages/Error'

// 异步加载
const Page1 = React.lazy(() => import('../pages/Mainpage/pages/Page1/index'));
export default [

  {
path:'/error',
element:<Error/>
  },
  {
    path:'/main',
    element:<><Mainpage/><MusicPlayer/></> ,
  },
      {
        path:'/page1',
        element:<Suspense fallback={<Loading />}><Page1/><MusicPlayer/></Suspense>
      }
,{
    path:'/',
    element:<Navigate to='/main'/>,
   
  }
]