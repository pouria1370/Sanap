import { TNameAndFamilyFormType } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
import { Button, FormHelperText, OutlinedInput } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NameAndFamilyFormSchema } from "./NameAndFamilyFormSchema";
import FormLayout from "@components/Atoms/OtpForms/FormLayout/FormLayout";
import { useOtpForm } from "@store/OtpForms/useOtpForm";
const NameAndFamilyForm = () => {
  const form = useForm<TNameAndFamilyFormType>({
    resolver: zodResolver(NameAndFamilyFormSchema),
    mode: "onBlur",
  });
  const context = useOtpForm();
  const onSubmit = async (formData: TNameAndFamilyFormType) => {
    context.setFullName({ family: formData.family, name: formData.name });
    context.setOtpForm("IdentityForm");
  };
  const name = form.watch("name");
  const family = form.watch("family");

  return (
    <FormLayout
      header="شماره موبایل خود را وارد کنید"
      subHeader="کد تائید برای شما ارسال خواهد شد"
    >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-20 items-center"
        {...form}
      >
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="w-full">
              <OutlinedInput
                error={fieldState.error ? true : false}
                {...form.register("name")}
                {...field}
                placeholder="نام"
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
        <Controller
          name="family"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="w-full">
              <OutlinedInput
                error={fieldState.error ? true : false}
                {...form.register("family")}
                {...field}
                placeholder="نام خانوادگی"
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
          className="bg-primary-100 disabled:bg-slate-400 rounded-lg text-slate-100 w-full"
          disabled={!form.formState.isValid}
        >
          ادامه
        </Button>
      </form>
    </FormLayout>
  );
};

export default NameAndFamilyForm;
