'use client';

import {
  EyeIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface buttonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function CreateData({
  rota,
  textBtn,
  className,
}: {
  rota: string;
  textBtn?: string;
  className?: string;
}) {
  return (
    <div className={` flex justify-end ${className} `}>
      <Link
        href={rota}
        className="flex h-10 w-36 items-center justify-end rounded-lg text-[12px] bg-hub-primary-light px-4 text-sm font-medium text-hub-white transition-colors hover:bg-opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hub-primary-light"
      >
        <span className="hidden md:block">{textBtn}</span>{' '}
        <PlusIcon className="h-5 md:ml-4" />
      </Link>
    </div>
  );
}

export function UpdateDataButton({
  onClick,
  className,
  children,
  disabled,
}: buttonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` ${disabled ? 'cursor-not-allowed rounded-md bg-hub-secondary-yellow/50' : ''} ${className} rounded-md border bg-hub-secondary-yellow text-hub-white p-2 hover:bg-hub-secondary-yellow/70 ${className}`}
    >
      {children ? children : <PencilIcon className="size-4" />}
    </button>
  );
}

export function CustomButton({
  onClick,
  className,
  children,
  disabled,
}: buttonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? 'cursor-not-allowed rounded-md bg-stone-500/80' : ''} rounded-md border p-2 ${className}`}
    >
      {children ? children : <PencilIcon className="size-4" />}
    </button>
  );
}

export function ViewDataButton({
  onClick,
  children,
  className,
}: buttonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`rounded-md border bg-hub-primary-light text-hub-white p-2 hover:bg-hub-primary-light/70 ${className}`}
    >
      {children ? children : <EyeIcon className="size-4" />}
    </button>
  );
}

export function RemoveDataButton({ onClick, disabled }: buttonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`rounded-md border bg-hub-secondary-orange text-hub-white p-2 hover:bg-hub-secondary-orange/70 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      <span className="sr-only">Remove Data</span>
      <TrashIcon className="w-3" />
    </button>
  );
}

export function DeleteDataButton({
  funcFormAction,
  id,
}: {
  funcFormAction?: (id: string) => Promise<void>;
  id: string;
}) {
  const deleteData = funcFormAction?.bind(null, id);

  return (
    <form action={deleteData}>
      <button
        type="submit"
        className="rounded-md border bg-hub-secondary-orange text-hub-white p-2 hover:bg-hub-secondary-orange/70"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="size-4" />
      </button>
    </form>
  );
}
