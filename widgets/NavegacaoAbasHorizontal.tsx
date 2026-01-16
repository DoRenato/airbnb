'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import BotaoIcone from '@/components/BotaoIcone';
import { IconAdjustments } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/types/AirbnbDados';


interface AbaHorizontalProps{
    icons: Icon[]
}

export default function AbaHorizontal(props:AbaHorizontalProps) {

    const icones = props.icons

  return (
    <div className='flex pt-15'>
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={
                {
                    640:{slidesPerView:3},
                    768:{slidesPerView:4},
                    1024:{slidesPerView:6},
                    1280:{slidesPerView:9}

                }
            }
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {icones.map((icone, indice)=>(
                    <SwiperSlide key={indice}>
                        <Link href="#" className='flex flex-col items-center hover:text-red-400'>
                            <Image src={icone.source} alt={icone.description} width={24} height={24}/>
                            <span className='text-center'>
                                {icone.description}
                            </span>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        <BotaoIcone icone={
          (<IconAdjustments aria-label="ícone de Filtros" size={19}/>) // Quando é do tipo react html precisa estar em parenteses.
        }>
          Filtros
        </BotaoIcone>
    </div>
  );
};