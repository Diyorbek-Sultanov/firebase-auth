import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home'

const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route path='auth' element={<Auth />} />
			</Route>
		</Routes>
	)
}

export default App
