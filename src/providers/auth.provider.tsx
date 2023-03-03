import { useEffect, createContext, useMemo, ReactNode } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

import useAuth from '../hooks/useAuth'
import { IAuth } from '../interfaces/auth.interface'

export const AuthContext = createContext<IAuth>({
	user: {} as User,
})

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate()
	const { user, setUser } = useAuth()

	const value = useMemo(() => ({ user }), [user])

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user)
			} else {
				setUser({} as User)
				navigate('/auth')
			}
		})
	}, [navigate, setUser])

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
