import React, { useState } from 'react'
import LikeIcon from '../icons/LikeIcon'
import Link from 'next/link'
import useDb from '../_utils/useDb'
import { doc, setDoc } from 'firebase/firestore'
import CommentCard from './CommentCard'
import moment from 'moment'

const PostCard = ({ data }: any) => {
    const { db, dbImg } = useDb()
    const [commentInput, setCommentInput] = useState('')
    const [like, setLike] = useState<number>(data.likes)
    const [liked, setLiked] = useState(false)
    const [comments, setComments] = useState<any>(data.comments)
    const date = data.createdAt && moment(data.createdAt.toDate()).fromNow()

    // Odeslání formuláře pro komentář

    const sendComment = (e: any) => {
        e.preventDefault()
        const comment = {
            comment: commentInput,
            likes: 0,
        }

        const newComments = data.comments
            ? [comment, ...data.comments]
            : [comment]
        setDoc(
            doc(db, 'posts', data.id),
            {
                comments: newComments,
            },
            { merge: true }
        )

        setCommentInput('')
    }

    const likeIt = async () => {
        if (liked) {
            setLiked(false)
            setLike((prev) => prev - 1)
        } else {
            setLiked(true)
            setLike((prev) => prev + 1)
        }

        await setDoc(
            doc(db, 'posts', data.id),
            { likes: liked ? like - 1 : like + 1 },
            { merge: true }
        )
    }

    return (
        <div className="p-4 card rounded-2xl flex flex-col gap-4">
            <Link href="/" className="flex gap-2 group w-fit">
                <div className="bg-lightGray w-10 h-10 rounded-xl"></div>
                <div>
                    <p className="font-bold dark:group-hover:text-mezoGray duration-200">
                        Jindra Habartaf
                    </p>

                    <p className=" dark:text-lightGray text-sm">{date}</p>
                </div>
            </Link>
            <div>{}</div>

            <div>
                <p>{data.text}</p>
            </div>

            {data.image && (
                <img
                    className="rounded-xl max-h-96 w-full object-cover"
                    src={data.image}
                    alt={data.image}
                />
            )}

            <div className="flex justify-between items-center hover:cursor-pointer">
                <div
                    className=" p-2 rounded-xl flex items-center gap-2 hover:bg-lightGray hover:bg-opacity-20 duration-200"
                    onClick={likeIt}
                >
                    <LikeIcon liked={liked} className="w-6"></LikeIcon>
                    <p>Like</p>
                </div>

                <div className="flex gap-2 justify-end">
                    {data.likes && data.likes > 0 ? (
                        <p className=" dark:text-lightGray text-sm">
                            {data.likes} Likes
                        </p>
                    ) : (
                        <p className=" dark:text-lightGray text-sm">0 Likes</p>
                    )}

                    {data.comments && data.comments.length > 0 ? (
                        data.comments.length != 1 ? (
                            <p className=" dark:text-lightGray text-sm">
                                {data.comments.length} Comments
                            </p>
                        ) : (
                            <p className=" dark:text-lightGray text-sm">
                                {data.comments.length} Comment
                            </p>
                        )
                    ) : (
                        <p className=" dark:text-lightGray text-sm">
                            0 Comments
                        </p>
                    )}
                </div>
            </div>

            <div className="flex gap-2 w-full">
                <form className="flex w-full" onSubmit={sendComment}>
                    <input
                        type="text"
                        value={commentInput}
                        required
                        onChange={(e) => setCommentInput(e.target.value)}
                        placeholder="Add a comment..."
                        className="px-3 h-10 w-full outline-none rounded-3xl rounded-br-none rounded-tr-none input"
                    />
                    <input
                        type="submit"
                        value="Post"
                        className="hover:cursor-pointer rounded-3xl rounded-tl-none rounded-bl-none input px-3"
                    />
                </form>
            </div>
            <div className=" max-h-80 overflow-y-auto">
                {data.comments &&
                    data.comments.length > 0 &&
                    data.comments.map((comment: any, index: number) => (
                        <CommentCard
                            key={index}
                            text={comment.comment}
                            likes={comment.likes}
                            id={data.id}
                        ></CommentCard>
                    ))}
            </div>
        </div>
    )
}

export default PostCard
