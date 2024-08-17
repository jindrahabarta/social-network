'use client'
import useDb from './useDb'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const useFetchCollection = (collectionName) => {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const { db, dbImg } = useDb()

    useEffect(() => {
        // vytvorim query do kolekce todos
        const q = query(
            collection(db, collectionName),
            orderBy('createdAt', 'desc')
        )

        // vrati mi aktualni data z databaze, pokud se tam neco zmeni
        onSnapshot(
            q,
            (querySnapshot) => {
                const data = []

                // potrebuju pretransformovat data do pouzitelne podoby a dostat do noveho pole
                querySnapshot.forEach((doc) => {
                    const item = { ...doc.data(), id: doc.id }

                    data.push(item)
                })

                setData(data)
                setLoaded(true)
                setError(false)
            },
            () => {
                setError(true)
                setLoaded(true)
            }
        )
    }, [])
    return { data, loaded, error }
}

export default useFetchCollection
