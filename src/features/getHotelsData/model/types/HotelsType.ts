export type HotelType = {
    hotelId: number
    hotelName: string
    stars: number
    priceAvg: number
}

export type RequestDataType = {
    location: string
    date: string
    days: string
}

export type HotelsType = {
    location: string
    date: string
    days: string
    hotels: HotelType[]
    isLoading: boolean
    error: string
    requestData: RequestDataType
}
