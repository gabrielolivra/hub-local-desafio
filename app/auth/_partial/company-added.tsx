'use client'
import { ICompany } from "@/app/lib/contracts/companies/companies.contract";
import { PencilIcon } from "@heroicons/react/24/outline";
import ModalEditCompany from "./modal-edit-company";
import { useState } from "react";


interface companies {
  companies: ICompany[]
}

export default function CompanyAdded({ companies }: companies) {
  const [company, setCompany] = useState<ICompany>({} as ICompany)
  const [modal, setModal] = useState(false)
  const handlerUpdate = (data: ICompany) => {
    setCompany(data)
    setModal(true)
  }

  return (

    <div className="overflow-x-auto overflow-y-auto p-4 w-[95vw] h-[300px]">
      <table className="min-w-full rounded-md shadow-md">
        <thead>
          <tr className="">
            <th className="border-b font-bold border-b-gray-300 px-4 py-2 text-left text-sm text-gray-700">
              Empresa
            </th>
            <th className="border-b border-b-gray-300 px-4 py-2 text-left text-sm font-bold text-gray-700">
              Qt de Locais
            </th>
            <th className="border-b border-b-gray-300 px-4 py-2 text-left text-sm font-bold text-gray-700">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index} className="border-b border-b-gray-300">
              <td className=" px-4 py-2 text-sm text-gray-700">
                {company.name}
              </td>
              <td className=" px-4 py-2 text-sm text-gray-700">
                {company.location.length}
              </td>
              <td className=" px-4 py-2 text-sm text-gray-700">
                <div><PencilIcon className="size-4 cursor-pointer" onClick={() => handlerUpdate(company)} /></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalEditCompany company={company} isOpen={modal} onClose={() => setModal(false)} />
    </div>
  );
}