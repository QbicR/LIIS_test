import { StateSchema } from 'app/providers/storeProvider'

export const getUserAuthData = (state: StateSchema) => state.userData.user
