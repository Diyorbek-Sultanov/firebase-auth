import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './navbar.module.scss'

const Navbar: FC = () => {
	const navigate = useNavigate()

	return (
		<nav className={styles.nav}>
			<Link to={'/'} className={styles.nav__logo}>
				Firebase Auth
			</Link>

			<button className={styles.nav__btn} onClick={() => navigate('/auth')}>
				Auth
			</button>
		</nav>
	)
}

export default Navbar
