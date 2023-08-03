import React, { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import FirstLoading from '../pages/FirstLoading'
import Mainpage from '../pages/Mainpage'
import Loading from '../pages/Loading'
import Error from '../pages/Error'
import Letter1 from '../pages/Mask/Letter1'
import Letter2 from '../pages/Mask/Letter2'

// 异步加载
const Page1 = React.lazy(() => import('../pages/Mainpage/pages/Page1/index'));
const Page2 = React.lazy(() => import('../pages/Mainpage/pages/Page2/index'));
const Ending = React.lazy(() => import('../pages/Ending'));

export default [
  {
    path:'/firstload',
    element:<FirstLoading/>
  },
  {
    path: '/error',
    element: <Error />
  },
  {
    path: '/main',
    element: <Mainpage />,
  },
  {
    path: '/page1',
    element: <Suspense fallback={<Loading />}><Page1 /></Suspense>
  },
  {path:'/letter1',
  element:<Letter1/>
  },
  {path:'/letter2',
  element:<Letter2/>
  }
  ,
  {
    path: '/page2',
    element: <Suspense fallback={<Loading />}><Page2 /></Suspense>,
  },
  {
    path: '/end',
    element: <Suspense fallback={<Loading />}><Ending /></Suspense>,
  },
  {
    path: '/',
    element: <Navigate to='/main' />,
  }

]