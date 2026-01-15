import { Testimonial } from "@/types/AirbnbDados";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";


interface AcomodacaoDepoimentosProps{
  rating: number
  depoimentos: Testimonial[]
}

export default function AcomodacaoDepoimentos(props:AcomodacaoDepoimentosProps) {
  const depoimentos = props.depoimentos
  const rating = props.rating
  return (
    <div className="">
        <h1 className="font-bold text-lg">
            Depoimentos
        </h1>
        <div className="flex items-baseline gap-x-1 pb-5">
          <IconStarFilled className="" aria-label="ícone de Avaliação" size={15} color="black"/>
          <span>{rating} (400+ avaliações)</span>
        </div>
        {depoimentos.map((depoimento, indice)=>(
          <div key={indice}>
            <div className="flex items-start gap-3 py-3">
              <Image 
              src={depoimento.image} 
              alt={depoimento.name}
              width={50}
              height={50}
              className="rounded-full aspect-square object-cover"
              />
              <div className="">
                <div className="font-bold">
                  {depoimento.name}
                </div>
                <div className="flex items-baseline gap-x-1">
                  <IconStarFilled aria-label="ícone de Avaliação" size={15} color="black"/>
                  {depoimento.rating}
                </div>
                <div>{depoimento.comment}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}