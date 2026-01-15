import BotaoIcone from "@/components/BotaoIcone";
import Logo from "@/components/Logo";
import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";


export default function BarraSuperior() {
  return (
    <div className="py-6 flex justify-between items-center">
        <Link href={"/"}>
            <Logo/>
        </Link>
        <div className="flex gap-6">
            <Link href="/" className="font-semibold">Acomodações</Link>
            <Link href="/" className="opacity-60">Experiências</Link>
        </div>
        <BotaoIcone icone={
          (<IconUserCircle aria-label="ícone de Usuário" size={25}/>) // Quando é do tipo react html precisa estar em parenteses.
        }>
          Entrar
        </BotaoIcone>
    </div>
  );
}
