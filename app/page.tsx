// import Image from "next/image";

import BarraSuperior from "@/widgets/BarraSuperior";

export default function Home() {
  return (
    <>
      <div className="container mx-auto py-6">
        <BarraSuperior/>
      </div>
      <div className="border-green-600 border-2">Conteúdo</div>
      <div className="border-purple-600 border-2">Rodapé</div>
    </>
  );
}
