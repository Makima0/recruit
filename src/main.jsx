import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./main.less";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <App />
    <div id='alert'>请竖屏体验</div>
  </BrowserRouter>
);
