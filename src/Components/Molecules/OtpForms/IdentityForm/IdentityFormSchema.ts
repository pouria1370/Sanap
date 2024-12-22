import { z } from "zod";

export const IdentityFormSchema = z
  .object({
    representationCode: z
      .string()
      .min(1, { message: "وارد کردن کد الزامی است" })
      .regex(/^\d+$/, { message: "تنها اعداد باید وارد شوند" }),
    state: z.string().min(1, { message: "وارد کردن استان الزامی است" }),
    city: z.string().min(1, { message: "وارد کردن شهر الزامی است" }),
    address: z.string().min(1, { message: "وارد کردن آدرس الزامی است" }),
    branch: z
      .string()
      .min(1, { message: "وارد کردن شعبه الزامی است" })
      .regex(/^[\u0600-\u06FF\s]+$/, { message: "تنها حروف فارسی وارد کنید" })
      .optional(),
    phone: z
      .string()
      .min(1, { message: "وارد کردن شماره تماس الزامی است" })
      .regex(/^([1-9])\1\d{6}$/, {
        message: "شماره ثابت را درست وارد کنید",
      }),
    representationType: z.enum(["real", "legal"]),
    representationName: z
      .string()
      .min(1, { message: "وارد کردن نام نمایندگی الزامی است" }),
  })
  .refine(
    (data) => {
      if (data.representationType === "legal" && !data.branch) {
        return false;
      }
      return true;
    },
    {
      message: "وارد کردن شعبه الزامی است",
      path: ["branch"],
    }
  );
