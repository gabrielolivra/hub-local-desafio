'use client';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useActionState } from 'react';
import { authenticateAction } from '../lib/form/login.actions';
import Input from './components/input';
import Button from './components/button';
import { LoadingComponent } from './loading';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticateAction,
    undefined,
  );
  return (
    <>
      {isPending && <LoadingComponent />}
      <form action={formAction} className="w-[500px]">
        <div className="flex-1 rounded-lg  px-6 pb-4 pt-8 ">
          <div className="w-full">
            <Input
              type="text"
              label="Email"
              id="registration"
              name="registration"
            />
            <Input
              type="password"
              label="Senha"
              id="password"
              min={4}
              name="password"
            />
          </div>

          <Button
            tipo="success"
            className="mt-4 w-full"
            aria-disabled={isPending}
          >
            Acessar
          </Button>
          <Button
            tipo="info"
            className="mt-4 w-full"
            aria-disabled={isPending}
          >
            Cadastro
          </Button>
          <div className="flex h-8 items-end space-x-1">
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-hub-secondary-orange" />
                <p className="text-sm text-hub-secondary-orange">
                  {errorMessage}
                </p>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
