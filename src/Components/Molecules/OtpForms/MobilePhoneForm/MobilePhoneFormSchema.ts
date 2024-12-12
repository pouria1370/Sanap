import { z } from "zod";

export const MobilePhoneFormSchema = z.object({
  mobile: z
    .string()
    .min(1, { message: "وارد کردن شماره همراه الزامی است" })
    .regex(/^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$/, {
      message: "لطفا شماره همراه خود را به درستی وارد کنید",
    }),
});
