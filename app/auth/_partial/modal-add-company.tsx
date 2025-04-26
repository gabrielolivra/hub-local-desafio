import Input from "@/app/ui/components/input";
import Modal from "@/app/ui/components/modal";

interface ModalAddCompanyProps {
  isOpen: boolean;
  onClose?: () => void;
  onCofirm?: () => void;
}
export default function ModalAddCompany({ isOpen, onClose, onCofirm }: ModalAddCompanyProps) {

  return (
    <div className="w-[50px]">
      <Modal isOpen={isOpen} type="success" title="Adicionar Empresa" onCancel={onClose} onConfirm={onCofirm}>
        <div className="flex flex-col p-4 w-[550px]">
          <Input name="companyName" label="Nome da Empresa" className="w-full" />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Input className="w-full" name="website" label="Website" />
            <Input className="w-full" name="cnpj" label="CNPJ" />
          </div>
        </div>
      </Modal>
    </div>
  )
}