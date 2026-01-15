import { Accommodation, AirbnbApi } from "@/types/AirbnbDados";

export async function fetchData(): Promise<AirbnbApi>{
    try {
        const response = await fetch("https://web.codans.com.br/airbnb")
        const dados = response.json()
        return dados
    } catch (e) {
       console.error(e)
       throw e
    }

}

export async function fetchDataBySlug(slug:string): Promise<Accommodation | undefined>{
    try {
        const dados = await fetchData()
        const acomodacao = dados.accommodation.find(
            (item: Accommodation) => {
                return item.slug === slug // poderia ser 'item.slug === decodeURIComponent(slug)' para strings que possuem acento
            }
        )
        return acomodacao
    } catch (e) {
       console.error(e)
       throw e
    }

}