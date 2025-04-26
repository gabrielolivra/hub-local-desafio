import CompanyAdded from "./company-added";
import NotCompany from "./not-company";

export default function MyCompanys() {
  return (
    <div className="mt-20 h-full flex items-center justify-center bg-white">
      {/* <NotCompany /> */}
      <CompanyAdded />
    </div>
  )
}