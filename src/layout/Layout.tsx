import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const Layout: FC = () => {
	return (
		<div className='container h-screen overflow-hidden mx-auto'>
			<Navbar />
			<main className='mt-14'>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
