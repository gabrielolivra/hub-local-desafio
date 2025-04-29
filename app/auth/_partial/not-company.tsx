'use client'
import Button from "@/app/ui/components/button";
import ModalAddCompany from "./modal-add-company";
import { useState } from "react";
interface INotCompany {
  onCompanyModified: () => void
}

export default function NotCompany({ onCompanyModified }: INotCompany) {
  const [modal, setModal] = useState(false);

  const handlerCloseModal = () => {
    setModal(false)
    onCompanyModified()
  }

  return (
    <div className="rounded-md">
      <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-white">
        <h1 className="text-center font-bold text-5xl">Nenhuma empresa <br />  cadastrada!</h1>
        <Button
          tipo="success"
          className="mt-4 w-[300px]"
          onClick={() => setModal(true)}
        >Adicionar Empresa
        </Button>
      </div>
      <ModalAddCompany
        isOpen={modal}
        onClose={handlerCloseModal}
      />
    </div >
  )
}