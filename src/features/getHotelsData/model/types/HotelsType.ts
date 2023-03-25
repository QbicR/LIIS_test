export type HotelType = {
    hotelName: string
    stars: number
    priceAvg: number
}

export type HotelsType = {
    location: string
    date: string
    days: string
    hotels: HotelType[]
    isLoading: boolean
    error: string | undefined
}
