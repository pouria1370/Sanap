import { TConfirmationCodeFormType } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
import { Button, FormHelperText, OutlinedInput } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConfirmationCodeFormSchema } from "./ConfirmationCodeFormSchema";
import FormLayout from "@components/Atoms/OtpForms/FormLayout/FormLayout";
import useValidateRepresentationCode from "@apis/OtpForms/Hooks/useValidateRepresentationCode";
import { useOtpForm } from "@store/OtpForms/useOtpForm";
const ConfirmationCodeForm = () => {
  const form = useForm<TConfirmationCodeFormType>({
    resolver: zodResolver(ConfirmationCodeFormSchema),
    mode: "onBlur",
  });
  const mutate = useValidateRepresentationCode();
  const context = useOtpForm();
  const onSubmit = async (formData: TConfirmationCodeFormType) => {
    mutate.mutateAsync().then((res) => context.setOtpForm("NameAndFamilyForm"));
  };
  return (
    <FormLayout header="کد تائید را وارد کنید" subHeader="">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 items-center"
        {...form}
      >
        <div className="flex flex-row gap-2">
          <Controller
            name="first"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <OutlinedInput
                  error={fieldState.error ? true : false}
                  {...form.register("first")}
                  {...field}
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
            name="second"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <OutlinedInput
                  error={fieldState.error ? true : false}
                  {...form.register("second")}
                  {...field}
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
            name="third"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <OutlinedInput
                  error={fieldState.error ? true : false}
                  {...form.register("third")}
                  {...field}
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
            name="fourth"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <OutlinedInput
                  error={fieldState.error ? true : false}
                  {...form.register("fourth")}
                  {...field}
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
            name="fifth"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <OutlinedInput
                  error={fieldState.error ? true : false}
                  {...form.register("fifth")}
                  {...field}
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
        </div>

        <p className="text-xs font-semibold text-slate-500">ارسال مجدد کد</p>
        <Button
          type="submit"
          variant="contained"
          className="bg-primary-100 rounded-lg text-slate-100 w-full"
        >
          ادامه
        </Button>
      </form>
    </FormLayout>
  );
};

export default ConfirmationCodeForm;
