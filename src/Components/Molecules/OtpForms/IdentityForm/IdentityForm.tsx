import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IdentityFormSchema } from "./IdentityFormSchema";
import FormLayout from "@components/Atoms/OtpForms/FormLayout/FormLayout";
import { useState } from "react";
import useSetIdentity from "@apis/OtpForms/Hooks/useSetIdentity";
import { useOtpForm } from "@store/OtpForms/useOtpForm";
import { useAuth } from "@store/Auth/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router";

const IdentityForm = () => {
  const form = useForm({
    resolver: zodResolver(IdentityFormSchema),
    mode: "onBlur",
  });

  const [representationType, setRepresentationType] = useState("real");
  const mutate = useSetIdentity();
  const context = useOtpForm();
  const authContext = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    // API call here
  };

  return (
    <FormLayout>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 items-center"
      >
        {/* Representation Code */}
        <Controller
          name="representationCode"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              className="w-full"
              variant="outlined"
              error={!!fieldState.error}
            >
              <InputLabel>کد نمایندگی</InputLabel>
              <OutlinedInput {...field} label="کد نمایندگی" />
              {fieldState.error && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />

        {/* State */}
        <Controller
          name="state"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              className="w-full"
              variant="outlined"
              error={!!fieldState.error}
            >
              <InputLabel>استان</InputLabel>
              <OutlinedInput {...field} label="استان" />
              {fieldState.error && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />

        {/* City */}
        <Controller
          name="city"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              className="w-full"
              variant="outlined"
              error={!!fieldState.error}
            >
              <InputLabel>شهر</InputLabel>
              <OutlinedInput {...field} label="شهر" />
              {fieldState.error && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />

        {/* Address */}
        <Controller
          name="address"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              className="w-full"
              variant="outlined"
              error={!!fieldState.error}
            >
              <InputLabel>آدرس</InputLabel>
              <OutlinedInput {...field} label="آدرس" multiline rows={4} />
              {fieldState.error && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />

        {/* Representation Name */}
        <Controller
          name="representationName"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              className="w-full"
              variant="outlined"
              error={!!fieldState.error}
            >
              <InputLabel>نام نمایندگی</InputLabel>
              <OutlinedInput {...field} label="نام نمایندگی" />
              {fieldState.error && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />

        {/* Fixed Phone */}
        <div className="flex w-full flex-row-reverse gap-2">
          <FormControl variant="outlined" className="w-[100px]">
            <InputLabel>تلفن ثابت</InputLabel>
            <OutlinedInput disabled value="021" label="تلفن ثابت" />
          </FormControl>
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormControl
                className="w-full"
                variant="outlined"
                error={!!fieldState.error}
              >
                <InputLabel>تلفن ثابت</InputLabel>
                <OutlinedInput {...field} label="تلفن ثابت" />
                {fieldState.error && (
                  <FormHelperText>{fieldState.error.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </div>

        {/* Radio Buttons */}
        <Controller
          name="representationType"
          control={form.control}
          render={({ field }) => (
            <div className="w-full flex flex-row items-center justify-between">
              <FormLabel>نوع نمایندگی :</FormLabel>
              <RadioGroup
                row
                {...field}
                onChange={(e) => {
                  setRepresentationType(e.target.value);
                  field.onChange(e.target.value);
                }}
              >
                <FormControlLabel
                  value="real"
                  control={<Radio />}
                  label="حقیقی"
                />
                <FormControlLabel
                  value="legal"
                  control={<Radio />}
                  label="حقوقی"
                />
              </RadioGroup>
            </div>
          )}
        />

        {/* Branch Field */}
        {representationType === "real" && (
          <Controller
            name="branch"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormControl
                className="w-full"
                variant="outlined"
                error={!!fieldState.error}
              >
                <InputLabel>شعبه</InputLabel>
                <OutlinedInput {...field} label="شعبه" />
                {fieldState.error && (
                  <FormHelperText>{fieldState.error.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          className="bg-primary-100 rounded-lg text-slate-100 w-full"
          disabled={!form.formState.isValid}
        >
          ادامه
        </Button>
      </form>
    </FormLayout>
  );
};

export default IdentityForm;
