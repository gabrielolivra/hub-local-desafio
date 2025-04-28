'use client'
import { ICompany } from "@/app/lib/contracts/companies/companies.contract";
import { ArchiveBoxArrowDownIcon, PencilIcon } from "@heroicons/react/24/outline";
import ModalEditCompany from "./modal-edit-company";
import { useState } from "react";
import ModalDelete from "./modal-delete";
import { useRouter } from "next/navigation";


interface companies {
  companies: ICompany[]
  onCompanyModified: () => void
}

export default function CompanyAdded({ companies, onCompanyModified }: companies) {
  const [company, setCompany] = useState<ICompany>({} as ICompany)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)

  const route = useRouter()

  const handlerUpdate = (data: ICompany) => {
    setCompany(data)
    setModalEdit(true)
  }

  const handleDelete = (data: ICompany) => {
    setCompany(data)
    setModalDelete(true)
  }

  const handlerCloseModalDelete = () => {
    setModalDelete(false)
    onCompanyModified()
  }

  const handlerCloseModalEdit = () => {
    setModalEdit(false)
    onCompanyModified()
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
                <div className="flex gap-2 items-center">
                  <PencilIcon className="size-7 cursor-pointer" onClick={() => handlerUpdate(company)} />
                  <ArchiveBoxArrowDownIcon className="size-7 cursor-pointer text-red-500" onClick={() => handleDelete(company)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalEditCompany company={company} isOpen={modalEdit} onClose={handlerCloseModalEdit} />
      <ModalDelete company={company} isOpen={modalDelete} onClose={handlerCloseModalDelete} />
    </div>
  );
}