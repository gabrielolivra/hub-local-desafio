'use client';
import { mask, unMask } from 'remask';
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/app/ui/components/input";
import Modal from "@/app/ui/components/modal";
import { apiCreateCompany } from "@/app/lib/services/api/companies/companies";
import { useApiFunction } from "@/app/hooks/useApiFunction";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { LoadingComponent } from "@/app/ui/loading";

interface ModalAddCompanyProps {
  isOpen: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

type FormValues = {
  name: string;
  website: string;
  cnpj: string;
};

export default function ModalAddCompany({ isOpen, onClose, onConfirm }: ModalAddCompanyProps) {
  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiCreateCompany)
  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<FormValues>();
  const cnpj = watch('cnpj');

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originalValue = unMask(e.target.value);
    const masked = mask(originalValue, ['99.999.999/9999-99']);
    setValue('cnpj', masked);
  };
  useEffect(() => {
    if (isLoading) return
    if (isFinish && data) {
      toast.success("Empresa criada com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      })
      reset()
      onConfirm?.()
    }
    if (error) {
      toast.error(JSON.stringify(error.message), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      })
    }
  }, [isFinish, data, error, isLoading])

  const handlerCreate: SubmitHandler<FormValues> = async (data) => {
    await callApi(data)
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        type="success"
        title="Adicionar Empresa"
        onCancel={onClose}
        onConfirm={handleSubmit(handlerCreate)}
      >
        {isLoading && <LoadingComponent />}
        <form className="flex flex-col p-4 w-[550px]">
          <Input
            label="Nome da Empresa"
            className="w-full"
            {...register("name", { required: "O nome da empresa é obrigatório" })}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <Input
                label="Website"
                className="w-full"
                {...register("website", { required: "O website é obrigatório" })}
              />
              {errors.website && <p className="text-sm text-red-500">{errors.website.message}</p>}
            </div>
            <div className="flex flex-col">
              <Input
                label="CNPJ"
                className="w-full"
                {...register('cnpj', {
                  required: 'O CNPJ é obrigatório',
                  validate: (value) =>
                    unMask(value).length === 14 || 'O CNPJ deve conter 14 números',
                })}
                value={cnpj}
                onChange={handleCnpjChange}
                placeholder="00.000.000/0000-00"
              />
              {errors.cnpj && (
                <p className="text-sm text-red-500">{errors.cnpj.message}</p>
              )}
            </div>

          </div>
        </form>
      </Modal>
    </div>
  );
}