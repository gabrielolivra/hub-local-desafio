import { UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Avatar {
  nome: string;
  matricula: string;
  setor: string;
  picture?: string;
}
export default function Avatar({ nome, matricula, setor, picture }: Avatar) {
  return (
    <div className="flex items-center justify-around border-2 rounded-md w-3/12 border-cj h-24">
      {picture ? (
        <Image
          src={picture}
          height={80}
          alt={nome}
          width={100}
          className="border-2 border-hub-secondary-yellow rounded-full h-20 object-cover"
        />
      ) : (
        <UserIcon className="border-2 border-hub-secondary-yellow rounded-full text-hub-primary-light size-20 p-4" />
      )}
      <div className="flex flex-col justify-start">
        <p>{nome}</p>
        <p className="italic">{matricula}</p>
        <p className="italic">{setor}</p>
      </div>
    </div>
  );
}
