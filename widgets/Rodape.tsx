import Link from "next/link";




export default function Rodape() {
  return (
    <div className="container flex mx-auto items-center pt-10 pb-25 gap-1">
        <span className="text-md">
            &copy; 2026 Airbnb, Inc. 
        </span>
        <div className="font-bold">&#183;</div>
        <Link href={"/"} className="text-md px-2 hover:underline hover:decoration-2">Privacidade</Link>
        <div className="font-bold">&#183;</div>
        <Link href={"/"} className="text-md px-2 hover:underline hover:decoration-2">Termos</Link>
        <div className="font-bold">&#183;</div>
        <Link href={"/"} className="text-md px-2 hover:underline hover:decoration-2">Informações da empresa</Link>
    </div>
  );
}