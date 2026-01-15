import Link from "next/link";




export default function Rodape() {
  return (
    <ul className="container flex mx-auto items-center pt-10 pb-25 gap-1">
        <li className="text-md">
            &copy; 2026 Airbnb, Inc. 
        </li>
        <li className="font-bold">&#183;</li>
        <li>
          <Link href={"/"} className="text-md px-2 hover:underline hover:decoration-2">Privacidade</Link>
        </li>
        <li className="font-bold">&#183;</li>
        <li>
          <Link href={"/"} className="text-md px-2 hover:underline hover:decoration-2">Termos</Link>
        </li>
        <li className="font-bold">&#183;</li>
        <li>
          <Link href={"/"} className="text-md px-2 hover:underline hover:decoration-2">Informações da empresa</Link>
        </li>
    </ul>
  );
}