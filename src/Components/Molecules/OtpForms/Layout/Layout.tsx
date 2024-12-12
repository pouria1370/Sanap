import { useOtpForm } from "@store/OtpForms/useOtpForm";
import MobilePhoneForm from "../MobilePhoneForm/MobilePhoneForm";
import ConfirmationCodeForm from "../ConfirmationCodeForm/ConfirmationCodeForm";
import IdentityForm from "../IdentityForm/IdentityForm";
import NameAndFamilyForm from "../NameAndFamilyForm/NameAndFamilyForm";

const Layout = () => {
  const state = useOtpForm();
  const children = {
    MobilePhoneForm: <MobilePhoneForm />,
    ConfirmationCodeForm: <ConfirmationCodeForm />,
    IdentityForm: <IdentityForm />,
    NameAndFamilyForm: <NameAndFamilyForm />,
  };
  return (
    <div className="flex flex-col items-center relative max-w-[500px]  my-20 bg-gray-200 container mx-auto">
      <div className="bg-primary-100 items-center  size-full h-[200px] rounded-b-3xl " />
      <div className="absolute mt-32 w-[80%]">{children[state.otpForm]}</div>
    </div>
  );
};

export default Layout;
