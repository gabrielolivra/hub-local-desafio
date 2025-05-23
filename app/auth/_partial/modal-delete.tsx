import { useApiFunction } from "@/app/hooks/useApiFunction";
import { ICompany } from "@/app/lib/contracts/companies/companies.contract";
import { apiDeleteCompany } from "@/app/lib/services/api/companies/companies";
import Modal from "@/app/ui/components/modal";
import { LoadingComponent } from "@/app/ui/loading";
import { useEffect } from "react";
import { toast } from "react-toastify";
interface ModalDeleteCompanyProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  company: ICompany
}

export default function ModalDelete({ isOpen, onClose, company, onConfirm }: ModalDeleteCompanyProps) {
  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiDeleteCompany)

  useEffect(() => {
    if (isLoading) return
    if (isFinish && !error) {
      toast.success("Empresa excluída com sucesso", {
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
  }, [isFinish, isLoading, data, error])

  const handlerDeleteCompany = async () => {
    await callApi(company.id)
  }
  return (
    <div className="w-[450px]">
      <Modal
        isOpen={isOpen}
        type="error"
        title={`Confirmação de exclusão`}
        onCancel={onClose}
        onConfirm={handlerDeleteCompany}
        typeButton="error"
        nameButton="Excluir"
      >
        {isLoading && <LoadingComponent />}
        <div className="w-[450px] h-[100px] flex items-baseline justify-center">
          <p className="mt-4">A empresa <strong>{company.name}</strong> será excluída. Tem certeza dessa ação?</p>

        </div>

      </Modal>
    </div>
  )
}