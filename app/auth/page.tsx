import Button from "../ui/components/button";
import ModalAddCompany from "./_partial/modal-add-company";

export default async function Page() {
  const notEmpresa = false
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      {notEmpresa && (
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-center font-bold text-5xl">Nenhuma empresa <br />  cadastrada!</h1>
          <Button
            tipo="success"
            className="mt-4 w-[300px]"
          >Adicionar Empresa
          </Button>
        </div>
      )}
      <ModalAddCompany isOpen />
    </main>
  );
}