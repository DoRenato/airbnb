import { Acommodation } from '@/types/AirbnbDados';
import Link from "next/link";
import Image from "next/image";



interface AcomodacoesProps{
    accommodation: Acommodation[]
}

export default function Acomodacoes(props: AcomodacoesProps) {
    const acomodacoes = props.accommodation
    return (
        <section className="py-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {acomodacoes.map((acomodacao, indice)=>(
                <div key={indice}>
                    <Link href={"/"}>
                        <Image src={acomodacao.photos[0].source} alt="" width={400} height={400}
                        className="w-full aspect-square object-cover rounded-xl"
                        />
                    </Link>
                </div>
            ))}
        </section>
    );
}

// object cover serve pra preencher a imagem quando está no
// aspect-square (bom utilizar quando as imagens são de diferentes aspectos)