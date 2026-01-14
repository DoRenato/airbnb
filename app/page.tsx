// import Image from "next/image";

import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";

export default function Home() {
  return (
    <>
      <div>
        <BarraSuperior/>
        <BarraPesquisa/>
      </div>
      <div className="border-green-600 border-2 mt-10">Conteúdo</div>
      <div className="border-purple-600 border-2 mt-10">Rodapé</div>
    </>
  );
}
