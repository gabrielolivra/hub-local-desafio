import Button from "@/app/ui/components/button";
import { useState } from "react";
import ModalAddLocation from "./modal-add-location";
interface INotLocation {
  onCompanyModified: () => void

}
export default function NotLocation({ onCompanyModified }: INotLocation) {
  const [modal, setModal] = useState(false)

  const handleCloseModal = () => {
    setModal(false)
    onCompanyModified()
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-4 mt-14">
        <h1 className="text-5xl font-bold text-center">Nenhum local <br /> cadastrado</h1>
        <Button tipo="success" className="w-[220px]" onClick={() => setModal(true)}> Adicionar local</Button>
      </div >
      <ModalAddLocation isOpen={modal} onClose={handleCloseModal} />
    </>
  )
}