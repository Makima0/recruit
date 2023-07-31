import { Navigate } from 'react-router-dom'
import MusicPlayer from '../pages/Mainpage/pages/MusicPlayer'
import Mainpage from '../pages/Mainpage'
import Loading from '../pages/Loading'
import Error from '../pages/Error'
import Page1 from '../pages/Mainpage/pages/Page1/index'


export default [

  {
    path: '/loding',
    element: <Loading />
  },
  {
path:'/error',
element:<Error/>
  },
  {
    path:'/main',
    element:<div><Mainpage/><MusicPlayer/></div> ,
  },
      {
        path:'/page1',
        element:<div><Page1/><MusicPlayer/></div>
      }
,{
    path:'/',
    element:<Navigate to='/main'/>,
   
  }
]