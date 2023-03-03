import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './providers/auth.provider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<Toaster />
				<App />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
