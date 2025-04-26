import Button from "@/app/ui/components/button";
import Input from "@/app/ui/components/input";

export default function RegisterForm() {
  return (
    <div className='w-[400px] flex flex-col items-center justify-center gap-4 rounded-lg'>

      <div className="flex-1 rounded-lg  px-6 pb-4 pt-8 ">
        <div className="w-full flex flex-col gap-4">
          <Input
            type="text"
            label="Nome"
            id="registration"
            name="registration"
            className="w-full"
            placeholder="Digite seu nome"
          />
          <Input
            type="email"
            label="Email"
            id="registration"
            name="registration"
            className="w-full"
            placeholder="Digite seu email"
          />
          <Input
            type="password"
            label="Senha"
            id="password"
            min={4}
            name="password"
            className="w-full"
            placeholder="Digite sua senha"
          />
          <Input
            type="password"
            label="Repita a senha"
            id="password"
            min={4}
            name="password"
            className="w-full"
            placeholder="Repita sua senha"
          />
        </div>

        <Button
          tipo="success"
          className="mt-4 w-full"
        >
          REGISTRAR
        </Button>
        <a href='/login'>
          <Button
            tipo="info"
            className="mt-4 w-[450px]"
          >
            LOGAR
          </Button>
        </a>
        <div className="flex h-8 items-end space-x-1">
          {/* {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-hub-secondary-orange" />
              <p className="text-sm text-hub-secondary-orange">
                {errorMessage}
              </p>
            </>
          )} */}
        </div>
      </div>

    </div>
  )
}