import React, { Fragment } from 'react';
import { Transition, TransitionChild } from '@headlessui/react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { tv } from 'tailwind-variants';
import Button from './button';

const icon = tv({
  base: 'w-10 rounded-full text-white',
  variants: {
    type: {
      error: 'bg-hub-secondary-orange',
      success: 'bg-hub-primary-light',
      info: 'bg-hub-primary-light',
      warn: 'bg-hub-secondary-yellow',
    },
  },
});

const TypeModal = {
  error: XCircleIcon,
  success: CheckCircleIcon,
  warn: ExclamationCircleIcon,
  info: InformationCircleIcon,
};

interface ModalProps {
  children: React.ReactNode;
  classNameChildren?: string;
  footerChildren?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  title: string;
  type: 'error' | 'success' | 'warn' | 'info';
  isOpen: boolean;
}

export default function Modal({
  title,
  children,
  type,
  onCancel,
  onConfirm,
  isOpen,
  footerChildren,
  classNameChildren,
}: ModalProps) {
  const Icon = TypeModal[type];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <TransitionChild
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className="
            bg-gray-50
            border-2
            border-gray-400
            flex
            flex-col
            items-center
            justify-center
            rounded-xl
            shadow-xl max-w-[1200px] p-5 
            transform
            transition-all
          "
          >
            <Icon className={`w-10 mb-2 ${icon({ type })}`} />
            <p className="font-semibold text-xl mb-4 text-hub-success-primary">
              {title}
            </p>
            <div className={`w-full ${classNameChildren}`}>{children}</div>
            <div className="flex items-center justify-between w-full mt-4">
              {onCancel && (
                <Button tipo="error" onClick={onCancel}>
                  Fechar
                </Button>
              )}
              {onConfirm && (
                <Button tipo="success" onClick={onConfirm}>
                  Confirmar
                </Button>
              )}
              {footerChildren}
            </div>
          </div>
        </TransitionChild>
      </div>
    </Transition>
  );
}
