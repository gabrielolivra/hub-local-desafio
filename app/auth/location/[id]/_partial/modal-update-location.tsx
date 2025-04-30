import { useApiFunction } from "@/app/hooks/useApiFunction";
import { ILocations } from "@/app/lib/contracts/locations/locations.contract";
import { apiUpdateLocation } from "@/app/lib/services/api/locations/locations";
import Input from "@/app/ui/components/input";
import Modal from "@/app/ui/components/modal";
import { LoadingComponent } from "@/app/ui/loading";
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

interface ModalUpdateLocationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  locations: ILocations | null;
}

export default function ModalUpdateLocation({ isOpen, onClose, onConfirm, locations }: ModalUpdateLocationProps) {
  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiUpdateLocation)
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormValues>();

  const cep = watch('cep');

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originalValue = unMask(e.target.value);
    const masked = mask(originalValue, ['99999-999']);
    setValue('cep', masked);
  }


  const handlerCreate: SubmitHandler<FormValues> = async (form) => {
    const payload = {
      ...form,
    }
    await callApi(locations?.id, payload)
  };

  useEffect(() => {
    if (isLoading) return
    if (isFinish && data) {
      toast.success('Local atualizado com sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      onConfirm?.()
    }
    if (error) {
      toast.error(`Erro ao atualizar local ${error.message}`, {
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
        title={`Editar: ${locations?.name}`}
        onCancel={onClose}
        onConfirm={handleSubmit(handlerCreate)}
        nameButton="Salvar"

      >
        {isLoading && <LoadingComponent />}
        <form className="flex flex-col p-4 w-[550px]">
          <Input
            label="Nome"
            className="w-full"
            {...register("name", { required: "O nome é obrigatório" })}
            defaultValue={locations && "name" in locations ? locations.name : ""}


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
                defaultValue={locations && "bulevar" in locations ? locations.bulevar : ""}
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
                defaultValue={locations && "number" in locations ? locations.number : ""}
              />
              {errors.number && <p className="text-sm text-red-500">{errors.number.message}</p>}
            </div>

            <div className="flex flex-col">
              <Input
                label="Bairro"
                className="w-full"
                {...register("district", { required: "O bairro é obrigatório" })}
                defaultValue={locations && "district" in locations ? locations.district : ""}
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
                defaultValue={locations && "city" in locations ? locations.city : ""}
              />
              {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
            </div>
            <div className="flex flex-col">
              <Input
                label="Estado"
                className="w-full"
                {...register("state", { required: "O Estado é obrigatório" })}
                defaultValue={locations && "state" in locations ? locations.state : ""}
              />
              {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
            </div>

          </div>

        </form>
      </Modal>
    </div>
  )
}