export type ValidateErrors = {
    email?: string
    password?: string
}

export type LoginType = {
    email: string
    password: string
    error: string
    validateErrors: ValidateErrors
}
