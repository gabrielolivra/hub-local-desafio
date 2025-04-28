'use client'
import { useApiFunction } from "@/app/hooks/useApiFunction";
import { ICompany } from "@/app/lib/contracts/companies/companies.contract";
import { apiGetCompanies } from "@/app/lib/services/api/companies/companies";
import { useEffect, useState } from "react";

interface companies {
  companies: ICompany[]
}

export default function CompanyAdded({ companies }: companies) {
  console.log("companies", companies)

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
                <div>botoes</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}