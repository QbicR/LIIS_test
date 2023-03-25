import { UserType } from 'entities/User'
import { LoginType } from 'features/UserAuth'
import { HotelsType } from 'features/getHotelsData'

export interface StateSchema {
    userData: UserType
    loginData: LoginType
    hotelsData: HotelsType
}
