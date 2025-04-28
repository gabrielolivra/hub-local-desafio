'use client'
import { useState } from "react";
import Button from "../ui/components/button";
import MyCompanys from "./_partial/my-companys";
import ModalAddCompany from "./_partial/modal-add-company";
import { useRouter } from "next/navigation";
import { ICompany } from "../lib/contracts/companies/companies.contract";

export default async function Page() {
  const [modal, setModal] = useState(false)
  const route = useRouter()
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const handleCompaniesUpdate = (updatedCompanies: ICompany[]) => {
    setCompanies(updatedCompanies);
  };
  const handlerCreateCompany = () => {
    setModal(true)

  }
  const handleCloseModal = () => {
    setModal(false)
    route.refresh()
  }
  return (
    <main style={{ height: 'calc(100vh - 64px)' }} className="flex flex-col items-center justify-center h-screen bg-gray-400">
      {
        companies.length > 0 && (<Button onClick={handlerCreateCompany} tipo="success" className="w-[300px] mt ml-auto mr-8">Adicionar Empresa</Button>)
      }

      <MyCompanys onCompaniesUpdate={handleCompaniesUpdate} />
      <ModalAddCompany isOpen={modal} onClose={handleCloseModal} />
    </main>
  );
}