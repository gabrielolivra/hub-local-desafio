'use client'
import { useApiFunction } from '@/app/hooks/useApiFunction';
import { ILocations } from '@/app/lib/contracts/locations/locations.contract';
import { apiGetLocations } from '@/app/lib/services/api/locations/locations';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import NotLocation from './_partial/not-locations';
import MyLocations from './_partial/locations';

export default function Page() {
  const { id } = useParams();
  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiGetLocations)
  const [locations, setLocations] = useState<ILocations[] | null>(null)
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
    <div style={{ height: 'calc(100vh - 64px)' }} className='bg-gray-300'>
      <div
        onClick={() => {
          window.history.back()
        }}
        className='flex items-center gap-2 pt-4 ml-8 pb-4 text-gray-500 cursor-pointer' >
        <ArrowLeftIcon className='size-4' />
        <p>Minhas empresas</p>
      </div>
      {
        locations?.length === 0 && isFinish ? (<NotLocation />) : (<MyLocations onCompanyModified={call} locations={locations || []} />)

      }
    </div>
  );
}