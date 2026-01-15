import { Accommodation } from '@/types/AirbnbDados';
import Link from "next/link";
import Image from "next/image";
import Acomodacao from '@/components/Acomodacao';



interface AcomodacoesProps{
    accommodation: Accommodation[]
}

export default function Acomodacoes(props: AcomodacoesProps) {
    const listaAcomodacoes = props.accommodation
    return (
        <section className="py-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listaAcomodacoes.map((item, indice)=>(
                <div key={indice}>
                    <Acomodacao 
                    local={item.location.description} anfitriao={item.host}
                    data={item.date} preco={item.price} avaliacao={item.rating}
                    favoritoHospedes={item.hasBadge}
                    >
                        <Link href={item.slug}>
                            <Image 
                            src={item.photos[0].source} 
                            alt={item.photos[0].description} 
                            width={400} height={400}
                            className="w-full aspect-square object-cover rounded-xl"
                            />
                        </Link>
                    </Acomodacao>
                </div>
            ))}
        </section>
    );
}

// object cover serve pra preencher a imagem quando está no
// aspect-square (bom utilizar quando as imagens são de diferentes aspectos)