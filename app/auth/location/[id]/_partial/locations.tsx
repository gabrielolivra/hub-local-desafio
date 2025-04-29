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


interface locations {
  locations: ILocations[]
  onCompanyModified: () => void
}

export default function MyLocations({ locations, onCompanyModified }: locations) {
  const [location, setLocation] = useState<ILocations | null>(null)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)

  const handlerUpdate = (data: ILocations) => {
    setLocation(data)
    setModalEdit(true)

  }

  const handleDelete = (data: ILocations) => {
    setLocation(data)
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

    <div className=" bg-white  h-[300px]">
      {/* <table className="min-w-full rounded-md shadow-md">
        <thead>
          <tr className="">
            <th className="border-b font-bold border-b-gray-300 px-4 py-2 text-left text-sm text-gray-700">
              Locais
            </th>
            <th className="border-b border-b-gray-300 px-4 py-2 text-left text-sm font-bold text-gray-700">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={index} className="border-b border-b-gray-300">
              <td className=" px-4 py-2 text-sm text-gray-700">
                {location.name}
              </td>
              <td className=" px-4 py-2 text-sm text-gray-700">
                <div className="flex gap-2 items-center">
                  <PencilIcon className="size-7 cursor-pointer" onClick={() => handlerUpdate(location)} />
                  <ArchiveBoxArrowDownIcon className="size-7 cursor-pointer text-red-500" onClick={() => handleDelete(location)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Table>
        <Thead>
          <Tr>
            <Th>Locais</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {locations.map((location, index) => (
            <Tr key={index}>
              <Th>{location.name}</Th>
              <Th>
                <div className="flex gap-2 items-center">
                  <PencilIcon className="size-5 cursor-pointer" onClick={() => handlerUpdate(location)} />
                  <ArchiveBoxArrowDownIcon className="size-5 cursor-pointer text-red-500" onClick={() => handleDelete(location)} />
                </div>
              </Th>
            </Tr>
          ))}

        </Tbody>
      </Table>
      <ModalUpdateLocation isOpen={modalEdit} onClose={handlerCloseModalEdit} locations={location} />
      {
        location && (
          <ModalDeleteLocation isOpen={modalDelete} onClose={handlerCloseModalDelete} location={location} />
        )
      }
    </div >
  );
}