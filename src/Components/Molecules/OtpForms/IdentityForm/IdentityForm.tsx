import { TIdentityFormType } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
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
import FormLayout from "@components/Atoms/OtpForms/FormLayout/FormLayout";
import { useState } from "react";
import useSetIdentity from "@apis/OtpForms/Hooks/useSetIdentity";
import { useOtpForm } from "@store/OtpForms/useOtpForm";
import { useAuth } from "@store/Auth/useAuth";
const IdentityForm = () => {
  const form = useForm<TIdentityFormType>({
    resolver: zodResolver(IdentityFormSchema),
    mode: "onBlur",
  });
  const [representationType, setRepresentationType] = useState("real");
  /*
TODO HERE I MUST FINISH THE FORM

*/
  const mutate = useSetIdentity();
  const context = useOtpForm();
  const authContext = useAuth();
  const onSubmit = async (formData: TIdentityFormType) => {
    // mutate
    //   .mutateAsync({
    //     address: formData.address,
    //     agency_type: formData.representationType,
    //     agent_code: formData.representationCode,
    //     city_code: formData.city,
    //     county: formData.city,
    //     first_name: context.fullName.name,
    //     last_name: context.fullName.family,
    //     insurance_branch: formData.branch,
    //     phone: formData.phone,
    //     Name: formData.representationName,
    //     phone_number: "09000000009",
    //     province: formData.state,
    //   })
    //   .then((res) => {
    //     authContext.setToken("This is Token");
    //   });
    authContext.setToken("This is Token");
    console.log("what");
  };
  console.log(form.formState.dirtyFields);
  return (
    <FormLayout>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 items-center"
        {...form}
      >
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
                  {...form.register("representationType")}
                  {...field}
                  ref={field.ref}
                  value={representationType}
                  onChange={(e) => {
                    setRepresentationType(e.target.value);
                    field.onChange(e.target.value);
                  }}
                  row
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
          />{" "}
        </div>

        {representationType === "real" && (
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
          disabled={
            JSON.stringify(form.formState.errors) !== "{}" ? true : false
          }
        >
          ادامه
        </Button>
      </form>
    </FormLayout>
  );
};

export default IdentityForm;
