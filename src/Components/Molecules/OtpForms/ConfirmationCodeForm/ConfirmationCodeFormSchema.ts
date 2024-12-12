import { z } from "zod";

export const ConfirmationCodeFormSchema = z.object({
  first: z.string().max(1),
  second: z.string().max(1),
  third: z.string().max(1),
  fourth: z.string().max(1),
  fifth: z.string().max(1),
});
