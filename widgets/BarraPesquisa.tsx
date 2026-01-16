import { IconSearch } from "@tabler/icons-react";

export default function BarraPesquisa() {
  return (
    <div className="
    border border-gray-300
    flex items-center rounded-full px-2 py-2
    mx-10 shadow-lg shadow-gray-200 
   hover:border-gray-300
   md:mx-auto md:w-full md:max-w-2xl
   md:border-gray-200
    ">
        <input type="text" placeholder="Inicie sua busca" 
        className="w-full focus:outline-none pl-4 pr-3"/>
        <button className="bg-red-500 rounded-full hover:bg-red-400 p-2">
            <IconSearch aria-label="ícone de Usuário" size={25} color="white"/>
        </button>
    </div>
  );
}