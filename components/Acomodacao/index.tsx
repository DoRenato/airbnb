import { IconHeartFilled, IconStarFilled } from "@tabler/icons-react";


interface AcomodacaoProps{
    children: React.ReactNode
    local: string
    anfitriao: string
    data: string
    preco: number
    avaliacao: number
    favoritoHospedes: boolean
}

//na aula 400 ele deu um w-full dentro da div de figure, pois sem isso o coração nao ficaria na ponta

export default function Acomodacao({children, local, anfitriao, data, preco, avaliacao, favoritoHospedes}:AcomodacaoProps) {
    function renderFavorito() {
        if (favoritoHospedes) {
            return <span className="bg-white rounded-full px-2 py-1 text-sm font-semibold">Preferido dos Hóspedes</span>
        }

        return <span></span> // se retornar null, o coracao fica no lugar do 'preferido hospedes'
    }
    return (
        <div>
            <figure className="relative">
                <div className="flex w-full justify-between items-center absolute pt-3 px-2">
                    {renderFavorito()}
                    <IconHeartFilled className="col-span-1 stroke-white hover:fill-gray-600 hover:scale-110" aria-label="ícone de Favoritos" size={25} color="black"/>
                </div>
                {children}
                <figcaption className="px-1">
                    <div className="flex items-center w-full justify-between">
                        <span className="font-semibold pt-1">
                            {local}
                        </span>
                        <div className="flex items-center gap-1 text-sm">
                            <IconStarFilled className="" aria-label="ícone de Avaliação" size={12} color="black"/>
                            <span>{avaliacao}</span>
                        </div>
                    </div>
                    <div className="text-sm">Anfitriã(o): {anfitriao}</div>
                    <div className="text-sm">{data}</div>
                    <div className="flex text-sm">
                        <span className="font-semibold pr-1">
                            R$ {preco}
                        </span>
                        <span>noite</span>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}