import BotaoIcone from "@/components/BotaoIcone";
import Logo from "@/components/Logo";
import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";


function BarraSuperiorMobile() {
  return (
    <div className="flex flex-col py-6 md:hidden">
        <div className="flex justify-between items-center px-10">
          <Link href={"/"}>
              <Logo/>
          </Link>
          <BotaoIcone icone={
            (<IconUserCircle aria-label="ícone de Usuário" size={25}/>) // Quando é do tipo react html precisa estar em parenteses.
          }>
            Entrar
          </BotaoIcone>
        </div>
        <div className="flex items-center mx-auto gap-5 pt-10">
            <Link href="#" className="font-semibold">Acomodações</Link>
            <Link href="#" className="opacity-60">Experiências</Link>
        </div>
    </div>
  );
}

function BarraSuperiorDesktop() {
  return (
    <div className="hidden justify-between py-6 items-center md:flex">
        <Link href={"/"}>
            <Logo/>
        </Link>
        <div className="flex gap-6">
            <Link href="#" className="font-semibold">Acomodações</Link>
            <Link href="#" className="opacity-60">Experiências</Link>
        </div>
        <BotaoIcone icone={
          (<IconUserCircle aria-label="ícone de Usuário" size={25}/>) // Quando é do tipo react html precisa estar em parenteses.
        }>
          Entrar
        </BotaoIcone>
    </div>
  );
}

export default function BarraSuperior() {
  return (
    <div>
        {/* Layout Mobile */}
      <BarraSuperiorMobile/>

      {/* Layout Desktop */}
      <BarraSuperiorDesktop/>
    </div>
  );
}
