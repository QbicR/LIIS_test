import { UserType } from 'entities/User'
import { LoginType } from 'features/UserAuth'
import { HotelsType } from 'features/getHotelsData'
import { ImagesType } from 'entities/Slider'

export interface StateSchema {
    userData: UserType
    loginData: LoginType
    hotelsData: HotelsType
    imagesData: ImagesType
}
