import { AirbnbApi } from "@/types/AirbnbDados";

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