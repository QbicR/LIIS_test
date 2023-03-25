import * as yup from 'yup'

export const loginFormValidateScheme = yup.object().shape({
    password: yup
        .string()
        .min(1, 'Введите пароль')
        .matches(/(?=.{8,})/, 'Минимальная длина 8 символа')
        .matches(/^[A-Za-z0-9]+$/, 'Пароль должен содержать только латинские буквы'),
    email: yup
        .string()
        .min(1, 'Введите Email')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Неверный формат почты'),
})
