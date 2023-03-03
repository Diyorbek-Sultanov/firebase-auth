import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './navbar.module.scss'
import Button from '../../ui/Button'
import useAuth from '../../hooks/useAuth'

const Navbar: FC = () => {
	const navigate = useNavigate()
	const { logOut } = useAuth()

	return (
		<nav className={styles.nav}>
			<Link to={'/'} className={styles.nav__logo}>
				Firebase Auth
			</Link>

			<div>
				<Button
					text='Auth'
					className={styles.nav__btn}
					onClick={() => navigate('/auth')}
				/>
				<Button
					text='Log out'
					className={styles.nav__btn_danger}
					onClick={logOut}
				/>
			</div>
		</nav>
	)
}

export default Navbar
