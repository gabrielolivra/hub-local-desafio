import { useEffect } from 'react';
import { toast } from 'react-toastify';

export enum ToastHnadlerType {
  ERROR = 'error',
  SUCCESS = 'success',
  WARN = 'warn',
  INFO = 'info',
}

export interface ToastProps {
  type?: ToastHnadlerType;
  message: string;
  callback?: () => void;
  autoClose?: number;
}

const toastFunction = {
  [ToastHnadlerType.SUCCESS]: (message: string, autoClose: number) => {
    toast.success(message, { autoClose });
  },
  [ToastHnadlerType.ERROR]: (message: string, autoClose: number) => {
    toast.error(message, { autoClose });
  },
  [ToastHnadlerType.WARN]: (message: string, autoClose: number) => {
    toast.warn(message, { autoClose });
  },
  [ToastHnadlerType.INFO]: (message: string, autoClose: number) => {
    toast.info(message, { autoClose });
  },
};

const ToastHandler: React.FC<ToastProps> = ({ message, callback, type }) => {
  useEffect(() => {
    if (message) {
      toastFunction[type || ToastHnadlerType.SUCCESS](message, 3000);

      if (callback) callback();
    }
  }, [message, callback, type]);

  return null;
};

export default ToastHandler;
