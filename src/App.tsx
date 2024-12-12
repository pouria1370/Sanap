import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Layout from "@components/Molecules/Layout/Layout";
import MobilePhoneForm from "@components/Molecules/MobilePhoneForm/MobilePhoneForm";
import ConfirmationCodeForm from "@components/Molecules/ConfirmationCodeForm/ConfirmationCodeForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MobilePhoneForm />} />
          <Route path="otp" element={<MobilePhoneForm />} />
          <Route path="confirmation" element={<ConfirmationCodeForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
