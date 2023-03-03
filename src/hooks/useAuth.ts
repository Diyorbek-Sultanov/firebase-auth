import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	User,
} from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { auth } from '../firebase'

const useAuth = () => {
	const [user, setUser] = useState({} as User)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const navigate = useNavigate()

	const signUp = async (email: string, password: string) => {
		setIsLoading(true)
		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			)
			setUser(user)
			navigate('/')
			toast.success('Register success!')
		} catch (error) {
			const err = error as Error
			toast.error(err.message)
		} finally {
			setIsLoading(false)
		}
	}

	const signIn = async (email: string, password: string) => {
		setIsLoading(true)
		try {
			const { user } = await signInWithEmailAndPassword(auth, email, password)
			setUser(user)
			navigate('/')
			toast.success('Login success!')
		} catch (error) {
			const err = error as Error
			toast.error(err.message)
		} finally {
			setIsLoading(false)
		}
	}

	const logOut = async () => {
		signOut(auth)
			.then(() => {
				setUser({} as User)
				navigate('/auth')
			})
			.catch(error => {
				const err = error as Error
				toast.error(err.message)
			})
	}

	return { signIn, signUp, logOut, isLoading, user, setUser }
}

export default useAuth
