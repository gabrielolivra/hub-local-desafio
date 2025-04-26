import Button from "../ui/components/button";
import ModalAddCompany from "./_partial/modal-add-company";
import MyCompanys from "./_partial/my-companys";

export default async function Page() {

  return (
    <main className="flex items-center justify-center h-full bg-white">
      <MyCompanys />
    </main>
  );
}