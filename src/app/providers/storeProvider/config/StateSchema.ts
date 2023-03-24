import { LoginType } from 'features/UserAuth/model/types/LoginType'
import { UserType } from 'entities/User/model/types/userType'

export interface StateSchema {
    userData: UserType
    loginData: LoginType
}
