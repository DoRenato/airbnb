'use client'
import { Photo } from "@/types/AirbnbDados";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


interface GaleriaProps{
    fotos: Photo[]
}

export default function Galeria({fotos}:GaleriaProps) {
    return (
        <div>
            <Swiper
                spaceBetween={1}
                breakpoints={
                    {
                        320:{slidesPerView: 1}, // sm
                        480:{slidesPerView: 2},
                        640:{slidesPerView:2},
                        768:{slidesPerView:3}, // md
                        1024:{slidesPerView:4},
                        1280:{slidesPerView:5}

                    }
                }
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {fotos.map((foto, indice)=>(
                    <SwiperSlide key={indice}>
                        <div className='flex aspect-square'>
                            <Image src={foto.source} alt={foto.description} width={520} height={520}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="text-center font-bold pt-2 pb-3 text-gray-400">
                Arraste para o lado para ver mais imagens
            </div>
        </div>
    );
}

// <div className="
// grid grid-cols-2 gap-1 p-5
// md:grid-cols-6 md:gap-1 md:p-0"
// >
//     {fotos.slice(0,9).map((foto, indice) => {
//         const primeiraFoto = indice==0 ? 'col-span-2 row-span-2' : ''
//         return (
//             <div key={indice} className={`border-0 ${primeiraFoto}`}>
//                 <Image 
//                 src={foto.source} 
//                 alt={foto.description} 
//                 width={1280} height={720}
//                 className="w-full aspect-square object-cover"
//                 />
//             </div>
//         )
//     })}
// </div>

