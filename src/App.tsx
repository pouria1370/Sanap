import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

import PageNotFound from "./Pages/PageNotFound";
import RequireAuth from "./Pages/RequireAuth";
import Waiting from "./Pages/Waiting";
import AuthViewer from "./Pages/AuthViewer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AuthViewer />} />
        <Route path="/login" element={<AuthViewer />} />
        <Route element={<RequireAuth />}>
          <Route path="/welcome" element={<Waiting />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
