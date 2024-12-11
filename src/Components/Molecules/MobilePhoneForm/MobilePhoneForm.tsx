import { TMobilePhoneFormType } from "@customTypes/OtpForm/OtpForm";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MobilePhoneFormSchema } from "./MobilePhoneFormSchema";
const MobilePhoneForm = () => {
  const form = useForm<TMobilePhoneFormType>({
    resolver: zodResolver(MobilePhoneFormSchema),
    mode: "onBlur",
  });

  return (
    <Card className="bg-slate-100 font-Iransans">
      <CardHeader
        className="text-center font-semibold leading-10"
        title={
          <div className="text-xl font-bold">
            {"شماره موبایل خود را وارد کنید"}
          </div>
        }
        subheader={
          <div className="text-sm font-bold mt-1">
            {"کد تائید برای شما ارسال خواهد شد"}
          </div>
        }
      />
      <CardContent>
        <form className="flex flex-col gap-20 items-center" {...form}>
          <Controller
            name="mobile"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <OutlinedInput
                  error={fieldState.error ? true : false}
                  {...form.register("mobile")}
                  {...field}
                  placeholder="تلفن همراه"
                  className="w-full rounded-xl"
                />
                {fieldState.error && (
                  <FormHelperText className="text-xs font-semibold text-red-600">
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />
          <Button
            type="submit"
            variant="contained"
            className="bg-primary-100 rounded-lg text-slate-100 w-full"
            disabled={form.formState.errors["mobile"] ? true : false}
          >
            ادامه
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MobilePhoneForm;
