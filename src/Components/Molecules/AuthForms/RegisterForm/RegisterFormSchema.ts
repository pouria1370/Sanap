import { z } from "zod";

export const RegisterFormSchema = z.object({
  password: z.string().min(1, { message: "وارد کردن رمز عبور الزامی است" }),
  email: z
    .string()
    .email({ message: "ایمیل را درست وارد کنید" })
    .min(1, { message: "وارد کردن ایمیل الزامی است" }),
});
