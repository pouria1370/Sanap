import { TIdentityFormType } from "@customTypes/OtpForm/OtpForm";
import {
  Button,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IdentityFormSchema } from "./IdentityFormSchema";
import FormLayout from "@components/Atoms/FormLayout/FormLayout";
import { useState } from "react";
const IdentityForm = () => {
  const form = useForm<TIdentityFormType>({
    resolver: zodResolver(IdentityFormSchema),
    mode: "onBlur",
  });
  const [representationType, setRepresentationType] = useState("Real");
  return (
    <FormLayout
      header="شماره موبایل خود را وارد کنید"
      subHeader="کد تائید برای شما ارسال خواهد شد"
    >
      <form className="flex flex-col gap-5 items-center" {...form}>
        <Controller
          name="representationCode"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="w-full">
              <OutlinedInput
                error={fieldState.error ? true : false}
                {...form.register("representationCode")}
                {...field}
                placeholder="کد نمایندگی"
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
          name="state"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="w-full">
              <OutlinedInput
                error={fieldState.error ? true : false}
                {...form.register("state")}
                {...field}
                placeholder="استان"
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
          name="city"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="w-full">
              <OutlinedInput
                error={fieldState.error ? true : false}
                {...form.register("state")}
                {...field}
                placeholder="شهر"
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
          name="address"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="w-full">
              <OutlinedInput
                error={fieldState.error ? true : false}
                {...form.register("address")}
                {...field}
                rows={20}
                label="ادرس"
                minRows={10}
                maxRows={20}
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
          name="representationName"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="w-full">
              <OutlinedInput
                error={fieldState.error ? true : false}
                {...form.register("representationName")}
                {...field}
                label="ادرس"
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
        <div className="flex w-full flex-row-reverse gap-2">
          <OutlinedInput
            label={"تلفن ثابت"}
            className="w-[100px] pr-4 rounded-xl"
            disabled
            value={"021"}
          />
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="w-full relative mb-1">
                <OutlinedInput
                  error={fieldState.error ? true : false}
                  {...form.register("phone")}
                  {...field}
                  placeholder="تلفن ثابت"
                  className="w-full rounded-xl"
                />
                {fieldState.error && (
                  <FormHelperText className="text-xs mt-2 absolute font-semibold text-red-600">
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex  w-full flex-row gap-5">
          <Controller
            name="representationType"
            control={form.control}
            render={({ field }) => (
              <div className="w-ful flex flex-row items-center justify-around">
                <FormLabel id="demo-controlled-radio-buttons-group">
                  نوع نمایندگی :
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={representationType}
                  onChange={(e) => {
                    field.onChange();
                    setRepresentationType(e.target.value);
                  }}
                  row
                >
                  <FormControlLabel
                    value="Real"
                    control={<Radio />}
                    label="حقیقی"
                  />
                  <FormControlLabel
                    value="State"
                    control={<Radio />}
                    label="حقوقی"
                  />
                </RadioGroup>
              </div>
            )}
          />{" "}
        </div>

        {representationType === "Real" && (
          <Controller
            name="branch"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <OutlinedInput
                  error={fieldState.error ? true : false}
                  {...form.register("branch")}
                  {...field}
                  label="شعبه"
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
        )}

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

export default IdentityForm;
