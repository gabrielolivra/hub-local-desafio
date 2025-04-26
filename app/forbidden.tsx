import Link from 'next/link';
import Logo from './ui/logo';
import { Actions, Subjects } from './lib/contracts/permissions';


export default function Forbidden() {
  return (
    <div className="flex h-screen items-center justify-center p-6 inset-0 bg-white fixed w-full">
      <div className="max-w-md p-6 bg-hub-secondary-orange shadow-md rounded-lg text-center">
        <div className="flex w-full text-white justify-center m-2">
          <Logo width={100} />
        </div>
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Acesso Negado
        </h2>
        <p className="text-white mb-6 text-lg">
          Você não está autorizado a acessar este recurso.
        </p>
        <Link
          href="/auth"
          className="inline-block px-5 py-3 bg-white text-hub-secondary-yellow font-bold rounded-lg shadow-sm hover:bg-hub-secondary-yellow hover:text-white transition"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
