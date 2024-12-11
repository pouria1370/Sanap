import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Molecules/Layout/Layout.tsx";
import Test from "./Components/Molecules/Test/Test.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/ss" element={<App />} /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Test />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
