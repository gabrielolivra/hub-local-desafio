'use client';
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/app/ui/components/input";
import Modal from "@/app/ui/components/modal";
import { apiCreateCompany } from "@/app/lib/services/api/companies/companies";
import { useApiFunction } from "@/app/hooks/useApiFunction";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface ModalAddCompanyProps {
  isOpen: boolean;
  onClose?: () => void;
  onConfirm?: (data: FormValues) => void;
}

type FormValues = {
  name: string;
  website: string;
  cnpj: string;
};

export default function ModalAddCompany({ isOpen, onClose }: ModalAddCompanyProps) {
  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiCreateCompany)
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const route = useRouter()
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
      onClose?.()
      route.refresh()
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
    console.log(data)
    await callApi(data)
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        type="success"
        title="Adicionar Empresa"
        onCancel={onClose}
        onConfirm={handleSubmit(handlerCreate)} // Integração com react-hook-form
      >
        <form className="flex flex-col p-4 w-[550px]">
          <Input
            label="Nome da Empresa"
            className="w-full"
            {...register("name", { required: "O nome da empresa é obrigatório" })}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Input
              label="Website"
              className="w-full"
              {...register("website", { required: "O website é obrigatório" })}
            />
            {errors.website && <p className="text-sm text-red-500">{errors.website.message}</p>}

            <Input
              label="CNPJ"
              className="w-full"
              {...register("cnpj", { required: "O CNPJ é obrigatório" })}
            />
            {errors.cnpj && <p className="text-sm text-red-500">{errors.cnpj.message}</p>}
          </div>
        </form>
      </Modal>
    </div>
  );
}