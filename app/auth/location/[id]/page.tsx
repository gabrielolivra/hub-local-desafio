'use client'
import { useApiFunction } from '@/app/hooks/useApiFunction';
import { ILocations } from '@/app/lib/contracts/locations/locations.contract';
import { apiGetLocations } from '@/app/lib/services/api/locations/locations';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import NotLocation from './_partial/not-locations';
import MyLocations from './_partial/locations';
import Button from '@/app/ui/components/button';
import ModalAddCompany from '../../_partial/modal-add-company';
import ModalAddLocation from './_partial/modal-add-location';

export default function Page() {
  const { id } = useParams();
  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiGetLocations)
  const [locations, setLocations] = useState<ILocations[] | null>(null)
  const [modal, setModal] = useState(false)
  const handleCloseModal = () => {
    setModal(false)
    call()

  }

  const call = async () => {
    callApi(id)
  }
  useEffect(() => {
    call()
  }, [])

  useEffect(() => {
    if (isLoading) return
    if (data && isFinish) {
      setLocations(data)
    }
  }, [data, error, isFinish, isLoading])

  return (
    <div style={{ height: 'calc(100vh - 64px)' }} className='bg-gray-200'>
      <div className='flex justify-between items-center pt-6'>
        <div
          onClick={() => {
            window.history.back()
          }}
          className='flex items-center gap-2 pt-4 ml-8 pb-4 text-gray-500 cursor-pointer' >
          <ArrowLeftIcon className='size-4' />
          <p>Minhas empresas</p>
        </div>
        {locations && locations?.length > 0 && isFinish && (<Button onClick={() => setModal(true)} tipo='success' className='mr-8 w-[200px]'>Adicionar Local</Button>)}
      </div>

      {
        locations?.length === 0 && isFinish ? (<NotLocation onCompanyModified={call} />) : (<MyLocations onCompanyModified={call} locations={locations || []} />)

      }
      <ModalAddLocation isOpen={modal} onClose={handleCloseModal} />
    </div>
  );
}