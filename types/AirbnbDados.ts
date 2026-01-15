export interface AirbnbApi{
    accommodation:Accommodation[]
    icons:Icon[]
}

export interface Accommodation{
    date: string
    host: string
    id: string
    title: string
    slug: string
    hasBadge: boolean
    price: number
    rating: number
    location: Location
    testimonials:Testimonial[]
    photos:Photo[]
}

export interface Location {
    description: string
    city: string
    state: string
    country: string
}

export interface Testimonial{
    id: string
    name: string
    image: string
    comment: string
    rating: number
    customerTime: number
    createdAt: number
    stayedAt: number
}

export interface Photo{
    id: string
    source: string
    description: string
}

export interface Icon{
    id: string
    description: string
    source: string
    url: string
}
