import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'

import { getLoginState } from '../../model/selectors/getLoginState'
import { logIn, loginActions } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.css'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const { username, password, error } = useSelector(getLoginState)

    console.log('username' + username, 'password' + password, 'error' + error)

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch],
    )

    const validateScheme = yup.object().shape({
        password: yup
            .string()
            .matches(/(?=.{8,})/, 'Минимальная длина 8 символа')
            .matches(/^[A-Za-z]+$/, 'Пароль должен быть на латинице'),
        username: yup.string().email('Неверный формат почты'),
    })

    const validateData = {
        username,
        password,
    }

    const validate = () => {
        validateScheme
            .validate(validateData)
            .then(() => console.log())
            .catch((e) => console.log(e.path))
    }

    const onLogIn = useCallback(() => {
        console.log(username, password)
        validate()
        // dispatch(logIn(username))
    }, [dispatch, username, password])

    return (
        <div className={styles.login_form}>
            <h3 className={styles.header}>Simple Hotel Check</h3>
            <Input onChange={onChangeUsername} inputName={'Логин'} inputError={''} />
            <Input onChange={onChangePassword} inputName={'Пароль'} inputError={''} />
            <Button onClick={onLogIn} children={'Войти'} />
        </div>
    )
}
