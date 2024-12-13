import { TConfirmationCodeFormType } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
import {
  Button,
  FormHelperText,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import FormLayout from "@components/Atoms/OtpForms/FormLayout/FormLayout";
import useValidateRepresentationCode from "@apis/OtpForms/Hooks/useValidateRepresentationCode";
import { useOtpForm } from "@store/OtpForms/useOtpForm";
import { useRef } from "react";
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
  const handleInputChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    form.setValue(`digits.${index}`, value);

    if (value !== "" && index < refs.current.length - 1) {
      refs.current[index + 1]?.focus();
    }
  };
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
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  slotProps={{
                    input: {
                      maxLength: 1,
                      inputMode: "numeric",
                      classes: {
                        input: "rounded-xl text-primary-100",
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
