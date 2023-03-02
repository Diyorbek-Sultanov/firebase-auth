// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCCeZOaGgaNn0dYk064iDKmkoPknf2Vp9k',
	authDomain: 'react-auth-274cc.firebaseapp.com',
	projectId: 'react-auth-274cc',
	storageBucket: 'react-auth-274cc.appspot.com',
	messagingSenderId: '180350656814',
	appId: '1:180350656814:web:d836b47768ddf3eab55abf',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { db, auth }
