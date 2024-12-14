import { TConfirmationCodeFormType } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import FormLayout from "@components/Atoms/OtpForms/FormLayout/FormLayout";
import useValidateRepresentationCode from "@apis/OtpForms/Hooks/useValidateRepresentationCode";
import { useOtpForm } from "@store/OtpForms/useOtpForm";
import { useRef } from "react";
import ResendOtp from "@components/ResendCodeTimer/ResendCodeTimer";
const ConfirmationCodeForm = () => {
  const form = useForm<TConfirmationCodeFormType>({
    mode: "onBlur",
    defaultValues: {
      digits: ["", "", "", "", ""],
    },
  });
  const mutate = useValidateRepresentationCode();
  const context = useOtpForm();
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  // const handleInputChange = (value: string, index: number) => {
  //   if (!/^\d?$/.test(value)) {
  //     return;
  //   }

  //   form.setValue(`digits.${index}`, value);

  //   if (value !== "" && index < refs.current.length - 1) {
  //     refs.current[index + 1]?.focus();
  //   }
  // };
  const handleInputChange = (
    value: string,
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    form.setValue(`digits.${index}`, value);

    // Handle auto-focus for the next input
    if (value !== "" && index < refs.current.length - 1) {
      refs.current[index + 1]?.focus();
    }

    // Handle backspace: focus the previous input if the field is cleared
    if (
      value === "" &&
      index > 0 &&
      event.nativeEvent.inputType === "deleteContentBackward"
    ) {
      refs.current[index - 1]?.focus();
    }
  };
  const digits = form.watch("digits");
  const isSubmitDisabled = digits.some((digit) => digit === "");

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
          {Array.from({ length: 5 }).map((_, index) => (
            <Controller
              key={index}
              name={`digits.${index}`}
              control={form.control}
              render={({ field }) => (
                <TextField
                  {...field}
                  inputRef={(ref) => (refs.current[index] = ref)} // Store input reference
                  onChange={(e) => handleInputChange(e.target.value, index, e)} // Pass the event to handleInputChange
                  slotProps={{
                    input: {
                      maxLength: 1,
                      inputMode: "numeric",
                      classes: {
                        input: "rounded-xl text-primary-100 text-center",
                      },
                      pattern: "[0-9]*",
                    },
                  }}
                  variant="outlined"
                  size="small"
                />
              )}
            />
          ))}
        </div>
        <ResendOtp timer={120} />
        <Button
          type="submit"
          variant="contained"
          className="bg-primary-100 disabled:bg-slate-400 rounded-lg text-slate-100 w-full"
          disabled={isSubmitDisabled}
        >
          ادامه
        </Button>
      </form>
    </FormLayout>
  );
};

export default ConfirmationCodeForm;
