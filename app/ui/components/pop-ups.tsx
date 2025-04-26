import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import Button from './button';
import { tv } from 'tailwind-variants';

const TypePopUps = {
  error: XCircleIcon,
  success: CheckCircleIcon,
  warn: ExclamationCircleIcon,
  info: InformationCircleIcon,
};

interface popUps {
  informacaoPrincipal: string;
  conteudo: string;
  tipo: 'error' | 'success' | 'warn' | 'info';
}

const icon = tv({
  base: 'w-20   rounded-full text-white',
  variants: {
    type: {
      error: 'bg-hub-secondary-orange',
      success: 'bg-hub-primary-light',
      info: 'bg-hub-secondary-brown',
      warn: 'bg-hub-secondary-yellow',
    },
  },
});

export default function PopUps({
  informacaoPrincipal,
  conteudo,
  tipo,
}: popUps) {
  const Icon = TypePopUps[tipo];
  return (
    <div className="h-[300px] w-[400px] border-2 border-gray-400 flex flex-col items-center justify-center rounded-xl  ">
      <Icon className={icon({ type: tipo })} />
      <p className="font-semibold text-xl">{informacaoPrincipal}</p>
      <p className="">{conteudo}</p>
      <div className=" flex items-center justify-between w-[250px] h-20 pt-3 ">
        <Button tipo="success">Confirmar</Button>
        <Button tipo="error">Cancelar </Button>
      </div>
    </div>
  );
}
