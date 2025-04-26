import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { tv } from 'tailwind-variants';

const TypeIcons = {
  error: XCircleIcon,
  success: CheckCircleIcon,
  warn: ExclamationCircleIcon,
  info: InformationCircleIcon,
};

interface AlertProps {
  tipo: 'success' | 'error' | 'warn' | 'info';
  mensagem: string;
}

const alert = tv({
  base: 'flex h-9 w-full items-center justify-between border-l-4  rounded-r-md  ',
  variants: {
    type: {
      error: 'border-hub-secondary-orange bg-hub-secondary-orange/50',
      success: 'border-hub-primary-light bg-hub-primary-light/50',
      info: 'border-hub-secondary-brown bg-hub-secondary-brown/50',
      warn: 'border-hub-secondary-yellow bg-hub-secondary-yellow/50',
    },
  },
});

const icons = tv({
  base: 'h-7 m-2',
  variants: {
    type: {
      error: 'text-hub-secondary-orange',
      success: 'text-hub-primary-light',
      info: 'text-hub-secondary-brown',
      warn: 'text-hub-secondary-yellow',
    },
    hover: {
      error: 'hover:bg-hub-secondary-orange/50 hover:rounded cursor-pointer',
      success: 'hover:bg-hub-primary-light/50 hover:rounded cursor-pointer',
      info: 'hover:bg-hub-secondary-brown/50 hover:rounded cursor-pointer',
      warn: 'hover:bg-hub-secondary-yellow/50 hover:rounded cursor-pointer',
    },
  },
});
export default function Alert({ tipo, mensagem }: AlertProps) {
  const Icon = TypeIcons[tipo];
  return (
    <div className={alert({ type: tipo })}>
      <Icon className={icons({ type: tipo })} />
      <p className="font-semibold">{mensagem}</p>
      <XMarkIcon
        className={`${icons({ hover: tipo })} ${icons({ type: tipo })}`}
      />
    </div>
  );
}
