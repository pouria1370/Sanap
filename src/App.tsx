import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Layout from "@components/Molecules/OtpForms/Layout/Layout";

import OtpFormsViewer from "./Pages/OtpFormsViewer";
import PageNotFound from "./Pages/PageNotFound";
import RequireAuth from "./Pages/RequireAuth";
import Waiting from "./Pages/Waiting";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<OtpFormsViewer />} />
        <Route path="/otp" element={<OtpFormsViewer />} />
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path="/welcome" element={<Waiting />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
