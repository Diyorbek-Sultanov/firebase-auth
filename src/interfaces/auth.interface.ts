import { User } from 'firebase/auth'

export interface IAuth {
	user: User
	isLoading: boolean
}
