interface TextoIconeProps{
    icone: React.ReactNode // tipo usado pra configuração de qualquer item visual
    children: React.ReactNode
}

 const TextoIcone = (props: TextoIconeProps) => {
  return (
    <>
        <div className="flex py-2 gap-2 items-center">
            {props.icone}
            {props.children}
        </div>
    </>
  );
}

export default TextoIcone