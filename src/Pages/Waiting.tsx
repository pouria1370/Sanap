import { Button } from "@mui/material";

const Waiting = () => {
  return (
    <div
      className="bg-primary-100
     items-center flex flex-col justify-end relative max-w-[500px]   container mx-auto
    h-[900px] "
    >
      <div className="absolute inset-0 bg-slate-300/50"></div>
      <div className="flex z-10 flex-col p-5  bg-slate-100 gap-3">
        <article className="flex flex-col gap-3">
          <span className="text-xs text-slate-600">نماینده محترم :</span>
          <span className="text-xs text-slate-600">
            درخواست ثبت نام شما در حال بررسی است در صورت تائید اطلاعات، اپلیکیشن
            مورد نظر تکمیل خواهد شد
          </span>
        </article>
        <Button
          variant="contained"
          className="bg-primary-100 w-full text-slate-100"
        >
          ورود با حساب کاربری دیگر
        </Button>
      </div>
    </div>
  );
};

export default Waiting;
