'use client'
import React, { useState } from 'react'
import useDb from '../_utils/useDb'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import GalleryUploadIcon from '../icons/GalleryUploadIcon'

const { db, dbImg } = useDb()

const AddStatusCard = () => {
    const [inputText, setInputText] = useState<string>('')
    const [imageUrl, setImageUrl] = useState<string>('')
    const [show, setShow] = useState(false)

    const SendPost = (e: any) => {
        e.preventDefault()

        if (show === false) {
            setImageUrl('')
            console.log('show closed')
            addDoc(collection(db, 'posts'), {
                createdAt: serverTimestamp(),
                text: inputText,
                likes: 0,
            })

            setInputText('')
        } else {
            addDoc(collection(db, 'posts'), {
                createdAt: serverTimestamp(),
                text: inputText,
                image: imageUrl,
                likes: 0,
            })
            console.log('odesláno druhou funkci')
            setInputText('')
            setImageUrl('')
        }

        setShow(false)
    }

    return (
        <div className="p-4 card rounded-2xl flex justify-between gap-4">
            <div className="flex gap-2 w-full">
                <span
                    onClick={() => {
                        show ? setShow(false) : (setShow(true), setImageUrl(''))
                    }}
                >
                    <div className="bg-lightGray bg-opacity-10 w-10 h-10 rounded-xl flex justify-center items-center hover:bg-opacity-20 hover:cursor-pointer">
                        <GalleryUploadIcon className="w-6" />
                    </div>
                </span>

                <form
                    onSubmit={SendPost}
                    className="flex flex-col gap-2 w-full"
                >
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Add a post..."
                            value={inputText}
                            required
                            onChange={(e) => setInputText(e.target.value)}
                            className="px-3 h-10 w-full outline-none rounded-3xl rounded-br-none rounded-tr-none input"
                        />
                        <input
                            type="submit"
                            value="Post"
                            className="hover:cursor-pointer rounded-3xl rounded-tl-none rounded-bl-none input px-3"
                        />
                    </div>
                    {show && (
                        <div>
                            <input
                                type="text"
                                placeholder="Place image url. https://..."
                                value={imageUrl}
                                required
                                pattern="^https:\/\/.*"
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="px-3 h-10 w-full outline-none rounded-3xl input"
                            />
                        </div>
                    )}
                    {/* {urlError && (
                        <p className="text-sm text-red-500">
                            Zadej správné url!
                        </p>
                    )} */}
                </form>
            </div>
        </div>
    )
}

export default AddStatusCard
