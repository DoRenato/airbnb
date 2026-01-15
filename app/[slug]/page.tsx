import { fetchDataBySlug } from "@/utils/api";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import Galeria from "@/widgets/Galeria";
import Rodape from "@/widgets/Rodape";
import { notFound } from "next/navigation";
    


interface PaginaDetalhesProps{
    slug: string
}

// tanto na funcao quanto na interface precisa ser exatamente o mesmo nome do campo dentro do json

export default async function PaginaDetalhes({params} : {params: Promise<PaginaDetalhesProps>}) {
    const {slug} = await params
    const acomodacao = await fetchDataBySlug(slug)
    if(!acomodacao){
        notFound()
    }
    return (
        <div>
            <header className="container mx-auto">
                <BarraSuperior/>
                <BarraPesquisa/>
            </header>

            <main className="container mx-auto py-10">
                <h1 className="font-bold text-lg pb-2">
                    {acomodacao.title}
                </h1>
                <Galeria fotos={acomodacao.photos}/>
            </main>

            <footer className="bg-gray-100">
                <Rodape/>
            </footer>
        </div>
  );
}