import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Layout from "@components/Molecules/Layout/Layout";
import MobilePhoneForm from "@components/Molecules/MobilePhoneForm/MobilePhoneForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MobilePhoneForm />} />
          <Route path="otp" element={<MobilePhoneForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
