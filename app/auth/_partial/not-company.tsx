'use client'
import Button from "@/app/ui/components/button";
import ModalAddCompany from "./modal-add-company";
import { useState } from "react";

export default function NotCompany() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4">
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
        onClose={() => setModal(false)}
        onCofirm={() => setModal(false)}
      />
    </div >
  )
}