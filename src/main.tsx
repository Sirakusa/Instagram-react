import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Wall from "./Pages/Wall";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <div style={{ height: "100vh" }}>
      <Wall />
    </div>
  </BrowserRouter>
);
