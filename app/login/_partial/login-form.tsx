'use client';
import { authenticateAction } from '@/app/lib/form/login.actions';
import Button from '@/app/ui/components/button';
import Input from '@/app/ui/components/input';
import { LoadingComponent } from '@/app/ui/loading';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useActionState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticateAction,
    undefined,
  );

  useEffect(() => {
    if (isPending) return
    if (errorMessage) {
      toast.error(errorMessage, {
        position: "top-right"
      });
    }
  }, [errorMessage, isPending])

  return (
    <div className='w-[400px] flex flex-col items-center justify-center gap-4 rounded-lg'>
      <ToastContainer />
      {isPending && <LoadingComponent />}
      <form action={formAction} className="w-[500px]">
        <div className="flex-1 rounded-lg  px-6 pb-4 pt-8 ">
          <div className="w-full flex flex-col gap-4">
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
            LOGAR
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
      <a href='/register' className='absolute mt-[240px]'>
        <Button
          tipo="info"
          className="mt-4 w-[450px]"
          aria-disabled={isPending}
        >
          CRIAR CONTA
        </Button>
      </a>
    </div>
  );
}
