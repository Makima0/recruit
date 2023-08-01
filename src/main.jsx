import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Loading from './pages/Loading'
import Error from './pages/Error'
import './main.less'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    {/* <Loading /> */}
    <Error />


  </BrowserRouter>,
)
