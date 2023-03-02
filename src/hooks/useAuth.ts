import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	User,
} from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
		} catch (error) {
			console.log(error)
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
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	const logOut = async () => {}

	return { signIn, signUp, logOut, isLoading }
}

export default useAuth
