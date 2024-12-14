import useSendMobilePhoneNumber from "@apis/OtpForms/Hooks/useSendMobilePhoneNumber";
import { TOtpResendCodeType } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

const ResendOtp = ({ timer }: TOtpResendCodeType) => {
  const [timeLeft, setTimeLeft] = useState<number>(timer);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const sendCode = useSendMobilePhoneNumber();
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId); // Cleanup interval on component unmount
    } else {
      setIsButtonDisabled(false);
    }
  }, [timeLeft]);

  const handleResendClick = () => {
    sendCode.mutate();
    setTimeLeft(timer);
    setIsButtonDisabled(true);
  };
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center flex-row gap-6  w-full justify-center">
      <Button onClick={handleResendClick} disabled={isButtonDisabled}>
        ارسال دوباره کد
      </Button>
      <span className="w-4">
        {isButtonDisabled && ` ${formatTime(timeLeft)}`}
      </span>
    </div>
  );
};

export default ResendOtp;
