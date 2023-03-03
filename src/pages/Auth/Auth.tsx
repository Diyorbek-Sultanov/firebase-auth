import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import classNames from 'classnames'

import useAuth from '../../hooks/useAuth'
import { IForm } from '../../interfaces/form.interface'

import styles from './auth.module.scss'

const Auth: FC = () => {
	const { signUp, signIn, isLoading } = useAuth()
	const [auth, setAuth] = useState<'signin' | 'signup'>('signin')
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IForm>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const toggleAuth = (state: 'signin' | 'signup') => {
		setAuth(state)
	}

	const onSubmitHanler: SubmitHandler<IForm> = data => {
		const email = data.email
		const password = data.password

		if (auth === 'signup') {
			signUp(email, password)
		} else {
			signIn(email, password)
		}
	}

	return (
		<div className={styles.root}>
			<h1 className={styles.title}>
				{auth === 'signin' ? 'Sign in' : 'Sign up'}
			</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmitHanler)}>
				<input
					className={classNames(
						!isValid ? styles.form__input_err : styles.form__input,
					)}
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Please enter valid email',
						},
					})}
					type='email'
					placeholder='Enter your email'
				/>
				{errors.email && (
					<p className={styles.form__err}>{errors.email?.message}</p>
				)}

				<input
					className={classNames(
						!isValid ? styles.form__input_err : styles.form__input,
					)}
					{...register('password', {
						required: 'Password is required',
						minLength: { value: 8, message: 'Min length password character 8' },
					})}
					type='password'
					placeholder='Enter your password'
				/>
				{errors.password && (
					<p className={styles.form__err}>{errors.password?.message}</p>
				)}

				<button
					type='submit'
					className={styles.form__btn}
					disabled={isLoading || !isValid}
				>
					{isLoading
						? 'Submiting...'
						: auth === 'signin'
						? 'Sign in'
						: 'Sign up'}
				</button>
				<p className={styles.form__text}>
					{auth === 'signin' ? 'Not account yet' : 'Already have account'}:
					{auth === 'signin' ? (
						<span onClick={() => toggleAuth('signup')}>Sign up now</span>
					) : (
						<span onClick={() => toggleAuth('signin')}>Sign in now</span>
					)}
				</p>
			</form>
		</div>
	)
}

export default Auth
