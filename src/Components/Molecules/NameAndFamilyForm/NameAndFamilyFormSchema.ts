import { z } from "zod";

export const NameAndFamilyFormSchema = z.object({
  name: z.string().min(1, { message: "وارد کردن شماره همراه الزامی است" }),
  family: z.string().min(1, { message: "وارد کردن شماره همراه الزامی است" }),
});
