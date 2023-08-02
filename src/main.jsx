import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Ending from './pages/Ending'

import App from "./App.jsx";
import "./main.less";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      {/* <App /> */}
      <Ending/>
  </BrowserRouter>
);
