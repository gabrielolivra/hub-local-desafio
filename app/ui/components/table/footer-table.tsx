export default function FooterTable() {
  return (
    <div className="flex justify-between border-t border-gray-300 px-4 py-2">
      <div></div>
      <div className="flex items-center gap-8">
        <p><strong>Página:</strong> 1</p>
        <div className="flex items-center gap-2">
          <p className="font-bold">Qt por página</p>
          <select className="border-none bg-transparent rounded flex gap-2">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <button className="bg-gray-500 p-1 rounded-md text-gray-300">Anterior</button>
          <button className="bg-hub-primary-light p-1 rounded-md text-white">Próximo</button>
        </div>
      </div>
    </div>
  )
}