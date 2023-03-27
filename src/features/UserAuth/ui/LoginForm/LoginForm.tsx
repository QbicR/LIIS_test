import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { getLoginState } from '../../model/selectors/getLoginState'
import { logIn, loginActions } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.css'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { loginFormValidateScheme } from 'shared/const/validateScheme'

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const { email, password, error, validateErrors } = useSelector(getLoginState)

    const validate = useCallback(() => {
        loginFormValidateScheme
            .validate({ email, password })
            .then(() => dispatch(loginActions.setValidateErrors({ email: '', password: '' })))
            .catch((e) => dispatch(loginActions.setValidateErrors({ [e.path]: e.message })))
    }, [email, password, dispatch])

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

    const isValid = validateErrors.email === '' && validateErrors.password === ''

    const onLogIn = () => {
        if (isValid) {
            dispatch(logIn(email, password))
        }
    }

    useEffect(() => {
        validate()
    }, [email, password, validate])

    if (error) {
        alert(error)
    }

    return (
        <div className={styles.login_form}>
            <h3 className={styles.header}>Simple Hotel Check</h3>
            <Input
                value={email}
                onChange={onChangeUsername}
                inputName={'Логин'}
                inputError={validateErrors.email}
            />
            <Input
                value={password}
                onChange={onChangePassword}
                inputName={'Пароль'}
                inputError={validateErrors.password}
                type={'password'}
            />
            <Button onClick={onLogIn} children={'Войти'} />
        </div>
    )
}
