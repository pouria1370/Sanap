import { z } from "zod";

export const NameAndFamilyFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "وارد کردن نام الزامی است" })
    .regex(/^[\u0600-\u06FF\s]+$/, { message: "تنها حروف فارسی وارد کنید" }),
  family: z
    .string()
    .min(1, { message: "وارد کردن نام خانوادگی الزامی است" })
    .regex(/^[\u0600-\u06FF\s]+$/, { message: "تنها حروف فارسی وارد کنید" }),
});
