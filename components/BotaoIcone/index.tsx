// import React from "react"


interface BotaoIconeProps{
    icone: React.ReactNode // tipo usado pra configuração de qualquer item visual
    children: React.ReactNode
}

 const BotaoIcone = (props: BotaoIconeProps) => {
  return (
    <>
        <button className="border-2 border-gray-300 hover:border-gray-400 rounded-xl px-3 py-2 flex gap-1 items-center">
            {props.icone}
            {props.children}
        </button>
    </>
  );
}

export default BotaoIcone
