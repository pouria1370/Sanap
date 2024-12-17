import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormLayout from "@components/Atoms/AuthForms/FormLayout/FormLayout";
import { useState } from "react";
import { useNavigate } from "react-router";
import { TLoginFormType } from "@customTypes/Components/Molecules/AuthForms/AuthForms";
import { useAuth } from "@store/Auth/useAuth";
import { LoginFormSchema } from "./LoginFormSchema";
import useLogin from "@apis/Auth/Hooks/useLogin";

const LoginForm = () => {
  const form = useForm<TLoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      email: "",
    },
  });

  //#region States
  const [error, setError] = useState<string>("");
  //#endregion

  //#region Hooks

  const { isPending, mutate } = useLogin();
  const navigate = useNavigate();
  const auth = useAuth();

  //#endregion

  //#region Handlers
  const onSubmit = async () => {
    mutate(
      {
        email: form.getValues("email"),
        password: form.getValues("password"),
      },
      {
        onSuccess: (res) => {
          auth.setToken(res.token);
          navigate("/welcome");
        },
        onError: (error) => setError(error.error as string),
      }
    );
  };

  //#endregion
  return (
    <FormLayout>
      {error && error !== "" && (
        <div className="whitespace-pre bg-red-100 text-xs font-bold p-4  mb-5">
          {error}
        </div>
      )}
      <p className="text-primary-100 text-xl text-center">Login</p>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 items-center"
      >
        <article className="text-center flex flex-col">
          <p>email: "eve.holt@reqres.in"</p>
          <p> password: "pistol"</p>
        </article>

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              error={!!fieldState.error}
              className="w-full"
              variant="outlined"
            >
              <InputLabel>ایمیل </InputLabel>
              <OutlinedInput {...field} label="ایمیل" type="email" />
              {fieldState.error && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
        {/* Fixed Phone */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              error={!!fieldState.error}
              className="w-full"
              variant="outlined"
            >
              <InputLabel>رمز عبور </InputLabel>
              <OutlinedInput {...field} type="password" label="رمز عبور" />
              {fieldState.error && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
        <p
          onClick={() => auth.setCurrentForm("register")}
          className="text-slate-400 hover:text-primary-100"
        >
          اکانت ندارید ؟
        </p>
        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          className="bg-primary-100 rounded-lg disabled:bg-slate-400 text-slate-100 w-full"
          disabled={!form.formState.isValid || isPending ? true : false}
        >
          ورود
        </Button>
      </form>
    </FormLayout>
  );
};

export default LoginForm;
