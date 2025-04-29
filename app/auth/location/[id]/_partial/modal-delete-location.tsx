import { useApiFunction } from "@/app/hooks/useApiFunction";
import { ILocations } from "@/app/lib/contracts/locations/locations.contract";
import { apiDeleteLocation } from "@/app/lib/services/api/locations/locations";
import Modal from "@/app/ui/components/modal";
import { LoadingComponent } from "@/app/ui/loading";
import { useEffect } from "react";
import { toast } from "react-toastify";
interface ModalDeleteLocationProps {
  isOpen: boolean
  onClose?: () => void
  location: ILocations
  onConfirm: () => void;
}

export default function ModalDeleteLocation({ isOpen, onClose, onConfirm, location }: ModalDeleteLocationProps) {
  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiDeleteLocation)

  useEffect(() => {
    if (isLoading) return
    if (isFinish && !error) {
      toast.success("Local excluído com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      })
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
  }, [isFinish, isLoading, data, error])

  const handlerDeleteCompany = async () => {
    await callApi(location.id)
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
          <p className="mt-4">O local <strong>{location.name}</strong> será excluído. Tem certeza dessa ação?</p>
        </div>

      </Modal>
    </div>
  )
}