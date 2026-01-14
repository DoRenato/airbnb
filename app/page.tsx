// import Image from "next/image";

import { fetchData } from "@/utils/api";
import Acomodacoes from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";

export default async function Home() {
  const dados=await fetchData()
  return (
    <>
    
      <header className="container mx-auto">
        <BarraSuperior/>
        <BarraPesquisa/>
      </header>

      <hr className="my-5"/>
      
      <main className="container mx-auto">
        <NavegacaoAbasHorizontal icons={dados.icons}/>
        <Acomodacoes accommodation={dados.accommodation}/>
      </main>

      <hr className="my-5"/>

      <footer className="container mx-auto">
        Rodapé
      </footer>
    </>
  );
}
