'use client'
import { useApiFunction } from "@/app/hooks/useApiFunction";
import { apiCreateLocation } from "@/app/lib/services/api/locations/locations";
import Input from "@/app/ui/components/input";
import Modal from "@/app/ui/components/modal";
import { LoadingComponent } from "@/app/ui/loading";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { unMask, mask } from 'remask';


type FormValues = {
  name: string
  cep: string
  bulevar: string
  number: string,
  district: string
  city: string
  state: string
};

interface ModalAddLocationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalAddLocation({ isOpen, onClose }: ModalAddLocationProps) {

  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiCreateLocation)
  const { register, watch, setValue, reset, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const { id } = useParams();

  const cep = watch('cep');

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originalValue = unMask(e.target.value);
    const masked = mask(originalValue, ['99999-999']);
    setValue('cep', masked);
  }

  const handlerCreate: SubmitHandler<FormValues> = async (form) => {
    const payload = {
      ...form,
      companyId: id
    }
    await callApi(payload)
  };

  useEffect(() => {
    if (isLoading) return
    if (isFinish && data) {
      toast.success('Local adicionado com sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      onClose()
      reset()
    }
    if (error) {
      toast.error(`Erro ao adicionar local ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

    }
  }, [isLoading, isFinish, data, error])
  return (
    <div>
      <Modal
        isOpen={isOpen}
        type="success"
        title="Adicionar local"
        onCancel={onClose}
        onConfirm={handleSubmit(handlerCreate)}
        nameButton="Adicionar"
      >
        {isLoading && <LoadingComponent />}
        <form className="flex flex-col p-4 w-[550px]">
          <Input
            label="Nome"
            className="w-full"
            {...register("name", { required: "O nome é obrigatório" })}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <Input
                label="CEP"
                className="w-full"
                {...register('cep', {
                  required: 'O cep é obrigatório',
                  validate: (value) => {
                    const numeric = unMask(value);
                    if (numeric.length !== 8) return 'O CEP deve ter 8 números';
                    if (!/^\d+$/.test(numeric)) return 'CEP inválido';
                    return true;
                  },
                })}
                value={cep}
                onChange={handleCepChange}
                placeholder="00000-000"
              />
              {errors.cep && (
                <p className="text-sm text-red-500">{errors.cep.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <Input
                label="Rua"
                className="w-full"
                {...register("bulevar", { required: "A rua é obrigatório" })}
              />
              {errors.bulevar && <p className="text-sm text-red-500">{errors.bulevar.message}</p>}
            </div>

          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <Input
                label="Numero"
                className="w-full"
                {...register("number", { required: "O numero é obrigatório" })}
              />
              {errors.number && <p className="text-sm text-red-500">{errors.number.message}</p>}
            </div>

            <div className="flex flex-col">
              <Input
                label="Bairro"
                className="w-full"
                {...register("district", { required: "O bairro é obrigatório" })}
              />
              {errors.district && <p className="text-sm text-red-500">{errors.district.message}</p>}
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <Input
                label="Cidade"
                className="w-full"
                {...register("city", { required: "A cidade é obrigatório" })}
              />
              {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
            </div>
            <div className="flex flex-col">
              <Input
                label="Estado"
                className="w-full"
                {...register("state", { required: "O Estado é obrigatório" })}
              />
              {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}