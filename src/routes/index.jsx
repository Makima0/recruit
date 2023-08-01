import React, { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import Mainpage from '../pages/Mainpage'
import Loading from '../pages/Loading'
import Error from '../pages/Error'

// 异步加载
const Page1 = React.lazy(() => import('../pages/Mainpage/pages/Page1/index'));
const Page2 = React.lazy(() => import('../pages/Mainpage/pages/Page2/index'));

export default [

  {
    path: '/error',
    element: <Error />
  },
  {
    path: '/main',
    element: <><Mainpage /></>,
  },
  {
    path: '/page1',
    element: <Suspense fallback={<Loading />}><Page1 /></Suspense>
  }
  ,
  {
    path: '/page2',
    element: <Suspense fallback={<Loading />}><Page2 /></Suspense>,
  },
  {
    path: '/',
    element: <Navigate to='/main' />,
  }

]