import { TNameAndFamilyFormType } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
import { Button, FormHelperText, OutlinedInput } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NameAndFamilyFormSchema } from "./NameAndFamilyFormSchema";
import FormLayout from "@components/Atoms/OtpForms/FormLayout/FormLayout";
const NameAndFamilyForm = () => {
  const form = useForm<TNameAndFamilyFormType>({
    resolver: zodResolver(NameAndFamilyFormSchema),
    mode: "onBlur",
  });

  return (
    <FormLayout
      header="شماره موبایل خود را وارد کنید"
      subHeader="کد تائید برای شما ارسال خواهد شد"
    >
      <form className="flex flex-col gap-20 items-center" {...form}>
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
          className="bg-primary-100 rounded-lg text-slate-100 w-full"
          // disabled={form.formState.errors["mobile"] ? true : false}
        >
          ادامه
        </Button>
      </form>
    </FormLayout>
  );
};

export default NameAndFamilyForm;
