'use client';
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/app/ui/components/input";
import Modal from "@/app/ui/components/modal";
import { apiUpdateCompany } from "@/app/lib/services/api/companies/companies";
import { useApiFunction } from "@/app/hooks/useApiFunction";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ICompany } from "@/app/lib/contracts/companies/companies.contract";
import { LoadingComponent } from "@/app/ui/loading";

interface ModalEditCompanyProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  company: ICompany
}

type FormValues = {
  name: string;
  website: string;
  cnpj: string;
};

export default function ModalEditCompany({ isOpen, onClose, onConfirm, company }: ModalEditCompanyProps) {
  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiUpdateCompany)
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  useEffect(() => {
    if (isLoading) return
    if (isFinish && data) {
      toast.success("Empresa atualizada com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      })
      onConfirm()
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
    await callApi(company.id, data)
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        type="success"
        title={`Editar ${company.name}`}
        onCancel={onClose}
        onConfirm={handleSubmit(handlerCreate)}
        nameButton="Salvar"
      >
        {isLoading && <LoadingComponent />}
        <form className="flex flex-col p-4 w-[550px]">
          <Input
            label="Nome da Empresa"
            className="w-full"
            defaultValue={("name" in company ? company.name : "")}

            {...register("name", { required: "O nome da empresa é obrigatório" })}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <Input
                label="Website"
                className="w-full"
                defaultValue={"website" in company ? company.website : ""}
                {...register("website", { required: "O website é obrigatório" })}
              />
              {errors.website && <p className="text-sm text-red-500">{errors.website.message}</p>}
            </div>

            <div className="flex flex-col">
              <Input
                label="CNPJ"
                className="w-full"
                defaultValue={"cnpj" in company ? company.cnpj : ""}
                {...register("cnpj", { required: "O CNPJ é obrigatório" })}
              />
              {errors.cnpj && <p className="text-sm text-red-500">{errors.cnpj.message}</p>}
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}