import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IForm } from '../../interfaces/form.interface'

// import styles from './auth.module.scss'

const Auth: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IForm>({
		mode: 'onChange',
	})

	const onSubmitHanler: SubmitHandler<IForm> = data => {
		console.log(data)
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmitHanler)}>
				<input
					{...register('name', {
						required: 'Name is required',
						minLength: { value: 4, message: 'Min length name character 4' },
					})}
					type='text'
					placeholder='Enter your name'
				/>
				{errors.name && <p>{errors.name?.message}</p>}
				<input
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
				{errors.email && <p>{errors.email?.message}</p>}
				<button>Send</button>
			</form>
		</div>
	)
}

export default Auth
