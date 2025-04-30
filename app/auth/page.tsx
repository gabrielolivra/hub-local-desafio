'use client'
import { useEffect, useState } from "react";
import MyCompanys from "./_partial/my-companys";
import { ICompany } from "../lib/contracts/companies/companies.contract";

export default function Page() {
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const handleCompaniesUpdate = (updatedCompanies: ICompany[]) => {
    setCompanies(updatedCompanies);
  };

  useEffect(() => {
  }, [companies])

  return (
    <main
      style={{ height: 'calc(100vh - 64px)' }}
      className="flex flex-col items-center justify-center h-screen bg-gray-200"
    >
      <MyCompanys onCompaniesUpdate={handleCompaniesUpdate} />
    </main>
  );
}