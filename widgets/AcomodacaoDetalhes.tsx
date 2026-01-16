import TextoIcone from "@/components/TextoIcone";
import { Accommodation } from "@/types/AirbnbDados";
import { qtdComodos } from "@/utils/qtdComodos";
import { IconAlarmSmoke, IconDesk, IconFlame, IconParking, IconPaw, IconPhoto, IconPool, IconSailboat, IconToolsKitchen2, IconWifi } from "@tabler/icons-react";


interface AcomodacaoDetalhesProps{
  accomodation: Accommodation
}

export default function AcomodacaoDetalhes(props:AcomodacaoDetalhesProps) {
  const acomodacao = props.accomodation
  const { hospedes, quartos, camas, banheiros} = qtdComodos()
  let title="Algum lugar sem o título descrito"
  if (acomodacao.title){
    title=acomodacao.title
  }
  return (
    <div className="px-3 md:px-0">
        <h1 className="font-bold text-lg">
            {title}
        </h1>
        <ul className="flex mx-auto items-center pt-1 gap-1 text-sm">
            <li>
                {hospedes} Hóspedes
            </li>
            <li className="font-bold">&#183;</li>
            <li>
                {quartos} Quartos
            </li>
            <li className="font-bold">&#183;</li>
            <li>
                {camas} Camas
            </li>
            <li className="font-bold">&#183;</li>
            <li>
                {banheiros} Banheiros
            </li>
        </ul>
        <h1 className="font-bold text-md pt-10">
            O que esse lugar oferece?
        </h1>
        <div className="grid grid-cols-2 pt-3">
            <TextoIcone icone={(<IconPhoto aria-label="ícone de Usuário" size={25}/>)}>
              Vista para as montanhas
            </TextoIcone>

            <TextoIcone icone={(<IconToolsKitchen2 aria-label="ícone de Usuário" size={25}/>)}>
              Cozinha
            </TextoIcone>

            <TextoIcone icone={
              (<IconDesk aria-label="ícone de Usuário" size={25}/>)}>
              Espaço de trabalho exclusivo
            </TextoIcone>

            <TextoIcone icone={
              (<IconPool aria-label="ícone de Usuário" size={25}/>)}>
              Piscina privativa
            </TextoIcone>

            <TextoIcone icone={
              (<IconFlame aria-label="ícone de Usuário" size={25}/>)}>
              Alarme de segurança p/ gás
            </TextoIcone>

            <TextoIcone icone={
              (<IconSailboat aria-label="ícone de Usuário" size={25}/>)
            }>
              Vista para as águas
            </TextoIcone>
            <TextoIcone icone={
              (<IconWifi aria-label="ícone de Usuário" size={25}/>)
            }>
              Wi-Fi 5G
            </TextoIcone>
            <TextoIcone icone={
              (<IconParking aria-label="ícone de Usuário" size={25}/>)
            }>
              Estacionamento incluído
            </TextoIcone>
            <TextoIcone icone={
              (<IconPaw aria-label="ícone de Usuário" size={25}/>)
            }>
              Permitido animais
            </TextoIcone>
            <TextoIcone icone={
              (<IconAlarmSmoke aria-label="ícone de Usuário" size={25}/>)
            }>
              Detector de fumaça
            </TextoIcone>
        </div>
    </div>
  );
}