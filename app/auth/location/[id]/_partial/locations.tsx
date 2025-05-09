'use client'
import { ArchiveBoxArrowDownIcon, PencilIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ILocations } from "@/app/lib/contracts/locations/locations.contract";
import ModalUpdateLocation from "./modal-update-location";
import ModalDeleteLocation from "./modal-delete-location";
import Table from "@/app/ui/components/table/table";
import Thead from "@/app/ui/components/table/thead";
import Tr from "@/app/ui/components/table/tr";
import Th from "@/app/ui/components/table/th";
import Tbody from "@/app/ui/components/table/tbody";
import Td from "@/app/ui/components/table/td";
import FooterTable from "@/app/ui/components/table/footer-table";


interface locations {
  locations: ILocations[]
  onCompanyModified: () => void
}

export default function MyLocations({ locations, onCompanyModified }: locations) {
  const [location, setLocation] = useState<ILocations | null>(null)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)

  const handlerUpdate = (data: ILocations) => {
    console.log(data)
    setLocation(data)
    setModalEdit(true)

  }

  const handleDelete = (data: ILocations) => {
    setLocation(data)
    setModalDelete(true)
  }

  const handlerConfirmModalDelete = () => {
    setModalDelete(false)
    onCompanyModified()
  }

  const handlerConfirmModalEdit = () => {
    setModalEdit(false)
    onCompanyModified()
  }

  return (
    <div className="p-8">
      <div className="bg-white rounded">
        <div className="overflow-auto max-h-[300px]">
          <Table classProps="w-full table-fixed">
            <Thead className="sticky top-0 bg-white z-10">
              <Tr>
                <Th>Empresa</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {locations.map((location, index) => (
                <Tr key={index}>
                  <Td>{location.name}</Td>
                  <Td>
                    <div className="flex gap-2 items-center">
                      <PencilIcon className="size-5 cursor-pointer" onClick={() => handlerUpdate(location)} />
                      <ArchiveBoxArrowDownIcon className="size-5 cursor-pointer text-red-500" onClick={() => handleDelete(location)} />
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
        {/* Rodapé fixo */}
        <FooterTable />
      </div>
      <ModalUpdateLocation onClose={() => setModalEdit(false)} isOpen={modalEdit} onConfirm={handlerConfirmModalEdit} locations={location} />
      {
        location && (
          <ModalDeleteLocation onConfirm={handlerConfirmModalDelete} isOpen={modalDelete} onClose={() => setModalDelete(false)} location={location} />
        )
      }
    </div>
  );
}