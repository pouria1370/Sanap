import { Button } from "@mui/material";
let v = import.meta.env.DEV;
const Waiting = () => {
  return (
    <div
      className="bg-primary-100
     items-center flex flex-col text-sm sm:text-base lg:text-xl xl:text-2xl xxl:text-3xl justify-end relative min-w-[400px] max-w-[1500px]   container mx-auto
    h-screen"
    >
      <div className="absolute inset-0 bg-slate-300/50"></div>
      <div className="flex z-10 flex-col p-5   bg-slate-100 gap-3">
        <article className="flex flex-col gap-3">
          <span className=" text-slate-600">نماینده محترم :</span>
          <span className=" text-slate-600">
            درخواست ثبت نام شما در حال بررسی است در صورت تائید اطلاعات، اپلیکیشن
            مورد نظر تکمیل خواهد شد
          </span>
        </article>
        <Button
          variant="contained"
          className="bg-primary-100 w-full text-sm sm:text-base lg:text-xl xl:text-2xl xxl:text-3xl text-slate-100"
        >
          {v ? "yes" : "false"}
        </Button>
      </div>
    </div>
  );
};

export default Waiting;
