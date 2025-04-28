import { useApiFunction } from "@/app/hooks/useApiFunction";
import { ICompany } from "@/app/lib/contracts/companies/companies.contract";
import { apiGetCompanies } from "@/app/lib/services/api/companies/companies";
import { useEffect, useState } from "react";
import NotCompany from "./not-company";
import CompanyAdded from "./company-added";

interface MyCompanysProps {
  onCompaniesUpdate: (companies: ICompany[]) => void;
}

export default function MyCompanys({ onCompaniesUpdate }: MyCompanysProps) {
  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiGetCompanies);
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const call = async () => {
    await callApi();
  };

  useEffect(() => {
    call();
  }, []);

  useEffect(() => {
    if (isLoading) return;
    if (isFinish && data) {
      setCompanies(data);
      onCompaniesUpdate(data); // Envia os dados para o componente pai
    }
  }, [isLoading, data, error, isFinish]);

  return (
    <div className="mt-8 h-[300px] flex items-center justify-center bg-white">
      {companies.length === 0 && <NotCompany />}
      {companies.length > 0 && <CompanyAdded companies={companies} />}
    </div>
  );
}