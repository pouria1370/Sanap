import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IdentityFormSchema } from "./IdentityFormSchema";
import FormLayout from "@components/Atoms/OtpForms/FormLayout/FormLayout";
import React, { useDeferredValue, useLayoutEffect, useState } from "react";
import useSetIdentity from "@apis/OtpForms/Hooks/useSetIdentity";
import { useOtpForm } from "@store/OtpForms/useOtpForm";
import { useNavigate } from "react-router";
import { TIdentityFormType } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
import useGetCities from "@apis/OtpForms/Hooks/useGetCities";
import useGetStates from "@apis/OtpForms/Hooks/useGetStates";
import useGetInsurances from "@apis/OtpForms/Hooks/useGetInsurances";
import { useAuth } from "@store/Auth/useAuth";
import useValidateRepresentationCode from "@apis/OtpForms/Hooks/useValidateRepresentationCode copy";

const IdentityForm = () => {
  const form = useForm<TIdentityFormType>({
    resolver: zodResolver(IdentityFormSchema),
    mode: "onChange",
    defaultValues: {
      state: "", // Empty string instead of null
      city: "",
      representationName: "",
      representationType: "real",
      branch: "",
    },
  });
  const [error, setError] = useState<string>("");

  //#region States
  const state = form.watch("state"); // Watch the state field
  const city = form.watch("city");
  const [selectedState, setSelectedState] = useState<string>("0");
  const [typedInsuranceName, setTypedInsuranceName] = useState<string>("");
  const defferedValue = useDeferredValue(typedInsuranceName);
  const { data: statesData } = useGetStates();
  const { data: citiesData } = useGetCities(selectedState); // Fetch cities based on state
  const { data: insurancesData } = useGetInsurances(
    selectedState,
    defferedValue
  ); // Fetch insurances based on state
  //#endregion

  //#region Hooks

  const mutate = useSetIdentity();
  const context = useOtpForm();
  const navigate = useNavigate();
  const auth = useAuth();
  const validateRepresentationalCode = useValidateRepresentationCode();

  //#endregion

  //#region Handlers
  const onSubmit = async (formData) => {
    mutate.mutate(
      {
        address: form.getValues("address"),
        agency_type: form.getValues("representationType"),
        agent_code: form.getValues("representationCode"),
        city_code: "021",
        county: citiesData?.data
          .find((item) => item.name === form.getValues("city"))
          ?.id.toString() as string,
        first_name: context.fullName.name,
        insurance_branch: insurancesData?.data.response
          .find((item) => item.name === form.getValues("representationName"))
          ?.id.toString() as string,
        last_name: context.fullName.family,
        phone: form.getValues("phone"),
        phone_number: context.mobile,
        province: statesData?.data
          .find((item) => item.name_split === form.getValues("state"))
          ?.id.toString() as string,
        name:
          form.getValues("representationType") === "legal"
            ? form.getValues("branch")
            : "",
      },
      {
        onSuccess: (res) => {
          auth.setToken(res.response.access);
          auth.setRefreshToken(res.response.refresh);
          navigate("/welcome");
        },
        onError: (error) => setError(error.error_details?.fa_details as string),
      }
    );
  };

  const checkIfTheRepresentationalCodeIsValid = async (e) => {
    if (!form.getFieldState("representationCode").error) {
      return await validateRepresentationalCode.mutateAsync(e.target.value, {
        onError: (err) => setError(err.error_details?.fa_details as string),
        onSuccess: () => setError(""),
      });
    }
  };

  //#endregion

  useLayoutEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <FormLayout>
      {error && error !== "" && (
        <div className="whitespace-pre bg-red-100 text-xs font-bold p-4  mb-5">
          {error}
        </div>
      )}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 items-center"
      >
        <Controller
          name="representationCode"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              error={!!fieldState.error}
              className="w-full"
              variant="outlined"
            >
              <InputLabel>کد نمایندگی</InputLabel>
              <OutlinedInput
                {...field}
                label="کد نمایندگی"
                onBlur={(e) => checkIfTheRepresentationalCodeIsValid(e)}
              />
              {fieldState.error && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />

        <Controller
          name="state"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl className="w-full" error={!!fieldState.error}>
              <Autocomplete
                {...field}
                options={statesData?.data.map((item) => item.name_split) || []}
                onChange={(_, value) => {
                  field.onChange(value || "");
                  context.setIsGettingCityEnabled(true);
                  setSelectedState(
                    statesData?.data
                      .find((item) => item.name_split === value)
                      ?.id.toString() as string
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="استان"
                    placeholder="انتخاب استان"
                  />
                )}
              />
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
            <FormControl className="w-full" error={!!fieldState.error}>
              <Autocomplete
                {...field}
                options={
                  citiesData?.data.map((state) => state.name) as string[]
                }
                onChange={(_, value) => field.onChange(value || "")}
                disabled={!state} // Disable if state is not selected
                renderInput={(params) => (
                  <TextField {...params} label="شهر" placeholder="انتخاب شهر" />
                )}
              />
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
            <FormControl className="w-full" error={!!fieldState.error}>
              <Autocomplete
                {...field}
                options={
                  state
                    ? (insurancesData?.data?.response?.map(
                        (item) => item.name
                      ) as string[]) ?? []
                    : []
                }
                inputValue={typedInsuranceName}
                onInputChange={(
                  event: React.ChangeEvent<{}>,
                  value: string
                ) => {
                  setTypedInsuranceName(value);
                }}
                onChange={(_, value) => {
                  field.onChange(value || "");
                }}
                disabled={!state}
                renderInput={(params) => (
                  <TextField {...params} label="نام نمایندگی" />
                )}
              />
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
            <div className="w-full flex flex-row items-center justify-start">
              <FormLabel>نوع نمایندگی :</FormLabel>
              <RadioGroup row {...field}>
                <FormControlLabel
                  value="real"
                  control={<Radio size="small" />}
                  label={<div className="text-sm">حقیقی</div>}
                />
                <FormControlLabel
                  value="legal"
                  control={<Radio size="small" />}
                  label={<div className="text-sm">حقوقی</div>}
                />
              </RadioGroup>
            </div>
          )}
        />

        {/* Branch Field */}
        {form.watch("representationType") === "legal" && (
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
          className="bg-primary-100 rounded-lg disabled:bg-slate-400 text-slate-100 w-full"
          disabled={
            !form.formState.isValid || validateRepresentationalCode.isError
              ? true
              : false
          }
        >
          ادامه
        </Button>
      </form>
    </FormLayout>
  );
};

export default IdentityForm;
