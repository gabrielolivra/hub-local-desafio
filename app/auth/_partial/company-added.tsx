'use client'
import { ICompany } from "@/app/lib/contracts/companies/companies.contract";
import { ArchiveBoxArrowDownIcon, BuildingOfficeIcon, PencilIcon } from "@heroicons/react/24/outline";
import ModalEditCompany from "./modal-edit-company";
import { useState } from "react";
import ModalDelete from "./modal-delete";
import { useRouter } from "next/navigation";
import Table from "@/app/ui/components/table/table";
import Thead from "@/app/ui/components/table/thead";
import Tr from "@/app/ui/components/table/tr";
import Th from "@/app/ui/components/table/th";
import Tbody from "@/app/ui/components/table/tbody";
import Td from "@/app/ui/components/table/td";

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

  const handlerLocation = (data: ICompany) => {
    route.push(`/auth/location/${data.id}`)
  }

  return (
    <div className="p-8 w-full">
      <div className="bg-white rounded">
        <div className="overflow-auto max-h-[300px]">
          <Table classProps="w-full table-fixed">
            <Thead className="sticky top-0 bg-white z-10">
              <Tr>
                <Th>Empresa</Th>
                <Th>Qtd locais</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {companies.map((companie, index) => (
                <Tr key={index}>
                  <Td>{companie.name}</Td>
                  <Td>{companie.location?.length || 0}</Td>
                  <Td>
                    <div className="flex gap-2 items-center">
                      <PencilIcon className="size-5 cursor-pointer" onClick={() => handlerUpdate(companie)} />
                      <ArchiveBoxArrowDownIcon className="size-5 cursor-pointer text-red-500" onClick={() => handleDelete(companie)} />
                      <BuildingOfficeIcon className="size-5 cursor-pointer" onClick={() => handlerLocation(companie)} />
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
        {/* Rodapé fixo */}
        <div className="flex justify-between border-t border-gray-300 px-4 py-2">
          <div></div>
          <div className="flex items-center gap-8">
            <p><strong>Página:</strong> 1</p>
            <div className="flex items-center gap-2">
              <p className="font-bold">Qt por página</p>
              <select className="border-none bg-transparent rounded p-1">
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>
            <div className="flex gap-2 items-center">
              <button className="bg-gray-500 p-1 rounded-md text-gray-300">Anterior</button>
              <button className="bg-hub-primary-light p-1 rounded-md text-white">Próximo</button>
            </div>
          </div>
        </div>
      </div>

      <ModalEditCompany company={company} isOpen={modalEdit} onConfirm={handlerCloseModalEdit} onClose={() => setModalEdit(false)} />
      <ModalDelete company={company} isOpen={modalDelete} onConfirm={handlerCloseModalDelete} onClose={() => setModalDelete(false)} />
    </div >

  );
}