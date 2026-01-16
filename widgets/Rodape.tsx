import Link from "next/link";




export default function Rodape() {
  return (
    <ul className="
    container flex flex-col mx-auto
    items-center pb-15 pt-5
    md:flex-row md:pt-10
    md:pb-25 md:gap-1
    ">
        <li className="pb-4 text-md md:pb-0">
            &copy; 2026 Airbnb, Inc. 
        </li>
        <li className="hidden font-bold md:flex">&#183;</li>
        <li>
          <Link href={"#"} className="
          text-md underline
          hover:underline hover:decoration-2
          md:py-0 md:px-2 md:no-underline
          ">
            Privacidade
          </Link>
        </li>
        <li className="hidden font-bold md:flex">&#183;</li>
        <li>
          <Link href={"#"} className="
          text-md underline
          hover:underline hover:decoration-2
          md:py-0 md:px-2 md:no-underline
          ">Termos</Link>
        </li>
        <li className="hidden font-bold md:flex">&#183;</li>
        <li>
          <Link href={"#"} className="
          text-md underline
          hover:underline hover:decoration-2
          md:py-0 md:px-2 md:no-underline
          ">Informações da empresa</Link>
        </li>
    </ul>
  );
}