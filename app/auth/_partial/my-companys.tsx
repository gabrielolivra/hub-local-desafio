import { useApiFunction } from "@/app/hooks/useApiFunction";
import { ICompany } from "@/app/lib/contracts/companies/companies.contract";
import { apiGetCompanies } from "@/app/lib/services/api/companies/companies";
import { useEffect, useState } from "react";
import NotCompany from "./not-company";
import CompanyAdded from "./company-added";
import Loading from "../loading";
import Button from "@/app/ui/components/button";
import ModalAddCompany from "./modal-add-company";

interface MyCompanysProps {
  onCompaniesUpdate: (companies: ICompany[]) => void;
}

export default function MyCompanys({ onCompaniesUpdate }: MyCompanysProps) {
  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiGetCompanies);
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [modal, setModal] = useState(false);


  const handlerCreateCompany = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const call = async () => {
    await callApi();
  };

  const handleCompanyModified = () => {
    call();
    setModal(false);
  };

  useEffect(() => {
    call();
  }, []);

  useEffect(() => {
    if (isLoading) return;
    if (isFinish && data) {
      setCompanies(data);
      onCompaniesUpdate(data);
    }
  }, [isLoading, data, error, isFinish]);

  return (
    <div className="w-full flex flex-col items-center -mt-14">
      {isFinish && <Button onClick={handlerCreateCompany} tipo='success' className='ml-auto mr-8 w-[200px]'>Adicionar empresa</Button>}
      {isFinish && companies.length === 0 && <NotCompany onCompanyModified={handleCompanyModified} />}
      {isFinish && companies.length > 0 && <CompanyAdded companies={companies} onCompanyModified={handleCompanyModified} />}
      {isLoading && <Loading />}
      <ModalAddCompany isOpen={modal} onClose={handleCloseModal} onConfirm={handleCompanyModified} />

    </div>
  );
}