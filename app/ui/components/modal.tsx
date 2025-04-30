import React, { Fragment } from 'react';
import { Transition, TransitionChild } from '@headlessui/react';
import {
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Button from './button';


interface ModalProps {
  children: React.ReactNode;
  classNameChildren?: string;
  footerChildren?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  title: string;
  type: 'error' | 'success' | 'warn' | 'info';
  isOpen: boolean;
  typeButton?: 'error' | 'success' | 'warn' | 'info';
  nameButton?: string
}

export default function Modal({
  title,
  children,
  onCancel,
  onConfirm,
  isOpen,
  footerChildren,
  classNameChildren,
  type,
  typeButton,
  nameButton

}: ModalProps) {
  const typeColors = {
    success: 'bg-hub-primary-light',
    error: 'bg-red-500 border-red-700',
    warn: 'bg-yellow-500 border-yellow-700',
    info: 'bg-blue-500 border-blue-700',
  };

  const headerColor = typeColors[type] || 'bg-gray-500 border-gray-700';

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
            flex
            flex-col
            items-center
            justify-center
            rounded-xl
            shadow-xl max-w-[1200px]
            transform
            transition-all
          "
          >
            {/* Cabeçalho do modal com cor dinâmica */}
            <div className={`flex items-center justify-between px-2 w-full ${headerColor} rounded-t-xl`}>
              <p className="font-semibold text-2xl text-white p-2">
                {title}
              </p>
              {onCancel && (
                <XMarkIcon className="w-8 h-8 text-white cursor-pointer" onClick={onCancel} />
              )}
            </div>

            {/* Conteúdo do modal */}
            <div className={`w-full ${classNameChildren}`}>{children}</div>

            {/* Rodapé do modal */}
            <div className="flex items-center justify-end w-full pt-2 border-2 rounded-b-xl border-t-gray-300">
              {onConfirm && (
                <Button tipo={typeButton || 'success'} onClick={onConfirm} className="m-4">
                  {nameButton || 'Confirmar'}
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
