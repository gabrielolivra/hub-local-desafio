'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/app/ui/components/button";
import Input from "@/app/ui/components/input";
import { useApiFunction } from "@/app/hooks/useApiFunction";
import { createUser } from "@/app/lib/services/api/auth/login";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { LoadingComponent } from "@/app/ui/loading";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const { callApi, data, error, isFinish, isLoading } = useApiFunction(createUser, { isPublic: true });
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
    }
    await callApi(payload);
  };

  useEffect(() => {
    if (isLoading) return
    if (isFinish && !error) {
      toast.success("Usuário criado com sucesso", {
        position: "top-right",
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 300);
    }
    if (error) {
      toast.error(error.message, {
        position: "top-right"
      })
    }
  }, [isLoading, isFinish, data, error])

  return (
    <div className="w-[500px] flex flex-col items-center justify-center gap-4 rounded-lg">
      {isLoading && <LoadingComponent />}
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[500px]"
      >
        <div className="flex-1 rounded-lg  px-6 pb-4 pt-8 ">
          <div className="w-full flex flex-col gap-2">
            <Input
              type="text"
              label="Nome"
              id="name"
              {...register("name", { required: "O nome é obrigatório" })}
              className="w-full"
              placeholder="Digite seu nome"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

            <Input
              type="email"
              label="Email"
              id="email"
              {...register("email", {
                required: "O email é obrigatório",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email inválido",
                },
              })}
              className="w-full"
              placeholder="Digite seu email"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

            <Input
              type="password"
              label="Senha"
              id="password"
              {...register("password", {
                required: "A senha é obrigatória",
                minLength: { value: 4, message: "A senha deve ter no mínimo 4 caracteres" },
              })}
              className="w-full"
              placeholder="Digite sua senha"
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}

            <Input
              type="password"
              label="Repita a senha"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirme sua senha",
                validate: (value, { password }) =>
                  value === password || "As senhas não coincidem",
              })}
              className="w-full"
              placeholder="Repita sua senha"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <Button tipo="success" className="mt-4 w-full" type="submit">
            REGISTRAR
          </Button>
        </div>
      </form>
      <a href='/login' className='-mt-6'>
        <Button
          tipo="info"
          className="mt-4 w-[450px]"
          aria-disabled
        >
          LOGAR
        </Button>
      </a>
    </div>
  );
}
