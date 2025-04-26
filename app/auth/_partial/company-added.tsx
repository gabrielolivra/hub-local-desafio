import Button from "@/app/ui/components/button";

export default function CompanyAdded() {
  const companies = [
    { name: "Empresa A", website: "10", cnpj: "00.000.000/0001-00" },
    { name: "Empresa B", website: "88", cnpj: "11.111.111/0001-11" },
    { name: "Empresa C", website: "0", cnpj: "22.222.222/0001-22" },
  ];

  return (
    <div>
      <Button tipo="success" className="w-[300px] ml-auto py-2 mb-4">Adicionar Empresa</Button>
      <div className="overflow-x-auto overflow-y-auto p-4 w-[95vw]  border border-gray-300 rounded-lg shadow-md">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Empresa
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Qt de Locais
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index} className="">
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                  {company.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                  {company.website}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                  <div>botoes</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}