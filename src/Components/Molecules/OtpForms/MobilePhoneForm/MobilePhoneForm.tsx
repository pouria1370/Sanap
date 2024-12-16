import { TMobilePhoneFormType } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
import { Button, FormHelperText, OutlinedInput } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MobilePhoneFormSchema } from "./MobilePhoneFormSchema";
import { useOtpForm } from "@store/OtpForms/useOtpForm";
import useSendMobilePhoneNumber from "@apis/OtpForms/Hooks/useSendMobilePhoneNumber";
import { useState } from "react";
import FormLayout from "@components/Atoms/OtpForms/FormLayout/FormLayout";
const MobilePhoneForm = () => {
  const form = useForm<TMobilePhoneFormType>({
    resolver: zodResolver(MobilePhoneFormSchema),
    mode: "onBlur",
  });
  const mutate = useSendMobilePhoneNumber();
  const [error, setError] = useState<string>("");
  const context = useOtpForm();
  const onSubmit = async (formData: TMobilePhoneFormType) => {
    if (!form.getFieldState("mobile").error) {
      await mutate.mutateAsync(form.getValues("mobile"), {
        onError: (error) => {
          setError(error.error_details?.fa_details as string);
        },
        onSuccess: () => {
          setError("");
          context.setOtpForm("ConfirmationCodeForm");
          context.setMobile(formData.mobile);
        },
      });
    }
    return;
  };
  return (
    <FormLayout
      header="شماره موبایل خود را وارد کنید"
      subHeader="کد تائید برای شما ارسال خواهد شد"
    >
      <form
        className="flex flex-col gap-20 items-center"
        onSubmit={form.handleSubmit(onSubmit)}
        {...form}
      >
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
              {!!error && (
                <FormHelperText className="text-xs font-semibold bg-red-100 p-4 mt-2 text-red-600">
                  {error}
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
    </FormLayout>
  );
};

export default MobilePhoneForm;
