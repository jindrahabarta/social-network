import { initializeApp } from 'firebase/app'

import { Firestore, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// konfigurace firebase
const firebaseConfig = {
    apiKey: 'AIzaSyCY3EpgCYJLlmdIH_2P__y0j0BnpaH5wOo',
    authDomain: 'social-network-184de.firebaseapp.com',
    projectId: 'social-network-184de',
    storageBucket: 'social-network-184de.appspot.com',
    messagingSenderId: '79000731238',
    appId: '1:79000731238:web:79e45f6e45f062142237a7',
}
// propojeni s firebase
const useDb = () => {
    initializeApp(firebaseConfig)
    const db = getFirestore()
    const dbImg = getStorage()
    return { db, dbImg }
}

export default useDb
