'use client'
import { useApiFunction } from '@/app/hooks/useApiFunction';
import { ILocations } from '@/app/lib/contracts/locations/locations.contract';
import { apiGetLocations } from '@/app/lib/services/api/locations/locations';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
    <div>
      <h1>Detalhes da Empresa: {id}</h1>
      <p>{JSON.stringify(locations)}</p>
    </div>
  );
}