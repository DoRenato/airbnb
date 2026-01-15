import { Photo } from "@/types/AirbnbDados";
import Image from "next/image";


interface GaleriaProps{
    fotos: Photo[]
}

export default function Galeria({fotos}:GaleriaProps) {
  return (
    <div className="grid grid-cols-6 gap-2">
        {fotos.slice(0,9).map((foto, indice) => {
            const primeiraFoto = indice==0 ? 'col-span-2 row-span-2' : ''
            return (
                <div key={indice} className={`border-0 ${primeiraFoto}`}>
                    <Image 
                    src={foto.source} 
                    alt={foto.description} 
                    width={1280} height={720}
                    className="w-full aspect-square object-cover"
                    />
                </div>
            )
        })}
    </div>
  );
}
