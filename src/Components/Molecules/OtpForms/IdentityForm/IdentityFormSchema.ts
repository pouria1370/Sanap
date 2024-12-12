import { z } from "zod";

export const IdentityFormSchema = z.object({
  representationCode: z.string().min(1, { message: "وارد کردن کد الزامی است" }),
  state: z.string().min(1, { message: "وارد کردن استان الزامی است" }),
  city: z.string().min(1, { message: "وارد کردن شهر الزامی است" }),
  address: z.string().min(1, { message: "وارد کردن ادرس الزامی است" }),
  branch: z.string().min(1, { message: "وارد کردن شعبه الزامی است" }),
  phone: z.string().min(1, { message: "وارد کردن شماره تماس الزامی است" }),
  representationType: z.enum(["real", "legal"]),
  representationName: z
    .string()
    .min(1, { message: "وارد کردن نام نمایندگی الزامی است" }),
});
