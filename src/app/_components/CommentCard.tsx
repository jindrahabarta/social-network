import React, { useState } from 'react'
import useDb from '../_utils/useDb'
import { doc, setDoc } from 'firebase/firestore'

const CommentCard = ({ text, likes, id }: any) => {
    const [commentLike, setCommentLike] = useState<number>(likes)
    const { db, dbImg } = useDb()

    const sendLike = () => {
        console.log(commentLike)
        setCommentLike((prev) => prev + 1)

        setDoc(
            doc(db, 'posts', id),
            {
                comments: [{ comment: text, likes: likes }],
            },
            { merge: true }
        )
    }
    return (
        <div className="w-full  flex gap-2   ">
            <span>
                <div className="bg-mezoGray rounded-full w-8 h-8"></div>
            </span>

            <div className="  flex flex-col ">
                <div className="input rounded-3xl py-3 px-5">
                    <h5 className="font-bold">Jindra habarta</h5>
                    <p>{text}</p>
                </div>

                <div
                    onClick={() => sendLike()}
                    className="px-5 hover:cursor-pointer w-fit group"
                >
                    <p className="text-sm text-mezoGray group-hover:text-facebookBlue duration-150">
                        Like ({likes})
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CommentCard
