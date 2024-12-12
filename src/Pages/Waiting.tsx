import { Button, Modal } from "@mui/material";

const Waiting = () => {
  return (
    <div className="bg-primary-100">
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex flex-col  gap-3">
          <article className="flex flex-col gap-3">
            <span className="text-xs text-slate-500">نماینده محترم :</span>
            <span className="text-xs text-slate-500">
              درخواست ثبت نام شما در حال بررسی است در صورت تائیداطلاعات،
              اپلیکیشن مورد نظظر تکمیل خواهد شد
            </span>
          </article>
          <Button
            variant="contained"
            className="bg-primary-100 w-full text-slate-100"
          >
            ورود با حساب کاربری دیگر
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Waiting;
